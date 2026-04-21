import{$ as ui,$a as Il,A as vl,Aa as kl,Ab as Pl,B as Jr,Ba as z,Bb as Fl,C as xo,Ca as $,Cb as Nl,D as je,Da as Q,Db as Io,E as wo,Ea as Dl,Eb as To,F as le,Fa as ta,Fb as Ll,G as yl,Ga as ia,Gb as Vl,H as Kt,Ha as w,Hb as sa,I as J,Ia as m,Ib as Ao,J as Ft,Ja as h,Jb as Ro,K as S,Ka as F,Kb as Bl,L as _,La as Ee,Lb as st,M as v,Ma as Ve,Mb as Vi,N as Ne,Na as Ge,Nb as Bi,O as l,Oa as Li,P as Pi,Pa as dt,Q as ot,Qa as Ye,R as rt,Ra as L,S as Oe,Sa as na,T as Co,Ta as q,U as Y,Ua as oe,V as K,Va as j,W as G,Wa as Ze,X as H,Xa as he,Y as So,Ya as U,Z as xl,Za as W,_ as me,_a as El,a as A,aa as ye,ab as oa,b as Re,ba as at,bb as Je,c as hl,ca as P,cb as mt,d as ke,da as Fi,db as T,e as Ri,ea as Mo,eb as Ie,f as k,fa as wl,fb as f,g as _o,ga as pi,gb as ue,h as vn,ha as Cl,hb as qe,i as bo,ia as Xt,ib as ae,j as ul,ja as p,jb as ko,k as nt,ka as Le,kb as St,l as pl,la as Ct,lb as Mt,m as De,ma as He,mb as $t,n as fl,na as be,nb as yn,o as gl,oa as X,ob as Tl,p as Oi,pa as Nt,pb as ce,q as vo,qa as ea,qb as V,r as wt,ra as x,rb as Ce,s as fe,sa as b,sb as Al,t as Qr,ta as I,tb as Do,u as _l,ua as re,ub as ra,v as yo,va as te,vb as Rl,w as We,wa as fi,wb as Ol,x as Yr,xa as Sl,xb as Qt,y as bl,ya as Ml,yb as Eo,z as Zr,za as Ni,zb as aa}from"./chunk-JI72U2HJ.js";var Z=(function(n){return n[n.State=0]="State",n[n.Transition=1]="Transition",n[n.Sequence=2]="Sequence",n[n.Group=3]="Group",n[n.Animate=4]="Animate",n[n.Keyframes=5]="Keyframes",n[n.Style=6]="Style",n[n.Trigger=7]="Trigger",n[n.Reference=8]="Reference",n[n.AnimateChild=9]="AnimateChild",n[n.AnimateRef=10]="AnimateRef",n[n.Query=11]="Query",n[n.Stagger=12]="Stagger",n})(Z||{}),ht="*";function zl(n,i=null){return{type:Z.Sequence,steps:n,options:i}}function la(n){return{type:Z.Style,styles:n,offset:null}}var Lt=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(i=0,e=0){this.totalTime=i+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}onStart(i){this._originalOnStartFns.push(i),this._onStartFns.push(i)}onDone(i){this._originalOnDoneFns.push(i),this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(i=>i()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(i){this._position=this.totalTime?i*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(i){let e=i=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},zi=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(i){this.players=i;let e=0,t=0,o=0,r=this.players.length;r==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(a=>{a.onDone(()=>{++e==r&&this._onFinish()}),a.onDestroy(()=>{++t==r&&this._onDestroy()}),a.onStart(()=>{++o==r&&this._onStart()})}),this.totalTime=this.players.reduce((a,s)=>Math.max(a,s.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}init(){this.players.forEach(i=>i.init())}onStart(i){this._onStartFns.push(i)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(i=>i()),this._onStartFns=[])}onDone(i){this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(i=>i.play())}pause(){this.players.forEach(i=>i.pause())}restart(){this.players.forEach(i=>i.restart())}finish(){this._onFinish(),this.players.forEach(i=>i.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(i=>i.destroy()),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this.players.forEach(i=>i.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(i){let e=i*this.totalTime;this.players.forEach(t=>{let o=t.totalTime?Math.min(1,e/t.totalTime):1;t.setPosition(o)})}getPosition(){let i=this.players.reduce((e,t)=>e===null||t.totalTime>e.totalTime?t:e,null);return i!=null?i.getPosition():0}beforeDestroy(){this.players.forEach(i=>{i.beforeDestroy&&i.beforeDestroy()})}triggerCallback(i){let e=i=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},xn="!";function jl(n){return new J(3e3,!1)}function mh(){return new J(3100,!1)}function hh(){return new J(3101,!1)}function uh(n){return new J(3001,!1)}function ph(n){return new J(3003,!1)}function fh(n){return new J(3004,!1)}function Ul(n,i){return new J(3005,!1)}function Wl(){return new J(3006,!1)}function Gl(){return new J(3007,!1)}function ql(n,i){return new J(3008,!1)}function Kl(n){return new J(3002,!1)}function Xl(n,i,e,t,o){return new J(3010,!1)}function $l(){return new J(3011,!1)}function Ql(){return new J(3012,!1)}function Yl(){return new J(3200,!1)}function Zl(){return new J(3202,!1)}function Jl(){return new J(3013,!1)}function ec(n){return new J(3014,!1)}function tc(n){return new J(3015,!1)}function ic(n){return new J(3016,!1)}function nc(n,i){return new J(3404,!1)}function gh(n){return new J(3502,!1)}function oc(n){return new J(3503,!1)}function rc(){return new J(3300,!1)}function ac(n){return new J(3504,!1)}function sc(n){return new J(3301,!1)}function lc(n,i){return new J(3302,!1)}function cc(n){return new J(3303,!1)}function dc(n,i){return new J(3400,!1)}function mc(n){return new J(3401,!1)}function hc(n){return new J(3402,!1)}function uc(n,i){return new J(3505,!1)}function Vt(n){switch(n.length){case 0:return new Lt;case 1:return n[0];default:return new zi(n)}}function ha(n,i,e=new Map,t=new Map){let o=[],r=[],a=-1,s=null;if(i.forEach(c=>{let d=c.get("offset"),u=d==a,g=u&&s||new Map;c.forEach((R,E)=>{let y=E,M=R;if(E!=="offset")switch(y=n.normalizePropertyName(y,o),M){case xn:M=e.get(E);break;case ht:M=t.get(E);break;default:M=n.normalizeStyleValue(E,y,M,o);break}g.set(y,M)}),u||r.push(g),s=g,a=d}),o.length)throw gh(o);return r}function Oo(n,i,e,t){switch(i){case"start":n.onStart(()=>t(e&&ca(e,"start",n)));break;case"done":n.onDone(()=>t(e&&ca(e,"done",n)));break;case"destroy":n.onDestroy(()=>t(e&&ca(e,"destroy",n)));break}}function ca(n,i,e){let t=e.totalTime,o=!!e.disabled,r=Po(n.element,n.triggerName,n.fromState,n.toState,i||n.phaseName,t??n.totalTime,o),a=n._data;return a!=null&&(r._data=a),r}function Po(n,i,e,t,o="",r=0,a){return{element:n,triggerName:i,fromState:e,toState:t,phaseName:o,totalTime:r,disabled:!!a}}function Ke(n,i,e){let t=n.get(i);return t||n.set(i,t=e),t}function ua(n){let i=n.indexOf(":"),e=n.substring(1,i),t=n.slice(i+1);return[e,t]}var _h=typeof document>"u"?null:document.documentElement;function Fo(n){let i=n.parentNode||n.host||null;return i===_h?null:i}function bh(n){return n.substring(1,6)=="ebkit"}var gi=null,Hl=!1;function pc(n){gi||(gi=vh()||{},Hl=gi.style?"WebkitAppearance"in gi.style:!1);let i=!0;return gi.style&&!bh(n)&&(i=n in gi.style,!i&&Hl&&(i="Webkit"+n.charAt(0).toUpperCase()+n.slice(1)in gi.style)),i}function vh(){return typeof document<"u"?document.body:null}function pa(n,i){for(;i;){if(i===n)return!0;i=Fo(i)}return!1}function fa(n,i,e){if(e)return Array.from(n.querySelectorAll(i));let t=n.querySelector(i);return t?[t]:[]}var yh=1e3,ga="{{",xh="}}",_a="ng-enter",No="ng-leave",wn="ng-trigger",Cn=".ng-trigger",ba="ng-animating",Lo=".ng-animating";function kt(n){if(typeof n=="number")return n;let i=n.match(/^(-?[\.\d]+)(m?s)/);return!i||i.length<2?0:da(parseFloat(i[1]),i[2])}function da(n,i){return i==="s"?n*yh:n}function Sn(n,i,e){return n.hasOwnProperty("duration")?n:Ch(n,i,e)}var wh=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function Ch(n,i,e){let t,o=0,r="";if(typeof n=="string"){let a=n.match(wh);if(a===null)return i.push(jl(n)),{duration:0,delay:0,easing:""};t=da(parseFloat(a[1]),a[2]);let s=a[3];s!=null&&(o=da(parseFloat(s),a[4]));let c=a[5];c&&(r=c)}else t=n;if(!e){let a=!1,s=i.length;t<0&&(i.push(mh()),a=!0),o<0&&(i.push(hh()),a=!0),a&&i.splice(s,0,jl(n))}return{duration:t,delay:o,easing:r}}function fc(n){return n.length?n[0]instanceof Map?n:n.map(i=>new Map(Object.entries(i))):[]}function ut(n,i,e){i.forEach((t,o)=>{let r=Vo(o);e&&!e.has(o)&&e.set(o,n.style[r]),n.style[r]=t})}function Yt(n,i){i.forEach((e,t)=>{let o=Vo(t);n.style[o]=""})}function ji(n){return Array.isArray(n)?n.length==1?n[0]:zl(n):n}function gc(n,i,e){let t=i.params||{},o=va(n);o.length&&o.forEach(r=>{t.hasOwnProperty(r)||e.push(uh(r))})}var ma=new RegExp(`${ga}\\s*(.+?)\\s*${xh}`,"g");function va(n){let i=[];if(typeof n=="string"){let e;for(;e=ma.exec(n);)i.push(e[1]);ma.lastIndex=0}return i}function Hi(n,i,e){let t=`${n}`,o=t.replace(ma,(r,a)=>{let s=i[a];return s==null&&(e.push(ph(a)),s=""),s.toString()});return o==t?n:o}var Sh=/-+([a-z0-9])/g;function Vo(n){return n.replace(Sh,(...i)=>i[1].toUpperCase())}function _c(n,i){return n===0||i===0}function bc(n,i,e){if(e.size&&i.length){let t=i[0],o=[];if(e.forEach((r,a)=>{t.has(a)||o.push(a),t.set(a,r)}),o.length)for(let r=1;r<i.length;r++){let a=i[r];o.forEach(s=>a.set(s,Bo(n,s)))}}return i}function Xe(n,i,e){switch(i.type){case Z.Trigger:return n.visitTrigger(i,e);case Z.State:return n.visitState(i,e);case Z.Transition:return n.visitTransition(i,e);case Z.Sequence:return n.visitSequence(i,e);case Z.Group:return n.visitGroup(i,e);case Z.Animate:return n.visitAnimate(i,e);case Z.Keyframes:return n.visitKeyframes(i,e);case Z.Style:return n.visitStyle(i,e);case Z.Reference:return n.visitReference(i,e);case Z.AnimateChild:return n.visitAnimateChild(i,e);case Z.AnimateRef:return n.visitAnimateRef(i,e);case Z.Query:return n.visitQuery(i,e);case Z.Stagger:return n.visitStagger(i,e);default:throw fh(i.type)}}function Bo(n,i){return window.getComputedStyle(n)[i]}var Na=(()=>{class n{validateStyleProperty(e){return pc(e)}containsElement(e,t){return pa(e,t)}getParentElement(e){return Fo(e)}query(e,t,o){return fa(e,t,o)}computeStyle(e,t,o){return o||""}animate(e,t,o,r,a,s=[],c){return new Lt(o,r)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})(),bi=class{static NOOP=new Na},vi=class{};var Mh=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),Wo=class extends vi{normalizePropertyName(i,e){return Vo(i)}normalizeStyleValue(i,e,t,o){let r="",a=t.toString().trim();if(Mh.has(e)&&t!==0&&t!=="0")if(typeof t=="number")r="px";else{let s=t.match(/^[+-]?[\d\.]+([a-z]*)$/);s&&s[1].length==0&&o.push(Ul(i,t))}return a+r}};var Go="*";function kh(n,i){let e=[];return typeof n=="string"?n.split(/\s*,\s*/).forEach(t=>Dh(t,e,i)):e.push(n),e}function Dh(n,i,e){if(n[0]==":"){let c=Eh(n,e);if(typeof c=="function"){i.push(c);return}n=c}let t=n.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(t==null||t.length<4)return e.push(tc(n)),i;let o=t[1],r=t[2],a=t[3];i.push(vc(o,a));let s=o==Go&&a==Go;r[0]=="<"&&!s&&i.push(vc(a,o))}function Eh(n,i){switch(n){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,t)=>parseFloat(t)>parseFloat(e);case":decrement":return(e,t)=>parseFloat(t)<parseFloat(e);default:return i.push(ic(n)),"* => *"}}var zo=new Set(["true","1"]),jo=new Set(["false","0"]);function vc(n,i){let e=zo.has(n)||jo.has(n),t=zo.has(i)||jo.has(i);return(o,r)=>{let a=n==Go||n==o,s=i==Go||i==r;return!a&&e&&typeof o=="boolean"&&(a=o?zo.has(n):jo.has(n)),!s&&t&&typeof r=="boolean"&&(s=r?zo.has(i):jo.has(i)),a&&s}}var Ic=":self",Ih=new RegExp(`s*${Ic}s*,?`,"g");function Tc(n,i,e,t){return new Ma(n).build(i,e,t)}var yc="",Ma=class{_driver;constructor(i){this._driver=i}build(i,e,t){let o=new ka(e);return this._resetContextStyleTimingState(o),Xe(this,ji(i),o)}_resetContextStyleTimingState(i){i.currentQuerySelector=yc,i.collectedStyles=new Map,i.collectedStyles.set(yc,new Map),i.currentTime=0}visitTrigger(i,e){let t=e.queryCount=0,o=e.depCount=0,r=[],a=[];return i.name.charAt(0)=="@"&&e.errors.push(Wl()),i.definitions.forEach(s=>{if(this._resetContextStyleTimingState(e),s.type==Z.State){let c=s,d=c.name;d.toString().split(/\s*,\s*/).forEach(u=>{c.name=u,r.push(this.visitState(c,e))}),c.name=d}else if(s.type==Z.Transition){let c=this.visitTransition(s,e);t+=c.queryCount,o+=c.depCount,a.push(c)}else e.errors.push(Gl())}),{type:Z.Trigger,name:i.name,states:r,transitions:a,queryCount:t,depCount:o,options:null}}visitState(i,e){let t=this.visitStyle(i.styles,e),o=i.options&&i.options.params||null;if(t.containsDynamicStyles){let r=new Set,a=o||{};t.styles.forEach(s=>{s instanceof Map&&s.forEach(c=>{va(c).forEach(d=>{a.hasOwnProperty(d)||r.add(d)})})}),r.size&&e.errors.push(ql(i.name,[...r.values()]))}return{type:Z.State,name:i.name,style:t,options:o?{params:o}:null}}visitTransition(i,e){e.queryCount=0,e.depCount=0;let t=Xe(this,ji(i.animation),e),o=kh(i.expr,e.errors);return{type:Z.Transition,matchers:o,animation:t,queryCount:e.queryCount,depCount:e.depCount,options:_i(i.options)}}visitSequence(i,e){return{type:Z.Sequence,steps:i.steps.map(t=>Xe(this,t,e)),options:_i(i.options)}}visitGroup(i,e){let t=e.currentTime,o=0,r=i.steps.map(a=>{e.currentTime=t;let s=Xe(this,a,e);return o=Math.max(o,e.currentTime),s});return e.currentTime=o,{type:Z.Group,steps:r,options:_i(i.options)}}visitAnimate(i,e){let t=Oh(i.timings,e.errors);e.currentAnimateTimings=t;let o,r=i.styles?i.styles:la({});if(r.type==Z.Keyframes)o=this.visitKeyframes(r,e);else{let a=i.styles,s=!1;if(!a){s=!0;let d={};t.easing&&(d.easing=t.easing),a=la(d)}e.currentTime+=t.duration+t.delay;let c=this.visitStyle(a,e);c.isEmptyStep=s,o=c}return e.currentAnimateTimings=null,{type:Z.Animate,timings:t,style:o,options:null}}visitStyle(i,e){let t=this._makeStyleAst(i,e);return this._validateStyleAst(t,e),t}_makeStyleAst(i,e){let t=[],o=Array.isArray(i.styles)?i.styles:[i.styles];for(let s of o)typeof s=="string"?s===ht?t.push(s):e.errors.push(Kl(s)):t.push(new Map(Object.entries(s)));let r=!1,a=null;return t.forEach(s=>{if(s instanceof Map&&(s.has("easing")&&(a=s.get("easing"),s.delete("easing")),!r)){for(let c of s.values())if(c.toString().indexOf(ga)>=0){r=!0;break}}}),{type:Z.Style,styles:t,easing:a,offset:i.offset,containsDynamicStyles:r,options:null}}_validateStyleAst(i,e){let t=e.currentAnimateTimings,o=e.currentTime,r=e.currentTime;t&&r>0&&(r-=t.duration+t.delay),i.styles.forEach(a=>{typeof a!="string"&&a.forEach((s,c)=>{let d=e.collectedStyles.get(e.currentQuerySelector),u=d.get(c),g=!0;u&&(r!=o&&r>=u.startTime&&o<=u.endTime&&(e.errors.push(Xl(c,u.startTime,u.endTime,r,o)),g=!1),r=u.startTime),g&&d.set(c,{startTime:r,endTime:o}),e.options&&gc(s,e.options,e.errors)})})}visitKeyframes(i,e){let t={type:Z.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push($l()),t;let o=1,r=0,a=[],s=!1,c=!1,d=0,u=i.steps.map(ge=>{let _e=this._makeStyleAst(ge,e),Se=_e.offset!=null?_e.offset:Rh(_e.styles),Ae=0;return Se!=null&&(r++,Ae=_e.offset=Se),c=c||Ae<0||Ae>1,s=s||Ae<d,d=Ae,a.push(Ae),_e});c&&e.errors.push(Ql()),s&&e.errors.push(Yl());let g=i.steps.length,R=0;r>0&&r<g?e.errors.push(Zl()):r==0&&(R=o/(g-1));let E=g-1,y=e.currentTime,M=e.currentAnimateTimings,ne=M.duration;return u.forEach((ge,_e)=>{let Se=R>0?_e==E?1:R*_e:a[_e],Ae=Se*ne;e.currentTime=y+M.delay+Ae,M.duration=Ae,this._validateStyleAst(ge,e),ge.offset=Se,t.styles.push(ge)}),t}visitReference(i,e){return{type:Z.Reference,animation:Xe(this,ji(i.animation),e),options:_i(i.options)}}visitAnimateChild(i,e){return e.depCount++,{type:Z.AnimateChild,options:_i(i.options)}}visitAnimateRef(i,e){return{type:Z.AnimateRef,animation:this.visitReference(i.animation,e),options:_i(i.options)}}visitQuery(i,e){let t=e.currentQuerySelector,o=i.options||{};e.queryCount++,e.currentQuery=i;let[r,a]=Th(i.selector);e.currentQuerySelector=t.length?t+" "+r:r,Ke(e.collectedStyles,e.currentQuerySelector,new Map);let s=Xe(this,ji(i.animation),e);return e.currentQuery=null,e.currentQuerySelector=t,{type:Z.Query,selector:r,limit:o.limit||0,optional:!!o.optional,includeSelf:a,animation:s,originalSelector:i.selector,options:_i(i.options)}}visitStagger(i,e){e.currentQuery||e.errors.push(Jl());let t=i.timings==="full"?{duration:0,delay:0,easing:"full"}:Sn(i.timings,e.errors,!0);return{type:Z.Stagger,animation:Xe(this,ji(i.animation),e),timings:t,options:null}}};function Th(n){let i=!!n.split(/\s*,\s*/).find(e=>e==Ic);return i&&(n=n.replace(Ih,"")),n=n.replace(/@\*/g,Cn).replace(/@\w+/g,e=>Cn+"-"+e.slice(1)).replace(/:animating/g,Lo),[n,i]}function Ah(n){return n?A({},n):null}var ka=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(i){this.errors=i}};function Rh(n){if(typeof n=="string")return null;let i=null;if(Array.isArray(n))n.forEach(e=>{if(e instanceof Map&&e.has("offset")){let t=e;i=parseFloat(t.get("offset")),t.delete("offset")}});else if(n instanceof Map&&n.has("offset")){let e=n;i=parseFloat(e.get("offset")),e.delete("offset")}return i}function Oh(n,i){if(n.hasOwnProperty("duration"))return n;if(typeof n=="number"){let r=Sn(n,i).duration;return ya(r,0,"")}let e=n;if(e.split(/\s+/).some(r=>r.charAt(0)=="{"&&r.charAt(1)=="{")){let r=ya(0,0,"");return r.dynamic=!0,r.strValue=e,r}let o=Sn(e,i);return ya(o.duration,o.delay,o.easing)}function _i(n){return n?(n=A({},n),n.params&&(n.params=Ah(n.params))):n={},n}function ya(n,i,e){return{duration:n,delay:i,easing:e}}function La(n,i,e,t,o,r,a=null,s=!1){return{type:1,element:n,keyframes:i,preStyleProps:e,postStyleProps:t,duration:o,delay:r,totalTime:o+r,easing:a,subTimeline:s}}var kn=class{_map=new Map;get(i){return this._map.get(i)||[]}append(i,e){let t=this._map.get(i);t||this._map.set(i,t=[]),t.push(...e)}has(i){return this._map.has(i)}clear(){this._map.clear()}},Ph=1,Fh=":enter",Nh=new RegExp(Fh,"g"),Lh=":leave",Vh=new RegExp(Lh,"g");function Ac(n,i,e,t,o,r=new Map,a=new Map,s,c,d=[]){return new Da().buildKeyframes(n,i,e,t,o,r,a,s,c,d)}var Da=class{buildKeyframes(i,e,t,o,r,a,s,c,d,u=[]){d=d||new kn;let g=new Ea(i,e,d,o,r,u,[]);g.options=c;let R=c.delay?kt(c.delay):0;g.currentTimeline.delayNextStep(R),g.currentTimeline.setStyles([a],null,g.errors,c),Xe(this,t,g);let E=g.timelines.filter(y=>y.containsAnimation());if(E.length&&s.size){let y;for(let M=E.length-1;M>=0;M--){let ne=E[M];if(ne.element===e){y=ne;break}}y&&!y.allowOnlyTimelineStyles()&&y.setStyles([s],null,g.errors,c)}return E.length?E.map(y=>y.buildKeyframes()):[La(e,[],[],[],0,R,"",!1)]}visitTrigger(i,e){}visitState(i,e){}visitTransition(i,e){}visitAnimateChild(i,e){let t=e.subInstructions.get(e.element);if(t){let o=e.createSubContext(i.options),r=e.currentTimeline.currentTime,a=this._visitSubInstructions(t,o,o.options);r!=a&&e.transformIntoNewTimeline(a)}e.previousNode=i}visitAnimateRef(i,e){let t=e.createSubContext(i.options);t.transformIntoNewTimeline(),this._applyAnimationRefDelays([i.options,i.animation.options],e,t),this.visitReference(i.animation,t),e.transformIntoNewTimeline(t.currentTimeline.currentTime),e.previousNode=i}_applyAnimationRefDelays(i,e,t){for(let o of i){let r=o?.delay;if(r){let a=typeof r=="number"?r:kt(Hi(r,o?.params??{},e.errors));t.delayNextStep(a)}}}_visitSubInstructions(i,e,t){let r=e.currentTimeline.currentTime,a=t.duration!=null?kt(t.duration):null,s=t.delay!=null?kt(t.delay):null;return a!==0&&i.forEach(c=>{let d=e.appendInstructionToTimeline(c,a,s);r=Math.max(r,d.duration+d.delay)}),r}visitReference(i,e){e.updateOptions(i.options,!0),Xe(this,i.animation,e),e.previousNode=i}visitSequence(i,e){let t=e.subContextCount,o=e,r=i.options;if(r&&(r.params||r.delay)&&(o=e.createSubContext(r),o.transformIntoNewTimeline(),r.delay!=null)){o.previousNode.type==Z.Style&&(o.currentTimeline.snapshotCurrentStyles(),o.previousNode=qo);let a=kt(r.delay);o.delayNextStep(a)}i.steps.length&&(i.steps.forEach(a=>Xe(this,a,o)),o.currentTimeline.applyStylesToKeyframe(),o.subContextCount>t&&o.transformIntoNewTimeline()),e.previousNode=i}visitGroup(i,e){let t=[],o=e.currentTimeline.currentTime,r=i.options&&i.options.delay?kt(i.options.delay):0;i.steps.forEach(a=>{let s=e.createSubContext(i.options);r&&s.delayNextStep(r),Xe(this,a,s),o=Math.max(o,s.currentTimeline.currentTime),t.push(s.currentTimeline)}),t.forEach(a=>e.currentTimeline.mergeTimelineCollectedStyles(a)),e.transformIntoNewTimeline(o),e.previousNode=i}_visitTiming(i,e){if(i.dynamic){let t=i.strValue,o=e.params?Hi(t,e.params,e.errors):t;return Sn(o,e.errors)}else return{duration:i.duration,delay:i.delay,easing:i.easing}}visitAnimate(i,e){let t=e.currentAnimateTimings=this._visitTiming(i.timings,e),o=e.currentTimeline;t.delay&&(e.incrementTime(t.delay),o.snapshotCurrentStyles());let r=i.style;r.type==Z.Keyframes?this.visitKeyframes(r,e):(e.incrementTime(t.duration),this.visitStyle(r,e),o.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=i}visitStyle(i,e){let t=e.currentTimeline,o=e.currentAnimateTimings;!o&&t.hasCurrentStyleProperties()&&t.forwardFrame();let r=o&&o.easing||i.easing;i.isEmptyStep?t.applyEmptyStep(r):t.setStyles(i.styles,r,e.errors,e.options),e.previousNode=i}visitKeyframes(i,e){let t=e.currentAnimateTimings,o=e.currentTimeline.duration,r=t.duration,s=e.createSubContext().currentTimeline;s.easing=t.easing,i.styles.forEach(c=>{let d=c.offset||0;s.forwardTime(d*r),s.setStyles(c.styles,c.easing,e.errors,e.options),s.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(s),e.transformIntoNewTimeline(o+r),e.previousNode=i}visitQuery(i,e){let t=e.currentTimeline.currentTime,o=i.options||{},r=o.delay?kt(o.delay):0;r&&(e.previousNode.type===Z.Style||t==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=qo);let a=t,s=e.invokeQuery(i.selector,i.originalSelector,i.limit,i.includeSelf,!!o.optional,e.errors);e.currentQueryTotal=s.length;let c=null;s.forEach((d,u)=>{e.currentQueryIndex=u;let g=e.createSubContext(i.options,d);r&&g.delayNextStep(r),d===e.element&&(c=g.currentTimeline),Xe(this,i.animation,g),g.currentTimeline.applyStylesToKeyframe();let R=g.currentTimeline.currentTime;a=Math.max(a,R)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(a),c&&(e.currentTimeline.mergeTimelineCollectedStyles(c),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=i}visitStagger(i,e){let t=e.parentContext,o=e.currentTimeline,r=i.timings,a=Math.abs(r.duration),s=a*(e.currentQueryTotal-1),c=a*e.currentQueryIndex;switch(r.duration<0?"reverse":r.easing){case"reverse":c=s-c;break;case"full":c=t.currentStaggerTime;break}let u=e.currentTimeline;c&&u.delayNextStep(c);let g=u.currentTime;Xe(this,i.animation,e),e.previousNode=i,t.currentStaggerTime=o.currentTime-g+(o.startTime-t.currentTimeline.startTime)}},qo={},Ea=class n{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=qo;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(i,e,t,o,r,a,s,c){this._driver=i,this.element=e,this.subInstructions=t,this._enterClassName=o,this._leaveClassName=r,this.errors=a,this.timelines=s,this.currentTimeline=c||new Ko(this._driver,e,0),s.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(i,e){if(!i)return;let t=i,o=this.options;t.duration!=null&&(o.duration=kt(t.duration)),t.delay!=null&&(o.delay=kt(t.delay));let r=t.params;if(r){let a=o.params;a||(a=this.options.params={}),Object.keys(r).forEach(s=>{(!e||!a.hasOwnProperty(s))&&(a[s]=Hi(r[s],a,this.errors))})}}_copyOptions(){let i={};if(this.options){let e=this.options.params;if(e){let t=i.params={};Object.keys(e).forEach(o=>{t[o]=e[o]})}}return i}createSubContext(i=null,e,t){let o=e||this.element,r=new n(this._driver,o,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(o,t||0));return r.previousNode=this.previousNode,r.currentAnimateTimings=this.currentAnimateTimings,r.options=this._copyOptions(),r.updateOptions(i),r.currentQueryIndex=this.currentQueryIndex,r.currentQueryTotal=this.currentQueryTotal,r.parentContext=this,this.subContextCount++,r}transformIntoNewTimeline(i){return this.previousNode=qo,this.currentTimeline=this.currentTimeline.fork(this.element,i),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(i,e,t){let o={duration:e??i.duration,delay:this.currentTimeline.currentTime+(t??0)+i.delay,easing:""},r=new Ia(this._driver,i.element,i.keyframes,i.preStyleProps,i.postStyleProps,o,i.stretchStartingKeyframe);return this.timelines.push(r),o}incrementTime(i){this.currentTimeline.forwardTime(this.currentTimeline.duration+i)}delayNextStep(i){i>0&&this.currentTimeline.delayNextStep(i)}invokeQuery(i,e,t,o,r,a){let s=[];if(o&&s.push(this.element),i.length>0){i=i.replace(Nh,"."+this._enterClassName),i=i.replace(Vh,"."+this._leaveClassName);let c=t!=1,d=this._driver.query(this.element,i,c);t!==0&&(d=t<0?d.slice(d.length+t,d.length):d.slice(0,t)),s.push(...d)}return!r&&s.length==0&&a.push(ec(e)),s}},Ko=class n{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(i,e,t,o){this._driver=i,this.element=e,this.startTime=t,this._elementTimelineStylesLookup=o,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(i){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+i),e&&this.snapshotCurrentStyles()):this.startTime+=i}fork(i,e){return this.applyStylesToKeyframe(),new n(this._driver,i,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=Ph,this._loadKeyframe()}forwardTime(i){this.applyStylesToKeyframe(),this.duration=i,this._loadKeyframe()}_updateStyle(i,e){this._localTimelineStyles.set(i,e),this._globalTimelineStyles.set(i,e),this._styleSummary.set(i,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(i){i&&this._previousKeyframe.set("easing",i);for(let[e,t]of this._globalTimelineStyles)this._backFill.set(e,t||ht),this._currentKeyframe.set(e,ht);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(i,e,t,o){e&&this._previousKeyframe.set("easing",e);let r=o&&o.params||{},a=Bh(i,this._globalTimelineStyles);for(let[s,c]of a){let d=Hi(c,r,t);this._pendingStyles.set(s,d),this._localTimelineStyles.has(s)||this._backFill.set(s,this._globalTimelineStyles.get(s)??ht),this._updateStyle(s,d)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((i,e)=>{this._currentKeyframe.set(e,i)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((i,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,i)}))}snapshotCurrentStyles(){for(let[i,e]of this._localTimelineStyles)this._pendingStyles.set(i,e),this._updateStyle(i,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let i=[];for(let e in this._currentKeyframe)i.push(e);return i}mergeTimelineCollectedStyles(i){i._styleSummary.forEach((e,t)=>{let o=this._styleSummary.get(t);(!o||e.time>o.time)&&this._updateStyle(t,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let i=new Set,e=new Set,t=this._keyframes.size===1&&this.duration===0,o=[];this._keyframes.forEach((s,c)=>{let d=new Map([...this._backFill,...s]);d.forEach((u,g)=>{u===xn?i.add(g):u===ht&&e.add(g)}),t||d.set("offset",c/this.duration),o.push(d)});let r=[...i.values()],a=[...e.values()];if(t){let s=o[0],c=new Map(s);s.set("offset",0),c.set("offset",1),o=[s,c]}return La(this.element,o,r,a,this.duration,this.startTime,this.easing,!1)}},Ia=class extends Ko{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(i,e,t,o,r,a,s=!1){super(i,e,a.delay),this.keyframes=t,this.preStyleProps=o,this.postStyleProps=r,this._stretchStartingKeyframe=s,this.timings={duration:a.duration,delay:a.delay,easing:a.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let i=this.keyframes,{delay:e,duration:t,easing:o}=this.timings;if(this._stretchStartingKeyframe&&e){let r=[],a=t+e,s=e/a,c=new Map(i[0]);c.set("offset",0),r.push(c);let d=new Map(i[0]);d.set("offset",xc(s)),r.push(d);let u=i.length-1;for(let g=1;g<=u;g++){let R=new Map(i[g]),E=R.get("offset"),y=e+E*t;R.set("offset",xc(y/a)),r.push(R)}t=a,e=0,o="",i=r}return La(this.element,i,this.preStyleProps,this.postStyleProps,t,e,o,!0)}};function xc(n,i=3){let e=Math.pow(10,i-1);return Math.round(n*e)/e}function Bh(n,i){let e=new Map,t;return n.forEach(o=>{if(o==="*"){t??=i.keys();for(let r of t)e.set(r,ht)}else for(let[r,a]of o)e.set(r,a)}),e}function wc(n,i,e,t,o,r,a,s,c,d,u,g,R){return{type:0,element:n,triggerName:i,isRemovalTransition:o,fromState:e,fromStyles:r,toState:t,toStyles:a,timelines:s,queriedElements:c,preStyleProps:d,postStyleProps:u,totalTime:g,errors:R}}var xa={},Xo=class{_triggerName;ast;_stateStyles;constructor(i,e,t){this._triggerName=i,this.ast=e,this._stateStyles=t}match(i,e,t,o){return zh(this.ast.matchers,i,e,t,o)}buildStyles(i,e,t){let o=this._stateStyles.get("*");return i!==void 0&&(o=this._stateStyles.get(i?.toString())||o),o?o.buildStyles(e,t):new Map}build(i,e,t,o,r,a,s,c,d,u){let g=[],R=this.ast.options&&this.ast.options.params||xa,E=s&&s.params||xa,y=this.buildStyles(t,E,g),M=c&&c.params||xa,ne=this.buildStyles(o,M,g),ge=new Set,_e=new Map,Se=new Map,Ae=o==="void",Ti={params:Rc(M,R),delay:this.ast.options?.delay},yt=u?[]:Ac(i,e,this.ast.animation,r,a,y,ne,Ti,d,g),ze=0;return yt.forEach(Ue=>{ze=Math.max(Ue.duration+Ue.delay,ze)}),g.length?wc(e,this._triggerName,t,o,Ae,y,ne,[],[],_e,Se,ze,g):(yt.forEach(Ue=>{let di=Ue.element,Ai=Ke(_e,di,new Set);Ue.preStyleProps.forEach(mi=>Ai.add(mi));let ll=Ke(Se,di,new Set);Ue.postStyleProps.forEach(mi=>ll.add(mi)),di!==e&&ge.add(di)}),wc(e,this._triggerName,t,o,Ae,y,ne,yt,[...ge.values()],_e,Se,ze))}};function zh(n,i,e,t,o){return n.some(r=>r(i,e,t,o))}function Rc(n,i){let e=A({},i);return Object.entries(n).forEach(([t,o])=>{o!=null&&(e[t]=o)}),e}var Ta=class{styles;defaultParams;normalizer;constructor(i,e,t){this.styles=i,this.defaultParams=e,this.normalizer=t}buildStyles(i,e){let t=new Map,o=Rc(i,this.defaultParams);return this.styles.styles.forEach(r=>{typeof r!="string"&&r.forEach((a,s)=>{a&&(a=Hi(a,o,e));let c=this.normalizer.normalizePropertyName(s,e);a=this.normalizer.normalizeStyleValue(s,c,a,e),t.set(s,a)})}),t}};function jh(n,i,e){return new Aa(n,i,e)}var Aa=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(i,e,t){this.name=i,this.ast=e,this._normalizer=t,e.states.forEach(o=>{let r=o.options&&o.options.params||{};this.states.set(o.name,new Ta(o.style,r,t))}),Cc(this.states,"true","1"),Cc(this.states,"false","0"),e.transitions.forEach(o=>{this.transitionFactories.push(new Xo(i,o,this.states))}),this.fallbackTransition=Hh(i,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(i,e,t,o){return this.transitionFactories.find(a=>a.match(i,e,t,o))||null}matchStyles(i,e,t){return this.fallbackTransition.buildStyles(i,e,t)}};function Hh(n,i,e){let t=[(a,s)=>!0],o={type:Z.Sequence,steps:[],options:null},r={type:Z.Transition,animation:o,matchers:t,options:null,queryCount:0,depCount:0};return new Xo(n,r,i)}function Cc(n,i,e){n.has(i)?n.has(e)||n.set(e,n.get(i)):n.has(e)&&n.set(i,n.get(e))}var Uh=new kn,Ra=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(i,e,t){this.bodyNode=i,this._driver=e,this._normalizer=t}register(i,e){let t=[],o=[],r=Tc(this._driver,e,t,o);if(t.length)throw oc(t);this._animations.set(i,r)}_buildPlayer(i,e,t){let o=i.element,r=ha(this._normalizer,i.keyframes,e,t);return this._driver.animate(o,r,i.duration,i.delay,i.easing,[],!0)}create(i,e,t={}){let o=[],r=this._animations.get(i),a,s=new Map;if(r?(a=Ac(this._driver,e,r,_a,No,new Map,new Map,t,Uh,o),a.forEach(u=>{let g=Ke(s,u.element,new Map);u.postStyleProps.forEach(R=>g.set(R,null))})):(o.push(rc()),a=[]),o.length)throw ac(o);s.forEach((u,g)=>{u.forEach((R,E)=>{u.set(E,this._driver.computeStyle(g,E,ht))})});let c=a.map(u=>{let g=s.get(u.element);return this._buildPlayer(u,new Map,g)}),d=Vt(c);return this._playersById.set(i,d),d.onDestroy(()=>this.destroy(i)),this.players.push(d),d}destroy(i){let e=this._getPlayer(i);e.destroy(),this._playersById.delete(i);let t=this.players.indexOf(e);t>=0&&this.players.splice(t,1)}_getPlayer(i){let e=this._playersById.get(i);if(!e)throw sc(i);return e}listen(i,e,t,o){let r=Po(e,"","","");return Oo(this._getPlayer(i),t,r,o),()=>{}}command(i,e,t,o){if(t=="register"){this.register(i,o[0]);return}if(t=="create"){let a=o[0]||{};this.create(i,e,a);return}let r=this._getPlayer(i);switch(t){case"play":r.play();break;case"pause":r.pause();break;case"reset":r.reset();break;case"restart":r.restart();break;case"finish":r.finish();break;case"init":r.init();break;case"setPosition":r.setPosition(parseFloat(o[0]));break;case"destroy":this.destroy(i);break}}},Sc="ng-animate-queued",Wh=".ng-animate-queued",wa="ng-animate-disabled",Gh=".ng-animate-disabled",qh="ng-star-inserted",Kh=".ng-star-inserted",Xh=[],Oc={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},$h={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},pt="__ng_removed",Dn=class{namespaceId;value;options;get params(){return this.options.params}constructor(i,e=""){this.namespaceId=e;let t=i&&i.hasOwnProperty("value"),o=t?i.value:i;if(this.value=Yh(o),t){let r=i,{value:a}=r,s=hl(r,["value"]);this.options=s}else this.options={};this.options.params||(this.options.params={})}absorbOptions(i){let e=i.params;if(e){let t=this.options.params;Object.keys(e).forEach(o=>{t[o]==null&&(t[o]=e[o])})}}},Mn="void",Ca=new Dn(Mn),Oa=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(i,e,t){this.id=i,this.hostElement=e,this._engine=t,this._hostClassName="ng-tns-"+i,lt(e,this._hostClassName)}listen(i,e,t,o){if(!this._triggers.has(e))throw lc(t,e);if(t==null||t.length==0)throw cc(e);if(!Zh(t))throw dc(t,e);let r=Ke(this._elementListeners,i,[]),a={name:e,phase:t,callback:o};r.push(a);let s=Ke(this._engine.statesByElement,i,new Map);return s.has(e)||(lt(i,wn),lt(i,wn+"-"+e),s.set(e,Ca)),()=>{this._engine.afterFlush(()=>{let c=r.indexOf(a);c>=0&&r.splice(c,1),this._triggers.has(e)||s.delete(e)})}}register(i,e){return this._triggers.has(i)?!1:(this._triggers.set(i,e),!0)}_getTrigger(i){let e=this._triggers.get(i);if(!e)throw mc(i);return e}trigger(i,e,t,o=!0){let r=this._getTrigger(e),a=new En(this.id,e,i),s=this._engine.statesByElement.get(i);s||(lt(i,wn),lt(i,wn+"-"+e),this._engine.statesByElement.set(i,s=new Map));let c=s.get(e),d=new Dn(t,this.id);if(!(t&&t.hasOwnProperty("value"))&&c&&d.absorbOptions(c.options),s.set(e,d),c||(c=Ca),!(d.value===Mn)&&c.value===d.value){if(!tu(c.params,d.params)){let M=[],ne=r.matchStyles(c.value,c.params,M),ge=r.matchStyles(d.value,d.params,M);M.length?this._engine.reportError(M):this._engine.afterFlush(()=>{Yt(i,ne),ut(i,ge)})}return}let R=Ke(this._engine.playersByElement,i,[]);R.forEach(M=>{M.namespaceId==this.id&&M.triggerName==e&&M.queued&&M.destroy()});let E=r.matchTransition(c.value,d.value,i,d.params),y=!1;if(!E){if(!o)return;E=r.fallbackTransition,y=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:i,triggerName:e,transition:E,fromState:c,toState:d,player:a,isFallbackTransition:y}),y||(lt(i,Sc),a.onStart(()=>{Ui(i,Sc)})),a.onDone(()=>{let M=this.players.indexOf(a);M>=0&&this.players.splice(M,1);let ne=this._engine.playersByElement.get(i);if(ne){let ge=ne.indexOf(a);ge>=0&&ne.splice(ge,1)}}),this.players.push(a),R.push(a),a}deregister(i){this._triggers.delete(i),this._engine.statesByElement.forEach(e=>e.delete(i)),this._elementListeners.forEach((e,t)=>{this._elementListeners.set(t,e.filter(o=>o.name!=i))})}clearElementCache(i){this._engine.statesByElement.delete(i),this._elementListeners.delete(i);let e=this._engine.playersByElement.get(i);e&&(e.forEach(t=>t.destroy()),this._engine.playersByElement.delete(i))}_signalRemovalForInnerTriggers(i,e){let t=this._engine.driver.query(i,Cn,!0);t.forEach(o=>{if(o[pt])return;let r=this._engine.fetchNamespacesByElement(o);r.size?r.forEach(a=>a.triggerLeaveAnimation(o,e,!1,!0)):this.clearElementCache(o)}),this._engine.afterFlushAnimationsDone(()=>t.forEach(o=>this.clearElementCache(o)))}triggerLeaveAnimation(i,e,t,o){let r=this._engine.statesByElement.get(i),a=new Map;if(r){let s=[];if(r.forEach((c,d)=>{if(a.set(d,c.value),this._triggers.has(d)){let u=this.trigger(i,d,Mn,o);u&&s.push(u)}}),s.length)return this._engine.markElementAsRemoved(this.id,i,!0,e,a),t&&Vt(s).onDone(()=>this._engine.processLeaveNode(i)),!0}return!1}prepareLeaveAnimationListeners(i){let e=this._elementListeners.get(i),t=this._engine.statesByElement.get(i);if(e&&t){let o=new Set;e.forEach(r=>{let a=r.name;if(o.has(a))return;o.add(a);let c=this._triggers.get(a).fallbackTransition,d=t.get(a)||Ca,u=new Dn(Mn),g=new En(this.id,a,i);this._engine.totalQueuedPlayers++,this._queue.push({element:i,triggerName:a,transition:c,fromState:d,toState:u,player:g,isFallbackTransition:!0})})}}removeNode(i,e){let t=this._engine;if(i.childElementCount&&this._signalRemovalForInnerTriggers(i,e),this.triggerLeaveAnimation(i,e,!0))return;let o=!1;if(t.totalAnimations){let r=t.players.length?t.playersByQueriedElement.get(i):[];if(r&&r.length)o=!0;else{let a=i;for(;a=a.parentNode;)if(t.statesByElement.get(a)){o=!0;break}}}if(this.prepareLeaveAnimationListeners(i),o)t.markElementAsRemoved(this.id,i,!1,e);else{let r=i[pt];(!r||r===Oc)&&(t.afterFlush(()=>this.clearElementCache(i)),t.destroyInnerAnimations(i),t._onRemovalComplete(i,e))}}insertNode(i,e){lt(i,this._hostClassName)}drainQueuedTransitions(i){let e=[];return this._queue.forEach(t=>{let o=t.player;if(o.destroyed)return;let r=t.element,a=this._elementListeners.get(r);a&&a.forEach(s=>{if(s.name==t.triggerName){let c=Po(r,t.triggerName,t.fromState.value,t.toState.value);c._data=i,Oo(t.player,s.phase,c,s.callback)}}),o.markedForDestroy?this._engine.afterFlush(()=>{o.destroy()}):e.push(t)}),this._queue=[],e.sort((t,o)=>{let r=t.transition.ast.depCount,a=o.transition.ast.depCount;return r==0||a==0?r-a:this._engine.driver.containsElement(t.element,o.element)?1:-1})}destroy(i){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,i)}},Pa=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(i,e)=>{};_onRemovalComplete(i,e){this.onRemovalComplete(i,e)}constructor(i,e,t){this.bodyNode=i,this.driver=e,this._normalizer=t}get queuedPlayers(){let i=[];return this._namespaceList.forEach(e=>{e.players.forEach(t=>{t.queued&&i.push(t)})}),i}createNamespace(i,e){let t=new Oa(i,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(t,e):(this.newHostElements.set(e,t),this.collectEnterElement(e)),this._namespaceLookup[i]=t}_balanceNamespaceList(i,e){let t=this._namespaceList,o=this.namespacesByHostElement;if(t.length-1>=0){let a=!1,s=this.driver.getParentElement(e);for(;s;){let c=o.get(s);if(c){let d=t.indexOf(c);t.splice(d+1,0,i),a=!0;break}s=this.driver.getParentElement(s)}a||t.unshift(i)}else t.push(i);return o.set(e,i),i}register(i,e){let t=this._namespaceLookup[i];return t||(t=this.createNamespace(i,e)),t}registerTrigger(i,e,t){let o=this._namespaceLookup[i];o&&o.register(e,t)&&this.totalAnimations++}destroy(i,e){i&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let t=this._fetchNamespace(i);this.namespacesByHostElement.delete(t.hostElement);let o=this._namespaceList.indexOf(t);o>=0&&this._namespaceList.splice(o,1),t.destroy(e),delete this._namespaceLookup[i]}))}_fetchNamespace(i){return this._namespaceLookup[i]}fetchNamespacesByElement(i){let e=new Set,t=this.statesByElement.get(i);if(t){for(let o of t.values())if(o.namespaceId){let r=this._fetchNamespace(o.namespaceId);r&&e.add(r)}}return e}trigger(i,e,t,o){if(Ho(e)){let r=this._fetchNamespace(i);if(r)return r.trigger(e,t,o),!0}return!1}insertNode(i,e,t,o){if(!Ho(e))return;let r=e[pt];if(r&&r.setForRemoval){r.setForRemoval=!1,r.setForMove=!0;let a=this.collectedLeaveElements.indexOf(e);a>=0&&this.collectedLeaveElements.splice(a,1)}if(i){let a=this._fetchNamespace(i);a&&a.insertNode(e,t)}o&&this.collectEnterElement(e)}collectEnterElement(i){this.collectedEnterElements.push(i)}markElementAsDisabled(i,e){e?this.disabledNodes.has(i)||(this.disabledNodes.add(i),lt(i,wa)):this.disabledNodes.has(i)&&(this.disabledNodes.delete(i),Ui(i,wa))}removeNode(i,e,t){if(Ho(e)){let o=i?this._fetchNamespace(i):null;o?o.removeNode(e,t):this.markElementAsRemoved(i,e,!1,t);let r=this.namespacesByHostElement.get(e);r&&r.id!==i&&r.removeNode(e,t)}else this._onRemovalComplete(e,t)}markElementAsRemoved(i,e,t,o,r){this.collectedLeaveElements.push(e),e[pt]={namespaceId:i,setForRemoval:o,hasAnimation:t,removedBeforeQueried:!1,previousTriggersValues:r}}listen(i,e,t,o,r){return Ho(e)?this._fetchNamespace(i).listen(e,t,o,r):()=>{}}_buildInstruction(i,e,t,o,r){return i.transition.build(this.driver,i.element,i.fromState.value,i.toState.value,t,o,i.fromState.options,i.toState.options,e,r)}destroyInnerAnimations(i){let e=this.driver.query(i,Cn,!0);e.forEach(t=>this.destroyActiveAnimationsForElement(t)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(i,Lo,!0),e.forEach(t=>this.finishActiveQueriedAnimationOnElement(t)))}destroyActiveAnimationsForElement(i){let e=this.playersByElement.get(i);e&&e.forEach(t=>{t.queued?t.markedForDestroy=!0:t.destroy()})}finishActiveQueriedAnimationOnElement(i){let e=this.playersByQueriedElement.get(i);e&&e.forEach(t=>t.finish())}whenRenderingDone(){return new Promise(i=>{if(this.players.length)return Vt(this.players).onDone(()=>i());i()})}processLeaveNode(i){let e=i[pt];if(e&&e.setForRemoval){if(i[pt]=Oc,e.namespaceId){this.destroyInnerAnimations(i);let t=this._fetchNamespace(e.namespaceId);t&&t.clearElementCache(i)}this._onRemovalComplete(i,e.setForRemoval)}i.classList?.contains(wa)&&this.markElementAsDisabled(i,!1),this.driver.query(i,Gh,!0).forEach(t=>{this.markElementAsDisabled(t,!1)})}flush(i=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((t,o)=>this._balanceNamespaceList(t,o)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let t=0;t<this.collectedEnterElements.length;t++){let o=this.collectedEnterElements[t];lt(o,qh)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let t=[];try{e=this._flushAnimations(t,i)}finally{for(let o=0;o<t.length;o++)t[o]()}}else for(let t=0;t<this.collectedLeaveElements.length;t++){let o=this.collectedLeaveElements[t];this.processLeaveNode(o)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(t=>t()),this._flushFns=[],this._whenQuietFns.length){let t=this._whenQuietFns;this._whenQuietFns=[],e.length?Vt(e).onDone(()=>{t.forEach(o=>o())}):t.forEach(o=>o())}}reportError(i){throw hc(i)}_flushAnimations(i,e){let t=new kn,o=[],r=new Map,a=[],s=new Map,c=new Map,d=new Map,u=new Set;this.disabledNodes.forEach(D=>{u.add(D);let O=this.driver.query(D,Wh,!0);for(let B=0;B<O.length;B++)u.add(O[B])});let g=this.bodyNode,R=Array.from(this.statesByElement.keys()),E=Dc(R,this.collectedEnterElements),y=new Map,M=0;E.forEach((D,O)=>{let B=_a+M++;y.set(O,B),D.forEach(ie=>lt(ie,B))});let ne=[],ge=new Set,_e=new Set;for(let D=0;D<this.collectedLeaveElements.length;D++){let O=this.collectedLeaveElements[D],B=O[pt];B&&B.setForRemoval&&(ne.push(O),ge.add(O),B.hasAnimation?this.driver.query(O,Kh,!0).forEach(ie=>ge.add(ie)):_e.add(O))}let Se=new Map,Ae=Dc(R,Array.from(ge));Ae.forEach((D,O)=>{let B=No+M++;Se.set(O,B),D.forEach(ie=>lt(ie,B))}),i.push(()=>{E.forEach((D,O)=>{let B=y.get(O);D.forEach(ie=>Ui(ie,B))}),Ae.forEach((D,O)=>{let B=Se.get(O);D.forEach(ie=>Ui(ie,B))}),ne.forEach(D=>{this.processLeaveNode(D)})});let Ti=[],yt=[];for(let D=this._namespaceList.length-1;D>=0;D--)this._namespaceList[D].drainQueuedTransitions(e).forEach(B=>{let ie=B.player,Me=B.element;if(Ti.push(ie),this.collectedEnterElements.length){let Fe=Me[pt];if(Fe&&Fe.setForMove){if(Fe.previousTriggersValues&&Fe.previousTriggersValues.has(B.triggerName)){let hi=Fe.previousTriggersValues.get(B.triggerName),it=this.statesByElement.get(B.element);if(it&&it.has(B.triggerName)){let go=it.get(B.triggerName);go.value=hi,it.set(B.triggerName,go)}}ie.destroy();return}}let xt=!g||!this.driver.containsElement(g,Me),Qe=Se.get(Me),qt=y.get(Me),pe=this._buildInstruction(B,t,qt,Qe,xt);if(pe.errors&&pe.errors.length){yt.push(pe);return}if(xt){ie.onStart(()=>Yt(Me,pe.fromStyles)),ie.onDestroy(()=>ut(Me,pe.toStyles)),o.push(ie);return}if(B.isFallbackTransition){ie.onStart(()=>Yt(Me,pe.fromStyles)),ie.onDestroy(()=>ut(Me,pe.toStyles)),o.push(ie);return}let ml=[];pe.timelines.forEach(Fe=>{Fe.stretchStartingKeyframe=!0,this.disabledNodes.has(Fe.element)||ml.push(Fe)}),pe.timelines=ml,t.append(Me,pe.timelines);let dh={instruction:pe,player:ie,element:Me};a.push(dh),pe.queriedElements.forEach(Fe=>Ke(s,Fe,[]).push(ie)),pe.preStyleProps.forEach((Fe,hi)=>{if(Fe.size){let it=c.get(hi);it||c.set(hi,it=new Set),Fe.forEach((go,$r)=>it.add($r))}}),pe.postStyleProps.forEach((Fe,hi)=>{let it=d.get(hi);it||d.set(hi,it=new Set),Fe.forEach((go,$r)=>it.add($r))})});if(yt.length){let D=[];yt.forEach(O=>{D.push(uc(O.triggerName,O.errors))}),Ti.forEach(O=>O.destroy()),this.reportError(D)}let ze=new Map,Ue=new Map;a.forEach(D=>{let O=D.element;t.has(O)&&(Ue.set(O,O),this._beforeAnimationBuild(D.player.namespaceId,D.instruction,ze))}),o.forEach(D=>{let O=D.element;this._getPreviousPlayers(O,!1,D.namespaceId,D.triggerName,null).forEach(ie=>{Ke(ze,O,[]).push(ie),ie.destroy()})});let di=ne.filter(D=>Ec(D,c,d)),Ai=new Map;kc(Ai,this.driver,_e,d,ht).forEach(D=>{Ec(D,c,d)&&di.push(D)});let mi=new Map;E.forEach((D,O)=>{kc(mi,this.driver,new Set(D),c,xn)}),di.forEach(D=>{let O=Ai.get(D),B=mi.get(D);Ai.set(D,new Map([...O?.entries()??[],...B?.entries()??[]]))});let Xr=[],cl=[],dl={};a.forEach(D=>{let{element:O,player:B,instruction:ie}=D;if(t.has(O)){if(u.has(O)){B.onDestroy(()=>ut(O,ie.toStyles)),B.disabled=!0,B.overrideTotalTime(ie.totalTime),o.push(B);return}let Me=dl;if(Ue.size>1){let Qe=O,qt=[];for(;Qe=Qe.parentNode;){let pe=Ue.get(Qe);if(pe){Me=pe;break}qt.push(Qe)}qt.forEach(pe=>Ue.set(pe,Me))}let xt=this._buildAnimation(B.namespaceId,ie,ze,r,mi,Ai);if(B.setRealPlayer(xt),Me===dl)Xr.push(B);else{let Qe=this.playersByElement.get(Me);Qe&&Qe.length&&(B.parentPlayer=Vt(Qe)),o.push(B)}}else Yt(O,ie.fromStyles),B.onDestroy(()=>ut(O,ie.toStyles)),cl.push(B),u.has(O)&&o.push(B)}),cl.forEach(D=>{let O=r.get(D.element);if(O&&O.length){let B=Vt(O);D.setRealPlayer(B)}}),o.forEach(D=>{D.parentPlayer?D.syncPlayerEvents(D.parentPlayer):D.destroy()});for(let D=0;D<ne.length;D++){let O=ne[D],B=O[pt];if(Ui(O,No),B&&B.hasAnimation)continue;let ie=[];if(s.size){let xt=s.get(O);xt&&xt.length&&ie.push(...xt);let Qe=this.driver.query(O,Lo,!0);for(let qt=0;qt<Qe.length;qt++){let pe=s.get(Qe[qt]);pe&&pe.length&&ie.push(...pe)}}let Me=ie.filter(xt=>!xt.destroyed);Me.length?Jh(this,O,Me):this.processLeaveNode(O)}return ne.length=0,Xr.forEach(D=>{this.players.push(D),D.onDone(()=>{D.destroy();let O=this.players.indexOf(D);this.players.splice(O,1)}),D.play()}),Xr}afterFlush(i){this._flushFns.push(i)}afterFlushAnimationsDone(i){this._whenQuietFns.push(i)}_getPreviousPlayers(i,e,t,o,r){let a=[];if(e){let s=this.playersByQueriedElement.get(i);s&&(a=s)}else{let s=this.playersByElement.get(i);if(s){let c=!r||r==Mn;s.forEach(d=>{d.queued||!c&&d.triggerName!=o||a.push(d)})}}return(t||o)&&(a=a.filter(s=>!(t&&t!=s.namespaceId||o&&o!=s.triggerName))),a}_beforeAnimationBuild(i,e,t){let o=e.triggerName,r=e.element,a=e.isRemovalTransition?void 0:i,s=e.isRemovalTransition?void 0:o;for(let c of e.timelines){let d=c.element,u=d!==r,g=Ke(t,d,[]);this._getPreviousPlayers(d,u,a,s,e.toState).forEach(E=>{let y=E.getRealPlayer();y.beforeDestroy&&y.beforeDestroy(),E.destroy(),g.push(E)})}Yt(r,e.fromStyles)}_buildAnimation(i,e,t,o,r,a){let s=e.triggerName,c=e.element,d=[],u=new Set,g=new Set,R=e.timelines.map(y=>{let M=y.element;u.add(M);let ne=M[pt];if(ne&&ne.removedBeforeQueried)return new Lt(y.duration,y.delay);let ge=M!==c,_e=eu((t.get(M)||Xh).map(ze=>ze.getRealPlayer())).filter(ze=>{let Ue=ze;return Ue.element?Ue.element===M:!1}),Se=r.get(M),Ae=a.get(M),Ti=ha(this._normalizer,y.keyframes,Se,Ae),yt=this._buildPlayer(y,Ti,_e);if(y.subTimeline&&o&&g.add(M),ge){let ze=new En(i,s,M);ze.setRealPlayer(yt),d.push(ze)}return yt});d.forEach(y=>{Ke(this.playersByQueriedElement,y.element,[]).push(y),y.onDone(()=>Qh(this.playersByQueriedElement,y.element,y))}),u.forEach(y=>lt(y,ba));let E=Vt(R);return E.onDestroy(()=>{u.forEach(y=>Ui(y,ba)),ut(c,e.toStyles)}),g.forEach(y=>{Ke(o,y,[]).push(E)}),E}_buildPlayer(i,e,t){return e.length>0?this.driver.animate(i.element,e,i.duration,i.delay,i.easing,t):new Lt(i.duration,i.delay)}},En=class{namespaceId;triggerName;element;_player=new Lt;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(i,e,t){this.namespaceId=i,this.triggerName=e,this.element=t}setRealPlayer(i){this._containsRealPlayer||(this._player=i,this._queuedCallbacks.forEach((e,t)=>{e.forEach(o=>Oo(i,t,void 0,o))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(i.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(i){this.totalTime=i}syncPlayerEvents(i){let e=this._player;e.triggerCallback&&i.onStart(()=>e.triggerCallback("start")),i.onDone(()=>this.finish()),i.onDestroy(()=>this.destroy())}_queueEvent(i,e){Ke(this._queuedCallbacks,i,[]).push(e)}onDone(i){this.queued&&this._queueEvent("done",i),this._player.onDone(i)}onStart(i){this.queued&&this._queueEvent("start",i),this._player.onStart(i)}onDestroy(i){this.queued&&this._queueEvent("destroy",i),this._player.onDestroy(i)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(i){this.queued||this._player.setPosition(i)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(i){let e=this._player;e.triggerCallback&&e.triggerCallback(i)}};function Qh(n,i,e){let t=n.get(i);if(t){if(t.length){let o=t.indexOf(e);t.splice(o,1)}t.length==0&&n.delete(i)}return t}function Yh(n){return n??null}function Ho(n){return n&&n.nodeType===1}function Zh(n){return n=="start"||n=="done"}function Mc(n,i){let e=n.style.display;return n.style.display=i??"none",e}function kc(n,i,e,t,o){let r=[];e.forEach(c=>r.push(Mc(c)));let a=[];t.forEach((c,d)=>{let u=new Map;c.forEach(g=>{let R=i.computeStyle(d,g,o);u.set(g,R),(!R||R.length==0)&&(d[pt]=$h,a.push(d))}),n.set(d,u)});let s=0;return e.forEach(c=>Mc(c,r[s++])),a}function Dc(n,i){let e=new Map;if(n.forEach(s=>e.set(s,[])),i.length==0)return e;let t=1,o=new Set(i),r=new Map;function a(s){if(!s)return t;let c=r.get(s);if(c)return c;let d=s.parentNode;return e.has(d)?c=d:o.has(d)?c=t:c=a(d),r.set(s,c),c}return i.forEach(s=>{let c=a(s);c!==t&&e.get(c).push(s)}),e}function lt(n,i){n.classList?.add(i)}function Ui(n,i){n.classList?.remove(i)}function Jh(n,i,e){Vt(e).onDone(()=>n.processLeaveNode(i))}function eu(n){let i=[];return Pc(n,i),i}function Pc(n,i){for(let e=0;e<n.length;e++){let t=n[e];t instanceof zi?Pc(t.players,i):i.push(t)}}function tu(n,i){let e=Object.keys(n),t=Object.keys(i);if(e.length!=t.length)return!1;for(let o=0;o<e.length;o++){let r=e[o];if(!i.hasOwnProperty(r)||n[r]!==i[r])return!1}return!0}function Ec(n,i,e){let t=e.get(n);if(!t)return!1;let o=i.get(n);return o?t.forEach(r=>o.add(r)):i.set(n,t),e.delete(n),!0}var Wi=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(i,e)=>{};constructor(i,e,t){this._driver=e,this._normalizer=t,this._transitionEngine=new Pa(i.body,e,t),this._timelineEngine=new Ra(i.body,e,t),this._transitionEngine.onRemovalComplete=(o,r)=>this.onRemovalComplete(o,r)}registerTrigger(i,e,t,o,r){let a=i+"-"+o,s=this._triggerCache[a];if(!s){let c=[],d=[],u=Tc(this._driver,r,c,d);if(c.length)throw nc(o,c);s=jh(o,u,this._normalizer),this._triggerCache[a]=s}this._transitionEngine.registerTrigger(e,o,s)}register(i,e){this._transitionEngine.register(i,e)}destroy(i,e){this._transitionEngine.destroy(i,e)}onInsert(i,e,t,o){this._transitionEngine.insertNode(i,e,t,o)}onRemove(i,e,t){this._transitionEngine.removeNode(i,e,t)}disableAnimations(i,e){this._transitionEngine.markElementAsDisabled(i,e)}process(i,e,t,o){if(t.charAt(0)=="@"){let[r,a]=ua(t),s=o;this._timelineEngine.command(r,e,a,s)}else this._transitionEngine.trigger(i,e,t,o)}listen(i,e,t,o,r){if(t.charAt(0)=="@"){let[a,s]=ua(t);return this._timelineEngine.listen(a,e,s,r)}return this._transitionEngine.listen(i,e,t,o,r)}flush(i=-1){this._transitionEngine.flush(i)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(i){this._transitionEngine.afterFlushAnimationsDone(i)}};function iu(n,i){let e=null,t=null;return Array.isArray(i)&&i.length?(e=Sa(i[0]),i.length>1&&(t=Sa(i[i.length-1]))):i instanceof Map&&(e=Sa(i)),e||t?new nu(n,e,t):null}var nu=(()=>{class n{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,t,o){this._element=e,this._startStyles=t,this._endStyles=o;let r=n.initialStylesByElement.get(e);r||n.initialStylesByElement.set(e,r=new Map),this._initialStyles=r}start(){this._state<1&&(this._startStyles&&ut(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(ut(this._element,this._initialStyles),this._endStyles&&(ut(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(n.initialStylesByElement.delete(this._element),this._startStyles&&(Yt(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Yt(this._element,this._endStyles),this._endStyles=null),ut(this._element,this._initialStyles),this._state=3)}}return n})();function Sa(n){let i=null;return n.forEach((e,t)=>{ou(t)&&(i=i||new Map,i.set(t,e))}),i}function ou(n){return n==="display"||n==="position"}var $o=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(i,e,t,o){this.element=i,this.keyframes=e,this.options=t,this._specialStyles=o,this._duration=t.duration,this._delay=t.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let i=this.keyframes,e=this._triggerWebAnimation(this.element,i,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=i.length?i[i.length-1]:new Map;let t=()=>this._onFinish();return e.addEventListener("finish",t),this.onDestroy(()=>{e.removeEventListener("finish",t)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(i){let e=[];return i.forEach(t=>{e.push(Object.fromEntries(t))}),e}_triggerWebAnimation(i,e,t){let o=this._convertKeyframesToObject(e);try{return i.animate(o,t)}catch{return null}}onStart(i){this._originalOnStartFns.push(i),this._onStartFns.push(i)}onDone(i){this._originalOnDoneFns.push(i),this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}play(){let i=this._buildPlayer();i&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),i.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}setPosition(i){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=i*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let i=new Map;this.hasStarted()&&this._finalKeyframe.forEach((t,o)=>{o!=="offset"&&i.set(o,this._finished?t:Bo(this.element,o))}),this.currentSnapshot=i}triggerCallback(i){let e=i==="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},Qo=class{validateStyleProperty(i){return!0}validateAnimatableStyleProperty(i){return!0}containsElement(i,e){return pa(i,e)}getParentElement(i){return Fo(i)}query(i,e,t){return fa(i,e,t)}computeStyle(i,e,t){return Bo(i,e)}animate(i,e,t,o,r,a=[]){let s=o==0?"both":"forwards",c={duration:t,delay:o,fill:s};r&&(c.easing=r);let d=new Map,u=a.filter(E=>E instanceof $o);_c(t,o)&&u.forEach(E=>{E.currentSnapshot.forEach((y,M)=>d.set(M,y))});let g=fc(e).map(E=>new Map(E));g=bc(i,g,d);let R=iu(i,g);return new $o(i,g,c,R)}};var Uo="@",Fc="@.disabled",Yo=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(i,e,t,o){this.namespaceId=i,this.delegate=e,this.engine=t,this._onDestroy=o}get data(){return this.delegate.data}destroyNode(i){this.delegate.destroyNode?.(i)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}appendChild(i,e){this.delegate.appendChild(i,e),this.engine.onInsert(this.namespaceId,e,i,!1)}insertBefore(i,e,t,o=!0){this.delegate.insertBefore(i,e,t),this.engine.onInsert(this.namespaceId,e,i,o)}removeChild(i,e,t,o){if(o){this.delegate.removeChild(i,e,t,o);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,o){this.delegate.setAttribute(i,e,t,o)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,o){this.delegate.setStyle(i,e,t,o)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){e.charAt(0)==Uo&&e==Fc?this.disableAnimations(i,!!t):this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,o){return this.delegate.listen(i,e,t,o)}disableAnimations(i,e){this.engine.disableAnimations(i,e)}},Fa=class extends Yo{factory;constructor(i,e,t,o,r){super(e,t,o,r),this.factory=i,this.namespaceId=e}setProperty(i,e,t){e.charAt(0)==Uo?e.charAt(1)=="."&&e==Fc?(t=t===void 0?!0:!!t,this.disableAnimations(i,t)):this.engine.process(this.namespaceId,i,e.slice(1),t):this.delegate.setProperty(i,e,t)}listen(i,e,t,o){if(e.charAt(0)==Uo){let r=ru(i),a=e.slice(1),s="";return a.charAt(0)!=Uo&&([a,s]=au(a)),this.engine.listen(this.namespaceId,r,a,s,c=>{let d=c._data||-1;this.factory.scheduleListenerCallback(d,t,c)})}return this.delegate.listen(i,e,t,o)}};function ru(n){switch(n){case"body":return document.body;case"document":return document;case"window":return window;default:return n}}function au(n){let i=n.indexOf("."),e=n.substring(0,i),t=n.slice(i+1);return[e,t]}var Zo=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(i,e,t){this.delegate=i,this.engine=e,this._zone=t,e.onRemovalComplete=(o,r)=>{r?.removeChild(null,o)}}createRenderer(i,e){let o=this.delegate.createRenderer(i,e);if(!i||!e?.data?.animation){let d=this._rendererCache,u=d.get(o);if(!u){let g=()=>d.delete(o);u=new Yo("",o,this.engine,g),d.set(o,u)}return u}let r=e.id,a=e.id+"-"+this._currentId;this._currentId++,this.engine.register(a,i);let s=d=>{Array.isArray(d)?d.forEach(s):this.engine.registerTrigger(r,a,i,d.name,d)};return e.data.animation.forEach(s),new Fa(this,a,o,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(i,e,t){if(i>=0&&i<this._microtaskId){this._zone.run(()=>e(t));return}let o=this._animationCallbacksBuffer;o.length==0&&queueMicrotask(()=>{this._zone.run(()=>{o.forEach(r=>{let[a,s]=r;a(s)}),this._animationCallbacksBuffer=[]})}),o.push([e,t])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(i){this.engine.flush(),this.delegate.componentReplaced?.(i)}};var lu=(()=>{class n extends Wi{constructor(e,t,o){super(e,t,o)}ngOnDestroy(){this.flush()}static \u0275fac=function(t){return new(t||n)(Ne(K),Ne(bi),Ne(vi))};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();function cu(){return new Wo}function du(){return new Zo(l(Fl),l(Wi),l(H))}var Lc=[{provide:vi,useFactory:cu},{provide:Wi,useClass:lu},{provide:He,useFactory:du}],mu=[{provide:bi,useClass:Na},{provide:pi,useValue:"NoopAnimations"},...Lc],Nc=[{provide:bi,useFactory:()=>new Qo},{provide:pi,useFactory:()=>"BrowserAnimations"},...Lc],Vc=(()=>{class n{static withConfig(e){return{ngModule:n,providers:e.disableAnimations?mu:Nc}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({providers:Nc,imports:[Io]})}return n})();var qc=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(X(be),X(P))};static \u0275dir=I({type:n})}return n})(),uu=(()=>{class n extends qc{static \u0275fac=(()=>{let e;return function(o){return(e||(e=at(n)))(o||n)}})();static \u0275dir=I({type:n,features:[re]})}return n})(),lr=new v("");var pu={provide:lr,useExisting:Ft(()=>ei),multi:!0};function fu(){let n=ra()?ra().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var gu=new v(""),ei=(()=>{class n extends qc{_compositionMode;_composing=!1;constructor(e,t,o){super(e,t),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!fu())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(X(be),X(P),X(gu,8))};static \u0275dir=I({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,o){t&1&&L("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},standalone:!1,features:[ae([pu]),re]})}return n})();function Ha(n){return n==null||Ua(n)===0}function Ua(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Fn=new v(""),Wa=new v(""),_u=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ve=class{static min(i){return bu(i)}static max(i){return vu(i)}static required(i){return yu(i)}static requiredTrue(i){return xu(i)}static email(i){return wu(i)}static minLength(i){return Cu(i)}static maxLength(i){return Su(i)}static pattern(i){return Mu(i)}static nullValidator(i){return Kc()}static compose(i){return Jc(i)}static composeAsync(i){return ed(i)}};function bu(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function vu(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function yu(n){return Ha(n.value)?{required:!0}:null}function xu(n){return n.value===!0?null:{required:!0}}function wu(n){return Ha(n.value)||_u.test(n.value)?null:{email:!0}}function Cu(n){return i=>{let e=i.value?.length??Ua(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function Su(n){return i=>{let e=i.value?.length??Ua(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function Mu(n){if(!n)return Kc;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(Ha(t.value))return null;let o=t.value;return i.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function Kc(n){return null}function Xc(n){return n!=null}function $c(n){return Sl(n)?ul(n):n}function Qc(n){let i={};return n.forEach(e=>{i=e!=null?A(A({},i),e):i}),Object.keys(i).length===0?null:i}function Yc(n,i){return i.map(e=>e(n))}function ku(n){return!n.validate}function Zc(n){return n.map(i=>ku(i)?i:e=>i.validate(e))}function Jc(n){if(!n)return null;let i=n.filter(Xc);return i.length==0?null:function(e){return Qc(Yc(e,i))}}function Ga(n){return n!=null?Jc(Zc(n)):null}function ed(n){if(!n)return null;let i=n.filter(Xc);return i.length==0?null:function(e){let t=Yc(e,i).map($c);return vo(t).pipe(De(Qc))}}function qa(n){return n!=null?ed(Zc(n)):null}function Bc(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function td(n){return n._rawValidators}function id(n){return n._rawAsyncValidators}function Va(n){return n?Array.isArray(n)?n:[n]:[]}function tr(n,i){return Array.isArray(n)?n.includes(i):n===i}function zc(n,i){let e=Va(i);return Va(n).forEach(o=>{tr(e,o)||e.push(o)}),e}function jc(n,i){return Va(i).filter(e=>!tr(n,e))}var ir=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Ga(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=qa(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Zt=class extends ir{name;get formDirective(){return null}get path(){return null}},Bt=class extends ir{_parent=null;name=null;valueAccessor=null},nr=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var $i=(()=>{class n extends nr{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(X(Bt,2))};static \u0275dir=I({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,o){t&2&&T("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[re]})}return n})(),Qi=(()=>{class n extends nr{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(X(Zt,10))};static \u0275dir=I({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,o){t&2&&T("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[re]})}return n})();var In="VALID",Jo="INVALID",Gi="PENDING",Tn="DISABLED",Jt=class{},or=class extends Jt{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Rn=class extends Jt{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},On=class extends Jt{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},qi=class extends Jt{status;source;constructor(i,e){super(),this.status=i,this.source=e}},rr=class extends Jt{source;constructor(i){super(),this.source=i}},Pn=class extends Jt{source;constructor(i){super(),this.source=i}};function Ka(n){return(cr(n)?n.validators:n)||null}function Du(n){return Array.isArray(n)?Ga(n):n||null}function Xa(n,i){return(cr(i)?i.asyncValidators:n)||null}function Eu(n){return Array.isArray(n)?qa(n):n||null}function cr(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function nd(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new J(1e3,"");if(!t[e])throw new J(1001,"")}function od(n,i,e){n._forEachChild((t,o)=>{if(e[o]===void 0)throw new J(-1002,"")})}var Ki=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return St(this.statusReactive)}set status(i){St(()=>this.statusReactive.set(i))}_status=Mt(()=>this.statusReactive());statusReactive=me(void 0);get valid(){return this.status===In}get invalid(){return this.status===Jo}get pending(){return this.status===Gi}get disabled(){return this.status===Tn}get enabled(){return this.status!==Tn}errors;get pristine(){return St(this.pristineReactive)}set pristine(i){St(()=>this.pristineReactive.set(i))}_pristine=Mt(()=>this.pristineReactive());pristineReactive=me(!0);get dirty(){return!this.pristine}get touched(){return St(this.touchedReactive)}set touched(i){St(()=>this.touchedReactive.set(i))}_touched=Mt(()=>this.touchedReactive());touchedReactive=me(!1);get untouched(){return!this.touched}_events=new k;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(zc(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(zc(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(jc(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(jc(i,this._rawAsyncValidators))}hasValidator(i){return tr(this._rawValidators,i)}hasAsyncValidator(i){return tr(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(Re(A({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new On(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new On(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(Re(A({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Rn(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new Rn(!0,t))}markAsPending(i={}){this.status=Gi;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new qi(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(Re(A({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Tn,this.errors=null,this._forEachChild(o=>{o.disable(Re(A({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new or(this.value,t)),this._events.next(new qi(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Re(A({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=In,this._forEachChild(t=>{t.enable(Re(A({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(Re(A({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===In||this.status===Gi)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new or(this.value,e)),this._events.next(new qi(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(Re(A({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Tn:In}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Gi,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=$c(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,o)=>t&&t._find(o),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new qi(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new G,this.statusChanges=new G}_calculateStatus(){return this._allControlsDisabled()?Tn:this.errors?Jo:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Gi)?Gi:this._anyControlsHaveStatus(Jo)?Jo:In}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),o=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),o&&this._events.next(new Rn(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new On(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){cr(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Du(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Eu(this._rawAsyncValidators)}},Xi=class extends Ki{constructor(i,e,t){super(Ka(e),Xa(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){od(this,!0,i),Object.keys(i).forEach(t=>{nd(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let o=this.controls[t];o&&o.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,o)=>{t.reset(i?i[o]:null,Re(A({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Pn(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,o)=>((t.enabled||this.disabled)&&(e[o]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((o,r)=>{t=e(t,o,r)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Ba=class extends Xi{};var dr=new v("",{factory:()=>mr}),mr="always";function Iu(n,i){return[...i.path,n]}function za(n,i,e=mr){$a(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),Au(n,i),Ou(n,i),Ru(n,i),Tu(n,i)}function Hc(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),sr(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function ar(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Tu(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function $a(n,i){let e=td(n);i.validator!==null?n.setValidators(Bc(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=id(n);i.asyncValidator!==null?n.setAsyncValidators(Bc(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let o=()=>n.updateValueAndValidity();ar(i._rawValidators,o),ar(i._rawAsyncValidators,o)}function sr(n,i){let e=!1;if(n!==null){if(i.validator!==null){let o=td(n);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==i.validator);r.length!==o.length&&(e=!0,n.setValidators(r))}}if(i.asyncValidator!==null){let o=id(n);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==i.asyncValidator);r.length!==o.length&&(e=!0,n.setAsyncValidators(r))}}}let t=()=>{};return ar(i._rawValidators,t),ar(i._rawAsyncValidators,t),e}function Au(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&rd(n,i)})}function Ru(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&rd(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function rd(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ou(n,i){let e=(t,o)=>{i.valueAccessor.writeValue(t),o&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function ad(n,i){n==null,$a(n,i)}function Pu(n,i){return sr(n,i)}function Fu(n,i){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Nu(n){return Object.getPrototypeOf(n.constructor)===uu}function sd(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Lu(n,i){if(!i)return null;Array.isArray(i);let e,t,o;return i.forEach(r=>{r.constructor===ei?e=r:Nu(r)?t=r:o=r}),o||t||e||null}function Vu(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var Bu={provide:Zt,useExisting:Ft(()=>Nn)},An=Promise.resolve(),Nn=(()=>{class n extends Zt{callSetDisabledState;get submitted(){return St(this.submittedReactive)}_submitted=Mt(()=>this.submittedReactive());submittedReactive=me(!1);_directives=new Set;form;ngSubmit=new G;options;constructor(e,t,o){super(),this.callSetDisabledState=o,this.form=new Xi({},Ga(e),qa(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){An.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),za(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){An.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){An.then(()=>{let t=this._findContainer(e.path),o=new Xi({});ad(o,e),t.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){An.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){An.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),sd(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new rr(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(X(Fn,10),X(Wa,10),X(dr,8))};static \u0275dir=I({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,o){t&1&&L("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ae([Bu]),re]})}return n})();function Uc(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function Wc(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var er=class extends Ki{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(Ka(e),Xa(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),cr(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Wc(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Pn(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Uc(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Uc(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Wc(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var zu=n=>n instanceof er;var Yi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var ja=class extends Ki{constructor(i,e,t){super(Ka(e),Xa(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,t={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(i,e={}){let t=this._adjustIndex(i);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,t={}){let o=this._adjustIndex(i);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),e&&(this.controls.splice(o,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){od(this,!1,i),i.forEach((t,o)=>{nd(this,!1,o),this.at(o).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((t,o)=>{this.at(o)&&this.at(o).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((t,o)=>{t.reset(i[o],Re(A({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Pn(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,t)=>{i(e,t)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var ju=(()=>{class n extends Zt{callSetDisabledState;get submitted(){return St(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Mt(()=>this._submittedReactive());_submittedReactive=me(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(sr(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return za(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Hc(e.control||null,e,!1),Vu(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,sd(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new rr(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,o=this.form.get(e.path);t!==o&&(Hc(t||null,e),zu(o)&&(za(o,e,this.callSetDisabledState),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);ad(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Pu(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){$a(this.form,this),this._oldForm&&sr(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(X(Fn,10),X(Wa,10),X(dr,8))};static \u0275dir=I({type:n,features:[re,ye]})}return n})();var ld=new v("");var Hu={provide:Bt,useExisting:Ft(()=>yi)},yi=(()=>{class n extends Bt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new G;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,o,r,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(o),this.valueAccessor=Lu(this,r)}ngOnChanges(e){this._added||this._setUpControl(),Fu(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Iu(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||n)(X(Zt,13),X(Fn,10),X(Wa,10),X(lr,10),X(ld,8))};static \u0275dir=I({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[ae([Hu]),re,ye]})}return n})();var Uu={provide:Zt,useExisting:Ft(()=>ft)},ft=(()=>{class n extends ju{form=null;ngSubmit=new G;get control(){return this.form}static \u0275fac=(()=>{let e;return function(o){return(e||(e=at(n)))(o||n)}})();static \u0275dir=I({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,o){t&1&&L("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ae([Uu]),re]})}return n})();var cd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({})}return n})();function Gc(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var Zi=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let o=this._reduceControls(e),r={};return Gc(t)?r=t:t!==null&&(r.validators=t.validator,r.asyncValidators=t.asyncValidator),new Xi(o,r)}record(e,t=null){let o=this._reduceControls(e);return new Ba(o,t)}control(e,t,o){let r={};return this.useNonNullable?(Gc(t)?r=t:(r.validators=t,r.asyncValidators=o),new er(e,Re(A({},r),{nonNullable:!0}))):new er(e,t,o)}array(e,t,o){let r=e.map(a=>this._createControl(a));return new ja(r,t,o)}_reduceControls(e){let t={};return Object.keys(e).forEach(o=>{t[o]=this._createControl(e[o])}),t}_createControl(e){if(e instanceof er)return e;if(e instanceof Ki)return e;if(Array.isArray(e)){let t=e[0],o=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(t,o,r)}else return this.control(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Qa=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:dr,useValue:e.callSetDisabledState??mr}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[cd]})}return n})(),Ln=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:ld,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:dr,useValue:e.callSetDisabledState??mr}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[cd]})}return n})();var Za;try{Za=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Za=!1}var ee=(()=>{class n{_platformId=l(wl);isBrowser=this._platformId?Pl(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Za)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var xi;function dd(){if(xi==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return xi=!1,xi;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)xi=!0;else{let n=Element.prototype.scrollTo;n?xi=!/\{\s*\[native code\]\s*\}/.test(n.toString()):xi=!1}}return xi}var Ja;function md(){if(Ja==null){let n=typeof document<"u"?document.head:null;Ja=!!(n&&(n.createShadowRoot||n.attachShadow))}return Ja}function es(n){if(md()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Vn(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function Pe(n){return n.composedPath?n.composedPath()[0]:n.target}function ts(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Bn;function hd(){if(Bn==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Bn=!0}))}finally{Bn=Bn||!1}return Bn}function Ji(n){return hd()?n:!!n.capture}var en,ud=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function is(){if(en)return en;if(typeof document!="object"||!document)return en=new Set(ud),en;let n=document.createElement("input");return en=new Set(ud.filter(i=>(n.setAttribute("type",i),n.type===i))),en}var Wu=new v("cdk-dir-doc",{providedIn:"root",factory:()=>l(K)}),Gu=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function pd(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?Gu.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Be=(()=>{class n{get value(){return this.valueSignal()}valueSignal=me("ltr");change=new G;constructor(){let e=l(Wu,{optional:!0});if(e){let t=e.body?e.body.dir:null,o=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(pd(t||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var N=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({})}return n})();var qu=["*",[["mat-toolbar-row"]]],Ku=["*","mat-toolbar-row"],Xu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),fd=(()=>{class n{_elementRef=l(P);_platform=l(ee);_document=l(K);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,o,r){if(t&1&&Ze(r,Xu,5),t&2){let a;U(a=W())&&(o._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,o){t&2&&(Ie(o.color?"mat-"+o.color:""),T("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Ku,decls:2,vars:0,template:function(t,o){t&1&&(oe(qu),j(0),j(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var zn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[N]})}return n})();var hr=new WeakMap,we=(()=>{class n{_appRef;_injector=l(Y);_environmentInjector=l(Pi);load(e){let t=this._appRef=this._appRef||this._injector.get(Ni),o=hr.get(t);o||(o={loaders:new Set,refs:[]},hr.set(t,o),t.onDestroy(()=>{hr.get(t)?.refs.forEach(r=>r.destroy()),hr.delete(t)})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push(Do(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var tn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),ur;function Qu(){if(ur===void 0&&(ur=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(ur=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return ur}function wi(n){return Qu()?.createHTML(n)||n}function gd(n,i,e){let t=e.sanitize(Xt.HTML,i);n.innerHTML=wi(t||"")}function _d(n){return Error(`Unable to find icon with the name "${n}"`)}function Zu(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function bd(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function vd(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var zt=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},xd=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,o,r){this._httpClient=e,this._sanitizer=t,this._errorHandler=r,this._document=o}addSvgIcon(e,t,o){return this.addSvgIconInNamespace("",e,t,o)}addSvgIconLiteral(e,t,o){return this.addSvgIconLiteralInNamespace("",e,t,o)}addSvgIconInNamespace(e,t,o,r){return this._addSvgIconConfig(e,t,new zt(o,null,r))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,o,r){let a=this._sanitizer.sanitize(Xt.HTML,o);if(!a)throw vd(o);let s=wi(a);return this._addSvgIconConfig(e,t,new zt("",s,r))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,o){return this._addSvgIconSetConfig(e,new zt(t,null,o))}addSvgIconSetLiteralInNamespace(e,t,o){let r=this._sanitizer.sanitize(Xt.HTML,t);if(!r)throw vd(t);let a=wi(r);return this._addSvgIconSetConfig(e,new zt("",a,o))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Xt.RESOURCE_URL,e);if(!t)throw bd(e);let o=this._cachedIconsByUrl.get(t);return o?nt(pr(o)):this._loadSvgIconFromConfig(new zt(e,null)).pipe(Kt(r=>this._cachedIconsByUrl.set(t,r)),De(r=>pr(r)))}getNamedSvgIcon(e,t=""){let o=yd(t,e),r=this._svgIconConfigs.get(o);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(t,e),r)return this._svgIconConfigs.set(o,r),this._getSvgFromConfig(r);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):pl(_d(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?nt(pr(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(De(t=>pr(t)))}_getSvgFromIconSetConfigs(e,t){let o=this._extractIconWithNameFromAnySet(e,t);if(o)return nt(o);let r=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(_l(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Xt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),nt(null)})));return vo(r).pipe(De(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw _d(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let o=t.length-1;o>=0;o--){let r=t[o];if(r.svgText&&r.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(r),s=this._extractSvgIconFromSet(a,e,r.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Kt(t=>e.svgText=t),De(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?nt(null):this._fetchIcon(e).pipe(Kt(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,o){let r=e.querySelector(`[id="${t}"]`);if(!r)return null;let a=r.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,o);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),o);let s=this._svgElementFromString(wi("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,o)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let o=t.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(e){let t=this._svgElementFromString(wi("<svg></svg>")),o=e.attributes;for(let r=0;r<o.length;r++){let{name:a,value:s}=o[r];a!=="id"&&t.setAttribute(a,s)}for(let r=0;r<e.childNodes.length;r++)e.childNodes[r].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[r].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:o}=e,r=o?.withCredentials??!1;if(!this._httpClient)throw Zu();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(Xt.RESOURCE_URL,t);if(!a)throw bd(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:r}).pipe(De(d=>wi(d)),bl(()=>this._inProgressUrlFetches.delete(a)),vl());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,t,o){return this._svgIconConfigs.set(yd(e,t),o),this}_addSvgIconSetConfig(e,t){let o=this._iconSetConfigs.get(e);return o?o.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let o=0;o<this._resolvers.length;o++){let r=this._resolvers[o](t,e);if(r)return Ju(r)?new zt(r.url,null,r.options):new zt(r,null)}}static \u0275fac=function(t){return new(t||n)(Ne(To,8),Ne(Ao),Ne(K,8),Ne(So))};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function pr(n){return n.cloneNode(!0)}function yd(n,i){return n+":"+i}function Ju(n){return!!(n.url&&n.options)}var ep=["*"],tp=new v("MAT_ICON_DEFAULT_OPTIONS"),ip=new v("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(K),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),wd=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],np=wd.map(n=>`[${n}]`).join(", "),op=/^url\(['"]?#(.*?)['"]?\)$/,ti=(()=>{class n{_elementRef=l(P);_iconRegistry=l(xd);_location=l(ip);_errorHandler=l(So);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ke.EMPTY;constructor(){let e=l(new $t("aria-hidden"),{optional:!0}),t=l(tp,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let o=e.childNodes[t];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>e.classList.remove(o)),t.forEach(o=>e.classList.add(o)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((o,r)=>{o.forEach(a=>{r.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(np),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<t.length;r++)wd.forEach(a=>{let s=t[r],c=s.getAttribute(a),d=c?c.match(op):null;if(d){let u=o.get(s);u||(u=[],o.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,o]=this._splitIconName(e);t&&(this._svgNamespace=t),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,t).pipe(We(1)).subscribe(r=>this._setSvgElement(r),r=>{let a=`Error retrieving icon ${t}:${o}! ${r.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,o){t&2&&(z("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),Ie(o.color?"mat-"+o.color:""),T("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",V],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:ep,decls:1,vars:0,template:function(t,o){t&1&&(oe(),j(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),jn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[N]})}return n})();function Hn(n){return n.buttons===0||n.detail===0}function Un(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}function jt(n,i=0){return Cd(n)?Number(n):arguments.length===2?i:0}function Cd(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function et(n){return n instanceof P?n.nativeElement:n}var Sd=new v("cdk-input-modality-detector-options"),Md={ignoreKeys:[18,17,224,91,16]},kd=650,ns={passive:!0,capture:!0},Dd=(()=>{class n{_platform=l(ee);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new _o(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Pe(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<kd||(this._modality.next(Hn(e)?"keyboard":"mouse"),this._mostRecentTarget=Pe(e))};_onTouchstart=e=>{if(Un(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Pe(e)};constructor(){let e=l(H),t=l(K),o=l(Sd,{optional:!0});if(this._options=A(A({},Md),o),this.modalityDetected=this._modality.pipe(xo(1)),this.modalityChanged=this.modalityDetected.pipe(Yr()),this._platform.isBrowser){let r=l(He).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,ns),r.listen(t,"mousedown",this._onMousedown,ns),r.listen(t,"touchstart",this._onTouchstart,ns)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Wn=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Wn||{}),Ed=new v("cdk-focus-monitor-default-options"),gr=Ji({passive:!0,capture:!0}),gt=(()=>{class n{_ngZone=l(H);_platform=l(ee);_inputModalityDetector=l(Dd);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(K);_stopInputModalityDetector=new k;constructor(){let e=l(Ed,{optional:!0});this._detectionMode=e?.detectionMode||Wn.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Pe(e);for(let o=t;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,t=!1){let o=et(e);if(!this._platform.isBrowser||o.nodeType!==1)return nt();let r=es(o)||this._document,a=this._elementInfo.get(o);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new k,rootNode:r};return this._elementInfo.set(o,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=et(e),o=this._elementInfo.get(t);o&&(o.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(o))}focusVia(e,t,o){let r=et(e),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([s,c])=>this._originChanged(s,t,c)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Wn.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Wn.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?kd:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,t){let o=this._elementInfo.get(t),r=Pe(e);!o||!o.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),o)}_onBlur(e,t){let o=this._elementInfo.get(t);!o||o.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(o,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,o=this._rootNodeFocusListenerCount.get(t)||0;o||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,gr),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,gr)}),this._rootNodeFocusListenerCount.set(t,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(le(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let o=this._rootNodeFocusListenerCount.get(t);o>1?this._rootNodeFocusListenerCount.set(t,o-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,gr),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,gr),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,o){this._setClasses(e,t),this._emitOrigin(o,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((o,r)=>{(r===e||o.checkChildren&&r.contains(e))&&t.push([r,o])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function nn(n){return Array.isArray(n)?n:[n]}var Id=new Set,Ci,on=(()=>{class n{_platform=l(ee);_nonce=l(Cl,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ap}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&rp(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function rp(n,i){if(!Id.has(n))try{Ci||(Ci=document.createElement("style"),i&&Ci.setAttribute("nonce",i),Ci.setAttribute("type","text/css"),document.head.appendChild(Ci)),Ci.sheet&&(Ci.sheet.insertRule(`@media ${n} {body{ }}`,0),Id.add(n))}catch(e){console.error(e)}}function ap(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Gn=(()=>{class n{_mediaMatcher=l(on);_zone=l(H);_queries=new Map;_destroySubject=new k;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Td(nn(e)).some(o=>this._registerQuery(o).mql.matches)}observe(e){let o=Td(nn(e)).map(a=>this._registerQuery(a).observable),r=fl(o);return r=gl(r.pipe(We(1)),r.pipe(xo(1),yo(0))),r.pipe(De(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:d})=>{s.matches=s.matches||c,s.breakpoints[d]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),r={observable:new Ri(a=>{let s=c=>this._zone.run(()=>a.next(c));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(je(t),De(({matches:a})=>({query:e,matches:a})),le(this._destroySubject)),mql:t};return this._queries.set(e,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Td(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var sp=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var _r=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({providers:[sp]})}return n})();var as=(()=>{class n{_platform=l(ee);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return cp(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=lp(_p(e));if(t&&(Ad(t)===-1||!this.isVisible(t)))return!1;let o=e.nodeName.toLowerCase(),r=Ad(e);return e.hasAttribute("contenteditable")?r!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!fp(e)?!1:o==="audio"?e.hasAttribute("controls")?r!==-1:!1:o==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return gp(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function lp(n){try{return n.frameElement}catch{return null}}function cp(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function dp(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function mp(n){return up(n)&&n.type=="hidden"}function hp(n){return pp(n)&&n.hasAttribute("href")}function up(n){return n.nodeName.toLowerCase()=="input"}function pp(n){return n.nodeName.toLowerCase()=="a"}function Pd(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function Ad(n){if(!Pd(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function fp(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function gp(n){return mp(n)?!1:dp(n)||hp(n)||n.hasAttribute("contenteditable")||Pd(n)}function _p(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var rs=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,o,r=!1,a){this._element=i,this._checker=e,this._ngZone=t,this._document=o,this._injector=a,r||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let o=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(o)return o}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let o=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(o)return o}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?Le(i,{injector:this._injector}):setTimeout(i)}},ss=(()=>{class n{_checker=l(as);_ngZone=l(H);_document=l(K);_injector=l(Y);constructor(){l(we).load(tn)}create(e,t=!1){return new rs(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Fd=new v("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Nd=new v("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),bp=0,qn=(()=>{class n{_ngZone=l(H);_defaultOptions=l(Nd,{optional:!0});_liveElement;_document=l(K);_sanitizer=l(Ao);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=l(Fd,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let o=this._defaultOptions,r,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[r,a]=t,this.clear(),clearTimeout(this._previousTimeout),r||(r=o&&o.politeness?o.politeness:"polite"),a==null&&o&&(a=o.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:gd(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),o=this._document.createElement("div");for(let r=0;r<t.length;r++)t[r].remove();return o.classList.add(e),o.classList.add("cdk-visually-hidden"),o.setAttribute("aria-atomic","true"),o.setAttribute("aria-live","polite"),o.id=`cdk-live-announcer-${bp++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<t.length;o++){let r=t[o],a=r.getAttribute("aria-owns");a?a.indexOf(e)===-1&&r.setAttribute("aria-owns",a+" "+e):r.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ii=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(ii||{}),Rd="cdk-high-contrast-black-on-white",Od="cdk-high-contrast-white-on-black",os="cdk-high-contrast-active",Ld=(()=>{class n{_platform=l(ee);_hasCheckedHighContrastMode=!1;_document=l(K);_breakpointSubscription;constructor(){this._breakpointSubscription=l(Gn).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return ii.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,o=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return ii.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return ii.BLACK_ON_WHITE}return ii.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(os,Rd,Od),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===ii.BLACK_ON_WHITE?e.add(os,Rd):t===ii.WHITE_ON_BLACK&&e.add(os,Od)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Kn=(()=>{class n{constructor(){l(Ld)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[_r]})}return n})();var vp=200,br=class{_letterKeyStream=new k;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new k;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:vp;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Kt(e=>this._pressedLetters.push(e)),yo(i),fe(()=>this._pressedLetters.length>0),De(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let o=(this._selectedItemIndex+t)%this._items.length,r=this._items[o];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function Te(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var rn=class{_items;_activeItemIndex=me(-1);_activeItem=me(null);_wrap=!1;_typeaheadSubscription=ke.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Fi?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):fi(i)&&(this._effectRef=ui(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new k;change=new k;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new br(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!i[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break}else return;default:(o||Te(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),o=e[t];this._activeItem.set(o??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let o=(this._activeItemIndex()+i*t+e.length)%e.length,r=e[o];if(!this._skipPredicateFn(r)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return fi(this._items)?this._items():this._items instanceof Fi?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Xn=class extends rn{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var $n=class extends rn{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var ds={},se=class n{_appId=l(Mo);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),ds.hasOwnProperty(i)||(ds[i]=0),`${i}${e?n._infix+"-":""}${ds[i]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};var Hd=" ";function us(n,i,e){let t=yr(n,i);e=e.trim(),!t.some(o=>o.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(Hd)))}function xr(n,i,e){let t=yr(n,i);e=e.trim();let o=t.filter(r=>r!==e);o.length?n.setAttribute(i,o.join(Hd)):n.removeAttribute(i)}function yr(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var Ud="cdk-describedby-message",vr="cdk-describedby-host",hs=0,Wd=(()=>{class n{_platform=l(ee);_document=l(K);_messageRegistry=new Map;_messagesContainer=null;_id=`${hs++}`;constructor(){l(we).load(tn),this._id=l(Mo)+"-"+hs++}describe(e,t,o){if(!this._canBeDescribed(e,t))return;let r=ms(t,o);typeof t!="string"?(jd(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,o),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,t,o){if(!t||!this._isElementNode(e))return;let r=ms(t,o);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t=="string"){let a=this._messageRegistry.get(r);a&&a.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${vr}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(vr);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let o=this._document.createElement("div");jd(o,this._id),o.textContent=e,t&&o.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(ms(e,t),{messageElement:o,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();let o=this._document.createElement("div");o.style.visibility="hidden",o.classList.add(e),o.classList.add("cdk-visually-hidden"),this._platform.isBrowser||o.setAttribute("platform","server"),this._document.body.appendChild(o),this._messagesContainer=o}_removeCdkDescribedByReferenceIds(e){let t=yr(e,"aria-describedby").filter(o=>o.indexOf(Ud)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let o=this._messageRegistry.get(t);us(e,"aria-describedby",o.messageElement.id),e.setAttribute(vr,this._id),o.referenceCount++}_removeMessageReference(e,t){let o=this._messageRegistry.get(t);o.referenceCount--,xr(e,"aria-describedby",o.messageElement.id),e.removeAttribute(vr)}_isElementDescribedByMessage(e,t){let o=yr(e,"aria-describedby"),r=this._messageRegistry.get(t),a=r&&r.messageElement.id;return!!a&&o.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let o=t==null?"":`${t}`.trim(),r=e.getAttribute("aria-label");return o?!r||r.trim()!==o:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ms(n,i){return typeof n=="string"?`${i||""}/${n}`:n}function jd(n,i){n.id||(n.id=`${Ud}-${i}-${hs++}`)}function xe(n){return n==null?"":typeof n=="string"?n:`${n}px`}function Ht(n){return n!=null&&`${n}`!="false"}var ps=class{_box;_destroyed=new k;_resizeSubject=new k;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new Ri(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(fe(e=>e.some(t=>t.target===i)),Jr({bufferSize:1,refCount:!0}),le(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Gd=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=l(H);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let o=t?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new ps(o)),this._observers.get(o).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var qd={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var yp=new v("MATERIAL_ANIMATIONS"),Kd=null;function fs(){return l(yp,{optional:!0})?.animationsDisabled||l(pi,{optional:!0})==="NoopAnimations"?"di-disabled":(Kd??=l(on).matchMedia("(prefers-reduced-motion)").matches,Kd?"reduced-motion":"enabled")}function de(){return fs()!=="enabled"}var xp=["notch"],wp=["matFormFieldNotchedOutline",""],Cp=["*"],Xd=["iconPrefixContainer"],$d=["textPrefixContainer"],Qd=["iconSuffixContainer"],Yd=["textSuffixContainer"],Sp=["textField"],Mp=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],kp=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Dp(n,i){n&1&&F(0,"span",21)}function Ep(n,i){if(n&1&&(m(0,"label",20),j(1,1),$(2,Dp,1,0,"span",21),h()),n&2){let e=q(2);w("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),z("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),Q(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Ip(n,i){if(n&1&&$(0,Ep,3,5,"label",20),n&2){let e=q();Q(e._hasFloatingLabel()?0:-1)}}function Tp(n,i){n&1&&F(0,"div",7)}function Ap(n,i){}function Rp(n,i){if(n&1&&te(0,Ap,0,0,"ng-template",13),n&2){q(2);let e=Je(1);w("ngTemplateOutlet",e)}}function Op(n,i){if(n&1&&(m(0,"div",9),$(1,Rp,1,1,null,13),h()),n&2){let e=q();w("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),Q(e._forceDisplayInfixLabel()?-1:1)}}function Pp(n,i){n&1&&(m(0,"div",10,2),j(2,2),h())}function Fp(n,i){n&1&&(m(0,"div",11,3),j(2,3),h())}function Np(n,i){}function Lp(n,i){if(n&1&&te(0,Np,0,0,"ng-template",13),n&2){q();let e=Je(1);w("ngTemplateOutlet",e)}}function Vp(n,i){n&1&&(m(0,"div",14,4),j(2,4),h())}function Bp(n,i){n&1&&(m(0,"div",15,5),j(2,5),h())}function zp(n,i){n&1&&F(0,"div",16)}function jp(n,i){n&1&&(m(0,"div",18),j(1,6),h())}function Hp(n,i){if(n&1&&(m(0,"mat-hint",22),f(1),h()),n&2){let e=q(2);w("id",e._hintLabelId),p(),ue(e.hintLabel)}}function Up(n,i){if(n&1&&(m(0,"div",19),$(1,Hp,2,2,"mat-hint",22),j(2,7),F(3,"div",23),j(4,8),h()),n&2){let e=q();p(),Q(e.hintLabel?1:-1)}}var Ut=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["mat-label"]]})}return n})(),om=new v("MatError"),Si=(()=>{class n{id=l(se).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,o){t&2&&Ye("id",o.id)},inputs:{id:"id"},features:[ae([{provide:om,useExisting:n}])]})}return n})(),gs=(()=>{class n{align="start";id=l(se).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,o){t&2&&(Ye("id",o.id),z("align",null),T("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),rm=new v("MatPrefix"),Mi=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[ae([{provide:rm,useExisting:n}])]})}return n})(),am=new v("MatSuffix"),Qn=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[ae([{provide:am,useExisting:n}])]})}return n})(),sm=new v("FloatingLabelParent"),Zd=(()=>{class n{_elementRef=l(P);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(Gd);_ngZone=l(H);_parent=l(sm);_resizeSubscription=new ke;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Wp(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,o){t&2&&T("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function Wp(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Jd="mdc-line-ripple--active",wr="mdc-line-ripple--deactivating",em=(()=>{class n{_elementRef=l(P);_cleanupTransitionEnd;constructor(){let e=l(H),t=l(be);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(wr),e.add(Jd)}deactivate(){this._elementRef.nativeElement.classList.add(wr)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,o=t.contains(wr);e.propertyName==="opacity"&&o&&t.remove(Jd,wr)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),tm=(()=>{class n{_elementRef=l(P);_ngZone=l(H);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,o){if(t&1&&he(xp,5),t&2){let r;U(r=W())&&(o._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,o){t&2&&T("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:wp,ngContentSelectors:Cp,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,o){t&1&&(oe(),Ge(0,"div",1),Ee(1,"div",2,0),j(3),Ve(),Ge(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),Yn=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n})}return n})();var Zn=new v("MatFormField"),Gp=new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),im="fill",qp="auto",nm="fixed",Kp="translateY(-50%)",Dt=(()=>{class n{_elementRef=l(P);_changeDetectorRef=l(ce);_platform=l(ee);_idGenerator=l(se);_ngZone=l(H);_defaults=l(Gp,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=yn("iconPrefixContainer");_textPrefixContainerSignal=yn("textPrefixContainer");_iconSuffixContainerSignal=yn("iconSuffixContainer");_textSuffixContainerSignal=yn("textSuffixContainer");_prefixSuffixContainers=Mt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Tl(Ut);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Ht(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||qp}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||im;this._appearanceSignal.set(t)}_appearanceSignal=me(im);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||nm}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||nm}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new k;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=de();constructor(){let e=this._defaults,t=l(Be);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ui(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Mt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,o="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(o+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(o+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(je([void 0,void 0]),De(()=>[t.errorState,t.userAriaDescribedBy]),Zr(),fe(([[r,a],[s,c]])=>r!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(le(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),wt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Al({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Mt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,o;if(t){let r=this._describedByIds||e;o=e.concat(t.filter(a=>a&&!r.includes(a)))}else o=e;this._control.setDescribedByIds(o),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=r?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",g=`${a+s}px`,E=`calc(${u} * (${g} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,y=`var(--mat-mdc-form-field-label-transform, ${Kp} translateX(${E}))`,M=a+s+c+d;return[y,M]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,o]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,o,r){if(t&1&&(El(r,o._labelChild,Ut,5),Ze(r,Yn,5)(r,rm,5)(r,am,5)(r,om,5)(r,gs,5)),t&2){oa();let a;U(a=W())&&(o._formFieldControl=a.first),U(a=W())&&(o._prefixChildren=a),U(a=W())&&(o._suffixChildren=a),U(a=W())&&(o._errorChildren=a),U(a=W())&&(o._hintChildren=a)}},viewQuery:function(t,o){if(t&1&&(Il(o._iconPrefixContainerSignal,Xd,5)(o._textPrefixContainerSignal,$d,5)(o._iconSuffixContainerSignal,Qd,5)(o._textSuffixContainerSignal,Yd,5),he(Sp,5)(Xd,5)($d,5)(Qd,5)(Yd,5)(Zd,5)(tm,5)(em,5)),t&2){oa(4);let r;U(r=W())&&(o._textField=r.first),U(r=W())&&(o._iconPrefixContainer=r.first),U(r=W())&&(o._textPrefixContainer=r.first),U(r=W())&&(o._iconSuffixContainer=r.first),U(r=W())&&(o._textSuffixContainer=r.first),U(r=W())&&(o._floatingLabel=r.first),U(r=W())&&(o._notchedOutline=r.first),U(r=W())&&(o._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,o){t&2&&T("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ae([{provide:Zn,useExisting:n},{provide:sm,useExisting:n}])],ngContentSelectors:kp,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,o){if(t&1&&(oe(Mp),te(0,Ip,1,1,"ng-template",null,0,ko),m(2,"div",6,1),L("click",function(a){return o._control.onContainerClick(a)}),$(4,Tp,1,0,"div",7),m(5,"div",8),$(6,Op,2,2,"div",9),$(7,Pp,3,0,"div",10),$(8,Fp,3,0,"div",11),m(9,"div",12),$(10,Lp,1,1,null,13),j(11),h(),$(12,Vp,3,0,"div",14),$(13,Bp,3,0,"div",15),h(),$(14,zp,1,0,"div",16),h(),m(15,"div",17),$(16,jp,2,0,"div",18)(17,Up,5,1,"div",19),h()),t&2){let r;p(2),T("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),p(2),Q(!o._hasOutline()&&!o._control.disabled?4:-1),p(2),Q(o._hasOutline()?6:-1),p(),Q(o._hasIconPrefix?7:-1),p(),Q(o._hasTextPrefix?8:-1),p(2),Q(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),p(2),Q(o._hasTextSuffix?12:-1),p(),Q(o._hasIconSuffix?13:-1),p(),Q(o._hasOutline()?-1:14),p(),T("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let a=o._getSubscriptMessageType();p(),Q((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[Zd,tm,Eo,em,gs],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var Et=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[_r,Dt,N]})}return n})();var Xp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return n})(),$p={passive:!0},lm=(()=>{class n{_platform=l(ee);_ngZone=l(H);_renderer=l(He).createRenderer(null,null);_styleLoader=l(we);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return bo;this._styleLoader.load(Xp);let t=et(e),o=this._monitoredElements.get(t);if(o)return o.subject;let r=new k,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>r.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>r.next({target:d.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,$p)));return this._monitoredElements.set(t,{subject:r,unlisten:c}),r}stopMonitoring(e){let t=et(e),o=this._monitoredElements.get(t);o&&(o.unlisten(),o.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var cm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({})}return n})();var dm=new v("MAT_INPUT_VALUE_ACCESSOR");var an=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var sn=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,t,o,r){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=t,this._parentForm=o,this._stateChanges=r}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,r=t?.isErrorState(o,e)??!1;r!==i&&(this.errorState=r,this._stateChanges.next())}};var Qp=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Yp=new v("MAT_INPUT_CONFIG"),ln=(()=>{class n{_elementRef=l(P);_platform=l(ee);ngControl=l(Bt,{optional:!0,self:!0});_autofillMonitor=l(lm);_ngZone=l(H);_formField=l(Zn,{optional:!0});_renderer=l(be);_uid=l(se).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(Yp,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new k;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Ht(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ve.required)??!1}set required(e){this._required=Ht(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&is().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Ht(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>is().has(e));constructor(){let e=l(Nn,{optional:!0}),t=l(ft,{optional:!0}),o=l(an),r=l(dm,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();r?fi(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new sn(o,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ui(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Qp.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,o){t&1&&L("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),t&2&&(Ye("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),z("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),T("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",V]},exportAs:["matInput"],features:[ae([{provide:Yn,useExisting:n}]),ye]})}return n})(),Jn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[Et,Et,cm,N]})}return n})();var ct=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(ct||{}),vs=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ct.HIDDEN;constructor(i,e,t,o=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},mm=Ji({passive:!0,capture:!0}),ys=class{_events=new Map;addHandler(i,e,t,o){let r=this._events.get(e);if(r){let a=r.get(t);a?a.add(o):r.set(t,new Set([o]))}else this._events.set(e,new Map([[t,new Set([o])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,mm)})}removeHandler(i,e,t){let o=this._events.get(i);if(!o)return;let r=o.get(e);r&&(r.delete(t),r.size===0&&o.delete(e),o.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,mm)))}_delegateEventHandler=i=>{let e=Pe(i);e&&this._events.get(i.type)?.forEach((t,o)=>{(o===e||o.contains(e))&&t.forEach(r=>r.handleEvent(i))})}},eo={enterDuration:225,exitDuration:150},Zp=800,hm=Ji({passive:!0,capture:!0}),um=["mousedown","touchstart"],pm=["mouseup","mouseleave","touchend","touchcancel"],Jp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),to=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ys;constructor(i,e,t,o,r){this._target=i,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=et(t)),r&&r.get(we).load(Jp)}fadeInRipple(i,e,t={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=A(A({},eo),t.animation);t.centered&&(i=o.left+o.width/2,e=o.top+o.height/2);let a=t.radius||ef(i,e,o),s=i-o.left,c=e-o.top,d=r.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${c-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let g=window.getComputedStyle(u),R=g.transitionProperty,E=g.transitionDuration,y=R==="none"||E==="0s"||E==="0s, 0s"||o.width===0&&o.height===0,M=new vs(this,u,t,y);u.style.transform="scale3d(1, 1, 1)",M.state=ct.FADING_IN,t.persistent||(this._mostRecentTransientRipple=M);let ne=null;return!y&&(d||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ge=()=>{ne&&(ne.fallbackTimer=null),clearTimeout(Se),this._finishRippleTransition(M)},_e=()=>this._destroyRipple(M),Se=setTimeout(_e,d+100);u.addEventListener("transitionend",ge),u.addEventListener("transitioncancel",_e),ne={onTransitionEnd:ge,onTransitionCancel:_e,fallbackTimer:Se}}),this._activeRipples.set(M,ne),(y||!d)&&this._finishRippleTransition(M),M}fadeOutRipple(i){if(i.state===ct.FADING_OUT||i.state===ct.HIDDEN)return;let e=i.element,t=A(A({},eo),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=ct.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=et(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,um.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{pm.forEach(e=>{this._triggerElement.addEventListener(e,this,hm)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===ct.FADING_IN?this._startFadeOutTransition(i):i.state===ct.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=ct.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=ct.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Hn(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Zp;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Un(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===ct.VISIBLE||i.config.terminateOnPointerUp&&i.state===ct.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(um.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(pm.forEach(e=>i.removeEventListener(e,this,hm)),this._pointerUpEventsRegistered=!1))}};function ef(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),o=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+o*o)}var xs=new v("mat-ripple-global-options"),Cr=(()=>{class n{_elementRef=l(P);_animationsDisabled=de();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(H),t=l(ee),o=l(xs,{optional:!0}),r=l(Y);this._globalOptions=o||{},this._rippleRenderer=new to(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:A(A(A({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,o){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,A(A({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,A(A({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,o){t&2&&T("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var tf={capture:!0},nf=["focus","mousedown","mouseenter","touchstart"],ws="mat-ripple-loader-uninitialized",Cs="mat-ripple-loader-class-name",fm="mat-ripple-loader-centered",Sr="mat-ripple-loader-disabled",gm=(()=>{class n{_document=l(K);_animationsDisabled=de();_globalRippleOptions=l(xs,{optional:!0});_platform=l(ee);_ngZone=l(H);_injector=l(Y);_eventCleanups;_hosts=new Map;constructor(){let e=l(He).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>nf.map(t=>e.listen(this._document,t,this._onInteraction,tf)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(ws,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Cs))&&e.setAttribute(Cs,t.className||""),t.centered&&e.setAttribute(fm,""),t.disabled&&e.setAttribute(Sr,"")}setDisabled(e,t){let o=this._hosts.get(e);o?(o.target.rippleDisabled=t,!t&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):t?e.setAttribute(Sr,""):e.removeAttribute(Sr)}_onInteraction=e=>{let t=Pe(e);if(t instanceof HTMLElement){let o=t.closest(`[${ws}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Cs)),e.append(t);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??eo.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??eo.exitDuration,s={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(Sr),rippleConfig:{centered:e.hasAttribute(fm),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},c=new to(s,this._ngZone,t,this._platform,this._injector),d=!s.rippleDisabled;d&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:d}),e.removeAttribute(ws)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ni=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var of=["mat-icon-button",""],rf=["*"],af=new v("MAT_BUTTON_CONFIG");function _m(n){return n==null?void 0:Ce(n)}var Ss=(()=>{class n{_elementRef=l(P);_ngZone=l(H);_animationsDisabled=de();_config=l(af,{optional:!0});_focusMonitor=l(gt);_cleanupClick;_renderer=l(be);_rippleLoader=l(gm);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(we).load(ni);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,o){t&2&&(z("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),Ie(o.color?"mat-"+o.color:""),T("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",V],disabled:[2,"disabled","disabled",V],ariaDisabled:[2,"aria-disabled","ariaDisabled",V],disabledInteractive:[2,"disabledInteractive","disabledInteractive",V],tabIndex:[2,"tabIndex","tabIndex",_m],_tabindex:[2,"tabindex","_tabindex",_m]}})}return n})(),ki=(()=>{class n extends Ss{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[re],attrs:of,ngContentSelectors:rf,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(oe(),Ge(0,"span",0),j(1),Ge(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var It=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[N]})}return n})();var sf=["matButton",""],lf=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],cf=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var bm=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Tt=(()=>{class n extends Ss{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=df(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,o=this._appearance?bm.get(this._appearance):null,r=bm.get(e);o&&t.remove(...o),t.add(...r),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[re],attrs:sf,ngContentSelectors:cf,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(oe(lf),Ge(0,"span",0),j(1),Ee(2,"span",1),j(3,1),Ve(),j(4,2),Ge(5,"span",2)(6,"span",3)),t&2&&T("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function df(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Wt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[It,N]})}return n})();var mf=["*"];var hf=new v("MAT_CARD_CONFIG"),cn=(()=>{class n{appearance;constructor(){let e=l(hf,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,o){t&2&&T("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:mf,decls:1,vars:0,template:function(t,o){t&1&&(oe(),j(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})();var io=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[N]})}return n})();var no=(()=>{class n{_listeners=[];notify(e,t){for(let o of this._listeners)o(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ks=new v("CdkAccordion"),vm=(()=>{class n{_stateChanges=new k;_openCloseAllActions=new k;id=l(se).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",V]},exportAs:["cdkAccordion"],features:[ae([{provide:ks,useExisting:n}]),ye]})}return n})(),ym=(()=>{class n{accordion=l(ks,{optional:!0,skipSelf:!0});_changeDetectorRef=l(ce);_expansionDispatcher=l(no);_openCloseAllSubscription=ke.EMPTY;closed=new G;opened=new G;destroyed=new G;expandedChange=new G;id=l(se).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=me(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",V],disabled:[2,"disabled","disabled",V]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[ae([{provide:ks,useValue:void 0}])]})}return n})(),xm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({})}return n})();var oo=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new k;constructor(i=!1,e,t=!0,o){this._multiple=i,this._emitChanges=t,this.compareWith=o,e&&e.length&&(i?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(r=>this._getConcreteValue(r)));i.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var ro=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},_t=class extends ro{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,o,r){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=o,this.bindings=r||null}},bt=class extends ro{templateRef;viewContainerRef;context;injector;constructor(i,e,t,o){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=o}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Ds=class extends ro{element;constructor(i){super(),this.element=i instanceof P?i.nativeElement:i}},oi=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof _t)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof bt)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Ds)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},kr=class extends oi{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,o=t.get(ea,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,o=i.injector||this._defaultInjector||Y.NULL,r=o.get(Pi,t.injector);e=Do(i.component,{elementInjector:o,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(o=>this.outletElement.appendChild(o)),t.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(t);o!==-1&&e.remove(o)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var At=(()=>{class n extends oi{_moduleRef=l(ea,{optional:!0});_document=l(K);_viewContainerRef=l(Nt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new G;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,o=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let o=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(o,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(t,o)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[re]})}return n})(),vt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({})}return n})();var uf=["body"],pf=["bodyWrapper"],ff=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],gf=["mat-expansion-panel-header","*","mat-action-row"];function _f(n,i){}var bf=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],vf=["mat-panel-title","mat-panel-description","*"];function yf(n,i){n&1&&(Ee(0,"span",1),Oe(),Ee(1,"svg",2),Ge(2,"path",3),Ve()())}var Es=new v("MAT_ACCORDION"),wm=new v("MAT_EXPANSION_PANEL"),xf=(()=>{class n{_template=l(Ct);_expansionPanel=l(wm,{optional:!0});constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["ng-template","matExpansionPanelContent",""]]})}return n})(),Cm=new v("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Is=(()=>{class n extends ym{_viewContainerRef=l(Nt);_animationsDisabled=de();_document=l(K);_ngZone=l(H);_elementRef=l(P);_renderer=l(be);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new G;afterCollapse=new G;_inputChanges=new k;accordion=l(Es,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=l(se).getId("mat-expansion-panel-header-");constructor(){super();let e=l(Cm,{optional:!0});this._expansionDispatcher=l(no),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(je(null),fe(()=>this.expanded&&!this._portal),We(1)).subscribe(()=>{this._portal=new bt(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(t,o,r){if(t&1&&Ze(r,xf,5),t&2){let a;U(a=W())&&(o._lazyContent=a.first)}},viewQuery:function(t,o){if(t&1&&he(uf,5)(pf,5),t&2){let r;U(r=W())&&(o._body=r.first),U(r=W())&&(o._bodyWrapper=r.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,o){t&2&&T("mat-expanded",o.expanded)("mat-expansion-panel-spacing",o._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",V],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[ae([{provide:Es,useValue:void 0},{provide:wm,useExisting:n}]),re,ye],ngContentSelectors:gf,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,o){t&1&&(oe(ff),j(0),m(1,"div",2,0)(3,"div",3,1)(5,"div",4),j(6,1),te(7,_f,0,0,"ng-template",5),h(),j(8,2),h()()),t&2&&(p(),z("inert",o.expanded?null:""),p(2),w("id",o.id),z("aria-labelledby",o._headerId),p(4),w("cdkPortalOutlet",o._portal))},dependencies:[At],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return n})();var Ts=(()=>{class n{panel=l(Is,{host:!0});_element=l(P);_focusMonitor=l(gt);_changeDetectorRef=l(ce);_parentChangeSubscription=ke.EMPTY;constructor(){l(we).load(ni);let e=this.panel,t=l(Cm,{optional:!0}),o=l(new $t("tabindex"),{optional:!0}),r=e.accordion?e.accordion._stateChanges.pipe(fe(a=>!!(a.hideToggle||a.togglePosition))):bo;this.tabIndex=parseInt(o||"")||0,this._parentChangeSubscription=wt(e.opened,e.closed,r,e._inputChanges.pipe(fe(a=>!!(a.hideToggle||a.disabled||a.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(fe(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Te(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,o){t&1&&L("click",function(){return o._toggle()})("keydown",function(a){return o._keydown(a)}),t&2&&(z("id",o.panel._headerId)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o._getPanelId())("aria-expanded",o._isExpanded())("aria-disabled",o.panel.disabled),mt("height",o._getHeaderHeight()),T("mat-expanded",o._isExpanded())("mat-expansion-toggle-indicator-after",o._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",o._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ce(e)]},ngContentSelectors:vf,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,o){t&1&&(oe(bf),Ee(0,"span",0),j(1),j(2,1),j(3,2),Ve(),$(4,yf,3,0,"span",1)),t&2&&(T("mat-content-hide-toggle",!o._showToggle()),p(4),Q(o._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Sm=(()=>{class n extends vm{_keyManager;_ownHeaders=new Fi;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(je(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new $n(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=at(n)))(o||n)}})();static \u0275dir=I({type:n,selectors:[["mat-accordion"]],contentQueries:function(t,o,r){if(t&1&&Ze(r,Ts,5),t&2){let a;U(a=W())&&(o._headers=a)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,o){t&2&&T("mat-accordion-multi",o.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",V],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[ae([{provide:Es,useExisting:n}]),re]})}return n})(),ao=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[xm,vt,N]})}return n})();function Cf(n,i){n&1&&(m(0,"mat-error"),f(1," Email is required. "),h())}function Sf(n,i){n&1&&(m(0,"mat-error"),f(1," Please enter a valid email address. "),h())}function Mf(n,i){if(n&1&&(m(0,"mat-card",31)(1,"h3"),f(2),h(),m(3,"p"),f(4),h(),m(5,"div",32)(6,"mat-icon"),f(7),h()()()),n&2){let e=i.$implicit;p(2),ue(e.title),p(2),ue(e.text),p(3),ue(e.icon)}}function kf(n,i){n&1&&(m(0,"mat-icon",37),f(1,"add"),h())}function Df(n,i){n&1&&(m(0,"mat-icon",37),f(1,"close"),h())}function Ef(n,i){if(n&1&&(m(0,"mat-expansion-panel",33,0)(2,"mat-expansion-panel-header")(3,"span",34),f(4),h(),F(5,"span",7),te(6,kf,2,0,"mat-icon",35)(7,Df,2,0,"mat-icon",35),h(),m(8,"div",36),f(9),h()()),n&2){let e=i.$implicit,t=Je(1);w("hideToggle",!0),p(4),ue(e.question),p(2),w("ngIf",!t.expanded),p(),w("ngIf",t.expanded),p(2),qe(" ",e.answer," ")}}var Dr=class n{constructor(i,e){this.fb=i;this.router=e;this.landingForm=this.fb.group({email:["",[ve.required,ve.email]]})}landingForm;year=new Date().getFullYear();login(){this.router.navigate(["/login"])}getStarted(){let i=this.landingForm.get("email")?.value?.toString().trim()||"";if(console.log("getStarted called, email=",i),!i){console.warn("getStarted aborted: empty email");return}this.router.navigate(["/signup"],{queryParams:{email:i}}).then(e=>console.log("router.navigate result:",e)).catch(e=>console.error("router.navigate error:",e))}reasons=[{title:"Enjoy on your TV.",text:"Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV and more.",icon:"tv"},{title:"Watch anywhere",text:"Stream on your phone, tablet or laptop \u2014 downloads available for offline viewing.",icon:"devices"},{title:"Personalized recommendations",text:"Get suggestions based on what you watch to discover more you\u2019ll love.",icon:"recommend"},{title:"Multiple profiles",text:"Create profiles for family members with separate recommendations and settings.",icon:"people"},{title:"Ultra HD & HDR",text:"Select titles available in 4K UHD and HDR for brilliant detail.",icon:"4k"},{title:"Download & Go",text:"Save shows to watch offline while commuting or traveling.",icon:"download"},{title:"Create watchlists",text:"Save favorites to your list and pick up where you left off.",icon:"playlist"},{title:"Cancel anytime",text:"No long-term commitment \u2014 pause or cancel your membership whenever you want.",icon:"cancel"}];faqs=[{question:"What is Pudplanet?",answer:"Pudplanet is a streaming service offering movies, TV shows, anime, documentaries and more across internet-connected devices. Enjoy unlimited ad\u2011free streaming for one monthly price."},{question:"How much does it cost?",answer:"We offer several plans to fit different needs. Prices vary by region and plan (SD, HD, UHD). See the pricing page for current rates and available features."},{question:"Which devices are supported?",answer:"Pudplanet works on Smart TVs, streaming players (Roku, Apple TV, Chromecast), game consoles, phones, tablets and web browsers."},{question:"Can I download shows to watch offline?",answer:"Yes. Many titles are available for download on mobile apps so you can watch without an internet connection."},{question:"How do I cancel?",answer:"You can cancel anytime from your account settings. Your subscription will remain active until the end of the current billing period."},{question:"Are there parental controls?",answer:"Yes. You can create profiles and enable parental controls to restrict content by maturity rating."},{question:"What payment methods are accepted?",answer:"We accept major credit/debit cards and selected local payment methods depending on your country."}];static \u0275fac=function(e){return new(e||n)(X(Zi),X(st))};static \u0275cmp=x({type:n,selectors:[["app-landing"]],standalone:!1,decls:52,vars:7,consts:[["panel","matExpansionPanel"],[1,"landing-container"],[1,"bg"],["color","transparent",1,"topbar"],[1,"logo"],[1,"logo-icon"],[1,"logo-text"],[1,"spacer"],["mat-flat-button","",1,"signin-btn",3,"click"],[1,"hero"],[1,"hero-title"],[1,"br-md"],[1,"hero-caption"],["novalidate","",1,"cta",3,"ngSubmit","formGroup"],["appearance","outline",1,"email-field"],["matInput","","formControlName","email","type","email"],["matPrefix",""],[4,"ngIf"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[1,"reasons-wrap"],[1,"row-title"],[1,"reason-grid"],["class","reason-card",4,"ngFor","ngForOf"],[1,"faq"],[1,"faq-title"],["multi","",1,"faq-accordion"],["class","faq-item",3,"hideToggle",4,"ngFor","ngForOf"],[1,"site-footer"],[1,"footer-inner"],[1,"footer-links"],["href",""],[1,"reason-card"],[1,"badge"],[1,"faq-item",3,"hideToggle"],[1,"question"],["class","toggle-icon",4,"ngIf"],[1,"answer"],[1,"toggle-icon"]],template:function(e,t){if(e&1&&(m(0,"div",1),F(1,"div",2),m(2,"mat-toolbar",3)(3,"div",4)(4,"mat-icon",5),f(5,"movie"),h(),m(6,"span",6),f(7,"Pudplanet"),h()(),F(8,"span",7),m(9,"button",8),L("click",function(){return t.login()}),f(10,"Sign In"),h()(),m(11,"section",9)(12,"h1",10),f(13," Unlimited movies, TV "),F(14,"br",11),f(15," shows and more. "),h(),m(16,"p",12),f(17," Ready to watch? Enter your email to create or restart your membership. "),h(),m(18,"form",13),L("ngSubmit",function(){return t.getStarted()}),m(19,"mat-form-field",14)(20,"mat-label"),f(21,"Email"),h(),F(22,"input",15),m(23,"mat-icon",16),f(24,"email"),h(),te(25,Cf,2,0,"mat-error",17)(26,Sf,2,0,"mat-error",17),h(),m(27,"button",18),f(28," Get Started "),m(29,"mat-icon"),f(30,"arrow_forward"),h()()()()(),m(31,"section",19)(32,"h2",20),f(33,"Why Pudplanet?"),h(),m(34,"div",21),te(35,Mf,8,3,"mat-card",22),h()(),m(36,"section",23)(37,"h2",24),f(38,"Frequently Asked Questions"),h(),m(39,"mat-accordion",25),te(40,Ef,10,5,"mat-expansion-panel",26),h()(),m(41,"footer",27)(42,"div",28)(43,"span"),f(44),h(),m(45,"nav",29)(46,"a",30),f(47,"Terms of Use"),h(),m(48,"a",30),f(49,"Privacy"),h(),m(50,"a",30),f(51,"Help Center"),h()()()()),e&2){let o,r;p(18),w("formGroup",t.landingForm),p(7),w("ngIf",(o=t.landingForm.get("email"))==null?null:o.hasError("required")),p(),w("ngIf",(r=t.landingForm.get("email"))==null?null:r.hasError("email")),p(),w("disabled",t.landingForm.invalid),p(8),w("ngForOf",t.reasons),p(5),w("ngForOf",t.faqs),p(4),qe(" ",t.year," Pudplanet.All rights reserved.")}},dependencies:[Ol,Qt,Yi,ei,$i,Qi,ft,yi,ti,Tt,Dt,Ut,Si,Mi,ln,cn,fd,Sm,Is,Ts],styles:[".landing-container[_ngcontent-%COMP%]{background:#141414;color:#fff;min-height:100dvh;width:100vw;position:relative;overflow:hidden;font-family:Helvetica Neue,Arial,sans-serif}.bg[_ngcontent-%COMP%]{position:absolute;inset:0;background-image:linear-gradient(to top,#000000d9,#00000059 40%,#000000d9),url(/landing.jpg);background-size:cover;background-position:center;filter:brightness(.95);z-index:1}.topbar[_ngcontent-%COMP%]{position:relative;z-index:2;padding:18px 32px;background:transparent}.topbar[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]{font-size:28px;font-weight:900;color:#e50914;letter-spacing:-.5px}.topbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}.topbar[_ngcontent-%COMP%]   .lang-btn[_ngcontent-%COMP%]{margin-right:12px;background:#0009;border:1px solid rgba(255,255,255,.3);color:#fff;border-radius:6px;padding:4px 10px;line-height:24px}.topbar[_ngcontent-%COMP%]   .lang-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:20px;height:20px;width:20px}.topbar[_ngcontent-%COMP%]   .signin-btn[_ngcontent-%COMP%]{background:#f93!important;color:#fff!important;border-radius:6px;padding:6px 14px;font-weight:600}.hero[_ngcontent-%COMP%]{position:relative;z-index:2;margin:0 auto;padding:clamp(40px,9vh,96px) 24px 48px;text-align:center;max-width:1200px}.hero-title[_ngcontent-%COMP%]{font-weight:900;line-height:1.1;letter-spacing:-.5px;font-size:clamp(32px,6.5vw,64px);margin:24px 0 12px}.hero-subtitle[_ngcontent-%COMP%]{font-weight:600;font-size:clamp(16px,2.4vw,24px);margin:8px 0 16px}.hero-caption[_ngcontent-%COMP%]{color:#e5e5e5;font-size:clamp(14px,1.6vw,18px);margin-bottom:16px}.cta[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:16px;justify-items:center;max-width:600px;margin:0 auto}.cta[_ngcontent-%COMP%]   .email-field[_ngcontent-%COMP%]{width:100%;justify-self:stretch}.cta[_ngcontent-%COMP%]   .email-field[_ngcontent-%COMP%]   .mat-mdc-input-element[_ngcontent-%COMP%]{color:#fff}.cta[_ngcontent-%COMP%]   .email-field[_ngcontent-%COMP%]   .mat-mdc-form-field-icon-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#ffffffb3;margin-right:8px}.cta   [_nghost-%COMP%]     .mdc-text-field--outlined .mdc-notched-outline__leading, .cta   [_nghost-%COMP%]     .mdc-text-field--outlined .mdc-notched-outline__notch, .cta   [_nghost-%COMP%]     .mdc-text-field--outlined .mdc-notched-outline__trailing{border-color:#ffffff59}.cta   [_nghost-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__leading, .cta   [_nghost-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__notch, .cta   [_nghost-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#fff}.cta   [_nghost-%COMP%]     .mdc-text-field .mdc-floating-label, .cta   [_nghost-%COMP%]     .mat-mdc-form-field-hint-wrapper, .cta   [_nghost-%COMP%]     .mat-mdc-form-field-subscript-wrapper{color:#b3b3b3!important}.cta[_ngcontent-%COMP%]   .cta-btn[_ngcontent-%COMP%]{height:56px;padding:0 22px;font-weight:800;font-size:1.05rem;letter-spacing:.3px;background:#e50914!important;color:#fff!important;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;gap:6px;white-space:nowrap;width:auto;max-width:200px;transition:all .2s ease}.cta[_ngcontent-%COMP%]   .cta-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:#f40612!important}.cta[_ngcontent-%COMP%]   .cta-btn[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}[_nghost-%COMP%], body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{margin:0!important;padding:0!important;height:100%;overflow-x:hidden}.br-md[_ngcontent-%COMP%]{display:none}@media(min-width:768px){.br-md[_ngcontent-%COMP%]{display:inline}}[_nghost-%COMP%]{--bg: #141414;--card: #1f1f1f;--cardElev: #181818;--border: #2b2b2b;--muted: #b3b3b3;--accent: #e50914;display:block;color:#fff}.row-title[_ngcontent-%COMP%]{margin:0 24px 14px;font-size:clamp(20px,3vw,28px);font-weight:800}.trending[_ngcontent-%COMP%]{padding:8px 0 4px}.carousel[_ngcontent-%COMP%]{position:relative;padding:0 clamp(16px,4vw,48px)}.thumb-strip[_ngcontent-%COMP%]{display:flex;gap:18px;overflow-x:auto;scroll-behavior:smooth;scroll-snap-type:x proximity;padding:8px 0 6px}.thumb-strip[_ngcontent-%COMP%]::-webkit-scrollbar{height:6px}.thumb-strip[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.thumb-strip[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#2a2a2a;border-radius:999px}.trend-card[_ngcontent-%COMP%]{position:relative;flex:0 0 auto;width:180px;height:270px;border-radius:8px;overflow:hidden;scroll-snap-align:start;background:var(--card);border:1px solid var(--border);box-shadow:0 6px 16px #00000059;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}.trend-card[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 12px 28px #0000008c;border-color:#3a3a3a}.poster[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;background:#222}.rank[_ngcontent-%COMP%]{position:absolute;left:-8px;bottom:-12px;font-weight:900;font-size:110px;line-height:1;color:#fff;text-shadow:0 4px 18px rgba(0,0,0,.75);-webkit-text-stroke:8px rgba(0,0,0,.7);-webkit-text-stroke:2px rgba(0,0,0,.7);pointer-events:none}.arrow[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);z-index:3;background:#0000008c!important;color:#fff!important;border-radius:999px;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.arrow.left[_ngcontent-%COMP%]{left:6px}.arrow.right[_ngcontent-%COMP%]{right:6px}.arrow[_ngcontent-%COMP%]:hover{background:#000000b3!important}.reasons-wrap[_ngcontent-%COMP%]{padding:48px clamp(16px,5vw,64px) 48px}.reason-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,minmax(220px,1fr));gap:16px}.reason-card[_ngcontent-%COMP%]{background:linear-gradient(180deg,var(--card) 0%,var(--cardElev) 100%)!important;border:1px solid var(--border);color:#fff;padding:20px 20px 56px;border-radius:16px;min-height:200px;box-shadow:0 10px 26px #00000059;position:relative}.reason-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 10px;font-size:clamp(18px,2.2vw,22px);font-weight:800}.reason-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--muted);line-height:1.4}.reason-card[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{position:absolute;right:14px;bottom:12px;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;background:#252525;border:1px solid #3a3a3a}.reason-card[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:var(--accent);font-size:24px;width:24px;height:24px}.reason-card[_ngcontent-%COMP%]:hover{border-color:#3e3e3e;transform:translateY(-2px)}@media(max-width:960px){.reason-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media(max-width:560px){.carousel[_ngcontent-%COMP%]{padding:0 12px}.reason-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.rank[_ngcontent-%COMP%]{font-size:90px;-webkit-text-stroke-width:6px}}.faq[_ngcontent-%COMP%]{position:relative;z-index:2;padding:8px clamp(16px,5vw,64px) 32px;color:#fff;background:transparent}.faq-title[_ngcontent-%COMP%]{margin:0 0 16px;font-size:clamp(22px,3.4vw,32px);font-weight:800}.faq-accordion[_ngcontent-%COMP%]{display:grid;gap:8px}.faq-item[_ngcontent-%COMP%]{background:#2d2d2d!important;border-radius:4px;border:1px solid #000;overflow:hidden;box-shadow:inset 0 -4px #000}.faq-item[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{height:84px;padding:0 20px;cursor:pointer}.question[_ngcontent-%COMP%]{font-size:clamp(18px,2.6vw,26px);font-weight:600;color:#fff}.spacer[_ngcontent-%COMP%]{flex:1}.toggle-icon[_ngcontent-%COMP%]{color:#fff;font-size:28px;width:28px;height:28px}.faq-item[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]{padding:20px;font-size:clamp(15px,1.8vw,18px);line-height:1.5;color:#e5e5e5;background:#2d2d2d;border-top:1px solid #000}.faq-item[_ngcontent-%COMP%]     .mat-expansion-indicator{display:none!important}.faq-item[_ngcontent-%COMP%]:hover, .faq-item.mat-expanded[_ngcontent-%COMP%]{background:#303030!important}[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100dvh}.hero[_ngcontent-%COMP%], .trending[_ngcontent-%COMP%], .reasons-wrap[_ngcontent-%COMP%]{flex:0 0 auto}.site-footer[_ngcontent-%COMP%]{flex-shrink:0}.site-footer[_ngcontent-%COMP%]{background:#0f0f0f;border-top:1px solid #2b2b2b;color:#b3b3b3}.footer-inner[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:20px 24px;display:flex;align-items:center;justify-content:space-between;font-size:14px}.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#b3b3b3;text-decoration:none;margin-left:16px}.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;text-decoration:underline}.logo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:24px;font-weight:700;letter-spacing:-.5px;flex-shrink:0}.logo-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px;color:#ffb366}.logo-text[_ngcontent-%COMP%]{background:linear-gradient(135deg,#cc5200,#f93);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}"]})};var Mm={production:!1,apiUrl:"http://localhost:8080/api"};var $e=class n{constructor(i,e){this.http=i;this.router=e}apiUrl=Mm.apiUrl+"/auth";currentUserSubject=new _o(null);currentUser$=this.currentUserSubject.asObservable();passwrodMatchValidator(i){return e=>{if(!e.parent)return null;let t=e.parent.get(i)?.value,o=e.value;return t!==o?{passwordMismatch:!0}:null}}signup(i){return this.http.post(`${this.apiUrl}/signup`,i)}verifyEmail(i){return this.http.get(`${this.apiUrl}/verify-email?token=${i}`)}login(i){return this.http.post(this.apiUrl+"/login",i).pipe(Kt(e=>this.handleAuthSuccess(e)))}handleAuthSuccess(i){i?.token&&localStorage.setItem("token",i.token);let e={email:i.email,fullName:i.fullName,role:i.role};this.setCurrentUser(e),console.debug("[AuthService] \u767B\u5F55\u6210\u529F\uFF0Ctoken:",i?.token,"\u5B8C\u6574\u54CD\u5E94:",i)}setCurrentUser(i){this.currentUserSubject.next(i)}getCurrentUser(){return this.currentUserSubject.value}getToken(){return localStorage.getItem("token")}isLoggedIn(){return!!this.getToken()}redirectBaseOnRole(){let i=this.isAdmin()?"/admin":"/home";this.router.navigate([i])}isAdmin(){return this.getCurrentUser()?.role==="ADMIN"}resendVerificationEmail(i){return this.http.post(`${this.apiUrl}/resend-verification`,{email:i})}forgotPassword(i){return this.http.post(`${this.apiUrl}/forgot-password`,{email:i})}resetPassword(i,e){return this.http.post(`${this.apiUrl}/reset-password`,{token:i,newPassword:e})}initializeAuth(){return new Promise(i=>{if(this.isLoggedIn()){this.handleAuthSuccess(null),i();return}this.fetchCurrentUser().subscribe({next:e=>{this.setCurrentUser(e),i()},error:()=>{this.setCurrentUser(null),i()}})})}fetchCurrentUser(){return this.http.get(`${this.apiUrl}/current-user`)}logout(){localStorage.removeItem("token"),this.currentUserSubject.next(null),this.router.navigate(["/"])}static \u0275fac=function(e){return new(e||n)(Ne(To),Ne(st))};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};var If=20,Di=(()=>{class n{_ngZone=l(H);_platform=l(ee);_renderer=l(He).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new k;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=If){return this._platform.isBrowser?new Ri(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(Qr(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):nt()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(fe(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_scrollableContainsElement(e,t){let o=et(t),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Tf=20,Rt=(()=>{class n{_platform=l(ee);_listeners;_viewportSize=null;_change=new k;_document=l(K);constructor(){let e=l(H),t=l(He).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[t.listen("window","resize",o),t.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),a=-r.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,s=-r.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0;return{top:a,left:s}}change(e=Tf){return e>0?this._change.pipe(Qr(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Gt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({})}return n})(),lo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[N,Gt,N,Gt]})}return n})();var km=dd();function pn(n){return new Er(n.get(Rt),n.get(K))}var Er=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=xe(-this._previousScrollPosition.left),i.style.top=xe(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,o=e.style,r=t.scrollBehavior||"",a=o.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),km&&(t.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),km&&(t.scrollBehavior=r,o.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Om(n,i){return new Ir(n.get(Di),n.get(H),n.get(Rt),i)}var Ir=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,o){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(fe(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var co=class{enable(){}disable(){}attach(){}};function Os(n,i){return i.some(e=>{let t=n.bottom<e.top,o=n.top>e.bottom,r=n.right<e.left,a=n.left>e.right;return t||o||r||a})}function Dm(n,i){return i.some(e=>{let t=n.top<e.top,o=n.bottom>e.bottom,r=n.left<e.left,a=n.right>e.right;return t||o||r||a})}function ai(n,i){return new Tr(n.get(Di),n.get(Rt),n.get(H),i)}var Tr=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,o){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:o}=this._viewportRuler.getViewportSize();Os(e,[{width:t,height:o,bottom:o,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Pm=(()=>{class n{_injector=l(Y);constructor(){}noop=()=>new co;close=e=>Om(this._injector,e);block=()=>pn(this._injector);reposition=e=>ai(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ot=class{positionStrategy;scrollStrategy=new co;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Ar=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var Fm=(()=>{class n{_attachedOverlays=[];_document=l(K);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Nm=(()=>{class n extends Fm{_ngZone=l(H);_renderer=l(He).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let o=t.length-1;o>-1;o--){let r=t[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=at(n)))(o||n)}})();static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Lm=(()=>{class n extends Fm{_platform=l(ee);_ngZone=l(H);_renderer=l(He).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,o),r.listen(t,"click",this._clickListener,o),r.listen(t,"auxclick",this._clickListener,o),r.listen(t,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Pe(e)};_clickListener=e=>{let t=Pe(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let s=r[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(Em(s.overlayElement,t)||Em(s.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=at(n)))(o||n)}})();static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Em(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Vm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Pr=(()=>{class n{_platform=l(ee);_containerElement;_document=l(K);_styleLoader=l(we);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||ts()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let t=this._document.createElement("div");t.classList.add(e),ts()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Vm)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ps=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,o){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Fs(n){return n&&n.nodeType===1}var hn=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new k;_attachments=new k;_detachments=new k;_positionStrategy;_scrollStrategy;_locationChanges=ke.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new k;_outsidePointerEvents=new k;_afterNextRenderRef;constructor(i,e,t,o,r,a,s,c,d,u=!1,g,R){this._portalOutlet=i,this._host=e,this._pane=t,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=g,this._renderer=R,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Le(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=A(A({},this._config),i),this._updateElementSize()}setDirection(i){this._config=Re(A({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=xe(this._config.width),i.height=xe(this._config.height),i.minWidth=xe(this._config.minWidth),i.minHeight=xe(this._config.minHeight),i.maxWidth=xe(this._config.maxWidth),i.maxHeight=xe(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Fs(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Ps(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let o=nn(e||[]).filter(r=>!!r);o.length&&(t?i.classList.add(...o):i.classList.remove(...o))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Le(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},Im="cdk-overlay-connected-position-bounding-box",Af=/([A-Za-z%]+)$/;function fn(n,i){return new Rr(i,n.get(Rt),n.get(K),n.get(ee),n.get(Pr))}var Rr=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new k;_resizeSubscription=ke.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,o,r){this._viewportRuler=e,this._document=t,this._platform=o,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Im),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,o=this._containerRect,r=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(i,o,s),d=this._getOverlayPoint(c,e,s),u=this._getOverlayFit(d,e,t,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(u,d,t)){r.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:c,position:s,overlayRect:e})}if(r.length){let s=null,c=-1;for(let d of r){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>c&&(c=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Ei(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Im),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof P?this._origin.nativeElement:Fs(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let o;if(t.originX=="center")o=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;o=t.originX=="start"?a:s}e.left<0&&(o-=e.left);let r;return t.originY=="center"?r=i.top+i.height/2:r=t.originY=="top"?i.top:i.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(i,e,t){let o;t.overlayX=="center"?o=-e.width/2:t.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:i.x+o,y:i.y+r}}_getOverlayFit(i,e,t,o){let r=Am(e),{x:a,y:s}=i,c=this._getOffset(o,"x"),d=this._getOffset(o,"y");c&&(a+=c),d&&(s+=d);let u=0-a,g=a+r.width-t.width,R=0-s,E=s+r.height-t.height,y=this._subtractOverflows(r.width,u,g),M=this._subtractOverflows(r.height,R,E),ne=y*M;return{visibleArea:ne,isCompletelyWithinViewport:r.width*r.height===ne,fitsInViewportVertically:M===r.height,fitsInViewportHorizontally:y==r.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let o=t.bottom-e.y,r=t.right-e.x,a=Tm(this._overlayRef.getConfig().minHeight),s=Tm(this._overlayRef.getConfig().minWidth),c=i.fitsInViewportVertically||a!=null&&a<=o,d=i.fitsInViewportHorizontally||s!=null&&s<=r;return c&&d}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let o=Am(e),r=this._viewportRect,a=Math.max(i.x+o.width-r.width,0),s=Math.max(i.y+o.height-r.height,0),c=Math.max(r.top-t.top-i.y,0),d=Math.max(r.left-t.left-i.x,0),u=0,g=0;return o.width<=r.width?u=d||-a:u=i.x<this._getViewportMarginStart()?r.left-t.left-i.x:0,o.height<=r.height?g=c||-s:g=i.y<this._getViewportMarginTop()?r.top-t.top-i.y:0,this._previousPushAmount={x:u,y:g},{x:i.x+u,y:i.y+g}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Rf(this._lastScrollVisibility,t)){let o=new Ar(i,t);this._positionChanges.next(o)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,o=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${o}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,o=this._isRtl(),r,a,s;if(e.overlayY==="top")a=i.y,r=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-s+this._getViewportMarginTop();else{let E=Math.min(t.bottom-i.y+t.top,i.y),y=this._lastBoundingBoxSize.height;r=E*2,a=i.y-E,r>y&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-y/2)}let c=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,d=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,u,g,R;if(d)R=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=i.x-this._getViewportMarginStart();else if(c)g=i.x,u=t.right-i.x-this._getViewportMarginEnd();else{let E=Math.min(t.right-i.x+t.left,i.x),y=this._lastBoundingBoxSize.width;u=E*2,g=i.x-E,u>y&&!this._isInitialRender&&!this._growAfterOpen&&(g=i.x-y/2)}return{top:a,left:g,bottom:s,right:R,width:u,height:r}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=xe(t.width),o.height=xe(t.height),o.top=xe(t.top)||"auto",o.bottom=xe(t.bottom)||"auto",o.left=xe(t.left)||"auto",o.right=xe(t.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=xe(r)),a&&(o.maxWidth=xe(a))}this._lastBoundingBoxSize=t,Ei(this._boundingBox.style,o)}_resetBoundingBoxStyles(){Ei(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Ei(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let u=this._viewportRuler.getViewportScrollPosition();Ei(t,this._getExactOverlayY(e,i,u)),Ei(t,this._getExactOverlayX(e,i,u))}else t.position="static";let s="",c=this._getOffset(e,"x"),d=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),d&&(s+=`translateY(${d}px)`),t.transform=s.trim(),a.maxHeight&&(o?t.maxHeight=xe(a.maxHeight):r&&(t.maxHeight="")),a.maxWidth&&(o?t.maxWidth=xe(a.maxWidth):r&&(t.maxWidth="")),Ei(this._pane.style,t)}_getExactOverlayY(i,e,t){let o={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;o.bottom=`${a-(r.y+this._overlayRect.height)}px`}else o.top=xe(r.y);return o}_getExactOverlayX(i,e,t){let o={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;o.right=`${s-(r.x+this._overlayRect.width)}px`}else o.left=xe(r.x);return o}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Dm(i,t),isOriginOutsideView:Os(i,t),isOverlayClipped:Dm(e,t),isOverlayOutsideView:Os(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,o)=>t-Math.max(o,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&nn(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof P)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function Ei(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function Tm(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(Af);return!e||e==="px"?parseFloat(i):null}return n||null}function Am(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Rf(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var Rm="cdk-global-overlay-wrapper";function si(n){return new Or}var Or=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Rm),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:a,maxHeight:s}=t,c=(o==="100%"||o==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(r==="100%"||r==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,g=this._xOffset,R=this._overlayRef.getConfig().direction==="rtl",E="",y="",M="";c?M="flex-start":u==="center"?(M="center",R?y=g:E=g):R?u==="left"||u==="end"?(M="flex-end",E=g):(u==="right"||u==="start")&&(M="flex-start",y=g):u==="left"||u==="start"?(M="flex-start",E=g):(u==="right"||u==="end")&&(M="flex-end",y=g),i.position=this._cssPosition,i.marginLeft=c?"0":E,i.marginTop=d?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?"0":y,e.justifyContent=M,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Rm),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Bm=(()=>{class n{_injector=l(Y);constructor(){}global(){return si()}flexibleConnectedTo(e){return fn(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),mo=new v("OVERLAY_DEFAULT_CONFIG");function Pt(n,i){n.get(we).load(Vm);let e=n.get(Pr),t=n.get(K),o=n.get(se),r=n.get(Ni),a=n.get(Be),s=n.get(be,null,{optional:!0})||n.get(He).createRenderer(null,null),c=new Ot(i),d=n.get(mo,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in t.body?c.usePopover=i?.usePopover??d:c.usePopover=!1;let u=t.createElement("div"),g=t.createElement("div");u.id=o.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),g.appendChild(u),c.usePopover&&(g.setAttribute("popover","manual"),g.classList.add("cdk-overlay-popover"));let R=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Fs(R)?R.after(g):R?.type==="parent"?R.element.appendChild(g):e.getContainerElement().appendChild(g),new hn(new kr(u,r,n),g,u,c,n.get(H),n.get(Nm),t,n.get(Rl),n.get(Lm),i?.disableAnimations??n.get(pi,null,{optional:!0})==="NoopAnimations",n.get(Pi),s)}var zm=(()=>{class n{scrollStrategies=l(Pm);_positionBuilder=l(Bm);_injector=l(Y);constructor(){}create(e){return Pt(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Of=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Pf=new v("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(Y);return()=>ai(n)}}),un=(()=>{class n{elementRef=l(P);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),jm=new v("cdk-connected-overlay-default-config"),Fr=(()=>{class n{_dir=l(Be,{optional:!0});_injector=l(Y);_overlayRef;_templatePortal;_backdropSubscription=ke.EMPTY;_attachSubscription=ke.EMPTY;_detachSubscription=ke.EMPTY;_positionSubscription=ke.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=l(Pf);_ngZone=l(H);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new G;positionChange=new G;attach=new G;detach=new G;overlayKeydown=new G;overlayOutsideClick=new G;constructor(){let e=l(Ct),t=l(Nt),o=l(jm,{optional:!0}),r=l(mo,{optional:!0});this.usePopover=r?.usePopover===!1?null:"global",this._templatePortal=new bt(e,t),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Of);let e=this._overlayRef=Pt(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Te(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let o=this._getOriginElement(),r=Pe(t);(!o||o!==r&&!o.contains(r))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new Ot({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=fn(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof un?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof un?this.origin.elementRef.nativeElement:this.origin instanceof P?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(yl(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",V],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",V],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",V],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",V],push:[2,"cdkConnectedOverlayPush","push",V],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",V],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",V],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[ye]})}return n})(),tt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({providers:[zm],imports:[N,vt,lo,lo]})}return n})();function Ff(n,i){if(n&1){let e=dt();m(0,"div",1)(1,"button",2),L("click",function(){ot(e);let o=q();return rt(o.action())}),f(2),h()()}if(n&2){let e=q();p(2),qe(" ",e.data.action," ")}}var Nf=["label"];function Lf(n,i){}var Vf=Math.pow(2,31)-1,ho=class{_overlayRef;instance;containerInstance;_afterDismissed=new k;_afterOpened=new k;_onAction=new k;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,Vf))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Hm=new v("MatSnackBarData"),gn=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Bf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),zf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),jf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Um=(()=>{class n{snackBarRef=l(ho);data=l(Hm);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,o){t&1&&(m(0,"div",0),f(1),h(),$(2,Ff,3,1,"div",1)),t&2&&(p(),qe(" ",o.data.message,`
`),p(),Q(o.hasAction?2:-1))},dependencies:[Tt,Bf,zf,jf],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ns="_mat-snack-bar-enter",Ls="_mat-snack-bar-exit",Hf=(()=>{class n extends oi{_ngZone=l(H);_elementRef=l(P);_changeDetectorRef=l(ce);_platform=l(ee);_animationsDisabled=de();snackBarConfig=l(gn);_document=l(K);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=l(Y);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new k;_onExit=new k;_onEnter=new k;_animationState="void";_live;_label;_role;_liveElementId=l(se).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Ls?this._completeExit():e===Ns&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Le(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ns)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Ns)},200)))}exit(){return this._destroyed?nt(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Le(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ls)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Ls),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(a=>e.classList.add(a)):e.classList.add(t)),this._exposeToModals();let o=this._label.nativeElement,r="mdc-snackbar__label";o.classList.toggle(r,!o.querySelector(`.${r}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<t.length;o++){let r=t[o],a=r.getAttribute("aria-owns");this._trackedModals.add(r),a?a.indexOf(e)===-1&&r.setAttribute("aria-owns",a+" "+e):r.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let o=t.replace(this._liveElementId,"").trim();o.length>0?e.setAttribute("aria-owns",o):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),o=e.querySelector("[aria-live]");if(t&&o){let r=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(r=document.activeElement),t.removeAttribute("aria-hidden"),o.appendChild(t),r?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,o){if(t&1&&he(At,7)(Nf,7),t&2){let r;U(r=W())&&(o._portalOutlet=r.first),U(r=W())&&(o._label=r.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,o){t&1&&L("animationend",function(a){return o.onAnimationEnd(a.animationName)})("animationcancel",function(a){return o.onAnimationEnd(a.animationName)}),t&2&&T("mat-snack-bar-container-enter",o._animationState==="visible")("mat-snack-bar-container-exit",o._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!o._animationsDisabled)},features:[re],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,o){t&1&&(m(0,"div",1)(1,"div",2,0)(3,"div",3),te(4,Lf,0,0,"ng-template",4),h(),F(5,"div"),h()()),t&2&&(p(5),z("aria-live",o._live)("role",o._role)("id",o._liveElementId))},dependencies:[At],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),Uf=new v("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new gn}),Vs=(()=>{class n{_live=l(qn);_injector=l(Y);_breakpointObserver=l(Gn);_parentSnackBar=l(n,{optional:!0,skipSelf:!0});_defaultConfig=l(Uf);_animationsDisabled=de();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Um;snackBarContainerComponent=Hf;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",o){let r=A(A({},this._defaultConfig),o);return r.data={message:e,action:t},r.announcementMessage===e&&(r.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,r)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let o=t&&t.viewContainerRef&&t.viewContainerRef.injector,r=Y.create({parent:o||this._injector,providers:[{provide:gn,useValue:t}]}),a=new _t(this.snackBarContainerComponent,t.viewContainerRef,r),s=e.attach(a);return s.instance.snackBarConfig=t,s.instance}_attach(e,t){let o=A(A(A({},new gn),this._defaultConfig),t),r=this._createOverlay(o),a=this._attachSnackBarContainer(r,o),s=new ho(a,r);if(e instanceof Ct){let c=new bt(e,null,{$implicit:o.data,snackBarRef:s});s.instance=a.attachTemplatePortal(c)}else{let c=this._createInjector(o,s),d=new _t(e,void 0,c),u=a.attachComponentPortal(d);s.instance=u.instance}return this._breakpointObserver.observe(qd.HandsetPortrait).pipe(le(r.detachments())).subscribe(c=>{r.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),o.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(o.announcementMessage,o.politeness)}),this._animateSnackBar(s,o),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Ot;t.direction=e.direction;let o=si(this._injector),r=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!r||e.horizontalPosition==="end"&&r,s=!a&&e.horizontalPosition!=="center";return a?o.left("0"):s?o.right("0"):o.centerHorizontally(),e.verticalPosition==="top"?o.top("0"):o.bottom("0"),t.positionStrategy=o,t.disableAnimations=this._animationsDisabled,Pt(this._injector,t)}_createInjector(e,t){let o=e&&e.viewContainerRef&&e.viewContainerRef.injector;return Y.create({parent:o||this._injector,providers:[{provide:ho,useValue:t},{provide:Hm,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Bs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({providers:[Vs],imports:[tt,vt,Wt,Um,N]})}return n})();var li=class n{constructor(i){this.snackBar=i}success(i,e=3e3){this.snackBar.open(i,"Close",{duration:e,horizontalPosition:"center",verticalPosition:"top",panelClass:["notification-success"]})}error(i,e=5e3){this.snackBar.open(i,"Close",{duration:e,horizontalPosition:"center",verticalPosition:"top",panelClass:["notification-error"]})}static \u0275fac=function(e){return new(e||n)(Ne(Vs))};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};var _n=class n{constructor(i){this.notificationService=i}handle(i,e){let t=i.console.error.error||e;this.notificationService.error(t),console.error("API Error:",i)}static \u0275fac=function(e){return new(e||n)(Ne(li))};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};function Gf(n,i){n&1&&(m(0,"mat-error"),f(1," Full name is required "),h())}function qf(n,i){n&1&&(m(0,"mat-error"),f(1," Full name must be at least 2 characters long "),h())}function Kf(n,i){n&1&&(m(0,"mat-error"),f(1," Email is required "),h())}function Xf(n,i){n&1&&(m(0,"mat-error"),f(1," Please enter a valid email address "),h())}function $f(n,i){n&1&&(m(0,"mat-error"),f(1," Password is required "),h())}function Qf(n,i){n&1&&(m(0,"mat-error"),f(1," Password must be at least 6 characters "),h())}function Yf(n,i){n&1&&(m(0,"mat-error"),f(1," Confirm password is required "),h())}function Zf(n,i){n&1&&(m(0,"mat-error"),f(1," Passwords do not match "),h())}var Nr=class n{constructor(i,e,t,o,r,a){this.fb=i;this.authService=e;this.router=t;this.route=o;this.notification=r;this.errorHandlerService=a;this.signupForm=this.fb.group({fullName:["",[ve.required,ve.minLength(2)]],email:["",[ve.required,ve.email]],password:["",[ve.required,ve.minLength(6)]],confirmPassword:["",[ve.required,this.authService.passwrodMatchValidator("password")]]})}hidePassword=!0;hideConfirmPassword=!0;signupForm;loading=!1;ngOnInit(){this.authService.isLoggedIn()&&this.authService.redirectBaseOnRole();let i=this.route.snapshot.queryParamMap.get("email");i&&(this.signupForm.patchValue({email:i}),console.log("prefill signup email:",i))}submit(){this.loading=!0;let i=this.signupForm.value,e={fullName:i.fullName,email:i.email?.trim().toLowerCase(),password:i.password};this.authService.signup(e).subscribe({next:t=>{this.loading=!1,console.debug("[Signup] \u6CE8\u518C\u6210\u529F\uFF0C\u54CD\u5E94\uFF1A",t),this.notification.success(t?.message||"Signup successful! Please check your email to verify your account."),this.router.navigate(["/login"])},error:t=>{this.loading=!1,console.error("[Signup] \u6CE8\u518C\u5931\u8D25:",t),this.errorHandlerService.handle(t,"Signup failed. Please try again later.");debugger}})}static \u0275fac=function(e){return new(e||n)(X(Zi),X($e),X(st),X(Ro),X(li),X(_n))};static \u0275cmp=x({type:n,selectors:[["app-signup"]],standalone:!1,decls:57,vars:14,consts:[[1,"signup-page"],[1,"bg"],[1,"logo"],[1,"logo-icon"],[1,"logo-text"],["appearance","outlined",1,"signup-card"],[1,"subtitle"],[1,"form",3,"ngSubmit","formGroup"],["appearance","outline",1,"field"],["matInput","","formControlName","fullName"],["matPrefix",""],[4,"ngIf"],["matInput","","formControlName","email"],["matInput","","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","","type","button","tabindex","-1",3,"click"],["matInput","","formControlName","confirmPassword",3,"type"],["mat-raised-button","","color","primary","type","submit",1,"sign-up-btn",3,"disabled"],[1,"signin"],["routerLink","/login",1,"link"]],template:function(e,t){if(e&1&&(m(0,"div",0),F(1,"div",1),m(2,"div",2)(3,"mat-icon",3),f(4,"movie"),h(),m(5,"span",4),f(6,"Pudplanet"),h()(),m(7,"mat-card",5)(8,"h1"),f(9,"Sign Up"),h(),m(10,"p",6),f(11,"Create your account to get started"),h(),m(12,"form",7),L("ngSubmit",function(){return t.submit()}),m(13,"mat-form-field",8)(14,"mat-label"),f(15,"Full Name"),h(),F(16,"input",9),m(17,"mat-icon",10),f(18,"person"),h(),te(19,Gf,2,0,"mat-error",11)(20,qf,2,0,"mat-error",11),h(),m(21,"mat-form-field",8)(22,"mat-label"),f(23,"Email"),h(),F(24,"input",12),m(25,"mat-icon",10),f(26,"email"),h(),te(27,Kf,2,0,"mat-error",11)(28,Xf,2,0,"mat-error",11),h(),m(29,"mat-form-field",8)(30,"mat-label"),f(31,"Password"),h(),F(32,"input",13),m(33,"mat-icon",10),f(34,"lock"),h(),m(35,"button",14),L("click",function(){return t.hidePassword=!t.hidePassword}),m(36,"mat-icon"),f(37),h()(),te(38,$f,2,0,"mat-error",11)(39,Qf,2,0,"mat-error",11),h(),m(40,"mat-form-field",8)(41,"mat-label"),f(42,"Confirm Password"),h(),F(43,"input",15),m(44,"mat-icon",10),f(45,"lock"),h(),m(46,"button",14),L("click",function(){return t.hideConfirmPassword=!t.hideConfirmPassword}),m(47,"mat-icon"),f(48),h()(),te(49,Yf,2,0,"mat-error",11)(50,Zf,2,0,"mat-error",11),h(),m(51,"button",16),f(52," Sign Up "),h()(),m(53,"div",17),f(54," Already have an account? "),m(55,"a",18),f(56,"Sign In"),h()()()()),e&2){let o,r,a,s,c,d,u,g;p(12),w("formGroup",t.signupForm),p(7),w("ngIf",(o=t.signupForm.get("fullName"))==null?null:o.hasError("required")),p(),w("ngIf",(r=t.signupForm.get("fullName"))==null?null:r.hasError("minlength")),p(7),w("ngIf",(a=t.signupForm.get("email"))==null?null:a.hasError("required")),p(),w("ngIf",(s=t.signupForm.get("email"))==null?null:s.hasError("email")),p(4),w("type",t.hidePassword?"password":"text"),p(5),ue(t.hidePassword?"visibility_off":"visibility"),p(),w("ngIf",(c=t.signupForm.get("password"))==null?null:c.hasError("required")),p(),w("ngIf",(d=t.signupForm.get("password"))==null?null:d.hasError("minlength")),p(4),w("type",t.hideConfirmPassword?"password":"text"),p(5),ue(t.hideConfirmPassword?"visibility_off":"visibility"),p(),w("ngIf",(u=t.signupForm.get("confirmPassword"))==null?null:u.hasError("required")),p(),w("ngIf",(g=t.signupForm.get("confirmPassword"))==null?null:g.hasError("passwordMismatch")),p(),w("disabled",t.signupForm.invalid)}},dependencies:[Qt,Yi,ei,$i,Qi,ft,yi,Vi,ti,Tt,ki,Dt,Ut,Si,Mi,Qn,ln,cn],styles:[".signup-page[_ngcontent-%COMP%]{background:#141414;color:#fff;min-height:100vh;min-height:100dvh;width:100vw;position:relative;overflow:hidden;font-family:Helvetica Neue,Arial,sans-serif}.bg[_ngcontent-%COMP%]{position:absolute;inset:0;background-image:linear-gradient(to top,#000000e6,#0000004d 40%,#000000e6),url(/landing.jpg);background-size:cover;background-position:center;filter:brightness(.9);z-index:1}.logo[_ngcontent-%COMP%]{position:absolute;left:32px;top:18px;z-index:2;display:flex;align-items:center;gap:12px;font-size:24px;font-weight:700;letter-spacing:-.5px;flex-shrink:0}.logo-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px;color:#e50914}.logo-text[_ngcontent-%COMP%]{color:#e50914;font-weight:900;letter-spacing:-.5px}.signup-card[_ngcontent-%COMP%]{position:relative;z-index:2;margin:0 auto;margin-top:clamp(64px,12vh,120px);width:min(92vw,440px);padding:36px 40px 28px;background:#000000bf!important;border:1px solid rgba(255,255,255,.08);border-radius:6px;box-shadow:0 8px 32px #0009}.signup-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 12px;font-size:32px;font-weight:700}.signup-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:12px 0 8px;font-size:24px;font-weight:600;text-align:center}.signup-card[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin:0 0 24px;color:#b3b3b3;font-size:16px;line-height:1.4}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.field[_ngcontent-%COMP%]{width:100%;margin-bottom:14px}.field[_ngcontent-%COMP%]   .mat-mdc-input-element[_ngcontent-%COMP%]{color:#fff}.field[_ngcontent-%COMP%]   .mat-mdc-form-field-icon-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#ffffffb3;margin-right:8px}.field[_ngcontent-%COMP%]   .mat-mdc-form-field-icon-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#fffc}[_nghost-%COMP%]     .signup-card .mdc-text-field--outlined .mdc-notched-outline__leading, [_nghost-%COMP%]     .signup-card .mdc-text-field--outlined .mdc-notched-outline__notch, [_nghost-%COMP%]     .signup-card .mdc-text-field--outlined .mdc-notched-outline__trailing{border-color:#ffffff59}[_nghost-%COMP%]     .signup-card .mdc-text-field--focused .mdc-notched-outline__leading, [_nghost-%COMP%]     .signup-card .mdc-text-field--focused .mdc-notched-outline__notch, [_nghost-%COMP%]     .signup-card .mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#fff}[_nghost-%COMP%]     .signup-card .mdc-text-field .mdc-floating-label, [_nghost-%COMP%]     .signup-card .mat-mdc-form-field-hint-wrapper, [_nghost-%COMP%]     .signup-card .mat-mdc-form-field-subscript-wrapper{color:#b3b3b3!important}.error-message[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:12px;margin-bottom:12px;background:#e509141a;border:1px solid rgba(229,9,20,.3);border-radius:4px;color:#ff6b6b;font-size:14px}.error-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.sign-up-btn[_ngcontent-%COMP%]{width:100%;height:48px;margin-top:10px;font-weight:700;background:#e50914!important;color:#fff!important;border-radius:4px;transition:all .2s ease}.sign-up-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:#f40612!important}.sign-up-btn[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.signin[_ngcontent-%COMP%]{margin-top:20px;text-align:center;color:#b3b3b3}.signin[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:#fff;text-decoration:none;margin-left:6px;font-size:14px}.signin[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{text-decoration:underline}@media(max-width:600px){.signup-card[_ngcontent-%COMP%]{padding:28px 24px 24px}}"]})};function Jf(n,i){n&1&&(m(0,"mat-error"),f(1," Email is required "),h())}function eg(n,i){n&1&&(m(0,"mat-error"),f(1," Please enter a valid email address "),h())}function tg(n,i){n&1&&(m(0,"mat-error"),f(1," Password is required "),h())}function ig(n,i){if(n&1){let e=dt();m(0,"button",20),L("click",function(){ot(e);let o=q();return rt(o.resendVerificationEmail())}),f(1,"Resend Verification Email"),h()}}var Lr=class n{constructor(i,e,t,o,r){this.fb=i;this.authService=e;this.router=t;this.notification=o;this.errorHandlerService=r;this.loginForm=this.fb.group({email:["",[ve.required,ve.email]],password:["",[ve.required,ve.minLength(6)]]})}showResendEmail=!1;userEmail="";loading=!1;hidePassword=!0;loginForm;ngOnInit(){this.authService.isLoggedIn()&&this.authService.redirectBaseOnRole()}submit(){console.log("submit called"),this.loading=!0;let i=this.loginForm.value;console.log("formData:",i);let e={email:i.email?.trim().toLowerCase(),password:i.password};console.log("authdata:",e),console.log("before login request"),this.authService.login(e).subscribe({next:t=>{console.log("login request success"),this.loading=!1,console.debug("[Login] \u767B\u5F55\u6210\u529F\uFF0C\u54CD\u5E94\uFF1A",t),(!t||!t.token)&&console.error("[Login] \u54CD\u5E94\u65E0 token:",t),this.authService.handleAuthSuccess(t),t.role==="ADMIN"?this.router.navigate(["/admin"]):this.router.navigate(["/home"])},error:t=>{console.log("login request error",t),this.loading=!1;let o=t?.error?.message||t?.error?.err||"Login failed. Please check your credentials and try again.";t.status===403&&o.toLowerCase().includes("verified")?(this.showResendEmail=!0,this.userEmail=this.loginForm.value.email):this.showResendEmail=!1,this.notification.error(o),console.error("[Login] \u767B\u5F55\u5931\u8D25:",t);debugger},complete:()=>{console.debug("[Login] \u767B\u5F55\u6D41\u7A0B complete")}})}resendVerificationEmail(){if(!this.userEmail){this.notification.error("No email available to resend verification link.");return}this.showResendEmail=!1,this.loading=!0,this.authService.resendVerificationEmail(this.userEmail).subscribe({next:i=>{this.loading=!1,this.notification.success(i?.message||"Verification email resent! Please check your inbox.")},error:i=>{this.loading=!1,this.errorHandlerService.handle(i,"Failed to resend verification email. Please try again later.")}})}forgot(){this.router.navigate(["/forgot-password"])}static \u0275fac=function(e){return new(e||n)(X(Zi),X($e),X(st),X(li),X(_n))};static \u0275cmp=x({type:n,selectors:[["app-login"]],standalone:!1,decls:44,vars:9,consts:[[1,"auth-page"],[1,"bg"],[1,"logo"],[1,"logo-icon"],[1,"logo-text"],["appearance","outlined",1,"auth-card"],[1,"subtitle"],["novalidate","",1,"form",3,"ngSubmit","formGroup"],["appearance","outline",1,"field"],["matInput","","formControlName","email","type","email","id","email","name","email"],["matPrefix",""],[4,"ngIf"],["matInput","","formControlName","password","id","password","name","password",3,"type"],["mat-icon-button","","matSuffix","","type","button","tabindex","-1",3,"click"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["class","link-btn resend","type","button",3,"click",4,"ngIf"],["type","button",1,"link-btn","forgot",3,"click"],[1,"singup"],["routerLink","/signup"],[1,"signup-link"],["type","button",1,"link-btn","resend",3,"click"]],template:function(e,t){if(e&1&&(m(0,"div",0),F(1,"div",1),m(2,"div",2)(3,"mat-icon",3),f(4,"movie"),h(),F(5,"span",4),h(),m(6,"mat-card",5)(7,"h1"),f(8,"Sign In"),h(),m(9,"p",6),f(10,"Welcome back! Please sign in to your account."),h(),m(11,"form",7),L("ngSubmit",function(){return t.submit()}),m(12,"mat-form-field",8)(13,"mat-label"),f(14,"Email"),h(),F(15,"input",9),m(16,"mat-icon",10),f(17,"email"),h(),te(18,Jf,2,0,"mat-error",11)(19,eg,2,0,"mat-error",11),h(),m(20,"mat-form-field",8)(21,"mat-label"),f(22,"Password"),h(),F(23,"input",12),m(24,"mat-icon",10),f(25,"lock"),h(),m(26,"button",13),L("click",function(){return t.hidePassword=!t.hidePassword}),m(27,"mat-icon"),f(28),h()(),te(29,tg,2,0,"mat-error",11),h(),m(30,"button",14),f(31),h(),te(32,ig,2,0,"button",15),m(33,"button",16),L("click",function(){return t.forgot()}),f(34,"Forgot Password?"),h(),m(35,"div",17)(36,"span"),f(37,"New to Pudplanet? "),m(38,"a",18),f(39,"Sign up now."),h()()()(),m(40,"p",19),f(41," New to Pudplanet? "),m(42,"a",18),f(43,"Sign up now."),h()()()()),e&2){let o,r,a;p(11),w("formGroup",t.loginForm),p(7),w("ngIf",(o=t.loginForm.get("email"))==null?null:o.hasError("required")),p(),w("ngIf",(r=t.loginForm.get("email"))==null?null:r.hasError("email")),p(4),w("type",t.hidePassword?"password":"text"),p(5),ue(t.hidePassword?"visibility_off":"visibility"),p(),w("ngIf",(a=t.loginForm.get("password"))==null?null:a.hasError("required")),p(),w("disabled",t.loginForm.invalid),p(),ue(t.loading?"Signing In...":"Sign In"),p(),w("ngIf",t.showResendEmail)}},dependencies:[Qt,Yi,ei,$i,Qi,ft,yi,Vi,ti,Tt,ki,Dt,Ut,Si,Mi,Qn,ln,cn],styles:[".auth-page[_ngcontent-%COMP%]{background:#141414;color:#fff;min-height:100vh;min-height:100dvh;width:100vw;position:relative;overflow:hidden;font-family:Helvetica Neue,Arial,sans-serif}.bg[_ngcontent-%COMP%]{position:absolute;inset:0;background-image:linear-gradient(to top,#000000e6,#0000004d 40%,#000000e6),url(/landing.jpg);background-size:cover;background-position:center;filter:brightness(.9);z-index:1}.logo[_ngcontent-%COMP%]{position:absolute;left:32px;top:18px;z-index:2;display:flex;align-items:center;gap:12px;font-size:24px;font-weight:700;letter-spacing:-.5px;flex-shrink:0}.logo-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px;color:#e50914}.logo-text[_ngcontent-%COMP%]{background:linear-gradient(135deg,#e50914,#ff6b6b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.auth-card[_ngcontent-%COMP%]{position:relative;z-index:2;margin:0 auto;margin-top:clamp(64px,12vh,120px);width:min(92vw,440px);padding:36px 40px 28px;background:#000000bf!important;border:1px solid rgba(255,255,255,.08);border-radius:6px;box-shadow:0 8px 32px #0009}.auth-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 12px;font-size:32px;font-weight:700}.auth-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:12px 0 8px;font-size:24px;font-weight:600;text-align:center}.auth-card[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin:0 0 24px;color:#b3b3b3;font-size:16px;line-height:1.4}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.field[_ngcontent-%COMP%]{width:100%;margin-bottom:14px}.field[_ngcontent-%COMP%]   .mat-mdc-input-element[_ngcontent-%COMP%]{color:#fff}.field[_ngcontent-%COMP%]   .mat-mdc-form-field-icon-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#ffffffb3;margin-right:8px}.field[_ngcontent-%COMP%]   .mat-mdc-form-field-icon-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#fffc}[_nghost-%COMP%]     .auth-card .mdc-text-field--outlined .mdc-notched-outline__leading, [_nghost-%COMP%]     .auth-card .mdc-text-field--outlined .mdc-notched-outline__notch, [_nghost-%COMP%]     .auth-card .mdc-text-field--outlined .mdc-notched-outline__trailing{border-color:#ffffff59}[_nghost-%COMP%]     .auth-card .mdc-text-field--focused .mdc-notched-outline__leading, [_nghost-%COMP%]     .auth-card .mdc-text-field--focused .mdc-notched-outline__notch, [_nghost-%COMP%]     .auth-card .mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#fff}[_nghost-%COMP%]     .auth-card .mdc-text-field .mdc-floating-label, [_nghost-%COMP%]     .auth-card .mat-mdc-form-field-hint-wrapper, [_nghost-%COMP%]     .auth-card .mat-mdc-form-field-subscript-wrapper{color:#b3b3b3!important}.sign-in-btn[_ngcontent-%COMP%]{width:100%;height:48px;margin-top:10px;font-weight:700;background:#e50914!important;color:#fff!important;border-radius:4px;transition:all .2s ease}.sign-in-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:#f40612!important}.sign-in-btn[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.or-wrap[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:12px;margin:14px 0 8px}.or-wrap[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{border-top-color:#fff3}.or-wrap[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#b3b3b3;letter-spacing:.06em}.code-btn[_ngcontent-%COMP%]{width:100%;height:46px;margin-top:6px;font-weight:700;background:#6d6d6eb3!important;color:#fff!important;border-radius:4px}.code-btn[_ngcontent-%COMP%]:hover{background:#333!important}.error-message[_ngcontent-%COMP%]{padding:12px;margin-bottom:12px;background:#e509141a;border:1px solid rgba(229,9,20,.3);border-radius:4px;color:#ff6b6b;font-size:14px;text-align:center}.link-btn.resend[_ngcontent-%COMP%], .link-btn.forgot[_ngcontent-%COMP%]{margin-top:10px;background:transparent;border:0;color:#b3b3b3;text-align:center;width:100%;cursor:pointer;font-size:14px}[_ngcontent-%COMP%]:is(.link-btn.resend,.link-btn.forgot):hover{color:#fff;text-decoration:underline}.link-btn.resend[_ngcontent-%COMP%]{color:#e50914;font-weight:600}.link-btn.resend[_ngcontent-%COMP%]:hover{color:#f40612}.options[_ngcontent-%COMP%]{margin-top:6px}[_nghost-%COMP%]     .options .mat-mdc-checkbox{--mdc-checkbox-selected-icon-color: #e50914;--mdc-checkbox-unselected-icon-color: rgba(255, 255, 255, .7);--mdc-checkbox-selected-checkmark-color: #fff;--mdc-checkbox-unselected-hover-icon-color: #fff}[_nghost-%COMP%]     .options .mdc-label{color:#b3b3b3!important;font-size:14px}[_nghost-%COMP%]     .options .mdc-form-field{color:#b3b3b3!important}.signup[_ngcontent-%COMP%]{margin-top:18px;text-align:center;color:#b3b3b3}.signup[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:#fff;text-decoration:none;margin-left:6px}.signup[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{text-decoration:underline}.captcha-note[_ngcontent-%COMP%]{margin-top:14px;color:#8c8c8c;font-size:.92rem}.captcha-note[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:#0aa6ff;text-decoration:none}.captcha-note[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{text-decoration:underline}@media(max-width:600px){.auth-card[_ngcontent-%COMP%]{padding:28px 24px 24px}}"]})};var ng=["determinateSpinner"];function og(n,i){if(n&1&&(Oe(),m(0,"svg",11),F(1,"circle",12),h()),n&2){let e=q();z("viewBox",e._viewBox()),p(),mt("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),z("r",e._circleRadius())}}var rg=new v("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Gm})}),Gm=100,ag=10,qm=(()=>{class n{_elementRef=l(P);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=l(rg),t=fs(),o=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=o.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&o.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Gm;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-ag)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,o){if(t&1&&he(ng,5),t&2){let r;U(r=W())&&(o._determinateCircle=r.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,o){t&2&&(z("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",o.mode==="determinate"?o.value:null)("mode",o.mode),Ie("mat-"+o.color),mt("width",o.diameter,"px")("height",o.diameter,"px")("--mat-progress-spinner-size",o.diameter+"px")("--mat-progress-spinner-active-indicator-width",o.diameter+"px"),T("_mat-animation-noopable",o._noopAnimations)("mdc-circular-progress--indeterminate",o.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Ce],diameter:[2,"diameter","diameter",Ce],strokeWidth:[2,"strokeWidth","strokeWidth",Ce]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,o){if(t&1&&(te(0,og,2,8,"ng-template",null,0,ko),m(2,"div",2,1),Oe(),m(4,"svg",3),F(5,"circle",4),h()(),Co(),m(6,"div",5)(7,"div",6)(8,"div",7),Li(9,8),h(),m(10,"div",9),Li(11,8),h(),m(12,"div",10),Li(13,8),h()()()),t&2){let r=Je(1);p(4),z("viewBox",o._viewBox()),p(),mt("stroke-dasharray",o._strokeCircumference(),"px")("stroke-dashoffset",o._strokeDashOffset(),"px")("stroke-width",o._circleStrokeWidth(),"%"),z("r",o._circleRadius()),p(4),w("ngTemplateOutlet",r),p(2),w("ngTemplateOutlet",r),p(2),w("ngTemplateOutlet",r)}},dependencies:[Eo],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var js=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[N]})}return n})();function lg(n,i){n&1&&(m(0,"div",9),F(1,"mat-spinner",10),m(2,"h2"),f(3,"Verifying Email..."),h()())}function cg(n,i){if(n&1&&(m(0,"div",11)(1,"mat-icon",12),f(2,"check_circle"),h(),m(3,"h1"),f(4,"Email Verified!"),h(),m(5,"p",13),f(6),h(),m(7,"button",14),f(8,"Go to Login"),h()()),n&2){let e=q();p(6),ue(e.message)}}function dg(n,i){if(n&1&&(m(0,"div",15)(1,"mat-icon",16),f(2,"error_outline"),h(),m(3,"h1"),f(4,"Verification Failed"),h(),m(5,"p",13),f(6),h(),m(7,"div",17)(8,"button",14),f(9,"Go to Login"),h(),m(10,"p",18),f(11," Didn't receive the verification email? "),m(12,"a",19),f(13,"Resend it"),h()()()()),n&2){let e=q();p(6),ue(e.message)}}var Vr=class n{constructor(i,e,t){this.route=i;this.authService=e;this.cdr=t}loading=!0;success=!1;message="";ngOnInit(){let i=this.route.snapshot.queryParamMap.get("token");if(console.log("[VerifyEmail] token:",i),!i){this.loading=!1,this.success=!1,this.message="Invalid verification link. No token provided.",console.log("[VerifyEmail] No token provided");return}this.authService.verifyEmail(i).subscribe({next:e=>{this.loading=!1,this.success=!0,this.message=e?.message||"Email verified successfully! You can now log in.",this.cdr.detectChanges(),console.log("[VerifyEmail] Success:",e)},error:e=>{this.loading=!1,this.success=!1,this.message=e?.error?.message||e?.error?.err||"Verification failed. The link may be invalid or expired.",this.cdr.detectChanges(),console.log("[VerifyEmail] Error:",e)}})}static \u0275fac=function(e){return new(e||n)(X(Ro),X($e),X(ce))};static \u0275cmp=x({type:n,selectors:[["app-verify-email"]],standalone:!1,decls:11,vars:3,consts:[[1,"auth-page"],[1,"bg"],[1,"logo"],[1,"logo-icon"],[1,"logo-text"],["appearance","outlined",1,"auth-card"],["class","loading-container",4,"ngIf"],["class","success-container",4,"ngIf"],["class","error-container",4,"ngIf"],[1,"loading-container"],["diameter","50"],[1,"success-container"],[1,"success-icon"],[1,"message"],["mat-flat-button","","routerLink","/login",1,"action-btn"],[1,"error-container"],[1,"error-icon"],[1,"actions"],[1,"resend-info"],["routerLink","/resend-verification"]],template:function(e,t){e&1&&(m(0,"div",0),F(1,"div",1),m(2,"div",2)(3,"div",3),f(4,"P"),h(),m(5,"div",4),f(6,"PulseScreen"),h()(),m(7,"div",5),te(8,lg,4,0,"div",6)(9,cg,9,1,"div",7)(10,dg,14,1,"div",8),h()()),e&2&&(p(8),w("ngIf",t.loading),p(),w("ngIf",!t.loading&&t.success),p(),w("ngIf",!t.loading&&!t.success))},dependencies:[Qt,Vi,ti,Tt,qm],styles:[".auth-page[_ngcontent-%COMP%]{background:#141414;color:#fff;min-height:100vh;width:100vw;position:relative;overflow:hidden;font-family:Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;justify-content:center}.bg[_ngcontent-%COMP%]{position:absolute;inset:0;background-image:linear-gradient(to top,#000000e6,#0000004d 40%,#000000e6),url(/landing.jpg);background-size:cover;background-position:center;filter:brightness(.9);z-index:1}.logo[_ngcontent-%COMP%]{position:absolute;left:32px;top:18px;z-index:2;display:flex;align-items:center;gap:12px;font-size:24px;font-weight:700;letter-spacing:-.5px;flex-shrink:0}.logo-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px;color:#e50914}.logo-text[_ngcontent-%COMP%]{background:linear-gradient(135deg,#e50914,#ff6b6b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.auth-card[_ngcontent-%COMP%]{position:relative;z-index:2;width:min(92vw,480px);padding:48px 40px;background:#000000bf!important;border:1px solid rgba(255,255,255,.08);border-radius:8px;box-shadow:0 8px 32px #0009;text-align:center}.loading-container[_ngcontent-%COMP%], .success-container[_ngcontent-%COMP%], .error-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:20px}.loading-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:600;color:#ffffffe6}.success-icon[_ngcontent-%COMP%]{font-size:80px;width:80px;height:80px;color:#4caf50}.error-icon[_ngcontent-%COMP%]{font-size:80px;width:80px;height:80px;color:#e50914}h1[_ngcontent-%COMP%]{margin:0;font-size:32px;font-weight:700;color:#fff}.message[_ngcontent-%COMP%]{margin:0;font-size:16px;color:#fffc;line-height:1.6}.actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;width:100%;max-width:300px;margin-top:8px}.action-btn[_ngcontent-%COMP%]{width:100%;height:48px;font-weight:700;background:#e50914!important;color:#fff!important;border-radius:4px;transition:all .3s ease}.action-btn[_ngcontent-%COMP%]:hover{background:#f40612!important;transform:translateY(-1px)}.secondary-btn[_ngcontent-%COMP%]{width:100%;height:48px;font-weight:600;color:#fff!important;border-color:#ffffff4d!important;border-radius:4px;transition:all .3s ease}.secondary-btn[_ngcontent-%COMP%]:hover{background:#ffffff1a!important;border-color:#ffffff80!important}@media(max-width:600px){.auth-card[_ngcontent-%COMP%]{padding:36px 24px}h1[_ngcontent-%COMP%]{font-size:26px}.success-icon[_ngcontent-%COMP%], .error-icon[_ngcontent-%COMP%]{font-size:60px;width:60px;height:60px}}"]})};var Br=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-home"]],standalone:!1,decls:2,vars:0,template:function(e,t){e&1&&(m(0,"p"),f(1,"home works!"),h())},styles:[".dashboard-container[_ngcontent-%COMP%]{min-height:100vh;background:linear-gradient(to bottom,#0a0a0a,#141414);color:#fff;width:100%;overflow-x:hidden}.search-section[_ngcontent-%COMP%]{padding:24px 40px;background:#0000004d}.search-container[_ngcontent-%COMP%]{max-width:1800px;margin:0 auto}.search-input[_ngcontent-%COMP%]{width:100%;max-width:600px}  .search-input .mat-mdc-form-field-subscript-wrapper{display:none}  .search-input .mat-mdc-text-field-wrapper{padding:0!important;background:#ffffff08}  .search-input .mat-mdc-form-field-infix{padding:12px 0!important;min-height:48px}  .search-input input{font-size:16px;color:#fff!important;caret-color:#e50914}  .search-input input::placeholder{color:#ffffff80!important}  .search-input .mat-mdc-form-field-icon-prefix{padding-right:12px}  .search-input .mat-mdc-form-field-icon-prefix mat-icon{color:#fff9!important}  .search-input .mat-mdc-notched-outline .mat-mdc-notched-outline-leading,   .search-input .mat-mdc-notched-outline .mat-mdc-notched-outline-notch,   .search-input .mat-mdc-notched-outline .mat-mdc-notched-outline-trailing{border-color:#ffffff4d!important;transition:border-color .3s ease}  .search-input.mat-focused .mat-mdc-notched-outline .mat-mdc-notched-outline-leading,   .search-input.mat-focused .mat-mdc-notched-outline .mat-mdc-notched-outline-notch,   .search-input.mat-focused .mat-mdc-notched-outline .mat-mdc-notched-outline-trailing{border-color:#e50914!important;border-width:2px!important}  .search-input:hover:not(.mat-focused) .mat-mdc-notched-outline .mat-mdc-notched-outline-leading,   .search-input:hover:not(.mat-focused) .mat-mdc-notched-outline .mat-mdc-notched-outline-notch,   .search-input:hover:not(.mat-focused) .mat-mdc-notched-outline .mat-mdc-notched-outline-trailing{border-color:#ffffff80!important}.banner-slider[_ngcontent-%COMP%]{position:relative;height:600px;margin-bottom:36px;overflow:hidden}.banner-loading[_ngcontent-%COMP%]{height:600px;display:flex;align-items:center;justify-content:center;background:#0000004d;margin-bottom:36px}.slider-container[_ngcontent-%COMP%], .slides[_ngcontent-%COMP%]{position:relative;width:100%;height:100%}.slide[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;visibility:hidden;transition:opacity .8s ease-in-out,visibility .8s ease-in-out;display:flex;align-items:flex-end}.slide.active[_ngcontent-%COMP%]{opacity:1;visibility:visible;z-index:1}.banner-bg[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;z-index:1}.banner-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to top,#000000e6,#00000080,#0000004d);z-index:2}.banner-content[_ngcontent-%COMP%]{position:relative;z-index:3;padding:60px 40px;max-width:700px;width:100%}.banner-title[_ngcontent-%COMP%]{font-size:3.5rem;margin:0 0 16px;font-weight:700;text-shadow:0 4px 12px rgba(0,0,0,.9);line-height:1.1}.banner-description[_ngcontent-%COMP%]{font-size:1.3rem;margin:0 0 28px;line-height:1.5;text-shadow:0 2px 8px rgba(0,0,0,.9);display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.banner-actions[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}.banner-slider[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]{padding:16px 48px;font-size:1.1rem;border:none;border-radius:8px;cursor:pointer;font-weight:700;transition:all .3s ease;display:inline-flex;align-items:center;gap:10px;background:#e50914;color:#fff;box-shadow:0 4px 16px #e5091466}.banner-slider[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:28px;width:28px;height:28px}.banner-slider[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]:hover{background:#f40612;transform:translateY(-3px) scale(1.05);box-shadow:0 8px 24px #e5091499}.play-btn[_ngcontent-%COMP%], .watch-later-btn[_ngcontent-%COMP%]{padding:12px 32px;font-size:1rem;border:none;border-radius:6px;cursor:pointer;font-weight:600;transition:all .2s ease;display:inline-flex;align-items:center;gap:8px}.play-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .watch-later-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px}.video-grid[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]{background:#fff;color:#141414}.video-grid[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]:hover{background:#ffffffe6;transform:translateY(-2px);box-shadow:0 4px 12px #ffffff4d}.watch-later-btn[_ngcontent-%COMP%]{background:#6d6d6eb3;color:#fff}.watch-later-btn[_ngcontent-%COMP%]:hover{background:#6d6d6ee6;transform:translateY(-2px)}.slider-nav[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);z-index:10;background:#000000b3;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.2);color:#fff;width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .3s ease;opacity:0}.banner-slider[_ngcontent-%COMP%]:hover   .slider-nav[_ngcontent-%COMP%]{opacity:1}.slider-nav[_ngcontent-%COMP%]:hover{background:#e50914e6;transform:translateY(-50%) scale(1.1);box-shadow:0 4px 20px #e5091480}.slider-nav.prev[_ngcontent-%COMP%]{left:20px}.slider-nav.next[_ngcontent-%COMP%]{right:20px}.slider-nav[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}.slider-indicators[_ngcontent-%COMP%]{position:absolute;bottom:24px;left:50%;transform:translate(-50%);z-index:10;display:flex;gap:10px;padding:12px 20px;background:#00000080;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border-radius:24px}.indicator[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;border:2px solid rgba(255,255,255,.6);background:transparent;cursor:pointer;transition:all .3s ease;padding:0}.indicator[_ngcontent-%COMP%]:hover{border-color:#fff;transform:scale(1.2)}.indicator.active[_ngcontent-%COMP%]{background:#e50914;border-color:#e50914;width:32px;border-radius:6px}.content-section[_ngcontent-%COMP%]{padding:0 40px 60px;max-width:1800px;margin:0 auto}.video-section[_ngcontent-%COMP%]{margin-bottom:48px}.section-title[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:600;margin-bottom:24px;color:#fff}.video-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px}.video-card[_ngcontent-%COMP%]{background:#ffffff08;border:1px solid rgba(255,255,255,.08);border-radius:12px;overflow:hidden;transition:all .3s ease;cursor:pointer}.video-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 12px 40px #0009;border-color:#e509144d}.card-thumbnail[_ngcontent-%COMP%]{position:relative;aspect-ratio:2/3;overflow:hidden;background:#000}.thumbnail-img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .3s ease}.video-card[_ngcontent-%COMP%]:hover   .thumbnail-img[_ngcontent-%COMP%]{transform:scale(1.05)}.thumbnail-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:#0006;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s ease}.video-card[_ngcontent-%COMP%]:hover   .thumbnail-overlay[_ngcontent-%COMP%]{opacity:1}.play-icon[_ngcontent-%COMP%]{font-size:64px;width:64px;height:64px;color:#fff;filter:drop-shadow(0 4px 12px rgba(0,0,0,.5))}.duration-badge[_ngcontent-%COMP%]{position:absolute;bottom:8px;right:8px;background:#000000d9;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);padding:4px 8px;border-radius:4px;font-size:12px;font-weight:600}.card-content[_ngcontent-%COMP%]{padding:16px}.card-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:8px}.card-title[_ngcontent-%COMP%]{font-size:18px;font-weight:600;margin:0;line-height:1.3;cursor:pointer;transition:color .2s ease;flex:1}.card-title[_ngcontent-%COMP%]:hover{color:#e50914}.watch-later-icon[_ngcontent-%COMP%]{flex-shrink:0;width:32px;height:32px;padding:4px;color:#ffffffb3;transition:all .2s ease;border-radius:50%}.watch-later-icon[_ngcontent-%COMP%]:hover{color:#fff;background:#ffffff1a}.watch-later-icon.active[_ngcontent-%COMP%]{color:#e50914}.watch-later-icon.active[_ngcontent-%COMP%]:hover{background:#e509141a}.watch-later-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.card-description[_ngcontent-%COMP%]{font-size:14px;color:#fff9;margin:0 0 12px;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-meta[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}.meta-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;font-size:13px;color:#ffffffb3}.meta-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.loading-bar[_ngcontent-%COMP%]{margin:0 40px 24px;border-radius:4px}.error-container[_ngcontent-%COMP%]{text-align:center;padding:80px 40px;background:#ffffff05;border:2px dashed rgba(255,255,255,.1);border-radius:16px;margin:0 40px}.error-icon[_ngcontent-%COMP%]{font-size:64px;width:64px;height:64px;color:#e50914;margin:0 auto 16px}.error-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;color:#ffffffb3;margin-bottom:24px}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:80px 20px;background:#ffffff05;border:2px dashed rgba(255,255,255,.1);border-radius:16px;margin:0 auto}.empty-icon[_ngcontent-%COMP%]{font-size:80px;width:80px;height:80px;color:#ffffff4d;margin:0 auto 24px}.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;margin:0 0 12px;color:#ffffffe6}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#fff9;margin:0 0 24px}@media(max-width:1024px){.banner-title[_ngcontent-%COMP%]{font-size:2.8rem}.banner-description[_ngcontent-%COMP%]{font-size:1.1rem}}@media(max-width:768px){.search-section[_ngcontent-%COMP%]{padding:16px}.banner-slider[_ngcontent-%COMP%], .banner-loading[_ngcontent-%COMP%]{height:450px}.banner-content[_ngcontent-%COMP%]{padding:40px 20px;max-width:100%}.banner-title[_ngcontent-%COMP%]{font-size:2rem}.banner-description[_ngcontent-%COMP%]{font-size:1rem;-webkit-line-clamp:2}.banner-slider[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]{padding:14px 36px;font-size:1rem}.banner-slider[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px}.play-btn[_ngcontent-%COMP%], .watch-later-btn[_ngcontent-%COMP%]{padding:10px 24px;font-size:.9rem}.slider-nav[_ngcontent-%COMP%]{width:40px;height:40px;opacity:1}.slider-nav.prev[_ngcontent-%COMP%]{left:10px}.slider-nav.next[_ngcontent-%COMP%]{right:10px}.slider-nav[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px}.slider-indicators[_ngcontent-%COMP%]{bottom:16px;padding:8px 16px;gap:8px}.indicator[_ngcontent-%COMP%]{width:8px;height:8px}.indicator.active[_ngcontent-%COMP%]{width:24px}.content-section[_ngcontent-%COMP%]{padding:0 16px 40px}.video-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px}.load-more-container[_ngcontent-%COMP%]{padding:20px 10px}}.load-more-container[_ngcontent-%COMP%]{margin-top:40px;padding:40px 20px;text-align:center}.loading-more[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;padding:24px;background:#ffffff08;border:1px solid rgba(255,255,255,.08);border-radius:12px}.loading-more[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:16px;color:#ffffffb3}.loading-more[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin:0 auto}.end-of-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:12px;padding:32px 24px;background:#ffffff05;border:2px dashed rgba(255,255,255,.1);border-radius:12px}.end-of-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;color:#4ade80}.end-of-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:16px;color:#ffffffb3}.end-of-content[_ngcontent-%COMP%]   .total-loaded[_ngcontent-%COMP%]{font-size:14px;color:#ffffff80;margin-top:4px}  .dashboard-container .mat-mdc-progress-spinner circle{stroke:#e50914!important}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{overflow-x:hidden;width:100%;margin:0;padding:0}"]})};var Km=(n,i)=>{let e=l($e),t=l(st);return e.isLoggedIn()?!0:(t.navigate(["/login"]),!1)};var Xm=(n,i)=>{let e=l($e),t=l(st);return e.isLoggedIn()&&e.isAdmin()?!0:(t.navigate(["/login"]),!1)};var zr=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-forgot-password"]],standalone:!1,decls:2,vars:0,template:function(e,t){e&1&&(m(0,"p"),f(1,"forgot-password works!"),h())},encapsulation:2})};var mg=[{path:"",component:Dr},{path:"signup",component:Nr},{path:"login",component:Lr},{path:"verify-email",component:Vr},{path:"home",component:Br,canActivate:[Km]},{path:"**",redirectTo:"",pathMatch:"full"},{path:"forgot-password",component:zr},{path:"admin",loadChildren:()=>import("./chunk-LI2CZYHJ.js").then(n=>n.AdminModule),canActivate:[Xm]}],jr=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[Bi.forRoot(mg),Bi]})};var Hr=class n{title=me("netflix-clone");static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-root"]],standalone:!1,decls:1,vars:0,template:function(e,t){e&1&&F(0,"router-outlet")},dependencies:[Bl],encapsulation:2})};var Hs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[N]})}return n})();var hg=["tooltip"],ug=20;var pg=new v("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(Y);return()=>ai(n,{scrollThrottle:ug})}}),fg=new v("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var $m="tooltip-panel",gg={passive:!0},_g=8,bg=8,vg=24,yg=200,Qm=(()=>{class n{_elementRef=l(P);_ngZone=l(H);_platform=l(ee);_ariaDescriber=l(Wd);_focusMonitor=l(gt);_dir=l(Be);_injector=l(Y);_viewContainerRef=l(Nt);_mediaMatcher=l(on);_document=l(K);_renderer=l(be);_animationsDisabled=de();_defaultOptions=l(fg,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=xg;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Ht(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Ht(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=jt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=jt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new k;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=_g}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(le(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let o=this._createOverlay(t);this._detach(),this._portal=this._portal||new _t(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=o.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(le(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof P)return this._overlayRef;this._detach()}let t=this._injector.get(Di).getAncestorScrollContainers(this._elementRef),o=`${this._cssClassPrefix}-${$m}`,r=fn(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return r.positionChanges.pipe(le(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Pt(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,o]:o,scrollStrategy:this._injector.get(pg)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(le(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(le(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(le(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(le(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,o=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(A(A({},o.main),r.main)),this._addOffset(A(A({},o.fallback),r.fallback))])}_addOffset(e){let t=bg,o=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=o?-t:t:e.originX==="end"&&(e.offsetX=o?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"||t=="below"?o={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={originX:"end",originY:"center"});let{x:r,y:a}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:r,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"?o={overlayX:"center",overlayY:"bottom"}:t=="below"?o={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={overlayX:"start",overlayY:"center"});let{x:r,y:a}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:r,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Le(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:o,originY:r}=e,a;if(t==="center"?this._dir&&this._dir.value==="rtl"?a=o==="end"?"left":"right":a=o==="start"?"left":"right":a=t==="bottom"&&r==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let c=`${this._cssClassPrefix}-${$m}-`;s.removePanelClass(c+this._currentPosition),s.addPanelClass(c+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],o=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,o)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),o=this._elementRef.nativeElement;t!==o&&!o.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,gg))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,o=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),(e==="on"||!t.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Le({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Te(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,o){t&2&&T("mat-mdc-tooltip-disabled",o.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),xg=(()=>{class n{_changeDetectorRef=l(ce);_elementRef=l(P);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=de();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new k;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>vg&&e.width>=yg}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,o=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:o),t.classList.add(e?o:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(t);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,o){if(t&1&&he(hg,7),t&2){let r;U(r=W())&&(o._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,o){t&1&&L("mouseleave",function(a){return o._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,o){t&1&&(Ee(0,"div",1,0),na("animationend",function(a){return o._handleAnimationEnd(a)}),Ee(2,"div",2),f(3),Ve()()),t&2&&(Ie(o.tooltipClass),T("mdc-tooltip--multiline",o._isMultiline),p(3),ue(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return n})();var uo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[Kn,tt,N,Gt]})}return n})();var Us=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[It,tt,N,Gt]})}return n})();var Ws=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[N]})}return n})();var Ym=(()=>{class n{_animationsDisabled=de();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,o){t&2&&T("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var wg=["text"],Cg=[[["mat-icon"]],"*"],Sg=["mat-icon","*"];function Mg(n,i){if(n&1&&F(0,"mat-pseudo-checkbox",1),n&2){let e=q();w("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function kg(n,i){if(n&1&&F(0,"mat-pseudo-checkbox",3),n&2){let e=q();w("disabled",e.disabled)}}function Dg(n,i){if(n&1&&(m(0,"span",4),f(1),h()),n&2){let e=q();p(),qe("(",e.group.label,")")}}var qs=new v("MAT_OPTION_PARENT_COMPONENT"),Ks=new v("MatOptgroup");var Gs=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},bn=(()=>{class n{_element=l(P);_changeDetectorRef=l(ce);_parent=l(qs,{optional:!0});group=l(Ks,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(se).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=me(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new G;_text;_stateChanges=new k;constructor(){let e=l(we);e.load(ni),e.load(tn),this._signalDisableRipple=!!this._parent&&fi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let o=this._getHostElement();typeof o.focus=="function"&&o.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Te(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Gs(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-option"]],viewQuery:function(t,o){if(t&1&&he(wg,7),t&2){let r;U(r=W())&&(o._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,o){t&1&&L("click",function(){return o._selectViaInteraction()})("keydown",function(a){return o._handleKeydown(a)}),t&2&&(Ye("id",o.id),z("aria-selected",o.selected)("aria-disabled",o.disabled.toString()),T("mdc-list-item--selected",o.selected)("mat-mdc-option-multiple",o.multiple)("mat-mdc-option-active",o.active)("mdc-list-item--disabled",o.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",V]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Sg,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,o){t&1&&(oe(Cg),$(0,Mg,1,2,"mat-pseudo-checkbox",1),j(1),m(2,"span",2,0),j(4,1),h(),$(5,kg,1,1,"mat-pseudo-checkbox",3),$(6,Dg,2,1,"span",4),F(7,"div",5)),t&2&&(Q(o.multiple?0:-1),p(5),Q(!o.multiple&&o.selected&&!o.hideSingleSelectionIndicator?5:-1),p(),Q(o.group&&o.group._inert?6:-1),p(),w("matRippleTrigger",o._getHostElement())("matRippleDisabled",o.disabled||o.disableRipple))},dependencies:[Ym,Cr],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function Zm(n,i,e){if(e.length){let t=i.toArray(),o=e.toArray(),r=0;for(let a=0;a<n+1;a++)t[a].group&&t[a].group===o[r]&&r++;return r}return 0}function Jm(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var eh=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[N]})}return n})();var Xs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[It,eh,bn,N]})}return n})();var Eg=["trigger"],Ig=["panel"],Tg=[[["mat-select-trigger"]],"*"],Ag=["mat-select-trigger","*"];function Rg(n,i){if(n&1&&(m(0,"span",4),f(1),h()),n&2){let e=q();p(),ue(e.placeholder)}}function Og(n,i){n&1&&j(0)}function Pg(n,i){if(n&1&&(m(0,"span",11),f(1),h()),n&2){let e=q(2);p(),ue(e.triggerValue)}}function Fg(n,i){if(n&1&&(m(0,"span",5),$(1,Og,1,0)(2,Pg,2,1,"span",11),h()),n&2){let e=q();p(),Q(e.customTrigger?1:2)}}function Ng(n,i){if(n&1){let e=dt();m(0,"div",12,1),L("keydown",function(o){ot(e);let r=q();return rt(r._handleKeydown(o))}),j(2,1),h()}if(n&2){let e=q();Ie(e.panelClass),T("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),z("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Lg=new v("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(Y);return()=>ai(n)}}),Vg=new v("MAT_SELECT_CONFIG"),Bg=new v("MatSelectTrigger"),$s=class{source;value;constructor(i,e){this.source=i,this.value=e}},th=(()=>{class n{_viewportRuler=l(Rt);_changeDetectorRef=l(ce);_elementRef=l(P);_dir=l(Be,{optional:!0});_idGenerator=l(se);_renderer=l(be);_parentFormField=l(Zn,{optional:!0});ngControl=l(Bt,{self:!0,optional:!0});_liveAnnouncer=l(qn);_defaultOptions=l(Vg,{optional:!0});_animationsDisabled=de();_popoverLocation;_initialized=new k;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let o=this.panel.nativeElement,r=Zm(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&r===1?o.scrollTop=0:o.scrollTop=Jm(a.offsetTop,a.offsetHeight,o.scrollTop,o.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new $s(this,e)}_scrollStrategyFactory=l(Lg);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new k;_errorStateTracker;stateChanges=new k;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=me(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ve.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Oi(()=>{let e=this.options;return e?e.changes.pipe(je(e),wo(()=>wt(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(wo(()=>this.optionSelectionChanges))});openedChange=new G;_openedStream=this.openedChange.pipe(fe(e=>e),De(()=>{}));_closedStream=this.openedChange.pipe(fe(e=>!e),De(()=>{}));selectionChange=new G;valueChange=new G;constructor(){let e=l(an),t=l(Nn,{optional:!0}),o=l(ft,{optional:!0}),r=l(new $t("tabindex"),{optional:!0}),a=l(mo,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new sn(e,this.ngControl,o,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new oo(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(le(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(le(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(je(null),le(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let o=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?o.setAttribute("aria-labelledby",e):o.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(We(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&xr(this._trackedModal,"aria-owns",t),us(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;xr(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(o),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),o=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,o=t===40||t===38||t===37||t===39,r=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&r&&!Te(e)||(this.multiple||e.altKey)&&o)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let c=this.selected;c&&s!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,o=e.keyCode,r=o===40||o===38,a=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!a&&(o===13||o===32)&&t.activeItem&&!Te(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&o===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(s?c.select():c.deselect())})}else{let s=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==s&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Te(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(o=>{if(this._selectionModel.isSelected(o))return!1;try{return(o.value!=null||this.canSelectNullableOptions)&&this._compareWith(o.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof un?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Xn(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=wt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(le(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),wt(...this.options.map(t=>t._stateChanges)).pipe(le(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let o=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(o!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),o!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,o)=>this.sortComparator?this.sortComparator(t,o,e):e.indexOf(t)-e.indexOf(o)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(o=>o.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Pe(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-select"]],contentQueries:function(t,o,r){if(t&1&&Ze(r,Bg,5)(r,bn,5)(r,Ks,5),t&2){let a;U(a=W())&&(o.customTrigger=a.first),U(a=W())&&(o.options=a),U(a=W())&&(o.optionGroups=a)}},viewQuery:function(t,o){if(t&1&&he(Eg,5)(Ig,5)(Fr,5),t&2){let r;U(r=W())&&(o.trigger=r.first),U(r=W())&&(o.panel=r.first),U(r=W())&&(o._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,o){t&1&&L("keydown",function(a){return o._handleKeydown(a)})("focus",function(){return o._onFocus()})("blur",function(){return o._onBlur()}),t&2&&(z("id",o.id)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o.panelOpen?o.id+"-panel":null)("aria-expanded",o.panelOpen)("aria-label",o.ariaLabel||null)("aria-required",o.required.toString())("aria-disabled",o.disabled.toString())("aria-invalid",o.errorState)("aria-activedescendant",o._getAriaActiveDescendant()),T("mat-mdc-select-disabled",o.disabled)("mat-mdc-select-invalid",o.errorState)("mat-mdc-select-required",o.required)("mat-mdc-select-empty",o.empty)("mat-mdc-select-multiple",o.multiple)("mat-select-open",o.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",V],disableRipple:[2,"disableRipple","disableRipple",V],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ce(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",V],placeholder:"placeholder",required:[2,"required","required",V],multiple:[2,"multiple","multiple",V],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",V],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ce],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",V]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ae([{provide:Yn,useExisting:n},{provide:qs,useExisting:n}]),ye],ngContentSelectors:Ag,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,o){if(t&1&&(oe(Tg),m(0,"div",2,0),L("click",function(){return o.open()}),m(3,"div",3),$(4,Rg,2,1,"span",4)(5,Fg,3,1,"span",5),h(),m(6,"div",6)(7,"div",7),Oe(),m(8,"svg",8),F(9,"path",9),h()()()(),te(10,Ng,3,16,"ng-template",10),L("detach",function(){return o.close()})("backdropClick",function(){return o.close()})("overlayKeydown",function(a){return o._handleOverlayKeydown(a)})),t&2){let r=Je(1);p(3),z("id",o._valueId),p(),Q(o.empty?4:5),p(6),w("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",o._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",o._scrollStrategy)("cdkConnectedOverlayOrigin",o._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",o._positions)("cdkConnectedOverlayWidth",o._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",o._popoverLocation)}},dependencies:[un,Fr],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var po=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[tt,Xs,N,Gt,Et,Xs]})}return n})();var zg=new v("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var Qs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({providers:[an,{provide:zg,useValue:{separatorKeyCodes:[13]}}],imports:[It,N]})}return n})();var ih=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[lo]})}return n})();var Ys=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[ih,N]})}return n})();function Ug(n,i){if(n&1&&(m(0,"mat-option",17),f(1),h()),n&2){let e=i.$implicit;w("value",e),p(),qe(" ",e," ")}}function Wg(n,i){if(n&1){let e=dt();m(0,"mat-form-field",14)(1,"mat-select",16,0),L("selectionChange",function(o){ot(e);let r=q(2);return rt(r._changePageSize(o.value))}),ta(3,Ug,2,2,"mat-option",17,Dl),h(),m(5,"div",18),L("click",function(){ot(e);let o=Je(2);return rt(o.open())}),h()()}if(n&2){let e=q(2);w("appearance",e._formFieldAppearance)("color",e.color),p(),w("value",e.pageSize)("disabled",e.disabled),kl("aria-labelledby",e._pageSizeLabelId),w("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),p(2),ia(e._displayedPageSizeOptions)}}function Gg(n,i){if(n&1&&(m(0,"div",15),f(1),h()),n&2){let e=q(2);p(),ue(e.pageSize)}}function qg(n,i){if(n&1&&(m(0,"div",3)(1,"div",13),f(2),h(),$(3,Wg,6,7,"mat-form-field",14),$(4,Gg,2,1,"div",15),h()),n&2){let e=q();p(),z("id",e._pageSizeLabelId),p(),qe(" ",e._intl.itemsPerPageLabel," "),p(),Q(e._displayedPageSizeOptions.length>1?3:-1),p(),Q(e._displayedPageSizeOptions.length<=1?4:-1)}}function Kg(n,i){if(n&1){let e=dt();m(0,"button",19),L("click",function(){ot(e);let o=q();return rt(o._buttonClicked(0,o._previousButtonsDisabled()))}),Oe(),m(1,"svg",8),F(2,"path",20),h()()}if(n&2){let e=q();w("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),z("aria-label",e._intl.firstPageLabel)}}function Xg(n,i){if(n&1){let e=dt();m(0,"button",21),L("click",function(){ot(e);let o=q();return rt(o._buttonClicked(o.getNumberOfPages()-1,o._nextButtonsDisabled()))}),Oe(),m(1,"svg",8),F(2,"path",22),h()()}if(n&2){let e=q();w("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),z("aria-label",e._intl.lastPageLabel)}}var $g=(()=>{class n{changes=new k;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,o)=>{if(o==0||t==0)return`0 of ${o}`;o=Math.max(o,0);let r=e*t,a=r<o?Math.min(r+t,o):r+t;return`${r+1} \u2013 ${a} of ${o}`};static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Qg=50;var Yg=new v("MAT_PAGINATOR_DEFAULT_OPTIONS"),Zg=(()=>{class n{_intl=l($g);_changeDetectorRef=l(ce);_formFieldAppearance;_pageSizeLabelId=l(se).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new vn(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>Ce(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new G;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=l(Yg,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:o,pageSizeOptions:r,hidePageSize:a,showFirstLastButtons:s}=t;o!=null&&(this._pageSize=o),r!=null&&(this._pageSizeOptions=r),a!=null&&(this.hidePageSize=a),s!=null&&(this.showFirstLastButtons=s)}this._formFieldAppearance=t?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,o=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(o)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Qg),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",Ce],length:[2,"length","length",Ce],pageSize:[2,"pageSize","pageSize",Ce],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",V],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",V],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",V]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,o){t&1&&(m(0,"div",1)(1,"div",2),$(2,qg,5,4,"div",3),m(3,"div",4)(4,"div",5),f(5),h(),$(6,Kg,3,5,"button",6),m(7,"button",7),L("click",function(){return o._buttonClicked(o.pageIndex-1,o._previousButtonsDisabled())}),Oe(),m(8,"svg",8),F(9,"path",9),h()(),Co(),m(10,"button",10),L("click",function(){return o._buttonClicked(o.pageIndex+1,o._nextButtonsDisabled())}),Oe(),m(11,"svg",8),F(12,"path",11),h()(),$(13,Xg,3,5,"button",12),h()()()),t&2&&(p(2),Q(o.hidePageSize?-1:2),p(3),qe(" ",o._intl.getRangeLabel(o.pageIndex,o.pageSize,o.length)," "),p(),Q(o.showFirstLastButtons?6:-1),p(),w("matTooltip",o._intl.previousPageLabel)("matTooltipDisabled",o._previousButtonsDisabled())("disabled",o._previousButtonsDisabled())("tabindex",o._previousButtonsDisabled()?-1:null),z("aria-label",o._intl.previousPageLabel),p(3),w("matTooltip",o._intl.nextPageLabel)("matTooltipDisabled",o._nextButtonsDisabled())("disabled",o._nextButtonsDisabled())("tabindex",o._nextButtonsDisabled()?-1:null),z("aria-label",o._intl.nextPageLabel),p(3),Q(o.showFirstLastButtons?13:-1))},dependencies:[Dt,th,bn,ki,Qm],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return n})(),Zs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[Wt,po,uo,Zg]})}return n})();var Js=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[N]})}return n})();function Jg(n,i){}var ci=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var tl=(()=>{class n extends oi{_elementRef=l(P);_focusTrapFactory=l(ss);_config;_interactivityChecker=l(as);_ngZone=l(H);_focusMonitor=l(gt);_renderer=l(be);_changeDetectorRef=l(ce);_injector=l(Y);_platform=l(ee);_document=l(K);_portalOutlet;_focusTrapped=new k;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=l(ci,{optional:!0})||new ci,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),a(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",o),a=this._renderer.listen(e,"mousedown",o)})),e.focus(t)}_focusByCssSelector(e,t){let o=this._elementRef.nativeElement.querySelector(e);o&&this._forceFocus(o,t)}_trapFocus(e){this._isDestroyed||Le(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let o=Vn(),r=this._elementRef.nativeElement;(!o||o===this._document.body||o===r||r.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Vn();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Vn()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,o){if(t&1&&he(At,7),t&2){let r;U(r=W())&&(o._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,o){t&2&&z("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[re],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,o){t&1&&te(0,Jg,0,0,"ng-template",0)},dependencies:[At],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),fo=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new k;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!Te(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},e_=new v("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=l(Y);return()=>pn(n)}}),t_=new v("DialogData"),i_=new v("DefaultDialogConfig");function n_(n){let i=me(n),e=new G;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var il=(()=>{class n{_injector=l(Y);_defaultOptions=l(i_,{optional:!0});_parentDialog=l(n,{optional:!0,skipSelf:!0});_overlayContainer=l(Pr);_idGenerator=l(se);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new k;_afterOpenedAtThisLevel=new k;_ariaHiddenElements=new Map;_scrollStrategy=l(e_);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Oi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(je(void 0)));constructor(){}open(e,t){let o=this._defaultOptions||new ci;t=A(A({},o),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let r=this._getOverlayConfig(t),a=Pt(this._injector,r),s=new fo(a,t),c=this._attachContainer(a,s,t);if(s.containerInstance=c,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(We(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(e,s,c,t),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){el(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){el(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),el(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Ot({positionStrategy:e.positionStrategy||si().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,o){let r=o.injector||o.viewContainerRef?.injector,a=[{provide:ci,useValue:o},{provide:fo,useValue:t},{provide:hn,useValue:e}],s;o.container?typeof o.container=="function"?s=o.container:(s=o.container.type,a.push(...o.container.providers(o))):s=tl;let c=new _t(s,o.viewContainerRef,Y.create({parent:r||this._injector,providers:a}));return e.attach(c).instance}_attachDialogContent(e,t,o,r){if(e instanceof Ct){let a=this._createInjector(r,t,o,void 0),s={$implicit:r.data,dialogRef:t};r.templateContext&&(s=A(A({},s),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),o.attachTemplatePortal(new bt(e,null,s,a))}else{let a=this._createInjector(r,t,o,this._injector),s=o.attachComponentPortal(new _t(e,r.viewContainerRef,a));t.componentRef=s,t.componentInstance=s.instance}}_createInjector(e,t,o,r){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:t_,useValue:e.data},{provide:fo,useValue:t}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(t,e,o)):s.push(...e.providers)),e.direction&&(!a||!a.get(Be,null,{optional:!0}))&&s.push({provide:Be,useValue:n_(e.direction)}),Y.create({parent:a||r,providers:s})}_removeOpenDialog(e,t){let o=this.openDialogs.indexOf(e);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,a)=>{r?a.setAttribute("aria-hidden",r):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let o=t.length-1;o>-1;o--){let r=t[o];r!==e&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function el(n,i){let e=n.length;for(;e--;)i(n[e])}var nh=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({providers:[il],imports:[tt,vt,Kn,vt]})}return n})();function o_(n,i){}var Wr=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},nl="mdc-dialog--open",oh="mdc-dialog--opening",rh="mdc-dialog--closing",r_=150,a_=75,s_=(()=>{class n extends tl{_animationStateChanged=new G;_animationsEnabled=!de();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?sh(this._config.enterAnimationDuration)??r_:0;_exitAnimationDuration=this._animationsEnabled?sh(this._config.exitAnimationDuration)??a_:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(ah,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(oh,nl)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(nl),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(nl),this._animationsEnabled?(this._hostElement.style.setProperty(ah,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(rh)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(oh,rh)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(o){return(e||(e=at(n)))(o||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,o){t&2&&(Ye("id",o._config.id),z("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),T("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[re],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,o){t&1&&(m(0,"div",0)(1,"div",1),te(2,o_,0,0,"ng-template",2),h()())},dependencies:[At],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return n})(),ah="--mat-dialog-transition-duration";function sh(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?jt(n.substring(0,n.length-2)):n.endsWith("s")?jt(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var Ur=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(Ur||{}),ol=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new vn(1);_beforeClosed=new vn(1);_result;_closeFallbackTimeout;_state=Ur.OPEN;_closeInteractionType;constructor(i,e,t){this._ref=i,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(fe(o=>o.state==="opened"),We(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(fe(o=>o.state==="closed"),We(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),wt(this.backdropClick(),this.keydownEvents().pipe(fe(o=>o.keyCode===27&&!this.disableClose&&!Te(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),l_(this,o.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(fe(t=>t.state==="closing"),We(1)).subscribe(t=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Ur.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Ur.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function l_(n,i,e){return n._closeInteractionType=i,n.close(e)}var c_=new v("MatMdcDialogData"),d_=new v("mat-mdc-dialog-default-options"),m_=new v("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(Y);return()=>pn(n)}}),h_=(()=>{class n{_defaultOptions=l(d_,{optional:!0});_scrollStrategy=l(m_);_parentDialog=l(n,{optional:!0,skipSelf:!0});_idGenerator=l(se);_injector=l(Y);_dialog=l(il);_animationsDisabled=de();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new k;_afterOpenedAtThisLevel=new k;dialogConfigClass=Wr;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Oi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(je(void 0)));constructor(){this._dialogRefConstructor=ol,this._dialogContainerType=s_,this._dialogDataToken=c_}open(e,t){let o;t=A(A({},this._defaultOptions||new Wr),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,Re(A({},t),{positionStrategy:si(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:ci,useValue:t}]},templateContext:()=>({dialogRef:o}),providers:(a,s,c)=>(o=new this._dialogRefConstructor(a,t,c),o.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:o}])}));return o.componentRef=r.componentRef,o.componentInstance=r.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(o);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var rl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({providers:[h_],imports:[nh,tt,vt,N]})}return n})();var u_=["mat-internal-form-field",""],p_=["*"],lh=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,o){t&2&&T("mdc-form-field--align-end",o.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:u_,ngContentSelectors:p_,decls:1,vars:0,template:function(t,o){t&1&&(oe(),j(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var f_=["switch"],g_=["*"];function __(n,i){n&1&&(m(0,"span",11),Oe(),m(1,"svg",13),F(2,"path",14),h(),m(3,"svg",15),F(4,"path",16),h()())}var b_=new v("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Gr=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},v_=(()=>{class n{_elementRef=l(P);_focusMonitor=l(gt);_changeDetectorRef=l(ce);defaults=l(b_);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Gr(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=de();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new G;toggleChange=new G;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){l(we).load(ni);let e=l(new $t("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=l(se).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Gr(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,o){if(t&1&&he(f_,5),t&2){let r;U(r=W())&&(o._switchElement=r.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,o){t&2&&(Ye("id",o.id),z("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Ie(o.color?"mat-"+o.color:""),T("mat-mdc-slide-toggle-focused",o._focused)("mat-mdc-slide-toggle-checked",o.checked)("_mat-animation-noopable",o._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",V],color:"color",disabled:[2,"disabled","disabled",V],disableRipple:[2,"disableRipple","disableRipple",V],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ce(e)],checked:[2,"checked","checked",V],hideIcon:[2,"hideIcon","hideIcon",V],disabledInteractive:[2,"disabledInteractive","disabledInteractive",V]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[ae([{provide:lr,useExisting:Ft(()=>n),multi:!0},{provide:Fn,useExisting:n,multi:!0}]),ye],ngContentSelectors:g_,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,o){if(t&1&&(oe(),m(0,"div",1)(1,"button",2,0),L("click",function(){return o._handleClick()}),F(3,"div",3)(4,"span",4),m(5,"span",5)(6,"span",6)(7,"span",7),F(8,"span",8),h(),m(9,"span",9),F(10,"span",10),h(),$(11,__,5,0,"span",11),h()()(),m(12,"label",12),L("click",function(a){return a.stopPropagation()}),j(13),h()()),t&2){let r=Je(2);w("labelPosition",o.labelPosition),p(),T("mdc-switch--selected",o.checked)("mdc-switch--unselected",!o.checked)("mdc-switch--checked",o.checked)("mdc-switch--disabled",o.disabled)("mat-mdc-slide-toggle-disabled-interactive",o.disabledInteractive),w("tabIndex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("disabled",o.disabled&&!o.disabledInteractive),z("id",o.buttonId)("name",o.name)("aria-label",o.ariaLabel)("aria-labelledby",o._getAriaLabelledBy())("aria-describedby",o.ariaDescribedby)("aria-required",o.required||null)("aria-checked",o.checked)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),p(9),w("matRippleTrigger",r)("matRippleDisabled",o.disableRipple||o.disabled)("matRippleCentered",!0),p(),Q(o.hideIcon?-1:11),p(),w("for",o.buttonId),z("id",o._labelId)}},dependencies:[Cr,lh],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return n})(),al=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[v_,N]})}return n})();var sl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[It,N]})}return n})();var y_=[jn,Wt,Et,Jn,Hs,js,uo,Us,Ws,io,po,Qs,Ys,Zs,Js,rl,Bs,al,sl,zn,ao],qr=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=b({type:n});static \u0275inj=_({imports:[Bi,Qa,Ln,aa,sa,y_,Bi,Qa,Ln,aa,sa,jn,Wt,Et,Jn,Hs,js,uo,Us,Ws,io,po,Qs,Ys,Zs,Js,rl,Bs,al,sl,zn,ao]})};var ch=(n,i)=>{let e=localStorage.getItem("token");if(e){let t=n.clone({setHeaders:{Authorization:`Bearer ${e}`}});return i(t)}return i(n)};var Kr=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=b({type:n,bootstrap:[Hr]});static \u0275inj=_({providers:[Ml(()=>l($e).initializeAuth()),xl(),Ll(Vl([ch]))],imports:[Io,Vc,Ln,jr,qr,zn,jn,Et,Jn,Wt,io,ao]})};Nl().bootstrapModule(Kr,{}).catch(n=>console.error(n));
