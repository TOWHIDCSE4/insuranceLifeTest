(self.webpackChunkmanulife_js=self.webpackChunkmanulife_js||[]).push([[454],{7575:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var o=t(1413),r=t(2791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},c=t(4291),i=function(e,n){return r.createElement(c.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:n,icon:a}))};i.displayName="CheckOutlined";var u=r.forwardRef(i)},6096:function(e,n,t){"use strict";t.d(n,{fk:function(){return c},jD:function(){return a}});var o,r=t(4937),a=function(){return(0,r.Z)()&&window.document.documentElement},c=function(){if(!a())return!1;if(void 0!==o)return o;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),o=1===e.scrollHeight,document.body.removeChild(e),o}},914:function(e,n,t){"use strict";var o=t(9752);n.Z=o.Z},9426:function(e,n,t){"use strict";var o=(0,t(2791).createContext)({});n.Z=o},9752:function(e,n,t){"use strict";var o=t(4942),r=t(7462),a=t(1002),c=t(1694),i=t.n(c),u=t(2791),s=t(1929),l=t(9426),f=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t};var d=["xs","sm","md","lg","xl","xxl"],p=u.forwardRef((function(e,n){var t,c=u.useContext(s.E_),p=c.getPrefixCls,m=c.direction,v=u.useContext(l.Z),y=v.gutter,h=v.wrap,g=v.supportFlexGap,x=e.prefixCls,Z=e.span,b=e.order,w=e.offset,E=e.push,C=e.pull,O=e.className,S=e.children,P=e.flex,T=e.style,j=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),k=p("col",x),M={};d.forEach((function(n){var t,c={},i=e[n];"number"===typeof i?c.span=i:"object"===(0,a.Z)(i)&&(c=i||{}),delete j[n],M=(0,r.Z)((0,r.Z)({},M),(t={},(0,o.Z)(t,"".concat(k,"-").concat(n,"-").concat(c.span),void 0!==c.span),(0,o.Z)(t,"".concat(k,"-").concat(n,"-order-").concat(c.order),c.order||0===c.order),(0,o.Z)(t,"".concat(k,"-").concat(n,"-offset-").concat(c.offset),c.offset||0===c.offset),(0,o.Z)(t,"".concat(k,"-").concat(n,"-push-").concat(c.push),c.push||0===c.push),(0,o.Z)(t,"".concat(k,"-").concat(n,"-pull-").concat(c.pull),c.pull||0===c.pull),(0,o.Z)(t,"".concat(k,"-rtl"),"rtl"===m),t))}));var D=i()(k,(t={},(0,o.Z)(t,"".concat(k,"-").concat(Z),void 0!==Z),(0,o.Z)(t,"".concat(k,"-order-").concat(b),b),(0,o.Z)(t,"".concat(k,"-offset-").concat(w),w),(0,o.Z)(t,"".concat(k,"-push-").concat(E),E),(0,o.Z)(t,"".concat(k,"-pull-").concat(C),C),t),O,M),A={};if(y&&y[0]>0){var L=y[0]/2;A.paddingLeft=L,A.paddingRight=L}if(y&&y[1]>0&&!g){var N=y[1]/2;A.paddingTop=N,A.paddingBottom=N}return P&&(A.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(P),!1!==h||A.minWidth||(A.minWidth=0)),u.createElement("div",(0,r.Z)({},j,{style:(0,r.Z)((0,r.Z)({},A),T),className:D,ref:n}),S)}));n.Z=p},590:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var o=t(7462),r=t(4942),a=t(1002),c=t(9439),i=t(1694),u=t.n(i),s=t(2791),l=t(1929),f=t(6096),d=t(8295),p=t(9393),m=t(9426),v=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t};(0,p.b)("top","middle","bottom","stretch"),(0,p.b)("start","end","center","space-around","space-between","space-evenly");var y=s.forwardRef((function(e,n){var t,i=e.prefixCls,p=e.justify,y=e.align,h=e.className,g=e.style,x=e.children,Z=e.gutter,b=void 0===Z?0:Z,w=e.wrap,E=v(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=s.useContext(l.E_),O=C.getPrefixCls,S=C.direction,P=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),T=(0,c.Z)(P,2),j=T[0],k=T[1],M=function(){var e=s.useState(!1),n=(0,c.Z)(e,2),t=n[0],o=n[1];return s.useEffect((function(){o((0,f.fk)())}),[]),t}(),D=s.useRef(b);s.useEffect((function(){var e=d.ZP.subscribe((function(e){var n=D.current||0;(!Array.isArray(n)&&"object"===(0,a.Z)(n)||Array.isArray(n)&&("object"===(0,a.Z)(n[0])||"object"===(0,a.Z)(n[1])))&&k(e)}));return function(){return d.ZP.unsubscribe(e)}}),[]);var A=O("row",i),L=function(){var e=[void 0,void 0];return(Array.isArray(b)?b:[b,void 0]).forEach((function(n,t){if("object"===(0,a.Z)(n))for(var o=0;o<d.c4.length;o++){var r=d.c4[o];if(j[r]&&void 0!==n[r]){e[t]=n[r];break}}else e[t]=n})),e}(),N=u()(A,(t={},(0,r.Z)(t,"".concat(A,"-no-wrap"),!1===w),(0,r.Z)(t,"".concat(A,"-").concat(p),p),(0,r.Z)(t,"".concat(A,"-").concat(y),y),(0,r.Z)(t,"".concat(A,"-rtl"),"rtl"===S),t),h),G={},R=null!=L[0]&&L[0]>0?L[0]/-2:void 0,W=null!=L[1]&&L[1]>0?L[1]/-2:void 0;if(R&&(G.marginLeft=R,G.marginRight=R),M){var F=(0,c.Z)(L,2);G.rowGap=F[1]}else W&&(G.marginTop=W,G.marginBottom=W);var I=(0,c.Z)(L,2),B=I[0],K=I[1],U=s.useMemo((function(){return{gutter:[B,K],wrap:w,supportFlexGap:M}}),[B,K,w,M]);return s.createElement(m.Z.Provider,{value:U},s.createElement("div",(0,o.Z)({},E,{className:N,style:(0,o.Z)((0,o.Z)({},G),g),ref:n}),x))}))},6106:function(e,n,t){"use strict";var o=t(590);n.Z=o.Z},821:function(e,n,t){var o=t(6050),r=/^\s+/;e.exports=function(e){return e?e.slice(0,o(e)+1).replace(r,""):e}},6050:function(e){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},8573:function(e,n,t){var o=t(8092),r=t(72),a=t(2582),c=Math.max,i=Math.min;e.exports=function(e,n,t){var u,s,l,f,d,p,m=0,v=!1,y=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(n){var t=u,o=s;return u=s=void 0,m=n,f=e.apply(o,t)}function x(e){return m=e,d=setTimeout(b,n),v?g(e):f}function Z(e){var t=e-p;return void 0===p||t>=n||t<0||y&&e-m>=l}function b(){var e=r();if(Z(e))return w(e);d=setTimeout(b,function(e){var t=n-(e-p);return y?i(t,l-(e-m)):t}(e))}function w(e){return d=void 0,h&&u?g(e):(u=s=void 0,f)}function E(){var e=r(),t=Z(e);if(u=arguments,s=this,p=e,t){if(void 0===d)return x(p);if(y)return clearTimeout(d),d=setTimeout(b,n),g(p)}return void 0===d&&(d=setTimeout(b,n)),f}return n=a(n)||0,o(t)&&(v=!!t.leading,l=(y="maxWait"in t)?c(a(t.maxWait)||0,n):l,h="trailing"in t?!!t.trailing:h),E.cancel=function(){void 0!==d&&clearTimeout(d),m=0,u=p=s=d=void 0},E.flush=function(){return void 0===d?f:w(r())},E}},152:function(e,n,t){var o=t(9066),r=t(3141);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},72:function(e,n,t){var o=t(7009);e.exports=function(){return o.Date.now()}},2582:function(e,n,t){var o=t(821),r=t(8092),a=t(152),c=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(r(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=r(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=o(e);var t=i.test(e);return t||u.test(e)?s(e.slice(2),t?2:8):c.test(e)?NaN:+e}},2748:function(e,n,t){"use strict";t.d(n,{G:function(){return a}});var o=t(4937),r=function(e){if((0,o.Z)()&&window.document.documentElement){var n=Array.isArray(e)?e:[e],t=window.document.documentElement;return n.some((function(e){return e in t.style}))}return!1};function a(e,n){return Array.isArray(e)||void 0===n?r(e):function(e,n){if(!r(e))return!1;var t=document.createElement("div"),o=t.style[e];return t.style[e]=n,t.style[e]!==o}(e,n)}},4170:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var o=t(1413),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),a="aria-",c="data-";function i(e,n){return 0===e.indexOf(n)}function u(e){var n,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,o.Z)({},t);var u={};return Object.keys(e).forEach((function(t){(n.aria&&("role"===t||i(t,a))||n.data&&i(t,c)||n.attr&&r.includes(t))&&(u[t]=e[t])})),u}}}]);
//# sourceMappingURL=454.f3ffd03c.chunk.js.map