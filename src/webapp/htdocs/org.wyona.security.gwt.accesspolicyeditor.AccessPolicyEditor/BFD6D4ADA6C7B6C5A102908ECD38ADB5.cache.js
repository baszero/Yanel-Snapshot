(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,zE='com.google.gwt.core.client.',AE='com.google.gwt.http.client.',BE='com.google.gwt.i18n.client.',CE='com.google.gwt.lang.',DE='com.google.gwt.user.client.',EE='com.google.gwt.user.client.impl.',FE='com.google.gwt.user.client.ui.',aF='com.google.gwt.user.client.ui.impl.',bF='com.google.gwt.xml.client.',cF='com.google.gwt.xml.client.impl.',dF='java.io.',eF='java.lang.',fF='java.util.',gF='org.wyona.security.gwt.accesspolicyeditor.client.',hF='org.wyona.yanel.gwt.client.';function zB(){}
function su(a){return this===a;}
function tu(){return zv(this);}
function uu(){return this.tN+'@'+this.hC();}
function qu(){}
_=qu.prototype={};_.eQ=su;_.hC=tu;_.tS=uu;_.toString=function(){return this.tS();};_.tN=eF+'Object';_.tI=1;function w(a){return a==null?null:a.tN;}
var y=null;function B(a){return a==null?0:a.$H?a.$H:(a.$H=D());}
function C(a){return a==null?0:a.$H?a.$H:(a.$H=D());}
function D(){return ++E;}
var E=0;function Bv(b,a){b.b=a;return b;}
function Dv(b,a){if(b.a!==null){throw Ct(new Bt(),"Can't overwrite cause");}if(a===b){throw zt(new yt(),'Self-causation not permitted');}b.a=a;return b;}
function Ev(a){Fv(a,(xv(),yv));}
function Fv(e,d){var a,b,c;c=Au(new zu());b=e;while(b!==null){a=b.b;if(b!==e){Du(c,'Caused by: ');}Du(c,b.tN);Du(c,': ');Du(c,a===null?'(No exception detail)':a);Du(c,'\n');b=b.a;}}
function aw(){var a,b;a=w(this);b=this.b;if(b!==null){return a+': '+b;}else{return a;}}
function Av(){}
_=Av.prototype=new qu();_.tS=aw;_.tN=eF+'Throwable';_.tI=3;_.a=null;_.b=null;function wt(b,a){Bv(b,a);return b;}
function vt(){}
_=vt.prototype=new Av();_.tN=eF+'Exception';_.tI=4;function wu(b,a){wt(b,a);return b;}
function vu(){}
_=vu.prototype=new vt();_.tN=eF+'RuntimeException';_.tI=5;function ab(c,b,a){wu(c,'JavaScript '+b+' exception: '+a);return c;}
function F(){}
_=F.prototype=new vu();_.tN=zE+'JavaScriptException';_.tI=6;function eb(b,a){if(!ee(a,2)){return false;}return jb(b,de(a,2));}
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
_=cb.prototype=new qu();_.eQ=kb;_.hC=lb;_.tS=nb;_.tN=zE+'JavaScriptObject';_.tI=7;function rc(b,d,c,a){if(d===null){throw new ju();}if(a===null){throw new ju();}if(c<0){throw new yt();}b.a=c;b.c=d;if(c>0){b.b=vb(new ub(),b,a);pg(b.b,c);}else{b.b=null;}return b;}
function tc(a){var b;if(a.c!==null){b=a.c;a.c=null;dd(b);sc(a);}}
function sc(a){if(a.b!==null){lg(a.b);}}
function vc(e,a){var b,c,d,f;if(e.c===null){return;}sc(e);f=e.c;e.c=null;b=ed(f);if(b!==null){c=wu(new vu(),b);a.lb(e,c);}else{d=yc(f);a.nb(e,d);}}
function wc(b,a){if(b.c===null){return;}tc(b);a.lb(b,oc(new nc(),b,b.a));}
function xc(b){var a;if(b.c===null){return false;}a=fd(b.c);switch(a){case 1:case 2:case 3:return true;}return false;}
function yc(b){var a;a=qb(new pb(),b);return a;}
function zc(a){var b;b=y;{vc(this,a);}}
function ob(){}
_=ob.prototype=new qu();_.u=zc;_.tN=AE+'Request';_.tI=0;_.a=0;_.b=null;_.c=null;function Ac(){}
_=Ac.prototype=new qu();_.tN=AE+'Response';_.tI=0;function qb(a,b){a.a=b;return a;}
function sb(a){return hd(a.a);}
function tb(a){return gd(a.a);}
function pb(){}
_=pb.prototype=new Ac();_.tN=AE+'Request$1';_.tI=0;function mg(){mg=zB;wg=ky(new iy());{vg();}}
function kg(a){mg();return a;}
function lg(a){if(a.d){qg(a.e);}else{rg(a.e);}uy(wg,a);}
function ng(a){if(!a.d){uy(wg,a);}a.vb();}
function pg(b,a){if(a<=0){throw zt(new yt(),'must be positive');}lg(b);b.d=false;b.e=tg(b,a);my(wg,b);}
function og(b,a){if(a<=0){throw zt(new yt(),'must be positive');}lg(b);b.d=true;b.e=sg(b,a);my(wg,b);}
function qg(a){mg();$wnd.clearInterval(a);}
function rg(a){mg();$wnd.clearTimeout(a);}
function sg(b,a){mg();return $wnd.setInterval(function(){b.v();},a);}
function tg(b,a){mg();return $wnd.setTimeout(function(){b.v();},a);}
function ug(){var a;a=y;{ng(this);}}
function vg(){mg();Ag(new gg());}
function fg(){}
_=fg.prototype=new qu();_.v=ug;_.tN=DE+'Timer';_.tI=8;_.d=false;_.e=0;var wg;function wb(){wb=zB;mg();}
function vb(b,a,c){wb();b.a=a;b.b=c;kg(b);return b;}
function xb(){wc(this.a,this.b);}
function ub(){}
_=ub.prototype=new fg();_.vb=xb;_.tN=AE+'Request$2';_.tI=9;function Fb(){Fb=zB;dc=Ab(new zb(),'GET');ec=Ab(new zb(),'POST');fc=hi(new gi());}
function Db(b,a,c){Fb();Eb(b,a===null?null:a.a,c);return b;}
function Eb(b,a,c){Fb();Ec('httpMethod',a);Ec('url',c);b.b=a;b.d=c;return b;}
function ac(g,d,a){var b,c,e,f,h;h=mi(fc);{b=id(h,g.b,g.d,true);}if(b!==null){e=lc(new kc(),g.d);Dv(e,ic(new hc(),b));throw e;}cc(g,h);c=rc(new ob(),h,g.c,a);f=jd(h,c,d,a);if(f!==null){throw ic(new hc(),f);}return c;}
function bc(b,a,c){Ec('header',a);Ec('value',c);if(b.a===null){b.a=Ez(new cz());}hA(b.a,a,c);}
function cc(e,f){var a,b,c,d;if(e.a!==null&&e.a.c>0){a=eA(e.a);d=zz(a);while(rz(d)){c=sz(d);b=kd(f,de(c.B(),1),de(c.D(),1));if(b!==null){throw ic(new hc(),b);}}}else{kd(f,'Content-Type','text/plain; charset=utf-8');}}
function yb(){}
_=yb.prototype=new qu();_.tN=AE+'RequestBuilder';_.tI=0;_.a=null;_.b=null;_.c=0;_.d=null;var dc,ec,fc;function Ab(b,a){b.a=a;return b;}
function Cb(){return this.a;}
function zb(){}
_=zb.prototype=new qu();_.tS=Cb;_.tN=AE+'RequestBuilder$Method';_.tI=0;_.a=null;function ic(b,a){wt(b,a);return b;}
function hc(){}
_=hc.prototype=new vt();_.tN=AE+'RequestException';_.tI=10;function lc(a,b){ic(a,'The URL '+b+' is invalid or violates the same-origin security restriction');return a;}
function kc(){}
_=kc.prototype=new hc();_.tN=AE+'RequestPermissionException';_.tI=11;function oc(b,a,c){ic(b,qc(c));return b;}
function qc(a){return 'A request timeout has expired after '+du(a)+' ms';}
function nc(){}
_=nc.prototype=new hc();_.tN=AE+'RequestTimeoutException';_.tI=12;function Ec(a,b){Fc(a,b);if(0==hv(nv(b))){throw zt(new yt(),a+' can not be empty');}}
function Fc(a,b){if(null===b){throw ku(new ju(),a+' can not be null');}}
function dd(a){a.onreadystatechange=ni;a.abort();}
function ed(b){try{if(b.status===undefined){return 'XmlHttpRequest.status == undefined, please see Safari bug '+'http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';}return null;}catch(a){return 'Unable to read XmlHttpRequest.status; likely causes are a '+'networking error or bad cross-domain request. Please see '+'https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more '+'details';}}
function fd(a){return a.readyState;}
function gd(a){return a.responseText;}
function hd(a){return a.status;}
function id(e,c,d,b){try{e.open(c,d,b);return null;}catch(a){return a.message||a.toString();}}
function jd(e,c,d,b){e.onreadystatechange=function(){if(e.readyState==cd){e.onreadystatechange=ni;c.u(b);}};try{e.send(d);return null;}catch(a){e.onreadystatechange=ni;return a.message||a.toString();}}
function kd(d,b,c){try{d.setRequestHeader(b,c);return null;}catch(a){return a.message||a.toString();}}
var cd=4;function pd(){pd=zB;sd=Ez(new cz());}
function md(b,a){pd();if(a===null||fv('',a)){throw zt(new yt(),'Cannot create a Dictionary with a null or empty name');}b.b='Dictionary '+a;od(b,a);if(b.a===null){throw gB(new fB(),"Cannot find JavaScript object with the name '"+a+"'",a,null);}return b;}
function nd(b,a){for(x in b.a){a.n(x);}}
function od(c,b){try{if(typeof $wnd[b]!='object'){ud(b);}c.a=$wnd[b];}catch(a){ud(b);}}
function qd(b,a){var c=b.a[a];if(c==null|| !Object.prototype.hasOwnProperty.call(b.a,a)){b.ub(a);}return String(c);}
function rd(b){var a;a=AA(new zA());nd(b,a);return a;}
function td(a){pd();var b;b=de(fA(sd,a),3);if(b===null){b=md(new ld(),a);hA(sd,a,b);}return b;}
function vd(b){var a,c;c=rd(this);a="Cannot find '"+b+"' in "+this;if(c.a.c<20){a+='\n keys found: '+c;}throw gB(new fB(),a,this.b,b);}
function ud(a){pd();throw gB(new fB(),"'"+a+"' is not a JavaScript object and cannot be used as a Dictionary",null,a);}
function wd(){return this.b;}
function ld(){}
_=ld.prototype=new qu();_.ub=vd;_.tS=wd;_.tN=BE+'Dictionary';_.tI=13;_.a=null;_.b=null;var sd;function yd(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function Ad(a,b,c){return a[b]=c;}
function Bd(b,a){return b[a];}
function Cd(a){return a.length;}
function Ed(e,d,c,b,a){return Dd(e,d,c,b,0,Cd(b),a);}
function Dd(j,i,g,c,e,a,b){var d,f,h;if((f=Bd(c,e))<0){throw new hu();}h=yd(new xd(),f,Bd(i,e),Bd(g,e),j);++e;if(e<a){j=lv(j,1);for(d=0;d<f;++d){Ad(h,d,Dd(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){Ad(h,d,b);}}return h;}
function Fd(a,b,c){if(c!==null&&a.b!=0&& !ee(c,a.b)){throw new ft();}return Ad(a,b,c);}
function xd(){}
_=xd.prototype=new qu();_.tN=CE+'Array';_.tI=0;function ce(b,a){return !(!(b&&he[b][a]));}
function de(b,a){if(b!=null)ce(b.tI,a)||ge();return b;}
function ee(b,a){return b!=null&&ce(b.tI,a);}
function ge(){throw new rt();}
function fe(a){if(a!==null){throw new rt();}return a;}
function ie(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var he;function le(a){if(ee(a,4)){return a;}return ab(new F(),ne(a),me(a));}
function me(a){return a.message;}
function ne(a){return a.name;}
function pe(){pe=zB;pf=ky(new iy());{kf=new gh();nh(kf);}}
function qe(b,a){pe();sh(kf,b,a);}
function re(a,b){pe();return ih(kf,a,b);}
function se(){pe();return uh(kf,'button');}
function te(){pe();return uh(kf,'div');}
function ue(){pe();return vh(kf,'checkbox');}
function ve(){pe();return vh(kf,'text');}
function we(){pe();return uh(kf,'label');}
function xe(a){pe();return jh(kf,a);}
function ye(){pe();return uh(kf,'span');}
function ze(){pe();return uh(kf,'tbody');}
function Ae(){pe();return uh(kf,'td');}
function Be(){pe();return uh(kf,'tr');}
function Ce(){pe();return uh(kf,'table');}
function Fe(b,a,d){pe();var c;c=y;{Ee(b,a,d);}}
function Ee(b,a,c){pe();var d;if(a===of){if(bf(b)==8192){of=null;}}d=De;De=b;try{c.ib(b);}finally{De=d;}}
function af(b,a){pe();wh(kf,b,a);}
function bf(a){pe();return xh(kf,a);}
function cf(a){pe();kh(kf,a);}
function df(a){pe();return lh(kf,a);}
function gf(a,b){pe();return Ah(kf,a,b);}
function ef(a,b){pe();return yh(kf,a,b);}
function ff(a,b){pe();return zh(kf,a,b);}
function hf(a){pe();return Bh(kf,a);}
function jf(a){pe();return mh(kf,a);}
function lf(c,b,d,a){pe();oh(kf,c,b,d,a);}
function mf(a){pe();var b,c;c=true;if(pf.b>0){b=fe(qy(pf,pf.b-1));if(!(c=null.Bb())){af(a,true);cf(a);}}return c;}
function nf(b,a){pe();Ch(kf,b,a);}
function sf(a,b,c){pe();Fh(kf,a,b,c);}
function qf(a,b,c){pe();Dh(kf,a,b,c);}
function rf(a,b,c){pe();Eh(kf,a,b,c);}
function tf(a,b){pe();ai(kf,a,b);}
function uf(a,b){pe();bi(kf,a,b);}
function vf(a,b){pe();ph(kf,a,b);}
function wf(b,c,a){pe();ci(kf,b,c,a);}
function xf(b,a,c){pe();di(kf,b,a,c);}
function yf(a,b){pe();qh(kf,a,b);}
function zf(a){pe();return ei(kf,a);}
var De=null,kf=null,of=null,pf;function Cf(a){if(ee(a,5)){return re(this,de(a,5));}return eb(ie(this,Af),a);}
function Df(){return fb(ie(this,Af));}
function Ef(){return zf(this);}
function Af(){}
_=Af.prototype=new cb();_.eQ=Cf;_.hC=Df;_.tS=Ef;_.tN=DE+'Element';_.tI=14;function cg(a){return eb(ie(this,Ff),a);}
function dg(){return fb(ie(this,Ff));}
function eg(){return df(this);}
function Ff(){}
_=Ff.prototype=new cb();_.eQ=cg;_.hC=dg;_.tS=eg;_.tN=DE+'Event';_.tI=15;function ig(){while((mg(),wg).b>0){lg(de(qy((mg(),wg),0),6));}}
function jg(){return null;}
function gg(){}
_=gg.prototype=new qu();_.pb=ig;_.qb=jg;_.tN=DE+'Timer$1';_.tI=16;function zg(){zg=zB;Cg=ky(new iy());eh=ky(new iy());{ah();}}
function Ag(a){zg();my(Cg,a);}
function Bg(a){zg();$wnd.alert(a);}
function Dg(){zg();var a,b;for(a=Cg.db();a.ab();){b=de(a.fb(),7);b.pb();}}
function Eg(){zg();var a,b,c,d;d=null;for(a=Cg.db();a.ab();){b=de(a.fb(),7);c=b.qb();{d=c;}}return d;}
function Fg(){zg();var a,b;for(a=eh.db();a.ab();){b=fe(a.fb());null.Bb();}}
function ah(){zg();__gwt_initHandlers(function(){dh();},function(){return ch();},function(){bh();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function bh(){zg();var a;a=y;{Dg();}}
function ch(){zg();var a;a=y;{return Eg();}}
function dh(){zg();var a;a=y;{Fg();}}
var Cg,eh;function sh(c,b,a){b.appendChild(a);}
function uh(b,a){return $doc.createElement(a);}
function vh(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
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
function ci(e,c,d,a){var b=c.options[a];b.text=d;}
function di(c,b,a,d){b.style[a]=d;}
function ei(b,a){return a.outerHTML;}
function fh(){}
_=fh.prototype=new qu();_.tN=EE+'DOMImpl';_.tI=0;function ih(c,a,b){if(!a&& !b)return true;else if(!a|| !b)return false;return a.uniqueID==b.uniqueID;}
function jh(c,b){var a=b?'<SELECT MULTIPLE>':'<SELECT>';return $doc.createElement(a);}
function kh(b,a){a.returnValue=false;}
function lh(b,a){if(a.toString)return a.toString();return '[object Event]';}
function mh(c,a){var b=a.parentElement;return b||null;}
function nh(d){try{$doc.execCommand('BackgroundImageCache',false,true);}catch(a){}$wnd.__dispatchEvent=function(){var c=rh;rh=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!mf($wnd.event)){rh=c;return;}}var b,a=this;while(a&& !(b=a.__listener))a=a.parentElement;if(b)Fe($wnd.event,a,b);rh=c;};$wnd.__dispatchDblClickEvent=function(){var a=$doc.createEventObject();this.fireEvent('onclick',a);if(this.__eventBits&2)$wnd.__dispatchEvent.call(this);};$doc.body.onclick=$doc.body.onmousedown=$doc.body.onmouseup=$doc.body.onmousemove=$doc.body.onmousewheel=$doc.body.onkeydown=$doc.body.onkeypress=$doc.body.onkeyup=$doc.body.onfocus=$doc.body.onblur=$doc.body.ondblclick=$wnd.__dispatchEvent;}
function oh(e,c,d,f,a){var b=new Option(d,f);if(a== -1||a>c.options.length-1){c.add(b);}else{c.add(b,a);}}
function ph(c,a,b){if(!b)b='';a.innerText=b;}
function qh(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&(1|2)?$wnd.__dispatchDblClickEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function gh(){}
_=gh.prototype=new fh();_.tN=EE+'DOMImplIE6';_.tI=0;var rh=null;function ki(a){ni=hb();return a;}
function mi(a){return ji(a);}
function fi(){}
_=fi.prototype=new qu();_.tN=EE+'HTTPRequestImpl';_.tI=0;var ni=null;function hi(a){ki(a);return a;}
function ji(a){return new ActiveXObject('Msxml2.XMLHTTP');}
function gi(){}
_=gi.prototype=new fi();_.tN=EE+'HTTPRequestImplIE6';_.tI=0;function qn(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function rn(b,a){if(b.k!==null){qn(b,b.k,a);}b.k=a;}
function sn(b,a){vn(b.k,a);}
function tn(b,a){yf(b.z(),a|hf(b.z()));}
function un(){return this.k;}
function vn(a,b){sf(a,'className',b);}
function wn(){if(this.k===null){return '(null handle)';}return zf(this.k);}
function on(){}
_=on.prototype=new qu();_.z=un;_.tS=wn;_.tN=FE+'UIObject';_.tI=0;_.k=null;function so(a){if(ee(a.j,10)){de(a.j,10).tb(a);}else if(a.j!==null){throw Ct(new Bt(),"This widget's parent does not implement HasWidgets");}}
function to(b,a){if(b.bb()){tf(b.z(),null);}rn(b,a);if(b.bb()){tf(a,b);}}
function uo(c,b){var a;a=c.j;if(b===null){if(a!==null&&a.bb()){c.kb();}c.j=null;}else{if(a!==null){throw Ct(new Bt(),'Cannot set a new parent without first clearing the old parent');}c.j=b;if(b.bb()){c.hb();}}}
function vo(){}
function wo(){}
function xo(){return this.i;}
function yo(){if(this.bb()){throw Ct(new Bt(),"Should only call onAttach when the widget is detached from the browser's document");}this.i=true;tf(this.z(),this);this.r();this.mb();}
function zo(a){}
function Ao(){if(!this.bb()){throw Ct(new Bt(),"Should only call onDetach when the widget is attached to the browser's document");}try{this.ob();}finally{this.s();tf(this.z(),null);this.i=false;}}
function Bo(){}
function Co(){}
function Do(a){to(this,a);}
function En(){}
_=En.prototype=new on();_.r=vo;_.s=wo;_.bb=xo;_.hb=yo;_.ib=zo;_.kb=Ao;_.mb=Bo;_.ob=Co;_.wb=Do;_.tN=FE+'Widget';_.tI=17;_.i=false;_.j=null;function km(b,a){uo(a,b);}
function mm(b,a){uo(a,null);}
function nm(){var a,b;for(b=this.db();eo(b);){a=fo(b);a.hb();}}
function om(){var a,b;for(b=this.db();eo(b);){a=fo(b);a.kb();}}
function pm(){}
function qm(){}
function jm(){}
_=jm.prototype=new En();_.r=nm;_.s=om;_.mb=pm;_.ob=qm;_.tN=FE+'Panel';_.tI=18;function vj(a){a.f=jo(new Fn(),a);}
function wj(a){vj(a);return a;}
function xj(c,a,b){so(a);ko(c.f,a);qe(b,a.z());km(c,a);}
function zj(b,c){var a;if(c.j!==b){return false;}mm(b,c);a=c.z();nf(jf(a),a);qo(b.f,c);return true;}
function Aj(){return oo(this.f);}
function Bj(a){return zj(this,a);}
function uj(){}
_=uj.prototype=new jm();_.db=Aj;_.tb=Bj;_.tN=FE+'ComplexPanel';_.tI=19;function pi(a){wj(a);a.wb(te());xf(a.z(),'position','relative');xf(a.z(),'overflow','hidden');return a;}
function qi(a,b){xj(a,b,a.z());}
function si(a){xf(a,'left','');xf(a,'top','');xf(a,'position','');}
function ti(b){var a;a=zj(this,b);if(a){si(b.z());}return a;}
function oi(){}
_=oi.prototype=new uj();_.tb=ti;_.tN=FE+'AbsolutePanel';_.tI=20;function jk(){jk=zB;dp(),fp;}
function ik(b,a){dp(),fp;lk(b,a);return b;}
function kk(b,a){switch(bf(a)){case 1:if(b.c!==null){sj(b.c,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function lk(b,a){to(b,a);tn(b,7041);}
function mk(a){if(this.c===null){this.c=qj(new pj());}my(this.c,a);}
function nk(a){kk(this,a);}
function ok(a){lk(this,a);}
function hk(){}
_=hk.prototype=new En();_.l=mk;_.ib=nk;_.wb=ok;_.tN=FE+'FocusWidget';_.tI=21;_.c=null;function xi(){xi=zB;dp(),fp;}
function wi(b,a){dp(),fp;ik(b,a);return b;}
function yi(a){uf(this.z(),a);}
function vi(){}
_=vi.prototype=new hk();_.xb=yi;_.tN=FE+'ButtonBase';_.tI=22;function Ci(){Ci=zB;dp(),fp;}
function zi(a){dp(),fp;wi(a,se());Di(a.z());sn(a,'gwt-Button');return a;}
function Ai(b,a){dp(),fp;zi(b);b.xb(a);return b;}
function Bi(c,a,b){dp(),fp;Ai(c,a);c.l(b);return c;}
function Di(b){Ci();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function ui(){}
_=ui.prototype=new vi();_.tN=FE+'Button';_.tI=23;function Fi(a){wj(a);a.e=Ce();a.d=ze();qe(a.e,a.d);a.wb(a.e);return a;}
function bj(c,b,a){sf(b,'align',a.a);}
function cj(c,b,a){xf(b,'verticalAlign',a.a);}
function Ei(){}
_=Ei.prototype=new uj();_.tN=FE+'CellPanel';_.tI=24;_.d=null;_.e=null;function hj(){hj=zB;dp(),fp;}
function ej(a){dp(),fp;fj(a,ue());sn(a,'gwt-CheckBox');return a;}
function gj(b,a){dp(),fp;ej(b);kj(b,a);return b;}
function fj(b,a){var c;dp(),fp;wi(b,ye());b.a=a;b.b=we();yf(b.a,hf(b.z()));yf(b.z(),0);qe(b.z(),b.a);qe(b.z(),b.b);c='check'+ ++oj;sf(b.a,'id',c);sf(b.b,'htmlFor',c);return b;}
function ij(b){var a;a=b.bb()?'checked':'defaultChecked';return ef(b.a,a);}
function jj(b,a){qf(b.a,'checked',a);qf(b.a,'defaultChecked',a);}
function kj(b,a){vf(b.b,a);}
function lj(){tf(this.a,this);}
function mj(){tf(this.a,null);jj(this,ij(this));}
function nj(a){uf(this.b,a);}
function dj(){}
_=dj.prototype=new vi();_.mb=lj;_.ob=mj;_.xb=nj;_.tN=FE+'CheckBox';_.tI=25;_.a=null;_.b=null;var oj=0;function fw(d,a,b){var c;while(a.ab()){c=a.fb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function hw(a){throw cw(new bw(),'add');}
function iw(b){var a;a=fw(this,this.db(),b);return a!==null;}
function jw(){var a,b,c;c=Au(new zu());a=null;Du(c,'[');b=this.db();while(b.ab()){if(a!==null){Du(c,a);}else{a=', ';}Du(c,vv(b.fb()));}Du(c,']');return bv(c);}
function ew(){}
_=ew.prototype=new qu();_.n=hw;_.p=iw;_.tS=jw;_.tN=fF+'AbstractCollection';_.tI=0;function tw(b,a){throw Ft(new Et(),'Index: '+a+', Size: '+b.b);}
function uw(b,a){throw cw(new bw(),'add');}
function vw(a){this.m(this.zb(),a);return true;}
function ww(e){var a,b,c,d,f;if(e===this){return true;}if(!ee(e,20)){return false;}f=de(e,20);if(this.zb()!=f.zb()){return false;}c=this.db();d=f.db();while(c.ab()){a=c.fb();b=d.fb();if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function xw(){var a,b,c,d;c=1;a=31;b=this.db();while(b.ab()){d=b.fb();c=31*c+(d===null?0:d.hC());}return c;}
function yw(){return mw(new lw(),this);}
function zw(a){throw cw(new bw(),'remove');}
function kw(){}
_=kw.prototype=new ew();_.m=uw;_.n=vw;_.eQ=ww;_.hC=xw;_.db=yw;_.sb=zw;_.tN=fF+'AbstractList';_.tI=26;function jy(a){{ny(a);}}
function ky(a){jy(a);return a;}
function ly(c,a,b){if(a<0||a>c.b){tw(c,a);}vy(c.a,a,b);++c.b;}
function my(b,a){Ey(b.a,b.b++,a);return true;}
function ny(a){a.a=gb();a.b=0;}
function py(b,a){return ry(b,a)!=(-1);}
function qy(b,a){if(a<0||a>=b.b){tw(b,a);}return Ay(b.a,a);}
function ry(b,a){return sy(b,a,0);}
function sy(c,b,a){if(a<0){tw(c,a);}for(;a<c.b;++a){if(zy(b,Ay(c.a,a))){return a;}}return (-1);}
function ty(c,a){var b;b=qy(c,a);Cy(c.a,a,1);--c.b;return b;}
function uy(c,b){var a;a=ry(c,b);if(a==(-1)){return false;}ty(c,a);return true;}
function wy(a,b){ly(this,a,b);}
function xy(a){return my(this,a);}
function vy(a,b,c){a.splice(b,0,c);}
function yy(a){return py(this,a);}
function zy(a,b){return a===b||a!==null&&a.eQ(b);}
function By(a){return qy(this,a);}
function Ay(a,b){return a[b];}
function Dy(a){return ty(this,a);}
function Cy(a,c,b){a.splice(c,b);}
function Ey(a,b,c){a[b]=c;}
function Fy(){return this.b;}
function iy(){}
_=iy.prototype=new kw();_.m=wy;_.n=xy;_.p=yy;_.E=By;_.sb=Dy;_.zb=Fy;_.tN=fF+'ArrayList';_.tI=27;_.a=null;_.b=0;function qj(a){ky(a);return a;}
function sj(d,c){var a,b;for(a=d.db();a.ab();){b=de(a.fb(),8);b.jb(c);}}
function pj(){}
_=pj.prototype=new iy();_.tN=FE+'ClickListenerCollection';_.tI=28;function Ej(a,b){if(a.h!==null){throw Ct(new Bt(),'Composite.initWidget() may only be called once.');}so(b);a.wb(b.z());a.h=b;uo(b,a);}
function Fj(){if(this.h===null){throw Ct(new Bt(),'initWidget() was never called in '+w(this));}return this.k;}
function ak(){if(this.h!==null){return this.h.bb();}return false;}
function bk(){this.h.hb();this.mb();}
function ck(){try{this.ob();}finally{this.h.kb();}}
function Cj(){}
_=Cj.prototype=new En();_.z=Fj;_.bb=ak;_.hb=bk;_.kb=ck;_.tN=FE+'Composite';_.tI=29;_.h=null;function ek(a){wj(a);a.wb(te());return a;}
function fk(a,b){xj(a,b,a.z());}
function dk(){}
_=dk.prototype=new uj();_.tN=FE+'FlowPanel';_.tI=30;function vk(){vk=zB;tk(new sk(),'center');wk=tk(new sk(),'left');tk(new sk(),'right');}
var wk;function tk(b,a){b.a=a;return b;}
function sk(){}
_=sk.prototype=new qu();_.tN=FE+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=0;_.a=null;function Ck(){Ck=zB;Ak(new zk(),'bottom');Dk=Ak(new zk(),'middle');Ek=Ak(new zk(),'top');}
var Dk,Ek;function Ak(a,b){a.a=b;return a;}
function zk(){}
_=zk.prototype=new qu();_.tN=FE+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=0;_.a=null;function cl(a){a.a=(vk(),wk);a.c=(Ck(),Ek);}
function dl(a){Fi(a);cl(a);a.b=Be();qe(a.d,a.b);sf(a.e,'cellSpacing','0');sf(a.e,'cellPadding','0');return a;}
function el(b,c){var a;a=gl(b);qe(b.b,a);xj(b,c,a);}
function gl(b){var a;a=Ae();bj(b,a,b.a);cj(b,a,b.c);return a;}
function hl(b,a){b.c=a;}
function il(c){var a,b;b=jf(c.z());a=zj(this,c);if(a){nf(this.b,b);}return a;}
function bl(){}
_=bl.prototype=new Ei();_.tb=il;_.tN=FE+'HorizontalPanel';_.tI=31;_.b=null;function ll(a){a.wb(te());tn(a,131197);sn(a,'gwt-Label');return a;}
function ml(b,a){ll(b);ol(b,a);return b;}
function ol(b,a){vf(b.z(),a);}
function pl(a){switch(bf(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function kl(){}
_=kl.prototype=new En();_.ib=pl;_.tN=FE+'Label';_.tI=32;function Dl(){Dl=zB;dp(),fp;hm=new rl();}
function yl(b,a){Dl();ik(b,xe(a));tn(b,1024);sn(b,'gwt-ListBox');return b;}
function zl(b,a){cm(b,a,(-1));}
function Al(b,a,c){dm(b,a,c,(-1));}
function Bl(b,a){if(a<0||a>=El(b)){throw new Et();}}
function Cl(a){sl(hm,a.z());}
function El(a){return ul(hm,a.z());}
function Fl(b,a){Bl(b,a);return vl(hm,b.z(),a);}
function am(a){return ff(a.z(),'selectedIndex');}
function bm(b,a){Bl(b,a);return wl(hm,b.z(),a);}
function cm(c,b,a){dm(c,b,b,a);}
function dm(c,b,d,a){lf(c.z(),b,d,a);}
function em(b,a){Bl(b,a);xl(hm,b.z(),a);}
function fm(c,a,b){Bl(c,a);if(b===null){throw ku(new ju(),'Cannot set an option to have null text');}wf(c.z(),b,a);}
function gm(a,b){rf(a.z(),'size',b);}
function im(a){if(bf(a)==1024){}else{kk(this,a);}}
function ql(){}
_=ql.prototype=new hk();_.ib=im;_.tN=FE+'ListBox';_.tI=33;var hm;function sl(b,a){a.options.length=0;}
function ul(b,a){return a.options.length;}
function vl(c,b,a){return b.options[a].text;}
function wl(c,b,a){return b.options[a].value;}
function xl(c,b,a){b.options[a]=null;}
function rl(){}
_=rl.prototype=new qu();_.tN=FE+'ListBox$Impl';_.tI=0;function xm(){xm=zB;Cm=Ez(new cz());}
function wm(b,a){xm();pi(b);if(a===null){a=ym();}b.wb(a);b.hb();return b;}
function zm(){xm();return Am(null);}
function Am(c){xm();var a,b;b=de(fA(Cm,c),9);if(b!==null){return b;}a=null;if(Cm.c==0){Bm();}hA(Cm,c,b=wm(new rm(),a));return b;}
function ym(){xm();return $doc.body;}
function Bm(){xm();Ag(new sm());}
function rm(){}
_=rm.prototype=new oi();_.tN=FE+'RootPanel';_.tI=34;var Cm;function um(){var a,b;for(b=nx(Cx((xm(),Cm)));ux(b);){a=de(vx(b),9);if(a.bb()){a.kb();}}}
function vm(){return null;}
function sm(){}
_=sm.prototype=new qu();_.pb=um;_.qb=vm;_.tN=FE+'RootPanel$1';_.tI=35;function gn(){gn=zB;dp(),fp;}
function fn(b,a){dp(),fp;ik(b,a);tn(b,1024);return b;}
function hn(a){return gf(a.z(),'value');}
function jn(a){if(this.a===null){this.a=qj(new pj());}my(this.a,a);}
function kn(a){var b;kk(this,a);b=bf(a);if(b==1){if(this.a!==null){sj(this.a,this);}}else{}}
function en(){}
_=en.prototype=new hk();_.l=jn;_.ib=kn;_.tN=FE+'TextBoxBase';_.tI=36;_.a=null;function mn(){mn=zB;dp(),fp;}
function ln(a){dp(),fp;fn(a,ve());sn(a,'gwt-TextBox');return a;}
function nn(b,a){rf(b.z(),'size',a);}
function dn(){}
_=dn.prototype=new en();_.tN=FE+'TextBox';_.tI=37;function yn(a){a.a=(vk(),wk);a.b=(Ck(),Ek);}
function zn(a){Fi(a);yn(a);sf(a.e,'cellSpacing','0');sf(a.e,'cellPadding','0');return a;}
function An(b,d){var a,c;c=Be();a=Cn(b);qe(c,a);qe(b.d,c);xj(b,d,a);}
function Cn(b){var a;a=Ae();bj(b,a,b.a);cj(b,a,b.b);return a;}
function Dn(c){var a,b;b=jf(c.z());a=zj(this,c);if(a){nf(this.d,jf(b));}return a;}
function xn(){}
_=xn.prototype=new Ei();_.tb=Dn;_.tN=FE+'VerticalPanel';_.tI=38;function jo(b,a){b.b=a;b.a=Ed('[Lcom.google.gwt.user.client.ui.Widget;',[0],[12],[4],null);return b;}
function ko(a,b){no(a,b,a.c);}
function mo(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]===c){return a;}}return (-1);}
function no(d,e,a){var b,c;if(a<0||a>d.c){throw new Et();}if(d.c==d.a.a){c=Ed('[Lcom.google.gwt.user.client.ui.Widget;',[0],[12],[d.a.a*2],null);for(b=0;b<d.a.a;++b){Fd(c,b,d.a[b]);}d.a=c;}++d.c;for(b=d.c-1;b>a;--b){Fd(d.a,b,d.a[b-1]);}Fd(d.a,a,e);}
function oo(a){return bo(new ao(),a);}
function po(c,b){var a;if(b<0||b>=c.c){throw new Et();}--c.c;for(a=b;a<c.c;++a){Fd(c.a,a,c.a[a+1]);}Fd(c.a,c.c,null);}
function qo(b,c){var a;a=mo(b,c);if(a==(-1)){throw new iB();}po(b,a);}
function Fn(){}
_=Fn.prototype=new qu();_.tN=FE+'WidgetCollection';_.tI=0;_.a=null;_.b=null;_.c=0;function bo(b,a){b.b=a;return b;}
function eo(a){return a.a<a.b.c-1;}
function fo(a){if(a.a>=a.b.c){throw new iB();}return a.b.a[++a.a];}
function go(){return eo(this);}
function ho(){return fo(this);}
function io(){if(this.a<0||this.a>=this.b.c){throw new Bt();}this.b.b.tb(this.b.a[this.a--]);}
function ao(){}
_=ao.prototype=new qu();_.ab=go;_.fb=ho;_.rb=io;_.tN=FE+'WidgetCollection$WidgetIterator';_.tI=0;_.a=(-1);function dp(){dp=zB;ep=ap(new Fo());fp=ep;}
function cp(a){dp();return a;}
function Eo(){}
_=Eo.prototype=new qu();_.tN=aF+'FocusImpl';_.tI=0;var ep,fp;function bp(){bp=zB;dp();}
function ap(a){bp();cp(a);return a;}
function Fo(){}
_=Fo.prototype=new Eo();_.tN=aF+'FocusImplIE6';_.tI=0;function lp(c,a,b){wu(c,b);return c;}
function kp(){}
_=kp.prototype=new vu();_.tN=bF+'DOMException';_.tI=39;function wp(){wp=zB;xp=(ms(),Cs);}
function yp(a){wp();return ns(xp,a);}
var xp;function mq(b,a){b.a=a;return b;}
function nq(a,b){return b;}
function pq(a){if(ee(a,15)){return re(nq(this,this.a),nq(this,de(a,15).a));}return false;}
function lq(){}
_=lq.prototype=new qu();_.eQ=pq;_.tN=cF+'DOMItem';_.tI=40;_.a=null;function kr(b,a){mq(b,a);return b;}
function mr(a){return fr(new er(),ps(a.a));}
function nr(a){return tr(new sr(),qs(a.a));}
function or(a){return ws(a.a);}
function pr(a){return As(a.a);}
function qr(a){return Bs(a.a);}
function rr(a){var b;if(a===null){return null;}b=xs(a);switch(b){case 2:return Ap(new zp(),a);case 4:return aq(new Fp(),a);case 8:return iq(new hq(),a);case 11:return vq(new uq(),a);case 9:return zq(new yq(),a);case 1:return Eq(new Dq(),a);case 7:return Cr(new Br(),a);case 3:return bs(new as(),a);default:return kr(new jr(),a);}}
function jr(){}
_=jr.prototype=new lq();_.tN=cF+'NodeImpl';_.tI=41;function Ap(b,a){kr(b,a);return b;}
function Cp(a){return vs(a.a);}
function Dp(a){return zs(a.a);}
function Ep(){var a;a=Au(new zu());Du(a,' '+Cp(this));Du(a,'="');Du(a,Dp(this));Du(a,'"');return bv(a);}
function zp(){}
_=zp.prototype=new jr();_.tS=Ep;_.tN=cF+'AttrImpl';_.tI=42;function eq(b,a){kr(b,a);return b;}
function gq(a){return rs(a.a);}
function dq(){}
_=dq.prototype=new jr();_.tN=cF+'CharacterDataImpl';_.tI=43;function bs(b,a){eq(b,a);return b;}
function ds(){var a,b,c;a=Au(new zu());c=jv(gq(this),'(?=[;&<>\'"])',(-1));for(b=0;b<c.a;b++){if(kv(c[b],';')){Du(a,'&semi;');Du(a,lv(c[b],1));}else if(kv(c[b],'&')){Du(a,'&amp;');Du(a,lv(c[b],1));}else if(kv(c[b],'"')){Du(a,'&quot;');Du(a,lv(c[b],1));}else if(kv(c[b],"'")){Du(a,'&apos;');Du(a,lv(c[b],1));}else if(kv(c[b],'<')){Du(a,'&lt;');Du(a,lv(c[b],1));}else if(kv(c[b],'>')){Du(a,'&gt;');Du(a,lv(c[b],1));}else{Du(a,c[b]);}}return bv(a);}
function as(){}
_=as.prototype=new dq();_.tS=ds;_.tN=cF+'TextImpl';_.tI=44;function aq(b,a){bs(b,a);return b;}
function cq(){var a;a=Bu(new zu(),'<![CDATA[');Du(a,gq(this));Du(a,']]>');return bv(a);}
function Fp(){}
_=Fp.prototype=new as();_.tS=cq;_.tN=cF+'CDATASectionImpl';_.tI=45;function iq(b,a){eq(b,a);return b;}
function kq(){var a;a=Bu(new zu(),'<!--');Du(a,gq(this));Du(a,'-->');return bv(a);}
function hq(){}
_=hq.prototype=new dq();_.tS=kq;_.tN=cF+'CommentImpl';_.tI=46;function rq(c,a,b){lp(c,12,'Failed to parse: '+tq(a));Dv(c,b);return c;}
function tq(a){return mv(a,0,gu(hv(a),128));}
function qq(){}
_=qq.prototype=new kp();_.tN=cF+'DOMParseException';_.tI=47;function vq(b,a){kr(b,a);return b;}
function xq(){var a,b;a=Au(new zu());for(b=0;b<nr(this).C();b++){Cu(a,nr(this).cb(b));}return bv(a);}
function uq(){}
_=uq.prototype=new jr();_.tS=xq;_.tN=cF+'DocumentFragmentImpl';_.tI=48;function zq(b,a){kr(b,a);return b;}
function Bq(){return de(rr(ss(this.a)),16);}
function Cq(){var a,b,c;a=Au(new zu());b=nr(this);for(c=0;c<b.C();c++){Du(a,b.cb(c).tS());}return bv(a);}
function yq(){}
_=yq.prototype=new jr();_.y=Bq;_.tS=Cq;_.tN=cF+'DocumentImpl';_.tI=49;function Eq(b,a){kr(b,a);return b;}
function ar(a){return ys(a.a);}
function br(a){return os(this.a,a);}
function cr(a){return tr(new sr(),ts(this.a,a));}
function dr(){var a;a=Bu(new zu(),'<');Du(a,ar(this));if(pr(this)){Du(a,xr(mr(this)));}if(qr(this)){Du(a,'>');Du(a,xr(nr(this)));Du(a,'<\/');Du(a,ar(this));Du(a,'>');}else{Du(a,'/>');}return bv(a);}
function Dq(){}
_=Dq.prototype=new jr();_.w=br;_.A=cr;_.tS=dr;_.tN=cF+'ElementImpl';_.tI=50;function tr(b,a){mq(b,a);return b;}
function vr(a){return us(a.a);}
function wr(b,a){return rr(Ds(b.a,a));}
function xr(c){var a,b;a=Au(new zu());for(b=0;b<c.C();b++){Du(a,c.cb(b).tS());}return bv(a);}
function yr(){return vr(this);}
function zr(a){return wr(this,a);}
function Ar(){return xr(this);}
function sr(){}
_=sr.prototype=new lq();_.C=yr;_.cb=zr;_.tS=Ar;_.tN=cF+'NodeListImpl';_.tI=51;function fr(b,a){tr(b,a);return b;}
function hr(){return vr(this);}
function ir(a){return wr(this,a);}
function er(){}
_=er.prototype=new sr();_.C=hr;_.cb=ir;_.tN=cF+'NamedNodeMapImpl';_.tI=52;function Cr(b,a){kr(b,a);return b;}
function Er(a){return rs(a.a);}
function Fr(){var a;a=Bu(new zu(),'<?');Du(a,or(this));Du(a,' ');Du(a,Er(this));Du(a,'?>');return bv(a);}
function Br(){}
_=Br.prototype=new jr();_.tS=Fr;_.tN=cF+'ProcessingInstructionImpl';_.tI=53;function ms(){ms=zB;Cs=gs(new fs());}
function ls(a){ms();return a;}
function ns(e,c){var a,d;try{return de(rr(js(e,c)),17);}catch(a){a=le(a);if(ee(a,18)){d=a;throw rq(new qq(),c,d);}else throw a;}}
function os(b,a){ms();return b.getAttribute(a);}
function ps(a){ms();return a.attributes;}
function qs(b){ms();var a=b.childNodes;return a==null?null:a;}
function rs(a){ms();return a.data;}
function ss(a){ms();return a.documentElement;}
function ts(a,b){ms();return is(Cs,a,b);}
function us(a){ms();return a.length;}
function vs(a){ms();return a.name;}
function ws(a){ms();var b=a.nodeName;return b==null?null:b;}
function xs(a){ms();var b=a.nodeType;return b==null?-1:b;}
function ys(a){ms();return a.tagName;}
function zs(a){ms();return a.value;}
function As(a){ms();return a.attributes.length!=0;}
function Bs(a){ms();return a.hasChildNodes();}
function Ds(c,a){ms();if(a>=c.length){return null;}var b=c.item(a);return b==null?null:b;}
function es(){}
_=es.prototype=new qu();_.tN=cF+'XMLParserImpl';_.tI=0;var Cs;function hs(){hs=zB;ms();}
function gs(a){hs();ls(a);return a;}
function is(c,a,b){return a.selectNodes(".//*[local-name()='"+b+"']");}
function js(d,a){var b=d.q();if(!b.loadXML(a)){var c=b.parseError;throw new Error('line '+c.line+', char '+c.linepos+':'+c.reason);}else{return b;}}
function ks(){var a=new ActiveXObject('MSXML2.DOMDocument');a.preserveWhiteSpace=true;a.setProperty('SelectionNamespaces',"xmlns:xsl='http://www.w3.org/1999/XSL/Transform'");a.setProperty('SelectionLanguage','XPath');return a;}
function fs(){}
_=fs.prototype=new es();_.q=ks;_.tN=cF+'XMLParserImplIE6';_.tI=0;function bt(){}
_=bt.prototype=new qu();_.tN=dF+'OutputStream';_.tI=0;function Fs(){}
_=Fs.prototype=new bt();_.tN=dF+'FilterOutputStream';_.tI=0;function dt(){}
_=dt.prototype=new Fs();_.tN=dF+'PrintStream';_.tI=0;function ft(){}
_=ft.prototype=new vu();_.tN=eF+'ArrayStoreException';_.tI=54;function jt(){jt=zB;kt=it(new ht(),false);lt=it(new ht(),true);}
function it(a,b){jt();a.a=b;return a;}
function mt(a){return ee(a,19)&&de(a,19).a==this.a;}
function nt(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function ot(){return this.a?'true':'false';}
function pt(a){jt();return a?lt:kt;}
function ht(){}
_=ht.prototype=new qu();_.eQ=mt;_.hC=nt;_.tS=ot;_.tN=eF+'Boolean';_.tI=55;_.a=false;var kt,lt;function rt(){}
_=rt.prototype=new vu();_.tN=eF+'ClassCastException';_.tI=56;function zt(b,a){wu(b,a);return b;}
function yt(){}
_=yt.prototype=new vu();_.tN=eF+'IllegalArgumentException';_.tI=57;function Ct(b,a){wu(b,a);return b;}
function Bt(){}
_=Bt.prototype=new vu();_.tN=eF+'IllegalStateException';_.tI=58;function Ft(b,a){wu(b,a);return b;}
function Et(){}
_=Et.prototype=new vu();_.tN=eF+'IndexOutOfBoundsException';_.tI=59;function nu(){nu=zB;{pu();}}
function pu(){nu();ou=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var ou=null;function cu(){cu=zB;nu();}
function du(a){cu();return uv(a);}
function gu(a,b){return a<b?a:b;}
function hu(){}
_=hu.prototype=new vu();_.tN=eF+'NegativeArraySizeException';_.tI=60;function ku(b,a){wu(b,a);return b;}
function ju(){}
_=ju.prototype=new vu();_.tN=eF+'NullPointerException';_.tI=61;function fv(b,a){if(!ee(a,1))return false;return pv(b,a);}
function gv(b,a){return b.indexOf(a);}
function hv(a){return a.length;}
function iv(b,a){return jv(b,a,0);}
function jv(j,i,g){var a=new RegExp(i,'g');var h=[];var b=0;var k=j;var e=null;while(true){var f=a.exec(k);if(f==null||(k==''||b==g-1&&g>0)){h[b]=k;break;}else{h[b]=k.substring(0,f.index);k=k.substring(f.index+f[0].length,k.length);a.lastIndex=0;if(e==k){h[b]=k.substring(0,1);k=k.substring(1);}e=k;b++;}}if(g==0){for(var c=h.length-1;c>=0;c--){if(h[c]!=''){h.splice(c+1,h.length-(c+1));break;}}}var d=ov(h.length);var c=0;for(c=0;c<h.length;++c){d[c]=h[c];}return d;}
function kv(b,a){return gv(b,a)==0;}
function lv(b,a){return b.substr(a,b.length-a);}
function mv(c,a,b){return c.substr(a,b-a);}
function nv(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function ov(a){return Ed('[Ljava.lang.String;',[0],[1],[a],null);}
function pv(a,b){return String(a)==b;}
function qv(a){return fv(this,a);}
function sv(){var a=rv;if(!a){a=rv={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function tv(){return this;}
function uv(a){return ''+a;}
function vv(a){return a!==null?a.tS():'null';}
_=String.prototype;_.eQ=qv;_.hC=sv;_.tS=tv;_.tN=eF+'String';_.tI=2;var rv=null;function Au(a){Eu(a);return a;}
function Bu(b,a){Fu(b,a);return b;}
function Cu(a,b){return Du(a,vv(b));}
function Du(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function Eu(a){Fu(a,'');}
function Fu(b,a){b.js=[a];b.length=a.length;}
function bv(a){a.gb();return a.js[0];}
function cv(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function dv(){return bv(this);}
function zu(){}
_=zu.prototype=new qu();_.gb=cv;_.tS=dv;_.tN=eF+'StringBuffer';_.tI=0;function xv(){xv=zB;yv=new dt();}
function zv(a){xv();return C(a);}
var yv;function cw(b,a){wu(b,a);return b;}
function bw(){}
_=bw.prototype=new vu();_.tN=eF+'UnsupportedOperationException';_.tI=62;function mw(b,a){b.c=a;return b;}
function ow(a){return a.a<a.c.zb();}
function pw(){return ow(this);}
function qw(){if(!ow(this)){throw new iB();}return this.c.E(this.b=this.a++);}
function rw(){if(this.b<0){throw new Bt();}this.c.sb(this.b);this.a=this.b;this.b=(-1);}
function lw(){}
_=lw.prototype=new qu();_.ab=pw;_.fb=qw;_.rb=rw;_.tN=fF+'AbstractList$IteratorImpl';_.tI=0;_.a=0;_.b=(-1);function Ax(f,d,e){var a,b,c;for(b=zz(f.t());rz(b);){a=sz(b);c=a.B();if(d===null?c===null:d.eQ(c)){if(e){tz(b);}return a;}}return null;}
function Bx(b){var a;a=b.t();return Cw(new Bw(),b,a);}
function Cx(b){var a;a=eA(b);return lx(new kx(),b,a);}
function Dx(a){return Ax(this,a,false)!==null;}
function Ex(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ee(d,21)){return false;}f=de(d,21);c=Bx(this);e=f.eb();if(!fy(c,e)){return false;}for(a=Ew(c);fx(a);){b=gx(a);h=this.F(b);g=f.F(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function Fx(b){var a;a=Ax(this,b,false);return a===null?null:a.D();}
function ay(){var a,b,c;b=0;for(c=zz(this.t());rz(c);){a=sz(c);b+=a.hC();}return b;}
function by(){return Bx(this);}
function cy(){var a,b,c,d;d='{';a=false;for(c=zz(this.t());rz(c);){b=sz(c);if(a){d+=', ';}else{a=true;}d+=vv(b.B());d+='=';d+=vv(b.D());}return d+'}';}
function Aw(){}
_=Aw.prototype=new qu();_.o=Dx;_.eQ=Ex;_.F=Fx;_.hC=ay;_.eb=by;_.tS=cy;_.tN=fF+'AbstractMap';_.tI=63;function fy(e,b){var a,c,d;if(b===e){return true;}if(!ee(b,22)){return false;}c=de(b,22);if(c.zb()!=e.zb()){return false;}for(a=c.db();a.ab();){d=a.fb();if(!e.p(d)){return false;}}return true;}
function gy(a){return fy(this,a);}
function hy(){var a,b,c;a=0;for(b=this.db();b.ab();){c=b.fb();if(c!==null){a+=c.hC();}}return a;}
function dy(){}
_=dy.prototype=new ew();_.eQ=gy;_.hC=hy;_.tN=fF+'AbstractSet';_.tI=64;function Cw(b,a,c){b.a=a;b.b=c;return b;}
function Ew(b){var a;a=zz(b.b);return dx(new cx(),b,a);}
function Fw(a){return this.a.o(a);}
function ax(){return Ew(this);}
function bx(){return this.b.a.c;}
function Bw(){}
_=Bw.prototype=new dy();_.p=Fw;_.db=ax;_.zb=bx;_.tN=fF+'AbstractMap$1';_.tI=65;function dx(b,a,c){b.a=c;return b;}
function fx(a){return a.a.ab();}
function gx(b){var a;a=b.a.fb();return a.B();}
function hx(){return fx(this);}
function ix(){return gx(this);}
function jx(){this.a.rb();}
function cx(){}
_=cx.prototype=new qu();_.ab=hx;_.fb=ix;_.rb=jx;_.tN=fF+'AbstractMap$2';_.tI=0;function lx(b,a,c){b.a=a;b.b=c;return b;}
function nx(b){var a;a=zz(b.b);return sx(new rx(),b,a);}
function ox(a){return dA(this.a,a);}
function px(){return nx(this);}
function qx(){return this.b.a.c;}
function kx(){}
_=kx.prototype=new ew();_.p=ox;_.db=px;_.zb=qx;_.tN=fF+'AbstractMap$3';_.tI=0;function sx(b,a,c){b.a=c;return b;}
function ux(a){return a.a.ab();}
function vx(a){var b;b=a.a.fb().D();return b;}
function wx(){return ux(this);}
function xx(){return vx(this);}
function yx(){this.a.rb();}
function rx(){}
_=rx.prototype=new qu();_.ab=wx;_.fb=xx;_.rb=yx;_.tN=fF+'AbstractMap$4';_.tI=0;function bA(){bA=zB;jA=pA();}
function Dz(a){{aA(a);}}
function Ez(a){bA();Dz(a);return a;}
function Fz(a,b){bA();Dz(a);gA(a,b);return a;}
function aA(a){a.a=gb();a.d=ib();a.b=ie(jA,cb);a.c=0;}
function cA(b,a){if(ee(a,1)){return tA(b.d,de(a,1))!==jA;}else if(a===null){return b.b!==jA;}else{return sA(b.a,a,a.hC())!==jA;}}
function dA(a,b){if(a.b!==jA&&rA(a.b,b)){return true;}else if(oA(a.d,b)){return true;}else if(mA(a.a,b)){return true;}return false;}
function eA(a){return xz(new nz(),a);}
function fA(c,a){var b;if(ee(a,1)){b=tA(c.d,de(a,1));}else if(a===null){b=c.b;}else{b=sA(c.a,a,a.hC());}return b===jA?null:b;}
function hA(c,a,d){var b;if(ee(a,1)){b=wA(c.d,de(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=vA(c.a,a,d,a.hC());}if(b===jA){++c.c;return null;}else{return b;}}
function gA(d,c){var a,b;b=zz(eA(c));while(rz(b)){a=sz(b);hA(d,a.B(),a.D());}}
function iA(c,a){var b;if(ee(a,1)){b=yA(c.d,de(a,1));}else if(a===null){b=c.b;c.b=ie(jA,cb);}else{b=xA(c.a,a,a.hC());}if(b===jA){return null;}else{--c.c;return b;}}
function kA(e,c){bA();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.n(a[f]);}}}}
function lA(d,a){bA();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=gz(c.substring(1),e);a.n(b);}}}
function mA(f,h){bA();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.D();if(rA(h,d)){return true;}}}}return false;}
function nA(a){return cA(this,a);}
function oA(c,d){bA();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(rA(d,a)){return true;}}}return false;}
function pA(){bA();}
function qA(){return eA(this);}
function rA(a,b){bA();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function uA(a){return fA(this,a);}
function sA(f,h,e){bA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.B();if(rA(h,d)){return c.D();}}}}
function tA(b,a){bA();return b[':'+a];}
function vA(f,h,j,e){bA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.B();if(rA(h,d)){var i=c.D();c.yb(j);return i;}}}else{a=f[e]=[];}var c=gz(h,j);a.push(c);}
function wA(c,a,d){bA();a=':'+a;var b=c[a];c[a]=d;return b;}
function xA(f,h,e){bA();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.B();if(rA(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.D();}}}}
function yA(c,a){bA();a=':'+a;var b=c[a];delete c[a];return b;}
function cz(){}
_=cz.prototype=new Aw();_.o=nA;_.t=qA;_.F=uA;_.tN=fF+'HashMap';_.tI=66;_.a=null;_.b=null;_.c=0;_.d=null;var jA;function ez(b,a,c){b.a=a;b.b=c;return b;}
function gz(a,b){return ez(new dz(),a,b);}
function hz(b){var a;if(ee(b,23)){a=de(b,23);if(rA(this.a,a.B())&&rA(this.b,a.D())){return true;}}return false;}
function iz(){return this.a;}
function jz(){return this.b;}
function kz(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function lz(a){var b;b=this.b;this.b=a;return b;}
function mz(){return this.a+'='+this.b;}
function dz(){}
_=dz.prototype=new qu();_.eQ=hz;_.B=iz;_.D=jz;_.hC=kz;_.yb=lz;_.tS=mz;_.tN=fF+'HashMap$EntryImpl';_.tI=67;_.a=null;_.b=null;function xz(b,a){b.a=a;return b;}
function zz(a){return pz(new oz(),a.a);}
function Az(c){var a,b,d;if(ee(c,23)){a=de(c,23);b=a.B();if(cA(this.a,b)){d=fA(this.a,b);return rA(a.D(),d);}}return false;}
function Bz(){return zz(this);}
function Cz(){return this.a.c;}
function nz(){}
_=nz.prototype=new dy();_.p=Az;_.db=Bz;_.zb=Cz;_.tN=fF+'HashMap$EntrySet';_.tI=68;function pz(c,b){var a;c.c=b;a=ky(new iy());if(c.c.b!==(bA(),jA)){my(a,ez(new dz(),null,c.c.b));}lA(c.c.d,a);kA(c.c.a,a);c.a=a.db();return c;}
function rz(a){return a.a.ab();}
function sz(a){return a.b=de(a.a.fb(),23);}
function tz(a){if(a.b===null){throw Ct(new Bt(),'Must call next() before remove().');}else{a.a.rb();iA(a.c,a.b.B());a.b=null;}}
function uz(){return rz(this);}
function vz(){return sz(this);}
function wz(){tz(this);}
function oz(){}
_=oz.prototype=new qu();_.ab=uz;_.fb=vz;_.rb=wz;_.tN=fF+'HashMap$EntrySetIterator';_.tI=0;_.a=null;_.b=null;function AA(a){a.a=Ez(new cz());return a;}
function CA(a){var b;b=hA(this.a,a,pt(true));return b===null;}
function DA(a){return cA(this.a,a);}
function EA(){return Ew(Bx(this.a));}
function FA(){return this.a.c;}
function aB(){return Bx(this.a).tS();}
function zA(){}
_=zA.prototype=new dy();_.n=CA;_.p=DA;_.db=EA;_.zb=FA;_.tS=aB;_.tN=fF+'HashSet';_.tI=69;_.a=null;function gB(d,c,a,b){wu(d,c);return d;}
function fB(){}
_=fB.prototype=new vu();_.tN=fF+'MissingResourceException';_.tI=70;function iB(){}
_=iB.prototype=new vu();_.tN=fF+'NoSuchElementException';_.tI=71;function nB(a){a.a=ky(new iy());return a;}
function oB(b,a){return my(b.a,a);}
function qB(b,a){return rB(b,a);}
function rB(b,a){return qy(b.a,a);}
function sB(a,b){ly(this.a,a,b);}
function tB(a){return oB(this,a);}
function uB(a){return py(this.a,a);}
function vB(a){return rB(this,a);}
function wB(){return this.a.db();}
function xB(a){return ty(this.a,a);}
function yB(){return this.a.b;}
function mB(){}
_=mB.prototype=new kw();_.m=sB;_.n=tB;_.p=uB;_.E=vB;_.db=wB;_.sb=xB;_.zb=yB;_.tN=fF+'Vector';_.tI=72;_.a=null;function rC(g,h){var a,c,d,e,f;c=CC(new AC(),h);try{e=wE(c);f=jC(new iC(),g,e,c);pg(f,1);}catch(a){a=le(a);if(ee(a,25)){d=a;Ev(d);}else throw a;}}
function sC(g,h){var a,c,d,e,f;c=fD(new dD(),h);try{e=wE(c);f=nC(new mC(),g,e,c);pg(f,1);}catch(a){a=le(a);if(ee(a,25)){d=a;Bg('Exception: '+d.b);Ev(d);}else throw a;}}
function tC(r){var a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s;k='DEFAULT-identities-and-usecases.xml';l='DEFAULT-policy.xml';f='DEFAULT-cancel.html';m='DEFAULT-save-policy.xml';try{h=td('getURLs');k=qd(h,'identities-url');l=qd(h,'policy-url');f=qd(h,'cancel-url');m=qd(h,'save-url');}catch(a){a=le(a);if(ee(a,24)){i=a;Bg('Exception: '+i.b);}else throw a;}sC(r,l);rC(r,k);s=zn(new xn());qi(zm(),s);p=zn(new xn());An(s,p);q=ln(new dn());nn(q,30);An(p,q);o=Bi(new ui(),'Save User or Group',CB(new BB(),r,q));An(p,o);j=dl(new bl());hl(j,(Ck(),Dk));An(s,j);d=dl(new bl());An(s,d);n=m;r.g=Bi(new ui(),'Save Policy',aC(new FB(),r,n));sn(r.g,'gwt-wyona-SaveButton');el(d,r.g);g=f;e=Bi(new ui(),'Cancel',eC(new dC(),r,g));sn(r.g,'gwt-wyona-CancelButton');el(d,e);r.b=wD(new uD(),r.j,r.i,r.a);r.d=CD(new AD(),r.j,r.e,r.c,r.h);c=wC(new uC(),r.b.a,r.d.c,r.d);sn(c,'gwt-wyona-AddRemoveWidget');el(j,r.b);el(j,c);el(j,r.d);}
function AB(){}
_=AB.prototype=new qu();_.tN=gF+'AccessPolicyEditor';_.tI=0;_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;_.h=true;_.i=null;_.j=10;function CB(b,a,c){b.a=a;b.b=c;return b;}
function EB(d){var a,b,c;b=El(this.a.b.a);for(a=0;a<b;a++){c=Fl(this.a.b.a,a);if(gv(c,hn(this.b))>=0)Bg('Result: '+c);}}
function BB(){}
_=BB.prototype=new qu();_.jb=EB;_.tN=gF+'AccessPolicyEditor$1';_.tI=73;function aC(b,a,c){b.a=a;b.b=c;return b;}
function cC(f){var a,c,d,e;c=mD(new lD(),this.b);try{e=oD(c,eE(this.a.d),FD(this.a.d),dE(this.a.d));}catch(a){a=le(a);if(ee(a,25)){d=a;Bg('Exception: '+d.b);}else throw a;}}
function FB(){}
_=FB.prototype=new qu();_.jb=cC;_.tN=gF+'AccessPolicyEditor$2';_.tI=74;function eC(b,a,c){b.a=c;return b;}
function gC(a,b){$wnd.location.href=b;}
function hC(a){Bg('Redirect to '+this.a);gC(this,this.a);}
function dC(){}
_=dC.prototype=new qu();_.jb=hC;_.tN=gF+'AccessPolicyEditor$3';_.tI=75;function kC(){kC=zB;mg();}
function jC(b,a,d,c){kC();b.a=a;b.c=d;b.b=c;kg(b);return b;}
function lC(){if(xc(this.c)){og(this,10);}else{this.a.i=bD(this.b);this.a.a=FC(this.b);this.a.f=aD(this.b);yD(this.a.b,this.a.j,this.a.i,this.a.a);lg(this);Bg('Identities have been loaded!');}}
function iC(){}
_=iC.prototype=new fg();_.vb=lC;_.tN=gF+'AccessPolicyEditor$4';_.tI=76;function oC(){oC=zB;mg();}
function nC(b,a,d,c){oC();b.a=a;b.c=d;b.b=c;kg(b);return b;}
function pC(){if(xc(this.c)){og(this,10);}else{this.a.e=jD(this.b);this.a.c=iD(this.b);gE(this.a.d,this.a.j,this.a.e,this.a.c);this.a.h=this.b.b;hE(this.a.d,this.a.h);lg(this);Bg('Policy has been loaded!');}}
function mC(){}
_=mC.prototype=new fg();_.vb=pC;_.tN=gF+'AccessPolicyEditor$5';_.tI=77;function vC(a){a.b=ek(new dk());}
function wC(d,a,c,b){vC(d);Ej(d,d.b);d.e=Bi(new ui(),'<',d);fk(d.b,d.e);d.a=Bi(new ui(),'>',d);fk(d.b,d.a);d.c=a;d.d=c;return d;}
function yC(b,a){if(gv(a,'(')>0){return mv(a,0,gv(a,'('));}else{return a;}}
function zC(c){var a,b;if(c===this.a){a=am(this.c);if(a>=0){b=bm(this.c,a);Bg('Add selected identity '+b+' to policy');em(this.c,a);Al(this.d,mv(b,0,1)+': (-,-) '+nv(lv(b,2)),b);}else{Bg('No identity selected yet! Please select an identity.');}}else if(c===this.e){a=am(this.d);if(a>=0){b=bm(this.d,a);Bg('Remove selected identity '+b+' from policy');em(this.d,a);zl(this.c,yC(this,b));}else{Bg('No identity selected yet! Please select an identity.');}}}
function uC(){}
_=uC.prototype=new Cj();_.jb=zC;_.tN=gF+'AddRemoveIdentitiesWidget';_.tI=78;_.a=null;_.c=null;_.d=null;_.e=null;function sE(a){a.d=Ez(new cz());}
function tE(a,b){sE(a);a.e=Db(new yb(),(Fb(),dc),b);xE(a);return a;}
function uE(e){var a,b,c,d;b='';a=Fz(new cz(),e.d);for(d=zz(eA(a));rz(d);){c=sz(d);b+=c.B()+''+c.D();if(rz(d)){b+='&';}}return b;}
function wE(a){return ac(a.e,uE(a),a);}
function xE(a){bc(a.e,'Content-Type','application/x-www-form-urlencoded');}
function yE(b,a){Bg('Exception: '+a.b);}
function rE(){}
_=rE.prototype=new qu();_.lb=yE;_.tN=hF+'AsynchronousAgent';_.tI=0;_.e=null;function BC(a){a.c=nB(new mB());a.a=nB(new mB());a.b=nB(new mB());}
function CC(a,b){tE(a,b);BC(a);return a;}
function EC(d,c,a){var b;b=c.A(a);return de(b.cb(0),16);}
function FC(c){var a,b;a=Ed('[Ljava.lang.String;',[0],[1],[c.a.a.b],null);for(b=0;b<c.a.a.b;b++){a[b]=de(qB(c.a,b),1);}return a;}
function aD(c){var a,b;b=Ed('[Ljava.lang.String;',[0],[1],[c.b.a.b],null);for(a=0;a<c.b.a.b;a++){b[a]=de(qB(c.b,a),1);}return b;}
function bD(b){var a,c;c=Ed('[Ljava.lang.String;',[0],[1],[b.c.a.b],null);for(a=0;a<b.c.a.b;a++){c[a]=de(qB(b.c,a),1);}return c;}
function cD(d,e){var a,b,c,f,g,h,i,j;h=yp(tb(e)).y();j=EC(this,h,'users');i=j.A('user');for(c=0;c<i.C();c++){oB(this.c,de(i.cb(c),16).w('id'));}b=EC(this,h,'groups');a=b.A('group');for(c=0;c<a.C();c++){oB(this.a,de(a.cb(c),16).w('id'));}g=EC(this,h,'rights');f=g.A('right');for(c=0;c<f.C();c++){oB(this.b,de(f.cb(c),16).w('id'));}}
function AC(){}
_=AC.prototype=new rE();_.nb=cD;_.tN=gF+'AsynchronousIdentitiesAndRightsGetter';_.tI=0;function eD(a){a.c=nB(new mB());a.a=nB(new mB());}
function fD(a,b){tE(a,b);eD(a);return a;}
function hD(d,c,a){var b;b=c.A(a);if(b.C()>0){return de(b.cb(0),16);}else{return null;}}
function iD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[27],[c.a.a.b],null);for(a=0;a<b.a;a++){b[a]=de(qB(c.a,a),27);}return b;}
function jD(c){var a,b;b=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[26],[c.c.a.b],null);for(a=0;a<b.a;a++){b[a]=de(qB(c.c,a),26);}return b;}
function kD(e,f){var a,b,c,d,g,h,i,j,k,l,m,n;j=yp(tb(f)).y();k=j.w('use-inherited-policies');if(k===null){this.b=true;}else{if(fv(k,'false')){this.b=false;}else{this.b=true;}}n=hD(this,j,'world');m=j.A('user');for(c=0;c<m.C();c++){l=de(m.cb(c),16);h=l.A('right');i=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[28],[h.C()],null);for(d=0;d<i.a;d++){g=de(h.cb(d),16);i[d]=mE(new lE(),g.w('id'),true);}oB(this.c,pE(new oE(),de(m.cb(c),16).w('id'),i));}b=j.A('group');for(c=0;c<b.C();c++){a=de(b.cb(c),16);h=a.A('right');i=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[28],[h.C()],null);for(d=0;d<i.a;d++){g=de(h.cb(d),16);i[d]=mE(new lE(),g.w('id'),true);}oB(this.a,sD(new rD(),a.w('id'),i));}}
function dD(){}
_=dD.prototype=new rE();_.nb=kD;_.tN=gF+'AsynchronousPolicyGetter';_.tI=0;_.b=true;function mD(a,b){Bg('Save policy to: '+b);a.a=Db(new yb(),(Fb(),ec),b);return a;}
function oD(f,h,b,g){var a,c,d,e;a=Bu(new zu(),'<?xml version="1.0"?>');Du(a,'<policy xmlns="http://www.wyona.org/security/1.0" use-inherited-policies="'+g+'">');if(h!==null){for(c=0;c<h.a;c++){Du(a,'<user id="'+h[c].a+'">');e=h[c].b;if(e!==null){for(d=0;d<e.a;d++){Du(a,'<right id="'+e[d].a+'" permission="'+e[d].b+'">'+e[d].a+'<\/right>');}}else{Du(a,'<right id="r" permission="false">r<\/right>');Du(a,'<right id="w" permission="false">w<\/right>');}Du(a,'<\/user>');}}if(b!==null){for(c=0;c<b.a;c++){Du(a,'<group id="'+b[c].a+'">');e=b[c].b;if(e!==null){for(d=0;d<e.a;d++){Du(a,'<right id="'+e[d].a+'" permission="'+e[d].b+'">'+e[d].a+'<\/right>');}}else{Du(a,'<right id="r" permission="false">r<\/right>');Du(a,'<right id="w" permission="false">w<\/right>');}Du(a,'<\/group>');}}Du(a,'<\/policy>');return ac(f.a,bv(a),f);}
function pD(b,a){Bg('Exception: '+a.b);}
function qD(a,b){if(sb(b)==200){Bg('Policy has been saved successfully!');}else{Bg('Policy has NOT been saved! Please check log files on server.');}}
function lD(){}
_=lD.prototype=new qu();_.lb=pD;_.nb=qD;_.tN=gF+'AsynchronousPolicySetter';_.tI=0;_.a=null;function sD(c,a,b){c.a=a;c.b=b;return c;}
function rD(){}
_=rD.prototype=new qu();_.tN=gF+'Group';_.tI=79;_.a=null;_.b=null;function vD(a){a.b=zn(new xn());}
function wD(b,d,c,a){vD(b);Ej(b,b.b);An(b.b,ml(new kl(),'Identities'));b.a=yl(new ql(),true);b.a.l(b);yD(b,d,c,a);An(b.b,b.a);return b;}
function yD(c,e,d,a){var b;Cl(c.a);gm(c.a,e);if(d!==null){for(b=0;b<d.a;b++){zl(c.a,'u: '+d[b]);}}else{zl(c.a,'No users yet!');}if(a!==null){for(b=0;b<a.a;b++){zl(c.a,'g: '+a[b]);}}else{zl(c.a,'No groups yet!');}}
function zD(a){}
function uD(){}
_=uD.prototype=new Cj();_.jb=zD;_.tN=gF+'IdentitiesListBoxWidget';_.tI=80;_.a=null;function BD(a){a.f=zn(new xn());}
function CD(b,e,d,a,c){BD(b);Ej(b,b.f);An(b.f,ml(new kl(),'Policy'));b.d=gj(new dj(),'Inherit rights from parent policies');hE(b,c);An(b.f,b.d);b.c=yl(new ql(),true);b.c.l(b);gE(b,e,d,a);An(b.f,b.c);b.e=gj(new dj(),'Read');b.e.l(b);An(b.f,b.e);b.g=gj(new dj(),'Write');b.g.l(b);An(b.f,b.g);return b;}
function DD(g,a,f){var b,c,d,e;e=nB(new mB());for(c=0;c<a.a;c++){oB(e,a[c].a);}b=false;for(c=0;c<a.a;c++){if(fv(a[c].a,f)){b=true;break;}}if(!b)oB(e,f);d=Ed('[Ljava.lang.String;',[0],[1],[e.a.b],null);for(c=0;c<d.a;c++){d[c]=de(qB(e,c),1);}return d;}
function FD(g){var a,b,c,d,e,f;b=nB(new mB());for(c=0;c<El(g.c);c++){e=Fl(g.c,c);f=bE(g,e);d=aE(g,c);if(kv(d,'g:')){oB(b,sD(new rD(),nv(lv(d,2)),f));}}a=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[27],[b.a.b],null);for(c=0;c<a.a;c++){a[c]=de(qB(b,c),27);}return a;}
function aE(b,a){return bm(b.c,a);}
function bE(f,b){var a,c,d,e;if(gv(b,'(')>0){d=iv(mv(b,gv(b,'(')+1,gv(b,')')),',');e=nB(new mB());for(a=0;a<d.a;a++){if(!fv(d[a],'-')){oB(e,mE(new lE(),d[a],true));}else{if(a==0){oB(e,mE(new lE(),'r',false));}else if(a==1){oB(e,mE(new lE(),'w',false));}else{oB(e,mE(new lE(),'TODO',false));}}}c=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[28],[e.a.b],null);for(a=0;a<c.a;a++){c[a]=de(qB(e,a),28);}return c;}else{return Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Right;',[0],[28],[0],null);}}
function cE(b){var a;a=am(b.c);if(a>=0){return Fl(b.c,a);}return null;}
function dE(a){return ij(a.d);}
function eE(e){var a,b,c,d,f,g;g=nB(new mB());for(a=0;a<El(e.c);a++){c=Fl(e.c,a);d=bE(e,c);b=aE(e,a);if(kv(b,'u:')){oB(g,pE(new oE(),nv(lv(b,2)),d));}}f=Ed('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[26],[g.a.b],null);for(a=0;a<f.a;a++){f[a]=de(qB(g,a),26);}return f;}
function fE(f,a,e){var b,c,d;d=nB(new mB());for(b=0;b<a.a;b++){if(!fv(a[b].a,e)){oB(d,a[b].a);}}c=Ed('[Ljava.lang.String;',[0],[1],[d.a.b],null);for(b=0;b<c.a;b++){c[b]=de(qB(d,b),1);}return c;}
function gE(g,j,h,a){var b,c,d,e,f,i,k;Cl(g.c);gm(g.c,j);if(h!==null||a!==null){if(h!==null){for(b=0;b<h.a;b++){d='u: (';f=h[b].b;e=false;for(c=0;c<f.a;c++){if(fv(f[c].a,g.a)){e=true;break;}}if(e){d=d+g.a;}else{d=d+'-';}d=d+',';k=false;for(c=0;c<f.a;c++){if(f[c].eQ(g.b)){k=true;break;}}if(k){d=d+g.b;}else{d=d+'-';}d=d+') '+h[b].a;i='u: '+h[b].a;Al(g.c,d,i);}}if(a!==null){for(b=0;b<a.a;b++){d='g: (';f=a[b].b;e=false;for(c=0;c<f.a;c++){if(fv(f[c].a,g.a)){e=true;break;}}if(e){d=d+g.a;}else{d=d+'-';}d=d+',';k=false;for(c=0;c<f.a;c++){if(f[c].eQ(g.b)){k=true;break;}}if(k){d=d+g.b;}else{d=d+'-';}d=d+') '+a[b].a;i='g: '+a[b].a;Al(g.c,d,i);}}else{Bg('No groups!');}}else{zl(g.c,'No identities yet!');}}
function hE(a,b){if(a.d!==null){jj(a.d,b);}}
function iE(g,h,a,e,b){var c,d,f,i;f=Bu(new zu(),h+':');Du(f,' (');d=false;i=false;for(c=0;c<e.a;c++){if(fv(e[c],g.a)){d=true;}if(fv(e[c],g.b)){i=true;}}if(d){Du(f,g.a);}else{Du(f,'-');}Du(f,',');if(i){Du(f,g.b);}else{Du(f,'-');}Du(f,')');Du(f,' '+a);fm(g.c,b,bv(f));}
function jE(d,c){var a,b;b=am(d.c);if(b>=0){a=aE(d,b);iE(d,mv(a,0,1),nv(lv(a,2)),c,b);}else{Bg('Exception: No list item selected!');}}
function kE(h){var a,b,c,d,e,f,g;if(h===this.e||h===this.g){g=cE(this);if(g!==null){if(h===this.e){a=bE(this,g);if(ij(this.e)){Bg('Add Read right from selected identity '+g+' from policy');e=DD(this,a,this.a);}else{Bg('Remove Read right from selected identity '+g+' from policy');e=fE(this,a,this.a);}jE(this,e);}else if(h===this.g){a=bE(this,g);if(ij(this.g)){Bg('Add Write right from selected identity '+g+' from policy');e=DD(this,a,this.b);}else{Bg('Remove Write right from selected identity '+g+' from policy');e=fE(this,a,this.b);}jE(this,e);}}else{Bg('No identity has been selected! Please select an identity in order to assign rights.');jj(this.e,false);jj(this.g,false);}}else if(h===this.c){g=cE(this);f=bE(this,g);b=false;c=false;for(d=0;d<f.a;d++){if(fv(f[d].a,this.a)){jj(this.e,true);b=true;}else if(fv(f[d].a,this.b)){jj(this.g,true);c=true;}}if(!b)jj(this.e,false);if(!c)jj(this.g,false);}}
function AD(){}
_=AD.prototype=new Cj();_.jb=kE;_.tN=gF+'PolicyListBoxWidget';_.tI=81;_.a='r';_.b='w';_.c=null;_.d=null;_.e=null;_.g=null;function mE(c,a,b){c.a=a;c.b=b;return c;}
function lE(){}
_=lE.prototype=new qu();_.tN=gF+'Right';_.tI=82;_.a=null;_.b=false;function pE(c,a,b){c.a=a;c.b=b;return c;}
function oE(){}
_=oE.prototype=new qu();_.tN=gF+'User';_.tI=83;_.a=null;_.b=null;function Es(){tC(new AB());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{Es();}catch(a){b(d);}else{Es();}}
var he=[{},{},{1:1},{4:1},{4:1,25:1},{4:1,25:1},{4:1,18:1,25:1},{2:1},{6:1},{6:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{3:1},{2:1,5:1},{2:1},{7:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{20:1},{20:1},{20:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{9:1,10:1,11:1,12:1,13:1,14:1},{7:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{4:1,25:1},{15:1},{15:1},{15:1},{15:1},{15:1},{15:1},{15:1},{4:1,25:1},{15:1},{15:1,17:1},{15:1,16:1},{15:1},{15:1},{15:1},{4:1,25:1},{19:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{21:1},{22:1},{22:1},{21:1},{23:1},{22:1},{22:1},{4:1,24:1,25:1},{4:1,25:1},{20:1},{8:1},{8:1},{8:1},{6:1},{6:1},{8:1,11:1,12:1,13:1,14:1},{27:1},{8:1,11:1,12:1,13:1,14:1},{8:1,11:1,12:1,13:1,14:1},{28:1},{26:1}];if (org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor) {  var __gwt_initHandlers = org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.__gwt_initHandlers;  org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.onScriptLoad(gwtOnLoad);}})();