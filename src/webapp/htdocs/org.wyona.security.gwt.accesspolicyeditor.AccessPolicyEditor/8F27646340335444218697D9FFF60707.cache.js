(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,eF='com.google.gwt.core.client.',fF='com.google.gwt.http.client.',gF='com.google.gwt.i18n.client.',hF='com.google.gwt.lang.',iF='com.google.gwt.user.client.',jF='com.google.gwt.user.client.impl.',kF='com.google.gwt.user.client.ui.',lF='com.google.gwt.user.client.ui.impl.',mF='com.google.gwt.xml.client.',nF='com.google.gwt.xml.client.impl.',oF='java.io.',pF='java.lang.',qF='java.util.',rF='org.wyona.security.gwt.accesspolicyeditor.client.',sF='org.wyona.yanel.gwt.client.';function eC(){}
function Du(a){return this===a;}
function Eu(){return ew(this);}
function Fu(){return this.tN+'@'+this.hC();}
function Bu(){}
_=Bu.prototype={};_.eQ=Du;_.hC=Eu;_.tS=Fu;_.toString=function(){return this.tS();};_.tN=pF+'Object';_.tI=1;function w(a){return a==null?null:a.tN;}
var y=null;function B(a){return a==null?0:a.$H?a.$H:(a.$H=D());}
function C(a){return a==null?0:a.$H?a.$H:(a.$H=D());}
function D(){return ++E;}
var E=0;function gw(b,a){b.b=a;return b;}
function iw(b,a){if(b.a!==null){throw hu(new gu(),"Can't overwrite cause");}if(a===b){throw eu(new du(),'Self-causation not permitted');}b.a=a;return b;}
function jw(a){kw(a,(cw(),dw));}
function kw(e,d){var a,b,c;c=fv(new ev());b=e;while(b!==null){a=b.b;if(b!==e){iv(c,'Caused by: ');}iv(c,b.tN);iv(c,': ');iv(c,a===null?'(No exception detail)':a);iv(c,'\n');b=b.a;}}
function lw(){var a,b;a=w(this);b=this.b;if(b!==null){return a+': '+b;}else{return a;}}
function fw(){}
_=fw.prototype=new Bu();_.tS=lw;_.tN=pF+'Throwable';_.tI=3;_.a=null;_.b=null;function bu(b,a){gw(b,a);return b;}
function au(){}
_=au.prototype=new fw();_.tN=pF+'Exception';_.tI=4;function bv(b,a){bu(b,a);return b;}
function av(){}
_=av.prototype=new au();_.tN=pF+'RuntimeException';_.tI=5;function ab(c,b,a){bv(c,'JavaScript '+b+' exception: '+a);return c;}
function F(){}
_=F.prototype=new av();_.tN=eF+'JavaScriptException';_.tI=6;function eb(b,a){if(!ee(a,2)){return false;}return jb(b,de(a,2));}
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
_=cb.prototype=new Bu();_.eQ=kb;_.hC=lb;_.tS=nb;_.tN=eF+'JavaScriptObject';_.tI=7;function rc(b,d,c,a){if(d===null){throw new uu();}if(a===null){throw new uu();}if(c<0){throw new du();}b.a=c;b.c=d;if(c>0){b.b=vb(new ub(),b,a);pg(b.b,c);}else{b.b=null;}return b;}
function tc(a){var b;if(a.c!==null){b=a.c;a.c=null;dd(b);sc(a);}}
function sc(a){if(a.b!==null){lg(a.b);}}
function vc(e,a){var b,c,d,f;if(e.c===null){return;}sc(e);f=e.c;e.c=null;b=ed(f);if(b!==null){c=bv(new av(),b);a.kb(e,c);}else{d=yc(f);a.mb(e,d);}}
function wc(b,a){if(b.c===null){return;}tc(b);a.kb(b,oc(new nc(),b,b.a));}
function xc(b){var a;if(b.c===null){return false;}a=fd(b.c);switch(a){case 1:case 2:case 3:return true;}return false;}
function yc(b){var a;a=qb(new pb(),b);return a;}
function zc(a){var b;b=y;{vc(this,a);}}
function ob(){}
_=ob.prototype=new Bu();_.t=zc;_.tN=fF+'Request';_.tI=0;_.a=0;_.b=null;_.c=null;function Ac(){}
_=Ac.prototype=new Bu();_.tN=fF+'Response';_.tI=0;function qb(a,b){a.a=b;return a;}
function sb(a){return hd(a.a);}
function tb(a){return gd(a.a);}
function pb(){}
_=pb.prototype=new Ac();_.tN=fF+'Request$1';_.tI=0;function mg(){mg=eC;wg=vy(new ty());{vg();}}
function kg(a){mg();return a;}
function lg(a){if(a.d){qg(a.e);}else{rg(a.e);}Fy(wg,a);}
function ng(a){if(!a.d){Fy(wg,a);}a.ub();}
function pg(b,a){if(a<=0){throw eu(new du(),'must be positive');}lg(b);b.d=false;b.e=tg(b,a);xy(wg,b);}
function og(b,a){if(a<=0){throw eu(new du(),'must be positive');}lg(b);b.d=true;b.e=sg(b,a);xy(wg,b);}
function qg(a){mg();$wnd.clearInterval(a);}
function rg(a){mg();$wnd.clearTimeout(a);}
function sg(b,a){mg();return $wnd.setInterval(function(){b.u();},a);}
function tg(b,a){mg();return $wnd.setTimeout(function(){b.u();},a);}
function ug(){var a;a=y;{ng(this);}}
function vg(){mg();Ag(new gg());}
function fg(){}
_=fg.prototype=new Bu();_.u=ug;_.tN=iF+'Timer';_.tI=8;_.d=false;_.e=0;var wg;function wb(){wb=eC;mg();}
function vb(b,a,c){wb();b.a=a;b.b=c;kg(b);return b;}
function xb(){wc(this.a,this.b);}
function ub(){}
_=ub.prototype=new fg();_.ub=xb;_.tN=fF+'Request$2';_.tI=9;function Fb(){Fb=eC;dc=Ab(new zb(),'GET');ec=Ab(new zb(),'POST');fc=hi(new gi());}
function Db(b,a,c){Fb();Eb(b,a===null?null:a.a,c);return b;}
function Eb(b,a,c){Fb();Ec('httpMethod',a);Ec('url',c);b.b=a;b.d=c;return b;}
function ac(g,d,a){var b,c,e,f,h;h=ji(fc);{b=id(h,g.b,g.d,true);}if(b!==null){e=lc(new kc(),g.d);iw(e,ic(new hc(),b));throw e;}cc(g,h);c=rc(new ob(),h,g.c,a);f=jd(h,c,d,a);if(f!==null){throw ic(new hc(),f);}return c;}
function bc(b,a,c){Ec('header',a);Ec('value',c);if(b.a===null){b.a=jA(new nz());}sA(b.a,a,c);}
function cc(e,f){var a,b,c,d;if(e.a!==null&&e.a.c>0){a=pA(e.a);d=eA(a);while(Cz(d)){c=Dz(d);b=kd(f,de(c.A(),1),de(c.C(),1));if(b!==null){throw ic(new hc(),b);}}}else{kd(f,'Content-Type','text/plain; charset=utf-8');}}
function yb(){}
_=yb.prototype=new Bu();_.tN=fF+'RequestBuilder';_.tI=0;_.a=null;_.b=null;_.c=0;_.d=null;var dc,ec,fc;function Ab(b,a){b.a=a;return b;}
function Cb(){return this.a;}
function zb(){}
_=zb.prototype=new Bu();_.tS=Cb;_.tN=fF+'RequestBuilder$Method';_.tI=0;_.a=null;function ic(b,a){bu(b,a);return b;}
function hc(){}
_=hc.prototype=new au();_.tN=fF+'RequestException';_.tI=10;function lc(a,b){ic(a,'The URL '+b+' is invalid or violates the same-origin security restriction');return a;}
function kc(){}
_=kc.prototype=new hc();_.tN=fF+'RequestPermissionException';_.tI=11;function oc(b,a,c){ic(b,qc(c));return b;}
function qc(a){return 'A request timeout has expired after '+ou(a)+' ms';}
function nc(){}
_=nc.prototype=new hc();_.tN=fF+'RequestTimeoutException';_.tI=12;function Ec(a,b){Fc(a,b);if(0==sv(yv(b))){throw eu(new du(),a+' can not be empty');}}
function Fc(a,b){if(null===b){throw vu(new uu(),a+' can not be null');}}
function dd(a){a.onreadystatechange=li;a.abort();}
function ed(b){try{if(b.status===undefined){return 'XmlHttpRequest.status == undefined, please see Safari bug '+'http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';}return null;}catch(a){return 'Unable to read XmlHttpRequest.status; likely causes are a '+'networking error or bad cross-domain request. Please see '+'https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more '+'details';}}
function fd(a){return a.readyState;}
function gd(a){return a.responseText;}
function hd(a){return a.status;}
function id(e,c,d,b){try{e.open(c,d,b);return null;}catch(a){return a.message||a.toString();}}
function jd(e,c,d,b){e.onreadystatechange=function(){if(e.readyState==cd){e.onreadystatechange=li;c.t(b);}};try{e.send(d);return null;}catch(a){e.onreadystatechange=li;return a.message||a.toString();}}
function kd(d,b,c){try{d.setRequestHeader(b,c);return null;}catch(a){return a.message||a.toString();}}
var cd=4;function pd(){pd=eC;sd=jA(new nz());}
function md(b,a){pd();if(a===null||qv('',a)){throw eu(new du(),'Cannot create a Dictionary with a null or empty name');}b.b='Dictionary '+a;od(b,a);if(b.a===null){throw rB(new qB(),"Cannot find JavaScript object with the name '"+a+"'",a,null);}return b;}
function nd(b,a){for(x in b.a){a.n(x);}}
function od(c,b){try{if(typeof $wnd[b]!='object'){ud(b);}c.a=$wnd[b];}catch(a){ud(b);}}
function qd(b,a){var c=b.a[a];if(c==null|| !Object.prototype.hasOwnProperty.call(b.a,a)){b.tb(a);}return String(c);}
function rd(b){var a;a=fB(new eB());nd(b,a);return a;}
function td(a){pd();var b;b=de(qA(sd,a),3);if(b===null){b=md(new ld(),a);sA(sd,a,b);}return b;}
function vd(b){var a,c;c=rd(this);a="Cannot find '"+b+"' in "+this;if(c.a.c<20){a+='\n keys found: '+c;}throw rB(new qB(),a,this.b,b);}
function ud(a){pd();throw rB(new qB(),"'"+a+"' is not a JavaScript object and cannot be used as a Dictionary",null,a);}
function wd(){return this.b;}
function ld(){}
_=ld.prototype=new Bu();_.tb=vd;_.tS=wd;_.tN=gF+'Dictionary';_.tI=13;_.a=null;_.b=null;var sd;function yd(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function Ad(a,b,c){return a[b]=c;}
function Bd(b,a){return b[a];}
function Cd(a){return a.length;}
function Ed(e,d,c,b,a){return Dd(e,d,c,b,0,Cd(b),a);}
function Dd(j,i,g,c,e,a,b){var d,f,h;if((f=Bd(c,e))<0){throw new su();}h=yd(new xd(),f,Bd(i,e),Bd(g,e),j);++e;if(e<a){j=wv(j,1);for(d=0;d<f;++d){Ad(h,d,Dd(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){Ad(h,d,b);}}return h;}
function Fd(a,b,c){if(c!==null&&a.b!=0&& !ee(c,a.b)){throw new qt();}return Ad(a,b,c);}
function xd(){}
_=xd.prototype=new Bu();_.tN=hF+'Array';_.tI=0;function ce(b,a){return !(!(b&&he[b][a]));}
function de(b,a){if(b!=null)ce(b.tI,a)||ge();return b;}
function ee(b,a){return b!=null&&ce(b.tI,a);}
function ge(){throw new Ct();}
function fe(a){if(a!==null){throw new Ct();}return a;}
function ie(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var he;function le(a){if(ee(a,4)){return a;}return ab(new F(),ne(a),me(a));}
function me(a){return a.message;}
function ne(a){return a.name;}
function pe(){pe=eC;pf=vy(new ty());{kf=new gh();ph(kf);}}
function qe(b,a){pe();rh(kf,b,a);}
function re(a,b){pe();return lh(kf,a,b);}
function se(){pe();return th(kf,'button');}
function te(){pe();return th(kf,'div');}
function ue(){pe();return uh(kf,'checkbox');}
function ve(){pe();return uh(kf,'text');}
function we(){pe();return th(kf,'label');}
function xe(a){pe();return vh(kf,a);}
function ye(){pe();return th(kf,'span');}
function ze(){pe();return th(kf,'tbody');}
function Ae(){pe();return th(kf,'td');}
function Be(){pe();return th(kf,'tr');}
function Ce(){pe();return th(kf,'table');}
function Fe(b,a,d){pe();var c;c=y;{Ee(b,a,d);}}
function Ee(b,a,c){pe();var d;if(a===of){if(bf(b)==8192){of=null;}}d=De;De=b;try{c.hb(b);}finally{De=d;}}
function af(b,a){pe();wh(kf,b,a);}
function bf(a){pe();return xh(kf,a);}
function cf(a){pe();mh(kf,a);}
function df(a){pe();return nh(kf,a);}
function gf(a,b){pe();return Ah(kf,a,b);}
function ef(a,b){pe();return yh(kf,a,b);}
function ff(a,b){pe();return zh(kf,a,b);}
function hf(a){pe();return Bh(kf,a);}
function jf(a){pe();return oh(kf,a);}
function lf(c,b,d,a){pe();ih(kf,c,b,d,a);}
function mf(a){pe();var b,c;c=true;if(pf.b>0){b=fe(By(pf,pf.b-1));if(!(c=null.Ab())){af(a,true);cf(a);}}return c;}
function nf(b,a){pe();Ch(kf,b,a);}
function sf(a,b,c){pe();Fh(kf,a,b,c);}
function qf(a,b,c){pe();Dh(kf,a,b,c);}
function rf(a,b,c){pe();Eh(kf,a,b,c);}
function tf(a,b){pe();ai(kf,a,b);}
function uf(a,b){pe();bi(kf,a,b);}
function vf(a,b){pe();ci(kf,a,b);}
function wf(b,c,a){pe();di(kf,b,c,a);}
function xf(b,a,c){pe();ei(kf,b,a,c);}
function yf(a,b){pe();qh(kf,a,b);}
function zf(a){pe();return fi(kf,a);}
var De=null,kf=null,of=null,pf;function Cf(a){if(ee(a,5)){return re(this,de(a,5));}return eb(ie(this,Af),a);}
function Df(){return fb(ie(this,Af));}
function Ef(){return zf(this);}
function Af(){}
_=Af.prototype=new cb();_.eQ=Cf;_.hC=Df;_.tS=Ef;_.tN=iF+'Element';_.tI=14;function cg(a){return eb(ie(this,Ff),a);}
function dg(){return fb(ie(this,Ff));}
function eg(){return df(this);}
function Ff(){}
_=Ff.prototype=new cb();_.eQ=cg;_.hC=dg;_.tS=eg;_.tN=iF+'Event';_.tI=15;function ig(){while((mg(),wg).b>0){lg(de(By((mg(),wg),0),6));}}
function jg(){return null;}
function gg(){}
_=gg.prototype=new Bu();_.ob=ig;_.pb=jg;_.tN=iF+'Timer$1';_.tI=16;function zg(){zg=eC;Cg=vy(new ty());eh=vy(new ty());{ah();}}
function Ag(a){zg();xy(Cg,a);}
function Bg(a){zg();$wnd.alert(a);}
function Dg(){zg();var a,b;for(a=Cg.cb();a.F();){b=de(a.eb(),7);b.ob();}}
function Eg(){zg();var a,b,c,d;d=null;for(a=Cg.cb();a.F();){b=de(a.eb(),7);c=b.pb();{d=c;}}return d;}
function Fg(){zg();var a,b;for(a=eh.cb();a.F();){b=fe(a.eb());null.Ab();}}
function ah(){zg();__gwt_initHandlers(function(){dh();},function(){return ch();},function(){bh();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function bh(){zg();var a;a=y;{Dg();}}
function ch(){zg();var a;a=y;{return Eg();}}
function dh(){zg();var a;a=y;{Fg();}}
var Cg,eh;function rh(c,b,a){b.appendChild(a);}
function th(b,a){return $doc.createElement(a);}
function uh(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function vh(c,a){var b;b=th(c,'select');if(a){Dh(c,b,'multiple',true);}return b;}
function wh(c,b,a){b.cancelBubble=a;}
function xh(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function Ah(d,a,b){var c=a[b];return c==null?null:String(c);}
function yh(c,a,b){return !(!a[b]);}
function zh(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function Bh(b,a){return a.__eventBits||0;}
function Ch(c,b,a){b.removeChild(a);}
function Fh(c,a,b,d){a[b]=d;}
function Dh(c,a,b,d){a[b]=d;}
function Eh(c,a,b,d){a[b]=d;}
function ai(c,a,b){a.__listener=b;}
function bi(c,a,b){if(!b){b='';}a.innerHTML=b;}
function ci(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function di(e,c,d,a){var b=c.options[a];b.text=d;}
function ei(c,b,a,d){b.style[a]=d;}
function fi(b,a){return a.outerHTML;}
function fh(){}
_=fh.prototype=new Bu();_.tN=jF+'DOMImpl';_.tI=0;function lh(c,a,b){return a==b;}
function mh(b,a){a.preventDefault();}
function nh(b,a){return a.toString();}
function oh(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function ph(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){Fe(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!mf(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)Fe(b,a,c);};$wnd.__captureElem=null;}
function qh(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function jh(){}
_=jh.prototype=new fh();_.tN=jF+'DOMImplStandard';_.tI=0;function ih(e,c,d,f,a){var b=new Option(d,f);if(a== -1||a>c.children.length-1){c.appendChild(b);}else{c.insertBefore(b,c.children[a]);}}
function gh(){}
_=gh.prototype=new jh();_.tN=jF+'DOMImplSafari';_.tI=0;function hi(a){li=hb();return a;}
function ji(a){return ki(a);}
function ki(a){return new XMLHttpRequest();}
function gi(){}
_=gi.prototype=new Bu();_.tN=jF+'HTTPRequestImpl';_.tI=0;var li=null;function qn(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function rn(b,a){if(b.k!==null){qn(b,b.k,a);}b.k=a;}
function sn(b,a){vn(b.k,a);}
function tn(b,a){yf(b.y(),a|hf(b.y()));}
function un(){return this.k;}
function vn(a,b){sf(a,'className',b);}
function wn(){if(this.k===null){return '(null handle)';}return zf(this.k);}
function on(){}
_=on.prototype=new Bu();_.y=un;_.tS=wn;_.tN=kF+'UIObject';_.tI=0;_.k=null;function so(a){if(ee(a.j,10)){de(a.j,10).sb(a);}else if(a.j!==null){throw hu(new gu(),"This widget's parent does not implement HasWidgets");}}
function to(b,a){if(b.ab()){tf(b.y(),null);}rn(b,a);if(b.ab()){tf(a,b);}}
function uo(c,b){var a;a=c.j;if(b===null){if(a!==null&&a.ab()){c.jb();}c.j=null;}else{if(a!==null){throw hu(new gu(),'Cannot set a new parent without first clearing the old parent');}c.j=b;if(b.ab()){c.gb();}}}
function vo(){}
function wo(){}
function xo(){return this.i;}
function yo(){if(this.ab()){throw hu(new gu(),"Should only call onAttach when the widget is detached from the browser's document");}this.i=true;tf(this.y(),this);this.q();this.lb();}
function zo(a){}
function Ao(){if(!this.ab()){throw hu(new gu(),"Should only call onDetach when the widget is attached to the browser's document");}try{this.nb();}finally{this.r();tf(this.y(),null);this.i=false;}}
function Bo(){}
function Co(){}
function Do(a){to(this,a);}
function En(){}
_=En.prototype=new on();_.q=vo;_.r=wo;_.ab=xo;_.gb=yo;_.hb=zo;_.jb=Ao;_.lb=Bo;_.nb=Co;_.vb=Do;_.tN=kF+'Widget';_.tI=17;_.i=false;_.j=null;function km(b,a){uo(a,b);}
function mm(b,a){uo(a,null);}
function nm(){var a,b;for(b=this.cb();eo(b);){a=fo(b);a.gb();}}
function om(){var a,b;for(b=this.cb();eo(b);){a=fo(b);a.jb();}}
function pm(){}
function qm(){}
function jm(){}
_=jm.prototype=new En();_.q=nm;_.r=om;_.lb=pm;_.nb=qm;_.tN=kF+'Panel';_.tI=18;function tj(a){a.f=jo(new Fn(),a);}
function uj(a){tj(a);return a;}
function vj(c,a,b){so(a);ko(c.f,a);qe(b,a.y());km(c,a);}
function xj(b,c){var a;if(c.j!==b){return false;}mm(b,c);a=c.y();nf(jf(a),a);qo(b.f,c);return true;}
function yj(){return oo(this.f);}
function zj(a){return xj(this,a);}
function sj(){}
_=sj.prototype=new jm();_.cb=yj;_.sb=zj;_.tN=kF+'ComplexPanel';_.tI=19;function ni(a){uj(a);a.vb(te());xf(a.y(),'position','relative');xf(a.y(),'overflow','hidden');return a;}
function oi(a,b){vj(a,b,a.y());}
function qi(a){xf(a,'left','');xf(a,'top','');xf(a,'position','');}
function ri(b){var a;a=xj(this,b);if(a){qi(b.y());}return a;}
function mi(){}
_=mi.prototype=new sj();_.sb=ri;_.tN=kF+'AbsolutePanel';_.tI=20;function hk(){hk=eC;kp(),mp;}
function gk(b,a){kp(),mp;jk(b,a);return b;}
function ik(b,a){switch(bf(a)){case 1:if(b.c!==null){qj(b.c,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function jk(b,a){to(b,a);tn(b,7041);}
function kk(a){if(this.c===null){this.c=oj(new nj());}xy(this.c,a);}
function lk(a){ik(this,a);}
function mk(a){jk(this,a);}
function fk(){}
_=fk.prototype=new En();_.l=kk;_.hb=lk;_.vb=mk;_.tN=kF+'FocusWidget';_.tI=21;_.c=null;function vi(){vi=eC;kp(),mp;}
function ui(b,a){kp(),mp;gk(b,a);return b;}
function wi(a){uf(this.y(),a);}
function ti(){}
_=ti.prototype=new fk();_.wb=wi;_.tN=kF+'ButtonBase';_.tI=22;function Ai(){Ai=eC;kp(),mp;}
function xi(a){kp(),mp;ui(a,se());Bi(a.y());sn(a,'gwt-Button');return a;}
function yi(b,a){kp(),mp;xi(b);b.wb(a);return b;}
function zi(c,a,b){kp(),mp;yi(c,a);c.l(b);return c;}
function Bi(b){Ai();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function si(){}
_=si.prototype=new ti();_.tN=kF+'Button';_.tI=23;function Di(a){uj(a);a.e=Ce();a.d=ze();qe(a.e,a.d);a.vb(a.e);return a;}
function Fi(c,b,a){sf(b,'align',a.a);}
function aj(c,b,a){xf(b,'verticalAlign',a.a);}
function Ci(){}
_=Ci.prototype=new sj();_.tN=kF+'CellPanel';_.tI=24;_.d=null;_.e=null;function fj(){fj=eC;kp(),mp;}
function cj(a){kp(),mp;dj(a,ue());sn(a,'gwt-CheckBox');return a;}
function ej(b,a){kp(),mp;cj(b);ij(b,a);return b;}
function dj(b,a){var c;kp(),mp;ui(b,ye());b.a=a;b.b=we();yf(b.a,hf(b.y()));yf(b.y(),0);qe(b.y(),b.a);qe(b.y(),b.b);c='check'+ ++mj;sf(b.a,'id',c);sf(b.b,'htmlFor',c);return b;}
function gj(b){var a;a=b.ab()?'checked':'defaultChecked';return ef(b.a,a);}
function hj(b,a){qf(b.a,'checked',a);qf(b.a,'defaultChecked',a);}
function ij(b,a){vf(b.b,a);}
function jj(){tf(this.a,this);}
function kj(){tf(this.a,null);hj(this,gj(this));}
function lj(a){uf(this.b,a);}
function bj(){}
_=bj.prototype=new ti();_.lb=jj;_.nb=kj;_.wb=lj;_.tN=kF+'CheckBox';_.tI=25;_.a=null;_.b=null;var mj=0;function qw(d,a,b){var c;while(a.F()){c=a.eb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function sw(a){throw nw(new mw(),'add');}
function tw(b){var a;a=qw(this,this.cb(),b);return a!==null;}
function uw(){var a,b,c;c=fv(new ev());a=null;iv(c,'[');b=this.cb();while(b.F()){if(a!==null){iv(c,a);}else{a=', ';}iv(c,aw(b.eb()));}iv(c,']');return mv(c);}
function pw(){}
_=pw.prototype=new Bu();_.n=sw;_.p=tw;_.tS=uw;_.tN=qF+'AbstractCollection';_.tI=0;function Ew(b,a){throw ku(new ju(),'Index: '+a+', Size: '+b.b);}
function Fw(b,a){throw nw(new mw(),'add');}
function ax(a){this.m(this.yb(),a);return true;}
function bx(e){var a,b,c,d,f;if(e===this){return true;}if(!ee(e,20)){return false;}f=de(e,20);if(this.yb()!=f.yb()){return false;}c=this.cb();d=f.cb();while(c.F()){a=c.eb();b=d.eb();if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function cx(){var a,b,c,d;c=1;a=31;b=this.cb();while(b.F()){d=b.eb();c=31*c+(d===null?0:d.hC());}return c;}
function dx(){return xw(new ww(),this);}
function ex(a){throw nw(new mw(),'remove');}
function vw(){}
_=vw.prototype=new pw();_.m=Fw;_.n=ax;_.eQ=bx;_.hC=cx;_.cb=dx;_.rb=ex;_.tN=qF+'AbstractList';_.tI=26;function uy(a){{yy(a);}}
function vy(a){uy(a);return a;}
function wy(c,a,b){if(a<0||a>c.b){Ew(c,a);}az(c.a,a,b);++c.b;}
function xy(b,a){jz(b.a,b.b++,a);return true;}
function yy(a){a.a=gb();a.b=0;}
function Ay(b,a){return Cy(b,a)!=(-1);}
function By(b,a){if(a<0||a>=b.b){Ew(b,a);}return fz(b.a,a);}
function Cy(b,a){return Dy(b,a,0);}
function Dy(c,b,a){if(a<0){Ew(c,a);}for(;a<c.b;++a){if(ez(b,fz(c.a,a))){return a;}}return (-1);}
function Ey(c,a){var b;b=By(c,a);hz(c.a,a,1);--c.b;return b;}
function Fy(c,b){var a;a=Cy(c,b);if(a==(-1)){return false;}Ey(c,a);return true;}
function bz(a,b){wy(this,a,b);}
function cz(a){return xy(this,a);}
function az(a,b,c){a.splice(b,0,c);}
function dz(a){return Ay(this,a);}
function ez(a,b){return a===b||a!==null&&a.eQ(b);}
function gz(a){return By(this,a);}
function fz(a,b){return a[b];}
function iz(a){return Ey(this,a);}
function hz(a,c,b){a.splice(c,b);}
function jz(a,b,c){a[b]=c;}
function kz(){return this.b;}
function ty(){}
_=ty.prototype=new vw();_.m=bz;_.n=cz;_.p=dz;_.D=gz;_.rb=iz;_.yb=kz;_.tN=qF+'ArrayList';_.tI=27;_.a=null;_.b=0;function oj(a){vy(a);return a;}
function qj(d,c){var a,b;for(a=d.cb();a.F();){b=de(a.eb(),8);b.ib(c);}}
function nj(){}
_=nj.prototype=new ty();_.tN=kF+'ClickListenerCollection';_.tI=28;function Cj(a,b){if(a.h!==null){throw hu(new gu(),'Composite.initWidget() may only be called once.');}so(b);a.vb(b.y());a.h=b;uo(b,a);}
function Dj(){if(this.h===null){throw hu(new gu(),'initWidget() was never called in '+w(this));}return this.k;}
function Ej(){if(this.h!==null){return this.h.ab();}return false;}
function Fj(){this.h.gb();this.lb();}
function ak(){try{this.nb();}finally{this.h.jb();}}
function Aj(){}
_=Aj.prototype=new En();_.y=Dj;_.ab=Ej;_.gb=Fj;_.jb=ak;_.tN=kF+'Composite';_.tI=29;_.h=null;function ck(a){uj(a);a.vb(te());return a;}
function dk(a,b){vj(a,b,a.y());}
function bk(){}
_=bk.prototype=new sj();_.tN=kF+'FlowPanel';_.tI=30;function tk(){tk=eC;rk(new qk(),'center');uk=rk(new qk(),'left');rk(new qk(),'right');}
var uk;function rk(b,a){b.a=a;return b;}
function qk(){}
_=qk.prototype=new Bu();_.tN=kF+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=0;_.a=null;function Ak(){Ak=eC;yk(new xk(),'bottom');Bk=yk(new xk(),'middle');Ck=yk(new xk(),'top');}
var Bk,Ck;function yk(a,b){a.a=b;return a;}
function xk(){}
_=xk.prototype=new Bu();_.tN=kF+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=0;_.a=null;function al(a){a.a=(tk(),uk);a.c=(Ak(),Ck);}
function bl(a){Di(a);al(a);a.b=Be();qe(a.d,a.b);sf(a.e,'cellSpacing','0');sf(a.e,'cellPadding','0');return a;}
function cl(b,c){var a;a=el(b);qe(b.b,a);vj(b,c,a);}
function el(b){var a;a=Ae();Fi(b,a,b.a);aj(b,a,b.c);return a;}
function fl(b,a){b.c=a;}
function gl(c){var a,b;b=jf(c.y());a=xj(this,c);if(a){nf(this.b,b);}return a;}
function Fk(){}
_=Fk.prototype=new Ci();_.sb=gl;_.tN=kF+'HorizontalPanel';_.tI=31;_.b=null;function jl(a){a.vb(te());tn(a,131197);sn(a,'gwt-Label');return a;}
function kl(b,a){jl(b);ml(b,a);return b;}
function ml(b,a){vf(b.y(),a);}
function nl(a){switch(bf(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function il(){}
_=il.prototype=new En();_.hb=nl;_.tN=kF+'Label';_.tI=32;function Dl(){Dl=eC;kp(),mp;hm=new ql();}
function yl(b,a){Dl();gk(b,xe(a));tn(b,1024);sn(b,'gwt-ListBox');return b;}
function zl(b,a){cm(b,a,(-1));}
function Al(b,a,c){dm(b,a,c,(-1));}
function Bl(b,a){if(a<0||a>=El(b)){throw new ju();}}
function Cl(a){rl(hm,a.y());}
function El(a){return tl(hm,a.y());}
function Fl(b,a){Bl(b,a);return ul(hm,b.y(),a);}
function am(a){return ff(a.y(),'selectedIndex');}
function bm(b,a){Bl(b,a);return vl(hm,b.y(),a);}
function cm(c,b,a){dm(c,b,b,a);}
function dm(c,b,d,a){lf(c.y(),b,d,a);}
function em(b,a){Bl(b,a);wl(hm,b.y(),a);}
function fm(c,a,b){Bl(c,a);if(b===null){throw vu(new uu(),'Cannot set an option to have null text');}wf(c.y(),b,a);}
function gm(a,b){rf(a.y(),'size',b);}
function im(a){if(bf(a)==1024){}else{ik(this,a);}}
function ol(){}
_=ol.prototype=new fk();_.hb=im;_.tN=kF+'ListBox';_.tI=33;var hm;function pl(){}
_=pl.prototype=new Bu();_.tN=kF+'ListBox$Impl';_.tI=0;function rl(b,a){a.innerText='';}
function tl(b,a){return a.children.length;}
function ul(c,b,a){return b.children[a].text;}
function vl(c,b,a){return b.children[a].value;}
function wl(c,b,a){b.removeChild(b.children[a]);}
function ql(){}
_=ql.prototype=new pl();_.tN=kF+'ListBox$ImplSafari';_.tI=0;function xm(){xm=eC;Cm=jA(new nz());}
function wm(b,a){xm();ni(b);if(a===null){a=ym();}b.vb(a);b.gb();return b;}
function zm(){xm();return Am(null);}
function Am(c){xm();var a,b;b=de(qA(Cm,c),9);if(b!==null){return b;}a=null;if(Cm.c==0){Bm();}sA(Cm,c,b=wm(new rm(),a));return b;}
function ym(){xm();return $doc.body;}
function Bm(){xm();Ag(new sm());}
function rm(){}
_=rm.prototype=new mi();_.tN=kF+'RootPanel';_.tI=34;var Cm;function um(){var a,b;for(b=yx(hy((xm(),Cm)));Fx(b);){a=de(ay(b),9);if(a.ab()){a.jb();}}}
function vm(){return null;}
function sm(){}
_=sm.prototype=new Bu();_.ob=um;_.pb=vm;_.tN=kF+'RootPanel$1';_.tI=35;function gn(){gn=eC;kp(),mp;}
function fn(b,a){kp(),mp;gk(b,a);tn(b,1024);return b;}
function hn(a){return gf(a.y(),'value');}
function jn(a){if(this.a===null){this.a=oj(new nj());}xy(this.a,a);}
function kn(a){var b;ik(this,a);b=bf(a);if(b==1){if(this.a!==null){qj(this.a,this);}}else{}}
function en(){}
_=en.prototype=new fk();_.l=jn;_.hb=kn;_.tN=kF+'TextBoxBase';_.tI=36;_.a=null;function mn(){mn=eC;kp(),mp;}
function ln(a){kp(),mp;fn(a,ve());sn(a,'gwt-TextBox');return a;}
function nn(b,a){rf(b.y(),'size',a);}
function dn(){}
_=dn.prototype=new en();_.tN=kF+'TextBox';_.tI=37;function yn(a){a.a=(tk(),uk);a.b=(Ak(),Ck);}
function zn(a){Di(a);yn(a);sf(a.e,'cellSpacing','0');sf(a.e,'cellPadding','0');return a;}
function An(b,d){var a,c;c=Be();a=Cn(b);qe(c,a);qe(b.d,c);vj(b,d,a);}
function Cn(b){var a;a=Ae();Fi(b,a,b.a);aj(b,a,b.b);return a;}
function Dn(c){var a,b;b=jf(c.y());a=xj(this,c);if(a){nf(this.d,jf(b));}return a;}
function xn(){}
_=xn.prototype=new Ci();_.sb=Dn;_.tN=kF+'VerticalPanel';_.tI=38;function jo(b,a){b.b=a;b.a=Ed('[Lcom.google.gwt.user.client.ui.Widget;',[0],[12],[4],null);return b;}
function ko(a,b){no(a,b,a.c);}
function mo(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]===c){return a;}}return (-1);}
function no(d,e,a){var b,c;if(a<0||a>d.c){throw new ju();}if(d.c==d.a.a){c=Ed('[Lcom.google.gwt.user.client.ui.Widget;',[0],[12],[d.a.a*2],null);for(b=0;b<d.a.a;++b){Fd(c,b,d.a[b]);}d.a=c;}++d.c;for(b=d.c-1;b>a;--b){Fd(d.a,b,d.a[b-1]);}Fd(d.a,a,e);}
function oo(a){return bo(new ao(),a);}
function po(c,b){var a;if(b<0||b>=c.c){throw new ju();}--c.c;for(a=b;a<c.c;++a){Fd(c.a,a,c.a[a+1]);}Fd(c.a,c.c,null);}
function qo(b,c){var a;a=mo(b,c);if(a==(-1)){throw new tB();}po(b,a);}
function Fn(){}
_=Fn.prototype=new Bu();_.tN=kF+'WidgetCollection';_.tI=0;_.a=null;_.b=null;_.c=0;function bo(b,a){b.b=a;return b;}
function eo(a){return a.a<a.b.c-1;}
function fo(a){if(a.a>=a.b.c){throw new tB();}return a.b.a[++a.a];}
function go(){return eo(this);}
function ho(){return fo(this);}
function io(){if(this.a<0||this.a>=this.b.c){throw new gu();}this.b.b.sb(this.b.a[this.a--]);}
function ao(){}
_=ao.prototype=new Bu();_.F=go;_.eb=ho;_.qb=io;_.tN=kF+'WidgetCollection$WidgetIterator';_.tI=0;_.a=(-1);function kp(){kp=eC;lp=gp(new fp());mp=lp!==null?jp(new Eo()):lp;}
function jp(a){kp();return a;}
function Eo(){}
_=Eo.prototype=new Bu();_.tN=lF+'FocusImpl';_.tI=0;var lp,mp;function cp(){cp=eC;kp();}
function ap(a){dp(a);ep(a);ip(a);}
function bp(a){cp();jp(a);ap(a);return a;}
function dp(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function ep(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function Fo(){}
_=Fo.prototype=new Eo();_.tN=lF+'FocusImplOld';_.tI=0;function hp(){hp=eC;cp();}
function gp(a){hp();bp(a);return a;}
function ip(b){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus();},0);};}
function fp(){}
_=fp.prototype=new Fo();_.tN=lF+'FocusImplSafari';_.tI=0;function sp(c,a,b){bv(c,b);return c;}
function rp(){}
_=rp.prototype=new av();_.tN=mF+'DOMException';_.tI=39;function Dp(){Dp=eC;Ep=(xs(),ht);}
function Fp(a){Dp();return ys(Ep,a);}
var Ep;function tq(b,a){b.a=a;return b;}
function uq(a,b){return b;}
function wq(a){if(ee(a,15)){return re(uq(this,this.a),uq(this,de(a,15).a));}return false;}
function sq(){}
_=sq.prototype=new Bu();_.eQ=wq;_.tN=nF+'DOMItem';_.tI=40;_.a=null;function rr(b,a){tq(b,a);return b;}
function tr(a){return mr(new lr(),As(a.a));}
function ur(a){return Ar(new zr(),Bs(a.a));}
function vr(a){return bt(a.a);}
function wr(a){return ft(a.a);}
function xr(a){return gt(a.a);}
function yr(a){var b;if(a===null){return null;}b=ct(a);switch(b){case 2:return bq(new aq(),a);case 4:return hq(new gq(),a);case 8:return pq(new oq(),a);case 11:return Cq(new Bq(),a);case 9:return ar(new Fq(),a);case 1:return fr(new er(),a);case 7:return ds(new cs(),a);case 3:return is(new hs(),a);default:return rr(new qr(),a);}}
function qr(){}
_=qr.prototype=new sq();_.tN=nF+'NodeImpl';_.tI=41;function bq(b,a){rr(b,a);return b;}
function dq(a){return at(a.a);}
function eq(a){return et(a.a);}
function fq(){var a;a=fv(new ev());iv(a,' '+dq(this));iv(a,'="');iv(a,eq(this));iv(a,'"');return mv(a);}
function aq(){}
_=aq.prototype=new qr();_.tS=fq;_.tN=nF+'AttrImpl';_.tI=42;function lq(b,a){rr(b,a);return b;}
function nq(a){return Cs(a.a);}
function kq(){}
_=kq.prototype=new qr();_.tN=nF+'CharacterDataImpl';_.tI=43;function is(b,a){lq(b,a);return b;}
function ks(){var a,b,c;a=fv(new ev());c=uv(nq(this),'(?=[;&<>\'"])',(-1));for(b=0;b<c.a;b++){if(vv(c[b],';')){iv(a,'&semi;');iv(a,wv(c[b],1));}else if(vv(c[b],'&')){iv(a,'&amp;');iv(a,wv(c[b],1));}else if(vv(c[b],'"')){iv(a,'&quot;');iv(a,wv(c[b],1));}else if(vv(c[b],"'")){iv(a,'&apos;');iv(a,wv(c[b],1));}else if(vv(c[b],'<')){iv(a,'&lt;');iv(a,wv(c[b],1));}else if(vv(c[b],'>')){iv(a,'&gt;');iv(a,wv(c[b],1));}else{iv(a,c[b]);}}return mv(a);}
function hs(){}
_=hs.prototype=new kq();_.tS=ks;_.tN=nF+'TextImpl';_.tI=44;function hq(b,a){is(b,a);return b;}
function jq(){var a;a=gv(new ev(),'<![CDATA[');iv(a,nq(this));iv(a,']]>');return mv(a);}
function gq(){}
_=gq.prototype=new hs();_.tS=jq;_.tN=nF+'CDATASectionImpl';_.tI=45;function pq(b,a){lq(b,a);return b;}
function rq(){var a;a=gv(new ev(),'<!--');iv(a,nq(this));iv(a,'-->');return mv(a);}
function oq(){}
_=oq.prototype=new kq();_.tS=rq;_.tN=nF+'CommentImpl';_.tI=46;function yq(c,a,b){sp(c,12,'Failed to parse: '+Aq(a));iw(c,b);return c;}
function Aq(a){return xv(a,0,ru(sv(a),128));}
function xq(){}
_=xq.prototype=new rp();_.tN=nF+'DOMParseException';_.tI=47;function Cq(b,a){rr(b,a);return b;}
function Eq(){var a,b;a=fv(new ev());for(b=0;b<ur(this).B();b++){hv(a,ur(this).bb(b));}return mv(a);}
function Bq(){}
_=Bq.prototype=new qr();_.tS=Eq;_.tN=nF+'DocumentFragmentImpl';_.tI=48;function ar(b,a){rr(b,a);return b;}
function cr(){return de(yr(Ds(this.a)),16);}
function dr(){var a,b,c;a=fv(new ev());b=ur(this);for(c=0;c<b.B();c++){iv(a,b.bb(c).tS());}return mv(a);}
function Fq(){}
_=Fq.prototype=new qr();_.w=cr;_.tS=dr;_.tN=nF+'DocumentImpl';_.tI=49;function fr(b,a){rr(b,a);return b;}
function hr(a){return dt(a.a);}
function ir(a){return zs(this.a,a);}
function jr(a){return Ar(new zr(),Es(this.a,a));}
function kr(){var a;a=gv(new ev(),'<');iv(a,hr(this));if(wr(this)){iv(a,Er(tr(this)));}if(xr(this)){iv(a,'>');iv(a,Er(ur(this)));iv(a,'<\/');iv(a,hr(this));iv(a,'>');}else{iv(a,'/>');}return mv(a);}
function er(){}
_=er.prototype=new qr();_.v=ir;_.z=jr;_.tS=kr;_.tN=nF+'ElementImpl';_.tI=50;function Ar(b,a){tq(b,a);return b;}
function Cr(a){return Fs(a.a);}
function Dr(b,a){return yr(it(b.a,a));}
function Er(c){var a,b;a=fv(new ev());for(b=0;b<c.B();b++){iv(a,c.bb(b).tS());}return mv(a);}
function Fr(){return Cr(this);}
function as(a){return Dr(this,a);}
function bs(){return Er(this);}
function zr(){}
_=zr.prototype=new sq();_.B=Fr;_.bb=as;_.tS=bs;_.tN=nF+'NodeListImpl';_.tI=51;function mr(b,a){Ar(b,a);return b;}
function or(){return Cr(this);}
function pr(a){return Dr(this,a);}
function lr(){}
_=lr.prototype=new zr();_.B=or;_.bb=pr;_.tN=nF+'NamedNodeMapImpl';_.tI=52;function ds(b,a){rr(b,a);return b;}
function fs(a){return Cs(a.a);}
function gs(){var a;a=gv(new ev(),'<?');iv(a,vr(this));iv(a,' ');iv(a,fs(this));iv(a,'?>');return mv(a);}
function cs(){}
_=cs.prototype=new qr();_.tS=gs;_.tN=nF+'ProcessingInstructionImpl';_.tI=53;function xs(){xs=eC;ht=ns(new ms());}
function ws(a){xs();return a;}
function ys(e,c){var a,d;try{return de(yr(qs(e,c)),17);}catch(a){a=le(a);if(ee(a,18)){d=a;throw yq(new xq(),c,d);}else throw a;}}
function zs(b,a){xs();return b.getAttribute(a);}
function As(a){xs();return a.attributes;}
function Bs(b){xs();var a=b.childNodes;return a==null?null:a;}
function Cs(a){xs();return a.data;}
function Ds(a){xs();return a.documentElement;}
function Es(a,b){xs();return ps(ht,a,b);}
function Fs(a){xs();return a.length;}
function at(a){xs();return a.name;}
function bt(a){xs();var b=a.nodeName;return b==null?null:b;}
function ct(a){xs();var b=a.nodeType;return b==null?-1:b;}
function dt(a){xs();return a.tagName;}
function et(a){xs();return a.value;}
function ft(a){xs();return a.attributes.length!=0;}
function gt(a){xs();return a.hasChildNodes();}
function it(c,a){xs();if(a>=c.length){return null;}var b=c.item(a);return b==null?null:b;}
function ls(){}
_=ls.prototype=new Bu();_.tN=nF+'XMLParserImpl';_.tI=0;var ht;function us(){us=eC;xs();}
function ss(a){a.a=vs();}
function ts(a){us();ws(a);ss(a);return a;}
function vs(){us();return new DOMParser();}
function rs(){}
_=rs.prototype=new ls();_.tN=nF+'XMLParserImplStandard';_.tI=0;function os(){os=eC;us();}
function ns(a){os();ts(a);return a;}
function ps(c,a,b){return a.getElementsByTagName(b);}
function qs(g,a){var b=g.a;var e=b.parseFromString(a,'text/xml');var d=e.getElementsByTagName('parsererror');if(d.length>0){var c=d.item(0);var f='white-space: pre; border: 2px solid #c77; padding: 0 1em 0 1em; margin: 1em; background-color: #fdd; color: black';if(c.getAttribute('style')==f){throw new Error(c.item(1).innerHTML);}}return e;}
function ms(){}
_=ms.prototype=new rs();_.tN=nF+'XMLParserImplSafari';_.tI=0;function mt(){}
_=mt.prototype=new Bu();_.tN=oF+'OutputStream';_.tI=0;function kt(){}
_=kt.prototype=new mt();_.tN=oF+'FilterOutputStream';_.tI=0;function ot(){}
_=ot.prototype=new kt();_.tN=oF+'PrintStream';_.tI=0;function qt(){}
_=qt.prototype=new av();_.tN=pF+'ArrayStoreException';_.tI=54;function ut(){ut=eC;vt=tt(new st(),false);wt=tt(new st(),true);}
function tt(a,b){ut();a.a=b;return a;}
function xt(a){return ee(a,19)&&de(a,19).a==this.a;}
function yt(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function zt(){return this.a?'true':'false';}
function At(a){ut();return a?wt:vt;}
function st(){}
_=st.prototype=new Bu();_.eQ=xt;_.hC=yt;_.tS=zt;_.tN=pF+'Boolean';_.tI=55;_.a=false;var vt,wt;function Ct(){}
_=Ct.prototype=new av();_.tN=pF+'ClassCastException';_.tI=56;function eu(b,a){bv(b,a);return b;}
function du(){}
_=du.prototype=new av();_.tN=pF+'IllegalArgumentException';_.tI=57;function hu(b,a){bv(b,a);return b;}
function gu(){}
_=gu.prototype=new av();_.tN=pF+'IllegalStateException';_.tI=58;function ku(b,a){bv(b,a);return b;}
function ju(){}
_=ju.prototype=new av();_.tN=pF+'IndexOutOfBoundsException';_.tI=59;function yu(){yu=eC;{Au();}}
function Au(){yu();zu=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var zu=null;function nu(){nu=eC;yu();}
function ou(a){nu();return Fv(a);}
function ru(a,b){return a<b?a:b;}
function su(){}
_=su.prototype=new av();_.tN=pF+'NegativeArraySizeException';_.tI=60;function vu(b,a){bv(b,a);return b;}
function uu(){}
_=uu.prototype=new av();_.tN=pF+'NullPointerException';_.tI=61;function qv(b,a){if(!ee(a,1))return false;return Av(b,a);}
function rv(b,a){return b.indexOf(a);}
function sv(a){return a.length;}
function tv(b,a){return uv(b,a,0);}
function uv(j,i,g){var a=new RegExp(i,'g');var h=[];var b=0;var k=j;var e=null;while(true){var f=a.exec(k);if(f==null||(k==''||b==g-1&&g>0)){h[b]=k;break;}else{h[b]=k.substring(0,f.index);k=k.substring(f.index+f[0].length,k.length);a.lastIndex=0;if(e==k){h[b]=k.substring(0,1);k=k.substring(1);}e=k;b++;}}if(g==0){for(var c=h.length-1;c>=0;c--){if(h[c]!=''){h.splice(c+1,h.length-(c+1));break;}}}var d=zv(h.length);var c=0;for(c=0;c<h.length;++c){d[c]=h[c];}return d;}
function vv(b,a){return rv(b,a)==0;}
function wv(b,a){return b.substr(a,b.length-a);}
function xv(c,a,b){return c.substr(a,b-a);}
function yv(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function zv(a){return Ed('[Ljava.lang.String;',[0],[1],[a],null);}
function Av(a,b){return String(a)==b;}
function Bv(a){return qv(this,a);}
function Dv(){var a=Cv;if(!a){a=Cv={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function Ev(){return this;}
function Fv(a){return ''+a;}
function aw(a){return a!==null?a.tS():'null';}
_=String.prototype;_.eQ=Bv;_.hC=Dv;_.tS=Ev;_.tN=pF+'String';_.tI=2;var Cv=null;function fv(a){jv(a);return a;}
function gv(b,a){kv(b,a);return b;}
function hv(a,b){return iv(a,aw(b));}
function iv(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function jv(a){kv(a,'');}
function kv(b,a){b.js=[a];b.length=a.length;}
function mv(a){a.fb();return a.js[0];}
function nv(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function ov(){return mv(this);}
function ev(){}
_=ev.prototype=new Bu();_.fb=nv;_.tS=ov;_.tN=pF+'StringBuffer';_.tI=0;function cw(){cw=eC;dw=new ot();}
function ew(a){cw();return C(a);}
var dw;function nw(b,a){bv(b,a);return b;}
function mw(){}
_=mw.prototype=new av();_.tN=pF+'UnsupportedOperationException';_.tI=62;function xw(b,a){b.c=a;return b;}
function zw(a){return a.a<a.c.yb();}
function Aw(){return zw(this);}
function Bw(){if(!zw(this)){throw new tB();}return this.c.D(this.b=this.a++);}
function Cw(){if(this.b<0){throw new gu();}this.c.rb(this.b);this.a=this.b;this.b=(-1);}
function ww(){}
_=ww.prototype=new Bu();_.F=Aw;_.eb=Bw;_.qb=Cw;_.tN=qF+'AbstractList$IteratorImpl';_.tI=0;_.a=0;_.b=(-1);function fy(f,d,e){var a,b,c;for(b=eA(f.s());Cz(b);){a=Dz(b);c=a.A();if(d===null?c===null:d.eQ(c)){if(e){Ez(b);}return a;}}return null;}
function gy(b){var a;a=b.s();return hx(new gx(),b,a);}
function hy(b){var a;a=pA(b);return wx(new vx(),b,a);}
function iy(a){return fy(this,a,false)!==null;}
function jy(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ee(d,21)){return false;}f=de(d,21);c=gy(this);e=f.db();if(!qy(c,e)){return false;}for(a=jx(c);qx(a);){b=rx(a);h=this.E(b);g=f.E(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function ky(b){var a;a=fy(this,b,false);return a===null?null:a.C();}
function ly(){var a,b,c;b=0;for(c=eA(this.s());Cz(c);){a=Dz(c);b+=a.hC();}return b;}
function my(){return gy(this);}
function ny(){var a,b,c,d;d='{';a=false;for(c=eA(this.s());Cz(c);){b=Dz(c);if(a){d+=', ';}else{a=true;}d+=aw(b.A());d+='=';d+=aw(b.C());}return d+'}';}
function fx(){}
_=fx.prototype=new Bu();_.o=iy;_.eQ=jy;_.E=ky;_.hC=ly;_.db=my;_.tS=ny;_.tN=qF+'AbstractMap';_.tI=63;function qy(e,b){var a,c,d;if(b===e){return true;}if(!ee(b,22)){return false;}c=de(b,22);if(c.yb()!=e.yb()){return false;}for(a=c.cb();a.F();){d=a.eb();if(!e.p(d)){return false;}}return true;}
function ry(a){return qy(this,a);}
function sy(){var a,b,c;a=0;for(b=this.cb();b.F();){c=b.eb();if(c!==null){a+=c.hC();}}return a;}
function oy(){}
_=oy.prototype=new pw();_.eQ=ry;_.hC=sy;_.tN=qF+'AbstractSet';_.tI=64;function hx(b,a,c){b.a=a;b.b=c;return b;}
function jx(b){var a;a=eA(b.b);return ox(new nx(),b,a);}
function kx(a){return this.a.o(a);}
function lx(){return jx(this);}
function mx(){return this.b.a.c;}
function gx(){}
_=gx.prototype=new oy();_.p=kx;_.cb=lx;_.yb=mx;_.tN=qF+'AbstractMap$1';_.tI=65;function ox(b,a,c){b.a=c;return b;}
function qx(a){return a.a.F();}
function rx(b){var a;a=b.a.eb();return a.A();}
function sx(){return qx(this);}
function tx(){return rx(this);}
function ux(){this.a.qb();}
function nx(){}
_=nx.prototype=new Bu();_.F=sx;_.eb=tx;_.qb=ux;_.tN=qF+'AbstractMap$2';_.tI=0;function wx(b,a,c){b.a=a;b.b=c;return b;}
function yx(b){var a;a=eA(b.b);return Dx(new Cx(),b,a);}
function zx(a){return oA(this.a,a);}
function Ax(){return yx(this);}
function Bx(){return this.b.a.c;}
function vx(){}
_=vx.prototype=new pw();_.p=zx;_.cb=Ax;_.yb=Bx;_.tN=qF+'AbstractMap$3';_.tI=0;function Dx(b,a,c){b.a=c;return b;}
function Fx(a){return a.a.F();}
function ay(a){var b;b=a.a.eb().C();return b;}
function by(){return Fx(this);}
function cy(){return ay(this);}
function dy(){this.a.qb();}
function Cx(){}
_=Cx.prototype=new Bu();_.F=by;_.eb=cy;_.qb=dy;_.tN=qF+'AbstractMap$4';_.tI=0;function mA(){mA=eC;uA=AA();}
function iA(a){{lA(a);}}
function jA(a){mA();iA(a);return a;}
function kA(a,b){mA();iA(a);rA(a,b);return a;}
function lA(a){a.a=gb();a.d=ib();a.b=ie(uA,cb);a.c=0;}
function nA(b,a){if(ee(a,1)){return EA(b.d,de(a,1))!==uA;}else if(a===null){return b.b!==uA;}else{return DA(b.a,a,a.hC())!==uA;}}
function oA(a,b){if(a.b!==uA&&CA(a.b,b)){return true;}else if(zA(a.d,b)){return true;}else if(xA(a.a,b)){return true;}return false;}
function pA(a){return cA(new yz(),a);}
function qA(c,a){var b;if(ee(a,1)){b=EA(c.d,de(a,1));}else if(a===null){b=c.b;}else{b=DA(c.a,a,a.hC());}return b===uA?null:b;}
function sA(c,a,d){var b;if(ee(a,1)){b=bB(c.d,de(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=aB(c.a,a,d,a.hC());}if(b===uA){++c.c;return null;}else{return b;}}
function rA(d,c){var a,b;b=eA(pA(c));while(Cz(b)){a=Dz(b);sA(d,a.A(),a.C());}}
function tA(c,a){var b;if(ee(a,1)){b=dB(c.d,de(a,1));}else if(a===null){b=c.b;c.b=ie(uA,cb);}else{b=cB(c.a,a,a.hC());}if(b===uA){return null;}else{--c.c;return b;}}
function vA(e,c){mA();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.n(a[f]);}}}}
function wA(d,a){mA();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=rz(c.substring(1),e);a.n(b);}}}
function xA(f,h){mA();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.C();if(CA(h,d)){return true;}}}}return false;}
function yA(a){return nA(this,a);}
function zA(c,d){mA();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(CA(d,a)){return true;}}}return false;}
function AA(){mA();}
function BA(){return pA(this);}
function CA(a,b){mA();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function FA(a){return qA(this,a);}
function DA(f,h,e){mA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(CA(h,d)){return c.C();}}}}
function EA(b,a){mA();return b[':'+a];}
function aB(f,h,j,e){mA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(CA(h,d)){var i=c.C();c.xb(j);return i;}}}else{a=f[e]=[];}var c=rz(h,j);a.push(c);}
function bB(c,a,d){mA();a=':'+a;var b=c[a];c[a]=d;return b;}
function cB(f,h,e){mA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(CA(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.C();}}}}
function dB(c,a){mA();a=':'+a;var b=c[a];delete c[a];return b;}
function nz(){}
_=nz.prototype=new fx();_.o=yA;_.s=BA;_.E=FA;_.tN=qF+'HashMap';_.tI=66;_.a=null;_.b=null;_.c=0;_.d=null;var uA;function pz(b,a,c){b.a=a;b.b=c;return b;}
function rz(a,b){return pz(new oz(),a,b);}
function sz(b){var a;if(ee(b,23)){a=de(b,23);if(CA(this.a,a.A())&&CA(this.b,a.C())){return true;}}return false;}
function tz(){return this.a;}
function uz(){return this.b;}
function vz(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function wz(a){var b;b=this.b;this.b=a;return b;}
function xz(){return this.a+'='+this.b;}
function oz(){}
_=oz.prototype=new Bu();_.eQ=sz;_.A=tz;_.C=uz;_.hC=vz;_.xb=wz;_.tS=xz;_.tN=qF+'HashMap$EntryImpl';_.tI=67;_.a=null;_.b=null;function cA(b,a){b.a=a;return b;}
function eA(a){return Az(new zz(),a.a);}
function fA(c){var a,b,d;if(ee(c,23)){a=de(c,23);b=a.A();if(nA(this.a,b)){d=qA(this.a,b);return CA(a.C(),d);}}return false;}
function gA(){return eA(this);}
function hA(){return this.a.c;}
function yz(){}
_=yz.prototype=new oy();_.p=fA;_.cb=gA;_.yb=hA;_.tN=qF+'HashMap$EntrySet';_.tI=68;function Az(c,b){var a;c.c=b;a=vy(new ty());if(c.c.b!==(mA(),uA)){xy(a,pz(new oz(),null,c.c.b));}wA(c.c.d,a);vA(c.c.a,a);c.a=a.cb();return c;}
function Cz(a){return a.a.F();}
function Dz(a){return a.b=de(a.a.eb(),23);}
function Ez(a){if(a.b===null){throw hu(new gu(),'Must call next() before remove().');}else{a.a.qb();tA(a.c,a.b.A());a.b=null;}}
function Fz(){return Cz(this);}
function aA(){return Dz(this);}
function bA(){Ez(this);}
function zz(){}
_=zz.prototype=new Bu();_.F=Fz;_.eb=aA;_.qb=bA;_.tN=qF+'HashMap$EntrySetIterator';_.tI=0;_.a=null;_.b=null;function fB(a){a.a=jA(new nz());return a;}
function hB(a){var b;b=sA(this.a,a,At(true));return b===null;}
function iB(a){return nA(this.a,a);}
function jB(){return jx(gy(this.a));}
function kB(){return this.a.c;}
function lB(){return gy(this.a).tS();}
function eB(){}
_=eB.prototype=new oy();_.n=hB;_.p=iB;_.cb=jB;_.yb=kB;_.tS=lB;_.tN=qF+'HashSet';_.tI=69;_.a=null;function rB(d,c,a,b){bv(d,c);return d;}
function qB(){}
_=qB.prototype=new av();_.tN=qF+'MissingResourceException';_.tI=70;function tB(){}
_=tB.prototype=new av();_.tN=qF+'NoSuchElementException';_.tI=71;function yB(a){a.a=vy(new ty());return a;}
function zB(b,a){return xy(b.a,a);}
function BB(b,a){return CB(b,a);}
function CB(b,a){return By(b.a,a);}
function DB(a,b){wy(this.a,a,b);}
function EB(a){return zB(this,a);}
function FB(a){return Ay(this.a,a);}
function aC(a){return CB(this,a);}
function bC(){return this.a.cb();}
function cC(a){return Ey(this.a,a);}
function dC(){return this.a.b;}
function xB(){}
_=xB.prototype=new vw();_.m=DB;_.n=EB;_.p=FB;_.D=aC;_.cb=bC;_.rb=cC;_.yb=dC;_.tN=qF+'Vector';_.tI=72;_.a=null;function CC(g,h){var a,c,d,e,f;c=hD(new fD(),h);try{e=bF(c);f=uC(new tC(),g,e,c);pg(f,1);}catch(a){a=le(a);if(ee(a,25)){d=a;jw(d);}else throw a;}}
function DC(g,h){var a,c,d,e,f;c=qD(new oD(),h);try{e=bF(c);f=yC(new xC(),g,e,c);pg(f,1);}catch(a){a=le(a);if(ee(a,25)){d=a;Bg('Exception: '+d.b);jw(d);}else throw a;}}
function EC(r){var a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s;k='DEFAULT-identities-and-usecases.xml';l='DEFAULT-policy.xml';f='DEFAULT-cancel.html';m='DEFAULT-save-policy.xml';try{h=td('getURLs');k=qd(h,'identities-url');l=qd(h,'policy-url');f=qd(h,'cancel-url');m=qd(h,'save-url');}catch(a){a=le(a);if(ee(a,24)){i=a;Bg('Exception: '+i.b);}else throw a;}DC(r,l);CC(r,k);s=zn(new xn());oi(zm(),s);p=zn(new xn());An(s,p);q=ln(new dn());nn(q,30);An(p,q);o=zi(new si(),'Save User or Group',hC(new gC(),r,q));An(p,o);j=bl(new Fk());fl(j,(Ak(),Bk));An(s,j);d=bl(new Fk());An(s,d);n=m;r.g=zi(new si(),'Save Policy',lC(new kC(),r,n));sn(r.g,'gwt-wyona-SaveButton');cl(d,r.g);g=f;e=zi(new si(),'Cancel',pC(new oC(),r,g));sn(r.g,'gwt-wyona-CancelButton');cl(d,e);r.b=bE(new FD(),r.j,r.i,r.a);r.d=hE(new fE(),r.j,r.e,r.c,r.h);c=bD(new FC(),r.b.a,r.d.c,r.d);sn(c,'gwt-wyona-AddRemoveWidget');cl(j,r.b);cl(j,c);cl(j,r.d);}
function fC(){}
_=fC.prototype=new Bu();_.tN=rF+'AccessPolicyEditor';_.tI=0;_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;_.h=true;_.i=null;_.j=10;function hC(b,a,c){b.a=a;b.b=c;return b;}
function jC(d){var a,b,c;b=El(this.a.b.a);for(a=0;a<b;a++){c=Fl(this.a.b.a,a);if(rv(c,hn(this.b))>=0)Bg('Result: '+c);}}
function gC(){}
_=gC.prototype=new Bu();_.ib=jC;_.tN=rF+'AccessPolicyEditor$1';_.tI=73;function lC(b,a,c){b.a=a;b.b=c;return b;}
function nC(f){var a,c,d,e;c=xD(new wD(),this.b);try{e=zD(c,pE(this.a.d),kE(this.a.d),oE(this.a.d));}catch(a){a=le(a);if(ee(a,25)){d=a;Bg('Exception: '+d.b);}else throw a;}}
function kC(){}
_=kC.prototype=new Bu();_.ib=nC;_.tN=rF+'AccessPolicyEditor$2';_.tI=74;function pC(b,a,c){b.a=c;return b;}
function rC(a,b){$wnd.location.href=b;}
function sC(a){Bg('Redirect to '+this.a);rC(this,this.a);}
function oC(){}
_=oC.prototype=new Bu();_.ib=sC;_.tN=rF+'AccessPolicyEditor$3';_.tI=75;function vC(){vC=eC;mg();}
function uC(b,a,d,c){vC();b.a=a;b.c=d;b.b=c;kg(b);return b;}
function wC(){if(xc(this.c)){og(this,10);}else{this.a.i=mD(this.b);this.a.a=kD(this.b);this.a.f=lD(this.b);dE(this.a.b,this.a.j,this.a.i,this.a.a);lg(this);Bg('Identities have been loaded!');}}
function tC(){}
_=tC.prototype=new fg();_.ub=wC;_.tN=rF+'AccessPolicyEditor$4';_.tI=76;function zC(){zC=eC;mg();}
function yC(b,a,d,c){zC();b.a=a;b.c=d;b.b=c;kg(b);return b;}
function AC(){if(xc(this.c)){og(this,10);}else{this.a.e=uD(this.b);this.a.c=tD(this.b);rE(this.a.d,this.a.j,this.a.e,this.a.c);this.a.h=this.b.b;sE(this.a.d,this.a.h);lg(this);Bg('Policy has been loaded!');}}
function xC(){}
_=xC.prototype=new fg();_.ub=AC;_.tN=rF+'AccessPolicyEditor$5';_.tI=77;function aD(a){a.b=ck(new bk());}
function bD(d,a,c,b){aD(d);Cj(d,d.b);d.e=zi(new si(),'<',d);dk(d.b,d.e);d.a=zi(new si(),'>',d);dk(d.b,d.a);d.c=a;d.d=c;return d;}
function dD(b,a){if(rv(a,'(')>0){return xv(a,0,rv(a,'('));}else{return a;}}
function eD(c){var a,b;if(c===this.a){a=am(this.c);if(a>=0){b=bm(this.c,a);Bg('Add selected identity '+b+' to policy');em(this.c,a);Al(this.d,xv(b,0,1)+': (-,-) '+yv(wv(b,2)),b);}else{Bg('No identity selected yet! Please select an identity.');}}else if(c===this.e){a=am(this.d);if(a>=0){b=bm(this.d,a);Bg('Remove selected identity '+b+' from policy');em(this.d,a);zl(this.c,dD(this,b));}else{Bg('No identity selected yet! Please select an identity.');}}}
function FC(){}
_=FC.prototype=new Aj();_.ib=eD;_.tN=rF+'AddRemoveIdentitiesWidget';_.tI=78;_.a=null;_.c=null;_.d=null;_.e=null;function DE(a){a.d=jA(new nz());}
function EE(a,b){DE(a);a.e=Db(new yb(),(Fb(),dc),b);cF(a);return a;}
function FE(e){var a,b,c,d;b='';a=kA(new nz(),e.d);for(d=eA(pA(a));Cz(d);){c=Dz(d);b+=c.A()+''+c.C();if(Cz(d)){b+='&';}}return b;}
function bF(a){return ac(a.e,FE(a),a);}
function cF(a){bc(a.e,'Content-Type','application/x-www-form-urlencoded');}
function dF(b,a){Bg('Exception: '+a.b);}
function CE(){}
_=CE.prototype=new Bu();_.kb=dF;_.tN=sF+'AsynchronousAgent';_.tI=0;_.e=null;function gD(a){a.c=yB(new xB());a.a=yB(new xB());a.b=yB(new xB());}
function hD(a,b){EE(a,b);gD(a);return a;}
function jD(d,c,a){var b;b=c.z(a);return de(b.bb(0),16);}
function kD(c){var a,b;a=Ed('[Ljava.lang.String;',[0],[1],[c.a.a.b],null);for(b=0;b<c.a.a.b;b++){a[b]=de(BB(c.a,b),1);}return a;}
function lD(c){var a,b;b=Ed('[Ljava.lang.String;',[0],[1],[c.b.a.b],null);for(a=0;a<c.b.a.b;a++){b[a]=de(BB(c.b,a),1);}return b;}
function mD(b){var a,c;c=Ed('[Ljava.lang.String;',[0],[1],[b.c.a.b],null);for(a=0;a<b.c.a.b;a++){c[a]=de(BB(b.c,a),1);}return c;}
function nD(d,e){var a,b,c,f,g,h,i,j;h=Fp(tb(e)).w();j=jD(this,h,'users');i=j.z('user');for(c=0;c<i.B();c++){zB(this.c,de(i.bb(c),16).v('id'));}b=jD(this,h,'groups');a=b.z('group');for(c=0;c<a.B();c++){zB(this.a,de(a.bb(c),16).v('id'));}g=jD(this,h,'rights');f=g.z('right');for(c=0;c<f.B();c++){zB(this.b,de(f.bb(c),16).v('id'));}}
function fD(){}
_=fD.prototype=new CE();_.mb=nD;_.tN=rF+'AsynchronousIdentitiesAndRightsGetter';_.tI=0;function pD(a){a.c=yB(new xB());a.a=yB(new xB());}
function qD(a,b){EE(a,b);pD(a);return a;}
function sD(d,c,a){var b;b=c.z(a);if(b.B()>0){return de(b.bb(0),16);}else{return null;}}
function tD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[27],[c.a.a.b],null);for(a=0;a<b.a;a++){b[a]=de(BB(c.a,a),27);}return b;}
function uD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[26],[c.c.a.b],null);for(a=0;a<b.a;a++){b[a]=de(BB(c.c,a),26);}return b;}
function vD(e,f){var a,b,c,d,g,h,i,j,k,l,m,n;j=Fp(tb(f)).w();k=j.v('use-inherited-policies');if(k===null){this.b=true;}else{if(qv(k,'false')){this.b=false;}else{this.b=true;}}n=sD(this,j,'world');m=j.z('user');for(c=0;c<m.B();c++){l=de(m.bb(c),16);h=l.z('right');i=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[28],[h.B()],null);for(d=0;d<i.a;d++){g=de(h.bb(d),16);i[d]=xE(new wE(),g.v('id'),true);}zB(this.c,AE(new zE(),de(m.bb(c),16).v('id'),i));}b=j.z('group');for(c=0;c<b.B();c++){a=de(b.bb(c),16);h=a.z('right');i=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[28],[h.B()],null);for(d=0;d<i.a;d++){g=de(h.bb(d),16);i[d]=xE(new wE(),g.v('id'),true);}zB(this.a,DD(new CD(),a.v('id'),i));}}
function oD(){}
_=oD.prototype=new CE();_.mb=vD;_.tN=rF+'AsynchronousPolicyGetter';_.tI=0;_.b=true;function xD(a,b){Bg('Save policy to: '+b);a.a=Db(new yb(),(Fb(),ec),b);return a;}
function zD(f,h,b,g){var a,c,d,e;a=gv(new ev(),'<?xml version="1.0"?>');iv(a,'<policy xmlns="http://www.wyona.org/security/1.0" use-inherited-policies="'+g+'">');if(h!==null){for(c=0;c<h.a;c++){iv(a,'<user id="'+h[c].a+'">');e=h[c].b;if(e!==null){for(d=0;d<e.a;d++){iv(a,'<right id="'+e[d].a+'" permission="'+e[d].b+'">'+e[d].a+'<\/right>');}}else{iv(a,'<right id="r" permission="false">r<\/right>');iv(a,'<right id="w" permission="false">w<\/right>');}iv(a,'<\/user>');}}if(b!==null){for(c=0;c<b.a;c++){iv(a,'<group id="'+b[c].a+'">');e=b[c].b;if(e!==null){for(d=0;d<e.a;d++){iv(a,'<right id="'+e[d].a+'" permission="'+e[d].b+'">'+e[d].a+'<\/right>');}}else{iv(a,'<right id="r" permission="false">r<\/right>');iv(a,'<right id="w" permission="false">w<\/right>');}iv(a,'<\/group>');}}iv(a,'<\/policy>');return ac(f.a,mv(a),f);}
function AD(b,a){Bg('Exception: '+a.b);}
function BD(a,b){if(sb(b)==200){Bg('Policy has been saved successfully!');}else{Bg('Policy has NOT been saved! Please check log files on server.');}}
function wD(){}
_=wD.prototype=new Bu();_.kb=AD;_.mb=BD;_.tN=rF+'AsynchronousPolicySetter';_.tI=0;_.a=null;function DD(c,a,b){c.a=a;c.b=b;return c;}
function CD(){}
_=CD.prototype=new Bu();_.tN=rF+'Group';_.tI=79;_.a=null;_.b=null;function aE(a){a.b=zn(new xn());}
function bE(b,d,c,a){aE(b);Cj(b,b.b);An(b.b,kl(new il(),'Identities'));b.a=yl(new ol(),true);b.a.l(b);dE(b,d,c,a);An(b.b,b.a);return b;}
function dE(c,e,d,a){var b;Cl(c.a);gm(c.a,e);if(d!==null){for(b=0;b<d.a;b++){zl(c.a,'u: '+d[b]);}}else{zl(c.a,'No users yet!');}if(a!==null){for(b=0;b<a.a;b++){zl(c.a,'g: '+a[b]);}}else{zl(c.a,'No groups yet!');}}
function eE(a){}
function FD(){}
_=FD.prototype=new Aj();_.ib=eE;_.tN=rF+'IdentitiesListBoxWidget';_.tI=80;_.a=null;function gE(a){a.f=zn(new xn());}
function hE(b,e,d,a,c){gE(b);Cj(b,b.f);An(b.f,kl(new il(),'Policy'));b.d=ej(new bj(),'Inherit rights from parent policies');sE(b,c);An(b.f,b.d);b.c=yl(new ol(),true);b.c.l(b);rE(b,e,d,a);An(b.f,b.c);b.e=ej(new bj(),'Read');b.e.l(b);An(b.f,b.e);b.g=ej(new bj(),'Write');b.g.l(b);An(b.f,b.g);return b;}
function iE(g,a,f){var b,c,d,e;e=yB(new xB());for(c=0;c<a.a;c++){zB(e,a[c].a);}b=false;for(c=0;c<a.a;c++){if(qv(a[c].a,f)){b=true;break;}}if(!b)zB(e,f);d=Ed('[Ljava.lang.String;',[0],[1],[e.a.b],null);for(c=0;c<d.a;c++){d[c]=de(BB(e,c),1);}return d;}
function kE(g){var a,b,c,d,e,f;b=yB(new xB());for(c=0;c<El(g.c);c++){e=Fl(g.c,c);f=mE(g,e);d=lE(g,c);if(vv(d,'g:')){zB(b,DD(new CD(),yv(wv(d,2)),f));}}a=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[27],[b.a.b],null);for(c=0;c<a.a;c++){a[c]=de(BB(b,c),27);}return a;}
function lE(b,a){return bm(b.c,a);}
function mE(f,b){var a,c,d,e;if(rv(b,'(')>0){d=tv(xv(b,rv(b,'(')+1,rv(b,')')),',');e=yB(new xB());for(a=0;a<d.a;a++){if(!qv(d[a],'-')){zB(e,xE(new wE(),d[a],true));}else{if(a==0){zB(e,xE(new wE(),'r',false));}else if(a==1){zB(e,xE(new wE(),'w',false));}else{zB(e,xE(new wE(),'TODO',false));}}}c=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[28],[e.a.b],null);for(a=0;a<c.a;a++){c[a]=de(BB(e,a),28);}return c;}else{return Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[28],[0],null);}}
function nE(b){var a;a=am(b.c);if(a>=0){return Fl(b.c,a);}return null;}
function oE(a){return gj(a.d);}
function pE(e){var a,b,c,d,f,g;g=yB(new xB());for(a=0;a<El(e.c);a++){c=Fl(e.c,a);d=mE(e,c);b=lE(e,a);if(vv(b,'u:')){zB(g,AE(new zE(),yv(wv(b,2)),d));}}f=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[26],[g.a.b],null);for(a=0;a<f.a;a++){f[a]=de(BB(g,a),26);}return f;}
function qE(f,a,e){var b,c,d;d=yB(new xB());for(b=0;b<a.a;b++){if(!qv(a[b].a,e)){zB(d,a[b].a);}}c=Ed('[Ljava.lang.String;',[0],[1],[d.a.b],null);for(b=0;b<c.a;b++){c[b]=de(BB(d,b),1);}return c;}
function rE(g,j,h,a){var b,c,d,e,f,i,k;Cl(g.c);gm(g.c,j);if(h!==null||a!==null){if(h!==null){for(b=0;b<h.a;b++){d='u: (';f=h[b].b;e=false;for(c=0;c<f.a;c++){if(qv(f[c].a,g.a)){e=true;break;}}if(e){d=d+g.a;}else{d=d+'-';}d=d+',';k=false;for(c=0;c<f.a;c++){if(f[c].eQ(g.b)){k=true;break;}}if(k){d=d+g.b;}else{d=d+'-';}d=d+') '+h[b].a;i='u: '+h[b].a;Al(g.c,d,i);}}if(a!==null){for(b=0;b<a.a;b++){d='g: (';f=a[b].b;e=false;for(c=0;c<f.a;c++){if(qv(f[c].a,g.a)){e=true;break;}}if(e){d=d+g.a;}else{d=d+'-';}d=d+',';k=false;for(c=0;c<f.a;c++){if(f[c].eQ(g.b)){k=true;break;}}if(k){d=d+g.b;}else{d=d+'-';}d=d+') '+a[b].a;i='g: '+a[b].a;Al(g.c,d,i);}}else{Bg('No groups!');}}else{zl(g.c,'No identities yet!');}}
function sE(a,b){if(a.d!==null){hj(a.d,b);}}
function tE(g,h,a,e,b){var c,d,f,i;f=gv(new ev(),h+':');iv(f,' (');d=false;i=false;for(c=0;c<e.a;c++){if(qv(e[c],g.a)){d=true;}if(qv(e[c],g.b)){i=true;}}if(d){iv(f,g.a);}else{iv(f,'-');}iv(f,',');if(i){iv(f,g.b);}else{iv(f,'-');}iv(f,')');iv(f,' '+a);fm(g.c,b,mv(f));}
function uE(d,c){var a,b;b=am(d.c);if(b>=0){a=lE(d,b);tE(d,xv(a,0,1),yv(wv(a,2)),c,b);}else{Bg('Exception: No list item selected!');}}
function vE(h){var a,b,c,d,e,f,g;if(h===this.e||h===this.g){g=nE(this);if(g!==null){if(h===this.e){a=mE(this,g);if(gj(this.e)){Bg('Add Read right from selected identity '+g+' from policy');e=iE(this,a,this.a);}else{Bg('Remove Read right from selected identity '+g+' from policy');e=qE(this,a,this.a);}uE(this,e);}else if(h===this.g){a=mE(this,g);if(gj(this.g)){Bg('Add Write right from selected identity '+g+' from policy');e=iE(this,a,this.b);}else{Bg('Remove Write right from selected identity '+g+' from policy');e=qE(this,a,this.b);}uE(this,e);}}else{Bg('No identity has been selected! Please select an identity in order to assign rights.');hj(this.e,false);hj(this.g,false);}}else if(h===this.c){g=nE(this);f=mE(this,g);b=false;c=false;for(d=0;d<f.a;d++){if(qv(f[d].a,this.a)){hj(this.e,true);b=true;}else if(qv(f[d].a,this.b)){hj(this.g,true);c=true;}}if(!b)hj(this.e,false);if(!c)hj(this.g,false);}}
function fE(){}
_=fE.prototype=new Aj();_.ib=vE;_.tN=rF+'PolicyListBoxWidget';_.tI=81;_.a='r';_.b='w';_.c=null;_.d=null;_.e=null;_.g=null;function xE(c,a,b){c.a=a;c.b=b;return c;}
function wE(){}
_=wE.prototype=new Bu();_.tN=rF+'Right';_.tI=82;_.a=null;_.b=false;function AE(c,a,b){c.a=a;c.b=b;return c;}
function zE(){}
_=zE.prototype=new Bu();_.tN=rF+'User';_.tI=83;_.a=null;_.b=null;function jt(){EC(new fC());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{jt();}catch(a){b(d);}else{jt();}}
var he=[{},{},{1:1},{4:1},{4:1,25:1},{4:1,25:1},{4:1,18:1,25:1},{2:1},{6:1},{6:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{3:1},{2:1,5:1},{2:1},{7:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{20:1},{20:1},{20:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{9:1,10:1,11:1,12:1,13:1,14:1},{7:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{4:1,25:1},{15:1},{15:1},{15:1},{15:1},{15:1},{15:1},{15:1},{4:1,25:1},{15:1},{15:1,17:1},{15:1,16:1},{15:1},{15:1},{15:1},{4:1,25:1},{19:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{21:1},{22:1},{22:1},{21:1},{23:1},{22:1},{22:1},{4:1,24:1,25:1},{4:1,25:1},{20:1},{8:1},{8:1},{8:1},{6:1},{6:1},{8:1,11:1,12:1,13:1,14:1},{27:1},{8:1,11:1,12:1,13:1,14:1},{8:1,11:1,12:1,13:1,14:1},{28:1},{26:1}];if (org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor) {  var __gwt_initHandlers = org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.__gwt_initHandlers;  org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.onScriptLoad(gwtOnLoad);}})();