package org.wyona.yanel.core.util;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.apache.log4j.Logger;

/**
 *
 */
public class MailUtil {
    private static Logger log = Logger.getLogger(MailUtil.class);

    public static final String STATUS = "status";
    public static final String MESSAGE = "message";

    /**
     * @param from From address
     * @param from To address
     * @param subject Subject of email
     * @param content Body of email
     */
    public static void send(String from, String to, String subject, String content) throws AddressException, MessagingException {
        send(null, -1, from, to, subject, content);
    }

    /**
     *
     */
    public static void send(String smtpHost, int smtpPort, String from, String to, String subject, String content) throws AddressException, MessagingException {
        // Create a mail session
        Session session = null;
        if (smtpHost != null && smtpPort >= 0) {
            java.util.Properties props = new java.util.Properties();
            props.put("mail.smtp.host", smtpHost);
            props.put("mail.smtp.port", "" + smtpPort);
            session = Session.getInstance(props, null);
            log.warn("Use specific mail session: " + session.getProperty("mail.smtp.host") + ":" + session.getProperty("mail.smtp.port"));
        } else {
            java.util.Properties props = new java.util.Properties();
            props.put("mail.smtp.host", "mail.foo.bar"); // Dummy value
            props.put("mail.smtp.port", "37"); // Dummy value
            session = Session.getDefaultInstance(props, null);
            log.warn("Use default mail session: " + session.getProperty("mail.smtp.host") + ":" + session.getProperty("mail.smtp.port"));
        }

        // Construct the message
        Message msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress(from));
        msg.setRecipient(Message.RecipientType.TO, new InternetAddress(to));
        msg.setSubject(subject);
        msg.setText(content);

        // Send the message
        Transport.send(msg);
    }
}
