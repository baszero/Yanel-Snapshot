(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,lE='com.google.gwt.core.client.',mE='com.google.gwt.http.client.',nE='com.google.gwt.i18n.client.',oE='com.google.gwt.lang.',pE='com.google.gwt.user.client.',qE='com.google.gwt.user.client.impl.',rE='com.google.gwt.user.client.ui.',sE='com.google.gwt.user.client.ui.impl.',tE='com.google.gwt.xml.client.',uE='com.google.gwt.xml.client.impl.',vE='java.io.',wE='java.lang.',xE='java.util.',yE='org.wyona.security.gwt.accesspolicyeditor.client.',zE='org.wyona.yanel.gwt.client.';function tB(){}
function mu(a){return this===a;}
function nu(){return tv(this);}
function ou(){return this.tN+'@'+this.hC();}
function ku(){}
_=ku.prototype={};_.eQ=mu;_.hC=nu;_.tS=ou;_.toString=function(){return this.tS();};_.tN=wE+'Object';_.tI=1;function v(a){return a==null?null:a.tN;}
var w=null;function A(a){return a==null?0:a.$H?a.$H:(a.$H=C());}
function B(a){return a==null?0:a.$H?a.$H:(a.$H=C());}
function C(){return ++D;}
var D=0;function vv(b,a){b.b=a;return b;}
function xv(b,a){if(b.a!==null){throw wt(new vt(),"Can't overwrite cause");}if(a===b){throw tt(new st(),'Self-causation not permitted');}b.a=a;return b;}
function yv(a){zv(a,(rv(),sv));}
function zv(e,d){var a,b,c;c=uu(new tu());b=e;while(b!==null){a=b.b;if(b!==e){xu(c,'Caused by: ');}xu(c,b.tN);xu(c,': ');xu(c,a===null?'(No exception detail)':a);xu(c,'\n');b=b.a;}}
function Av(){var a,b;a=v(this);b=this.b;if(b!==null){return a+': '+b;}else{return a;}}
function uv(){}
_=uv.prototype=new ku();_.tS=Av;_.tN=wE+'Throwable';_.tI=3;_.a=null;_.b=null;function qt(b,a){vv(b,a);return b;}
function pt(){}
_=pt.prototype=new uv();_.tN=wE+'Exception';_.tI=4;function qu(b,a){qt(b,a);return b;}
function pu(){}
_=pu.prototype=new pt();_.tN=wE+'RuntimeException';_.tI=5;function F(c,b,a){qu(c,'JavaScript '+b+' exception: '+a);return c;}
function E(){}
_=E.prototype=new pu();_.tN=lE+'JavaScriptException';_.tI=6;function db(b,a){if(!de(a,2)){return false;}return ib(b,ce(a,2));}
function eb(a){return A(a);}
function fb(){return [];}
function gb(){return function(){};}
function hb(){return {};}
function jb(a){return db(this,a);}
function ib(a,b){return a===b;}
function kb(){return eb(this);}
function mb(){return lb(this);}
function lb(a){if(a.toString)return a.toString();return '[object]';}
function bb(){}
_=bb.prototype=new ku();_.eQ=jb;_.hC=kb;_.tS=mb;_.tN=lE+'JavaScriptObject';_.tI=7;function pc(b,d,c,a){if(d===null){throw new du();}if(a===null){throw new du();}if(c<0){throw new st();}b.a=c;b.c=d;if(c>0){b.b=tb(new sb(),b,a);ng(b.b,c);}else{b.b=null;}return b;}
function rc(a){var b;if(a.c!==null){b=a.c;a.c=null;bd(b);qc(a);}}
function qc(a){if(a.b!==null){jg(a.b);}}
function tc(e,a){var b,c,d,f;if(e.c===null){return;}qc(e);f=e.c;e.c=null;b=cd(f);if(b!==null){c=qu(new pu(),b);a.kb(e,c);}else{d=wc(f);a.mb(e,d);}}
function uc(b,a){if(b.c===null){return;}rc(b);a.kb(b,mc(new lc(),b,b.a));}
function vc(b){var a;if(b.c===null){return false;}a=dd(b.c);switch(a){case 1:case 2:case 3:return true;}return false;}
function wc(b){var a;a=pb(new ob(),b);return a;}
function xc(a){var b;b=w;{tc(this,a);}}
function nb(){}
_=nb.prototype=new ku();_.t=xc;_.tN=mE+'Request';_.tI=0;_.a=0;_.b=null;_.c=null;function yc(){}
_=yc.prototype=new ku();_.tN=mE+'Response';_.tI=0;function pb(a,b){a.a=b;return a;}
function rb(a){return ed(a.a);}
function ob(){}
_=ob.prototype=new yc();_.tN=mE+'Request$1';_.tI=0;function kg(){kg=tB;ug=ey(new cy());{tg();}}
function ig(a){kg();return a;}
function jg(a){if(a.d){og(a.e);}else{pg(a.e);}oy(ug,a);}
function lg(a){if(!a.d){oy(ug,a);}a.ub();}
function ng(b,a){if(a<=0){throw tt(new st(),'must be positive');}jg(b);b.d=false;b.e=rg(b,a);gy(ug,b);}
function mg(b,a){if(a<=0){throw tt(new st(),'must be positive');}jg(b);b.d=true;b.e=qg(b,a);gy(ug,b);}
function og(a){kg();$wnd.clearInterval(a);}
function pg(a){kg();$wnd.clearTimeout(a);}
function qg(b,a){kg();return $wnd.setInterval(function(){b.u();},a);}
function rg(b,a){kg();return $wnd.setTimeout(function(){b.u();},a);}
function sg(){var a;a=w;{lg(this);}}
function tg(){kg();yg(new eg());}
function dg(){}
_=dg.prototype=new ku();_.u=sg;_.tN=pE+'Timer';_.tI=8;_.d=false;_.e=0;var ug;function ub(){ub=tB;kg();}
function tb(b,a,c){ub();b.a=a;b.b=c;ig(b);return b;}
function vb(){uc(this.a,this.b);}
function sb(){}
_=sb.prototype=new dg();_.ub=vb;_.tN=mE+'Request$2';_.tI=9;function Db(){Db=tB;bc=yb(new xb(),'GET');cc=yb(new xb(),'POST');dc=ii(new hi());}
function Bb(b,a,c){Db();Cb(b,a===null?null:a.a,c);return b;}
function Cb(b,a,c){Db();Cc('httpMethod',a);Cc('url',c);b.b=a;b.d=c;return b;}
function Eb(g,d,a){var b,c,e,f,h;h=ki(dc);{b=fd(h,g.b,g.d,true);}if(b!==null){e=jc(new ic(),g.d);xv(e,gc(new fc(),b));throw e;}ac(g,h);c=pc(new nb(),h,g.c,a);f=gd(h,c,d,a);if(f!==null){throw gc(new fc(),f);}return c;}
function Fb(b,a,c){Cc('header',a);Cc('value',c);if(b.a===null){b.a=yz(new Cy());}bA(b.a,a,c);}
function ac(e,f){var a,b,c,d;if(e.a!==null&&e.a.c>0){a=Ez(e.a);d=tz(a);while(lz(d)){c=mz(d);b=hd(f,ce(c.A(),1),ce(c.C(),1));if(b!==null){throw gc(new fc(),b);}}}else{hd(f,'Content-Type','text/plain; charset=utf-8');}}
function wb(){}
_=wb.prototype=new ku();_.tN=mE+'RequestBuilder';_.tI=0;_.a=null;_.b=null;_.c=0;_.d=null;var bc,cc,dc;function yb(b,a){b.a=a;return b;}
function Ab(){return this.a;}
function xb(){}
_=xb.prototype=new ku();_.tS=Ab;_.tN=mE+'RequestBuilder$Method';_.tI=0;_.a=null;function gc(b,a){qt(b,a);return b;}
function fc(){}
_=fc.prototype=new pt();_.tN=mE+'RequestException';_.tI=10;function jc(a,b){gc(a,'The URL '+b+' is invalid or violates the same-origin security restriction');return a;}
function ic(){}
_=ic.prototype=new fc();_.tN=mE+'RequestPermissionException';_.tI=11;function mc(b,a,c){gc(b,oc(c));return b;}
function oc(a){return 'A request timeout has expired after '+Dt(a)+' ms';}
function lc(){}
_=lc.prototype=new fc();_.tN=mE+'RequestTimeoutException';_.tI=12;function Cc(a,b){Dc(a,b);if(0==bv(hv(b))){throw tt(new st(),a+' can not be empty');}}
function Dc(a,b){if(null===b){throw eu(new du(),a+' can not be null');}}
function bd(a){a.onreadystatechange=mi;a.abort();}
function cd(b){try{if(b.status===undefined){return 'XmlHttpRequest.status == undefined, please see Safari bug '+'http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';}return null;}catch(a){return 'Unable to read XmlHttpRequest.status; likely causes are a '+'networking error or bad cross-domain request. Please see '+'https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more '+'details';}}
function dd(a){return a.readyState;}
function ed(a){return a.responseText;}
function fd(e,c,d,b){try{e.open(c,d,b);return null;}catch(a){return a.message||a.toString();}}
function gd(e,c,d,b){e.onreadystatechange=function(){if(e.readyState==ad){e.onreadystatechange=mi;c.t(b);}};try{e.send(d);return null;}catch(a){e.onreadystatechange=mi;return a.message||a.toString();}}
function hd(d,b,c){try{d.setRequestHeader(b,c);return null;}catch(a){return a.message||a.toString();}}
var ad=4;function md(){md=tB;pd=yz(new Cy());}
function jd(b,a){md();if(a===null||Fu('',a)){throw tt(new st(),'Cannot create a Dictionary with a null or empty name');}b.b='Dictionary '+a;ld(b,a);if(b.a===null){throw aB(new FA(),"Cannot find JavaScript object with the name '"+a+"'",a,null);}return b;}
function kd(b,a){for(x in b.a){a.n(x);}}
function ld(c,b){try{if(typeof $wnd[b]!='object'){rd(b);}c.a=$wnd[b];}catch(a){rd(b);}}
function nd(b,a){var c=b.a[a];if(c==null|| !Object.prototype.hasOwnProperty.call(b.a,a)){b.tb(a);}return String(c);}
function od(b){var a;a=uA(new tA());kd(b,a);return a;}
function qd(a){md();var b;b=ce(Fz(pd,a),3);if(b===null){b=jd(new id(),a);bA(pd,a,b);}return b;}
function sd(b){var a,c;c=od(this);a="Cannot find '"+b+"' in "+this;if(c.a.c<20){a+='\n keys found: '+c;}throw aB(new FA(),a,this.b,b);}
function rd(a){md();throw aB(new FA(),"'"+a+"' is not a JavaScript object and cannot be used as a Dictionary",null,a);}
function td(){return this.b;}
function id(){}
_=id.prototype=new ku();_.tb=sd;_.tS=td;_.tN=nE+'Dictionary';_.tI=13;_.a=null;_.b=null;var pd;function vd(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function xd(a,b,c){return a[b]=c;}
function yd(b,a){return b[a];}
function Ad(b,a){return b[a];}
function zd(a){return a.length;}
function Cd(e,d,c,b,a){return Bd(e,d,c,b,0,zd(b),a);}
function Bd(j,i,g,c,e,a,b){var d,f,h;if((f=yd(c,e))<0){throw new bu();}h=vd(new ud(),f,yd(i,e),yd(g,e),j);++e;if(e<a){j=fv(j,1);for(d=0;d<f;++d){xd(h,d,Bd(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){xd(h,d,b);}}return h;}
function Dd(f,e,c,g){var a,b,d;b=zd(g);d=vd(new ud(),b,e,c,f);for(a=0;a<b;++a){xd(d,a,Ad(g,a));}return d;}
function Ed(a,b,c){if(c!==null&&a.b!=0&& !de(c,a.b)){throw new Fs();}return xd(a,b,c);}
function ud(){}
_=ud.prototype=new ku();_.tN=oE+'Array';_.tI=0;function be(b,a){return !(!(b&&ge[b][a]));}
function ce(b,a){if(b!=null)be(b.tI,a)||fe();return b;}
function de(b,a){return b!=null&&be(b.tI,a);}
function fe(){throw new lt();}
function ee(a){if(a!==null){throw new lt();}return a;}
function he(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var ge;function ke(a){if(de(a,4)){return a;}return F(new E(),me(a),le(a));}
function le(a){return a.message;}
function me(a){return a.name;}
function oe(){oe=tB;nf=ey(new cy());{hf=new eh();ih(hf);}}
function pe(b,a){oe();th(hf,b,a);}
function qe(a,b){oe();return gh(hf,a,b);}
function re(){oe();return vh(hf,'button');}
function se(){oe();return vh(hf,'div');}
function te(){oe();return wh(hf,'checkbox');}
function ue(){oe();return wh(hf,'text');}
function ve(){oe();return vh(hf,'label');}
function we(a){oe();return xh(hf,a);}
function xe(){oe();return vh(hf,'span');}
function ye(){oe();return vh(hf,'tbody');}
function ze(){oe();return vh(hf,'td');}
function Ae(){oe();return vh(hf,'tr');}
function Be(){oe();return vh(hf,'table');}
function Ee(b,a,d){oe();var c;c=w;{De(b,a,d);}}
function De(b,a,c){oe();var d;if(a===mf){if(af(b)==8192){mf=null;}}d=Ce;Ce=b;try{c.hb(b);}finally{Ce=d;}}
function Fe(b,a){oe();yh(hf,b,a);}
function af(a){oe();return zh(hf,a);}
function bf(a){oe();oh(hf,a);}
function cf(a){oe();return ph(hf,a);}
function df(a,b){oe();return Ah(hf,a,b);}
function ef(a,b){oe();return Bh(hf,a,b);}
function ff(a){oe();return Ch(hf,a);}
function gf(a){oe();return qh(hf,a);}
function jf(c,b,d,a){oe();Dh(hf,c,b,d,a);}
function kf(a){oe();var b,c;c=true;if(nf.b>0){b=ee(ky(nf,nf.b-1));if(!(c=null.Ab())){Fe(a,true);bf(a);}}return c;}
function lf(b,a){oe();Eh(hf,b,a);}
function qf(a,b,c){oe();bi(hf,a,b,c);}
function of(a,b,c){oe();Fh(hf,a,b,c);}
function pf(a,b,c){oe();ai(hf,a,b,c);}
function rf(a,b){oe();ci(hf,a,b);}
function sf(a,b){oe();di(hf,a,b);}
function tf(a,b){oe();ei(hf,a,b);}
function uf(b,c,a){oe();fi(hf,b,c,a);}
function vf(b,a,c){oe();gi(hf,b,a,c);}
function wf(a,b){oe();kh(hf,a,b);}
function xf(a){oe();return lh(hf,a);}
var Ce=null,hf=null,mf=null,nf;function Af(a){if(de(a,5)){return qe(this,ce(a,5));}return db(he(this,yf),a);}
function Bf(){return eb(he(this,yf));}
function Cf(){return xf(this);}
function yf(){}
_=yf.prototype=new bb();_.eQ=Af;_.hC=Bf;_.tS=Cf;_.tN=pE+'Element';_.tI=14;function ag(a){return db(he(this,Df),a);}
function bg(){return eb(he(this,Df));}
function cg(){return cf(this);}
function Df(){}
_=Df.prototype=new bb();_.eQ=ag;_.hC=bg;_.tS=cg;_.tN=pE+'Event';_.tI=15;function gg(){while((kg(),ug).b>0){jg(ce(ky((kg(),ug),0),6));}}
function hg(){return null;}
function eg(){}
_=eg.prototype=new ku();_.ob=gg;_.pb=hg;_.tN=pE+'Timer$1';_.tI=16;function xg(){xg=tB;Ag=ey(new cy());ch=ey(new cy());{Eg();}}
function yg(a){xg();gy(Ag,a);}
function zg(a){xg();$wnd.alert(a);}
function Bg(){xg();var a,b;for(a=Ag.cb();a.F();){b=ce(a.eb(),7);b.ob();}}
function Cg(){xg();var a,b,c,d;d=null;for(a=Ag.cb();a.F();){b=ce(a.eb(),7);c=b.pb();{d=c;}}return d;}
function Dg(){xg();var a,b;for(a=ch.cb();a.F();){b=ee(a.eb());null.Ab();}}
function Eg(){xg();__gwt_initHandlers(function(){bh();},function(){return ah();},function(){Fg();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function Fg(){xg();var a;a=w;{Bg();}}
function ah(){xg();var a;a=w;{return Cg();}}
function bh(){xg();var a;a=w;{Dg();}}
var Ag,ch;function th(c,b,a){b.appendChild(a);}
function vh(b,a){return $doc.createElement(a);}
function wh(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function xh(c,a){var b;b=vh(c,'select');if(a){Fh(c,b,'multiple',true);}return b;}
function yh(c,b,a){b.cancelBubble=a;}
function zh(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function Ah(c,a,b){return !(!a[b]);}
function Bh(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function Ch(b,a){return a.__eventBits||0;}
function Dh(e,d,b,f,a){var c=new Option(b,f);if(a== -1||a>d.options.length-1){d.add(c,null);}else{d.add(c,d.options[a]);}}
function Eh(c,b,a){b.removeChild(a);}
function bi(c,a,b,d){a[b]=d;}
function Fh(c,a,b,d){a[b]=d;}
function ai(c,a,b,d){a[b]=d;}
function ci(c,a,b){a.__listener=b;}
function di(c,a,b){if(!b){b='';}a.innerHTML=b;}
function ei(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function fi(e,c,d,a){var b=c.options[a];b.text=d;}
function gi(c,b,a,d){b.style[a]=d;}
function dh(){}
_=dh.prototype=new ku();_.tN=qE+'DOMImpl';_.tI=0;function oh(b,a){a.preventDefault();}
function ph(b,a){return a.toString();}
function qh(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function rh(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){Ee(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!kf(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)Ee(b,a,c);};$wnd.__captureElem=null;}
function sh(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function mh(){}
_=mh.prototype=new dh();_.tN=qE+'DOMImplStandard';_.tI=0;function gh(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function ih(a){rh(a);hh(a);}
function hh(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function kh(c,b,a){sh(c,b,a);jh(c,b,a);}
function jh(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function lh(d,a){var b=a.cloneNode(true);var c=$doc.createElement('DIV');c.appendChild(b);outer=c.innerHTML;b.innerHTML='';return outer;}
function eh(){}
_=eh.prototype=new mh();_.tN=qE+'DOMImplMozilla';_.tI=0;function ii(a){mi=gb();return a;}
function ki(a){return li(a);}
function li(a){return new XMLHttpRequest();}
function hi(){}
_=hi.prototype=new ku();_.tN=qE+'HTTPRequestImpl';_.tI=0;var mi=null;function mn(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function nn(b,a){if(b.k!==null){mn(b,b.k,a);}b.k=a;}
function on(b,a){rn(b.k,a);}
function pn(b,a){wf(b.y(),a|ff(b.y()));}
function qn(){return this.k;}
function rn(a,b){qf(a,'className',b);}
function sn(){if(this.k===null){return '(null handle)';}return xf(this.k);}
function kn(){}
_=kn.prototype=new ku();_.y=qn;_.tS=sn;_.tN=rE+'UIObject';_.tI=0;_.k=null;function oo(a){if(de(a.j,10)){ce(a.j,10).sb(a);}else if(a.j!==null){throw wt(new vt(),"This widget's parent does not implement HasWidgets");}}
function po(b,a){if(b.ab()){rf(b.y(),null);}nn(b,a);if(b.ab()){rf(a,b);}}
function qo(c,b){var a;a=c.j;if(b===null){if(a!==null&&a.ab()){c.jb();}c.j=null;}else{if(a!==null){throw wt(new vt(),'Cannot set a new parent without first clearing the old parent');}c.j=b;if(b.ab()){c.gb();}}}
function ro(){}
function so(){}
function to(){return this.i;}
function uo(){if(this.ab()){throw wt(new vt(),"Should only call onAttach when the widget is detached from the browser's document");}this.i=true;rf(this.y(),this);this.q();this.lb();}
function vo(a){}
function wo(){if(!this.ab()){throw wt(new vt(),"Should only call onDetach when the widget is attached to the browser's document");}try{this.nb();}finally{this.r();rf(this.y(),null);this.i=false;}}
function xo(){}
function yo(){}
function zo(a){po(this,a);}
function An(){}
_=An.prototype=new kn();_.q=ro;_.r=so;_.ab=to;_.gb=uo;_.hb=vo;_.jb=wo;_.lb=xo;_.nb=yo;_.vb=zo;_.tN=rE+'Widget';_.tI=17;_.i=false;_.j=null;function hm(b,a){qo(a,b);}
function jm(b,a){qo(a,null);}
function km(){var a,b;for(b=this.cb();Fn(b);){a=ao(b);a.gb();}}
function lm(){var a,b;for(b=this.cb();Fn(b);){a=ao(b);a.jb();}}
function mm(){}
function nm(){}
function gm(){}
_=gm.prototype=new An();_.q=km;_.r=lm;_.lb=mm;_.nb=nm;_.tN=rE+'Panel';_.tI=18;function uj(a){a.f=fo(new Bn(),a);}
function vj(a){uj(a);return a;}
function wj(c,a,b){oo(a);go(c.f,a);pe(b,a.y());hm(c,a);}
function yj(b,c){var a;if(c.j!==b){return false;}jm(b,c);a=c.y();lf(gf(a),a);mo(b.f,c);return true;}
function zj(){return ko(this.f);}
function Aj(a){return yj(this,a);}
function tj(){}
_=tj.prototype=new gm();_.cb=zj;_.sb=Aj;_.tN=rE+'ComplexPanel';_.tI=19;function oi(a){vj(a);a.vb(se());vf(a.y(),'position','relative');vf(a.y(),'overflow','hidden');return a;}
function pi(a,b){wj(a,b,a.y());}
function ri(a){vf(a,'left','');vf(a,'top','');vf(a,'position','');}
function si(b){var a;a=yj(this,b);if(a){ri(b.y());}return a;}
function ni(){}
_=ni.prototype=new tj();_.sb=si;_.tN=rE+'AbsolutePanel';_.tI=20;function ik(){ik=tB;Co(),Eo;}
function hk(b,a){Co(),Eo;kk(b,a);return b;}
function jk(b,a){switch(af(a)){case 1:if(b.c!==null){rj(b.c,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function kk(b,a){po(b,a);pn(b,7041);}
function lk(a){if(this.c===null){this.c=pj(new oj());}gy(this.c,a);}
function mk(a){jk(this,a);}
function nk(a){kk(this,a);}
function gk(){}
_=gk.prototype=new An();_.l=lk;_.hb=mk;_.vb=nk;_.tN=rE+'FocusWidget';_.tI=21;_.c=null;function wi(){wi=tB;Co(),Eo;}
function vi(b,a){Co(),Eo;hk(b,a);return b;}
function xi(a){sf(this.y(),a);}
function ui(){}
_=ui.prototype=new gk();_.wb=xi;_.tN=rE+'ButtonBase';_.tI=22;function Bi(){Bi=tB;Co(),Eo;}
function yi(a){Co(),Eo;vi(a,re());Ci(a.y());on(a,'gwt-Button');return a;}
function zi(b,a){Co(),Eo;yi(b);b.wb(a);return b;}
function Ai(c,a,b){Co(),Eo;zi(c,a);c.l(b);return c;}
function Ci(b){Bi();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function ti(){}
_=ti.prototype=new ui();_.tN=rE+'Button';_.tI=23;function Ei(a){vj(a);a.e=Be();a.d=ye();pe(a.e,a.d);a.vb(a.e);return a;}
function aj(c,b,a){qf(b,'align',a.a);}
function bj(c,b,a){vf(b,'verticalAlign',a.a);}
function Di(){}
_=Di.prototype=new tj();_.tN=rE+'CellPanel';_.tI=24;_.d=null;_.e=null;function gj(){gj=tB;Co(),Eo;}
function dj(a){Co(),Eo;ej(a,te());on(a,'gwt-CheckBox');return a;}
function fj(b,a){Co(),Eo;dj(b);jj(b,a);return b;}
function ej(b,a){var c;Co(),Eo;vi(b,xe());b.a=a;b.b=ve();wf(b.a,ff(b.y()));wf(b.y(),0);pe(b.y(),b.a);pe(b.y(),b.b);c='check'+ ++nj;qf(b.a,'id',c);qf(b.b,'htmlFor',c);return b;}
function hj(b){var a;a=b.ab()?'checked':'defaultChecked';return df(b.a,a);}
function ij(b,a){of(b.a,'checked',a);of(b.a,'defaultChecked',a);}
function jj(b,a){tf(b.b,a);}
function kj(){rf(this.a,this);}
function lj(){rf(this.a,null);ij(this,hj(this));}
function mj(a){sf(this.b,a);}
function cj(){}
_=cj.prototype=new ui();_.lb=kj;_.nb=lj;_.wb=mj;_.tN=rE+'CheckBox';_.tI=25;_.a=null;_.b=null;var nj=0;function Fv(d,a,b){var c;while(a.F()){c=a.eb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function bw(a){throw Cv(new Bv(),'add');}
function cw(b){var a;a=Fv(this,this.cb(),b);return a!==null;}
function dw(){var a,b,c;c=uu(new tu());a=null;xu(c,'[');b=this.cb();while(b.F()){if(a!==null){xu(c,a);}else{a=', ';}xu(c,pv(b.eb()));}xu(c,']');return Bu(c);}
function Ev(){}
_=Ev.prototype=new ku();_.n=bw;_.p=cw;_.tS=dw;_.tN=xE+'AbstractCollection';_.tI=0;function nw(b,a){throw zt(new yt(),'Index: '+a+', Size: '+b.b);}
function ow(b,a){throw Cv(new Bv(),'add');}
function pw(a){this.m(this.yb(),a);return true;}
function qw(e){var a,b,c,d,f;if(e===this){return true;}if(!de(e,20)){return false;}f=ce(e,20);if(this.yb()!=f.yb()){return false;}c=this.cb();d=f.cb();while(c.F()){a=c.eb();b=d.eb();if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function rw(){var a,b,c,d;c=1;a=31;b=this.cb();while(b.F()){d=b.eb();c=31*c+(d===null?0:d.hC());}return c;}
function sw(){return gw(new fw(),this);}
function tw(a){throw Cv(new Bv(),'remove');}
function ew(){}
_=ew.prototype=new Ev();_.m=ow;_.n=pw;_.eQ=qw;_.hC=rw;_.cb=sw;_.rb=tw;_.tN=xE+'AbstractList';_.tI=26;function dy(a){{hy(a);}}
function ey(a){dy(a);return a;}
function fy(c,a,b){if(a<0||a>c.b){nw(c,a);}py(c.a,a,b);++c.b;}
function gy(b,a){yy(b.a,b.b++,a);return true;}
function hy(a){a.a=fb();a.b=0;}
function jy(b,a){return ly(b,a)!=(-1);}
function ky(b,a){if(a<0||a>=b.b){nw(b,a);}return uy(b.a,a);}
function ly(b,a){return my(b,a,0);}
function my(c,b,a){if(a<0){nw(c,a);}for(;a<c.b;++a){if(ty(b,uy(c.a,a))){return a;}}return (-1);}
function ny(c,a){var b;b=ky(c,a);wy(c.a,a,1);--c.b;return b;}
function oy(c,b){var a;a=ly(c,b);if(a==(-1)){return false;}ny(c,a);return true;}
function qy(a,b){fy(this,a,b);}
function ry(a){return gy(this,a);}
function py(a,b,c){a.splice(b,0,c);}
function sy(a){return jy(this,a);}
function ty(a,b){return a===b||a!==null&&a.eQ(b);}
function vy(a){return ky(this,a);}
function uy(a,b){return a[b];}
function xy(a){return ny(this,a);}
function wy(a,c,b){a.splice(c,b);}
function yy(a,b,c){a[b]=c;}
function zy(){return this.b;}
function cy(){}
_=cy.prototype=new ew();_.m=qy;_.n=ry;_.p=sy;_.D=vy;_.rb=xy;_.yb=zy;_.tN=xE+'ArrayList';_.tI=27;_.a=null;_.b=0;function pj(a){ey(a);return a;}
function rj(d,c){var a,b;for(a=d.cb();a.F();){b=ce(a.eb(),8);b.ib(c);}}
function oj(){}
_=oj.prototype=new cy();_.tN=rE+'ClickListenerCollection';_.tI=28;function Dj(a,b){if(a.h!==null){throw wt(new vt(),'Composite.initWidget() may only be called once.');}oo(b);a.vb(b.y());a.h=b;qo(b,a);}
function Ej(){if(this.h===null){throw wt(new vt(),'initWidget() was never called in '+v(this));}return this.k;}
function Fj(){if(this.h!==null){return this.h.ab();}return false;}
function ak(){this.h.gb();this.lb();}
function bk(){try{this.nb();}finally{this.h.jb();}}
function Bj(){}
_=Bj.prototype=new An();_.y=Ej;_.ab=Fj;_.gb=ak;_.jb=bk;_.tN=rE+'Composite';_.tI=29;_.h=null;function dk(a){vj(a);a.vb(se());return a;}
function ek(a,b){wj(a,b,a.y());}
function ck(){}
_=ck.prototype=new tj();_.tN=rE+'FlowPanel';_.tI=30;function uk(){uk=tB;sk(new rk(),'center');vk=sk(new rk(),'left');sk(new rk(),'right');}
var vk;function sk(b,a){b.a=a;return b;}
function rk(){}
_=rk.prototype=new ku();_.tN=rE+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=0;_.a=null;function Bk(){Bk=tB;zk(new yk(),'bottom');zk(new yk(),'middle');Ck=zk(new yk(),'top');}
var Ck;function zk(a,b){a.a=b;return a;}
function yk(){}
_=yk.prototype=new ku();_.tN=rE+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=0;_.a=null;function al(a){a.a=(uk(),vk);a.c=(Bk(),Ck);}
function bl(a){Ei(a);al(a);a.b=Ae();pe(a.d,a.b);qf(a.e,'cellSpacing','0');qf(a.e,'cellPadding','0');return a;}
function cl(b,c){var a;a=el(b);pe(b.b,a);wj(b,c,a);}
function el(b){var a;a=ze();aj(b,a,b.a);bj(b,a,b.c);return a;}
function fl(c){var a,b;b=gf(c.y());a=yj(this,c);if(a){lf(this.b,b);}return a;}
function Fk(){}
_=Fk.prototype=new Di();_.sb=fl;_.tN=rE+'HorizontalPanel';_.tI=31;_.b=null;function il(a){a.vb(se());pn(a,131197);on(a,'gwt-Label');return a;}
function jl(b,a){il(b);ll(b,a);return b;}
function ll(b,a){tf(b.y(),a);}
function ml(a){switch(af(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function hl(){}
_=hl.prototype=new An();_.hb=ml;_.tN=rE+'Label';_.tI=32;function Al(){Al=tB;Co(),Eo;em=new ol();}
function vl(b,a){Al();hk(b,we(a));pn(b,1024);on(b,'gwt-ListBox');return b;}
function wl(b,a){Fl(b,a,(-1));}
function xl(b,a,c){am(b,a,c,(-1));}
function yl(b,a){if(a<0||a>=Bl(b)){throw new yt();}}
function zl(a){pl(em,a.y());}
function Bl(a){return rl(em,a.y());}
function Cl(b,a){yl(b,a);return sl(em,b.y(),a);}
function Dl(a){return ef(a.y(),'selectedIndex');}
function El(b,a){yl(b,a);return tl(em,b.y(),a);}
function Fl(c,b,a){am(c,b,b,a);}
function am(c,b,d,a){jf(c.y(),b,d,a);}
function bm(b,a){yl(b,a);ul(em,b.y(),a);}
function cm(c,a,b){yl(c,a);if(b===null){throw eu(new du(),'Cannot set an option to have null text');}uf(c.y(),b,a);}
function dm(a,b){pf(a.y(),'size',b);}
function fm(a){if(af(a)==1024){}else{jk(this,a);}}
function nl(){}
_=nl.prototype=new gk();_.hb=fm;_.tN=rE+'ListBox';_.tI=33;var em;function pl(b,a){a.options.length=0;}
function rl(b,a){return a.options.length;}
function sl(c,b,a){return b.options[a].text;}
function tl(c,b,a){return b.options[a].value;}
function ul(c,b,a){b.options[a]=null;}
function ol(){}
_=ol.prototype=new ku();_.tN=rE+'ListBox$Impl';_.tI=0;function um(){um=tB;zm=yz(new Cy());}
function tm(b,a){um();oi(b);if(a===null){a=vm();}b.vb(a);b.gb();return b;}
function wm(){um();return xm(null);}
function xm(c){um();var a,b;b=ce(Fz(zm,c),9);if(b!==null){return b;}a=null;if(zm.c==0){ym();}bA(zm,c,b=tm(new om(),a));return b;}
function vm(){um();return $doc.body;}
function ym(){um();yg(new pm());}
function om(){}
_=om.prototype=new ni();_.tN=rE+'RootPanel';_.tI=34;var zm;function rm(){var a,b;for(b=hx(wx((um(),zm)));ox(b);){a=ce(px(b),9);if(a.ab()){a.jb();}}}
function sm(){return null;}
function pm(){}
_=pm.prototype=new ku();_.ob=rm;_.pb=sm;_.tN=rE+'RootPanel$1';_.tI=35;function dn(){dn=tB;Co(),Eo;}
function cn(b,a){Co(),Eo;hk(b,a);pn(b,1024);return b;}
function en(a){if(this.a===null){this.a=pj(new oj());}gy(this.a,a);}
function fn(a){var b;jk(this,a);b=af(a);if(b==1){if(this.a!==null){rj(this.a,this);}}else{}}
function bn(){}
_=bn.prototype=new gk();_.l=en;_.hb=fn;_.tN=rE+'TextBoxBase';_.tI=36;_.a=null;function hn(){hn=tB;Co(),Eo;}
function gn(a){Co(),Eo;cn(a,ue());on(a,'gwt-TextBox');return a;}
function jn(b,a){pf(b.y(),'size',a);}
function an(){}
_=an.prototype=new bn();_.tN=rE+'TextBox';_.tI=37;function un(a){a.a=(uk(),vk);a.b=(Bk(),Ck);}
function vn(a){Ei(a);un(a);qf(a.e,'cellSpacing','0');qf(a.e,'cellPadding','0');return a;}
function wn(b,d){var a,c;c=Ae();a=yn(b);pe(c,a);pe(b.d,c);wj(b,d,a);}
function yn(b){var a;a=ze();aj(b,a,b.a);bj(b,a,b.b);return a;}
function zn(c){var a,b;b=gf(c.y());a=yj(this,c);if(a){lf(this.d,gf(b));}return a;}
function tn(){}
_=tn.prototype=new Di();_.sb=zn;_.tN=rE+'VerticalPanel';_.tI=38;function fo(b,a){b.b=a;b.a=Cd('[Lcom.google.gwt.user.client.ui.Widget;',[0],[12],[4],null);return b;}
function go(a,b){jo(a,b,a.c);}
function io(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]===c){return a;}}return (-1);}
function jo(d,e,a){var b,c;if(a<0||a>d.c){throw new yt();}if(d.c==d.a.a){c=Cd('[Lcom.google.gwt.user.client.ui.Widget;',[0],[12],[d.a.a*2],null);for(b=0;b<d.a.a;++b){Ed(c,b,d.a[b]);}d.a=c;}++d.c;for(b=d.c-1;b>a;--b){Ed(d.a,b,d.a[b-1]);}Ed(d.a,a,e);}
function ko(a){return Dn(new Cn(),a);}
function lo(c,b){var a;if(b<0||b>=c.c){throw new yt();}--c.c;for(a=b;a<c.c;++a){Ed(c.a,a,c.a[a+1]);}Ed(c.a,c.c,null);}
function mo(b,c){var a;a=io(b,c);if(a==(-1)){throw new cB();}lo(b,a);}
function Bn(){}
_=Bn.prototype=new ku();_.tN=rE+'WidgetCollection';_.tI=0;_.a=null;_.b=null;_.c=0;function Dn(b,a){b.b=a;return b;}
function Fn(a){return a.a<a.b.c-1;}
function ao(a){if(a.a>=a.b.c){throw new cB();}return a.b.a[++a.a];}
function bo(){return Fn(this);}
function co(){return ao(this);}
function eo(){if(this.a<0||this.a>=this.b.c){throw new vt();}this.b.b.sb(this.b.a[this.a--]);}
function Cn(){}
_=Cn.prototype=new ku();_.F=bo;_.eb=co;_.qb=eo;_.tN=rE+'WidgetCollection$WidgetIterator';_.tI=0;_.a=(-1);function Co(){Co=tB;Do=Bo(new Ao());Eo=Do;}
function Bo(a){Co();return a;}
function Ao(){}
_=Ao.prototype=new ku();_.tN=sE+'FocusImpl';_.tI=0;var Do,Eo;function ep(c,a,b){qu(c,b);return c;}
function dp(){}
_=dp.prototype=new pu();_.tN=tE+'DOMException';_.tI=39;function pp(){pp=tB;qp=(gs(),ws);}
function rp(a){pp();return hs(qp,a);}
var qp;function fq(b,a){b.a=a;return b;}
function gq(a,b){return b;}
function iq(a){if(de(a,15)){return qe(gq(this,this.a),gq(this,ce(a,15).a));}return false;}
function eq(){}
_=eq.prototype=new ku();_.eQ=iq;_.tN=uE+'DOMItem';_.tI=40;_.a=null;function dr(b,a){fq(b,a);return b;}
function fr(a){return Eq(new Dq(),js(a.a));}
function gr(a){return mr(new lr(),ks(a.a));}
function hr(a){return qs(a.a);}
function ir(a){return us(a.a);}
function jr(a){return vs(a.a);}
function kr(a){var b;if(a===null){return null;}b=rs(a);switch(b){case 2:return tp(new sp(),a);case 4:return zp(new yp(),a);case 8:return bq(new aq(),a);case 11:return oq(new nq(),a);case 9:return sq(new rq(),a);case 1:return xq(new wq(),a);case 7:return vr(new ur(),a);case 3:return Ar(new zr(),a);default:return dr(new cr(),a);}}
function cr(){}
_=cr.prototype=new eq();_.tN=uE+'NodeImpl';_.tI=41;function tp(b,a){dr(b,a);return b;}
function vp(a){return ps(a.a);}
function wp(a){return ts(a.a);}
function xp(){var a;a=uu(new tu());xu(a,' '+vp(this));xu(a,'="');xu(a,wp(this));xu(a,'"');return Bu(a);}
function sp(){}
_=sp.prototype=new cr();_.tS=xp;_.tN=uE+'AttrImpl';_.tI=42;function Dp(b,a){dr(b,a);return b;}
function Fp(a){return ls(a.a);}
function Cp(){}
_=Cp.prototype=new cr();_.tN=uE+'CharacterDataImpl';_.tI=43;function Ar(b,a){Dp(b,a);return b;}
function Cr(){var a,b,c;a=uu(new tu());c=dv(Fp(this),'(?=[;&<>\'"])',(-1));for(b=0;b<c.a;b++){if(ev(c[b],';')){xu(a,'&semi;');xu(a,fv(c[b],1));}else if(ev(c[b],'&')){xu(a,'&amp;');xu(a,fv(c[b],1));}else if(ev(c[b],'"')){xu(a,'&quot;');xu(a,fv(c[b],1));}else if(ev(c[b],"'")){xu(a,'&apos;');xu(a,fv(c[b],1));}else if(ev(c[b],'<')){xu(a,'&lt;');xu(a,fv(c[b],1));}else if(ev(c[b],'>')){xu(a,'&gt;');xu(a,fv(c[b],1));}else{xu(a,c[b]);}}return Bu(a);}
function zr(){}
_=zr.prototype=new Cp();_.tS=Cr;_.tN=uE+'TextImpl';_.tI=44;function zp(b,a){Ar(b,a);return b;}
function Bp(){var a;a=vu(new tu(),'<![CDATA[');xu(a,Fp(this));xu(a,']]>');return Bu(a);}
function yp(){}
_=yp.prototype=new zr();_.tS=Bp;_.tN=uE+'CDATASectionImpl';_.tI=45;function bq(b,a){Dp(b,a);return b;}
function dq(){var a;a=vu(new tu(),'<!--');xu(a,Fp(this));xu(a,'-->');return Bu(a);}
function aq(){}
_=aq.prototype=new Cp();_.tS=dq;_.tN=uE+'CommentImpl';_.tI=46;function kq(c,a,b){ep(c,12,'Failed to parse: '+mq(a));xv(c,b);return c;}
function mq(a){return gv(a,0,au(bv(a),128));}
function jq(){}
_=jq.prototype=new dp();_.tN=uE+'DOMParseException';_.tI=47;function oq(b,a){dr(b,a);return b;}
function qq(){var a,b;a=uu(new tu());for(b=0;b<gr(this).B();b++){wu(a,gr(this).bb(b));}return Bu(a);}
function nq(){}
_=nq.prototype=new cr();_.tS=qq;_.tN=uE+'DocumentFragmentImpl';_.tI=48;function sq(b,a){dr(b,a);return b;}
function uq(){return ce(kr(ms(this.a)),16);}
function vq(){var a,b,c;a=uu(new tu());b=gr(this);for(c=0;c<b.B();c++){xu(a,b.bb(c).tS());}return Bu(a);}
function rq(){}
_=rq.prototype=new cr();_.w=uq;_.tS=vq;_.tN=uE+'DocumentImpl';_.tI=49;function xq(b,a){dr(b,a);return b;}
function zq(a){return ss(a.a);}
function Aq(a){return is(this.a,a);}
function Bq(a){return mr(new lr(),ns(this.a,a));}
function Cq(){var a;a=vu(new tu(),'<');xu(a,zq(this));if(ir(this)){xu(a,qr(fr(this)));}if(jr(this)){xu(a,'>');xu(a,qr(gr(this)));xu(a,'<\/');xu(a,zq(this));xu(a,'>');}else{xu(a,'/>');}return Bu(a);}
function wq(){}
_=wq.prototype=new cr();_.v=Aq;_.z=Bq;_.tS=Cq;_.tN=uE+'ElementImpl';_.tI=50;function mr(b,a){fq(b,a);return b;}
function or(a){return os(a.a);}
function pr(b,a){return kr(xs(b.a,a));}
function qr(c){var a,b;a=uu(new tu());for(b=0;b<c.B();b++){xu(a,c.bb(b).tS());}return Bu(a);}
function rr(){return or(this);}
function sr(a){return pr(this,a);}
function tr(){return qr(this);}
function lr(){}
_=lr.prototype=new eq();_.B=rr;_.bb=sr;_.tS=tr;_.tN=uE+'NodeListImpl';_.tI=51;function Eq(b,a){mr(b,a);return b;}
function ar(){return or(this);}
function br(a){return pr(this,a);}
function Dq(){}
_=Dq.prototype=new lr();_.B=ar;_.bb=br;_.tN=uE+'NamedNodeMapImpl';_.tI=52;function vr(b,a){dr(b,a);return b;}
function xr(a){return ls(a.a);}
function yr(){var a;a=vu(new tu(),'<?');xu(a,hr(this));xu(a,' ');xu(a,xr(this));xu(a,'?>');return Bu(a);}
function ur(){}
_=ur.prototype=new cr();_.tS=yr;_.tN=uE+'ProcessingInstructionImpl';_.tI=53;function gs(){gs=tB;ws=as(new Er());}
function fs(a){gs();return a;}
function hs(e,c){var a,d;try{return ce(kr(ds(e,c)),17);}catch(a){a=ke(a);if(de(a,18)){d=a;throw kq(new jq(),c,d);}else throw a;}}
function is(b,a){gs();return b.getAttribute(a);}
function js(a){gs();return a.attributes;}
function ks(b){gs();var a=b.childNodes;return a==null?null:a;}
function ls(a){gs();return a.data;}
function ms(a){gs();return a.documentElement;}
function ns(a,b){gs();return cs(ws,a,b);}
function os(a){gs();return a.length;}
function ps(a){gs();return a.name;}
function qs(a){gs();var b=a.nodeName;return b==null?null:b;}
function rs(a){gs();var b=a.nodeType;return b==null?-1:b;}
function ss(a){gs();return a.tagName;}
function ts(a){gs();return a.value;}
function us(a){gs();return a.attributes.length!=0;}
function vs(a){gs();return a.hasChildNodes();}
function xs(c,a){gs();if(a>=c.length){return null;}var b=c.item(a);return b==null?null:b;}
function Dr(){}
_=Dr.prototype=new ku();_.tN=uE+'XMLParserImpl';_.tI=0;var ws;function bs(){bs=tB;gs();}
function Fr(a){a.a=es();}
function as(a){bs();fs(a);Fr(a);return a;}
function cs(c,a,b){return a.getElementsByTagNameNS('*',b);}
function ds(e,a){var b=e.a;var c=b.parseFromString(a,'text/xml');var d=c.documentElement;if(d.tagName=='parsererror'&&d.namespaceURI=='http://www.mozilla.org/newlayout/xml/parsererror.xml'){throw new Error(d.firstChild.data);}return c;}
function es(){bs();return new DOMParser();}
function Er(){}
_=Er.prototype=new Dr();_.tN=uE+'XMLParserImplStandard';_.tI=0;function Bs(){}
_=Bs.prototype=new ku();_.tN=vE+'OutputStream';_.tI=0;function zs(){}
_=zs.prototype=new Bs();_.tN=vE+'FilterOutputStream';_.tI=0;function Ds(){}
_=Ds.prototype=new zs();_.tN=vE+'PrintStream';_.tI=0;function Fs(){}
_=Fs.prototype=new pu();_.tN=wE+'ArrayStoreException';_.tI=54;function dt(){dt=tB;et=ct(new bt(),false);ft=ct(new bt(),true);}
function ct(a,b){dt();a.a=b;return a;}
function gt(a){return de(a,19)&&ce(a,19).a==this.a;}
function ht(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function it(){return this.a?'true':'false';}
function jt(a){dt();return a?ft:et;}
function bt(){}
_=bt.prototype=new ku();_.eQ=gt;_.hC=ht;_.tS=it;_.tN=wE+'Boolean';_.tI=55;_.a=false;var et,ft;function lt(){}
_=lt.prototype=new pu();_.tN=wE+'ClassCastException';_.tI=56;function tt(b,a){qu(b,a);return b;}
function st(){}
_=st.prototype=new pu();_.tN=wE+'IllegalArgumentException';_.tI=57;function wt(b,a){qu(b,a);return b;}
function vt(){}
_=vt.prototype=new pu();_.tN=wE+'IllegalStateException';_.tI=58;function zt(b,a){qu(b,a);return b;}
function yt(){}
_=yt.prototype=new pu();_.tN=wE+'IndexOutOfBoundsException';_.tI=59;function hu(){hu=tB;{ju();}}
function ju(){hu();iu=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var iu=null;function Ct(){Ct=tB;hu();}
function Dt(a){Ct();return ov(a);}
function au(a,b){return a<b?a:b;}
function bu(){}
_=bu.prototype=new pu();_.tN=wE+'NegativeArraySizeException';_.tI=60;function eu(b,a){qu(b,a);return b;}
function du(){}
_=du.prototype=new pu();_.tN=wE+'NullPointerException';_.tI=61;function Fu(b,a){if(!de(a,1))return false;return jv(b,a);}
function av(b,a){return b.indexOf(a);}
function bv(a){return a.length;}
function cv(b,a){return dv(b,a,0);}
function dv(j,i,g){var a=new RegExp(i,'g');var h=[];var b=0;var k=j;var e=null;while(true){var f=a.exec(k);if(f==null||(k==''||b==g-1&&g>0)){h[b]=k;break;}else{h[b]=k.substring(0,f.index);k=k.substring(f.index+f[0].length,k.length);a.lastIndex=0;if(e==k){h[b]=k.substring(0,1);k=k.substring(1);}e=k;b++;}}if(g==0){for(var c=h.length-1;c>=0;c--){if(h[c]!=''){h.splice(c+1,h.length-(c+1));break;}}}var d=iv(h.length);var c=0;for(c=0;c<h.length;++c){d[c]=h[c];}return d;}
function ev(b,a){return av(b,a)==0;}
function fv(b,a){return b.substr(a,b.length-a);}
function gv(c,a,b){return c.substr(a,b-a);}
function hv(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function iv(a){return Cd('[Ljava.lang.String;',[0],[1],[a],null);}
function jv(a,b){return String(a)==b;}
function kv(a){return Fu(this,a);}
function mv(){var a=lv;if(!a){a=lv={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function nv(){return this;}
function ov(a){return ''+a;}
function pv(a){return a!==null?a.tS():'null';}
_=String.prototype;_.eQ=kv;_.hC=mv;_.tS=nv;_.tN=wE+'String';_.tI=2;var lv=null;function uu(a){yu(a);return a;}
function vu(b,a){zu(b,a);return b;}
function wu(a,b){return xu(a,pv(b));}
function xu(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function yu(a){zu(a,'');}
function zu(b,a){b.js=[a];b.length=a.length;}
function Bu(a){a.fb();return a.js[0];}
function Cu(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function Du(){return Bu(this);}
function tu(){}
_=tu.prototype=new ku();_.fb=Cu;_.tS=Du;_.tN=wE+'StringBuffer';_.tI=0;function rv(){rv=tB;sv=new Ds();}
function tv(a){rv();return B(a);}
var sv;function Cv(b,a){qu(b,a);return b;}
function Bv(){}
_=Bv.prototype=new pu();_.tN=wE+'UnsupportedOperationException';_.tI=62;function gw(b,a){b.c=a;return b;}
function iw(a){return a.a<a.c.yb();}
function jw(){return iw(this);}
function kw(){if(!iw(this)){throw new cB();}return this.c.D(this.b=this.a++);}
function lw(){if(this.b<0){throw new vt();}this.c.rb(this.b);this.a=this.b;this.b=(-1);}
function fw(){}
_=fw.prototype=new ku();_.F=jw;_.eb=kw;_.qb=lw;_.tN=xE+'AbstractList$IteratorImpl';_.tI=0;_.a=0;_.b=(-1);function ux(f,d,e){var a,b,c;for(b=tz(f.s());lz(b);){a=mz(b);c=a.A();if(d===null?c===null:d.eQ(c)){if(e){nz(b);}return a;}}return null;}
function vx(b){var a;a=b.s();return ww(new vw(),b,a);}
function wx(b){var a;a=Ez(b);return fx(new ex(),b,a);}
function xx(a){return ux(this,a,false)!==null;}
function yx(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!de(d,21)){return false;}f=ce(d,21);c=vx(this);e=f.db();if(!Fx(c,e)){return false;}for(a=yw(c);Fw(a);){b=ax(a);h=this.E(b);g=f.E(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function zx(b){var a;a=ux(this,b,false);return a===null?null:a.C();}
function Ax(){var a,b,c;b=0;for(c=tz(this.s());lz(c);){a=mz(c);b+=a.hC();}return b;}
function Bx(){return vx(this);}
function Cx(){var a,b,c,d;d='{';a=false;for(c=tz(this.s());lz(c);){b=mz(c);if(a){d+=', ';}else{a=true;}d+=pv(b.A());d+='=';d+=pv(b.C());}return d+'}';}
function uw(){}
_=uw.prototype=new ku();_.o=xx;_.eQ=yx;_.E=zx;_.hC=Ax;_.db=Bx;_.tS=Cx;_.tN=xE+'AbstractMap';_.tI=63;function Fx(e,b){var a,c,d;if(b===e){return true;}if(!de(b,22)){return false;}c=ce(b,22);if(c.yb()!=e.yb()){return false;}for(a=c.cb();a.F();){d=a.eb();if(!e.p(d)){return false;}}return true;}
function ay(a){return Fx(this,a);}
function by(){var a,b,c;a=0;for(b=this.cb();b.F();){c=b.eb();if(c!==null){a+=c.hC();}}return a;}
function Dx(){}
_=Dx.prototype=new Ev();_.eQ=ay;_.hC=by;_.tN=xE+'AbstractSet';_.tI=64;function ww(b,a,c){b.a=a;b.b=c;return b;}
function yw(b){var a;a=tz(b.b);return Dw(new Cw(),b,a);}
function zw(a){return this.a.o(a);}
function Aw(){return yw(this);}
function Bw(){return this.b.a.c;}
function vw(){}
_=vw.prototype=new Dx();_.p=zw;_.cb=Aw;_.yb=Bw;_.tN=xE+'AbstractMap$1';_.tI=65;function Dw(b,a,c){b.a=c;return b;}
function Fw(a){return a.a.F();}
function ax(b){var a;a=b.a.eb();return a.A();}
function bx(){return Fw(this);}
function cx(){return ax(this);}
function dx(){this.a.qb();}
function Cw(){}
_=Cw.prototype=new ku();_.F=bx;_.eb=cx;_.qb=dx;_.tN=xE+'AbstractMap$2';_.tI=0;function fx(b,a,c){b.a=a;b.b=c;return b;}
function hx(b){var a;a=tz(b.b);return mx(new lx(),b,a);}
function ix(a){return Dz(this.a,a);}
function jx(){return hx(this);}
function kx(){return this.b.a.c;}
function ex(){}
_=ex.prototype=new Ev();_.p=ix;_.cb=jx;_.yb=kx;_.tN=xE+'AbstractMap$3';_.tI=0;function mx(b,a,c){b.a=c;return b;}
function ox(a){return a.a.F();}
function px(a){var b;b=a.a.eb().C();return b;}
function qx(){return ox(this);}
function rx(){return px(this);}
function sx(){this.a.qb();}
function lx(){}
_=lx.prototype=new ku();_.F=qx;_.eb=rx;_.qb=sx;_.tN=xE+'AbstractMap$4';_.tI=0;function Bz(){Bz=tB;dA=jA();}
function xz(a){{Az(a);}}
function yz(a){Bz();xz(a);return a;}
function zz(a,b){Bz();xz(a);aA(a,b);return a;}
function Az(a){a.a=fb();a.d=hb();a.b=he(dA,bb);a.c=0;}
function Cz(b,a){if(de(a,1)){return nA(b.d,ce(a,1))!==dA;}else if(a===null){return b.b!==dA;}else{return mA(b.a,a,a.hC())!==dA;}}
function Dz(a,b){if(a.b!==dA&&lA(a.b,b)){return true;}else if(iA(a.d,b)){return true;}else if(gA(a.a,b)){return true;}return false;}
function Ez(a){return rz(new hz(),a);}
function Fz(c,a){var b;if(de(a,1)){b=nA(c.d,ce(a,1));}else if(a===null){b=c.b;}else{b=mA(c.a,a,a.hC());}return b===dA?null:b;}
function bA(c,a,d){var b;if(de(a,1)){b=qA(c.d,ce(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=pA(c.a,a,d,a.hC());}if(b===dA){++c.c;return null;}else{return b;}}
function aA(d,c){var a,b;b=tz(Ez(c));while(lz(b)){a=mz(b);bA(d,a.A(),a.C());}}
function cA(c,a){var b;if(de(a,1)){b=sA(c.d,ce(a,1));}else if(a===null){b=c.b;c.b=he(dA,bb);}else{b=rA(c.a,a,a.hC());}if(b===dA){return null;}else{--c.c;return b;}}
function eA(e,c){Bz();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.n(a[f]);}}}}
function fA(d,a){Bz();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=az(c.substring(1),e);a.n(b);}}}
function gA(f,h){Bz();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.C();if(lA(h,d)){return true;}}}}return false;}
function hA(a){return Cz(this,a);}
function iA(c,d){Bz();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(lA(d,a)){return true;}}}return false;}
function jA(){Bz();}
function kA(){return Ez(this);}
function lA(a,b){Bz();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function oA(a){return Fz(this,a);}
function mA(f,h,e){Bz();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(lA(h,d)){return c.C();}}}}
function nA(b,a){Bz();return b[':'+a];}
function pA(f,h,j,e){Bz();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(lA(h,d)){var i=c.C();c.xb(j);return i;}}}else{a=f[e]=[];}var c=az(h,j);a.push(c);}
function qA(c,a,d){Bz();a=':'+a;var b=c[a];c[a]=d;return b;}
function rA(f,h,e){Bz();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.A();if(lA(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.C();}}}}
function sA(c,a){Bz();a=':'+a;var b=c[a];delete c[a];return b;}
function Cy(){}
_=Cy.prototype=new uw();_.o=hA;_.s=kA;_.E=oA;_.tN=xE+'HashMap';_.tI=66;_.a=null;_.b=null;_.c=0;_.d=null;var dA;function Ey(b,a,c){b.a=a;b.b=c;return b;}
function az(a,b){return Ey(new Dy(),a,b);}
function bz(b){var a;if(de(b,23)){a=ce(b,23);if(lA(this.a,a.A())&&lA(this.b,a.C())){return true;}}return false;}
function cz(){return this.a;}
function dz(){return this.b;}
function ez(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function fz(a){var b;b=this.b;this.b=a;return b;}
function gz(){return this.a+'='+this.b;}
function Dy(){}
_=Dy.prototype=new ku();_.eQ=bz;_.A=cz;_.C=dz;_.hC=ez;_.xb=fz;_.tS=gz;_.tN=xE+'HashMap$EntryImpl';_.tI=67;_.a=null;_.b=null;function rz(b,a){b.a=a;return b;}
function tz(a){return jz(new iz(),a.a);}
function uz(c){var a,b,d;if(de(c,23)){a=ce(c,23);b=a.A();if(Cz(this.a,b)){d=Fz(this.a,b);return lA(a.C(),d);}}return false;}
function vz(){return tz(this);}
function wz(){return this.a.c;}
function hz(){}
_=hz.prototype=new Dx();_.p=uz;_.cb=vz;_.yb=wz;_.tN=xE+'HashMap$EntrySet';_.tI=68;function jz(c,b){var a;c.c=b;a=ey(new cy());if(c.c.b!==(Bz(),dA)){gy(a,Ey(new Dy(),null,c.c.b));}fA(c.c.d,a);eA(c.c.a,a);c.a=a.cb();return c;}
function lz(a){return a.a.F();}
function mz(a){return a.b=ce(a.a.eb(),23);}
function nz(a){if(a.b===null){throw wt(new vt(),'Must call next() before remove().');}else{a.a.qb();cA(a.c,a.b.A());a.b=null;}}
function oz(){return lz(this);}
function pz(){return mz(this);}
function qz(){nz(this);}
function iz(){}
_=iz.prototype=new ku();_.F=oz;_.eb=pz;_.qb=qz;_.tN=xE+'HashMap$EntrySetIterator';_.tI=0;_.a=null;_.b=null;function uA(a){a.a=yz(new Cy());return a;}
function wA(a){var b;b=bA(this.a,a,jt(true));return b===null;}
function xA(a){return Cz(this.a,a);}
function yA(){return yw(vx(this.a));}
function zA(){return this.a.c;}
function AA(){return vx(this.a).tS();}
function tA(){}
_=tA.prototype=new Dx();_.n=wA;_.p=xA;_.cb=yA;_.yb=zA;_.tS=AA;_.tN=xE+'HashSet';_.tI=69;_.a=null;function aB(d,c,a,b){qu(d,c);return d;}
function FA(){}
_=FA.prototype=new pu();_.tN=xE+'MissingResourceException';_.tI=70;function cB(){}
_=cB.prototype=new pu();_.tN=xE+'NoSuchElementException';_.tI=71;function hB(a){a.a=ey(new cy());return a;}
function iB(b,a){return gy(b.a,a);}
function kB(b,a){return lB(b,a);}
function lB(b,a){return ky(b.a,a);}
function mB(a,b){fy(this.a,a,b);}
function nB(a){return iB(this,a);}
function oB(a){return jy(this.a,a);}
function pB(a){return lB(this,a);}
function qB(){return this.a.cb();}
function rB(a){return ny(this.a,a);}
function sB(){return this.a.b;}
function gB(){}
_=gB.prototype=new ew();_.m=mB;_.n=nB;_.p=oB;_.D=pB;_.cb=qB;_.rb=rB;_.yb=sB;_.tN=xE+'Vector';_.tI=72;_.a=null;function hC(g,h){var a,c,d,e,f;c=sC(new qC(),h);try{e=iE(c);f=FB(new EB(),g,e,c);ng(f,1);}catch(a){a=ke(a);if(de(a,25)){d=a;yv(d);}else throw a;}}
function iC(g,h){var a,c,d,e,f;c=BC(new zC(),h);try{e=iE(c);f=dC(new cC(),g,e,c);ng(f,1);}catch(a){a=ke(a);if(de(a,25)){d=a;zg('Exception: '+d.b);yv(d);}else throw a;}}
function jC(q){var a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,r;j='DEFAULT-identities-and-usecases.xml';k='DEFAULT-policy.xml';e='DEFAULT-cancel.html';m='DEFAULT-save-policy.xml';try{g=qd('getURLs');j=nd(g,'identities-url');k=nd(g,'policy-url');e=nd(g,'cancel-url');m=nd(g,'save-url');}catch(a){a=ke(a);if(de(a,24)){h=a;zg('Exception: '+h.b);}else throw a;}iC(q,k);hC(q,j);r=vn(new tn());pi(wm(),r);o=vn(new tn());wn(r,o);p=gn(new an());jn(p,30);wn(o,p);wn(o,zi(new ti(),'Search within Identities'));i=bl(new Fk());wn(r,i);n=m;l=Ai(new ti(),'Save Policy and Exit',wB(new vB(),q,n));wn(r,l);f=e;d=Ai(new ti(),'Cancel',AB(new zB(),q,f));wn(r,d);q.b=mD(new kD(),q.i,q.h,q.a);q.d=sD(new qD(),q.i,q.e,q.c,q.g);c=mC(new kC(),q.b.a,q.d.c,q.d);cl(i,q.b);cl(i,c);cl(i,q.d);}
function uB(){}
_=uB.prototype=new ku();_.tN=yE+'AccessPolicyEditor';_.tI=0;_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;_.g=true;_.h=null;_.i=10;function wB(b,a,c){b.a=a;b.b=c;return b;}
function yB(f){var a,c,d,e;c=cD(new bD(),this.b);try{e=eD(c,zD(this.a.d),vD(this.a.d));}catch(a){a=ke(a);if(de(a,25)){d=a;zg('Exception: '+d.b);}else throw a;}}
function vB(){}
_=vB.prototype=new ku();_.ib=yB;_.tN=yE+'AccessPolicyEditor$1';_.tI=73;function AB(b,a,c){b.a=c;return b;}
function CB(a,b){$wnd.location.href=b;}
function DB(a){zg('Redirect to '+this.a);CB(this,this.a);}
function zB(){}
_=zB.prototype=new ku();_.ib=DB;_.tN=yE+'AccessPolicyEditor$2';_.tI=74;function aC(){aC=tB;kg();}
function FB(b,a,d,c){aC();b.a=a;b.c=d;b.b=c;ig(b);return b;}
function bC(){if(vc(this.c)){mg(this,10);}else{this.a.h=xC(this.b);this.a.a=vC(this.b);this.a.f=wC(this.b);oD(this.a.b,this.a.i,this.a.h,this.a.a);jg(this);zg('Identities have been loaded!');}}
function EB(){}
_=EB.prototype=new dg();_.ub=bC;_.tN=yE+'AccessPolicyEditor$3';_.tI=75;function eC(){eC=tB;kg();}
function dC(b,a,d,c){eC();b.a=a;b.c=d;b.b=c;ig(b);return b;}
function fC(){if(vc(this.c)){mg(this,10);}else{this.a.e=FC(this.b);this.a.c=EC(this.b);BD(this.a.d,this.a.i,this.a.e,this.a.c);this.a.g=this.b.b;CD(this.a.d,this.a.g);jg(this);zg('Policy has been loaded!');}}
function cC(){}
_=cC.prototype=new dg();_.ub=fC;_.tN=yE+'AccessPolicyEditor$4';_.tI=76;function lC(a){a.b=dk(new ck());}
function mC(d,a,c,b){lC(d);Dj(d,d.b);d.e=Ai(new ti(),'<',d);ek(d.b,d.e);d.a=Ai(new ti(),'>',d);ek(d.b,d.a);d.c=a;d.d=c;return d;}
function oC(b,a){if(av(a,'(')>0){return gv(a,0,av(a,'('));}else{return a;}}
function pC(c){var a,b;if(c===this.a){a=Dl(this.c);if(a>=0){b=El(this.c,a);zg('Add selected identity '+b+' to policy');bm(this.c,a);xl(this.d,gv(b,0,1)+': (-,-) '+hv(fv(b,2)),b);}else{zg('No identity selected yet! Please select an identity.');}}else if(c===this.e){a=Dl(this.d);if(a>=0){b=El(this.d,a);zg('Remove selected identity '+b+' from policy');bm(this.d,a);wl(this.c,oC(this,b));}else{zg('No identity selected yet! Please select an identity.');}}}
function kC(){}
_=kC.prototype=new Bj();_.ib=pC;_.tN=yE+'AddRemoveIdentitiesWidget';_.tI=77;_.a=null;_.c=null;_.d=null;_.e=null;function eE(a){a.d=yz(new Cy());}
function fE(a,b){eE(a);a.e=Bb(new wb(),(Db(),bc),b);jE(a);return a;}
function gE(e){var a,b,c,d;b='';a=zz(new Cy(),e.d);for(d=tz(Ez(a));lz(d);){c=mz(d);b+=c.A()+''+c.C();if(lz(d)){b+='&';}}return b;}
function iE(a){return Eb(a.e,gE(a),a);}
function jE(a){Fb(a.e,'Content-Type','application/x-www-form-urlencoded');}
function kE(b,a){zg('Exception: '+a.b);}
function dE(){}
_=dE.prototype=new ku();_.kb=kE;_.tN=zE+'AsynchronousAgent';_.tI=0;_.e=null;function rC(a){a.c=hB(new gB());a.a=hB(new gB());a.b=hB(new gB());}
function sC(a,b){fE(a,b);rC(a);return a;}
function uC(d,c,a){var b;b=c.z(a);return ce(b.bb(0),16);}
function vC(c){var a,b;a=Cd('[Ljava.lang.String;',[0],[1],[c.a.a.b],null);for(b=0;b<c.a.a.b;b++){a[b]=ce(kB(c.a,b),1);}return a;}
function wC(c){var a,b;b=Cd('[Ljava.lang.String;',[0],[1],[c.b.a.b],null);for(a=0;a<c.b.a.b;a++){b[a]=ce(kB(c.b,a),1);}return b;}
function xC(b){var a,c;c=Cd('[Ljava.lang.String;',[0],[1],[b.c.a.b],null);for(a=0;a<b.c.a.b;a++){c[a]=ce(kB(b.c,a),1);}return c;}
function yC(d,e){var a,b,c,f,g,h,i,j;h=rp(rb(e)).w();j=uC(this,h,'users');i=j.z('user');for(c=0;c<i.B();c++){iB(this.c,ce(i.bb(c),16).v('id'));}b=uC(this,h,'groups');a=b.z('group');for(c=0;c<a.B();c++){iB(this.a,ce(a.bb(c),16).v('id'));}g=uC(this,h,'rights');f=g.z('right');for(c=0;c<f.B();c++){iB(this.b,ce(f.bb(c),16).v('id'));}}
function qC(){}
_=qC.prototype=new dE();_.mb=yC;_.tN=yE+'AsynchronousIdentitiesAndRightsGetter';_.tI=0;function AC(a){a.c=hB(new gB());a.a=hB(new gB());}
function BC(a,b){fE(a,b);AC(a);return a;}
function DC(d,c,a){var b;b=c.z(a);if(b.B()>0){return ce(b.bb(0),16);}else{return null;}}
function EC(c){var a,b;b=Cd('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[27],[c.a.a.b],null);for(a=0;a<b.a;a++){b[a]=ce(kB(c.a,a),27);}return b;}
function FC(c){var a,b;b=Cd('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[26],[c.c.a.b],null);for(a=0;a<b.a;a++){b[a]=ce(kB(c.c,a),26);}return b;}
function aD(c,d){var a,b,e,f,g,h,i;f=rp(rb(d)).w();g=f.v('use-inherited-policies');if(g===null){this.b=true;}else{if(Fu(g,'false')){this.b=false;}else{this.b=true;}}i=DC(this,f,'world');h=f.z('user');for(b=0;b<h.B();b++){e=Dd('[Ljava.lang.String;',0,1,['Write','Read']);iB(this.c,bE(new aE(),ce(h.bb(b),16).v('id'),e));}a=f.z('group');for(b=0;b<a.B();b++){e=Dd('[Ljava.lang.String;',0,1,['Write','Read']);iB(this.a,iD(new hD(),ce(a.bb(b),16).v('id'),e));}}
function zC(){}
_=zC.prototype=new dE();_.mb=aD;_.tN=yE+'AsynchronousPolicyGetter';_.tI=0;_.b=true;function cD(a,b){zg('Save policy to: '+b);a.a=Bb(new wb(),(Db(),cc),b);return a;}
function eD(f,g,b){var a,c,d,e;a=vu(new tu(),'<?xml version="1.0"?>');xu(a,'<policy>');if(g!==null){for(c=0;c<g.a;c++){xu(a,'<user id="'+g[c].a+'">');e=g[c].b;if(e!==null){for(d=0;d<e.a;d++){xu(a,'<right id="'+e[d]+'">'+e[d]+'<\/right>');}}xu(a,'<\/user>');}}if(b!==null){for(c=0;c<b.a;c++){xu(a,'<group id="'+b[c].a+'">');e=b[c].b;if(e!==null){for(d=0;d<e.a;d++){xu(a,'<right id="'+e[d]+'">'+e[d]+'<\/right>');}}xu(a,'<\/group>');}}xu(a,'<\/policy>');return Eb(f.a,Bu(a),f);}
function fD(b,a){zg('Exception: '+a.b);}
function gD(a,b){zg('Response received!');}
function bD(){}
_=bD.prototype=new ku();_.kb=fD;_.mb=gD;_.tN=yE+'AsynchronousPolicySetter';_.tI=0;_.a=null;function iD(c,a,b){c.a=a;c.b=b;return c;}
function hD(){}
_=hD.prototype=new ku();_.tN=yE+'Group';_.tI=78;_.a=null;_.b=null;function lD(a){a.b=vn(new tn());}
function mD(b,d,c,a){lD(b);Dj(b,b.b);wn(b.b,jl(new hl(),'Identities'));b.a=vl(new nl(),true);b.a.l(b);oD(b,d,c,a);wn(b.b,b.a);return b;}
function oD(c,e,d,a){var b;zl(c.a);dm(c.a,e);if(d!==null){for(b=0;b<d.a;b++){wl(c.a,'u: '+d[b]);}}else{wl(c.a,'No users yet!');}if(a!==null){for(b=0;b<a.a;b++){wl(c.a,'g: '+a[b]);}}else{wl(c.a,'No groups yet!');}}
function pD(a){}
function kD(){}
_=kD.prototype=new Bj();_.ib=pD;_.tN=yE+'IdentitiesListBoxWidget';_.tI=79;_.a=null;function rD(a){a.f=vn(new tn());}
function sD(b,e,d,a,c){rD(b);Dj(b,b.f);wn(b.f,jl(new hl(),'Policy'));b.d=fj(new cj(),'Inherit rights from parent policies');CD(b,c);wn(b.f,b.d);b.c=vl(new nl(),true);b.c.l(b);BD(b,e,d,a);wn(b.f,b.c);b.e=fj(new cj(),'Read');b.e.l(b);wn(b.f,b.e);b.g=fj(new cj(),'Write');b.g.l(b);wn(b.f,b.g);return b;}
function tD(g,a,f){var b,c,d,e;e=hB(new gB());for(c=0;c<a.a;c++){iB(e,a[c]);}b=false;for(c=0;c<a.a;c++){if(Fu(a[c],f)){b=true;break;}}if(!b)iB(e,f);d=Cd('[Ljava.lang.String;',[0],[1],[e.a.b],null);for(c=0;c<d.a;c++){d[c]=ce(kB(e,c),1);}return d;}
function vD(g){var a,b,c,d,e,f;b=hB(new gB());for(c=0;c<Bl(g.c);c++){e=Cl(g.c,c);f=xD(g,e);d=wD(g,c);if(ev(d,'g:')){iB(b,iD(new hD(),hv(fv(d,2)),f));}}a=Cd('[Lorg.wyona.security.gwt.accesspolicyeditor.client.Group;',[0],[27],[b.a.b],null);for(c=0;c<a.a;c++){a[c]=ce(kB(b,c),27);}return a;}
function wD(b,a){return El(b.c,a);}
function xD(f,b){var a,c,d,e;if(av(b,'(')>0){e=cv(gv(b,av(b,'(')+1,av(b,')')),',');c=hB(new gB());for(a=0;a<e.a;a++){if(!Fu(e[a],'-'))iB(c,e[a]);}d=Cd('[Ljava.lang.String;',[0],[1],[c.a.b],null);for(a=0;a<d.a;a++){d[a]=ce(kB(c,a),1);}return d;}else{return Cd('[Ljava.lang.String;',[0],[1],[0],null);}}
function yD(b){var a;a=Dl(b.c);if(a>=0){return Cl(b.c,a);}return null;}
function zD(e){var a,b,c,d,f,g;g=hB(new gB());for(a=0;a<Bl(e.c);a++){c=Cl(e.c,a);d=xD(e,c);b=wD(e,a);if(ev(b,'u:')){iB(g,bE(new aE(),hv(fv(b,2)),d));}}f=Cd('[Lorg.wyona.security.gwt.accesspolicyeditor.client.User;',[0],[26],[g.a.b],null);for(a=0;a<f.a;a++){f[a]=ce(kB(g,a),26);}return f;}
function AD(f,a,e){var b,c,d;d=hB(new gB());for(b=0;b<a.a;b++){if(!Fu(a[b],e)){iB(d,a[b]);}}c=Cd('[Ljava.lang.String;',[0],[1],[d.a.b],null);for(b=0;b<c.a;b++){c[b]=ce(kB(d,b),1);}return c;}
function BD(d,g,e,a){var b,c,f;zl(d.c);dm(d.c,g);if(e!==null||a!==null){if(e!==null){for(b=0;b<e.a;b++){c='u: ('+d.a+','+d.b+') '+e[b].a;f='u: '+e[b].a;xl(d.c,c,f);}}if(a!==null){for(b=0;b<a.a;b++){c='g: ('+d.a+','+d.b+') '+a[b].a;f='g: '+a[b].a;xl(d.c,c,f);}}else{zg('No groups!');}}else{wl(d.c,'No identities yet!');}}
function CD(a,b){if(a.d!==null){ij(a.d,b);}}
function DD(g,h,a,e,b){var c,d,f,i;f=vu(new tu(),h+':');xu(f,' (');d=false;i=false;for(c=0;c<e.a;c++){if(Fu(e[c],g.a)){d=true;}if(Fu(e[c],g.b)){i=true;}}if(d){xu(f,g.a);}else{xu(f,'-');}xu(f,',');if(i){xu(f,g.b);}else{xu(f,'-');}xu(f,')');xu(f,' '+a);cm(g.c,b,Bu(f));}
function ED(d,c){var a,b;b=Dl(d.c);if(b>=0){a=wD(d,b);DD(d,gv(a,0,1),hv(fv(a,2)),c,b);}else{zg('Exception: No list item selected!');}}
function FD(h){var a,b,c,d,e,f,g;if(h===this.e||h===this.g){g=yD(this);if(g!==null){if(h===this.e){a=xD(this,g);if(hj(this.e)){zg('Add Read right from selected identity '+g+' from policy');e=tD(this,a,this.a);}else{zg('Remove Read right from selected identity '+g+' from policy');e=AD(this,a,this.a);}ED(this,e);}else if(h===this.g){a=xD(this,g);if(hj(this.g)){zg('Add Write right from selected identity '+g+' from policy');e=tD(this,a,this.b);}else{zg('Remove Write right from selected identity '+g+' from policy');e=AD(this,a,this.b);}ED(this,e);}}else{zg('No identity has been selected! Please select an identity in order to assign rights.');ij(this.e,false);ij(this.g,false);}}else if(h===this.c){g=yD(this);f=xD(this,g);b=false;c=false;for(d=0;d<f.a;d++){if(Fu(f[d],this.a)){ij(this.e,true);b=true;}else if(Fu(f[d],this.b)){ij(this.g,true);c=true;}}if(!b)ij(this.e,false);if(!c)ij(this.g,false);}}
function qD(){}
_=qD.prototype=new Bj();_.ib=FD;_.tN=yE+'PolicyListBoxWidget';_.tI=80;_.a='r';_.b='w';_.c=null;_.d=null;_.e=null;_.g=null;function bE(c,a,b){c.a=a;c.b=b;return c;}
function aE(){}
_=aE.prototype=new ku();_.tN=yE+'User';_.tI=81;_.a=null;_.b=null;function ys(){jC(new uB());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{ys();}catch(a){b(d);}else{ys();}}
var ge=[{},{},{1:1},{4:1},{4:1,25:1},{4:1,25:1},{4:1,18:1,25:1},{2:1},{6:1},{6:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{3:1},{2:1,5:1},{2:1},{7:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{20:1},{20:1},{20:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{9:1,10:1,11:1,12:1,13:1,14:1},{7:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{4:1,25:1},{15:1},{15:1},{15:1},{15:1},{15:1},{15:1},{15:1},{4:1,25:1},{15:1},{15:1,17:1},{15:1,16:1},{15:1},{15:1},{15:1},{4:1,25:1},{19:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{4:1,25:1},{21:1},{22:1},{22:1},{21:1},{23:1},{22:1},{22:1},{4:1,24:1,25:1},{4:1,25:1},{20:1},{8:1},{8:1},{6:1},{6:1},{8:1,11:1,12:1,13:1,14:1},{27:1},{8:1,11:1,12:1,13:1,14:1},{8:1,11:1,12:1,13:1,14:1},{26:1}];if (org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor) {  var __gwt_initHandlers = org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.__gwt_initHandlers;  org_wyona_security_gwt_accesspolicyeditor_AccessPolicyEditor.onScriptLoad(gwtOnLoad);}})();