(window.webpackJsonp=window.webpackJsonp||[]).push([[12,16,19],{261:function(t,e,n){var s=n(264);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(34).default)("0dc3a8f2",s,!0,{sourceMap:!1})},262:function(t,e,n){var s=n(267);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(34).default)("144ff794",s,!0,{sourceMap:!1})},263:function(t,e,n){"use strict";var s=n(261);n.n(s).a},264:function(t,e,n){(t.exports=n(33)(!1)).push([t.i,"\n.link-button[data-v-37a5013e]{font-size:120%;padding:5px 10px;margin:15px\n}\n.custom-icon[data-v-37a5013e],.v-icon[data-v-37a5013e]{width:20px\n}",""])},265:function(t,e,n){"use strict";n.r(e);var s={name:"Sourcelink",components:{GithubIcon:n(269).b},props:{address:{type:String,default:""}}},i=(n(263),n(12)),a=Object(i.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",[e("el-col",{attrs:{offset:18,span:6,xs:{span:10,offset:14}}},[e("a",{attrs:{href:this.address}},[e("el-button",{staticClass:"link-button",attrs:{plain:""}},[e("github-icon",{staticClass:"custom-icon",attrs:{name:"github"}}),this._v(" "),e("div",{staticClass:"source-text"},[this._v("Source")])],1)],1)])],1)},[],!1,null,"37a5013e",null);a.options.__file="sourceLink.vue";e.default=a.exports},266:function(t,e,n){"use strict";var s=n(262);n.n(s).a},267:function(t,e,n){(t.exports=n(33)(!1)).push([t.i,"\n.work-card[data-v-1def0d7e]{margin:0 0 50px\n}\n.description[data-v-1def0d7e]{text-align:left\n}\n.description[data-v-1def0d7e],.screen-shots[data-v-1def0d7e]{margin:30px 0\n}\n.sub-header[data-v-1def0d7e]{margin:20px 0 5px;font-weight:700\n}\n.tech[data-v-1def0d7e]{margin:0 5px\n}\n.publication[data-v-1def0d7e]{margin:5px 20px;text-align:left\n}",""])},268:function(t,e,n){"use strict";n.r(e);var s={name:"Portfolio",components:{sourceLink:n(265).default},props:{title:{type:String,default:"title"},date:{type:String,default:"20xx"},description:{type:String,default:"description"},screenShots:{type:Array,default:function(){return[]}},technologies:{type:Array,default:function(){return[]}},publications:{type:Array,default:function(){return[]}},sourceAddress:{type:String,default:""}},data:function(){return{carouselHeight:"300px"}},created:function(){this.resizeWindow(),window.addEventListener("resize",this.resizeWindow,!1)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeWindow,!1)},methods:{resizeWindow:function(){window.innerWidth<768?this.carouselHeight="150px":this.carouselHeight="300px"}}},i=(n(266),n(12)),a=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-col",{attrs:{span:20,offset:2}},[n("el-card",{staticClass:"work-card"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("h3",[t._v(t._s(t.date))]),t._v(" "),n("div",{staticClass:"description"},[n("el-row",[n("el-col",{attrs:{md:{span:16,offset:4}}},[n("span",{domProps:{innerHTML:t._s(t.description)}})])],1)],1),t._v(" "),n("div",{staticClass:"screen-shots"},[0===t.screenShots.length?n("div"):1===t.screenShots.length?n("div",[n("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.screenShots[0]}})]):n("div",[n("el-carousel",{attrs:{height:t.carouselHeight,autoplay:!1,trigger:"click","indicator-position":"outside"}},t._l(t.screenShots,function(t,e){return n("el-carousel-item",{key:e},[n("img",{staticStyle:{"max-width":"100%"},attrs:{src:t}})])}))],1)]),t._v(" "),t.technologies.length>0?n("div",[n("div",{staticClass:"sub-header"},[t._v("Technologies")]),t._v(" "),t._l(t.technologies,function(e,s){return n("span",{key:s,staticClass:"tech"},[t._v("\n              "+t._s(e)+"\n            ")])})],2):t._e(),t._v(" "),t.publications.length>0?n("div",[n("div",{staticClass:"sub-header"},[t._v("Publications")]),t._v(" "),t._l(t.publications,function(e,s){return n("div",{key:s,staticClass:"publication"},[t._v("\n              "+t._s(e)+"\n            ")])})],2):t._e(),t._v(" "),""!==t.sourceAddress?n("sourceLink",{attrs:{address:t.sourceAddress}}):t._e()],1)],1)],1)],1)],1)},[],!1,null,"1def0d7e",null);a.options.__file="work.vue";e.default=a.exports},283:function(t,e,n){var s=n(312);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(34).default)("51c1fa40",s,!0,{sourceMap:!1})},311:function(t,e,n){"use strict";var s=n(283);n.n(s).a},312:function(t,e,n){(t.exports=n(33)(!1)).push([t.i,"",""])},329:function(t,e,n){"use strict";n.r(e);var s={name:"HiraganaGAN",components:{work:n(268).default}},i=(n(311),n(12)),a=Object(i.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("work",{attrs:{"screen-shots":["/works/hiraganaGAN/learning_flow.gif","/works/hiraganaGAN/learning_result.png","/works/hiraganaGAN/yakiniku.png"],technologies:["Python","Keras(TensorFlow)","Conditional GAN"],title:"ひらがなGAN",date:"2018/3",description:"<a href='http://dl4us.com/'>DL4US</a>の課題で実施した，GANを用いた手書きひらがな文字の生成．学習には，産業技術総合研究所が公開している，ETL文字データベースを利用．学習後に任意のひらがな文字を生成可能とするため，ネットワーク構造にはConditional GANを利用した．","source-address":""}})],1)},[],!1,null,"61eba982",null);a.options.__file="hiraganaGAN.vue";e.default=a.exports}}]);