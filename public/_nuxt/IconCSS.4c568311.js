import{a as l}from"./entry.4fe93dad.js";import{j as d,E as f,h as o,m as x,F as S,G as z,u as c}from"./swiper-vue.a7e98229.js";import{u as I}from"./config.7cf7b7c2.js";import"./app.config.28417b8e.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(p){var a;const n=p;f(t=>({"71ded496":c(_)}));const e=I();(a=e==null?void 0:e.nuxtIcon)!=null&&a.aliases;const m=o(()=>{var t;return(((t=e==null?void 0:e.nuxtIcon)==null?void 0:t.aliases)||{})[n.name]||n.name}),_=o(()=>`url('https://api.iconify.design/${m.value.replace(":","/")}.svg')`),r=o(()=>{var s,i,u;if(!n.size&&typeof((s=e.nuxtIcon)==null?void 0:s.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const t=n.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(t))===t?`${t}px`:t});return(t,s)=>(x(),S("span",{style:z({width:c(r),height:c(r)})},null,4))}});const C=l(y,[["__scopeId","data-v-11604bcf"]]);export{C as default};