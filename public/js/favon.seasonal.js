!function(e){function t(t){for(var r,n,o=t[0],l=t[1],c=t[2],d=0,f=[];d<o.length;d++)n=o[d],a[n]&&f.push(a[n][0]),a[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);f.length;)f.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],r=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=n(n.s=s[0]))}return e}var r={},a={1:0},i=[];function n(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=r,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([207,0]),s()}({13:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=s(17))&&r.__esModule?r:{default:r},i={data:function(){return{filters:a.default.data.filters,store:a.default.data}},props:{showFilter:{type:Boolean,required:!0}},computed:{user:function(){return this.store.user}},methods:{filter:function(){this.$emit("filter")},filterListStatus:function(){this.store.filters.list.values.length!==this.store.list_statuses.length&&(this.store.filters.list.all=!1),this.$emit("filter")},filterGenres:function(){this.store.filters.genres.values.length!==this.store.genreIds.length&&(this.store.filters.genres.all=!1),this.$emit("filter")},filterAllGenres:function(){!0===this.filters.genres.all?this.store.filters.genres.values=this.store.genreIds.slice():this.store.filters.genres.values=[],this.$emit("filter")},filterAllList:function(){!0===this.filters.list.all?this.store.filters.list.values=["not_in_list","ptw","completed","watching","hold","dropped"]:this.store.filters.list.values=[],this.$emit("filter")}}};t.default=i},14:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(s(16)),a=o(s(73)),i=o(s(17)),n=o(s(32));function o(e){return e&&e.__esModule?e:{default:e}}var l={data:function(){return{store:i.default.data,showPopup:!1,status:"ptw",progress:0,score:0,inList:!1,networks:["netflix","hulu","hbo","syfy","amazon","showtime","starz"]}},computed:{user:function(){return this.store.user},listStatusDescription:function(){switch(this.status){case"completed":return"Completed ★ ".concat(this.score);case"watching":return"Watching ".concat(this.progress,"/").concat(this.episodeCount," ★ ").concat(this.score);case"hold":return"On Hold ".concat(this.progress,"/").concat(this.episodeCount," ★ ").concat(this.score);case"dropped":return"Dropped ★ ".concat(this.score);default:return"Plan To Watch"}},episodeCount:function(){return 0===this.tv_season.episode_count?"?":this.tv_season.episode_count},primaryNetwork:function(){return this.tv_season.tv_show.networks[0]?this.tv_season.tv_show.networks[0].name.toLowerCase():null},canIncrement:function(){return 0===this.tv_season.episode_count||this.progress+1<=this.tv_season.episode_count}},created:function(){var e=this;if(n.default.$on("close-all-popups",function(){e.showPopup=!1}),n.default.$on("close-all-popups-except",function(t){t.target!==e.$refs.trigger&&t.target!==e.$refs.list&&(e.showPopup=!1)}),this.tv_season.users&&this.tv_season.users.length>0){this.inList=!0;var t=this.tv_season.users[0].pivot;this.progress=t.progress,this.status=t.status,this.score=t.score?t.score:0}},mounted:function(){r.default.select(this.$refs.select),r.default.select(this.$refs.scoreSelect)},props:{season:{type:Object,required:!0},tv_season:{type:Object,required:!0}},methods:{togglePopup:function(){this.showPopup=!this.showPopup},incrementProgress:function(){0!==this.tv_season.episode_count&&this.progress+1<=this.tv_season.episode_count&&(this.progress+=1)},updateProgress:function(){!this.progress||""===this.progress||this.progress<0?this.progress=0:this.progress>this.tv_season.episode_count&&(this.progress=this.tv_season.episode_count)},submit:function(){var e=this;this.inList?a.default.patch("/api/users/me/seasons/".concat(this.tv_season.id),{tv_season_id:this.tv_season.id,status:this.status,progress:this.progress,score:this.score},{headers:{"X-CSRF-TOKEN":document.head.querySelector("[name=csrf-token]").content}}).then(function(){e.showPopup=!1}).catch(function(e){console.error(e)}):a.default.post("/api/users/me/seasons",{tv_season_id:this.tv_season.id,status:this.status,progress:this.progress,score:this.score},{headers:{"X-CSRF-TOKEN":document.head.querySelector("[name=csrf-token]").content}}).then(function(){e.showPopup=!1,e.inList=!0})},remove:function(){var e=this;a.default.delete("/api/users/me/seasons/".concat(this.tv_season.id)).then(function(){e.inList=!1})}}};t.default=l},17:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={data:{user:null,filters:{sequels:!1,sequelsList:!0,sort:"score",score:0,list:{all:!0,values:["not_in_list","ptw","completed","watching","hold","dropped"]},unrated:!0,genres:{all:!1,values:[]},languages:["en"]},season:{},tv_seasons:[],filtered:[],genres:[],genreIds:[],defaultGenres:["Drama","Comedy","Documentary","Adventure","Fantasy","Crime","Mystery","Romance","Action","Sci-Fi","Horror","Thriller","History","Biography","Western"],list_statuses:[{code:"not_in_list",name:"Not in my list"},{code:"ptw",name:"Plan to Watch"},{code:"watching",name:"Watching"},{code:"completed",name:"Completed"},{code:"hold",name:"On Hold"},{code:"dropped",name:"Dropped"}],languages:[{code:"en",name:"English"},{code:"ja",name:"Japanese"},{code:"de",name:"German"},{code:"fr",name:"French"},{code:"ko",name:"Korean"},{code:"es",name:"Spanish"}]}}},207:function(e,t,s){"use strict";var r=v(s(75)),a=v(s(73)),i=v(s(16)),n=v(s(186)),o=s(185);s(212);var l=v(s(82)),c=v(s(81)),u=v(s(17)),d=v(s(78)),f=v(s(32));function v(e){return e&&e.__esModule?e:{default:e}}r.default.component("tv_season",l.default),r.default.component("filters",c.default),new r.default({el:"#app",data:{store:u.default.data,showFilter:!1},created:function(){var e=this;f.default.$on("close-all-popups",function(){e.showFilter=!1}),f.default.$on("close-all-popups-except",function(t){t.target!==e.$refs.trigger&&t.target.parentNode!==e.$refs.trigger&&(e.showFilter=!1)})},beforeMount:function(){var e=this,t=document.getElementById("currentSeason").dataset.season,s=n.default.getJSON("favon-filters");s&&(this.store.filters=s),a.default.get("/api/seasonal/".concat(t)).then(function(t){var r=t.data;e.store.season=r.season,e.store.tv_seasons=r.tvSeasons,e.formatDates(),s&&e.filter()}),a.default.get("/api/genres").then(function(t){if(e.store.genres=t.data,e.store.genreIds=e.store.genres.map(function(e){return e.id}),!s){var r=e.store.genres.filter(function(t){return e.store.defaultGenres.includes(t.name)});e.store.filters.genres=r.map(function(e){return e.id}),e.filter()}})},mounted:function(){var e=this;a.default.get("/api/users/me").then(function(t){e.store.user=t.data,f.default.$emit("user-received")}).catch(function(){e.store.user=null}),document.addEventListener("click",function(e){null===e.target.closest(".popup, .popup__trigger")&&f.default.$emit("close-all-popups"),null!==e.target.closest(".popup__trigger")&&f.default.$emit("close-all-popups-except",e)}),i.default.select(".select")},methods:{filter:function(){var e=this;n.default.set("favon-filters",this.store.filters,{expires:365}),this.store.filtered=this.store.tv_seasons.filter(function(t){return!1!==d.default.filterSequels(t,e.store.filters.sequelsList,e.store.filters.sequels)&&!1!==d.default.filterByRated(t,e.store.filters.unrated)&&!1!==d.default.filterByScore(t,e.store.filters.score)&&!1!==d.default.filterByGenre(t,e.store.filters.genres.values,e.store.genreIds)&&!1!==d.default.filterByLanguage(t,e.store.filters.languages)&&d.default.filterByListStatus(t,e.store.filters.list.values)}),this.store.filtered=this.store.filtered.sort(function(t,s){return d.default.sortBy(t,s,e.store.filters.sort)})},formatDates:function(){this.store.tv_seasons.forEach(function(e){e.first_aired_string=(0,o.format)(new Date(e.first_aired),"MMM D, YYYY")})},toggleFilter:function(){this.showFilter=!this.showFilter}}})},212:function(e,t){},30:function(e,t,s){"use strict";s.d(t,"a",function(){return r}),s.d(t,"b",function(){return a});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:"popup popup--filters "+(e.showFilter?"is-active":"")},[s("div",{staticClass:"popup__content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"column is-5"},[s("h4",[e._v("Sort By")]),e._v(" "),s("div",{staticClass:"field row"},[s("div",{staticClass:"column is-5"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.filters.sort,expression:"filters.sort"}],staticClass:"select",attrs:{"data-style":"select"},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.filters,"sort",t.target.multiple?s:s[0])},e.filter]}},[s("option",{attrs:{value:"popularity"}},[e._v("Popularity")]),e._v(" "),s("option",{attrs:{value:"score"}},[e._v("Score")]),e._v(" "),s("option",{attrs:{value:"name"}},[e._v("Name")]),e._v(" "),s("option",{attrs:{value:"start_date"}},[e._v("Start Date")]),e._v(" "),s("option",{attrs:{value:"recently_added"}},[e._v("Recently Added")])])])]),e._v(" "),s("h4",[e._v("Score")]),e._v(" "),s("div",{staticClass:"field is-centered row"},[s("label",{staticClass:"column is-4",attrs:{for:"filter--score"}},[e._v("Minimum score")]),e._v(" "),s("div",{staticClass:"column is-4"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.filters.score,expression:"filters.score",modifiers:{number:!0}}],attrs:{type:"text",id:"filter--score"},domProps:{value:e.filters.score},on:{change:e.filter,input:function(t){t.target.composing||e.$set(e.filters,"score",e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})])]),e._v(" "),e.user?[s("h4",[e._v("My List")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.filters.list.all,expression:"filters.list.all"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"filter__list--all"},domProps:{checked:Array.isArray(e.filters.list.all)?e._i(e.filters.list.all,null)>-1:e.filters.list.all},on:{change:[function(t){var s=e.filters.list.all,r=t.target,a=!!r.checked;if(Array.isArray(s)){var i=e._i(s,null);r.checked?i<0&&e.$set(e.filters.list,"all",s.concat([null])):i>-1&&e.$set(e.filters.list,"all",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.filters.list,"all",a)},e.filterAllList]}}),e._v(" "),s("label",{attrs:{for:"filter__list--all"}},[e._v("All")]),e._v(" "),e._l(e.store.list_statuses,function(t){return[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filters.list.values,expression:"filters.list.values"}],key:"input-"+t.code,staticClass:"checkbox",attrs:{type:"checkbox",id:"filter__list--"+t.code},domProps:{value:t.code,checked:Array.isArray(e.filters.list.values)?e._i(e.filters.list.values,t.code)>-1:e.filters.list.values},on:{change:[function(s){var r=e.filters.list.values,a=s.target,i=!!a.checked;if(Array.isArray(r)){var n=t.code,o=e._i(r,n);a.checked?o<0&&e.$set(e.filters.list,"values",r.concat([n])):o>-1&&e.$set(e.filters.list,"values",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.filters.list,"values",i)},e.filterListStatus]}}),e._v(" "),s("label",{key:"label-"+t.code,attrs:{for:"filter__list--"+t.code}},[e._v(e._s(t.name))])]})]:e._e(),e._v(" "),s("h4",[e._v("Misc")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.filters.unrated,expression:"filters.unrated"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"filter__unrated"},domProps:{checked:Array.isArray(e.filters.unrated)?e._i(e.filters.unrated,null)>-1:e.filters.unrated},on:{change:[function(t){var s=e.filters.unrated,r=t.target,a=!!r.checked;if(Array.isArray(s)){var i=e._i(s,null);r.checked?i<0&&e.$set(e.filters,"unrated",s.concat([null])):i>-1&&e.$set(e.filters,"unrated",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.filters,"unrated",a)},e.filter]}}),e._v(" "),s("label",{attrs:{for:"filter__unrated"}},[e._v("Include non-rated shows")]),e._v(" "),e.user?[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filters.sequelsList,expression:"filters.sequelsList"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"filter__sequels--list"},domProps:{checked:Array.isArray(e.filters.sequelsList)?e._i(e.filters.sequelsList,null)>-1:e.filters.sequelsList},on:{change:[function(t){var s=e.filters.sequelsList,r=t.target,a=!!r.checked;if(Array.isArray(s)){var i=e._i(s,null);r.checked?i<0&&e.$set(e.filters,"sequelsList",s.concat([null])):i>-1&&e.$set(e.filters,"sequelsList",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.filters,"sequelsList",a)},e.filter]}}),e._v(" "),s("label",{attrs:{for:"filter__sequels--list"}},[e._v("Always include sequels that are in my list")])]:e._e()],2),e._v(" "),s("div",{staticClass:"column is-6 is-offset-1"},[s("h4",[e._v("Genres")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.filters.genres.all,expression:"filters.genres.all"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"filter__genres--all"},domProps:{checked:Array.isArray(e.filters.genres.all)?e._i(e.filters.genres.all,null)>-1:e.filters.genres.all},on:{change:[function(t){var s=e.filters.genres.all,r=t.target,a=!!r.checked;if(Array.isArray(s)){var i=e._i(s,null);r.checked?i<0&&e.$set(e.filters.genres,"all",s.concat([null])):i>-1&&e.$set(e.filters.genres,"all",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.filters.genres,"all",a)},e.filterAllGenres]}}),e._v(" "),s("label",{attrs:{for:"filter__genres--all"}},[e._v("All")]),e._v(" "),s("div",{staticClass:"row filter__genres is-multiline"},e._l(e.store.genres,function(t){return s("div",{key:t.id,staticClass:"column is-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filters.genres.values,expression:"filters.genres.values"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"filter__genres--"+t.id},domProps:{value:t.id,checked:Array.isArray(e.filters.genres.values)?e._i(e.filters.genres.values,t.id)>-1:e.filters.genres.values},on:{change:[function(s){var r=e.filters.genres.values,a=s.target,i=!!a.checked;if(Array.isArray(r)){var n=t.id,o=e._i(r,n);a.checked?o<0&&e.$set(e.filters.genres,"values",r.concat([n])):o>-1&&e.$set(e.filters.genres,"values",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.filters.genres,"values",i)},e.filterGenres]}}),e._v(" "),s("label",{attrs:{for:"filter__genres--"+t.id}},[e._v(e._s(t.name))])])})),e._v(" "),s("h4",[e._v("Languages")]),e._v(" "),e._l(e.store.languages,function(t){return s("div",{key:t.code,staticClass:"filter__languages"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filters.languages,expression:"filters.languages"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"filter__languages--"+t.code},domProps:{value:t.code,checked:Array.isArray(e.filters.languages)?e._i(e.filters.languages,t.code)>-1:e.filters.languages},on:{change:[function(s){var r=e.filters.languages,a=s.target,i=!!a.checked;if(Array.isArray(r)){var n=t.code,o=e._i(r,n);a.checked?o<0&&e.$set(e.filters,"languages",r.concat([n])):o>-1&&e.$set(e.filters,"languages",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.filters,"languages",i)},e.filter]}}),e._v(" "),s("label",{attrs:{for:"filter__languages--"+t.code}},[e._v(e._s(t.name))])])})],2)])]),e._v(" "),s("div",{staticClass:"popup__arrow"})])},a=[];r._withStripped=!0},31:function(e,t,s){"use strict";s.d(t,"a",function(){return r}),s.d(t,"b",function(){return a});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"column is-4"},[s("div",{staticClass:"card is-seasonal is-winter"},[s("div",{staticClass:"card__head"},[e.primaryNetwork&&e.networks.includes(e.primaryNetwork)?s("img",{attrs:{src:"/images/networks/"+e.primaryNetwork+".png"}}):e._e(),e._v(" "),e.user?[e.inList?s("a",{ref:"list",class:"popup__trigger label__status is-"+e.status+" is-right",on:{click:e.togglePopup}},[e._v("\n          "+e._s(e.listStatusDescription)+"\n        ")]):s("a",{ref:"trigger",staticClass:"popup__trigger button button--list-add is-outline is-tiny is-right",on:{click:e.togglePopup}},[e._v("\n          Add To List\n        ")])]:e._e(),e._v(" "),s("div",{class:"popup popup--list "+(e.showPopup?"is-active":"")},[s("div",{staticClass:"popup__content"},[s("div",{staticClass:"field is-centered row"},[s("label",{staticClass:"column is-3",attrs:{for:"status"}},[e._v("Status")]),e._v(" "),s("div",{staticClass:"column is-9"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.status,expression:"status"}],ref:"select",staticClass:"select",attrs:{name:"status",id:"status"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.status=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"ptw"}},[e._v("Plan To Watch")]),e._v(" "),s("option",{attrs:{value:"watching"}},[e._v("Watching")]),e._v(" "),s("option",{attrs:{value:"completed"}},[e._v("Completed")]),e._v(" "),s("option",{attrs:{value:"hold"}},[e._v("On Hold")]),e._v(" "),s("option",{attrs:{value:"dropped"}},[e._v("Dropped")])])])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"completed"!==e.status&&"ptw"!==e.status,expression:"status !== 'completed' && status !== 'ptw'"}],staticClass:"field is-centered row list__progress"},[s("label",{staticClass:"column is-3",attrs:{for:"progress"}},[e._v("Progress")]),e._v(" "),s("div",{staticClass:"column is-6"},[s("div",{staticClass:"progress__input"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.progress,expression:"progress",modifiers:{number:!0}}],attrs:{type:"number",name:"progress",id:"progress"},domProps:{value:e.progress},on:{change:e.updateProgress,input:function(t){t.target.composing||(e.progress=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),e._v(" "),s("span",[e._v("/ "+e._s(e.episodeCount)+" Eps.")])])]),e._v(" "),s("div",{staticClass:"column is-3 progress__column--3"},[s("button",{staticClass:"button is-info progress__increment",attrs:{disabled:!e.canIncrement},on:{click:e.incrementProgress}},[e._v("\n                + 1\n              ")])])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"ptw"!==e.status,expression:"status !== 'ptw'"}],staticClass:"field is-centered row"},[s("label",{staticClass:"column is-3",attrs:{for:"score"}},[e._v("Score")]),e._v(" "),s("div",{staticClass:"column is-9"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.score,expression:"score"}],ref:"scoreSelect",staticClass:"select",attrs:{name:"score",id:"score"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.score=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"0"}},[e._v("Select a score")]),e._v(" "),s("option",{attrs:{value:"10"}},[e._v("10 - Masterpiece")]),e._v(" "),s("option",{attrs:{value:"9"}},[e._v("9 - Outstanding")]),e._v(" "),s("option",{attrs:{value:"8"}},[e._v("8 - Very Good")]),e._v(" "),s("option",{attrs:{value:"7"}},[e._v("7 - Good")]),e._v(" "),s("option",{attrs:{value:"6"}},[e._v("6 - Fine")]),e._v(" "),s("option",{attrs:{value:"5"}},[e._v("5 - Average")]),e._v(" "),s("option",{attrs:{value:"4"}},[e._v("4 - Underwhelming")]),e._v(" "),s("option",{attrs:{value:"3"}},[e._v("3 - Bad")]),e._v(" "),s("option",{attrs:{value:"2"}},[e._v("2 - Very Bad")]),e._v(" "),s("option",{attrs:{value:"1"}},[e._v("1 - Appalling")])])])]),e._v(" "),s("div",{staticClass:"list__buttons"},[s("button",{staticClass:"button is-info is-narrow button--list",on:{click:e.submit}},[e._v("Save")]),e._v(" "),e.inList?s("button",{staticClass:"button is-danger is-narrow button--list",on:{click:e.remove}},[e._v("\n              Remove from List\n            ")]):e._e()])]),e._v(" "),s("div",{staticClass:"popup__arrow"})])],2),e._v(" "),s("div",{staticClass:"card__body"},[s("div",{staticClass:"body__poster"},[e.tv_season.poster?s("img",{attrs:{src:"https://image.tmdb.org/t/p/w342"+e.tv_season.poster}}):e.tv_season.tv_show.poster?s("img",{attrs:{src:"https://image.tmdb.org/t/p/w342"+e.tv_season.tv_show.poster}}):s("div",{staticClass:"poster__placeholder"},[s("img",{attrs:{src:"/images/poster_placeholder.svg"}})])]),e._v(" "),s("div",{staticClass:"body__description"},[s("h3",{staticClass:"description__title"},[e._v("\n          "+e._s(e.tv_season.tv_show.name)+"\n          "),s("span",{class:"text-"+e.season.name},[e._v(" S"+e._s(e.tv_season.number))])]),e._v(" "),e._l(e.tv_season.tv_show.genres,function(t){return s("span",{key:""+e.tv_season.id+t.id,staticClass:"genre-label"},[e._v("\n          "+e._s(t.name)+"\n        ")])}),e._v(" "),e.tv_season.summary?s("p",{staticClass:"description__plot"},[e._v("\n          "+e._s(e.tv_season.summary)+"\n        ")]):s("p",{staticClass:"description__plot"},[e._v("\n          "+e._s(e.tv_season.tv_show.summary)+"\n        ")])],2)]),e._v(" "),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"flex-left"},[s("span",[e._v(e._s(e.tv_season.first_aired_string))])]),e._v(" "),s("div",{staticClass:"flex-center"},[s("span",[e._v(e._s(e.episodeCount)+" Eps.")])]),e._v(" "),s("div",{staticClass:"flex-right"},[s("img",{attrs:{src:"/images/imdb.svg"}}),e._v(" "),0===e.tv_season.tv_show.imdb_score?s("span",[e._v("N/A")]):s("span",[s("a",{attrs:{href:"http://www.imdb.com/title/"+e.tv_season.tv_show.imdb_id+"/",target:"_blank"}},[e._v("\n            "+e._s(e.tv_season.tv_show.imdb_score)+"\n          ")])]),e._v(" "),s("img",{attrs:{src:"/images/heart.svg"}}),e._v(" "),s("span",[e._v("0")]),e._v(" "),s("img",{attrs:{src:"/images/star.svg"}}),e._v(" "),s("span",[e._v("0")])])])])])},a=[];r._withStripped=!0},32:function(e,t,s){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=new(((r=s(75))&&r.__esModule?r:{default:r}).default);t.default=a},78:function(e,t,s){"use strict";function r(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,s;return t=e,s=[{key:"sortBy",value:function(e,t,s){switch(s){case"score":return this.compareByScore(e,t);case"name":return this.compareByName(e,t);case"start_date":return this.compareByStartDate(e,t);case"recently_added":return this.compareByRecentlyAdded(e,t);default:return this.compareByPopularity(e,t)}}},{key:"filterByGenre",value:function(e,t,s){var r=new Set(t),a=new Set(function(e){return function(e){if(Array.isArray(e)){for(var t=0,s=new Array(e.length);t<e.length;t++)s[t]=e[t];return s}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(s).filter(function(e){return!r.has(e)}));return!e.tv_show.genres.some(function(e){return a.has(e.id)})}},{key:"filterByScore",value:function(e,t){return 0===e.tv_show.imdb_score||e.tv_show.imdb_score>=t}},{key:"filterSequels",value:function(e,t,s){return!!(!0===t&&e.users&&e.users.length>0)||!!s||1===e.number}},{key:"filterByLanguage",value:function(e,t){var s=new Set(t);return e.tv_show.languages.some(function(e){return s.has(e.pivot.language_code)})}},{key:"filterByListStatus",value:function(e,t){var s=new Set(t);if(e.users&&e.users.length>0){var r=e.users[0].pivot.status;return s.has(r)}return s.has("not_in_list")}},{key:"filterByRated",value:function(e,t){return!!t||0!==e.tv_show.imdb_score}},{key:"compareByScore",value:function(e,t){return e.tv_show.imdb_score>t.tv_show.imdb_score?-1:e.tv_show.imdb_score<t.tv_show.imdb_score?1:this.compareByName(e,t)}},{key:"compareByName",value:function(e,t){return e.tv_show.name.localeCompare(t.tv_show.name)}},{key:"compareByStartDate",value:function(e,t){return e.first_aired>t.first_aired?-1:e.first_aired<t.first_aired?1:this.compareByName(e,t)}},{key:"compareByRecentlyAdded",value:function(e,t){return e.created_at>t.created_at?-1:e.created_at<t.created_at?1:this.compareByName(e,t)}},{key:"compareByPopularity",value:function(e,t){return e.tv_show.popularity>t.tv_show.popularity?-1:e.tv_show.popularity<t.tv_show.popularity?1:this.compareByName(e,t)}}],null&&r(t.prototype,null),s&&r(t,s),e}();t.default=a},79:function(e,t,s){(e.exports=s(83)(!1)).push([e.i,"\n.filter__languages {\n  display: inline-block;\n}\n",""])},80:function(e,t,s){var r=s(79);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,s(77).default)("c4e13ce0",r,!1,{})},81:function(e,t,s){"use strict";s.r(t);var r=s(13),a=s.n(r);for(var i in r)"default"!==i&&function(e){s.d(t,e,function(){return r[e]})}(i);var n=s(30),o=s(15),l=Object(o.a)(a.a,n.a,n.b,!1,function(e){s(80)},null,null);l.options.__file="resources/assets/js/seasonal/components/Filters.vue",t.default=l.exports},82:function(e,t,s){"use strict";s.r(t);var r=s(14),a=s.n(r);for(var i in r)"default"!==i&&function(e){s.d(t,e,function(){return r[e]})}(i);var n=s(31),o=s(15),l=Object(o.a)(a.a,n.a,n.b,!1,null,null,null);l.options.__file="resources/assets/js/seasonal/components/TvSeasonCard.vue",t.default=l.exports}});