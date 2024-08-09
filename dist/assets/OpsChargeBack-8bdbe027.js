import{m as x,j as e,r as v,i as U}from"./index-1b8baf23.js";import{P as C}from"./PageContainer-bde9da36.js";import{B as J,H as Z}from"./Breadcrumb-9ad5e22f.js";import{D as h}from"./DashboardCard-8fd04093.js";import"./react-apexcharts.min-c6c76a6c.js";/* empty css                  */import{B as r,s as d,T as c}from"./Box-ce306774.js";import{c as D}from"./createReactComponent-86a80785.js";import{S as j,I as b}from"./Select-5390c62a.js";import{M as y}from"./MenuItem-2eca2ea5.js";import{L as I}from"./ListItemText-987aa77e.js";import{c as H,T as u,a as f,b as W,d as E}from"./TableRow-4e2fdbc6.js";import{u as N,G as a}from"./List-3dbe6701.js";import{X as A}from"./index.es-1df0ccdc.js";/* empty css                   */import{T as X}from"./Tabs-97f8703a.js";import{a as Y,T as q,b as R,I as K,c as ee}from"./TabPanel-b80cb074.js";import{B as z}from"./Button-66d55190.js";import{S as te}from"./Stack-7a1b4778.js";import{I as se}from"./IconFileArrowLeft-20ac016f.js";import{I as ae}from"./IconFileArrowRight-d6d4a953.js";import{T as ne}from"./TextField-f614c0ea.js";import{I as re,a as ie}from"./DonutChart-b3c6cdc7.js";import{e as Q}from"./eventEmitter-d2c8b369.js";import{I as oe}from"./IconMessageExclamation-c45f0c1a.js";import"./IconLayoutDashboard-55f0854a.js";import"./Card-d73224e8.js";import"./CardContent-3948b617.js";import"./dividerClasses-9de153bf.js";import"./KeyboardArrowRight-dce50861.js";import"./styled-b4855039.js";import"./useThemeProps-2d603fd9.js";import"./FormControl-bd4cab36.js";import"./InputLabel-265c50d2.js";var P=D("brand-redux","IconBrandRedux",[["path",{d:"M16.54 7c-.805 -2.365 -2.536 -4 -4.54 -4c-2.774 0 -5.023 2.632 -5.023 6.496c0 1.956 1.582 4.727 2.512 6",key:"svg-0"}],["path",{d:"M4.711 11.979c-1.656 1.877 -2.214 4.185 -1.211 5.911c1.387 2.39 5.138 2.831 8.501 .9c1.703 -.979 2.875 -3.362 3.516 -4.798",key:"svg-1"}],["path",{d:"M15.014 19.99c2.511 0 4.523 -.438 5.487 -2.1c1.387 -2.39 -.215 -5.893 -3.579 -7.824c-1.702 -.979 -4.357 -1.235 -5.927 -1.07",key:"svg-2"}],["path",{d:"M10.493 9.862c.48 .276 1.095 .112 1.372 -.366a1 1 0 0 0 -.367 -1.365a1.007 1.007 0 0 0 -1.373 .366a1 1 0 0 0 .368 1.365z",key:"svg-3"}],["path",{d:"M9.5 15.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M15.5 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]]),G=D("calendar-stats","IconCalendarStats",[["path",{d:"M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4",key:"svg-0"}],["path",{d:"M18 14v4h4",key:"svg-1"}],["path",{d:"M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-2"}],["path",{d:"M15 3v4",key:"svg-3"}],["path",{d:"M7 3v4",key:"svg-4"}],["path",{d:"M3 11h16",key:"svg-5"}]]),ce=D("qrcode","IconQrcode",[["path",{d:"M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",key:"svg-0"}],["path",{d:"M7 17l0 .01",key:"svg-1"}],["path",{d:"M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",key:"svg-2"}],["path",{d:"M7 7l0 .01",key:"svg-3"}],["path",{d:"M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",key:"svg-4"}],["path",{d:"M17 7l0 .01",key:"svg-5"}],["path",{d:"M14 14l3 0",key:"svg-6"}],["path",{d:"M20 14l0 .01",key:"svg-7"}],["path",{d:"M14 14l0 3",key:"svg-8"}],["path",{d:"M14 20l3 0",key:"svg-9"}],["path",{d:"M17 17l3 0",key:"svg-10"}],["path",{d:"M20 17l0 3",key:"svg-11"}]]);const le=48,de=8,pe={PaperProps:{style:{maxHeight:le*4.5+de,width:250}}},k=["January","February","March","April","May","June","July","August","September","October","November","December"],L=()=>{const[s,o]=x.useState([k[0]]),n=t=>{const{target:{value:i}}=t;o(typeof i=="string"?i.split(","):i)};return e.jsxs(r,{className:"accountStyle",children:[e.jsx(r,{className:"accountStyle_icon",children:e.jsx(G,{style:{marginTop:"-45px",marginLeft:"-80px"}})}),e.jsx(r,{children:e.jsx(j,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",value:s,onChange:n,className:"select-search",input:e.jsx(b,{label:"Tag",placeholder:"Select Account"}),renderValue:t=>t.join(", "),MenuProps:pe,children:k.map(t=>e.jsx(y,{value:t,className:"select-search",children:e.jsx(I,{primary:t,className:"search-list"})},t))})})]})},ue=48,me=8,he={PaperProps:{style:{maxHeight:ue*4.5+me,width:250}}},$=["2020","2021","2022","2023","2024"],_=()=>{const[s,o]=x.useState([$[0]]),n=t=>{const{target:{value:i}}=t;o(typeof i=="string"?i.split(","):i)};return e.jsxs(r,{className:"accountStyle",children:[e.jsx(r,{className:"accountStyle_icon",children:e.jsx(G,{style:{marginTop:"-45px",marginLeft:"-80px"}})}),e.jsx(r,{children:e.jsx(j,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",value:s,onChange:n,className:"select-search",input:e.jsx(b,{label:"Tag",className:"select-currency"}),renderValue:t=>t.join(", "),MenuProps:he,children:$.map(t=>e.jsx(y,{value:t,className:"select-search",children:e.jsx(I,{primary:t,className:"search-list"})},t))})})]})},xe=48,ge=8,je={PaperProps:{style:{maxHeight:xe*4.5+ge,width:250}}},M=["QTR 1","QTR 2","QTR 3","QTR 4"],be=()=>{const[s,o]=x.useState([M[0]]),n=t=>{const{target:{value:i}}=t;o(typeof i=="string"?i.split(","):i)};return e.jsxs(r,{className:"accountStyle",children:[e.jsx(r,{className:"accountStyle_icon",children:e.jsx(ce,{style:{marginTop:"-45px",marginLeft:"-80px"}})}),e.jsx(r,{children:e.jsx(j,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",value:s,onChange:n,className:"select-search",input:e.jsx(b,{label:"Tag",placeholder:"Select Account"}),renderValue:t=>t.join(", "),MenuProps:je,children:M.map(t=>e.jsx(y,{value:t,className:"select-search",children:e.jsx(I,{primary:t,className:"search-list"})},t))})})]})},ye=d(H)(({theme:s})=>({backgroundColor:s.palette.primary.light})),g=d(u)(({theme:s})=>({color:"white",fontWeight:"600",fontSize:"12px",whiteSpace:"nowrap"})),Ie=d(f)(({theme:s,index:o})=>({borderBottom:"1px solid #eee",backgroundColor:o%2===0?s.palette.secondary.contrastText:s.palette.primary.extraLight})),Te=()=>{const s=N(),o=[{Subtype:"ASN Accuracy",TotalDeduction:"362356.00",TotalDisputed:"34250.10",DisputeApproved:"30230.46",DisputeDenied:"12658.20",PendingDisputed:"520",color:"#1c3c70"},{Subtype:"No carton/package content label",TotalDeduction:"362356.00",TotalDisputed:"34250.10",DisputeApproved:"30230.46",DisputeDenied:"12658.20",PendingDisputed:"520",color:"#1c3c70"},{Subtype:"Overage PO units",TotalDeduction:"50000.00",TotalDisputed:"36000.00",DisputeApproved:"23852.90",DisputeDenied:"3800.52",PendingDisputed:"850",color:"#1c3c70"},{Subtype:"Oversized Carton",TotalDeduction:"30323.25",TotalDisputed:"29230.20",DisputeApproved:"26450.80",DisputeDenied:"1123.20",PendingDisputed:"3210",color:"#1c3c70"},{Subtype:"Pickup Accuracy",TotalDeduction:"28687.78",TotalDisputed:"25148.30",DisputeApproved:"25468.00",DisputeDenied:"21452.00",PendingDisputed:"980",color:"#1c3c70"},{Subtype:"PO On-Time Accuracy",TotalDeduction:"362356.00",TotalDisputed:"34250.10",DisputeApproved:"30230.46",DisputeDenied:"12658.20",PendingDisputed:"520",color:"#1c3c70"},{Subtype:"Prep-Bagging",TotalDeduction:"50000.00",TotalDisputed:"36000.00",DisputeApproved:"23852.90",DisputeDenied:"3800.52",PendingDisputed:"850",color:"#1c3c70"},{Subtype:"Prep-Barcode labeling",TotalDeduction:"30323.25",TotalDisputed:"29230.20",DisputeApproved:"26450.80",DisputeDenied:"1123.20",PendingDisputed:"3210",color:"#1c3c70"},{Subtype:"Prep-Set creation",TotalDeduction:"28687.78",TotalDisputed:"25148.30",DisputeApproved:"25468.00",DisputeDenied:"21452.00",PendingDisputed:"980",color:"#1c3c70"},{Subtype:"Rejected PO Rate",TotalDeduction:"30323.25",TotalDisputed:"29230.20",DisputeApproved:"26450.80",DisputeDenied:"1123.20",PendingDisputed:"3210",color:"#1c3c70"},{Subtype:"Unconfirmed PO units",TotalDeduction:"28687.78",TotalDisputed:"25148.30",DisputeApproved:"25468.00",DisputeDenied:"21452.00",PendingDisputed:"980",color:"#1c3c70"}];return e.jsxs(h,{children:[e.jsxs(a,{container:!0,spacing:2,mb:3,alignItems:"center",children:[e.jsx(a,{item:!0,xs:12,lg:6,children:e.jsx(c,{variant:"h3",children:"Infraction Split"})}),e.jsx(a,{item:!0,xs:12,lg:3,children:e.jsx(L,{})}),e.jsx(a,{item:!0,xs:12,lg:3,children:e.jsx(_,{})})]}),e.jsx(r,{sx:{overflow:"auto",width:{xs:"280px",sm:"auto"}},children:e.jsxs(W,{"aria-label":"simple table",sx:{whiteSpace:"wrap"},children:[e.jsx(ye,{theme:s,children:e.jsxs(f,{children:[e.jsx(g,{fontWeight:600,children:"Infraction/Issue Type"}),e.jsx(g,{variant:"subtitle2",fontWeight:600,children:"Total Deduction"}),e.jsx(g,{variant:"subtitle2",fontWeight:600,children:"Total Disputed"}),e.jsx(g,{variant:"subtitle2",fontWeight:600,children:"Dispute Approved"}),e.jsx(g,{variant:"subtitle2",fontWeight:600,children:"Dispute Denied"}),e.jsx(g,{variant:"subtitle2",fontWeight:600,children:"Pending Disputed Line Items"})]})}),e.jsx(E,{children:o.map((n,t)=>e.jsxs(Ie,{index:t,theme:s,children:[e.jsx(u,{index:t,style:{color:n.color,width:"165px"},children:e.jsx(c,{style:{fontSize:"12px",fontWeight:"500"},variant:"tableData",children:n.Subtype})}),e.jsx(u,{children:e.jsxs(c,{variant:"tableData",children:["$",new Intl.NumberFormat("en-US",{minimumFractionDigits:2}).format(n.TotalDeduction)]})}),e.jsx(u,{children:e.jsxs(c,{variant:"tableData",children:["$",new Intl.NumberFormat("en-US",{minimumFractionDigits:2}).format(n.TotalDisputed)]})}),e.jsx(u,{children:e.jsxs(c,{variant:"tableData",children:["$",new Intl.NumberFormat("en-US",{minimumFractionDigits:2}).format(n.DisputeApproved)]})}),e.jsx(u,{children:e.jsxs(c,{variant:"tableData",children:["$",new Intl.NumberFormat("en-US",{minimumFractionDigits:2}).format(n.DisputeDenied)]})}),e.jsx(u,{children:e.jsx(c,{variant:"tableData",children:n.PendingDisputed})})]},t))})]})})]})},Se=d(H)(({theme:s})=>({backgroundColor:s.palette.primary.light})),T=d(u)(({theme:s})=>({color:"white",fontWeight:"600",fontSize:"12px",whiteSpace:"nowrap"})),fe=d(f)(({theme:s,index:o})=>({borderBottom:"1px solid #eee",backgroundColor:o%2===0?s.palette.secondary.contrastText:s.palette.primary.extraLight})),ve=()=>{const s=N(),o=[{Subtype:"ASN Accuracy",QTR1:"3725.45",QTR2:"2610.47",QTR3:"13813",QTR4:"0.00",color:"#1c3c70"},{Subtype:"No carton/package content label",QTR1:"0.00",QTR2:"15020.00",QTR3:"0.00",QTR4:"0.00",color:"#1c3c70"},{Subtype:"Overage PO units",QTR1:"10825.50",QTR2:"678.57",QTR3:"0.00",QTR4:"0.00",color:"#1c3c70"},{Subtype:"Oversized Carton",QTR1:"50.00",QTR2:"0.00",QTR3:"0.00",QTR4:"0.00",color:"#1c3c70"},{Subtype:"Pickup Accuracy",QTR1:"2900.00",QTR2:"2000.00",QTR3:"1000.00",QTR4:"0.00",color:"#1c3c70"},{Subtype:"PO On-Time Accuracy",QTR1:"75210.86",QTR2:"54265.64",QTR3:"37358.21",QTR4:"0.00",color:"#1c3c70"},{Subtype:"Prep-Bagging",QTR1:"0.85",QTR2:"0.00",QTR3:"0.00",QTR4:"0.00",color:"#1c3c70"},{Subtype:"Prep-Barcode labeling",QTR1:"113.16",QTR2:"0.00",QTR3:"0.00",QTR4:"0.00",color:"#1c3c70"},{Subtype:"Prep-Set creation",QTR1:"8.24",QTR2:"0.00",QTR3:"0.00",QTR4:"0.00",color:"#1c3c70"},{Subtype:"Rejected PO Rate",QTR1:"25205.19",QTR2:"10630.56",QTR3:"0.00",QTR4:"0.00",color:"#1c3c70"},{Subtype:"Unconfirmed PO units",QTR1:"518.03",QTR2:"809.37",QTR3:"572.21",QTR4:"0.00",color:"#1c3c70"}];return e.jsxs(h,{children:[e.jsxs(a,{container:!0,spacing:2,mb:3,alignItems:"center",children:[e.jsx(a,{item:!0,xs:12,lg:6,children:e.jsx(c,{variant:"h3",children:"Infraction Type"})}),e.jsx(a,{item:!0,xs:12,lg:3,children:e.jsx(_,{})}),e.jsx(a,{item:!0,xs:12,lg:3,children:e.jsx(be,{})})]}),e.jsx(r,{sx:{overflow:"auto",width:{xs:"280px",sm:"auto"}},children:e.jsxs(W,{"aria-label":"simple table",sx:{whiteSpace:"wrap"},children:[e.jsx(Se,{theme:s,children:e.jsxs(f,{children:[e.jsx(T,{variant:"subtitle2",fontWeight:600,children:"Infraction/Issue Type"}),e.jsx(T,{variant:"subtitle2",fontWeight:600,children:"QTR 1"}),e.jsx(T,{variant:"subtitle2",fontWeight:600,children:"QTR 2"}),e.jsx(T,{variant:"subtitle2",fontWeight:600,children:"QTR 3"}),e.jsx(T,{variant:"subtitle2",fontWeight:600,children:"QTR 4"})]})}),e.jsx(E,{children:o.map((n,t)=>e.jsxs(fe,{index:t,theme:s,children:[e.jsx(u,{index:t,style:{color:n.color,width:"165px"},children:e.jsx(c,{style:{fontSize:"12px",fontWeight:"500"},variant:"tableData",children:n.Subtype})}),e.jsx(u,{children:e.jsxs(c,{variant:"tableData",children:["$",new Intl.NumberFormat("en-US",{minimumFractionDigits:2}).format(n.QTR1)]})}),e.jsx(u,{children:e.jsxs(c,{variant:"tableData",children:["$",new Intl.NumberFormat("en-US",{minimumFractionDigits:2}).format(n.QTR2)]})}),e.jsx(u,{children:e.jsxs(c,{variant:"tableData",children:["$",new Intl.NumberFormat("en-US",{minimumFractionDigits:2}).format(n.QTR3)]})}),e.jsx(u,{children:e.jsxs(c,{variant:"tableData",children:["$",new Intl.NumberFormat("en-US",{minimumFractionDigits:2}).format(n.QTR4)]})})]},t))})]})})]})},B=d(X)(({theme:s})=>({fontWeight:"600",fontSize:"16px",padding:0})),De=d(Y)(({theme:s})=>({".MuiTabs-flexContainer":{columnGap:"15px"}})),w=d(z)(({theme:s})=>({backgroundColor:s.palette.primary.contrast,border:"1px solid",borderColor:s.palette.primary.contrast,color:s.palette.primary.contrastText,fontSize:"15px",padding:"0",fontWeight:"600",transition:"all ease 0.3s","&:hover":{backgroundColor:s.palette.primary.main,color:s.palette.primary.contrastText,borderColor:s.palette.primary.main},"& .btn-indicator":{width:"1px",backgroundColor:s.palette.primary.main,alignSelf:"stretch",marginLeft:"4px"}})),S=d(r)(({theme:s})=>({padding:"5px 12px",fontWeight:"600"})),Ne=()=>{const[s,o]=v.useState("1"),n=N(),t=(l,p)=>{o(p)},i=[{name:"ASIN",selector:l=>l.ASIN,sortable:!0,cell:l=>e.jsx(r,{children:e.jsx(c,{variant:"body1",fontWeight:"500",fontSize:"14px",style:{color:n.palette.secondary.main},children:l.ASIN})})},{name:"Issue",selector:l=>l.Issue,sortable:!0,cell:l=>e.jsx(r,{children:e.jsx(c,{variant:"body1",fontWeight:"500",fontSize:"14px",style:{color:n.palette.accent.main},children:l.Issue})})},{name:"Sub Issue",selector:l=>l.SubIssue,sortable:!0,cell:l=>e.jsx(r,{children:e.jsx(c,{variant:"body1",fontWeight:"500",fontSize:"14px",style:{color:n.palette.secondary.main},children:l.SubIssue})})},{name:"Infraction",selector:l=>l.Infraction,sortable:!0,cell:l=>e.jsx(r,{children:e.jsx(c,{variant:"body1",fontWeight:"500",fontSize:"14px",style:{color:n.palette.success.main},children:l.Infraction})})}],m=[{ASIN:"B0787FVC2Q",Issue:"Prep-Bagging",SubIssue:"asn_otnc",Infraction:"$ 625.60"},{ASIN:"B0787FVB1Q",Issue:"Prep-Set Creation",SubIssue:"asn_otnc",Infraction:"$ 255.60"},{ASIN:"B0787FVB2Z",Issue:"ASN Accuracy",SubIssue:"asn_imia_invalid_or_missing_arn",Infraction:"$ 605.60"},{ASIN:"B0754GVC2Q",Issue:"Overage PO Units",SubIssue:"asn_otnc",Infraction:"$ 255.60"},{ASIN:"Z9787FVC2Q",Issue:"Prep-Bagging",SubIssue:"asn_imia_invalid_or_missing_arn",Infraction:"$ 705.60"},{ASIN:"G0327FVC2Q",Issue:"Overage PO Units",SubIssue:"asn_imia_invalid_or_missing_arn",Infraction:"$ 425.60"},{ASIN:"B0787GJH2Q",Issue:"Prep-Set Creation",SubIssue:"asn_otnc",Infraction:"$ 605.60"},{ASIN:"B0788LOC2Q",Issue:"Prep-Set Creation",SubIssue:"asn_imia_invalid_or_missing_arn",Infraction:"$ 825.60"},{ASIN:"B0787FVC6O",Issue:"ASN Accuracy",SubIssue:"asn_otnc",Infraction:"$ 905.60"},{ASIN:"B0787FVT2Q",Issue:"Overage PO Units",SubIssue:"asn_imia_invalid_or_missing_arn",Infraction:"$ 325.14"},{ASIN:"J0787GVC2Z",Issue:"Prep-Bagging",SubIssue:"asn_otnc",Infraction:"$ 488.88"},{ASIN:"B0787FVC2Q",Issue:"Prep-Bagging",SubIssue:"asn_otnc",Infraction:"$ 625.60"},{ASIN:"B0514FVC2Q",Issue:"Prep-Bagging",SubIssue:"asn_otnc",Infraction:"$ 115.60"},{ASIN:"B0787FVC2Q",Issue:"Dispute - Needs More Info",SubIssue:"asn_imia_invalid_or_missing_arn",Infraction:"$ 265.60"},{ASIN:"B0787FVC9P",Issue:"Prep-Bagging",SubIssue:"asn_otnc",Infraction:"$ 625.60"},{ASIN:"B0787FVC2Q",Issue:"Overage PO Units",SubIssue:"asn_otnc",Infraction:"$ 589.90"},{ASIN:"A0587FVC2Z",Issue:"ASN Accuracy",SubIssue:"asn_imia_invalid_or_missing_arn",Infraction:"$ 666.60"},{ASIN:"B0787FBC2Q",Issue:"ASN Accuracy",SubIssue:"asn_otnc",Infraction:"$ 544.60"},{ASIN:"C0787GVC2Q",Issue:"Prep-Set Creation",SubIssue:"asn_imia_invalid_or_missing_arn",Infraction:"$ 105.60"},{ASIN:"B0787FVE6P",Issue:"Prep-Set Creation",SubIssue:"asn_otnc",Infraction:"$ 625.60"}];return e.jsx(r,{children:e.jsx(a,{container:!0,spacing:2,children:e.jsx(a,{item:!0,xs:12,children:e.jsx(r,{sx:{width:"100%",typography:"body1"},children:e.jsxs(q,{value:s,children:[e.jsxs(r,{sx:{borderBottom:1,borderColor:"divider"},style:{display:"flex",columnGap:"10px",justifyContent:"space-between",marginBottom:"20px",alignItems:"center",borderBottom:"0"},children:[e.jsxs(De,{onChange:t,indicatorColor:"secondary",className:"finops-tab",sx:{columnGap:"10px",display:"flex",width:"100%"},children:[e.jsx(B,{label:"Infraction ($)",value:"1",style:{color:n.palette.text.dark}}),e.jsx(B,{label:"Infraction (Units)",value:"2"})]}),e.jsx(a,{container:!0,spacing:1,justifyContent:"end",alignItems:"end",children:e.jsx(a,{item:!0,style:{paddingTop:"0"},children:e.jsxs(te,{direction:"row",spacing:2,style:{marginTop:"16px"},children:[e.jsxs(w,{children:[e.jsx(S,{children:"Import"})," ",e.jsx("span",{className:"btn-indicator"})," ",e.jsx(S,{children:e.jsx(se,{size:"18",style:{margin:"auto",verticalAlign:"middle"}})})]}),e.jsxs(w,{children:[e.jsx(S,{children:"Export"})," ",e.jsx("span",{className:"btn-indicator"})," ",e.jsx(S,{children:e.jsx(ae,{size:"18",style:{margin:"auto",verticalAlign:"middle"}})})]})]})})})]}),e.jsx(R,{value:"1",style:{padding:0},children:e.jsx(A,{columns:i,data:m,pagination:!0})}),e.jsx(R,{value:"2",style:{padding:0},children:e.jsx(A,{columns:i,data:m,pagination:!0})})]})})})})})},Pe=48,_e=8,Ce={PaperProps:{style:{maxHeight:Pe*4.5+_e,width:250}}},O=["Charged","Dispute Approved","Dispute Rejected","Waived Graced period","Dispute- Needs more info","Reversed","Waived"],Ae=()=>{const[s,o]=x.useState([O[0]]),n=t=>{const{target:{value:i}}=t;o(typeof i=="string"?i.split(","):i)};return e.jsxs(r,{className:"accountStyle",children:[e.jsx(r,{className:"accountStyle_icon",children:e.jsx(P,{style:{marginTop:"-45px",marginLeft:"-80px"}})}),e.jsx(r,{children:e.jsx(j,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",value:s,onChange:n,className:"select-search",input:e.jsx(b,{label:"Tag",placeholder:"Select Account"}),renderValue:t=>t.join(", "),MenuProps:Ce,children:O.map(t=>e.jsx(y,{value:t,className:"select-search",children:e.jsx(I,{primary:t,className:"search-list"})},t))})})]})},Re=()=>{const[s,o]=x.useState(""),n=m=>{o(m.target.value)},t=m=>{m.preventDefault(),console.log("Input Value:",s)},i=d(ne)(({theme:m})=>({height:"30px",marginTop:"0",border:"none",borderRadius:"7px",backgroundColor:m.palette.primary.main,"& input":{height:"9px",backgroundColor:m.palette.primary.extraLight,border:"none",color:m.palette.secondary.main,opacity:"1",borderRadius:"7px","&:placeholder":{color:"#fff"}},"& fieldset":{border:"none",borderRadius:"7px"}}));return e.jsx(r,{className:"accountStyle",children:e.jsx("form",{onSubmit:t,className:"formStyle",children:e.jsx(i,{variant:"outlined",value:s,onChange:n,placeholder:"Enter ASIN, B08Y675271...",fullWidth:!0,margin:"normal"})})})},Qe=48,ke=8,$e={PaperProps:{style:{maxHeight:Qe*4.5+ke,width:250}}},F=["Prep-Bagging","Prep-Barcode labeling","PO On-Time Accuracy","Preb-Set Creation","ASN Accuracy","Overage PO Units","Rejected PO Rate","Unconfirmed PO Units"],Me=()=>{const[s,o]=x.useState([F[0]]),n=t=>{const{target:{value:i}}=t;o(typeof i=="string"?i.split(","):i)};return e.jsxs(r,{className:"accountStyle",children:[e.jsx(r,{className:"accountStyle_icon",children:e.jsx(P,{style:{marginTop:"-45px",marginLeft:"-80px"}})}),e.jsx(r,{children:e.jsx(j,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",value:s,onChange:n,className:"select-search",input:e.jsx(b,{label:"Tag",placeholder:"Select Account"}),renderValue:t=>t.join(", "),MenuProps:$e,children:F.map(t=>e.jsx(y,{value:t,className:"select-search",children:e.jsx(I,{primary:t,className:"search-list"})},t))})})]})},Be=48,we=8,Oe={PaperProps:{style:{maxHeight:Be*4.5+we,width:250}}},V=["asn_otnc","asn_imia_invalid_or_missing_arn"],Fe=()=>{const[s,o]=x.useState([V[0]]),n=t=>{const{target:{value:i}}=t;o(typeof i=="string"?i.split(","):i)};return e.jsxs(r,{className:"accountStyle",children:[e.jsx(r,{className:"accountStyle_icon",children:e.jsx(P,{style:{marginTop:"-45px",marginLeft:"-80px"}})}),e.jsx(r,{children:e.jsx(j,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",value:s,onChange:n,className:"select-search",input:e.jsx(b,{label:"Tag",placeholder:"Select Account"}),renderValue:t=>t.join(", "),MenuProps:Oe,children:V.map(t=>e.jsx(y,{value:t,className:"select-search",children:e.jsx(I,{primary:t,className:"search-list"})},t))})})]})},It=()=>{const s=U(),o=d(r)(({theme:p})=>({position:"relative",minHeight:"200px",height:"100%"})),n=d(z)(({theme:p})=>({backgroundColor:p.palette.primary.contrast,border:"1px solid",borderColor:p.palette.primary.contrast,color:p.palette.primary.contrastText,fontSize:"15px",padding:"0",fontWeight:"600",transition:"all ease 0.3s","&:hover":{backgroundColor:p.palette.primary.main,color:p.palette.primary.contrastText,borderColor:p.palette.primary.main},"& .btn-indicator":{width:"1px",backgroundColor:p.palette.primary.main,alignSelf:"stretch",marginLeft:"4px"}})),t=d(r)(({theme:p})=>({padding:"5px 12px",fontWeight:"600"})),[i,m]=v.useState(null),l=()=>{const p=sessionStorage.getItem("selectedVendorId");m(p)};return v.useEffect(()=>(l(),Q.on("vendorSelected",l),()=>{Q.off("vendorSelected",l)}),[]),i!=="5"?e.jsxs(C,{title:"Dashboard Page",children:[e.jsx(c,{variant:"h2",marginLeft:55,marginTop:35,children:e.jsx("h3",{children:"In progress!"})}),e.jsx(c,{variant:"h2",marginLeft:22,marginTop:-3,children:e.jsx("h6",{children:"This module is in progress and will be released shortly. Thank you for your patience."})})]}):e.jsxs(C,{title:" Opertaional Chargebacks",children:[e.jsxs(a,{container:!0,spacing:3,mb:4,children:[e.jsx(a,{item:!0,xs:12,children:e.jsx(J,{titles:["Operational Chargeback"]})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(Z,{title:"Operational Chargeback"})})]}),e.jsxs(a,{container:!0,spacing:2,mb:4,children:[e.jsx(a,{item:!0,sm:6,md:3,children:e.jsx(o,{children:e.jsxs(h,{title:e.jsx(c,{variant:"h4",children:"Total Disputed"}),children:[e.jsxs(c,{variant:"h2",sx:{color:s.palette.primary.main},children:["$",new Intl.NumberFormat().format(9765.65)]}),e.jsx(oe,{size:"60",style:{position:"absolute",right:"25px",bottom:"30px",color:s.palette.primary.main}})]})})}),e.jsx(a,{item:!0,sm:6,md:3,children:e.jsx(o,{children:e.jsxs(h,{title:e.jsx(c,{variant:"h4",children:"Total Approved"}),children:[e.jsxs(c,{variant:"h2",sx:{color:"#2edd95"},children:["$",new Intl.NumberFormat().format(2520.49)]}),e.jsx(K,{size:"60",style:{position:"absolute",right:"25px",bottom:"30px",color:"#2edd95"}})]})})}),e.jsx(a,{item:!0,sm:6,md:3,children:e.jsx(o,{children:e.jsxs(h,{title:e.jsx(c,{variant:"h4",children:"Total Pending"}),children:[e.jsxs(c,{variant:"h2",sx:{color:"#f19c53"},children:["$",new Intl.NumberFormat().format(2532.49)]}),e.jsx(re,{size:"60",style:{position:"absolute",right:"25px",bottom:"30px",color:"#f19c53"}})]})})}),e.jsx(a,{item:!0,sm:6,md:3,children:e.jsx(o,{children:e.jsxs(h,{title:e.jsx(c,{variant:"h4",children:"Total Denied"}),children:[e.jsxs(c,{variant:"h2",sx:{color:"#bf422a"},children:["$",new Intl.NumberFormat().format(4712.67)]}),e.jsx(ee,{size:"60",style:{position:"absolute",right:"25px",bottom:"30px",color:"#bf422a"}})]})})})]}),e.jsx(a,{container:!0,spacing:2,justifyContent:"space-between",mb:4,children:e.jsx(a,{item:!0,xs:12,mt:1,children:e.jsx(Te,{})})}),e.jsx(a,{container:!0,spacing:2,justifyContent:"space-between",mb:4,children:e.jsx(a,{item:!0,xs:12,mt:1,children:e.jsx(ve,{})})}),e.jsxs(a,{container:!0,spacing:2,justifyContent:"space-between",children:[e.jsx(a,{item:!0,xs:12,mb:3,children:e.jsx(c,{variant:"h3",children:"Operational Chargebacks - ASIN Level Split"})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(h,{children:[e.jsxs(a,{container:!0,spacing:2,mb:3,children:[e.jsx(a,{item:!0,xs:12,lg:3,children:e.jsx(_,{})}),e.jsx(a,{item:!0,xs:12,lg:3,children:e.jsx(L,{})}),e.jsx(a,{item:!0,xs:12,lg:3,children:e.jsx(Ae,{})}),e.jsx(a,{item:!0,xs:12,lg:3,children:e.jsx(Re,{})})]}),e.jsxs(a,{container:!0,spacing:2,children:[e.jsx(a,{item:!0,xs:12,lg:5,children:e.jsx(Me,{})}),e.jsx(a,{item:!0,xs:12,lg:5,children:e.jsx(Fe,{})}),e.jsx(a,{item:!0,xs:12,lg:2,children:e.jsxs(n,{children:[e.jsx(t,{children:"search"})," ",e.jsx("span",{className:"btn-indicator"})," ",e.jsx(t,{children:e.jsx(ie,{size:"18",style:{margin:"auto",verticalAlign:"middle"}})})]})})]})]})}),e.jsx(a,{item:!0,xs:12,mt:1,children:e.jsx(h,{children:e.jsx(Ne,{})})})]})]})};export{It as default};
