webpackJsonp([1],{"+ZXS":function(t,e){},"7fmy":function(t,e){},BnFS:function(t,e){},"J+yX":function(t,e){},J7wu:function(t,e){},"L6/b":function(t,e){},"Lv/Y":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r={name:"TopBar",data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"menu"}},[e("el-menu",{staticClass:"top-bar",attrs:{"default-active":this.activeIndex,mode:"horizontal",router:"true","background-color":"#f5f2ed","text-color":"#333","active-text-color":"#ff6347"},on:{select:this.handleSelect}},[e("el-menu-item",{attrs:{index:"/"}},[this._v("About")]),this._v(" "),e("el-menu-item",{attrs:{index:"/Works"}},[this._v("Works")]),this._v(" "),e("el-menu-item",{attrs:{index:"/Photos"}},[this._v("Photos")])],1)],1)},staticRenderFns:[]};var o={name:"App",components:{TopBar:a("VU/8")(r,n,!1,function(t){a("W+sI")},"data-v-3979f45f",null).exports}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"max-width":"1024px",margin:"0 auto"},attrs:{id:"app"}},[e("TopBar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var c=a("VU/8")(o,i,!1,function(t){a("ujMH")},null,null).exports,l=a("zL8q"),d=a.n(l),h=a("znjY"),p=a.n(h),u=(a("tvR6"),a("/ocq")),m=a("yJzH"),f=a("G+6C"),v={name:"Profile",components:{customIcon:f.a},data:function(){return{show:!0}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"body",appear:""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("el-row",[a("el-col",{attrs:{span:24}},[a("img",{attrs:{src:"/static/profile_picture.png"}}),t._v(" "),a("h1",[t._v("@hama903")]),t._v(" "),a("h1",[t._v("Takuto Hamano")]),t._v(" "),a("h2",[t._v("Software engineer with the knowledge of hardware.")])])],1),t._v(" "),a("el-row",{attrs:{id:"skills"}},[a("el-col",{attrs:{span:24}},[a("span",{staticClass:"skill"},[t._v("Skills:")]),t._v(" "),a("span",{staticClass:"skill"},[t._v("C/C++")]),t._v(" "),a("span",{staticClass:"skill"},[t._v("Python")]),t._v(" "),a("span",{staticClass:"skill"},[t._v("PhysX")]),t._v(" "),a("span",{staticClass:"skill"},[t._v("Electronics")])])],1),t._v(" "),a("el-row",{attrs:{id:"social"}},[a("el-col",{attrs:{span:24}},[a("a",{attrs:{href:"https://github.com/hama903"}},[a("custom-icon",{attrs:{name:"github","base-class":"custom-icon"}})],1),t._v(" "),a("a",{attrs:{href:"https://twitter.com/hama903"}},[a("custom-icon",{attrs:{name:"twitter","base-class":"custom-icon"}})],1),t._v(" "),a("a",{attrs:{href:"https://www.instagram.com/hama903_/"}},[a("custom-icon",{attrs:{name:"instagram","base-class":"custom-icon"}})],1),t._v(" "),a("a",{attrs:{href:"https://www.linkedin.com/in/takutohamano/"}},[a("custom-icon",{attrs:{name:"linkedin","base-class":"custom-icon"}})],1)])],1)],1)])},staticRenderFns:[]};var k=a("VU/8")(v,g,!1,function(t){a("jwL8")},"data-v-c795eb12",null).exports,w={name:"Works",components:{customIcon:f.a},data:function(){return{works:[{date:"2018/6",name:"ポートフォリオサイト",img_src:"/static/works/portfolio/eyecatch.png",detail_path:"work/portfolio"},{date:"2018/3",name:"ひらがなGAN",img_src:"/static/works/hiraganaGAN/eyecatch.png",detail_path:"work/hiraganaGAN"},{date:"2017/10",name:"Bitcoin Price Checker",img_src:"/static/works/bitcoinPriceChecker/eyecatch.png",detail_path:"work/bitcoinPriceChecker"},{date:"2017/8",name:"我が家の茜ちゃんPJ",img_src:"/static/works/wagayakane/eyecatch.png",detail_path:"work/wagayakane"},{date:"2017/3",name:"HexMan2",img_src:"/static/works/hexMan2/eyecatch.png",detail_path:"work/hexMan2"},{date:"2016/11",name:"お天気掲示板",img_src:"/static/works/forecastBoard/eyecatch.jpg",detail_path:"work/forecastBoard"},{date:"2016/3",name:"HexMan",img_src:"/static/works/hexMan/eyecatch.png",detail_path:"work/hexMan"},{date:"2013",name:"7セグデジタル時計",img_src:"/static/works/digitalClock/eyecatch.png",detail_path:"work/digitalClock"},{date:"2012",name:"Hand Made CPU(TD4)",img_src:"/static/works/handMadeCPU/eyecatch.jpg",detail_path:"work/handMadeCPU"},{date:"2012",name:"File Viewer",img_src:"/static/works/fileViewer/eyecatch.png",detail_path:"work/fileViewer"},{date:"2011",name:"リバーシ",img_src:"/static/works/reversi/eyecatch.png",detail_path:"work/reversi"}]}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"body",appear:""}},[a("div",t._l(t.works,function(e,s){return a("div",{key:s},[a("router-link",{attrs:{to:e.detail_path}},[a("el-card",{staticClass:"work-card",attrs:{"body-style":{padding:"0px"}}},[a("img",{attrs:{src:e.img_src}}),t._v(" "),a("div",{staticClass:"card-text"},[a("div",{staticClass:"work-title"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"work-date"},[a("custom-icon",{attrs:{name:"calendar","base-class":"custom-icon"}}),t._v(t._s(e.date))],1)])])],1)],1)}))])},staticRenderFns:[]};var C=a("VU/8")(w,_,!1,function(t){a("U6q5")},"data-v-1f99f900",null).exports,y={name:"Photographs",components:{customIcon:f.a}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"body",appear:""}},[a("div",[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-card",{staticClass:"photo-card"},[a("img",{staticClass:"photo",attrs:{src:"/static/photos/poonhill.jpg"}}),t._v(" "),a("dev",{staticClass:"photo-detail"},[t._v("Poon Hill, Nepal")])],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10,offset:1,xs:{span:24,offset:0}}},[a("el-card",{staticClass:"photo-card"},[a("img",{staticClass:"photo",attrs:{src:"/static/photos/drop0.jpg"}})])],1),t._v(" "),a("el-col",{attrs:{span:10,offset:2,xs:{span:24,offset:0}}},[a("el-card",{staticClass:"photo-card"},[a("img",{staticClass:"photo",attrs:{src:"/static/photos/drop1.jpg"}})])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-card",{staticClass:"photo-card"},[a("img",{staticClass:"photo",attrs:{src:"/static/photos/hokuryu.jpg"}}),t._v(" "),a("dev",{staticClass:"photo-detail"},[t._v("Hokuryu, Hokkaido, Japan")])],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-card",{staticClass:"photo-card"},[a("img",{staticClass:"photo",attrs:{src:"/static/photos/biei.jpg"}}),t._v(" "),a("dev",{staticClass:"photo-detail"},[t._v("Biei, Hokkaido, Japan")])],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-card",{staticClass:"photo-card"},[a("img",{staticClass:"photo",attrs:{src:"/static/photos/abashiri.jpg"}}),t._v(" "),a("dev",{staticClass:"photo-detail"},[t._v("Abashiri, Hokkaido, Japan")])],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-card",{staticClass:"photo-card"},[a("img",{staticClass:"photo",attrs:{src:"/static/photos/varanasi.jpg"}}),t._v(" "),a("dev",{staticClass:"photo-detail"},[t._v("Varanasi, India")])],1)],1)],1),t._v(" "),a("el-row",{attrs:{id:"social"}},[a("el-col",{attrs:{span:24}},[a("a",{attrs:{href:"https://www.instagram.com/hama903_/"}},[a("custom-icon",{attrs:{name:"instagram","base-class":"custom-icon"}})],1)])],1)],1)])},staticRenderFns:[]};var b=a("VU/8")(y,x,!1,function(t){a("7fmy")},"data-v-9f71e656",null).exports,P={name:"sourcelink",components:{customIcon:f.a},props:["address"]},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",[e("el-col",{attrs:{offset:18,span:6,xs:{span:10,offset:14}}},[e("a",{attrs:{href:this.address}},[e("el-button",{staticClass:"link-button",attrs:{plain:""}},[e("custom-icon",{attrs:{name:"github","base-class":"custom-icon"}}),this._v(" "),e("div",{staticClass:"source-text"},[this._v("Source")])],1)],1)])],1)},staticRenderFns:[]};var A={name:"portfolio",components:{sourceLink:a("VU/8")(P,U,!1,function(t){a("qYeR")},"data-v-644a1078",null).exports},props:{title:String,date:String,description:String,screenShots:Array,technologies:Array,sourceAddress:String}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",[a("el-col",{attrs:{span:20,offset:2}},[a("el-card",{staticClass:"work-card"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("h2",[t._v(t._s(t.title))]),t._v(" "),a("h3",[t._v(t._s(t.date))]),t._v(" "),a("div",{staticClass:"description"},[a("el-row",[a("el-col",{attrs:{md:{span:16,offset:4}}},[a("span",{domProps:{innerHTML:t._s(t.description)}})])],1)],1),t._v(" "),a("div",{staticClass:"screen-shots"},[0==t.screenShots.length?a("div"):1==t.screenShots.length?a("div",[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.screenShots[0]}})]):a("div",[a("el-carousel",{attrs:{trigger:"click","indicator-position":"outside",autoplay:!1}},t._l(t.screenShots,function(t,e){return a("el-carousel-item",{key:e},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:t}})])}))],1)]),t._v(" "),a("div",{staticClass:"technologies"},[a("span",{staticClass:"tech"},[t._v("Technologies:")]),t._v(" "),t._l(t.technologies,function(e,s){return a("span",{key:s,staticClass:"tech"},[t._v("\n                "+t._s(e)+"\n              ")])})],2),t._v(" "),""!=t.sourceAddress?a("sourceLink",{attrs:{address:t.sourceAddress}}):t._e()],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var S=a("VU/8")(A,M,!1,function(t){a("uVzY")},"data-v-349699e4",null).exports,V={name:"portfolio",components:{work:S}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("work",{attrs:{title:"Portfolio",date:"2018",description:"Vue.jsを利用したポートフォリオサイト．UIライブラリとしてElement UIを利用．これまでに作ったものや，撮影した写真を掲載．",screenShots:["/static/works/portfolio/figure0.png"],technologies:["HTML/CSS","Vue.js","Element UI"],sourceAddress:"https://github.com/hama903/hama903.github.io"}})],1)},staticRenderFns:[]};var R=a("VU/8")(V,E,!1,function(t){a("BnFS")},"data-v-59fad838",null).exports,F={name:"hiraganaGAN",components:{work:S}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("work",{attrs:{title:"ひらがなGAN",date:"2018/3",description:"<a href='http://dl4us.com/'>DL4US</a>の課題で実施した，GANを用いた手書きひらがな文字の生成．学習には，産業技術総合研究所が公開している，ETL文字データベースを利用．学習後に任意のひらがな文字を生成可能とするため，ネットワーク構造にはConditional GANを利用した．",screenShots:["/static/works/hiraganaGAN/learning_flow.gif","/static/works/hiraganaGAN/learning_result.png","/static/works/hiraganaGAN/yakiniku.png"],technologies:["Python","Keras(TensorFlow)","Conditional GAN"],sourceAddress:""}})],1)},staticRenderFns:[]};var H=a("VU/8")(F,j,!1,function(t){a("oVpY")},"data-v-3e4c9ade",null).exports,L={name:"bitcoinPriceChecker",components:{work:S}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("work",{attrs:{title:"Bitcoin Price Checker",date:"2017/10",description:"Raspberry Pi Zero Wと，7セグLEDを利用し，現在のビットコイン価格を表示する装置．bitflyerのオープンAPIを利用し，取得したビットコイン価格を，ほぼリアルタイムで表示する．小型であるため，部屋のインテリアとしても利用可能．",screenShots:["/static/works/bitcoinPriceChecker/appearance.png"],technologies:["Python","Raspberry Pi Zero W","Dynamic Lighting System"],sourceAddress:"https://github.com/hama903/PiBitcoinPriceChecker"}})],1)},staticRenderFns:[]};var $=a("VU/8")(L,N,!1,function(t){a("vmfJ")},"data-v-43ddc6fe",null).exports,B={name:"wagayakane",components:{work:S}},G={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("work",{attrs:{title:"我が家のあかねちゃんプロジェクト",date:"2017/8",description:"友人と共に実施した，我が家のあかねちゃんプロジェクト．自作スマートスピーカーのようなもの．売り文句は，'ラズパイことraspberry piを使って音声認識やらTwitterから家電を操作できるやつを作ってみました'．詳細はWebページや，動画を参照．<a href='http://wagayakane.html.xdomain.jp/index.html'>公式サイト</a>",screenShots:["/static/works/wagayakane/figure0.png"],technologies:["Python","Raspberry Pi","MMD(Miku Miku Dance)"],sourceAddress:"https://github.com/hama903/WagayaNoAkaneChan"}})],1)},staticRenderFns:[]};var I=a("VU/8")(B,G,!1,function(t){a("UZtP")},"data-v-e0d6a808",null).exports,W={name:"hexMan2",components:{work:S}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("work",{attrs:{title:"HexMan2",date:"2017/3",description:"Unreal Engine 4を利用して作成した2人対戦用ゲーム．アイスクライマーのように，上へと登っていきつつ，ボンバーマンのように爆弾を置き，相手を倒すことが目的．所々に崩れる床や，便利アイテムを配置することで，ゲームに面白みを付加している．",screenShots:["/static/works/hexMan2/title.png","/static/works/hexMan2/charactor_select.png","/static/works/hexMan2/playing.png"],technologies:["Unreal Engine 4"],sourceAddress:""}})],1)},staticRenderFns:[]};var T=a("VU/8")(W,D,!1,function(t){a("Lv/Y")},"data-v-d1224208",null).exports,J={name:"forecastBoard",components:{work:S}},Y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("work",{attrs:{title:"お天気掲示板",date:"2016/11",description:"Raspberry Piを用いて，小型液晶に天気予報を表示する装置．天気予報が常に表示されるため，検索やテレビを見るという手間いらずで，日々の天気を確認できる．しかしながら，精度の良い天気予報を取得可能なAPIが見つからず，あまり当てにならない予報となっている．",screenShots:["/static/works/forecastBoard/figure0.jpg","/static/works/forecastBoard/figure1.jpg"],technologies:["Python","Raspberry Pi"],sourceAddress:""}})],1)},staticRenderFns:[]};var q=a("VU/8")(J,Y,!1,function(t){a("+ZXS")},"data-v-30045f13",null).exports,z={name:"hexMan",components:{work:S}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("work",{attrs:{title:"HexMan",date:"2016/3",description:"Unreal Engine 4を利用して作成した2人対戦用ゲーム．上下分割画面で，それぞれのキャラクターを操作．ボンバーマンのように爆弾を設置し，相手を倒すことが目的．操作性は非常に悪い．",screenShots:["/static/works/hexMan/playing.png"],technologies:["Unreal Engine 4"],sourceAddress:""}})],1)},staticRenderFns:[]};var X=a("VU/8")(z,Z,!1,function(t){a("yH+h")},"data-v-22d77919",null).exports,K={name:"digitalClock",components:{work:S}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("work",{attrs:{title:"DigitalClock",date:"2013",description:"Arduinoと7セグメントLEDを用いたデジタル時計．4桁の7セグLEDをダイナミック点灯方式を利用し，点灯させている．制御基板と表示基板を分けて作成し，立体的に連結することで，スタイリッシュなデザインとしている．",screenShots:["/static/works/digitalClock/figure0.png","/static/works/digitalClock/figure1.png","/static/works/digitalClock/figure2.png"],technologies:["Arduino","Dynamic Lighting System"],sourceAddress:"https://github.com/hama903/ArduinoDigitalClock"}})],1)},staticRenderFns:[]};var Q=a("VU/8")(K,O,!1,function(t){a("J+yX")},"data-v-2e810eb2",null).exports,tt={name:"handMadeCPU",components:{work:S}},et={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("work",{attrs:{title:"Hand Made CPU(TD4)",date:"2012",description:"'CPUの創り方'に記載の4bit CPUを模倣して作成したCPU．13個のICと，16個のディップスイッチをはんだ付けすることで作成している．ディップスイッチを切り替えることで，自由にプログラムを変更でき，3分のラーメンタイマー等を実行できる．",screenShots:["/static/works/handMadeCPU/figure0.jpg","/static/works/handMadeCPU/figure1.jpg"],technologies:["Digital Circuit"],sourceAddress:""}})],1)},staticRenderFns:[]};var at=a("VU/8")(tt,et,!1,function(t){a("L6/b")},"data-v-0478bef0",null).exports,st={name:"fileViewer",components:{work:S}},rt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("work",{attrs:{title:"File Viewer Art",date:"2012",description:"ファイルの階層構造を，エクスプローラーとは違った形式で表示したメディアアート作品．あるディレクトリに含まれるディレクトリは中央付近で回転し，ファイルは周囲を飛び回る．操作感は非常に悪いが，見た目的には楽しいものとなっている．",screenShots:["/static/works/fileViewer/animation.gif","/static/works/fileViewer/figure0.png","/static/works/fileViewer/figure1.png"],technologies:["C++","MFC"],sourceAddress:""}})],1)},staticRenderFns:[]};var nt=a("VU/8")(st,rt,!1,function(t){a("J7wu")},"data-v-7271a8d2",null).exports,ot={name:"reversi",components:{work:S}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("work",{attrs:{title:"リバーシ",date:"2011",description:"C言語+GrWinで作成したリバーシ(オセロ)ゲーム．αβアルゴリズムを利用した簡単なCPUも搭載している．",screenShots:["/static/works/reversi/figure0.png","/static/works/reversi/figure1.png","/static/works/reversi/figure2.png"],technologies:["C","GrWin"],sourceAddress:""}})],1)},staticRenderFns:[]};var ct=a("VU/8")(ot,it,!1,function(t){a("ry0r")},"data-v-854980b0",null).exports;s.default.use(u.a),s.default.use(d.a,{locale:p.a}),s.default.use(m.a,"v-icon");var lt=new u.a({routes:[{path:"/",name:"About",component:k},{path:"/Works",name:"Works",component:C},{path:"/Photos",name:"Photos",component:b},{path:"/work/portfolio",name:"Portfolio",component:R},{path:"/work/hiraganaGAN",name:"hiraganaGAN",component:H},{path:"/work/bitcoinPriceChecker",name:"bitcoinPriceChecker",component:$},{path:"/work/wagayakane",name:"wagayakane",component:I},{path:"/work/hexMan2",name:"hexMan2",component:T},{path:"/work/forecastBoard",name:"forecastBoard",component:q},{path:"/work/hexMan",name:"hexMan",component:X},{path:"/work/digitalClock",name:"digitalClock",component:Q},{path:"/work/handMadeCPU",name:"handMadeCPU",component:at},{path:"/work/fileViewer",name:"fileViewer",component:nt},{path:"/work/reversi",name:"reversi",component:ct}]});s.default.config.productionTip=!1,new s.default({el:"#app",router:lt,components:{App:c},template:"<App/>"})},U6q5:function(t,e){},UZtP:function(t,e){},"W+sI":function(t,e){},jwL8:function(t,e){},oVpY:function(t,e){},qYeR:function(t,e){},ry0r:function(t,e){},tvR6:function(t,e){},uVzY:function(t,e){},ujMH:function(t,e){},vmfJ:function(t,e){},"yH+h":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7f902eb519f8fa56b702.js.map