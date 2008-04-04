(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,hF='com.google.gwt.core.client.',iF='com.google.gwt.http.client.',jF='com.google.gwt.i18n.client.',kF='com.google.gwt.lang.',lF='com.google.gwt.user.client.',mF='com.google.gwt.user.client.impl.',nF='com.google.gwt.user.client.ui.',oF='com.google.gwt.user.client.ui.impl.',pF='com.google.gwt.xml.client.',qF='com.google.gwt.xml.client.impl.',rF='java.io.',sF='java.lang.',tF='java.util.',uF='org.wyona.security.gwt.accesspolicyeditor.client.',vF='org.wyona.yanel.gwt.client.';function cC(){}
function xu(a){return this===a;}
function yu(){return cw(this);}
function zu(){return this.tN+'@'+this.hC();}
function vu(){}
_=vu.prototype={};_.eQ=xu;_.hC=yu;_.tS=zu;_.toString=function(){return this.tS();};_.tN=sF+'Object';_.tI=1;function w(a){return a==null?null:a.tN;}
var y=null;function B(a){return a==null?0:a.$H?a.$H:(a.$H=D());}
function C(a){return a==null?0:a.$H?a.$H:(a.$H=D());}
function D(){return ++E;}
var E=0;function ew(b,a){b.b=a;return b;}
function gw(b,a){if(b.a!==null){throw bu(new au(),"Can't overwrite cause");}if(a===b){throw Et(new Dt(),'Self-causation not permitted');}b.a=a;return b;}
function hw(a){iw(a,(aw(),bw));}
function iw(e,d){var a,b,c;c=Fu(new Eu());b=e;while(b!==null){a=b.b;if(b!==e){cv(c,'Caused by: ');}cv(c,b.tN);cv(c,': ');cv(c,a===null?'(No exception detail)':a);cv(c,'\n');b=b.a;}}
function jw(){var a,b;a=w(this);b=this.b;if(b!==null){return a+': '+b;}else{return a;}}
function dw(){}
_=dw.prototype=new vu();_.tS=jw;_.tN=sF+'Throwable';_.tI=3;_.a=null;_.b=null;function Bt(b,a){ew(b,a);return b;}
function At(){}
_=At.prototype=new dw();_.tN=sF+'Exception';_.tI=4;function Bu(b,a){Bt(b,a);return b;}
function Au(){}
_=Au.prototype=new At();_.tN=sF+'RuntimeException';_.tI=5;function ab(c,b,a){Bu(c,'JavaScript '+b+' exception: '+a);return c;}
function F(){}
_=F.prototype=new Au();_.tN=hF+'JavaScriptException';_.tI=6;function eb(b,a){if(!ee(a,2)){return false;}return jb(b,de(a,2));}
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
_=cb.prototype=new vu();_.eQ=kb;_.hC=lb;_.tS=nb;_.tN=hF+'JavaScriptObject';_.tI=7;function rc(b,d,c,a){if(d===null){throw new ou();}if(a===null){throw new ou();}if(c<0){throw new Dt();}b.a=c;b.c=d;if(c>0){b.b=vb(new ub(),b,a);qg(b.b,c);}else{b.b=null;}return b;}
function tc(a){var b;if(a.c!==null){b=a.c;a.c=null;dd(b);sc(a);}}
function sc(a){if(a.b!==null){mg(a.b);}}
function vc(e,a){var b,c,d,f;if(e.c===null){return;}sc(e);f=e.c;e.c=null;b=ed(f);if(b!==null){c=Bu(new Au(),b);a.kb(e,c);}else{d=yc(f);a.mb(e,d);}}
function wc(b,a){if(b.c===null){return;}tc(b);a.kb(b,oc(new nc(),b,b.a));}
function xc(b){var a;if(b.c===null){return false;}a=fd(b.c);switch(a){case 1:case 2:case 3:return true;}return false;}
function yc(b){var a;a=qb(new pb(),b);return a;}
function zc(a){var b;b=y;{vc(this,a);}}
function ob(){}
_=ob.prototype=new vu();_.s=zc;_.tN=iF+'Request';_.tI=0;_.a=0;_.b=null;_.c=null;function Ac(){}
_=Ac.prototype=new vu();_.tN=iF+'Response';_.tI=0;function qb(a,b){a.a=b;return a;}
function sb(a){return hd(a.a);}
function tb(a){return gd(a.a);}
function pb(){}
_=pb.prototype=new Ac();_.tN=iF+'Request$1';_.tI=0;function ng(){ng=cC;xg=ty(new ry());{wg();}}
function lg(a){ng();return a;}
function mg(a){if(a.d){rg(a.e);}else{sg(a.e);}Dy(xg,a);}
function og(a){if(!a.d){Dy(xg,a);}a.ub();}
function qg(b,a){if(a<=0){throw Et(new Dt(),'must be positive');}mg(b);b.d=false;b.e=ug(b,a);vy(xg,b);}
function pg(b,a){if(a<=0){throw Et(new Dt(),'must be positive');}mg(b);b.d=true;b.e=tg(b,a);vy(xg,b);}
function rg(a){ng();$wnd.clearInterval(a);}
function sg(a){ng();$wnd.clearTimeout(a);}
function tg(b,a){ng();return $wnd.setInterval(function(){b.t();},a);}
function ug(b,a){ng();return $wnd.setTimeout(function(){b.t();},a);}
function vg(){var a;a=y;{og(this);}}
function wg(){ng();Bg(new hg());}
function gg(){}
_=gg.prototype=new vu();_.t=vg;_.tN=lF+'Timer';_.tI=8;_.d=false;_.e=0;var xg;function wb(){wb=cC;ng();}
function vb(b,a,c){wb();b.a=a;b.b=c;lg(b);return b;}
function xb(){wc(this.a,this.b);}
function ub(){}
_=ub.prototype=new gg();_.ub=xb;_.tN=iF+'Request$2';_.tI=9;function Fb(){Fb=cC;dc=Ab(new zb(),'GET');ec=Ab(new zb(),'POST');fc=ni(new mi());}
function Db(b,a,c){Fb();Eb(b,a===null?null:a.a,c);return b;}
function Eb(b,a,c){Fb();Ec('httpMethod',a);Ec('url',c);b.b=a;b.d=c;return b;}
function ac(g,d,a){var b,c,e,f,h;h=pi(fc);{b=id(h,g.b,g.d,true);}if(b!==null){e=lc(new kc(),g.d);gw(e,ic(new hc(),b));throw e;}cc(g,h);c=rc(new ob(),h,g.c,a);f=jd(h,c,d,a);if(f!==null){throw ic(new hc(),f);}return c;}
function bc(b,a,c){Ec('header',a);Ec('value',c);if(b.a===null){b.a=hA(new lz());}qA(b.a,a,c);}
function cc(e,f){var a,b,c,d;if(e.a!==null&&e.a.c>0){a=nA(e.a);d=cA(a);while(Az(d)){c=Bz(d);b=kd(f,de(c.A(),1),de(c.C(),1));if(b!==null){throw ic(new hc(),b);}}}else{kd(f,'Content-Type','text/plain; charset=utf-8');}}
function yb(){}
_=yb.prototype=new vu();_.tN=iF+'RequestBuilder';_.tI=0;_.a=null;_.b=null;_.c=0;_.d=null;var dc,ec,fc;function Ab(b,a){b.a=a;return b;}
function Cb(){return this.a;}
function zb(){}
_=zb.prototype=new vu();_.tS=Cb;_.tN=iF+'RequestBuilder$Method';_.tI=0;_.a=null;function ic(b,a){Bt(b,a);return b;}
function hc(){}
_=hc.prototype=new At();_.tN=iF+'RequestException';_.tI=10;function lc(a,b){ic(a,'The URL '+b+' is invalid or violates the same-origin security restriction');return a;}
function kc(){}
_=kc.prototype=new hc();_.tN=iF+'RequestPermissionException';_.tI=11;function oc(b,a,c){ic(b,qc(c));return b;}
function qc(a){return 'A request timeout has expired after '+iu(a)+' ms';}
function nc(){}
_=nc.prototype=new hc();_.tN=iF+'RequestTimeoutException';_.tI=12;function Ec(a,b){Fc(a,b);if(0==ov(vv(b))){throw Et(new Dt(),a+' can not be empty');}}
function Fc(a,b){if(null===b){throw pu(new ou(),a+' can not be null');}}
function dd(a){a.onreadystatechange=ri;a.abort();}
function ed(b){try{if(b.status===undefined){return 'XmlHttpRequest.status == undefined, please see Safari bug '+'http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';}return null;}catch(a){return 'Unable to read XmlHttpRequest.status; likely causes are a '+'networking error or bad cross-domain request. Please see '+'https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more '+'details';}}
function fd(a){return a.readyState;}
function gd(a){return a.responseText;}
function hd(a){return a.status;}
function id(e,c,d,b){try{e.open(c,d,b);return null;}catch(a){return a.message||a.toString();}}
function jd(e,c,d,b){e.onreadystatechange=function(){if(e.readyState==cd){e.onreadystatechange=ri;c.s(b);}};try{e.send(d);return null;}catch(a){e.onreadystatechange=ri;return a.message||a.toString();}}
function kd(d,b,c){try{d.setRequestHeader(b,c);return null;}catch(a){return a.message||a.toString();}}
var cd=4;function pd(){pd=cC;sd=hA(new lz());}
function md(b,a){pd();if(a===null||lv('',a)){throw Et(new Dt(),'Cannot create a Dictionary with a null or empty name');}b.b='Dictionary '+a;od(b,a);if(b.a===null){throw pB(new oB(),"Cannot find JavaScript object with the name '"+a+"'",a,null);}return b;}
function nd(b,a){for(x in b.a){a.m(x);}}
function od(c,b){try{if(typeof $wnd[b]!='object'){ud(b);}c.a=$wnd[b];}catch(a){ud(b);}}
function qd(b,a){var c=b.a[a];if(c==null|| !Object.prototype.hasOwnProperty.call(b.a,a)){b.tb(a);}return String(c);}
function rd(b){var a;a=dB(new cB());nd(b,a);return a;}
function td(a){pd();var b;b=de(oA(sd,a),3);if(b===null){b=md(new ld(),a);qA(sd,a,b);}return b;}
function vd(b){var a,c;c=rd(this);a="Cannot find '"+b+"' in "+this;if(c.a.c<20){a+='\n keys found: '+c;}throw pB(new oB(),a,this.b,b);}
function ud(a){pd();throw pB(new oB(),"'"+a+"' is not a JavaScript object and cannot be used as a Dictionary",null,a);}
function wd(){return this.b;}
function ld(){}
_=ld.prototype=new vu();_.tb=vd;_.tS=wd;_.tN=jF+'Dictionary';_.tI=13;_.a=null;_.b=null;var sd;function yd(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function Ad(a,b,c){return a[b]=c;}
function Bd(b,a){return b[a];}
function Cd(a){return a.length;}
function Ed(e,d,c,b,a){return Dd(e,d,c,b,0,Cd(b),a);}
function Dd(j,i,g,c,e,a,b){var d,f,h;if((f=Bd(c,e))<0){throw new mu();}h=yd(new xd(),f,Bd(i,e),Bd(g,e),j);++e;if(e<a){j=tv(j,1);for(d=0;d<f;++d){Ad(h,d,Dd(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){Ad(h,d,b);}}return h;}
function Fd(a,b,c){if(c!==null&&a.b!=0&& !ee(c,a.b)){throw new kt();}return Ad(a,b,c);}
function xd(){}
_=xd.prototype=new vu();_.tN=kF+'Array';_.tI=0;function ce(b,a){return !(!(b&&he[b][a]));}
function de(b,a){if(b!=null)ce(b.tI,a)||ge();return b;}
function ee(b,a){return b!=null&&ce(b.tI,a);}
function ge(){throw new wt();}
function fe(a){if(a!==null){throw new wt();}return a;}
function ie(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var he;function le(a){if(ee(a,4)){return a;}return ab(new F(),ne(a),me(a));}
function me(a){return a.message;}
function ne(a){return a.name;}
function pe(){pe=cC;qf=ty(new ry());{lf=new hh();lh(lf);}}
function qe(b,a){pe();wh(lf,b,a);}
function re(a,b){pe();return jh(lf,a,b);}
function se(){pe();return yh(lf,'button');}
function te(){pe();return yh(lf,'div');}
function ue(){pe();return zh(lf,'checkbox');}
function ve(){pe();return zh(lf,'text');}
function we(){pe();return yh(lf,'label');}
function xe(a){pe();return Ah(lf,a);}
function ye(){pe();return yh(lf,'span');}
function ze(){pe();return yh(lf,'tbody');}
function Ae(){pe();return yh(lf,'td');}
function Be(){pe();return yh(lf,'tr');}
function Ce(){pe();return yh(lf,'table');}
function Fe(b,a,d){pe();var c;c=y;{Ee(b,a,d);}}
function Ee(b,a,c){pe();var d;if(a===pf){if(bf(b)==8192){pf=null;}}d=De;De=b;try{c.hb(b);}finally{De=d;}}
function af(b,a){pe();Bh(lf,b,a);}
function bf(a){pe();return Ch(lf,a);}
function cf(a){pe();rh(lf,a);}
function df(a){pe();return sh(lf,a);}
function ef(a){pe();return Dh(lf,a);}
function hf(a,b){pe();return ai(lf,a,b);}
function ff(a,b){pe();return Eh(lf,a,b);}
function gf(a,b){pe();return Fh(lf,a,b);}
function jf(a){pe();return bi(lf,a);}
function kf(a){pe();return th(lf,a);}
function mf(c,b,d,a){pe();ci(lf,c,b,d,a);}
function nf(a){pe();var b,c;c=true;if(qf.b>0){b=fe(zy(qf,qf.b-1));if(!(c=null.Ab())){af(a,true);cf(a);}}return c;}
function of(b,a){pe();di(lf,b,a);}
function tf(a,b,c){pe();gi(lf,a,b,c);}
function rf(a,b,c){pe();ei(lf,a,b,c);}
function sf(a,b,c){pe();fi(lf,a,b,c);}
function uf(a,b){pe();hi(lf,a,b);}
function vf(a,b){pe();ii(lf,a,b);}
function wf(a,b){pe();ji(lf,a,b);}
function xf(b,c,a){pe();ki(lf,b,c,a);}
function yf(b,a,c){pe();li(lf,b,a,c);}
function zf(a,b){pe();nh(lf,a,b);}
function Af(a){pe();return oh(lf,a);}
var De=null,lf=null,pf=null,qf;function Df(a){if(ee(a,5)){return re(this,de(a,5));}return eb(ie(this,Bf),a);}
function Ef(){return fb(ie(this,Bf));}
function Ff(){return Af(this);}
function Bf(){}
_=Bf.prototype=new cb();_.eQ=Df;_.hC=Ef;_.tS=Ff;_.tN=lF+'Element';_.tI=14;function dg(a){return eb(ie(this,ag),a);}
function eg(){return fb(ie(this,ag));}
function fg(){return df(this);}
function ag(){}
_=ag.prototype=new cb();_.eQ=dg;_.hC=eg;_.tS=fg;_.tN=lF+'Event';_.tI=15;function jg(){while((ng(),xg).b>0){mg(de(zy((ng(),xg),0),6));}}
function kg(){return null;}
function hg(){}
_=hg.prototype=new vu();_.ob=jg;_.pb=kg;_.tN=lF+'Timer$1';_.tI=16;function Ag(){Ag=cC;Dg=ty(new ry());fh=ty(new ry());{bh();}}
function Bg(a){Ag();vy(Dg,a);}
function Cg(a){Ag();$wnd.alert(a);}
function Eg(){Ag();var a,b;for(a=Dg.cb();a.F();){b=de(a.eb(),7);b.ob();}}
function Fg(){Ag();var a,b,c,d;d=null;for(a=Dg.cb();a.F();){b=de(a.eb(),7);c=b.pb();{d=c;}}return d;}
function ah(){Ag();var a,b;for(a=fh.cb();a.F();){b=fe(a.eb());null.Ab();}}
function bh(){Ag();__gwt_initHandlers(function(){eh();},function(){return dh();},function(){ch();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ch(){Ag();var a;a=y;{Eg();}}
function dh(){Ag();var a;a=y;{return Fg();}}
function eh(){Ag();var a;a=y;{ah();}}
var Dg,fh;function wh(c,b,a){b.appendChild(a);}
function yh(b,a){return $doc.createElement(a);}
function zh(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function Ah(c,a){var b;b=yh(c,'select');if(a){ei(c,b,'multiple',true);}return b;}
function Bh(c,b,a){b.cancelBubble=a;}
function Ch(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function Dh(c,b){var a=$doc.getElementById(b);return a||null;}
function ai(d,a,b){var c=a[b];return c==null?null:String(c);}
function Eh(c,a,b){return !(!a[b]);}
function Fh(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function bi(b,a){return a.__eventBits||0;}
function ci(e,d,b,f,a){var c=new Option(b,f);if(a== -1||a>d.options.length-1){d.add(c,null);}else{d.add(c,d.options[a]);}}
function di(c,b,a){b.removeChild(a);}
function gi(c,a,b,d){a[b]=d;}
function ei(c,a,b,d){a[b]=d;}
function fi(c,a,b,d){a[b]=d;}
function hi(c,a,b){a.__listener=b;}
function ii(c,a,b){if(!b){b='';}a.innerHTML=b;}
function ji(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function ki(e,c,d,a){var b=c.options[a];b.text=d;}
function li(c,b,a,d){b.style[a]=d;}
function gh(){}
_=gh.prototype=new vu();_.tN=mF+'DOMImpl';_.tI=0;function rh(b,a){a.preventDefault();}
function sh(b,a){return a.toString();}
function th(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function uh(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){Fe(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!nf(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)Fe(b,a,c);};$wnd.__captureElem=null;}
function vh(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function ph(){}
_=ph.prototype=new gh();_.tN=mF+'DOMImplStandard';_.tI=0;function jh(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function lh(a){uh(a);kh(a);}
function kh(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function nh(c,b,a){vh(c,b,a);mh(c,b,a);}
function mh(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function oh(d,a){var b=a.cloneNode(true);var c=$doc.createElement('DIV');c.appendChild(b);outer=c.innerHTML;b.innerHTML='';return outer;}
function hh(){}
_=hh.prototype=new ph();_.tN=mF+'DOMImplMozilla';_.tI=0;function ni(a){ri=hb();return a;}
function pi(a){return qi(a);}
function qi(a){return new XMLHttpRequest();}
function mi(){}
_=mi.prototype=new vu();_.tN=mF+'HTTPRequestImpl';_.tI=0;var ri=null;function un(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function vn(b,a){if(b.j!==null){un(b,b.j,a);}b.j=a;}
function wn(b,a){zn(b.j,a);}
function xn(b,a){zf(b.w(),a|jf(b.w()));}
function yn(){return this.j;}
function zn(a,b){tf(a,'className',b);}
function An(){if(this.j===null){return '(null handle)';}return Af(this.j);}
function sn(){}
_=sn.prototype=new vu();_.w=yn;_.tS=An;_.tN=nF+'UIObject';_.tI=0;_.j=null;function wo(a){if(ee(a.i,10)){de(a.i,10).sb(a);}else if(a.i!==null){throw bu(new au(),"This widget's parent does not implement HasWidgets");}}
function xo(b,a){if(b.ab()){uf(b.w(),null);}vn(b,a);if(b.ab()){uf(a,b);}}
function yo(c,b){var a;a=c.i;if(b===null){if(a!==null&&a.ab()){c.jb();}c.i=null;}else{if(a!==null){throw bu(new au(),'Cannot set a new parent without first clearing the old parent');}c.i=b;if(b.ab()){c.gb();}}}
function zo(){}
function Ao(){}
function Bo(){return this.h;}
function Co(){if(this.ab()){throw bu(new au(),"Should only call onAttach when the widget is detached from the browser's document");}this.h=true;uf(this.w(),this);this.p();this.lb();}
function Do(a){}
function Eo(){if(!this.ab()){throw bu(new au(),"Should only call onDetach when the widget is attached to the browser's document");}try{this.nb();}finally{this.q();uf(this.w(),null);this.h=false;}}
function Fo(){}
function ap(){}
function bp(a){xo(this,a);}
function co(){}
_=co.prototype=new sn();_.p=zo;_.q=Ao;_.ab=Bo;_.gb=Co;_.hb=Do;_.jb=Eo;_.lb=Fo;_.nb=ap;_.vb=bp;_.tN=nF+'Widget';_.tI=17;_.h=false;_.i=null;function pm(b,a){yo(a,b);}
function rm(b,a){yo(a,null);}
function sm(){var a,b;for(b=this.cb();io(b);){a=jo(b);a.gb();}}
function tm(){var a,b;for(b=this.cb();io(b);){a=jo(b);a.jb();}}
function um(){}
function vm(){}
function om(){}
_=om.prototype=new co();_.p=sm;_.q=tm;_.lb=um;_.nb=vm;_.tN=nF+'Panel';_.tI=18;function Aj(a){a.f=no(new eo(),a);}
function Bj(a){Aj(a);return a;}
function Cj(c,a,b){wo(a);oo(c.f,a);qe(b,a.w());pm(c,a);}
function Ej(b,c){var a;if(c.i!==b){return false;}rm(b,c);a=c.w();of(kf(a),a);uo(b.f,c);return true;}
function Fj(){return so(this.f);}
function ak(a){return Ej(this,a);}
function zj(){}
_=zj.prototype=new om();_.cb=Fj;_.sb=ak;_.tN=nF+'ComplexPanel';_.tI=19;function ti(a){Bj(a);a.vb(te());yf(a.w(),'position','relative');yf(a.w(),'overflow','hidden');return a;}
function ui(a,b){Cj(a,b,a.w());}
function wi(a){yf(a,'left','');yf(a,'top','');yf(a,'position','');}
function xi(b){var a;a=Ej(this,b);if(a){wi(b.w());}return a;}
function si(){}
_=si.prototype=new zj();_.sb=xi;_.tN=nF+'AbsolutePanel';_.tI=20;function ok(){ok=cC;ep(),gp;}
function nk(b,a){ep(),gp;qk(b,a);return b;}
function pk(b,a){switch(bf(a)){case 1:if(b.c!==null){xj(b.c,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function qk(b,a){xo(b,a);xn(b,7041);}
function rk(a){if(this.c===null){this.c=vj(new uj());}vy(this.c,a);}
function sk(a){pk(this,a);}
function tk(a){qk(this,a);}
function mk(){}
_=mk.prototype=new co();_.k=rk;_.hb=sk;_.vb=tk;_.tN=nF+'FocusWidget';_.tI=21;_.c=null;function Bi(){Bi=cC;ep(),gp;}
function Ai(b,a){ep(),gp;nk(b,a);return b;}
function Ci(a){vf(this.w(),a);}
function zi(){}
_=zi.prototype=new mk();_.wb=Ci;_.tN=nF+'ButtonBase';_.tI=22;function aj(){aj=cC;ep(),gp;}
function Di(a){ep(),gp;Ai(a,se());bj(a.w());wn(a,'gwt-Button');return a;}
function Ei(b,a){ep(),gp;Di(b);b.wb(a);return b;}
function Fi(c,a,b){ep(),gp;Ei(c,a);c.k(b);return c;}
function bj(b){aj();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function yi(){}
_=yi.prototype=new zi();_.tN=nF+'Button';_.tI=23;function dj(a){Bj(a);a.e=Ce();a.d=ze();qe(a.e,a.d);a.vb(a.e);return a;}
function fj(c,b,a){tf(b,'align',a.a);}
function gj(c,b,a){yf(b,'verticalAlign',a.a);}
function cj(){}
_=cj.prototype=new zj();_.tN=nF+'CellPanel';_.tI=24;_.d=null;_.e=null;function lj(){lj=cC;ep(),gp;}
function ij(a){ep(),gp;jj(a,ue());wn(a,'gwt-CheckBox');return a;}
function kj(b,a){ep(),gp;ij(b);pj(b,a);return b;}
function jj(b,a){var c;ep(),gp;Ai(b,ye());b.a=a;b.b=we();zf(b.a,jf(b.w()));zf(b.w(),0);qe(b.w(),b.a);qe(b.w(),b.b);c='check'+ ++tj;tf(b.a,'id',c);tf(b.b,'htmlFor',c);return b;}
function mj(b){var a;a=b.ab()?'checked':'defaultChecked';return ff(b.a,a);}
function nj(b,a){rf(b.a,'checked',a);rf(b.a,'defaultChecked',a);}
function oj(b,a){tf(b.a,'name',a);}
function pj(b,a){wf(b.b,a);}
function qj(){uf(this.a,this);}
function rj(){uf(this.a,null);nj(this,mj(this));}
function sj(a){vf(this.b,a);}
function hj(){}
_=hj.prototype=new zi();_.lb=qj;_.nb=rj;_.wb=sj;_.tN=nF+'CheckBox';_.tI=25;_.a=null;_.b=null;var tj=0;function ow(d,a,b){var c;while(a.F()){c=a.eb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function qw(a){throw lw(new kw(),'add');}
function rw(b){var a;a=ow(this,this.cb(),b);return a!==null;}
function sw(){var a,b,c;c=Fu(new Eu());a=null;cv(c,'[');b=this.cb();while(b.F()){if(a!==null){cv(c,a);}else{a=', ';}cv(c,Ev(b.eb()));}cv(c,']');return gv(c);}
function nw(){}
_=nw.prototype=new vu();_.m=qw;_.o=rw;_.tS=sw;_.tN=tF+'AbstractCollection';_.tI=0;function Cw(b,a){throw eu(new du(),'Index: '+a+', Size: '+b.b);}
function Dw(b,a){throw lw(new kw(),'add');}
function Ew(a){this.l(this.yb(),a);return true;}
function Fw(e){var a,b,c,d,f;if(e===this){return true;}if(!ee(e,30)){return false;}f=de(e,30);if(this.yb()!=f.yb()){return false;}c=this.cb();d=f.cb();while(c.F()){a=c.eb();b=d.eb();if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function ax(){var a,b,c,d;c=1;a=31;b=this.cb();while(b.F()){d=b.eb();c=31*c+(d===null?0:d.hC());}return c;}
function bx(){return vw(new uw(),this);}
function cx(a){throw lw(new kw(),'remove');}
function tw(){}
_=tw.prototype=new nw();_.l=Dw;_.m=Ew;_.eQ=Fw;_.hC=ax;_.cb=bx;_.rb=cx;_.tN=tF+'AbstractList';_.tI=26;function sy(a){{wy(a);}}
function ty(a){sy(a);return a;}
function uy(c,a,b){if(a<0||a>c.b){Cw(c,a);}Ey(c.a,a,b);++c.b;}
function vy(b,a){hz(b.a,b.b++,a);return true;}
function wy(a){a.a=gb();a.b=0;}
function yy(b,a){return Ay(b,a)!=(-1);}
function zy(b,a){if(a<0||a>=b.b){Cw(b,a);}return dz(b.a,a);}
function Ay(b,a){return By(b,a,0);}
function By(c,b,a){if(a<0){Cw(c,a);}for(;a<c.b;++a){if(cz(b,dz(c.a,a))){return a;}}return (-1);}
function Cy(c,a){var b;b=zy(c,a);fz(c.a,a,1);--c.b;return b;}
function Dy(c,b){var a;a=Ay(c,b);if(a==(-1)){return false;}Cy(c,a);return true;}
function Fy(a,b){uy(this,a,b);}
function az(a){return vy(this,a);}
function Ey(a,b,c){a.splice(b,0,c);}
function bz(a){return yy(this,a);}
function cz(a,b){return a===b||a!==null&&a.eQ(b);}
function ez(a){return zy(this,a);}
function dz(a,b){return a[b];}
function gz(a){return Cy(this,a);}
function fz(a,c,b){a.splice(c,b);}
function hz(a,b,c){a[b]=c;}
function iz(){return this.b;}
function ry(){}
_=ry.prototype=new tw();_.l=Fy;_.m=az;_.o=bz;_.D=ez;_.rb=gz;_.yb=iz;_.tN=tF+'ArrayList';_.tI=27;_.a=null;_.b=0;function vj(a){ty(a);return a;}
function xj(d,c){var a,b;for(a=d.cb();a.F();){b=de(a.eb(),8);b.ib(c);}}
function uj(){}
_=uj.prototype=new ry();_.tN=nF+'ClickListenerCollection';_.tI=28;function dk(a,b){if(a.g!==null){throw bu(new au(),'Composite.initWidget() may only be called once.');}wo(b);a.vb(b.w());a.g=b;yo(b,a);}
function ek(){if(this.g===null){throw bu(new au(),'initWidget() was never called in '+w(this));}return this.j;}
function fk(){if(this.g!==null){return this.g.ab();}return false;}
function gk(){this.g.gb();this.lb();}
function hk(){try{this.nb();}finally{this.g.jb();}}
function bk(){}
_=bk.prototype=new co();_.w=ek;_.ab=fk;_.gb=gk;_.jb=hk;_.tN=nF+'Composite';_.tI=29;_.g=null;function jk(a){Bj(a);a.vb(te());return a;}
function kk(a,b){Cj(a,b,a.w());}
function ik(){}
_=ik.prototype=new zj();_.tN=nF+'FlowPanel';_.tI=30;function Ak(){Ak=cC;yk(new xk(),'center');Bk=yk(new xk(),'left');yk(new xk(),'right');}
var Bk;function yk(b,a){b.a=a;return b;}
function xk(){}
_=xk.prototype=new vu();_.tN=nF+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=0;_.a=null;function bl(){bl=cC;Fk(new Ek(),'bottom');cl=Fk(new Ek(),'middle');dl=Fk(new Ek(),'top');}
var cl,dl;function Fk(a,b){a.a=b;return a;}
function Ek(){}
_=Ek.prototype=new vu();_.tN=nF+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=0;_.a=null;function hl(a){a.a=(Ak(),Bk);a.c=(bl(),dl);}
function il(a){dj(a);hl(a);a.b=Be();qe(a.d,a.b);tf(a.e,'cellSpacing','0');tf(a.e,'cellPadding','0');return a;}
function jl(b,c){var a;a=ll(b);qe(b.b,a);Cj(b,c,a);}
function ll(b){var a;a=Ae();fj(b,a,b.a);gj(b,a,b.c);return a;}
function ml(b,a){b.c=a;}
function nl(c){var a,b;b=kf(c.w());a=Ej(this,c);if(a){of(this.b,b);}return a;}
function gl(){}
_=gl.prototype=new cj();_.sb=nl;_.tN=nF+'HorizontalPanel';_.tI=31;_.b=null;function ql(a){a.vb(te());xn(a,131197);wn(a,'gwt-Label');return a;}
function rl(b,a){ql(b);tl(b,a);return b;}
function tl(b,a){wf(b.w(),a);}
function ul(a){switch(bf(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function pl(){}
_=pl.prototype=new co();_.hb=ul;_.tN=nF+'Label';_.tI=32;function cm(){cm=cC;ep(),gp;mm=new wl();}
function Dl(b,a){cm();nk(b,xe(a));xn(b,1024);wn(b,'gwt-ListBox');return b;}
function El(b,a){hm(b,a,(-1));}
function Fl(b,a,c){im(b,a,c,(-1));}
function am(b,a){if(a<0||a>=dm(b)){throw new du();}}
function bm(a){xl(mm,a.w());}
function dm(a){return zl(mm,a.w());}
function em(b,a){am(b,a);return Al(mm,b.w(),a);}
function fm(a){return gf(a.w(),'selectedIndex');}
function gm(b,a){am(b,a);return Bl(mm,b.w(),a);}
function hm(c,b,a){im(c,b,b,a);}
function im(c,b,d,a){mf(c.w(),b,d,a);}
function jm(b,a){am(b,a);Cl(mm,b.w(),a);}
function km(c,a,b){am(c,a);if(b===null){throw pu(new ou(),'Cannot set an option to have null text');}xf(c.w(),b,a);}
function lm(a,b){sf(a.w(),'size',b);}
function nm(a){if(bf(a)==1024){}else{pk(this,a);}}
function vl(){}
_=vl.prototype=new mk();_.hb=nm;_.tN=nF+'ListBox';_.tI=33;var mm;function xl(b,a){a.options.length=0;}
function zl(b,a){return a.options.length;}
function Al(c,b,a){return b.options[a].text;}
function Bl(c,b,a){return b.options[a].value;}
function Cl(c,b,a){b.options[a]=null;}
function wl(){}
_=wl.prototype=new vu();_.tN=nF+'ListBox$Impl';_.tI=0;function Cm(){Cm=cC;an=hA(new lz());}
function Bm(b,a){Cm();ti(b);if(a===null){a=Dm();}b.vb(a);b.gb();return b;}
function Em(c){Cm();var a,b;b=de(oA(an,c),9);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=ef(c))){return null;}}if(an.c==0){Fm();}qA(an,c,b=Bm(new wm(),a));return b;}
function Dm(){Cm();return $doc.body;}
function Fm(){Cm();Bg(new xm());}
function wm(){}
_=wm.prototype=new si();_.tN=nF+'RootPanel';_.tI=34;var an;function zm(){var a,b;for(b=wx(fy((Cm(),an)));Dx(b);){a=de(Ex(b),9);if(a.ab()){a.jb();}}}
function Am(){return null;}
function xm(){}
_=xm.prototype=new vu();_.ob=zm;_.pb=Am;_.tN=nF+'RootPanel$1';_.tI=35;function ln(){ln=cC;ep(),gp;}
function kn(b,a){ep(),gp;nk(b,a);xn(b,1024);return b;}
function mn(a){return hf(a.w(),'value');}
function nn(a){if(this.a===null){this.a=vj(new uj());}vy(this.a,a);}
function on(a){var b;pk(this,a);b=bf(a);if(b==1){if(this.a!==null){xj(this.a,this);}}else{}}
function jn(){}
_=jn.prototype=new mk();_.k=nn;_.hb=on;_.tN=nF+'TextBoxBase';_.tI=36;_.a=null;function qn(){qn=cC;ep(),gp;}
function pn(a){ep(),gp;kn(a,ve());wn(a,'gwt-TextBox');return a;}
function rn(b,a){sf(b.w(),'size',a);}
function hn(){}
_=hn.prototype=new jn();_.tN=nF+'TextBox';_.tI=37;function Cn(a){a.a=(Ak(),Bk);a.b=(bl(),dl);}
function Dn(a){dj(a);Cn(a);tf(a.e,'cellSpacing','0');tf(a.e,'cellPadding','0');return a;}
function En(b,d){var a,c;c=Be();a=ao(b);qe(c,a);qe(b.d,c);Cj(b,d,a);}
function ao(b){var a;a=Ae();fj(b,a,b.a);gj(b,a,b.b);return a;}
function bo(c){var a,b;b=kf(c.w());a=Ej(this,c);if(a){of(this.d,kf(b));}return a;}
function Bn(){}
_=Bn.prototype=new cj();_.sb=bo;_.tN=nF+'VerticalPanel';_.tI=38;function no(b,a){b.b=a;b.a=Ed('[Lcom.google.gwt.user.client.ui.Widget;',[0],[13],[4],null);return b;}
function oo(a,b){ro(a,b,a.c);}
function qo(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]===c){return a;}}return (-1);}
function ro(d,e,a){var b,c;if(a<0||a>d.c){throw new du();}if(d.c==d.a.a){c=Ed('[Lcom.google.gwt.user.client.ui.Widget;',[0],[13],[d.a.a*2],null);for(b=0;b<d.a.a;++b){Fd(c,b,d.a[b]);}d.a=c;}++d.c;for(b=d.c-1;b>a;--b){Fd(d.a,b,d.a[b-1]);}Fd(d.a,a,e);}
function so(a){return go(new fo(),a);}
function to(c,b){var a;if(b<0||b>=c.c){throw new du();}--c.c;for(a=b;a<c.c;++a){Fd(c.a,a,c.a[a+1]);}Fd(c.a,c.c,null);}
function uo(b,c){var a;a=qo(b,c);if(a==(-1)){throw new rB();}to(b,a);}
function eo(){}
_=eo.prototype=new vu();_.tN=nF+'WidgetCollection';_.tI=0;_.a=null;_.b=null;_.c=0;function go(b,a){b.b=a;return b;}
function io(a){return a.a<a.b.c-1;}
function jo(a){if(a.a>=a.b.c){throw new rB();}return a.b.a[++a.a];}
function ko(){return io(this);}
function lo(){return jo(this);}
function mo(){if(this.a<0||this.a>=this.b.c){throw new au();}this.b.b.sb(this.b.a[this.a--]);}
function fo(){}
_=fo.prototype=new vu();_.F=ko;_.eb=lo;_.qb=mo;_.tN=nF+'WidgetCollection$WidgetIterator';_.tI=0;_.a=(-1);function ep(){ep=cC;fp=dp(new cp());gp=fp;}
function dp(a){ep();return a;}
function cp(){}
_=cp.prototype=new vu();_.tN=oF+'FocusImpl';_.tI=0;var fp,gp;function mp(c,a,b){Bu(c,b);return c;}
function lp(){}
_=lp.prototype=new Au();_.tN=pF+'DOMException';_.tI=39;function xp(){xp=cC;yp=(qs(),bt);}
function zp(a){xp();return rs(yp,a);}
var yp;function nq(b,a){b.a=a;return b;}
function oq(a,b){return b;}
function qq(a){if(ee(a,25)){return re(oq(this,this.a),oq(this,de(a,25).a));}return false;}
function mq(){}
_=mq.prototype=new vu();_.eQ=qq;_.tN=qF+'DOMItem';_.tI=40;_.a=null;function lr(b,a){nq(b,a);return b;}
function nr(a){return gr(new fr(),ts(a.a));}
function or(a){return wr(new vr(),us(a.a));}
function pr(a){return As(a.a);}
function qr(a){return Cs(a.a);}
function rr(a){return Fs(a.a);}
function sr(a){return at(a.a);}
function tr(a){var b;if(a===null){return null;}b=Bs(a);switch(b){case 2:return Bp(new Ap(),a);case 4:return bq(new aq(),a);case 8:return jq(new iq(),a);case 11:return wq(new vq(),a);case 9:return Aq(new zq(),a);case 1:return Fq(new Eq(),a);case 7:return Fr(new Er(),a);case 3:return es(new ds(),a);default:return lr(new kr(),a);}}
function ur(){return or(this).bb(0);}
function kr(){}
_=kr.prototype=new mq();_.z=ur;_.tN=qF+'NodeImpl';_.tI=41;function Bp(b,a){lr(b,a);return b;}
function Dp(a){return zs(a.a);}
function Ep(a){return Es(a.a);}
function Fp(){var a;a=Fu(new Eu());cv(a,' '+Dp(this));cv(a,'="');cv(a,Ep(this));cv(a,'"');return gv(a);}
function Ap(){}
_=Ap.prototype=new kr();_.tS=Fp;_.tN=qF+'AttrImpl';_.tI=42;function fq(b,a){lr(b,a);return b;}
function hq(a){return vs(a.a);}
function eq(){}
_=eq.prototype=new kr();_.tN=qF+'CharacterDataImpl';_.tI=43;function es(b,a){fq(b,a);return b;}
function gs(){var a,b,c;a=Fu(new Eu());c=rv(hq(this),'(?=[;&<>\'"])',(-1));for(b=0;b<c.a;b++){if(sv(c[b],';')){cv(a,'&semi;');cv(a,tv(c[b],1));}else if(sv(c[b],'&')){cv(a,'&amp;');cv(a,tv(c[b],1));}else if(sv(c[b],'"')){cv(a,'&quot;');cv(a,tv(c[b],1));}else if(sv(c[b],"'")){cv(a,'&apos;');cv(a,tv(c[b],1));}else if(sv(c[b],'<')){cv(a,'&lt;');cv(a,tv(c[b],1));}else if(sv(c[b],'>')){cv(a,'&gt;');cv(a,tv(c[b],1));}else{cv(a,c[b]);}}return gv(a);}
function ds(){}
_=ds.prototype=new eq();_.tS=gs;_.tN=qF+'TextImpl';_.tI=44;function bq(b,a){es(b,a);return b;}
function dq(){var a;a=av(new Eu(),'<![CDATA[');cv(a,hq(this));cv(a,']]>');return gv(a);}
function aq(){}
_=aq.prototype=new ds();_.tS=dq;_.tN=qF+'CDATASectionImpl';_.tI=45;function jq(b,a){fq(b,a);return b;}
function lq(){var a;a=av(new Eu(),'<!--');cv(a,hq(this));cv(a,'-->');return gv(a);}
function iq(){}
_=iq.prototype=new eq();_.tS=lq;_.tN=qF+'CommentImpl';_.tI=46;function sq(c,a,b){mp(c,12,'Failed to parse: '+uq(a));gw(c,b);return c;}
function uq(a){return uv(a,0,lu(ov(a),128));}
function rq(){}
_=rq.prototype=new lp();_.tN=qF+'DOMParseException';_.tI=47;function wq(b,a){lr(b,a);return b;}
function yq(){var a,b;a=Fu(new Eu());for(b=0;b<or(this).B();b++){bv(a,or(this).bb(b));}return gv(a);}
function vq(){}
_=vq.prototype=new kr();_.tS=yq;_.tN=qF+'DocumentFragmentImpl';_.tI=48;function Aq(b,a){lr(b,a);return b;}
function Cq(){return de(tr(ws(this.a)),26);}
function Dq(){var a,b,c;a=Fu(new Eu());b=or(this);for(c=0;c<b.B();c++){cv(a,b.bb(c).tS());}return gv(a);}
function zq(){}
_=zq.prototype=new kr();_.v=Cq;_.tS=Dq;_.tN=qF+'DocumentImpl';_.tI=49;function Fq(b,a){lr(b,a);return b;}
function br(a){return Ds(a.a);}
function cr(a){return ss(this.a,a);}
function dr(a){return wr(new vr(),xs(this.a,a));}
function er(){var a;a=av(new Eu(),'<');cv(a,br(this));if(rr(this)){cv(a,Ar(nr(this)));}if(sr(this)){cv(a,'>');cv(a,Ar(or(this)));cv(a,'<\/');cv(a,br(this));cv(a,'>');}else{cv(a,'/>');}return gv(a);}
function Eq(){}
_=Eq.prototype=new kr();_.u=cr;_.y=dr;_.tS=er;_.tN=qF+'ElementImpl';_.tI=50;function wr(b,a){nq(b,a);return b;}
function yr(a){return ys(a.a);}
function zr(b,a){return tr(ct(b.a,a));}
function Ar(c){var a,b;a=Fu(new Eu());for(b=0;b<c.B();b++){cv(a,c.bb(b).tS());}return gv(a);}
function Br(){return yr(this);}
function Cr(a){return zr(this,a);}
function Dr(){return Ar(this);}
function vr(){}
_=vr.prototype=new mq();_.B=Br;_.bb=Cr;_.tS=Dr;_.tN=qF+'NodeListImpl';_.tI=51;function gr(b,a){wr(b,a);return b;}
function ir(){return yr(this);}
function jr(a){return zr(this,a);}
function fr(){}
_=fr.prototype=new vr();_.B=ir;_.bb=jr;_.tN=qF+'NamedNodeMapImpl';_.tI=52;function Fr(b,a){lr(b,a);return b;}
function bs(a){return vs(a.a);}
function cs(){var a;a=av(new Eu(),'<?');cv(a,pr(this));cv(a,' ');cv(a,bs(this));cv(a,'?>');return gv(a);}
function Er(){}
_=Er.prototype=new kr();_.tS=cs;_.tN=qF+'ProcessingInstructionImpl';_.tI=53;function qs(){qs=cC;bt=ks(new is());}
function ps(a){qs();return a;}
function rs(e,c){var a,d;try{return de(tr(ns(e,c)),27);}catch(a){a=le(a);if(ee(a,28)){d=a;throw sq(new rq(),c,d);}else throw a;}}
function ss(b,a){qs();return b.getAttribute(a);}
function ts(a){qs();return a.attributes;}
function us(b){qs();var a=b.childNodes;return a==null?null:a;}
function vs(a){qs();return a.data;}
function ws(a){qs();return a.documentElement;}
function xs(a,b){qs();return ms(bt,a,b);}
function ys(a){qs();return a.length;}
function zs(a){qs();return a.name;}
function As(a){qs();var b=a.nodeName;return b==null?null:b;}
function Bs(a){qs();var b=a.nodeType;return b==null?-1:b;}
function Cs(a){qs();return a.nodeValue;}
function Ds(a){qs();return a.tagName;}
function Es(a){qs();return a.value;}
function Fs(a){qs();return a.attributes.length!=0;}
function at(a){qs();return a.hasChildNodes();}
function ct(c,a){qs();if(a>=c.length){return null;}var b=c.item(a);return b==null?null:b;}
function hs(){}
_=hs.prototype=new vu();_.tN=qF+'XMLParserImpl';_.tI=0;var bt;function ls(){ls=cC;qs();}
function js(a){a.a=os();}
function ks(a){ls();ps(a);js(a);return a;}
function ms(c,a,b){return a.getElementsByTagNameNS('*',b);}
function ns(e,a){var b=e.a;var c=b.parseFromString(a,'text/xml');var d=c.documentElement;if(d.tagName=='parsererror'&&d.namespaceURI=='http://www.mozilla.org/newlayout/xml/parsererror.xml'){throw new Error(d.firstChild.data);}return c;}
function os(){ls();return new DOMParser();}
function is(){}
_=is.prototype=new hs();_.tN=qF+'XMLParserImplStandard';_.tI=0;function gt(){}
_=gt.prototype=new vu();_.tN=rF+'OutputStream';_.tI=0;function et(){}
_=et.prototype=new gt();_.tN=rF+'FilterOutputStream';_.tI=0;function it(){}
_=it.prototype=new et();_.tN=rF+'PrintStream';_.tI=0;function kt(){}
_=kt.prototype=new Au();_.tN=sF+'ArrayStoreException';_.tI=54;function ot(){ot=cC;pt=nt(new mt(),false);qt=nt(new mt(),true);}
function nt(a,b){ot();a.a=b;return a;}
function rt(a){return ee(a,29)&&de(a,29).a==this.a;}
function st(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function tt(){return this.a?'true':'false';}
function ut(a){ot();return a?qt:pt;}
function mt(){}
_=mt.prototype=new vu();_.eQ=rt;_.hC=st;_.tS=tt;_.tN=sF+'Boolean';_.tI=55;_.a=false;var pt,qt;function wt(){}
_=wt.prototype=new Au();_.tN=sF+'ClassCastException';_.tI=56;function Et(b,a){Bu(b,a);return b;}
function Dt(){}
_=Dt.prototype=new Au();_.tN=sF+'IllegalArgumentException';_.tI=57;function bu(b,a){Bu(b,a);return b;}
function au(){}
_=au.prototype=new Au();_.tN=sF+'IllegalStateException';_.tI=58;function eu(b,a){Bu(b,a);return b;}
function du(){}
_=du.prototype=new Au();_.tN=sF+'IndexOutOfBoundsException';_.tI=59;function su(){su=cC;{uu();}}
function uu(){su();tu=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var tu=null;function hu(){hu=cC;su();}
function iu(a){hu();return Dv(a);}
function lu(a,b){return a<b?a:b;}
function mu(){}
_=mu.prototype=new Au();_.tN=sF+'NegativeArraySizeException';_.tI=60;function pu(b,a){Bu(b,a);return b;}
function ou(){}
_=ou.prototype=new Au();_.tN=sF+'NullPointerException';_.tI=61;function jv(b,a){return b.charCodeAt(a);}
function lv(b,a){if(!ee(a,1))return false;return xv(b,a);}
function mv(b,a){return b.indexOf(a);}
function nv(c,b,a){return c.indexOf(b,a);}
function ov(a){return a.length;}
function pv(c,a,b){b=yv(b);return c.replace(RegExp(a,'g'),b);}
function qv(b,a){return rv(b,a,0);}
function rv(j,i,g){var a=new RegExp(i,'g');var h=[];var b=0;var k=j;var e=null;while(true){var f=a.exec(k);if(f==null||(k==''||b==g-1&&g>0)){h[b]=k;break;}else{h[b]=k.substring(0,f.index);k=k.substring(f.index+f[0].length,k.length);a.lastIndex=0;if(e==k){h[b]=k.substring(0,1);k=k.substring(1);}e=k;b++;}}if(g==0){for(var c=h.length-1;c>=0;c--){if(h[c]!=''){h.splice(c+1,h.length-(c+1));break;}}}var d=wv(h.length);var c=0;for(c=0;c<h.length;++c){d[c]=h[c];}return d;}
function sv(b,a){return mv(b,a)==0;}
function tv(b,a){return b.substr(a,b.length-a);}
function uv(c,a,b){return c.substr(a,b-a);}
function vv(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function wv(a){return Ed('[Ljava.lang.String;',[0],[1],[a],null);}
function xv(a,b){return String(a)==b;}
function yv(b){var a;a=0;while(0<=(a=nv(b,'\\',a))){if(jv(b,a+1)==36){b=uv(b,0,a)+'$'+tv(b,++a);}else{b=uv(b,0,a)+tv(b,++a);}}return b;}
function zv(a){return lv(this,a);}
function Bv(){var a=Av;if(!a){a=Av={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function Cv(){return this;}
function Dv(a){return ''+a;}
function Ev(a){return a!==null?a.tS():'null';}
_=String.prototype;_.eQ=zv;_.hC=Bv;_.tS=Cv;_.tN=sF+'String';_.tI=2;var Av=null;function Fu(a){dv(a);return a;}
function av(b,a){ev(b,a);return b;}
function bv(a,b){return cv(a,Ev(b));}
function cv(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function dv(a){ev(a,'');}
function ev(b,a){b.js=[a];b.length=a.length;}
function gv(a){a.fb();return a.js[0];}
function hv(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function iv(){return gv(this);}
function Eu(){}
_=Eu.prototype=new vu();_.fb=hv;_.tS=iv;_.tN=sF+'StringBuffer';_.tI=0;function aw(){aw=cC;bw=new it();}
function cw(a){aw();return C(a);}
var bw;function lw(b,a){Bu(b,a);return b;}
function kw(){}
_=kw.prototype=new Au();_.tN=sF+'UnsupportedOperationException';_.tI=62;function vw(b,a){b.c=a;return b;}
function xw(a){return a.a<a.c.yb();}
function yw(){return xw(this);}
function zw(){if(!xw(this)){throw new rB();}return this.c.D(this.b=this.a++);}
function Aw(){if(this.b<0){throw new au();}this.c.rb(this.b);this.a=this.b;this.b=(-1);}
function uw(){}
_=uw.prototype=new vu();_.F=yw;_.eb=zw;_.qb=Aw;_.tN=tF+'AbstractList$IteratorImpl';_.tI=0;_.a=0;_.b=(-1);function dy(f,d,e){var a,b,c;for(b=cA(f.r());Az(b);){a=Bz(b);c=a.A();if(d===null?c===null:d.eQ(c)){if(e){Cz(b);}return a;}}return null;}
function ey(b){var a;a=b.r();return fx(new ex(),b,a);}
function fy(b){var a;a=nA(b);return ux(new tx(),b,a);}
function gy(a){return dy(this,a,false)!==null;}
function hy(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ee(d,31)){return false;}f=de(d,31);c=ey(this);e=f.db();if(!oy(c,e)){return false;}for(a=hx(c);ox(a);){b=px(a);h=this.E(b);g=f.E(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function iy(b){var a;a=dy(this,b,false);return a===null?null:a.C();}
function jy(){var a,b,c;b=0;for(c=cA(this.r());Az(c);){a=Bz(c);b+=a.hC();}return b;}
function ky(){return ey(this);}
function ly(){var a,b,c,d;d='{';a=false;for(c=cA(this.r());Az(c);){b=Bz(c);if(a){d+=', ';}else{a=true;}d+=Ev(b.A());d+='=';d+=Ev(b.C());}return d+'}';}
function dx(){}
_=dx.prototype=new vu();_.n=gy;_.eQ=hy;_.E=iy;_.hC=jy;_.db=ky;_.tS=ly;_.tN=tF+'AbstractMap';_.tI=63;function oy(e,b){var a,c,d;if(b===e){return true;}if(!ee(b,32)){return false;}c=de(b,32);if(c.yb()!=e.yb()){return false;}for(a=c.cb();a.F();){d=a.eb();if(!e.o(d)){return false;}}return true;}
function py(a){return oy(this,a);}
function qy(){var a,b,c;a=0;for(b=this.cb();b.F();){c=b.eb();if(c!==null){a+=c.hC();}}return a;}
function my(){}
_=my.prototype=new nw();_.eQ=py;_.hC=qy;_.tN=tF+'AbstractSet';_.tI=64;function fx(b,a,c){b.a=a;b.b=c;return b;}
function hx(b){var a;a=cA(b.b);return mx(new lx(),b,a);}
function ix(a){return this.a.n(a);}
function jx(){return hx(this);}
function kx(){return this.b.a.c;}
function ex(){}
_=ex.prototype=new my();_.o=ix;_.cb=jx;_.yb=kx;_.tN=tF+'AbstractMap$1';_.tI=65;function mx(b,a,c){b.a=c;return b;}
function ox(a){return a.a.F();}
function px(b){var a;a=b.a.eb();return a.A();}
function qx(){return ox(this);}
function rx(){return px(this);}
function sx(){this.a.qb();}
function lx(){}
_=lx.prototype=new vu();_.F=qx;_.eb=rx;_.qb=sx;_.tN=tF+'AbstractMap$2';_.tI=0;function ux(b,a,c){b.a=a;b.b=c;return b;}
function wx(b){var a;a=cA(b.b);return Bx(new Ax(),b,a);}
function xx(a){return mA(this.a,a);}
function yx(){return wx(this);}
function zx(){return this.b.a.c;}
function tx(){}
_=tx.prototype=new nw();_.o=xx;_.cb=yx;_.yb=zx;_.tN=tF+'AbstractMap$3';_.tI=0;function Bx(b,a,c){b.a=c;return b;}
function Dx(a){return a.a.F();}
function Ex(a){var b;b=a.a.eb().C();return b;}
function Fx(){return Dx(this);}
function ay(){return Ex(this);}
function by(){this.a.qb();}
function Ax(){}
_=Ax.prototype=new vu();_.F=Fx;_.eb=ay;_.qb=by;_.tN=tF+'AbstractMap$4';_.tI=0;function kA(){kA=cC;sA=yA();}
function gA(a){{jA(a);}}
function hA(a){kA();gA(a);return a;}
function iA(a,b){kA();gA(a);pA(a,b);return a;}
function jA(a){a.a=gb();a.d=ib();a.b=ie(sA,cb);a.c=0;}
function lA(b,a){if(ee(a,1)){return CA(b.d,de(a,1))!==sA;}else if(a===null){return b.b!==sA;}else{return BA(b.a,a,a.hC())!==sA;}}
function mA(a,b){if(a.b!==sA&&AA(a.b,b)){return true;}else if(xA(a.d,b)){return true;}else if(vA(a.a,b)){return true;}return false;}
function nA(a){return aA(new wz(),a);}
function oA(c,a){var b;if(ee(a,1)){b=CA(c.d,de(a,1));}else if(a===null){b=c.b;}else{b=BA(c.a,a,a.hC());}return b===sA?null:b;}
function qA(c,a,d){var b;if(ee(a,1)){b=FA(c.d,de(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=EA(c.a,a,d,a.hC());}if(b===sA){++c.c;return null;}else{return b;}}
function pA(d,c){var a,b;b=cA(nA(c));while(Az(b)){a=Bz(b);qA(d,a.A(),a.C());}}
function rA(c,a){var b;if(ee(a,1)){b=bB(c.d,de(a,1));}else if(a===null){b=c.b;c.b=ie(sA,cb);}else{b=aB(c.a,a,a.hC());}if(b===sA){return null;}else{--c.c;return b;}}
function tA(e,c){kA();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.m(a[f]);}}}}
function uA(d,a){kA();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=pz(c.substring(1),e);a.m(b);}}}
function vA(f,h){kA();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.C();if(AA(h,d)){return true;}}}}return false;}
function wA(a){return lA(this,a);}
function xA(c,d){kA();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(AA(d,a)){return true;}}}return false;}
function yA(){kA();}
function zA(){return nA(this);}
function AA(a,b){kA();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function DA(a){return oA(this,a);}
function BA(f,h,e){kA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(AA(h,d)){return c.C();}}}}
function CA(b,a){kA();return b[':'+a];}
function EA(f,h,j,e){kA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(AA(h,d)){var i=c.C();c.xb(j);return i;}}}else{a=f[e]=[];}var c=pz(h,j);a.push(c);}
function FA(c,a,d){kA();a=':'+a;var b=c[a];c[a]=d;return b;}
function aB(f,h,e){kA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(AA(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.C();}}}}
function bB(c,a){kA();a=':'+a;var b=c[a];delete c[a];return b;}
function lz(){}
_=lz.prototype=new dx();_.n=wA;_.r=zA;_.E=DA;_.tN=tF+'HashMap';_.tI=66;_.a=null;_.b=null;_.c=0;_.d=null;var sA;function nz(b,a,c){b.a=a;b.b=c;return b;}
function pz(a,b){return nz(new mz(),a,b);}
function qz(b){var a;if(ee(b,33)){a=de(b,33);if(AA(this.a,a.A())&&AA(this.b,a.C())){return true;}}return false;}
function rz(){return this.a;}
function sz(){return this.b;}
function tz(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function uz(a){var b;b=this.b;this.b=a;return b;}
function vz(){return this.a+'='+this.b;}
function mz(){}
_=mz.prototype=new vu();_.eQ=qz;_.A=rz;_.C=sz;_.hC=tz;_.xb=uz;_.tS=vz;_.tN=tF+'HashMap$EntryImpl';_.tI=67;_.a=null;_.b=null;function aA(b,a){b.a=a;return b;}
function cA(a){return yz(new xz(),a.a);}
function dA(c){var a,b,d;if(ee(c,33)){a=de(c,33);b=a.A();if(lA(this.a,b)){d=oA(this.a,b);return AA(a.C(),d);}}return false;}
function eA(){return cA(this);}
function fA(){return this.a.c;}
function wz(){}
_=wz.prototype=new my();_.o=dA;_.cb=eA;_.yb=fA;_.tN=tF+'HashMap$EntrySet';_.tI=68;function yz(c,b){var a;c.c=b;a=ty(new ry());if(c.c.b!==(kA(),sA)){vy(a,nz(new mz(),null,c.c.b));}uA(c.c.d,a);tA(c.c.a,a);c.a=a.cb();return c;}
function Az(a){return a.a.F();}
function Bz(a){return a.b=de(a.a.eb(),33);}
function Cz(a){if(a.b===null){throw bu(new au(),'Must call next() before remove().');}else{a.a.qb();rA(a.c,a.b.A());a.b=null;}}
function Dz(){return Az(this);}
function Ez(){return Bz(this);}
function Fz(){Cz(this);}
function xz(){}
_=xz.prototype=new vu();_.F=Dz;_.eb=Ez;_.qb=Fz;_.tN=tF+'HashMap$EntrySetIterator';_.tI=0;_.a=null;_.b=null;function dB(a){a.a=hA(new lz());return a;}
function fB(a){var b;b=qA(this.a,a,ut(true));return b===null;}
function gB(a){return lA(this.a,a);}
function hB(){return hx(ey(this.a));}
function iB(){return this.a.c;}
function jB(){return ey(this.a).tS();}
function cB(){}
_=cB.prototype=new my();_.m=fB;_.o=gB;_.cb=hB;_.yb=iB;_.tS=jB;_.tN=tF+'HashSet';_.tI=69;_.a=null;function pB(d,c,a,b){Bu(d,c);return d;}
function oB(){}
_=oB.prototype=new Au();_.tN=tF+'MissingResourceException';_.tI=70;function rB(){}
_=rB.prototype=new Au();_.tN=tF+'NoSuchElementException';_.tI=71;function wB(a){a.a=ty(new ry());return a;}
function xB(b,a){return vy(b.a,a);}
function zB(b,a){return AB(b,a);}
function AB(b,a){return zy(b.a,a);}
function BB(a,b){uy(this.a,a,b);}
function CB(a){return xB(this,a);}
function DB(a){return yy(this.a,a);}
function EB(a){return AB(this,a);}
function FB(){return this.a.cb();}
function aC(a){return Cy(this.a,a);}
function bC(){return this.a.b;}
function vB(){}
_=vB.prototype=new tw();_.l=BB;_.m=CB;_.o=DB;_.D=EB;_.cb=FB;_.rb=aC;_.yb=bC;_.tN=tF+'Vector';_.tI=72;_.a=null;function AC(g,h){var a,c,d,e,f;h=pv(h,'&amp;','&');c=fD(new dD(),h);try{e=eF(c);f=sC(new rC(),g,e,c);qg(f,1);}catch(a){a=le(a);if(ee(a,35)){d=a;hw(d);}else throw a;}}
function BC(g,h){var a,c,d,e,f;h=pv(h,'&amp;','&');c=oD(new mD(),h);try{e=eF(c);f=wC(new vC(),g,e,c);qg(f,1);}catch(a){a=le(a);if(ee(a,35)){d=a;Cg('Exception: '+d.b);hw(d);}else throw a;}}
function CC(r){var a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s;k='DEFAULT-identities-and-usecases.xml';l='DEFAULT-policy.xml';f='DEFAULT-cancel.html';m='DEFAULT-save-policy.xml';try{h=td('getURLs');k=qd(h,'identities-url');l=qd(h,'policy-url');f=qd(h,'cancel-url');m=qd(h,'save-url');}catch(a){a=le(a);if(ee(a,34)){i=a;Cg('Exception: '+i.b);}else throw a;}AC(r,k);BC(r,l);s=Dn(new Bn());ui(Em('access-policy-editor-hook'),s);p=Dn(new Bn());En(s,p);q=pn(new hn());rn(q,30);En(p,q);o=Fi(new yi(),'Save User or Group',fC(new eC(),r,q));En(p,o);j=il(new gl());ml(j,(bl(),cl));En(s,j);d=il(new gl());En(s,d);n=pv(m,'&amp;','&');r.e=Fi(new yi(),'Save Policy',jC(new iC(),r,n));wn(r.e,'gwt-wyona-SaveButton');jl(d,r.e);g=f;e=Fi(new yi(),'Cancel',nC(new mC(),r,g));wn(r.e,'gwt-wyona-CancelButton');jl(d,e);r.a=FD(new DD(),r.g);r.c=fE(new dE(),r.g,r.d,r.b,r.f);c=FC(new DC(),r.a.a,r.c.c,r.c);wn(c,'gwt-wyona-AddRemoveWidget');jl(j,r.a);jl(j,c);jl(j,r.c);}
function dC(){}
_=dC.prototype=new vu();_.tN=uF+'AccessPolicyEditor';_.tI=0;_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;_.f=true;_.g=10;function fC(b,a,c){b.a=a;b.b=c;return b;}
function hC(d){var a,b,c;b=dm(this.a.a.a);for(a=0;a<b;a++){c=em(this.a.a.a,a);if(mv(c,mn(this.b))>=0)Cg('Result: '+c);}}
function eC(){}
_=eC.prototype=new vu();_.ib=hC;_.tN=uF+'AccessPolicyEditor$1';_.tI=73;function jC(b,a,c){b.a=a;b.b=c;return b;}
function lC(f){var a,c,d,e;c=vD(new uD(),this.b);try{e=xD(c,qE(this.a.c),jE(this.a.c),pE(this.a.c));}catch(a){a=le(a);if(ee(a,35)){d=a;Cg('Exception: '+d.b);}else throw a;}}
function iC(){}
_=iC.prototype=new vu();_.ib=lC;_.tN=uF+'AccessPolicyEditor$2';_.tI=74;function nC(b,a,c){b.a=c;return b;}
function pC(a,b){$wnd.location.href=b;}
function qC(a){pC(this,this.a);}
function mC(){}
_=mC.prototype=new vu();_.ib=qC;_.tN=uF+'AccessPolicyEditor$3';_.tI=75;function tC(){tC=cC;ng();}
function sC(b,a,d,c){tC();b.a=a;b.c=d;b.b=c;lg(b);return b;}
function uC(){if(xc(this.c)){pg(this,10);}else{bE(this.a.a,this.a.g,kD(this.b),iD(this.b));wE(this.a.c,jD(this.b));mg(this);}}
function rC(){}
_=rC.prototype=new gg();_.ub=uC;_.tN=uF+'AccessPolicyEditor$4';_.tI=76;function xC(){xC=cC;ng();}
function wC(b,a,d,c){xC();b.a=a;b.c=d;b.b=c;lg(b);return b;}
function yC(){if(xc(this.c)){pg(this,10);}else{this.a.d=sD(this.b);this.a.b=rD(this.b);sE(this.a.c,this.a.g,this.a.d,this.a.b);this.a.f=this.b.b;tE(this.a.c,this.a.f);mg(this);}}
function vC(){}
_=vC.prototype=new gg();_.ub=yC;_.tN=uF+'AccessPolicyEditor$5';_.tI=77;function EC(a){a.b=jk(new ik());}
function FC(d,a,c,b){EC(d);dk(d,d.b);d.f=Fi(new yi(),'<',d);kk(d.b,d.f);d.a=Fi(new yi(),'>',d);kk(d.b,d.a);d.c=a;d.d=c;d.e=b;return d;}
function bD(b,a){if(mv(a,'(')>0){return uv(a,0,mv(a,'('));}else{return a;}}
function cD(c){var a,b;if(c===this.a){a=fm(this.c);if(a>=0){b=gm(this.c,a);jm(this.c,a);gE(this.e,uv(b,0,1),vv(tv(b,2)));}else{Cg('No identity selected yet! Please select an identity.');}}else if(c===this.f){a=fm(this.d);if(a>=0){b=gm(this.d,a);jm(this.d,a);El(this.c,bD(this,b));}else{Cg('No identity selected yet! Please select an identity.');}}}
function DC(){}
_=DC.prototype=new bk();_.ib=cD;_.tN=uF+'AddRemoveIdentitiesWidget';_.tI=78;_.a=null;_.c=null;_.d=null;_.e=null;_.f=null;function aF(a){a.d=hA(new lz());}
function bF(a,b){aF(a);a.e=Db(new yb(),(Fb(),dc),b);fF(a);return a;}
function cF(e){var a,b,c,d;b='';a=iA(new lz(),e.d);for(d=cA(nA(a));Az(d);){c=Bz(d);b+=c.A()+''+c.C();if(Az(d)){b+='&';}}return b;}
function eF(a){return ac(a.e,cF(a),a);}
function fF(a){bc(a.e,'Content-Type','application/x-www-form-urlencoded');}
function gF(b,a){Cg('Exception: '+a.b);}
function FE(){}
_=FE.prototype=new vu();_.kb=gF;_.tN=vF+'AsynchronousAgent';_.tI=0;_.e=null;function eD(a){a.c=wB(new vB());a.a=wB(new vB());a.b=wB(new vB());}
function fD(a,b){bF(a,b);eD(a);return a;}
function hD(d,c,a){var b;b=c.y(a);return de(b.bb(0),26);}
function iD(c){var a,b;a=Ed('[Ljava.lang.String;',[0],[1],[c.a.a.b],null);for(b=0;b<c.a.a.b;b++){a[b]=de(zB(c.a,b),1);}return a;}
function jD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[c.b.a.b],null);for(a=0;a<c.b.a.b;a++){b[a]=de(zB(c.b,a),36);}return b;}
function kD(b){var a,c;c=Ed('[Ljava.lang.String;',[0],[1],[b.c.a.b],null);for(a=0;a<b.c.a.b;a++){c[a]=de(zB(b.c,a),1);}return c;}
function lD(e,f){var a,b,c,d,g,h,i,j,k;i=zp(tb(f)).v();k=hD(this,i,'users');j=k.y('user');for(c=0;c<j.B();c++){xB(this.c,de(j.bb(c),26).u('id'));}b=hD(this,i,'groups');a=b.y('group');for(c=0;c<a.B();c++){xB(this.a,de(a.bb(c),26).u('id'));}h=hD(this,i,'rights');g=h.y('right');for(c=0;c<g.B();c++){d=qr(de(g.bb(c),26).z());xB(this.b,zE(new yE(),de(g.bb(c),26).u('id'),d));}}
function dD(){}
_=dD.prototype=new FE();_.mb=lD;_.tN=uF+'AsynchronousIdentitiesAndRightsGetter';_.tI=0;function nD(a){a.c=wB(new vB());a.a=wB(new vB());}
function oD(a,b){bF(a,b);nD(a);return a;}
function qD(d,c,a){var b;b=c.y(a);if(b.B()>0){return de(b.bb(0),26);}else{return null;}}
function rD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[38],[c.a.a.b],null);for(a=0;a<b.a;a++){b[a]=de(zB(c.a,a),38);}return b;}
function sD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[37],[c.c.a.b],null);for(a=0;a<b.a;a++){b[a]=de(zB(c.c,a),37);}return b;}
function tD(e,f){var a,b,c,d,g,h,i,j,k,l,m,n;j=zp(tb(f)).v();k=j.u('use-inherited-policies');if(k===null){this.b=true;}else{if(lv(k,'false')){this.b=false;}else{this.b=true;}}n=qD(this,j,'world');m=j.y('user');for(c=0;c<m.B();c++){l=de(m.bb(c),26);h=l.y('right');i=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[h.B()],null);for(d=0;d<i.a;d++){g=de(h.bb(d),26);i[d]=AE(new yE(),g.u('id'),true);}xB(this.c,DE(new CE(),l.u('id'),i));}b=j.y('group');for(c=0;c<b.B();c++){a=de(b.bb(c),26);h=a.y('right');i=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[h.B()],null);for(d=0;d<i.a;d++){g=de(h.bb(d),26);i[d]=AE(new yE(),g.u('id'),true);}xB(this.a,BD(new AD(),a.u('id'),i));}}
function mD(){}
_=mD.prototype=new FE();_.mb=tD;_.tN=uF+'AsynchronousPolicyGetter';_.tI=0;_.b=true;function vD(a,b){a.a=Db(new yb(),(Fb(),ec),b);return a;}
function xD(f,h,b,g){var a,c,d,e;a=av(new Eu(),'<?xml version="1.0"?>');cv(a,'<policy xmlns="http://www.wyona.org/security/1.0" use-inherited-policies="'+g+'">');if(h!==null){for(c=0;c<h.a;c++){cv(a,'<user id="'+h[c].a+'">');e=h[c].b;if(e!==null){for(d=0;d<e.a;d++){cv(a,'<right id="'+e[d].a+'" permission="'+e[d].c+'">'+e[d].a+'<\/right>');}}else{cv(a,'<right id="r" permission="false">r<\/right>');cv(a,'<right id="w" permission="false">w<\/right>');}cv(a,'<\/user>');}}if(b!==null){for(c=0;c<b.a;c++){cv(a,'<group id="'+b[c].a+'">');e=b[c].b;if(e!==null){for(d=0;d<e.a;d++){cv(a,'<right id="'+e[d].a+'" permission="'+e[d].c+'">'+e[d].a+'<\/right>');}}else{cv(a,'<right id="r" permission="false">r<\/right>');cv(a,'<right id="w" permission="false">w<\/right>');}cv(a,'<\/group>');}}cv(a,'<\/policy>');return ac(f.a,gv(a),f);}
function yD(b,a){Cg('Exception: '+a.b);}
function zD(a,b){if(sb(b)==200){Cg('Policy has been saved successfully!');}else{Cg('Policy has NOT been saved! Please check log files on server.');}}
function uD(){}
_=uD.prototype=new vu();_.kb=yD;_.mb=zD;_.tN=uF+'AsynchronousPolicySetter';_.tI=0;_.a=null;function BD(c,a,b){c.a=a;c.b=b;return c;}
function AD(){}
_=AD.prototype=new vu();_.tN=uF+'Group';_.tI=79;_.a=null;_.b=null;function ED(a){a.b=Dn(new Bn());}
function FD(a,b){ED(a);dk(a,a.b);En(a.b,rl(new pl(),'Identities'));a.a=Dl(new vl(),true);a.a.k(a);bE(a,b,null,null);En(a.b,a.a);return a;}
function bE(c,e,d,a){var b;bm(c.a);lm(c.a,e);if(d!==null){for(b=0;b<d.a;b++){El(c.a,'u: '+d[b]);}}else{El(c.a,'No users yet!');}if(a!==null){for(b=0;b<a.a;b++){El(c.a,'g: '+a[b]);}}else{El(c.a,'No groups yet!');}}
function cE(a){}
function DD(){}
_=DD.prototype=new bk();_.ib=cE;_.tN=uF+'IdentitiesListBoxWidget';_.tI=80;_.a=null;function eE(a){a.e=Dn(new Bn());}
function fE(b,e,d,a,c){eE(b);dk(b,b.e);En(b.e,rl(new pl(),'Policy'));b.d=kj(new hj(),'Inherit rights from parent policies');tE(b,c);En(b.e,b.d);b.c=Dl(new vl(),true);b.c.k(b);sE(b,e,d,a);En(b.e,b.c);wE(b,null);return b;}
function gE(d,e,c){var a,b;a=av(new Eu(),'(-');for(b=1;b<d.b.a;b++){cv(a,',-');}cv(a,')');Fl(d.c,e+': '+a+' '+c,e+': '+c);}
function hE(e,a,d){var b,c;c=Ed('[Ljava.lang.String;',[0],[1],[e.a.a],null);for(b=0;b<c.a;b++){if(lv(e.a[b].a,d.a)){c[b]=d.a;}else{if(a[b].c){c[b]=a[b].a;}else{c[b]='-';}}}return c;}
function jE(g){var a,b,c,d,e,f;b=wB(new vB());for(c=0;c<dm(g.c);c++){e=em(g.c,c);f=nE(g,e);d=kE(g,c);if(sv(d,'g:')){xB(b,BD(new AD(),vv(tv(d,2)),f));}}a=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[38],[b.a.b],null);for(c=0;c<a.a;c++){a[c]=de(zB(b,c),38);}return a;}
function kE(b,a){return gm(b.c,a);}
function lE(e,f,b,c){var a,d;d=av(new Eu(),f+':');cv(d,'('+c[0]);for(a=1;a<c.a;a++){cv(d,','+c[a]);}cv(d,')');cv(d,' '+b);return gv(d);}
function mE(g,h,b,e){var a,c,d,f;f=av(new Eu(),h+':');if(g.a!==null){cv(f,'(');for(a=0;a<g.a.a;a++){d=false;for(c=0;c<e.a;c++){if(lv(g.a[a].a,e[c].a)&&e[c].c){d=true;break;}}if(a>0){cv(f,',');}if(d){cv(f,g.a[a].a);}else{cv(f,'-');}}cv(f,')');}else{Cg('Available rights not loaded yet!');}cv(f,' '+b);return gv(f);}
function nE(e,b){var a,c,d;if(mv(b,'(')>0){d=qv(uv(b,mv(b,'(')+1,mv(b,')')),',');if(d.a!=e.a.a){Cg('Exception: Validation of rights length failed!');return null;}c=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[e.a.a],null);for(a=0;a<d.a;a++){if(lv(d[a],'-')){c[a]=AE(new yE(),e.a[a].a,false);}else{c[a]=AE(new yE(),d[a],true);}}return c;}else{return Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[0],null);}}
function oE(b){var a;a=fm(b.c);if(a>=0){return em(b.c,a);}return null;}
function pE(a){return mj(a.d);}
function qE(e){var a,b,c,d,f,g;g=wB(new vB());for(a=0;a<dm(e.c);a++){c=em(e.c,a);d=nE(e,c);b=kE(e,a);if(sv(b,'u:')){xB(g,DE(new CE(),vv(tv(b,2)),d));}}f=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[37],[g.a.b],null);for(a=0;a<f.a;a++){f[a]=de(zB(g,a),37);}return f;}
function rE(e,a,d){var b,c;c=Ed('[Ljava.lang.String;',[0],[1],[e.a.a],null);for(b=0;b<c.a;b++){if(lv(e.a[b].a,d.a)){c[b]='-';}else{if(a[b].c){c[b]=a[b].a;}else{c[b]='-';}}}return c;}
function wE(c,a){var b;c.a=a;if(a!==null){c.b=Ed('[Lcom.google.gwt.user.client.ui.CheckBox;',[0],[12],[a.a],null);for(b=0;b<c.b.a;b++){c.b[b]=kj(new hj(),a[b].b);oj(c.b[b],a[b].a);c.b[b].k(c);En(c.e,c.b[b]);}}else{}}
function sE(e,i,g,a){var b,c,d,f,h;bm(e.c);lm(e.c,i);if(g!==null||a!==null){if(g!==null){for(b=0;b<g.a;b++){f='u';c=g[b].a;d=g[b].b;h=f+': '+c;Fl(e.c,mE(e,f,c,d),h);}}if(a!==null){for(b=0;b<a.a;b++){f='g';c=a[b].a;d=a[b].b;h=f+': '+c;Fl(e.c,mE(e,f,c,d),h);}}else{Cg('No groups!');}}else{El(e.c,'No identities yet!');}}
function tE(a,b){if(a.d!==null){nj(a.d,b);}}
function uE(d,e,a,c,b){km(d.c,b,lE(d,e,a,c));}
function vE(d,c){var a,b;b=fm(d.c);if(b>=0){a=kE(d,b);uE(d,uv(a,0,1),vv(tv(a,2)),c,b);}else{Cg('Exception: No list item selected!');}}
function xE(i){var a,b,c,d,e,f,g,h;h=null;g=null;for(b=0;b<this.b.a;b++){if(i===this.b[b]){h=this.b[b];g=this.a[b];break;}}if(h!==null){f=oE(this);if(f!==null){a=nE(this,f);if(mj(h)){d=hE(this,a,g);}else{d=rE(this,a,g);}vE(this,d);}else{Cg('No identity has been selected! Please select an identity in order to assign rights.');nj(h,false);}}else if(i===this.c){f=oE(this);e=nE(this,f);for(c=0;c<this.b.a;c++){if(e[c].c){nj(this.b[c],true);}else{nj(this.b[c],false);}}}}
function dE(){}
_=dE.prototype=new bk();_.ib=xE;_.tN=uF+'PolicyListBoxWidget';_.tI=81;_.a=null;_.b=null;_.c=null;_.d=null;function AE(c,a,b){c.a=a;c.c=b;return c;}
function zE(c,a,b){c.a=a;c.b=b;c.c=false;return c;}
function yE(){}
_=yE.prototype=new vu();_.tN=uF+'Right';_.tI=82;_.a=null;_.b=null;_.c=false;function DE(c,a,b){c.a=a;c.b=b;return c;}
function CE(){}
_=CE.prototype=new vu();_.tN=uF+'User';_.tI=83;_.a=null;_.b=null;function dt(){CC(new dC());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{dt();}catch(a){b(d);}else{dt();}}
var he=[{},{},{1:1},{4:1},{4:1,35:1},{4:1,35:1},{4:1,28:1,35:1},{2:1},{6:1},{6:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{3:1},{2:1,5:1},{2:1},{7:1},{11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{11:1,13:1,14:1,15:1,17:1,18:1,19:1,20:1,21:1},{11:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1},{11:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1},{10:1,11:1,13:1,14:1,15:1},{11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1,24:1},{30:1},{30:1},{30:1},{11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{11:1,13:1,14:1,15:1,18:1,23:1},{11:1,13:1,14:1,15:1,17:1,18:1,19:1,20:1,21:1,24:1},{9:1,10:1,11:1,13:1,14:1,15:1},{7:1},{11:1,13:1,14:1,15:1,17:1,18:1,19:1,20:1,21:1,23:1,24:1},{11:1,13:1,14:1,15:1,17:1,18:1,19:1,20:1,21:1,23:1,24:1},{10:1,11:1,13:1,14:1,15:1},{4:1,35:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{4:1,35:1},{25:1},{25:1,27:1},{25:1,26:1},{25:1},{25:1},{25:1},{4:1,35:1},{29:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{31:1},{32:1},{32:1},{31:1},{33:1},{32:1},{32:1},{4:1,34:1,35:1},{4:1,35:1},{30:1},{8:1},{8:1},{8:1},{6:1},{6:1},{8:1,11:1,13:1,14:1,15:1},{38:1},{8:1,11:1,13:1,14:1,15:1},{8:1,11:1,13:1,14:1,15:1},{36:1},{37:1}];if (org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor) {  var __gwt_initHandlers = org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.__gwt_initHandlers;  org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.onScriptLoad(gwtOnLoad);}})();