"use strict";(self["webpackChunkvue2_music"]=self["webpackChunkvue2_music"]||[]).push([[914],{914:function(s,t,e){e.r(t),e.d(t,{default:function(){return z}});var i=function(){var s=this,t=s._self._c;return t("div",{staticClass:"search"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.value,expression:"value"}],ref:"searchinput",attrs:{type:"text",placeholder:"搜索歌曲、歌手、专辑",saveHistory:s.saveHistory},domProps:{value:s.value},on:{keyup:function(t){return!t.type.indexOf("key")&&s._k(t.keyCode,"enter",13,t.key,"Enter")?null:s.saveHistory.apply(null,arguments)},focus:function(t){s.resSong=[],s.isResult=!1},input:function(t){t.target.composing||(s.value=t.target.value)}}}),t("svg",{staticClass:"icon",attrs:{t:"1663728100517",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2367",width:"200",height:"200"}},[t("path",{attrs:{d:"M469.333 192c153.174 0 277.334 124.16 277.334 277.333 0 68.054-24.534 130.411-65.216 178.688L846.336 818.24l-48.341 49.877L630.4 695.125a276.053 276.053 0 0 1-161.067 51.542C316.16 746.667 192 622.507 192 469.333S316.16 192 469.333 192z m0 64C351.51 256 256 351.51 256 469.333s95.51 213.334 213.333 213.334 213.334-95.51 213.334-213.334S587.157 256 469.333 256z","p-id":"2368",fill:"rgb(191, 191, 191)"}})]),t("span",{directives:[{name:"show",rawName:"v-show",value:!s.isSee,expression:"!isSee"}],on:{click:function(t){s.value="",s.resSong=[]}}},[s._v("×")]),t("div",{staticClass:"line"}),s.isSee?t("p",[s._v("热门搜索")]):s._e(),s.isSee?t("ul",{staticClass:"dis"},s._l(s.searchRes,(function(e){return t("SearchItem",{key:e.id,attrs:{search:e},on:{clickSearch:function(t){return s.clickHandler(e.first)}}})})),1):s._e(),s.resSong&&s.isSee?t("ul",{staticClass:"history"},s._l(s.history,(function(e,i){return t("li",{key:i,staticClass:"history-li",on:{click:function(t){return s.clickHandler(e)}}},[s._v(" "+s._s(e)+" "),t("i",{on:{click:function(t){return t.stopPropagation(),s.deleteLocal(e)}}},[s._v("×")])])})),0):s._e(),s.isSee||s.isResult?s._e():t("SearchRes",{attrs:{keywords:s.keywords,value:s.value},on:{song:function(t){s.value=t,s.isResult=!0,s.saveHistory()}}}),s.isResult&&!s.isSee?t("div",{staticClass:"searchSong"},[t("p",{directives:[{name:"show",rawName:"v-show",value:0!==s.resSong.length,expression:"resSong.length !== 0"}],staticClass:"best"},[s._v("最佳匹配")]),t("SearchSingerCard",{attrs:{singer:s.singer,cd:s.cd}}),t("ul",s._l(s.resSong,(function(e){return t("SearchSong",{key:e?.id,attrs:{song:e,resSong:s.resSong,autoplay:s.autoplay,res:s.res},on:{clickHandler:function(t){return s.$emit("clickHandler",t)}}})})),1)],1):s._e()],1)},a=[],r=(e(541),function(){var s=this,t=s._self._c;return t("div",{staticClass:"search-item"},[t("span",{on:{click:function(t){return s.$emit("clickSearch",s.search.first)}}},[s._v(s._s(s.search.first))])])}),n=[],l={props:{search:Object}},o=l,c=e(1001),u=(0,c.Z)(o,r,n,!1,null,"2a20d108",null),h=u.exports,d=function(){var s=this,t=s._self._c;return t("div",{staticClass:"search-res"},[t("p",[s._v('搜索: "'+s._s(s.value)+'"')]),t("ul",s._l(s.keywords?.allMatch,(function(e,i){return t("li",{key:i,on:{click:function(t){s.$emit("song",e.keyword),s.clickHandler(e)}}},[t("svg",{staticClass:"icon",attrs:{t:"1663728100517",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2367",width:"200",height:"200"}},[t("path",{attrs:{d:"M469.333 192c153.174 0 277.334 124.16 277.334 277.333 0 68.054-24.534 130.411-65.216 178.688L846.336 818.24l-48.341 49.877L630.4 695.125a276.053 276.053 0 0 1-161.067 51.542C316.16 746.667 192 622.507 192 469.333S316.16 192 469.333 192z m0 64C351.51 256 256 351.51 256 469.333s95.51 213.334 213.333 213.334 213.334-95.51 213.334-213.334S587.157 256 469.333 256z","p-id":"2368",fill:"rgb(191, 191, 191)"}})]),s._v(" "+s._s(e.keyword)+" ")])})),0)])},p=[],g={props:["keywords","value"],created(){},methods:{clickHandler:function(s){this.song=s}}},v=g,m=(0,c.Z)(v,d,p,!1,null,"3a3f526b",null),f=m.exports,y=function(){var s=this,t=s._self._c;return t("li",{staticClass:"song-item",on:{click:function(t){return s.$emit("clickHandler",[s.song,s.resSong])}}},[t("div",{staticClass:"big"},[t("div",{staticClass:"left",style:{color:s.res.id==s.song.id?"red":"black"}},[t("h5",[s._v(s._s(s.song.name))]),t("div",{staticClass:"caikai"},[t("div",{class:{sq:s.song.sq}}),t("span",[s._v(s._s(s.song.ar[0]?.name)+" - "+s._s(s.song?.al.name))])])]),s.res.id!=s.song.id?t("div",{staticClass:"play"}):s._e(),s.res.id==s.song.id?t("div",{staticClass:"playing",class:{active:s.autoplay}},[t("span"),t("span"),t("span"),t("span")]):s._e()])])},w=[],k={props:["song","resSong","res","autoplay"]},_=k,S=(0,c.Z)(_,y,w,!1,null,"e28a0f46",null),C=S.exports,x=(e(7658),function(){var s=this,t=s._self._c;return t("div",{staticClass:"singer-card"},[s._l(s.singer,(function(e){return t("div",{key:e.id,staticClass:"singerName"},[t("img",{attrs:{src:e?.img1v1Url+"?imageView=1&type=webp&thumbnail=50x0",alt:""}}),t("div",{staticClass:"singer"},[t("div",{staticClass:"fenkai1"},[t("span",{on:{click:function(t){return s.$router.push({path:"/artist",query:{id:e.id}})}}},[s._v("歌手:"+s._s(e.name)+"("+s._s(e?.alias[0])+")")]),t("svg",{staticClass:"next",attrs:{t:"1664181437728",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3660",width:"200",height:"200"}},[t("path",{attrs:{d:"M693.792 498.24l-320-297.664a32 32 0 0 0-43.584 46.848l295.36 274.752-295.84 286.848a31.968 31.968 0 1 0 44.544 45.92l320-310.272a31.968 31.968 0 0 0-0.48-46.4","p-id":"3661",fill:"#8a8a8a"}})])])])])})),s._l(s.cd,(function(e){return t("div",{key:e.id,staticClass:"cd"},[t("img",{attrs:{src:e?.picUrl+"?imageView=1&type=webp&thumbnail=101x0",alt:""}}),t("div",{staticClass:"cd-name",on:{click:function(t){return s.$router.push({path:"/ablum",query:{id:e.id}})}}},[t("div",{staticClass:"fenkai2"},[t("div",{staticClass:"wenzi"},[t("span",[s._v("专辑:"+s._s(s.name))]),t("p",[s._v(s._s(s.name))])]),t("svg",{staticClass:"next",attrs:{t:"1664181437728",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3660",width:"200",height:"200"}},[t("path",{attrs:{d:"M693.792 498.24l-320-297.664a32 32 0 0 0-43.584 46.848l295.36 274.752-295.84 286.848a31.968 31.968 0 1 0 44.544 45.92l320-310.272a31.968 31.968 0 0 0-0.48-46.4","p-id":"3661",fill:"#8a8a8a"}})])])])])}))],2)}),b=[],$={props:["singer","cd"],computed:{name(){let s=[];return this.cd.forEach((t=>{s.push(t.name)})),s.join("/")},sing(){let s=[];return this.singer.forEach((t=>{s.push(t.name)})),s.join("/")}}},H=$,R=(0,c.Z)(H,x,b,!1,null,"7dc8b920",null),N=R.exports,I={components:{SearchItem:h,SearchRes:f,SearchSong:C,SearchSingerCard:N},props:["res","autoplay"],data:function(){return{searchRes:[],value:"",keywords:[],history:JSON.parse(localStorage.getItem("song"))||[],resSong:[],isResult:"",singer:[],cd:null}},computed:{isSee(){return""==this.value}},methods:{clickSearchItem:function(s){this.value=s,this.axios.get("https://apis.netstart.cn/music/cloudsearch",{params:{keywords:this.value,limit:30,offset:0}}).then((s=>{this.isResult=!0,this.resSong=s.data.result.songs,this.$emit("updata-loading")})),this.axios("https://apis.netstart.cn/music/search/multimatch",{params:{keywords:this.value}}).then((s=>{this.singer=s.data.result.artist,this.cd=s.data.result.album,this.$emit("updata-loading")}))},saveHistory:function(){""!=this.$refs.searchinput.value&&(this.history.unshift(this.value),this.$refs.searchinput.blur(),this.axios.get("https://apis.netstart.cn/music/cloudsearch",{params:{keywords:this.value,limit:30,offset:0}}).then((s=>{this.isResult=!0,this.resSong=s.data.result.songs,this.$emit("updata-loading")})),this.axios("https://apis.netstart.cn/music/search/multimatch",{params:{keywords:this.value}}).then((s=>{this.singer=s.data.result.artist,this.cd=s.data.result.album,this.$emit("updata-loading")})))},clickHandler:function(s){this.axios.get("https://apis.netstart.cn/music/cloudsearch",{params:{keywords:s,limit:30,offset:0}}).then((s=>{this.isResult=!0,this.resSong=s.data.result.songs,this.$emit("updata-loading")})),this.axios("https://apis.netstart.cn/music/search/multimatch",{params:{keywords:s}}).then((s=>{this.singer=s.data.result.artist,this.cd=s.data.result.album,this.$emit("updata-loading")})),this.history.unshift(s),this.history=[...new Set(this.history)],this.value=s},getKeyworlds:function(s){this.axios.get("https://apis.netstart.cn/music/search/suggest",{params:{keywords:s,type:"mobile"}}).then((s=>{this.keywords=s.data.result.allMatch,this.$emit("updata-loading")}))},deleteLocal:function(s){this.history=this.history.filter((t=>t!==s)),localStorage.setItem("song",JSON.stringify(this.history))}},created(){this.axios.get("https://apis.netstart.cn/music/search/hot").then((s=>{this.searchRes=s.data.result.hots,this.$emit("updata-loading")}))},watch:{value:function(s){null!==s&&this.axios.get("https://apis.netstart.cn/music/search/suggest",{params:{keywords:s,type:"mobile"}}).then((s=>{this.keywords=s.data.result,this.$emit("updata-loading")}))},history(s){localStorage.setItem("song",JSON.stringify(s))}}},L=I,M=(0,c.Z)(L,i,a,!1,null,"58468928",null),z=M.exports}}]);
//# sourceMappingURL=914.74eee69c.js.map