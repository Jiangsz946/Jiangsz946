(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{248:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"f",(function(){return h})),n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"e",(function(){return b}));n(92);const r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(r,"").replace(i,"")}function l(t){return s.test(t)}function c(t){if(l(t))return t;const e=t.match(r),n=e?e[0]:"",i=o(t);return a.test(i)?t:i+".html"+n}function u(t,e){const n=decodeURIComponent(t.hash),i=function(t){const e=t.match(r);if(e)return e[0]}(e);if(i&&n!==i)return!1;return o(t.path)===o(e)}function p(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:c(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function h(t,e,n,r){const{pages:i,themeConfig:a}=n,s=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return f(t);const o=s.sidebar||a.sidebar;if(o){const{base:n,config:r}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,o);return"auto"===r?f(t):r?r.map(t=>function t(e,n,r,i=1){if("string"==typeof e)return p(n,e,r);if(Array.isArray(e))return Object.assign(p(n,e[0],r),{title:e[1]});{const a=e.children||[];return 0===a.length&&e.path?Object.assign(p(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:a.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}}(t,i,n)):[]}return[]}function f(t){const e=d(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function d(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},254:function(t,e,n){},264:function(t,e,n){"use strict";n(254)},267:function(t,e,n){"use strict";n.r(e);var r=n(248);function i(t,e,n,r){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"toc-sidebar-link":!0}},n)}function a(t,e,n,s,o,l=1){return!e||l>o?null:t("ul",{class:"toc-sidebar-sub-headers"},e.map(e=>{const c=Object(r.c)(s,n+"#"+e.slug);let u="toc-sidebar-sub-header";return e.level<=3?u+=c?" active":"":e.level>3&&e.level<=6&&(u+=" toc-sidebar-depth-"+e.level),t("li",{class:u},[i(t,n+"#"+e.slug,e.title,c),a(t,e.children,n,s,o,l+1)])}))}var s={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:n,$route:s,$themeConfig:o,$themeLocaleConfig:l},props:{item:c,sidebarDepth:u}}){const p=Object(r.c)(s,c.path),h="auto"===c.type?p||c.children.some(t=>Object(r.c)(s,c.basePath+"#"+t.slug)):p,f="external"===c.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"toc-sidebar-link":!0}},[n,t("OutboundLink")])}(t,c.path,c.title||c.path):i(t,c.path,c.title||c.path,h),d=[e.frontmatter.sidebarDepth,u,l.sidebarDepth,o.sidebarDepth,1].find(t=>void 0!==t),b=l.displayAllHeaders||o.displayAllHeaders;if("auto"===c.type)return[f,a(t,c.children,c.basePath,s,d)];if((h||b)&&c.headers&&!r.b.test(c.path)){return[f,a(t,Object(r.a)(c.headers),c.path,s,d)]}return f}},o=(n(264),n(7)),l=Object(o.a)(s,void 0,void 0,!1,null,null,null);e.default=l.exports}}]);