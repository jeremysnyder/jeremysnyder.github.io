(this.webpackJsonpreaddaily=this.webpackJsonpreaddaily||[]).push([[0],{58:function(e,a,t){e.exports=t(72)},63:function(e,a,t){},64:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),l=t.n(o),i=(t(63),t(38)),c=(t(64),t(104)),d=t(114),u=t(107),s=t(33),m=t(112),g=t(108),p=t(46),f=t.n(p),y=t(47),h=t.n(y),b=t(109),v=t(110),E=t(111),O=t(48),w=t.n(O),P=t(116),j=t(113),D=t(115),k=t(30),T=t.n(k),R=function(e){return function(a){var t=function(e){return a({type:"LOAD_DAY",payload:e})},n=function(e){var a=T()(e),t=a.week();return t=(11===a.month()&&1===t?53:t)-1,0===a.day()?null:a.dayOfYear()-t}(e);fetch("./data/chapter-bible-reading-plan/".concat(n,".json")).then((function(e){switch(e.status){case 200:e.json().then((function(e){return t(e)})).catch((function(e){return t({})}));break;default:console.log("Looks like there was a problem. Status Code: "+e.status),t({})}}))}},A=t(32),N=Object(c.a)((function(e){return{root:{flexGrow:1,fontFamily:"Helvetica Neue"},title:{textAlign:"center",flexGrow:1},bottomBar:{width:"100%",position:"fixed",textAlign:"center",bottom:0,backgroundColor:"lightGray"},reading:{margin:10},readingHeader:{backgroundColor:"lightgray",padding:8,fontSize:"1.1rem",textAlign:"center"},readingBody:{padding:8}}}));function L(e){var a=N();return r.a.createElement("div",{className:a.title},r.a.createElement(s.a,{variant:"h5"},r.a.createElement("span",{style:{fontFamily:"times new roman"}},"R"),"ead Daily"),r.a.createElement(s.a,{variant:"subtitle2"},e.loadedDay.format("ddd, MMMM Do")))}function C(e){var a=e.loadedDay,t=e.changeDay;return r.a.createElement(u.a,null,r.a.createElement(g.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return t(a.subtract(1,"days"))}},r.a.createElement(f.a,null)),r.a.createElement(L,{loadedDay:a}),r.a.createElement(g.a,{edge:"end",color:"inherit","aria-label":"menu",onClick:function(){return t(a.add(1,"days"))}},r.a.createElement(h.a,null)))}function S(e){var a=N();return r.a.createElement(b.a,{className:a.reading},r.a.createElement(v.a,{title:"No readings today",disableTypography:!0,className:a.readingHeader}))}function Y(e){var a=N(),t=e.title,n=e.reading;return r.a.createElement(b.a,{className:a.reading},r.a.createElement(v.a,{title:t,disableTypography:!0,className:a.readingHeader}),r.a.createElement(E.a,{className:a.readingBody},n,r.a.createElement(x,{passage:n})))}function x(e){var a=e.passage;return r.a.createElement(m.a,{variant:"contained",color:"default",startIcon:r.a.createElement(w.a,null),style:{marginLeft:"auto"},onClick:function(){return window.open("http://esv.org/".concat(window.encodeURIComponent(a),"/"),"_blank")}},"Read")}function B(e){var a=e.readings;return a&&a.length?a.map((function(e){return r.a.createElement(Y,{key:e.title,title:e.title,reading:e.reading})})):r.a.createElement(S,null)}function _(e){var a=e.plan,t=e.updatePlanTimeframe,n=N(),o={1:"All In 1 Year","2:1":"2yr Plan - Year 1","2:2":"2yr Plan - Year 2"};return r.a.createElement("div",{className:n.bottomBar},r.a.createElement(j.a,{style:{width:200}},r.a.createElement(D.a,{value:a,onChange:function(e){return t(e.target.value)},style:{marginBottom:15,marginTop:15}},r.a.createElement(P.a,{value:"",disabled:!0},"Reading Plan"),Object.keys(o).map((function(e){return r.a.createElement(P.a,{key:e,value:e},o[e])})))))}var I=function(e,a){if(!a)return null;var t=function(e,a){return{title:e,reading:a}},n=[];switch(e){case"1":a.otReading&&n.push(t("Old Testament 1",a.otReading)),a.ot2Reading&&n.push(t("Old Testament 2",a.ot2Reading));break;case"2:1":a.otReading&&n.push(t("Old Testament",a.otReading));break;case"2:2":a.ot2Reading&&n.push(t("Old Testament",a.ot2Reading))}return a.psalmsReading&&n.push(t("Psalms",a.psalmsReading)),a.gapReading&&n.push(t("Gospels/Acts/Proverbs",a.gapReading)),a.letterReading&&n.push(t("Letters",a.letterReading)),n};var G=Object(A.b)((function(e){return{data:e.data.readingPlan||{},planTimeframe:e.data.readingPlanType||"1"}}),(function(e){return{loadDay:function(a){return e(R(a))},loadPlanType:function(a){return e((t=a,function(e){localStorage.setItem("readDaily-planType",t),e({type:"LOAD_PLAN_TYPE",payload:t})}));var t}}}))((function(e){var a=e.data,t=e.loadDay,o=e.loadPlanType,l=e.planTimeframe,c=Object(n.useState)(!0),u=Object(i.a)(c,2),s=u[0],m=u[1],g=Object(n.useState)(T()()),p=Object(i.a)(g,2),f=p[0],y=p[1],h=N(),b=I(l,a);return s&&(t(f),o(localStorage.getItem("readDaily-planType")||"1"),m(!1)),r.a.createElement("div",{className:h.root},r.a.createElement(d.a,{position:"static"},r.a.createElement(C,{loadedDay:f,changeDay:function(e){m(!0),y(e)}})),r.a.createElement(B,{readings:b}),r.a.createElement(_,{plan:l,updatePlanTimeframe:o}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=t(18),M=t(49),F=t(50);function J(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function W(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?J(t,!0).forEach((function(a){Object(F.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var z=Object(H.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOAD_DAY":return W({},e,{readingPlan:a.payload});case"LOAD_PLAN_TYPE":return W({},e,{readingPlanType:a.payload});default:return e}}});l.a.render(r.a.createElement(A.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(H.d)(z,e,Object(H.a)(M.a))}()},r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[58,1,2]]]);
//# sourceMappingURL=main.7fc30420.chunk.js.map