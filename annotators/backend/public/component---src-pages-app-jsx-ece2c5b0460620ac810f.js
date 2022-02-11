"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[221],{3767:function(e,t,n){n.r(t),n.d(t,{default:function(){return Oe}});var a=n(7294),r=n(9499),o=n(5093),l=n(4231),i=n(167),c=n(8399),s=n(3458),u=n(9429),d=n(9310),m=n(5861),p=n(7757),f=n.n(p),v=n(6633),g=n.n(v),h=n(9563),b=n(5444),x=n(8169),E=n(2590),y=n(3978),w=n(9226),P=n(6922);function O(e){return a.createElement(i.x,{direction:"column",round:"small",responsive:!0,border:{color:"light-4"},pad:"medium",gap:"xsmall",hoverIndicator:!0,onClick:function(){return e.onPostClicked(e.ix)}},a.createElement(i.x,{direction:"row",gap:"small",align:"center"},a.createElement(x.x,{key:e.ix,color:"dark-4"},e.post.Post.id),"pending"===e.post.status?a.createElement(y.S,{size:"small",color:"visuals-8"}):"malformed"===e.post.status?a.createElement(w.b,{size:"small",color:"visuals-7"}):"complete"===e.post.status?a.createElement(P.M,{size:"small",color:"visuals-6"}):null),a.createElement("div",null,"text"===e.post.Post.role?a.createElement(x.x,{size:"medium",weight:600},e.post.Post.text):null),"image"===e.post.Post.role?a.createElement(i.x,{height:"small",width:"small"},a.createElement(E.E,{fit:"contain",alignSelf:"start",src:e.post.Post.url})):null)}var C,k=function(){var e=(0,a.useState)([]),t=e[0],n=e[1],r=(0,a.useState)(0),o=r[0];r[1];function l(e){console.log({pageNum:o,ix:e}),(0,b.navigate)("/app/post/"+t[e].Post.id)}return(0,a.useEffect)((0,m.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g().get(h.v.api_endpoint+"/allocation/for-user/?userId=9404f34a-c36e-4437-82d2-aee3f22fb93c&page="+o);case 2:t=e.sent,console.log(t),n(t.data.allocation);case 5:case"end":return e.stop()}}),e)}))),[]),a.createElement(i.x,{direction:"column",gap:"small"},t.map((function(e,t){return a.createElement(O,{post:e,ix:t,onPostClicked:l})})))},S=n(9020),z=n(9),I=n(9409),j=a.createContext({}),T=n(4192),M=z.default.div.withConfig({displayName:"StyledTabs__StyledTabsHeader",componentId:"sc-a4fwxl-0"})(["",";"],(function(e){return e.theme.tabs.header.extend}));M.defaultProps={},Object.setPrototypeOf(M.defaultProps,I.l);var _=((C={})[!0]="1 1",C[!1]="0 0",C.grow="1 0",C.shrink="0 1",C),N=(0,z.css)(["flex:",";"],(function(e){return _[e.flex]+(!0!==e.flex?" auto":"")})),A=z.default.div.withConfig({displayName:"StyledTabs__StyledTabPanel",componentId:"sc-a4fwxl-1"})(["min-height:0;"," ",";"],(function(e){return e.flex&&N}),(function(e){return e.theme.tabs.panel.extend}));A.defaultProps={},Object.setPrototypeOf(A.defaultProps,I.l);var Z=z.default.div.withConfig({displayName:"StyledTabs",componentId:"sc-a4fwxl-2"})([""," ",";"],T.$G,(function(e){return e.theme.tabs.extend}));Z.defaultProps={},Object.setPrototypeOf(Z.defaultProps,I.l);var G=n(8952),R=n(1287),X=["alignControls","children","flex","justify","messages","responsive"];function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},U.apply(this,arguments)}var H=(0,a.forwardRef)((function(e,t){var n=e.alignControls,r=e.children,o=e.flex,l=e.justify,c=void 0===l?"center":l,s=e.messages,u=e.responsive,d=void 0===u||u,m=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,X),p=(0,a.useContext)(z.ThemeContext)||I.l.theme,f=(0,a.useContext)(R.E).format,v=m.activeIndex,g=m.onActive,h=(0,a.useState)(m.activeIndex||0),b=h[0],x=h[1],E=(0,a.useState)(),y=E[0],w=E[1],P=(0,a.useState)(),O=P[0],C=P[1];b!==v&&void 0!==v&&x(v);delete m.activeIndex,delete m.onActive;var k=a.Children.map(r,(function(e,t){return a.createElement(j.Provider,{value:{activeIndex:b,active:b===t,onActivate:function(){return function(e){void 0===v&&x(e),g&&g(e)}(t)},setActiveContent:w,setActiveTitle:C}},e?a.cloneElement(e,{active:b===t}):e)})),S={};if(p.tabs.header&&p.tabs.header.border){var T=p.tabs.header.border.color||p.global.control.border.color;T=(0,G.ut)(T,p),S.border={side:p.tabs.header.border.side,size:p.tabs.header.border.size,style:p.tabs.header.border.style,color:T}}var _=(O||"")+" "+f({id:"tabs.tabContents",messages:s});return a.createElement(Z,U({ref:t,as:i.x,role:"tablist",flex:o,responsive:d},m,{background:p.tabs.background}),a.createElement(M,U({as:i.x,direction:"row",justify:c,alignSelf:n,flex:!1,wrap:!0,background:p.tabs.header.background,gap:p.tabs.gap},S),k),a.createElement(A,{flex:o,"aria-label":_,role:"tabpanel"},y))}));H.displayName="Tabs";var L=(0,z.css)(["&:hover{"," "," ",";}"],(function(e){return e.theme.tab.hover.background&&(0,z.css)(["background:",";"],(0,G.ut)(e.theme.tab.hover.background,e.theme))}),(function(e){return e.theme.tab.hover.color&&(0,z.css)(["color:",";"],(0,G.ut)(e.theme.tab.hover.color,e.theme))}),(function(e){return e.theme.tab.hover.extend})),B=z.default.div.withConfig({displayName:"StyledTab",componentId:"sc-1nnwnsb-0"})([""," "," "," ",""],T.$G,(function(e){return!e.plain&&!e.disabled&&e.theme.tab.hover&&L}),(function(e){return e.disabled&&e.theme.tab.disabled}),(function(e){return e.theme.tab.extend}));B.defaultProps={},Object.setPrototypeOf(B.defaultProps,I.l);var W=["active","disabled","children","icon","plain","title","onMouseOver","onMouseOut","reverse"];function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},$.apply(this,arguments)}var D=(0,a.forwardRef)((function(e,t){e.active;var n=e.disabled,r=e.children,o=e.icon,l=e.plain,c=e.title,u=e.onMouseOver,d=e.onMouseOut,m=e.reverse,p=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,W),f=(0,a.useContext)(j),v=f.active,g=f.activeIndex,h=f.onActivate,b=f.setActiveContent,E=f.setActiveTitle,y=(0,a.useContext)(z.ThemeContext)||I.l.theme,w=(0,a.useState)(void 0),P=w[0],O=w[1],C=(0,a.useState)(void 0),k=C[0],S=C[1],T=c,M={};(0,a.useEffect)((function(){v&&(b(r),E("string"==typeof c?c:g+1))}),[v,g,r,b,E,c]);if(v&&n&&console.warn("Warning: Tab props 'active' and 'disabled' have both been set to TRUE on the same Tab resulting in an interesting Tab state. Is this your intent?"),!l){if(T="string"!=typeof c?c:v?a.createElement(x.x,y.tab.active,c):n&&y.tab.disabled?a.createElement(x.x,y.tab.disabled,c):a.createElement(x.x,{color:P?y.tab.hover.color:y.tab.color},c),y.tab.border){var _=y.tab.border.color||y.global.control.border.color;v?_=y.tab.border.active.color||_:n&&y.tab.border.disabled?_=y.tab.border.disabled.color||_:P&&(_=y.tab.border.hover.color||_),_=(0,G.ut)(_,y),M.border={side:y.tab.border.side,size:y.tab.border.size,color:_}}M.background=v&&y.tab.active.background||y.tab.background,M.pad=y.tab.pad,M.margin=y.tab.margin}var N,A;o&&(A=o,N=v?a.cloneElement(A,$({},y.tab.active)):n?a.cloneElement(A,$({},y.tab.disabled)):a.cloneElement(A,{color:P?y.tab.hover.color:y.tab.color}));var Z,R=m?T:N,X=m?N:T;return R&&X&&(Z={direction:"row",align:"center",justify:"center",gap:"small"}),a.createElement(s.z,$({ref:t,plain:!0,role:"tab","aria-selected":v,"aria-expanded":v,disabled:n},p,{onClick:function(e){e&&e.preventDefault(),h()},onMouseOver:function(e){O(!0),u&&u(e)},onMouseOut:function(e){O(void 0),d&&d(e)},onFocus:function(){S(!0),u&&u()},onBlur:function(){S(void 0),d&&d()},style:k&&{zIndex:1}}),a.createElement(B,$({as:i.x,disabled:n,plain:l},Z,M),R,X))}));D.displayName="Tab",D.defaultProps={},Object.setPrototypeOf(D.defaultProps,I.l);var F=["children","footer","header"];function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Y.apply(this,arguments)}var q=function(e){var t=e.children,n=e.footer,r=e.header,o=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,F);return a.createElement(i.x,Y({pad:"small",gap:"large",height:{min:"100%"}},o),r,a.createElement(i.x,{flex:!0},t),n)};q.defaultProps={children:void 0,footer:void 0,header:void 0};var J=n(4594),K=function(){var e=a.useContext(S.b);return"small"===e?a.createElement(i.x,{width:"100%",responsive:!0},a.createElement(H,{alignControls:"start",onActive:function(e){console.log(e)}},a.createElement(D,{title:"tab 1"},a.createElement(i.x,{pad:"medium"},"One")),a.createElement(D,{title:"tab 2"},a.createElement(i.x,{pad:"medium"},"Two")))):a.createElement(i.x,{width:"small",responsive:!0},a.createElement(q,null,a.createElement(J.SX,{to:"/app/posts"},a.createElement(x.x,{size:"large",color:"accent-2",weight:600},"Posts")),a.createElement(J.SX,{to:"/app/preferences"},a.createElement(x.x,{size:"large",color:"accent-2",weight:"600"},"Users")),a.createElement(x.x,{size:"large"},"Users"),a.createElement(x.x,{size:"large"},"Posts"),a.createElement(x.x,{size:"large"},e)))},Q=function(e){var t=e.children;return"small"===a.useContext(S.b)?a.createElement(i.x,{direction:"column",pad:"small",gap:"small",responsive:!0},t.map((function(e){return a.createElement(i.x,null,e)}))):a.createElement(i.x,{fill:!0,direction:"row",pad:"small",gap:"small",responsive:!0},t.map((function(e,t){return e})))},V=function(){return a.createElement(Q,null,a.createElement(i.x,{flex:{grow:6}},a.createElement(k,null)),a.createElement(i.x,{flex:{grow:1},round:"small",responsive:!0,background:"visuals-1",pad:"small"},"Sidebar"))};function ee(){return a.createElement("div",null,"User Preference")}function te(){return a.createElement("div",null,"Login")}var ne=["component","location"],ae=function(e){var t=e.component,n=e.location,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,ne);return a.createElement(t,Object.assign({location:n},r))},re=n(6354);function oe(e){var t=e.postId,n=(0,a.useState)(void 0),r=n[0],o=n[1];return(0,a.useEffect)((0,m.Z)(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g().get(h.v.api_endpoint+"/post/"+t);case 2:n=e.sent,console.log(n.data.post),o(n.data.post);case 5:case"end":return e.stop()}}),e)}))),[]),a.createElement(i.x,null,a.createElement(re.X,{level:3,margin:"none"},"Post"),a.createElement(re.X,{level:3,margin:"none"},"Your Annotations"),a.createElement(i.x,{height:"1em"}),a.createElement(i.x,null,r&&r.Annotations&&r.Annotations.map((function(e){return a.createElement(i.x,{direction:"row-responsive"},a.createElement(i.x,{width:"small",border:!0,pad:"small"},a.createElement(x.x,null,e.key)),a.createElement(i.x,{width:"small",border:!0,pad:"small"},a.createElement(x.x,null,e.value)))}))))}function le(){return le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},le.apply(this,arguments)}var ie=function(e){var t=le({},e);return a.createElement(i.x,le({as:"nav",flex:!1,gap:"medium"},t))},ce=function(e){var t=e.theme.pagination.button&&e.theme.pagination.button.size&&e.theme.pagination.button.size[e.size||"medium"];return t?{content:{fontSize:t.font&&t.font.size,lineHeight:t.font&&t.font.height},container:{height:t.height,minWidth:t.width}}:""},se=(0,z.default)(s.z).withConfig({displayName:"StyledPageControl__StyledPaginationButton",componentId:"sc-1vlfaez-0"})(["> svg{vertical-align:middle;}",";"],(function(e){return ce(e).content})),ue=z.default.div.withConfig({displayName:"StyledPageControl__StyledContainer",componentId:"sc-1vlfaez-1"})(["display:flex;align-items:center;justify-content:center;max-width:100%;",";",";"],(function(e){return ce(e).container}),(function(e){return e.theme.pagination.control&&e.theme.pagination.control.extend})),de=(0,z.default)(x.x).withConfig({displayName:"StyledPageControl__StyledSeparator",componentId:"sc-1vlfaez-2"})(["font-weight:bold;",";",";"],(function(e){return"font-size: "+(ce(e).content&&ce(e).content.fontSize)}),(function(e){return"line-height: "+(ce(e).content&&ce(e).content.lineHeight)})),me=["control","separator","size"];function pe(){return pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},pe.apply(this,arguments)}var fe=function(e){var t=e.control,n=e.separator,r=e.size,o=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,me),l=(0,a.useContext)(z.ThemeContext),i=r||"medium";return a.createElement(ue,{as:"li",size:i},n?a.createElement(de,{size:i},"…"):a.createElement(se,pe({a11yTitle:"Go to page "+t,fill:!0,kind:l.pagination.button,label:t,size:i},o)))},ve=["a11yTitle","aria-label","numberItems","numberEdgePages","numberMiddlePages","onChange","page","size","step"];function ge(){return ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ge.apply(this,arguments)}var he=(0,z.default)(i.x).withConfig({displayName:"Pagination__StyledPaginationContainer",componentId:"sc-rnlw6m-0"})(["",""],(function(e){return e.theme.pagination.container&&e.theme.pagination.container.extend})),be=function(e,t){for(var n=[],a=e;a<=t;a+=1)n.push(a);return n},xe=(0,a.forwardRef)((function(e,t){var n=e.a11yTitle,r=e["aria-label"],o=e.numberItems,l=e.numberEdgePages,c=void 0===l?1:l,s=e.numberMiddlePages,u=void 0===s?3:s,d=e.onChange,m=e.page,p=e.size,f=e.step,v=void 0===f?10:f,g=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,ve),h=(0,a.useContext)(z.ThemeContext)||I.l.theme,b=Math.ceil(o/v),x=(0,a.useState)(Math.min(m,b)||1),E=x[0],y=x[1];(0,a.useEffect)((function(){y(m||1)}),[m]);var w,P,O=be(1,Math.min(c,b)),C=be(Math.max(b-c+1,c+1),b);u<1?(w=1,console.warn('Property "numberMiddlePages" should not be < 1. One middle page button will be shown. Set "numberMiddlePages" >= 1 to remove this warning.')):w=u,P=w%2?Math.min(E-Math.floor(w/2),b-c-w):Math.min(E-Math.floor(w/2)+1,b-c-w);var k=Math.max(P,c+2),S=Math.min(Math.max(E+Math.floor(w/2),c+w+1),C.length>0?C[0]-2:b-1),j=be(k,S),T=[];k>c+2?T=["more-prev"]:c+1<b-c&&(T=[c+1]);var M=[];S<b-c-1?M=["more-next"]:b-c>c&&(M=[b-c]);var _=function(e,t){if(y(t),d){e.persist();var n=e;n.page=t;var a=function(e){var t=v*(e-1);return{startIndex:t,endIndex:t+v}}(t),r=a.startIndex,o=a.endIndex;n.startIndex=r,n.endIndex=o,d(n)}},N=h.pagination.icons.next,A=h.pagination.icons.previous,Z=h.pagination.icons.color,G={next:{"aria-disabled":E===b?"true":void 0,disabled:E===b||!o,icon:a.createElement(N,{color:Z}),onClick:function(e){_(e,E+1)},label:void 0},previous:{"aria-disabled":1===E?"true":void 0,disabled:1===E||!o,icon:a.createElement(A,{color:Z}),onClick:function(e){_(e,E-1)},label:void 0}},R=["previous"].concat(O,T,j,M,C,["next"]);return R=R.map((function(e){return ge({active:e===E,a11yTitle:"number"==typeof e?"Go to page "+e:"Go to "+e+" page","aria-current":e===E?"page":void 0,control:e,onClick:function(t){_(t,e)},separator:"more-prev"===e||"more-next"===e},G[e])})),a.createElement(he,ge({},h.pagination.container,g),a.createElement(ie,{a11yTitle:r||n||"Pagination Navigation",ref:t},a.createElement(i.x,ge({as:"ul"},h.pagination.controls),R.map((function(e,t){return a.createElement(fe,ge({key:t,size:p},e))})))))}));xe.displayName="Pagination";var Ee=function(e){var t=e.post,n=e.onPostClicked;return a.createElement(i.x,{direction:"column",round:"small",responsive:!0,border:{color:"light-4"},pad:"medium",gap:"xsmall",hoverIndicator:!0,onClick:n},a.createElement(i.x,{direction:"row",gap:"small",align:"center"},a.createElement(x.x,{color:"dark-4"},t.id),"pending"===t.status?a.createElement(y.S,{size:"small",color:"visuals-8"}):"malformed"===t.status?a.createElement(w.b,{size:"small",color:"visuals-7"}):"complete"===t.status?a.createElement(P.M,{size:"small",color:"visuals-6"}):null),a.createElement("div",null,"text"===t.role?a.createElement(x.x,{size:"medium",weight:600},t.text):null),"image"===t.role?a.createElement(i.x,{height:"small",width:"small"},a.createElement(E.E,{fit:"contain",alignSelf:"start",src:t.url})):null)},ye=function(){var e=(0,a.useState)([]),t=e[0],n=e[1],r=(0,a.useState)(0),o=r[0],l=r[1],c=(0,a.useState)(0),s=c[0],u=c[1];function d(e){return p.apply(this,arguments)}function p(){return p=(0,m.Z)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g().get(h.v.api_endpoint+"/posts?page="+t));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function v(){return(v=(0,m.Z)(f().mark((function e(t){var a,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.page,console.log(a),l(a),e.next=5,d(a);case 5:r=e.sent,n(r.data.posts);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,a.useEffect)((0,m.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(o);case 2:t=e.sent,console.log(t.data),n(t.data.posts),u(t.data.count);case 6:case"end":return e.stop()}}),e)}))),[]),a.createElement(Q,null,a.createElement(i.x,{flex:{grow:6},gap:"small"},a.createElement(xe,{numberItems:s,onChange:function(e){return v.apply(this,arguments)}}),a.createElement(i.x,{direction:"column",gap:"small"},t.map((function(e,n){return a.createElement(Ee,{post:e,key:n,onPostClicked:function(){return function(e){console.log({pageNum:o,ix:e}),(0,b.navigate)("/app/post/"+t[e].Post.id)}(n)}})})))),a.createElement(i.x,{flex:{grow:1},round:"small",responsive:!0,background:"visuals-1",pad:"small"},"Sidebar"))},we=n(7652),Pe="en",Oe=function(){(0,o.useTranslation)().t;var e=(0,o.useI18next)(),t=(e.languages,e.changeLanguage),n=(0,r.useLocation)();return console.log(),(0,a.useEffect)((function(){t(Pe)}),[]),a.createElement(l.p,{full:!0,theme:u.Z},a.createElement(i.x,{fill:!0,background:"light-1",gap:"small"},a.createElement(c.h,{background:"light-2",pad:"small"},a.createElement(d.Z,null),n.pathname!=h.v.annotator_url?a.createElement(J.SX,{to:"/app/post-annotator"},a.createElement(s.z,{primary:!0,label:"Start Annotation"})):null),a.createElement(Q,null,a.createElement(K,null),a.createElement(i.x,{width:"100%"},a.createElement(r.Router,{basepath:"/app"},a.createElement(ae,{path:"/posts",component:ye}),a.createElement(ae,{path:"/post/:postId",component:oe}),a.createElement(ae,{path:"/allocations",component:V}),a.createElement(ae,{path:"/post-annotator",component:we.default}),a.createElement(ae,{path:"/preferences",component:ee}),a.createElement(ae,{path:"/test",component:we.default}),a.createElement(te,{path:"/login"}))))))}}}]);
//# sourceMappingURL=component---src-pages-app-jsx-ece2c5b0460620ac810f.js.map