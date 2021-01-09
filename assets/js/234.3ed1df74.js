(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{1490:function(t,a,s){t.exports=s.p+"assets/img/e3e052fac55209937cfd20ab5117f24f.e3e052fa.png"},2095:function(t,a,s){"use strict";s.r(a);var e=s(13),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_11丨如何理解正则的匹配原理以及优化原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11丨如何理解正则的匹配原理以及优化原则"}},[t._v("#")]),t._v(" 11丨如何理解正则的匹配原理以及优化原则？")]),t._v(" "),e("p",[t._v("这一节课我们一起来学习正则匹配原理相关的内容，以及在书写正则时的一些优化方法。")]),t._v(" "),e("p",[t._v("这节课我主要给你讲解一下正则匹配过程，回顾一下之前讲的回溯，以及 DFA 和 NFA 引擎的工作方式，方便你明白正则是如何进行匹配的。这些原理性的知识，能够帮助我们快速理解为什么有些正则表达式不符合预期，也可以避免一些常见的错误。只有了解正则引擎的工作原理，我们才可以更轻松地写出正确的，性能更好的正则表达式。")]),t._v(" "),e("h2",{attrs:{id:"有穷状态自动机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有穷状态自动机"}},[t._v("#")]),t._v(" 有穷状态自动机")]),t._v(" "),e("p",[t._v("正则之所以能够处理复杂文本，就是因为采用了 "),e("strong",[t._v("有穷状态自动机（finite automaton）。")]),t._v(" 那什么是有穷自动机呢？")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("有穷状态是指一个系统具有有穷个状态，不同的状态代表不同的意义。")])]),t._v(" "),e("li",[e("p",[t._v("自动机是指系统可以根据相应的条件，在不同的状态下进行转移。")]),t._v(" "),e("p",[t._v("从一个初始状态，根据对应的操作（比如录入的字符集）执行状态转移，最终达到终止状态（可能有一到多个终止状态）。")])])]),t._v(" "),e("p",[t._v("有穷自动机的具体实现称为正则引擎，主要有 DFA 和 NFA 两种，其中 NFA 又分为传统的 NFA 和 POSIX NFA：")]),t._v(" "),e("ul",[e("li",[t._v("DFA：确定性有穷自动机（Deterministic finite automaton）")]),t._v(" "),e("li",[t._v("NFA：非确定性有穷自动机（Non-deterministic finite automaton）\n"),e("ul",[e("li",[t._v("传统的 NFA")]),t._v(" "),e("li",[t._v("POSIX NFA")])])])]),t._v(" "),e("p",[t._v("接下来我们来通过一些示例，来详细看下正则表达式的匹配过程。")]),t._v(" "),e("h2",{attrs:{id:"正则的匹配过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则的匹配过程"}},[t._v("#")]),t._v(" 正则的匹配过程")]),t._v(" "),e("p",[t._v("在使用到编程语言时，我们经常会 「编译」一下正则表达式，来提升效率，比如在 Python3 中它是下面这样的：")]),t._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" re\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" reg "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'a(?:bb)+a'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" reg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abbbba'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abbbba'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("这个编译的过程，"),e("strong",[t._v("其实就是生成自动机的过程")]),t._v("，正则引擎会拿着这个自动机去和字符串进行匹配。生成的自动机可能是这样的（下图是使用 "),e("a",{attrs:{href:"https://github.com/javallone/regexper-static",target:"_blank",rel:"noopener noreferrer"}},[t._v("Regexper 工具生成"),e("OutboundLink")],1),t._v("，再次加工得到的）。比如上图中的 "),e("code",[t._v("a(?:bb)+a")]),t._v(" 可以 "),e("a",{attrs:{href:"https://regexper.com/#a%28%3F%3Abb%29%2Ba",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用在线的 Regexper 工具生成下图类似的图片"),e("OutboundLink")],1),t._v(" （友情提示："),e("code",[t._v("(?:)")]),t._v(" 小括号中的 "),e("code",[t._v("?:")]),t._v(" 表示不捕获分组）")]),t._v(" "),e("p",[e("img",{attrs:{src:s(1490),alt:"img"}})]),t._v(" "),e("p",[t._v("在状态 s3 时，不需要输入任何字符，状态也有可能转换成 s1。你可以理解成 "),e("code",[t._v("a(bb)+a")]),t._v("  在匹配了字符 "),e("code",[t._v("abb")]),t._v(" 之后，到底在 s3 状态，还是在 s1 状态，这是不确定的。"),e("strong",[t._v("这种状态机就是非确定性有穷状态自动机（Non-deterministic finite automaton 简称 NFA）")]),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("NFA 和 DFA 是可以相互转化的，")]),t._v(" 当我们把上面的状态表示成下面这样，就是一台 DFA 状态机了，因为在 s0-s4 这几个状态，每个状态都需要特定的输入，才能发生状态变化。")])])}),[],!1,null,null,null);a.default=r.exports}}]);