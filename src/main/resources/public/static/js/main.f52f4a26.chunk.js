(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(e){e.exports=JSON.parse('{"Mumbai Indians":"mi","Sunrisers Hyderabad":"srh","Rajasthan Royals":"rajasthan","Kolkata Knight Riders":"kkr","Royal Challengers Bangalore":"rcb","Gujarat Lions":"gujarat","Kochi Tuskers Kerala":"kochi","Delhi Capitals":"delhi","Kings XI Punjab":"punjab","Deccan Chargers":"deccan","Rising Pune Supergiants":"pune","Rising Pune Supergiant":"pune","Chennai Super Kings":"csk","Pune Warriors":"punewarriors"}')},26:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(18),r=a.n(s),i=(a(26),a(27),a(4)),l=a(2),j=a(8),o=a.n(j),h=a(11),u=a(9),m=(a(29),a(0)),d=function(e){var t=e.teamName,a=e.match;if(!a)return null;var c=a.team1===t?a.team2:a.team1,n="/teams/".concat(c),s=t===a.matchWinner,r="tie"===a.result,l=r?"MatchDetailCard tie-card":s?"MatchDetailCard won-card":"MatchDetailCard lost-card",j="";return j=r?"There was a tie between "+a.team1+" and "+a.team2:a.matchWinner+" won by "+a.resultMargin+" "+a.result,Object(m.jsxs)("div",{className:l,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"vs",children:"vs"}),Object(m.jsx)("h1",{children:Object(m.jsx)(i.b,{to:n,children:c})}),Object(m.jsx)("h2",{className:"match-date",children:a.date}),Object(m.jsxs)("h3",{className:"match-venue",children:["at ",a.venue]}),Object(m.jsxs)("h3",{className:"match-result",children:[" ",j," "]})]}),Object(m.jsxs)("div",{className:"additional-detail",children:[Object(m.jsx)("h3",{children:"First Innings"}),Object(m.jsx)("p",{children:a.team1}),Object(m.jsx)("h3",{children:"Second Innings"}),Object(m.jsx)("p",{children:a.team2}),Object(m.jsx)("h3",{children:"Man of the match"}),Object(m.jsx)("p",{children:a.playerOfMatch}),Object(m.jsx)("h3",{children:"Umpires"}),Object(m.jsxs)("p",{children:[a.umpire1,", ",a.umpire2]})]})]})},b=(a(36),function(e){var t=e.match,a=e.teamName;if(!t)return null;var c=t.team1===a?t.team2:t.team1,n="/teams/".concat(c),s=a===t.matchWinner,r="tie"===t.result,l=r?"MatchSmallCard tie-card":s?"MatchSmallCard won-card":"MatchSmallCard lost-card",j="";return j=r?"There was a tie between "+t.team1+" and "+t.team2:t.matchWinner+" won by "+t.resultMargin+" "+t.result,Object(m.jsxs)("div",{className:l,children:[Object(m.jsx)("span",{className:"vs",children:"vs"}),Object(m.jsx)("h1",{children:Object(m.jsx)(i.b,{to:n,children:c})}),Object(m.jsxs)("p",{className:"match-result",children:[j," "]})]})}),O=a(20),x=function(e){return null==e||null==e.team?Object(m.jsx)(m.Fragment,{}):Object(m.jsxs)("div",{className:"win-loss-section",children:["Wins / Losses",Object(m.jsx)(O.PieChart,{data:[{title:"Losses",value:e.team.totalMatches-e.team.totalWins,color:"#a34d5d"},{title:"Wins",value:e.team.totalWins,color:"#4da375"}]})]})},f=(a(37),function(){var e=Object(c.useState)({matches:[]}),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(l.f)().teamName;return Object(c.useEffect)((function(){(function(){var e=Object(h.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),a&&a.teamName?Object(m.jsxs)("div",{children:[Object(m.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsxs)("button",{class:"home",children:[Object(m.jsx)("i",{class:"fa fa-home"})," Home"]})}),Object(m.jsxs)("div",{className:"TeamPage",children:[Object(m.jsx)("div",{className:"team-name-section",children:Object(m.jsx)("h1",{className:"team-name",children:a.teamName})}),Object(m.jsx)(x,{team:a}),Object(m.jsxs)("div",{className:"match-detail-section",children:[Object(m.jsx)("h3",{children:"Latest Matches"}),Object(m.jsx)(d,{teamName:a.teamName,match:a.matches[0]})]}),a.matches.slice(1).map((function(e){return Object(m.jsx)(b,{teamName:a.teamName,match:e},e.id)})),Object(m.jsx)("div",{className:"more-link",children:Object(m.jsx)(i.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:"More "})})]})]}):Object(m.jsx)("h1",{children:"Team not found"})}),p=(a(38),function(e){for(var t=e.teamName,a=[],c="2008";c<="2020";c++)a.push(c);return Object(m.jsx)("ol",{className:"YearSelector",children:a.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),v=(a(39),function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(l.f)(),r=s.teamName,j=s.year,b=Object(c.useState)([]),O=Object(u.a)(b,2),x=O[0],f=O[1],v=Object(c.useState)(""),N=Object(u.a)(v,2),g=N[0],w=N[1],C=Object(c.useState)(""),y=Object(u.a)(C,2),k=y[0],S=y[1];Object(c.useEffect)((function(){(function(){var e=Object(h.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(r,"/matches?year=").concat(j));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a),f(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,j]);return Object(m.jsxs)("div",{children:[Object(m.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsxs)("button",{class:"home",children:[Object(m.jsx)("i",{class:"fa fa-home"})," Home"]})}),Object(m.jsxs)("div",{className:"MatchPage",children:[Object(m.jsxs)("div",{className:"year-selector",children:[Object(m.jsx)("h3",{children:" Select Year "}),Object(m.jsx)(p,{teamName:r})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{className:"page-heading",children:[r," matches in ",j]}),Object(m.jsxs)("select",{onChange:function(e){var t=e.target.value;S(t);var c=a,n=[];switch(t){case"win":n=c.filter((function(e){return e.matchWinner===r}));break;case"loss":n=c.filter((function(e){return e.matchWinner!==r}));break;case"tie":n=c.filter((function(e){return"tie"===e.result}));break;case"bat":n=c.filter((function(e){return"bat"===e.tossDecision}));break;case"ball":n=c.filter((function(e){return"field"===e.tossDecision}));break;default:n=c}n&&n.length>0&&f(n)},value:k,children:[Object(m.jsx)("option",{value:"",selected:!0,children:"Filter By"}),Object(m.jsx)("option",{value:"win",children:"Wins"}),Object(m.jsx)("option",{value:"loss",children:"Losses"}),Object(m.jsx)("option",{value:"tie",children:"Ties"}),Object(m.jsx)("option",{value:"bat",children:"Bat First"}),Object(m.jsx)("option",{value:"bowl",children:"Bowl First"})]}),Object(m.jsx)("input",{type:"text",value:g,onChange:function(e){var t=e.target.value;w(t);var c;(c=a.filter((function(e){return e.city.toLowerCase().includes(t.toLowerCase())||e.playerOfMatch.toLowerCase().includes(t.toLowerCase())||e.venue.toLowerCase().includes(t.toLowerCase())||e.umpire1.toLowerCase().includes(t.toLowerCase())||e.umpire2.toLowerCase().includes(t.toLowerCase())})))&&c.length>0&&f(c)},placeholder:"Search by keyword"}),x&&x.length>0?x.map((function(e){return Object(m.jsx)(d,{teamName:r,match:e},e.id)})):Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("p",{style:{textAlign:"center",padding:"20%"},children:"No matches found"})})]})]})]})}),N=(a(40),a(21)),g=(a(41),function(e){var t=function(e){var t=N;return t[e]?t[e]:""}(e);return t=t.replace(/['"]+/g,""),Object(m.jsx)("img",{className:"logoImg",src:"../images/".concat(t,".png"),alt:""})}),w=function(e){var t=e.teamName;return Object(m.jsxs)("div",{className:"TeamTile",children:[Object(m.jsx)("h1",{children:Object(m.jsx)(i.b,{to:"/teams/".concat(t),children:t})}),Object(m.jsx)(i.b,{to:"/teams/".concat(t),children:g(t)})]})},C=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(h.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsxs)("div",{className:"HomePage",children:[Object(m.jsx)("div",{className:"header-section",children:Object(m.jsx)("h1",{className:"app-name",children:"HOME"})}),Object(m.jsx)("div",{className:"team-grid",children:a.map((function(e){return Object(m.jsx)(w,{teamName:e.teamName},e.id)}))})]})};var y=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(i.a,{children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/teams/:teamName/matches/:year",children:Object(m.jsx)(v,{})}),Object(m.jsx)(l.a,{path:"/teams/:teamName",children:Object(m.jsx)(f,{})}),Object(m.jsx)(l.a,{path:"/",children:Object(m.jsx)(C,{})})]})})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),k()}},[[42,1,2]]]);
//# sourceMappingURL=main.f52f4a26.chunk.js.map