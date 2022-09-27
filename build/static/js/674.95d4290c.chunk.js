"use strict";(self.webpackChunkmanulife_js=self.webpackChunkmanulife_js||[]).push([[674],{3344:function(e,t,n){n.d(t,{Z:function(){return V}});var r=n(7462),a=n(4942),i=n(1002),c=n(9439),o=n(7295),l=n(1413),u=n(2791),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},f=n(4291),d=function(e,t){return u.createElement(f.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:s}))};d.displayName="UpOutlined";var m=u.forwardRef(d),v=n(1694),p=n.n(v),g=n(5987),h=n(1354),N=n(1605),y=n(8834),b=n(5671),E=n(3144);function S(){return"function"===typeof BigInt}function Z(e){var t=e.trim(),n=t.startsWith("-");n&&(t=t.slice(1)),(t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,"")).startsWith(".")&&(t="0".concat(t));var r=t||"0",a=r.split("."),i=a[0]||"0",c=a[1]||"0";"0"===i&&"0"===c&&(n=!1);var o=n?"-":"";return{negative:n,negativeStr:o,trimStr:r,integerStr:i,decimalStr:c,fullStr:"".concat(o).concat(r)}}function x(e){var t=String(e);return!Number.isNaN(Number(t))&&t.includes("e")}function w(e){var t=String(e);if(x(e)){var n=Number(t.slice(t.indexOf("e-")+2)),r=t.match(/\.(\d+)/);return(null===r||void 0===r?void 0:r[1])&&(n+=r[1].length),n}return t.includes(".")&&C(t)?t.length-t.indexOf(".")-1:0}function I(e){var t=String(e);if(x(e)){if(e>Number.MAX_SAFE_INTEGER)return String(S()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(S()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);t=e.toFixed(w(t))}return Z(t).fullStr}function C(e){return"number"===typeof e?!Number.isNaN(e):!!e&&(/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e))}function k(e){var t="number"===typeof e?I(e):Z(e).fullStr;return t.includes(".")?Z(t.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var O=function(){function e(t){(0,b.Z)(this,e),this.origin="",this.number=void 0,this.empty=void 0,(t||0===t)&&String(t).trim()?(this.origin=String(t),this.number=Number(t)):this.empty=!0}return(0,E.Z)(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var n=Number(t);if(Number.isNaN(n))return this;var r=this.number+n;if(r>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(r<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var a=Math.max(w(this.number),w(n));return new e(r.toFixed(a))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toNumber()===(null===e||void 0===e?void 0:e.toNumber())}},{key:"lessEquals",value:function(e){return this.add(e.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e?this.isInvalidate()?"":I(this.number):this.origin}}]),e}(),M=function(){function e(t){if((0,b.Z)(this,e),this.origin="",this.negative=void 0,this.integer=void 0,this.decimal=void 0,this.decimalLen=void 0,this.empty=void 0,this.nan=void 0,(t||0===t)&&String(t).trim())if(this.origin=String(t),"-"!==t){var n=t;if(x(n)&&(n=Number(n)),C(n="string"===typeof n?n:I(n))){var r=Z(n);this.negative=r.negative;var a=r.trimStr.split(".");this.integer=BigInt(a[0]);var i=a[1]||"0";this.decimal=BigInt(i),this.decimalLen=i.length}else this.nan=!0}else this.nan=!0;else this.empty=!0}return(0,E.Z)(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(e){var t="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(e,"0"));return BigInt(t)}},{key:"negate",value:function(){var t=new e(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var n=new e(t);if(n.isInvalidate())return this;var r=Math.max(this.getDecimalStr().length,n.getDecimalStr().length),a=Z((this.alignDecimal(r)+n.alignDecimal(r)).toString()),i=a.negativeStr,c=a.trimStr,o="".concat(i).concat(c.padStart(r+1,"0"));return new e("".concat(o.slice(0,-r),".").concat(o.slice(-r)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toString()===(null===e||void 0===e?void 0:e.toString())}},{key:"lessEquals",value:function(e){return this.add(e.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e?this.isInvalidate()?"":Z("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}();function R(e){return S()?new M(e):new O(e)}function P(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(""===e)return"";var a=Z(e),i=a.negativeStr,c=a.integerStr,o=a.decimalStr,l="".concat(t).concat(o),u="".concat(i).concat(c);if(n>=0){var s=Number(o[n]);if(s>=5&&!r){var f=R(e).add("".concat(i,"0.").concat("0".repeat(n)).concat(10-s));return P(f.toString(),t,n,r)}return 0===n?u:"".concat(u).concat(t).concat(o.padEnd(n,"0").slice(0,n))}return".0"===l?u:"".concat(u).concat(l)}var _=n(3786);function T(e){var t=e.prefixCls,n=e.upNode,i=e.downNode,c=e.upDisabled,o=e.downDisabled,l=e.onStep,s=u.useRef(),f=u.useRef();f.current=l;var d=function(e,t){e.preventDefault(),f.current(t),s.current=setTimeout((function e(){f.current(t),s.current=setTimeout(e,200)}),600)},m=function(){clearTimeout(s.current)};if(u.useEffect((function(){return m}),[]),(0,_.Z)())return null;var v="".concat(t,"-handler"),g=p()(v,"".concat(v,"-up"),(0,a.Z)({},"".concat(v,"-up-disabled"),c)),h=p()(v,"".concat(v,"-down"),(0,a.Z)({},"".concat(v,"-down-disabled"),o)),N={unselectable:"on",role:"button",onMouseUp:m,onMouseLeave:m};return u.createElement("div",{className:"".concat(v,"-wrap")},u.createElement("span",(0,r.Z)({},N,{onMouseDown:function(e){d(e,!0)},"aria-label":"Increase Value","aria-disabled":c,className:g}),n||u.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-up-inner")})),u.createElement("span",(0,r.Z)({},N,{onMouseDown:function(e){d(e,!1)},"aria-label":"Decrease Value","aria-disabled":o,className:h}),i||u.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-down-inner")})))}var D=n(632);var j=n(5314),F=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],A=function(e,t){return e||t.isEmpty()?t.toString():t.toNumber()},z=function(e){var t=R(e);return t.isInvalidate()?null:t},B=u.forwardRef((function(e,t){var n,o=e.prefixCls,l=void 0===o?"rc-input-number":o,s=e.className,f=e.style,d=e.min,m=e.max,v=e.step,b=void 0===v?1:v,E=e.defaultValue,S=e.value,Z=e.disabled,x=e.readOnly,O=e.upHandler,M=e.downHandler,_=e.keyboard,B=e.controls,L=void 0===B||B,q=e.stringMode,H=e.parser,$=e.formatter,G=e.precision,U=e.decimalSeparator,W=e.onChange,K=e.onInput,V=e.onPressEnter,X=e.onStep,J=(0,g.Z)(e,F),Q="".concat(l,"-input"),Y=u.useRef(null),ee=u.useState(!1),te=(0,c.Z)(ee,2),ne=te[0],re=te[1],ae=u.useRef(!1),ie=u.useRef(!1),ce=u.useRef(!1),oe=u.useState((function(){return R(null!==S&&void 0!==S?S:E)})),le=(0,c.Z)(oe,2),ue=le[0],se=le[1];var fe=u.useCallback((function(e,t){if(!t)return G>=0?G:Math.max(w(e),w(b))}),[G,b]),de=u.useCallback((function(e){var t=String(e);if(H)return H(t);var n=t;return U&&(n=n.replace(U,".")),n.replace(/[^\w.-]+/g,"")}),[H,U]),me=u.useRef(""),ve=u.useCallback((function(e,t){if($)return $(e,{userTyping:t,input:String(me.current)});var n="number"===typeof e?I(e):e;if(!t){var r=fe(n,t);if(C(n)&&(U||r>=0))n=P(n,U||".",r)}return n}),[$,fe,U]),pe=u.useState((function(){var e=null!==E&&void 0!==E?E:S;return ue.isInvalidate()&&["string","number"].includes((0,i.Z)(e))?Number.isNaN(e)?"":e:ve(ue.toString(),!1)})),ge=(0,c.Z)(pe,2),he=ge[0],Ne=ge[1];function ye(e,t){Ne(ve(e.isInvalidate()?e.toString(!1):e.toString(!t),t))}me.current=he;var be=u.useMemo((function(){return z(m)}),[m,G]),Ee=u.useMemo((function(){return z(d)}),[d,G]),Se=u.useMemo((function(){return!(!be||!ue||ue.isInvalidate())&&be.lessEquals(ue)}),[be,ue]),Ze=u.useMemo((function(){return!(!Ee||!ue||ue.isInvalidate())&&ue.lessEquals(Ee)}),[Ee,ue]),xe=function(e,t){var n=(0,u.useRef)(null);return[function(){try{var t=e.selectionStart,r=e.selectionEnd,a=e.value,i=a.substring(0,t),c=a.substring(r);n.current={start:t,end:r,value:a,beforeTxt:i,afterTxt:c}}catch(o){}},function(){if(e&&n.current&&t)try{var r=e.value,a=n.current,i=a.beforeTxt,c=a.afterTxt,o=a.start,l=r.length;if(r.endsWith(c))l=r.length-n.current.afterTxt.length;else if(r.startsWith(i))l=i.length;else{var u=i[o-1],s=r.indexOf(u,o-1);-1!==s&&(l=s+1)}e.setSelectionRange(l,l)}catch(f){(0,D.ZP)(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(f.message))}}]}(Y.current,ne),we=(0,c.Z)(xe,2),Ie=we[0],Ce=we[1],ke=function(e){return be&&!e.lessEquals(be)?be:Ee&&!Ee.lessEquals(e)?Ee:null},Oe=function(e){return!ke(e)},Me=function(e,t){var n,r=e,a=Oe(r)||r.isEmpty();if(r.isEmpty()||t||(r=ke(r)||r,a=!0),!x&&!Z&&a){var i=r.toString(),c=fe(i,t);return c>=0&&(r=R(P(i,".",c)),Oe(r)||(r=R(P(i,".",c,!0)))),r.equals(ue)||(n=r,void 0===S&&se(n),null===W||void 0===W||W(r.isEmpty()?null:A(q,r)),void 0===S&&ye(r,t)),r}return ue},Re=function(){var e=(0,u.useRef)(0),t=function(){j.Z.cancel(e.current)};return(0,u.useEffect)((function(){return t}),[]),function(n){t(),e.current=(0,j.Z)((function(){n()}))}}(),Pe=function e(t){if(Ie(),Ne(t),!ie.current){var n=R(de(t));n.isNaN()||Me(n,!0)}null===K||void 0===K||K(t),Re((function(){var n=t;H||(n=t.replace(/\u3002/g,".")),n!==t&&e(n)}))},_e=function(e){var t;if(!(e&&Se||!e&&Ze)){ae.current=!1;var n=R(ce.current?k(b):b);e||(n=n.negate());var r=(ue||R(0)).add(n.toString()),a=Me(r,!1);null===X||void 0===X||X(A(q,a),{offset:ce.current?k(b):b,type:e?"up":"down"}),null===(t=Y.current)||void 0===t||t.focus()}},Te=function(e){var t=R(de(he)),n=t;n=t.isNaN()?ue:Me(t,e),void 0!==S?ye(ue,!1):n.isNaN()||ye(n,!1)};return(0,N.o)((function(){ue.isInvalidate()||ye(ue,!1)}),[G]),(0,N.o)((function(){var e=R(S);se(e);var t=R(de(he));e.equals(t)&&ae.current&&!$||ye(e,ae.current)}),[S]),(0,N.o)((function(){$&&Ce()}),[he]),u.createElement("div",{className:p()(l,s,(n={},(0,a.Z)(n,"".concat(l,"-focused"),ne),(0,a.Z)(n,"".concat(l,"-disabled"),Z),(0,a.Z)(n,"".concat(l,"-readonly"),x),(0,a.Z)(n,"".concat(l,"-not-a-number"),ue.isNaN()),(0,a.Z)(n,"".concat(l,"-out-of-range"),!ue.isInvalidate()&&!Oe(ue)),n)),style:f,onFocus:function(){re(!0)},onBlur:function(){Te(!1),re(!1),ae.current=!1},onKeyDown:function(e){var t=e.which,n=e.shiftKey;ae.current=!0,ce.current=!!n,t===h.Z.ENTER&&(ie.current||(ae.current=!1),Te(!1),null===V||void 0===V||V(e)),!1!==_&&!ie.current&&[h.Z.UP,h.Z.DOWN].includes(t)&&(_e(h.Z.UP===t),e.preventDefault())},onKeyUp:function(){ae.current=!1,ce.current=!1},onCompositionStart:function(){ie.current=!0},onCompositionEnd:function(){ie.current=!1,Pe(Y.current.value)}},L&&u.createElement(T,{prefixCls:l,upNode:O,downNode:M,upDisabled:Se,downDisabled:Ze,onStep:_e}),u.createElement("div",{className:"".concat(Q,"-wrap")},u.createElement("input",(0,r.Z)({autoComplete:"off",role:"spinbutton","aria-valuemin":d,"aria-valuemax":m,"aria-valuenow":ue.isInvalidate()?null:ue.toString(),step:b},J,{ref:(0,y.sQ)(Y,t),className:Q,value:he,onChange:function(e){Pe(e.target.value)},disabled:Z,readOnly:x}))))}));B.displayName="InputNumber";var L=B,q=n(1929),H=n(9125),$=n(1815),G=n(1940),U=n(1113),W=n(2866),K=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},V=u.forwardRef((function(e,t){var n,l=u.useContext(q.E_),s=l.getPrefixCls,f=l.direction,d=u.useContext($.Z),v=u.useState(!1),g=(0,c.Z)(v,2),h=g[0],N=g[1],y=u.useRef(null);u.useImperativeHandle(t,(function(){return y.current}));var b=e.className,E=e.size,S=e.disabled,Z=e.prefixCls,x=e.addonBefore,w=e.addonAfter,I=e.prefix,C=e.bordered,k=void 0===C||C,O=e.readOnly,M=e.status,R=e.controls,P=K(e,["className","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),_=s("input-number",Z),T=u.createElement(m,{className:"".concat(_,"-handler-up-inner")}),D=u.createElement(o.Z,{className:"".concat(_,"-handler-down-inner")}),j="boolean"===typeof R?R:void 0;"object"===(0,i.Z)(R)&&(T="undefined"===typeof R.upIcon?T:u.createElement("span",{className:"".concat(_,"-handler-up-inner")},R.upIcon),D="undefined"===typeof R.downIcon?D:u.createElement("span",{className:"".concat(_,"-handler-down-inner")},R.downIcon));var F=(0,u.useContext)(G.aM),A=F.hasFeedback,z=F.status,B=F.isFormItemInput,V=F.feedbackIcon,X=(0,W.F)(z,M),J=E||d,Q=u.useContext(H.Z),Y=S||Q,ee=p()((n={},(0,a.Z)(n,"".concat(_,"-lg"),"large"===J),(0,a.Z)(n,"".concat(_,"-sm"),"small"===J),(0,a.Z)(n,"".concat(_,"-rtl"),"rtl"===f),(0,a.Z)(n,"".concat(_,"-borderless"),!k),(0,a.Z)(n,"".concat(_,"-in-form-item"),B),n),(0,W.Z)(_,X),b),te=u.createElement(L,(0,r.Z)({ref:y,disabled:Y,className:ee,upHandler:T,downHandler:D,prefixCls:_,readOnly:O,controls:j},P));if(null!=I||A){var ne,re=p()("".concat(_,"-affix-wrapper"),(0,W.Z)("".concat(_,"-affix-wrapper"),X,A),(ne={},(0,a.Z)(ne,"".concat(_,"-affix-wrapper-focused"),h),(0,a.Z)(ne,"".concat(_,"-affix-wrapper-disabled"),e.disabled),(0,a.Z)(ne,"".concat(_,"-affix-wrapper-sm"),"small"===d),(0,a.Z)(ne,"".concat(_,"-affix-wrapper-lg"),"large"===d),(0,a.Z)(ne,"".concat(_,"-affix-wrapper-rtl"),"rtl"===f),(0,a.Z)(ne,"".concat(_,"-affix-wrapper-readonly"),O),(0,a.Z)(ne,"".concat(_,"-affix-wrapper-borderless"),!k),(0,a.Z)(ne,"".concat(b),!(x||w)&&b),ne));te=u.createElement("div",{className:re,style:e.style,onMouseUp:function(){return y.current.focus()}},I&&u.createElement("span",{className:"".concat(_,"-prefix")},I),(0,U.Tm)(te,{style:null,value:e.value,onFocus:function(t){var n;N(!0),null===(n=e.onFocus)||void 0===n||n.call(e,t)},onBlur:function(t){var n;N(!1),null===(n=e.onBlur)||void 0===n||n.call(e,t)}}),A&&u.createElement("span",{className:"".concat(_,"-suffix")},V))}if(null!=x||null!=w){var ae,ie="".concat(_,"-group"),ce="".concat(ie,"-addon"),oe=x?u.createElement("div",{className:ce},x):null,le=w?u.createElement("div",{className:ce},w):null,ue=p()("".concat(_,"-wrapper"),ie,(0,a.Z)({},"".concat(ie,"-rtl"),"rtl"===f)),se=p()("".concat(_,"-group-wrapper"),(ae={},(0,a.Z)(ae,"".concat(_,"-group-wrapper-sm"),"small"===d),(0,a.Z)(ae,"".concat(_,"-group-wrapper-lg"),"large"===d),(0,a.Z)(ae,"".concat(_,"-group-wrapper-rtl"),"rtl"===f),ae),(0,W.Z)("".concat(_,"-group-wrapper"),X,A),b);te=u.createElement("div",{className:se,style:e.style},u.createElement("div",{className:ue},oe&&u.createElement(G.Ux,{status:!0,override:!0},oe),(0,U.Tm)(te,{style:null,disabled:Y}),le&&u.createElement(G.Ux,{status:!0,override:!0},le)))}return te}))},586:function(e,t,n){var r=n(3613),a=n(6199),i=r.ZP;i.Header=r.h4,i.Footer=r.$_,i.Content=r.VY,i.Sider=a.Z,t.Z=i},2126:function(e,t,n){n.d(t,{ZM:function(){return w},ZP:function(){return C}});var r=n(3433),a=n(7462),i=n(4942),c=n(9439),o=n(1002),l=n(1694),u=n.n(l),s=n(2791),f=n(1929),d=n(4139),m=n(590),v=n(2832),p=n(9221),g=n(7083),h=n(8295),N=n(9752),y=n(1113),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},E=function(e,t){var n=e.prefixCls,r=e.children,c=e.actions,o=e.extra,l=e.className,d=e.colStyle,m=b(e,["prefixCls","children","actions","extra","className","colStyle"]),v=(0,s.useContext)(w),p=v.grid,g=v.itemLayout,h=(0,s.useContext)(f.E_).getPrefixCls,E=h("list",n),S=c&&c.length>0&&s.createElement("ul",{className:"".concat(E,"-item-action"),key:"actions"},c.map((function(e,t){return s.createElement("li",{key:"".concat(E,"-item-action-").concat(t)},e,t!==c.length-1&&s.createElement("em",{className:"".concat(E,"-item-action-split")}))}))),Z=p?"div":"li",x=s.createElement(Z,(0,a.Z)({},m,p?{}:{ref:t},{className:u()("".concat(E,"-item"),(0,i.Z)({},"".concat(E,"-item-no-flex"),!("vertical"===g?o:!function(){var e;return s.Children.forEach(r,(function(t){"string"===typeof t&&(e=!0)})),e&&s.Children.count(r)>1}())),l)}),"vertical"===g&&o?[s.createElement("div",{className:"".concat(E,"-item-main"),key:"content"},r,S),s.createElement("div",{className:"".concat(E,"-item-extra"),key:"extra"},o)]:[r,S,(0,y.Tm)(o,{key:"extra"})]);return p?s.createElement(N.Z,{ref:t,flex:1,style:d},x):x},S=(0,s.forwardRef)(E);S.Meta=function(e){var t=e.prefixCls,n=e.className,r=e.avatar,i=e.title,c=e.description,o=b(e,["prefixCls","className","avatar","title","description"]),l=(0,(0,s.useContext)(f.E_).getPrefixCls)("list",t),d=u()("".concat(l,"-item-meta"),n),m=s.createElement("div",{className:"".concat(l,"-item-meta-content")},i&&s.createElement("h4",{className:"".concat(l,"-item-meta-title")},i),c&&s.createElement("div",{className:"".concat(l,"-item-meta-description")},c));return s.createElement("div",(0,a.Z)({},o,{className:d}),r&&s.createElement("div",{className:"".concat(l,"-item-meta-avatar")},r),(i||c)&&m)};var Z=S,x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},w=s.createContext({});w.Consumer;function I(e){var t,n=e.pagination,l=void 0!==n&&n,N=e.prefixCls,y=e.bordered,b=void 0!==y&&y,E=e.split,S=void 0===E||E,Z=e.className,I=e.children,C=e.itemLayout,k=e.loadMore,O=e.grid,M=e.dataSource,R=void 0===M?[]:M,P=e.size,_=e.header,T=e.footer,D=e.loading,j=void 0!==D&&D,F=e.rowKey,A=e.renderItem,z=e.locale,B=x(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),L=l&&"object"===(0,o.Z)(l)?l:{},q=s.useState(L.defaultCurrent||1),H=(0,c.Z)(q,2),$=H[0],G=H[1],U=s.useState(L.defaultPageSize||10),W=(0,c.Z)(U,2),K=W[0],V=W[1],X=s.useContext(f.E_),J=X.getPrefixCls,Q=X.renderEmpty,Y=X.direction,ee={},te=function(e){return function(t,n){G(t),V(n),l&&l[e]&&l[e](t,n)}},ne=te("onChange"),re=te("onShowSizeChange"),ae=J("list",N),ie=j;"boolean"===typeof ie&&(ie={spinning:ie});var ce=ie&&ie.spinning,oe="";switch(P){case"large":oe="lg";break;case"small":oe="sm"}var le=u()(ae,(t={},(0,i.Z)(t,"".concat(ae,"-vertical"),"vertical"===C),(0,i.Z)(t,"".concat(ae,"-").concat(oe),oe),(0,i.Z)(t,"".concat(ae,"-split"),S),(0,i.Z)(t,"".concat(ae,"-bordered"),b),(0,i.Z)(t,"".concat(ae,"-loading"),ce),(0,i.Z)(t,"".concat(ae,"-grid"),!!O),(0,i.Z)(t,"".concat(ae,"-something-after-last-item"),!!(k||l||T)),(0,i.Z)(t,"".concat(ae,"-rtl"),"rtl"===Y),t),Z),ue=(0,a.Z)((0,a.Z)((0,a.Z)({},{current:1,total:0}),{total:R.length,current:$,pageSize:K}),l||{}),se=Math.ceil(ue.total/ue.pageSize);ue.current>se&&(ue.current=se);var fe=l?s.createElement("div",{className:"".concat(ae,"-pagination")},s.createElement(p.Z,(0,a.Z)({},ue,{onChange:ne,onShowSizeChange:re}))):null,de=(0,r.Z)(R);l&&R.length>(ue.current-1)*ue.pageSize&&(de=(0,r.Z)(R).splice((ue.current-1)*ue.pageSize,ue.pageSize));var me=Object.keys(O||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),ve=(0,v.Z)(me),pe=s.useMemo((function(){for(var e=0;e<h.c4.length;e+=1){var t=h.c4[e];if(ve[t])return t}}),[ve]),ge=s.useMemo((function(){if(O){var e=pe&&O[pe]?O[pe]:O.column;return e?{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}:void 0}}),[null===O||void 0===O?void 0:O.column,pe]),he=ce&&s.createElement("div",{style:{minHeight:53}});if(de.length>0){var Ne=de.map((function(e,t){return function(e,t){return A?((n="function"===typeof F?F(e):F?e[F]:e.key)||(n="list-item-".concat(t)),ee[t]=n,A(e,t)):null;var n}(e,t)})),ye=s.Children.map(Ne,(function(e,t){return s.createElement("div",{key:ee[t],style:ge},e)}));he=O?s.createElement(m.Z,{gutter:O.gutter},ye):s.createElement("ul",{className:"".concat(ae,"-items")},Ne)}else I||ce||(he=function(e,t){return s.createElement("div",{className:"".concat(e,"-empty-text")},z&&z.emptyText||t("List"))}(ae,Q||d.Z));var be=ue.position||"bottom",Ee=s.useMemo((function(){return{grid:O,itemLayout:C}}),[JSON.stringify(O),C]);return s.createElement(w.Provider,{value:Ee},s.createElement("div",(0,a.Z)({className:le},B),("top"===be||"both"===be)&&fe,_&&s.createElement("div",{className:"".concat(ae,"-header")},_),s.createElement(g.Z,(0,a.Z)({},ie),he,I),T&&s.createElement("div",{className:"".concat(ae,"-footer")},T),k||("bottom"===be||"both"===be)&&fe))}I.Item=Z;var C=I}}]);
//# sourceMappingURL=674.95d4290c.chunk.js.map