(this.webpackJsonpfacebook_clone=this.webpackJsonpfacebook_clone||[]).push([[0],{52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var s=t(2),n=t.n(s),c=t(17),r=t.n(c),i=(t(52),t(24)),o=(t(53),t(87)),m=t(89),d=t(90),l=t(85),p=t(86),u=(t(54),t(9)),b=n.a.forwardRef((function(e,a){var t=e.message,s=e.username===t.username;return Object(u.jsx)("div",{className:"messageBox",children:Object(u.jsxs)("div",{ref:a,className:"message ".concat(s&&"message__user"),children:[Object(u.jsx)("div",{ref:a,className:"mess__username",children:!s&&"".concat(t.username||"Unknown User",":")}),Object(u.jsx)(d.a,{style:{borderRadius:"1.3em",lineHeight:"1.34",width:"fit-content"},children:Object(u.jsx)(l.a,{className:s?"message__userCard":"message__guestCard",style:{paddingTop:"6px",paddingRight:"12px",paddingBottom:"7px",paddingLeft:"12px"},children:Object(u.jsx)(p.a,{children:t.message})})})]})})})),j=t(35),f=j.a.initializeApp({apiKey:"AIzaSyCgbBbPvkCtXAdmEeZJAxHoQHl8u7ytNV0",authDomain:"fir-clone-28850.firebaseapp.com",databaseURL:"https://fir-clone-28850-default-rtdb.firebaseio.com",projectId:"fir-clone-28850",storageBucket:"fir-clone-28850.appspot.com",messagingSenderId:"470850099593",appId:"1:470850099593:web:cb48ebe14bc72d65cf2958",measurementId:"G-3E7CD5KFZR"}).firestore(),g=t(38),h=t(45),x=t.n(h),O=t(88);var _=function(){var e=Object(s.useState)(""),a=Object(i.a)(e,2),t=a[0],n=a[1],c=Object(s.useState)([{username:"",message:""}]),r=Object(i.a)(c,2),d=r[0],l=r[1],p=Object(s.useState)(""),h=Object(i.a)(p,2),_=h[0],v=h[1];return Object(s.useEffect)((function(){f.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){l(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),Object(s.useEffect)((function(){v(prompt("Please enter your name"))}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("img",{src:"https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100",style:{marginTop:"3px"}}),Object(u.jsxs)("h2",{children:["Welcome ",_]}),Object(u.jsx)("div",{className:"form_container",children:Object(u.jsx)("form",{className:"app__form",children:Object(u.jsxs)(o.a,{className:"app__formControl",children:[Object(u.jsx)(m.a,{className:"app__input",placeholder:"Enter message...",value:t,onChange:function(e){return n(e.target.value)}}),Object(u.jsx)(O.a,{className:"app__iconButton",disabled:!t.replace(/\s/g,"").length,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),f.collection("messages").add({message:t,username:_,timestamp:j.a.firestore.FieldValue.serverTimestamp()}),n("")},children:Object(u.jsx)(x.a,{})})]})})}),Object(u.jsx)(g.a,{className:"messages_container",style:{"z-index":"-1"},children:d.map((function(e){var a=e.id,t=e.message;return Object(u.jsx)(b,{username:_,message:t},a)}))})]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,91)).then((function(a){var t=a.getCLS,s=a.getFID,n=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),v()}},[[68,1,2]]]);
//# sourceMappingURL=main.734732be.chunk.js.map