"use strict";(self.webpackChunkmanulife_js=self.webpackChunkmanulife_js||[]).push([[228],{228:function(e,t,n){n.d(t,{Z:function(){return ce}});var a=n(4942),r=n(7462),o=n(732),i=n(5033),c=n(1413),l=n(2791),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},s=n(4291),f=function(e,t){return l.createElement(s.Z,(0,c.Z)((0,c.Z)({},e),{},{ref:t,icon:u}))};f.displayName="PlusOutlined";var d=l.forwardRef(f),v=n(1694),m=n.n(v),b=n(9439),p=n(1002),h=n(5987),y=n(3786),Z=n(5179),g=n(5207),E=(0,l.createContext)(null);var k=l.forwardRef((function(e,t){var n=e.prefixCls,a=e.className,r=e.style,o=e.id,i=e.active,c=e.tabKey,u=e.children;return l.createElement("div",{id:o&&"".concat(o,"-panel-").concat(c),role:"tabpanel",tabIndex:i?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(c),"aria-hidden":!i,style:r,className:m()(n,i&&"".concat(n,"-active"),a),ref:t},u)})),w=["key","forceRender","style","className"];function x(e){var t=e.id,n=e.activeKey,o=e.animated,i=e.tabPosition,u=e.destroyInactiveTabPane,s=l.useContext(E),f=s.prefixCls,d=s.tabs,v=o.tabPane,b="".concat(f,"-tabpane");return l.createElement("div",{className:m()("".concat(f,"-content-holder"))},l.createElement("div",{className:m()("".concat(f,"-content"),"".concat(f,"-content-").concat(i),(0,a.Z)({},"".concat(f,"-content-animated"),v))},d.map((function(e){var a=e.key,i=e.forceRender,s=e.style,f=e.className,d=(0,h.Z)(e,w),p=a===n;return l.createElement(g.Z,(0,r.Z)({key:a,visible:p,forceRender:i,removeOnLeave:!!u,leavedClassName:"".concat(b,"-hidden")},o.tabPaneMotion),(function(e,n){var o=e.style,i=e.className;return l.createElement(k,(0,r.Z)({},d,{prefixCls:b,id:t,tabKey:a,animated:v,active:p,style:(0,c.Z)((0,c.Z)({},s),o),className:m()(f,i),ref:n}))}))}))))}var C=n(3433),P=n(5314),N=n(8829);function T(e){var t=(0,l.useRef)(),n=(0,l.useRef)(!1);return(0,l.useEffect)((function(){return n.current=!1,function(){n.current=!0,P.Z.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(P.Z.cancel(t.current),t.current=(0,P.Z)((function(){e.apply(void 0,r)})))}}var I=n(1354);function R(e,t){var n,r=e.prefixCls,o=e.id,i=e.active,c=e.tab,u=c.key,s=c.label,f=c.disabled,d=c.closeIcon,v=e.closable,b=e.renderWrapper,p=e.removeAriaLabel,h=e.editable,y=e.onClick,Z=e.onRemove,g=e.onFocus,E=e.style,k="".concat(r,"-tab");l.useEffect((function(){return Z}),[]);var w=h&&!1!==v&&!f;function x(e){f||y(e)}var C=l.createElement("div",{key:u,ref:t,className:m()(k,(n={},(0,a.Z)(n,"".concat(k,"-with-remove"),w),(0,a.Z)(n,"".concat(k,"-active"),i),(0,a.Z)(n,"".concat(k,"-disabled"),f),n)),style:E,onClick:x},l.createElement("div",{role:"tab","aria-selected":i,id:o&&"".concat(o,"-tab-").concat(u),className:"".concat(k,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(u),"aria-disabled":f,tabIndex:f?null:0,onClick:function(e){e.stopPropagation(),x(e)},onKeyDown:function(e){[I.Z.SPACE,I.Z.ENTER].includes(e.which)&&(e.preventDefault(),x(e))},onFocus:g},s),w&&l.createElement("button",{type:"button","aria-label":p||"remove",tabIndex:0,className:"".concat(k,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:u,event:t})}},d||h.removeIcon||"\xd7"));return b?b(C):C}var S=l.forwardRef(R),M={width:0,height:0,left:0,top:0};var B={width:0,height:0,left:0,top:0,right:0};var L=n(2257),O=n(3241);function A(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?l.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var j=l.forwardRef(A);function D(e,t){var n=e.prefixCls,r=e.id,o=e.tabs,i=e.locale,c=e.mobile,u=e.moreIcon,s=void 0===u?"More":u,f=e.moreTransitionName,d=e.style,v=e.className,p=e.editable,h=e.tabBarGutter,y=e.rtl,Z=e.removeAriaLabel,g=e.onTabClick,E=e.getPopupContainer,k=e.popupClassName,w=(0,l.useState)(!1),x=(0,b.Z)(w,2),C=x[0],P=x[1],N=(0,l.useState)(null),T=(0,b.Z)(N,2),R=T[0],S=T[1],M="".concat(r,"-more-popup"),B="".concat(n,"-dropdown"),A=null!==R?"".concat(M,"-").concat(R):null,D=null===i||void 0===i?void 0:i.dropdownAriaLabel;var K=l.createElement(L.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;g(t,n),P(!1)},prefixCls:"".concat(B,"-menu"),id:M,tabIndex:-1,role:"listbox","aria-activedescendant":A,selectedKeys:[R],"aria-label":void 0!==D?D:"expanded dropdown"},o.map((function(e){var t=p&&!1!==e.closable&&!e.disabled;return l.createElement(L.sN,{key:e.key,id:"".concat(M,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},l.createElement("span",null,e.label),t&&l.createElement("button",{type:"button","aria-label":Z||"remove",tabIndex:0,className:"".concat(B,"-menu-item-remove"),onClick:function(t){var n,a;t.stopPropagation(),n=t,a=e.key,n.preventDefault(),n.stopPropagation(),p.onEdit("remove",{key:a,event:n})}},e.closeIcon||p.removeIcon||"\xd7"))})));function W(e){for(var t=o.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===R}))||0,a=t.length,r=0;r<a;r+=1){var i=t[n=(n+e+a)%a];if(!i.disabled)return void S(i.key)}}(0,l.useEffect)((function(){var e=document.getElementById(A);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[R]),(0,l.useEffect)((function(){C||S(null)}),[C]);var q=(0,a.Z)({},y?"marginRight":"marginLeft",h);o.length||(q.visibility="hidden",q.order=1);var V=m()((0,a.Z)({},"".concat(B,"-rtl"),y)),_=c?null:l.createElement(O.Z,{prefixCls:B,overlay:K,trigger:["hover"],visible:!!o.length&&C,transitionName:f,onVisibleChange:P,overlayClassName:m()(V,k),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:E},l.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:q,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":M,id:"".concat(r,"-more"),"aria-expanded":C,onKeyDown:function(e){var t=e.which;if(C)switch(t){case I.Z.UP:W(-1),e.preventDefault();break;case I.Z.DOWN:W(1),e.preventDefault();break;case I.Z.ESC:P(!1);break;case I.Z.SPACE:case I.Z.ENTER:null!==R&&g(R,e)}else[I.Z.DOWN,I.Z.SPACE,I.Z.ENTER].includes(t)&&(P(!0),e.preventDefault())}},s));return l.createElement("div",{className:m()("".concat(n,"-nav-operations"),v),style:d,ref:t},_,l.createElement(j,{prefixCls:n,locale:i,editable:p}))}var K=l.memo(l.forwardRef(D),(function(e,t){return t.tabMoving})),W=Math.pow(.995,20);function q(e,t){var n=l.useRef(e),a=l.useState({}),r=(0,b.Z)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var V=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var o={};return r&&"object"===(0,p.Z)(r)&&!l.isValidElement(r)?o=r:o.right=r,"right"===n&&(t=o.right),"left"===n&&(t=o.left),t?l.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function _(e,t){var n,o=l.useContext(E),i=o.prefixCls,u=o.tabs,s=e.className,f=e.style,d=e.id,v=e.animated,p=e.activeKey,h=e.rtl,y=e.extra,Z=e.editable,g=e.locale,k=e.tabPosition,w=e.tabBarGutter,x=e.children,I=e.onTabClick,R=e.onTabScroll,L=(0,l.useRef)(),O=(0,l.useRef)(),A=(0,l.useRef)(),D=(0,l.useRef)(),_=function(){var e=(0,l.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,l.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),z=(0,b.Z)(_,2),G=z[0],H=z[1],F="top"===k||"bottom"===k,X=q(0,(function(e,t){F&&R&&R({direction:e>t?"left":"right"})})),Y=(0,b.Z)(X,2),U=Y[0],J=Y[1],Q=q(0,(function(e,t){!F&&R&&R({direction:e>t?"top":"bottom"})})),$=(0,b.Z)(Q,2),ee=$[0],te=$[1],ne=(0,l.useState)(0),ae=(0,b.Z)(ne,2),re=ae[0],oe=ae[1],ie=(0,l.useState)(0),ce=(0,b.Z)(ie,2),le=ce[0],ue=ce[1],se=(0,l.useState)(null),fe=(0,b.Z)(se,2),de=fe[0],ve=fe[1],me=(0,l.useState)(null),be=(0,b.Z)(me,2),pe=be[0],he=be[1],ye=(0,l.useState)(0),Ze=(0,b.Z)(ye,2),ge=Ze[0],Ee=Ze[1],ke=(0,l.useState)(0),we=(0,b.Z)(ke,2),xe=we[0],Ce=we[1],Pe=function(e){var t=(0,l.useRef)([]),n=(0,l.useState)({}),a=(0,b.Z)(n,2)[1],r=(0,l.useRef)("function"===typeof e?e():e),o=T((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),o()}]}(new Map),Ne=(0,b.Z)(Pe,2),Te=Ne[0],Ie=Ne[1],Re=function(e,t,n){return(0,l.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||M,o=r.left+r.width,i=0;i<e.length;i+=1){var l,u=e[i].key,s=t.get(u);s||(s=t.get(null===(l=e[i-1])||void 0===l?void 0:l.key)||M);var f=a.get(u)||(0,c.Z)({},s);f.right=o-f.left-f.width,a.set(u,f)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(u,Te,re),Se="".concat(i,"-nav-operations-hidden"),Me=0,Be=0;function Le(e){return e<Me?Me:e>Be?Be:e}F?h?(Me=0,Be=Math.max(0,re-de)):(Me=Math.min(0,de-re),Be=0):(Me=Math.min(0,pe-le),Be=0);var Oe=(0,l.useRef)(),Ae=(0,l.useState)(),je=(0,b.Z)(Ae,2),De=je[0],Ke=je[1];function We(){Ke(Date.now())}function qe(){window.clearTimeout(Oe.current)}function Ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=Re.get(e)||{width:0,height:0,left:0,right:0,top:0};if(F){var n=U;h?t.right<U?n=t.right:t.right+t.width>U+de&&(n=t.right+t.width-de):t.left<-U?n=-t.left:t.left+t.width>-U+de&&(n=-(t.left+t.width-de)),te(0),J(Le(n))}else{var a=ee;t.top<-ee?a=-t.top:t.top+t.height>-ee+pe&&(a=-(t.top+t.height-pe)),J(0),te(Le(a))}}!function(e,t){var n=(0,l.useState)(),a=(0,b.Z)(n,2),r=a[0],o=a[1],i=(0,l.useState)(0),c=(0,b.Z)(i,2),u=c[0],s=c[1],f=(0,l.useState)(0),d=(0,b.Z)(f,2),v=d[0],m=d[1],p=(0,l.useState)(),h=(0,b.Z)(p,2),y=h[0],Z=h[1],g=(0,l.useRef)(),E=(0,l.useRef)(),k=(0,l.useRef)(null);k.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;o({x:n,y:a}),window.clearInterval(g.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,i=n.screenY;o({x:a,y:i});var c=a-r.x,l=i-r.y;t(c,l);var f=Date.now();s(f),m(f-u),Z({x:c,y:l})}},onTouchEnd:function(){if(r&&(o(null),Z(null),y)){var e=y.x/v,n=y.y/v,a=Math.abs(e),i=Math.abs(n);if(Math.max(a,i)<.1)return;var c=e,l=n;g.current=window.setInterval((function(){Math.abs(c)<.01&&Math.abs(l)<.01?window.clearInterval(g.current):t(20*(c*=W),20*(l*=W))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),i=Math.abs(a);o===i?r="x"===E.current?n:a:o>i?(r=n,E.current="x"):(r=a,E.current="y"),t(-r,-r)&&e.preventDefault()}},l.useEffect((function(){function t(e){k.current.onTouchMove(e)}function n(e){k.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){k.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){k.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(L,(function(e,t){function n(e,t){e((function(e){return Le(e+t)}))}if(F){if(de>=re)return!1;n(J,e)}else{if(pe>=le)return!1;n(te,t)}return qe(),We(),!0})),(0,l.useEffect)((function(){return qe(),De&&(Oe.current=window.setTimeout((function(){Ke(0)}),100)),qe}),[De]);var _e=function(e,t,n,a,r){var o,i,c,u=r.tabs,s=r.tabPosition,f=r.rtl;["top","bottom"].includes(s)?(o="width",i=f?"right":"left",c=Math.abs(t.left)):(o="height",i="top",c=-t.top);var d=t[o],v=n[o],m=a[o],b=d;return v+m>d&&v<d&&(b=d-m),(0,l.useMemo)((function(){if(!u.length)return[0,0];for(var t=u.length,n=t,a=0;a<t;a+=1){var r=e.get(u[a].key)||B;if(r[i]+r[o]>c+b){n=a-1;break}}for(var l=0,s=t-1;s>=0;s-=1)if((e.get(u[s].key)||B)[i]<c){l=s+1;break}return[l,n]}),[e,c,b,s,u.map((function(e){return e.key})).join("_"),f])}(Re,{width:de,height:pe,left:U,top:ee},{width:re,height:le},{width:ge,height:xe},(0,c.Z)((0,c.Z)({},e),{},{tabs:u})),ze=(0,b.Z)(_e,2),Ge=ze[0],He=ze[1],Fe={};"top"===k||"bottom"===k?Fe[h?"marginRight":"marginLeft"]=w:Fe.marginTop=w;var Xe=u.map((function(e,t){var n=e.key;return l.createElement(S,{id:d,prefixCls:i,key:n,tab:e,style:0===t?void 0:Fe,closable:e.closable,editable:Z,active:n===p,renderWrapper:x,removeAriaLabel:null===g||void 0===g?void 0:g.removeAriaLabel,ref:G(n),onClick:function(e){I(n,e)},onRemove:function(){H(n)},onFocus:function(){Ve(n),We(),L.current&&(h||(L.current.scrollLeft=0),L.current.scrollTop=0)}})})),Ye=T((function(){var e,t,n,a,r,o,i=(null===(e=L.current)||void 0===e?void 0:e.offsetWidth)||0,c=(null===(t=L.current)||void 0===t?void 0:t.offsetHeight)||0,l=(null===(n=D.current)||void 0===n?void 0:n.offsetWidth)||0,s=(null===(a=D.current)||void 0===a?void 0:a.offsetHeight)||0;ve(i),he(c),Ee(l),Ce(s);var f=((null===(r=O.current)||void 0===r?void 0:r.offsetWidth)||0)-l,d=((null===(o=O.current)||void 0===o?void 0:o.offsetHeight)||0)-s;oe(f),ue(d),Ie((function(){var e=new Map;return u.forEach((function(t){var n=t.key,a=G(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),Ue=u.slice(0,Ge),Je=u.slice(He+1),Qe=[].concat((0,C.Z)(Ue),(0,C.Z)(Je)),$e=(0,l.useState)(),et=(0,b.Z)($e,2),tt=et[0],nt=et[1],at=Re.get(p),rt=(0,l.useRef)();function ot(){P.Z.cancel(rt.current)}(0,l.useEffect)((function(){var e={};return at&&(F?(h?e.right=at.right:e.left=at.left,e.width=at.width):(e.top=at.top,e.height=at.height)),ot(),rt.current=(0,P.Z)((function(){nt(e)})),ot}),[at,F,h]),(0,l.useEffect)((function(){Ve()}),[p,at,Re,F]),(0,l.useEffect)((function(){Ye()}),[h,w,p,u.map((function(e){return e.key})).join("_")]);var it,ct,lt,ut,st=!!Qe.length,ft="".concat(i,"-nav-wrap");return F?h?(ct=U>0,it=U+de<re):(it=U<0,ct=-U+de<re):(lt=ee<0,ut=-ee+pe<le),l.createElement("div",{ref:t,role:"tablist",className:m()("".concat(i,"-nav"),s),style:f,onKeyDown:function(){We()}},l.createElement(V,{position:"left",extra:y,prefixCls:i}),l.createElement(N.Z,{onResize:Ye},l.createElement("div",{className:m()(ft,(n={},(0,a.Z)(n,"".concat(ft,"-ping-left"),it),(0,a.Z)(n,"".concat(ft,"-ping-right"),ct),(0,a.Z)(n,"".concat(ft,"-ping-top"),lt),(0,a.Z)(n,"".concat(ft,"-ping-bottom"),ut),n)),ref:L},l.createElement(N.Z,{onResize:Ye},l.createElement("div",{ref:O,className:"".concat(i,"-nav-list"),style:{transform:"translate(".concat(U,"px, ").concat(ee,"px)"),transition:De?"none":void 0}},Xe,l.createElement(j,{ref:D,prefixCls:i,locale:g,editable:Z,style:(0,c.Z)((0,c.Z)({},0===Xe.length?void 0:Fe),{},{visibility:st?"hidden":null})}),l.createElement("div",{className:m()("".concat(i,"-ink-bar"),(0,a.Z)({},"".concat(i,"-ink-bar-animated"),v.inkBar)),style:tt}))))),l.createElement(K,(0,r.Z)({},e,{removeAriaLabel:null===g||void 0===g?void 0:g.removeAriaLabel,ref:A,prefixCls:i,tabs:Qe,className:!st&&Se,tabMoving:!!De})),l.createElement(V,{position:"right",extra:y,prefixCls:i}))}var z=l.forwardRef(_),G=["renderTabBar"],H=["label","key"];function F(e){var t=e.renderTabBar,n=(0,h.Z)(e,G),a=(0,l.useContext)(E).tabs;return t?t((0,c.Z)((0,c.Z)({},n),{},{panes:a.map((function(e){var t=e.label,n=e.key,a=(0,h.Z)(e,H);return l.createElement(k,(0,r.Z)({tab:t,key:n,tabKey:n},a))}))}),z):l.createElement(z,n)}n(632);var X=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],Y=0;function U(e,t){var n,o=e.id,i=e.prefixCls,u=void 0===i?"rc-tabs":i,s=e.className,f=e.items,d=e.direction,v=e.activeKey,g=e.defaultActiveKey,k=e.editable,w=e.animated,C=e.tabPosition,P=void 0===C?"top":C,N=e.tabBarGutter,T=e.tabBarStyle,I=e.tabBarExtraContent,R=e.locale,S=e.moreIcon,M=e.moreTransitionName,B=e.destroyInactiveTabPane,L=e.renderTabBar,O=e.onChange,A=e.onTabClick,j=e.onTabScroll,D=e.getPopupContainer,K=e.popupClassName,W=(0,h.Z)(e,X),q=l.useMemo((function(){return(f||[]).filter((function(e){return e&&"object"===(0,p.Z)(e)&&"key"in e}))}),[f]),V="rtl"===d,_=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,c.Z)({inkBar:!0},"object"===(0,p.Z)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(w),z=(0,l.useState)(!1),G=(0,b.Z)(z,2),H=G[0],U=G[1];(0,l.useEffect)((function(){U((0,y.Z)())}),[]);var J=(0,Z.Z)((function(){var e;return null===(e=q[0])||void 0===e?void 0:e.key}),{value:v,defaultValue:g}),Q=(0,b.Z)(J,2),$=Q[0],ee=Q[1],te=(0,l.useState)((function(){return q.findIndex((function(e){return e.key===$}))})),ne=(0,b.Z)(te,2),ae=ne[0],re=ne[1];(0,l.useEffect)((function(){var e,t=q.findIndex((function(e){return e.key===$}));-1===t&&(t=Math.max(0,Math.min(ae,q.length-1)),ee(null===(e=q[t])||void 0===e?void 0:e.key));re(t)}),[q.map((function(e){return e.key})).join("_"),$,ae]);var oe=(0,Z.Z)(null,{value:o}),ie=(0,b.Z)(oe,2),ce=ie[0],le=ie[1];(0,l.useEffect)((function(){o||(le("rc-tabs-".concat(Y)),Y+=1)}),[]);var ue={id:ce,activeKey:$,animated:_,tabPosition:P,rtl:V,mobile:H},se=(0,c.Z)((0,c.Z)({},ue),{},{editable:k,locale:R,moreIcon:S,moreTransitionName:M,tabBarGutter:N,onTabClick:function(e,t){null===A||void 0===A||A(e,t);var n=e!==$;ee(e),n&&(null===O||void 0===O||O(e))},onTabScroll:j,extra:I,style:T,panes:null,getPopupContainer:D,popupClassName:K});return l.createElement(E.Provider,{value:{tabs:q,prefixCls:u}},l.createElement("div",(0,r.Z)({ref:t,id:o,className:m()(u,"".concat(u,"-").concat(P),(n={},(0,a.Z)(n,"".concat(u,"-mobile"),H),(0,a.Z)(n,"".concat(u,"-editable"),k),(0,a.Z)(n,"".concat(u,"-rtl"),V),n),s)},W),undefined,l.createElement(F,(0,r.Z)({},se,{renderTabBar:L})),l.createElement(x,(0,r.Z)({destroyInactiveTabPane:B},ue,{animated:_}))))}var J=l.forwardRef(U),Q=n(1929),$=n(1815),ee=n(9464),te={motionAppear:!1,motionEnter:!0,motionLeave:!0};var ne=n(5501),ae=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var re=function(){return null},oe=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function ie(e){var t,n=e.type,c=e.className,u=e.size,s=e.onEdit,f=e.hideAdd,v=e.centered,b=e.addIcon,h=e.children,y=e.items,Z=e.animated,g=oe(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),E=g.prefixCls,k=g.moreIcon,w=void 0===k?l.createElement(i.Z,null):k,x=l.useContext(Q.E_),C=x.getPrefixCls,P=x.direction,N=C("tabs",E);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null===s||void 0===s||s("add"===e?a:n,e)},removeIcon:l.createElement(o.Z,null),addIcon:b||l.createElement(d,null),showAdd:!0!==f});var T=C(),I=function(e,t){return e||function(e){return e.filter((function(e){return e}))}((0,ne.Z)(t).map((function(e){if(l.isValidElement(e)){var t=e.key,n=e.props||{},a=n.tab,o=ae(n,["tab"]);return(0,r.Z)((0,r.Z)({key:String(t)},o),{label:a})}return null})))}(y,h),R=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!1}:(0,r.Z)({inkBar:!0},"object"===(0,p.Z)(n)?n:{})).tabPane&&(t.tabPaneMotion=(0,r.Z)((0,r.Z)({},te),{motionName:(0,ee.mL)(e,"switch")})),t}(N,Z);return l.createElement($.Z.Consumer,null,(function(e){var o,i=void 0!==u?u:e;return l.createElement(J,(0,r.Z)({direction:P,moreTransitionName:"".concat(T,"-slide-up")},g,{items:I,className:m()((o={},(0,a.Z)(o,"".concat(N,"-").concat(i),i),(0,a.Z)(o,"".concat(N,"-card"),["card","editable-card"].includes(n)),(0,a.Z)(o,"".concat(N,"-editable-card"),"editable-card"===n),(0,a.Z)(o,"".concat(N,"-centered"),v),o),c),editable:t,moreIcon:w,prefixCls:N,animated:R}))}))}ie.TabPane=re;var ce=ie}}]);
//# sourceMappingURL=228.e607d94c.chunk.js.map