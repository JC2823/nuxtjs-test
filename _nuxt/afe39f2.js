(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{260:function(t,e,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("11aa2c8e",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";n(260)},265:function(t,e,n){var r=n(60)(!1);r.push([t.i,".posts__container{display:flex;padding:3em;flex-direction:column;align-items:center;justify-content:center}.posts__container h1{border-bottom:5px solid #3e87ff}.cards{display:grid;margin:10px auto;grid-template-columns:33% 33% 33%;grid-gap:10px;list-style:none;width:100%}.card{padding:20px;box-shadow:0 0 10px 5px #ececec}.button{display:block;text-decoration:none;border-radius:5px;color:#fff;margin:10px 0;text-align:center;padding:10px 20px;background:#3e87ff;transition:all .3s ease-in-out}.button:hover{background:#69a0fd}",""]),t.exports=r},284:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(46),{name:"IndexBlog",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,t.error,e.next=3,n("blog").only(["title","description","path"]).limit(5).sortBy("title").fetch();case 3:return r=e.sent,e.abrupt("return",{posts:r});case 5:case"end":return e.stop()}}),e)})))()}}),c=(n(264),n(35)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts__container"},[n("h1",[t._v("Lista de Articulos")]),t._v(" "),n("div",{staticClass:"cards"},t._l(t.posts,(function(e){return n("div",{key:e,staticClass:"card"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.description))]),t._v(" "),n("nuxt-link",{staticClass:"button",attrs:{to:e.path}},[t._v("Leer")])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);