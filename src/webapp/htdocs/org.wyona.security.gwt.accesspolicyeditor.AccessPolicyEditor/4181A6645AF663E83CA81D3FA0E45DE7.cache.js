(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,FE='com.google.gwt.core.client.',aF='com.google.gwt.http.client.',bF='com.google.gwt.i18n.client.',cF='com.google.gwt.lang.',dF='com.google.gwt.user.client.',eF='com.google.gwt.user.client.impl.',fF='com.google.gwt.user.client.ui.',gF='com.google.gwt.user.client.ui.impl.',hF='com.google.gwt.xml.client.',iF='com.google.gwt.xml.client.impl.',jF='java.io.',kF='java.lang.',lF='java.util.',mF='org.wyona.security.gwt.accesspolicyeditor.client.',nF='org.wyona.yanel.gwt.client.';function FB(){}
function yu(a){return this===a;}
function zu(){return Fv(this);}
function Au(){return this.tN+'@'+this.hC();}
function wu(){}
_=wu.prototype={};_.eQ=yu;_.hC=zu;_.tS=Au;_.toString=function(){return this.tS();};_.tN=kF+'Object';_.tI=1;function w(a){return a==null?null:a.tN;}
var y=null;function B(a){return a==null?0:a.$H?a.$H:(a.$H=D());}
function C(a){return a==null?0:a.$H?a.$H:(a.$H=D());}
function D(){return ++E;}
var E=0;function bw(b,a){b.b=a;return b;}
function dw(b,a){if(b.a!==null){throw cu(new bu(),"Can't overwrite cause");}if(a===b){throw Ft(new Et(),'Self-causation not permitted');}b.a=a;return b;}
function ew(a){fw(a,(Dv(),Ev));}
function fw(e,d){var a,b,c;c=av(new Fu());b=e;while(b!==null){a=b.b;if(b!==e){dv(c,'Caused by: ');}dv(c,b.tN);dv(c,': ');dv(c,a===null?'(No exception detail)':a);dv(c,'\n');b=b.a;}}
function gw(){var a,b;a=w(this);b=this.b;if(b!==null){return a+': '+b;}else{return a;}}
function aw(){}
_=aw.prototype=new wu();_.tS=gw;_.tN=kF+'Throwable';_.tI=3;_.a=null;_.b=null;function Ct(b,a){bw(b,a);return b;}
function Bt(){}
_=Bt.prototype=new aw();_.tN=kF+'Exception';_.tI=4;function Cu(b,a){Ct(b,a);return b;}
function Bu(){}
_=Bu.prototype=new Bt();_.tN=kF+'RuntimeException';_.tI=5;function ab(c,b,a){Cu(c,'JavaScript '+b+' exception: '+a);return c;}
function F(){}
_=F.prototype=new Bu();_.tN=FE+'JavaScriptException';_.tI=6;function eb(b,a){if(!ee(a,2)){return false;}return jb(b,de(a,2));}
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
_=cb.prototype=new wu();_.eQ=kb;_.hC=lb;_.tS=nb;_.tN=FE+'JavaScriptObject';_.tI=7;function rc(b,d,c,a){if(d===null){throw new pu();}if(a===null){throw new pu();}if(c<0){throw new Et();}b.a=c;b.c=d;if(c>0){b.b=vb(new ub(),b,a);pg(b.b,c);}else{b.b=null;}return b;}
function tc(a){var b;if(a.c!==null){b=a.c;a.c=null;dd(b);sc(a);}}
function sc(a){if(a.b!==null){lg(a.b);}}
function vc(e,a){var b,c,d,f;if(e.c===null){return;}sc(e);f=e.c;e.c=null;b=ed(f);if(b!==null){c=Cu(new Bu(),b);a.kb(e,c);}else{d=yc(f);a.mb(e,d);}}
function wc(b,a){if(b.c===null){return;}tc(b);a.kb(b,oc(new nc(),b,b.a));}
function xc(b){var a;if(b.c===null){return false;}a=fd(b.c);switch(a){case 1:case 2:case 3:return true;}return false;}
function yc(b){var a;a=qb(new pb(),b);return a;}
function zc(a){var b;b=y;{vc(this,a);}}
function ob(){}
_=ob.prototype=new wu();_.t=zc;_.tN=aF+'Request';_.tI=0;_.a=0;_.b=null;_.c=null;function Ac(){}
_=Ac.prototype=new wu();_.tN=aF+'Response';_.tI=0;function qb(a,b){a.a=b;return a;}
function sb(a){return hd(a.a);}
function tb(a){return gd(a.a);}
function pb(){}
_=pb.prototype=new Ac();_.tN=aF+'Request$1';_.tI=0;function mg(){mg=FB;wg=qy(new oy());{vg();}}
function kg(a){mg();return a;}
function lg(a){if(a.d){qg(a.e);}else{rg(a.e);}Ay(wg,a);}
function ng(a){if(!a.d){Ay(wg,a);}a.ub();}
function pg(b,a){if(a<=0){throw Ft(new Et(),'must be positive');}lg(b);b.d=false;b.e=tg(b,a);sy(wg,b);}
function og(b,a){if(a<=0){throw Ft(new Et(),'must be positive');}lg(b);b.d=true;b.e=sg(b,a);sy(wg,b);}
function qg(a){mg();$wnd.clearInterval(a);}
function rg(a){mg();$wnd.clearTimeout(a);}
function sg(b,a){mg();return $wnd.setInterval(function(){b.u();},a);}
function tg(b,a){mg();return $wnd.setTimeout(function(){b.u();},a);}
function ug(){var a;a=y;{ng(this);}}
function vg(){mg();Ag(new gg());}
function fg(){}
_=fg.prototype=new wu();_.u=ug;_.tN=dF+'Timer';_.tI=8;_.d=false;_.e=0;var wg;function wb(){wb=FB;mg();}
function vb(b,a,c){wb();b.a=a;b.b=c;kg(b);return b;}
function xb(){wc(this.a,this.b);}
function ub(){}
_=ub.prototype=new fg();_.ub=xb;_.tN=aF+'Request$2';_.tI=9;function Fb(){Fb=FB;dc=Ab(new zb(),'GET');ec=Ab(new zb(),'POST');fc=hi(new gi());}
function Db(b,a,c){Fb();Eb(b,a===null?null:a.a,c);return b;}
function Eb(b,a,c){Fb();Ec('httpMethod',a);Ec('url',c);b.b=a;b.d=c;return b;}
function ac(g,d,a){var b,c,e,f,h;h=ji(fc);{b=id(h,g.b,g.d,true);}if(b!==null){e=lc(new kc(),g.d);dw(e,ic(new hc(),b));throw e;}cc(g,h);c=rc(new ob(),h,g.c,a);f=jd(h,c,d,a);if(f!==null){throw ic(new hc(),f);}return c;}
function bc(b,a,c){Ec('header',a);Ec('value',c);if(b.a===null){b.a=eA(new iz());}nA(b.a,a,c);}
function cc(e,f){var a,b,c,d;if(e.a!==null&&e.a.c>0){a=kA(e.a);d=Fz(a);while(xz(d)){c=yz(d);b=kd(f,de(c.A(),1),de(c.C(),1));if(b!==null){throw ic(new hc(),b);}}}else{kd(f,'Content-Type','text/plain; charset=utf-8');}}
function yb(){}
_=yb.prototype=new wu();_.tN=aF+'RequestBuilder';_.tI=0;_.a=null;_.b=null;_.c=0;_.d=null;var dc,ec,fc;function Ab(b,a){b.a=a;return b;}
function Cb(){return this.a;}
function zb(){}
_=zb.prototype=new wu();_.tS=Cb;_.tN=aF+'RequestBuilder$Method';_.tI=0;_.a=null;function ic(b,a){Ct(b,a);return b;}
function hc(){}
_=hc.prototype=new Bt();_.tN=aF+'RequestException';_.tI=10;function lc(a,b){ic(a,'The URL '+b+' is invalid or violates the same-origin security restriction');return a;}
function kc(){}
_=kc.prototype=new hc();_.tN=aF+'RequestPermissionException';_.tI=11;function oc(b,a,c){ic(b,qc(c));return b;}
function qc(a){return 'A request timeout has expired after '+ju(a)+' ms';}
function nc(){}
_=nc.prototype=new hc();_.tN=aF+'RequestTimeoutException';_.tI=12;function Ec(a,b){Fc(a,b);if(0==nv(tv(b))){throw Ft(new Et(),a+' can not be empty');}}
function Fc(a,b){if(null===b){throw qu(new pu(),a+' can not be null');}}
function dd(a){a.onreadystatechange=li;a.abort();}
function ed(b){try{if(b.status===undefined){return 'XmlHttpRequest.status == undefined, please see Safari bug '+'http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';}return null;}catch(a){return 'Unable to read XmlHttpRequest.status; likely causes are a '+'networking error or bad cross-domain request. Please see '+'https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more '+'details';}}
function fd(a){return a.readyState;}
function gd(a){return a.responseText;}
function hd(a){return a.status;}
function id(e,c,d,b){try{e.open(c,d,b);return null;}catch(a){return a.message||a.toString();}}
function jd(e,c,d,b){e.onreadystatechange=function(){if(e.readyState==cd){e.onreadystatechange=li;c.t(b);}};try{e.send(d);return null;}catch(a){e.onreadystatechange=li;return a.message||a.toString();}}
function kd(d,b,c){try{d.setRequestHeader(b,c);return null;}catch(a){return a.message||a.toString();}}
var cd=4;function pd(){pd=FB;sd=eA(new iz());}
function md(b,a){pd();if(a===null||lv('',a)){throw Ft(new Et(),'Cannot create a Dictionary with a null or empty name');}b.b='Dictionary '+a;od(b,a);if(b.a===null){throw mB(new lB(),"Cannot find JavaScript object with the name '"+a+"'",a,null);}return b;}
function nd(b,a){for(x in b.a){a.n(x);}}
function od(c,b){try{if(typeof $wnd[b]!='object'){ud(b);}c.a=$wnd[b];}catch(a){ud(b);}}
function qd(b,a){var c=b.a[a];if(c==null|| !Object.prototype.hasOwnProperty.call(b.a,a)){b.tb(a);}return String(c);}
function rd(b){var a;a=aB(new FA());nd(b,a);return a;}
function td(a){pd();var b;b=de(lA(sd,a),3);if(b===null){b=md(new ld(),a);nA(sd,a,b);}return b;}
function vd(b){var a,c;c=rd(this);a="Cannot find '"+b+"' in "+this;if(c.a.c<20){a+='\n keys found: '+c;}throw mB(new lB(),a,this.b,b);}
function ud(a){pd();throw mB(new lB(),"'"+a+"' is not a JavaScript object and cannot be used as a Dictionary",null,a);}
function wd(){return this.b;}
function ld(){}
_=ld.prototype=new wu();_.tb=vd;_.tS=wd;_.tN=bF+'Dictionary';_.tI=13;_.a=null;_.b=null;var sd;function yd(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function Ad(a,b,c){return a[b]=c;}
function Bd(b,a){return b[a];}
function Cd(a){return a.length;}
function Ed(e,d,c,b,a){return Dd(e,d,c,b,0,Cd(b),a);}
function Dd(j,i,g,c,e,a,b){var d,f,h;if((f=Bd(c,e))<0){throw new nu();}h=yd(new xd(),f,Bd(i,e),Bd(g,e),j);++e;if(e<a){j=rv(j,1);for(d=0;d<f;++d){Ad(h,d,Dd(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){Ad(h,d,b);}}return h;}
function Fd(a,b,c){if(c!==null&&a.b!=0&& !ee(c,a.b)){throw new lt();}return Ad(a,b,c);}
function xd(){}
_=xd.prototype=new wu();_.tN=cF+'Array';_.tI=0;function ce(b,a){return !(!(b&&he[b][a]));}
function de(b,a){if(b!=null)ce(b.tI,a)||ge();return b;}
function ee(b,a){return b!=null&&ce(b.tI,a);}
function ge(){throw new xt();}
function fe(a){if(a!==null){throw new xt();}return a;}
function ie(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var he;function le(a){if(ee(a,4)){return a;}return ab(new F(),ne(a),me(a));}
function me(a){return a.message;}
function ne(a){return a.name;}
function pe(){pe=FB;pf=qy(new oy());{kf=new gh();oh(kf);}}
function qe(b,a){pe();qh(kf,b,a);}
function re(a,b){pe();return kh(kf,a,b);}
function se(){pe();return sh(kf,'button');}
function te(){pe();return sh(kf,'div');}
function ue(){pe();return th(kf,'checkbox');}
function ve(){pe();return th(kf,'text');}
function we(){pe();return sh(kf,'label');}
function xe(a){pe();return uh(kf,a);}
function ye(){pe();return sh(kf,'span');}
function ze(){pe();return sh(kf,'tbody');}
function Ae(){pe();return sh(kf,'td');}
function Be(){pe();return sh(kf,'tr');}
function Ce(){pe();return sh(kf,'table');}
function Fe(b,a,d){pe();var c;c=y;{Ee(b,a,d);}}
function Ee(b,a,c){pe();var d;if(a===of){if(bf(b)==8192){of=null;}}d=De;De=b;try{c.hb(b);}finally{De=d;}}
function af(b,a){pe();vh(kf,b,a);}
function bf(a){pe();return wh(kf,a);}
function cf(a){pe();lh(kf,a);}
function df(a){pe();return mh(kf,a);}
function gf(a,b){pe();return zh(kf,a,b);}
function ef(a,b){pe();return xh(kf,a,b);}
function ff(a,b){pe();return yh(kf,a,b);}
function hf(a){pe();return Ah(kf,a);}
function jf(a){pe();return nh(kf,a);}
function lf(c,b,d,a){pe();Bh(kf,c,b,d,a);}
function mf(a){pe();var b,c;c=true;if(pf.b>0){b=fe(wy(pf,pf.b-1));if(!(c=null.Ab())){af(a,true);cf(a);}}return c;}
function nf(b,a){pe();Ch(kf,b,a);}
function sf(a,b,c){pe();Fh(kf,a,b,c);}
function qf(a,b,c){pe();Dh(kf,a,b,c);}
function rf(a,b,c){pe();Eh(kf,a,b,c);}
function tf(a,b){pe();ai(kf,a,b);}
function uf(a,b){pe();bi(kf,a,b);}
function vf(a,b){pe();ci(kf,a,b);}
function wf(b,c,a){pe();di(kf,b,c,a);}
function xf(b,a,c){pe();ei(kf,b,a,c);}
function yf(a,b){pe();ph(kf,a,b);}
function zf(a){pe();return fi(kf,a);}
var De=null,kf=null,of=null,pf;function Cf(a){if(ee(a,5)){return re(this,de(a,5));}return eb(ie(this,Af),a);}
function Df(){return fb(ie(this,Af));}
function Ef(){return zf(this);}
function Af(){}
_=Af.prototype=new cb();_.eQ=Cf;_.hC=Df;_.tS=Ef;_.tN=dF+'Element';_.tI=14;function cg(a){return eb(ie(this,Ff),a);}
function dg(){return fb(ie(this,Ff));}
function eg(){return df(this);}
function Ff(){}
_=Ff.prototype=new cb();_.eQ=cg;_.hC=dg;_.tS=eg;_.tN=dF+'Event';_.tI=15;function ig(){while((mg(),wg).b>0){lg(de(wy((mg(),wg),0),6));}}
function jg(){return null;}
function gg(){}
_=gg.prototype=new wu();_.ob=ig;_.pb=jg;_.tN=dF+'Timer$1';_.tI=16;function zg(){zg=FB;Cg=qy(new oy());eh=qy(new oy());{ah();}}
function Ag(a){zg();sy(Cg,a);}
function Bg(a){zg();$wnd.alert(a);}
function Dg(){zg();var a,b;for(a=Cg.cb();a.F();){b=de(a.eb(),7);b.ob();}}
function Eg(){zg();var a,b,c,d;d=null;for(a=Cg.cb();a.F();){b=de(a.eb(),7);c=b.pb();{d=c;}}return d;}
function Fg(){zg();var a,b;for(a=eh.cb();a.F();){b=fe(a.eb());null.Ab();}}
function ah(){zg();__gwt_initHandlers(function(){dh();},function(){return ch();},function(){bh();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function bh(){zg();var a;a=y;{Dg();}}
function ch(){zg();var a;a=y;{return Eg();}}
function dh(){zg();var a;a=y;{Fg();}}
var Cg,eh;function qh(c,b,a){b.appendChild(a);}
function sh(b,a){return $doc.createElement(a);}
function th(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function uh(c,a){var b;b=sh(c,'select');if(a){Dh(c,b,'multiple',true);}return b;}
function vh(c,b,a){b.cancelBubble=a;}
function wh(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function zh(d,a,b){var c=a[b];return c==null?null:String(c);}
function xh(c,a,b){return !(!a[b]);}
function yh(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function Ah(b,a){return a.__eventBits||0;}
function Bh(e,d,b,f,a){var c=new Option(b,f);if(a== -1||a>d.options.length-1){d.add(c,null);}else{d.add(c,d.options[a]);}}
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
_=fh.prototype=new wu();_.tN=eF+'DOMImpl';_.tI=0;function kh(c,a,b){return a==b;}
function lh(b,a){a.preventDefault();}
function mh(b,a){return a.toString();}
function nh(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function oh(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){Fe(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!mf(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)Fe(b,a,c);};$wnd.__captureElem=null;}
function ph(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function ih(){}
_=ih.prototype=new fh();_.tN=eF+'DOMImplStandard';_.tI=0;function gh(){}
_=gh.prototype=new ih();_.tN=eF+'DOMImplOpera';_.tI=0;function hi(a){li=hb();return a;}
function ji(a){return ki(a);}
function ki(a){return new XMLHttpRequest();}
function gi(){}
_=gi.prototype=new wu();_.tN=eF+'HTTPRequestImpl';_.tI=0;var li=null;function on(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function pn(b,a){if(b.k!==null){on(b,b.k,a);}b.k=a;}
function qn(b,a){tn(b.k,a);}
function rn(b,a){yf(b.y(),a|hf(b.y()));}
function sn(){return this.k;}
function tn(a,b){sf(a,'className',b);}
function un(){if(this.k===null){return '(null handle)';}return zf(this.k);}
function mn(){}
_=mn.prototype=new wu();_.y=sn;_.tS=un;_.tN=fF+'UIObject';_.tI=0;_.k=null;function qo(a){if(ee(a.j,10)){de(a.j,10).sb(a);}else if(a.j!==null){throw cu(new bu(),"This widget's parent does not implement HasWidgets");}}
function ro(b,a){if(b.ab()){tf(b.y(),null);}pn(b,a);if(b.ab()){tf(a,b);}}
function so(c,b){var a;a=c.j;if(b===null){if(a!==null&&a.ab()){c.jb();}c.j=null;}else{if(a!==null){throw cu(new bu(),'Cannot set a new parent without first clearing the old parent');}c.j=b;if(b.ab()){c.gb();}}}
function to(){}
function uo(){}
function vo(){return this.i;}
function wo(){if(this.ab()){throw cu(new bu(),"Should only call onAttach when the widget is detached from the browser's document");}this.i=true;tf(this.y(),this);this.q();this.lb();}
function xo(a){}
function yo(){if(!this.ab()){throw cu(new bu(),"Should only call onDetach when the widget is attached to the browser's document");}try{this.nb();}finally{this.r();tf(this.y(),null);this.i=false;}}
function zo(){}
function Ao(){}
function Bo(a){ro(this,a);}
function Cn(){}
_=Cn.prototype=new mn();_.q=to;_.r=uo;_.ab=vo;_.gb=wo;_.hb=xo;_.jb=yo;_.lb=zo;_.nb=Ao;_.vb=Bo;_.tN=fF+'Widget';_.tI=17;_.i=false;_.j=null;function im(b,a){so(a,b);}
function km(b,a){so(a,null);}
function lm(){var a,b;for(b=this.cb();bo(b);){a=co(b);a.gb();}}
function mm(){var a,b;for(b=this.cb();bo(b);){a=co(b);a.jb();}}
function nm(){}
function om(){}
function hm(){}
_=hm.prototype=new Cn();_.q=lm;_.r=mm;_.lb=nm;_.nb=om;_.tN=fF+'Panel';_.tI=18;function tj(a){a.f=ho(new Dn(),a);}
function uj(a){tj(a);return a;}
function vj(c,a,b){qo(a);io(c.f,a);qe(b,a.y());im(c,a);}
function xj(b,c){var a;if(c.j!==b){return false;}km(b,c);a=c.y();nf(jf(a),a);oo(b.f,c);return true;}
function yj(){return mo(this.f);}
function zj(a){return xj(this,a);}
function sj(){}
_=sj.prototype=new hm();_.cb=yj;_.sb=zj;_.tN=fF+'ComplexPanel';_.tI=19;function ni(a){uj(a);a.vb(te());xf(a.y(),'position','relative');xf(a.y(),'overflow','hidden');return a;}
function oi(a,b){vj(a,b,a.y());}
function qi(a){xf(a,'left','');xf(a,'top','');xf(a,'position','');}
function ri(b){var a;a=xj(this,b);if(a){qi(b.y());}return a;}
function mi(){}
_=mi.prototype=new sj();_.sb=ri;_.tN=fF+'AbsolutePanel';_.tI=20;function hk(){hk=FB;fp(),hp;}
function gk(b,a){fp(),hp;jk(b,a);return b;}
function ik(b,a){switch(bf(a)){case 1:if(b.c!==null){qj(b.c,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function jk(b,a){ro(b,a);rn(b,7041);}
function kk(a){if(this.c===null){this.c=oj(new nj());}sy(this.c,a);}
function lk(a){ik(this,a);}
function mk(a){jk(this,a);}
function fk(){}
_=fk.prototype=new Cn();_.l=kk;_.hb=lk;_.vb=mk;_.tN=fF+'FocusWidget';_.tI=21;_.c=null;function vi(){vi=FB;fp(),hp;}
function ui(b,a){fp(),hp;gk(b,a);return b;}
function wi(a){uf(this.y(),a);}
function ti(){}
_=ti.prototype=new fk();_.wb=wi;_.tN=fF+'ButtonBase';_.tI=22;function Ai(){Ai=FB;fp(),hp;}
function xi(a){fp(),hp;ui(a,se());Bi(a.y());qn(a,'gwt-Button');return a;}
function yi(b,a){fp(),hp;xi(b);b.wb(a);return b;}
function zi(c,a,b){fp(),hp;yi(c,a);c.l(b);return c;}
function Bi(b){Ai();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function si(){}
_=si.prototype=new ti();_.tN=fF+'Button';_.tI=23;function Di(a){uj(a);a.e=Ce();a.d=ze();qe(a.e,a.d);a.vb(a.e);return a;}
function Fi(c,b,a){sf(b,'align',a.a);}
function aj(c,b,a){xf(b,'verticalAlign',a.a);}
function Ci(){}
_=Ci.prototype=new sj();_.tN=fF+'CellPanel';_.tI=24;_.d=null;_.e=null;function fj(){fj=FB;fp(),hp;}
function cj(a){fp(),hp;dj(a,ue());qn(a,'gwt-CheckBox');return a;}
function ej(b,a){fp(),hp;cj(b);ij(b,a);return b;}
function dj(b,a){var c;fp(),hp;ui(b,ye());b.a=a;b.b=we();yf(b.a,hf(b.y()));yf(b.y(),0);qe(b.y(),b.a);qe(b.y(),b.b);c='check'+ ++mj;sf(b.a,'id',c);sf(b.b,'htmlFor',c);return b;}
function gj(b){var a;a=b.ab()?'checked':'defaultChecked';return ef(b.a,a);}
function hj(b,a){qf(b.a,'checked',a);qf(b.a,'defaultChecked',a);}
function ij(b,a){vf(b.b,a);}
function jj(){tf(this.a,this);}
function kj(){tf(this.a,null);hj(this,gj(this));}
function lj(a){uf(this.b,a);}
function bj(){}
_=bj.prototype=new ti();_.lb=jj;_.nb=kj;_.wb=lj;_.tN=fF+'CheckBox';_.tI=25;_.a=null;_.b=null;var mj=0;function lw(d,a,b){var c;while(a.F()){c=a.eb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function nw(a){throw iw(new hw(),'add');}
function ow(b){var a;a=lw(this,this.cb(),b);return a!==null;}
function pw(){var a,b,c;c=av(new Fu());a=null;dv(c,'[');b=this.cb();while(b.F()){if(a!==null){dv(c,a);}else{a=', ';}dv(c,Bv(b.eb()));}dv(c,']');return hv(c);}
function kw(){}
_=kw.prototype=new wu();_.n=nw;_.p=ow;_.tS=pw;_.tN=lF+'AbstractCollection';_.tI=0;function zw(b,a){throw fu(new eu(),'Index: '+a+', Size: '+b.b);}
function Aw(b,a){throw iw(new hw(),'add');}
function Bw(a){this.m(this.yb(),a);return true;}
function Cw(e){var a,b,c,d,f;if(e===this){return true;}if(!ee(e,20)){return false;}f=de(e,20);if(this.yb()!=f.yb()){return false;}c=this.cb();d=f.cb();while(c.F()){a=c.eb();b=d.eb();if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function Dw(){var a,b,c,d;c=1;a=31;b=this.cb();while(b.F()){d=b.eb();c=31*c+(d===null?0:d.hC());}return c;}
function Ew(){return sw(new rw(),this);}
function Fw(a){throw iw(new hw(),'remove');}
function qw(){}
_=qw.prototype=new kw();_.m=Aw;_.n=Bw;_.eQ=Cw;_.hC=Dw;_.cb=Ew;_.rb=Fw;_.tN=lF+'AbstractList';_.tI=26;function py(a){{ty(a);}}
function qy(a){py(a);return a;}
function ry(c,a,b){if(a<0||a>c.b){zw(c,a);}By(c.a,a,b);++c.b;}
function sy(b,a){ez(b.a,b.b++,a);return true;}
function ty(a){a.a=gb();a.b=0;}
function vy(b,a){return xy(b,a)!=(-1);}
function wy(b,a){if(a<0||a>=b.b){zw(b,a);}return az(b.a,a);}
function xy(b,a){return yy(b,a,0);}
function yy(c,b,a){if(a<0){zw(c,a);}for(;a<c.b;++a){if(Fy(b,az(c.a,a))){return a;}}return (-1);}
function zy(c,a){var b;b=wy(c,a);cz(c.a,a,1);--c.b;return b;}
function Ay(c,b){var a;a=xy(c,b);if(a==(-1)){return false;}zy(c,a);return true;}
function Cy(a,b){ry(this,a,b);}
function Dy(a){return sy(this,a);}
function By(a,b,c){a.splice(b,0,c);}
function Ey(a){return vy(this,a);}
function Fy(a,b){return a===b||a!==null&&a.eQ(b);}
function bz(a){return wy(this,a);}
function az(a,b){return a[b];}
function dz(a){return zy(this,a);}
function cz(a,c,b){a.splice(c,b);}
function ez(a,b,c){a[b]=c;}
function fz(){return this.b;}
function oy(){}
_=oy.prototype=new qw();_.m=Cy;_.n=Dy;_.p=Ey;_.D=bz;_.rb=dz;_.yb=fz;_.tN=lF+'ArrayList';_.tI=27;_.a=null;_.b=0;function oj(a){qy(a);return a;}
function qj(d,c){var a,b;for(a=d.cb();a.F();){b=de(a.eb(),8);b.ib(c);}}
function nj(){}
_=nj.prototype=new oy();_.tN=fF+'ClickListenerCollection';_.tI=28;function Cj(a,b){if(a.h!==null){throw cu(new bu(),'Composite.initWidget() may only be called once.');}qo(b);a.vb(b.y());a.h=b;so(b,a);}
function Dj(){if(this.h===null){throw cu(new bu(),'initWidget() was never called in '+w(this));}return this.k;}
function Ej(){if(this.h!==null){return this.h.ab();}return false;}
function Fj(){this.h.gb();this.lb();}
function ak(){try{this.nb();}finally{this.h.jb();}}
function Aj(){}
_=Aj.prototype=new Cn();_.y=Dj;_.ab=Ej;_.gb=Fj;_.jb=ak;_.tN=fF+'Composite';_.tI=29;_.h=null;function ck(a){uj(a);a.vb(te());return a;}
function dk(a,b){vj(a,b,a.y());}
function bk(){}
_=bk.prototype=new sj();_.tN=fF+'FlowPanel';_.tI=30;function tk(){tk=FB;rk(new qk(),'center');uk=rk(new qk(),'left');rk(new qk(),'right');}
var uk;function rk(b,a){b.a=a;return b;}
function qk(){}
_=qk.prototype=new wu();_.tN=fF+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=0;_.a=null;function Ak(){Ak=FB;yk(new xk(),'bottom');Bk=yk(new xk(),'middle');Ck=yk(new xk(),'top');}
var Bk,Ck;function yk(a,b){a.a=b;return a;}
function xk(){}
_=xk.prototype=new wu();_.tN=fF+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=0;_.a=null;function al(a){a.a=(tk(),uk);a.c=(Ak(),Ck);}
function bl(a){Di(a);al(a);a.b=Be();qe(a.d,a.b);sf(a.e,'cellSpacing','0');sf(a.e,'cellPadding','0');return a;}
function cl(b,c){var a;a=el(b);qe(b.b,a);vj(b,c,a);}
function el(b){var a;a=Ae();Fi(b,a,b.a);aj(b,a,b.c);return a;}
function fl(b,a){b.c=a;}
function gl(c){var a,b;b=jf(c.y());a=xj(this,c);if(a){nf(this.b,b);}return a;}
function Fk(){}
_=Fk.prototype=new Ci();_.sb=gl;_.tN=fF+'HorizontalPanel';_.tI=31;_.b=null;function jl(a){a.vb(te());rn(a,131197);qn(a,'gwt-Label');return a;}
function kl(b,a){jl(b);ml(b,a);return b;}
function ml(b,a){vf(b.y(),a);}
function nl(a){switch(bf(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function il(){}
_=il.prototype=new Cn();_.hb=nl;_.tN=fF+'Label';_.tI=32;function Bl(){Bl=FB;fp(),hp;fm=new pl();}
function wl(b,a){Bl();gk(b,xe(a));rn(b,1024);qn(b,'gwt-ListBox');return b;}
function xl(b,a){am(b,a,(-1));}
function yl(b,a,c){bm(b,a,c,(-1));}
function zl(b,a){if(a<0||a>=Cl(b)){throw new eu();}}
function Al(a){ql(fm,a.y());}
function Cl(a){return sl(fm,a.y());}
function Dl(b,a){zl(b,a);return tl(fm,b.y(),a);}
function El(a){return ff(a.y(),'selectedIndex');}
function Fl(b,a){zl(b,a);return ul(fm,b.y(),a);}
function am(c,b,a){bm(c,b,b,a);}
function bm(c,b,d,a){lf(c.y(),b,d,a);}
function cm(b,a){zl(b,a);vl(fm,b.y(),a);}
function dm(c,a,b){zl(c,a);if(b===null){throw qu(new pu(),'Cannot set an option to have null text');}wf(c.y(),b,a);}
function em(a,b){rf(a.y(),'size',b);}
function gm(a){if(bf(a)==1024){}else{ik(this,a);}}
function ol(){}
_=ol.prototype=new fk();_.hb=gm;_.tN=fF+'ListBox';_.tI=33;var fm;function ql(b,a){a.options.length=0;}
function sl(b,a){return a.options.length;}
function tl(c,b,a){return b.options[a].text;}
function ul(c,b,a){return b.options[a].value;}
function vl(c,b,a){b.options[a]=null;}
function pl(){}
_=pl.prototype=new wu();_.tN=fF+'ListBox$Impl';_.tI=0;function vm(){vm=FB;Am=eA(new iz());}
function um(b,a){vm();ni(b);if(a===null){a=wm();}b.vb(a);b.gb();return b;}
function xm(){vm();return ym(null);}
function ym(c){vm();var a,b;b=de(lA(Am,c),9);if(b!==null){return b;}a=null;if(Am.c==0){zm();}nA(Am,c,b=um(new pm(),a));return b;}
function wm(){vm();return $doc.body;}
function zm(){vm();Ag(new qm());}
function pm(){}
_=pm.prototype=new mi();_.tN=fF+'RootPanel';_.tI=34;var Am;function sm(){var a,b;for(b=tx(cy((vm(),Am)));Ax(b);){a=de(Bx(b),9);if(a.ab()){a.jb();}}}
function tm(){return null;}
function qm(){}
_=qm.prototype=new wu();_.ob=sm;_.pb=tm;_.tN=fF+'RootPanel$1';_.tI=35;function en(){en=FB;fp(),hp;}
function dn(b,a){fp(),hp;gk(b,a);rn(b,1024);return b;}
function fn(a){return gf(a.y(),'value');}
function gn(a){if(this.a===null){this.a=oj(new nj());}sy(this.a,a);}
function hn(a){var b;ik(this,a);b=bf(a);if(b==1){if(this.a!==null){qj(this.a,this);}}else{}}
function cn(){}
_=cn.prototype=new fk();_.l=gn;_.hb=hn;_.tN=fF+'TextBoxBase';_.tI=36;_.a=null;function kn(){kn=FB;fp(),hp;}
function jn(a){fp(),hp;dn(a,ve());qn(a,'gwt-TextBox');return a;}
function ln(b,a){rf(b.y(),'size',a);}
function bn(){}
_=bn.prototype=new cn();_.tN=fF+'TextBox';_.tI=37;function wn(a){a.a=(tk(),uk);a.b=(Ak(),Ck);}
function xn(a){Di(a);wn(a);sf(a.e,'cellSpacing','0');sf(a.e,'cellPadding','0');return a;}
function yn(b,d){var a,c;c=Be();a=An(b);qe(c,a);qe(b.d,c);vj(b,d,a);}
function An(b){var a;a=Ae();Fi(b,a,b.a);aj(b,a,b.b);return a;}
function Bn(c){var a,b;b=jf(c.y());a=xj(this,c);if(a){nf(this.d,jf(b));}return a;}
function vn(){}
_=vn.prototype=new Ci();_.sb=Bn;_.tN=fF+'VerticalPanel';_.tI=38;function ho(b,a){b.b=a;b.a=Ed('[Lcom.google.gwt.user.client.ui.Widget;',[0],[12],[4],null);return b;}
function io(a,b){lo(a,b,a.c);}
function ko(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]===c){return a;}}return (-1);}
function lo(d,e,a){var b,c;if(a<0||a>d.c){throw new eu();}if(d.c==d.a.a){c=Ed('[Lcom.google.gwt.user.client.ui.Widget;',[0],[12],[d.a.a*2],null);for(b=0;b<d.a.a;++b){Fd(c,b,d.a[b]);}d.a=c;}++d.c;for(b=d.c-1;b>a;--b){Fd(d.a,b,d.a[b-1]);}Fd(d.a,a,e);}
function mo(a){return Fn(new En(),a);}
function no(c,b){var a;if(b<0||b>=c.c){throw new eu();}--c.c;for(a=b;a<c.c;++a){Fd(c.a,a,c.a[a+1]);}Fd(c.a,c.c,null);}
function oo(b,c){var a;a=ko(b,c);if(a==(-1)){throw new oB();}no(b,a);}
function Dn(){}
_=Dn.prototype=new wu();_.tN=fF+'WidgetCollection';_.tI=0;_.a=null;_.b=null;_.c=0;function Fn(b,a){b.b=a;return b;}
function bo(a){return a.a<a.b.c-1;}
function co(a){if(a.a>=a.b.c){throw new oB();}return a.b.a[++a.a];}
function eo(){return bo(this);}
function fo(){return co(this);}
function go(){if(this.a<0||this.a>=this.b.c){throw new bu();}this.b.b.sb(this.b.a[this.a--]);}
function En(){}
_=En.prototype=new wu();_.F=eo;_.eb=fo;_.qb=go;_.tN=fF+'WidgetCollection$WidgetIterator';_.tI=0;_.a=(-1);function fp(){fp=FB;gp=Fo(new Do());hp=gp!==null?ep(new Co()):gp;}
function ep(a){fp();return a;}
function Co(){}
_=Co.prototype=new wu();_.tN=gF+'FocusImpl';_.tI=0;var gp,hp;function ap(){ap=FB;fp();}
function Eo(a){bp(a);cp(a);dp(a);}
function Fo(a){ap();ep(a);Eo(a);return a;}
function bp(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function cp(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function dp(a){return function(){this.firstChild.focus();};}
function Do(){}
_=Do.prototype=new Co();_.tN=gF+'FocusImplOld';_.tI=0;function np(c,a,b){Cu(c,b);return c;}
function mp(){}
_=mp.prototype=new Bu();_.tN=hF+'DOMException';_.tI=39;function yp(){yp=FB;zp=(ss(),ct);}
function Ap(a){yp();return ts(zp,a);}
var zp;function oq(b,a){b.a=a;return b;}
function pq(a,b){return b;}
function rq(a){if(ee(a,15)){return re(pq(this,this.a),pq(this,de(a,15).a));}return false;}
function nq(){}
_=nq.prototype=new wu();_.eQ=rq;_.tN=iF+'DOMItem';_.tI=40;_.a=null;function mr(b,a){oq(b,a);return b;}
function or(a){return hr(new gr(),vs(a.a));}
function pr(a){return vr(new ur(),ws(a.a));}
function qr(a){return Cs(a.a);}
function rr(a){return at(a.a);}
function sr(a){return bt(a.a);}
function tr(a){var b;if(a===null){return null;}b=Ds(a);switch(b){case 2:return Cp(new Bp(),a);case 4:return cq(new bq(),a);case 8:return kq(new jq(),a);case 11:return xq(new wq(),a);case 9:return Bq(new Aq(),a);case 1:return ar(new Fq(),a);case 7:return Er(new Dr(),a);case 3:return ds(new cs(),a);default:return mr(new lr(),a);}}
function lr(){}
_=lr.prototype=new nq();_.tN=iF+'NodeImpl';_.tI=41;function Cp(b,a){mr(b,a);return b;}
function Ep(a){return Bs(a.a);}
function Fp(a){return Fs(a.a);}
function aq(){var a;a=av(new Fu());dv(a,' '+Ep(this));dv(a,'="');dv(a,Fp(this));dv(a,'"');return hv(a);}
function Bp(){}
_=Bp.prototype=new lr();_.tS=aq;_.tN=iF+'AttrImpl';_.tI=42;function gq(b,a){mr(b,a);return b;}
function iq(a){return xs(a.a);}
function fq(){}
_=fq.prototype=new lr();_.tN=iF+'CharacterDataImpl';_.tI=43;function ds(b,a){gq(b,a);return b;}
function fs(){var a,b,c;a=av(new Fu());c=pv(iq(this),'(?=[;&<>\'"])',(-1));for(b=0;b<c.a;b++){if(qv(c[b],';')){dv(a,'&semi;');dv(a,rv(c[b],1));}else if(qv(c[b],'&')){dv(a,'&amp;');dv(a,rv(c[b],1));}else if(qv(c[b],'"')){dv(a,'&quot;');dv(a,rv(c[b],1));}else if(qv(c[b],"'")){dv(a,'&apos;');dv(a,rv(c[b],1));}else if(qv(c[b],'<')){dv(a,'&lt;');dv(a,rv(c[b],1));}else if(qv(c[b],'>')){dv(a,'&gt;');dv(a,rv(c[b],1));}else{dv(a,c[b]);}}return hv(a);}
function cs(){}
_=cs.prototype=new fq();_.tS=fs;_.tN=iF+'TextImpl';_.tI=44;function cq(b,a){ds(b,a);return b;}
function eq(){var a;a=bv(new Fu(),'<![CDATA[');dv(a,iq(this));dv(a,']]>');return hv(a);}
function bq(){}
_=bq.prototype=new cs();_.tS=eq;_.tN=iF+'CDATASectionImpl';_.tI=45;function kq(b,a){gq(b,a);return b;}
function mq(){var a;a=bv(new Fu(),'<!--');dv(a,iq(this));dv(a,'-->');return hv(a);}
function jq(){}
_=jq.prototype=new fq();_.tS=mq;_.tN=iF+'CommentImpl';_.tI=46;function tq(c,a,b){np(c,12,'Failed to parse: '+vq(a));dw(c,b);return c;}
function vq(a){return sv(a,0,mu(nv(a),128));}
function sq(){}
_=sq.prototype=new mp();_.tN=iF+'DOMParseException';_.tI=47;function xq(b,a){mr(b,a);return b;}
function zq(){var a,b;a=av(new Fu());for(b=0;b<pr(this).B();b++){cv(a,pr(this).bb(b));}return hv(a);}
function wq(){}
_=wq.prototype=new lr();_.tS=zq;_.tN=iF+'DocumentFragmentImpl';_.tI=48;function Bq(b,a){mr(b,a);return b;}
function Dq(){return de(tr(ys(this.a)),16);}
function Eq(){var a,b,c;a=av(new Fu());b=pr(this);for(c=0;c<b.B();c++){dv(a,b.bb(c).tS());}return hv(a);}
function Aq(){}
_=Aq.prototype=new lr();_.w=Dq;_.tS=Eq;_.tN=iF+'DocumentImpl';_.tI=49;function ar(b,a){mr(b,a);return b;}
function cr(a){return Es(a.a);}
function dr(a){return us(this.a,a);}
function er(a){return vr(new ur(),zs(this.a,a));}
function fr(){var a;a=bv(new Fu(),'<');dv(a,cr(this));if(rr(this)){dv(a,zr(or(this)));}if(sr(this)){dv(a,'>');dv(a,zr(pr(this)));dv(a,'<\/');dv(a,cr(this));dv(a,'>');}else{dv(a,'/>');}return hv(a);}
function Fq(){}
_=Fq.prototype=new lr();_.v=dr;_.z=er;_.tS=fr;_.tN=iF+'ElementImpl';_.tI=50;function vr(b,a){oq(b,a);return b;}
function xr(a){return As(a.a);}
function yr(b,a){return tr(dt(b.a,a));}
function zr(c){var a,b;a=av(new Fu());for(b=0;b<c.B();b++){dv(a,c.bb(b).tS());}return hv(a);}
function Ar(){return xr(this);}
function Br(a){return yr(this,a);}
function Cr(){return zr(this);}
function ur(){}
_=ur.prototype=new nq();_.B=Ar;_.bb=Br;_.tS=Cr;_.tN=iF+'NodeListImpl';_.tI=51;function hr(b,a){vr(b,a);return b;}
function jr(){return xr(this);}
function kr(a){return yr(this,a);}
function gr(){}
_=gr.prototype=new ur();_.B=jr;_.bb=kr;_.tN=iF+'NamedNodeMapImpl';_.tI=52;function Er(b,a){mr(b,a);return b;}
function as(a){return xs(a.a);}
function bs(){var a;a=bv(new Fu(),'<?');dv(a,qr(this));dv(a,' ');dv(a,as(this));dv(a,'?>');return hv(a);}
function Dr(){}
_=Dr.prototype=new lr();_.tS=bs;_.tN=iF+'ProcessingInstructionImpl';_.tI=53;function ss(){ss=FB;ct=is(new hs());}
function rs(a){ss();return a;}
function ts(e,c){var a,d;try{return de(tr(ps(e,c)),17);}catch(a){a=le(a);if(ee(a,18)){d=a;throw tq(new sq(),c,d);}else throw a;}}
function us(b,a){ss();return b.getAttribute(a);}
function vs(a){ss();return a.attributes;}
function ws(b){ss();var a=b.childNodes;return a==null?null:a;}
function xs(a){ss();return a.data;}
function ys(a){ss();return a.documentElement;}
function zs(a,b){ss();return os(ct,a,b);}
function As(a){ss();return a.length;}
function Bs(a){ss();return a.name;}
function Cs(a){ss();var b=a.nodeName;return b==null?null:b;}
function Ds(a){ss();var b=a.nodeType;return b==null?-1:b;}
function Es(a){ss();return a.tagName;}
function Fs(a){ss();return a.value;}
function at(a){ss();return a.attributes.length!=0;}
function bt(a){ss();return a.hasChildNodes();}
function dt(c,a){ss();if(a>=c.length){return null;}var b=c.item(a);return b==null?null:b;}
function gs(){}
_=gs.prototype=new wu();_.tN=iF+'XMLParserImpl';_.tI=0;var ct;function ns(){ns=FB;ss();}
function ls(a){a.a=qs();}
function ms(a){ns();rs(a);ls(a);return a;}
function os(c,a,b){return a.getElementsByTagNameNS('*',b);}
function ps(e,a){var b=e.a;var c=b.parseFromString(a,'text/xml');var d=c.documentElement;if(d.tagName=='parsererror'&&d.namespaceURI=='http://www.mozilla.org/newlayout/xml/parsererror.xml'){throw new Error(d.firstChild.data);}return c;}
function qs(){ns();return new DOMParser();}
function ks(){}
_=ks.prototype=new gs();_.tN=iF+'XMLParserImplStandard';_.tI=0;function js(){js=FB;ns();}
function is(a){js();ms(a);return a;}
function hs(){}
_=hs.prototype=new ks();_.tN=iF+'XMLParserImplOpera';_.tI=0;function ht(){}
_=ht.prototype=new wu();_.tN=jF+'OutputStream';_.tI=0;function ft(){}
_=ft.prototype=new ht();_.tN=jF+'FilterOutputStream';_.tI=0;function jt(){}
_=jt.prototype=new ft();_.tN=jF+'PrintStream';_.tI=0;function lt(){}
_=lt.prototype=new Bu();_.tN=kF+'ArrayStoreException';_.tI=54;function pt(){pt=FB;qt=ot(new nt(),false);rt=ot(new nt(),true);}
function ot(a,b){pt();a.a=b;return a;}
function st(a){return ee(a,19)&&de(a,19).a==this.a;}
function tt(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function ut(){return this.a?'true':'false';}
function vt(a){pt();return a?rt:qt;}
function nt(){}
_=nt.prototype=new wu();_.eQ=st;_.hC=tt;_.tS=ut;_.tN=kF+'Boolean';_.tI=55;_.a=false;var qt,rt;function xt(){}
_=xt.prototype=new Bu();_.tN=kF+'ClassCastException';_.tI=56;function Ft(b,a){Cu(b,a);return b;}
function Et(){}
_=Et.prototype=new Bu();_.tN=kF+'IllegalArgumentException';_.tI=57;function cu(b,a){Cu(b,a);return b;}
function bu(){}
_=bu.prototype=new Bu();_.tN=kF+'IllegalStateException';_.tI=58;function fu(b,a){Cu(b,a);return b;}
function eu(){}
_=eu.prototype=new Bu();_.tN=kF+'IndexOutOfBoundsException';_.tI=59;function tu(){tu=FB;{vu();}}
function vu(){tu();uu=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var uu=null;function iu(){iu=FB;tu();}
function ju(a){iu();return Av(a);}
function mu(a,b){return a<b?a:b;}
function nu(){}
_=nu.prototype=new Bu();_.tN=kF+'NegativeArraySizeException';_.tI=60;function qu(b,a){Cu(b,a);return b;}
function pu(){}
_=pu.prototype=new Bu();_.tN=kF+'NullPointerException';_.tI=61;function lv(b,a){if(!ee(a,1))return false;return vv(b,a);}
function mv(b,a){return b.indexOf(a);}
function nv(a){return a.length;}
function ov(b,a){return pv(b,a,0);}
function pv(j,i,g){var a=new RegExp(i,'g');var h=[];var b=0;var k=j;var e=null;while(true){var f=a.exec(k);if(f==null||(k==''||b==g-1&&g>0)){h[b]=k;break;}else{h[b]=k.substring(0,f.index);k=k.substring(f.index+f[0].length,k.length);a.lastIndex=0;if(e==k){h[b]=k.substring(0,1);k=k.substring(1);}e=k;b++;}}if(g==0){for(var c=h.length-1;c>=0;c--){if(h[c]!=''){h.splice(c+1,h.length-(c+1));break;}}}var d=uv(h.length);var c=0;for(c=0;c<h.length;++c){d[c]=h[c];}return d;}
function qv(b,a){return mv(b,a)==0;}
function rv(b,a){return b.substr(a,b.length-a);}
function sv(c,a,b){return c.substr(a,b-a);}
function tv(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function uv(a){return Ed('[Ljava.lang.String;',[0],[1],[a],null);}
function vv(a,b){return String(a)==b;}
function wv(a){return lv(this,a);}
function yv(){var a=xv;if(!a){a=xv={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function zv(){return this;}
function Av(a){return ''+a;}
function Bv(a){return a!==null?a.tS():'null';}
_=String.prototype;_.eQ=wv;_.hC=yv;_.tS=zv;_.tN=kF+'String';_.tI=2;var xv=null;function av(a){ev(a);return a;}
function bv(b,a){fv(b,a);return b;}
function cv(a,b){return dv(a,Bv(b));}
function dv(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function ev(a){fv(a,'');}
function fv(b,a){b.js=[a];b.length=a.length;}
function hv(a){a.fb();return a.js[0];}
function iv(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function jv(){return hv(this);}
function Fu(){}
_=Fu.prototype=new wu();_.fb=iv;_.tS=jv;_.tN=kF+'StringBuffer';_.tI=0;function Dv(){Dv=FB;Ev=new jt();}
function Fv(a){Dv();return C(a);}
var Ev;function iw(b,a){Cu(b,a);return b;}
function hw(){}
_=hw.prototype=new Bu();_.tN=kF+'UnsupportedOperationException';_.tI=62;function sw(b,a){b.c=a;return b;}
function uw(a){return a.a<a.c.yb();}
function vw(){return uw(this);}
function ww(){if(!uw(this)){throw new oB();}return this.c.D(this.b=this.a++);}
function xw(){if(this.b<0){throw new bu();}this.c.rb(this.b);this.a=this.b;this.b=(-1);}
function rw(){}
_=rw.prototype=new wu();_.F=vw;_.eb=ww;_.qb=xw;_.tN=lF+'AbstractList$IteratorImpl';_.tI=0;_.a=0;_.b=(-1);function ay(f,d,e){var a,b,c;for(b=Fz(f.s());xz(b);){a=yz(b);c=a.A();if(d===null?c===null:d.eQ(c)){if(e){zz(b);}return a;}}return null;}
function by(b){var a;a=b.s();return cx(new bx(),b,a);}
function cy(b){var a;a=kA(b);return rx(new qx(),b,a);}
function dy(a){return ay(this,a,false)!==null;}
function ey(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ee(d,21)){return false;}f=de(d,21);c=by(this);e=f.db();if(!ly(c,e)){return false;}for(a=ex(c);lx(a);){b=mx(a);h=this.E(b);g=f.E(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function fy(b){var a;a=ay(this,b,false);return a===null?null:a.C();}
function gy(){var a,b,c;b=0;for(c=Fz(this.s());xz(c);){a=yz(c);b+=a.hC();}return b;}
function hy(){return by(this);}
function iy(){var a,b,c,d;d='{';a=false;for(c=Fz(this.s());xz(c);){b=yz(c);if(a){d+=', ';}else{a=true;}d+=Bv(b.A());d+='=';d+=Bv(b.C());}return d+'}';}
function ax(){}
_=ax.prototype=new wu();_.o=dy;_.eQ=ey;_.E=fy;_.hC=gy;_.db=hy;_.tS=iy;_.tN=lF+'AbstractMap';_.tI=63;function ly(e,b){var a,c,d;if(b===e){return true;}if(!ee(b,22)){return false;}c=de(b,22);if(c.yb()!=e.yb()){return false;}for(a=c.cb();a.F();){d=a.eb();if(!e.p(d)){return false;}}return true;}
function my(a){return ly(this,a);}
function ny(){var a,b,c;a=0;for(b=this.cb();b.F();){c=b.eb();if(c!==null){a+=c.hC();}}return a;}
function jy(){}
_=jy.prototype=new kw();_.eQ=my;_.hC=ny;_.tN=lF+'AbstractSet';_.tI=64;function cx(b,a,c){b.a=a;b.b=c;return b;}
function ex(b){var a;a=Fz(b.b);return jx(new ix(),b,a);}
function fx(a){return this.a.o(a);}
function gx(){return ex(this);}
function hx(){return this.b.a.c;}
function bx(){}
_=bx.prototype=new jy();_.p=fx;_.cb=gx;_.yb=hx;_.tN=lF+'AbstractMap$1';_.tI=65;function jx(b,a,c){b.a=c;return b;}
function lx(a){return a.a.F();}
function mx(b){var a;a=b.a.eb();return a.A();}
function nx(){return lx(this);}
function ox(){return mx(this);}
function px(){this.a.qb();}
function ix(){}
_=ix.prototype=new wu();_.F=nx;_.eb=ox;_.qb=px;_.tN=lF+'AbstractMap$2';_.tI=0;function rx(b,a,c){b.a=a;b.b=c;return b;}
function tx(b){var a;a=Fz(b.b);return yx(new xx(),b,a);}
function ux(a){return jA(this.a,a);}
function vx(){return tx(this);}
function wx(){return this.b.a.c;}
function qx(){}
_=qx.prototype=new kw();_.p=ux;_.cb=vx;_.yb=wx;_.tN=lF+'AbstractMap$3';_.tI=0;function yx(b,a,c){b.a=c;return b;}
function Ax(a){return a.a.F();}
function Bx(a){var b;b=a.a.eb().C();return b;}
function Cx(){return Ax(this);}
function Dx(){return Bx(this);}
function Ex(){this.a.qb();}
function xx(){}
_=xx.prototype=new wu();_.F=Cx;_.eb=Dx;_.qb=Ex;_.tN=lF+'AbstractMap$4';_.tI=0;function hA(){hA=FB;pA=vA();}
function dA(a){{gA(a);}}
function eA(a){hA();dA(a);return a;}
function fA(a,b){hA();dA(a);mA(a,b);return a;}
function gA(a){a.a=gb();a.d=ib();a.b=ie(pA,cb);a.c=0;}
function iA(b,a){if(ee(a,1)){return zA(b.d,de(a,1))!==pA;}else if(a===null){return b.b!==pA;}else{return yA(b.a,a,a.hC())!==pA;}}
function jA(a,b){if(a.b!==pA&&xA(a.b,b)){return true;}else if(uA(a.d,b)){return true;}else if(sA(a.a,b)){return true;}return false;}
function kA(a){return Dz(new tz(),a);}
function lA(c,a){var b;if(ee(a,1)){b=zA(c.d,de(a,1));}else if(a===null){b=c.b;}else{b=yA(c.a,a,a.hC());}return b===pA?null:b;}
function nA(c,a,d){var b;if(ee(a,1)){b=CA(c.d,de(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=BA(c.a,a,d,a.hC());}if(b===pA){++c.c;return null;}else{return b;}}
function mA(d,c){var a,b;b=Fz(kA(c));while(xz(b)){a=yz(b);nA(d,a.A(),a.C());}}
function oA(c,a){var b;if(ee(a,1)){b=EA(c.d,de(a,1));}else if(a===null){b=c.b;c.b=ie(pA,cb);}else{b=DA(c.a,a,a.hC());}if(b===pA){return null;}else{--c.c;return b;}}
function qA(e,c){hA();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.n(a[f]);}}}}
function rA(d,a){hA();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=mz(c.substring(1),e);a.n(b);}}}
function sA(f,h){hA();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.C();if(xA(h,d)){return true;}}}}return false;}
function tA(a){return iA(this,a);}
function uA(c,d){hA();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(xA(d,a)){return true;}}}return false;}
function vA(){hA();}
function wA(){return kA(this);}
function xA(a,b){hA();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function AA(a){return lA(this,a);}
function yA(f,h,e){hA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(xA(h,d)){return c.C();}}}}
function zA(b,a){hA();return b[':'+a];}
function BA(f,h,j,e){hA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(xA(h,d)){var i=c.C();c.xb(j);return i;}}}else{a=f[e]=[];}var c=mz(h,j);a.push(c);}
function CA(c,a,d){hA();a=':'+a;var b=c[a];c[a]=d;return b;}
function DA(f,h,e){hA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(xA(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.C();}}}}
function EA(c,a){hA();a=':'+a;var b=c[a];delete c[a];return b;}
function iz(){}
_=iz.prototype=new ax();_.o=tA;_.s=wA;_.E=AA;_.tN=lF+'HashMap';_.tI=66;_.a=null;_.b=null;_.c=0;_.d=null;var pA;function kz(b,a,c){b.a=a;b.b=c;return b;}
function mz(a,b){return kz(new jz(),a,b);}
function nz(b){var a;if(ee(b,23)){a=de(b,23);if(xA(this.a,a.A())&&xA(this.b,a.C())){return true;}}return false;}
function oz(){return this.a;}
function pz(){return this.b;}
function qz(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function rz(a){var b;b=this.b;this.b=a;return b;}
function sz(){return this.a+'='+this.b;}
function jz(){}
_=jz.prototype=new wu();_.eQ=nz;_.A=oz;_.C=pz;_.hC=qz;_.xb=rz;_.tS=sz;_.tN=lF+'HashMap$EntryImpl';_.tI=67;_.a=null;_.b=null;function Dz(b,a){b.a=a;return b;}
function Fz(a){return vz(new uz(),a.a);}
function aA(c){var a,b,d;if(ee(c,23)){a=de(c,23);b=a.A();if(iA(this.a,b)){d=lA(this.a,b);return xA(a.C(),d);}}return false;}
function bA(){return Fz(this);}
function cA(){return this.a.c;}
function tz(){}
_=tz.prototype=new jy();_.p=aA;_.cb=bA;_.yb=cA;_.tN=lF+'HashMap$EntrySet';_.tI=68;function vz(c,b){var a;c.c=b;a=qy(new oy());if(c.c.b!==(hA(),pA)){sy(a,kz(new jz(),null,c.c.b));}rA(c.c.d,a);qA(c.c.a,a);c.a=a.cb();return c;}
function xz(a){return a.a.F();}
function yz(a){return a.b=de(a.a.eb(),23);}
function zz(a){if(a.b===null){throw cu(new bu(),'Must call next() before remove().');}else{a.a.qb();oA(a.c,a.b.A());a.b=null;}}
function Az(){return xz(this);}
function Bz(){return yz(this);}
function Cz(){zz(this);}
function uz(){}
_=uz.prototype=new wu();_.F=Az;_.eb=Bz;_.qb=Cz;_.tN=lF+'HashMap$EntrySetIterator';_.tI=0;_.a=null;_.b=null;function aB(a){a.a=eA(new iz());return a;}
function cB(a){var b;b=nA(this.a,a,vt(true));return b===null;}
function dB(a){return iA(this.a,a);}
function eB(){return ex(by(this.a));}
function fB(){return this.a.c;}
function gB(){return by(this.a).tS();}
function FA(){}
_=FA.prototype=new jy();_.n=cB;_.p=dB;_.cb=eB;_.yb=fB;_.tS=gB;_.tN=lF+'HashSet';_.tI=69;_.a=null;function mB(d,c,a,b){Cu(d,c);return d;}
function lB(){}
_=lB.prototype=new Bu();_.tN=lF+'MissingResourceException';_.tI=70;function oB(){}
_=oB.prototype=new Bu();_.tN=lF+'NoSuchElementException';_.tI=71;function tB(a){a.a=qy(new oy());return a;}
function uB(b,a){return sy(b.a,a);}
function wB(b,a){return xB(b,a);}
function xB(b,a){return wy(b.a,a);}
function yB(a,b){ry(this.a,a,b);}
function zB(a){return uB(this,a);}
function AB(a){return vy(this.a,a);}
function BB(a){return xB(this,a);}
function CB(){return this.a.cb();}
function DB(a){return zy(this.a,a);}
function EB(){return this.a.b;}
function sB(){}
_=sB.prototype=new qw();_.m=yB;_.n=zB;_.p=AB;_.D=BB;_.cb=CB;_.rb=DB;_.yb=EB;_.tN=lF+'Vector';_.tI=72;_.a=null;function xC(g,h){var a,c,d,e,f;c=cD(new aD(),h);try{e=CE(c);f=pC(new oC(),g,e,c);pg(f,1);}catch(a){a=le(a);if(ee(a,25)){d=a;ew(d);}else throw a;}}
function yC(g,h){var a,c,d,e,f;c=lD(new jD(),h);try{e=CE(c);f=tC(new sC(),g,e,c);pg(f,1);}catch(a){a=le(a);if(ee(a,25)){d=a;Bg('Exception: '+d.b);ew(d);}else throw a;}}
function zC(r){var a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s;k='DEFAULT-identities-and-usecases.xml';l='DEFAULT-policy.xml';f='DEFAULT-cancel.html';m='DEFAULT-save-policy.xml';try{h=td('getURLs');k=qd(h,'identities-url');l=qd(h,'policy-url');f=qd(h,'cancel-url');m=qd(h,'save-url');}catch(a){a=le(a);if(ee(a,24)){i=a;Bg('Exception: '+i.b);}else throw a;}yC(r,l);xC(r,k);s=xn(new vn());oi(xm(),s);p=xn(new vn());yn(s,p);q=jn(new bn());ln(q,30);yn(p,q);o=zi(new si(),'Save User or Group',cC(new bC(),r,q));yn(p,o);j=bl(new Fk());fl(j,(Ak(),Bk));yn(s,j);d=bl(new Fk());yn(s,d);n=m;r.g=zi(new si(),'Save Policy',gC(new fC(),r,n));qn(r.g,'gwt-wyona-SaveButton');cl(d,r.g);g=f;e=zi(new si(),'Cancel',kC(new jC(),r,g));qn(r.g,'gwt-wyona-CancelButton');cl(d,e);r.b=CD(new AD(),r.j,r.i,r.a);r.d=cE(new aE(),r.j,r.e,r.c,r.h);c=CC(new AC(),r.b.a,r.d.c,r.d);qn(c,'gwt-wyona-AddRemoveWidget');cl(j,r.b);cl(j,c);cl(j,r.d);}
function aC(){}
_=aC.prototype=new wu();_.tN=mF+'AccessPolicyEditor';_.tI=0;_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;_.h=true;_.i=null;_.j=10;function cC(b,a,c){b.a=a;b.b=c;return b;}
function eC(d){var a,b,c;b=Cl(this.a.b.a);for(a=0;a<b;a++){c=Dl(this.a.b.a,a);if(mv(c,fn(this.b))>=0)Bg('Result: '+c);}}
function bC(){}
_=bC.prototype=new wu();_.ib=eC;_.tN=mF+'AccessPolicyEditor$1';_.tI=73;function gC(b,a,c){b.a=a;b.b=c;return b;}
function iC(f){var a,c,d,e;c=sD(new rD(),this.b);try{e=uD(c,kE(this.a.d),fE(this.a.d),jE(this.a.d));}catch(a){a=le(a);if(ee(a,25)){d=a;Bg('Exception: '+d.b);}else throw a;}}
function fC(){}
_=fC.prototype=new wu();_.ib=iC;_.tN=mF+'AccessPolicyEditor$2';_.tI=74;function kC(b,a,c){b.a=c;return b;}
function mC(a,b){$wnd.location.href=b;}
function nC(a){Bg('Redirect to '+this.a);mC(this,this.a);}
function jC(){}
_=jC.prototype=new wu();_.ib=nC;_.tN=mF+'AccessPolicyEditor$3';_.tI=75;function qC(){qC=FB;mg();}
function pC(b,a,d,c){qC();b.a=a;b.c=d;b.b=c;kg(b);return b;}
function rC(){if(xc(this.c)){og(this,10);}else{this.a.i=hD(this.b);this.a.a=fD(this.b);this.a.f=gD(this.b);ED(this.a.b,this.a.j,this.a.i,this.a.a);lg(this);Bg('Identities have been loaded!');}}
function oC(){}
_=oC.prototype=new fg();_.ub=rC;_.tN=mF+'AccessPolicyEditor$4';_.tI=76;function uC(){uC=FB;mg();}
function tC(b,a,d,c){uC();b.a=a;b.c=d;b.b=c;kg(b);return b;}
function vC(){if(xc(this.c)){og(this,10);}else{this.a.e=pD(this.b);this.a.c=oD(this.b);mE(this.a.d,this.a.j,this.a.e,this.a.c);this.a.h=this.b.b;nE(this.a.d,this.a.h);lg(this);Bg('Policy has been loaded!');}}
function sC(){}
_=sC.prototype=new fg();_.ub=vC;_.tN=mF+'AccessPolicyEditor$5';_.tI=77;function BC(a){a.b=ck(new bk());}
function CC(d,a,c,b){BC(d);Cj(d,d.b);d.e=zi(new si(),'<',d);dk(d.b,d.e);d.a=zi(new si(),'>',d);dk(d.b,d.a);d.c=a;d.d=c;return d;}
function EC(b,a){if(mv(a,'(')>0){return sv(a,0,mv(a,'('));}else{return a;}}
function FC(c){var a,b;if(c===this.a){a=El(this.c);if(a>=0){b=Fl(this.c,a);Bg('Add selected identity '+b+' to policy');cm(this.c,a);yl(this.d,sv(b,0,1)+': (-,-) '+tv(rv(b,2)),b);}else{Bg('No identity selected yet! Please select an identity.');}}else if(c===this.e){a=El(this.d);if(a>=0){b=Fl(this.d,a);Bg('Remove selected identity '+b+' from policy');cm(this.d,a);xl(this.c,EC(this,b));}else{Bg('No identity selected yet! Please select an identity.');}}}
function AC(){}
_=AC.prototype=new Aj();_.ib=FC;_.tN=mF+'AddRemoveIdentitiesWidget';_.tI=78;_.a=null;_.c=null;_.d=null;_.e=null;function yE(a){a.d=eA(new iz());}
function zE(a,b){yE(a);a.e=Db(new yb(),(Fb(),dc),b);DE(a);return a;}
function AE(e){var a,b,c,d;b='';a=fA(new iz(),e.d);for(d=Fz(kA(a));xz(d);){c=yz(d);b+=c.A()+''+c.C();if(xz(d)){b+='&';}}return b;}
function CE(a){return ac(a.e,AE(a),a);}
function DE(a){bc(a.e,'Content-Type','application/x-www-form-urlencoded');}
function EE(b,a){Bg('Exception: '+a.b);}
function xE(){}
_=xE.prototype=new wu();_.kb=EE;_.tN=nF+'AsynchronousAgent';_.tI=0;_.e=null;function bD(a){a.c=tB(new sB());a.a=tB(new sB());a.b=tB(new sB());}
function cD(a,b){zE(a,b);bD(a);return a;}
function eD(d,c,a){var b;b=c.z(a);return de(b.bb(0),16);}
function fD(c){var a,b;a=Ed('[Ljava.lang.String;',[0],[1],[c.a.a.b],null);for(b=0;b<c.a.a.b;b++){a[b]=de(wB(c.a,b),1);}return a;}
function gD(c){var a,b;b=Ed('[Ljava.lang.String;',[0],[1],[c.b.a.b],null);for(a=0;a<c.b.a.b;a++){b[a]=de(wB(c.b,a),1);}return b;}
function hD(b){var a,c;c=Ed('[Ljava.lang.String;',[0],[1],[b.c.a.b],null);for(a=0;a<b.c.a.b;a++){c[a]=de(wB(b.c,a),1);}return c;}
function iD(d,e){var a,b,c,f,g,h,i,j;h=Ap(tb(e)).w();j=eD(this,h,'users');i=j.z('user');for(c=0;c<i.B();c++){uB(this.c,de(i.bb(c),16).v('id'));}b=eD(this,h,'groups');a=b.z('group');for(c=0;c<a.B();c++){uB(this.a,de(a.bb(c),16).v('id'));}g=eD(this,h,'rights');f=g.z('right');for(c=0;c<f.B();c++){uB(this.b,de(f.bb(c),16).v('id'));}}
function aD(){}
_=aD.prototype=new xE();_.mb=iD;_.tN=mF+'AsynchronousIdentitiesAndRightsGetter';_.tI=0;function kD(a){a.c=tB(new sB());a.a=tB(new sB());}
function lD(a,b){zE(a,b);kD(a);return a;}
function nD(d,c,a){var b;b=c.z(a);if(b.B()>0){return de(b.bb(0),16);}else{return null;}}
function oD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[27],[c.a.a.b],null);for(a=0;a<b.a;a++){b[a]=de(wB(c.a,a),27);}return b;}
function pD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[26],[c.c.a.b],null);for(a=0;a<b.a;a++){b[a]=de(wB(c.c,a),26);}return b;}
function qD(e,f){var a,b,c,d,g,h,i,j,k,l,m,n;j=Ap(tb(f)).w();k=j.v('use-inherited-policies');if(k===null){this.b=true;}else{if(lv(k,'false')){this.b=false;}else{this.b=true;}}n=nD(this,j,'world');m=j.z('user');for(c=0;c<m.B();c++){l=de(m.bb(c),16);h=l.z('right');i=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[28],[h.B()],null);for(d=0;d<i.a;d++){g=de(h.bb(d),16);i[d]=sE(new rE(),g.v('id'),true);}uB(this.c,vE(new uE(),l.v('id'),i));}b=j.z('group');for(c=0;c<b.B();c++){a=de(b.bb(c),16);h=a.z('right');i=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[28],[h.B()],null);for(d=0;d<i.a;d++){g=de(h.bb(d),16);i[d]=sE(new rE(),g.v('id'),true);}uB(this.a,yD(new xD(),a.v('id'),i));}}
function jD(){}
_=jD.prototype=new xE();_.mb=qD;_.tN=mF+'AsynchronousPolicyGetter';_.tI=0;_.b=true;function sD(a,b){Bg('Save policy to: '+b);a.a=Db(new yb(),(Fb(),ec),b);return a;}
function uD(f,h,b,g){var a,c,d,e;a=bv(new Fu(),'<?xml version="1.0"?>');dv(a,'<policy xmlns="http://www.wyona.org/security/1.0" use-inherited-policies="'+g+'">');if(h!==null){for(c=0;c<h.a;c++){dv(a,'<user id="'+h[c].a+'">');e=h[c].b;if(e!==null){for(d=0;d<e.a;d++){dv(a,'<right id="'+e[d].a+'" permission="'+e[d].b+'">'+e[d].a+'<\/right>');}}else{dv(a,'<right id="r" permission="false">r<\/right>');dv(a,'<right id="w" permission="false">w<\/right>');}dv(a,'<\/user>');}}if(b!==null){for(c=0;c<b.a;c++){dv(a,'<group id="'+b[c].a+'">');e=b[c].b;if(e!==null){for(d=0;d<e.a;d++){dv(a,'<right id="'+e[d].a+'" permission="'+e[d].b+'">'+e[d].a+'<\/right>');}}else{dv(a,'<right id="r" permission="false">r<\/right>');dv(a,'<right id="w" permission="false">w<\/right>');}dv(a,'<\/group>');}}dv(a,'<\/policy>');return ac(f.a,hv(a),f);}
function vD(b,a){Bg('Exception: '+a.b);}
function wD(a,b){if(sb(b)==200){Bg('Policy has been saved successfully!');}else{Bg('Policy has NOT been saved! Please check log files on server.');}}
function rD(){}
_=rD.prototype=new wu();_.kb=vD;_.mb=wD;_.tN=mF+'AsynchronousPolicySetter';_.tI=0;_.a=null;function yD(c,a,b){c.a=a;c.b=b;return c;}
function xD(){}
_=xD.prototype=new wu();_.tN=mF+'Group';_.tI=79;_.a=null;_.b=null;function BD(a){a.b=xn(new vn());}
function CD(b,d,c,a){BD(b);Cj(b,b.b);yn(b.b,kl(new il(),'Identities'));b.a=wl(new ol(),true);b.a.l(b);ED(b,d,c,a);yn(b.b,b.a);return b;}
function ED(c,e,d,a){var b;Al(c.a);em(c.a,e);if(d!==null){for(b=0;b<d.a;b++){xl(c.a,'u: '+d[b]);}}else{xl(c.a,'No users yet!');}if(a!==null){for(b=0;b<a.a;b++){xl(c.a,'g: '+a[b]);}}else{xl(c.a,'No groups yet!');}}
function FD(a){}
function AD(){}
_=AD.prototype=new Aj();_.ib=FD;_.tN=mF+'IdentitiesListBoxWidget';_.tI=80;_.a=null;function bE(a){a.f=xn(new vn());}
function cE(b,e,d,a,c){bE(b);Cj(b,b.f);yn(b.f,kl(new il(),'Policy'));b.d=ej(new bj(),'Inherit rights from parent policies');nE(b,c);yn(b.f,b.d);b.c=wl(new ol(),true);b.c.l(b);mE(b,e,d,a);yn(b.f,b.c);b.e=ej(new bj(),'Read');b.e.l(b);yn(b.f,b.e);b.g=ej(new bj(),'Write');b.g.l(b);yn(b.f,b.g);return b;}
function dE(g,a,f){var b,c,d,e;e=tB(new sB());for(c=0;c<a.a;c++){if(a[c].b){uB(e,a[c].a);}}b=false;for(c=0;c<a.a;c++){if(lv(a[c].a,f)&&a[c].b){b=true;break;}}if(!b)uB(e,f);d=Ed('[Ljava.lang.String;',[0],[1],[e.a.b],null);for(c=0;c<d.a;c++){d[c]=de(wB(e,c),1);}return d;}
function fE(g){var a,b,c,d,e,f;b=tB(new sB());for(c=0;c<Cl(g.c);c++){e=Dl(g.c,c);f=hE(g,e);d=gE(g,c);if(qv(d,'g:')){uB(b,yD(new xD(),tv(rv(d,2)),f));}}a=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[27],[b.a.b],null);for(c=0;c<a.a;c++){a[c]=de(wB(b,c),27);}return a;}
function gE(b,a){return Fl(b.c,a);}
function hE(f,b){var a,c,d,e;if(mv(b,'(')>0){d=ov(sv(b,mv(b,'(')+1,mv(b,')')),',');e=tB(new sB());for(a=0;a<d.a;a++){if(!lv(d[a],'-')){uB(e,sE(new rE(),d[a],true));}else{if(a==0){uB(e,sE(new rE(),'r',false));}else if(a==1){uB(e,sE(new rE(),'w',false));}else{uB(e,sE(new rE(),'TODO',false));}}}c=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[28],[e.a.b],null);for(a=0;a<c.a;a++){c[a]=de(wB(e,a),28);}return c;}else{return Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[28],[0],null);}}
function iE(b){var a;a=El(b.c);if(a>=0){return Dl(b.c,a);}return null;}
function jE(a){return gj(a.d);}
function kE(e){var a,b,c,d,f,g;g=tB(new sB());for(a=0;a<Cl(e.c);a++){c=Dl(e.c,a);d=hE(e,c);b=gE(e,a);if(qv(b,'u:')){uB(g,vE(new uE(),tv(rv(b,2)),d));}}f=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[26],[g.a.b],null);for(a=0;a<f.a;a++){f[a]=de(wB(g,a),26);}return f;}
function lE(f,a,e){var b,c,d;d=tB(new sB());for(b=0;b<a.a;b++){if(!lv(a[b].a,e)&&a[b].b){uB(d,a[b].a);}}c=Ed('[Ljava.lang.String;',[0],[1],[d.a.b],null);for(b=0;b<c.a;b++){c[b]=de(wB(d,b),1);}return c;}
function mE(g,j,h,a){var b,c,d,e,f,i,k;Al(g.c);em(g.c,j);if(h!==null||a!==null){if(h!==null){for(b=0;b<h.a;b++){d='u: (';f=h[b].b;e=false;for(c=0;c<f.a;c++){if(lv(f[c].a,g.a)){e=true;break;}}if(e){d=d+g.a;}else{d=d+'-';}d=d+',';k=false;for(c=0;c<f.a;c++){if(lv(f[c].a,g.b)){k=true;break;}}if(k){d=d+g.b;}else{d=d+'-';}d=d+') '+h[b].a;i='u: '+h[b].a;yl(g.c,d,i);}}if(a!==null){for(b=0;b<a.a;b++){d='g: (';f=a[b].b;e=false;for(c=0;c<f.a;c++){if(lv(f[c].a,g.a)){e=true;break;}}if(e){d=d+g.a;}else{d=d+'-';}d=d+',';k=false;for(c=0;c<f.a;c++){if(lv(f[c].a,g.b)){k=true;break;}}if(k){d=d+g.b;}else{d=d+'-';}d=d+') '+a[b].a;i='g: '+a[b].a;yl(g.c,d,i);}}else{Bg('No groups!');}}else{xl(g.c,'No identities yet!');}}
function nE(a,b){if(a.d!==null){hj(a.d,b);}}
function oE(g,h,a,e,b){var c,d,f,i;f=bv(new Fu(),h+':');dv(f,' (');d=false;i=false;for(c=0;c<e.a;c++){if(lv(e[c],g.a)){d=true;}if(lv(e[c],g.b)){i=true;}}if(d){dv(f,g.a);}else{dv(f,'-');}dv(f,',');if(i){dv(f,g.b);}else{dv(f,'-');}dv(f,')');dv(f,' '+a);dm(g.c,b,hv(f));}
function pE(d,c){var a,b;b=El(d.c);if(b>=0){a=gE(d,b);oE(d,sv(a,0,1),tv(rv(a,2)),c,b);}else{Bg('Exception: No list item selected!');}}
function qE(h){var a,b,c,d,e,f,g;if(h===this.e||h===this.g){g=iE(this);if(g!==null){if(h===this.e){a=hE(this,g);if(gj(this.e)){Bg('Add Read right of selected identity '+g+' to policy');e=dE(this,a,this.a);}else{Bg('Remove Read right of selected identity '+g+' from policy');e=lE(this,a,this.a);}pE(this,e);}else if(h===this.g){a=hE(this,g);if(gj(this.g)){Bg('Add Write right of selected identity '+g+' to policy');e=dE(this,a,this.b);}else{Bg('Remove Write right of selected identity '+g+' from policy');e=lE(this,a,this.b);}pE(this,e);}}else{Bg('No identity has been selected! Please select an identity in order to assign rights.');hj(this.e,false);hj(this.g,false);}}else if(h===this.c){g=iE(this);f=hE(this,g);b=false;c=false;for(d=0;d<f.a;d++){if(lv(f[d].a,this.a)&&f[d].b){hj(this.e,true);b=true;}else if(lv(f[d].a,this.b)&&f[d].b){hj(this.g,true);c=true;}}if(!b)hj(this.e,false);if(!c)hj(this.g,false);}}
function aE(){}
_=aE.prototype=new Aj();_.ib=qE;_.tN=mF+'PolicyListBoxWidget';_.tI=81;_.a='r';_.b='w';_.c=null;_.d=null;_.e=null;_.g=null;function sE(c,a,b){c.a=a;c.b=b;return c;}
function rE(){}
_=rE.prototype=new wu();_.tN=mF+'Right';_.tI=82;_.a=null;_.b=false;function vE(c,a,b){c.a=a;c.b=b;return c;}
function uE(){}
_=uE.prototype=new wu();_.tN=mF+'User';_.tI=83;_.a=null;_.b=null;function et(){zC(new aC());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{et();}catch(a){b(d);}else{et();}}
var he=[{},{},{1:1},{4:1},{4:1,25:1},{4:1,25:1},{4:1,18:1,25:1},{2:1},{6:1},{6:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{3:1},{2:1,5:1},{2:1},{7:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{20:1},{20:1},{20:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{9:1,10:1,11:1,12:1,13:1,14:1},{7:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{4:1,25:1},{15:1},{15:1},{15:1},{15:1},{15:1},{15:1},{15:1},{4:1,25:1},{15:1},{15:1,17:1},{15:1,16:1},{15:1},{15:1},{15:1},{4:1,25:1},{19:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{21:1},{22:1},{22:1},{21:1},{23:1},{22:1},{22:1},{4:1,24:1,25:1},{4:1,25:1},{20:1},{8:1},{8:1},{8:1},{6:1},{6:1},{8:1,11:1,12:1,13:1,14:1},{27:1},{8:1,11:1,12:1,13:1,14:1},{8:1,11:1,12:1,13:1,14:1},{28:1},{26:1}];if (org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor) {  var __gwt_initHandlers = org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.__gwt_initHandlers;  org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.onScriptLoad(gwtOnLoad);}})();