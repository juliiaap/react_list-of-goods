(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),c=s.n(r),o=s(5),i=s(6),a=s(9),l=s(7),u=s(8),b=s(1),h=s.n(b),d=(s(14),s(15),s(2)),p=s.n(d),j=s(0),N=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var y=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={isReversed:!1,sortType:n.NONE},t.sortByAlphabet=function(){t.setState({sortType:n.ALPHABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.reset=function(){t.setState({isReversed:!1,sortType:n.NONE})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t}return Object(i.a)(s,[{key:"render",value:function(){var t=function(t,e){var s=e.sortType,r=e.isReversed,c=Object(u.a)(t);switch(s){case n.NONE:break;case n.ALPHABET:c.sort((function(t,e){return t.localeCompare(e)}));break;case n.LENGTH:c.sort((function(t,e){return t.length-e.length}))}return r&&c.reverse(),c}(N,this.state),e=this.state,s=e.isReversed,r=e.sortType;return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button","is-info",{"is-light":r!==n.ALPHABET}),onClick:this.sortByAlphabet,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button","is-success",{"is-light":r!==n.LENGTH}),onClick:this.sortByLength,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button","is-warning",{"is-light":!s}),onClick:this.reverse,children:"Reverse"}),(s||r!==n.NONE)&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.reset,children:"Reset"})]}),Object(j.jsx)("ul",{children:t.map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),s}(h.a.Component);c.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9486f774.chunk.js.map