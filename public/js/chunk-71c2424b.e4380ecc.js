(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71c2424b"],{3766:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return f}));var r=n("b775");function a(t,e){return Object(r["a"])({url:"/v1/setting",method:"post",params:{method:e},data:{data:t}})}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(r["a"])({url:"/v1/setting",method:"post",params:{method:"get.setting.list"},data:{module:t,code:e}})}function i(t){return a(t,"set.delivery.dist.list")}function s(t){return a(t,"set.payment.list")}function u(t){return a(t,"set.delivery.list")}function d(t){return a(t,"set.shopping.list")}function c(t){return a(t,"set.service.list")}function l(t){return a(t,"set.system.list")}function f(t){return a(t,"set.upload.list")}},"4dd0c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",{attrs:{"is-back-to-top":!0}},[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,"platform-table":t.platformTable},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"table-data":t.table,"platform-table":t.platformTable},on:{sort:t.handleSort,refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",current:t.page.current,loading:t.loading,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},a=[],o=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("ade3")),i=n("3766"),s=n("b27e");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={name:"system-storage-style",components:{PageHeader:function(){return n.e("chunk-2d21d8bd").then(n.bind(null,"d281"))},PageMain:function(){return n.e("chunk-7c7a36cb").then(n.bind(null,"d10f"))},PageFooter:function(){return n.e("chunk-2d2102da").then(n.bind(null,"b77f"))}},data:function(){return{loading:!0,table:[],platformTable:[],page:{current:1,size:0,total:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var t=this;Promise.all([Object(i["a"])("system_info","platform"),this.$store.dispatch("careyshop/db/databasePage",{user:!0})]).then((function(e){t.platformTable=e[0].data?e[0].data["platform"]["value"]:[],t.page.size=e[1].get("size").value()||25})).then((function(){t.handleSubmit()}))},methods:{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.current-1)||this.page.current--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.page.current=1),this.loading=!0,Object(s["c"])(d({},t,{},this.order,{page_no:this.page.current,page_size:this.page.size})).then((function(t){e.table=t.data.items||[],e.page.total=t.data.total_result})).finally((function(){e.loading=!1}))}}},l=c,f=n("2877"),h=Object(f["a"])(l,r,a,!1,null,null,null);e["default"]=h.exports},b27e:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"e",(function(){return u}));var r=n("b775");function a(t){return Object(r["a"])({url:"/v1/storage_style",method:"post",params:{method:"add.storage.style.item"},data:t})}function o(t){return Object(r["a"])({url:"/v1/storage_style",method:"post",params:{method:"set.storage.style.item"},data:t})}function i(t){return Object(r["a"])({url:"/v1/storage_style",method:"post",params:{method:"get.storage.style.list"},data:t})}function s(t){return Object(r["a"])({url:"/v1/storage_style",method:"post",params:{method:"del.storage.style.list"},data:{storage_style_id:t}})}function u(t,e){return Object(r["a"])({url:"/v1/storage_style",method:"post",params:{method:"set.storage.style.status"},data:{storage_style_id:t,status:e}})}}}]);