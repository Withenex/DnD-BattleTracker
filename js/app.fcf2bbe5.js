(function(t){function e(e){for(var s,o,i=e[0],c=e[1],u=e[2],m=0,d=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},r={app:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-3 container",attrs:{id:"app"}},[n("span",{staticClass:"row"},[t.sidebarVisible?n("sidebar",{staticClass:"col-12 pb-3",attrs:{monsters:t.monsters},on:{addMonster:function(e){return t.addMonster(e)}}}):t._e(),n("encounter",{staticClass:"col-12 p-3",attrs:{id:"encounter",monsters:t.encounter},on:{remove:function(e){return t.remove(e)}}})],1)])},a=[],o=n("1da1"),i=n("5530"),c=(n("96cf"),n("4de4"),n("159b"),n("4fad"),n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:" g-0"},[n("form",{},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search for a monster 🔎"},domProps:{value:t.searchTerm},on:{blur:function(e){return t.toggleSearch(!1)},focus:function(e){return t.toggleSearch(!0)},input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}})]),t.showSearch?n("div",{staticClass:"w-100 overflow-auto no-gutter",attrs:{id:"content"},on:{mouseout:function(e){return t.resultsToggle(!1,e)},mouseover:function(e){return t.resultsToggle(!0,e)}}},t._l(t.monsters,(function(e){return n("ul",{key:e.id,staticClass:"list-group"},[e.name.toLowerCase().includes(t.searchTerm.toLowerCase())?n("li",{staticClass:"list-group-item"},[n("minimonster",{attrs:{monster:e},on:{add:function(e){return t.addMonster(e)}}})],1):t._e()])})),0):t._e()])}),u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-between"},[n("h5",{staticClass:"col"},[t._v(t._s(t.monster.name))]),n("div",{staticClass:"col"},[t._v("CR: "+t._s(t.monster.cr))]),n("div",{staticClass:"btn btn-outline-success",on:{click:function(e){return t.add()}}},[t._v("Add")])])},m=[],d={name:"minimonster",props:{monster:Object},methods:{add:function(){this.$emit("add",this.monster)}}},p=d,f=n("2877"),h=Object(f["a"])(p,l,m,!1,null,null,null),v=h.exports,g={name:"sidebar",data:function(){return{searchTerm:"",searchFocus:!1,resultsFocus:!1}},props:{monsters:Array},components:{minimonster:v},computed:{showSearch:function(){return!(!this.searchFocus&&!this.resultsFocus)}},methods:{addMonster:function(t){this.$emit("addMonster",t)},toggleSearch:function(t){this.searchFocus=t},resultsToggle:function(t,e){if("mouseout"==e.type){var n=document.getElementById("content");if(n.contains(e.relatedTarget))return}this.resultsFocus=t}}},_=g,b=(n("bc82"),Object(f["a"])(_,c,u,!1,null,"4e493c82",null)),y=b.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-light h-100"},[n("h2",[t._v("Encounter")]),n("div",[n("strong",[t._v("XP: "+t._s(t.totalXP)+" X Multiplier ("+t._s(t.multiplier)+") = ("+t._s(t.totalXP*t.multiplier)+")")])]),n("div",{attrs:{id:"encounter"}},[n("div",{staticClass:"h-100 overflow-auto row"},t._l(t.monsters,(function(e){return n("div",{key:e.n,staticClass:"col-lg-6"},[n("monster",{attrs:{monster:e},on:{remove:function(e){return t.remove(e)}}})],1)})),0)])])},w=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"animate__animated animate__fadeInUp",attrs:{id:t.monster.n}},[n("div",{staticClass:"card m-3 shadow-lg"},[n("span",{staticClass:"card-header"},[n("div",{staticClass:"row"},[n("img",{staticClass:"monsterToken img-fluid",attrs:{src:t.image}}),n("div",{staticClass:"col-lg-6"},[n("h2",[t._v(t._s(t.monster.name))]),n("strong",[t._v("HP: "+t._s(this.HP)+" ")]),n("div",{staticClass:"progress p-0 w-100"},[n("div",{staticClass:"progress-bar bg-danger",style:"width: "+this.HP/t.monster.hp.average*100+"%",attrs:{role:"progressbar"}})]),n("form",{staticClass:"my-2"},[n("div",{},[n("div",{staticClass:"input-group"},[n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"btn btn-outline-danger mx-1 col",on:{click:function(e){return t.hurt()}}},[t._v("Hurt")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.damage,expression:"damage"}],staticClass:"form-control col-auto",attrs:{type:"number",min:"0",max:t.monster.hp.average},domProps:{value:t.damage},on:{input:function(e){e.target.composing||(t.damage=e.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("div",{staticClass:"btn btn-outline-success mx-1",on:{click:function(e){return t.heal()}}},[t._v(" Heal ")])])])])]),n("span",{staticClass:"btn btn-outline-danger btn-sm mx-2",on:{click:function(e){return t.remove()}}},[t._v("Remove")]),t._v(" Source: "),n("div",{staticClass:"badge bg-primary"},[t._v(t._s(t.monster.source))])]),n("div",{staticClass:"col-lg-6 my-3"},[n("div",{staticClass:"btn btn-primary mb-3",on:{click:function(e){return t.toggleStats()}}},[t._v(t._s(t.showStats?"Hide":"Show")+" Stats")]),n("br"),t.monster.ac[0].ac?n("span",{staticClass:"h3 p-3",attrs:{id:"armorClass"}},[n("span",{},[t._v(" "+t._s(t.monster.ac[0].ac)+" ")])]):t._e()])])]),t.showStats?n("div",{staticClass:"stats card-body float-left animate__animated animate__fadeIn"},[n("h4",[t._v("Stats")]),n("table",{staticClass:"table"},[t._m(0),n("tr",[n("td",[t._v(t._s(t.monster.str))]),n("td",[t._v(t._s(t.monster.dex))]),n("td",[t._v(t._s(t.monster.con))]),n("td",[t._v(t._s(t.monster.int))]),n("td",[t._v(t._s(t.monster.wis))]),n("td",[t._v(t._s(t.monster.cha))])])]),t.monster.skill?n("div",[t._v(" Skills: "),t._l(Object.entries(t.monster.skill),(function(e){return n("span",{key:e[0]},[n("span",{staticClass:"m-1 badge bg-primary"},[t._v(t._s(e[0])+" "+t._s(e[1]))])])}))],2):t._e(),t.monster.senses?n("div",[t._v(" Senses: "),t._l(t.monster.senses,(function(e){return n("span",{key:e},[n("span",{staticClass:"m-1 badge bg-primary"},[t._v(t._s(e))])])}))],2):t._e(),t.monster.languages?n("div",[t._v(" Languages: "),t._l(t.monster.languages,(function(e){return n("span",{key:e},[n("span",{staticClass:"mx-1 badge bg-primary"},[t._v(t._s(e)+" ")])])}))],2):t._e(),t.monster.trait?n("div",[n("hr"),n("h3",[t._v("Traits:")]),t._l(t.monster.trait,(function(e){return n("div",{key:e.name},[n("span",{staticClass:"badge bg-primary mx-1"},[t._v(t._s(e.name))]),t._l(e.entries,(function(e){return n("span",{key:e,staticClass:"info"},[t._v(t._s(t.parse(e)))])}))],2)}))],2):t._e(),t.monster.action?n("div",[n("hr"),n("h3",[t._v("Actions")]),t._l(t.monster.action,(function(e){return n("div",{key:e.name},[n("span",{staticClass:"badge bg-primary mx-1"},[t._v(t._s(e.name))]),t._l(e.entries,(function(e){return n("span",{key:e,staticClass:"info"},[t._v(t._s(t.parse(e)))])}))],2)}))],2):t._e(),t.monster.legendary?n("div",[n("hr"),n("h3",[t._v("Legendary Actions")]),t._l(t.monster.legendary,(function(e){return n("div",{key:e.name},[n("span",{staticClass:"badge bg-primary mx-1"},[t._v(t._s(e.name))]),t._l(e.entries,(function(e){return n("span",{key:e,staticClass:"info"},[t._v(t._s(t.parse(e)))])}))],2)}))],2):t._e()]):t._e()])])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("th",[t._v("STR")]),n("th",[t._v("DEX")]),n("th",[t._v("CON")]),n("th",[t._v("INT")]),n("th",[t._v("WIS")]),n("th",[t._v("CHA")])])}],j=n("2909"),S=(n("a9e3"),n("a1f0"),n("ac1f"),n("5319"),n("1276"),n("a15b"),n("fa7d")),O={name:"monster",props:{monster:Object},data:function(){return{HP:this.monster.hp.average,damage:0,image:"https://5e.tools/img/"+this.monster.source+"/"+this.monster.name+".png",regex:/{@[^{@}]+}/g,showStats:!1}},methods:{hurt:function(){this.damage>this.HP?this.HP=0:this.HP=this.HP-this.damage,this.cleanup()},toggleStats:function(){this.showStats=!this.showStats},heal:function(){var t=this.monster.hp.average-this.HP;this.damage>t?this.HP=this.monster.hp.average:this.HP=this.HP+Number(this.damage),this.cleanup()},cleanup:function(){this.damage=0},remove:function(){this.$emit("remove",this.monster.n)},parse:function(t){var e=Object(j["a"])(t.matchAll(this.regex)),n=t;return e&&e.forEach((function(t){var e=t["0"];e=e.replace(/{|}/g,"");var s=e.split(" "),r=s[0];s.shift();var a="";switch(r){case"@hit":a="+ "+s.join();break;case"@atk":a=S["attackTypes"][s.join("")];break;default:a=s.join(" ")}n=n.replace(t,a)})),n}}},P=O,T=(n("c9b1"),Object(f["a"])(P,k,x,!1,null,"0e122daa",null)),M=T.exports,H=n("2f24"),A={name:"encounter",components:{monster:M},props:{monsters:Array},methods:{remove:function(t){this.$emit("remove",t)}},computed:{combatRating:function(){var t=0;return this.monsters.forEach((function(e){t+=H.Parser.crToNumber(e.cr)})),t},totalXP:function(){var t=0;return this.monsters.forEach((function(e){if(e.cr){var n=S["xpChart"][e.cr];t+=n}})),t},multiplier:function(){var t=this.monsters.length;console.log(t);var e=Object(S["xpMultiplier"])(t);return console.log(e),e}}},E=A,R=(n("5cc7"),Object(f["a"])(E,C,w,!1,null,"49f7e5f6",null)),$=R.exports,F=n("ec26"),N="https://5e.tools/data/bestiary/",X=n("bc3a"),I={name:"App",components:{sidebar:y,encounter:$},data:function(){return{monsters:[],encounter:[],sidebarVisible:!0}},methods:{addMonster:function(t){t.n=Object(F["a"])(),this.encounter.push(Object(i["a"])({},t))},remove:function(t){this.encounter=this.encounter.filter((function(e){return e.n!=t}))},toggleSidebar:function(){this.sidebarVisible=!this.sidebarVisible}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=N+"index.json",e.next=3,X.get(n).then((function(e){Object.entries(e.data).forEach((function(e){X.get(N+e[1]).then((function(e){e.data.monster.forEach((function(e){e.id=Object(F["a"])();try{e.hp.average&&e.ac[0]?t.monsters.push(e):console.log(e.name,e.source,e.hp,e.ac)}catch(n){console.log(e.name,e.source)}}))}))}))}));case 3:case"end":return e.stop()}}),e)})))()}},L=I,V=(n("034f"),Object(f["a"])(L,r,a,!1,null,null,null)),W=V.exports;n("7b17"),n("f9e3"),n("77ed"),n("c93b");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(W)}}).$mount("#app")},"5cc7":function(t,e,n){"use strict";n("cb60")},"74c6":function(t,e,n){},"85ec":function(t,e,n){},bc82:function(t,e,n){"use strict";n("74c6")},c93b:function(t,e,n){},c9b1:function(t,e,n){"use strict";n("dc9d")},cb60:function(t,e,n){},dc9d:function(t,e,n){},fa7d:function(t,e){var n={m:"Melee Attack",r:"Ranged Attack","m,r":"Melee or Ranged Attack",mw:"Melee Weapon Attack",rw:"Ranged Weapon Attack",ms:"Melee Spell Attack",rs:"Ranged Spell Attack","mw,rw":"Melee/Ranged Weapon"},s={0:10,"1/8":25,"1/4":50,"1/2":100,1:200,2:450,3:700,4:1100,5:1800,6:2300,7:2900,8:3900,9:5e3,10:5900,11:7200,12:8400,13:1e4,14:11500,15:13e3,16:13e3,17:15e3,18:18e3,19:2e4,20:25e3,21:33e3,22:41e3,23:5e4,24:62e3,25:75e3,26:9e4,27:105e3,28:12e4,29:135e3,30:155e3};function r(t){var e={0:0,1:1,2:1.5,"3-6":2,"7-10":2.5,"11-14":3,"15+":4};return 0==t?e["0"]:1==t?e["1"]:2==t?e["2"]:t>=3&&t<=6?e["3-6"]:t>=7&&t<=10?e["7-10"]:t>=11&&t<=14?e["11-14"]:t>=15?e["15+"]:void 0}t.exports={attackTypes:n,xpChart:s,xpMultiplier:r}}});
//# sourceMappingURL=app.fcf2bbe5.js.map