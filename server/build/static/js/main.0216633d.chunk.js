(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(39)},39:function(e,n,t){"use strict";t.r(n);var a=t(15),r=t(4),u=t(3),c=t(0),l=t.n(c),o=t(14),i=t.n(o),m=t(2),d=t.n(m),f="https://fullstackopen2019.herokuapp.com/api/persons",h=function(){return d.a.get(f)},s=function(e){return d.a.post(f,e)},b=function(e,n){return d.a.put("".concat(f,"/").concat(e),n)},v=function(e){return d.a.delete("".concat(f,"/").concat(e))},p=function(e){var n=e.handler.handleFilter,t=e.value.filterName;return l.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},l.a.createElement("div",null,"filter shown with"," ",l.a.createElement("input",{value:t,onChange:n})))},E=function(e){var n=e.handlers,t=n.handleNameChange,a=n.handleNumberChange,r=n.addPerson,u=e.values,c=u.newName,o=u.newNumber;return l.a.createElement("form",{onSubmit:r},l.a.createElement("div",null,"name: ",l.a.createElement("input",{value:c,onChange:t}),"number:"," ",l.a.createElement("input",{type:"tel",value:o,onChange:a})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit"},"add")))},w=function(e){var n=e.persons,t=e.removePerson;return l.a.createElement("ul",null,n.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("span",null,e.name," - ",e.number," "),l.a.createElement("button",{onClick:function(){return n=e.id,a=e.name,void(window.confirm("Delete ".concat(a,"?"))&&t(n,a));var n,a}},"delete"))}))},g=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],i=Object(c.useState)(""),m=Object(u.a)(i,2),d=m[0],f=m[1],g=Object(c.useState)(""),j=Object(u.a)(g,2),O=j[0],N=j[1],k=Object(c.useState)(""),C=Object(u.a)(k,2),S=C[0],y=C[1];Object(c.useEffect)(function(){h().then(function(e){o(e.data)})},[]);var P=S?t.filter(function(e){return e.name.includes(S)}):t,D=function(){f(""),N("")};return l.a.createElement("div",null,l.a.createElement("h1",null,"Phonebook"),l.a.createElement(p,{value:{filterName:S},handler:{handleFilter:function(e){return y(e.target.value)}}}),l.a.createElement("h2",null,"Add a new contact"),l.a.createElement(E,{values:{newName:d,newNumber:O},handlers:{handleNameChange:function(e){return f(e.target.value)},handleNumberChange:function(e){return N(e.target.value)},addPerson:function(e){e.preventDefault();var n=Object(r.a)(t).find(function(e){return e.name===d});n?window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))&&b(n.id,Object(a.a)({},n,{number:O})).then(function(e){var n=t.map(function(n){return n.id===e.id?e:n});o(n),D()}):d&&O&&(s({name:d,number:O,id:t.length+1}).then(function(e){o([].concat(Object(r.a)(t),[e.data]))}),D())}}}),l.a.createElement("h2",null,"Numbers"),l.a.createElement(w,{persons:P,removePerson:function(e){v(e).then(function(){var n=t.filter(function(n){return n.id!==e});o(n)})}}))};n.default=g;i.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0216633d.chunk.js.map