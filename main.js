!function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){},function(t,e,r){"use strict";r.r(e);r(0);class i{constructor(t,e,r){this.el=t,this.data=e,this.time=r,this.selectAttr=0,this.selectData=["id","title","year","imdb"],this.ascending=!0,this.counter=0,this._createRows()}static _generateArrow(t,e){const r=document.querySelector(`[data-name-head=${t}]`),i=document.querySelector(".js-arrow-sort"),n=document.createElement("span");null!==i&&i.remove(),n.className="js-arrow-sort",n.innerHTML=e,r.appendChild(n)}sortBy(){const t=document.querySelector(this.el),e=this.selectData[this.selectAttr],r=this.data[this.counter];if(this.counter+1===this.data.length&&(this.ascending=!1),this.ascending&&this.counter+1<this.data.length){const t=this.data[this.counter+1];r[e]>t[e]&&(this.data.splice(this.counter,1,t),this.data.splice(this.counter+1,1,r)),i._generateArrow(e,"&#x2193"),this.counter+=1}else{const t=this.data[this.counter-1];r[e]>t[e]&&(this.data.splice(this.counter-1,1,r),this.data.splice(this.counter,1,t)),i._generateArrow(e,"&#x2191"),1===this.counter&&(this.selectAttr+=1,this.selectAttr===this.selectData.length&&(this.selectAttr=0),this.ascending=!0),this.counter-=1}console.log(this.counter),t.innerHTML="",this._createRows()}_createRows(){const t=document.querySelector(this.el);for(const e of this.data){const r=document.createElement("tr");r.innerHTML=`<td>${e.id}</td><td>${e.title}</td><td>(${e.year})</td><td>imdb: ${e.imdb}</td>`,r.className="js-table-tr",r.setAttribute("data-id",e.id),r.setAttribute("data-title",e.title),r.setAttribute("data-year",e.year),r.setAttribute("data-imdb",e.imdb),t.appendChild(r)}}}const n=new i(".js-table-body",[{id:26,title:"Побег из Шоушенка",imdb:9.3,year:1994},{id:25,title:"Крёстный отец",imdb:9.2,year:1972},{id:27,title:"Крёстный отец 2",imdb:9,year:1974},{id:1047,title:"Тёмный рыцарь",imdb:9,year:2008},{id:223,title:"Криминальное чтиво",imdb:8.9,year:1994}]);setInterval(n.sortBy.bind(n),1e3)}]);