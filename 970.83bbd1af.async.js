"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[970],{64970:function(bn,Pt,y){y.d(Pt,{Z:function(){return Ya}});var a=y(67294),Et=y(62208),Rt=y(35872),oe=y(87462),wt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},It=wt,Nt=y(93771),Lt=function(t,n){return a.createElement(Nt.Z,(0,oe.Z)({},t,{ref:n,icon:It}))},Zt=a.forwardRef(Lt),Mt=Zt,Ot=y(93967),X=y.n(Ot),Y=y(4942),ae=y(1413),N=y(97685),Me=y(71002),he=y(91),Ke=y(21770),zt=y(31131),Te=(0,a.createContext)(null),Xe=y(74902),Oe=y(9220),At=y(66680),pe=y(42550),ze=y(75164),_t=function(t){var n=t.activeTabOffset,r=t.horizontal,i=t.rtl,l=t.indicator,c=l===void 0?{}:l,o=c.size,s=c.align,d=s===void 0?"center":s,m=(0,a.useState)(),f=(0,N.Z)(m,2),g=f[0],P=f[1],L=(0,a.useRef)(),E=a.useCallback(function(h){return typeof o=="function"?o(h):typeof o=="number"?o:h},[o]);function I(){ze.Z.cancel(L.current)}return(0,a.useEffect)(function(){var h={};if(n)if(r){h.width=E(n.width);var v=i?"right":"left";d==="start"&&(h[v]=n[v]),d==="center"&&(h[v]=n[v]+n.width/2,h.transform=i?"translateX(50%)":"translateX(-50%)"),d==="end"&&(h[v]=n[v]+n.width,h.transform="translateX(-100%)")}else h.height=E(n.height),d==="start"&&(h.top=n.top),d==="center"&&(h.top=n.top+n.height/2,h.transform="translateY(-50%)"),d==="end"&&(h.top=n.top+n.height,h.transform="translateY(-100%)");return I(),L.current=(0,ze.Z)(function(){P(h)}),I},[n,r,i,d,E]),{style:g}},Bt=_t,Fe={width:0,height:0,left:0,top:0};function Dt(e,t,n){return(0,a.useMemo)(function(){for(var r,i=new Map,l=t.get((r=e[0])===null||r===void 0?void 0:r.key)||Fe,c=l.left+l.width,o=0;o<e.length;o+=1){var s=e[o].key,d=t.get(s);if(!d){var m;d=t.get((m=e[o-1])===null||m===void 0?void 0:m.key)||Fe}var f=i.get(s)||(0,ae.Z)({},d);f.right=c-f.left-f.width,i.set(s,f)}return i},[e.map(function(r){return r.key}).join("_"),t,n])}function Ue(e,t){var n=a.useRef(e),r=a.useState({}),i=(0,N.Z)(r,2),l=i[1];function c(o){var s=typeof o=="function"?o(n.current):o;s!==n.current&&t(s,n.current),n.current=s,l({})}return[n.current,c]}var Wt=.1,Ye=.01,Pe=20,Qe=Math.pow(.995,Pe);function Ht(e,t){var n=(0,a.useState)(),r=(0,N.Z)(n,2),i=r[0],l=r[1],c=(0,a.useState)(0),o=(0,N.Z)(c,2),s=o[0],d=o[1],m=(0,a.useState)(0),f=(0,N.Z)(m,2),g=f[0],P=f[1],L=(0,a.useState)(),E=(0,N.Z)(L,2),I=E[0],h=E[1],v=(0,a.useRef)();function Z(b){var R=b.touches[0],p=R.screenX,w=R.screenY;l({x:p,y:w}),window.clearInterval(v.current)}function D(b){if(i){b.preventDefault();var R=b.touches[0],p=R.screenX,w=R.screenY;l({x:p,y:w});var u=p-i.x,C=w-i.y;t(u,C);var V=Date.now();d(V),P(V-s),h({x:u,y:C})}}function W(){if(i&&(l(null),h(null),I)){var b=I.x/g,R=I.y/g,p=Math.abs(b),w=Math.abs(R);if(Math.max(p,w)<Wt)return;var u=b,C=R;v.current=window.setInterval(function(){if(Math.abs(u)<Ye&&Math.abs(C)<Ye){window.clearInterval(v.current);return}u*=Qe,C*=Qe,t(u*Pe,C*Pe)},Pe)}}var M=(0,a.useRef)();function O(b){var R=b.deltaX,p=b.deltaY,w=0,u=Math.abs(R),C=Math.abs(p);u===C?w=M.current==="x"?R:p:u>C?(w=R,M.current="x"):(w=p,M.current="y"),t(-w,-w)&&b.preventDefault()}var T=(0,a.useRef)(null);T.current={onTouchStart:Z,onTouchMove:D,onTouchEnd:W,onWheel:O},a.useEffect(function(){function b(u){T.current.onTouchStart(u)}function R(u){T.current.onTouchMove(u)}function p(u){T.current.onTouchEnd(u)}function w(u){T.current.onWheel(u)}return document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",p,{passive:!1}),e.current.addEventListener("touchstart",b,{passive:!1}),e.current.addEventListener("wheel",w),function(){document.removeEventListener("touchmove",R),document.removeEventListener("touchend",p)}},[])}var kt=y(8410);function Je(e){var t=(0,a.useState)(0),n=(0,N.Z)(t,2),r=n[0],i=n[1],l=(0,a.useRef)(0),c=(0,a.useRef)();return c.current=e,(0,kt.o)(function(){var o;(o=c.current)===null||o===void 0||o.call(c)},[r]),function(){l.current===r&&(l.current+=1,i(l.current))}}function Gt(e){var t=(0,a.useRef)([]),n=(0,a.useState)({}),r=(0,N.Z)(n,2),i=r[1],l=(0,a.useRef)(typeof e=="function"?e():e),c=Je(function(){var s=l.current;t.current.forEach(function(d){s=d(s)}),t.current=[],l.current=s,i({})});function o(s){t.current.push(s),c()}return[l.current,o]}var qe={width:0,height:0,left:0,top:0,right:0};function Vt(e,t,n,r,i,l,c){var o=c.tabs,s=c.tabPosition,d=c.rtl,m,f,g;return["top","bottom"].includes(s)?(m="width",f=d?"right":"left",g=Math.abs(n)):(m="height",f="top",g=-n),(0,a.useMemo)(function(){if(!o.length)return[0,0];for(var P=o.length,L=P,E=0;E<P;E+=1){var I=e.get(o[E].key)||qe;if(I[f]+I[m]>g+t){L=E-1;break}}for(var h=0,v=P-1;v>=0;v-=1){var Z=e.get(o[v].key)||qe;if(Z[f]<g){h=v+1;break}}return h>=L?[0,0]:[h,L]},[e,t,r,i,l,g,s,o.map(function(P){return P.key}).join("_"),d])}function et(e){var t;return e instanceof Map?(t={},e.forEach(function(n,r){t[r]=n})):t=e,JSON.stringify(t)}var jt="TABS_DQ";function tt(e){return String(e).replace(/"/g,jt)}function at(e,t,n,r){return!(!n||r||e===!1||e===void 0&&(t===!1||t===null))}var Kt=a.forwardRef(function(e,t){var n=e.prefixCls,r=e.editable,i=e.locale,l=e.style;return!r||r.showAdd===!1?null:a.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:l,"aria-label":(i==null?void 0:i.addAriaLabel)||"Add tab",onClick:function(o){r.onEdit("add",{event:o})}},r.addIcon||"+")}),nt=Kt,Xt=a.forwardRef(function(e,t){var n=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var l,c={};return(0,Me.Z)(i)==="object"&&!a.isValidElement(i)?c=i:c.right=i,n==="right"&&(l=c.right),n==="left"&&(l=c.left),l?a.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},l):null}),rt=Xt,Ft=y(40228),ne=y(15105),Ut=ne.Z.ESC,Yt=ne.Z.TAB;function Qt(e){var t=e.visible,n=e.triggerRef,r=e.onVisibleChange,i=e.autoFocus,l=e.overlayRef,c=a.useRef(!1),o=function(){if(t){var f,g;(f=n.current)===null||f===void 0||(g=f.focus)===null||g===void 0||g.call(f),r==null||r(!1)}},s=function(){var f;return(f=l.current)!==null&&f!==void 0&&f.focus?(l.current.focus(),c.current=!0,!0):!1},d=function(f){switch(f.keyCode){case Ut:o();break;case Yt:{var g=!1;c.current||(g=s()),g?f.preventDefault():o();break}}};a.useEffect(function(){return t?(window.addEventListener("keydown",d),i&&(0,ze.Z)(s,3),function(){window.removeEventListener("keydown",d),c.current=!1}):function(){c.current=!1}},[t])}var Jt=(0,a.forwardRef)(function(e,t){var n=e.overlay,r=e.arrow,i=e.prefixCls,l=(0,a.useMemo)(function(){var o;return typeof n=="function"?o=n():o=n,o},[n]),c=(0,pe.sQ)(t,l==null?void 0:l.ref);return a.createElement(a.Fragment,null,r&&a.createElement("div",{className:"".concat(i,"-arrow")}),a.cloneElement(l,{ref:(0,pe.Yr)(l)?c:void 0}))}),qt=Jt,ve={adjustX:1,adjustY:1},be=[0,0],ea={topLeft:{points:["bl","tl"],overflow:ve,offset:[0,-4],targetOffset:be},top:{points:["bc","tc"],overflow:ve,offset:[0,-4],targetOffset:be},topRight:{points:["br","tr"],overflow:ve,offset:[0,-4],targetOffset:be},bottomLeft:{points:["tl","bl"],overflow:ve,offset:[0,4],targetOffset:be},bottom:{points:["tc","bc"],overflow:ve,offset:[0,4],targetOffset:be},bottomRight:{points:["tr","br"],overflow:ve,offset:[0,4],targetOffset:be}},ta=ea,aa=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function na(e,t){var n,r=e.arrow,i=r===void 0?!1:r,l=e.prefixCls,c=l===void 0?"rc-dropdown":l,o=e.transitionName,s=e.animation,d=e.align,m=e.placement,f=m===void 0?"bottomLeft":m,g=e.placements,P=g===void 0?ta:g,L=e.getPopupContainer,E=e.showAction,I=e.hideAction,h=e.overlayClassName,v=e.overlayStyle,Z=e.visible,D=e.trigger,W=D===void 0?["hover"]:D,M=e.autoFocus,O=e.overlay,T=e.children,b=e.onVisibleChange,R=(0,he.Z)(e,aa),p=a.useState(),w=(0,N.Z)(p,2),u=w[0],C=w[1],V="visible"in e?Z:u,j=a.useRef(null),Q=a.useRef(null),K=a.useRef(null);a.useImperativeHandle(t,function(){return j.current});var J=function(_){C(_),b==null||b(_)};Qt({visible:V,triggerRef:K,onVisibleChange:J,autoFocus:M,overlayRef:Q});var re=function(_){var ee=e.onOverlayClick;C(!1),ee&&ee(_)},q=function(){return a.createElement(qt,{ref:Q,overlay:O,prefixCls:c,arrow:i})},S=function(){return typeof O=="function"?q:q()},z=function(){var _=e.minOverlayWidthMatchTrigger,ee=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?_:!ee},F=function(){var _=e.openClassName;return _!==void 0?_:"".concat(c,"-open")},G=a.cloneElement(T,{className:X()((n=T.props)===null||n===void 0?void 0:n.className,V&&F()),ref:(0,pe.Yr)(T)?(0,pe.sQ)(K,T.ref):void 0}),H=I;return!H&&W.indexOf("contextMenu")!==-1&&(H=["click"]),a.createElement(Ft.Z,(0,oe.Z)({builtinPlacements:P},R,{prefixCls:c,ref:j,popupClassName:X()(h,(0,Y.Z)({},"".concat(c,"-show-arrow"),i)),popupStyle:v,action:W,showAction:E,hideAction:H,popupPlacement:f,popupAlign:d,popupTransitionName:o,popupAnimation:s,popupVisible:V,stretch:z()?"minWidth":"",popup:S(),onPopupVisibleChange:J,onPopupClick:re,getPopupContainer:L}),G)}var ra=a.forwardRef(na),ia=ra,it=y(72512),oa=a.forwardRef(function(e,t){var n=e.prefixCls,r=e.id,i=e.tabs,l=e.locale,c=e.mobile,o=e.moreIcon,s=o===void 0?"More":o,d=e.moreTransitionName,m=e.style,f=e.className,g=e.editable,P=e.tabBarGutter,L=e.rtl,E=e.removeAriaLabel,I=e.onTabClick,h=e.getPopupContainer,v=e.popupClassName,Z=(0,a.useState)(!1),D=(0,N.Z)(Z,2),W=D[0],M=D[1],O=(0,a.useState)(null),T=(0,N.Z)(O,2),b=T[0],R=T[1],p="".concat(r,"-more-popup"),w="".concat(n,"-dropdown"),u=b!==null?"".concat(p,"-").concat(b):null,C=l==null?void 0:l.dropdownAriaLabel;function V(S,z){S.preventDefault(),S.stopPropagation(),g.onEdit("remove",{key:z,event:S})}var j=a.createElement(it.ZP,{onClick:function(z){var F=z.key,G=z.domEvent;I(F,G),M(!1)},prefixCls:"".concat(w,"-menu"),id:p,tabIndex:-1,role:"listbox","aria-activedescendant":u,selectedKeys:[b],"aria-label":C!==void 0?C:"expanded dropdown"},i.map(function(S){var z=S.closable,F=S.disabled,G=S.closeIcon,H=S.key,U=S.label,_=at(z,G,g,F);return a.createElement(it.sN,{key:H,id:"".concat(p,"-").concat(H),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(H),disabled:F},a.createElement("span",null,U),_&&a.createElement("button",{type:"button","aria-label":E||"remove",tabIndex:0,className:"".concat(w,"-menu-item-remove"),onClick:function(le){le.stopPropagation(),V(le,H)}},G||g.removeIcon||"\xD7"))}));function Q(S){for(var z=i.filter(function(_){return!_.disabled}),F=z.findIndex(function(_){return _.key===b})||0,G=z.length,H=0;H<G;H+=1){F=(F+S+G)%G;var U=z[F];if(!U.disabled){R(U.key);return}}}function K(S){var z=S.which;if(!W){[ne.Z.DOWN,ne.Z.SPACE,ne.Z.ENTER].includes(z)&&(M(!0),S.preventDefault());return}switch(z){case ne.Z.UP:Q(-1),S.preventDefault();break;case ne.Z.DOWN:Q(1),S.preventDefault();break;case ne.Z.ESC:M(!1);break;case ne.Z.SPACE:case ne.Z.ENTER:b!==null&&I(b,S);break}}(0,a.useEffect)(function(){var S=document.getElementById(u);S&&S.scrollIntoView&&S.scrollIntoView(!1)},[b]),(0,a.useEffect)(function(){W||R(null)},[W]);var J=(0,Y.Z)({},L?"marginRight":"marginLeft",P);i.length||(J.visibility="hidden",J.order=1);var re=X()((0,Y.Z)({},"".concat(w,"-rtl"),L)),q=c?null:a.createElement(ia,{prefixCls:w,overlay:j,trigger:["hover"],visible:i.length?W:!1,transitionName:d,onVisibleChange:M,overlayClassName:X()(re,v),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:h},a.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:J,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":p,id:"".concat(r,"-more"),"aria-expanded":W,onKeyDown:K},s));return a.createElement("div",{className:X()("".concat(n,"-nav-operations"),f),style:m,ref:t},q,a.createElement(nt,{prefixCls:n,locale:l,editable:g}))}),la=a.memo(oa,function(e,t){return t.tabMoving}),ca=function(t){var n=t.prefixCls,r=t.id,i=t.active,l=t.tab,c=l.key,o=l.label,s=l.disabled,d=l.closeIcon,m=l.icon,f=t.closable,g=t.renderWrapper,P=t.removeAriaLabel,L=t.editable,E=t.onClick,I=t.onFocus,h=t.style,v="".concat(n,"-tab"),Z=at(f,d,L,s);function D(T){s||E(T)}function W(T){T.preventDefault(),T.stopPropagation(),L.onEdit("remove",{key:c,event:T})}var M=a.useMemo(function(){return m&&typeof o=="string"?a.createElement("span",null,o):o},[o,m]),O=a.createElement("div",{key:c,"data-node-key":tt(c),className:X()(v,(0,Y.Z)((0,Y.Z)((0,Y.Z)({},"".concat(v,"-with-remove"),Z),"".concat(v,"-active"),i),"".concat(v,"-disabled"),s)),style:h,onClick:D},a.createElement("div",{role:"tab","aria-selected":i,id:r&&"".concat(r,"-tab-").concat(c),className:"".concat(v,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(c),"aria-disabled":s,tabIndex:s?null:0,onClick:function(b){b.stopPropagation(),D(b)},onKeyDown:function(b){[ne.Z.SPACE,ne.Z.ENTER].includes(b.which)&&(b.preventDefault(),D(b))},onFocus:I},m&&a.createElement("span",{className:"".concat(v,"-icon")},m),o&&M),Z&&a.createElement("button",{type:"button","aria-label":P||"remove",tabIndex:0,className:"".concat(v,"-remove"),onClick:function(b){b.stopPropagation(),W(b)}},d||L.removeIcon||"\xD7"));return g?g(O):O},sa=ca,da=function(t,n){var r=t.offsetWidth,i=t.offsetHeight,l=t.offsetTop,c=t.offsetLeft,o=t.getBoundingClientRect(),s=o.width,d=o.height,m=o.x,f=o.y;return Math.abs(s-r)<1?[s,d,m-n.x,f-n.y]:[r,i,c,l]},me=function(t){var n=t.current||{},r=n.offsetWidth,i=r===void 0?0:r,l=n.offsetHeight,c=l===void 0?0:l;if(t.current){var o=t.current.getBoundingClientRect(),s=o.width,d=o.height;if(Math.abs(s-i)<1)return[s,d]}return[i,c]},Ee=function(t,n){return t[n?0:1]},ua=a.forwardRef(function(e,t){var n=e.className,r=e.style,i=e.id,l=e.animated,c=e.activeKey,o=e.rtl,s=e.extra,d=e.editable,m=e.locale,f=e.tabPosition,g=e.tabBarGutter,P=e.children,L=e.onTabClick,E=e.onTabScroll,I=e.indicator,h=a.useContext(Te),v=h.prefixCls,Z=h.tabs,D=(0,a.useRef)(null),W=(0,a.useRef)(null),M=(0,a.useRef)(null),O=(0,a.useRef)(null),T=(0,a.useRef)(null),b=(0,a.useRef)(null),R=(0,a.useRef)(null),p=f==="top"||f==="bottom",w=Ue(0,function(B,x){p&&E&&E({direction:B>x?"left":"right"})}),u=(0,N.Z)(w,2),C=u[0],V=u[1],j=Ue(0,function(B,x){!p&&E&&E({direction:B>x?"top":"bottom"})}),Q=(0,N.Z)(j,2),K=Q[0],J=Q[1],re=(0,a.useState)([0,0]),q=(0,N.Z)(re,2),S=q[0],z=q[1],F=(0,a.useState)([0,0]),G=(0,N.Z)(F,2),H=G[0],U=G[1],_=(0,a.useState)([0,0]),ee=(0,N.Z)(_,2),le=ee[0],$e=ee[1],Ae=(0,a.useState)([0,0]),Se=(0,N.Z)(Ae,2),_e=Se[0],A=Se[1],de=Gt(new Map),ge=(0,N.Z)(de,2),Qa=ge[0],Ja=ge[1],Re=Dt(Z,Qa,H[0]),Be=Ee(S,p),Ce=Ee(H,p),De=Ee(le,p),ut=Ee(_e,p),ft=Be<Ce+De,ie=ft?Be-ut:Be-De,qa="".concat(v,"-nav-operations-hidden"),ce=0,ue=0;p&&o?(ce=0,ue=Math.max(0,Ce-ie)):(ce=Math.min(0,ie-Ce),ue=0);function We(B){return B<ce?ce:B>ue?ue:B}var He=(0,a.useRef)(null),en=(0,a.useState)(),vt=(0,N.Z)(en,2),we=vt[0],bt=vt[1];function ke(){bt(Date.now())}function Ge(){He.current&&clearTimeout(He.current)}Ht(O,function(B,x){function k(te,fe){te(function(se){var Le=We(se+fe);return Le})}return ft?(p?k(V,B):k(J,x),Ge(),ke(),!0):!1}),(0,a.useEffect)(function(){return Ge(),we&&(He.current=setTimeout(function(){bt(0)},100)),Ge},[we]);var tn=Vt(Re,ie,p?C:K,Ce,De,ut,(0,ae.Z)((0,ae.Z)({},e),{},{tabs:Z})),mt=(0,N.Z)(tn,2),an=mt[0],nn=mt[1],gt=(0,At.Z)(function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c,x=Re.get(B)||{width:0,height:0,left:0,right:0,top:0};if(p){var k=C;o?x.right<C?k=x.right:x.right+x.width>C+ie&&(k=x.right+x.width-ie):x.left<-C?k=-x.left:x.left+x.width>-C+ie&&(k=-(x.left+x.width-ie)),J(0),V(We(k))}else{var te=K;x.top<-K?te=-x.top:x.top+x.height>-K+ie&&(te=-(x.top+x.height-ie)),V(0),J(We(te))}}),Ie={};f==="top"||f==="bottom"?Ie[o?"marginRight":"marginLeft"]=g:Ie.marginTop=g;var ht=Z.map(function(B,x){var k=B.key;return a.createElement(sa,{id:i,prefixCls:v,key:k,tab:B,style:x===0?void 0:Ie,closable:B.closable,editable:d,active:k===c,renderWrapper:P,removeAriaLabel:m==null?void 0:m.removeAriaLabel,onClick:function(fe){L(k,fe)},onFocus:function(){gt(k),ke(),O.current&&(o||(O.current.scrollLeft=0),O.current.scrollTop=0)}})}),pt=function(){return Ja(function(){var x,k=new Map,te=(x=T.current)===null||x===void 0?void 0:x.getBoundingClientRect();return Z.forEach(function(fe){var se,Le=fe.key,Tt=(se=T.current)===null||se===void 0?void 0:se.querySelector('[data-node-key="'.concat(tt(Le),'"]'));if(Tt){var sn=da(Tt,te),Ze=(0,N.Z)(sn,4),dn=Ze[0],un=Ze[1],fn=Ze[2],vn=Ze[3];k.set(Le,{width:dn,height:un,left:fn,top:vn})}}),k})};(0,a.useEffect)(function(){pt()},[Z.map(function(B){return B.key}).join("_")]);var Ne=Je(function(){var B=me(D),x=me(W),k=me(M);z([B[0]-x[0]-k[0],B[1]-x[1]-k[1]]);var te=me(R);$e(te);var fe=me(b);A(fe);var se=me(T);U([se[0]-te[0],se[1]-te[1]]),pt()}),rn=Z.slice(0,an),on=Z.slice(nn+1),yt=[].concat((0,Xe.Z)(rn),(0,Xe.Z)(on)),$t=Re.get(c),ln=Bt({activeTabOffset:$t,horizontal:p,indicator:I,rtl:o}),cn=ln.style;(0,a.useEffect)(function(){gt()},[c,ce,ue,et($t),et(Re),p]),(0,a.useEffect)(function(){Ne()},[o]);var St=!!yt.length,xe="".concat(v,"-nav-wrap"),Ve,je,Ct,xt;return p?o?(je=C>0,Ve=C!==ue):(Ve=C<0,je=C!==ce):(Ct=K<0,xt=K!==ce),a.createElement(Oe.Z,{onResize:Ne},a.createElement("div",{ref:(0,pe.x1)(t,D),role:"tablist",className:X()("".concat(v,"-nav"),n),style:r,onKeyDown:function(){ke()}},a.createElement(rt,{ref:W,position:"left",extra:s,prefixCls:v}),a.createElement(Oe.Z,{onResize:Ne},a.createElement("div",{className:X()(xe,(0,Y.Z)((0,Y.Z)((0,Y.Z)((0,Y.Z)({},"".concat(xe,"-ping-left"),Ve),"".concat(xe,"-ping-right"),je),"".concat(xe,"-ping-top"),Ct),"".concat(xe,"-ping-bottom"),xt)),ref:O},a.createElement(Oe.Z,{onResize:Ne},a.createElement("div",{ref:T,className:"".concat(v,"-nav-list"),style:{transform:"translate(".concat(C,"px, ").concat(K,"px)"),transition:we?"none":void 0}},ht,a.createElement(nt,{ref:R,prefixCls:v,locale:m,editable:d,style:(0,ae.Z)((0,ae.Z)({},ht.length===0?void 0:Ie),{},{visibility:St?"hidden":null})}),a.createElement("div",{className:X()("".concat(v,"-ink-bar"),(0,Y.Z)({},"".concat(v,"-ink-bar-animated"),l.inkBar)),style:cn}))))),a.createElement(la,(0,oe.Z)({},e,{removeAriaLabel:m==null?void 0:m.removeAriaLabel,ref:b,prefixCls:v,tabs:yt,className:!St&&qa,tabMoving:!!we})),a.createElement(rt,{ref:M,position:"right",extra:s,prefixCls:v})))}),ot=ua,fa=a.forwardRef(function(e,t){var n=e.prefixCls,r=e.className,i=e.style,l=e.id,c=e.active,o=e.tabKey,s=e.children;return a.createElement("div",{id:l&&"".concat(l,"-panel-").concat(o),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":l&&"".concat(l,"-tab-").concat(o),"aria-hidden":!c,style:i,className:X()(n,c&&"".concat(n,"-active"),r),ref:t},s)}),lt=fa,va=["renderTabBar"],ba=["label","key"],ma=function(t){var n=t.renderTabBar,r=(0,he.Z)(t,va),i=a.useContext(Te),l=i.tabs;if(n){var c=(0,ae.Z)((0,ae.Z)({},r),{},{panes:l.map(function(o){var s=o.label,d=o.key,m=(0,he.Z)(o,ba);return a.createElement(lt,(0,oe.Z)({tab:s,key:d,tabKey:d},m))})});return n(c,ot)}return a.createElement(ot,r)},ga=ma,ha=y(82225),pa=["key","forceRender","style","className","destroyInactiveTabPane"],ya=function(t){var n=t.id,r=t.activeKey,i=t.animated,l=t.tabPosition,c=t.destroyInactiveTabPane,o=a.useContext(Te),s=o.prefixCls,d=o.tabs,m=i.tabPane,f="".concat(s,"-tabpane");return a.createElement("div",{className:X()("".concat(s,"-content-holder"))},a.createElement("div",{className:X()("".concat(s,"-content"),"".concat(s,"-content-").concat(l),(0,Y.Z)({},"".concat(s,"-content-animated"),m))},d.map(function(g){var P=g.key,L=g.forceRender,E=g.style,I=g.className,h=g.destroyInactiveTabPane,v=(0,he.Z)(g,pa),Z=P===r;return a.createElement(ha.ZP,(0,oe.Z)({key:P,visible:Z,forceRender:L,removeOnLeave:!!(c||h),leavedClassName:"".concat(f,"-hidden")},i.tabPaneMotion),function(D,W){var M=D.style,O=D.className;return a.createElement(lt,(0,oe.Z)({},v,{prefixCls:f,id:n,tabKey:P,animated:m,active:Z,style:(0,ae.Z)((0,ae.Z)({},E),M),className:X()(I,O),ref:W}))})})))},$a=ya,mn=y(80334);function Sa(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=(0,ae.Z)({inkBar:!0},(0,Me.Z)(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var Ca=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicator"],ct=0,xa=a.forwardRef(function(e,t){var n=e.id,r=e.prefixCls,i=r===void 0?"rc-tabs":r,l=e.className,c=e.items,o=e.direction,s=e.activeKey,d=e.defaultActiveKey,m=e.editable,f=e.animated,g=e.tabPosition,P=g===void 0?"top":g,L=e.tabBarGutter,E=e.tabBarStyle,I=e.tabBarExtraContent,h=e.locale,v=e.moreIcon,Z=e.moreTransitionName,D=e.destroyInactiveTabPane,W=e.renderTabBar,M=e.onChange,O=e.onTabClick,T=e.onTabScroll,b=e.getPopupContainer,R=e.popupClassName,p=e.indicator,w=(0,he.Z)(e,Ca),u=a.useMemo(function(){return(c||[]).filter(function(A){return A&&(0,Me.Z)(A)==="object"&&"key"in A})},[c]),C=o==="rtl",V=Sa(f),j=(0,a.useState)(!1),Q=(0,N.Z)(j,2),K=Q[0],J=Q[1];(0,a.useEffect)(function(){J((0,zt.Z)())},[]);var re=(0,Ke.Z)(function(){var A;return(A=u[0])===null||A===void 0?void 0:A.key},{value:s,defaultValue:d}),q=(0,N.Z)(re,2),S=q[0],z=q[1],F=(0,a.useState)(function(){return u.findIndex(function(A){return A.key===S})}),G=(0,N.Z)(F,2),H=G[0],U=G[1];(0,a.useEffect)(function(){var A=u.findIndex(function(ge){return ge.key===S});if(A===-1){var de;A=Math.max(0,Math.min(H,u.length-1)),z((de=u[A])===null||de===void 0?void 0:de.key)}U(A)},[u.map(function(A){return A.key}).join("_"),S,H]);var _=(0,Ke.Z)(null,{value:n}),ee=(0,N.Z)(_,2),le=ee[0],$e=ee[1];(0,a.useEffect)(function(){n||($e("rc-tabs-".concat(ct)),ct+=1)},[]);function Ae(A,de){O==null||O(A,de);var ge=A!==S;z(A),ge&&(M==null||M(A))}var Se={id:le,activeKey:S,animated:V,tabPosition:P,rtl:C,mobile:K},_e=(0,ae.Z)((0,ae.Z)({},Se),{},{editable:m,locale:h,moreIcon:v,moreTransitionName:Z,tabBarGutter:L,onTabClick:Ae,onTabScroll:T,extra:I,style:E,panes:null,getPopupContainer:b,popupClassName:R,indicator:p});return a.createElement(Te.Provider,{value:{tabs:u,prefixCls:i}},a.createElement("div",(0,oe.Z)({ref:t,id:n,className:X()(i,"".concat(i,"-").concat(P),(0,Y.Z)((0,Y.Z)((0,Y.Z)({},"".concat(i,"-mobile"),K),"".concat(i,"-editable"),m),"".concat(i,"-rtl"),C),l)},w),a.createElement(ga,(0,oe.Z)({},_e,{renderTabBar:W})),a.createElement($a,(0,oe.Z)({destroyInactiveTabPane:D},Se,{animated:V}))))}),Ta=xa,Pa=Ta,Ea=y(53124),Ra=y(35792),wa=y(98675),Ia=y(33603);const Na={motionAppear:!1,motionEnter:!0,motionLeave:!0};function La(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},n;return t===!1?n={inkBar:!1,tabPane:!1}:t===!0?n={inkBar:!0,tabPane:!0}:n=Object.assign({inkBar:!0},typeof t=="object"?t:{}),n.tabPane&&(n.tabPaneMotion=Object.assign(Object.assign({},Na),{motionName:(0,Ia.m)(e,"switch")})),n}var Za=y(50344),Ma=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Oa(e){return e.filter(t=>t)}function za(e,t){if(e)return e;const n=(0,Za.Z)(t).map(r=>{if(a.isValidElement(r)){const{key:i,props:l}=r,c=l||{},{tab:o}=c,s=Ma(c,["tab"]);return Object.assign(Object.assign({key:String(i)},s),{label:o})}return null});return Oa(n)}var $=y(6731),ye=y(14747),Aa=y(91945),_a=y(45503),st=y(67771),Ba=e=>{const{componentCls:t,motionDurationSlow:n}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${n}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${n}`}}}}},[(0,st.oN)(e,"slide-up"),(0,st.oN)(e,"slide-down")]]};const Da=e=>{const{componentCls:t,tabsCardPadding:n,cardBg:r,cardGutter:i,colorBorderSecondary:l,itemSelectedColor:c}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:n,background:r,border:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${l}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:c,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:(0,$.bf)(i)}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${(0,$.bf)(e.borderRadiusLG)} ${(0,$.bf)(e.borderRadiusLG)} 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${(0,$.bf)(e.borderRadiusLG)} ${(0,$.bf)(e.borderRadiusLG)}`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:(0,$.bf)(i)}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,$.bf)(e.borderRadiusLG)} 0 0 ${(0,$.bf)(e.borderRadiusLG)}`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,$.bf)(e.borderRadiusLG)} ${(0,$.bf)(e.borderRadiusLG)} 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},Wa=e=>{const{componentCls:t,itemHoverColor:n,dropdownEdgeChildVerticalPadding:r}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},(0,ye.Wf)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${(0,$.bf)(r)} 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},ye.vS),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${(0,$.bf)(e.paddingXXS)} ${(0,$.bf)(e.paddingSM)}`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:n}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Ha=e=>{const{componentCls:t,margin:n,colorBorderSecondary:r,horizontalMargin:i,verticalItemPadding:l,verticalItemMargin:c,calc:o}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:i,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${r}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:n,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:o(e.controlHeight).mul(1.25).equal(),[`${t}-tab`]:{padding:l,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:c},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:(0,$.bf)(o(e.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:o(e.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},ka=e=>{const{componentCls:t,cardPaddingSM:n,cardPaddingLG:r,horizontalItemPaddingSM:i,horizontalItemPaddingLG:l}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:i,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:l,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:n}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${(0,$.bf)(e.borderRadius)} ${(0,$.bf)(e.borderRadius)}`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${(0,$.bf)(e.borderRadius)} ${(0,$.bf)(e.borderRadius)} 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,$.bf)(e.borderRadius)} ${(0,$.bf)(e.borderRadius)} 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,$.bf)(e.borderRadius)} 0 0 ${(0,$.bf)(e.borderRadius)}`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r}}}}}},Ga=e=>{const{componentCls:t,itemActiveColor:n,itemHoverColor:r,iconCls:i,tabsHorizontalItemMargin:l,horizontalItemPadding:c,itemSelectedColor:o,itemColor:s}=e,d=`${t}-tab`;return{[d]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:c,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:s,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:n}},(0,ye.Qy)(e)),"&-btn":{outline:"none",transition:"all 0.3s",[`${d}-icon:not(:last-child)`]:{marginInlineEnd:e.marginSM}},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:e.calc(e.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:r},[`&${d}-active ${d}-btn`]:{color:o,textShadow:e.tabsActiveTextShadow},[`&${d}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${d}-disabled ${d}-btn, &${d}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${d}-remove ${i}`]:{margin:0},[`${i}:not(:last-child)`]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${d} + ${d}`]:{margin:{_skip_check_:!0,value:l}}}},Va=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:n,iconCls:r,cardGutter:i,calc:l}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:n},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[r]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:(0,$.bf)(e.marginSM)}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:(0,$.bf)(e.marginXS)},marginLeft:{_skip_check_:!0,value:(0,$.bf)(l(e.marginXXS).mul(-1).equal())},[r]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:i},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},ja=e=>{const{componentCls:t,tabsCardPadding:n,cardHeight:r,cardGutter:i,itemHoverColor:l,itemActiveColor:c,colorBorderSecondary:o}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,ye.Wf)(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:n,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.calc(e.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:r,minHeight:r,marginLeft:{_skip_check_:!0,value:i},padding:`0 ${(0,$.bf)(e.paddingXS)}`,background:"transparent",border:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${o}`,borderRadius:`${(0,$.bf)(e.borderRadiusLG)} ${(0,$.bf)(e.borderRadiusLG)} 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:l},"&:active, &:focus:not(:focus-visible)":{color:c}},(0,ye.Qy)(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),Ga(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},Ka=e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,cardPaddingSM:`${e.paddingXXS*1.5}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${e.paddingXXS*1.5}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}};var Xa=(0,Aa.I$)("Tabs",e=>{const t=(0,_a.TS)(e,{tabsCardPadding:e.cardPadding,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${(0,$.bf)(e.horizontalItemGutter)}`,tabsHorizontalItemMarginRTL:`0 0 0 ${(0,$.bf)(e.horizontalItemGutter)}`});return[ka(t),Va(t),Ha(t),Wa(t),Da(t),ja(t),Ba(t)]},Ka),Fa=()=>null,Ua=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const dt=e=>{var t,n,r,i,l,c,o,s;const{type:d,className:m,rootClassName:f,size:g,onEdit:P,hideAdd:L,centered:E,addIcon:I,removeIcon:h,moreIcon:v,popupClassName:Z,children:D,items:W,animated:M,style:O,indicatorSize:T,indicator:b}=e,R=Ua(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","removeIcon","moreIcon","popupClassName","children","items","animated","style","indicatorSize","indicator"]),{prefixCls:p}=R,{direction:w,tabs:u,getPrefixCls:C,getPopupContainer:V}=a.useContext(Ea.E_),j=C("tabs",p),Q=(0,Ra.Z)(j),[K,J,re]=Xa(j,Q);let q;d==="editable-card"&&(q={onEdit:(_,ee)=>{let{key:le,event:$e}=ee;P==null||P(_==="add"?$e:le,_)},removeIcon:(t=h!=null?h:u==null?void 0:u.removeIcon)!==null&&t!==void 0?t:a.createElement(Et.Z,null),addIcon:(I!=null?I:u==null?void 0:u.addIcon)||a.createElement(Mt,null),showAdd:L!==!0});const S=C(),z=(0,wa.Z)(g),F=za(W,D),G=La(j,M),H=Object.assign(Object.assign({},u==null?void 0:u.style),O),U={align:(n=b==null?void 0:b.align)!==null&&n!==void 0?n:(r=u==null?void 0:u.indicator)===null||r===void 0?void 0:r.align,size:(o=(l=(i=b==null?void 0:b.size)!==null&&i!==void 0?i:T)!==null&&l!==void 0?l:(c=u==null?void 0:u.indicator)===null||c===void 0?void 0:c.size)!==null&&o!==void 0?o:u==null?void 0:u.indicatorSize};return K(a.createElement(Pa,Object.assign({direction:w,getPopupContainer:V,moreTransitionName:`${S}-slide-up`},R,{items:F,className:X()({[`${j}-${z}`]:z,[`${j}-card`]:["card","editable-card"].includes(d),[`${j}-editable-card`]:d==="editable-card",[`${j}-centered`]:E},u==null?void 0:u.className,m,f,J,re,Q),popupClassName:X()(Z,J,re,Q),style:H,editable:q,moreIcon:(s=v!=null?v:u==null?void 0:u.moreIcon)!==null&&s!==void 0?s:a.createElement(Rt.Z,null),prefixCls:j,animated:G,indicator:U})))};dt.TabPane=Fa;var Ya=dt}}]);
