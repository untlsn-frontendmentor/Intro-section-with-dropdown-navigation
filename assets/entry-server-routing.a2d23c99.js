import{_ as d,g as _,j as u,k as v,l as x,a as g,t as E,q as c,u as f,o as r,c as m,B as y,v as F,e as h,I as b,H as C,G as P}from"./chunk-405d3b53.js";import{_ as i}from"./chunk-eb087b34.js";const l={},R={},w={},o={},I={},L=!0,O=Object.assign({"/src/pages/_error.page.tsx":()=>i(()=>import("./src/pages/_error.page.dd75269d.js"),["assets/src/pages/_error.page.dd75269d.js","assets/chunk-788d98fe.js"]),"/src/pages/index.page.tsx":()=>i(()=>import("./src/pages/index.page.52b7cdef.js"),["assets/src/pages/index.page.52b7cdef.js","assets/chunk-ba7c608e.js","assets/chunk-788d98fe.js","assets/chunk-a9a06fd9.js"])}),H={...O};l[".page"]=H;const j=Object.assign({"/src/renderer/_default.page.client.tsx":()=>i(()=>import("./src/renderer/_default.page.client.c1cbdc88.js").then(e=>e._),["assets/src/renderer/_default.page.client.c1cbdc88.js","assets/_default.page.client.615cd4bd.css","assets/chunk-788d98fe.js","assets/chunk-eb087b34.js","assets/chunk-a9a06fd9.js"])}),N={...j};l[".page.client"]=N;const z=Object.assign({"/src/renderer/_default.page.client.tsx":d}),S={...z};o[".page.client"]=S;const A=Object.assign({"/src/renderer/_default.page.server.tsx":_}),B={...A};o[".page.server"]=B;const k=Object.assign({"/src/pages/_error.page.tsx":u,"/src/pages/index.page.tsx":v}),T={...k};o[".page"]=T;const U=Object.freeze(Object.defineProperty({__proto__:null,pageFilesLazy:l,pageFilesEager:R,pageFilesExportNamesLazy:w,pageFilesExportNamesEager:o,neverLoaded:I,isGeneratedFile:L},Symbol.toStringTag,{value:"Module"}));x(U);function D(e){return g(e.isHydration===!0),g(e.isBackwardNavigation===null),E(e)}const p=c({withoutHash:!0});async function V(){const e=f();return r(e,{isHydration:!0,isBackwardNavigation:null}),r(e,await G(e._pageId)),$(),D(e)}function $(){const e=c({withoutHash:!0});m(p===e,`URL manipulated before hydration finished (\`${p}\` to \`${e}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`)}async function G(e){const a={},{pageFilesAll:t}=await y(!0);return r(a,{_pageFilesAll:t}),r(a,await F(t,e)),t.filter(s=>s.fileType!==".page.server").forEach(s=>{var n;h(!(!((n=s.fileExports)===null||n===void 0)&&n.onBeforeRender),`\`export { onBeforeRender }\` of ${s.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),a}b();q();async function q(){var e,a;const t=await V();C(t),await t.exports.render(t),P(t,"onHydrationEnd"),await((a=(e=t.exports).onHydrationEnd)===null||a===void 0?void 0:a.call(e,t))}