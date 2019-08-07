!function(e){function t(t){for(var r,o,a=t[0],d=t[1],i=t[2],c=t[3]||[],s=0,l=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(I,o)&&I[o]&&l.push(I[o][0]),I[o]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);for(S&&S(t),N.push.apply(N,c);l.length;)l.shift()();return z.push.apply(z,i||[]),n()}function n(){for(var e,t=0;t<z.length;t++){for(var n=z[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==I[a]&&(r=!1)}r&&(z.splice(t--,1),e=C(C.s=n[0]))}return 0===z.length&&(N.forEach(function(e){if(void 0===I[e]){I[e]=null;var t=document.createElement("link");t.crossOrigin="anonymous",C.nc&&t.setAttribute("nonce",C.nc),t.rel="prefetch",t.as="script",t.href=H(e),document.head.appendChild(t)}}),N.length=0),e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!k[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0===--g&&0===b&&_()}(e,t),r&&r(e,t)};var o,a=!0,d="55569ec89d5e06d1640d",i=1e4,c={},s=[],l=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"===typeof e)t._selfAccepted=e;else if("object"===typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"===typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:P,apply:D,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:c[e]};return o=void 0,t}var p=[],f="idle";function m(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,y,v,g=0,b=0,x={},w={},k={};function O(e){return+e+""===e?+e:e}function P(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,m("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"===typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=C.p+""+d+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(a){return n(a)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(a){return void n(a)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;w={},x={},k=e.c,v=e.h,m("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in y={},I)j(n);return"prepare"===f&&0===b&&0===g&&_(),t});var t}function j(e){k[e]?(w[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=C.p+""+e+"."+d+".hot-update.js",t.crossOrigin="anonymous",document.head.appendChild(t)}(e)):x[e]=!0}function _(){m("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then(function(){return D(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(O(n));e.resolve(t)}}function D(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,a,i;function l(e){for(var t=[e],n={},r=t.map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),d=o.id,i=o.chain;if((a=E[d])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:d};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:d};for(var c=0;c<a.parents.length;c++){var s=a.parents[c],l=E[s];if(l){if(l.hot._declinedDependencies[d])return{type:"declined",chain:i.concat([s]),moduleId:d,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[d]?(n[s]||(n[s]=[]),u(n[s],[d])):(delete n[s],t.push(s),r.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},h=[],g={},b=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var x in y)if(Object.prototype.hasOwnProperty.call(y,x)){var w;i=O(x);var P=!1,j=!1,_=!1,D="";switch((w=y[x]?l(i):{type:"disposed",moduleId:x}).chain&&(D="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(P=new Error("Aborted because of self decline: "+w.moduleId+D));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+D));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(P=new Error("Aborted because "+i+" is not accepted"+D));break;case"accepted":t.onAccepted&&t.onAccepted(w),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),_=!0;break;default:throw new Error("Unexception type "+w.type)}if(P)return m("abort"),Promise.reject(P);if(j)for(i in g[i]=y[i],u(h,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,i)&&(p[i]||(p[i]=[]),u(p[i],w.outdatedDependencies[i]));_&&(u(h,[w.moduleId]),g[i]=b)}var z,N=[];for(r=0;r<h.length;r++)i=h[r],E[i]&&E[i].hot._selfAccepted&&g[i]!==b&&N.push({module:i,errorHandler:E[i].hot._selfAccepted});m("dispose"),Object.keys(k).forEach(function(e){!1===k[e]&&function(e){delete I[e]}(e)});for(var H,q,U=h.slice();U.length>0;)if(i=U.pop(),a=E[i]){var R={},S=a.hot._disposeHandlers;for(o=0;o<S.length;o++)(n=S[o])(R);for(c[i]=R,a.hot.active=!1,delete E[i],delete p[i],o=0;o<a.children.length;o++){var A=E[a.children[o]];A&&((z=A.parents.indexOf(i))>=0&&A.parents.splice(z,1))}}for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(a=E[i]))for(q=p[i],o=0;o<q.length;o++)H=q[o],(z=a.children.indexOf(H))>=0&&a.children.splice(z,1);for(i in m("apply"),d=v,g)Object.prototype.hasOwnProperty.call(g,i)&&(e[i]=g[i]);var M=null;for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(a=E[i])){q=p[i];var J=[];for(r=0;r<q.length;r++)if(H=q[r],n=a.hot._acceptedDependencies[H]){if(-1!==J.indexOf(n))continue;J.push(n)}for(r=0;r<J.length;r++){n=J[r];try{n(q)}catch(F){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:i,dependencyId:q[r],error:F}),t.ignoreErrored||M||(M=F)}}}for(r=0;r<N.length;r++){var T=N[r];i=T.module,s=[i];try{C(i)}catch(F){if("function"===typeof T.errorHandler)try{T.errorHandler(F)}catch(V){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:V,originalError:F}),t.ignoreErrored||M||(M=V),M||(M=F)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:i,error:F}),t.ignoreErrored||M||(M=F)}}return M?(m("fail"),Promise.reject(M)):(m("idle"),new Promise(function(e){e(h)}))}var E={},I={1:0},z=[],N=[];function H(e){return C.p+"static/js/"+({2:"docz-demos-basic-index",3:"docz-demos-create-replacement-node-index",4:"docz-introduction"}[e]||e)+"."+{2:"dad44043",3:"7c4c0af0",4:"2ee3735c"}[e]+".js"}function C(t){if(E[t])return E[t].exports;var n=E[t]={i:t,l:!1,exports:{},hot:u(t),parents:(l=s,s=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=E[e];if(!t)return C;var n=function(n){return t.hot.active?(E[n]?-1===E[n].parents.indexOf(e)&&E[n].parents.push(e):(s=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),C(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return C[e]},set:function(t){C[e]=t}}};for(var a in C)Object.prototype.hasOwnProperty.call(C,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&m("prepare"),b++,C.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===f&&(x[e]||j(e),0===b&&0===g&&_())}},n.t=function(e,t){return 1&t&&(e=n(e)),C.t(e,-2&t)},n}(t)),n.l=!0,n.exports}C.e=function(e){var t=[],n=I[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=I[e]=[t,r]});t.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,C.nc&&a.setAttribute("nonce",C.nc),a.src=H(e),0!==a.src.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous");var d=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(i);var n=I[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}I[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},C.m=e,C.c=E,C.d=function(e,t,n){C.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},C.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},C.t=function(e,t){if(1&t&&(e=C(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(C.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)C.d(n,r,function(t){return e[t]}.bind(null,r));return n},C.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return C.d(t,"a",t),t},C.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},C.p="/template-editor/",C.oe=function(e){throw console.error(e),e},C.h=function(){return d};var q=window.webpackJsonp=window.webpackJsonp||[],U=q.push.bind(q);q.push=t,q=q.slice();for(var R=0;R<q.length;R++)t(q[R]);var S=U,A=(z.push([0,0]),n());t([[],{},0,[0,2,3,4]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"@template-editor/react@0.2.3","description":"template-editor implemention in React","menu":[],"version":"0.2.3","repository":"https://github.com/jeezlee/template-editor/tree/master/packages/react-template-editor","native":false,"codeSandbox":true,"themeConfig":{},"separator":"-","typescript":true,"base":"/template-editor/","dest":"../../docs"},"entries":[{"key":"docz/Introduction.mdx","value":{"name":"Introduction","route":"/template-editor/","id":"6479cd50f9a2f46deacfaf3329460897","filepath":"docz/Introduction.mdx","link":"","slug":"docz-introduction","menu":"","headings":[{"slug":"introduction","depth":1,"value":"Introduction"},{"slug":"install","depth":2,"value":"Install"},{"slug":"props","depth":2,"value":"Props"},{"slug":"type-definitions","depth":2,"value":"Type Definitions"},{"slug":"iplaceholder","depth":3,"value":"IPlaceholder"},{"slug":"ieditoroptions","depth":3,"value":"IEditorOptions"}]}},{"key":"docz/demos/basic/index.mdx","value":{"name":"basic","route":"/template-editor/usage/basic","menu":"usage demos","id":"88a1b697c93d697621456520967e06b8","filepath":"docz/demos/basic/index.mdx","link":"","slug":"docz-demos-basic-index","headings":[{"slug":"basic-usage","depth":1,"value":"Basic Usage"}]}},{"key":"docz/demos/createReplacementNode/index.mdx","value":{"name":"createReplacementNode","route":"/template-editor/usage/createReplacementNode","menu":"usage demos","id":"a3fc4678bae779d45837af306ac70285","filepath":"docz/demos/createReplacementNode/index.mdx","link":"","slug":"docz-demos-create-replacement-node-index","headings":[{"slug":"custom-createreplacementnode","depth":1,"value":"Custom createReplacementNode"}]}}],"props":[{"key":"src\\\\index.tsx","value":[{"description":"","displayName":"ReactTemplateEditor","methods":[],"props":{"value":{"defaultValue":null,"description":"","name":"value","parent":{"fileName":"C:/Users/JF/Desktop/template-editor/packages/react-template-editor/src/index.d.ts","name":"IProps"},"required":true,"type":{"name":"string"}},"disabled":{"defaultValue":null,"description":"","name":"disabled","parent":{"fileName":"C:/Users/JF/Desktop/template-editor/packages/react-template-editor/src/index.d.ts","name":"IProps"},"required":false,"type":{"name":"boolean | undefined"}},"placeholder":{"defaultValue":null,"description":"","name":"placeholder","parent":{"fileName":"C:/Users/JF/Desktop/template-editor/packages/react-template-editor/src/index.d.ts","name":"IProps"},"required":false,"type":{"name":"string | undefined"}},"className":{"defaultValue":null,"description":"","name":"className","parent":{"fileName":"C:/Users/JF/Desktop/template-editor/packages/react-template-editor/src/index.d.ts","name":"IProps"},"required":false,"type":{"name":"string | undefined"}},"style":{"defaultValue":null,"description":"","name":"style","parent":{"fileName":"C:/Users/JF/Desktop/template-editor/packages/react-template-editor/src/index.d.ts","name":"IProps"},"required":false,"type":{"name":"CSSProperties | undefined"}},"placeholders":{"defaultValue":null,"description":"","name":"placeholders","parent":{"fileName":"C:/Users/JF/Desktop/template-editor/packages/react-template-editor/src/index.d.ts","name":"IProps"},"required":true,"type":{"name":"IPlaceholder[]"}},"createReplacementNode":{"defaultValue":null,"description":"You can use custom your placeholder span, may be you need to add click lintener on it","name":"createReplacementNode","parent":{"fileName":"C:/Users/JF/Desktop/template-editor/packages/react-template-editor/src/index.d.ts","name":"IProps"},"required":false,"type":{"name":"((placeholder: IPlaceholder, value?: string | undefined, input?: string | undefined) => HTMLSpanElement) | undefined"}},"onChange":{"defaultValue":null,"description":"The first argument is the value, and tokens is the array of Codemirror.Token, you can get the tokens you need with a filter function","name":"onChange","parent":{"fileName":"C:/Users/JF/Desktop/template-editor/packages/react-template-editor/src/index.d.ts","name":"IProps"},"required":false,"type":{"name":"((input: string, tokens?: Token[] | undefined) => void) | undefined"}}}}]}]}')},"./.docz/app/index.jsx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/react-dom/index.js"),d=n.n(a),i=n("./node_modules/docz/dist/index.esm.js"),c=n("./node_modules/docz-theme-default/dist/index.esm.js"),s={"docz/Introduction.mdx":function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"./docz/Introduction.mdx"))},"docz/demos/basic/index.mdx":function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"./docz/demos/basic/index.mdx"))},"docz/demos/createReplacementNode/index.mdx":function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"./docz/demos/createReplacementNode/index.mdx"))}},l=n("./.docz/app/db.json"),u=function(){return o.a.createElement(c.a,{linkComponent:i.b,db:l},o.a.createElement(i.e,{imports:s}))},p=[],f=[],m=function(){return p.forEach(function(e){return e&&e()})},h=function(){return f.forEach(function(e){return e&&e()})},y=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;m(),d.a.render(o.a.createElement(e,null),y,h)}(u)},0:function(e,t,n){e.exports=n("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.55569ec89d5e06d1640d.js.map