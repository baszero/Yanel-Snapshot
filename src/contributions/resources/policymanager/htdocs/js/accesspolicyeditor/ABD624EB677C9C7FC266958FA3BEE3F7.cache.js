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
function vc(e,a){var b,c,d,f;if(e.c===null){return;}sc(e);f=e.c;e.c=null;b=ed(f);if(b!==null){c=Bu(new Au(),b);a.lb(e,c);}else{d=yc(f);a.nb(e,d);}}
function wc(b,a){if(b.c===null){return;}tc(b);a.lb(b,oc(new nc(),b,b.a));}
function xc(b){var a;if(b.c===null){return false;}a=fd(b.c);switch(a){case 1:case 2:case 3:return true;}return false;}
function yc(b){var a;a=qb(new pb(),b);return a;}
function zc(a){var b;b=y;{vc(this,a);}}
function ob(){}
_=ob.prototype=new vu();_.t=zc;_.tN=iF+'Request';_.tI=0;_.a=0;_.b=null;_.c=null;function Ac(){}
_=Ac.prototype=new vu();_.tN=iF+'Response';_.tI=0;function qb(a,b){a.a=b;return a;}
function sb(a){return hd(a.a);}
function tb(a){return gd(a.a);}
function pb(){}
_=pb.prototype=new Ac();_.tN=iF+'Request$1';_.tI=0;function ng(){ng=cC;xg=ty(new ry());{wg();}}
function lg(a){ng();return a;}
function mg(a){if(a.d){rg(a.e);}else{sg(a.e);}Dy(xg,a);}
function og(a){if(!a.d){Dy(xg,a);}a.vb();}
function qg(b,a){if(a<=0){throw Et(new Dt(),'must be positive');}mg(b);b.d=false;b.e=ug(b,a);vy(xg,b);}
function pg(b,a){if(a<=0){throw Et(new Dt(),'must be positive');}mg(b);b.d=true;b.e=tg(b,a);vy(xg,b);}
function rg(a){ng();$wnd.clearInterval(a);}
function sg(a){ng();$wnd.clearTimeout(a);}
function tg(b,a){ng();return $wnd.setInterval(function(){b.u();},a);}
function ug(b,a){ng();return $wnd.setTimeout(function(){b.u();},a);}
function vg(){var a;a=y;{og(this);}}
function wg(){ng();Bg(new hg());}
function gg(){}
_=gg.prototype=new vu();_.u=vg;_.tN=lF+'Timer';_.tI=8;_.d=false;_.e=0;var xg;function wb(){wb=cC;ng();}
function vb(b,a,c){wb();b.a=a;b.b=c;lg(b);return b;}
function xb(){wc(this.a,this.b);}
function ub(){}
_=ub.prototype=new gg();_.vb=xb;_.tN=iF+'Request$2';_.tI=9;function Fb(){Fb=cC;dc=Ab(new zb(),'GET');ec=Ab(new zb(),'POST');fc=ji(new ii());}
function Db(b,a,c){Fb();Eb(b,a===null?null:a.a,c);return b;}
function Eb(b,a,c){Fb();Ec('httpMethod',a);Ec('url',c);b.b=a;b.d=c;return b;}
function ac(g,d,a){var b,c,e,f,h;h=oi(fc);{b=id(h,g.b,g.d,true);}if(b!==null){e=lc(new kc(),g.d);gw(e,ic(new hc(),b));throw e;}cc(g,h);c=rc(new ob(),h,g.c,a);f=jd(h,c,d,a);if(f!==null){throw ic(new hc(),f);}return c;}
function bc(b,a,c){Ec('header',a);Ec('value',c);if(b.a===null){b.a=hA(new lz());}qA(b.a,a,c);}
function cc(e,f){var a,b,c,d;if(e.a!==null&&e.a.c>0){a=nA(e.a);d=cA(a);while(Az(d)){c=Bz(d);b=kd(f,de(c.B(),1),de(c.D(),1));if(b!==null){throw ic(new hc(),b);}}}else{kd(f,'Content-Type','text/plain; charset=utf-8');}}
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
function dd(a){a.onreadystatechange=pi;a.abort();}
function ed(b){try{if(b.status===undefined){return 'XmlHttpRequest.status == undefined, please see Safari bug '+'http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';}return null;}catch(a){return 'Unable to read XmlHttpRequest.status; likely causes are a '+'networking error or bad cross-domain request. Please see '+'https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more '+'details';}}
function fd(a){return a.readyState;}
function gd(a){return a.responseText;}
function hd(a){return a.status;}
function id(e,c,d,b){try{e.open(c,d,b);return null;}catch(a){return a.message||a.toString();}}
function jd(e,c,d,b){e.onreadystatechange=function(){if(e.readyState==cd){e.onreadystatechange=pi;c.t(b);}};try{e.send(d);return null;}catch(a){e.onreadystatechange=pi;return a.message||a.toString();}}
function kd(d,b,c){try{d.setRequestHeader(b,c);return null;}catch(a){return a.message||a.toString();}}
var cd=4;function pd(){pd=cC;sd=hA(new lz());}
function md(b,a){pd();if(a===null||lv('',a)){throw Et(new Dt(),'Cannot create a Dictionary with a null or empty name');}b.b='Dictionary '+a;od(b,a);if(b.a===null){throw pB(new oB(),"Cannot find JavaScript object with the name '"+a+"'",a,null);}return b;}
function nd(b,a){for(x in b.a){a.m(x);}}
function od(c,b){try{if(typeof $wnd[b]!='object'){ud(b);}c.a=$wnd[b];}catch(a){ud(b);}}
function qd(b,a){var c=b.a[a];if(c==null|| !Object.prototype.hasOwnProperty.call(b.a,a)){b.ub(a);}return String(c);}
function rd(b){var a;a=dB(new cB());nd(b,a);return a;}
function td(a){pd();var b;b=de(oA(sd,a),3);if(b===null){b=md(new ld(),a);qA(sd,a,b);}return b;}
function vd(b){var a,c;c=rd(this);a="Cannot find '"+b+"' in "+this;if(c.a.c<20){a+='\n keys found: '+c;}throw pB(new oB(),a,this.b,b);}
function ud(a){pd();throw pB(new oB(),"'"+a+"' is not a JavaScript object and cannot be used as a Dictionary",null,a);}
function wd(){return this.b;}
function ld(){}
_=ld.prototype=new vu();_.ub=vd;_.tS=wd;_.tN=jF+'Dictionary';_.tI=13;_.a=null;_.b=null;var sd;function yd(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
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
function pe(){pe=cC;qf=ty(new ry());{lf=new hh();oh(lf);}}
function qe(b,a){pe();th(lf,b,a);}
function re(a,b){pe();return jh(lf,a,b);}
function se(){pe();return vh(lf,'button');}
function te(){pe();return vh(lf,'div');}
function ue(){pe();return wh(lf,'checkbox');}
function ve(){pe();return wh(lf,'text');}
function we(){pe();return vh(lf,'label');}
function xe(a){pe();return kh(lf,a);}
function ye(){pe();return vh(lf,'span');}
function ze(){pe();return vh(lf,'tbody');}
function Ae(){pe();return vh(lf,'td');}
function Be(){pe();return vh(lf,'tr');}
function Ce(){pe();return vh(lf,'table');}
function Fe(b,a,d){pe();var c;c=y;{Ee(b,a,d);}}
function Ee(b,a,c){pe();var d;if(a===pf){if(bf(b)==8192){pf=null;}}d=De;De=b;try{c.ib(b);}finally{De=d;}}
function af(b,a){pe();xh(lf,b,a);}
function bf(a){pe();return yh(lf,a);}
function cf(a){pe();lh(lf,a);}
function df(a){pe();return mh(lf,a);}
function ef(a){pe();return zh(lf,a);}
function hf(a,b){pe();return Ch(lf,a,b);}
function ff(a,b){pe();return Ah(lf,a,b);}
function gf(a,b){pe();return Bh(lf,a,b);}
function jf(a){pe();return Dh(lf,a);}
function kf(a){pe();return nh(lf,a);}
function mf(c,b,d,a){pe();ph(lf,c,b,d,a);}
function nf(a){pe();var b,c;c=true;if(qf.b>0){b=fe(zy(qf,qf.b-1));if(!(c=null.Bb())){af(a,true);cf(a);}}return c;}
function of(b,a){pe();Eh(lf,b,a);}
function tf(a,b,c){pe();bi(lf,a,b,c);}
function rf(a,b,c){pe();Fh(lf,a,b,c);}
function sf(a,b,c){pe();ai(lf,a,b,c);}
function uf(a,b){pe();ci(lf,a,b);}
function vf(a,b){pe();di(lf,a,b);}
function wf(a,b){pe();qh(lf,a,b);}
function xf(b,c,a){pe();ei(lf,b,c,a);}
function yf(b,a,c){pe();fi(lf,b,a,c);}
function zf(a,b){pe();rh(lf,a,b);}
function Af(a){pe();return gi(lf,a);}
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
_=hg.prototype=new vu();_.pb=jg;_.qb=kg;_.tN=lF+'Timer$1';_.tI=16;function Ag(){Ag=cC;Dg=ty(new ry());fh=ty(new ry());{bh();}}
function Bg(a){Ag();vy(Dg,a);}
function Cg(a){Ag();$wnd.alert(a);}
function Eg(){Ag();var a,b;for(a=Dg.db();a.ab();){b=de(a.fb(),7);b.pb();}}
function Fg(){Ag();var a,b,c,d;d=null;for(a=Dg.db();a.ab();){b=de(a.fb(),7);c=b.qb();{d=c;}}return d;}
function ah(){Ag();var a,b;for(a=fh.db();a.ab();){b=fe(a.fb());null.Bb();}}
function bh(){Ag();__gwt_initHandlers(function(){eh();},function(){return dh();},function(){ch();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ch(){Ag();var a;a=y;{Eg();}}
function dh(){Ag();var a;a=y;{return Fg();}}
function eh(){Ag();var a;a=y;{ah();}}
var Dg,fh;function th(c,b,a){b.appendChild(a);}
function vh(b,a){return $doc.createElement(a);}
function wh(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
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
function ei(e,c,d,a){var b=c.options[a];b.text=d;}
function fi(c,b,a,d){b.style[a]=d;}
function gi(b,a){return a.outerHTML;}
function gh(){}
_=gh.prototype=new vu();_.tN=mF+'DOMImpl';_.tI=0;function jh(c,a,b){if(!a&& !b)return true;else if(!a|| !b)return false;return a.uniqueID==b.uniqueID;}
function kh(c,b){var a=b?'<SELECT MULTIPLE>':'<SELECT>';return $doc.createElement(a);}
function lh(b,a){a.returnValue=false;}
function mh(b,a){if(a.toString)return a.toString();return '[object Event]';}
function nh(c,a){var b=a.parentElement;return b||null;}
function oh(d){try{$doc.execCommand('BackgroundImageCache',false,true);}catch(a){}$wnd.__dispatchEvent=function(){var c=sh;sh=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!nf($wnd.event)){sh=c;return;}}var b,a=this;while(a&& !(b=a.__listener))a=a.parentElement;if(b)Fe($wnd.event,a,b);sh=c;};$wnd.__dispatchDblClickEvent=function(){var a=$doc.createEventObject();this.fireEvent('onclick',a);if(this.__eventBits&2)$wnd.__dispatchEvent.call(this);};$doc.body.onclick=$doc.body.onmousedown=$doc.body.onmouseup=$doc.body.onmousemove=$doc.body.onmousewheel=$doc.body.onkeydown=$doc.body.onkeypress=$doc.body.onkeyup=$doc.body.onfocus=$doc.body.onblur=$doc.body.ondblclick=$wnd.__dispatchEvent;}
function ph(e,c,d,f,a){var b=new Option(d,f);if(a== -1||a>c.options.length-1){c.add(b);}else{c.add(b,a);}}
function qh(c,a,b){if(!b)b='';a.innerText=b;}
function rh(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&(1|2)?$wnd.__dispatchDblClickEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function hh(){}
_=hh.prototype=new gh();_.tN=mF+'DOMImplIE6';_.tI=0;var sh=null;function mi(a){pi=hb();return a;}
function oi(a){return li(a);}
function hi(){}
_=hi.prototype=new vu();_.tN=mF+'HTTPRequestImpl';_.tI=0;var pi=null;function ji(a){mi(a);return a;}
function li(a){return new ActiveXObject('Msxml2.XMLHTTP');}
function ii(){}
_=ii.prototype=new hi();_.tN=mF+'HTTPRequestImplIE6';_.tI=0;function sn(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function tn(b,a){if(b.j!==null){sn(b,b.j,a);}b.j=a;}
function un(b,a){xn(b.j,a);}
function vn(b,a){zf(b.y(),a|jf(b.y()));}
function wn(){return this.j;}
function xn(a,b){tf(a,'className',b);}
function yn(){if(this.j===null){return '(null handle)';}return Af(this.j);}
function qn(){}
_=qn.prototype=new vu();_.y=wn;_.tS=yn;_.tN=nF+'UIObject';_.tI=0;_.j=null;function uo(a){if(ee(a.i,10)){de(a.i,10).tb(a);}else if(a.i!==null){throw bu(new au(),"This widget's parent does not implement HasWidgets");}}
function vo(b,a){if(b.bb()){uf(b.y(),null);}tn(b,a);if(b.bb()){uf(a,b);}}
function wo(c,b){var a;a=c.i;if(b===null){if(a!==null&&a.bb()){c.kb();}c.i=null;}else{if(a!==null){throw bu(new au(),'Cannot set a new parent without first clearing the old parent');}c.i=b;if(b.bb()){c.hb();}}}
function xo(){}
function yo(){}
function zo(){return this.h;}
function Ao(){if(this.bb()){throw bu(new au(),"Should only call onAttach when the widget is detached from the browser's document");}this.h=true;uf(this.y(),this);this.q();this.mb();}
function Bo(a){}
function Co(){if(!this.bb()){throw bu(new au(),"Should only call onDetach when the widget is attached to the browser's document");}try{this.ob();}finally{this.r();uf(this.y(),null);this.h=false;}}
function Do(){}
function Eo(){}
function Fo(a){vo(this,a);}
function ao(){}
_=ao.prototype=new qn();_.q=xo;_.r=yo;_.bb=zo;_.hb=Ao;_.ib=Bo;_.kb=Co;_.mb=Do;_.ob=Eo;_.wb=Fo;_.tN=nF+'Widget';_.tI=17;_.h=false;_.i=null;function nm(b,a){wo(a,b);}
function pm(b,a){wo(a,null);}
function qm(){var a,b;for(b=this.db();go(b);){a=ho(b);a.hb();}}
function rm(){var a,b;for(b=this.db();go(b);){a=ho(b);a.kb();}}
function sm(){}
function tm(){}
function mm(){}
_=mm.prototype=new ao();_.q=qm;_.r=rm;_.mb=sm;_.ob=tm;_.tN=nF+'Panel';_.tI=18;function yj(a){a.f=lo(new bo(),a);}
function zj(a){yj(a);return a;}
function Aj(c,a,b){uo(a);mo(c.f,a);qe(b,a.y());nm(c,a);}
function Cj(b,c){var a;if(c.i!==b){return false;}pm(b,c);a=c.y();of(kf(a),a);so(b.f,c);return true;}
function Dj(){return qo(this.f);}
function Ej(a){return Cj(this,a);}
function xj(){}
_=xj.prototype=new mm();_.db=Dj;_.tb=Ej;_.tN=nF+'ComplexPanel';_.tI=19;function ri(a){zj(a);a.wb(te());yf(a.y(),'position','relative');yf(a.y(),'overflow','hidden');return a;}
function si(a,b){Aj(a,b,a.y());}
function ui(a){yf(a,'left','');yf(a,'top','');yf(a,'position','');}
function vi(b){var a;a=Cj(this,b);if(a){ui(b.y());}return a;}
function qi(){}
_=qi.prototype=new xj();_.tb=vi;_.tN=nF+'AbsolutePanel';_.tI=20;function mk(){mk=cC;fp(),hp;}
function lk(b,a){fp(),hp;ok(b,a);return b;}
function nk(b,a){switch(bf(a)){case 1:if(b.c!==null){vj(b.c,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function ok(b,a){vo(b,a);vn(b,7041);}
function pk(a){if(this.c===null){this.c=tj(new sj());}vy(this.c,a);}
function qk(a){nk(this,a);}
function rk(a){ok(this,a);}
function kk(){}
_=kk.prototype=new ao();_.k=pk;_.ib=qk;_.wb=rk;_.tN=nF+'FocusWidget';_.tI=21;_.c=null;function zi(){zi=cC;fp(),hp;}
function yi(b,a){fp(),hp;lk(b,a);return b;}
function Ai(a){vf(this.y(),a);}
function xi(){}
_=xi.prototype=new kk();_.xb=Ai;_.tN=nF+'ButtonBase';_.tI=22;function Ei(){Ei=cC;fp(),hp;}
function Bi(a){fp(),hp;yi(a,se());Fi(a.y());un(a,'gwt-Button');return a;}
function Ci(b,a){fp(),hp;Bi(b);b.xb(a);return b;}
function Di(c,a,b){fp(),hp;Ci(c,a);c.k(b);return c;}
function Fi(b){Ei();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function wi(){}
_=wi.prototype=new xi();_.tN=nF+'Button';_.tI=23;function bj(a){zj(a);a.e=Ce();a.d=ze();qe(a.e,a.d);a.wb(a.e);return a;}
function dj(c,b,a){tf(b,'align',a.a);}
function ej(c,b,a){yf(b,'verticalAlign',a.a);}
function aj(){}
_=aj.prototype=new xj();_.tN=nF+'CellPanel';_.tI=24;_.d=null;_.e=null;function jj(){jj=cC;fp(),hp;}
function gj(a){fp(),hp;hj(a,ue());un(a,'gwt-CheckBox');return a;}
function ij(b,a){fp(),hp;gj(b);nj(b,a);return b;}
function hj(b,a){var c;fp(),hp;yi(b,ye());b.a=a;b.b=we();zf(b.a,jf(b.y()));zf(b.y(),0);qe(b.y(),b.a);qe(b.y(),b.b);c='check'+ ++rj;tf(b.a,'id',c);tf(b.b,'htmlFor',c);return b;}
function kj(b){var a;a=b.bb()?'checked':'defaultChecked';return ff(b.a,a);}
function lj(b,a){rf(b.a,'checked',a);rf(b.a,'defaultChecked',a);}
function mj(b,a){tf(b.a,'name',a);}
function nj(b,a){wf(b.b,a);}
function oj(){uf(this.a,this);}
function pj(){uf(this.a,null);lj(this,kj(this));}
function qj(a){vf(this.b,a);}
function fj(){}
_=fj.prototype=new xi();_.mb=oj;_.ob=pj;_.xb=qj;_.tN=nF+'CheckBox';_.tI=25;_.a=null;_.b=null;var rj=0;function ow(d,a,b){var c;while(a.ab()){c=a.fb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function qw(a){throw lw(new kw(),'add');}
function rw(b){var a;a=ow(this,this.db(),b);return a!==null;}
function sw(){var a,b,c;c=Fu(new Eu());a=null;cv(c,'[');b=this.db();while(b.ab()){if(a!==null){cv(c,a);}else{a=', ';}cv(c,Ev(b.fb()));}cv(c,']');return gv(c);}
function nw(){}
_=nw.prototype=new vu();_.m=qw;_.o=rw;_.tS=sw;_.tN=tF+'AbstractCollection';_.tI=0;function Cw(b,a){throw eu(new du(),'Index: '+a+', Size: '+b.b);}
function Dw(b,a){throw lw(new kw(),'add');}
function Ew(a){this.l(this.zb(),a);return true;}
function Fw(e){var a,b,c,d,f;if(e===this){return true;}if(!ee(e,30)){return false;}f=de(e,30);if(this.zb()!=f.zb()){return false;}c=this.db();d=f.db();while(c.ab()){a=c.fb();b=d.fb();if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function ax(){var a,b,c,d;c=1;a=31;b=this.db();while(b.ab()){d=b.fb();c=31*c+(d===null?0:d.hC());}return c;}
function bx(){return vw(new uw(),this);}
function cx(a){throw lw(new kw(),'remove');}
function tw(){}
_=tw.prototype=new nw();_.l=Dw;_.m=Ew;_.eQ=Fw;_.hC=ax;_.db=bx;_.sb=cx;_.tN=tF+'AbstractList';_.tI=26;function sy(a){{wy(a);}}
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
_=ry.prototype=new tw();_.l=Fy;_.m=az;_.o=bz;_.E=ez;_.sb=gz;_.zb=iz;_.tN=tF+'ArrayList';_.tI=27;_.a=null;_.b=0;function tj(a){ty(a);return a;}
function vj(d,c){var a,b;for(a=d.db();a.ab();){b=de(a.fb(),8);b.jb(c);}}
function sj(){}
_=sj.prototype=new ry();_.tN=nF+'ClickListenerCollection';_.tI=28;function bk(a,b){if(a.g!==null){throw bu(new au(),'Composite.initWidget() may only be called once.');}uo(b);a.wb(b.y());a.g=b;wo(b,a);}
function ck(){if(this.g===null){throw bu(new au(),'initWidget() was never called in '+w(this));}return this.j;}
function dk(){if(this.g!==null){return this.g.bb();}return false;}
function ek(){this.g.hb();this.mb();}
function fk(){try{this.ob();}finally{this.g.kb();}}
function Fj(){}
_=Fj.prototype=new ao();_.y=ck;_.bb=dk;_.hb=ek;_.kb=fk;_.tN=nF+'Composite';_.tI=29;_.g=null;function hk(a){zj(a);a.wb(te());return a;}
function ik(a,b){Aj(a,b,a.y());}
function gk(){}
_=gk.prototype=new xj();_.tN=nF+'FlowPanel';_.tI=30;function yk(){yk=cC;wk(new vk(),'center');zk=wk(new vk(),'left');wk(new vk(),'right');}
var zk;function wk(b,a){b.a=a;return b;}
function vk(){}
_=vk.prototype=new vu();_.tN=nF+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=0;_.a=null;function Fk(){Fk=cC;Dk(new Ck(),'bottom');al=Dk(new Ck(),'middle');bl=Dk(new Ck(),'top');}
var al,bl;function Dk(a,b){a.a=b;return a;}
function Ck(){}
_=Ck.prototype=new vu();_.tN=nF+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=0;_.a=null;function fl(a){a.a=(yk(),zk);a.c=(Fk(),bl);}
function gl(a){bj(a);fl(a);a.b=Be();qe(a.d,a.b);tf(a.e,'cellSpacing','0');tf(a.e,'cellPadding','0');return a;}
function hl(b,c){var a;a=jl(b);qe(b.b,a);Aj(b,c,a);}
function jl(b){var a;a=Ae();dj(b,a,b.a);ej(b,a,b.c);return a;}
function kl(b,a){b.c=a;}
function ll(c){var a,b;b=kf(c.y());a=Cj(this,c);if(a){of(this.b,b);}return a;}
function el(){}
_=el.prototype=new aj();_.tb=ll;_.tN=nF+'HorizontalPanel';_.tI=31;_.b=null;function ol(a){a.wb(te());vn(a,131197);un(a,'gwt-Label');return a;}
function pl(b,a){ol(b);rl(b,a);return b;}
function rl(b,a){wf(b.y(),a);}
function sl(a){switch(bf(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function nl(){}
_=nl.prototype=new ao();_.ib=sl;_.tN=nF+'Label';_.tI=32;function am(){am=cC;fp(),hp;km=new ul();}
function Bl(b,a){am();lk(b,xe(a));vn(b,1024);un(b,'gwt-ListBox');return b;}
function Cl(b,a){fm(b,a,(-1));}
function Dl(b,a,c){gm(b,a,c,(-1));}
function El(b,a){if(a<0||a>=bm(b)){throw new du();}}
function Fl(a){vl(km,a.y());}
function bm(a){return xl(km,a.y());}
function cm(b,a){El(b,a);return yl(km,b.y(),a);}
function dm(a){return gf(a.y(),'selectedIndex');}
function em(b,a){El(b,a);return zl(km,b.y(),a);}
function fm(c,b,a){gm(c,b,b,a);}
function gm(c,b,d,a){mf(c.y(),b,d,a);}
function hm(b,a){El(b,a);Al(km,b.y(),a);}
function im(c,a,b){El(c,a);if(b===null){throw pu(new ou(),'Cannot set an option to have null text');}xf(c.y(),b,a);}
function jm(a,b){sf(a.y(),'size',b);}
function lm(a){if(bf(a)==1024){}else{nk(this,a);}}
function tl(){}
_=tl.prototype=new kk();_.ib=lm;_.tN=nF+'ListBox';_.tI=33;var km;function vl(b,a){a.options.length=0;}
function xl(b,a){return a.options.length;}
function yl(c,b,a){return b.options[a].text;}
function zl(c,b,a){return b.options[a].value;}
function Al(c,b,a){b.options[a]=null;}
function ul(){}
_=ul.prototype=new vu();_.tN=nF+'ListBox$Impl';_.tI=0;function Am(){Am=cC;Em=hA(new lz());}
function zm(b,a){Am();ri(b);if(a===null){a=Bm();}b.wb(a);b.hb();return b;}
function Cm(c){Am();var a,b;b=de(oA(Em,c),9);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=ef(c))){return null;}}if(Em.c==0){Dm();}qA(Em,c,b=zm(new um(),a));return b;}
function Bm(){Am();return $doc.body;}
function Dm(){Am();Bg(new vm());}
function um(){}
_=um.prototype=new qi();_.tN=nF+'RootPanel';_.tI=34;var Em;function xm(){var a,b;for(b=wx(fy((Am(),Em)));Dx(b);){a=de(Ex(b),9);if(a.bb()){a.kb();}}}
function ym(){return null;}
function vm(){}
_=vm.prototype=new vu();_.pb=xm;_.qb=ym;_.tN=nF+'RootPanel$1';_.tI=35;function jn(){jn=cC;fp(),hp;}
function hn(b,a){fp(),hp;lk(b,a);vn(b,1024);return b;}
function kn(a){return hf(a.y(),'value');}
function ln(a){if(this.a===null){this.a=tj(new sj());}vy(this.a,a);}
function mn(a){var b;nk(this,a);b=bf(a);if(b==1){if(this.a!==null){vj(this.a,this);}}else{}}
function gn(){}
_=gn.prototype=new kk();_.k=ln;_.ib=mn;_.tN=nF+'TextBoxBase';_.tI=36;_.a=null;function on(){on=cC;fp(),hp;}
function nn(a){fp(),hp;hn(a,ve());un(a,'gwt-TextBox');return a;}
function pn(b,a){sf(b.y(),'size',a);}
function fn(){}
_=fn.prototype=new gn();_.tN=nF+'TextBox';_.tI=37;function An(a){a.a=(yk(),zk);a.b=(Fk(),bl);}
function Bn(a){bj(a);An(a);tf(a.e,'cellSpacing','0');tf(a.e,'cellPadding','0');return a;}
function Cn(b,d){var a,c;c=Be();a=En(b);qe(c,a);qe(b.d,c);Aj(b,d,a);}
function En(b){var a;a=Ae();dj(b,a,b.a);ej(b,a,b.b);return a;}
function Fn(c){var a,b;b=kf(c.y());a=Cj(this,c);if(a){of(this.d,kf(b));}return a;}
function zn(){}
_=zn.prototype=new aj();_.tb=Fn;_.tN=nF+'VerticalPanel';_.tI=38;function lo(b,a){b.b=a;b.a=Ed('[Lcom.google.gwt.user.client.ui.Widget;',[0],[13],[4],null);return b;}
function mo(a,b){po(a,b,a.c);}
function oo(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]===c){return a;}}return (-1);}
function po(d,e,a){var b,c;if(a<0||a>d.c){throw new du();}if(d.c==d.a.a){c=Ed('[Lcom.google.gwt.user.client.ui.Widget;',[0],[13],[d.a.a*2],null);for(b=0;b<d.a.a;++b){Fd(c,b,d.a[b]);}d.a=c;}++d.c;for(b=d.c-1;b>a;--b){Fd(d.a,b,d.a[b-1]);}Fd(d.a,a,e);}
function qo(a){return eo(new co(),a);}
function ro(c,b){var a;if(b<0||b>=c.c){throw new du();}--c.c;for(a=b;a<c.c;++a){Fd(c.a,a,c.a[a+1]);}Fd(c.a,c.c,null);}
function so(b,c){var a;a=oo(b,c);if(a==(-1)){throw new rB();}ro(b,a);}
function bo(){}
_=bo.prototype=new vu();_.tN=nF+'WidgetCollection';_.tI=0;_.a=null;_.b=null;_.c=0;function eo(b,a){b.b=a;return b;}
function go(a){return a.a<a.b.c-1;}
function ho(a){if(a.a>=a.b.c){throw new rB();}return a.b.a[++a.a];}
function io(){return go(this);}
function jo(){return ho(this);}
function ko(){if(this.a<0||this.a>=this.b.c){throw new au();}this.b.b.tb(this.b.a[this.a--]);}
function co(){}
_=co.prototype=new vu();_.ab=io;_.fb=jo;_.rb=ko;_.tN=nF+'WidgetCollection$WidgetIterator';_.tI=0;_.a=(-1);function fp(){fp=cC;gp=cp(new bp());hp=gp;}
function ep(a){fp();return a;}
function ap(){}
_=ap.prototype=new vu();_.tN=oF+'FocusImpl';_.tI=0;var gp,hp;function dp(){dp=cC;fp();}
function cp(a){dp();ep(a);return a;}
function bp(){}
_=bp.prototype=new ap();_.tN=oF+'FocusImplIE6';_.tI=0;function np(c,a,b){Bu(c,b);return c;}
function mp(){}
_=mp.prototype=new Au();_.tN=pF+'DOMException';_.tI=39;function yp(){yp=cC;zp=(qs(),bt);}
function Ap(a){yp();return rs(zp,a);}
var zp;function oq(b,a){b.a=a;return b;}
function pq(a,b){return b;}
function rq(a){if(ee(a,25)){return re(pq(this,this.a),pq(this,de(a,25).a));}return false;}
function nq(){}
_=nq.prototype=new vu();_.eQ=rq;_.tN=qF+'DOMItem';_.tI=40;_.a=null;function mr(b,a){oq(b,a);return b;}
function or(a){return hr(new gr(),ts(a.a));}
function pr(a){return xr(new wr(),us(a.a));}
function qr(a){return As(a.a);}
function rr(a){return Cs(a.a);}
function sr(a){return Fs(a.a);}
function tr(a){return at(a.a);}
function ur(a){var b;if(a===null){return null;}b=Bs(a);switch(b){case 2:return Cp(new Bp(),a);case 4:return cq(new bq(),a);case 8:return kq(new jq(),a);case 11:return xq(new wq(),a);case 9:return Bq(new Aq(),a);case 1:return ar(new Fq(),a);case 7:return as(new Fr(),a);case 3:return fs(new es(),a);default:return mr(new lr(),a);}}
function vr(){return pr(this).cb(0);}
function lr(){}
_=lr.prototype=new nq();_.A=vr;_.tN=qF+'NodeImpl';_.tI=41;function Cp(b,a){mr(b,a);return b;}
function Ep(a){return zs(a.a);}
function Fp(a){return Es(a.a);}
function aq(){var a;a=Fu(new Eu());cv(a,' '+Ep(this));cv(a,'="');cv(a,Fp(this));cv(a,'"');return gv(a);}
function Bp(){}
_=Bp.prototype=new lr();_.tS=aq;_.tN=qF+'AttrImpl';_.tI=42;function gq(b,a){mr(b,a);return b;}
function iq(a){return vs(a.a);}
function fq(){}
_=fq.prototype=new lr();_.tN=qF+'CharacterDataImpl';_.tI=43;function fs(b,a){gq(b,a);return b;}
function hs(){var a,b,c;a=Fu(new Eu());c=rv(iq(this),'(?=[;&<>\'"])',(-1));for(b=0;b<c.a;b++){if(sv(c[b],';')){cv(a,'&semi;');cv(a,tv(c[b],1));}else if(sv(c[b],'&')){cv(a,'&amp;');cv(a,tv(c[b],1));}else if(sv(c[b],'"')){cv(a,'&quot;');cv(a,tv(c[b],1));}else if(sv(c[b],"'")){cv(a,'&apos;');cv(a,tv(c[b],1));}else if(sv(c[b],'<')){cv(a,'&lt;');cv(a,tv(c[b],1));}else if(sv(c[b],'>')){cv(a,'&gt;');cv(a,tv(c[b],1));}else{cv(a,c[b]);}}return gv(a);}
function es(){}
_=es.prototype=new fq();_.tS=hs;_.tN=qF+'TextImpl';_.tI=44;function cq(b,a){fs(b,a);return b;}
function eq(){var a;a=av(new Eu(),'<![CDATA[');cv(a,iq(this));cv(a,']]>');return gv(a);}
function bq(){}
_=bq.prototype=new es();_.tS=eq;_.tN=qF+'CDATASectionImpl';_.tI=45;function kq(b,a){gq(b,a);return b;}
function mq(){var a;a=av(new Eu(),'<!--');cv(a,iq(this));cv(a,'-->');return gv(a);}
function jq(){}
_=jq.prototype=new fq();_.tS=mq;_.tN=qF+'CommentImpl';_.tI=46;function tq(c,a,b){np(c,12,'Failed to parse: '+vq(a));gw(c,b);return c;}
function vq(a){return uv(a,0,lu(ov(a),128));}
function sq(){}
_=sq.prototype=new mp();_.tN=qF+'DOMParseException';_.tI=47;function xq(b,a){mr(b,a);return b;}
function zq(){var a,b;a=Fu(new Eu());for(b=0;b<pr(this).C();b++){bv(a,pr(this).cb(b));}return gv(a);}
function wq(){}
_=wq.prototype=new lr();_.tS=zq;_.tN=qF+'DocumentFragmentImpl';_.tI=48;function Bq(b,a){mr(b,a);return b;}
function Dq(){return de(ur(ws(this.a)),26);}
function Eq(){var a,b,c;a=Fu(new Eu());b=pr(this);for(c=0;c<b.C();c++){cv(a,b.cb(c).tS());}return gv(a);}
function Aq(){}
_=Aq.prototype=new lr();_.w=Dq;_.tS=Eq;_.tN=qF+'DocumentImpl';_.tI=49;function ar(b,a){mr(b,a);return b;}
function cr(a){return Ds(a.a);}
function dr(a){return ss(this.a,a);}
function er(a){return xr(new wr(),xs(this.a,a));}
function fr(){var a;a=av(new Eu(),'<');cv(a,cr(this));if(sr(this)){cv(a,Br(or(this)));}if(tr(this)){cv(a,'>');cv(a,Br(pr(this)));cv(a,'<\/');cv(a,cr(this));cv(a,'>');}else{cv(a,'/>');}return gv(a);}
function Fq(){}
_=Fq.prototype=new lr();_.v=dr;_.z=er;_.tS=fr;_.tN=qF+'ElementImpl';_.tI=50;function xr(b,a){oq(b,a);return b;}
function zr(a){return ys(a.a);}
function Ar(b,a){return ur(ct(b.a,a));}
function Br(c){var a,b;a=Fu(new Eu());for(b=0;b<c.C();b++){cv(a,c.cb(b).tS());}return gv(a);}
function Cr(){return zr(this);}
function Dr(a){return Ar(this,a);}
function Er(){return Br(this);}
function wr(){}
_=wr.prototype=new nq();_.C=Cr;_.cb=Dr;_.tS=Er;_.tN=qF+'NodeListImpl';_.tI=51;function hr(b,a){xr(b,a);return b;}
function jr(){return zr(this);}
function kr(a){return Ar(this,a);}
function gr(){}
_=gr.prototype=new wr();_.C=jr;_.cb=kr;_.tN=qF+'NamedNodeMapImpl';_.tI=52;function as(b,a){mr(b,a);return b;}
function cs(a){return vs(a.a);}
function ds(){var a;a=av(new Eu(),'<?');cv(a,qr(this));cv(a,' ');cv(a,cs(this));cv(a,'?>');return gv(a);}
function Fr(){}
_=Fr.prototype=new lr();_.tS=ds;_.tN=qF+'ProcessingInstructionImpl';_.tI=53;function qs(){qs=cC;bt=ks(new js());}
function ps(a){qs();return a;}
function rs(e,c){var a,d;try{return de(ur(ns(e,c)),27);}catch(a){a=le(a);if(ee(a,28)){d=a;throw tq(new sq(),c,d);}else throw a;}}
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
function is(){}
_=is.prototype=new vu();_.tN=qF+'XMLParserImpl';_.tI=0;var bt;function ls(){ls=cC;qs();}
function ks(a){ls();ps(a);return a;}
function ms(c,a,b){return a.selectNodes(".//*[local-name()='"+b+"']");}
function ns(d,a){var b=d.p();if(!b.loadXML(a)){var c=b.parseError;throw new Error('line '+c.line+', char '+c.linepos+':'+c.reason);}else{return b;}}
function os(){var a=new ActiveXObject('MSXML2.DOMDocument');a.preserveWhiteSpace=true;a.setProperty('SelectionNamespaces',"xmlns:xsl='http://www.w3.org/1999/XSL/Transform'");a.setProperty('SelectionLanguage','XPath');return a;}
function js(){}
_=js.prototype=new is();_.p=os;_.tN=qF+'XMLParserImplIE6';_.tI=0;function gt(){}
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
function gv(a){a.gb();return a.js[0];}
function hv(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function iv(){return gv(this);}
function Eu(){}
_=Eu.prototype=new vu();_.gb=hv;_.tS=iv;_.tN=sF+'StringBuffer';_.tI=0;function aw(){aw=cC;bw=new it();}
function cw(a){aw();return C(a);}
var bw;function lw(b,a){Bu(b,a);return b;}
function kw(){}
_=kw.prototype=new Au();_.tN=sF+'UnsupportedOperationException';_.tI=62;function vw(b,a){b.c=a;return b;}
function xw(a){return a.a<a.c.zb();}
function yw(){return xw(this);}
function zw(){if(!xw(this)){throw new rB();}return this.c.E(this.b=this.a++);}
function Aw(){if(this.b<0){throw new au();}this.c.sb(this.b);this.a=this.b;this.b=(-1);}
function uw(){}
_=uw.prototype=new vu();_.ab=yw;_.fb=zw;_.rb=Aw;_.tN=tF+'AbstractList$IteratorImpl';_.tI=0;_.a=0;_.b=(-1);function dy(f,d,e){var a,b,c;for(b=cA(f.s());Az(b);){a=Bz(b);c=a.B();if(d===null?c===null:d.eQ(c)){if(e){Cz(b);}return a;}}return null;}
function ey(b){var a;a=b.s();return fx(new ex(),b,a);}
function fy(b){var a;a=nA(b);return ux(new tx(),b,a);}
function gy(a){return dy(this,a,false)!==null;}
function hy(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ee(d,31)){return false;}f=de(d,31);c=ey(this);e=f.eb();if(!oy(c,e)){return false;}for(a=hx(c);ox(a);){b=px(a);h=this.F(b);g=f.F(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function iy(b){var a;a=dy(this,b,false);return a===null?null:a.D();}
function jy(){var a,b,c;b=0;for(c=cA(this.s());Az(c);){a=Bz(c);b+=a.hC();}return b;}
function ky(){return ey(this);}
function ly(){var a,b,c,d;d='{';a=false;for(c=cA(this.s());Az(c);){b=Bz(c);if(a){d+=', ';}else{a=true;}d+=Ev(b.B());d+='=';d+=Ev(b.D());}return d+'}';}
function dx(){}
_=dx.prototype=new vu();_.n=gy;_.eQ=hy;_.F=iy;_.hC=jy;_.eb=ky;_.tS=ly;_.tN=tF+'AbstractMap';_.tI=63;function oy(e,b){var a,c,d;if(b===e){return true;}if(!ee(b,32)){return false;}c=de(b,32);if(c.zb()!=e.zb()){return false;}for(a=c.db();a.ab();){d=a.fb();if(!e.o(d)){return false;}}return true;}
function py(a){return oy(this,a);}
function qy(){var a,b,c;a=0;for(b=this.db();b.ab();){c=b.fb();if(c!==null){a+=c.hC();}}return a;}
function my(){}
_=my.prototype=new nw();_.eQ=py;_.hC=qy;_.tN=tF+'AbstractSet';_.tI=64;function fx(b,a,c){b.a=a;b.b=c;return b;}
function hx(b){var a;a=cA(b.b);return mx(new lx(),b,a);}
function ix(a){return this.a.n(a);}
function jx(){return hx(this);}
function kx(){return this.b.a.c;}
function ex(){}
_=ex.prototype=new my();_.o=ix;_.db=jx;_.zb=kx;_.tN=tF+'AbstractMap$1';_.tI=65;function mx(b,a,c){b.a=c;return b;}
function ox(a){return a.a.ab();}
function px(b){var a;a=b.a.fb();return a.B();}
function qx(){return ox(this);}
function rx(){return px(this);}
function sx(){this.a.rb();}
function lx(){}
_=lx.prototype=new vu();_.ab=qx;_.fb=rx;_.rb=sx;_.tN=tF+'AbstractMap$2';_.tI=0;function ux(b,a,c){b.a=a;b.b=c;return b;}
function wx(b){var a;a=cA(b.b);return Bx(new Ax(),b,a);}
function xx(a){return mA(this.a,a);}
function yx(){return wx(this);}
function zx(){return this.b.a.c;}
function tx(){}
_=tx.prototype=new nw();_.o=xx;_.db=yx;_.zb=zx;_.tN=tF+'AbstractMap$3';_.tI=0;function Bx(b,a,c){b.a=c;return b;}
function Dx(a){return a.a.ab();}
function Ex(a){var b;b=a.a.fb().D();return b;}
function Fx(){return Dx(this);}
function ay(){return Ex(this);}
function by(){this.a.rb();}
function Ax(){}
_=Ax.prototype=new vu();_.ab=Fx;_.fb=ay;_.rb=by;_.tN=tF+'AbstractMap$4';_.tI=0;function kA(){kA=cC;sA=yA();}
function gA(a){{jA(a);}}
function hA(a){kA();gA(a);return a;}
function iA(a,b){kA();gA(a);pA(a,b);return a;}
function jA(a){a.a=gb();a.d=ib();a.b=ie(sA,cb);a.c=0;}
function lA(b,a){if(ee(a,1)){return CA(b.d,de(a,1))!==sA;}else if(a===null){return b.b!==sA;}else{return BA(b.a,a,a.hC())!==sA;}}
function mA(a,b){if(a.b!==sA&&AA(a.b,b)){return true;}else if(xA(a.d,b)){return true;}else if(vA(a.a,b)){return true;}return false;}
function nA(a){return aA(new wz(),a);}
function oA(c,a){var b;if(ee(a,1)){b=CA(c.d,de(a,1));}else if(a===null){b=c.b;}else{b=BA(c.a,a,a.hC());}return b===sA?null:b;}
function qA(c,a,d){var b;if(ee(a,1)){b=FA(c.d,de(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=EA(c.a,a,d,a.hC());}if(b===sA){++c.c;return null;}else{return b;}}
function pA(d,c){var a,b;b=cA(nA(c));while(Az(b)){a=Bz(b);qA(d,a.B(),a.D());}}
function rA(c,a){var b;if(ee(a,1)){b=bB(c.d,de(a,1));}else if(a===null){b=c.b;c.b=ie(sA,cb);}else{b=aB(c.a,a,a.hC());}if(b===sA){return null;}else{--c.c;return b;}}
function tA(e,c){kA();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.m(a[f]);}}}}
function uA(d,a){kA();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=pz(c.substring(1),e);a.m(b);}}}
function vA(f,h){kA();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.D();if(AA(h,d)){return true;}}}}return false;}
function wA(a){return lA(this,a);}
function xA(c,d){kA();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(AA(d,a)){return true;}}}return false;}
function yA(){kA();}
function zA(){return nA(this);}
function AA(a,b){kA();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function DA(a){return oA(this,a);}
function BA(f,h,e){kA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.B();if(AA(h,d)){return c.D();}}}}
function CA(b,a){kA();return b[':'+a];}
function EA(f,h,j,e){kA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.B();if(AA(h,d)){var i=c.D();c.yb(j);return i;}}}else{a=f[e]=[];}var c=pz(h,j);a.push(c);}
function FA(c,a,d){kA();a=':'+a;var b=c[a];c[a]=d;return b;}
function aB(f,h,e){kA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.B();if(AA(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.D();}}}}
function bB(c,a){kA();a=':'+a;var b=c[a];delete c[a];return b;}
function lz(){}
_=lz.prototype=new dx();_.n=wA;_.s=zA;_.F=DA;_.tN=tF+'HashMap';_.tI=66;_.a=null;_.b=null;_.c=0;_.d=null;var sA;function nz(b,a,c){b.a=a;b.b=c;return b;}
function pz(a,b){return nz(new mz(),a,b);}
function qz(b){var a;if(ee(b,33)){a=de(b,33);if(AA(this.a,a.B())&&AA(this.b,a.D())){return true;}}return false;}
function rz(){return this.a;}
function sz(){return this.b;}
function tz(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function uz(a){var b;b=this.b;this.b=a;return b;}
function vz(){return this.a+'='+this.b;}
function mz(){}
_=mz.prototype=new vu();_.eQ=qz;_.B=rz;_.D=sz;_.hC=tz;_.yb=uz;_.tS=vz;_.tN=tF+'HashMap$EntryImpl';_.tI=67;_.a=null;_.b=null;function aA(b,a){b.a=a;return b;}
function cA(a){return yz(new xz(),a.a);}
function dA(c){var a,b,d;if(ee(c,33)){a=de(c,33);b=a.B();if(lA(this.a,b)){d=oA(this.a,b);return AA(a.D(),d);}}return false;}
function eA(){return cA(this);}
function fA(){return this.a.c;}
function wz(){}
_=wz.prototype=new my();_.o=dA;_.db=eA;_.zb=fA;_.tN=tF+'HashMap$EntrySet';_.tI=68;function yz(c,b){var a;c.c=b;a=ty(new ry());if(c.c.b!==(kA(),sA)){vy(a,nz(new mz(),null,c.c.b));}uA(c.c.d,a);tA(c.c.a,a);c.a=a.db();return c;}
function Az(a){return a.a.ab();}
function Bz(a){return a.b=de(a.a.fb(),33);}
function Cz(a){if(a.b===null){throw bu(new au(),'Must call next() before remove().');}else{a.a.rb();rA(a.c,a.b.B());a.b=null;}}
function Dz(){return Az(this);}
function Ez(){return Bz(this);}
function Fz(){Cz(this);}
function xz(){}
_=xz.prototype=new vu();_.ab=Dz;_.fb=Ez;_.rb=Fz;_.tN=tF+'HashMap$EntrySetIterator';_.tI=0;_.a=null;_.b=null;function dB(a){a.a=hA(new lz());return a;}
function fB(a){var b;b=qA(this.a,a,ut(true));return b===null;}
function gB(a){return lA(this.a,a);}
function hB(){return hx(ey(this.a));}
function iB(){return this.a.c;}
function jB(){return ey(this.a).tS();}
function cB(){}
_=cB.prototype=new my();_.m=fB;_.o=gB;_.db=hB;_.zb=iB;_.tS=jB;_.tN=tF+'HashSet';_.tI=69;_.a=null;function pB(d,c,a,b){Bu(d,c);return d;}
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
function FB(){return this.a.db();}
function aC(a){return Cy(this.a,a);}
function bC(){return this.a.b;}
function vB(){}
_=vB.prototype=new tw();_.l=BB;_.m=CB;_.o=DB;_.E=EB;_.db=FB;_.sb=aC;_.zb=bC;_.tN=tF+'Vector';_.tI=72;_.a=null;function AC(g,h){var a,c,d,e,f;h=pv(h,'&amp;','&');c=fD(new dD(),h);try{e=eF(c);f=sC(new rC(),g,e,c);qg(f,1);}catch(a){a=le(a);if(ee(a,35)){d=a;hw(d);}else throw a;}}
function BC(g,h){var a,c,d,e,f;h=pv(h,'&amp;','&');c=oD(new mD(),h);try{e=eF(c);f=wC(new vC(),g,e,c);qg(f,1);}catch(a){a=le(a);if(ee(a,35)){d=a;Cg('Exception: '+d.b);hw(d);}else throw a;}}
function CC(r){var a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s;k='DEFAULT-identities-and-usecases.xml';l='DEFAULT-policy.xml';f='DEFAULT-cancel.html';m='DEFAULT-save-policy.xml';try{h=td('getURLs');k=qd(h,'identities-url');l=qd(h,'policy-url');f=qd(h,'cancel-url');m=qd(h,'save-url');}catch(a){a=le(a);if(ee(a,34)){i=a;Cg('Exception: '+i.b);}else throw a;}AC(r,k);BC(r,l);s=Bn(new zn());si(Cm('access-policy-editor-hook'),s);p=Bn(new zn());Cn(s,p);q=nn(new fn());pn(q,30);Cn(p,q);o=Di(new wi(),'Save User or Group',fC(new eC(),r,q));Cn(p,o);j=gl(new el());kl(j,(Fk(),al));Cn(s,j);d=gl(new el());Cn(s,d);n=pv(m,'&amp;','&');r.e=Di(new wi(),'Save Policy',jC(new iC(),r,n));un(r.e,'gwt-wyona-SaveButton');hl(d,r.e);g=f;e=Di(new wi(),'Cancel',nC(new mC(),r,g));un(r.e,'gwt-wyona-CancelButton');hl(d,e);r.a=FD(new DD(),r.g);r.c=fE(new dE(),r.g,r.d,r.b,r.f);c=FC(new DC(),r.a.a,r.c.c,r.c);un(c,'gwt-wyona-AddRemoveWidget');hl(j,r.a);hl(j,c);hl(j,r.c);}
function dC(){}
_=dC.prototype=new vu();_.tN=uF+'AccessPolicyEditor';_.tI=0;_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;_.f=true;_.g=10;function fC(b,a,c){b.a=a;b.b=c;return b;}
function hC(d){var a,b,c;b=bm(this.a.a.a);for(a=0;a<b;a++){c=cm(this.a.a.a,a);if(mv(c,kn(this.b))>=0)Cg('Result: '+c);}}
function eC(){}
_=eC.prototype=new vu();_.jb=hC;_.tN=uF+'AccessPolicyEditor$1';_.tI=73;function jC(b,a,c){b.a=a;b.b=c;return b;}
function lC(f){var a,c,d,e;c=vD(new uD(),this.b);try{e=xD(c,qE(this.a.c),jE(this.a.c),pE(this.a.c));}catch(a){a=le(a);if(ee(a,35)){d=a;Cg('Exception: '+d.b);}else throw a;}}
function iC(){}
_=iC.prototype=new vu();_.jb=lC;_.tN=uF+'AccessPolicyEditor$2';_.tI=74;function nC(b,a,c){b.a=c;return b;}
function pC(a,b){$wnd.location.href=b;}
function qC(a){pC(this,this.a);}
function mC(){}
_=mC.prototype=new vu();_.jb=qC;_.tN=uF+'AccessPolicyEditor$3';_.tI=75;function tC(){tC=cC;ng();}
function sC(b,a,d,c){tC();b.a=a;b.c=d;b.b=c;lg(b);return b;}
function uC(){if(xc(this.c)){pg(this,10);}else{bE(this.a.a,this.a.g,kD(this.b),iD(this.b));wE(this.a.c,jD(this.b));mg(this);}}
function rC(){}
_=rC.prototype=new gg();_.vb=uC;_.tN=uF+'AccessPolicyEditor$4';_.tI=76;function xC(){xC=cC;ng();}
function wC(b,a,d,c){xC();b.a=a;b.c=d;b.b=c;lg(b);return b;}
function yC(){if(xc(this.c)){pg(this,10);}else{this.a.d=sD(this.b);this.a.b=rD(this.b);sE(this.a.c,this.a.g,this.a.d,this.a.b);this.a.f=this.b.b;tE(this.a.c,this.a.f);mg(this);}}
function vC(){}
_=vC.prototype=new gg();_.vb=yC;_.tN=uF+'AccessPolicyEditor$5';_.tI=77;function EC(a){a.b=hk(new gk());}
function FC(d,a,c,b){EC(d);bk(d,d.b);d.f=Di(new wi(),'<',d);ik(d.b,d.f);d.a=Di(new wi(),'>',d);ik(d.b,d.a);d.c=a;d.d=c;d.e=b;return d;}
function bD(b,a){if(mv(a,'(')>0){return uv(a,0,mv(a,'('));}else{return a;}}
function cD(c){var a,b;if(c===this.a){a=dm(this.c);if(a>=0){b=em(this.c,a);hm(this.c,a);gE(this.e,uv(b,0,1),vv(tv(b,2)));}else{Cg('No identity selected yet! Please select an identity.');}}else if(c===this.f){a=dm(this.d);if(a>=0){b=em(this.d,a);hm(this.d,a);Cl(this.c,bD(this,b));}else{Cg('No identity selected yet! Please select an identity.');}}}
function DC(){}
_=DC.prototype=new Fj();_.jb=cD;_.tN=uF+'AddRemoveIdentitiesWidget';_.tI=78;_.a=null;_.c=null;_.d=null;_.e=null;_.f=null;function aF(a){a.d=hA(new lz());}
function bF(a,b){aF(a);a.e=Db(new yb(),(Fb(),dc),b);fF(a);return a;}
function cF(e){var a,b,c,d;b='';a=iA(new lz(),e.d);for(d=cA(nA(a));Az(d);){c=Bz(d);b+=c.B()+''+c.D();if(Az(d)){b+='&';}}return b;}
function eF(a){return ac(a.e,cF(a),a);}
function fF(a){bc(a.e,'Content-Type','application/x-www-form-urlencoded');}
function gF(b,a){Cg('Exception: '+a.b);}
function FE(){}
_=FE.prototype=new vu();_.lb=gF;_.tN=vF+'AsynchronousAgent';_.tI=0;_.e=null;function eD(a){a.c=wB(new vB());a.a=wB(new vB());a.b=wB(new vB());}
function fD(a,b){bF(a,b);eD(a);return a;}
function hD(d,c,a){var b;b=c.z(a);return de(b.cb(0),26);}
function iD(c){var a,b;a=Ed('[Ljava.lang.String;',[0],[1],[c.a.a.b],null);for(b=0;b<c.a.a.b;b++){a[b]=de(zB(c.a,b),1);}return a;}
function jD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[c.b.a.b],null);for(a=0;a<c.b.a.b;a++){b[a]=de(zB(c.b,a),36);}return b;}
function kD(b){var a,c;c=Ed('[Ljava.lang.String;',[0],[1],[b.c.a.b],null);for(a=0;a<b.c.a.b;a++){c[a]=de(zB(b.c,a),1);}return c;}
function lD(e,f){var a,b,c,d,g,h,i,j,k;i=Ap(tb(f)).w();k=hD(this,i,'users');j=k.z('user');for(c=0;c<j.C();c++){xB(this.c,de(j.cb(c),26).v('id'));}b=hD(this,i,'groups');a=b.z('group');for(c=0;c<a.C();c++){xB(this.a,de(a.cb(c),26).v('id'));}h=hD(this,i,'rights');g=h.z('right');for(c=0;c<g.C();c++){d=rr(de(g.cb(c),26).A());xB(this.b,zE(new yE(),de(g.cb(c),26).v('id'),d));}}
function dD(){}
_=dD.prototype=new FE();_.nb=lD;_.tN=uF+'AsynchronousIdentitiesAndRightsGetter';_.tI=0;function nD(a){a.c=wB(new vB());a.a=wB(new vB());}
function oD(a,b){bF(a,b);nD(a);return a;}
function qD(d,c,a){var b;b=c.z(a);if(b.C()>0){return de(b.cb(0),26);}else{return null;}}
function rD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[38],[c.a.a.b],null);for(a=0;a<b.a;a++){b[a]=de(zB(c.a,a),38);}return b;}
function sD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[37],[c.c.a.b],null);for(a=0;a<b.a;a++){b[a]=de(zB(c.c,a),37);}return b;}
function tD(e,f){var a,b,c,d,g,h,i,j,k,l,m,n;j=Ap(tb(f)).w();k=j.v('use-inherited-policies');if(k===null){this.b=true;}else{if(lv(k,'false')){this.b=false;}else{this.b=true;}}n=qD(this,j,'world');m=j.z('user');for(c=0;c<m.C();c++){l=de(m.cb(c),26);h=l.z('right');i=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[h.C()],null);for(d=0;d<i.a;d++){g=de(h.cb(d),26);i[d]=AE(new yE(),g.v('id'),true);}xB(this.c,DE(new CE(),l.v('id'),i));}b=j.z('group');for(c=0;c<b.C();c++){a=de(b.cb(c),26);h=a.z('right');i=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[h.C()],null);for(d=0;d<i.a;d++){g=de(h.cb(d),26);i[d]=AE(new yE(),g.v('id'),true);}xB(this.a,BD(new AD(),a.v('id'),i));}}
function mD(){}
_=mD.prototype=new FE();_.nb=tD;_.tN=uF+'AsynchronousPolicyGetter';_.tI=0;_.b=true;function vD(a,b){a.a=Db(new yb(),(Fb(),ec),b);return a;}
function xD(f,h,b,g){var a,c,d,e;a=av(new Eu(),'<?xml version="1.0"?>');cv(a,'<policy xmlns="http://www.wyona.org/security/1.0" use-inherited-policies="'+g+'">');if(h!==null){for(c=0;c<h.a;c++){cv(a,'<user id="'+h[c].a+'">');e=h[c].b;if(e!==null){for(d=0;d<e.a;d++){cv(a,'<right id="'+e[d].a+'" permission="'+e[d].c+'">'+e[d].a+'<\/right>');}}else{cv(a,'<right id="r" permission="false">r<\/right>');cv(a,'<right id="w" permission="false">w<\/right>');}cv(a,'<\/user>');}}if(b!==null){for(c=0;c<b.a;c++){cv(a,'<group id="'+b[c].a+'">');e=b[c].b;if(e!==null){for(d=0;d<e.a;d++){cv(a,'<right id="'+e[d].a+'" permission="'+e[d].c+'">'+e[d].a+'<\/right>');}}else{cv(a,'<right id="r" permission="false">r<\/right>');cv(a,'<right id="w" permission="false">w<\/right>');}cv(a,'<\/group>');}}cv(a,'<\/policy>');return ac(f.a,gv(a),f);}
function yD(b,a){Cg('Exception: '+a.b);}
function zD(a,b){if(sb(b)==200){Cg('Policy has been saved successfully!');}else{Cg('Policy has NOT been saved! Please check log files on server.');}}
function uD(){}
_=uD.prototype=new vu();_.lb=yD;_.nb=zD;_.tN=uF+'AsynchronousPolicySetter';_.tI=0;_.a=null;function BD(c,a,b){c.a=a;c.b=b;return c;}
function AD(){}
_=AD.prototype=new vu();_.tN=uF+'Group';_.tI=79;_.a=null;_.b=null;function ED(a){a.b=Bn(new zn());}
function FD(a,b){ED(a);bk(a,a.b);Cn(a.b,pl(new nl(),'Identities'));a.a=Bl(new tl(),true);a.a.k(a);bE(a,b,null,null);Cn(a.b,a.a);return a;}
function bE(c,e,d,a){var b;Fl(c.a);jm(c.a,e);if(d!==null){for(b=0;b<d.a;b++){Cl(c.a,'u: '+d[b]);}}else{Cl(c.a,'No users yet!');}if(a!==null){for(b=0;b<a.a;b++){Cl(c.a,'g: '+a[b]);}}else{Cl(c.a,'No groups yet!');}}
function cE(a){}
function DD(){}
_=DD.prototype=new Fj();_.jb=cE;_.tN=uF+'IdentitiesListBoxWidget';_.tI=80;_.a=null;function eE(a){a.e=Bn(new zn());}
function fE(b,e,d,a,c){eE(b);bk(b,b.e);Cn(b.e,pl(new nl(),'Policy'));b.d=ij(new fj(),'Inherit rights from parent policies');tE(b,c);Cn(b.e,b.d);b.c=Bl(new tl(),true);b.c.k(b);sE(b,e,d,a);Cn(b.e,b.c);wE(b,null);return b;}
function gE(d,e,c){var a,b;a=av(new Eu(),'(-');for(b=1;b<d.b.a;b++){cv(a,',-');}cv(a,')');Dl(d.c,e+': '+a+' '+c,e+': '+c);}
function hE(e,a,d){var b,c;c=Ed('[Ljava.lang.String;',[0],[1],[e.a.a],null);for(b=0;b<c.a;b++){if(lv(e.a[b].a,d.a)){c[b]=d.a;}else{if(a[b].c){c[b]=a[b].a;}else{c[b]='-';}}}return c;}
function jE(g){var a,b,c,d,e,f;b=wB(new vB());for(c=0;c<bm(g.c);c++){e=cm(g.c,c);f=nE(g,e);d=kE(g,c);if(sv(d,'g:')){xB(b,BD(new AD(),vv(tv(d,2)),f));}}a=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[38],[b.a.b],null);for(c=0;c<a.a;c++){a[c]=de(zB(b,c),38);}return a;}
function kE(b,a){return em(b.c,a);}
function lE(e,f,b,c){var a,d;d=av(new Eu(),f+':');cv(d,'('+c[0]);for(a=1;a<c.a;a++){cv(d,','+c[a]);}cv(d,')');cv(d,' '+b);return gv(d);}
function mE(g,h,b,e){var a,c,d,f;f=av(new Eu(),h+':');if(g.a!==null){cv(f,'(');for(a=0;a<g.a.a;a++){d=false;for(c=0;c<e.a;c++){if(lv(g.a[a].a,e[c].a)&&e[c].c){d=true;break;}}if(a>0){cv(f,',');}if(d){cv(f,g.a[a].a);}else{cv(f,'-');}}cv(f,')');}else{Cg('Available rights not loaded yet!');}cv(f,' '+b);return gv(f);}
function nE(e,b){var a,c,d;if(mv(b,'(')>0){d=qv(uv(b,mv(b,'(')+1,mv(b,')')),',');if(d.a!=e.a.a){Cg('Exception: Validation of rights length failed!');return null;}c=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[e.a.a],null);for(a=0;a<d.a;a++){if(lv(d[a],'-')){c[a]=AE(new yE(),e.a[a].a,false);}else{c[a]=AE(new yE(),d[a],true);}}return c;}else{return Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[36],[0],null);}}
function oE(b){var a;a=dm(b.c);if(a>=0){return cm(b.c,a);}return null;}
function pE(a){return kj(a.d);}
function qE(e){var a,b,c,d,f,g;g=wB(new vB());for(a=0;a<bm(e.c);a++){c=cm(e.c,a);d=nE(e,c);b=kE(e,a);if(sv(b,'u:')){xB(g,DE(new CE(),vv(tv(b,2)),d));}}f=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[37],[g.a.b],null);for(a=0;a<f.a;a++){f[a]=de(zB(g,a),37);}return f;}
function rE(e,a,d){var b,c;c=Ed('[Ljava.lang.String;',[0],[1],[e.a.a],null);for(b=0;b<c.a;b++){if(lv(e.a[b].a,d.a)){c[b]='-';}else{if(a[b].c){c[b]=a[b].a;}else{c[b]='-';}}}return c;}
function wE(c,a){var b;c.a=a;if(a!==null){c.b=Ed('[Lcom.google.gwt.user.client.ui.CheckBox;',[0],[12],[a.a],null);for(b=0;b<c.b.a;b++){c.b[b]=ij(new fj(),a[b].b);mj(c.b[b],a[b].a);c.b[b].k(c);Cn(c.e,c.b[b]);}}else{}}
function sE(e,i,g,a){var b,c,d,f,h;Fl(e.c);jm(e.c,i);if(g!==null||a!==null){if(g!==null){for(b=0;b<g.a;b++){f='u';c=g[b].a;d=g[b].b;h=f+': '+c;Dl(e.c,mE(e,f,c,d),h);}}if(a!==null){for(b=0;b<a.a;b++){f='g';c=a[b].a;d=a[b].b;h=f+': '+c;Dl(e.c,mE(e,f,c,d),h);}}else{Cg('No groups!');}}else{Cl(e.c,'No identities yet!');}}
function tE(a,b){if(a.d!==null){lj(a.d,b);}}
function uE(d,e,a,c,b){im(d.c,b,lE(d,e,a,c));}
function vE(d,c){var a,b;b=dm(d.c);if(b>=0){a=kE(d,b);uE(d,uv(a,0,1),vv(tv(a,2)),c,b);}else{Cg('Exception: No list item selected!');}}
function xE(i){var a,b,c,d,e,f,g,h;h=null;g=null;for(b=0;b<this.b.a;b++){if(i===this.b[b]){h=this.b[b];g=this.a[b];break;}}if(h!==null){f=oE(this);if(f!==null){a=nE(this,f);if(kj(h)){d=hE(this,a,g);}else{d=rE(this,a,g);}vE(this,d);}else{Cg('No identity has been selected! Please select an identity in order to assign rights.');lj(h,false);}}else if(i===this.c){f=oE(this);e=nE(this,f);for(c=0;c<this.b.a;c++){if(e[c].c){lj(this.b[c],true);}else{lj(this.b[c],false);}}}}
function dE(){}
_=dE.prototype=new Fj();_.jb=xE;_.tN=uF+'PolicyListBoxWidget';_.tI=81;_.a=null;_.b=null;_.c=null;_.d=null;function AE(c,a,b){c.a=a;c.c=b;return c;}
function zE(c,a,b){c.a=a;c.b=b;c.c=false;return c;}
function yE(){}
_=yE.prototype=new vu();_.tN=uF+'Right';_.tI=82;_.a=null;_.b=null;_.c=false;function DE(c,a,b){c.a=a;c.b=b;return c;}
function CE(){}
_=CE.prototype=new vu();_.tN=uF+'User';_.tI=83;_.a=null;_.b=null;function dt(){CC(new dC());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{dt();}catch(a){b(d);}else{dt();}}
var he=[{},{},{1:1},{4:1},{4:1,35:1},{4:1,35:1},{4:1,28:1,35:1},{2:1},{6:1},{6:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{3:1},{2:1,5:1},{2:1},{7:1},{11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{11:1,13:1,14:1,15:1,17:1,18:1,19:1,20:1,21:1},{11:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1},{11:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1},{10:1,11:1,13:1,14:1,15:1},{11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1,24:1},{30:1},{30:1},{30:1},{11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{10:1,11:1,13:1,14:1,15:1},{11:1,13:1,14:1,15:1,18:1,23:1},{11:1,13:1,14:1,15:1,17:1,18:1,19:1,20:1,21:1,24:1},{9:1,10:1,11:1,13:1,14:1,15:1},{7:1},{11:1,13:1,14:1,15:1,17:1,18:1,19:1,20:1,21:1,23:1,24:1},{11:1,13:1,14:1,15:1,17:1,18:1,19:1,20:1,21:1,23:1,24:1},{10:1,11:1,13:1,14:1,15:1},{4:1,35:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{4:1,35:1},{25:1},{25:1,27:1},{25:1,26:1},{25:1},{25:1},{25:1},{4:1,35:1},{29:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{4:1,35:1},{31:1},{32:1},{32:1},{31:1},{33:1},{32:1},{32:1},{4:1,34:1,35:1},{4:1,35:1},{30:1},{8:1},{8:1},{8:1},{6:1},{6:1},{8:1,11:1,13:1,14:1,15:1},{38:1},{8:1,11:1,13:1,14:1,15:1},{8:1,11:1,13:1,14:1,15:1},{36:1},{37:1}];if (org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor) {  var __gwt_initHandlers = org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.__gwt_initHandlers;  org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.onScriptLoad(gwtOnLoad);}})();