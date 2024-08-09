import{r as h,j as e}from"./index-1b8baf23.js";import{P as M}from"./PageContainer-bde9da36.js";import{B as w,H as I}from"./Breadcrumb-9ad5e22f.js";import{s as o,B as g,T as k}from"./Box-ce306774.js";import{T as C,a as N,b as U,c as B,d as S}from"./TableRow-4e2fdbc6.js";import{T as L}from"./TableContainer-a26e21e6.js";import{P as H,G as t}from"./List-3dbe6701.js";import{S as u}from"./Select-5390c62a.js";import{M as a}from"./MenuItem-2eca2ea5.js";import{T as b}from"./Tooltip-13ba6fb1.js";import{I as j}from"./IconButton-9677aa25.js";import{c as T}from"./createReactComponent-86a80785.js";import{I as A}from"./IconEye-b937c3ff.js";import{T as R}from"./TablePagination-2e4fe9dc.js";import{B as D}from"./Button-66d55190.js";import{F as y}from"./FormControl-bd4cab36.js";import{I as P}from"./InputLabel-265c50d2.js";import{I as E}from"./IconFileArrowRight-d6d4a953.js";import"./IconLayoutDashboard-55f0854a.js";import"./dividerClasses-9de153bf.js";import"./Popper-5e9bdc31.js";import"./KeyboardArrowRight-dce50861.js";import"./Toolbar-3499a6c2.js";var F=T("plug-connected","IconPlugConnected",[["path",{d:"M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z",key:"svg-0"}],["path",{d:"M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z",key:"svg-1"}],["path",{d:"M3 21l2.5 -2.5",key:"svg-2"}],["path",{d:"M18.5 5.5l2.5 -2.5",key:"svg-3"}],["path",{d:"M10 11l-2 2",key:"svg-4"}],["path",{d:"M13 14l-2 2",key:"svg-5"}]]),V=T("refresh","IconRefresh",[["path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4",key:"svg-0"}],["path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",key:"svg-1"}]]);const r=o(C)(({theme:i})=>({border:"1px solid #ddd",padding:"8px"})),n=o(C)(({theme:i})=>({border:"1px solid #ddd",backgroundColor:"#285a9e",color:"white",fontWeight:"bold",padding:"8px"})),Y=o(N)(({theme:i})=>({"&:nth-of-type(even)":{backgroundColor:"#f0f5ff"},"&:nth-of-type(odd)":{backgroundColor:"white"}})),Z=o(r)({width:"200px"}),J=o(r)({width:"150px"}),z=o(r)({width:"200px"});o(r)({width:"150px"});const W=o(r)({width:"150px"}),f=[{id:1,machineName:"Machine 1",businessUnit:"Unit A",vendorCentralName:"Vendor X",processName:"Process Y",transName:"Trans Z",modifiedDateTime:"2024-07-22 12:34",jobPriority:"High",botProcess:"Process 1",action:"edit",history:"view"},{id:2,machineName:"Machine 2",businessUnit:"Unit B",vendorCentralName:"Vendor Y",processName:"Process Z",transName:"Trans Z1",modifiedDateTime:"2024-02-22 01:05",jobPriority:"Medium",botProcess:"Process 2",action:"edit",history:"view"},{id:3,machineName:"Machine 3",businessUnit:"Unit A",vendorCentralName:"Vendor 4",processName:"Process Y2",transName:"Trans Z7",modifiedDateTime:"2024-04-04 05:38",jobPriority:"Low",botProcess:"Process 3",action:"edit",history:"view"},{id:1,machineName:"Machine 4",businessUnit:"Unit AB",vendorCentralName:"Vendor 1",processName:"Process YY",transName:"Trans G",modifiedDateTime:"2023-12-22 10:14",jobPriority:"High",botProcess:"Process 12",action:"edit",history:"view"},{id:1,machineName:"Machine 5",businessUnit:"Unit AC",vendorCentralName:"Vendor XY",processName:"Process YA",transName:"Trans Z3",modifiedDateTime:"2024-04-22 12:00",jobPriority:"High",botProcess:"Process 1",action:"edit",history:"view"},{id:1,machineName:"Machine 6",businessUnit:"Unit AZ",vendorCentralName:"Vendor XA",processName:"Process AY",transName:"Trans HZ",modifiedDateTime:"2024-07-22 08:44",jobPriority:"Low",botProcess:"Process 22",action:"edit",history:"view"},{id:1,machineName:"Machine 7",businessUnit:"Unit HG",vendorCentralName:"Vendor OP",processName:"Process OY",transName:"Trans KZ",modifiedDateTime:"2024-07-22 11:11",jobPriority:"Medium",botProcess:"Process 0",action:"edit",history:"view"}],G=()=>{const[i,d]=h.useState(0),[c,m]=h.useState(15),x=(s,l)=>{d(l)},p=s=>{m(parseInt(s.target.value,10)),d(0)};return e.jsxs(g,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(L,{component:H,sx:{maxWidth:"100%",overflowX:"auto"},children:e.jsxs(U,{"aria-label":"machine log table",children:[e.jsx(B,{children:e.jsxs(N,{children:[e.jsx(n,{sx:{width:"200px"},children:"Machine Name"}),e.jsx(n,{sx:{width:"150px"},children:"Business Unit"}),e.jsx(n,{sx:{width:"230px"},children:"Vendor Central Name"}),e.jsx(n,{sx:{width:"150px"},children:"Process Name"}),e.jsx(n,{sx:{width:"150px"},children:"Trans Name"}),e.jsx(n,{sx:{width:"230px"},children:"Modified Date & Time"}),e.jsx(n,{sx:{width:"150px"},children:"Job Priority"}),e.jsx(n,{sx:{width:"150px"},children:"Bot Process"}),e.jsx(n,{sx:{width:"150px"},children:"Action"}),e.jsx(n,{sx:{width:"100px"},children:"History"})]})}),e.jsx(S,{children:f.slice(i*c,i*c+c).map(s=>e.jsxs(Y,{children:[e.jsx(Z,{children:s.machineName}),e.jsx(J,{children:s.businessUnit}),e.jsx(z,{children:s.vendorCentralName}),e.jsx(r,{children:s.processName}),e.jsx(r,{children:s.transName}),e.jsx(r,{children:s.modifiedDateTime}),e.jsx(r,{children:e.jsxs(u,{value:s.jobPriority,onChange:l=>console.log(l.target.value),displayEmpty:!0,inputProps:{"aria-label":"Job Priority"},sx:{width:"120px"},children:[e.jsx(a,{value:"High",children:"High"}),e.jsx(a,{value:"Medium",children:"Medium"}),e.jsx(a,{value:"Low",children:"Low"})]})}),e.jsx(r,{children:s.botProcess}),e.jsxs(W,{children:[e.jsx(b,{title:"Retry",children:e.jsx(j,{children:e.jsx(V,{})})}),e.jsx(b,{title:"Connect",children:e.jsx(j,{children:e.jsx(F,{})})})]}),e.jsx(r,{children:e.jsx(j,{children:e.jsx(A,{})})})]},s.id))})]})}),e.jsx(g,{sx:{p:2,display:"flex",justifyContent:"flex-end",width:"100%"},children:e.jsx(R,{rowsPerPageOptions:[15,30,50],component:"div",count:f.length,rowsPerPage:c,page:i,onPageChange:x,onRowsPerPageChange:p})})]})},X=o(D)(({theme:i})=>({backgroundColor:i.palette.primary.contrast,border:"1px solid",borderColor:i.palette.primary.contrast,color:i.palette.primary.contrastText,fontSize:"15px",padding:"8px 16px",fontWeight:"600",transition:"all ease 0.3s",margin:"0 8px",display:"flex",alignItems:"center","&:hover":{backgroundColor:i.palette.primary.main,color:i.palette.primary.contrastText,borderColor:i.palette.primary.main},"& .btn-indicator":{width:"1px",backgroundColor:i.palette.primary.main,alignSelf:"stretch",marginLeft:"4px"}})),v=o(g)(({theme:i})=>({display:"flex",alignItems:"center",marginRight:"8px"})),ue=()=>{const[i,d]=h.useState(""),[c,m]=h.useState(""),x=l=>{d(l.target.value)},p=l=>{m(l.target.value)},s=()=>{console.log("Export button clicked")};return e.jsx(M,{title:"Machine Log",children:e.jsxs(t,{container:!0,spacing:3,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(w,{titles:["Machine Log"]})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(I,{title:"Machine Logs"})}),e.jsxs(t,{container:!0,item:!0,xs:12,alignItems:"center",justifyContent:"space-between",children:[e.jsx(t,{item:!0,xs:6,children:e.jsx(k,{variant:"h3",children:"Manage Machine Logs"})}),e.jsxs(t,{item:!0,container:!0,xs:6,alignItems:"center",justifyContent:"flex-end",spacing:1,children:[e.jsx(t,{item:!0,children:e.jsxs(y,{variant:"outlined",size:"small",sx:{minWidth:160,mr:1},children:[e.jsx(P,{id:"machine-name-label",children:"Machine Name"}),e.jsxs(u,{labelId:"machine-name-label",value:i,onChange:x,label:"Machine Name",sx:{backgroundColor:"#ECF2FF"},children:[e.jsx(a,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(a,{value:"machine1",children:"Machine 1"}),e.jsx(a,{value:"machine2",children:"Machine 2"})]})]})}),e.jsx(t,{item:!0,children:e.jsxs(y,{variant:"outlined",size:"small",sx:{minWidth:140,mr:1},children:[e.jsx(P,{id:"job-priority-label",children:"Job Priority"}),e.jsxs(u,{labelId:"job-priority-label",value:c,onChange:p,label:"Job Priority",sx:{backgroundColor:"#ECF2FF"},children:[e.jsx(a,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(a,{value:"high",children:"High"}),e.jsx(a,{value:"medium",children:"Medium"}),e.jsx(a,{value:"low",children:"Low"})]})]})}),e.jsx(t,{item:!0,children:e.jsxs(X,{onClick:s,children:[e.jsx(v,{children:"Export"}),e.jsx("span",{className:"btn-indicator"}),e.jsx(v,{children:e.jsx(E,{size:"19",style:{margin:"auto",verticalAlign:"middle",marginLeft:"5px"}})})]})})]})]}),e.jsx(t,{item:!0,xs:12,children:e.jsx(G,{})})]})})};export{ue as default};
