(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1672:function(s,t,n){"use strict";n.r(t);var a=n(13),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_087-基于-spring-boot-快速构建缓存服务以及商品服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_087-基于-spring-boot-快速构建缓存服务以及商品服务"}},[s._v("#")]),s._v(" 087. 基于 spring boot 快速构建缓存服务以及商品服务")]),s._v(" "),a("p",[s._v("本章搭建项目：")]),s._v(" "),a("ul",[a("li",[s._v("eshop-cache-ha：缓存服务，端口 7001")]),s._v(" "),a("li",[s._v("eshop-product-ha：商品服务，端口 7000")])]),s._v(" "),a("p",[s._v("两个服务都是建立在父模块下的子模块，项目源码参考 https://github.com/zq99299/cache-pdp.git")]),s._v(" "),a("p",[s._v("以下配置重新搞过一次，之前的老是依赖有问题，时不时的就编译不了")]),s._v(" "),a("p",[s._v("最终项目目录布局")]),s._v(" "),a("p",[a("img",{attrs:{src:n(492),alt:""}})]),s._v(" "),a("p",[s._v("搭建一个空项目，能连接到数据库的配置，两个项目都是一样的除了端口号不一样")]),s._v(" "),a("p",[s._v("公共配置 build.gradle")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("allprojects "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    group "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cn.mrcode.cachepdp'")]),s._v("\n    version "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0.0.1-SNAPSHOT'")]),s._v("\n\n    repositories "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mavenLocal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        maven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" url "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://repo.spring.io/libs-snapshot'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        maven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" url "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"http://maven.aliyun.com/nexus/content/groups/public"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        maven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" url "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"https://maven.repository.redhat.com/ga/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        maven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" url "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"http://maven.nuiton.org/nexus/content/groups/releases/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        maven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" url "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"https://repository.cloudera.com/artifactory/cloudera-repos/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mavenCentral")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\nsubprojects "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("\n    apply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'java'")]),s._v("\n    apply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'idea'")]),s._v("\n    sourceCompatibility "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.8'")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//跳过所有文件的编译测试；不是跳过compileTestJava task 而是在执行该task的时候，跳过所有的测试文件")]),s._v("\n    test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        exclude "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'**/*.class'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里一定得要。在多模块下，不然编译失败，")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bootJar 默认会关闭 jar 任务")]),s._v("\n    jar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        enabled "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//指定编译的编码")]),s._v("\n    tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("withType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("JavaCompile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encoding "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"UTF-8"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("p",[s._v("公共配置 settings.gradle")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("pluginManagement "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    repositories "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("gradlePluginPortal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nrootProject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cache-pdp'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这个写在之前的父项目下了，所以还有其他的子项目")]),s._v("\ninclude "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eshop-inventory'")]),s._v("\ninclude "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eshop-cache'")]),s._v("\ninclude "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'storm-helloword'")]),s._v("\ninclude "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eshop-storm'")]),s._v("\ninclude "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eshop-cache-ha'")]),s._v("\ninclude "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eshop-product-ha'")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("eshop-product-ha/build.gradle")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("plugins "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    id "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot'")]),s._v(" version "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.1.5.RELEASE'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'io.spring.dependency-management'")]),s._v("\ndependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    compile "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot:spring-boot-starter-web'")]),s._v("\n    compile "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot:spring-boot-starter-jdbc'")]),s._v("\n    compile "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot:spring-boot-starter-actuator'")]),s._v("\n    compile "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot:spring-boot-starter-thymeleaf'")]),s._v("\n    compile "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.mybatis.spring.boot:mybatis-spring-boot-starter:2.0.1'")]),s._v("\n    runtimeOnly "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql:mysql-connector-java:5.1.34'")]),s._v("\n    testImplementation "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot:spring-boot-starter-test'")]),s._v("\n    compile "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'com.alibaba:fastjson:1.1.43'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("eshop-product-ha application.yml")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("logging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("root")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" info\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以打印 sql")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cn.mrcode.cachepdp.eshop.product.ha")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" info\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("org.springframework.web")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TRACE\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  path: ./")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver-class-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" com.mysql.jdbc.Driver\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    driver-class-name: com.mysql.cj.jdbc.Driver")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//192.168.99.173"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("3306/eshop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v("useUnicode=yes"),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&characterEncoding=UTF-8&useSSL=false")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" eshop\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" eshop\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jackson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("date-format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yyyy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("MM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dd HH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("mm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ss\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("time-zone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" GMT+8\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mybatis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  type-aliases-package: cn.mrcode.cachepdp.eshop.product.ha.model")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mapper-locations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" classpath"),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("*:mapper/*.xml")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("项目启动后，可访问到 "),a("code",[s._v("http://localhost:7000/getUserInfo")]),s._v(" 即为成功")])])}),[],!1,null,null,null);t.default=e.exports},492:function(s,t,n){s.exports=n.p+"assets/img/markdown-img-paste-20190601220937716.5e1e35b1.png"}}]);