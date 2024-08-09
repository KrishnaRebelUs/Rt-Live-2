import{o as V,d as D,e as F,g as T,s as B}from"./Box-ce306774.js";import{A as E,_ as h,B as v,C as p,D as G,E as M,F as N,r as d,b as _,j as $,G as k,a as A}from"./index-1b8baf23.js";import{s as O}from"./styled-b4855039.js";import{u as U}from"./useThemeProps-2d603fd9.js";const L=["component","direction","spacing","divider","children","className","useFlexGap"],I=E(),W=O("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function q(e){return U({props:e,name:"MuiStack",defaultTheme:I})}function z(e,s){const n=d.Children.toArray(e).filter(Boolean);return n.reduce((a,c,t)=>(a.push(c),t<n.length-1&&a.push(d.cloneElement(s,{key:`separator-${t}`})),a),[])}const H=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],J=({ownerState:e,theme:s})=>{let n=h({display:"flex",flexDirection:"column"},v({theme:s},p({values:e.direction,breakpoints:s.breakpoints.values}),a=>({flexDirection:a})));if(e.spacing){const a=G(s),c=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=p({values:e.direction,base:c}),m=p({values:e.spacing,base:c});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const u=r>0?t[i[r-1]]:"column";t[o]=u}}),n=M(n,v({theme:s},m,(o,r)=>e.useFlexGap?{gap:k(a,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${H(r?t[r]:e.direction)}`]:k(a,o)}}))}return n=N(s.breakpoints,n),n};function K(e={}){const{createStyledComponent:s=W,useThemeProps:n=q,componentName:a="MuiStack"}=e,c=()=>F({root:["root"]},o=>T(a,o),{}),t=s(J);return d.forwardRef(function(o,r){const i=n(o),l=V(i),{component:u="div",direction:x="column",spacing:S=0,divider:y,children:g,className:j,useFlexGap:C=!1}=l,P=_(l,L),b={direction:x,spacing:S,useFlexGap:C},R=c();return $.jsx(t,h({as:u,ownerState:b,ref:r,className:D(R.root,j)},P,{children:y?z(g,y):g}))})}const Q=K({createStyledComponent:B("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>A({props:e,name:"MuiStack"})}),ee=Q;export{ee as S,K as c};
