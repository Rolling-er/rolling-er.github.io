"use strict";(self["webpackChunkvue2_music"]=self["webpackChunkvue2_music"]||[]).push([[627],{627:function(t,s,a){a.r(s),a.d(s,{default:function(){return h}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"big"},[s("div",{staticClass:"pic",style:t.songcardheade?.coverImgUrl&&`background-image: URL(${t.songcardheade.coverImgUrl}?imageView=1&type=webp&thumbnail=370x0)`},[s("div",{staticClass:"leftImg"},[s("span",[t._v("歌单")]),s("p",{staticClass:"play"},[t._v(" "+t._s(t.songcardheade.playCount/1e4>1e4?(t.songcardheade.playCount/1e8).toFixed(1)+"亿":(t.songcardheade.playCount/1e4).toFixed(1)+"万")+" ")]),s("img",{attrs:{src:t.songcardheade?.coverImgUrl&&`${t.songcardheade.coverImgUrl}?imageView=1&type=webp&thumbnail=253x0`,alt:""}})]),s("div",{staticClass:"rightDes"},[s("span",{staticClass:"biaoti"},[t._v(t._s(t.songcardheade.name))]),s("img",{staticClass:"active",attrs:{src:t.songcardheade?.creator&&t.songcardheade?.creator?.avatarUrl+"?imageView=1&type=webp&thumbnail=61x0",alt:""}}),s("span",{staticClass:"activename"},[t._v(t._s(t.songcardheade?.creator?.nickname))])])]),s("p",{staticClass:"head"},[t._v("歌曲列表")]),s("ul",{staticClass:"sing"},t._l(t.song,(function(a,e){return s("li",{key:e,on:{click:function(s){return t.$emit("clickHandler",[a,t.song])}}},[s("div",{staticClass:"left",style:{color:t.res.id==a.id?"red":"black"}},[s("span",{staticClass:"index"},[t._v(t._s(e+1))]),s("div",{staticClass:"singer"},[s("div",{staticClass:"songnane"},[t._v(t._s(a?.name))]),s("p",{staticClass:"song"},[t._v(t._s(a.ar[0].name)+" - "+t._s(a.al.name))])])]),t.res.id!=a.id?s("div",{staticClass:"hot-play"}):t._e(),t.res.id==a.id?s("div",{staticClass:"playing",class:{running:t.autoplay}},[s("span"),s("span"),s("span"),s("span")]):t._e()])})),0),s("CommentsDetails",{attrs:{hotcomments:t.hotcomments,newcomments:t.newcomments,total:t.total}})],1)},i=[],n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"comments-details"},[s("ul",{staticClass:"hotComments"},[s("p",[t._v("精彩评论")]),t._l(t.hotcomments,(function(a,e){return s("li",{key:e},[s("img",{attrs:{src:a?.user?.avatarUrl,alt:""}}),s("div",{staticClass:"user"},[s("div",{staticClass:"like"},[t._v(" "+t._s(a.likedCount)+" "),s("svg",{staticClass:"u-svg u-svg-unzancmt",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"}},[s("path",{attrs:{fill:"#999",d:"m25.857 14.752c-.015.059-1.506 5.867-2.932 8.813-1.162 2.402-3 2.436-3.099 2.436h-12.826v-13c3 0 5.728-4 5.728-7.275 0-3.725 1.433-3.725 2.142-3.725 1.327 0 1.978 1.345 1.978 4 0 2.872-.832 4.525-.839 4.537-.161.31-.155.682.027.981.181.299.5.482.849.482h6.942c.922 0 1.551.215 1.866.64.467.626.286 1.705.164 2.112m-23.857 10.248v-10c0-1.795.659-1.981.855-2h2.145v13h-2.173c-.829 0-.827-.648-.827-1m25.309-13.54c-.713-.969-1.886-1.46-3.482-1.46h-5.519c.26-.932.519-2.285.519-4 0-5.221-2.507-6-4-6-1.909 0-4.185.993-4.185 5.725 0 2.206-1.923 5.275-3.815 5.275h-4-.011c-1.034.011-2.816.862-2.816 4v10.02c0 1.198.675 2.979 2.827 2.979h16.971.035c.364 0 3.224-.113 4.894-3.564 1.514-3.127 3.01-8.942 3.056-9.14.071-.23.664-2.289-.474-3.836"}})])]),s("span",{staticClass:"username"},[t._v(t._s(a.user.nickname)+" "),s("span",{staticClass:"vip",style:"backgroundImage:url("+a?.user?.vipRights?.associator?.iconUrl+")"})]),s("p",{staticClass:"time"},[t._v(" "+t._s(a.timeStr.split("-")[0])+"年"+t._s(a.timeStr.split("-")[1])+"月"+t._s(a.timeStr.split("-")[2])+"日 ")]),0!=a.beReplied.length?s("span",{staticClass:"comment"},[t._v(" 回复"+t._s("@"+a?.beReplied[0]?.user?.nickname+"："+a?.content)+" "),s("span",{staticClass:"reply"},[t._v(" "+t._s("@"+a?.beReplied[0]?.user?.nickname+"："+a?.beReplied[0]?.content))])]):s("span",{staticClass:"comment"},[t._v(t._s(a.content)+" ")])])])}))],2),s("ul",{staticClass:"newComments"},[s("p",[t._v("最新评论"+t._s("("+t.total+")"))]),t._l(t.newcomments,(function(a,e){return s("li",{key:e},[s("img",{attrs:{src:a?.user?.avatarUrl,alt:""}}),s("div",{staticClass:"user"},[s("div",{staticClass:"like"},[t._v(" "+t._s(a.likedCount?a.likedCount:"")+" "),s("svg",{staticClass:"u-svg u-svg-unzancmt",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"}},[s("path",{attrs:{fill:"#999",d:"m25.857 14.752c-.015.059-1.506 5.867-2.932 8.813-1.162 2.402-3 2.436-3.099 2.436h-12.826v-13c3 0 5.728-4 5.728-7.275 0-3.725 1.433-3.725 2.142-3.725 1.327 0 1.978 1.345 1.978 4 0 2.872-.832 4.525-.839 4.537-.161.31-.155.682.027.981.181.299.5.482.849.482h6.942c.922 0 1.551.215 1.866.64.467.626.286 1.705.164 2.112m-23.857 10.248v-10c0-1.795.659-1.981.855-2h2.145v13h-2.173c-.829 0-.827-.648-.827-1m25.309-13.54c-.713-.969-1.886-1.46-3.482-1.46h-5.519c.26-.932.519-2.285.519-4 0-5.221-2.507-6-4-6-1.909 0-4.185.993-4.185 5.725 0 2.206-1.923 5.275-3.815 5.275h-4-.011c-1.034.011-2.816.862-2.816 4v10.02c0 1.198.675 2.979 2.827 2.979h16.971.035c.364 0 3.224-.113 4.894-3.564 1.514-3.127 3.01-8.942 3.056-9.14.071-.23.664-2.289-.474-3.836"}})])]),s("span",{staticClass:"username"},[t._v(" "+t._s(a.user.nickname)+" "),s("span",{staticClass:"vip",style:"backgroundImage:url("+a?.user?.vipRights?.associator?.iconUrl+")"})]),s("p",{staticClass:"time"},[t._v(" "+t._s(2==a.timeStr.split("-").length?2022:a.timeStr.split("-")[0])+"年"+t._s(2==a.timeStr.split("-").length?a.timeStr.split("-")[0]:a.timeStr.split("-")[1])+"月"+t._s(2==a.timeStr.split("-").length?a.timeStr.split("-")[1]:a.timeStr.split("-")[2])+"日 ")]),0!=a.beReplied.length?s("span",{staticClass:"comment"},[t._v(" 回复"+t._s("@"+a?.beReplied[0]?.user?.nickname+"："+a?.content)+" "),s("span",{staticClass:"reply"},[t._v(" "+t._s("@"+a?.beReplied[0]?.user?.nickname+"："+a?.beReplied[0]?.content))])]):s("span",{staticClass:"comment"},[t._v(t._s(a.content)+" ")])])])})),s("h3",[t._v("查看全部评论 >")])],2)])},l=[],c={props:{hotcomments:Array,newcomments:Array,total:Number}},r=c,o=a(1001),m=(0,o.Z)(r,n,l,!1,null,"7d60e63a",null),p=m.exports,d={components:{CommentsDetails:p},props:["id","clickHandler","res","autoplay"],data(){return{songcardheade:[],song:[],hotcomments:[],newcomments:[],total:null}},created(){this.axios.get("https://apis.netstart.cn/music/playlist/detail",{params:{id:this.$route.query.id}}).then((t=>{this.songcardheade=t.data.playlist,this.song=t.data.playlist.tracks})),this.axios.get("https://apis.netstart.cn/music/comment/playlist",{params:{id:this.$route.query.id}}).then((t=>{this.hotcomments=t.data.hotComments,this.newcomments=t.data.comments,this.total=t.data.total}))}},u=d,v=(0,o.Z)(u,e,i,!1,null,"78f5d46a",null),h=v.exports}}]);
//# sourceMappingURL=627.dda4cef3.js.map