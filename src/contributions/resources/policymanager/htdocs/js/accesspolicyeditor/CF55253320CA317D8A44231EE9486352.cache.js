(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,sF='com.google.gwt.core.client.',tF='com.google.gwt.http.client.',uF='com.google.gwt.i18n.client.',vF='com.google.gwt.lang.',wF='com.google.gwt.user.client.',xF='com.google.gwt.user.client.impl.',yF='com.google.gwt.user.client.ui.',zF='com.google.gwt.user.client.ui.impl.',AF='com.google.gwt.xml.client.',BF='com.google.gwt.xml.client.impl.',CF='java.io.',DF='java.lang.',EF='java.util.',FF='org.wyona.security.gwt.accesspolicyeditor.client.',aG='org.wyona.yanel.gwt.client.';function nC(){}
function cv(a){return this===a;}
function dv(){return nw(this);}
function ev(){return this.tN+'@'+this.hC();}
function av(){}
_=av.prototype={};_.eQ=cv;_.hC=dv;_.tS=ev;_.toString=function(){return this.tS();};_.tN=DF+'Object';_.tI=1;function w(a){return a==null?null:a.tN;}
var y=null;function B(a){return a==null?0:a.$H?a.$H:(a.$H=D());}
function C(a){return a==null?0:a.$H?a.$H:(a.$H=D());}
function D(){return ++E;}
var E=0;function pw(b,a){b.b=a;return b;}
function rw(b,a){if(b.a!==null){throw mu(new lu(),"Can't overwrite cause");}if(a===b){throw ju(new iu(),'Self-causation not permitted');}b.a=a;return b;}
function sw(a){tw(a,(lw(),mw));}
function tw(e,d){var a,b,c;c=kv(new jv());b=e;while(b!==null){a=b.b;if(b!==e){nv(c,'Caused by: ');}nv(c,b.tN);nv(c,': ');nv(c,a===null?'(No exception detail)':a);nv(c,'\n');b=b.a;}}
function uw(){var a,b;a=w(this);b=this.b;if(b!==null){return a+': '+b;}else{return a;}}
function ow(){}
_=ow.prototype=new av();_.tS=uw;_.tN=DF+'Throwable';_.tI=3;_.a=null;_.b=null;function gu(b,a){pw(b,a);return b;}
function fu(){}
_=fu.prototype=new ow();_.tN=DF+'Exception';_.tI=4;function gv(b,a){gu(b,a);return b;}
function fv(){}
_=fv.prototype=new fu();_.tN=DF+'RuntimeException';_.tI=5;function ab(c,b,a){gv(c,'JavaScript '+b+' exception: '+a);return c;}
function F(){}
_=F.prototype=new fv();_.tN=sF+'JavaScriptException';_.tI=6;function eb(b,a){if(!ee(a,2)){return false;}return jb(b,de(a,2));}
function fb(a){return B(a);}
function gb(){return [];}
function hb(){return function(){};}
function ib(){return {};}
function kb(a){return eb(this,a);}
function jb(a,b){return a===b;}
function lb(){return fb(this);}
function nb(){return mb(this);}
function mb(a){if(a.toString)return a.toString();return '[object]';}
function cb(){}
_=cb.prototype=new av();_.eQ=kb;_.hC=lb;_.tS=nb;_.tN=sF+'JavaScriptObject';_.tI=7;function rc(b,d,c,a){if(d===null){throw new zu();}if(a===null){throw new zu();}if(c<0){throw new iu();}b.a=c;b.c=d;if(c>0){b.b=vb(new ub(),b,a);qg(b.b,c);}else{b.b=null;}return b;}
function tc(a){var b;if(a.c!==null){b=a.c;a.c=null;dd(b);sc(a);}}
function sc(a){if(a.b!==null){mg(a.b);}}
function vc(e,a){var b,c,d,f;if(e.c===null){return;}sc(e);f=e.c;e.c=null;b=ed(f);if(b!==null){c=gv(new fv(),b);a.kb(e,c);}else{d=yc(f);a.mb(e,d);}}
function wc(b,a){if(b.c===null){return;}tc(b);a.kb(b,oc(new nc(),b,b.a));}
function xc(b){var a;if(b.c===null){return false;}a=fd(b.c);switch(a){case 1:case 2:case 3:return true;}return false;}
function yc(b){var a;a=qb(new pb(),b);return a;}
function zc(a){var b;b=y;{vc(this,a);}}
function ob(){}
_=ob.prototype=new av();_.s=zc;_.tN=tF+'Request';_.tI=0;_.a=0;_.b=null;_.c=null;function Ac(){}
_=Ac.prototype=new av();_.tN=tF+'Response';_.tI=0;function qb(a,b){a.a=b;return a;}
function sb(a){return hd(a.a);}
function tb(a){return gd(a.a);}
function pb(){}
_=pb.prototype=new Ac();_.tN=tF+'Request$1';_.tI=0;function ng(){ng=nC;xg=Ey(new Cy());{wg();}}
function lg(a){ng();return a;}
function mg(a){if(a.d){rg(a.e);}else{sg(a.e);}iz(xg,a);}
function og(a){if(!a.d){iz(xg,a);}a.ub();}
function qg(b,a){if(a<=0){throw ju(new iu(),'must be positive');}mg(b);b.d=false;b.e=ug(b,a);az(xg,b);}
function pg(b,a){if(a<=0){throw ju(new iu(),'must be positive');}mg(b);b.d=true;b.e=tg(b,a);az(xg,b);}
function rg(a){ng();$wnd.clearInterval(a);}
function sg(a){ng();$wnd.clearTimeout(a);}
function tg(b,a){ng();return $wnd.setInterval(function(){b.t();},a);}
function ug(b,a){ng();return $wnd.setTimeout(function(){b.t();},a);}
function vg(){var a;a=y;{og(this);}}
function wg(){ng();Bg(new hg());}
function gg(){}
_=gg.prototype=new av();_.t=vg;_.tN=wF+'Timer';_.tI=8;_.d=false;_.e=0;var xg;function wb(){wb=nC;ng();}
function vb(b,a,c){wb();b.a=a;b.b=c;lg(b);return b;}
function xb(){wc(this.a,this.b);}
function ub(){}
_=ub.prototype=new gg();_.ub=xb;_.tN=tF+'Request$2';_.tI=9;function Fb(){Fb=nC;dc=Ab(new zb(),'GET');ec=Ab(new zb(),'POST');fc=ji(new ii());}
function Db(b,a,c){Fb();Eb(b,a===null?null:a.a,c);return b;}
function Eb(b,a,c){Fb();Ec('httpMethod',a);Ec('url',c);b.b=a;b.d=c;return b;}
function ac(g,d,a){var b,c,e,f,h;h=li(fc);{b=id(h,g.b,g.d,true);}if(b!==null){e=lc(new kc(),g.d);rw(e,ic(new hc(),b));throw e;}cc(g,h);c=rc(new ob(),h,g.c,a);f=jd(h,c,d,a);if(f!==null){throw ic(new hc(),f);}return c;}
function bc(b,a,c){Ec('header',a);Ec('value',c);if(b.a===null){b.a=sA(new wz());}BA(b.a,a,c);}
function cc(e,f){var a,b,c,d;if(e.a!==null&&e.a.c>0){a=yA(e.a);d=nA(a);while(fA(d)){c=gA(d);b=kd(f,de(c.A(),1),de(c.C(),1));if(b!==null){throw ic(new hc(),b);}}}else{kd(f,'Content-Type','text/plain; charset=utf-8');}}
function yb(){}
_=yb.prototype=new av();_.tN=tF+'RequestBuilder';_.tI=0;_.a=null;_.b=null;_.c=0;_.d=null;var dc,ec,fc;function Ab(b,a){b.a=a;return b;}
function Cb(){return this.a;}
function zb(){}
_=zb.prototype=new av();_.tS=Cb;_.tN=tF+'RequestBuilder$Method';_.tI=0;_.a=null;function ic(b,a){gu(b,a);return b;}
function hc(){}
_=hc.prototype=new fu();_.tN=tF+'RequestException';_.tI=10;function lc(a,b){ic(a,'The URL '+b+' is invalid or violates the same-origin security restriction');return a;}
function kc(){}
_=kc.prototype=new hc();_.tN=tF+'RequestPermissionException';_.tI=11;function oc(b,a,c){ic(b,qc(c));return b;}
function qc(a){return 'A request timeout has expired after '+tu(a)+' ms';}
function nc(){}
_=nc.prototype=new hc();_.tN=tF+'RequestTimeoutException';_.tI=12;function Ec(a,b){Fc(a,b);if(0==zv(aw(b))){throw ju(new iu(),a+' can not be empty');}}
function Fc(a,b){if(null===b){throw Au(new zu(),a+' can not be null');}}
function dd(a){a.onreadystatechange=ni;a.abort();}
function ed(b){try{if(b.status===undefined){return 'XmlHttpRequest.status == undefined, please see Safari bug '+'http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';}return null;}catch(a){return 'Unable to read XmlHttpRequest.status; likely causes are a '+'networking error or bad cross-domain request. Please see '+'https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more '+'details';}}
function fd(a){return a.readyState;}
function gd(a){return a.responseText;}
function hd(a){return a.status;}
function id(e,c,d,b){try{e.open(c,d,b);return null;}catch(a){return a.message||a.toString();}}
function jd(e,c,d,b){e.onreadystatechange=function(){if(e.readyState==cd){e.onreadystatechange=ni;c.s(b);}};try{e.send(d);return null;}catch(a){e.onreadystatechange=ni;return a.message||a.toString();}}
function kd(d,b,c){try{d.setRequestHeader(b,c);return null;}catch(a){return a.message||a.toString();}}
var cd=4;function pd(){pd=nC;sd=sA(new wz());}
function md(b,a){pd();if(a===null||wv('',a)){throw ju(new iu(),'Cannot create a Dictionary with a null or empty name');}b.b='Dictionary '+a;od(b,a);if(b.a===null){throw AB(new zB(),"Cannot find JavaScript object with the name '"+a+"'",a,null);}return b;}
function nd(b,a){for(x in b.a){a.m(x);}}
function od(c,b){try{if(typeof $wnd[b]!='object'){ud(b);}c.a=$wnd[b];}catch(a){ud(b);}}
function qd(b,a){var c=b.a[a];if(c==null|| !Object.prototype.hasOwnProperty.call(b.a,a)){b.tb(a);}return String(c);}
function rd(b){var a;a=oB(new nB());nd(b,a);return a;}
function td(a){pd();var b;b=de(zA(sd,a),3);if(b===null){b=md(new ld(),a);BA(sd,a,b);}return b;}
function vd(b){var a,c;c=rd(this);a="Cannot find '"+b+"' in "+this;if(c.a.c<20){a+='\n keys found: '+c;}throw AB(new zB(),a,this.b,b);}
function ud(a){pd();throw AB(new zB(),"'"+a+"' is not a JavaScript object and cannot be used as a Dictionary",null,a);}
function wd(){return this.b;}
function ld(){}
_=ld.prototype=new av();_.tb=vd;_.tS=wd;_.tN=uF+'Dictionary';_.tI=13;_.a=null;_.b=null;var sd;function yd(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function Ad(a,b,c){return a[b]=c;}
function Bd(b,a){return b[a];}
function Cd(a){return a.length;}
function Ed(e,d,c,b,a){return Dd(e,d,c,b,0,Cd(b),a);}
function Dd(j,i,g,c,e,a,b){var d,f,h;if((f=Bd(c,e))<0){throw new xu();}h=yd(new xd(),f,Bd(i,e),Bd(g,e),j);++e;if(e<a){j=Ev(j,1);for(d=0;d<f;++d){Ad(h,d,Dd(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){Ad(h,d,b);}}return h;}
function Fd(a,b,c){if(c!==null&&a.b!=0&& !ee(c,a.b)){throw new vt();}return Ad(a,b,c);}
function xd(){}
_=xd.prototype=new av();_.tN=vF+'Array';_.tI=0;function ce(b,a){return !(!(b&&he[b][a]));}
function de(b,a){if(b!=null)ce(b.tI,a)||ge();return b;}
function ee(b,a){return b!=null&&ce(b.tI,a);}
function ge(){throw new bu();}
function fe(a){if(a!==null){throw new bu();}return a;}
function ie(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var he;function le(a){if(ee(a,4)){return a;}return ab(new F(),ne(a),me(a));}
function me(a){return a.message;}
function ne(a){return a.name;}
function pe(){pe=nC;qf=Ey(new Cy());{lf=new hh();qh(lf);}}
function qe(b,a){pe();sh(lf,b,a);}
function re(a,b){pe();return mh(lf,a,b);}
function se(){pe();return uh(lf,'button');}
function te(){pe();return uh(lf,'div');}
function ue(){pe();return vh(lf,'checkbox');}
function ve(){pe();return vh(lf,'text');}
function we(){pe();return uh(lf,'label');}
function xe(a){pe();return wh(lf,a);}
function ye(){pe();return uh(lf,'span');}
function ze(){pe();return uh(lf,'tbody');}
function Ae(){pe();return uh(lf,'td');}
function Be(){pe();return uh(lf,'tr');}
function Ce(){pe();return uh(lf,'table');}
function Fe(b,a,d){pe();var c;c=y;{Ee(b,a,d);}}
function Ee(b,a,c){pe();var d;if(a===pf){if(bf(b)==8192){pf=null;}}d=De;De=b;try{c.hb(b);}finally{De=d;}}
function af(b,a){pe();xh(lf,b,a);}
function bf(a){pe();return yh(lf,a);}
function cf(a){pe();nh(lf,a);}
function df(a){pe();return oh(lf,a);}
function ef(a){pe();return zh(lf,a);}
function hf(a,b){pe();return Ch(lf,a,b);}
function ff(a,b){pe();return Ah(lf,a,b);}
function gf(a,b){pe();return Bh(lf,a,b);}
function jf(a){pe();return Dh(lf,a);}
function kf(a){pe();return ph(lf,a);}
function mf(c,b,d,a){pe();jh(lf,c,b,d,a);}
function nf(a){pe();var b,c;c=true;if(qf.b>0){b=fe(ez(qf,qf.b-1));if(!(c=null.Ab())){af(a,true);cf(a);}}return c;}
function of(b,a){pe();Eh(lf,b,a);}
function tf(a,b,c){pe();bi(lf,a,b,c);}
function rf(a,b,c){pe();Fh(lf,a,b,c);}
function sf(a,b,c){pe();ai(lf,a,b,c);}
function uf(a,b){pe();ci(lf,a,b);}
function vf(a,b){pe();di(lf,a,b);}
function wf(a,b){pe();ei(lf,a,b);}
function xf(b,c,a){pe();fi(lf,b,c,a);}
function yf(b,a,c){pe();gi(lf,b,a,c);}
function zf(a,b){pe();rh(lf,a,b);}
function Af(a){pe();return hi(lf,a);}
var De=null,lf=null,pf=null,qf;function Df(a){if(ee(a,5)){return re(this,de(a,5));}return eb(ie(this,Bf),a);}
function Ef(){return fb(ie(this,Bf));}
function Ff(){return Af(this);}
function Bf(){}
_=Bf.prototype=new cb();_.eQ=Df;_.hC=Ef;_.tS=Ff;_.tN=wF+'Element';_.tI=14;function dg(a){return eb(ie(this,ag),a);}
function eg(){return fb(ie(this,ag));}
function fg(){return df(this);}
function ag(){}
_=ag.prototype=new cb();_.eQ=dg;_.hC=eg;_.tS=fg;_.tN=wF+'Event';_.tI=15;function jg(){while((ng(),xg).b>0){mg(de(ez((ng(),xg),0),6));}}
function kg(){return null;}
function hg(){}
_=hg.prototype=new av();_.ob=jg;_.pb=kg;_.tN=wF+'Timer$1';_.tI=16;function Ag(){Ag=nC;Dg=Ey(new Cy());fh=Ey(new Cy());{bh();}}
function Bg(a){Ag();az(Dg,a);}
function Cg(a){Ag();$wnd.alert(a);}
function Eg(){Ag();var a,b;for(a=Dg.cb();a.F();){b=de(a.eb(),7);b.ob();}}
function Fg(){Ag();var a,b,c,d;d=null;for(a=Dg.cb();a.F();){b=de(a.eb(),7);c=b.pb();{d=c;}}return d;}
function ah(){Ag();var a,b;for(a=fh.cb();a.F();){b=fe(a.eb());null.Ab();}}
function bh(){Ag();__gwt_initHandlers(function(){eh();},function(){return dh();},function(){ch();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ch(){Ag();var a;a=y;{Eg();}}
function dh(){Ag();var a;a=y;{return Fg();}}
function eh(){Ag();var a;a=y;{ah();}}
var Dg,fh;function sh(c,b,a){b.appendChild(a);}
function uh(b,a){return $doc.createElement(a);}
function vh(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function wh(c,a){var b;b=uh(c,'select');if(a){Fh(c,b,'multiple',true);}return b;}
function xh(c,b,a){b.cancelBubble=a;}
function yh(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function zh(c,b){var a=$doc.getElementById(b);return a||null;}
function Ch(d,a,b){var c=a[b];return c==null?null:String(c);}
function Ah(c,a,b){return !(!a[b]);}
function Bh(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function Dh(b,a){return a.__eventBits||0;}
function Eh(c,b,a){b.removeChild(a);}
function bi(c,a,b,d){a[b]=d;}
function Fh(c,a,b,d){a[b]=d;}
function ai(c,a,b,d){a[b]=d;}
function ci(c,a,b){a.__listener=b;}
function di(c,a,b){if(!b){b='';}a.innerHTML=b;}
function ei(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function fi(e,c,d,a){var b=c.options[a];b.text=d;}
function gi(c,b,a,d){b.style[a]=d;}
function hi(b,a){return a.outerHTML;}
function gh(){}
_=gh.prototype=new av();_.tN=xF+'DOMImpl';_.tI=0;function mh(c,a,b){return a==b;}
function nh(b,a){a.preventDefault();}
function oh(b,a){return a.toString();}
function ph(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function qh(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){Fe(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!nf(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)Fe(b,a,c);};$wnd.__captureElem=null;}
function rh(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function kh(){}
_=kh.prototype=new gh();_.tN=xF+'DOMImplStandard';_.tI=0;function jh(e,c,d,f,a){var b=new Option(d,f);if(a== -1||a>c.children.length-1){c.appendChild(b);}else{c.insertBefore(b,c.children[a]);}}
function hh(){}
_=hh.prototype=new kh();_.tN=xF+'DOMImplSafari';_.tI=0;function ji(a){ni=hb();return a;}
function li(a){return mi(a);}
function mi(a){return new XMLHttpRequest();}
function ii(){}
_=ii.prototype=new av();_.tN=xF+'HTTPRequestImpl';_.tI=0;var ni=null;function sn(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function tn(b,a){if(b.j!==null){sn(b,b.j,a);}b.j=a;}
function un(b,a){xn(b.j,a);}
function vn(b,a){zf(b.w(),a|jf(b.w()));}
function wn(){return this.j;}
function xn(a,b){tf(a,'className',b);}
function yn(){if(this.j===null){return '(null handle)';}return Af(this.j);}
function qn(){}
_=qn.prototype=new av();_.w=wn;_.tS=yn;_.tN=yF+'UIObject';_.tI=0;_.j=null;function uo(a){if(ee(a.i,10)){de(a.i,10).sb(a);}else if(a.i!==null){throw mu(new lu(),"This widget's parent does not implement HasWidgets");}}
function vo(b,a){if(b.ab()){uf(b.w(),null);}tn(b,a);if(b.ab()){uf(a,b);}}
function wo(c,b){var a;a=c.i;if(b===null){if(a!==null&&a.ab()){c.jb();}c.i=null;}else{if(a!==null){throw mu(new lu(),'Cannot set a new parent without first clearing the old parent');}c.i=b;if(b.ab()){c.gb();}}}
function xo(){}
function yo(){}
function zo(){return this.h;}
function Ao(){if(this.ab()){throw mu(new lu(),"Should only call onAttach when the widget is detached from the browser's document");}this.h=true;uf(this.w(),this);this.p();this.lb();}
function Bo(a){}
function Co(){if(!this.ab()){throw mu(new lu(),"Should only call onDetach when the widget is attached to the browser's document");}try{this.nb();}finally{this.q();uf(this.w(),null);this.h=false;}}
function Do(){}
function Eo(){}
function Fo(a){vo(this,a);}
function ao(){}
_=ao.prototype=new qn();_.p=xo;_.q=yo;_.ab=zo;_.gb=Ao;_.hb=Bo;_.jb=Co;_.lb=Do;_.nb=Eo;_.vb=Fo;_.tN=yF+'Widget';_.tI=17;_.h=false;_.i=null;function nm(b,a){wo(a,b);}
function pm(b,a){wo(a,null);}
function qm(){var a,b;for(b=this.cb();go(b);){a=ho(b);a.gb();}}
function rm(){var a,b;for(b=this.cb();go(b);){a=ho(b);a.jb();}}
function sm(){}
function tm(){}
function mm(){}
_=mm.prototype=new ao();_.p=qm;_.q=rm;_.lb=sm;_.nb=tm;_.tN=yF+'Panel';_.tI=18;function wj(a){a.f=lo(new bo(),a);}
function xj(a){wj(a);return a;}
function yj(c,a,b){uo(a);mo(c.f,a);qe(b,a.w());nm(c,a);}
function Aj(b,c){var a;if(c.i!==b){return false;}pm(b,c);a=c.w();of(kf(a),a);so(b.f,c);return true;}
function Bj(){return qo(this.f);}
function Cj(a){return Aj(this,a);}
function vj(){}
_=vj.prototype=new mm();_.cb=Bj;_.sb=Cj;_.tN=yF+'ComplexPanel';_.tI=19;function pi(a){xj(a);a.vb(te());yf(a.w(),'position','relative');yf(a.w(),'overflow','hidden');return a;}
function qi(a,b){yj(a,b,a.w());}
function si(a){yf(a,'left','');yf(a,'top','');yf(a,'position','');}
function ti(b){var a;a=Aj(this,b);if(a){si(b.w());}return a;}
function oi(){}
_=oi.prototype=new vj();_.sb=ti;_.tN=yF+'AbsolutePanel';_.tI=20;function kk(){kk=nC;mp(),op;}
function jk(b,a){mp(),op;mk(b,a);return b;}
function lk(b,a){switch(bf(a)){case 1:if(b.c!==null){tj(b.c,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function mk(b,a){vo(b,a);vn(b,7041);}
function nk(a){if(this.c===null){this.c=rj(new qj());}az(this.c,a);}
function ok(a){lk(this,a);}
function pk(a){mk(this,a);}
function ik(){}
_=ik.prototype=new ao();_.k=nk;_.hb=ok;_.vb=pk;_.tN=yF+'FocusWidget';_.tI=21;_.c=null;function xi(){xi=nC;mp(),op;}
function wi(b,a){mp(),op;jk(b,a);return b;}
function yi(a){vf(this.w(),a);}
function vi(){}
_=vi.prototype=new ik();_.wb=yi;_.tN=yF+'ButtonBase';_.tI=22;function Ci(){Ci=nC;mp(),op;}
function zi(a){mp(),op;wi(a,se());Di(a.w());un(a,'gwt-Button');return a;}
function Ai(b,a){mp(),op;zi(b);b.wb(a);return b;}
function Bi(c,a,b){mp(),op;Ai(c,a);c.k(b);return c;}
function Di(b){Ci();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function ui(){}
_=ui.prototype=new vi();_.tN=yF+'Button';_.tI=23;function Fi(a){xj(a);a.e=Ce();a.d=ze();qe(a.e,a.d);a.vb(a.e);return a;}
function bj(c,b,a){tf(b,'align',a.a);}
function cj(c,b,a){yf(b,'verticalAlign',a.a);}
function Ei(){}
_=Ei.prototype=new vj();_.tN=yF+'CellPanel';_.tI=24;_.d=null;_.e=null;function hj(){hj=nC;mp(),op;}
function ej(a){mp(),op;fj(a,ue());un(a,'gwt-CheckBox');return a;}
function gj(b,a){mp(),op;ej(b);lj(b,a);return b;}
function fj(b,a){var c;mp(),op;wi(b,ye());b.a=a;b.b=we();zf(b.a,jf(b.w()));zf(b.w(),0);qe(b.w(),b.a);qe(b.w(),b.b);c='check'+ ++pj;tf(b.a,'id',c);tf(b.b,'htmlFor',c);return b;}
function ij(b){var a;a=b.ab()?'checked':'defaultChecked';return ff(b.a,a);}
function jj(b,a){rf(b.a,'checked',a);rf(b.a,'defaultChecked',a);}
function kj(b,a){tf(b.a,'name',a);}
function lj(b,a){wf(b.b,a);}
function mj(){uf(this.a,this);}
function nj(){uf(this.a,null);jj(this,ij(this));}
function oj(a){vf(this.b,a);}
function dj(){}
_=dj.prototype=new vi();_.lb=mj;_.nb=nj;_.wb=oj;_.tN=yF+'CheckBox';_.tI=25;_.a=null;_.b=null;var pj=0;function zw(d,a,b){var c;while(a.F()){c=a.eb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function Bw(a){throw ww(new vw(),'add');}
function Cw(b){var a;a=zw(this,this.cb(),b);return a!==null;}
function Dw(){var a,b,c;c=kv(new jv());a=null;nv(c,'[');b=this.cb();while(b.F()){if(a!==null){nv(c,a);}else{a=', ';}nv(c,jw(b.eb()));}nv(c,']');return rv(c);}
function yw(){}
_=yw.prototype=new av();_.m=Bw;_.o=Cw;_.tS=Dw;_.tN=EF+'AbstractCollection';_.tI=0;function hx(b,a){throw pu(new ou(),'Index: '+a+', Size: '+b.b);}
function ix(b,a){throw ww(new vw(),'add');}
function jx(a){this.l(this.yb(),a);return true;}
function kx(e){var a,b,c,d,f;if(e===this){return true;}if(!ee(e,30)){return false;}f=de(e,30);if(this.yb()!=f.yb()){return false;}c=this.cb();d=f.cb();while(c.F()){a=c.eb();b=d.eb();if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function lx(){var a,b,c,d;c=1;a=31;b=this.cb();while(b.F()){d=b.eb();c=31*c+(d===null?0:d.hC());}return c;}
function mx(){return ax(new Fw(),this);}
function nx(a){throw ww(new vw(),'remove');}
function Ew(){}
_=Ew.prototype=new yw();_.l=ix;_.m=jx;_.eQ=kx;_.hC=lx;_.cb=mx;_.rb=nx;_.tN=EF+'AbstractList';_.tI=26;function Dy(a){{bz(a);}}
function Ey(a){Dy(a);return a;}
function Fy(c,a,b){if(a<0||a>c.b){hx(c,a);}jz(c.a,a,b);++c.b;}
function az(b,a){sz(b.a,b.b++,a);return true;}
function bz(a){a.a=gb();a.b=0;}
function dz(b,a){return fz(b,a)!=(-1);}
function ez(b,a){if(a<0||a>=b.b){hx(b,a);}return oz(b.a,a);}
function fz(b,a){return gz(b,a,0);}
function gz(c,b,a){if(a<0){hx(c,a);}for(;a<c.b;++a){if(nz(b,oz(c.a,a))){return a;}}return (-1);}
function hz(c,a){var b;b=ez(c,a);qz(c.a,a,1);--c.b;return b;}
function iz(c,b){var a;a=fz(c,b);if(a==(-1)){return false;}hz(c,a);return true;}
function kz(a,b){Fy(this,a,b);}
function lz(a){return az(this,a);}
function jz(a,b,c){a.splice(b,0,c);}
function mz(a){return dz(this,a);}
function nz(a,b){return a===b||a!==null&&a.eQ(b);}
function pz(a){return ez(this,a);}
function oz(a,b){return a[b];}
function rz(a){return hz(this,a);}
function qz(a,c,b){a.splice(c,b);}
function sz(a,b,c){a[b]=c;}
function tz(){return this.b;}
function Cy(){}
_=Cy.prototype=new Ew();_.l=kz;_.m=lz;_.o=mz;_.D=pz;_.rb=rz;_.yb=tz;_.tN=EF+'ArrayList';_.tI=27;_.a=null;_.b=0;function rj(a){Ey(a);return a;}
function tj(d,c){var a,b;for(a=d.cb();a.F();){b=de(a.eb(),8);b.ib(c);}}
function qj(){}
_=qj.prototype=new Cy();_.tN=yF+'ClickListenerCollection';_.tI=28;function Fj(a,b){if(a.g!==null){throw mu(new lu(),'Composite.initWidget() may only be called once.');}uo(b);a.vb(b.w());a.g=b;wo(b,a);}
function ak(){if(this.g===null){throw mu(new lu(),'initWidget() was never called in '+w(this));}return this.j;}
function bk(){if(this.g!==null){return this.g.ab();}return false;}
function ck(){this.g.gb();this.lb();}
function dk(){try{this.nb();}finally{this.g.jb();}}
function Dj(){}
_=Dj.prototype=new ao();_.w=ak;_.ab=bk;_.gb=ck;_.jb=dk;_.tN=yF+'Composite';_.tI=29;_.g=null;function fk(a){xj(a);a.vb(te());return a;}
function gk(a,b){yj(a,b,a.w());}
function ek(){}
_=ek.prototype=new vj();_.tN=yF+'FlowPanel';_.tI=30;function wk(){wk=nC;uk(new tk(),'center');xk=uk(new tk(),'left');uk(new tk(),'right');}
var xk;function uk(b,a){b.a=a;return b;}
function tk(){}
_=tk.prototype=new av();_.tN=yF+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=0;_.a=null;function Dk(){Dk=nC;Bk(new Ak(),'bottom');Ek=Bk(new Ak(),'middle');Fk=Bk(new Ak(),'top');}
var Ek,Fk;function Bk(a,b){a.a=b;return a;}
function Ak(){}
_=Ak.prototype=new av();_.tN=yF+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=0;_.a=null;function dl(a){a.a=(wk(),xk);a.c=(Dk(),Fk);}
function el(a){Fi(a);dl(a);a.b=Be();qe(a.d,a.b);tf(a.e,'cellSpacing','0');tf(a.e,'cellPadding','0');return a;}
function fl(b,c){var a;a=hl(b);qe(b.b,a);yj(b,c,a);}
function hl(b){var a;a=Ae();bj(b,a,b.a);cj(b,a,b.c);return a;}
function il(b,a){b.c=a;}
function jl(c){var a,b;b=kf(c.w());a=Aj(this,c);if(a){of(this.b,b);}return a;}
function cl(){}
_=cl.prototype=new Ei();_.sb=jl;_.tN=yF+'HorizontalPanel';_.tI=31;_.b=null;function ml(a){a.vb(te());vn(a,131197);un(a,'gwt-Label');return a;}
function nl(b,a){ml(b);pl(b,a);return b;}
function pl(b,a){wf(b.w(),a);}
function ql(a){switch(bf(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function ll(){}
_=ll.prototype=new ao();_.hb=ql;_.tN=yF+'Label';_.tI=32;function am(){am=nC;mp(),op;km=new tl();}
function Bl(b,a){am();jk(b,xe(a));vn(b,1024);un(b,'gwt-ListBox');return b;}
function Cl(b,a){fm(b,a,(-1));}
function Dl(b,a,c){gm(b,a,c,(-1));}
function El(b,a){if(a<0||a>=bm(b)){throw new ou();}}
function Fl(a){ul(km,a.w());}
function bm(a){return wl(km,a.w());}
function cm(b,a){El(b,a);return xl(km,b.w(),a);}
function dm(a){return gf(a.w(),'selectedIndex');}
function em(b,a){El(b,a);return yl(km,b.w(),a);}
function fm(c,b,a){gm(c,b,b,a);}
function gm(c,b,d,a){mf(c.w(),b,d,a);}
function hm(b,a){El(b,a);zl(km,b.w(),a);}
function im(c,a,b){El(c,a);if(b===null){throw Au(new zu(),'Cannot set an option to have null text');}xf(c.w(),b,a);}
function jm(a,b){sf(a.w(),'size',b);}
function lm(a){if(bf(a)==1024){}else{lk(this,a);}}
function rl(){}
_=rl.prototype=new ik();_.hb=lm;_.tN=yF+'ListBox';_.tI=33;var km;function sl(){}
_=sl.prototype=new av();_.tN=yF+'ListBox$Impl';_.tI=0;function ul(b,a){a.innerText='';}
function wl(b,a){return a.children.length;}
function xl(c,b,a){return b.children[a].text;}
function yl(c,b,a){return b.children[a].value;}
function zl(c,b,a){b.removeChild(b.children[a]);}
function tl(){}
_=tl.prototype=new sl();_.tN=yF+'ListBox$ImplSafari';_.tI=0;function Am(){Am=nC;Em=sA(new wz());}
function zm(b,a){Am();pi(b);if(a===null){a=Bm();}b.vb(a);b.gb();return b;}
function Cm(c){Am();var a,b;b=de(zA(Em,c),9);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=ef(c))){return null;}}if(Em.c==0){Dm();}BA(Em,c,b=zm(new um(),a));return b;}
function Bm(){Am();return $doc.body;}
function Dm(){Am();Bg(new vm());}
function um(){}
_=um.prototype=new oi();_.tN=yF+'RootPanel';_.tI=34;var Em;function xm(){var a,b;for(b=by(qy((Am(),Em)));iy(b);){a=de(jy(b),9);if(a.ab()){a.jb();}}}
function ym(){return null;}
function vm(){}
_=vm.prototype=new av();_.ob=xm;_.pb=ym;_.tN=yF+'RootPanel$1';_.tI=35;function jn(){jn=nC;mp(),op;}
function hn(b,a){mp(),op;jk(b,a);vn(b,1024);return b;}
function kn(a){return hf(a.w(),'value');}
function ln(a){if(this.a===null){this.a=rj(new qj());}az(this.a,a);}
function mn(a){var b;lk(this,a);b=bf(a);if(b==1){if(this.a!==null){tj(this.a,this);}}else{}}
function gn(){}
_=gn.prototype=new ik();_.k=ln;_.hb=mn;_.tN=yF+'TextBoxBase';_.tI=36;_.a=null;function on(){on=nC;mp(),op;}
function nn(a){mp(),op;hn(a,ve());un(a,'gwt-TextBox');return a;}
function pn(b,a){sf(b.w(),'size',a);}
function fn(){}
_=fn.prototype=new gn();_.tN=yF+'TextBox';_.tI=37;function An(a){a.a=(wk(),xk);a.b=(Dk(),Fk);}
function Bn(a){Fi(a);An(a);tf(a.e,'cellSpacing','0');tf(a.e,'cellPadding','0');return a;}
function Cn(b,d){var a,c;c=Be();a=En(b);qe(c,a);qe(b.d,c);yj(b,d,a);}
function En(b){var a;a=Ae();bj(b,a,b.a);cj(b,a,b.b);return a;}
function Fn(c){var a,b;b=kf(c.w());a=Aj(this,c);if(a){of(this.d,kf(b));}return a;}
function zn(){}
_=zn.prototype=new Ei();_.sb=Fn;_.tN=yF+'VerticalPanel';_.tI=38;function lo(b,a){b.b=a;b.a=Ed('[Lcom.google.gwt.user.client.ui.Widget;',[0],[13],[4],null);return b;}
function mo(a,b){po(a,b,a.c);}
function oo(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]===c){return a;}}return (-1);}
function po(d,e,a){var b,c;if(a<0||a>d.c){throw new ou();}if(d.c==d.a.a){c=Ed('[Lcom.google.gwt.user.client.ui.Widget;',[0],[13],[d.a.a*2],null);for(b=0;b<d.a.a;++b){Fd(c,b,d.a[b]);}d.a=c;}++d.c;for(b=d.c-1;b>a;--b){Fd(d.a,b,d.a[b-1]);}Fd(d.a,a,e);}
function qo(a){return eo(new co(),a);}
function ro(c,b){var a;if(b<0||b>=c.c){throw new ou();}--c.c;for(a=b;a<c.c;++a){Fd(c.a,a,c.a[a+1]);}Fd(c.a,c.c,null);}
function so(b,c){var a;a=oo(b,c);if(a==(-1)){throw new CB();}ro(b,a);}
function bo(){}
_=bo.prototype=new av();_.tN=yF+'WidgetCollection';_.tI=0;_.a=null;_.b=null;_.c=0;function eo(b,a){b.b=a;return b;}
function go(a){return a.a<a.b.c-1;}
function ho(a){if(a.a>=a.b.c){throw new CB();}return a.b.a[++a.a];}
function io(){return go(this);}
function jo(){return ho(this);}
function ko(){if(this.a<0||this.a>=this.b.c){throw new lu();}this.b.b.sb(this.b.a[this.a--]);}
function co(){}
_=co.prototype=new av();_.F=io;_.eb=jo;_.qb=ko;_.tN=yF+'WidgetCollection$WidgetIterator';_.tI=0;_.a=(-1);function mp(){mp=nC;np=ip(new hp());op=np!==null?lp(new ap()):np;}
function lp(a){mp();return a;}
function ap(){}
_=ap.prototype=new av();_.tN=zF+'FocusImpl';_.tI=0;var np,op;function ep(){ep=nC;mp();}
function cp(a){fp(a);gp(a);kp(a);}
function dp(a){ep();lp(a);cp(a);return a;}
function fp(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function gp(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function bp(){}
_=bp.prototype=new ap();_.tN=zF+'FocusImplOld';_.tI=0;function jp(){jp=nC;ep();}
function ip(a){jp();dp(a);return a;}
function kp(b){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus();},0);};}
function hp(){}
_=hp.prototype=new bp();_.tN=zF+'FocusImplSafari';_.tI=0;function up(c,a,b){gv(c,b);return c;}
function tp(){}
_=tp.prototype=new fv();_.tN=AF+'DOMException';_.tI=39;function Fp(){Fp=nC;aq=(Bs(),mt);}
function bq(a){Fp();return Cs(aq,a);}
var aq;function vq(b,a){b.a=a;return b;}
function wq(a,b){return b;}
function yq(a){if(ee(a,25)){return re(wq(this,this.a),wq(this,de(a,25).a));}return false;}
function uq(){}
_=uq.prototype=new av();_.eQ=yq;_.tN=BF+'DOMItem';_.tI=40;_.a=null;function tr(b,a){vq(b,a);return b;}
function vr(a){return or(new nr(),Es(a.a));}
function wr(a){return Er(new Dr(),Fs(a.a));}
function xr(a){return ft(a.a);}
function yr(a){return ht(a.a);}
function zr(a){return kt(a.a);}
function Ar(a){return lt(a.a);}
function Br(a){var b;if(a===null){return null;}b=gt(a);switch(b){case 2:return dq(new cq(),a);case 4:return jq(new iq(),a);case 8:return rq(new qq(),a);case 11:return Eq(new Dq(),a);case 9:return cr(new br(),a);case 1:return hr(new gr(),a);case 7:return hs(new gs(),a);case 3:return ms(new ls(),a);default:return tr(new sr(),a);}}
function Cr(){return wr(this).bb(0);}
function sr(){}
_=sr.prototype=new uq();_.z=Cr;_.tN=BF+'NodeImpl';_.tI=41;function dq(b,a){tr(b,a);return b;}
function fq(a){return et(a.a);}
function gq(a){return jt(a.a);}
function hq(){var a;a=kv(new jv());nv(a,' '+fq(this));nv(a,'="');nv(a,gq(this));nv(a,'"');return rv(a);}
function cq(){}
_=cq.prototype=new sr();_.tS=hq;_.tN=BF+'AttrImpl';_.tI=42;function nq(b,a){tr(b,a);return b;}
function pq(a){return at(a.a);}
function mq(){}
_=mq.prototype=new sr();_.tN=BF+'CharacterDataImpl';_.tI=43;function ms(b,a){nq(b,a);return b;}
function os(){var a,b,c;a=kv(new jv());c=Cv(pq(this),'(?=[;&<>\'"])',(-1));for(b=0;b<c.a;b++){if(Dv(c[b],';')){nv(a,'&semi;');nv(a,Ev(c[b],1));}else if(Dv(c[b],'&')){nv(a,'&amp;');nv(a,Ev(c[b],1));}else if(Dv(c[b],'"')){nv(a,'&quot;');nv(a,Ev(c[b],1));}else if(Dv(c[b],"'")){nv(a,'&apos;');nv(a,Ev(c[b],1));}else if(Dv(c[b],'<')){nv(a,'&lt;');nv(a,Ev(c[b],1));}else if(Dv(c[b],'>')){nv(a,'&gt;');nv(a,Ev(c[b],1));}else{nv(a,c[b]);}}return rv(a);}
function ls(){}
_=ls.prototype=new mq();_.tS=os;_.tN=BF+'TextImpl';_.tI=44;function jq(b,a){ms(b,a);return b;}
function lq(){var a;a=lv(new jv(),'<![CDATA[');nv(a,pq(this));nv(a,']]>');return rv(a);}
function iq(){}
_=iq.prototype=new ls();_.tS=lq;_.tN=BF+'CDATASectionImpl';_.tI=45;function rq(b,a){nq(b,a);return b;}
function tq(){var a;a=lv(new jv(),'<!--');nv(a,pq(this));nv(a,'-->');return rv(a);}
function qq(){}
_=qq.prototype=new mq();_.tS=tq;_.tN=BF+'CommentImpl';_.tI=46;function Aq(c,a,b){up(c,12,'Failed to parse: '+Cq(a));rw(c,b);return c;}
function Cq(a){return Fv(a,0,wu(zv(a),128));}
function zq(){}
_=zq.prototype=new tp();_.tN=BF+'DOMParseException';_.tI=47;function Eq(b,a){tr(b,a);return b;}
function ar(){var a,b;a=kv(new jv());for(b=0;b<wr(this).B();b++){mv(a,wr(this).bb(b));}return rv(a);}
function Dq(){}
_=Dq.prototype=new sr();_.tS=ar;_.tN=BF+'DocumentFragmentImpl';_.tI=48;function cr(b,a){tr(b,a);return b;}
function er(){return de(Br(bt(this.a)),26);}
function fr(){var a,b,c;a=kv(new jv());b=wr(this);for(c=0;c<b.B();c++){nv(a,b.bb(c).tS());}return rv(a);}
function br(){}
_=br.prototype=new sr();_.v=er;_.tS=fr;_.tN=BF+'DocumentImpl';_.tI=49;function hr(b,a){tr(b,a);return b;}
function jr(a){return it(a.a);}
function kr(a){return Ds(this.a,a);}
function lr(a){return Er(new Dr(),ct(this.a,a));}
function mr(){var a;a=lv(new jv(),'<');nv(a,jr(this));if(zr(this)){nv(a,cs(vr(this)));}if(Ar(this)){nv(a,'>');nv(a,cs(wr(this)));nv(a,'<\/');nv(a,jr(this));nv(a,'>');}else{nv(a,'/>');}return rv(a);}
function gr(){}
_=gr.prototype=new sr();_.u=kr;_.y=lr;_.tS=mr;_.tN=BF+'ElementImpl';_.tI=50;function Er(b,a){vq(b,a);return b;}
function as(a){return dt(a.a);}
function bs(b,a){return Br(nt(b.a,a));}
function cs(c){var a,b;a=kv(new jv());for(b=0;b<c.B();b++){nv(a,c.bb(b).tS());}return rv(a);}
function ds(){return as(this);}
function es(a){return bs(this,a);}
function fs(){return cs(this);}
function Dr(){}
_=Dr.prototype=new uq();_.B=ds;_.bb=es;_.tS=fs;_.tN=BF+'NodeListImpl';_.tI=51;function or(b,a){Er(b,a);return b;}
function qr(){return as(this);}
function rr(a){return bs(this,a);}
function nr(){}
_=nr.prototype=new Dr();_.B=qr;_.bb=rr;_.tN=BF+'NamedNodeMapImpl';_.tI=52;function hs(b,a){tr(b,a);return b;}
function js(a){return at(a.a);}
function ks(){var a;a=lv(new jv(),'<?');nv(a,xr(this));nv(a,' ');nv(a,js(this));nv(a,'?>');return rv(a);}
function gs(){}
_=gs.prototype=new sr();_.tS=ks;_.tN=BF+'ProcessingInstructionImpl';_.tI=53;function Bs(){Bs=nC;mt=rs(new qs());}
function As(a){Bs();return a;}
function Cs(e,c){var a,d;try{return de(Br(us(e,c)),27);}catch(a){a=le(a);if(ee(a,28)){d=a;throw Aq(new zq(),c,d);}else throw a;}}
function Ds(b,a){Bs();return b.getAttribute(a);}
function Es(a){Bs();return a.attributes;}
function Fs(b){Bs();var a=b.childNodes;return a==null?null:a;}
function at(a){Bs();return a.data;}
function bt(a){Bs();return a.documentElement;}
function ct(a,b){Bs();return ts(mt,a,b);}
function dt(a){Bs();return a.length;}
function et(a){Bs();return a.name;}
function ft(a){Bs();var b=a.nodeName;return b==null?null:b;}
function gt(a){Bs();var b=a.nodeType;return b==null?-1:b;}
function ht(a){Bs();return a.nodeValue;}
function it(a){Bs();return a.tagName;}
function jt(a){Bs();return a.value;}
function kt(a){Bs();return a.attributes.length!=0;}
function lt(a){Bs();return a.hasChildNodes();}
function nt(c,a){Bs();if(a>=c.length){return null;}var b=c.item(a);return b==null?null:b;}
function ps(){}
_=ps.prototype=new av();_.tN=BF+'XMLParserImpl';_.tI=0;var mt;function ys(){ys=nC;Bs();}
function ws(a){a.a=zs();}
function xs(a){ys();As(a);ws(a);return a;}
function zs(){ys();return new DOMParser();}
function vs(){}
_=vs.prototype=new ps();_.tN=BF+'XMLParserImplStandard';_.tI=0;function ss(){ss=nC;ys();}
function rs(a){ss();xs(a);return a;}
function ts(c,a,b){return a.getElementsByTagName(b);}
function us(g,a){var b=g.a;var e=b.parseFromString(a,'text/xml');var d=e.getElementsByTagName('parsererror');if(d.length>0){var c=d.item(0);var f='white-space: pre; border: 2px solid #c77; padding: 0 1em 0 1em; margin: 1em; background-color: #fdd; color: black';if(c.getAttribute('style')==f){throw new Error(c.item(1).innerHTML);}}return e;}
function qs(){}
_=qs.prototype=new vs();_.tN=BF+'XMLParserImplSafari';_.tI=0;function rt(){}
_=rt.prototype=new av();_.tN=CF+'OutputStream';_.tI=0;function pt(){}
_=pt.prototype=new rt();_.tN=CF+'FilterOutputStream';_.tI=0;function tt(){}
_=tt.prototype=new pt();_.tN=CF+'PrintStream';_.tI=0;function vt(){}
_=vt.prototype=new fv();_.tN=DF+'ArrayStoreException';_.tI=54;function zt(){zt=nC;At=yt(new xt(),false);Bt=yt(new xt(),true);}
function yt(a,b){zt();a.a=b;return a;}
function Ct(a){return ee(a,29)&&de(a,29).a==this.a;}
function Dt(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function Et(){return this.a?'true':'false';}
function Ft(a){zt();return a?Bt:At;}
function xt(){}
_=xt.prototype=new av();_.eQ=Ct;_.hC=Dt;_.tS=Et;_.tN=DF+'Boolean';_.tI=55;_.a=false;var At,Bt;function bu(){}
_=bu.prototype=new fv();_.tN=DF+'ClassCastException';_.tI=56;function ju(b,a){gv(b,a);return b;}
function iu(){}
_=iu.prototype=new fv();_.tN=DF+'IllegalArgumentException';_.tI=57;function mu(b,a){gv(b,a);return b;}
function lu(){}
_=lu.prototype=new fv();_.tN=DF+'IllegalStateException';_.tI=58;function pu(b,a){gv(b,a);return b;}
function ou(){}
_=ou.prototype=new fv();_.tN=DF+'IndexOutOfBoundsException';_.tI=59;function Du(){Du=nC;{Fu();}}
function Fu(){Du();Eu=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var Eu=null;function su(){su=nC;Du();}
function tu(a){su();return iw(a);}
function wu(a,b){return a<b?a:b;}
function xu(){}
_=xu.prototype=new fv();_.tN=DF+'NegativeArraySizeException';_.tI=60;function Au(b,a){gv(b,a);return b;}
function zu(){}
_=zu.prototype=new fv();_.tN=DF+'NullPointerException';_.tI=61;function uv(b,a){return b.charCodeAt(a);}
function wv(b,a){if(!ee(a,1))return false;return cw(b,a);}
function xv(b,a){return b.indexOf(a);}
function yv(c,b,a){return c.indexOf(b,a);}
function zv(a){return a.length;}
function Av(c,a,b){b=dw(b);return c.replace(RegExp(a,'g'),b);}
function Bv(b,a){return Cv(b,a,0);}
function Cv(j,i,g){var a=new RegExp(i,'g');var h=[];var b=0;var k=j;var e=null;while(true){var f=a.exec(k);if(f==null||(k==''||b==g-1&&g>0)){h[b]=k;break;}else{h[b]=k.substring(0,f.index);k=k.substring(f.index+f[0].length,k.length);a.lastIndex=0;if(e==k){h[b]=k.substring(0,1);k=k.substring(1);}e=k;b++;}}if(g==0){for(var c=h.length-1;c>=0;c--){if(h[c]!=''){h.splice(c+1,h.length-(c+1));break;}}}var d=bw(h.length);var c=0;for(c=0;c<h.length;++c){d[c]=h[c];}return d;}
function Dv(b,a){return xv(b,a)==0;}
function Ev(b,a){return b.substr(a,b.length-a);}
function Fv(c,a,b){return c.substr(a,b-a);}
function aw(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function bw(a){return Ed('[Ljava.lang.String;',[0],[1],[a],null);}
function cw(a,b){return String(a)==b;}
function dw(b){var a;a=0;while(0<=(a=yv(b,'\\',a))){if(uv(b,a+1)==36){b=Fv(b,0,a)+'$'+Ev(b,++a);}else{b=Fv(b,0,a)+Ev(b,++a);}}return b;}
function ew(a){return wv(this,a);}
function gw(){var a=fw;if(!a){a=fw={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function hw(){return this;}
function iw(a){return ''+a;}
function jw(a){return a!==null?a.tS():'null';}
_=String.prototype;_.eQ=ew;_.hC=gw;_.tS=hw;_.tN=DF+'String';_.tI=2;var fw=null;function kv(a){ov(a);return a;}
function lv(b,a){pv(b,a);return b;}
function mv(a,b){return nv(a,jw(b));}
function nv(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function ov(a){pv(a,'');}
function pv(b,a){b.js=[a];b.length=a.length;}
function rv(a){a.fb();return a.js[0];}
function sv(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function tv(){return rv(this);}
function jv(){}
_=jv.prototype=new av();_.fb=sv;_.tS=tv;_.tN=DF+'StringBuffer';_.tI=0;function lw(){lw=nC;mw=new tt();}
function nw(a){lw();return C(a);}
var mw;function ww(b,a){gv(b,a);return b;}
function vw(){}
_=vw.prototype=new fv();_.tN=DF+'UnsupportedOperationException';_.tI=62;function ax(b,a){b.c=a;return b;}
function cx(a){return a.a<a.c.yb();}
function dx(){return cx(this);}
function ex(){if(!cx(this)){throw new CB();}return this.c.D(this.b=this.a++);}
function fx(){if(this.b<0){throw new lu();}this.c.rb(this.b);this.a=this.b;this.b=(-1);}
function Fw(){}
_=Fw.prototype=new av();_.F=dx;_.eb=ex;_.qb=fx;_.tN=EF+'AbstractList$IteratorImpl';_.tI=0;_.a=0;_.b=(-1);function oy(f,d,e){var a,b,c;for(b=nA(f.r());fA(b);){a=gA(b);c=a.A();if(d===null?c===null:d.eQ(c)){if(e){hA(b);}return a;}}return null;}
function py(b){var a;a=b.r();return qx(new px(),b,a);}
function qy(b){var a;a=yA(b);return Fx(new Ex(),b,a);}
function ry(a){return oy(this,a,false)!==null;}
function sy(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ee(d,31)){return false;}f=de(d,31);c=py(this);e=f.db();if(!zy(c,e)){return false;}for(a=sx(c);zx(a);){b=Ax(a);h=this.E(b);g=f.E(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function ty(b){var a;a=oy(this,b,false);return a===null?null:a.C();}
function uy(){var a,b,c;b=0;for(c=nA(this.r());fA(c);){a=gA(c);b+=a.hC();}return b;}
function vy(){return py(this);}
function wy(){var a,b,c,d;d='{';a=false;for(c=nA(this.r());fA(c);){b=gA(c);if(a){d+=', ';}else{a=true;}d+=jw(b.A());d+='=';d+=jw(b.C());}return d+'}';}
function ox(){}
_=ox.prototype=new av();_.n=ry;_.eQ=sy;_.E=ty;_.hC=uy;_.db=vy;_.tS=wy;_.tN=EF+'AbstractMap';_.tI=63;function zy(e,b){var a,c,d;if(b===e){return true;}if(!ee(b,32)){return false;}c=de(b,32);if(c.yb()!=e.yb()){return false;}for(a=c.cb();a.F();){d=a.eb();if(!e.o(d)){return false;}}return true;}
function Ay(a){return zy(this,a);}
function By(){var a,b,c;a=0;for(b=this.cb();b.F();){c=b.eb();if(c!==null){a+=c.hC();}}return a;}
function xy(){}
_=xy.prototype=new yw();_.eQ=Ay;_.hC=By;_.tN=EF+'AbstractSet';_.tI=64;function qx(b,a,c){b.a=a;b.b=c;return b;}
function sx(b){var a;a=nA(b.b);return xx(new wx(),b,a);}
function tx(a){return this.a.n(a);}
function ux(){return sx(this);}
function vx(){return this.b.a.c;}
function px(){}
_=px.prototype=new xy();_.o=tx;_.cb=ux;_.yb=vx;_.tN=EF+'AbstractMap$1';_.tI=65;function xx(b,a,c){b.a=c;return b;}
function zx(a){return a.a.F();}
function Ax(b){var a;a=b.a.eb();return a.A();}
function Bx(){return zx(this);}
function Cx(){return Ax(this);}
function Dx(){this.a.qb();}
function wx(){}
_=wx.prototype=new av();_.F=Bx;_.eb=Cx;_.qb=Dx;_.tN=EF+'AbstractMap$2';_.tI=0;function Fx(b,a,c){b.a=a;b.b=c;return b;}
function by(b){var a;a=nA(b.b);return gy(new fy(),b,a);}
function cy(a){return xA(this.a,a);}
function dy(){return by(this);}
function ey(){return this.b.a.c;}
function Ex(){}
_=Ex.prototype=new yw();_.o=cy;_.cb=dy;_.yb=ey;_.tN=EF+'AbstractMap$3';_.tI=0;function gy(b,a,c){b.a=c;return b;}
function iy(a){return a.a.F();}
function jy(a){var b;b=a.a.eb().C();return b;}
function ky(){return iy(this);}
function ly(){return jy(this);}
function my(){this.a.qb();}
function fy(){}
_=fy.prototype=new av();_.F=ky;_.eb=ly;_.qb=my;_.tN=EF+'AbstractMap$4';_.tI=0;function vA(){vA=nC;DA=dB();}
function rA(a){{uA(a);}}
function sA(a){vA();rA(a);return a;}
function tA(a,b){vA();rA(a);AA(a,b);return a;}
function uA(a){a.a=gb();a.d=ib();a.b=ie(DA,cb);a.c=0;}
function wA(b,a){if(ee(a,1)){return hB(b.d,de(a,1))!==DA;}else if(a===null){return b.b!==DA;}else{return gB(b.a,a,a.hC())!==DA;}}
function xA(a,b){if(a.b!==DA&&fB(a.b,b)){return true;}else if(cB(a.d,b)){return true;}else if(aB(a.a,b)){return true;}return false;}
function yA(a){return lA(new bA(),a);}
function zA(c,a){var b;if(ee(a,1)){b=hB(c.d,de(a,1));}else if(a===null){b=c.b;}else{b=gB(c.a,a,a.hC());}return b===DA?null:b;}
function BA(c,a,d){var b;if(ee(a,1)){b=kB(c.d,de(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=jB(c.a,a,d,a.hC());}if(b===DA){++c.c;return null;}else{return b;}}
function AA(d,c){var a,b;b=nA(yA(c));while(fA(b)){a=gA(b);BA(d,a.A(),a.C());}}
function CA(c,a){var b;if(ee(a,1)){b=mB(c.d,de(a,1));}else if(a===null){b=c.b;c.b=ie(DA,cb);}else{b=lB(c.a,a,a.hC());}if(b===DA){return null;}else{--c.c;return b;}}
function EA(e,c){vA();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.m(a[f]);}}}}
function FA(d,a){vA();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=Az(c.substring(1),e);a.m(b);}}}
function aB(f,h){vA();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.C();if(fB(h,d)){return true;}}}}return false;}
function bB(a){return wA(this,a);}
function cB(c,d){vA();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(fB(d,a)){return true;}}}return false;}
function dB(){vA();}
function eB(){return yA(this);}
function fB(a,b){vA();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function iB(a){return zA(this,a);}
function gB(f,h,e){vA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(fB(h,d)){return c.C();}}}}
function hB(b,a){vA();return b[':'+a];}
function jB(f,h,j,e){vA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(fB(h,d)){var i=c.C();c.xb(j);return i;}}}else{a=f[e]=[];}var c=Az(h,j);a.push(c);}
function kB(c,a,d){vA();a=':'+a;var b=c[a];c[a]=d;return b;}
function lB(f,h,e){vA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(fB(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.C();}}}}
function mB(c,a){vA();a=':'+a;var b=c[a];delete c[a];return b;}
function wz(){}
_=wz.prototype=new ox();_.n=bB;_.r=eB;_.E=iB;_.tN=EF+'HashMap';_.tI=66;_.a=null;_.b=null;_.c=0;_.d=null;var DA;function yz(b,a,c){b.a=a;b.b=c;return b;}
function Az(a,b){return yz(new xz(),a,b);}
function Bz(b){var a;if(ee(b,33)){a=de(b,33);if(fB(this.a,a.A())&&fB(this.b,a.C())){return true;}}return false;}
function Cz(){return this.a;}
function Dz(){return this.b;}
function Ez(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function Fz(a){var b;b=this.b;this.b=a;return b;}
function aA(){return this.a+'='+this.b;}
function xz(){}
_=xz.prototype=new av();_.eQ=Bz;_.A=Cz;_.C=Dz;_.hC=Ez;_.xb=Fz;_.tS=aA;_.tN=EF+'HashMap$EntryImpl';_.tI=67;_.a=null;_.b=null;function lA(b,a){b.a=a;return b;}
function nA(a){return dA(new cA(),a.a);}
function oA(c){var a,b,d;if(ee(c,33)){a=de(c,33);b=a.A();if(wA(this.a,b)){d=zA(this.a,b);return fB(a.C(),d);}}return false;}
function pA(){return nA(this);}
function qA(){return this.a.c;}
function bA(){}
_=bA.prototype=new xy();_.o=oA;_.cb=pA;_.yb=qA;_.tN=EF+'HashMap$EntrySet';_.tI=68;function dA(c,b){var a;c.c=b;a=Ey(new Cy());if(c.c.b!==(vA(),DA)){az(a,yz(new xz(),null,c.c.b));}FA(c.c.d,a);EA(c.c.a,a);c.a=a.cb();return c;}
function fA(a){return a.a.F();}
function gA(a){return a.b=de(a.a.eb(),33);}
function hA(a){if(a.b===null){throw mu(new lu(),'Must call next() before remove().');}else{a.a.qb();CA(a.c,a.b.A());a.b=null;}}
function iA(){return fA(this);}
function jA(){return gA(this);}
function kA(){hA(this);}
function cA(){}
_=cA.prototype=new av();_.F=iA;_.eb=jA;_.qb=kA;_.tN=EF+'HashMap$EntrySetIterator';_.tI=0;_.a=null;_.b=null;function oB(a){a.a=sA(new wz());return a;}
function qB(a){var b;b=BA(this.a,a,Ft(true));return b===null;}
function rB(a){return wA(this.a,a);}
function sB(){return sx(py(this.a));}
function tB(){return this.a.c;}
function uB(){return py(this.a).tS();}
function nB(){}
_=nB.prototype=new xy();_.m=qB;_.o=rB;_.cb=sB;_.yb=tB;_.tS=uB;_.tN=EF+'HashSet';_.tI=69;_.a=null;function AB(d,c,a,b){gv(d,c);return d;}
function zB(){}
_=zB.prototype=new fv();_.tN=EF+'MissingResourceException';_.tI=70;function CB(){}
_=CB.prototype=new fv();_.tN=EF+'NoSuchElementException';_.tI=71;function bC(a){a.a=Ey(new Cy());return a;}
function cC(b,a){return az(b.a,a);}
function eC(b,a){return fC(b,a);}
function fC(b,a){return ez(b.a,a);}
function gC(a,b){Fy(this.a,a,b);}
function hC(a){return cC(this,a);}
function iC(a){return dz(this.a,a);}
function jC(a){return fC(this,a);}
function kC(){return this.a.cb();}
function lC(a){return hz(this.a,a);}
function mC(){return this.a.b;}
function aC(){}
_=aC.prototype=new Ew();_.l=gC;_.m=hC;_.o=iC;_.D=jC;_.cb=kC;_.rb=lC;_.yb=mC;_.tN=EF+'Vector';_.tI=72;_.a=null;function fD(g,h){var a,c,d,e,f;h=Av(h,'&amp;','&');c=qD(new oD(),h);try{e=pF(c);f=DC(new CC(),g,e,c);qg(f,1);}catch(a){a=le(a);if(ee(a,35)){d=a;sw(d);}else throw a;}}
function gD(g,h){var a,c,d,e,f;h=Av(h,'&amp;','&');c=zD(new xD(),h);try{e=pF(c);f=bD(new aD(),g,e,c);qg(f,1);}catch(a){a=le(a);if(ee(a,35)){d=a;Cg('Exception: '+d.b);sw(d);}else throw a;}}
function hD(r){var a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s;k='DEFAULT-identities-and-usecases.xml';l='DEFAULT-policy.xml';f='DEFAULT-cancel.html';m='DEFAULT-save-policy.xml';try{h=td('getURLs');k=qd(h,'identities-url');l=qd(h,'policy-url');f=qd(h,'cancel-url');m=qd(h,'save-url');}catch(a){a=le(a);if(ee(a,34)){i=a;Cg('Exception: '+i.b);}else throw a;}fD(r,k);gD(r,l);s=Bn(new zn());qi(Cm('access-policy-editor-hook'),s);p=Bn(new zn());Cn(s,p);q=nn(new fn());pn(q,30);Cn(p,q);o=Bi(new ui(),'Save User or Group',qC(new pC(),r,q));Cn(p,o);j=el(new cl());il(j,(Dk(),Ek));Cn(s,j);d=el(new cl());Cn(s,d);n=Av(m,'&amp;','&');r.e=Bi(new ui(),'Save Policy',uC(new tC(),r,n));un(r.e,'gwt-wyona-SaveButton');fl(d,r.e);g=f;e=Bi(new ui(),'Cancel',yC(new xC(),r,g));un(r.e,'gwt-wyona-CancelButton');fl(d,e);r.a=kE(new iE(),r.g);r.c=qE(new oE(),r.g,r.d,r.b,r.f);c=kD(new iD(),r.a.a,r.c.c,r.c);un(c,'gwt-wyona-AddRemoveWidget');fl(j,r.a);fl(j,c);fl(j,r.c);}
function oC(){}
_=oC.prototype=new av();_.tN=FF+'AccessPolicyEditor';_.tI=0;_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;_.f=true;_.g=10;function qC(b,a,c){b.a=a;b.b=c;return b;}
function sC(d){var a,b,c;b=bm(this.a.a.a);for(a=0;a<b;a++){c=cm(this.a.a.a,a);if(xv(c,kn(this.b))>=0)Cg('Result: '+c);}}
function pC(){}
_=pC.prototype=new av();_.ib=sC;_.tN=FF+'AccessPolicyEditor$1';_.tI=73;function uC(b,a,c){b.a=a;b.b=c;return b;}
function wC(f){var a,c,d,e;c=aE(new FD(),this.b);try{e=cE(c,BE(this.a.c),uE(this.a.c),AE(this.a.c));}catch(a){a=le(a);if(ee(a,35)){d=a;Cg('Exception: '+d.b);}else throw a;}}
function tC(){}
_=tC.prototype=new av();_.ib=wC;_.tN=FF+'AccessPolicyEditor$2';_.tI=74;function yC(b,a,c){b.a=c;return b;}
function AC(a,b){$wnd.location.href=b;}
function BC(a){AC(this,this.a);}
function xC(){}
_=xC.prototype=new av();_.ib=BC;_.tN=FF+'AccessPolicyEditor$3';_.tI=75;function EC(){EC=nC;ng();}
function DC(b,a,d,c){EC();b.a=a;b.c=d;b.b=c;lg(b);return b;}
function FC(){if(xc(this.c)){pg(this,10);}else{mE(this.a.a,this.a.g,vD(this.b),tD(this.b));bF(this.a.c,uD(this.b));mg(this);}}
function CC(){}
_=CC.prototype=new gg();_.ub=FC;_.tN=FF+'AccessPolicyEditor$4';_.tI=76;function cD(){cD=nC;ng();}
function bD(b,a,d,c){cD();b.a=a;b.c=d;b.b=c;lg(b);return b;}
function dD(){if(xc(this.c)){pg(this,10);}else{this.a.d=DD(this.b);this.a.b=CD(this.b);DE(this.a.c,this.a.g,this.a.d,this.a.b);this.a.f=this.b.b;EE(this.a.c,this.a.f);mg(this);}}
function aD(){}
_=aD.prototype=new gg();_.ub=dD;_.tN=FF+'AccessPolicyEditor$5';_.tI=77;function jD(a){a.b=fk(new ek());}
function kD(d,a,c,b){jD(d);Fj(d,d.b);d.f=Bi(new ui(),'<',d);gk(d.b,d.f);d.a=Bi(new ui(),'>',d);gk(d.b,d.a);d.c=a;d.d=c;d.e=b;return d;}
function mD(b,a){if(xv(a,'(')>0){return Fv(a,0,xv(a,'('));}else{return a;}}
function nD(c){var a,b;if(c===this.a){a=dm(this.c);if(a>=0){b=em(this.c,a);hm(this.c,a);rE(this.e,Fv(b,0,1),aw(Ev(b,2)));}else{Cg('No identity selected yet! Please select an identity.');}}else if(c===this.f){a=dm(this.d);if(a>=0){b=em(this.d,a);hm(this.d,a);Cl(this.c,mD(this,b));}else{Cg('No identity selected yet! Please select an identity.');}}}
function iD(){}
_=iD.prototype=new Dj();_.ib=nD;_.tN=FF+'AddRemoveIdentitiesWidget';_.tI=78;_.a=null;_.c=null;_.d=null;_.e=null;_.f=null;function lF(a){a.d=sA(new wz());}
function mF(a,b){lF(a);a.e=Db(new yb(),(Fb(),dc),b);qF(a);return a;}
function nF(e){var a,b,c,d;b='';a=tA(new wz(),e.d);for(d=nA(yA(a));fA(d);){c=gA(d);b+=c.A()+''+c.C();if(fA(d)){b+='&';}}return b;}
function pF(a){return ac(a.e,nF(a),a);}
function qF(a){bc(a.e,'Content-Type','application/x-www-form-urlencoded');}
function rF(b,a){Cg('Exception: '+a.b);}
function kF(){}
_=kF.prototype=new av();_.kb=rF;_.tN=aG+'AsynchronousAgent';_.tI=0;_.e=null;function pD(a){a.c=bC(new aC());a.a=bC(new aC());a.b=bC(new aC());}
function qD(a,b){mF(a,b);pD(a);return a;}
function sD(d,c,a){var b;b=c.y(a);return de(b.bb(0),26);}
function tD(c){var a,b;a=Ed('[Ljava.lang.String;',[0],[1],[c.a.a.b],null);for(b=0;b<c.a.a.b;b++){a[b]=de(eC(c.a,b),1);}return a;}
function uD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[c.b.a.b],null);for(a=0;a<c.b.a.b;a++){b[a]=de(eC(c.b,a),36);}return b;}
function vD(b){var a,c;c=Ed('[Ljava.lang.String;',[0],[1],[b.c.a.b],null);for(a=0;a<b.c.a.b;a++){c[a]=de(eC(b.c,a),1);}return c;}
function wD(e,f){var a,b,c,d,g,h,i,j,k;i=bq(tb(f)).v();k=sD(this,i,'users');j=k.y('user');for(c=0;c<j.B();c++){cC(this.c,de(j.bb(c),26).u('id'));}b=sD(this,i,'groups');a=b.y('group');for(c=0;c<a.B();c++){cC(this.a,de(a.bb(c),26).u('id'));}h=sD(this,i,'rights');g=h.y('right');for(c=0;c<g.B();c++){d=yr(de(g.bb(c),26).z());cC(this.b,eF(new dF(),de(g.bb(c),26).u('id'),d));}}
function oD(){}
_=oD.prototype=new kF();_.mb=wD;_.tN=FF+'AsynchronousIdentitiesAndRightsGetter';_.tI=0;function yD(a){a.c=bC(new aC());a.a=bC(new aC());}
function zD(a,b){mF(a,b);yD(a);return a;}
function BD(d,c,a){var b;b=c.y(a);if(b.B()>0){return de(b.bb(0),26);}else{return null;}}
function CD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[38],[c.a.a.b],null);for(a=0;a<b.a;a++){b[a]=de(eC(c.a,a),38);}return b;}
function DD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[37],[c.c.a.b],null);for(a=0;a<b.a;a++){b[a]=de(eC(c.c,a),37);}return b;}
function ED(e,f){var a,b,c,d,g,h,i,j,k,l,m,n;j=bq(tb(f)).v();k=j.u('use-inherited-policies');if(k===null){this.b=true;}else{if(wv(k,'false')){this.b=false;}else{this.b=true;}}n=BD(this,j,'world');m=j.y('user');for(c=0;c<m.B();c++){l=de(m.bb(c),26);h=l.y('right');i=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[h.B()],null);for(d=0;d<i.a;d++){g=de(h.bb(d),26);i[d]=fF(new dF(),g.u('id'),true);}cC(this.c,iF(new hF(),l.u('id'),i));}b=j.y('group');for(c=0;c<b.B();c++){a=de(b.bb(c),26);h=a.y('right');i=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[h.B()],null);for(d=0;d<i.a;d++){g=de(h.bb(d),26);i[d]=fF(new dF(),g.u('id'),true);}cC(this.a,gE(new fE(),a.u('id'),i));}}
function xD(){}
_=xD.prototype=new kF();_.mb=ED;_.tN=FF+'AsynchronousPolicyGetter';_.tI=0;_.b=true;function aE(a,b){a.a=Db(new yb(),(Fb(),ec),b);return a;}
function cE(f,h,b,g){var a,c,d,e;a=lv(new jv(),'<?xml version="1.0"?>');nv(a,'<policy xmlns="http://www.wyona.org/security/1.0" use-inherited-policies="'+g+'">');if(h!==null){for(c=0;c<h.a;c++){nv(a,'<user id="'+h[c].a+'">');e=h[c].b;if(e!==null){for(d=0;d<e.a;d++){nv(a,'<right id="'+e[d].a+'" permission="'+e[d].c+'">'+e[d].a+'<\/right>');}}else{nv(a,'<right id="r" permission="false">r<\/right>');nv(a,'<right id="w" permission="false">w<\/right>');}nv(a,'<\/user>');}}if(b!==null){for(c=0;c<b.a;c++){nv(a,'<group id="'+b[c].a+'">');e=b[c].b;if(e!==null){for(d=0;d<e.a;d++){nv(a,'<right id="'+e[d].a+'" permission="'+e[d].c+'">'+e[d].a+'<\/right>');}}else{nv(a,'<right id="r" permission="false">r<\/right>');nv(a,'<right id="w" permission="false">w<\/right>');}nv(a,'<\/group>');}}nv(a,'<\/policy>');return ac(f.a,rv(a),f);}
function dE(b,a){Cg('Exception: '+a.b);}
function eE(a,b){if(sb(b)==200){Cg('Policy has been saved successfully!');}else{Cg('Policy has NOT been saved! Please check log files on server.');}}
function FD(){}
_=FD.prototype=new av();_.kb=dE;_.mb=eE;_.tN=FF+'AsynchronousPolicySetter';_.tI=0;_.a=null;function gE(c,a,b){c.a=a;c.b=b;return c;}
function fE(){}
_=fE.prototype=new av();_.tN=FF+'Group';_.tI=79;_.a=null;_.b=null;function jE(a){a.b=Bn(new zn());}
function kE(a,b){jE(a);Fj(a,a.b);Cn(a.b,nl(new ll(),'Identities'));a.a=Bl(new rl(),true);a.a.k(a);mE(a,b,null,null);Cn(a.b,a.a);return a;}
function mE(c,e,d,a){var b;Fl(c.a);jm(c.a,e);if(d!==null){for(b=0;b<d.a;b++){Cl(c.a,'u: '+d[b]);}}else{Cl(c.a,'No users yet!');}if(a!==null){for(b=0;b<a.a;b++){Cl(c.a,'g: '+a[b]);}}else{Cl(c.a,'No groups yet!');}}
function nE(a){}
function iE(){}
_=iE.prototype=new Dj();_.ib=nE;_.tN=FF+'IdentitiesListBoxWidget';_.tI=80;_.a=null;function pE(a){a.e=Bn(new zn());}
function qE(b,e,d,a,c){pE(b);Fj(b,b.e);Cn(b.e,nl(new ll(),'Policy'));b.d=gj(new dj(),'Inherit rights from parent policies');EE(b,c);Cn(b.e,b.d);b.c=Bl(new rl(),true);b.c.k(b);DE(b,e,d,a);Cn(b.e,b.c);bF(b,null);return b;}
function rE(d,e,c){var a,b;a=lv(new jv(),'(-');for(b=1;b<d.b.a;b++){nv(a,',-');}nv(a,')');Dl(d.c,e+': '+a+' '+c,e+': '+c);}
function sE(e,a,d){var b,c;c=Ed('[Ljava.lang.String;',[0],[1],[e.a.a],null);for(b=0;b<c.a;b++){if(wv(e.a[b].a,d.a)){c[b]=d.a;}else{if(a[b].c){c[b]=a[b].a;}else{c[b]='-';}}}return c;}
function uE(g){var a,b,c,d,e,f;b=bC(new aC());for(c=0;c<bm(g.c);c++){e=cm(g.c,c);f=yE(g,e);d=vE(g,c);if(Dv(d,'g:')){cC(b,gE(new fE(),aw(Ev(d,2)),f));}}a=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[38],[b.a.b],null);for(c=0;c<a.a;c++){a[c]=de(eC(b,c),38);}return a;}
function vE(b,a){return em(b.c,a);}
function wE(e,f,b,c){var a,d;d=lv(new jv(),f+':');nv(d,'('+c[0]);for(a=1;a<c.a;a++){nv(d,','+c[a]);}nv(d,')');nv(d,' '+b);return rv(d);}
function xE(g,h,b,e){var a,c,d,f;f=lv(new jv(),h+':');if(g.a!==null){nv(f,'(');for(a=0;a<g.a.a;a++){d=false;for(c=0;c<e.a;c++){if(wv(g.a[a].a,e[c].a)&&e[c].c){d=true;break;}}if(a>0){nv(f,',');}if(d){nv(f,g.a[a].a);}else{nv(f,'-');}}nv(f,')');}else{Cg('Available rights not loaded yet!');}nv(f,' '+b);return rv(f);}
function yE(e,b){var a,c,d;if(xv(b,'(')>0){d=Bv(Fv(b,xv(b,'(')+1,xv(b,')')),',');if(d.a!=e.a.a){Cg('Exception: Validation of rights length failed!');return null;}c=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[e.a.a],null);for(a=0;a<d.a;a++){if(wv(d[a],'-')){c[a]=fF(new dF(),e.a[a].a,false);}else{c[a]=fF(new dF(),d[a],true);}}return c;}else{return Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[0],null);}}
function zE(b){var a;a=dm(b.c);if(a>=0){return cm(b.c,a);}return null;}
function AE(a){return ij(a.d);}
function BE(e){var a,b,c,d,f,g;g=bC(new aC());for(a=0;a<bm(e.c);a++){c=cm(e.c,a);d=yE(e,c);b=vE(e,a);if(Dv(b,'u:')){cC(g,iF(new hF(),aw(Ev(b,2)),d));}}f=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[37],[g.a.b],null);for(a=0;a<f.a;a++){f[a]=de(eC(g,a),37);}return f;}
function CE(e,a,d){var b,c;c=Ed('[Ljava.lang.String;',[0],[1],[e.a.a],null);for(b=0;b<c.a;b++){if(wv(e.a[b].a,d.a)){c[b]='-';}else{if(a[b].c){c[b]=a[b].a;}else{c[b]='-';}}}return c;}
function bF(c,a){var b;c.a=a;if(a!==null){c.b=Ed('[Lcom.google.gwt.user.client.ui.CheckBox;',[0],[12],[a.a],null);for(b=0;b<c.b.a;b++){c.b[b]=gj(new dj(),a[b].b);kj(c.b[b],a[b].a);c.b[b].k(c);Cn(c.e,c.b[b]);}}else{}}
function DE(e,i,g,a){var b,c,d,f,h;Fl(e.c);jm(e.c,i);if(g!==null||a!==null){if(g!==null){for(b=0;b<g.a;b++){f='u';c=g[b].a;d=g[b].b;h=f+': '+c;Dl(e.c,xE(e,f,c,d),h);}}if(a!==null){for(b=0;b<a.a;b++){f='g';c=a[b].a;d=a[b].b;h=f+': '+c;Dl(e.c,xE(e,f,c,d),h);}}else{Cg('No groups!');}}else{Cl(e.c,'No identities yet!');}}
function EE(a,b){if(a.d!==null){jj(a.d,b);}}
function FE(d,e,a,c,b){im(d.c,b,wE(d,e,a,c));}
function aF(d,c){var a,b;b=dm(d.c);if(b>=0){a=vE(d,b);FE(d,Fv(a,0,1),aw(Ev(a,2)),c,b);}else{Cg('Exception: No list item selected!');}}
function cF(i){var a,b,c,d,e,f,g,h;h=null;g=null;for(b=0;b<this.b.a;b++){if(i===this.b[b]){h=this.b[b];g=this.a[b];break;}}if(h!==null){f=zE(this);if(f!==null){a=yE(this,f);if(ij(h)){d=sE(this,a,g);}else{d=CE(this,a,g);}aF(this,d);}else{Cg('No identity has been selected! Please select an identity in order to assign rights.');jj(h,false);}}else if(i===this.c){f=zE(this);e=yE(this,f);for(c=0;c<this.b.a;c++){if(e[c].c){jj(this.b[c],true);}else{jj(this.b[c],false);}}}}
function oE(){}
_=oE.prototype=new Dj();_.ib=cF;_.tN=FF+'PolicyListBoxWidget';_.tI=81;_.a=null;_.b=null;_.c=null;_.d=null;function fF(c,a,b){c.a=a;c.c=b;return c;}
function eF(c,a,b){c.a=a;c.b=b;c.c=false;return c;}
function dF(){}
_=dF.prototype=new av();_.tN=FF+'Right';_.tI=82;_.a=null;_.b=null;_.c=false;function iF(c,a,b){c.a=a;c.b=b;return c;}
function hF(){}
_=hF.prototype=new av();_.tN=FF+'User';_.tI=83;_.a=null;_.b=null;function ot(){hD(new oC());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{ot();}catch(a){b(d);}else{ot();}}
var he=[{},{},{1:1},{4:1},{4:1,35:1},{4:1,35:1},{4:1,28:1,35:1},{2:1},{6:1},{6:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{3:1},{2:1,5:1},{2:1},{7:1},{11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{11:1,13:1,14:1,15:1,17:1,18:1,19:1,20:1,21:1},{11:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1},{11:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1},{10:1,11:1,13:1,14:1,15:1},{11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1,24:1},{30:1},{30:1},{30:1},{11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{11:1,13:1,14:1,15:1,18:1,23:1},{11:1,13:1,14:1,15:1,17:1,18:1,19:1,20:1,21:1,24:1},{9:1,10:1,11:1,13:1,14:1,15:1},{7:1},{11:1,13:1,14:1,15:1,17:1,18:1,19:1,20:1,21:1,23:1,24:1},{11:1,13:1,14:1,15:1,17:1,18:1,19:1,20:1,21:1,23:1,24:1},{10:1,11:1,13:1,14:1,15:1},{4:1,35:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{4:1,35:1},{25:1},{25:1,27:1},{25:1,26:1},{25:1},{25:1},{25:1},{4:1,35:1},{29:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{31:1},{32:1},{32:1},{31:1},{33:1},{32:1},{32:1},{4:1,34:1,35:1},{4:1,35:1},{30:1},{8:1},{8:1},{8:1},{6:1},{6:1},{8:1,11:1,13:1,14:1,15:1},{38:1},{8:1,11:1,13:1,14:1,15:1},{8:1,11:1,13:1,14:1,15:1},{36:1},{37:1}];if (org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor) {  var __gwt_initHandlers = org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.__gwt_initHandlers;  org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.onScriptLoad(gwtOnLoad);}})();