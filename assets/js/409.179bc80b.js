(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{1818:function(t,e,s){"use strict";s.r(e);var a=s(13),c=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"分布式搜索引擎内核解密之-fetch-phase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式搜索引擎内核解密之-fetch-phase"}},[t._v("#")]),t._v(" 分布式搜索引擎内核解密之 fetch phase")]),t._v(" "),s("h2",{attrs:{id:"什么是-fetch-phase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-fetch-phase"}},[t._v("#")]),t._v(" 什么是  fetch phase？")]),t._v(" "),s("p",[t._v("就是获取数据阶段，query phase 获取到的只是 id，fetch phase 会批量到各个 shard 上去获取数据")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("疑问")]),t._v(" "),s("p",[t._v("这里就明白了之前为什么需要正排索引了？\n貌似在这一步获取数据之后再排序不行么？\n搞不明白，好像都很麻烦的原理")])]),t._v(" "),s("h2",{attrs:{id:"fetch-phbase-工作流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetch-phbase-工作流程"}},[t._v("#")]),t._v(" fetch phbase 工作流程")]),t._v(" "),s("ol",[s("li",[t._v("coordinate node 构建完 priority queue 之后，就发送 mget 请求去所有 shard 上获取对应的 document")]),t._v(" "),s("li",[t._v("各个 shard 将 document 返回给 coordinate node")]),t._v(" "),s("li",[t._v("coordinate node 将合并后的 document 结果返回给 client 客户端")])]),t._v(" "),s("p",[t._v("一般搜索，如果不加 from 和 size，就默认搜索前 10条，按照 "),s("code",[t._v("_score")]),t._v(" 排序")])])}),[],!1,null,null,null);e.default=c.exports}}]);