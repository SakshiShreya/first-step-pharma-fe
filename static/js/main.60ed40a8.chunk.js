(this["webpackJsonpfirst-step-pharma"]=this["webpackJsonpfirst-step-pharma"]||[]).push([[0],{12:function(e,t,a){e.exports={footer:"Footer_footer__miWNG",cont:"Footer_cont__3qQDa",h2:"Footer_h2__1-G3e",contact:"Footer_contact__BEcWX",icon:"Footer_icon__1-LQ1",address:"Footer_address__1Au6h",margin_btm:"Footer_margin_btm__IthMU"}},14:function(e,t,a){e.exports={cont:"About_cont__3q5zK",h1:"About_h1__38Ia6",h3:"About_h3__8dRbo",ul:"About_ul__2Pqm0"}},16:function(e,t,a){e.exports={cont:"Error404_cont__315c7",h1:"Error404_h1__J4Std",oops:"Error404_oops__1jpKc",thisLink:"Error404_thisLink__3DIaQ",orThe:"Error404_orThe__XRi58",button:"Error404_button__1_Lxv"}},19:function(e,t,a){e.exports={cont:"Cover_cont__34jhD",image:"Cover_image__1FbBM",text:"Cover_text__36VNy",h1:"Cover_h1__hGz5v",h2:"Cover_h2__3Y659"}},3:function(e,t,a){e.exports={header:"Header_header__1fCsm",img:"Header_img__3_lMr",title:"Header_title__1NaLM",cont:"Header_cont__31cHJ",content:"Header_content__2x7Br",link:"Header_link__2fBBZ",listDesktop:"Header_listDesktop__Wb7Zh",linkDesktop:"Header_linkDesktop__1Q9XU",faBars:"Header_faBars__qVz7i",open:"Header_open__1PZBC",close:"Header_close__3tt5g",listMobile:"Header_listMobile__2W-St",linkMobile:"Header_linkMobile__1oB7M"}},39:function(e,t,a){e.exports={loader:"Loader_loader__2quzJ",shine:"Loader_shine__1Jk0x"}},47:function(e,t,a){},6:function(e,t,a){e.exports={cont:"Services_cont__XekAJ",title:"Services_title__F-yo-",card:"Services_card__o9Miq",card_filled:"Services_card_filled__1YR15",head:"Services_head__hPvs5",desc:"Services_desc__qOMEh"}},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var c,n=a(1),i=a.n(n),s=a(37),o=a.n(s),r=(a(47),a(13)),l=a(11),d=a(18),h=a(17),j=a(38),u=a.n(j);c="local"===Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENV?"http://localhost:8000/api":"https://first-step-pharma.herokuapp.com/api";var m=u.a.create({baseURL:c}),b=a(42),p=a(39),_=a.n(p),f=a(0),O=function(e){var t=e.height,a=e.width,c=e.style;return Object(f.jsx)("span",{className:_.a.loader,style:Object(b.a)({height:t,width:a},c)})};O.defaultProps={style:{}};var x=O,v=a(12),g=a.n(v),S=function(){var e=n.useState(),t=Object(l.a)(e,2),a=t[0],c=t[1],i=n.useState([]),s=Object(l.a)(i,2),o=s[0],r=s[1];return n.useEffect((function(){m.get("/v1/aboutme?fields=phone,address").then((function(e){var t=e.data.data;c(t.phone),r(t.address?t.address.map((function(e,t){return{id:t,value:e}})):[])}))}),[]),Object(f.jsx)("div",{className:g.a.footer,children:Object(f.jsxs)("div",{className:"".concat(g.a.cont," container"),children:[Object(f.jsx)("h2",{className:g.a.h2,children:"Contact:"}),Object(f.jsxs)("p",{className:g.a.contact,children:[Object(f.jsx)(h.a,{icon:d.c,className:g.a.icon}),a||Object(f.jsx)(x,{width:90,height:14})]}),Object(f.jsxs)("div",{className:"".concat(g.a.address," ").concat(g.a.contact),children:[Object(f.jsx)(h.a,{icon:d.a,className:g.a.icon}),Object(f.jsxs)("div",{children:[o.map((function(e,t){return Object(f.jsxs)("p",{children:[e.value,t!==o.length-1&&","!==e.value[e.value.length-1]&&","]},"line".concat(e.id))})),!o.length&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("p",{className:g.a.margin_btm,children:Object(f.jsx)(x,{width:100,height:14})}),Object(f.jsx)("p",{children:Object(f.jsx)(x,{width:90,height:14})})]})]})]})]})})},N=a(4),P=a(14),y=a.n(P),k=function(){return Object(f.jsxs)("div",{className:"".concat(y.a.cont," container"),children:[Object(f.jsx)("h1",{className:y.a.h1,children:"About Us"}),Object(f.jsx)("p",{children:"A Self \u2013confident, passionately curious, Lean Six Sigma Green and Black Belt Certified, Pharmaceutical Professional with 19 years of experience in Sterile Manufacturing Finished Dosage form, 18 years in Sterile Production as full-time employment and One year as Principal Consultant (cGMP- Sterile Operation). Have expertise in Sterile formulations like Dry Powder Injectable, Lyophilized Injectable, Liquid Injectable, BFS, Bag Line and three-Piece Eye Drops. Expertise covers different functional area of Sterile Manufacturing viz Compounding, Filling, Visual Inspection (Manual and Automatic), Labelling and Packing. Have great understanding of Qualification and Validation of Clean room area, equipment, and Process. For example, HVAC, Water System, all critical equipment of Production like Steam Sterilizer, Vial washer, Tunnel, Filling, Visual inspection both Manual and Automatic to name few and Process simulation."}),Object(f.jsx)("p",{children:"I am well versed with regulatory cGMP requirements and guidelines like 21 CFR Part 210-211, CDER Sep 2004, EU cGMP Annex-11, WHO, PICS to name few and other guidelines like EN 285, SHTM 2010, PDA, Baseline ISPE, ICH, ISO-14644-1 to 7, USP 1211, 1116, 797,1208, 790,1790, FS 209e, KNAPP etc. Well versed with QMS elements."}),Object(f.jsx)("p",{children:"Regulatory Audit Faced:- USFDA-05, EUGMP-04, MCC, WHO 05, ANVISA - 03 and NHL customer audit every year"}),Object(f.jsx)("h2",{className:y.a.h1,children:"Achivements"}),Object(f.jsx)("h3",{className:y.a.h3,children:"Achivements As Freelancer"}),Object(f.jsxs)("ul",{className:y.a.ul,children:[Object(f.jsx)("li",{children:"Helped in Designing and approval of the Factory Lay out of a green field Sterile WFI plant coming in Derabasi, Punjab. Also helped them in preparation of URS and Selection of Production and Warehouse related equipment."}),Object(f.jsx)("li",{children:"Provided the online consultation for Qualification of Visual Inspector and Visual Inspection process on behalf of Delhi Based Pharma Consulting firm."}),Object(f.jsx)("li",{children:"Helped a Delhi based Pharma company in establishing a process for campaign Terminal Sterilized Product."}),Object(f.jsx)("li",{children:"Performed factory assessment and performed audit in line with EU cGMP/PICS of an Oncology- Injectable and OSD plant based in Daman and helped them mitigate the Problem. It was for a Delhi based Export Pharma Company."}),Object(f.jsx)("li",{children:"Performed factory assessment and performed audit in line with EU cGMP/PICS of an Oncology- Injectable Plant based in Hyderabad and helped them mitigate the Problem. It was for a Delhi based Export Pharma Company"})]}),Object(f.jsx)("h3",{className:y.a.h3,children:"Achivements As Industry Professional"}),Object(f.jsxs)("ul",{className:y.a.ul,children:[Object(f.jsx)("li",{children:"In one of my organizations in noticeably short tenure brought the cultural change in Shop floor activities by qualitative distribution of Manpower and troubleshooting the filling line equipment. Which resulted in sharp decline of batch run time from 30 hrs.to 08 hrs."}),Object(f.jsx)("li",{children:"In one of my previous Organization resolved Lyophilized product defect (Dried Product on stopper leg)."}),Object(f.jsx)("li",{children:"Successfully cleared the process validation batch of Lidocaine 1%, 2ml. Successful clearance of this product was a chronic problem."}),Object(f.jsx)("li",{children:"Increased the batch size of Pantoprazole from 70 Liter to 150 Liter in same hold time of 16 hrs."}),Object(f.jsx)("li",{children:"Successfully qualified the Automatic Inspection and established a well proofed regulatory scrutinized procedure which resulted in transferring of almost all Liquid injectable from manual inspection to Automatic inspection."}),Object(f.jsx)("li",{children:"In response USFDA observation restructured the Visual Inspection SOP and Visual Inspector Qualification SOP which were very much in line with the Later Published USP chapter on visual Inspection 1790 and 790. Also redesigned the Visual Inspection batch document for unambiguous tracking of rejection in response to USFDA."}),Object(f.jsx)("li",{children:"Actively participated in the workshop on Visual inspection which later became the foundation for development of USP chapter 1790 and 790."}),Object(f.jsx)("li",{children:"Successfully commissioned the green field project of sterile formulation."}),Object(f.jsx)("li",{children:"Independently handled the project of water system from designing stage."})]})]})},w=a(16),C=a.n(w),I=function(){return Object(f.jsxs)("div",{className:"".concat(C.a.cont," container"),children:[Object(f.jsx)("h1",{className:C.a.h1,children:"404"}),Object(f.jsx)("p",{className:C.a.oops,children:"Ooops, This Page Not Found!"}),Object(f.jsx)("p",{className:C.a.thisLink,children:"This link might be corrupted"}),Object(f.jsx)("p",{className:C.a.orThe,children:"or the page may have been removed"}),Object(f.jsx)(r.b,{className:C.a.button,to:"/",children:"Go To Home "})]})},F=function(e){return e>=992?"desktop":e>=576?"tablet":"mobile"};function A(){var e=window,t=e.innerWidth;return{width:t,height:e.innerHeight,device:F(t)}}function E(){var e=Object(n.useState)(A()),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){c(A())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}var D=a(19),H=a.n(D),L=function(){var e=E(),t={backgroundImage:'url("'.concat(".","/images/pills-").concat(e.width<2e3?"small":"big",'.jpg")')},a={backgroundImage:'url("'.concat(".",'/images/pills.jpg")')};return Object(f.jsxs)("div",{className:H.a.cont,style:"desktop"===e.device?t:{},children:["desktop"!==e.device&&Object(f.jsx)("div",{className:H.a.image,style:a}),Object(f.jsxs)("div",{className:"".concat(H.a.text," container"),children:[Object(f.jsx)("h1",{className:H.a.h1,children:"First Step Pharma"}),Object(f.jsx)("h2",{className:"".concat(H.a.h2," roboto"),children:"Pharmaceutical Consultancy"})]})]})},M=a(6),q=a.n(M),B=function(){var e=n.useState([]),t=Object(l.a)(e,2),a=t[0],c=t[1],i=n.useState(!0),s=Object(l.a)(i,2),o=s[0],r=s[1];return n.useEffect((function(){m.get("/v1/services").then((function(e){var t=e.data.data;c(t),r(!1)})).catch((function(e){console.log(e),r(!1)}))}),[]),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h2",{className:q.a.title,children:"Services provided by us"}),Object(f.jsx)("div",{className:q.a.cont,children:o?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"".concat(q.a.card," ").concat(q.a.card_filled),children:Object(f.jsx)(x,{width:"100%",height:100})}),Object(f.jsx)("div",{className:"".concat(q.a.card," ").concat(q.a.card_filled),children:Object(f.jsx)(x,{width:"100%",height:100})}),Object(f.jsx)("div",{className:"".concat(q.a.card," ").concat(q.a.card_filled),children:Object(f.jsx)(x,{width:"100%",height:100})}),Object(f.jsx)("div",{className:"".concat(q.a.card," ").concat(q.a.card_filled),children:Object(f.jsx)(x,{width:"100%",height:100})})]}):Object(f.jsxs)(f.Fragment,{children:[a.map((function(e){return Object(f.jsxs)("div",{className:"".concat(q.a.card," ").concat(q.a.card_filled),children:[Object(f.jsx)("div",{className:q.a.head,children:Object(f.jsx)("h3",{className:"h4",children:e.name})}),Object(f.jsx)("p",{className:q.a.desc,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae quibusdam laborum quasi ullam adipisci accusantium voluptas reiciendis at. Commodi officia, voluptate sit sapiente minus animi quasi necessitatibus sint ipsa."}),!!e.subServices.length&&Object(f.jsx)("ul",{children:e.subServices.map((function(e){return Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"- "}),Object(f.jsx)("span",{children:e.name})]})}))})]},e._id)})),a.length%2!==0&&Object(f.jsx)("div",{className:q.a.card})]})})]})},T=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(L,{}),Object(f.jsx)(B,{})]})},U=function(){return Object(f.jsxs)(N.c,{children:[Object(f.jsx)(N.a,{path:"/",component:T,exact:!0}),Object(f.jsx)(N.a,{path:"/home",component:T,exact:!0}),Object(f.jsx)(N.a,{path:"/about",component:k,exact:!0}),Object(f.jsx)(N.a,{component:I})]})},z=a.p+"static/media/firstStepLogo2.93aaf378.svg",V=a(3),W=a.n(V),R=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],i=E(),s=a?W.a.linkMobile:W.a.linkDesktop,o=[{label:"Home",url:"/home"},{label:"About",url:"/about"},{label:"Contact Us",url:"/contactus"}].map((function(e){return Object(f.jsx)(r.b,{className:s,to:e.url,onClick:function(){return c(!1)},children:e.label},e.label)})),j=a?W.a.open:W.a.close,u=Object(f.jsx)("nav",{className:"desktop"!==i.device?W.a.listMobile:W.a.listDesktop,children:o});return Object(f.jsxs)("header",{className:W.a.header,children:[Object(f.jsxs)("div",{className:"".concat(W.a.cont," container"),children:[Object(f.jsxs)("div",{className:W.a.content,children:[Object(f.jsx)("img",{className:W.a.img,src:z,alt:""}),Object(f.jsx)(r.b,{className:W.a.link,to:"/",children:Object(f.jsx)("h2",{className:W.a.title,children:"First Step Pharma"})})]}),"desktop"===i.device?u:Object(f.jsx)(h.a,{onClick:function(){c(!0)},icon:d.b,className:"".concat(W.a.faBars," ").concat(W.a.content)})]}),"desktop"!==i.device&&Object(f.jsxs)("div",{className:j,children:[Object(f.jsx)("div",{className:W.a.header,children:Object(f.jsxs)("div",{className:"".concat(W.a.cont," container"),children:[Object(f.jsxs)("div",{className:W.a.content,children:[Object(f.jsx)("img",{className:W.a.img,src:z,alt:""}),Object(f.jsx)("h2",{className:W.a.title,children:"First Step Pharma"})]}),Object(f.jsx)(h.a,{onClick:function(){c(!1)},icon:d.d,className:"".concat(W.a.faBars," ").concat(W.a.content)})]})}),u]})]})},G=(a(72),function(){return Object(f.jsxs)(r.a,{children:[Object(f.jsx)(R,{}),Object(f.jsx)(U,{}),Object(f.jsx)(S,{})]})}),Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};o.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(G,{})}),document.getElementById("root")),Q()}},[[73,1,2]]]);
//# sourceMappingURL=main.60ed40a8.chunk.js.map