(this["webpackJsonpfirst-step-pharma"]=this["webpackJsonpfirst-step-pharma"]||[]).push([[0],{12:function(e,t,c){e.exports={footer:"Footer_footer__2lfSw",cont:"Footer_cont__1aI8M",h2:"Footer_h2__1pKCW",contact:"Footer_contact__3hr8O",icon:"Footer_icon__3luBH",address:"Footer_address__3mvO1",margin_btm:"Footer_margin_btm___YDIz"}},16:function(e,t,c){e.exports={cont:"Cover_cont__2q241",image:"Cover_image__3upu4",text:"Cover_text__Qzhwb",h1:"Cover_h1__3c9r_",h2:"Cover_h2__21bND"}},36:function(e,t,c){e.exports={loader:"Loader_loader__2Fvdm",shine:"Loader_shine__2_9cy"}},4:function(e,t,c){e.exports={header:"Header_header__2GHES",img:"Header_img__3DTVf",title:"Header_title__3dBhL",cont:"Header_cont__1eC5W",content:"Header_content__2jwad",listDesktop:"Header_listDesktop__1Bnas",linkDesktop:"Header_linkDesktop__18XAU",link:"Header_link__IOLx5",faBars:"Header_faBars__3DNJI",open:"Header_open__1Qcjk",close:"Header_close__1u6r7",listMobile:"Header_listMobile__3XwBp",linkMobile:"Header_linkMobile__2uZjI"}},44:function(e,t,c){},45:function(e,t,c){},6:function(e,t,c){e.exports={cont:"Services_cont__2c8m3",title:"Services_title__LGFbn",card:"Services_card__nJ8w6",card_filled:"Services_card_filled___kE2R",head:"Services_head__3gsp4",desc:"Services_desc__1Fkc5"}},73:function(e,t,c){"use strict";c.r(t);var a,s=c(1),n=c.n(s),i=c(34),r=c.n(i),o=(c(44),c(45),c(17)),l=c(11),d=c(15),j=c(14),h=c(35),_=c.n(h);a="local"===Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENV?"http://localhost:8000/api":"https://first-step-pharma.herokuapp.com/api";var b=_.a.create({baseURL:a}),u=c(39),m=c(36),O=c.n(m),x=c(0),p=function(e){var t=e.height,c=e.width,a=e.style;return Object(x.jsx)("span",{className:O.a.loader,style:Object(u.a)({height:t,width:c},a)})};p.defaultProps={style:{}};var v=p,f=c(12),g=c.n(f),N=function(){var e=s.useState(),t=Object(l.a)(e,2),c=t[0],a=t[1],n=s.useState([]),i=Object(l.a)(n,2),r=i[0],o=i[1];return s.useEffect((function(){b.get("/v1/aboutme?fields=phone,address").then((function(e){var t=e.data.data;a(t.phone),o(t.address?t.address.map((function(e,t){return{id:t,value:e}})):[])}))}),[]),Object(x.jsx)("div",{className:g.a.footer,children:Object(x.jsxs)("div",{className:"".concat(g.a.cont," container"),children:[Object(x.jsx)("h2",{className:g.a.h2,children:"Contact:"}),Object(x.jsxs)("p",{className:g.a.contact,children:[Object(x.jsx)(j.a,{icon:d.c,className:g.a.icon}),c||Object(x.jsx)(v,{width:90,height:14})]}),Object(x.jsxs)("div",{className:"".concat(g.a.address," ").concat(g.a.contact),children:[Object(x.jsx)(j.a,{icon:d.a,className:g.a.icon}),Object(x.jsxs)("div",{children:[r.map((function(e,t){return Object(x.jsxs)("p",{children:[e.value,t!==r.length-1&&","!==e.value[e.value.length-1]&&","]},"line".concat(e.id))})),!r.length&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("p",{className:g.a.margin_btm,children:Object(x.jsx)(v,{width:100,height:14})}),Object(x.jsx)("p",{children:Object(x.jsx)(v,{width:90,height:14})})]})]})]})]})})},S=c(3),k=function(e){return e>=992?"desktop":e>=576?"tablet":"mobile"};function w(){var e=window,t=e.innerWidth;return{width:t,height:e.innerHeight,device:k(t)}}function C(){var e=Object(s.useState)(w()),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){function e(){a(w())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),c}var F=c(16),H=c.n(F),E=function(){var e=C(),t={backgroundImage:'url("'.concat(".",'/images/placeholder-1024.png")')};return Object(x.jsxs)("div",{className:H.a.cont,style:"desktop"===e.device?t:{},children:["desktop"!==e.device&&Object(x.jsx)("div",{className:H.a.image,children:Object(x.jsx)("img",{src:"".concat(".","/images/placeholder-1024.png"),alt:""})}),Object(x.jsxs)("div",{className:"".concat(H.a.text," container"),children:[Object(x.jsx)("h1",{className:H.a.h1,children:"First Step Pharma"}),Object(x.jsx)("h2",{className:"".concat(H.a.h2," roboto"),children:"Pharmaceutical Consultancy"})]})]})},D=c(6),L=c.n(D),P=function(){var e=s.useState([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=s.useState(!0),i=Object(l.a)(n,2),r=i[0],o=i[1];return s.useEffect((function(){b.get("/v1/services").then((function(e){var t=e.data.data;a(t),o(!1)})).catch((function(e){console.log(e),o(!1)}))}),[]),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h2",{className:L.a.title,children:"Services provided by us"}),Object(x.jsx)("div",{className:L.a.cont,children:r?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"".concat(L.a.card," ").concat(L.a.card_filled),children:Object(x.jsx)(v,{width:"100%",height:100})}),Object(x.jsx)("div",{className:"".concat(L.a.card," ").concat(L.a.card_filled),children:Object(x.jsx)(v,{width:"100%",height:100})}),Object(x.jsx)("div",{className:"".concat(L.a.card," ").concat(L.a.card_filled),children:Object(x.jsx)(v,{width:"100%",height:100})}),Object(x.jsx)("div",{className:"".concat(L.a.card," ").concat(L.a.card_filled),children:Object(x.jsx)(v,{width:"100%",height:100})})]}):Object(x.jsxs)(x.Fragment,{children:[c.map((function(e){return Object(x.jsxs)("div",{className:"".concat(L.a.card," ").concat(L.a.card_filled),children:[Object(x.jsx)("div",{className:L.a.head,children:Object(x.jsx)("h3",{children:e.name})}),Object(x.jsx)("p",{className:L.a.desc,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae quibusdam laborum quasi ullam adipisci accusantium voluptas reiciendis at. Commodi officia, voluptate sit sapiente minus animi quasi necessitatibus sint ipsa."}),!!e.subServices.length&&Object(x.jsx)("ul",{children:e.subServices.map((function(e){return Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{children:"- "}),Object(x.jsx)("span",{children:e.name})]})}))})]},e._id)})),c.length%2!==0&&Object(x.jsx)("div",{className:L.a.card})]})})]})},B=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(E,{}),Object(x.jsx)(P,{})]})},T=function(){return Object(x.jsx)(S.c,{children:Object(x.jsx)(S.a,{path:"/",children:Object(x.jsx)(B,{})})})},I=c.p+"static/media/firstStepLogo.3fc9712a.png",M=c(4),y=c.n(M),R=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],n=C(),i=c?y.a.linkMobile:y.a.linkDesktop,r=[{label:"Home",url:"/home"},{label:"About",url:"/about"},{label:"Contact Us",url:"/Contactus"}].map((function(e){return Object(x.jsx)(o.b,{className:i,to:e.url,children:e.label},e.label)})),h=c?y.a.open:y.a.close,_=Object(x.jsx)("nav",{className:c?y.a.listMobile:y.a.listDesktop,children:r});return Object(x.jsxs)("header",{className:y.a.header,children:[Object(x.jsxs)("div",{className:"".concat(y.a.cont," container"),children:[Object(x.jsxs)("div",{className:y.a.content,children:[Object(x.jsx)("img",{className:y.a.img,src:I,alt:""}),Object(x.jsx)("h2",{className:y.a.title,children:"First Step Pharma"})]}),"desktop"===n.device?_:Object(x.jsx)(j.a,{onClick:function(){a(!0)},icon:d.b,className:"".concat(y.a.faBars," ").concat(y.a.content)})]}),"desktop"!==n.device&&Object(x.jsxs)("div",{className:h,children:[Object(x.jsx)("div",{className:y.a.header,children:Object(x.jsxs)("div",{className:"".concat(y.a.cont," container"),children:[Object(x.jsxs)("div",{className:y.a.content,children:[Object(x.jsx)("img",{className:y.a.img,src:I,alt:""}),Object(x.jsx)("h2",{className:y.a.title,children:"First Step Pharma"})]}),Object(x.jsx)(j.a,{onClick:function(){a(!1)},icon:d.d,className:"".concat(y.a.faBars," ").concat(y.a.content)})]})}),_]})]})},A=function(){return Object(x.jsxs)(o.a,{children:[Object(x.jsx)(R,{}),Object(x.jsx)(T,{}),Object(x.jsx)(N,{})]})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root")),W()}},[[73,1,2]]]);