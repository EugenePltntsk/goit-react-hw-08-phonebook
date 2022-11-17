"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[171],{171:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var a,r,i,o,s,l,d,c,u,p,h,m,x=t(766),f=t(444),g=(f.ZP.input(a||(a=(0,x.Z)([""]))),f.ZP.h1(r||(r=(0,x.Z)(["\n  margin: 0;\n"])))),Z=(f.ZP.label(i||(i=(0,x.Z)([""]))),f.ZP.div(o||(o=(0,x.Z)(["\n  padding-top: 40px;\n  width: 700px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])))),b=t(885),j=t(791),v=t(434),y=t(52),w=t(351),P=f.ZP.form(s||(s=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  gap: 20px;\n  padding: 30px 0;\n"]))),k=f.ZP.input(l||(l=(0,x.Z)(["\n  width: 210px;\n  height: 20px;\n  padding-left: 10px;\n"]))),C=f.ZP.button(d||(d=(0,x.Z)(["\n  background-color: ",";\n  display: inline-flex;\n  width: 150px;\n  height: 35px;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  border-radius: ",";\n  transition: all 250ms linear;\n  &:hover {\n    background-color: green;\n    border-color: transparent;\n  }\n"])),(function(n){return n.main?"green":"transparent"}),(function(n){return n.round?n.round:"2px"})),A=f.ZP.label(c||(c=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),I=t(184),S=function(){var n=(0,v.I0)(),e=(0,v.v9)(w.el),t=(0,j.useState)(""),a=(0,b.Z)(t,2),r=a[0],i=a[1],o=(0,j.useState)(""),s=(0,b.Z)(o,2),l=s[0],d=s[1],c=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":i(a);break;case"number":d(a)}};return(0,I.jsxs)(P,{onSubmit:function(t){if(t.preventDefault(),e.some((function(n){return n.name.toLowerCase()===r.toLowerCase()})))return alert("".concat(r," is already in contact"));var a={name:r,number:l};n((0,y.G3)(a)),t.target.reset()},children:[(0,I.jsxs)(A,{children:["Name",(0,I.jsx)(k,{onChange:c,placeholder:"enter name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,I.jsxs)(A,{children:["Number",(0,I.jsx)(k,{onChange:c,placeholder:"enter phone number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,I.jsx)(C,{round:"50%",type:"submit",children:"Add contact"})]})},z=f.ZP.ul(u||(u=(0,x.Z)(["\n  width: 400px;\n  list-style: none;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  padding: 0;\n"]))),_=f.ZP.h2(p||(p=(0,x.Z)([""]))),F=f.ZP.li(h||(h=(0,x.Z)(["\ndisplay: flex;\nalign-items:center ;\njustify-content: space-between ;\n"]))),N=f.ZP.button(m||(m=(0,x.Z)(["\ndisplay: block;\nwidth: 135px;\nmargin-left: auto;\ntransition: background-color 250ms linear;\noutline: none;\n&:hover{\n    background-color: green;\n    border-color: transparent;\n}\n"]))),q=t(402);function D(n){var e=n.name,t=n.number,a=n.id,r=n.elId,i=n.idChanger,o=(0,v.v9)(w.VO),s=(0,v.I0)();return(0,I.jsxs)(F,{children:[e,": ",t,o&&r===a?(0,I.jsx)(q.fe,{height:"40",width:"80"}):(0,I.jsx)(N,{onClick:function(n){i(n.target.dataset.id),s((0,y.ku)(n.target.dataset.id))},"data-id":a,children:"Delete contact"})]})}function L(){var n=(0,j.useState)(""),e=(0,b.Z)(n,2),t=e[0],a=e[1],r=function(n){a(n)},i=(0,v.v9)(w.vu);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(_,{children:"Contacts"}),(0,I.jsx)(z,{children:i.map((function(n){return(0,I.jsx)(D,{elId:t,idChanger:r,id:n.id,name:n.name,number:n.number},n.id)}))})]})}var B,E,G=t(634),J=f.ZP.label(B||(B=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 300px;\n  gap: 20px;\n"]))),M=f.ZP.input(E||(E=(0,x.Z)(["\n  height: 20px;\n"])));function O(){var n=(0,v.v9)(w.S7),e=(0,v.I0)();return(0,I.jsxs)(J,{children:["Find contacts by name",(0,I.jsx)(M,{name:"filter",value:n,onChange:function(n){var t=n.target.value;e((0,G.s)(t))},type:"text"})]})}function Q(){var n=(0,v.I0)();return(0,j.useEffect)((function(){n((0,y.XQ)())}),[n]),(0,I.jsxs)(Z,{children:[(0,I.jsx)(g,{children:"Phonebook"}),(0,I.jsx)(S,{}),(0,I.jsx)(O,{}),(0,I.jsx)(L,{})]})}}}]);
//# sourceMappingURL=171.21f7fd6e.chunk.js.map