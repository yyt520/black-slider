(self.webpackChunkblack_ui=self.webpackChunkblack_ui||[]).push([[286],{35286:function(s,P,o){"use strict";o.d(P,{lO:function(){return St},J0:function(){return Pt},I5:function(){return ar},tq:function(){return q}});var y=o(42122),c=o.n(y),M=o(27424),T=o.n(M),D=o(70215),W=o.n(D),i=o(67294),U=function(e){return"".concat(e?e+"-":"").concat(Math.ceil(Math.random()*1e6).toString(36),"-").concat(Date.now().toString(36))};function re(t){for(var e=t.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),n=[t[r],t[e]];t[e]=n[0],t[r]=n[1]}}function z(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return String.fromCharCode(Math.floor(Math.random()*26)+(t?65:97))}var ne=o(94184),de=o.n(ne),Pe=function(e){return typeof e=="number"?e+"px":e},ie=function(e,r){var n=e;return r&&Object.keys(r).forEach(function(l){n+=" "+(r[l]?e+"-"+l:"")}),n},ue=function(e,r,n){var l=[r[e]];return n&&Object.keys(n).forEach(function(a){n[a]&&l.push(r[e+"-"+a])}),classNames(l)},xe=function(e,r){var n=e;return r==null||r.forEach(function(l){n+=" "+e+"-"+l}),n},q=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i),Xe=function(e){var r=q?e.touches[0]||e.changedTouches[0]:e;return{pageX:r.pageX,pageY:r.pageY,clientX:r.clientX,clientY:r.clientY,screenX:r.screenX,screenY:r.screenY}},Te=function(e){var r,n,l,a;return(r=(n=e==null||(l=e.touches)===null||l===void 0?void 0:l[0])!==null&&n!==void 0?n:e==null||(a=e.changedTouches)===null||a===void 0?void 0:a[0])!==null&&r!==void 0?r:e},Ce=10;function Ne(t,e){return t>e&&t>Ce?"horizontal":e>t&&e>Ce?"vertical":""}var Ye=function(){var e=(0,i.useRef)({startX:0,startY:0,deltaX:0,deltaY:0,offsetX:0,offsetY:0,direction:"",time:0}),r=(0,i.useRef)(0),n=function(p){Object.keys(p).forEach(function(h){var g=h;e.current[g]=p[g]})},l=function(){n({deltaX:0,deltaY:0,offsetX:0,offsetY:0,direction:""})},a=function(p){var h,g,v,R;return(h=(g=p==null||(v=p.touches)===null||v===void 0?void 0:v[0])!==null&&g!==void 0?g:p==null||(R=p.changedTouches)===null||R===void 0?void 0:R[0])!==null&&h!==void 0?h:p},u=function(p){l();var h=a(p);n({startX:h.clientX,startY:h.clientY}),r.current=Date.now()},d=function(p){var h=a(p),g=e.current,v=g.startX,R=g.startY,C=g.direction,V=h.clientX<0?0:h.clientX-v,F=h.clientY-R,_=Math.abs(V),O=Math.abs(F),H=Date.now()-r.current;n({deltaX:V,deltaY:F,offsetX:_,offsetY:O,time:H,direction:C?"":Ne(_,O)})};return{info:e.current,move:d,start:u,reset:l}},Be=Ye,Ee=Be;function ze(t){var e=(0,i.useRef)(t);return e.current=t,e}var je=ze;function Ge(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=Ee(),r=je(t),n=function(m){var p,h,g,v;!q&&!t.isAllMouseClick&&m.button!==0||(p=t.isDisable)!==null&&p!==void 0&&p.all||(h=t.isDisable)!==null&&h!==void 0&&h.onTouchStart||(u(m),e.start(m),q||(document.addEventListener("mousemove",l,!0),document.addEventListener("mouseup",a,!0)),(g=(v=r.current).onTouchStart)===null||g===void 0||g.call(v,m))},l=function(m){var p,h,g,v;(p=t.isDisable)!==null&&p!==void 0&&p.all||(h=t.isDisable)!==null&&h!==void 0&&h.onTouchMove||(u(m),e.move(m),(g=(v=r.current).onTouchMove)===null||g===void 0||g.call(v,m,e.info))},a=function d(m){var p,h,g,v;(p=t.isDisable)!==null&&p!==void 0&&p.all||(h=t.isDisable)!==null&&h!==void 0&&h.onTouchEnd||(u(m),e.move(m),q||(document.removeEventListener("mousemove",l,!0),document.removeEventListener("mouseup",d,!0)),(g=(v=r.current).onTouchEnd)===null||g===void 0||g.call(v,m))},u=function(m){(t.isStopEvent||t.isStopPropagation)&&m.stopPropagation(),(t.isStopEvent||t.isPreventDefault)&&m.preventDefault()};return c()(c()({},e),{},{onTouchFn:He({onTouchStart:n,onTouchMove:l,onTouchEnd:a,isOnMouseUp:t.isOnMouseUp,isOnTouchCancel:t.isOnTouchCancel})})}var He=function(e){var r=e.onTouchStart,n=e.onTouchMove,l=e.onTouchEnd,a=e.isOnMouseUp,u=e.isOnTouchCancel;return q?c()({onTouchStart:r,onTouchMove:n,onTouchEnd:l},u?{onTouchCancel:l}:null):c()({onMouseDown:r},a?{onMouseUp:l}:null)},be=Ge,b=o(85893),he=["axis","magnetic"],ge="blackui-floating-ball",Ae=window.innerWidth,rt=window.innerHeight,xt=function(e){var r=e.axis,n=r===void 0?"xy":r,l=e.magnetic,a=W()(e,he),u=(0,i.useRef)(U(ge)),d=(0,i.useRef)({w:0,h:0,r:0,l:0,t:0,b:0}),m=(0,i.useRef)({startX:0,startY:0}),p=(0,i.useState)({x:0,y:0}),h=T()(p,2),g=h[0],v=h[1],R=(0,i.useRef)(null),C=(0,i.useRef)(.1),V=be({onTouchStart:function(){m.current.startX=g.x,m.current.startY=g.y,C.current=.1},onTouchMove:function(){var H,f=n==="y"?0:F.deltaX+m.current.startX,w=n==="x"?0:F.deltaY+m.current.startY;v({x:f,y:w}),(H=a.onOffsetChange)===null||H===void 0||H.call(a,{x:f,y:w})},onTouchEnd:function(){var H=n==="y"?0:F.deltaX+m.current.startX,f=n==="x"?0:F.deltaY+m.current.startY,w=d.current,Z=w.w,oe=w.h,G=w.l,J=w.r,K=w.t,I=w.b;if(l==="x"){var x,$=G<J?G:J,N=G<J?-1:1,ce=Ae/2-$-Z/2,S=-1*N*(Ae-Z-$*2);H=Math.abs(H)>ce&&H*N<0?S:0,(x=a.onMagnetic)===null||x===void 0||x.call(a,H===0?G<J:G>J)}else if(l==="y"){var A,X=K<I?K:I,k=K<I?-1:1,ee=rt/2-X-oe/2,E=-1*k*(rt-oe-X*2);f=Math.abs(f)>ee&&f*k<0?E:0,(A=a.onMagnetic)===null||A===void 0||A.call(a,f===0?K<I:K>I)}C.current=.3,v({x:H,y:f})}}),F=V.info,_=V.onTouchFn;return(0,i.useEffect)(function(){var O=function(){var f=document.querySelector(".".concat(u.current," .").concat(ge,"-button"));if(f){var w=f.getBoundingClientRect();d.current.w=w.width,d.current.h=w.height,d.current.l=w.left,d.current.r=window.innerWidth-w.right,d.current.t=w.top,d.current.b=window.innerHeight-w.bottom}};setTimeout(function(){O()},10)},[]),(0,b.jsx)("div",c()(c()({className:"".concat(ge," ").concat(u.current)},a),{},{children:(0,b.jsx)("div",c()(c()({ref:R,className:"".concat(ge,"-button"),style:{transitionDuration:C.current+"s",transform:"translate(".concat(g.x,"px, ").concat(g.y,"px)")}},_),{},{children:a.children}))}))},St=xt,lr=null;function bt(t,e){var r=c()({},t);return e.forEach(function(n){n in r&&delete r[n]}),r}function Fe(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t._ignorePropsFromGlobal,l=(0,i.useMemo)(function(){return c()(c()({},e),n?{}:r)},[e,r,n]),a=(0,i.useMemo)(function(){var u=bt(t,["_ignorePropsFromGlobal"]);for(var d in l)u[d]===void 0&&(u[d]=l[d]);return u},[t,l]);return a}var sr=function(){var e=useState(!1),r=_slicedToArray(e,2),n=r[0],l=r[1];return{isRender:n,renderFn:useCallback(function(){l(function(a){return!a})},[])}},dr=null,vr=null;function nt(t,e){var r=t;for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);return r}var yt=o(17061),ot=o.n(yt),wt=o(17156),Tt=o.n(wt),Ct=function(e,r){return Math.asin(e/r)*180/Math.PI},at=(0,i.createContext)({circleR:0,cardDeg:0,isVertical:!1,isClockwise:!1,isClick:!1}),zt=["list","cardAddDeg","width","height","initCartNum","isAverage","isClockwise","isPagination","leftArrow","rightArrow","children","onPageChange"],Se="blackui-scroll-circle",Mt=function(e){var r,n,l,a,u,d=e.list,m=e.cardAddDeg,p=m===void 0?1:m,h=e.width,g=h===void 0?"100%":h,v=e.height,R=v===void 0?"100%":v,C=e.initCartNum,V=C===void 0?0:C,F=e.isAverage,_=F===void 0?!0:F,O=e.isClockwise,H=O===void 0?!0:O,f=e.isPagination,w=f===void 0?!0:f,Z=e.leftArrow,oe=e.rightArrow,G=e.children,J=e.onPageChange,K=W()(e,zt),I=(0,i.useRef)(U(Se)),x=(0,i.useRef)({circleWrapWH:0,cardWH:0,circleR:0,scrollViewDeg:0}),$=(0,i.useRef)({startDeg:0,isClick:!1}),N=(0,i.useRef)(0),ce=(0,i.useState)(-1),S=T()(ce,2),A=S[0],X=S[1],k=(0,i.useRef)(((r=(n=document.querySelector(".".concat(I.current)))===null||n===void 0?void 0:n.clientHeight)!==null&&r!==void 0?r:0)>((l=(a=document.querySelector(".".concat(I.current)))===null||a===void 0?void 0:a.clientWidth)!==null&&l!==void 0?l:0)),ee=(0,i.useState)({pageNum:1,pageSize:10}),E=T()(ee,2),te=E[0],Q=E[1],Y=(0,i.useState)(.6),j=T()(Y,2),B=j[0],ae=j[1],le=(0,i.useRef)({w:0,h:0}),me=function(){var ve=Tt()(ot()().mark(function L(){var we,se,Re,Ie,ke,Oe,fe,pe,gt,Ze,mt,$e,pt,qe,et=arguments;return ot()().wrap(function(tt){for(;;)switch(tt.prev=tt.next){case 0:Oe=et.length>0&&et[0]!==void 0?et[0]:!0,fe=document.querySelector(".".concat(I.current)),pe=document.querySelector(".".concat(I.current," .").concat(Se,"-cardWrap")),le.current.w=(we=fe==null?void 0:fe.clientWidth)!==null&&we!==void 0?we:0,le.current.h=(se=fe==null?void 0:fe.clientHeight)!==null&&se!==void 0?se:0,k.current=le.current.h>le.current.w,x.current.circleWrapWH=k.current?le.current.w:le.current.h,x.current.cardWH=(Re=pe==null?void 0:pe[k.current?"clientHeight":"clientWidth"])!==null&&Re!==void 0?Re:0,gt=(Ie=pe==null?void 0:pe[k.current?"clientWidth":"clientHeight"])!==null&&Ie!==void 0?Ie:0,x.current.circleR=Math.round(k.current?le.current.h:le.current.w),x.current.scrollViewDeg=Ct(x.current.circleWrapWH,x.current.circleR),Ze=360*Math.atan(((ke=x.current.cardWH)!==null&&ke!==void 0?ke:0)/2/(x.current.circleR-gt/2))/Math.PI+p,mt=te.pageNum,$e=te.pageSize,_&&d?(pt=Math.floor(360/Ze),qe=Math.min(pt,d.length),$e=qe,Q(function(cr){return c()(c()({},cr),{},{pageSize:$e})}),N.current=360/qe):N.current=Ze,J==null||J({pageNum:mt,pageSize:$e}),Oe&&X(N.current*V*(k.current?1:-1));case 16:case"end":return tt.stop()}},L)}));return function(){return ve.apply(this,arguments)}}(),_e=function(){me(!1)};(0,i.useEffect)(function(){return q&&window.addEventListener("resize",_e),function(){q&&window.removeEventListener("resize",_e)}},[]),(0,i.useEffect)(function(){d!=null&&d.length&&setTimeout(function(){me()},0)},[d,p]);var dt=be({onTouchStart:function(){var L;$.current.startDeg=A,ae(.1),(L=K.onTouchStart)===null||L===void 0||L.call(K)},onTouchMove:function(){var L,we=k.current?ye.deltaY:-ye.deltaX,se=Math.round($.current.startDeg-x.current.scrollViewDeg*(we/x.current.circleWrapWH));X(se),(L=K.onTouchMove)===null||L===void 0||L.call(K)},onTouchEnd:function(){var L,we=$.current.startDeg,se=k.current?ye.deltaY:-ye.deltaX,Re=.6,Ie=A;if(Math.abs(se)>x.current.cardWH/2&&ye.time<300){var ke=ye.time/300,Oe=x.current.scrollViewDeg*(se/x.current.circleWrapWH)/ke;Re=1,Ie=Math.round(we-Oe)}var fe="ceil";Math.abs(se)<x.current.cardWH/3?fe=se>0?"ceil":"floor":fe=se>0?"floor":"ceil",$.current.isClick=Math.abs(se)<10&&ye.time<120,ae(Re);var pe=N.current*Math[fe](Ie/N.current);X(pe),(L=K.onTouchEnd)===null||L===void 0||L.call(K)}}),ye=dt.info,ir=dt.onTouchFn,vt=te.pageNum*te.pageSize>=((u=d==null?void 0:d.length)!==null&&u!==void 0?u:0),ft=te.pageNum<=1,ht=function(L){if(L){if(vt)return}else if(ft)return;te.pageNum+=L?1:-1,X(0),J==null||J(c()({},te))},ur=(0,i.useMemo)(function(){var ve=0,L=x.current.circleR;return k.current&&(ve=x.current.circleR,L=0),{width:"".concat(x.current.circleR*2,"px"),height:"".concat(x.current.circleR*2,"px"),transitionDuration:B+"s",transform:"translate(calc(-50% + ".concat(ve,"px), calc(-50% + ").concat(L,"px)) rotate(").concat(A,"deg)")}},[A,B]);return(0,b.jsx)(at.Provider,{value:{circleR:x.current.circleR,cardDeg:N.current,isVertical:k.current,isClockwise:H,isClick:$.current.isClick},children:(0,b.jsxs)("div",{className:"".concat(Se," ").concat(I.current),style:{width:g,height:R},children:[(0,b.jsx)("div",c()(c()({className:"".concat(Se,"-area"),style:ur},ir),{},{children:G})),(0,b.jsx)("div",{className:"".concat(ie("".concat(Se,"-arrow"),{left:!0,disable:ft})),onClick:function(){return ht()},children:w?Z!=null?Z:(0,b.jsx)("div",{className:"".concat(ie("".concat(Se,"-arrow-area"),{left:!0})),children:"<"}):null}),(0,b.jsx)("div",{className:"".concat(ie("".concat(Se,"-arrow"),{right:!0,disable:vt})),onClick:function(){return ht(!0)},children:w?oe!=null?oe:(0,b.jsx)("div",{className:"".concat(ie("".concat(Se,"-arrow-area"),{right:!0})),children:">"}):null})]})})},Rt="blackui-scroll-circle",It=function(e){var r=e.index,n=e.onClick,l=e.children,a=(0,i.useContext)(at),u=a.circleR,d=a.cardDeg,m=a.isVertical,p=a.isClockwise,h=a.isClick,g=(0,i.useMemo)(function(){var v=m?90:0,R=v+d*r,C=p?-1:1;C*=m?-1:1;var V=u*(1-Math.cos(R*Math.PI/180)),F=u*(1-C*Math.sin(R*Math.PI/180)),_=v-C*R;return{top:"".concat(V,"px"),left:"".concat(F,"px"),transform:"translate(-50%, -50%) rotate(".concat(_,"deg)")}},[u,d,m,p]);return(0,b.jsx)("div",{className:"".concat(Rt,"-cardWrap"),style:g,onClick:function(){h&&(n==null||n(r))},children:l})},Pt=nt(Mt,{Item:It}),fr=null,Nt=o(861),At=o.n(Nt);function Le(t,e){var r=c()({},e.props);return t.className&&(r.className=de()(e.props.className,t.className)),t.style&&(r.style=c()(c()({},r.style),t.style)),i.cloneElement(e,r)}var Ue=i.createContext({size:3,initSpaceIndex:0,grid:{w:0,h:0},gridArr:void 0,puzzleGridArr:void 0,letter:"",isReset:!1,gap:2,isGameMode:!1,onChangeGrid:function(e,r){}}),De=o(97582),hr=function(t){return t!==null&&typeof t=="object"},Ve=function(t){return typeof t=="function"},gr=function(t){return typeof t=="string"},mr=function(t){return typeof t=="boolean"},pr=function(t){return typeof t=="number"},xr=function(t){return typeof t=="undefined"},Dt=function(t){var e=(0,De.CR)((0,i.useState)(t),2),r=e[0],n=e[1],l=(0,i.useCallback)(function(a){n(function(u){var d=Ve(a)?a(u):a;return d?(0,De.pi)((0,De.pi)({},u),d):u})},[]);return[r,l]},Je=Dt,_t=o(23279),kt=o.n(_t);function Et(t){var e=(0,i.useRef)(t);return e.current=t,e}var it=Et,jt=!1,ut=jt,Wt=function(t){ut&&(Ve(t)||console.error("useUnmount expected parameter is a function, got ".concat(typeof t)));var e=it(t);(0,i.useEffect)(function(){return function(){e.current()}},[])},Ot=Wt;function $t(t,e){var r;ut&&(Ve(t)||console.error("useDebounceFn expected parameter is a function, got ".concat(typeof t)));var n=it(t),l=(r=e==null?void 0:e.wait)!==null&&r!==void 0?r:1e3,a=(0,i.useMemo)(function(){return kt()(function(){for(var u=[],d=0;d<arguments.length;d++)u[d]=arguments[d];return n.current.apply(n,(0,De.ev)([],(0,De.CR)(u),!1))},l,e)},[]);return Ot(function(){a.cancel()}),{run:a,cancel:a.cancel,flush:a.flush}}var Xt=$t;function ct(t,e,r){return Math.min(Math.max(t,e),r)}function Yt(t,e,r){return Array.from({length:t},function(n,l){return Array.from({length:e},function(a,u){return r(l,u)})})}function Bt(t,e,r){var n,l,a,u;return!t||!(t!=null&&t.length)?0:((n=t[e])===null||n===void 0?void 0:n[r-1])===0?1:((l=t[e-1])===null||l===void 0?void 0:l[r])===0?2:((a=t[e])===null||a===void 0?void 0:a[r+1])===0?3:((u=t[e+1])===null||u===void 0?void 0:u[r])===0?4:0}function Gt(t,e){var r=t?t>0?3:1:0,n=e?e>0?4:2:0;return{directionX:r,directionY:n}}var We="blackui-sliderPuzzle",Ht="blackui-sliderPuzzleItem",Ft="blackui-sliderPuzzle-canvas",Sr=99;function Lt(t,e){for(var r=0,n=0;n<t.length;n++)for(var l=n+1;l<t.length;l++)t[n]!==e*e&&t[l]!==e*e&&t[n]>t[l]&&r++;if(e%2===1)return r%2===0;var a=Math.ceil(t.indexOf(e*e)/e);return(r+a)%2===1}function Ut(t){var e=Array.from({length:t*t},function(r,n){return n+1});do re(e);while(!Lt(e,t));return e}function Vt(t){for(var e,r=t.length,n=0;n<r;n++)for(var l=r-(n===r-1?1:0),a=0;a<l;a++)if(t[n][a]!==n*r+a+1)return!1;return((e=t.at(-1))===null||e===void 0?void 0:e.at(-1))===0}function Qe(t,e,r){return t+=t>=e?1:0,{rowNum:Math.floor(t/r),colNum:t%r}}var Jt=["index","touchTime","touchDistance","isHover","children","onClick"],Qt={touchTime:150,touchDistance:8,isHover:!0},Kt=function(e){var r=Fe(e,Qt),n=r.index,l=r.touchTime,a=r.touchDistance,u=r.isHover,d=r.children,m=r.onClick,p=W()(r,Jt),h=(0,i.useContext)(Ue),g=h.size,v=h.gap,R=h.gridArr,C=h.grid,V=h.initSpaceIndex,F=h.isReset,_=h.onChangeGrid,O=Je({startX:0,startY:0,x:0,y:0,duration:0,rowNum:0,colNum:0}),H=T()(O,2),f=H[0],w=H[1];(0,i.useEffect)(function(){var I=Qe(n,V,g),x=I.rowNum,$=I.colNum;w({rowNum:x,colNum:$,x:0,y:0})},[n,V,g,F]),(0,i.useEffect)(function(){if(!(!f.x&&!f.y)){var I=Qe(n,V,g),x=I.rowNum,$=I.colNum,N=(f.colNum-$)*(v+C.w),ce=(f.rowNum-x)*(v+C.h);w({x:N,y:ce,duration:0})}},[v,C]);var Z=(0,i.useMemo)(function(){return Bt(R,f.rowNum,f.colNum)},[R,f.rowNum,f.colNum]),oe=be({onTouchStart:function(){w({startX:f.x,startY:f.y,duration:0})},onTouchMove:function(){var x=Gt(G.deltaX,G.deltaY),$=x.directionX,N=x.directionY;$===Z&&w({x:ct(G.deltaX,-C.w-v,C.w+v)+f.startX}),N===Z&&w({y:ct(G.deltaY,-C.h-v,C.h+v)+f.startY})},onTouchEnd:function(x){var $=!1,N=f.x-f.startX;if(N||(N=f.y-f.startY,$=!0),!!N){var ce=N>0?1:-1,S=f.startX,A=f.startY,X=0,k=f.rowNum,ee=f.colNum;if(Math.abs(N)>=($?C.h:C.w)/2){switch($?(A+=(C.h+v)*ce,X=N>0?4:2):(S+=(C.w+v)*ce,X=N>0?3:1),X){case 1:ee--;break;case 2:k--;break;case 3:ee++;break;case 4:k++;break}_({row:k,col:ee},{row:f.rowNum,col:f.colNum})}w({x:S,y:A,duration:.4,rowNum:k,colNum:ee})}},isDisable:{all:!Z},isStopPropagation:!0}),G=oe.info,J=oe.onTouchFn,K=(0,i.useMemo)(function(){var I=Qe(n,V,g),x=I.rowNum,$=I.colNum,N=function(S){return 0<S&&S<g?S*v:0};return{top:"".concat(C.w*x+N(x),"px"),left:"".concat(C.h*$+N($),"px")}},[n,V,C,g,v]);return Le(p,(0,b.jsx)("div",c()(c()({className:"".concat(ie(Ht,{hover:u})),style:c()(c()({},K),{},{width:C.w+"px",height:C.h+"px",transitionDuration:f.duration+"s",transform:"translate(".concat(f.x,"px, ").concat(f.y,"px)")})},J),{},{onClick:function(){G.time<l&&Math.abs(G.deltaY)<a&&Math.abs(G.deltaX)<a&&(m==null||m(n))},children:d})))},lt=Kt,Zt=["index","globalAlpha","puzzleColor","gameModeBackground","puzzleImg"],qt=["puzzleGridArr","isGameMode","letter","initSpaceIndex","size","grid","isReset"],Ke,Me=(Ke=window.devicePixelRatio)!==null&&Ke!==void 0?Ke:1,er={globalAlpha:.5,puzzleColor:"#ddeafb",gameModeBackground:"#3e3e3e"},st=function(t){var e,r,n,l,a=Fe(t,er),u=a.index,d=a.globalAlpha,m=a.puzzleColor,p=a.gameModeBackground,h=a.puzzleImg,g=W()(a,Zt),v=(0,i.useContext)(Ue),R=v.puzzleGridArr,C=v.isGameMode,V=v.letter,F=v.initSpaceIndex,_=v.size,O=v.grid,H=v.isReset,f=W()(v,qt),w=(e=f.globalAlpha)!==null&&e!==void 0?e:d,Z=(r=f.puzzleColor)!==null&&r!==void 0?r:m,oe=(n=f.gameModeBackground)!==null&&n!==void 0?n:p,G=(l=f.puzzleImg)!==null&&l!==void 0?l:h,J=(0,i.useRef)(null),K=Je({ctx:null}),I=T()(K,2),x=I[0],$=I[1];(0,i.useEffect)(function(){var S,A=(S=J.current)===null||S===void 0?void 0:S.getContext("2d");$({ctx:A})},[]),(0,i.useEffect)(function(){N()},[x,H,O,R,C,w,Z,oe,G]);function N(){var S=x.ctx;if(!(!S||!(R!=null&&R.length))){var A=O.w*Me,X=O.h*Me;if(S.clearRect(0,0,A,X),C&&(S.save(),S.globalAlpha=1,S.fillStyle=oe,S.fillRect(0,0,A,X),S.restore()),G){ce();return}var k=A*_,ee=X*_,E=k/20,te=Math.min(k,ee)/1.3,Q,Y;if(u!==void 0){var j=R[u+(u>=F?1:0)]-1,B=Math.floor(j/_),ae=j%_,le=A*ae,me=X*B;Q={x:E*3/2-le,y:E*3/2-me,w:k-3*E,h:ee-3*E},Y={x:k/2-le,y:ee/2-me}}else E/=_,te/=_,Q={x:E*3/2,y:E*3/2,w:A-3*E,h:X-3*E},Y={x:A/2,y:X/2};S.globalAlpha=w,S.lineWidth=E,S.strokeStyle=Z,S.strokeRect(Q.x,Q.y,Q.w,Q.h),S.fillStyle=Z,S.font="".concat(te,"px \u5B8B\u4F53"),S.textAlign="center",S.textBaseline="middle",S.fillText(V,Y.x,Y.y)}}function ce(){var S=x.ctx;if(!(!S||!(R!=null&&R.length))){var A=O.w*Me,X=O.h*Me,k=A*_,ee=X*_,E={x:0,y:0,w:A,h:X};if(u!==void 0){var te=R[u+(u>=F?1:0)]-1,Q=Math.floor(te/_),Y=te%_,j=A*Y,B=X*Q;E.x=-j,E.y=-B,E.w=k,E.h=ee}var ae=new Image;ae.src=G,ae.onload=function(){S.globalAlpha=w,S.drawImage(ae,E.x,E.y,E.w,E.h)}}}return Le(g,(0,b.jsx)("div",{className:ie(Ft,{full:u===void 0}),children:(0,b.jsx)("canvas",{ref:J,width:O.w*Me,height:O.h*Me,style:{display:"block",width:O.w+"px",height:O.h+"px"},onContextMenu:function(A){A.preventDefault()}})}))},tr=["listLength","isGameMode","background","size","gap","fillPuzzleItemBackground","children","onComplete","onResize"],rr={size:3,listLength:0,gap:2,fillPuzzleItemBackground:"#3e3e3e"},nr=(0,i.forwardRef)(function(t,e){var r=Fe(t,rr),n=r.listLength,l=r.isGameMode,a=r.background,u=r.size,d=r.gap,m=r.fillPuzzleItemBackground,p=r.children,h=r.onComplete,g=r.onResize,v=W()(r,tr),R=(0,i.useRef)(U(We)),C=(0,i.useRef)(z()),V=Je({initSpaceIndex:0,grid:{w:100,h:100}}),F=T()(V,2),_=F[0],O=F[1],H=(0,i.useState)(),f=T()(H,2),w=f[0],Z=f[1],oe=(0,i.useState)(),G=T()(oe,2),J=G[0],K=G[1],I=(0,i.useState)(!1),x=T()(I,2),$=x[0],N=x[1],ce=Xt(function(){var Q,Y,j=document.querySelector(".".concat(R.current," .").concat(We,"-area")),B=(((Q=j==null?void 0:j.clientWidth)!==null&&Q!==void 0?Q:0)-(u-1)*d)/u,ae=(((Y=j==null?void 0:j.clientHeight)!==null&&Y!==void 0?Y:0)-(u-1)*d)/u;O({grid:{w:B,h:ae}}),(B!==_.grid.w||ae!==_.grid.h)&&(g==null||g({w:B,h:ae}))},{wait:100}),S=ce.run,A=function(){S(),X()};(0,i.useEffect)(function(){return A(),q||window.addEventListener("resize",S),function(){q||window.removeEventListener("resize",S)}},[n,u,d]);var X=function(){var Y=u*u,j=Ut(u),B=j.findIndex(function(me){return me===Y}),ae=Math.floor(B/u),le=B%u;K(j),Z(Yt(u,u,function(me,_e){return me===ae&&le===_e?0:j[Math.floor(me*u+_e)]})),O({initSpaceIndex:B})},k=function(Y,j){var B=[w[j.row][j.col],w[Y.row][Y.col]];w[Y.row][Y.col]=B[0],w[j.row][j.col]=B[1],Vt(w)&&(h==null||h()),Z(At()(w))},ee=function(){X(),C.current=z(),N(function(Y){return!Y})},E=(0,i.useMemo)(function(){return{padding:d+"px",background:a}},[d,a]);(0,i.useImperativeHandle)(e,function(){return{reset:ee}});var te=function(){var Y=u*u-n-1;if(!Y)return p;for(var j=[],B=n;B<u*u-1;B++)j.push((0,b.jsx)(lt,{index:B,style:{width:_.grid.w+"px",height:_.grid.h+"px",background:m},children:(0,b.jsx)(st,{index:B})},B));return(0,b.jsxs)(b.Fragment,{children:[p,j]})};return(0,b.jsx)(Ue.Provider,{value:c()(c()(c()({},_),{},{size:u,gridArr:w,puzzleGridArr:J,letter:C.current,isReset:$,gap:d,isGameMode:l},v),{},{onChangeGrid:k}),children:Le(v,(0,b.jsx)("div",{className:"".concat(We," ").concat(R.current),style:E,children:(0,b.jsx)("div",{className:"".concat(We,"-area"),children:te()})}))})}),or=nr,ar=nt(or,{Item:lt,Canvas:st}),br=null},62705:function(s,P,o){var y=o(55639),c=y.Symbol;s.exports=c},44239:function(s,P,o){var y=o(62705),c=o(89607),M=o(2333),T="[object Null]",D="[object Undefined]",W=y?y.toStringTag:void 0;function i(U){return U==null?U===void 0?D:T:W&&W in Object(U)?c(U):M(U)}s.exports=i},4107:function(s,P,o){var y=o(67990),c=/^\s+/;function M(T){return T&&T.slice(0,y(T)+1).replace(c,"")}s.exports=M},31957:function(s,P,o){var y=typeof o.g=="object"&&o.g&&o.g.Object===Object&&o.g;s.exports=y},89607:function(s,P,o){var y=o(62705),c=Object.prototype,M=c.hasOwnProperty,T=c.toString,D=y?y.toStringTag:void 0;function W(i){var U=M.call(i,D),re=i[D];try{i[D]=void 0;var z=!0}catch(de){}var ne=T.call(i);return z&&(U?i[D]=re:delete i[D]),ne}s.exports=W},2333:function(s){var P=Object.prototype,o=P.toString;function y(c){return o.call(c)}s.exports=y},55639:function(s,P,o){var y=o(31957),c=typeof self=="object"&&self&&self.Object===Object&&self,M=y||c||Function("return this")();s.exports=M},67990:function(s){var P=/\s/;function o(y){for(var c=y.length;c--&&P.test(y.charAt(c)););return c}s.exports=o},23279:function(s,P,o){var y=o(13218),c=o(7771),M=o(14841),T="Expected a function",D=Math.max,W=Math.min;function i(U,re,z){var ne,de,Pe,ie,ue,xe,q=0,Xe=!1,Te=!1,Ce=!0;if(typeof U!="function")throw new TypeError(T);re=M(re)||0,y(z)&&(Xe=!!z.leading,Te="maxWait"in z,Pe=Te?D(M(z.maxWait)||0,re):Pe,Ce="trailing"in z?!!z.trailing:Ce);function Ne(b){var he=ne,ge=de;return ne=de=void 0,q=b,ie=U.apply(ge,he),ie}function Ye(b){return q=b,ue=setTimeout(ze,re),Xe?Ne(b):ie}function Be(b){var he=b-xe,ge=b-q,Ae=re-he;return Te?W(Ae,Pe-ge):Ae}function Ee(b){var he=b-xe,ge=b-q;return xe===void 0||he>=re||he<0||Te&&ge>=Pe}function ze(){var b=c();if(Ee(b))return je(b);ue=setTimeout(ze,Be(b))}function je(b){return ue=void 0,Ce&&ne?Ne(b):(ne=de=void 0,ie)}function Ge(){ue!==void 0&&clearTimeout(ue),q=0,ne=xe=de=ue=void 0}function He(){return ue===void 0?ie:je(c())}function be(){var b=c(),he=Ee(b);if(ne=arguments,de=this,xe=b,he){if(ue===void 0)return Ye(xe);if(Te)return clearTimeout(ue),ue=setTimeout(ze,re),Ne(xe)}return ue===void 0&&(ue=setTimeout(ze,re)),ie}return be.cancel=Ge,be.flush=He,be}s.exports=i},13218:function(s){function P(o){var y=typeof o;return o!=null&&(y=="object"||y=="function")}s.exports=P},37005:function(s){function P(o){return o!=null&&typeof o=="object"}s.exports=P},33448:function(s,P,o){var y=o(44239),c=o(37005),M="[object Symbol]";function T(D){return typeof D=="symbol"||c(D)&&y(D)==M}s.exports=T},7771:function(s,P,o){var y=o(55639),c=function(){return y.Date.now()};s.exports=c},14841:function(s,P,o){var y=o(4107),c=o(13218),M=o(33448),T=0/0,D=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,i=/^0o[0-7]+$/i,U=parseInt;function re(z){if(typeof z=="number")return z;if(M(z))return T;if(c(z)){var ne=typeof z.valueOf=="function"?z.valueOf():z;z=c(ne)?ne+"":ne}if(typeof z!="string")return z===0?z:+z;z=y(z);var de=W.test(z);return de||i.test(z)?U(z.slice(2),de?2:8):D.test(z)?T:+z}s.exports=re},63405:function(s,P,o){var y=o(73897);function c(M){if(Array.isArray(M))return y(M)}s.exports=c,s.exports.__esModule=!0,s.exports.default=s.exports},79498:function(s){function P(o){if(typeof Symbol!="undefined"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}s.exports=P,s.exports.__esModule=!0,s.exports.default=s.exports},42281:function(s){function P(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}s.exports=P,s.exports.__esModule=!0,s.exports.default=s.exports},70215:function(s,P,o){var y=o(7071);function c(M,T){if(M==null)return{};var D=y(M,T),W,i;if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(M);for(i=0;i<U.length;i++)W=U[i],!(T.indexOf(W)>=0)&&Object.prototype.propertyIsEnumerable.call(M,W)&&(D[W]=M[W])}return D}s.exports=c,s.exports.__esModule=!0,s.exports.default=s.exports},7071:function(s){function P(o,y){if(o==null)return{};var c={},M=Object.keys(o),T,D;for(D=0;D<M.length;D++)T=M[D],!(y.indexOf(T)>=0)&&(c[T]=o[T]);return c}s.exports=P,s.exports.__esModule=!0,s.exports.default=s.exports},861:function(s,P,o){var y=o(63405),c=o(79498),M=o(86116),T=o(42281);function D(W){return y(W)||c(W)||M(W)||T()}s.exports=D,s.exports.__esModule=!0,s.exports.default=s.exports}}]);