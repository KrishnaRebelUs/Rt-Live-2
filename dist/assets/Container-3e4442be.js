import{d as W,e as k,g as v,s as R}from"./Box-ce306774.js";import{_ as p,A as G,c as l,r as $,b as S,j as M,a as P}from"./index-1b8baf23.js";import{s as T}from"./styled-b4855039.js";import{u as j}from"./useThemeProps-2d603fd9.js";const y=["className","component","disableGutters","fixed","maxWidth","classes"],L=G(),N=T("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&e.fixed,o.disableGutters&&e.disableGutters]}}),_=a=>j({props:a,name:"MuiContainer",defaultTheme:L}),U=(a,e)=>{const o=i=>v(e,i),{classes:u,fixed:c,disableGutters:x,maxWidth:t}=a,s={root:["root",t&&`maxWidth${l(String(t))}`,c&&"fixed",x&&"disableGutters"]};return k(s,o,u)};function w(a={}){const{createStyledComponent:e=N,useThemeProps:o=_,componentName:u="MuiContainer"}=a,c=e(({theme:t,ownerState:s})=>p({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!s.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:s})=>s.fixed&&Object.keys(t.breakpoints.values).reduce((i,n)=>{const d=n,r=t.breakpoints.values[d];return r!==0&&(i[t.breakpoints.up(d)]={maxWidth:`${r}${t.breakpoints.unit}`}),i},{}),({theme:t,ownerState:s})=>p({},s.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},s.maxWidth&&s.maxWidth!=="xs"&&{[t.breakpoints.up(s.maxWidth)]:{maxWidth:`${t.breakpoints.values[s.maxWidth]}${t.breakpoints.unit}`}}));return $.forwardRef(function(s,i){const n=o(s),{className:d,component:r="div",disableGutters:f=!1,fixed:b=!1,maxWidth:C="lg"}=n,g=S(n,y),m=p({},n,{component:r,disableGutters:f,fixed:b,maxWidth:C}),h=U(m,u);return M.jsx(c,p({as:r,ownerState:m,className:W(h.root,d),ref:i},g))})}const z=w({createStyledComponent:R("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&e.fixed,o.disableGutters&&e.disableGutters]}}),useThemeProps:a=>P({props:a,name:"MuiContainer"})}),q=z;export{q as C};
