(this.webpackJsonpbirthday_clemence_cra=this.webpackJsonpbirthday_clemence_cra||[]).push([[0],[,,,,,,,,,,,function(e,c,a){},,function(e,c,a){},function(e,c,a){},function(e,c,a){},function(e,c,a){"use strict";a.r(c);var t=a(6),n=a(2),s=(a(11),a(0)),o=function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h1",{className:"header-title",children:"Qui suis-je ?"}),Object(s.jsx)("p",{className:"header-subtitle",children:"Clique sur l'animal pour decouvrir son nom et le son qu'il fait ! "})]})},i=a(1),r=a(3),u=a.n(r),l=a(4),m=(a(13),function(e){var c=e.animal,a=Object(i.useState)("sons/Ane.mp3"),t=Object(n.a)(a,2),o=t[0],r=t[1],m=Object(l.a)(o),j=Object(n.a)(m,2),b=j[0],d=j[1].stop,p=u()(),h=Object(n.a)(p,2),O=h[0],f=h[1];return Object(s.jsxs)("li",{onMouseEnter:function(){return r(c.audio)},onClick:function(){console.log(c.audio),f(),!O&&b(),O&&d()},onMouseLeave:function(){return d()},className:"container-box-".concat(c.color),children:[!O&&Object(s.jsx)("div",{className:"container-item",children:Object(s.jsx)("img",{alt:"animal",src:c.picture})}),O&&Object(s.jsx)("div",{className:"container-item",children:Object(s.jsx)("h1",{children:c.name})})]},c.name)}),j=(a(14),function(e){var c=e.AnimalsData,a=Object(i.useState)("sons/Ane.mp3"),t=Object(n.a)(a,2),o=t[0],r=(t[1],Object(l.a)(o)),j=Object(n.a)(r,2),b=(j[0],j[1].stop,u()()),d=Object(n.a)(b,2);d[0],d[1];return Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("ul",{className:"container-animals",children:[" ",c.map((function(e){return Object(s.jsx)(m,{animal:e},e.audio)}))]})})}),b=(a(15),a.p+"static/media/Ane.569e05b2.svg"),d=a.p+"static/media/Cheval.fb09cccb.svg",p=a.p+"static/media/Cochon.c19318c9.svg",h=a.p+"static/media/Mouton.f4536fca.svg",O=a.p+"static/media/Poule.a82b3f57.svg",f=a.p+"static/media/Vache.57975fe1.svg",v=[{name:"Ane",picture:b,color:"blue",audio:a.p+"static/media/Ane.906bf783.mp3"},{name:"Cheval",picture:d,color:"orange",audio:"sons/Cheval.mp3"},{name:"Cochon",picture:p,color:"blue",audio:"sons/Cochon.mp3"},{name:"Mouton",picture:h,color:"orange",audio:"sons/Mouton.mp3"},{name:"Poule",picture:O,color:"blue",audio:"sons/Poule.mp3"},{name:"Vache",picture:f,color:"orange",audio:"sons/Vache.mp3"}],x=function(){var e=Object(i.useState)(!1),c=Object(n.a)(e,2),a=(c[0],c[1]);return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)(o,{}),Object(s.jsx)(j,{AnimalsData:v,setResponse:a})]})},g=Object(s.jsx)(x,{}),N=document.getElementById("root");Object(t.render)(g,N)}],[[16,1,2]]]);
//# sourceMappingURL=main.468a2e3d.chunk.js.map