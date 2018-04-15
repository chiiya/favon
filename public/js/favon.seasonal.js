!function(e){function t(t){for(var r,n,l=t[0],o=t[1],c=t[2],f=0,_=[];f<l.length;f++)n=l[f],a[n]&&_.push(a[n][0]),a[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(u&&u(t);_.length;)_.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],r=!0,l=1;l<s.length;l++){var o=s[l];0!==a[o]&&(r=!1)}r&&(i.splice(t--,1),e=n(n.s=s[0]))}return e}var r={},a={1:0},i=[];function n(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=r,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;i.push([206,0]),s()}({13:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=s(31))&&r.__esModule?r:{default:r},i={data:function(){return{filters:a.default.data.filters,store:a.default.data}},props:{showFilter:{type:Boolean,required:!0}},methods:{filter:function(){this.$emit("filter")},filterAllGenres:function(){!0===this.filters.genres.all?this.store.filters.genres.values=this.store.genreIds.slice():this.store.filters.genres.values=[],this.$emit("filter")}}};t.default=i},14:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:{season:{type:Object,required:!0},tv_season:{type:Object,required:!0}}};t.default=r},206:function(e,t,s){"use strict";var r=_(s(205)),a=_(s(202)),i=_(s(30)),n=_(s(183)),l=s(182);s(211);var o=_(s(79)),c=_(s(78)),u=_(s(31)),f=_(s(75));function _(e){return e&&e.__esModule?e:{default:e}}r.default.component("tv_season",o.default),r.default.component("filters",c.default),new r.default({el:"#app",data:{store:u.default.data,showFilter:!1},beforeMount:function(){var e=this,t=document.getElementById("currentSeason").dataset.season,s=n.default.getJSON("favon-filters");s&&(this.store.filters=s),a.default.get("/api/seasonal/".concat(t)).then(function(t){var s=t.data;e.store.season=s.season,e.store.tv_seasons=s.tvSeasons,e.formatDates(),e.filter()}),a.default.get("/api/genres").then(function(t){e.store.genres=t.data,e.store.genreIds=e.store.genres.map(function(e){return e.id})})},mounted:function(){var e=this;document.addEventListener("click",function(t){null===t.target.closest(".popup, .popup__trigger")&&(e.showFilter=!1)}),i.default.select(".select")},methods:{filter:function(){var e=this;n.default.set("favon-filters",this.store.filters,{expires:365}),this.store.filtered=this.store.tv_seasons.filter(function(t){return!1!==f.default.filterSequels(t,e.store.filters.sequels)&&!1!==f.default.filterByScore(t,e.store.filters.score)&&!1!==f.default.filterByGenre(t,e.store.filters.genres.values,e.store.genreIds)&&f.default.filterByLanguage(t,e.store.filters.languages)}),this.store.filtered=this.store.filtered.sort(function(t,s){return f.default.sortBy(t,s,e.store.filters.sort)})},formatDates:function(){this.store.tv_seasons.forEach(function(e){e.first_aired_string=(0,l.format)(new Date(e.first_aired),"MMM D, YYYY")})}}})},211:function(e,t){},28:function(e,t,s){"use strict";s.d(t,"a",function(){return r}),s.d(t,"b",function(){return a});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:"popup popup--filters "+(e.showFilter?"is-active":"")},[s("div",{staticClass:"popup__content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"column is-5"},[s("h4",[e._v("Sort By")]),e._v(" "),s("div",{staticClass:"field row"},[s("div",{staticClass:"column is-5"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.filters.sort,expression:"filters.sort"}],staticClass:"select",attrs:{"data-style":"select"},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.filters,"sort",t.target.multiple?s:s[0])},e.filter]}},[s("option",{attrs:{value:"popularity"}},[e._v("Popularity")]),e._v(" "),s("option",{attrs:{value:"score"}},[e._v("Score")]),e._v(" "),s("option",{attrs:{value:"name"}},[e._v("Name")]),e._v(" "),s("option",{attrs:{value:"start_date"}},[e._v("Start Date")]),e._v(" "),s("option",{attrs:{value:"recently_added"}},[e._v("Recently Added")])])])]),e._v(" "),s("h4",[e._v("Score")]),e._v(" "),s("div",{staticClass:"field is-centered row"},[s("label",{staticClass:"column is-4",attrs:{for:"filter--score"}},[e._v("Minimum score")]),e._v(" "),s("div",{staticClass:"column is-4"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.filters.score,expression:"filters.score",modifiers:{number:!0}}],attrs:{type:"text",id:"filter--score"},domProps:{value:e.filters.score},on:{change:e.filter,input:function(t){t.target.composing||e.$set(e.filters,"score",e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})])]),e._v(" "),s("h4",[e._v("My List")]),e._v(" "),s("input",{staticClass:"checkbox",attrs:{type:"checkbox",id:"filter__list--all",checked:""}}),e._v(" "),s("label",{attrs:{for:"filter__list--all"}},[e._v("All")]),e._v(" "),s("input",{staticClass:"checkbox",attrs:{type:"checkbox",id:"filter__list--not"}}),e._v(" "),s("label",{attrs:{for:"filter__list--not"}},[e._v("Not in my list")]),e._v(" "),s("input",{staticClass:"checkbox",attrs:{type:"checkbox",id:"filter__list--watching"}}),e._v(" "),s("label",{attrs:{for:"filter__list--watching"}},[e._v("Watching")]),e._v(" "),s("input",{staticClass:"checkbox",attrs:{type:"checkbox",id:"filter__list--ptw"}}),e._v(" "),s("label",{attrs:{for:"filter__list--ptw"}},[e._v("Plan To Watch")]),e._v(" "),s("input",{staticClass:"checkbox",attrs:{type:"checkbox",id:"filter__list--completed"}}),e._v(" "),s("label",{attrs:{for:"filter__list--completed"}},[e._v("Completed")]),e._v(" "),s("input",{staticClass:"checkbox",attrs:{type:"checkbox",id:"filter__list--dropped"}}),e._v(" "),s("label",{attrs:{for:"filter__list--dropped"}},[e._v("Dropped")])]),e._v(" "),s("div",{staticClass:"column is-6 is-offset-1"},[s("h4",[e._v("Genres")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.filters.genres.all,expression:"filters.genres.all"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"filter__genres--all"},domProps:{checked:Array.isArray(e.filters.genres.all)?e._i(e.filters.genres.all,null)>-1:e.filters.genres.all},on:{change:[function(t){var s=e.filters.genres.all,r=t.target,a=!!r.checked;if(Array.isArray(s)){var i=e._i(s,null);r.checked?i<0&&(e.filters.genres.all=s.concat([null])):i>-1&&(e.filters.genres.all=s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.filters.genres,"all",a)},e.filterAllGenres]}}),e._v(" "),s("label",{attrs:{for:"filter__genres--all"}},[e._v("All")]),e._v(" "),s("div",{staticClass:"row filter__genres is-multiline"},e._l(e.store.genres,function(t){return s("div",{key:t.id,staticClass:"column is-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filters.genres.values,expression:"filters.genres.values"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"filter__genres--"+t.id},domProps:{value:t.id,checked:Array.isArray(e.filters.genres.values)?e._i(e.filters.genres.values,t.id)>-1:e.filters.genres.values},on:{change:[function(s){var r=e.filters.genres.values,a=s.target,i=!!a.checked;if(Array.isArray(r)){var n=t.id,l=e._i(r,n);a.checked?l<0&&(e.filters.genres.values=r.concat([n])):l>-1&&(e.filters.genres.values=r.slice(0,l).concat(r.slice(l+1)))}else e.$set(e.filters.genres,"values",i)},e.filter]}}),e._v(" "),s("label",{attrs:{for:"filter__genres--"+t.id}},[e._v(e._s(t.name))])])})),e._v(" "),s("h4",[e._v("Languages")]),e._v(" "),e._l(e.store.languages,function(t){return s("div",{key:t.code,staticClass:"filter__languages"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filters.languages,expression:"filters.languages"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"filter__languages--"+t.code},domProps:{value:t.code,checked:Array.isArray(e.filters.languages)?e._i(e.filters.languages,t.code)>-1:e.filters.languages},on:{change:[function(s){var r=e.filters.languages,a=s.target,i=!!a.checked;if(Array.isArray(r)){var n=t.code,l=e._i(r,n);a.checked?l<0&&(e.filters.languages=r.concat([n])):l>-1&&(e.filters.languages=r.slice(0,l).concat(r.slice(l+1)))}else e.$set(e.filters,"languages",i)},e.filter]}}),e._v(" "),s("label",{attrs:{for:"filter__languages--"+t.code}},[e._v(e._s(t.name))])])})],2)])]),e._v(" "),s("div",{staticClass:"popup__arrow"})])},a=[];r._withStripped=!0},29:function(e,t,s){"use strict";s.d(t,"a",function(){return r}),s.d(t,"b",function(){return a});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"column is-4"},[s("div",{staticClass:"card is-seasonal is-winter"},[s("div",{staticClass:"card__head"}),e._v(" "),s("div",{staticClass:"card__body"},[s("div",{staticClass:"body__poster"},[e.tv_season.poster?s("img",{attrs:{src:"http://image.tmdb.org/t/p/w342"+e.tv_season.poster}}):e.tv_season.tv_show.poster?s("img",{attrs:{src:"http://image.tmdb.org/t/p/w342"+e.tv_season.tv_show.poster}}):s("div",{staticClass:"poster__placeholder"},[s("img",{attrs:{src:"/images/poster_placeholder.svg"}})])]),e._v(" "),s("div",{staticClass:"body__description"},[s("h3",{staticClass:"description__title"},[e._v("\n          "+e._s(e.tv_season.tv_show.name)+"\n          "),s("span",{class:"text-"+e.season.name},[e._v(" S"+e._s(e.tv_season.number))])]),e._v(" "),e._l(e.tv_season.tv_show.genres,function(t){return s("span",{key:""+e.tv_season.id+t.id,staticClass:"genre-label"},[e._v("\n          "+e._s(t.name)+"\n        ")])}),e._v(" "),e.tv_season.summary?s("p",{staticClass:"description__plot"},[e._v("\n          "+e._s(e.tv_season.summary)+"\n        ")]):s("p",{staticClass:"description__plot"},[e._v("\n          "+e._s(e.tv_season.tv_show.summary)+"\n        ")])],2)]),e._v(" "),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"flex-left"},[s("span",[e._v(e._s(e.tv_season.first_aired_string))])]),e._v(" "),s("div",{staticClass:"flex-center"},[s("span",[e._v(e._s(e.tv_season.tv_episodes_count)+" Eps")]),e._v(" "),s("span",{staticClass:"footer__network"},[e._v(e._s(e.tv_season.tv_show.networks[0].name))])]),e._v(" "),s("div",{staticClass:"flex-right"},[s("img",{attrs:{src:"/images/imdb.svg"}}),e._v(" "),0===e.tv_season.tv_show.imdb_score?s("span",[e._v("N/A")]):s("span",[s("a",{attrs:{href:"http://www.imdb.com/title/"+e.tv_season.tv_show.imdb_id+"/"}},[e._v(e._s(e.tv_season.tv_show.imdb_score))])]),e._v(" "),s("img",{attrs:{src:"/images/heart.svg"}}),e._v(" "),s("span",[e._v("0")]),e._v(" "),s("img",{attrs:{src:"/images/star.svg"}}),e._v(" "),s("span",[e._v("0")])])])])])},a=[];r._withStripped=!0},31:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={data:{filters:{sequels:!1,sort:"score",score:0,list:{all:!0,values:[]},genres:{all:!1,values:[1,2,3,4,5,6,7,8,9,10,14,15,16,17,19,20,21,24,25,26,27,28,30]},languages:["en","ja"]},season:{},tv_seasons:[],filtered:[],genres:[],genreIds:[],languages:[{code:"en",name:"English"},{code:"ja",name:"Japanese"},{code:"de",name:"German"},{code:"fr",name:"French"},{code:"ko",name:"Korean"},{code:"es",name:"Spanish"}]}}},75:function(e,t,s){"use strict";function r(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,s;return t=e,s=[{key:"sortBy",value:function(e,t,s){switch(s){case"score":return this.compareByScore(e,t);case"name":return this.compareByName(e,t);case"start_date":return this.compareByStartDate(e,t);case"recently_added":return this.compareByRecentlyAdded(e,t);default:return this.compareByPopularity(e,t)}}},{key:"filterByGenre",value:function(e,t,s){var r=new Set(t),a=new Set(function(e){if(Array.isArray(e)){for(var t=0,s=new Array(e.length);t<e.length;t++)s[t]=e[t];return s}return Array.from(e)}(s).filter(function(e){return!r.has(e)}));return!e.tv_show.genres.some(function(e){return a.has(e.id)})}},{key:"filterByScore",value:function(e,t){return 0===e.tv_show.imdb_score||e.tv_show.imdb_score>=t}},{key:"filterSequels",value:function(e,t){return!!t||1===e.number}},{key:"filterByLanguage",value:function(e,t){var s=new Set(t);return e.tv_show.languages.some(function(e){return s.has(e.pivot.language_code)})}},{key:"compareByScore",value:function(e,t){return e.tv_show.imdb_score>t.tv_show.imdb_score?-1:e.tv_show.imdb_score<t.tv_show.imdb_score?1:0}},{key:"compareByName",value:function(e,t){return e.tv_show.name.localeCompare(t.tv_show.name)}},{key:"compareByStartDate",value:function(e,t){return e.first_aired>t.first_aired?-1:e.first_aired<t.first_aired?1:this.compareByName(e,t)}},{key:"compareByRecentlyAdded",value:function(e,t){return e.created_at>t.created_at?-1:e.created_at<t.created_at?1:this.compareByName(e,t)}},{key:"compareByPopularity",value:function(e,t){return e.tv_show.popularity>t.tv_show.popularity?-1:e.tv_show.popularity<t.tv_show.popularity?1:this.compareByName(e,t)}}],null&&r(t.prototype,null),s&&r(t,s),e}();t.default=a},76:function(e,t,s){(e.exports=s(80)(!1)).push([e.i,"\n.filter__languages {\n  display: inline-block;\n}\n",""])},77:function(e,t,s){var r=s(76);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,s(74).default)("c4e13ce0",r,!1,{})},78:function(e,t,s){"use strict";s.r(t);var r=s(13),a=s.n(r);for(var i in r)"default"!==i&&function(e){s.d(t,e,function(){return r[e]})}(i);var n=s(28),l=s(15),o=Object(l.a)(a.a,n.a,n.b,!1,function(e){s(77)},null,null);o.options.__file="resources/assets/js/seasonal/components/Filters.vue",t.default=o.exports},79:function(e,t,s){"use strict";s.r(t);var r=s(14),a=s.n(r);for(var i in r)"default"!==i&&function(e){s.d(t,e,function(){return r[e]})}(i);var n=s(29),l=s(15),o=Object(l.a)(a.a,n.a,n.b,!1,null,null,null);o.options.__file="resources/assets/js/seasonal/components/TvSeasonCard.vue",t.default=o.exports}});