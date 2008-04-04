(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,qF='com.google.gwt.core.client.',rF='com.google.gwt.http.client.',sF='com.google.gwt.i18n.client.',tF='com.google.gwt.lang.',uF='com.google.gwt.user.client.',vF='com.google.gwt.user.client.impl.',wF='com.google.gwt.user.client.ui.',xF='com.google.gwt.user.client.ui.impl.',yF='com.google.gwt.xml.client.',zF='com.google.gwt.xml.client.impl.',AF='java.io.',BF='java.lang.',CF='java.util.',DF='org.wyona.security.gwt.accesspolicyeditor.client.',EF='org.wyona.yanel.gwt.client.';function lC(){}
function av(a){return this===a;}
function bv(){return lw(this);}
function cv(){return this.tN+'@'+this.hC();}
function Eu(){}
_=Eu.prototype={};_.eQ=av;_.hC=bv;_.tS=cv;_.toString=function(){return this.tS();};_.tN=BF+'Object';_.tI=1;function w(a){return a==null?null:a.tN;}
var y=null;function B(a){return a==null?0:a.$H?a.$H:(a.$H=D());}
function C(a){return a==null?0:a.$H?a.$H:(a.$H=D());}
function D(){return ++E;}
var E=0;function nw(b,a){b.b=a;return b;}
function pw(b,a){if(b.a!==null){throw ku(new ju(),"Can't overwrite cause");}if(a===b){throw hu(new gu(),'Self-causation not permitted');}b.a=a;return b;}
function qw(a){rw(a,(jw(),kw));}
function rw(e,d){var a,b,c;c=iv(new hv());b=e;while(b!==null){a=b.b;if(b!==e){lv(c,'Caused by: ');}lv(c,b.tN);lv(c,': ');lv(c,a===null?'(No exception detail)':a);lv(c,'\n');b=b.a;}}
function sw(){var a,b;a=w(this);b=this.b;if(b!==null){return a+': '+b;}else{return a;}}
function mw(){}
_=mw.prototype=new Eu();_.tS=sw;_.tN=BF+'Throwable';_.tI=3;_.a=null;_.b=null;function eu(b,a){nw(b,a);return b;}
function du(){}
_=du.prototype=new mw();_.tN=BF+'Exception';_.tI=4;function ev(b,a){eu(b,a);return b;}
function dv(){}
_=dv.prototype=new du();_.tN=BF+'RuntimeException';_.tI=5;function ab(c,b,a){ev(c,'JavaScript '+b+' exception: '+a);return c;}
function F(){}
_=F.prototype=new dv();_.tN=qF+'JavaScriptException';_.tI=6;function eb(b,a){if(!ee(a,2)){return false;}return jb(b,de(a,2));}
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
_=cb.prototype=new Eu();_.eQ=kb;_.hC=lb;_.tS=nb;_.tN=qF+'JavaScriptObject';_.tI=7;function rc(b,d,c,a){if(d===null){throw new xu();}if(a===null){throw new xu();}if(c<0){throw new gu();}b.a=c;b.c=d;if(c>0){b.b=vb(new ub(),b,a);qg(b.b,c);}else{b.b=null;}return b;}
function tc(a){var b;if(a.c!==null){b=a.c;a.c=null;dd(b);sc(a);}}
function sc(a){if(a.b!==null){mg(a.b);}}
function vc(e,a){var b,c,d,f;if(e.c===null){return;}sc(e);f=e.c;e.c=null;b=ed(f);if(b!==null){c=ev(new dv(),b);a.kb(e,c);}else{d=yc(f);a.mb(e,d);}}
function wc(b,a){if(b.c===null){return;}tc(b);a.kb(b,oc(new nc(),b,b.a));}
function xc(b){var a;if(b.c===null){return false;}a=fd(b.c);switch(a){case 1:case 2:case 3:return true;}return false;}
function yc(b){var a;a=qb(new pb(),b);return a;}
function zc(a){var b;b=y;{vc(this,a);}}
function ob(){}
_=ob.prototype=new Eu();_.s=zc;_.tN=rF+'Request';_.tI=0;_.a=0;_.b=null;_.c=null;function Ac(){}
_=Ac.prototype=new Eu();_.tN=rF+'Response';_.tI=0;function qb(a,b){a.a=b;return a;}
function sb(a){return hd(a.a);}
function tb(a){return gd(a.a);}
function pb(){}
_=pb.prototype=new Ac();_.tN=rF+'Request$1';_.tI=0;function ng(){ng=lC;xg=Cy(new Ay());{wg();}}
function lg(a){ng();return a;}
function mg(a){if(a.d){rg(a.e);}else{sg(a.e);}gz(xg,a);}
function og(a){if(!a.d){gz(xg,a);}a.ub();}
function qg(b,a){if(a<=0){throw hu(new gu(),'must be positive');}mg(b);b.d=false;b.e=ug(b,a);Ey(xg,b);}
function pg(b,a){if(a<=0){throw hu(new gu(),'must be positive');}mg(b);b.d=true;b.e=tg(b,a);Ey(xg,b);}
function rg(a){ng();$wnd.clearInterval(a);}
function sg(a){ng();$wnd.clearTimeout(a);}
function tg(b,a){ng();return $wnd.setInterval(function(){b.t();},a);}
function ug(b,a){ng();return $wnd.setTimeout(function(){b.t();},a);}
function vg(){var a;a=y;{og(this);}}
function wg(){ng();Bg(new hg());}
function gg(){}
_=gg.prototype=new Eu();_.t=vg;_.tN=uF+'Timer';_.tI=8;_.d=false;_.e=0;var xg;function wb(){wb=lC;ng();}
function vb(b,a,c){wb();b.a=a;b.b=c;lg(b);return b;}
function xb(){wc(this.a,this.b);}
function ub(){}
_=ub.prototype=new gg();_.ub=xb;_.tN=rF+'Request$2';_.tI=9;function Fb(){Fb=lC;dc=Ab(new zb(),'GET');ec=Ab(new zb(),'POST');fc=pi(new oi());}
function Db(b,a,c){Fb();Eb(b,a===null?null:a.a,c);return b;}
function Eb(b,a,c){Fb();Ec('httpMethod',a);Ec('url',c);b.b=a;b.d=c;return b;}
function ac(g,d,a){var b,c,e,f,h;h=ri(fc);{b=id(h,g.b,g.d,true);}if(b!==null){e=lc(new kc(),g.d);pw(e,ic(new hc(),b));throw e;}cc(g,h);c=rc(new ob(),h,g.c,a);f=jd(h,c,d,a);if(f!==null){throw ic(new hc(),f);}return c;}
function bc(b,a,c){Ec('header',a);Ec('value',c);if(b.a===null){b.a=qA(new uz());}zA(b.a,a,c);}
function cc(e,f){var a,b,c,d;if(e.a!==null&&e.a.c>0){a=wA(e.a);d=lA(a);while(dA(d)){c=eA(d);b=kd(f,de(c.A(),1),de(c.C(),1));if(b!==null){throw ic(new hc(),b);}}}else{kd(f,'Content-Type','text/plain; charset=utf-8');}}
function yb(){}
_=yb.prototype=new Eu();_.tN=rF+'RequestBuilder';_.tI=0;_.a=null;_.b=null;_.c=0;_.d=null;var dc,ec,fc;function Ab(b,a){b.a=a;return b;}
function Cb(){return this.a;}
function zb(){}
_=zb.prototype=new Eu();_.tS=Cb;_.tN=rF+'RequestBuilder$Method';_.tI=0;_.a=null;function ic(b,a){eu(b,a);return b;}
function hc(){}
_=hc.prototype=new du();_.tN=rF+'RequestException';_.tI=10;function lc(a,b){ic(a,'The URL '+b+' is invalid or violates the same-origin security restriction');return a;}
function kc(){}
_=kc.prototype=new hc();_.tN=rF+'RequestPermissionException';_.tI=11;function oc(b,a,c){ic(b,qc(c));return b;}
function qc(a){return 'A request timeout has expired after '+ru(a)+' ms';}
function nc(){}
_=nc.prototype=new hc();_.tN=rF+'RequestTimeoutException';_.tI=12;function Ec(a,b){Fc(a,b);if(0==xv(Ev(b))){throw hu(new gu(),a+' can not be empty');}}
function Fc(a,b){if(null===b){throw yu(new xu(),a+' can not be null');}}
function dd(a){a.onreadystatechange=ti;a.abort();}
function ed(b){try{if(b.status===undefined){return 'XmlHttpRequest.status == undefined, please see Safari bug '+'http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';}return null;}catch(a){return 'Unable to read XmlHttpRequest.status; likely causes are a '+'networking error or bad cross-domain request. Please see '+'https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more '+'details';}}
function fd(a){return a.readyState;}
function gd(a){return a.responseText;}
function hd(a){return a.status;}
function id(e,c,d,b){try{e.open(c,d,b);return null;}catch(a){return a.message||a.toString();}}
function jd(e,c,d,b){e.onreadystatechange=function(){if(e.readyState==cd){e.onreadystatechange=ti;c.s(b);}};try{e.send(d);return null;}catch(a){e.onreadystatechange=ti;return a.message||a.toString();}}
function kd(d,b,c){try{d.setRequestHeader(b,c);return null;}catch(a){return a.message||a.toString();}}
var cd=4;function pd(){pd=lC;sd=qA(new uz());}
function md(b,a){pd();if(a===null||uv('',a)){throw hu(new gu(),'Cannot create a Dictionary with a null or empty name');}b.b='Dictionary '+a;od(b,a);if(b.a===null){throw yB(new xB(),"Cannot find JavaScript object with the name '"+a+"'",a,null);}return b;}
function nd(b,a){for(x in b.a){a.m(x);}}
function od(c,b){try{if(typeof $wnd[b]!='object'){ud(b);}c.a=$wnd[b];}catch(a){ud(b);}}
function qd(b,a){var c=b.a[a];if(c==null|| !Object.prototype.hasOwnProperty.call(b.a,a)){b.tb(a);}return String(c);}
function rd(b){var a;a=mB(new lB());nd(b,a);return a;}
function td(a){pd();var b;b=de(xA(sd,a),3);if(b===null){b=md(new ld(),a);zA(sd,a,b);}return b;}
function vd(b){var a,c;c=rd(this);a="Cannot find '"+b+"' in "+this;if(c.a.c<20){a+='\n keys found: '+c;}throw yB(new xB(),a,this.b,b);}
function ud(a){pd();throw yB(new xB(),"'"+a+"' is not a JavaScript object and cannot be used as a Dictionary",null,a);}
function wd(){return this.b;}
function ld(){}
_=ld.prototype=new Eu();_.tb=vd;_.tS=wd;_.tN=sF+'Dictionary';_.tI=13;_.a=null;_.b=null;var sd;function yd(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function Ad(a,b,c){return a[b]=c;}
function Bd(b,a){return b[a];}
function Cd(a){return a.length;}
function Ed(e,d,c,b,a){return Dd(e,d,c,b,0,Cd(b),a);}
function Dd(j,i,g,c,e,a,b){var d,f,h;if((f=Bd(c,e))<0){throw new vu();}h=yd(new xd(),f,Bd(i,e),Bd(g,e),j);++e;if(e<a){j=Cv(j,1);for(d=0;d<f;++d){Ad(h,d,Dd(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){Ad(h,d,b);}}return h;}
function Fd(a,b,c){if(c!==null&&a.b!=0&& !ee(c,a.b)){throw new tt();}return Ad(a,b,c);}
function xd(){}
_=xd.prototype=new Eu();_.tN=tF+'Array';_.tI=0;function ce(b,a){return !(!(b&&he[b][a]));}
function de(b,a){if(b!=null)ce(b.tI,a)||ge();return b;}
function ee(b,a){return b!=null&&ce(b.tI,a);}
function ge(){throw new Ft();}
function fe(a){if(a!==null){throw new Ft();}return a;}
function ie(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var he;function le(a){if(ee(a,4)){return a;}return ab(new F(),ne(a),me(a));}
function me(a){return a.message;}
function ne(a){return a.name;}
function pe(){pe=lC;qf=Cy(new Ay());{lf=new ih();nh(lf);}}
function qe(b,a){pe();yh(lf,b,a);}
function re(a,b){pe();return lh(lf,a,b);}
function se(){pe();return Ah(lf,'button');}
function te(){pe();return Ah(lf,'div');}
function ue(){pe();return Bh(lf,'checkbox');}
function ve(){pe();return Bh(lf,'text');}
function we(){pe();return Ah(lf,'label');}
function xe(a){pe();return Ch(lf,a);}
function ye(){pe();return Ah(lf,'span');}
function ze(){pe();return Ah(lf,'tbody');}
function Ae(){pe();return Ah(lf,'td');}
function Be(){pe();return Ah(lf,'tr');}
function Ce(){pe();return Ah(lf,'table');}
function Fe(b,a,d){pe();var c;c=y;{Ee(b,a,d);}}
function Ee(b,a,c){pe();var d;if(a===pf){if(bf(b)==8192){pf=null;}}d=De;De=b;try{c.hb(b);}finally{De=d;}}
function af(b,a){pe();Dh(lf,b,a);}
function bf(a){pe();return Eh(lf,a);}
function cf(a){pe();th(lf,a);}
function df(a){pe();return uh(lf,a);}
function ef(a){pe();return Fh(lf,a);}
function hf(a,b){pe();return ci(lf,a,b);}
function ff(a,b){pe();return ai(lf,a,b);}
function gf(a,b){pe();return bi(lf,a,b);}
function jf(a){pe();return di(lf,a);}
function kf(a){pe();return vh(lf,a);}
function mf(c,b,d,a){pe();ei(lf,c,b,d,a);}
function nf(a){pe();var b,c;c=true;if(qf.b>0){b=fe(cz(qf,qf.b-1));if(!(c=null.Ab())){af(a,true);cf(a);}}return c;}
function of(b,a){pe();fi(lf,b,a);}
function tf(a,b,c){pe();ii(lf,a,b,c);}
function rf(a,b,c){pe();gi(lf,a,b,c);}
function sf(a,b,c){pe();hi(lf,a,b,c);}
function uf(a,b){pe();ji(lf,a,b);}
function vf(a,b){pe();ki(lf,a,b);}
function wf(a,b){pe();li(lf,a,b);}
function xf(b,c,a){pe();mi(lf,b,c,a);}
function yf(b,a,c){pe();ni(lf,b,a,c);}
function zf(a,b){pe();ph(lf,a,b);}
function Af(a){pe();return qh(lf,a);}
var De=null,lf=null,pf=null,qf;function Df(a){if(ee(a,5)){return re(this,de(a,5));}return eb(ie(this,Bf),a);}
function Ef(){return fb(ie(this,Bf));}
function Ff(){return Af(this);}
function Bf(){}
_=Bf.prototype=new cb();_.eQ=Df;_.hC=Ef;_.tS=Ff;_.tN=uF+'Element';_.tI=14;function dg(a){return eb(ie(this,ag),a);}
function eg(){return fb(ie(this,ag));}
function fg(){return df(this);}
function ag(){}
_=ag.prototype=new cb();_.eQ=dg;_.hC=eg;_.tS=fg;_.tN=uF+'Event';_.tI=15;function jg(){while((ng(),xg).b>0){mg(de(cz((ng(),xg),0),6));}}
function kg(){return null;}
function hg(){}
_=hg.prototype=new Eu();_.ob=jg;_.pb=kg;_.tN=uF+'Timer$1';_.tI=16;function Ag(){Ag=lC;Dg=Cy(new Ay());fh=Cy(new Ay());{bh();}}
function Bg(a){Ag();Ey(Dg,a);}
function Cg(a){Ag();$wnd.alert(a);}
function Eg(){Ag();var a,b;for(a=Dg.cb();a.F();){b=de(a.eb(),7);b.ob();}}
function Fg(){Ag();var a,b,c,d;d=null;for(a=Dg.cb();a.F();){b=de(a.eb(),7);c=b.pb();{d=c;}}return d;}
function ah(){Ag();var a,b;for(a=fh.cb();a.F();){b=fe(a.eb());null.Ab();}}
function bh(){Ag();__gwt_initHandlers(function(){eh();},function(){return dh();},function(){ch();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ch(){Ag();var a;a=y;{Eg();}}
function dh(){Ag();var a;a=y;{return Fg();}}
function eh(){Ag();var a;a=y;{ah();}}
var Dg,fh;function yh(c,b,a){b.appendChild(a);}
function Ah(b,a){return $doc.createElement(a);}
function Bh(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function Ch(c,a){var b;b=Ah(c,'select');if(a){gi(c,b,'multiple',true);}return b;}
function Dh(c,b,a){b.cancelBubble=a;}
function Eh(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function Fh(c,b){var a=$doc.getElementById(b);return a||null;}
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
function gh(){}
_=gh.prototype=new Eu();_.tN=vF+'DOMImpl';_.tI=0;function th(b,a){a.preventDefault();}
function uh(b,a){return a.toString();}
function vh(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function wh(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){Fe(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!nf(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)Fe(b,a,c);};$wnd.__captureElem=null;}
function xh(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function rh(){}
_=rh.prototype=new gh();_.tN=vF+'DOMImplStandard';_.tI=0;function lh(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function nh(a){wh(a);mh(a);}
function mh(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function ph(c,b,a){xh(c,b,a);oh(c,b,a);}
function oh(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function qh(d,a){var b=a.cloneNode(true);var c=$doc.createElement('DIV');c.appendChild(b);outer=c.innerHTML;b.innerHTML='';return outer;}
function hh(){}
_=hh.prototype=new rh();_.tN=vF+'DOMImplMozilla';_.tI=0;function ih(){}
_=ih.prototype=new hh();_.tN=vF+'DOMImplMozillaOld';_.tI=0;function pi(a){ti=hb();return a;}
function ri(a){return si(a);}
function si(a){return new XMLHttpRequest();}
function oi(){}
_=oi.prototype=new Eu();_.tN=vF+'HTTPRequestImpl';_.tI=0;var ti=null;function wn(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function xn(b,a){if(b.j!==null){wn(b,b.j,a);}b.j=a;}
function yn(b,a){Bn(b.j,a);}
function zn(b,a){zf(b.w(),a|jf(b.w()));}
function An(){return this.j;}
function Bn(a,b){tf(a,'className',b);}
function Cn(){if(this.j===null){return '(null handle)';}return Af(this.j);}
function un(){}
_=un.prototype=new Eu();_.w=An;_.tS=Cn;_.tN=wF+'UIObject';_.tI=0;_.j=null;function yo(a){if(ee(a.i,10)){de(a.i,10).sb(a);}else if(a.i!==null){throw ku(new ju(),"This widget's parent does not implement HasWidgets");}}
function zo(b,a){if(b.ab()){uf(b.w(),null);}xn(b,a);if(b.ab()){uf(a,b);}}
function Ao(c,b){var a;a=c.i;if(b===null){if(a!==null&&a.ab()){c.jb();}c.i=null;}else{if(a!==null){throw ku(new ju(),'Cannot set a new parent without first clearing the old parent');}c.i=b;if(b.ab()){c.gb();}}}
function Bo(){}
function Co(){}
function Do(){return this.h;}
function Eo(){if(this.ab()){throw ku(new ju(),"Should only call onAttach when the widget is detached from the browser's document");}this.h=true;uf(this.w(),this);this.p();this.lb();}
function Fo(a){}
function ap(){if(!this.ab()){throw ku(new ju(),"Should only call onDetach when the widget is attached to the browser's document");}try{this.nb();}finally{this.q();uf(this.w(),null);this.h=false;}}
function bp(){}
function cp(){}
function dp(a){zo(this,a);}
function fo(){}
_=fo.prototype=new un();_.p=Bo;_.q=Co;_.ab=Do;_.gb=Eo;_.hb=Fo;_.jb=ap;_.lb=bp;_.nb=cp;_.vb=dp;_.tN=wF+'Widget';_.tI=17;_.h=false;_.i=null;function rm(b,a){Ao(a,b);}
function tm(b,a){Ao(a,null);}
function um(){var a,b;for(b=this.cb();ko(b);){a=lo(b);a.gb();}}
function vm(){var a,b;for(b=this.cb();ko(b);){a=lo(b);a.jb();}}
function wm(){}
function xm(){}
function qm(){}
_=qm.prototype=new fo();_.p=um;_.q=vm;_.lb=wm;_.nb=xm;_.tN=wF+'Panel';_.tI=18;function Cj(a){a.f=po(new go(),a);}
function Dj(a){Cj(a);return a;}
function Ej(c,a,b){yo(a);qo(c.f,a);qe(b,a.w());rm(c,a);}
function ak(b,c){var a;if(c.i!==b){return false;}tm(b,c);a=c.w();of(kf(a),a);wo(b.f,c);return true;}
function bk(){return uo(this.f);}
function ck(a){return ak(this,a);}
function Bj(){}
_=Bj.prototype=new qm();_.cb=bk;_.sb=ck;_.tN=wF+'ComplexPanel';_.tI=19;function vi(a){Dj(a);a.vb(te());yf(a.w(),'position','relative');yf(a.w(),'overflow','hidden');return a;}
function wi(a,b){Ej(a,b,a.w());}
function yi(a){yf(a,'left','');yf(a,'top','');yf(a,'position','');}
function zi(b){var a;a=ak(this,b);if(a){yi(b.w());}return a;}
function ui(){}
_=ui.prototype=new Bj();_.sb=zi;_.tN=wF+'AbsolutePanel';_.tI=20;function qk(){qk=lC;np(),pp;}
function pk(b,a){np(),pp;sk(b,a);return b;}
function rk(b,a){switch(bf(a)){case 1:if(b.c!==null){zj(b.c,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function sk(b,a){zo(b,a);zn(b,7041);}
function tk(a){if(this.c===null){this.c=xj(new wj());}Ey(this.c,a);}
function uk(a){rk(this,a);}
function vk(a){sk(this,a);}
function ok(){}
_=ok.prototype=new fo();_.k=tk;_.hb=uk;_.vb=vk;_.tN=wF+'FocusWidget';_.tI=21;_.c=null;function Di(){Di=lC;np(),pp;}
function Ci(b,a){np(),pp;pk(b,a);return b;}
function Ei(a){vf(this.w(),a);}
function Bi(){}
_=Bi.prototype=new ok();_.wb=Ei;_.tN=wF+'ButtonBase';_.tI=22;function cj(){cj=lC;np(),pp;}
function Fi(a){np(),pp;Ci(a,se());dj(a.w());yn(a,'gwt-Button');return a;}
function aj(b,a){np(),pp;Fi(b);b.wb(a);return b;}
function bj(c,a,b){np(),pp;aj(c,a);c.k(b);return c;}
function dj(b){cj();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function Ai(){}
_=Ai.prototype=new Bi();_.tN=wF+'Button';_.tI=23;function fj(a){Dj(a);a.e=Ce();a.d=ze();qe(a.e,a.d);a.vb(a.e);return a;}
function hj(c,b,a){tf(b,'align',a.a);}
function ij(c,b,a){yf(b,'verticalAlign',a.a);}
function ej(){}
_=ej.prototype=new Bj();_.tN=wF+'CellPanel';_.tI=24;_.d=null;_.e=null;function nj(){nj=lC;np(),pp;}
function kj(a){np(),pp;lj(a,ue());yn(a,'gwt-CheckBox');return a;}
function mj(b,a){np(),pp;kj(b);rj(b,a);return b;}
function lj(b,a){var c;np(),pp;Ci(b,ye());b.a=a;b.b=we();zf(b.a,jf(b.w()));zf(b.w(),0);qe(b.w(),b.a);qe(b.w(),b.b);c='check'+ ++vj;tf(b.a,'id',c);tf(b.b,'htmlFor',c);return b;}
function oj(b){var a;a=b.ab()?'checked':'defaultChecked';return ff(b.a,a);}
function pj(b,a){rf(b.a,'checked',a);rf(b.a,'defaultChecked',a);}
function qj(b,a){tf(b.a,'name',a);}
function rj(b,a){wf(b.b,a);}
function sj(){uf(this.a,this);}
function tj(){uf(this.a,null);pj(this,oj(this));}
function uj(a){vf(this.b,a);}
function jj(){}
_=jj.prototype=new Bi();_.lb=sj;_.nb=tj;_.wb=uj;_.tN=wF+'CheckBox';_.tI=25;_.a=null;_.b=null;var vj=0;function xw(d,a,b){var c;while(a.F()){c=a.eb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function zw(a){throw uw(new tw(),'add');}
function Aw(b){var a;a=xw(this,this.cb(),b);return a!==null;}
function Bw(){var a,b,c;c=iv(new hv());a=null;lv(c,'[');b=this.cb();while(b.F()){if(a!==null){lv(c,a);}else{a=', ';}lv(c,hw(b.eb()));}lv(c,']');return pv(c);}
function ww(){}
_=ww.prototype=new Eu();_.m=zw;_.o=Aw;_.tS=Bw;_.tN=CF+'AbstractCollection';_.tI=0;function fx(b,a){throw nu(new mu(),'Index: '+a+', Size: '+b.b);}
function gx(b,a){throw uw(new tw(),'add');}
function hx(a){this.l(this.yb(),a);return true;}
function ix(e){var a,b,c,d,f;if(e===this){return true;}if(!ee(e,30)){return false;}f=de(e,30);if(this.yb()!=f.yb()){return false;}c=this.cb();d=f.cb();while(c.F()){a=c.eb();b=d.eb();if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function jx(){var a,b,c,d;c=1;a=31;b=this.cb();while(b.F()){d=b.eb();c=31*c+(d===null?0:d.hC());}return c;}
function kx(){return Ew(new Dw(),this);}
function lx(a){throw uw(new tw(),'remove');}
function Cw(){}
_=Cw.prototype=new ww();_.l=gx;_.m=hx;_.eQ=ix;_.hC=jx;_.cb=kx;_.rb=lx;_.tN=CF+'AbstractList';_.tI=26;function By(a){{Fy(a);}}
function Cy(a){By(a);return a;}
function Dy(c,a,b){if(a<0||a>c.b){fx(c,a);}hz(c.a,a,b);++c.b;}
function Ey(b,a){qz(b.a,b.b++,a);return true;}
function Fy(a){a.a=gb();a.b=0;}
function bz(b,a){return dz(b,a)!=(-1);}
function cz(b,a){if(a<0||a>=b.b){fx(b,a);}return mz(b.a,a);}
function dz(b,a){return ez(b,a,0);}
function ez(c,b,a){if(a<0){fx(c,a);}for(;a<c.b;++a){if(lz(b,mz(c.a,a))){return a;}}return (-1);}
function fz(c,a){var b;b=cz(c,a);oz(c.a,a,1);--c.b;return b;}
function gz(c,b){var a;a=dz(c,b);if(a==(-1)){return false;}fz(c,a);return true;}
function iz(a,b){Dy(this,a,b);}
function jz(a){return Ey(this,a);}
function hz(a,b,c){a.splice(b,0,c);}
function kz(a){return bz(this,a);}
function lz(a,b){return a===b||a!==null&&a.eQ(b);}
function nz(a){return cz(this,a);}
function mz(a,b){return a[b];}
function pz(a){return fz(this,a);}
function oz(a,c,b){a.splice(c,b);}
function qz(a,b,c){a[b]=c;}
function rz(){return this.b;}
function Ay(){}
_=Ay.prototype=new Cw();_.l=iz;_.m=jz;_.o=kz;_.D=nz;_.rb=pz;_.yb=rz;_.tN=CF+'ArrayList';_.tI=27;_.a=null;_.b=0;function xj(a){Cy(a);return a;}
function zj(d,c){var a,b;for(a=d.cb();a.F();){b=de(a.eb(),8);b.ib(c);}}
function wj(){}
_=wj.prototype=new Ay();_.tN=wF+'ClickListenerCollection';_.tI=28;function fk(a,b){if(a.g!==null){throw ku(new ju(),'Composite.initWidget() may only be called once.');}yo(b);a.vb(b.w());a.g=b;Ao(b,a);}
function gk(){if(this.g===null){throw ku(new ju(),'initWidget() was never called in '+w(this));}return this.j;}
function hk(){if(this.g!==null){return this.g.ab();}return false;}
function ik(){this.g.gb();this.lb();}
function jk(){try{this.nb();}finally{this.g.jb();}}
function dk(){}
_=dk.prototype=new fo();_.w=gk;_.ab=hk;_.gb=ik;_.jb=jk;_.tN=wF+'Composite';_.tI=29;_.g=null;function lk(a){Dj(a);a.vb(te());return a;}
function mk(a,b){Ej(a,b,a.w());}
function kk(){}
_=kk.prototype=new Bj();_.tN=wF+'FlowPanel';_.tI=30;function Ck(){Ck=lC;Ak(new zk(),'center');Dk=Ak(new zk(),'left');Ak(new zk(),'right');}
var Dk;function Ak(b,a){b.a=a;return b;}
function zk(){}
_=zk.prototype=new Eu();_.tN=wF+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=0;_.a=null;function dl(){dl=lC;bl(new al(),'bottom');el=bl(new al(),'middle');fl=bl(new al(),'top');}
var el,fl;function bl(a,b){a.a=b;return a;}
function al(){}
_=al.prototype=new Eu();_.tN=wF+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=0;_.a=null;function jl(a){a.a=(Ck(),Dk);a.c=(dl(),fl);}
function kl(a){fj(a);jl(a);a.b=Be();qe(a.d,a.b);tf(a.e,'cellSpacing','0');tf(a.e,'cellPadding','0');return a;}
function ll(b,c){var a;a=nl(b);qe(b.b,a);Ej(b,c,a);}
function nl(b){var a;a=Ae();hj(b,a,b.a);ij(b,a,b.c);return a;}
function ol(b,a){b.c=a;}
function pl(c){var a,b;b=kf(c.w());a=ak(this,c);if(a){of(this.b,b);}return a;}
function il(){}
_=il.prototype=new ej();_.sb=pl;_.tN=wF+'HorizontalPanel';_.tI=31;_.b=null;function sl(a){a.vb(te());zn(a,131197);yn(a,'gwt-Label');return a;}
function tl(b,a){sl(b);vl(b,a);return b;}
function vl(b,a){wf(b.w(),a);}
function wl(a){switch(bf(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function rl(){}
_=rl.prototype=new fo();_.hb=wl;_.tN=wF+'Label';_.tI=32;function em(){em=lC;np(),pp;om=new yl();}
function Fl(b,a){em();pk(b,xe(a));zn(b,1024);yn(b,'gwt-ListBox');return b;}
function am(b,a){jm(b,a,(-1));}
function bm(b,a,c){km(b,a,c,(-1));}
function cm(b,a){if(a<0||a>=fm(b)){throw new mu();}}
function dm(a){zl(om,a.w());}
function fm(a){return Bl(om,a.w());}
function gm(b,a){cm(b,a);return Cl(om,b.w(),a);}
function hm(a){return gf(a.w(),'selectedIndex');}
function im(b,a){cm(b,a);return Dl(om,b.w(),a);}
function jm(c,b,a){km(c,b,b,a);}
function km(c,b,d,a){mf(c.w(),b,d,a);}
function lm(b,a){cm(b,a);El(om,b.w(),a);}
function mm(c,a,b){cm(c,a);if(b===null){throw yu(new xu(),'Cannot set an option to have null text');}xf(c.w(),b,a);}
function nm(a,b){sf(a.w(),'size',b);}
function pm(a){if(bf(a)==1024){}else{rk(this,a);}}
function xl(){}
_=xl.prototype=new ok();_.hb=pm;_.tN=wF+'ListBox';_.tI=33;var om;function zl(b,a){a.options.length=0;}
function Bl(b,a){return a.options.length;}
function Cl(c,b,a){return b.options[a].text;}
function Dl(c,b,a){return b.options[a].value;}
function El(c,b,a){b.options[a]=null;}
function yl(){}
_=yl.prototype=new Eu();_.tN=wF+'ListBox$Impl';_.tI=0;function Em(){Em=lC;cn=qA(new uz());}
function Dm(b,a){Em();vi(b);if(a===null){a=Fm();}b.vb(a);b.gb();return b;}
function an(c){Em();var a,b;b=de(xA(cn,c),9);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=ef(c))){return null;}}if(cn.c==0){bn();}zA(cn,c,b=Dm(new ym(),a));return b;}
function Fm(){Em();return $doc.body;}
function bn(){Em();Bg(new zm());}
function ym(){}
_=ym.prototype=new ui();_.tN=wF+'RootPanel';_.tI=34;var cn;function Bm(){var a,b;for(b=Fx(oy((Em(),cn)));gy(b);){a=de(hy(b),9);if(a.ab()){a.jb();}}}
function Cm(){return null;}
function zm(){}
_=zm.prototype=new Eu();_.ob=Bm;_.pb=Cm;_.tN=wF+'RootPanel$1';_.tI=35;function nn(){nn=lC;np(),pp;}
function mn(b,a){np(),pp;pk(b,a);zn(b,1024);return b;}
function on(a){return hf(a.w(),'value');}
function pn(a){if(this.a===null){this.a=xj(new wj());}Ey(this.a,a);}
function qn(a){var b;rk(this,a);b=bf(a);if(b==1){if(this.a!==null){zj(this.a,this);}}else{}}
function ln(){}
_=ln.prototype=new ok();_.k=pn;_.hb=qn;_.tN=wF+'TextBoxBase';_.tI=36;_.a=null;function sn(){sn=lC;np(),pp;}
function rn(a){np(),pp;mn(a,ve());yn(a,'gwt-TextBox');return a;}
function tn(b,a){sf(b.w(),'size',a);}
function kn(){}
_=kn.prototype=new ln();_.tN=wF+'TextBox';_.tI=37;function En(a){a.a=(Ck(),Dk);a.b=(dl(),fl);}
function Fn(a){fj(a);En(a);tf(a.e,'cellSpacing','0');tf(a.e,'cellPadding','0');return a;}
function ao(b,d){var a,c;c=Be();a=co(b);qe(c,a);qe(b.d,c);Ej(b,d,a);}
function co(b){var a;a=Ae();hj(b,a,b.a);ij(b,a,b.b);return a;}
function eo(c){var a,b;b=kf(c.w());a=ak(this,c);if(a){of(this.d,kf(b));}return a;}
function Dn(){}
_=Dn.prototype=new ej();_.sb=eo;_.tN=wF+'VerticalPanel';_.tI=38;function po(b,a){b.b=a;b.a=Ed('[Lcom.google.gwt.user.client.ui.Widget;',[0],[13],[4],null);return b;}
function qo(a,b){to(a,b,a.c);}
function so(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]===c){return a;}}return (-1);}
function to(d,e,a){var b,c;if(a<0||a>d.c){throw new mu();}if(d.c==d.a.a){c=Ed('[Lcom.google.gwt.user.client.ui.Widget;',[0],[13],[d.a.a*2],null);for(b=0;b<d.a.a;++b){Fd(c,b,d.a[b]);}d.a=c;}++d.c;for(b=d.c-1;b>a;--b){Fd(d.a,b,d.a[b-1]);}Fd(d.a,a,e);}
function uo(a){return io(new ho(),a);}
function vo(c,b){var a;if(b<0||b>=c.c){throw new mu();}--c.c;for(a=b;a<c.c;++a){Fd(c.a,a,c.a[a+1]);}Fd(c.a,c.c,null);}
function wo(b,c){var a;a=so(b,c);if(a==(-1)){throw new AB();}vo(b,a);}
function go(){}
_=go.prototype=new Eu();_.tN=wF+'WidgetCollection';_.tI=0;_.a=null;_.b=null;_.c=0;function io(b,a){b.b=a;return b;}
function ko(a){return a.a<a.b.c-1;}
function lo(a){if(a.a>=a.b.c){throw new AB();}return a.b.a[++a.a];}
function mo(){return ko(this);}
function no(){return lo(this);}
function oo(){if(this.a<0||this.a>=this.b.c){throw new ju();}this.b.b.sb(this.b.a[this.a--]);}
function ho(){}
_=ho.prototype=new Eu();_.F=mo;_.eb=no;_.qb=oo;_.tN=wF+'WidgetCollection$WidgetIterator';_.tI=0;_.a=(-1);function np(){np=lC;op=hp(new fp());pp=op!==null?mp(new ep()):op;}
function mp(a){np();return a;}
function ep(){}
_=ep.prototype=new Eu();_.tN=xF+'FocusImpl';_.tI=0;var op,pp;function ip(){ip=lC;np();}
function gp(a){jp(a);kp(a);lp(a);}
function hp(a){ip();mp(a);gp(a);return a;}
function jp(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function kp(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function lp(a){return function(){this.firstChild.focus();};}
function fp(){}
_=fp.prototype=new ep();_.tN=xF+'FocusImplOld';_.tI=0;function vp(c,a,b){ev(c,b);return c;}
function up(){}
_=up.prototype=new dv();_.tN=yF+'DOMException';_.tI=39;function aq(){aq=lC;bq=(zs(),kt);}
function cq(a){aq();return As(bq,a);}
var bq;function wq(b,a){b.a=a;return b;}
function xq(a,b){return b;}
function zq(a){if(ee(a,25)){return re(xq(this,this.a),xq(this,de(a,25).a));}return false;}
function vq(){}
_=vq.prototype=new Eu();_.eQ=zq;_.tN=zF+'DOMItem';_.tI=40;_.a=null;function ur(b,a){wq(b,a);return b;}
function wr(a){return pr(new or(),Cs(a.a));}
function xr(a){return Fr(new Er(),Ds(a.a));}
function yr(a){return dt(a.a);}
function zr(a){return ft(a.a);}
function Ar(a){return it(a.a);}
function Br(a){return jt(a.a);}
function Cr(a){var b;if(a===null){return null;}b=et(a);switch(b){case 2:return eq(new dq(),a);case 4:return kq(new jq(),a);case 8:return sq(new rq(),a);case 11:return Fq(new Eq(),a);case 9:return dr(new cr(),a);case 1:return ir(new hr(),a);case 7:return is(new hs(),a);case 3:return ns(new ms(),a);default:return ur(new tr(),a);}}
function Dr(){return xr(this).bb(0);}
function tr(){}
_=tr.prototype=new vq();_.z=Dr;_.tN=zF+'NodeImpl';_.tI=41;function eq(b,a){ur(b,a);return b;}
function gq(a){return ct(a.a);}
function hq(a){return ht(a.a);}
function iq(){var a;a=iv(new hv());lv(a,' '+gq(this));lv(a,'="');lv(a,hq(this));lv(a,'"');return pv(a);}
function dq(){}
_=dq.prototype=new tr();_.tS=iq;_.tN=zF+'AttrImpl';_.tI=42;function oq(b,a){ur(b,a);return b;}
function qq(a){return Es(a.a);}
function nq(){}
_=nq.prototype=new tr();_.tN=zF+'CharacterDataImpl';_.tI=43;function ns(b,a){oq(b,a);return b;}
function ps(){var a,b,c;a=iv(new hv());c=Av(qq(this),'(?=[;&<>\'"])',(-1));for(b=0;b<c.a;b++){if(Bv(c[b],';')){lv(a,'&semi;');lv(a,Cv(c[b],1));}else if(Bv(c[b],'&')){lv(a,'&amp;');lv(a,Cv(c[b],1));}else if(Bv(c[b],'"')){lv(a,'&quot;');lv(a,Cv(c[b],1));}else if(Bv(c[b],"'")){lv(a,'&apos;');lv(a,Cv(c[b],1));}else if(Bv(c[b],'<')){lv(a,'&lt;');lv(a,Cv(c[b],1));}else if(Bv(c[b],'>')){lv(a,'&gt;');lv(a,Cv(c[b],1));}else{lv(a,c[b]);}}return pv(a);}
function ms(){}
_=ms.prototype=new nq();_.tS=ps;_.tN=zF+'TextImpl';_.tI=44;function kq(b,a){ns(b,a);return b;}
function mq(){var a;a=jv(new hv(),'<![CDATA[');lv(a,qq(this));lv(a,']]>');return pv(a);}
function jq(){}
_=jq.prototype=new ms();_.tS=mq;_.tN=zF+'CDATASectionImpl';_.tI=45;function sq(b,a){oq(b,a);return b;}
function uq(){var a;a=jv(new hv(),'<!--');lv(a,qq(this));lv(a,'-->');return pv(a);}
function rq(){}
_=rq.prototype=new nq();_.tS=uq;_.tN=zF+'CommentImpl';_.tI=46;function Bq(c,a,b){vp(c,12,'Failed to parse: '+Dq(a));pw(c,b);return c;}
function Dq(a){return Dv(a,0,uu(xv(a),128));}
function Aq(){}
_=Aq.prototype=new up();_.tN=zF+'DOMParseException';_.tI=47;function Fq(b,a){ur(b,a);return b;}
function br(){var a,b;a=iv(new hv());for(b=0;b<xr(this).B();b++){kv(a,xr(this).bb(b));}return pv(a);}
function Eq(){}
_=Eq.prototype=new tr();_.tS=br;_.tN=zF+'DocumentFragmentImpl';_.tI=48;function dr(b,a){ur(b,a);return b;}
function fr(){return de(Cr(Fs(this.a)),26);}
function gr(){var a,b,c;a=iv(new hv());b=xr(this);for(c=0;c<b.B();c++){lv(a,b.bb(c).tS());}return pv(a);}
function cr(){}
_=cr.prototype=new tr();_.v=fr;_.tS=gr;_.tN=zF+'DocumentImpl';_.tI=49;function ir(b,a){ur(b,a);return b;}
function kr(a){return gt(a.a);}
function lr(a){return Bs(this.a,a);}
function mr(a){return Fr(new Er(),at(this.a,a));}
function nr(){var a;a=jv(new hv(),'<');lv(a,kr(this));if(Ar(this)){lv(a,ds(wr(this)));}if(Br(this)){lv(a,'>');lv(a,ds(xr(this)));lv(a,'<\/');lv(a,kr(this));lv(a,'>');}else{lv(a,'/>');}return pv(a);}
function hr(){}
_=hr.prototype=new tr();_.u=lr;_.y=mr;_.tS=nr;_.tN=zF+'ElementImpl';_.tI=50;function Fr(b,a){wq(b,a);return b;}
function bs(a){return bt(a.a);}
function cs(b,a){return Cr(lt(b.a,a));}
function ds(c){var a,b;a=iv(new hv());for(b=0;b<c.B();b++){lv(a,c.bb(b).tS());}return pv(a);}
function es(){return bs(this);}
function fs(a){return cs(this,a);}
function gs(){return ds(this);}
function Er(){}
_=Er.prototype=new vq();_.B=es;_.bb=fs;_.tS=gs;_.tN=zF+'NodeListImpl';_.tI=51;function pr(b,a){Fr(b,a);return b;}
function rr(){return bs(this);}
function sr(a){return cs(this,a);}
function or(){}
_=or.prototype=new Er();_.B=rr;_.bb=sr;_.tN=zF+'NamedNodeMapImpl';_.tI=52;function is(b,a){ur(b,a);return b;}
function ks(a){return Es(a.a);}
function ls(){var a;a=jv(new hv(),'<?');lv(a,yr(this));lv(a,' ');lv(a,ks(this));lv(a,'?>');return pv(a);}
function hs(){}
_=hs.prototype=new tr();_.tS=ls;_.tN=zF+'ProcessingInstructionImpl';_.tI=53;function zs(){zs=lC;kt=ts(new rs());}
function ys(a){zs();return a;}
function As(e,c){var a,d;try{return de(Cr(ws(e,c)),27);}catch(a){a=le(a);if(ee(a,28)){d=a;throw Bq(new Aq(),c,d);}else throw a;}}
function Bs(b,a){zs();return b.getAttribute(a);}
function Cs(a){zs();return a.attributes;}
function Ds(b){zs();var a=b.childNodes;return a==null?null:a;}
function Es(a){zs();return a.data;}
function Fs(a){zs();return a.documentElement;}
function at(a,b){zs();return vs(kt,a,b);}
function bt(a){zs();return a.length;}
function ct(a){zs();return a.name;}
function dt(a){zs();var b=a.nodeName;return b==null?null:b;}
function et(a){zs();var b=a.nodeType;return b==null?-1:b;}
function ft(a){zs();return a.nodeValue;}
function gt(a){zs();return a.tagName;}
function ht(a){zs();return a.value;}
function it(a){zs();return a.attributes.length!=0;}
function jt(a){zs();return a.hasChildNodes();}
function lt(c,a){zs();if(a>=c.length){return null;}var b=c.item(a);return b==null?null:b;}
function qs(){}
_=qs.prototype=new Eu();_.tN=zF+'XMLParserImpl';_.tI=0;var kt;function us(){us=lC;zs();}
function ss(a){a.a=xs();}
function ts(a){us();ys(a);ss(a);return a;}
function vs(c,a,b){return a.getElementsByTagNameNS('*',b);}
function ws(e,a){var b=e.a;var c=b.parseFromString(a,'text/xml');var d=c.documentElement;if(d.tagName=='parsererror'&&d.namespaceURI=='http://www.mozilla.org/newlayout/xml/parsererror.xml'){throw new Error(d.firstChild.data);}return c;}
function xs(){us();return new DOMParser();}
function rs(){}
_=rs.prototype=new qs();_.tN=zF+'XMLParserImplStandard';_.tI=0;function pt(){}
_=pt.prototype=new Eu();_.tN=AF+'OutputStream';_.tI=0;function nt(){}
_=nt.prototype=new pt();_.tN=AF+'FilterOutputStream';_.tI=0;function rt(){}
_=rt.prototype=new nt();_.tN=AF+'PrintStream';_.tI=0;function tt(){}
_=tt.prototype=new dv();_.tN=BF+'ArrayStoreException';_.tI=54;function xt(){xt=lC;yt=wt(new vt(),false);zt=wt(new vt(),true);}
function wt(a,b){xt();a.a=b;return a;}
function At(a){return ee(a,29)&&de(a,29).a==this.a;}
function Bt(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function Ct(){return this.a?'true':'false';}
function Dt(a){xt();return a?zt:yt;}
function vt(){}
_=vt.prototype=new Eu();_.eQ=At;_.hC=Bt;_.tS=Ct;_.tN=BF+'Boolean';_.tI=55;_.a=false;var yt,zt;function Ft(){}
_=Ft.prototype=new dv();_.tN=BF+'ClassCastException';_.tI=56;function hu(b,a){ev(b,a);return b;}
function gu(){}
_=gu.prototype=new dv();_.tN=BF+'IllegalArgumentException';_.tI=57;function ku(b,a){ev(b,a);return b;}
function ju(){}
_=ju.prototype=new dv();_.tN=BF+'IllegalStateException';_.tI=58;function nu(b,a){ev(b,a);return b;}
function mu(){}
_=mu.prototype=new dv();_.tN=BF+'IndexOutOfBoundsException';_.tI=59;function Bu(){Bu=lC;{Du();}}
function Du(){Bu();Cu=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var Cu=null;function qu(){qu=lC;Bu();}
function ru(a){qu();return gw(a);}
function uu(a,b){return a<b?a:b;}
function vu(){}
_=vu.prototype=new dv();_.tN=BF+'NegativeArraySizeException';_.tI=60;function yu(b,a){ev(b,a);return b;}
function xu(){}
_=xu.prototype=new dv();_.tN=BF+'NullPointerException';_.tI=61;function sv(b,a){return b.charCodeAt(a);}
function uv(b,a){if(!ee(a,1))return false;return aw(b,a);}
function vv(b,a){return b.indexOf(a);}
function wv(c,b,a){return c.indexOf(b,a);}
function xv(a){return a.length;}
function yv(c,a,b){b=bw(b);return c.replace(RegExp(a,'g'),b);}
function zv(b,a){return Av(b,a,0);}
function Av(j,i,g){var a=new RegExp(i,'g');var h=[];var b=0;var k=j;var e=null;while(true){var f=a.exec(k);if(f==null||(k==''||b==g-1&&g>0)){h[b]=k;break;}else{h[b]=k.substring(0,f.index);k=k.substring(f.index+f[0].length,k.length);a.lastIndex=0;if(e==k){h[b]=k.substring(0,1);k=k.substring(1);}e=k;b++;}}if(g==0){for(var c=h.length-1;c>=0;c--){if(h[c]!=''){h.splice(c+1,h.length-(c+1));break;}}}var d=Fv(h.length);var c=0;for(c=0;c<h.length;++c){d[c]=h[c];}return d;}
function Bv(b,a){return vv(b,a)==0;}
function Cv(b,a){return b.substr(a,b.length-a);}
function Dv(c,a,b){return c.substr(a,b-a);}
function Ev(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function Fv(a){return Ed('[Ljava.lang.String;',[0],[1],[a],null);}
function aw(a,b){return String(a)==b;}
function bw(b){var a;a=0;while(0<=(a=wv(b,'\\',a))){if(sv(b,a+1)==36){b=Dv(b,0,a)+'$'+Cv(b,++a);}else{b=Dv(b,0,a)+Cv(b,++a);}}return b;}
function cw(a){return uv(this,a);}
function ew(){var a=dw;if(!a){a=dw={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function fw(){return this;}
function gw(a){return ''+a;}
function hw(a){return a!==null?a.tS():'null';}
_=String.prototype;_.eQ=cw;_.hC=ew;_.tS=fw;_.tN=BF+'String';_.tI=2;var dw=null;function iv(a){mv(a);return a;}
function jv(b,a){nv(b,a);return b;}
function kv(a,b){return lv(a,hw(b));}
function lv(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function mv(a){nv(a,'');}
function nv(b,a){b.js=[a];b.length=a.length;}
function pv(a){a.fb();return a.js[0];}
function qv(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function rv(){return pv(this);}
function hv(){}
_=hv.prototype=new Eu();_.fb=qv;_.tS=rv;_.tN=BF+'StringBuffer';_.tI=0;function jw(){jw=lC;kw=new rt();}
function lw(a){jw();return C(a);}
var kw;function uw(b,a){ev(b,a);return b;}
function tw(){}
_=tw.prototype=new dv();_.tN=BF+'UnsupportedOperationException';_.tI=62;function Ew(b,a){b.c=a;return b;}
function ax(a){return a.a<a.c.yb();}
function bx(){return ax(this);}
function cx(){if(!ax(this)){throw new AB();}return this.c.D(this.b=this.a++);}
function dx(){if(this.b<0){throw new ju();}this.c.rb(this.b);this.a=this.b;this.b=(-1);}
function Dw(){}
_=Dw.prototype=new Eu();_.F=bx;_.eb=cx;_.qb=dx;_.tN=CF+'AbstractList$IteratorImpl';_.tI=0;_.a=0;_.b=(-1);function my(f,d,e){var a,b,c;for(b=lA(f.r());dA(b);){a=eA(b);c=a.A();if(d===null?c===null:d.eQ(c)){if(e){fA(b);}return a;}}return null;}
function ny(b){var a;a=b.r();return ox(new nx(),b,a);}
function oy(b){var a;a=wA(b);return Dx(new Cx(),b,a);}
function py(a){return my(this,a,false)!==null;}
function qy(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ee(d,31)){return false;}f=de(d,31);c=ny(this);e=f.db();if(!xy(c,e)){return false;}for(a=qx(c);xx(a);){b=yx(a);h=this.E(b);g=f.E(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function ry(b){var a;a=my(this,b,false);return a===null?null:a.C();}
function sy(){var a,b,c;b=0;for(c=lA(this.r());dA(c);){a=eA(c);b+=a.hC();}return b;}
function ty(){return ny(this);}
function uy(){var a,b,c,d;d='{';a=false;for(c=lA(this.r());dA(c);){b=eA(c);if(a){d+=', ';}else{a=true;}d+=hw(b.A());d+='=';d+=hw(b.C());}return d+'}';}
function mx(){}
_=mx.prototype=new Eu();_.n=py;_.eQ=qy;_.E=ry;_.hC=sy;_.db=ty;_.tS=uy;_.tN=CF+'AbstractMap';_.tI=63;function xy(e,b){var a,c,d;if(b===e){return true;}if(!ee(b,32)){return false;}c=de(b,32);if(c.yb()!=e.yb()){return false;}for(a=c.cb();a.F();){d=a.eb();if(!e.o(d)){return false;}}return true;}
function yy(a){return xy(this,a);}
function zy(){var a,b,c;a=0;for(b=this.cb();b.F();){c=b.eb();if(c!==null){a+=c.hC();}}return a;}
function vy(){}
_=vy.prototype=new ww();_.eQ=yy;_.hC=zy;_.tN=CF+'AbstractSet';_.tI=64;function ox(b,a,c){b.a=a;b.b=c;return b;}
function qx(b){var a;a=lA(b.b);return vx(new ux(),b,a);}
function rx(a){return this.a.n(a);}
function sx(){return qx(this);}
function tx(){return this.b.a.c;}
function nx(){}
_=nx.prototype=new vy();_.o=rx;_.cb=sx;_.yb=tx;_.tN=CF+'AbstractMap$1';_.tI=65;function vx(b,a,c){b.a=c;return b;}
function xx(a){return a.a.F();}
function yx(b){var a;a=b.a.eb();return a.A();}
function zx(){return xx(this);}
function Ax(){return yx(this);}
function Bx(){this.a.qb();}
function ux(){}
_=ux.prototype=new Eu();_.F=zx;_.eb=Ax;_.qb=Bx;_.tN=CF+'AbstractMap$2';_.tI=0;function Dx(b,a,c){b.a=a;b.b=c;return b;}
function Fx(b){var a;a=lA(b.b);return ey(new dy(),b,a);}
function ay(a){return vA(this.a,a);}
function by(){return Fx(this);}
function cy(){return this.b.a.c;}
function Cx(){}
_=Cx.prototype=new ww();_.o=ay;_.cb=by;_.yb=cy;_.tN=CF+'AbstractMap$3';_.tI=0;function ey(b,a,c){b.a=c;return b;}
function gy(a){return a.a.F();}
function hy(a){var b;b=a.a.eb().C();return b;}
function iy(){return gy(this);}
function jy(){return hy(this);}
function ky(){this.a.qb();}
function dy(){}
_=dy.prototype=new Eu();_.F=iy;_.eb=jy;_.qb=ky;_.tN=CF+'AbstractMap$4';_.tI=0;function tA(){tA=lC;BA=bB();}
function pA(a){{sA(a);}}
function qA(a){tA();pA(a);return a;}
function rA(a,b){tA();pA(a);yA(a,b);return a;}
function sA(a){a.a=gb();a.d=ib();a.b=ie(BA,cb);a.c=0;}
function uA(b,a){if(ee(a,1)){return fB(b.d,de(a,1))!==BA;}else if(a===null){return b.b!==BA;}else{return eB(b.a,a,a.hC())!==BA;}}
function vA(a,b){if(a.b!==BA&&dB(a.b,b)){return true;}else if(aB(a.d,b)){return true;}else if(EA(a.a,b)){return true;}return false;}
function wA(a){return jA(new Fz(),a);}
function xA(c,a){var b;if(ee(a,1)){b=fB(c.d,de(a,1));}else if(a===null){b=c.b;}else{b=eB(c.a,a,a.hC());}return b===BA?null:b;}
function zA(c,a,d){var b;if(ee(a,1)){b=iB(c.d,de(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=hB(c.a,a,d,a.hC());}if(b===BA){++c.c;return null;}else{return b;}}
function yA(d,c){var a,b;b=lA(wA(c));while(dA(b)){a=eA(b);zA(d,a.A(),a.C());}}
function AA(c,a){var b;if(ee(a,1)){b=kB(c.d,de(a,1));}else if(a===null){b=c.b;c.b=ie(BA,cb);}else{b=jB(c.a,a,a.hC());}if(b===BA){return null;}else{--c.c;return b;}}
function CA(e,c){tA();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.m(a[f]);}}}}
function DA(d,a){tA();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=yz(c.substring(1),e);a.m(b);}}}
function EA(f,h){tA();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.C();if(dB(h,d)){return true;}}}}return false;}
function FA(a){return uA(this,a);}
function aB(c,d){tA();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(dB(d,a)){return true;}}}return false;}
function bB(){tA();}
function cB(){return wA(this);}
function dB(a,b){tA();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function gB(a){return xA(this,a);}
function eB(f,h,e){tA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(dB(h,d)){return c.C();}}}}
function fB(b,a){tA();return b[':'+a];}
function hB(f,h,j,e){tA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(dB(h,d)){var i=c.C();c.xb(j);return i;}}}else{a=f[e]=[];}var c=yz(h,j);a.push(c);}
function iB(c,a,d){tA();a=':'+a;var b=c[a];c[a]=d;return b;}
function jB(f,h,e){tA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(dB(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.C();}}}}
function kB(c,a){tA();a=':'+a;var b=c[a];delete c[a];return b;}
function uz(){}
_=uz.prototype=new mx();_.n=FA;_.r=cB;_.E=gB;_.tN=CF+'HashMap';_.tI=66;_.a=null;_.b=null;_.c=0;_.d=null;var BA;function wz(b,a,c){b.a=a;b.b=c;return b;}
function yz(a,b){return wz(new vz(),a,b);}
function zz(b){var a;if(ee(b,33)){a=de(b,33);if(dB(this.a,a.A())&&dB(this.b,a.C())){return true;}}return false;}
function Az(){return this.a;}
function Bz(){return this.b;}
function Cz(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function Dz(a){var b;b=this.b;this.b=a;return b;}
function Ez(){return this.a+'='+this.b;}
function vz(){}
_=vz.prototype=new Eu();_.eQ=zz;_.A=Az;_.C=Bz;_.hC=Cz;_.xb=Dz;_.tS=Ez;_.tN=CF+'HashMap$EntryImpl';_.tI=67;_.a=null;_.b=null;function jA(b,a){b.a=a;return b;}
function lA(a){return bA(new aA(),a.a);}
function mA(c){var a,b,d;if(ee(c,33)){a=de(c,33);b=a.A();if(uA(this.a,b)){d=xA(this.a,b);return dB(a.C(),d);}}return false;}
function nA(){return lA(this);}
function oA(){return this.a.c;}
function Fz(){}
_=Fz.prototype=new vy();_.o=mA;_.cb=nA;_.yb=oA;_.tN=CF+'HashMap$EntrySet';_.tI=68;function bA(c,b){var a;c.c=b;a=Cy(new Ay());if(c.c.b!==(tA(),BA)){Ey(a,wz(new vz(),null,c.c.b));}DA(c.c.d,a);CA(c.c.a,a);c.a=a.cb();return c;}
function dA(a){return a.a.F();}
function eA(a){return a.b=de(a.a.eb(),33);}
function fA(a){if(a.b===null){throw ku(new ju(),'Must call next() before remove().');}else{a.a.qb();AA(a.c,a.b.A());a.b=null;}}
function gA(){return dA(this);}
function hA(){return eA(this);}
function iA(){fA(this);}
function aA(){}
_=aA.prototype=new Eu();_.F=gA;_.eb=hA;_.qb=iA;_.tN=CF+'HashMap$EntrySetIterator';_.tI=0;_.a=null;_.b=null;function mB(a){a.a=qA(new uz());return a;}
function oB(a){var b;b=zA(this.a,a,Dt(true));return b===null;}
function pB(a){return uA(this.a,a);}
function qB(){return qx(ny(this.a));}
function rB(){return this.a.c;}
function sB(){return ny(this.a).tS();}
function lB(){}
_=lB.prototype=new vy();_.m=oB;_.o=pB;_.cb=qB;_.yb=rB;_.tS=sB;_.tN=CF+'HashSet';_.tI=69;_.a=null;function yB(d,c,a,b){ev(d,c);return d;}
function xB(){}
_=xB.prototype=new dv();_.tN=CF+'MissingResourceException';_.tI=70;function AB(){}
_=AB.prototype=new dv();_.tN=CF+'NoSuchElementException';_.tI=71;function FB(a){a.a=Cy(new Ay());return a;}
function aC(b,a){return Ey(b.a,a);}
function cC(b,a){return dC(b,a);}
function dC(b,a){return cz(b.a,a);}
function eC(a,b){Dy(this.a,a,b);}
function fC(a){return aC(this,a);}
function gC(a){return bz(this.a,a);}
function hC(a){return dC(this,a);}
function iC(){return this.a.cb();}
function jC(a){return fz(this.a,a);}
function kC(){return this.a.b;}
function EB(){}
_=EB.prototype=new Cw();_.l=eC;_.m=fC;_.o=gC;_.D=hC;_.cb=iC;_.rb=jC;_.yb=kC;_.tN=CF+'Vector';_.tI=72;_.a=null;function dD(g,h){var a,c,d,e,f;h=yv(h,'&amp;','&');c=oD(new mD(),h);try{e=nF(c);f=BC(new AC(),g,e,c);qg(f,1);}catch(a){a=le(a);if(ee(a,35)){d=a;qw(d);}else throw a;}}
function eD(g,h){var a,c,d,e,f;h=yv(h,'&amp;','&');c=xD(new vD(),h);try{e=nF(c);f=FC(new EC(),g,e,c);qg(f,1);}catch(a){a=le(a);if(ee(a,35)){d=a;Cg('Exception: '+d.b);qw(d);}else throw a;}}
function fD(r){var a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s;k='DEFAULT-identities-and-usecases.xml';l='DEFAULT-policy.xml';f='DEFAULT-cancel.html';m='DEFAULT-save-policy.xml';try{h=td('getURLs');k=qd(h,'identities-url');l=qd(h,'policy-url');f=qd(h,'cancel-url');m=qd(h,'save-url');}catch(a){a=le(a);if(ee(a,34)){i=a;Cg('Exception: '+i.b);}else throw a;}dD(r,k);eD(r,l);s=Fn(new Dn());wi(an('access-policy-editor-hook'),s);p=Fn(new Dn());ao(s,p);q=rn(new kn());tn(q,30);ao(p,q);o=bj(new Ai(),'Save User or Group',oC(new nC(),r,q));ao(p,o);j=kl(new il());ol(j,(dl(),el));ao(s,j);d=kl(new il());ao(s,d);n=yv(m,'&amp;','&');r.e=bj(new Ai(),'Save Policy',sC(new rC(),r,n));yn(r.e,'gwt-wyona-SaveButton');ll(d,r.e);g=f;e=bj(new Ai(),'Cancel',wC(new vC(),r,g));yn(r.e,'gwt-wyona-CancelButton');ll(d,e);r.a=iE(new gE(),r.g);r.c=oE(new mE(),r.g,r.d,r.b,r.f);c=iD(new gD(),r.a.a,r.c.c,r.c);yn(c,'gwt-wyona-AddRemoveWidget');ll(j,r.a);ll(j,c);ll(j,r.c);}
function mC(){}
_=mC.prototype=new Eu();_.tN=DF+'AccessPolicyEditor';_.tI=0;_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;_.f=true;_.g=10;function oC(b,a,c){b.a=a;b.b=c;return b;}
function qC(d){var a,b,c;b=fm(this.a.a.a);for(a=0;a<b;a++){c=gm(this.a.a.a,a);if(vv(c,on(this.b))>=0)Cg('Result: '+c);}}
function nC(){}
_=nC.prototype=new Eu();_.ib=qC;_.tN=DF+'AccessPolicyEditor$1';_.tI=73;function sC(b,a,c){b.a=a;b.b=c;return b;}
function uC(f){var a,c,d,e;c=ED(new DD(),this.b);try{e=aE(c,zE(this.a.c),sE(this.a.c),yE(this.a.c));}catch(a){a=le(a);if(ee(a,35)){d=a;Cg('Exception: '+d.b);}else throw a;}}
function rC(){}
_=rC.prototype=new Eu();_.ib=uC;_.tN=DF+'AccessPolicyEditor$2';_.tI=74;function wC(b,a,c){b.a=c;return b;}
function yC(a,b){$wnd.location.href=b;}
function zC(a){yC(this,this.a);}
function vC(){}
_=vC.prototype=new Eu();_.ib=zC;_.tN=DF+'AccessPolicyEditor$3';_.tI=75;function CC(){CC=lC;ng();}
function BC(b,a,d,c){CC();b.a=a;b.c=d;b.b=c;lg(b);return b;}
function DC(){if(xc(this.c)){pg(this,10);}else{kE(this.a.a,this.a.g,tD(this.b),rD(this.b));FE(this.a.c,sD(this.b));mg(this);}}
function AC(){}
_=AC.prototype=new gg();_.ub=DC;_.tN=DF+'AccessPolicyEditor$4';_.tI=76;function aD(){aD=lC;ng();}
function FC(b,a,d,c){aD();b.a=a;b.c=d;b.b=c;lg(b);return b;}
function bD(){if(xc(this.c)){pg(this,10);}else{this.a.d=BD(this.b);this.a.b=AD(this.b);BE(this.a.c,this.a.g,this.a.d,this.a.b);this.a.f=this.b.b;CE(this.a.c,this.a.f);mg(this);}}
function EC(){}
_=EC.prototype=new gg();_.ub=bD;_.tN=DF+'AccessPolicyEditor$5';_.tI=77;function hD(a){a.b=lk(new kk());}
function iD(d,a,c,b){hD(d);fk(d,d.b);d.f=bj(new Ai(),'<',d);mk(d.b,d.f);d.a=bj(new Ai(),'>',d);mk(d.b,d.a);d.c=a;d.d=c;d.e=b;return d;}
function kD(b,a){if(vv(a,'(')>0){return Dv(a,0,vv(a,'('));}else{return a;}}
function lD(c){var a,b;if(c===this.a){a=hm(this.c);if(a>=0){b=im(this.c,a);lm(this.c,a);pE(this.e,Dv(b,0,1),Ev(Cv(b,2)));}else{Cg('No identity selected yet! Please select an identity.');}}else if(c===this.f){a=hm(this.d);if(a>=0){b=im(this.d,a);lm(this.d,a);am(this.c,kD(this,b));}else{Cg('No identity selected yet! Please select an identity.');}}}
function gD(){}
_=gD.prototype=new dk();_.ib=lD;_.tN=DF+'AddRemoveIdentitiesWidget';_.tI=78;_.a=null;_.c=null;_.d=null;_.e=null;_.f=null;function jF(a){a.d=qA(new uz());}
function kF(a,b){jF(a);a.e=Db(new yb(),(Fb(),dc),b);oF(a);return a;}
function lF(e){var a,b,c,d;b='';a=rA(new uz(),e.d);for(d=lA(wA(a));dA(d);){c=eA(d);b+=c.A()+''+c.C();if(dA(d)){b+='&';}}return b;}
function nF(a){return ac(a.e,lF(a),a);}
function oF(a){bc(a.e,'Content-Type','application/x-www-form-urlencoded');}
function pF(b,a){Cg('Exception: '+a.b);}
function iF(){}
_=iF.prototype=new Eu();_.kb=pF;_.tN=EF+'AsynchronousAgent';_.tI=0;_.e=null;function nD(a){a.c=FB(new EB());a.a=FB(new EB());a.b=FB(new EB());}
function oD(a,b){kF(a,b);nD(a);return a;}
function qD(d,c,a){var b;b=c.y(a);return de(b.bb(0),26);}
function rD(c){var a,b;a=Ed('[Ljava.lang.String;',[0],[1],[c.a.a.b],null);for(b=0;b<c.a.a.b;b++){a[b]=de(cC(c.a,b),1);}return a;}
function sD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[c.b.a.b],null);for(a=0;a<c.b.a.b;a++){b[a]=de(cC(c.b,a),36);}return b;}
function tD(b){var a,c;c=Ed('[Ljava.lang.String;',[0],[1],[b.c.a.b],null);for(a=0;a<b.c.a.b;a++){c[a]=de(cC(b.c,a),1);}return c;}
function uD(e,f){var a,b,c,d,g,h,i,j,k;i=cq(tb(f)).v();k=qD(this,i,'users');j=k.y('user');for(c=0;c<j.B();c++){aC(this.c,de(j.bb(c),26).u('id'));}b=qD(this,i,'groups');a=b.y('group');for(c=0;c<a.B();c++){aC(this.a,de(a.bb(c),26).u('id'));}h=qD(this,i,'rights');g=h.y('right');for(c=0;c<g.B();c++){d=zr(de(g.bb(c),26).z());aC(this.b,cF(new bF(),de(g.bb(c),26).u('id'),d));}}
function mD(){}
_=mD.prototype=new iF();_.mb=uD;_.tN=DF+'AsynchronousIdentitiesAndRightsGetter';_.tI=0;function wD(a){a.c=FB(new EB());a.a=FB(new EB());}
function xD(a,b){kF(a,b);wD(a);return a;}
function zD(d,c,a){var b;b=c.y(a);if(b.B()>0){return de(b.bb(0),26);}else{return null;}}
function AD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[38],[c.a.a.b],null);for(a=0;a<b.a;a++){b[a]=de(cC(c.a,a),38);}return b;}
function BD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[37],[c.c.a.b],null);for(a=0;a<b.a;a++){b[a]=de(cC(c.c,a),37);}return b;}
function CD(e,f){var a,b,c,d,g,h,i,j,k,l,m,n;j=cq(tb(f)).v();k=j.u('use-inherited-policies');if(k===null){this.b=true;}else{if(uv(k,'false')){this.b=false;}else{this.b=true;}}n=zD(this,j,'world');m=j.y('user');for(c=0;c<m.B();c++){l=de(m.bb(c),26);h=l.y('right');i=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[h.B()],null);for(d=0;d<i.a;d++){g=de(h.bb(d),26);i[d]=dF(new bF(),g.u('id'),true);}aC(this.c,gF(new fF(),l.u('id'),i));}b=j.y('group');for(c=0;c<b.B();c++){a=de(b.bb(c),26);h=a.y('right');i=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[h.B()],null);for(d=0;d<i.a;d++){g=de(h.bb(d),26);i[d]=dF(new bF(),g.u('id'),true);}aC(this.a,eE(new dE(),a.u('id'),i));}}
function vD(){}
_=vD.prototype=new iF();_.mb=CD;_.tN=DF+'AsynchronousPolicyGetter';_.tI=0;_.b=true;function ED(a,b){a.a=Db(new yb(),(Fb(),ec),b);return a;}
function aE(f,h,b,g){var a,c,d,e;a=jv(new hv(),'<?xml version="1.0"?>');lv(a,'<policy xmlns="http://www.wyona.org/security/1.0" use-inherited-policies="'+g+'">');if(h!==null){for(c=0;c<h.a;c++){lv(a,'<user id="'+h[c].a+'">');e=h[c].b;if(e!==null){for(d=0;d<e.a;d++){lv(a,'<right id="'+e[d].a+'" permission="'+e[d].c+'">'+e[d].a+'<\/right>');}}else{lv(a,'<right id="r" permission="false">r<\/right>');lv(a,'<right id="w" permission="false">w<\/right>');}lv(a,'<\/user>');}}if(b!==null){for(c=0;c<b.a;c++){lv(a,'<group id="'+b[c].a+'">');e=b[c].b;if(e!==null){for(d=0;d<e.a;d++){lv(a,'<right id="'+e[d].a+'" permission="'+e[d].c+'">'+e[d].a+'<\/right>');}}else{lv(a,'<right id="r" permission="false">r<\/right>');lv(a,'<right id="w" permission="false">w<\/right>');}lv(a,'<\/group>');}}lv(a,'<\/policy>');return ac(f.a,pv(a),f);}
function bE(b,a){Cg('Exception: '+a.b);}
function cE(a,b){if(sb(b)==200){Cg('Policy has been saved successfully!');}else{Cg('Policy has NOT been saved! Please check log files on server.');}}
function DD(){}
_=DD.prototype=new Eu();_.kb=bE;_.mb=cE;_.tN=DF+'AsynchronousPolicySetter';_.tI=0;_.a=null;function eE(c,a,b){c.a=a;c.b=b;return c;}
function dE(){}
_=dE.prototype=new Eu();_.tN=DF+'Group';_.tI=79;_.a=null;_.b=null;function hE(a){a.b=Fn(new Dn());}
function iE(a,b){hE(a);fk(a,a.b);ao(a.b,tl(new rl(),'Identities'));a.a=Fl(new xl(),true);a.a.k(a);kE(a,b,null,null);ao(a.b,a.a);return a;}
function kE(c,e,d,a){var b;dm(c.a);nm(c.a,e);if(d!==null){for(b=0;b<d.a;b++){am(c.a,'u: '+d[b]);}}else{am(c.a,'No users yet!');}if(a!==null){for(b=0;b<a.a;b++){am(c.a,'g: '+a[b]);}}else{am(c.a,'No groups yet!');}}
function lE(a){}
function gE(){}
_=gE.prototype=new dk();_.ib=lE;_.tN=DF+'IdentitiesListBoxWidget';_.tI=80;_.a=null;function nE(a){a.e=Fn(new Dn());}
function oE(b,e,d,a,c){nE(b);fk(b,b.e);ao(b.e,tl(new rl(),'Policy'));b.d=mj(new jj(),'Inherit rights from parent policies');CE(b,c);ao(b.e,b.d);b.c=Fl(new xl(),true);b.c.k(b);BE(b,e,d,a);ao(b.e,b.c);FE(b,null);return b;}
function pE(d,e,c){var a,b;a=jv(new hv(),'(-');for(b=1;b<d.b.a;b++){lv(a,',-');}lv(a,')');bm(d.c,e+': '+a+' '+c,e+': '+c);}
function qE(e,a,d){var b,c;c=Ed('[Ljava.lang.String;',[0],[1],[e.a.a],null);for(b=0;b<c.a;b++){if(uv(e.a[b].a,d.a)){c[b]=d.a;}else{if(a[b].c){c[b]=a[b].a;}else{c[b]='-';}}}return c;}
function sE(g){var a,b,c,d,e,f;b=FB(new EB());for(c=0;c<fm(g.c);c++){e=gm(g.c,c);f=wE(g,e);d=tE(g,c);if(Bv(d,'g:')){aC(b,eE(new dE(),Ev(Cv(d,2)),f));}}a=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[38],[b.a.b],null);for(c=0;c<a.a;c++){a[c]=de(cC(b,c),38);}return a;}
function tE(b,a){return im(b.c,a);}
function uE(e,f,b,c){var a,d;d=jv(new hv(),f+':');lv(d,'('+c[0]);for(a=1;a<c.a;a++){lv(d,','+c[a]);}lv(d,')');lv(d,' '+b);return pv(d);}
function vE(g,h,b,e){var a,c,d,f;f=jv(new hv(),h+':');if(g.a!==null){lv(f,'(');for(a=0;a<g.a.a;a++){d=false;for(c=0;c<e.a;c++){if(uv(g.a[a].a,e[c].a)&&e[c].c){d=true;break;}}if(a>0){lv(f,',');}if(d){lv(f,g.a[a].a);}else{lv(f,'-');}}lv(f,')');}else{Cg('Available rights not loaded yet!');}lv(f,' '+b);return pv(f);}
function wE(e,b){var a,c,d;if(vv(b,'(')>0){d=zv(Dv(b,vv(b,'(')+1,vv(b,')')),',');if(d.a!=e.a.a){Cg('Exception: Validation of rights length failed!');return null;}c=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[e.a.a],null);for(a=0;a<d.a;a++){if(uv(d[a],'-')){c[a]=dF(new bF(),e.a[a].a,false);}else{c[a]=dF(new bF(),d[a],true);}}return c;}else{return Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[0],null);}}
function xE(b){var a;a=hm(b.c);if(a>=0){return gm(b.c,a);}return null;}
function yE(a){return oj(a.d);}
function zE(e){var a,b,c,d,f,g;g=FB(new EB());for(a=0;a<fm(e.c);a++){c=gm(e.c,a);d=wE(e,c);b=tE(e,a);if(Bv(b,'u:')){aC(g,gF(new fF(),Ev(Cv(b,2)),d));}}f=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[37],[g.a.b],null);for(a=0;a<f.a;a++){f[a]=de(cC(g,a),37);}return f;}
function AE(e,a,d){var b,c;c=Ed('[Ljava.lang.String;',[0],[1],[e.a.a],null);for(b=0;b<c.a;b++){if(uv(e.a[b].a,d.a)){c[b]='-';}else{if(a[b].c){c[b]=a[b].a;}else{c[b]='-';}}}return c;}
function FE(c,a){var b;c.a=a;if(a!==null){c.b=Ed('[Lcom.google.gwt.user.client.ui.CheckBox;',[0],[12],[a.a],null);for(b=0;b<c.b.a;b++){c.b[b]=mj(new jj(),a[b].b);qj(c.b[b],a[b].a);c.b[b].k(c);ao(c.e,c.b[b]);}}else{}}
function BE(e,i,g,a){var b,c,d,f,h;dm(e.c);nm(e.c,i);if(g!==null||a!==null){if(g!==null){for(b=0;b<g.a;b++){f='u';c=g[b].a;d=g[b].b;h=f+': '+c;bm(e.c,vE(e,f,c,d),h);}}if(a!==null){for(b=0;b<a.a;b++){f='g';c=a[b].a;d=a[b].b;h=f+': '+c;bm(e.c,vE(e,f,c,d),h);}}else{Cg('No groups!');}}else{am(e.c,'No identities yet!');}}
function CE(a,b){if(a.d!==null){pj(a.d,b);}}
function DE(d,e,a,c,b){mm(d.c,b,uE(d,e,a,c));}
function EE(d,c){var a,b;b=hm(d.c);if(b>=0){a=tE(d,b);DE(d,Dv(a,0,1),Ev(Cv(a,2)),c,b);}else{Cg('Exception: No list item selected!');}}
function aF(i){var a,b,c,d,e,f,g,h;h=null;g=null;for(b=0;b<this.b.a;b++){if(i===this.b[b]){h=this.b[b];g=this.a[b];break;}}if(h!==null){f=xE(this);if(f!==null){a=wE(this,f);if(oj(h)){d=qE(this,a,g);}else{d=AE(this,a,g);}EE(this,d);}else{Cg('No identity has been selected! Please select an identity in order to assign rights.');pj(h,false);}}else if(i===this.c){f=xE(this);e=wE(this,f);for(c=0;c<this.b.a;c++){if(e[c].c){pj(this.b[c],true);}else{pj(this.b[c],false);}}}}
function mE(){}
_=mE.prototype=new dk();_.ib=aF;_.tN=DF+'PolicyListBoxWidget';_.tI=81;_.a=null;_.b=null;_.c=null;_.d=null;function dF(c,a,b){c.a=a;c.c=b;return c;}
function cF(c,a,b){c.a=a;c.b=b;c.c=false;return c;}
function bF(){}
_=bF.prototype=new Eu();_.tN=DF+'Right';_.tI=82;_.a=null;_.b=null;_.c=false;function gF(c,a,b){c.a=a;c.b=b;return c;}
function fF(){}
_=fF.prototype=new Eu();_.tN=DF+'User';_.tI=83;_.a=null;_.b=null;function mt(){fD(new mC());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{mt();}catch(a){b(d);}else{mt();}}
var he=[{},{},{1:1},{4:1},{4:1,35:1},{4:1,35:1},{4:1,28:1,35:1},{2:1},{6:1},{6:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{3:1},{2:1,5:1},{2:1},{7:1},{11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{11:1,13:1,14:1,15:1,17:1,18:1,19:1,20:1,21:1},{11:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1},{11:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1},{10:1,11:1,13:1,14:1,15:1},{11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1,24:1},{30:1},{30:1},{30:1},{11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{11:1,13:1,14:1,15:1,18:1,23:1},{11:1,13:1,14:1,15:1,17:1,18:1,19:1,20:1,21:1,24:1},{9:1,10:1,11:1,13:1,14:1,15:1},{7:1},{11:1,13:1,14:1,15:1,17:1,18:1,19:1,20:1,21:1,23:1,24:1},{11:1,13:1,14:1,15:1,17:1,18:1,19:1,20:1,21:1,23:1,24:1},{10:1,11:1,13:1,14:1,15:1},{4:1,35:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{4:1,35:1},{25:1},{25:1,27:1},{25:1,26:1},{25:1},{25:1},{25:1},{4:1,35:1},{29:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{31:1},{32:1},{32:1},{31:1},{33:1},{32:1},{32:1},{4:1,34:1,35:1},{4:1,35:1},{30:1},{8:1},{8:1},{8:1},{6:1},{6:1},{8:1,11:1,13:1,14:1,15:1},{38:1},{8:1,11:1,13:1,14:1,15:1},{8:1,11:1,13:1,14:1,15:1},{36:1},{37:1}];if (org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor) {  var __gwt_initHandlers = org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.__gwt_initHandlers;  org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.onScriptLoad(gwtOnLoad);}})();