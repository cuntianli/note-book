(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1766:function(s,t,a){"use strict";a.r(t);var e=a(13),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"elasticsearch-核心概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-核心概念"}},[s._v("#")]),s._v(" Elasticsearch 核心概念")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#lucene-和-elasticsearch-的前世今生"}},[s._v("lucene 和 elasticsearch 的前世今生")])]),e("li",[e("a",{attrs:{href:"#elasticsearch-的核心概念"}},[s._v("elasticsearch 的核心概念")])]),e("li",[e("a",{attrs:{href:"#核心概念-vs-数据库核心概念"}},[s._v("核心概念 vs 数据库核心概念")])])])]),e("p"),s._v(" "),e("ol",[e("li",[s._v("lucene 和 elasticsearch 的前世今生")]),s._v(" "),e("li",[s._v("elasticsearch 的核心概念")]),s._v(" "),e("li",[s._v("elasticsearch 核心概念 vs 数据库核心概念")])]),s._v(" "),e("h2",{attrs:{id:"lucene-和-elasticsearch-的前世今生"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lucene-和-elasticsearch-的前世今生"}},[s._v("#")]),s._v(" lucene 和 elasticsearch 的前世今生")]),s._v(" "),e("p",[s._v("lucene，最先进、功能最强大的搜索库；直接基于 lucene 开发，非常复杂，api 复杂（实现一些简单的功能，写大量的 java 代码），需要深入理解原理（各种索引结构）")]),s._v(" "),e("p",[s._v("elasticsearch 基于 lucene，隐藏复杂性，提供简单易用的 restful api 接口、java api 接口（还有其他语言的api接口）")]),s._v(" "),e("ol",[e("li",[s._v("分布式的文档存储引擎")]),s._v(" "),e("li",[s._v("分布式的搜索引擎和分析引擎")]),s._v(" "),e("li",[s._v("分布式，支持PB级数据")])]),s._v(" "),e("p",[s._v("开箱即用，优秀的默认参数，不需要任何额外设置，完全开源")]),s._v(" "),e("p",[s._v("关于 elasticsearch 的一个传说，有一个程序员失业了，陪着自己老婆去英国伦敦学习厨师课程。程序员在失业期间想给老婆写一个菜谱搜索引擎，觉得 lucene 实在太复杂了，就开发了一个封装了 lucene 的开源项目 compass。后来程序员找到了工作，是做分布式的高性能项目的，觉得 compass 不够，就写了 elasticsearch，让 lucene 变成分布式的系统。")]),s._v(" "),e("h2",{attrs:{id:"elasticsearch-的核心概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-的核心概念"}},[s._v("#")]),s._v(" elasticsearch 的核心概念")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("Near Realtime（NRT）近实时")]),s._v(" "),e("p",[s._v("两个意思：")]),s._v(" "),e("p",[s._v("从写入数据到数据可以被搜索到有一个小延迟（大概1秒）；")]),s._v(" "),e("p",[s._v("基于es执行搜索和分析可以达到秒级")]),s._v(" "),e("p",[e("img",{attrs:{src:a(984),alt:""}})])]),s._v(" "),e("li",[e("p",[s._v("Cluster 集群")]),s._v(" "),e("p",[s._v("包含多个节点，每个节点属于哪个集群是通过一个配置（集群名称，默认是 elasticsearch ）来决定的，对于中小型应用来说，刚开始一个集群就一个节点很正常")])]),s._v(" "),e("li",[e("p",[s._v("Node 节点")]),s._v(" "),e("p",[s._v("集群中的一个节点，节点也有一个名称（默认是随机分配的），节点名称很重要（在执行运维管理操作的时候），默认节点会去加入一个名称为 “elasticsearch” 的集群，如果直接启动一堆节点，那么它们会自动组成一个 elasticsearch 集群，当然一个节点也可以组成一个 elasticsearch 集群")])]),s._v(" "),e("li",[e("p",[s._v("Document&field 文档")]),s._v(" "),e("p",[s._v("es中的最小数据单元，一个 document 可以是一条客户数据，一条商品分类数据，一条订单数据，通常用 JSON 数据结构表示")]),s._v(" "),e("p",[s._v("一个 index 下的 type 中，都可以去存储多个 document。")]),s._v(" "),e("p",[s._v("一个 document 里面有多个 field，每个field就是一个数据字段。")]),s._v(" "),e("div",{staticClass:"language-JSON line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("product document\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"product_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"product_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"高露洁牙膏"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"product_desc"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"高效美白"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"category_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"category_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"日化用品"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Index 索引")]),s._v(" "),e("p",[s._v("包含一堆有相似结构的文档数据，比如可以有一个客户索引，商品分类索引，订单索引，索引有一个名称。")]),s._v(" "),e("p",[s._v("一个 index 包含很多 document，一个 index 就代表了一类类似的或者相同的 document。比如说建立一个 product index，商品索引，里面可能就存放了所有的商品数据，所有的商品 document。")])]),s._v(" "),e("li",[e("p",[s._v("Type 类型")]),s._v(" "),e("p",[s._v("每个索引里都可以有一个或多个 type，type 是 index 中的一个逻辑数据分类，一个 type 下的 document，都有相同的 field，比如博客系统，有一个索引，可以定义用户数据 type，博客数据 type，评论数据 type。")]),s._v(" "),e("p",[s._v("商品index，里面存放了所有的商品数据，商品 document")]),s._v(" "),e("p",[s._v("但是商品分很多种类，每个种类的 document 的 field 可能不太一样，比如说电器商品，可能还包含一些诸如售后时间范围这样的特殊 field；生鲜商品，还包含一些诸如生鲜保质期之类的特殊 field")]),s._v(" "),e("p",[s._v("type，日化商品 type，电器商品 type，生鲜商品 type")]),s._v(" "),e("p",[s._v("日化商品 type：product_id，product_name，product_desc，category_id，category_name")]),s._v(" "),e("p",[s._v("电器商品 type：product_id，product_name，product_desc，category_id，category_name，service_period")]),s._v(" "),e("p",[s._v("生鲜商品 type：product_id，product_name，product_desc，category_id，category_name，eat_period")]),s._v(" "),e("p",[s._v("每一个 type 里面，都会包含一堆 document")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"product_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"product_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"长虹电视机"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"product_desc"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4k高清"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"category_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"category_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"电器"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"service_period"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1年"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"product_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"product_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"基围虾"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"product_desc"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"纯天然，冰岛产"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"category_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"category_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"生鲜"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"eat_period"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7天"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("ul",[e("li",[s._v("index ：可以看成是一个数据库")]),s._v(" "),e("li",[s._v("type ：可以看成是数据库中的表")]),s._v(" "),e("li",[s._v("document：可以看成是表中的记录")])])]),s._v(" "),e("li",[e("p",[s._v("shard 分片")]),s._v(" "),e("p",[s._v("单台机器无法存储大量数据，es 可以将一个索引中的数据切分为多个 shard，分布在多台服务器上存储。有了 shard 就可以横向扩展，存储更多数据，让搜索和分析等操作分布到多台服务器上去执行，提升吞吐量和性能。每个 shard 都是一个 lucene index。")])]),s._v(" "),e("li",[e("p",[s._v("replica 复制集/副本")]),s._v(" "),e("p",[s._v("任何一个服务器随时可能故障或宕机，此时 shard 可能就会丢失，因此可以为每个 shard 创建多个 replica副本。replica 可以在 shard 故障时提供备用服务，保证数据不丢失，多个 replica 还可以提升搜索操作的吞吐量和性能。")]),s._v(" "),e("ul",[e("li",[s._v("primary shard（建立索引时一次设置，不能修改，默认5个）")]),s._v(" "),e("li",[s._v("replica shard（随时修改数量，默认1个）")])]),s._v(" "),e("p",[s._v("默认每个索引 10 个 shard，5个 primary shard，5个 replica shard，最小的高可用配置，是 2台 服务器。")])])]),s._v(" "),e("p",[e("img",{attrs:{src:a(985),alt:""}})]),s._v(" "),e("h2",{attrs:{id:"核心概念-vs-数据库核心概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心概念-vs-数据库核心概念"}},[s._v("#")]),s._v(" 核心概念 vs 数据库核心概念")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("Elasticsearch")]),s._v(" "),e("th",[s._v("数据库")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("Document")]),s._v(" "),e("td",[s._v("行")])]),s._v(" "),e("tr",[e("td",[s._v("Type")]),s._v(" "),e("td",[s._v("表")])]),s._v(" "),e("tr",[e("td",[s._v("Index")]),s._v(" "),e("td",[s._v("库")])])])])])}),[],!1,null,null,null);t.default=r.exports},984:function(s,t,a){s.exports=a.p+"assets/img/markdown-img-paste-20181231121955923.ccd120c8.png"},985:function(s,t,a){s.exports=a.p+"assets/img/markdown-img-paste-20181231122031193.1d0727e4.png"}}]);