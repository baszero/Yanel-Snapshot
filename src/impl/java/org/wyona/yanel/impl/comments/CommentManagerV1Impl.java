package org.wyona.yanel.impl.comments;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import org.wyona.yanel.core.attributes.commentable.CommentManagerV1;
import org.wyona.yanel.core.attributes.commentable.CommentStatusV1;
import org.wyona.yanel.core.attributes.commentable.CommentV1;
import org.wyona.yanel.core.attributes.commentable.CommentsV1;
import org.wyona.yanel.core.map.Realm;
import org.wyona.yanel.core.workflow.Workflow;

import org.wyona.yarep.util.YarepXMLBindingUtil;

/**
 * Comment manager version 1 implementation
 */
public class CommentManagerV1Impl implements CommentManagerV1 {
    
    private static Logger log = Logger.getLogger(CommentManagerV1Impl.class);
    public static final String LOCK = ""; // used to synchronize concurrent access
    
    //TODO Should be configurable
    private static final String REPOSITORY_BASE_PATH = "/comments/";

    /**
     * @see org.wyona.yanel.core.attributes.commentable.CommentManagerV1#hasComments(Realm , String)
     */
    public boolean hasComments(Realm realm, String path) throws Exception {
        if (realm.getRepository().existsNode(getAbsoluteYarepPathOfComment(path))) {
            return true;
        }
        return false;
    }

    /**
     * @see org.wyona.yanel.core.attributes.commentable.CommentManagerV1#getAllComments(Realm , String)
     */
    public CommentsV1 getAllComments(Realm realm, String path) throws Exception {
        CommentsV1 result = null;
        try {
            if (path != null && !"/".equals(path)) {
                if (path.startsWith("/")) {
                    path = path.substring(1);
                }
                result = YarepXMLBindingUtil.readJAXBDataObject(CommentsV1.class, realm.getRepository(), getAbsoluteYarepPathOfComment(path));
            } else {
                log.error("Invalid path received: "+path);
                // TODO throw error?
            }
        } catch (Exception e) {
            log.error("Error in retrieving all comments for "+path);
            log.error(e,e);
        }
        return result;
    }

    @Override
    public CommentsV1 getPublicComments(Realm realm, String path) throws Exception {
        CommentsV1 comments = getAllComments(realm, path);
        List<CommentV1> publicComments = new ArrayList<CommentV1>();
        for (CommentV1 comment: comments.getComments()) {
            if (comment.getCommentStatus() == CommentStatusV1.PUBLIC) {
                publicComments.add(comment);
            }
        }
        comments.setComments(publicComments);
        return comments;
    }

    /**
     * @see org.wyona.yanel.core.attributes.commentable#addComment(Realm, String, CommentV1)
     */
    public boolean addComment(Realm realm, String path, CommentV1 newComment) throws Exception {
        boolean success = false;
        if (path != null && !"/".equals(path)) {
            if (path.startsWith("/")) {
                path = path.substring(1);
            }
            synchronized (LOCK) {
                String commentsPath = getAbsoluteYarepPathOfComment(path);
                if (!realm.getRepository().existsNode(commentsPath)) {
                    log.warn("No comments node exists yet, hence create comments node ...");
                    CommentsV1 comments = new CommentsV1();
                    YarepXMLBindingUtil.writeJAXBDataObject(realm.getRepository(), comments, getAbsoluteYarepPathOfComment(path));
                }
                CommentsV1 comments = YarepXMLBindingUtil.readJAXBDataObject(CommentsV1.class, realm.getRepository(), getAbsoluteYarepPathOfComment(path));
                comments.getComments().add(newComment);
                YarepXMLBindingUtil.writeJAXBDataObject(realm.getRepository(), comments, getAbsoluteYarepPathOfComment(path));

                Workflow workflow = getWorkflow();
                if (workflow != null) {
                    org.wyona.yarep.core.Node commentsNode = realm.getRepository().getNode(getAbsoluteYarepPathOfComment(path)); // TODO: Use comment node instead comments node
                    //org.wyona.yanel.core.workflow.WorkflowHelper.setWorkflowState(commentsNode, workflow.getInitialState());
                    //org.wyona.yanel.core.workflow.WorkflowHelper.doTransition(commentsNode, "submit-for-review", workflow);
                }
            }
        } else {
            log.error("Invalid path received: " + path);
        }
        
        return success;
    }
    
    /**
     * Get repository path of comment
     */
    private String getAbsoluteYarepPathOfComment(String pathOfReferencedDoc) {
        return REPOSITORY_BASE_PATH + pathOfReferencedDoc;
    }

    /**
     * Get workflow
     */
    private Workflow getWorkflow() {
        //return org.wyona.yanel.core.workflow.Workflow workflow = new org.wyona.yanel.core.workflow.WorkflowBuilder().buildWorkflow(workflowAsIS);
        org.wyona.yanel.core.workflow.impl.WorkflowImpl workflow = new org.wyona.yanel.core.workflow.impl.WorkflowImpl();

        String states[] = {"draft", "review", "approved"};
        workflow.setStates(states);
        workflow.setInitialState("draft");

        org.wyona.yanel.core.workflow.impl.TransitionImpl submitT = new org.wyona.yanel.core.workflow.impl.TransitionImpl("submit-for-review", "draft", "review");
        org.wyona.yanel.core.workflow.impl.TransitionImpl approveT = new org.wyona.yanel.core.workflow.impl.TransitionImpl("approve", "review", "approved");
        org.wyona.yanel.core.workflow.Transition[] transitions = new org.wyona.yanel.core.workflow.Transition[2];
        transitions[0] = submitT;
        transitions[1] = approveT;
        workflow.setTransitions(transitions);

        return workflow;
    }
}
