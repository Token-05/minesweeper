(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(t,e,n){},8:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n(4),r=n(6),o=n(5),s=n(1),i=n.n(s),l=n(7),u=n.n(l),d=(n(13),n(0)),b=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(t){var c;Object(a.a)(this,n),(c=e.call(this,t)).list=[],c.level=5,c.board=10,c.numcount=0;var r=Array(c.board*c.board).fill(0);return c.contents=r.map((function(){var t=Math.floor(100*Math.random())>86-c.level?9:0;return 0===t&&c.numcount++,t})),c}return Object(c.a)(n,[{key:"eventhandle",value:function(t){var e=this.board,n=document.getElementById(t);if(document.getElementById(t+e*e).style.display="none","9"===n.innerHTML)alert("Bomb!!!!\ud83d\udca3"),document.location.reload();else{if(this.numcount--,0!==this.numcount)return;alert("clear!!"),document.location.reload()}}},{key:"bombLocation",value:function(t){var e=this.board,n=this.contents;this.placearound=[t-1-e,t-e,t+1-e,t-1,t+1,t-1+e,t+e,t+1+e],this.placearound.map((function(a){9===n[a]&&e*e-1>=a>=0&&(t%e===e-1&&a%e===0||t%e===0&&a%e===e-1||(n[t]+=1))}))}},{key:"render",value:function(){for(var t=this,e=this.board,n=0;n<e;n++){this.list.push(Object(d.jsx)("div",{className:"board-row"}));for(var a=function(a){var c=n*e+a;9!==t.contents[c]&&t.bombLocation(c),t.list.push(Object(d.jsx)("button",{className:"square tap",id:c+e*e,onClick:function(){return t.eventhandle(c)},children:"?"})),t.list.push(Object(d.jsx)("div",{className:"square tapped",id:c,children:t.contents[c]}))},c=0;c<e;c++)a(c)}return Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[this.board," \xd7 ",this.board,"\u76e4\u9762\u3067\u3059"]}),this.list]})}}]),n}(i.a.Component),h=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)("div",{className:"game-board",children:Object(d.jsx)(b,{})}),Object(d.jsxs)("div",{className:"game-info",children:[Object(d.jsx)("div",{}),Object(d.jsx)("ol",{})]})]})}}]),n}(i.a.Component);u.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.da9fd5ce.chunk.js.map