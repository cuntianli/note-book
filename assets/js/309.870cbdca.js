(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{1639:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_155-商品详情页动态渲染系统-spring-cloud-之-config-统一配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_155-商品详情页动态渲染系统-spring-cloud-之-config-统一配置中心"}},[s._v("#")]),s._v(" 155. 商品详情页动态渲染系统：Spring Cloud 之 Config 统一配置中心")]),s._v(" "),a("p",[s._v(":::\n本章内容的深入使用请参考此笔记内容 "),a("RouterLink",{attrs:{to:"/spring-cloud-tutorial/config/"}},[s._v("spring cloud config")]),s._v("\n:::")],1),s._v(" "),a("p",[s._v("多个服务共享相同的配置，举个例子、数据库连接、redis 连接，还有别的一些东西，包括一些降级开关，等等")]),s._v(" "),a("h2",{attrs:{id:"创建-config-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-config-server"}},[s._v("#")]),s._v(" 创建 config-server")]),s._v(" "),a("p",[s._v("用 config 统一配置中心，config-server/build.gradle")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("plugins "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    id "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot'")]),s._v(" version "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.1.6.RELEASE'")]),s._v("\n    id "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'java'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'io.spring.dependency-management'")]),s._v("\n\next "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'springCloudVersion'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"Greenwich.SR2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\ndependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    implementation "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.cloud:spring-cloud-starter-netflix-eureka-client'")]),s._v("\n    implementation "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.cloud:spring-cloud-config-server'")]),s._v("\n    implementation "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot:spring-boot-starter-web'")]),s._v("\n    testImplementation "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot:spring-boot-starter-test'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\ndependencyManagement "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    imports "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        mavenBom "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"org.springframework.cloud:spring-cloud-dependencies:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("springCloudVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("使用注解开启服务")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableConfigServer")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("application.yml")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9009")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("git")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# uri: http://localhost/mrcode/config.git")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# username: xx")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# password: xx")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为了方便本地测试，使用本地目录方式，但是该目录需要是一个 git 仓库")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 H:\\dev\\project\\mrcode\\cache-eshop-config-repo 目录")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# test 作为一个配置仓库，在该目录下初始化为一个 git 仓库")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("///H"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\dev\\project\\mrcode\\cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("eshop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("repo\\test\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("eureka")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("defaultZone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8761/eureka/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("在 test 目录下添加一个文件 application.yml")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" zq\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("添加完成之后，并提交到 git（默认就是 master）")]),s._v(" "),a("p",[s._v("启动项目后，访问地址：http://localhost:9009/name/cc")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"profiles"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cc"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"72284bf01842408e885bb3a8831e945bf47b5e76"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"state"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"propertySources"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file:///H:\\\\dev\\\\project\\\\mrcode\\\\cache-eshop-config-repo\\\\test/application.yml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"source"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zq"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("可以看到，找到了该属性名称，并且还有版本号，与所在配置文件与对应的值")]),s._v(" "),a("h2",{attrs:{id:"改造-greeting-service-使用配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改造-greeting-service-使用配置中心"}},[s._v("#")]),s._v(" 改造 greeting-service 使用配置中心")]),s._v(" "),a("p",[s._v("增加依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" implementation 'org.springframework.cloud:spring-cloud-starter-config'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("增加引导配置文件 bootstrap.yml")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9009")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指向刚才创建的配置中心项目")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("profile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认为 default")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("使用刚刚配置中心的 name 属性")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${name}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 该属性在 greeting-service 中的配置文件并没有配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("重启项目后，访问地址：http://localhost:9005/name  如果返回 zq ，那么表示使用配置中心成功了")])])}),[],!1,null,null,null);t.default=e.exports}}]);