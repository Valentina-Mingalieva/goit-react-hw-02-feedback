(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),o=n(3),r=n.n(o),i=(n(12),n(4)),d=n(5),u=n(7),s=n(6),l=(n(13),n(0)),b=function(t){var e=t.onGood,n=t.onNeutral,c=t.onBad;return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{type:"button",name:"good",onClick:e,children:"Good"}),Object(l.jsx)("button",{type:"button",name:"neutral",onClick:n,children:"Neutral"}),Object(l.jsx)("button",{type:"button",name:"bad",onClick:c,children:"Bad"})]})},h=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.handleGood=function(){t.setState((function(t){return{good:t.good+1}}))},t.handleNeutral=function(){t.setState((function(t){return{neutral:t.neutral+1}}))},t.handleBad=function(){t.setState((function(t){return{bad:t.bad+1}}))},t.countTotalFeedback=function(){return Object.keys(t.state).reduce((function(e,n){return e+t.state[n]}),0)},t.countPositiveFeedbackPercentage=function(){var e=t.countTotalFeedback(),n=100*t.state.good/e;return 0===e?0:Math.round(n)},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"Please leave feedback"}),Object(l.jsx)(b,{onGood:this.handleGood,onNeutral:this.handleNeutral,onBad:this.handleBad}),Object(l.jsx)("h2",{children:"Statistics"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("li",{children:"Good: ".concat(this.state.good)}),Object(l.jsx)("li",{children:"Neutral: ".concat(this.state.neutral)}),Object(l.jsx)("li",{children:"Bad: ".concat(this.state.bad)}),Object(l.jsx)("li",{children:"Total: ".concat(this.countTotalFeedback())}),Object(l.jsx)("li",{children:"Good percentage: ".concat(this.countPositiveFeedbackPercentage())})]})]})}}]),n}(c.Component),j=h;r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3a31de89.chunk.js.map