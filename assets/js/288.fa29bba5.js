(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{1607:function(t,n,s){"use strict";s.r(n);var r=s(13),e=Object(r.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_122-如何将课程中的东西学以致用在自己目前的项目中去应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_122-如何将课程中的东西学以致用在自己目前的项目中去应用"}},[t._v("#")]),t._v(" 122. 如何将课程中的东西学以致用在自己目前的项目中去应用？")]),t._v(" "),s("p",[t._v("到目前为止大家肯定学到了很多东西、技术、解决方案、架构，\n那么肯定会问：我怎么用？")]),t._v(" "),s("p",[t._v("这里提供一个思路：首先必须得对课程里的东西彻底吸收了，然后再看看自己的项目，\n有哪些是可以用到其中一些技术的。")]),t._v(" "),s("p",[t._v("比如本人：由于是后台营销管理系统，而且本人只负责其中的后台管理系统，\n所以场景上有限，目前用了 ehcache 在一些对数据实时性不敏感的调用上进行缓存，\n用了 hystrix 对整个服务调用，\nspring boot 默认配置的 hystrix 是以服务名为一个线程池，各个调用为一个 command，\n我用 hystrix 在原有超时基础上进行包装一层，能看到各个 command 的调用情况，\n但是默认的仪表盘由于只是展示最近 10 秒的情况，没有历史曲线等功能，\n这个时候针对我这里的需求，其实就可以自己接收 hystrix-stream 进行汇聚数据，\n进行历史曲线的展示（虽然目前自己还做不到，因为涉及到大量的数据，不知道怎么计算和存储）")]),t._v(" "),s("p",[t._v("通过以上本人对目前自己项目的思考，你会发现，在学习后你虽然没有一个非常靠近的环境，\n来使用课程中所有的东西，但是能用到其中的一部分，拿来改造你的项目")]),t._v(" "),s("p",[t._v("这个也是最重要的：这套课程学完以后，你对自己的系统多一些思考，多一些架构上的思考和设计")])])}),[],!1,null,null,null);n.default=e.exports}}]);