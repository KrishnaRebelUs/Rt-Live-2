import{s as Ze,r as d,R as Je,_ as m,b as L,J as Qe,T as et,w as tt,c as ue,a as Y,j as T,K as le,m as ce,t as Se,g as nt,C as de,B as ve}from"./index-1b8baf23.js";import{d as B,c as se,g as Z,a as J,s as G,e as Q,q as ot,t as Le,u as Te,j as Re,i as ke,o as rt}from"./Box-ce306774.js";var Ae={exports:{}},st="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",it=st,at=it;function je(){}function We(){}We.resetWarningCache=je;var lt=function(){function e(n,s,r,i,a,l){if(l!==at){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:We,resetWarningCache:je};return o.PropTypes=o,o};Ae.exports=lt();var ct=Ae.exports;const Fn=Ze(ct);function Pe(...e){return e.reduce((t,o)=>o==null?t:function(...s){t.apply(this,s),o.apply(this,s)},()=>{})}function Bn(e,t){var o,n;return d.isValidElement(e)&&t.indexOf((o=e.type.muiName)!=null?o:(n=e.type)==null||(n=n._payload)==null||(n=n.value)==null?void 0:n.muiName)!==-1}function W(e){return e&&e.ownerDocument||document}function ge(e){return W(e).defaultView||window}let Ne=0;function ut(e){const[t,o]=d.useState(e),n=e||t;return d.useEffect(()=>{t==null&&(Ne+=1,o(`mui-${Ne}`))},[t]),n}const Ce=Je["useId".toString()];function Ln(e){if(Ce!==void 0){const t=Ce();return e??t}return ut(e)}function dt(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function pt(e){return typeof e=="string"}function ft(e,t,o){return e===void 0||pt(e)?t:m({},t,{ownerState:m({},t.ownerState,o)})}function ze(e,t=[]){if(e===void 0)return{};const o={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&typeof e[n]=="function"&&!t.includes(n)).forEach(n=>{o[n]=e[n]}),o}function $e(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(o=>!(o.match(/^on[A-Z]/)&&typeof e[o]=="function")).forEach(o=>{t[o]=e[o]}),t}function mt(e){const{getSlotProps:t,additionalProps:o,externalSlotProps:n,externalForwardedProps:s,className:r}=e;if(!t){const g=B(o==null?void 0:o.className,r,s==null?void 0:s.className,n==null?void 0:n.className),f=m({},o==null?void 0:o.style,s==null?void 0:s.style,n==null?void 0:n.style),R=m({},o,s,n);return g.length>0&&(R.className=g),Object.keys(f).length>0&&(R.style=f),{props:R,internalRef:void 0}}const i=ze(m({},s,n)),a=$e(n),l=$e(s),c=t(i),u=B(c==null?void 0:c.className,o==null?void 0:o.className,r,s==null?void 0:s.className,n==null?void 0:n.className),p=m({},c==null?void 0:c.style,o==null?void 0:o.style,s==null?void 0:s.style,n==null?void 0:n.style),h=m({},c,o,l,a);return u.length>0&&(h.className=u),Object.keys(p).length>0&&(h.style=p),{props:h,internalRef:c.ref}}function ht(e,t,o){return typeof e=="function"?e(t,o):e}const vt=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function we(e){var t;const{elementType:o,externalSlotProps:n,ownerState:s,skipResolvingSlotProps:r=!1}=e,i=L(e,vt),a=r?{}:ht(n,s),{props:l,internalRef:c}=mt(m({},i,{externalSlotProps:a})),u=se(c,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return ft(o,m({},l,{ref:u}),s)}function Ue(){const e=Qe(tt);return e[et]||e}const gt=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Ie=gt;function xt(e){return Z("MuiSvgIcon",e)}J("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Et=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],bt=e=>{const{color:t,fontSize:o,classes:n}=e,s={root:["root",t!=="inherit"&&`color${ue(t)}`,`fontSize${ue(o)}`]};return Q(s,xt,n)},yt=G("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.color!=="inherit"&&t[`color${ue(o.color)}`],t[`fontSize${ue(o.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var o,n,s,r,i,a,l,c,u,p,h,g,f;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(o=e.transitions)==null||(n=o.create)==null?void 0:n.call(o,"fill",{duration:(s=e.transitions)==null||(s=s.duration)==null?void 0:s.shorter}),fontSize:{inherit:"inherit",small:((r=e.typography)==null||(i=r.pxToRem)==null?void 0:i.call(r,20))||"1.25rem",medium:((a=e.typography)==null||(l=a.pxToRem)==null?void 0:l.call(a,24))||"1.5rem",large:((c=e.typography)==null||(u=c.pxToRem)==null?void 0:u.call(c,35))||"2.1875rem"}[t.fontSize],color:(p=(h=(e.vars||e).palette)==null||(h=h[t.color])==null?void 0:h.main)!=null?p:{action:(g=(e.vars||e).palette)==null||(g=g.action)==null?void 0:g.active,disabled:(f=(e.vars||e).palette)==null||(f=f.action)==null?void 0:f.disabled,inherit:void 0}[t.color]}}),Ge=d.forwardRef(function(t,o){const n=Y({props:t,name:"MuiSvgIcon"}),{children:s,className:r,color:i="inherit",component:a="svg",fontSize:l="medium",htmlColor:c,inheritViewBox:u=!1,titleAccess:p,viewBox:h="0 0 24 24"}=n,g=L(n,Et),f=d.isValidElement(s)&&s.type==="svg",R=m({},n,{color:i,component:a,fontSize:l,instanceFontSize:t.fontSize,inheritViewBox:u,viewBox:h,hasSvgAsChild:f}),P={};u||(P.viewBox=h);const k=bt(R);return T.jsxs(yt,m({as:a,className:B(k.root,r),focusable:"false",color:c,"aria-hidden":p?void 0:!0,role:p?"img":void 0,ref:o},P,g,f&&s.props,{ownerState:R,children:[f?s.props.children:s,p?T.jsx("title",{children:p}):null]}))});Ge.muiName="SvgIcon";const Me=Ge;function An(e,t){function o(n,s){return T.jsx(Me,m({"data-testid":`${t}Icon`,ref:s},n,{children:e}))}return o.muiName=Me.muiName,d.memo(d.forwardRef(o))}const Oe={disabled:!1};var St=function(t){return t.scrollTop},ne="unmounted",z="exited",U="entering",q="entered",he="exiting",A=function(e){ot(t,e);function t(n,s){var r;r=e.call(this,n,s)||this;var i=s,a=i&&!i.isMounting?n.enter:n.appear,l;return r.appearStatus=null,n.in?a?(l=z,r.appearStatus=U):l=q:n.unmountOnExit||n.mountOnEnter?l=ne:l=z,r.state={status:l},r.nextCallback=null,r}t.getDerivedStateFromProps=function(s,r){var i=s.in;return i&&r.status===ne?{status:z}:null};var o=t.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(s){var r=null;if(s!==this.props){var i=this.state.status;this.props.in?i!==U&&i!==q&&(r=U):(i===U||i===q)&&(r=he)}this.updateStatus(!1,r)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var s=this.props.timeout,r,i,a;return r=i=a=s,s!=null&&typeof s!="number"&&(r=s.exit,i=s.enter,a=s.appear!==void 0?s.appear:i),{exit:r,enter:i,appear:a}},o.updateStatus=function(s,r){if(s===void 0&&(s=!1),r!==null)if(this.cancelNextCallback(),r===U){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:le.findDOMNode(this);i&&St(i)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===z&&this.setState({status:ne})},o.performEnter=function(s){var r=this,i=this.props.enter,a=this.context?this.context.isMounting:s,l=this.props.nodeRef?[a]:[le.findDOMNode(this),a],c=l[0],u=l[1],p=this.getTimeouts(),h=a?p.appear:p.enter;if(!s&&!i||Oe.disabled){this.safeSetState({status:q},function(){r.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:U},function(){r.props.onEntering(c,u),r.onTransitionEnd(h,function(){r.safeSetState({status:q},function(){r.props.onEntered(c,u)})})})},o.performExit=function(){var s=this,r=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:le.findDOMNode(this);if(!r||Oe.disabled){this.safeSetState({status:z},function(){s.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:he},function(){s.props.onExiting(a),s.onTransitionEnd(i.exit,function(){s.safeSetState({status:z},function(){s.props.onExited(a)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(s,r){r=this.setNextCallback(r),this.setState(s,r)},o.setNextCallback=function(s){var r=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,r.nextCallback=null,s(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},o.onTransitionEnd=function(s,r){this.setNextCallback(r);var i=this.props.nodeRef?this.props.nodeRef.current:le.findDOMNode(this),a=s==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],c=l[0],u=l[1];this.props.addEndListener(c,u)}s!=null&&setTimeout(this.nextCallback,s)},o.render=function(){var s=this.state.status;if(s===ne)return null;var r=this.props,i=r.children;r.in,r.mountOnEnter,r.unmountOnExit,r.appear,r.enter,r.exit,r.timeout,r.addEndListener,r.onEnter,r.onEntering,r.onEntered,r.onExit,r.onExiting,r.onExited,r.nodeRef;var a=L(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ce.createElement(Le.Provider,{value:null},typeof i=="function"?i(s,a):ce.cloneElement(ce.Children.only(i),a))},t}(ce.Component);A.contextType=Le;A.propTypes={};function K(){}A.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:K,onEntering:K,onEntered:K,onExit:K,onExiting:K,onExited:K};A.UNMOUNTED=ne;A.EXITED=z;A.ENTERING=U;A.ENTERED=q;A.EXITING=he;const Tt=A,Rt=e=>e.scrollTop;function _e(e,t){var o,n;const{timeout:s,easing:r,style:i={}}=e;return{duration:(o=i.transitionDuration)!=null?o:typeof s=="number"?s:s[t.mode]||0,easing:(n=i.transitionTimingFunction)!=null?n:typeof r=="object"?r[t.mode]:r,delay:i.transitionDelay}}function kt(e){return Z("MuiPaper",e)}J("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Pt=["className","component","elevation","square","variant"],Nt=e=>{const{square:t,elevation:o,variant:n,classes:s}=e,r={root:["root",n,!t&&"rounded",n==="elevation"&&`elevation${o}`]};return Q(r,kt,s)},Ct=G("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,o.variant==="elevation"&&t[`elevation${o.elevation}`]]}})(({theme:e,ownerState:t})=>{var o;return m({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&m({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Se("#fff",Ie(t.elevation))}, ${Se("#fff",Ie(t.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[t.elevation]}))}),$t=d.forwardRef(function(t,o){const n=Y({props:t,name:"MuiPaper"}),{className:s,component:r="div",elevation:i=1,square:a=!1,variant:l="elevation"}=n,c=L(n,Pt),u=m({},n,{component:r,elevation:i,square:a,variant:l}),p=Nt(u);return T.jsx(Ct,m({as:r,ownerState:u,className:B(p.root,s),ref:o},c))}),jn=$t;function wt(e){return typeof e=="function"?e():e}const It=d.forwardRef(function(t,o){const{children:n,container:s,disablePortal:r=!1}=t,[i,a]=d.useState(null),l=se(d.isValidElement(n)?n.ref:null,o);if(Te(()=>{r||a(wt(s)||document.body)},[s,r]),Te(()=>{if(i&&!r)return Re(o,i),()=>{Re(o,null)}},[o,i,r]),r){if(d.isValidElement(n)){const c={ref:l};return d.cloneElement(n,c)}return T.jsx(d.Fragment,{children:n})}return T.jsx(d.Fragment,{children:i&&nt.createPortal(n,i)})}),Mt=It,Ot=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],_t={entering:{opacity:1},entered:{opacity:1}},Dt=d.forwardRef(function(t,o){const n=Ue(),s={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:a,easing:l,in:c,onEnter:u,onEntered:p,onEntering:h,onExit:g,onExited:f,onExiting:R,style:P,timeout:k=s,TransitionComponent:I=Tt}=t,v=L(t,Ot),S=d.useRef(null),b=se(S,a.ref,o),$=E=>M=>{if(E){const x=S.current;M===void 0?E(x):E(x,M)}},N=$(h),w=$((E,M)=>{Rt(E);const x=_e({style:P,timeout:k,easing:l},{mode:"enter"});E.style.webkitTransition=n.transitions.create("opacity",x),E.style.transition=n.transitions.create("opacity",x),u&&u(E,M)}),O=$(p),C=$(R),j=$(E=>{const M=_e({style:P,timeout:k,easing:l},{mode:"exit"});E.style.webkitTransition=n.transitions.create("opacity",M),E.style.transition=n.transitions.create("opacity",M),g&&g(E)}),F=$(f),_=E=>{r&&r(S.current,E)};return T.jsx(I,m({appear:i,in:c,nodeRef:S,onEnter:w,onEntered:O,onEntering:N,onExit:j,onExited:F,onExiting:C,addEndListener:_,timeout:k},v,{children:(E,M)=>d.cloneElement(a,m({style:m({opacity:0,visibility:E==="exited"&&!c?"hidden":void 0},_t[E],P,a.props.style),ref:b},M))}))}),Ft=Dt;function Bt(e){return Z("MuiBackdrop",e)}J("MuiBackdrop",["root","invisible"]);const Lt=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],At=e=>{const{classes:t,invisible:o}=e;return Q({root:["root",o&&"invisible"]},Bt,t)},jt=G("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})(({ownerState:e})=>m({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Wt=d.forwardRef(function(t,o){var n,s,r;const i=Y({props:t,name:"MuiBackdrop"}),{children:a,className:l,component:c="div",components:u={},componentsProps:p={},invisible:h=!1,open:g,slotProps:f={},slots:R={},TransitionComponent:P=Ft,transitionDuration:k}=i,I=L(i,Lt),v=m({},i,{component:c,invisible:h}),S=At(v),b=(n=f.root)!=null?n:p.root;return T.jsx(P,m({in:g,timeout:k},I,{children:T.jsx(jt,m({"aria-hidden":!0},b,{as:(s=(r=R.root)!=null?r:u.Root)!=null?s:c,className:B(S.root,l,b==null?void 0:b.className),ownerState:m({},v,b==null?void 0:b.ownerState),classes:S,ref:o,children:a}))}))}),zt=Wt;function Ut(e){const t=W(e);return t.body===e?ge(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function oe(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function De(e){return parseInt(ge(e).getComputedStyle(e).paddingRight,10)||0}function Gt(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function Fe(e,t,o,n,s){const r=[t,o,...n];[].forEach.call(e.children,i=>{const a=r.indexOf(i)===-1,l=!Gt(i);a&&l&&oe(i,s)})}function me(e,t){let o=-1;return e.some((n,s)=>t(n)?(o=s,!0):!1),o}function Ht(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(Ut(n)){const i=dt(W(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${De(n)+i}px`;const a=W(n).querySelectorAll(".mui-fixed");[].forEach.call(a,l=>{o.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${De(l)+i}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=W(n).body;else{const i=n.parentElement,a=ge(n);r=(i==null?void 0:i.nodeName)==="HTML"&&a.getComputedStyle(i).overflowY==="scroll"?i:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:i,property:a})=>{r?i.style.setProperty(a,r):i.style.removeProperty(a)})}}function Vt(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class Kt{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&oe(t.modalRef,!1);const s=Vt(o);Fe(o,t.mount,t.modalRef,s,!0);const r=me(this.containers,i=>i.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),n)}mount(t,o){const n=me(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[n];s.restore||(s.restore=Ht(s,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const s=me(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&oe(t.modalRef,o),Fe(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&oe(i.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const qt=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Xt(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Yt(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function Zt(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Yt(e))}function Jt(e){const t=[],o=[];return Array.from(e.querySelectorAll(qt)).forEach((n,s)=>{const r=Xt(n);r===-1||!Zt(n)||(r===0?t.push(n):o.push({documentOrder:s,tabIndex:r,node:n}))}),o.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(t)}function Qt(){return!0}function en(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:r=Jt,isEnabled:i=Qt,open:a}=e,l=d.useRef(!1),c=d.useRef(null),u=d.useRef(null),p=d.useRef(null),h=d.useRef(null),g=d.useRef(!1),f=d.useRef(null),R=se(t.ref,f),P=d.useRef(null);d.useEffect(()=>{!a||!f.current||(g.current=!o)},[o,a]),d.useEffect(()=>{if(!a||!f.current)return;const v=W(f.current);return f.current.contains(v.activeElement)||(f.current.hasAttribute("tabIndex")||f.current.setAttribute("tabIndex","-1"),g.current&&f.current.focus()),()=>{s||(p.current&&p.current.focus&&(l.current=!0,p.current.focus()),p.current=null)}},[a]),d.useEffect(()=>{if(!a||!f.current)return;const v=W(f.current),S=N=>{P.current=N,!(n||!i()||N.key!=="Tab")&&v.activeElement===f.current&&N.shiftKey&&(l.current=!0,u.current&&u.current.focus())},b=()=>{const N=f.current;if(N===null)return;if(!v.hasFocus()||!i()||l.current){l.current=!1;return}if(N.contains(v.activeElement)||n&&v.activeElement!==c.current&&v.activeElement!==u.current)return;if(v.activeElement!==h.current)h.current=null;else if(h.current!==null)return;if(!g.current)return;let w=[];if((v.activeElement===c.current||v.activeElement===u.current)&&(w=r(f.current)),w.length>0){var O,C;const j=!!((O=P.current)!=null&&O.shiftKey&&((C=P.current)==null?void 0:C.key)==="Tab"),F=w[0],_=w[w.length-1];typeof F!="string"&&typeof _!="string"&&(j?_.focus():F.focus())}else N.focus()};v.addEventListener("focusin",b),v.addEventListener("keydown",S,!0);const $=setInterval(()=>{v.activeElement&&v.activeElement.tagName==="BODY"&&b()},50);return()=>{clearInterval($),v.removeEventListener("focusin",b),v.removeEventListener("keydown",S,!0)}},[o,n,s,i,a,r]);const k=v=>{p.current===null&&(p.current=v.relatedTarget),g.current=!0,h.current=v.target;const S=t.props.onFocus;S&&S(v)},I=v=>{p.current===null&&(p.current=v.relatedTarget),g.current=!0};return T.jsxs(d.Fragment,{children:[T.jsx("div",{tabIndex:a?0:-1,onFocus:I,ref:c,"data-testid":"sentinelStart"}),d.cloneElement(t,{ref:R,onFocus:k}),T.jsx("div",{tabIndex:a?0:-1,onFocus:I,ref:u,"data-testid":"sentinelEnd"})]})}function tn(e){return typeof e=="function"?e():e}function nn(e){return e?e.props.hasOwnProperty("in"):!1}const on=new Kt;function rn(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,manager:s=on,closeAfterTransition:r=!1,onTransitionEnter:i,onTransitionExited:a,children:l,onClose:c,open:u,rootRef:p}=e,h=d.useRef({}),g=d.useRef(null),f=d.useRef(null),R=se(f,p),[P,k]=d.useState(!u),I=nn(l);let v=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(v=!1);const S=()=>W(g.current),b=()=>(h.current.modalRef=f.current,h.current.mount=g.current,h.current),$=()=>{s.mount(b(),{disableScrollLock:n}),f.current&&(f.current.scrollTop=0)},N=ke(()=>{const x=tn(t)||S().body;s.add(b(),x),f.current&&$()}),w=d.useCallback(()=>s.isTopModal(b()),[s]),O=ke(x=>{g.current=x,x&&(u&&w()?$():f.current&&oe(f.current,v))}),C=d.useCallback(()=>{s.remove(b(),v)},[v,s]);d.useEffect(()=>()=>{C()},[C]),d.useEffect(()=>{u?N():(!I||!r)&&C()},[u,C,I,r,N]);const j=x=>y=>{var D;(D=x.onKeyDown)==null||D.call(x,y),!(y.key!=="Escape"||y.which===229||!w())&&(o||(y.stopPropagation(),c&&c(y,"escapeKeyDown")))},F=x=>y=>{var D;(D=x.onClick)==null||D.call(x,y),y.target===y.currentTarget&&c&&c(y,"backdropClick")};return{getRootProps:(x={})=>{const y=ze(e);delete y.onTransitionEnter,delete y.onTransitionExited;const D=m({},y,x);return m({role:"presentation"},D,{onKeyDown:j(D),ref:R})},getBackdropProps:(x={})=>{const y=x;return m({"aria-hidden":!0},y,{onClick:F(y),open:u})},getTransitionProps:()=>{const x=()=>{k(!1),i&&i()},y=()=>{k(!0),a&&a(),r&&C()};return{onEnter:Pe(x,l==null?void 0:l.props.onEnter),onExited:Pe(y,l==null?void 0:l.props.onExited)}},rootRef:R,portalRef:O,isTopModal:w,exited:P,hasTransition:I}}function sn(e){return Z("MuiModal",e)}J("MuiModal",["root","hidden","backdrop"]);const an=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],ln=e=>{const{open:t,exited:o,classes:n}=e;return Q({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},sn,n)},cn=G("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>m({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),un=G(zt,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),dn=d.forwardRef(function(t,o){var n,s,r,i,a,l;const c=Y({name:"MuiModal",props:t}),{BackdropComponent:u=un,BackdropProps:p,className:h,closeAfterTransition:g=!1,children:f,container:R,component:P,components:k={},componentsProps:I={},disableAutoFocus:v=!1,disableEnforceFocus:S=!1,disableEscapeKeyDown:b=!1,disablePortal:$=!1,disableRestoreFocus:N=!1,disableScrollLock:w=!1,hideBackdrop:O=!1,keepMounted:C=!1,onBackdropClick:j,open:F,slotProps:_,slots:E}=c,M=L(c,an),x=m({},c,{closeAfterTransition:g,disableAutoFocus:v,disableEnforceFocus:S,disableEscapeKeyDown:b,disablePortal:$,disableRestoreFocus:N,disableScrollLock:w,hideBackdrop:O,keepMounted:C}),{getRootProps:y,getBackdropProps:D,getTransitionProps:Ve,portalRef:Ke,isTopModal:qe,exited:xe,hasTransition:Ee}=rn(m({},x,{rootRef:o})),ee=m({},x,{exited:xe}),H=ln(ee),ie={};if(f.props.tabIndex===void 0&&(ie.tabIndex="-1"),Ee){const{onEnter:V,onExited:ae}=Ve();ie.onEnter=V,ie.onExited=ae}const be=(n=(s=E==null?void 0:E.root)!=null?s:k.Root)!=null?n:cn,ye=(r=(i=E==null?void 0:E.backdrop)!=null?i:k.Backdrop)!=null?r:u,pe=(a=_==null?void 0:_.root)!=null?a:I.root,fe=(l=_==null?void 0:_.backdrop)!=null?l:I.backdrop,Xe=we({elementType:be,externalSlotProps:pe,externalForwardedProps:M,getSlotProps:y,additionalProps:{ref:o,as:P},ownerState:ee,className:B(h,pe==null?void 0:pe.className,H==null?void 0:H.root,!ee.open&&ee.exited&&(H==null?void 0:H.hidden))}),Ye=we({elementType:ye,externalSlotProps:fe,additionalProps:p,getSlotProps:V=>D(m({},V,{onClick:ae=>{j&&j(ae),V!=null&&V.onClick&&V.onClick(ae)}})),className:B(fe==null?void 0:fe.className,p==null?void 0:p.className,H==null?void 0:H.backdrop),ownerState:ee});return!C&&!F&&(!Ee||xe)?null:T.jsx(Mt,{ref:Ke,container:R,disablePortal:$,children:T.jsxs(be,m({},Xe,{children:[!O&&u?T.jsx(ye,m({},Ye)):null,T.jsx(en,{disableEnforceFocus:S,disableAutoFocus:v,disableRestoreFocus:N,isEnabled:qe,open:F,children:d.cloneElement(f,ie)})]}))})}),Wn=dn,pn=d.createContext(),Be=pn;function fn(e){return Z("MuiGrid",e)}const mn=[0,1,2,3,4,5,6,7,8,9,10],hn=["column-reverse","column","row-reverse","row"],vn=["nowrap","wrap-reverse","wrap"],te=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],re=J("MuiGrid",["root","container","item","zeroMinWidth",...mn.map(e=>`spacing-xs-${e}`),...hn.map(e=>`direction-xs-${e}`),...vn.map(e=>`wrap-xs-${e}`),...te.map(e=>`grid-xs-${e}`),...te.map(e=>`grid-sm-${e}`),...te.map(e=>`grid-md-${e}`),...te.map(e=>`grid-lg-${e}`),...te.map(e=>`grid-xl-${e}`)]),gn=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function X(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function xn({theme:e,ownerState:t}){let o;return e.breakpoints.keys.reduce((n,s)=>{let r={};if(t[s]&&(o=t[s]),!o)return n;if(o===!0)r={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(o==="auto")r={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const i=de({values:t.columns,breakpoints:e.breakpoints.values}),a=typeof i=="object"?i[s]:i;if(a==null)return n;const l=`${Math.round(o/a*1e8)/1e6}%`;let c={};if(t.container&&t.item&&t.columnSpacing!==0){const u=e.spacing(t.columnSpacing);if(u!=="0px"){const p=`calc(${l} + ${X(u)})`;c={flexBasis:p,maxWidth:p}}}r=m({flexBasis:l,flexGrow:0,maxWidth:l},c)}return e.breakpoints.values[s]===0?Object.assign(n,r):n[e.breakpoints.up(s)]=r,n},{})}function En({theme:e,ownerState:t}){const o=de({values:t.direction,breakpoints:e.breakpoints.values});return ve({theme:e},o,n=>{const s={flexDirection:n};return n.indexOf("column")===0&&(s[`& > .${re.item}`]={maxWidth:"none"}),s})}function He({breakpoints:e,values:t}){let o="";Object.keys(t).forEach(s=>{o===""&&t[s]!==0&&(o=s)});const n=Object.keys(e).sort((s,r)=>e[s]-e[r]);return n.slice(0,n.indexOf(o))}function bn({theme:e,ownerState:t}){const{container:o,rowSpacing:n}=t;let s={};if(o&&n!==0){const r=de({values:n,breakpoints:e.breakpoints.values});let i;typeof r=="object"&&(i=He({breakpoints:e.breakpoints.values,values:r})),s=ve({theme:e},r,(a,l)=>{var c;const u=e.spacing(a);return u!=="0px"?{marginTop:`-${X(u)}`,[`& > .${re.item}`]:{paddingTop:X(u)}}:(c=i)!=null&&c.includes(l)?{}:{marginTop:0,[`& > .${re.item}`]:{paddingTop:0}}})}return s}function yn({theme:e,ownerState:t}){const{container:o,columnSpacing:n}=t;let s={};if(o&&n!==0){const r=de({values:n,breakpoints:e.breakpoints.values});let i;typeof r=="object"&&(i=He({breakpoints:e.breakpoints.values,values:r})),s=ve({theme:e},r,(a,l)=>{var c;const u=e.spacing(a);return u!=="0px"?{width:`calc(100% + ${X(u)})`,marginLeft:`-${X(u)}`,[`& > .${re.item}`]:{paddingLeft:X(u)}}:(c=i)!=null&&c.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${re.item}`]:{paddingLeft:0}}})}return s}function Sn(e,t,o={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[o[`spacing-xs-${String(e)}`]];const n=[];return t.forEach(s=>{const r=e[s];Number(r)>0&&n.push(o[`spacing-${s}-${String(r)}`])}),n}const Tn=G("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{container:n,direction:s,item:r,spacing:i,wrap:a,zeroMinWidth:l,breakpoints:c}=o;let u=[];n&&(u=Sn(i,c,t));const p=[];return c.forEach(h=>{const g=o[h];g&&p.push(t[`grid-${h}-${String(g)}`])}),[t.root,n&&t.container,r&&t.item,l&&t.zeroMinWidth,...u,s!=="row"&&t[`direction-xs-${String(s)}`],a!=="wrap"&&t[`wrap-xs-${String(a)}`],...p]}})(({ownerState:e})=>m({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),En,bn,yn,xn);function Rn(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const o=[];return t.forEach(n=>{const s=e[n];if(Number(s)>0){const r=`spacing-${n}-${String(s)}`;o.push(r)}}),o}const kn=e=>{const{classes:t,container:o,direction:n,item:s,spacing:r,wrap:i,zeroMinWidth:a,breakpoints:l}=e;let c=[];o&&(c=Rn(r,l));const u=[];l.forEach(h=>{const g=e[h];g&&u.push(`grid-${h}-${String(g)}`)});const p={root:["root",o&&"container",s&&"item",a&&"zeroMinWidth",...c,n!=="row"&&`direction-xs-${String(n)}`,i!=="wrap"&&`wrap-xs-${String(i)}`,...u]};return Q(p,fn,t)},Pn=d.forwardRef(function(t,o){const n=Y({props:t,name:"MuiGrid"}),{breakpoints:s}=Ue(),r=rt(n),{className:i,columns:a,columnSpacing:l,component:c="div",container:u=!1,direction:p="row",item:h=!1,rowSpacing:g,spacing:f=0,wrap:R="wrap",zeroMinWidth:P=!1}=r,k=L(r,gn),I=g||f,v=l||f,S=d.useContext(Be),b=u?a||12:S,$={},N=m({},k);s.keys.forEach(C=>{k[C]!=null&&($[C]=k[C],delete N[C])});const w=m({},r,{columns:b,container:u,direction:p,item:h,rowSpacing:I,columnSpacing:v,wrap:R,zeroMinWidth:P,spacing:f},$,{breakpoints:s.keys}),O=kn(w);return T.jsx(Be.Provider,{value:b,children:T.jsx(Tn,m({ownerState:w,className:B(O.root,i),as:c,ref:o},N))})}),zn=Pn,Nn=d.createContext({}),Cn=Nn;function $n(e){return Z("MuiList",e)}J("MuiList",["root","padding","dense","subheader"]);const wn=["children","className","component","dense","disablePadding","subheader"],In=e=>{const{classes:t,disablePadding:o,dense:n,subheader:s}=e;return Q({root:["root",!o&&"padding",n&&"dense",s&&"subheader"]},$n,t)},Mn=G("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})(({ownerState:e})=>m({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),On=d.forwardRef(function(t,o){const n=Y({props:t,name:"MuiList"}),{children:s,className:r,component:i="ul",dense:a=!1,disablePadding:l=!1,subheader:c}=n,u=L(n,wn),p=d.useMemo(()=>({dense:a}),[a]),h=m({},n,{component:i,dense:a,disablePadding:l}),g=In(h);return T.jsx(Cn.Provider,{value:p,children:T.jsxs(Mn,m({as:i,className:B(g.root,r),ref:o,ownerState:h},u,{children:[c,s]}))})}),Un=On;export{zt as B,Ft as F,zn as G,Cn as L,Wn as M,jn as P,Tt as T,Fn as a,Un as b,An as c,Ln as d,ht as e,ft as f,_e as g,W as h,Bn as i,Mt as j,we as k,Pe as l,mt as m,pt as n,ge as o,ct as p,dt as q,Rt as r,Ue as u};
