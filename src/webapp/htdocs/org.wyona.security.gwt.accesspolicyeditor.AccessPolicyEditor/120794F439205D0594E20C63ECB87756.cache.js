(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,bF='com.google.gwt.core.client.',cF='com.google.gwt.http.client.',dF='com.google.gwt.i18n.client.',eF='com.google.gwt.lang.',fF='com.google.gwt.user.client.',gF='com.google.gwt.user.client.impl.',hF='com.google.gwt.user.client.ui.',iF='com.google.gwt.user.client.ui.impl.',jF='com.google.gwt.xml.client.',kF='com.google.gwt.xml.client.impl.',lF='java.io.',mF='java.lang.',nF='java.util.',oF='org.wyona.security.gwt.accesspolicyeditor.client.',pF='org.wyona.yanel.gwt.client.';function eC(){}
function Du(a){return this===a;}
function Eu(){return ew(this);}
function Fu(){return this.tN+'@'+this.hC();}
function Bu(){}
_=Bu.prototype={};_.eQ=Du;_.hC=Eu;_.tS=Fu;_.toString=function(){return this.tS();};_.tN=mF+'Object';_.tI=1;function w(a){return a==null?null:a.tN;}
var y=null;function B(a){return a==null?0:a.$H?a.$H:(a.$H=D());}
function C(a){return a==null?0:a.$H?a.$H:(a.$H=D());}
function D(){return ++E;}
var E=0;function gw(b,a){b.b=a;return b;}
function iw(b,a){if(b.a!==null){throw hu(new gu(),"Can't overwrite cause");}if(a===b){throw eu(new du(),'Self-causation not permitted');}b.a=a;return b;}
function jw(a){kw(a,(cw(),dw));}
function kw(e,d){var a,b,c;c=fv(new ev());b=e;while(b!==null){a=b.b;if(b!==e){iv(c,'Caused by: ');}iv(c,b.tN);iv(c,': ');iv(c,a===null?'(No exception detail)':a);iv(c,'\n');b=b.a;}}
function lw(){var a,b;a=w(this);b=this.b;if(b!==null){return a+': '+b;}else{return a;}}
function fw(){}
_=fw.prototype=new Bu();_.tS=lw;_.tN=mF+'Throwable';_.tI=3;_.a=null;_.b=null;function bu(b,a){gw(b,a);return b;}
function au(){}
_=au.prototype=new fw();_.tN=mF+'Exception';_.tI=4;function bv(b,a){bu(b,a);return b;}
function av(){}
_=av.prototype=new au();_.tN=mF+'RuntimeException';_.tI=5;function ab(c,b,a){bv(c,'JavaScript '+b+' exception: '+a);return c;}
function F(){}
_=F.prototype=new av();_.tN=bF+'JavaScriptException';_.tI=6;function eb(b,a){if(!ge(a,2)){return false;}return jb(b,fe(a,2));}
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
_=cb.prototype=new Bu();_.eQ=kb;_.hC=lb;_.tS=nb;_.tN=bF+'JavaScriptObject';_.tI=7;function rc(b,d,c,a){if(d===null){throw new uu();}if(a===null){throw new uu();}if(c<0){throw new du();}b.a=c;b.c=d;if(c>0){b.b=vb(new ub(),b,a);rg(b.b,c);}else{b.b=null;}return b;}
function tc(a){var b;if(a.c!==null){b=a.c;a.c=null;dd(b);sc(a);}}
function sc(a){if(a.b!==null){ng(a.b);}}
function vc(e,a){var b,c,d,f;if(e.c===null){return;}sc(e);f=e.c;e.c=null;b=ed(f);if(b!==null){c=bv(new av(),b);a.kb(e,c);}else{d=yc(f);a.mb(e,d);}}
function wc(b,a){if(b.c===null){return;}tc(b);a.kb(b,oc(new nc(),b,b.a));}
function xc(b){var a;if(b.c===null){return false;}a=fd(b.c);switch(a){case 1:case 2:case 3:return true;}return false;}
function yc(b){var a;a=qb(new pb(),b);return a;}
function zc(a){var b;b=y;{vc(this,a);}}
function ob(){}
_=ob.prototype=new Bu();_.t=zc;_.tN=cF+'Request';_.tI=0;_.a=0;_.b=null;_.c=null;function Ac(){}
_=Ac.prototype=new Bu();_.tN=cF+'Response';_.tI=0;function qb(a,b){a.a=b;return a;}
function sb(a){return hd(a.a);}
function tb(a){return gd(a.a);}
function pb(){}
_=pb.prototype=new Ac();_.tN=cF+'Request$1';_.tI=0;function og(){og=eC;yg=vy(new ty());{xg();}}
function mg(a){og();return a;}
function ng(a){if(a.d){sg(a.e);}else{tg(a.e);}Fy(yg,a);}
function pg(a){if(!a.d){Fy(yg,a);}a.ub();}
function rg(b,a){if(a<=0){throw eu(new du(),'must be positive');}ng(b);b.d=false;b.e=vg(b,a);xy(yg,b);}
function qg(b,a){if(a<=0){throw eu(new du(),'must be positive');}ng(b);b.d=true;b.e=ug(b,a);xy(yg,b);}
function sg(a){og();$wnd.clearInterval(a);}
function tg(a){og();$wnd.clearTimeout(a);}
function ug(b,a){og();return $wnd.setInterval(function(){b.u();},a);}
function vg(b,a){og();return $wnd.setTimeout(function(){b.u();},a);}
function wg(){var a;a=y;{pg(this);}}
function xg(){og();Cg(new ig());}
function hg(){}
_=hg.prototype=new Bu();_.u=wg;_.tN=fF+'Timer';_.tI=8;_.d=false;_.e=0;var yg;function wb(){wb=eC;og();}
function vb(b,a,c){wb();b.a=a;b.b=c;mg(b);return b;}
function xb(){wc(this.a,this.b);}
function ub(){}
_=ub.prototype=new hg();_.ub=xb;_.tN=cF+'Request$2';_.tI=9;function Fb(){Fb=eC;dc=Ab(new zb(),'GET');ec=Ab(new zb(),'POST');fc=pi(new oi());}
function Db(b,a,c){Fb();Eb(b,a===null?null:a.a,c);return b;}
function Eb(b,a,c){Fb();Ec('httpMethod',a);Ec('url',c);b.b=a;b.d=c;return b;}
function ac(g,d,a){var b,c,e,f,h;h=ri(fc);{b=id(h,g.b,g.d,true);}if(b!==null){e=lc(new kc(),g.d);iw(e,ic(new hc(),b));throw e;}cc(g,h);c=rc(new ob(),h,g.c,a);f=jd(h,c,d,a);if(f!==null){throw ic(new hc(),f);}return c;}
function bc(b,a,c){Ec('header',a);Ec('value',c);if(b.a===null){b.a=jA(new nz());}sA(b.a,a,c);}
function cc(e,f){var a,b,c,d;if(e.a!==null&&e.a.c>0){a=pA(e.a);d=eA(a);while(Cz(d)){c=Dz(d);b=kd(f,fe(c.A(),1),fe(c.C(),1));if(b!==null){throw ic(new hc(),b);}}}else{kd(f,'Content-Type','text/plain; charset=utf-8');}}
function yb(){}
_=yb.prototype=new Bu();_.tN=cF+'RequestBuilder';_.tI=0;_.a=null;_.b=null;_.c=0;_.d=null;var dc,ec,fc;function Ab(b,a){b.a=a;return b;}
function Cb(){return this.a;}
function zb(){}
_=zb.prototype=new Bu();_.tS=Cb;_.tN=cF+'RequestBuilder$Method';_.tI=0;_.a=null;function ic(b,a){bu(b,a);return b;}
function hc(){}
_=hc.prototype=new au();_.tN=cF+'RequestException';_.tI=10;function lc(a,b){ic(a,'The URL '+b+' is invalid or violates the same-origin security restriction');return a;}
function kc(){}
_=kc.prototype=new hc();_.tN=cF+'RequestPermissionException';_.tI=11;function oc(b,a,c){ic(b,qc(c));return b;}
function qc(a){return 'A request timeout has expired after '+ou(a)+' ms';}
function nc(){}
_=nc.prototype=new hc();_.tN=cF+'RequestTimeoutException';_.tI=12;function Ec(a,b){Fc(a,b);if(0==sv(yv(b))){throw eu(new du(),a+' can not be empty');}}
function Fc(a,b){if(null===b){throw vu(new uu(),a+' can not be null');}}
function dd(a){a.onreadystatechange=ti;a.abort();}
function ed(b){try{if(b.status===undefined){return 'XmlHttpRequest.status == undefined, please see Safari bug '+'http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';}return null;}catch(a){return 'Unable to read XmlHttpRequest.status; likely causes are a '+'networking error or bad cross-domain request. Please see '+'https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more '+'details';}}
function fd(a){return a.readyState;}
function gd(a){return a.responseText;}
function hd(a){return a.status;}
function id(e,c,d,b){try{e.open(c,d,b);return null;}catch(a){return a.message||a.toString();}}
function jd(e,c,d,b){e.onreadystatechange=function(){if(e.readyState==cd){e.onreadystatechange=ti;c.t(b);}};try{e.send(d);return null;}catch(a){e.onreadystatechange=ti;return a.message||a.toString();}}
function kd(d,b,c){try{d.setRequestHeader(b,c);return null;}catch(a){return a.message||a.toString();}}
var cd=4;function pd(){pd=eC;sd=jA(new nz());}
function md(b,a){pd();if(a===null||qv('',a)){throw eu(new du(),'Cannot create a Dictionary with a null or empty name');}b.b='Dictionary '+a;od(b,a);if(b.a===null){throw rB(new qB(),"Cannot find JavaScript object with the name '"+a+"'",a,null);}return b;}
function nd(b,a){for(x in b.a){a.n(x);}}
function od(c,b){try{if(typeof $wnd[b]!='object'){ud(b);}c.a=$wnd[b];}catch(a){ud(b);}}
function qd(b,a){var c=b.a[a];if(c==null|| !Object.prototype.hasOwnProperty.call(b.a,a)){b.tb(a);}return String(c);}
function rd(b){var a;a=fB(new eB());nd(b,a);return a;}
function td(a){pd();var b;b=fe(qA(sd,a),3);if(b===null){b=md(new ld(),a);sA(sd,a,b);}return b;}
function vd(b){var a,c;c=rd(this);a="Cannot find '"+b+"' in "+this;if(c.a.c<20){a+='\n keys found: '+c;}throw rB(new qB(),a,this.b,b);}
function ud(a){pd();throw rB(new qB(),"'"+a+"' is not a JavaScript object and cannot be used as a Dictionary",null,a);}
function wd(){return this.b;}
function ld(){}
_=ld.prototype=new Bu();_.tb=vd;_.tS=wd;_.tN=dF+'Dictionary';_.tI=13;_.a=null;_.b=null;var sd;function yd(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function Ad(a,b,c){return a[b]=c;}
function Bd(b,a){return b[a];}
function Dd(b,a){return b[a];}
function Cd(a){return a.length;}
function Fd(e,d,c,b,a){return Ed(e,d,c,b,0,Cd(b),a);}
function Ed(j,i,g,c,e,a,b){var d,f,h;if((f=Bd(c,e))<0){throw new su();}h=yd(new xd(),f,Bd(i,e),Bd(g,e),j);++e;if(e<a){j=wv(j,1);for(d=0;d<f;++d){Ad(h,d,Ed(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){Ad(h,d,b);}}return h;}
function ae(f,e,c,g){var a,b,d;b=Cd(g);d=yd(new xd(),b,e,c,f);for(a=0;a<b;++a){Ad(d,a,Dd(g,a));}return d;}
function be(a,b,c){if(c!==null&&a.b!=0&& !ge(c,a.b)){throw new qt();}return Ad(a,b,c);}
function xd(){}
_=xd.prototype=new Bu();_.tN=eF+'Array';_.tI=0;function ee(b,a){return !(!(b&&je[b][a]));}
function fe(b,a){if(b!=null)ee(b.tI,a)||ie();return b;}
function ge(b,a){return b!=null&&ee(b.tI,a);}
function ie(){throw new Ct();}
function he(a){if(a!==null){throw new Ct();}return a;}
function ke(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var je;function ne(a){if(ge(a,4)){return a;}return ab(new F(),pe(a),oe(a));}
function oe(a){return a.message;}
function pe(a){return a.name;}
function re(){re=eC;rf=vy(new ty());{mf=new jh();oh(mf);}}
function se(b,a){re();zh(mf,b,a);}
function te(a,b){re();return mh(mf,a,b);}
function ue(){re();return Bh(mf,'button');}
function ve(){re();return Bh(mf,'div');}
function we(){re();return Ch(mf,'checkbox');}
function xe(){re();return Ch(mf,'text');}
function ye(){re();return Bh(mf,'label');}
function ze(a){re();return Dh(mf,a);}
function Ae(){re();return Bh(mf,'span');}
function Be(){re();return Bh(mf,'tbody');}
function Ce(){re();return Bh(mf,'td');}
function De(){re();return Bh(mf,'tr');}
function Ee(){re();return Bh(mf,'table');}
function bf(b,a,d){re();var c;c=y;{af(b,a,d);}}
function af(b,a,c){re();var d;if(a===qf){if(df(b)==8192){qf=null;}}d=Fe;Fe=b;try{c.hb(b);}finally{Fe=d;}}
function cf(b,a){re();Eh(mf,b,a);}
function df(a){re();return Fh(mf,a);}
function ef(a){re();uh(mf,a);}
function ff(a){re();return vh(mf,a);}
function jf(a,b){re();return ci(mf,a,b);}
function gf(a,b){re();return ai(mf,a,b);}
function hf(a,b){re();return bi(mf,a,b);}
function kf(a){re();return di(mf,a);}
function lf(a){re();return wh(mf,a);}
function nf(c,b,d,a){re();ei(mf,c,b,d,a);}
function of(a){re();var b,c;c=true;if(rf.b>0){b=he(By(rf,rf.b-1));if(!(c=null.Ab())){cf(a,true);ef(a);}}return c;}
function pf(b,a){re();fi(mf,b,a);}
function uf(a,b,c){re();ii(mf,a,b,c);}
function sf(a,b,c){re();gi(mf,a,b,c);}
function tf(a,b,c){re();hi(mf,a,b,c);}
function vf(a,b){re();ji(mf,a,b);}
function wf(a,b){re();ki(mf,a,b);}
function xf(a,b){re();li(mf,a,b);}
function yf(b,c,a){re();mi(mf,b,c,a);}
function zf(b,a,c){re();ni(mf,b,a,c);}
function Af(a,b){re();qh(mf,a,b);}
function Bf(a){re();return rh(mf,a);}
var Fe=null,mf=null,qf=null,rf;function Ef(a){if(ge(a,5)){return te(this,fe(a,5));}return eb(ke(this,Cf),a);}
function Ff(){return fb(ke(this,Cf));}
function ag(){return Bf(this);}
function Cf(){}
_=Cf.prototype=new cb();_.eQ=Ef;_.hC=Ff;_.tS=ag;_.tN=fF+'Element';_.tI=14;function eg(a){return eb(ke(this,bg),a);}
function fg(){return fb(ke(this,bg));}
function gg(){return ff(this);}
function bg(){}
_=bg.prototype=new cb();_.eQ=eg;_.hC=fg;_.tS=gg;_.tN=fF+'Event';_.tI=15;function kg(){while((og(),yg).b>0){ng(fe(By((og(),yg),0),6));}}
function lg(){return null;}
function ig(){}
_=ig.prototype=new Bu();_.ob=kg;_.pb=lg;_.tN=fF+'Timer$1';_.tI=16;function Bg(){Bg=eC;Eg=vy(new ty());gh=vy(new ty());{ch();}}
function Cg(a){Bg();xy(Eg,a);}
function Dg(a){Bg();$wnd.alert(a);}
function Fg(){Bg();var a,b;for(a=Eg.cb();a.F();){b=fe(a.eb(),7);b.ob();}}
function ah(){Bg();var a,b,c,d;d=null;for(a=Eg.cb();a.F();){b=fe(a.eb(),7);c=b.pb();{d=c;}}return d;}
function bh(){Bg();var a,b;for(a=gh.cb();a.F();){b=he(a.eb());null.Ab();}}
function ch(){Bg();__gwt_initHandlers(function(){fh();},function(){return eh();},function(){dh();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function dh(){Bg();var a;a=y;{Fg();}}
function eh(){Bg();var a;a=y;{return ah();}}
function fh(){Bg();var a;a=y;{bh();}}
var Eg,gh;function zh(c,b,a){b.appendChild(a);}
function Bh(b,a){return $doc.createElement(a);}
function Ch(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function Dh(c,a){var b;b=Bh(c,'select');if(a){gi(c,b,'multiple',true);}return b;}
function Eh(c,b,a){b.cancelBubble=a;}
function Fh(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function ci(d,a,b){var c=a[b];return c==null?null:String(c);}
function ai(c,a,b){return !(!a[b]);}
function bi(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function di(b,a){return a.__eventBits||0;}
function ei(e,d,b,f,a){var c=new Option(b,f);if(a== -1||a>d.options.length-1){d.add(c,null);}else{d.add(c,d.options[a]);}}
function fi(c,b,a){b.removeChild(a);}
function ii(c,a,b,d){a[b]=d;}
function gi(c,a,b,d){a[b]=d;}
function hi(c,a,b,d){a[b]=d;}
function ji(c,a,b){a.__listener=b;}
function ki(c,a,b){if(!b){b='';}a.innerHTML=b;}
function li(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function mi(e,c,d,a){var b=c.options[a];b.text=d;}
function ni(c,b,a,d){b.style[a]=d;}
function hh(){}
_=hh.prototype=new Bu();_.tN=gF+'DOMImpl';_.tI=0;function uh(b,a){a.preventDefault();}
function vh(b,a){return a.toString();}
function wh(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function xh(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){bf(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!of(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)bf(b,a,c);};$wnd.__captureElem=null;}
function yh(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function sh(){}
_=sh.prototype=new hh();_.tN=gF+'DOMImplStandard';_.tI=0;function mh(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function oh(a){xh(a);nh(a);}
function nh(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function qh(c,b,a){yh(c,b,a);ph(c,b,a);}
function ph(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function rh(d,a){var b=a.cloneNode(true);var c=$doc.createElement('DIV');c.appendChild(b);outer=c.innerHTML;b.innerHTML='';return outer;}
function ih(){}
_=ih.prototype=new sh();_.tN=gF+'DOMImplMozilla';_.tI=0;function jh(){}
_=jh.prototype=new ih();_.tN=gF+'DOMImplMozillaOld';_.tI=0;function pi(a){ti=hb();return a;}
function ri(a){return si(a);}
function si(a){return new XMLHttpRequest();}
function oi(){}
_=oi.prototype=new Bu();_.tN=gF+'HTTPRequestImpl';_.tI=0;var ti=null;function wn(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function xn(b,a){if(b.k!==null){wn(b,b.k,a);}b.k=a;}
function yn(b,a){Bn(b.k,a);}
function zn(b,a){Af(b.y(),a|kf(b.y()));}
function An(){return this.k;}
function Bn(a,b){uf(a,'className',b);}
function Cn(){if(this.k===null){return '(null handle)';}return Bf(this.k);}
function un(){}
_=un.prototype=new Bu();_.y=An;_.tS=Cn;_.tN=hF+'UIObject';_.tI=0;_.k=null;function yo(a){if(ge(a.j,10)){fe(a.j,10).sb(a);}else if(a.j!==null){throw hu(new gu(),"This widget's parent does not implement HasWidgets");}}
function zo(b,a){if(b.ab()){vf(b.y(),null);}xn(b,a);if(b.ab()){vf(a,b);}}
function Ao(c,b){var a;a=c.j;if(b===null){if(a!==null&&a.ab()){c.jb();}c.j=null;}else{if(a!==null){throw hu(new gu(),'Cannot set a new parent without first clearing the old parent');}c.j=b;if(b.ab()){c.gb();}}}
function Bo(){}
function Co(){}
function Do(){return this.i;}
function Eo(){if(this.ab()){throw hu(new gu(),"Should only call onAttach when the widget is detached from the browser's document");}this.i=true;vf(this.y(),this);this.q();this.lb();}
function Fo(a){}
function ap(){if(!this.ab()){throw hu(new gu(),"Should only call onDetach when the widget is attached to the browser's document");}try{this.nb();}finally{this.r();vf(this.y(),null);this.i=false;}}
function bp(){}
function cp(){}
function dp(a){zo(this,a);}
function fo(){}
_=fo.prototype=new un();_.q=Bo;_.r=Co;_.ab=Do;_.gb=Eo;_.hb=Fo;_.jb=ap;_.lb=bp;_.nb=cp;_.vb=dp;_.tN=hF+'Widget';_.tI=17;_.i=false;_.j=null;function qm(b,a){Ao(a,b);}
function sm(b,a){Ao(a,null);}
function tm(){var a,b;for(b=this.cb();ko(b);){a=lo(b);a.gb();}}
function um(){var a,b;for(b=this.cb();ko(b);){a=lo(b);a.jb();}}
function vm(){}
function wm(){}
function pm(){}
_=pm.prototype=new fo();_.q=tm;_.r=um;_.lb=vm;_.nb=wm;_.tN=hF+'Panel';_.tI=18;function Bj(a){a.f=po(new go(),a);}
function Cj(a){Bj(a);return a;}
function Dj(c,a,b){yo(a);qo(c.f,a);se(b,a.y());qm(c,a);}
function Fj(b,c){var a;if(c.j!==b){return false;}sm(b,c);a=c.y();pf(lf(a),a);wo(b.f,c);return true;}
function ak(){return uo(this.f);}
function bk(a){return Fj(this,a);}
function Aj(){}
_=Aj.prototype=new pm();_.cb=ak;_.sb=bk;_.tN=hF+'ComplexPanel';_.tI=19;function vi(a){Cj(a);a.vb(ve());zf(a.y(),'position','relative');zf(a.y(),'overflow','hidden');return a;}
function wi(a,b){Dj(a,b,a.y());}
function yi(a){zf(a,'left','');zf(a,'top','');zf(a,'position','');}
function zi(b){var a;a=Fj(this,b);if(a){yi(b.y());}return a;}
function ui(){}
_=ui.prototype=new Aj();_.sb=zi;_.tN=hF+'AbsolutePanel';_.tI=20;function pk(){pk=eC;np(),pp;}
function ok(b,a){np(),pp;rk(b,a);return b;}
function qk(b,a){switch(df(a)){case 1:if(b.c!==null){yj(b.c,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function rk(b,a){zo(b,a);zn(b,7041);}
function sk(a){if(this.c===null){this.c=wj(new vj());}xy(this.c,a);}
function tk(a){qk(this,a);}
function uk(a){rk(this,a);}
function nk(){}
_=nk.prototype=new fo();_.l=sk;_.hb=tk;_.vb=uk;_.tN=hF+'FocusWidget';_.tI=21;_.c=null;function Di(){Di=eC;np(),pp;}
function Ci(b,a){np(),pp;ok(b,a);return b;}
function Ei(a){wf(this.y(),a);}
function Bi(){}
_=Bi.prototype=new nk();_.wb=Ei;_.tN=hF+'ButtonBase';_.tI=22;function cj(){cj=eC;np(),pp;}
function Fi(a){np(),pp;Ci(a,ue());dj(a.y());yn(a,'gwt-Button');return a;}
function aj(b,a){np(),pp;Fi(b);b.wb(a);return b;}
function bj(c,a,b){np(),pp;aj(c,a);c.l(b);return c;}
function dj(b){cj();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function Ai(){}
_=Ai.prototype=new Bi();_.tN=hF+'Button';_.tI=23;function fj(a){Cj(a);a.e=Ee();a.d=Be();se(a.e,a.d);a.vb(a.e);return a;}
function hj(c,b,a){uf(b,'align',a.a);}
function ij(c,b,a){zf(b,'verticalAlign',a.a);}
function ej(){}
_=ej.prototype=new Aj();_.tN=hF+'CellPanel';_.tI=24;_.d=null;_.e=null;function nj(){nj=eC;np(),pp;}
function kj(a){np(),pp;lj(a,we());yn(a,'gwt-CheckBox');return a;}
function mj(b,a){np(),pp;kj(b);qj(b,a);return b;}
function lj(b,a){var c;np(),pp;Ci(b,Ae());b.a=a;b.b=ye();Af(b.a,kf(b.y()));Af(b.y(),0);se(b.y(),b.a);se(b.y(),b.b);c='check'+ ++uj;uf(b.a,'id',c);uf(b.b,'htmlFor',c);return b;}
function oj(b){var a;a=b.ab()?'checked':'defaultChecked';return gf(b.a,a);}
function pj(b,a){sf(b.a,'checked',a);sf(b.a,'defaultChecked',a);}
function qj(b,a){xf(b.b,a);}
function rj(){vf(this.a,this);}
function sj(){vf(this.a,null);pj(this,oj(this));}
function tj(a){wf(this.b,a);}
function jj(){}
_=jj.prototype=new Bi();_.lb=rj;_.nb=sj;_.wb=tj;_.tN=hF+'CheckBox';_.tI=25;_.a=null;_.b=null;var uj=0;function qw(d,a,b){var c;while(a.F()){c=a.eb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function sw(a){throw nw(new mw(),'add');}
function tw(b){var a;a=qw(this,this.cb(),b);return a!==null;}
function uw(){var a,b,c;c=fv(new ev());a=null;iv(c,'[');b=this.cb();while(b.F()){if(a!==null){iv(c,a);}else{a=', ';}iv(c,aw(b.eb()));}iv(c,']');return mv(c);}
function pw(){}
_=pw.prototype=new Bu();_.n=sw;_.p=tw;_.tS=uw;_.tN=nF+'AbstractCollection';_.tI=0;function Ew(b,a){throw ku(new ju(),'Index: '+a+', Size: '+b.b);}
function Fw(b,a){throw nw(new mw(),'add');}
function ax(a){this.m(this.yb(),a);return true;}
function bx(e){var a,b,c,d,f;if(e===this){return true;}if(!ge(e,20)){return false;}f=fe(e,20);if(this.yb()!=f.yb()){return false;}c=this.cb();d=f.cb();while(c.F()){a=c.eb();b=d.eb();if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function cx(){var a,b,c,d;c=1;a=31;b=this.cb();while(b.F()){d=b.eb();c=31*c+(d===null?0:d.hC());}return c;}
function dx(){return xw(new ww(),this);}
function ex(a){throw nw(new mw(),'remove');}
function vw(){}
_=vw.prototype=new pw();_.m=Fw;_.n=ax;_.eQ=bx;_.hC=cx;_.cb=dx;_.rb=ex;_.tN=nF+'AbstractList';_.tI=26;function uy(a){{yy(a);}}
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
_=ty.prototype=new vw();_.m=bz;_.n=cz;_.p=dz;_.D=gz;_.rb=iz;_.yb=kz;_.tN=nF+'ArrayList';_.tI=27;_.a=null;_.b=0;function wj(a){vy(a);return a;}
function yj(d,c){var a,b;for(a=d.cb();a.F();){b=fe(a.eb(),8);b.ib(c);}}
function vj(){}
_=vj.prototype=new ty();_.tN=hF+'ClickListenerCollection';_.tI=28;function ek(a,b){if(a.h!==null){throw hu(new gu(),'Composite.initWidget() may only be called once.');}yo(b);a.vb(b.y());a.h=b;Ao(b,a);}
function fk(){if(this.h===null){throw hu(new gu(),'initWidget() was never called in '+w(this));}return this.k;}
function gk(){if(this.h!==null){return this.h.ab();}return false;}
function hk(){this.h.gb();this.lb();}
function ik(){try{this.nb();}finally{this.h.jb();}}
function ck(){}
_=ck.prototype=new fo();_.y=fk;_.ab=gk;_.gb=hk;_.jb=ik;_.tN=hF+'Composite';_.tI=29;_.h=null;function kk(a){Cj(a);a.vb(ve());return a;}
function lk(a,b){Dj(a,b,a.y());}
function jk(){}
_=jk.prototype=new Aj();_.tN=hF+'FlowPanel';_.tI=30;function Bk(){Bk=eC;zk(new yk(),'center');Ck=zk(new yk(),'left');zk(new yk(),'right');}
var Ck;function zk(b,a){b.a=a;return b;}
function yk(){}
_=yk.prototype=new Bu();_.tN=hF+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=0;_.a=null;function cl(){cl=eC;al(new Fk(),'bottom');dl=al(new Fk(),'middle');el=al(new Fk(),'top');}
var dl,el;function al(a,b){a.a=b;return a;}
function Fk(){}
_=Fk.prototype=new Bu();_.tN=hF+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=0;_.a=null;function il(a){a.a=(Bk(),Ck);a.c=(cl(),el);}
function jl(a){fj(a);il(a);a.b=De();se(a.d,a.b);uf(a.e,'cellSpacing','0');uf(a.e,'cellPadding','0');return a;}
function kl(b,c){var a;a=ml(b);se(b.b,a);Dj(b,c,a);}
function ml(b){var a;a=Ce();hj(b,a,b.a);ij(b,a,b.c);return a;}
function nl(b,a){b.c=a;}
function ol(c){var a,b;b=lf(c.y());a=Fj(this,c);if(a){pf(this.b,b);}return a;}
function hl(){}
_=hl.prototype=new ej();_.sb=ol;_.tN=hF+'HorizontalPanel';_.tI=31;_.b=null;function rl(a){a.vb(ve());zn(a,131197);yn(a,'gwt-Label');return a;}
function sl(b,a){rl(b);ul(b,a);return b;}
function ul(b,a){xf(b.y(),a);}
function vl(a){switch(df(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function ql(){}
_=ql.prototype=new fo();_.hb=vl;_.tN=hF+'Label';_.tI=32;function dm(){dm=eC;np(),pp;nm=new xl();}
function El(b,a){dm();ok(b,ze(a));zn(b,1024);yn(b,'gwt-ListBox');return b;}
function Fl(b,a){im(b,a,(-1));}
function am(b,a,c){jm(b,a,c,(-1));}
function bm(b,a){if(a<0||a>=em(b)){throw new ju();}}
function cm(a){yl(nm,a.y());}
function em(a){return Al(nm,a.y());}
function fm(b,a){bm(b,a);return Bl(nm,b.y(),a);}
function gm(a){return hf(a.y(),'selectedIndex');}
function hm(b,a){bm(b,a);return Cl(nm,b.y(),a);}
function im(c,b,a){jm(c,b,b,a);}
function jm(c,b,d,a){nf(c.y(),b,d,a);}
function km(b,a){bm(b,a);Dl(nm,b.y(),a);}
function lm(c,a,b){bm(c,a);if(b===null){throw vu(new uu(),'Cannot set an option to have null text');}yf(c.y(),b,a);}
function mm(a,b){tf(a.y(),'size',b);}
function om(a){if(df(a)==1024){}else{qk(this,a);}}
function wl(){}
_=wl.prototype=new nk();_.hb=om;_.tN=hF+'ListBox';_.tI=33;var nm;function yl(b,a){a.options.length=0;}
function Al(b,a){return a.options.length;}
function Bl(c,b,a){return b.options[a].text;}
function Cl(c,b,a){return b.options[a].value;}
function Dl(c,b,a){b.options[a]=null;}
function xl(){}
_=xl.prototype=new Bu();_.tN=hF+'ListBox$Impl';_.tI=0;function Dm(){Dm=eC;cn=jA(new nz());}
function Cm(b,a){Dm();vi(b);if(a===null){a=Em();}b.vb(a);b.gb();return b;}
function Fm(){Dm();return an(null);}
function an(c){Dm();var a,b;b=fe(qA(cn,c),9);if(b!==null){return b;}a=null;if(cn.c==0){bn();}sA(cn,c,b=Cm(new xm(),a));return b;}
function Em(){Dm();return $doc.body;}
function bn(){Dm();Cg(new ym());}
function xm(){}
_=xm.prototype=new ui();_.tN=hF+'RootPanel';_.tI=34;var cn;function Am(){var a,b;for(b=yx(hy((Dm(),cn)));Fx(b);){a=fe(ay(b),9);if(a.ab()){a.jb();}}}
function Bm(){return null;}
function ym(){}
_=ym.prototype=new Bu();_.ob=Am;_.pb=Bm;_.tN=hF+'RootPanel$1';_.tI=35;function nn(){nn=eC;np(),pp;}
function mn(b,a){np(),pp;ok(b,a);zn(b,1024);return b;}
function on(a){return jf(a.y(),'value');}
function pn(a){if(this.a===null){this.a=wj(new vj());}xy(this.a,a);}
function qn(a){var b;qk(this,a);b=df(a);if(b==1){if(this.a!==null){yj(this.a,this);}}else{}}
function ln(){}
_=ln.prototype=new nk();_.l=pn;_.hb=qn;_.tN=hF+'TextBoxBase';_.tI=36;_.a=null;function sn(){sn=eC;np(),pp;}
function rn(a){np(),pp;mn(a,xe());yn(a,'gwt-TextBox');return a;}
function tn(b,a){tf(b.y(),'size',a);}
function kn(){}
_=kn.prototype=new ln();_.tN=hF+'TextBox';_.tI=37;function En(a){a.a=(Bk(),Ck);a.b=(cl(),el);}
function Fn(a){fj(a);En(a);uf(a.e,'cellSpacing','0');uf(a.e,'cellPadding','0');return a;}
function ao(b,d){var a,c;c=De();a=co(b);se(c,a);se(b.d,c);Dj(b,d,a);}
function co(b){var a;a=Ce();hj(b,a,b.a);ij(b,a,b.b);return a;}
function eo(c){var a,b;b=lf(c.y());a=Fj(this,c);if(a){pf(this.d,lf(b));}return a;}
function Dn(){}
_=Dn.prototype=new ej();_.sb=eo;_.tN=hF+'VerticalPanel';_.tI=38;function po(b,a){b.b=a;b.a=Fd('[Lcom.google.gwt.user.client.ui.Widget;',[0],[12],[4],null);return b;}
function qo(a,b){to(a,b,a.c);}
function so(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]===c){return a;}}return (-1);}
function to(d,e,a){var b,c;if(a<0||a>d.c){throw new ju();}if(d.c==d.a.a){c=Fd('[Lcom.google.gwt.user.client.ui.Widget;',[0],[12],[d.a.a*2],null);for(b=0;b<d.a.a;++b){be(c,b,d.a[b]);}d.a=c;}++d.c;for(b=d.c-1;b>a;--b){be(d.a,b,d.a[b-1]);}be(d.a,a,e);}
function uo(a){return io(new ho(),a);}
function vo(c,b){var a;if(b<0||b>=c.c){throw new ju();}--c.c;for(a=b;a<c.c;++a){be(c.a,a,c.a[a+1]);}be(c.a,c.c,null);}
function wo(b,c){var a;a=so(b,c);if(a==(-1)){throw new tB();}vo(b,a);}
function go(){}
_=go.prototype=new Bu();_.tN=hF+'WidgetCollection';_.tI=0;_.a=null;_.b=null;_.c=0;function io(b,a){b.b=a;return b;}
function ko(a){return a.a<a.b.c-1;}
function lo(a){if(a.a>=a.b.c){throw new tB();}return a.b.a[++a.a];}
function mo(){return ko(this);}
function no(){return lo(this);}
function oo(){if(this.a<0||this.a>=this.b.c){throw new gu();}this.b.b.sb(this.b.a[this.a--]);}
function ho(){}
_=ho.prototype=new Bu();_.F=mo;_.eb=no;_.qb=oo;_.tN=hF+'WidgetCollection$WidgetIterator';_.tI=0;_.a=(-1);function np(){np=eC;op=hp(new fp());pp=op!==null?mp(new ep()):op;}
function mp(a){np();return a;}
function ep(){}
_=ep.prototype=new Bu();_.tN=iF+'FocusImpl';_.tI=0;var op,pp;function ip(){ip=eC;np();}
function gp(a){jp(a);kp(a);lp(a);}
function hp(a){ip();mp(a);gp(a);return a;}
function jp(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function kp(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function lp(a){return function(){this.firstChild.focus();};}
function fp(){}
_=fp.prototype=new ep();_.tN=iF+'FocusImplOld';_.tI=0;function vp(c,a,b){bv(c,b);return c;}
function up(){}
_=up.prototype=new av();_.tN=jF+'DOMException';_.tI=39;function aq(){aq=eC;bq=(xs(),ht);}
function cq(a){aq();return ys(bq,a);}
var bq;function wq(b,a){b.a=a;return b;}
function xq(a,b){return b;}
function zq(a){if(ge(a,15)){return te(xq(this,this.a),xq(this,fe(a,15).a));}return false;}
function vq(){}
_=vq.prototype=new Bu();_.eQ=zq;_.tN=kF+'DOMItem';_.tI=40;_.a=null;function ur(b,a){wq(b,a);return b;}
function wr(a){return pr(new or(),As(a.a));}
function xr(a){return Dr(new Cr(),Bs(a.a));}
function yr(a){return bt(a.a);}
function zr(a){return ft(a.a);}
function Ar(a){return gt(a.a);}
function Br(a){var b;if(a===null){return null;}b=ct(a);switch(b){case 2:return eq(new dq(),a);case 4:return kq(new jq(),a);case 8:return sq(new rq(),a);case 11:return Fq(new Eq(),a);case 9:return dr(new cr(),a);case 1:return ir(new hr(),a);case 7:return gs(new fs(),a);case 3:return ls(new ks(),a);default:return ur(new tr(),a);}}
function tr(){}
_=tr.prototype=new vq();_.tN=kF+'NodeImpl';_.tI=41;function eq(b,a){ur(b,a);return b;}
function gq(a){return at(a.a);}
function hq(a){return et(a.a);}
function iq(){var a;a=fv(new ev());iv(a,' '+gq(this));iv(a,'="');iv(a,hq(this));iv(a,'"');return mv(a);}
function dq(){}
_=dq.prototype=new tr();_.tS=iq;_.tN=kF+'AttrImpl';_.tI=42;function oq(b,a){ur(b,a);return b;}
function qq(a){return Cs(a.a);}
function nq(){}
_=nq.prototype=new tr();_.tN=kF+'CharacterDataImpl';_.tI=43;function ls(b,a){oq(b,a);return b;}
function ns(){var a,b,c;a=fv(new ev());c=uv(qq(this),'(?=[;&<>\'"])',(-1));for(b=0;b<c.a;b++){if(vv(c[b],';')){iv(a,'&semi;');iv(a,wv(c[b],1));}else if(vv(c[b],'&')){iv(a,'&amp;');iv(a,wv(c[b],1));}else if(vv(c[b],'"')){iv(a,'&quot;');iv(a,wv(c[b],1));}else if(vv(c[b],"'")){iv(a,'&apos;');iv(a,wv(c[b],1));}else if(vv(c[b],'<')){iv(a,'&lt;');iv(a,wv(c[b],1));}else if(vv(c[b],'>')){iv(a,'&gt;');iv(a,wv(c[b],1));}else{iv(a,c[b]);}}return mv(a);}
function ks(){}
_=ks.prototype=new nq();_.tS=ns;_.tN=kF+'TextImpl';_.tI=44;function kq(b,a){ls(b,a);return b;}
function mq(){var a;a=gv(new ev(),'<![CDATA[');iv(a,qq(this));iv(a,']]>');return mv(a);}
function jq(){}
_=jq.prototype=new ks();_.tS=mq;_.tN=kF+'CDATASectionImpl';_.tI=45;function sq(b,a){oq(b,a);return b;}
function uq(){var a;a=gv(new ev(),'<!--');iv(a,qq(this));iv(a,'-->');return mv(a);}
function rq(){}
_=rq.prototype=new nq();_.tS=uq;_.tN=kF+'CommentImpl';_.tI=46;function Bq(c,a,b){vp(c,12,'Failed to parse: '+Dq(a));iw(c,b);return c;}
function Dq(a){return xv(a,0,ru(sv(a),128));}
function Aq(){}
_=Aq.prototype=new up();_.tN=kF+'DOMParseException';_.tI=47;function Fq(b,a){ur(b,a);return b;}
function br(){var a,b;a=fv(new ev());for(b=0;b<xr(this).B();b++){hv(a,xr(this).bb(b));}return mv(a);}
function Eq(){}
_=Eq.prototype=new tr();_.tS=br;_.tN=kF+'DocumentFragmentImpl';_.tI=48;function dr(b,a){ur(b,a);return b;}
function fr(){return fe(Br(Ds(this.a)),16);}
function gr(){var a,b,c;a=fv(new ev());b=xr(this);for(c=0;c<b.B();c++){iv(a,b.bb(c).tS());}return mv(a);}
function cr(){}
_=cr.prototype=new tr();_.w=fr;_.tS=gr;_.tN=kF+'DocumentImpl';_.tI=49;function ir(b,a){ur(b,a);return b;}
function kr(a){return dt(a.a);}
function lr(a){return zs(this.a,a);}
function mr(a){return Dr(new Cr(),Es(this.a,a));}
function nr(){var a;a=gv(new ev(),'<');iv(a,kr(this));if(zr(this)){iv(a,bs(wr(this)));}if(Ar(this)){iv(a,'>');iv(a,bs(xr(this)));iv(a,'<\/');iv(a,kr(this));iv(a,'>');}else{iv(a,'/>');}return mv(a);}
function hr(){}
_=hr.prototype=new tr();_.v=lr;_.z=mr;_.tS=nr;_.tN=kF+'ElementImpl';_.tI=50;function Dr(b,a){wq(b,a);return b;}
function Fr(a){return Fs(a.a);}
function as(b,a){return Br(it(b.a,a));}
function bs(c){var a,b;a=fv(new ev());for(b=0;b<c.B();b++){iv(a,c.bb(b).tS());}return mv(a);}
function cs(){return Fr(this);}
function ds(a){return as(this,a);}
function es(){return bs(this);}
function Cr(){}
_=Cr.prototype=new vq();_.B=cs;_.bb=ds;_.tS=es;_.tN=kF+'NodeListImpl';_.tI=51;function pr(b,a){Dr(b,a);return b;}
function rr(){return Fr(this);}
function sr(a){return as(this,a);}
function or(){}
_=or.prototype=new Cr();_.B=rr;_.bb=sr;_.tN=kF+'NamedNodeMapImpl';_.tI=52;function gs(b,a){ur(b,a);return b;}
function is(a){return Cs(a.a);}
function js(){var a;a=gv(new ev(),'<?');iv(a,yr(this));iv(a,' ');iv(a,is(this));iv(a,'?>');return mv(a);}
function fs(){}
_=fs.prototype=new tr();_.tS=js;_.tN=kF+'ProcessingInstructionImpl';_.tI=53;function xs(){xs=eC;ht=rs(new ps());}
function ws(a){xs();return a;}
function ys(e,c){var a,d;try{return fe(Br(us(e,c)),17);}catch(a){a=ne(a);if(ge(a,18)){d=a;throw Bq(new Aq(),c,d);}else throw a;}}
function zs(b,a){xs();return b.getAttribute(a);}
function As(a){xs();return a.attributes;}
function Bs(b){xs();var a=b.childNodes;return a==null?null:a;}
function Cs(a){xs();return a.data;}
function Ds(a){xs();return a.documentElement;}
function Es(a,b){xs();return ts(ht,a,b);}
function Fs(a){xs();return a.length;}
function at(a){xs();return a.name;}
function bt(a){xs();var b=a.nodeName;return b==null?null:b;}
function ct(a){xs();var b=a.nodeType;return b==null?-1:b;}
function dt(a){xs();return a.tagName;}
function et(a){xs();return a.value;}
function ft(a){xs();return a.attributes.length!=0;}
function gt(a){xs();return a.hasChildNodes();}
function it(c,a){xs();if(a>=c.length){return null;}var b=c.item(a);return b==null?null:b;}
function os(){}
_=os.prototype=new Bu();_.tN=kF+'XMLParserImpl';_.tI=0;var ht;function ss(){ss=eC;xs();}
function qs(a){a.a=vs();}
function rs(a){ss();ws(a);qs(a);return a;}
function ts(c,a,b){return a.getElementsByTagNameNS('*',b);}
function us(e,a){var b=e.a;var c=b.parseFromString(a,'text/xml');var d=c.documentElement;if(d.tagName=='parsererror'&&d.namespaceURI=='http://www.mozilla.org/newlayout/xml/parsererror.xml'){throw new Error(d.firstChild.data);}return c;}
function vs(){ss();return new DOMParser();}
function ps(){}
_=ps.prototype=new os();_.tN=kF+'XMLParserImplStandard';_.tI=0;function mt(){}
_=mt.prototype=new Bu();_.tN=lF+'OutputStream';_.tI=0;function kt(){}
_=kt.prototype=new mt();_.tN=lF+'FilterOutputStream';_.tI=0;function ot(){}
_=ot.prototype=new kt();_.tN=lF+'PrintStream';_.tI=0;function qt(){}
_=qt.prototype=new av();_.tN=mF+'ArrayStoreException';_.tI=54;function ut(){ut=eC;vt=tt(new st(),false);wt=tt(new st(),true);}
function tt(a,b){ut();a.a=b;return a;}
function xt(a){return ge(a,19)&&fe(a,19).a==this.a;}
function yt(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function zt(){return this.a?'true':'false';}
function At(a){ut();return a?wt:vt;}
function st(){}
_=st.prototype=new Bu();_.eQ=xt;_.hC=yt;_.tS=zt;_.tN=mF+'Boolean';_.tI=55;_.a=false;var vt,wt;function Ct(){}
_=Ct.prototype=new av();_.tN=mF+'ClassCastException';_.tI=56;function eu(b,a){bv(b,a);return b;}
function du(){}
_=du.prototype=new av();_.tN=mF+'IllegalArgumentException';_.tI=57;function hu(b,a){bv(b,a);return b;}
function gu(){}
_=gu.prototype=new av();_.tN=mF+'IllegalStateException';_.tI=58;function ku(b,a){bv(b,a);return b;}
function ju(){}
_=ju.prototype=new av();_.tN=mF+'IndexOutOfBoundsException';_.tI=59;function yu(){yu=eC;{Au();}}
function Au(){yu();zu=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var zu=null;function nu(){nu=eC;yu();}
function ou(a){nu();return Fv(a);}
function ru(a,b){return a<b?a:b;}
function su(){}
_=su.prototype=new av();_.tN=mF+'NegativeArraySizeException';_.tI=60;function vu(b,a){bv(b,a);return b;}
function uu(){}
_=uu.prototype=new av();_.tN=mF+'NullPointerException';_.tI=61;function qv(b,a){if(!ge(a,1))return false;return Av(b,a);}
function rv(b,a){return b.indexOf(a);}
function sv(a){return a.length;}
function tv(b,a){return uv(b,a,0);}
function uv(j,i,g){var a=new RegExp(i,'g');var h=[];var b=0;var k=j;var e=null;while(true){var f=a.exec(k);if(f==null||(k==''||b==g-1&&g>0)){h[b]=k;break;}else{h[b]=k.substring(0,f.index);k=k.substring(f.index+f[0].length,k.length);a.lastIndex=0;if(e==k){h[b]=k.substring(0,1);k=k.substring(1);}e=k;b++;}}if(g==0){for(var c=h.length-1;c>=0;c--){if(h[c]!=''){h.splice(c+1,h.length-(c+1));break;}}}var d=zv(h.length);var c=0;for(c=0;c<h.length;++c){d[c]=h[c];}return d;}
function vv(b,a){return rv(b,a)==0;}
function wv(b,a){return b.substr(a,b.length-a);}
function xv(c,a,b){return c.substr(a,b-a);}
function yv(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function zv(a){return Fd('[Ljava.lang.String;',[0],[1],[a],null);}
function Av(a,b){return String(a)==b;}
function Bv(a){return qv(this,a);}
function Dv(){var a=Cv;if(!a){a=Cv={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function Ev(){return this;}
function Fv(a){return ''+a;}
function aw(a){return a!==null?a.tS():'null';}
_=String.prototype;_.eQ=Bv;_.hC=Dv;_.tS=Ev;_.tN=mF+'String';_.tI=2;var Cv=null;function fv(a){jv(a);return a;}
function gv(b,a){kv(b,a);return b;}
function hv(a,b){return iv(a,aw(b));}
function iv(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function jv(a){kv(a,'');}
function kv(b,a){b.js=[a];b.length=a.length;}
function mv(a){a.fb();return a.js[0];}
function nv(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function ov(){return mv(this);}
function ev(){}
_=ev.prototype=new Bu();_.fb=nv;_.tS=ov;_.tN=mF+'StringBuffer';_.tI=0;function cw(){cw=eC;dw=new ot();}
function ew(a){cw();return C(a);}
var dw;function nw(b,a){bv(b,a);return b;}
function mw(){}
_=mw.prototype=new av();_.tN=mF+'UnsupportedOperationException';_.tI=62;function xw(b,a){b.c=a;return b;}
function zw(a){return a.a<a.c.yb();}
function Aw(){return zw(this);}
function Bw(){if(!zw(this)){throw new tB();}return this.c.D(this.b=this.a++);}
function Cw(){if(this.b<0){throw new gu();}this.c.rb(this.b);this.a=this.b;this.b=(-1);}
function ww(){}
_=ww.prototype=new Bu();_.F=Aw;_.eb=Bw;_.qb=Cw;_.tN=nF+'AbstractList$IteratorImpl';_.tI=0;_.a=0;_.b=(-1);function fy(f,d,e){var a,b,c;for(b=eA(f.s());Cz(b);){a=Dz(b);c=a.A();if(d===null?c===null:d.eQ(c)){if(e){Ez(b);}return a;}}return null;}
function gy(b){var a;a=b.s();return hx(new gx(),b,a);}
function hy(b){var a;a=pA(b);return wx(new vx(),b,a);}
function iy(a){return fy(this,a,false)!==null;}
function jy(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ge(d,21)){return false;}f=fe(d,21);c=gy(this);e=f.db();if(!qy(c,e)){return false;}for(a=jx(c);qx(a);){b=rx(a);h=this.E(b);g=f.E(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function ky(b){var a;a=fy(this,b,false);return a===null?null:a.C();}
function ly(){var a,b,c;b=0;for(c=eA(this.s());Cz(c);){a=Dz(c);b+=a.hC();}return b;}
function my(){return gy(this);}
function ny(){var a,b,c,d;d='{';a=false;for(c=eA(this.s());Cz(c);){b=Dz(c);if(a){d+=', ';}else{a=true;}d+=aw(b.A());d+='=';d+=aw(b.C());}return d+'}';}
function fx(){}
_=fx.prototype=new Bu();_.o=iy;_.eQ=jy;_.E=ky;_.hC=ly;_.db=my;_.tS=ny;_.tN=nF+'AbstractMap';_.tI=63;function qy(e,b){var a,c,d;if(b===e){return true;}if(!ge(b,22)){return false;}c=fe(b,22);if(c.yb()!=e.yb()){return false;}for(a=c.cb();a.F();){d=a.eb();if(!e.p(d)){return false;}}return true;}
function ry(a){return qy(this,a);}
function sy(){var a,b,c;a=0;for(b=this.cb();b.F();){c=b.eb();if(c!==null){a+=c.hC();}}return a;}
function oy(){}
_=oy.prototype=new pw();_.eQ=ry;_.hC=sy;_.tN=nF+'AbstractSet';_.tI=64;function hx(b,a,c){b.a=a;b.b=c;return b;}
function jx(b){var a;a=eA(b.b);return ox(new nx(),b,a);}
function kx(a){return this.a.o(a);}
function lx(){return jx(this);}
function mx(){return this.b.a.c;}
function gx(){}
_=gx.prototype=new oy();_.p=kx;_.cb=lx;_.yb=mx;_.tN=nF+'AbstractMap$1';_.tI=65;function ox(b,a,c){b.a=c;return b;}
function qx(a){return a.a.F();}
function rx(b){var a;a=b.a.eb();return a.A();}
function sx(){return qx(this);}
function tx(){return rx(this);}
function ux(){this.a.qb();}
function nx(){}
_=nx.prototype=new Bu();_.F=sx;_.eb=tx;_.qb=ux;_.tN=nF+'AbstractMap$2';_.tI=0;function wx(b,a,c){b.a=a;b.b=c;return b;}
function yx(b){var a;a=eA(b.b);return Dx(new Cx(),b,a);}
function zx(a){return oA(this.a,a);}
function Ax(){return yx(this);}
function Bx(){return this.b.a.c;}
function vx(){}
_=vx.prototype=new pw();_.p=zx;_.cb=Ax;_.yb=Bx;_.tN=nF+'AbstractMap$3';_.tI=0;function Dx(b,a,c){b.a=c;return b;}
function Fx(a){return a.a.F();}
function ay(a){var b;b=a.a.eb().C();return b;}
function by(){return Fx(this);}
function cy(){return ay(this);}
function dy(){this.a.qb();}
function Cx(){}
_=Cx.prototype=new Bu();_.F=by;_.eb=cy;_.qb=dy;_.tN=nF+'AbstractMap$4';_.tI=0;function mA(){mA=eC;uA=AA();}
function iA(a){{lA(a);}}
function jA(a){mA();iA(a);return a;}
function kA(a,b){mA();iA(a);rA(a,b);return a;}
function lA(a){a.a=gb();a.d=ib();a.b=ke(uA,cb);a.c=0;}
function nA(b,a){if(ge(a,1)){return EA(b.d,fe(a,1))!==uA;}else if(a===null){return b.b!==uA;}else{return DA(b.a,a,a.hC())!==uA;}}
function oA(a,b){if(a.b!==uA&&CA(a.b,b)){return true;}else if(zA(a.d,b)){return true;}else if(xA(a.a,b)){return true;}return false;}
function pA(a){return cA(new yz(),a);}
function qA(c,a){var b;if(ge(a,1)){b=EA(c.d,fe(a,1));}else if(a===null){b=c.b;}else{b=DA(c.a,a,a.hC());}return b===uA?null:b;}
function sA(c,a,d){var b;if(ge(a,1)){b=bB(c.d,fe(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=aB(c.a,a,d,a.hC());}if(b===uA){++c.c;return null;}else{return b;}}
function rA(d,c){var a,b;b=eA(pA(c));while(Cz(b)){a=Dz(b);sA(d,a.A(),a.C());}}
function tA(c,a){var b;if(ge(a,1)){b=dB(c.d,fe(a,1));}else if(a===null){b=c.b;c.b=ke(uA,cb);}else{b=cB(c.a,a,a.hC());}if(b===uA){return null;}else{--c.c;return b;}}
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
_=nz.prototype=new fx();_.o=yA;_.s=BA;_.E=FA;_.tN=nF+'HashMap';_.tI=66;_.a=null;_.b=null;_.c=0;_.d=null;var uA;function pz(b,a,c){b.a=a;b.b=c;return b;}
function rz(a,b){return pz(new oz(),a,b);}
function sz(b){var a;if(ge(b,23)){a=fe(b,23);if(CA(this.a,a.A())&&CA(this.b,a.C())){return true;}}return false;}
function tz(){return this.a;}
function uz(){return this.b;}
function vz(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function wz(a){var b;b=this.b;this.b=a;return b;}
function xz(){return this.a+'='+this.b;}
function oz(){}
_=oz.prototype=new Bu();_.eQ=sz;_.A=tz;_.C=uz;_.hC=vz;_.xb=wz;_.tS=xz;_.tN=nF+'HashMap$EntryImpl';_.tI=67;_.a=null;_.b=null;function cA(b,a){b.a=a;return b;}
function eA(a){return Az(new zz(),a.a);}
function fA(c){var a,b,d;if(ge(c,23)){a=fe(c,23);b=a.A();if(nA(this.a,b)){d=qA(this.a,b);return CA(a.C(),d);}}return false;}
function gA(){return eA(this);}
function hA(){return this.a.c;}
function yz(){}
_=yz.prototype=new oy();_.p=fA;_.cb=gA;_.yb=hA;_.tN=nF+'HashMap$EntrySet';_.tI=68;function Az(c,b){var a;c.c=b;a=vy(new ty());if(c.c.b!==(mA(),uA)){xy(a,pz(new oz(),null,c.c.b));}wA(c.c.d,a);vA(c.c.a,a);c.a=a.cb();return c;}
function Cz(a){return a.a.F();}
function Dz(a){return a.b=fe(a.a.eb(),23);}
function Ez(a){if(a.b===null){throw hu(new gu(),'Must call next() before remove().');}else{a.a.qb();tA(a.c,a.b.A());a.b=null;}}
function Fz(){return Cz(this);}
function aA(){return Dz(this);}
function bA(){Ez(this);}
function zz(){}
_=zz.prototype=new Bu();_.F=Fz;_.eb=aA;_.qb=bA;_.tN=nF+'HashMap$EntrySetIterator';_.tI=0;_.a=null;_.b=null;function fB(a){a.a=jA(new nz());return a;}
function hB(a){var b;b=sA(this.a,a,At(true));return b===null;}
function iB(a){return nA(this.a,a);}
function jB(){return jx(gy(this.a));}
function kB(){return this.a.c;}
function lB(){return gy(this.a).tS();}
function eB(){}
_=eB.prototype=new oy();_.n=hB;_.p=iB;_.cb=jB;_.yb=kB;_.tS=lB;_.tN=nF+'HashSet';_.tI=69;_.a=null;function rB(d,c,a,b){bv(d,c);return d;}
function qB(){}
_=qB.prototype=new av();_.tN=nF+'MissingResourceException';_.tI=70;function tB(){}
_=tB.prototype=new av();_.tN=nF+'NoSuchElementException';_.tI=71;function yB(a){a.a=vy(new ty());return a;}
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
_=xB.prototype=new vw();_.m=DB;_.n=EB;_.p=FB;_.D=aC;_.cb=bC;_.rb=cC;_.yb=dC;_.tN=nF+'Vector';_.tI=72;_.a=null;function CC(g,h){var a,c,d,e,f;c=hD(new fD(),h);try{e=EE(c);f=uC(new tC(),g,e,c);rg(f,1);}catch(a){a=ne(a);if(ge(a,25)){d=a;jw(d);}else throw a;}}
function DC(g,h){var a,c,d,e,f;c=qD(new oD(),h);try{e=EE(c);f=yC(new xC(),g,e,c);rg(f,1);}catch(a){a=ne(a);if(ge(a,25)){d=a;Dg('Exception: '+d.b);jw(d);}else throw a;}}
function EC(r){var a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s;k='DEFAULT-identities-and-usecases.xml';l='DEFAULT-policy.xml';f='DEFAULT-cancel.html';m='DEFAULT-save-policy.xml';try{h=td('getURLs');k=qd(h,'identities-url');l=qd(h,'policy-url');f=qd(h,'cancel-url');m=qd(h,'save-url');}catch(a){a=ne(a);if(ge(a,24)){i=a;Dg('Exception: '+i.b);}else throw a;}DC(r,l);CC(r,k);s=Fn(new Dn());wi(Fm(),s);p=Fn(new Dn());ao(s,p);q=rn(new kn());tn(q,30);ao(p,q);o=bj(new Ai(),'Save User or Group',hC(new gC(),r,q));ao(p,o);j=jl(new hl());nl(j,(cl(),dl));ao(s,j);d=jl(new hl());ao(s,d);n=m;r.g=bj(new Ai(),'Save Policy',lC(new kC(),r,n));yn(r.g,'gwt-wyona-SaveButton');kl(d,r.g);g=f;e=bj(new Ai(),'Cancel',pC(new oC(),r,g));yn(r.g,'gwt-wyona-CancelButton');kl(d,e);r.b=bE(new FD(),r.j,r.i,r.a);r.d=hE(new fE(),r.j,r.e,r.c,r.h);c=bD(new FC(),r.b.a,r.d.c,r.d);yn(c,'gwt-wyona-AddRemoveWidget');kl(j,r.b);kl(j,c);kl(j,r.d);}
function fC(){}
_=fC.prototype=new Bu();_.tN=oF+'AccessPolicyEditor';_.tI=0;_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;_.h=true;_.i=null;_.j=10;function hC(b,a,c){b.a=a;b.b=c;return b;}
function jC(d){var a,b,c;b=em(this.a.b.a);for(a=0;a<b;a++){c=fm(this.a.b.a,a);if(rv(c,on(this.b))>=0)Dg('Result: '+c);}}
function gC(){}
_=gC.prototype=new Bu();_.ib=jC;_.tN=oF+'AccessPolicyEditor$1';_.tI=73;function lC(b,a,c){b.a=a;b.b=c;return b;}
function nC(f){var a,c,d,e;c=xD(new wD(),this.b);try{e=zD(c,pE(this.a.d),kE(this.a.d),oE(this.a.d));}catch(a){a=ne(a);if(ge(a,25)){d=a;Dg('Exception: '+d.b);}else throw a;}}
function kC(){}
_=kC.prototype=new Bu();_.ib=nC;_.tN=oF+'AccessPolicyEditor$2';_.tI=74;function pC(b,a,c){b.a=c;return b;}
function rC(a,b){$wnd.location.href=b;}
function sC(a){Dg('Redirect to '+this.a);rC(this,this.a);}
function oC(){}
_=oC.prototype=new Bu();_.ib=sC;_.tN=oF+'AccessPolicyEditor$3';_.tI=75;function vC(){vC=eC;og();}
function uC(b,a,d,c){vC();b.a=a;b.c=d;b.b=c;mg(b);return b;}
function wC(){if(xc(this.c)){qg(this,10);}else{this.a.i=mD(this.b);this.a.a=kD(this.b);this.a.f=lD(this.b);dE(this.a.b,this.a.j,this.a.i,this.a.a);ng(this);Dg('Identities have been loaded!');}}
function tC(){}
_=tC.prototype=new hg();_.ub=wC;_.tN=oF+'AccessPolicyEditor$4';_.tI=76;function zC(){zC=eC;og();}
function yC(b,a,d,c){zC();b.a=a;b.c=d;b.b=c;mg(b);return b;}
function AC(){if(xc(this.c)){qg(this,10);}else{this.a.e=uD(this.b);this.a.c=tD(this.b);rE(this.a.d,this.a.j,this.a.e,this.a.c);this.a.h=this.b.b;sE(this.a.d,this.a.h);ng(this);Dg('Policy has been loaded!');}}
function xC(){}
_=xC.prototype=new hg();_.ub=AC;_.tN=oF+'AccessPolicyEditor$5';_.tI=77;function aD(a){a.b=kk(new jk());}
function bD(d,a,c,b){aD(d);ek(d,d.b);d.e=bj(new Ai(),'<',d);lk(d.b,d.e);d.a=bj(new Ai(),'>',d);lk(d.b,d.a);d.c=a;d.d=c;return d;}
function dD(b,a){if(rv(a,'(')>0){return xv(a,0,rv(a,'('));}else{return a;}}
function eD(c){var a,b;if(c===this.a){a=gm(this.c);if(a>=0){b=hm(this.c,a);Dg('Add selected identity '+b+' to policy');km(this.c,a);am(this.d,xv(b,0,1)+': (-,-) '+yv(wv(b,2)),b);}else{Dg('No identity selected yet! Please select an identity.');}}else if(c===this.e){a=gm(this.d);if(a>=0){b=hm(this.d,a);Dg('Remove selected identity '+b+' from policy');km(this.d,a);Fl(this.c,dD(this,b));}else{Dg('No identity selected yet! Please select an identity.');}}}
function FC(){}
_=FC.prototype=new ck();_.ib=eD;_.tN=oF+'AddRemoveIdentitiesWidget';_.tI=78;_.a=null;_.c=null;_.d=null;_.e=null;function AE(a){a.d=jA(new nz());}
function BE(a,b){AE(a);a.e=Db(new yb(),(Fb(),dc),b);FE(a);return a;}
function CE(e){var a,b,c,d;b='';a=kA(new nz(),e.d);for(d=eA(pA(a));Cz(d);){c=Dz(d);b+=c.A()+''+c.C();if(Cz(d)){b+='&';}}return b;}
function EE(a){return ac(a.e,CE(a),a);}
function FE(a){bc(a.e,'Content-Type','application/x-www-form-urlencoded');}
function aF(b,a){Dg('Exception: '+a.b);}
function zE(){}
_=zE.prototype=new Bu();_.kb=aF;_.tN=pF+'AsynchronousAgent';_.tI=0;_.e=null;function gD(a){a.c=yB(new xB());a.a=yB(new xB());a.b=yB(new xB());}
function hD(a,b){BE(a,b);gD(a);return a;}
function jD(d,c,a){var b;b=c.z(a);return fe(b.bb(0),16);}
function kD(c){var a,b;a=Fd('[Ljava.lang.String;',[0],[1],[c.a.a.b],null);for(b=0;b<c.a.a.b;b++){a[b]=fe(BB(c.a,b),1);}return a;}
function lD(c){var a,b;b=Fd('[Ljava.lang.String;',[0],[1],[c.b.a.b],null);for(a=0;a<c.b.a.b;a++){b[a]=fe(BB(c.b,a),1);}return b;}
function mD(b){var a,c;c=Fd('[Ljava.lang.String;',[0],[1],[b.c.a.b],null);for(a=0;a<b.c.a.b;a++){c[a]=fe(BB(b.c,a),1);}return c;}
function nD(d,e){var a,b,c,f,g,h,i,j;h=cq(tb(e)).w();j=jD(this,h,'users');i=j.z('user');for(c=0;c<i.B();c++){zB(this.c,fe(i.bb(c),16).v('id'));}b=jD(this,h,'groups');a=b.z('group');for(c=0;c<a.B();c++){zB(this.a,fe(a.bb(c),16).v('id'));}g=jD(this,h,'rights');f=g.z('right');for(c=0;c<f.B();c++){zB(this.b,fe(f.bb(c),16).v('id'));}}
function fD(){}
_=fD.prototype=new zE();_.mb=nD;_.tN=oF+'AsynchronousIdentitiesAndRightsGetter';_.tI=0;function pD(a){a.c=yB(new xB());a.a=yB(new xB());}
function qD(a,b){BE(a,b);pD(a);return a;}
function sD(d,c,a){var b;b=c.z(a);if(b.B()>0){return fe(b.bb(0),16);}else{return null;}}
function tD(c){var a,b;b=Fd('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[27],[c.a.a.b],null);for(a=0;a<b.a;a++){b[a]=fe(BB(c.a,a),27);}return b;}
function uD(c){var a,b;b=Fd('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[26],[c.c.a.b],null);for(a=0;a<b.a;a++){b[a]=fe(BB(c.c,a),26);}return b;}
function vD(c,d){var a,b,e,f,g,h,i;f=cq(tb(d)).w();g=f.v('use-inherited-policies');if(g===null){this.b=true;}else{if(qv(g,'false')){this.b=false;}else{this.b=true;}}i=sD(this,f,'world');h=f.z('user');for(b=0;b<h.B();b++){e=ae('[Ljava.lang.String;',0,1,['Write','Read']);zB(this.c,xE(new wE(),fe(h.bb(b),16).v('id'),e));}a=f.z('group');for(b=0;b<a.B();b++){e=ae('[Ljava.lang.String;',0,1,['Write','Read']);zB(this.a,DD(new CD(),fe(a.bb(b),16).v('id'),e));}}
function oD(){}
_=oD.prototype=new zE();_.mb=vD;_.tN=oF+'AsynchronousPolicyGetter';_.tI=0;_.b=true;function xD(a,b){Dg('Save policy to: '+b);a.a=Db(new yb(),(Fb(),ec),b);return a;}
function zD(f,h,b,g){var a,c,d,e;a=gv(new ev(),'<?xml version="1.0"?>');iv(a,'<policy xmlns="http://www.wyona.org/security/1.0" use-inherited-policies="'+g+'">');if(h!==null){for(c=0;c<h.a;c++){iv(a,'<user id="'+h[c].a+'">');e=h[c].b;if(e!==null){for(d=0;d<e.a;d++){iv(a,'<right id="'+e[d]+'">'+e[d]+'<\/right>');}}iv(a,'<\/user>');}}if(b!==null){for(c=0;c<b.a;c++){iv(a,'<group id="'+b[c].a+'">');e=b[c].b;if(e!==null){for(d=0;d<e.a;d++){iv(a,'<right id="'+e[d]+'">'+e[d]+'<\/right>');}}iv(a,'<\/group>');}}iv(a,'<\/policy>');return ac(f.a,mv(a),f);}
function AD(b,a){Dg('Exception: '+a.b);}
function BD(a,b){if(sb(b)==200){Dg('Policy has been saved successfully!');}else{Dg('Policy has NOT been saved! Please check log files on server.');}}
function wD(){}
_=wD.prototype=new Bu();_.kb=AD;_.mb=BD;_.tN=oF+'AsynchronousPolicySetter';_.tI=0;_.a=null;function DD(c,a,b){c.a=a;c.b=b;return c;}
function CD(){}
_=CD.prototype=new Bu();_.tN=oF+'Group';_.tI=79;_.a=null;_.b=null;function aE(a){a.b=Fn(new Dn());}
function bE(b,d,c,a){aE(b);ek(b,b.b);ao(b.b,sl(new ql(),'Identities'));b.a=El(new wl(),true);b.a.l(b);dE(b,d,c,a);ao(b.b,b.a);return b;}
function dE(c,e,d,a){var b;cm(c.a);mm(c.a,e);if(d!==null){for(b=0;b<d.a;b++){Fl(c.a,'u: '+d[b]);}}else{Fl(c.a,'No users yet!');}if(a!==null){for(b=0;b<a.a;b++){Fl(c.a,'g: '+a[b]);}}else{Fl(c.a,'No groups yet!');}}
function eE(a){}
function FD(){}
_=FD.prototype=new ck();_.ib=eE;_.tN=oF+'IdentitiesListBoxWidget';_.tI=80;_.a=null;function gE(a){a.f=Fn(new Dn());}
function hE(b,e,d,a,c){gE(b);ek(b,b.f);ao(b.f,sl(new ql(),'Policy'));b.d=mj(new jj(),'Inherit rights from parent policies');sE(b,c);ao(b.f,b.d);b.c=El(new wl(),true);b.c.l(b);rE(b,e,d,a);ao(b.f,b.c);b.e=mj(new jj(),'Read');b.e.l(b);ao(b.f,b.e);b.g=mj(new jj(),'Write');b.g.l(b);ao(b.f,b.g);return b;}
function iE(g,a,f){var b,c,d,e;e=yB(new xB());for(c=0;c<a.a;c++){zB(e,a[c]);}b=false;for(c=0;c<a.a;c++){if(qv(a[c],f)){b=true;break;}}if(!b)zB(e,f);d=Fd('[Ljava.lang.String;',[0],[1],[e.a.b],null);for(c=0;c<d.a;c++){d[c]=fe(BB(e,c),1);}return d;}
function kE(g){var a,b,c,d,e,f;b=yB(new xB());for(c=0;c<em(g.c);c++){e=fm(g.c,c);f=mE(g,e);d=lE(g,c);if(vv(d,'g:')){zB(b,DD(new CD(),yv(wv(d,2)),f));}}a=Fd('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[27],[b.a.b],null);for(c=0;c<a.a;c++){a[c]=fe(BB(b,c),27);}return a;}
function lE(b,a){return hm(b.c,a);}
function mE(f,b){var a,c,d,e;if(rv(b,'(')>0){e=tv(xv(b,rv(b,'(')+1,rv(b,')')),',');c=yB(new xB());for(a=0;a<e.a;a++){if(!qv(e[a],'-'))zB(c,e[a]);}d=Fd('[Ljava.lang.String;',[0],[1],[c.a.b],null);for(a=0;a<d.a;a++){d[a]=fe(BB(c,a),1);}return d;}else{return Fd('[Ljava.lang.String;',[0],[1],[0],null);}}
function nE(b){var a;a=gm(b.c);if(a>=0){return fm(b.c,a);}return null;}
function oE(a){return oj(a.d);}
function pE(e){var a,b,c,d,f,g;g=yB(new xB());for(a=0;a<em(e.c);a++){c=fm(e.c,a);d=mE(e,c);b=lE(e,a);if(vv(b,'u:')){zB(g,xE(new wE(),yv(wv(b,2)),d));}}f=Fd('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[26],[g.a.b],null);for(a=0;a<f.a;a++){f[a]=fe(BB(g,a),26);}return f;}
function qE(f,a,e){var b,c,d;d=yB(new xB());for(b=0;b<a.a;b++){if(!qv(a[b],e)){zB(d,a[b]);}}c=Fd('[Ljava.lang.String;',[0],[1],[d.a.b],null);for(b=0;b<c.a;b++){c[b]=fe(BB(d,b),1);}return c;}
function rE(d,g,e,a){var b,c,f;cm(d.c);mm(d.c,g);if(e!==null||a!==null){if(e!==null){for(b=0;b<e.a;b++){c='u: ('+d.a+','+d.b+') '+e[b].a;f='u: '+e[b].a;am(d.c,c,f);}}if(a!==null){for(b=0;b<a.a;b++){c='g: ('+d.a+','+d.b+') '+a[b].a;f='g: '+a[b].a;am(d.c,c,f);}}else{Dg('No groups!');}}else{Fl(d.c,'No identities yet!');}}
function sE(a,b){if(a.d!==null){pj(a.d,b);}}
function tE(g,h,a,e,b){var c,d,f,i;f=gv(new ev(),h+':');iv(f,' (');d=false;i=false;for(c=0;c<e.a;c++){if(qv(e[c],g.a)){d=true;}if(qv(e[c],g.b)){i=true;}}if(d){iv(f,g.a);}else{iv(f,'-');}iv(f,',');if(i){iv(f,g.b);}else{iv(f,'-');}iv(f,')');iv(f,' '+a);lm(g.c,b,mv(f));}
function uE(d,c){var a,b;b=gm(d.c);if(b>=0){a=lE(d,b);tE(d,xv(a,0,1),yv(wv(a,2)),c,b);}else{Dg('Exception: No list item selected!');}}
function vE(h){var a,b,c,d,e,f,g;if(h===this.e||h===this.g){g=nE(this);if(g!==null){if(h===this.e){a=mE(this,g);if(oj(this.e)){Dg('Add Read right from selected identity '+g+' from policy');e=iE(this,a,this.a);}else{Dg('Remove Read right from selected identity '+g+' from policy');e=qE(this,a,this.a);}uE(this,e);}else if(h===this.g){a=mE(this,g);if(oj(this.g)){Dg('Add Write right from selected identity '+g+' from policy');e=iE(this,a,this.b);}else{Dg('Remove Write right from selected identity '+g+' from policy');e=qE(this,a,this.b);}uE(this,e);}}else{Dg('No identity has been selected! Please select an identity in order to assign rights.');pj(this.e,false);pj(this.g,false);}}else if(h===this.c){g=nE(this);f=mE(this,g);b=false;c=false;for(d=0;d<f.a;d++){if(qv(f[d],this.a)){pj(this.e,true);b=true;}else if(qv(f[d],this.b)){pj(this.g,true);c=true;}}if(!b)pj(this.e,false);if(!c)pj(this.g,false);}}
function fE(){}
_=fE.prototype=new ck();_.ib=vE;_.tN=oF+'PolicyListBoxWidget';_.tI=81;_.a='r';_.b='w';_.c=null;_.d=null;_.e=null;_.g=null;function xE(c,a,b){c.a=a;c.b=b;return c;}
function wE(){}
_=wE.prototype=new Bu();_.tN=oF+'User';_.tI=82;_.a=null;_.b=null;function jt(){EC(new fC());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{jt();}catch(a){b(d);}else{jt();}}
var je=[{},{},{1:1},{4:1},{4:1,25:1},{4:1,25:1},{4:1,18:1,25:1},{2:1},{6:1},{6:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{3:1},{2:1,5:1},{2:1},{7:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{20:1},{20:1},{20:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{9:1,10:1,11:1,12:1,13:1,14:1},{7:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{4:1,25:1},{15:1},{15:1},{15:1},{15:1},{15:1},{15:1},{15:1},{4:1,25:1},{15:1},{15:1,17:1},{15:1,16:1},{15:1},{15:1},{15:1},{4:1,25:1},{19:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{21:1},{22:1},{22:1},{21:1},{23:1},{22:1},{22:1},{4:1,24:1,25:1},{4:1,25:1},{20:1},{8:1},{8:1},{8:1},{6:1},{6:1},{8:1,11:1,12:1,13:1,14:1},{27:1},{8:1,11:1,12:1,13:1,14:1},{8:1,11:1,12:1,13:1,14:1},{26:1}];if (org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor) {  var __gwt_initHandlers = org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.__gwt_initHandlers;  org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.onScriptLoad(gwtOnLoad);}})();