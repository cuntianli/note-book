(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1043:function(s,e,t){s.exports=t.p+"assets/img/60c1d1e73224c4e73d708951cccf7020.9bd92111.png"},1044:function(s,e,t){s.exports=t.p+"assets/img/e3d1615645d6ab5a1337d7223f3e363d.6ee93c56.png"},1045:function(s,e,t){s.exports=t.p+"assets/img/e8c28aef7625d1a33726f8ded017fb84.787c2f17.png"},1046:function(s,e,t){s.exports=t.p+"assets/img/3b191bc94aad60d05e38a6614adf2995.1169379c.png"},1047:function(s,e,t){s.exports=t.p+"assets/img/5c0059a52964831fd2b343547c0d4557.9277d263.png"},1926:function(s,e,t){"use strict";t.r(e);var a=t(13),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程分支"}},[s._v("#")]),s._v(" 远程分支")]),s._v(" "),a("p",[a("strong",[s._v("远程引用")]),s._v(" 是对远程仓库的引用（指针），包括分支、标签等等。 你可以通过 "),a("code",[s._v("git ls-remote (remote)")]),s._v(" 来显式地获得远程引用的完整列表，或者通过 "),a("code",[s._v("git remote show (remote)")]),s._v("  获得远程分支的更多信息。 然而，一个更常见的做法是利用 "),a("strong",[s._v("远程跟踪分支")]),s._v("。")]),s._v(" "),a("p",[s._v("远程跟踪分支是 "),a("strong",[s._v("远程分支状态的引用")]),s._v("。 它们 "),a("strong",[s._v("是你不能移动的本地引用")]),s._v("，当你做任何网络通信操作时，它们会自动移动。 远程跟踪分支像是你上次连接到远程仓库时，那些分支所处状态的书签。")]),s._v(" "),a("p",[s._v("它们以 "),a("code",[s._v("(remote)/(branch)")]),s._v(" 形式命名。 例如，如果你想要看你最后一次与远程仓库 origin 通信时 master 分支的状态，你可以查看 "),a("code",[s._v("origin/master")]),s._v("  分支。 你与同事合作解决一个问题并且他们推送了一个 iss53 分支，你可能有自己的本地 iss53 分支；但是在服务器上的分支会指向 "),a("code",[s._v("origin/iss53")]),s._v(" 的提交。")]),s._v(" "),a("p",[s._v("这可能有一点儿难以理解，让我们来看一个例子。 假设你的网络里有一个在 "),a("code",[s._v("git.ourcompany.com")]),s._v(" 的 Git 服务器。 如果你从这里克隆，"),a("strong",[s._v("Git 的 clone 命令会为你自动将其命名为 origin")]),s._v("，拉取它的所有数据，"),a("strong",[s._v("创建一个指向它的 master 分支的指针")]),s._v("，并且在本地将其命名为 "),a("code",[s._v("origin/master")]),s._v("。 Git 也会给你一个与 origin 的 master 分支在指向同一个地方的本地 master 分支，这样你就有工作的基础。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("「origin」 "),a("strong",[s._v("并无特殊含义")])]),s._v(" "),a("p",[s._v("远程仓库名字  "),a("code",[s._v("origin")]),s._v(" 与分支名字  "),a("code",[s._v("master")]),s._v(" 一样，在 Git 中并没有任何特别的含义一样。 同时 "),a("code",[s._v("master")]),s._v(" 是当你运行 "),a("code",[s._v("git init")]),s._v(" 时默认的起始分支名字，"),a("strong",[s._v("原因仅仅是它的广泛使用")]),s._v("，"),a("code",[s._v("origin")]),s._v(" 是当你运行 "),a("code",[s._v("git clone")]),s._v(" 时默认的远程仓库名字。 如果你运行 "),a("code",[s._v("git clone -o booyah")]),s._v("，那么你默认的远程分支名字将会是 "),a("code",[s._v("booyah/master")]),s._v("。")])]),s._v(" "),a("p",[s._v("克隆之后的服务器与本地仓库")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1043),alt:"克隆之后的服务器与本地仓库。"}})]),s._v(" "),a("p",[s._v("如果你在 "),a("strong",[s._v("本地的 master 分支做了一些工作")]),s._v("，然而在同一时间，其他人推送提交到 "),a("code",[s._v("git.ourcompany.com")]),s._v(" 并更新了它的 master 分支，"),a("strong",[s._v("那么你的提交历史将向不同的方向前进")]),s._v("。 也许，只要你不与 origin 服务器连接，你的 "),a("code",[s._v("origin/master")]),s._v(" 指针就不会移动。")]),s._v(" "),a("p",[s._v("本地与远程的工作可以分叉")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1044),alt:"本地与远程的工作可以分叉。"}})]),s._v(" "),a("p",[s._v("如果要同步你的工作，运行 "),a("code",[s._v("git fetch origin")]),s._v(" 命令。 这个命令查找 "),a("code",[s._v("origin")]),s._v(" 是哪一个服务器（在本例中，它是 "),a("code",[s._v("git.ourcompany.com")]),s._v("），从中抓取本地没有的数据，并且更新本地数据库，移动 "),a("code",[s._v("origin/master")]),s._v(" 指针指向新的、更新后的位置。")]),s._v(" "),a("p",[s._v("git fetch 更新你的远程仓库引用")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1045),alt:" 更新你的远程仓库引用。"}})]),s._v(" "),a("p",[s._v("为了演示有多个远程仓库与远程分支的情况，我们假定你有另一个内部 Git 服务器，仅用于你的 sprint 小组的开发工作。 这个服务器位于 "),a("code",[s._v("git.team1.ourcompany.com")]),s._v("。 你可以运行 "),a("code",[s._v("git remote add")]),s._v(" 命令 "),a("strong",[s._v("添加一个新的远程仓库引用到当前的项目")]),s._v("，这个命令我们会在 "),a("RouterLink",{attrs:{to:"/git-scm/02/"}},[s._v("Git 基础")]),s._v(" 中详细说明。 将这个远程仓库命名为 teamone，将其作为整个 URL 的缩写。")],1),s._v(" "),a("p",[s._v("添加另一个远程仓库")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1046),alt:"添加另一个远程仓库。"}})]),s._v(" "),a("p",[s._v("现在，可以运行 "),a("code",[s._v("git fetch teamone")]),s._v(" 来 "),a("strong",[s._v("抓取远程仓库 teamone 有而本地没有的数据")]),s._v("。 因为那台服务器上现有的数据是 origin 服务器上的一个子集（简单说，这个仓库是 origin 中某一个提交中的代码），所以 Git 并不会抓取数据而是会设置远程跟踪分支 "),a("code",[s._v("teamone/master")]),s._v(" 指向 teamone 的 master 分支。")]),s._v(" "),a("p",[s._v("远程跟踪分支 "),a("code",[s._v("teamone/master")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(1047),alt:"远程跟踪分支 。"}})]),s._v(" "),a("h2",{attrs:{id:"推送-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送-push"}},[s._v("#")]),s._v(" 推送（push）")]),s._v(" "),a("p",[s._v("当你想要公开分享一个分支时，需要将其推送到有写入权限的远程仓库上。 本地的分支并不会自动与远程仓库同步 – 你必须显式地推送想要分享的分支。 这样，你就可以把不愿意分享的内容放到私人分支上，而将需要和别人协作的内容推送到公开分支。")]),s._v(" "),a("p",[s._v("如果希望和别人一起在名为 "),a("code",[s._v("serverfix")]),s._v(" 的分支上工作，你可以像推送第一个分支那样推送它。 运行 "),a("code",[s._v("git push (remote) (branch)")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin serverfix\nCounting objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(", done.\nDelta compression using up to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" threads.\nCompressing objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("/15"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nWriting objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("/24"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.91")]),s._v(" KiB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" bytes/s, done.\nTotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTo https://github.com/schacon/simplegit\n * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("      serverfix -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" serverfix\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("这里有些工作被简化了。 Git 自动将 serverfix 分支名字展开为 "),a("code",[s._v("refs/heads/serverfix:refs/heads/serverfix")]),s._v("，那意味着，「"),a("strong",[s._v("推送本地的 serverfix 分支来更新远程仓库上的 serverfix 分支")]),s._v("。」我们将会详细学习 "),a("RouterLink",{attrs:{to:"/git-scm/10/"}},[s._v("Git 内部原理")]),s._v(" 的 "),a("code",[s._v("refs/heads/")]),s._v(" 部分，但是现在可以先把它放在儿。 你也可以运行 "),a("code",[s._v("git push origin serverfix:serverfix")]),s._v("，它会做同样的事 – 相当于它说，「"),a("strong",[s._v("推送本地的 serverfix 分支，将其作为远程仓库的 serverfix 分支")]),s._v("」"),a("strong",[s._v("可以通过这种格式来推送本地分支到一个命名不相同的远程分支")]),s._v("。 如果并不想让远程仓库上的分支叫做 serverfix，可以运行 "),a("code",[s._v("git push origin serverfix:awesomebranch")]),s._v(" 来将本地的 serverfix 分支推送到远程仓库上的 awesomebranch 分支。")],1),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("如何避免每次输入密码")]),s._v(" "),a("p",[s._v("如果你正在使用 HTTPS URL 来推送，Git 服务器会询问用户名与密码。 默认情况下它会在终端中提示服务器是否允许你进行推送。")]),s._v(" "),a("p",[s._v("如果不想在每一次推送时都输入用户名与密码，你可以设置一个 “credential cache”。 最简单的方式就是将其保存在内存中几分钟，可以简单地运行 "),a("code",[s._v("git config –global credential.helper cache")]),s._v(" 来设置它。")]),s._v(" "),a("p",[s._v("想要了解更多关于不同验证缓存的可用选项，查看 "),a("RouterLink",{attrs:{to:"/git-scm/07/14.html"}},[s._v("凭证存储")]),s._v("。")],1)]),s._v(" "),a("p",[s._v("下一次其他协作者从服务器上抓取数据时，他们会在本地生成一个远程分支 "),a("code",[s._v("origin/serverfix")]),s._v("，指向服务器的 serverfix 分支的引用：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git fetch origin\nremote: Counting objects: 7, done.\nremote: Compressing objects: 100% (2/2), done.\nremote: Total 3 (delta 0), reused 3 (delta 0)\nUnpacking objects: 100% (3/3), done.\nFrom https://github.com/schacon/simplegit\n * [new branch]      serverfix    -> origin/serverfix\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("要特别注意的一点是 "),a("strong",[s._v("当抓取到新的远程跟踪分支时")]),s._v("，本地不会自动生成一份可编辑的副本（拷贝）。 换一句话说，这种情况下，不会有一个新的 serverfix 分支 – 只有一个不可以修改的 "),a("code",[s._v("origin/serverfix")]),s._v(" 指针。")]),s._v(" "),a("p",[s._v("可以运行 "),a("code",[s._v("git merge origin/serverfix")]),s._v(" 将这些工作合并到当前所在的分支。 如果想要在自己的 serverfix 分支上工作，可以将其建立在远程 "),a("a",{attrs:{href:"#%E8%B7%9F%E8%B8%AA%E5%88%86%E6%94%AF"}},[s._v("跟踪分支")]),s._v(" 之上：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git checkout -b serverfix origin/serverfix\nBranch serverfix set up to track remote branch serverfix from origin.\nSwitched to a new branch 'serverfix'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这会给你一个用于工作的本地分支，并且起点位于 "),a("code",[s._v("origin/serverfix")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"跟踪分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跟踪分支"}},[s._v("#")]),s._v(" 跟踪分支")]),s._v(" "),a("p",[s._v("从一个远程跟踪分支检出一个本地分支会自动创建一个叫做 「"),a("strong",[s._v("跟踪分支")]),s._v("」（有时候也叫做 「"),a("strong",[s._v("上游分支")]),s._v("」）。")]),s._v(" "),a("p",[a("strong",[s._v("跟踪分支")]),s._v(" 是 "),a("strong",[s._v("与远程分支有直接关系的本地分支")]),s._v("。 如果在一个跟踪分支上输入 "),a("code",[s._v("git pull")]),s._v("，Git 能自动地识别去哪个服务器上抓取、合并到哪个分支。")]),s._v(" "),a("p",[s._v("当克隆一个仓库时，它通常会自动地创建一个跟踪 "),a("code",[s._v("origin/master")]),s._v(" 的 master 分支。 然而，如果你愿意的话可以设置其他的跟踪分支 – 其他远程仓库上的跟踪分支，或者不跟踪 master 分支。 最简单的就是之前看到的例子，运行 "),a("code",[s._v("git checkout -b [branch] [remotename]/[branch]")]),s._v("。 这是一个十分常用的操作所以 Git 提供了 "),a("code",[s._v("–track")]),s._v(" 快捷方式：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git checkout --track origin/serverfix\nBranch serverfix set up to track remote branch serverfix from origin.\nSwitched to a new branch 'serverfix'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果想要将本地分支与远程分支设置为不同名字，你可以轻松地增加一个不同名字的本地分支的上一个命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git checkout -b sf origin/serverfix\nBranch sf set up to track remote branch serverfix from origin.\nSwitched to a new branch 'sf'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("现在，本地分支 sf 会自动从 origin/serverfix 拉取。")]),s._v(" "),a("h3",{attrs:{id:"已有本地分支跟踪远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已有本地分支跟踪远程分支"}},[s._v("#")]),s._v(" 已有本地分支跟踪远程分支")]),s._v(" "),a("p",[s._v("设置 "),a("strong",[s._v("已有的本地分支跟踪一个刚刚拉取下来的远程分支")]),s._v("，或者想要修改正在跟踪的上游分支，你可以在任意时间使用 "),a("code",[s._v("-u")]),s._v(" 或 "),a("code",[s._v("–set-upstream-to")]),s._v(" 选项运行 "),a("code",[s._v("git branch")]),s._v(" 来显式地设置。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git branch -u origin/serverfix\nBranch serverfix set up to track remote branch serverfix from origin.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("上游快捷方式")]),s._v(" "),a("p",[s._v("当设置好跟踪分支后，可以通过 "),a("code",[s._v("@{upstream}")]),s._v(" 或 "),a("code",[s._v("@{u}")]),s._v("  快捷方式来引用它。 所以在 master 分支时并且它正在跟踪 "),a("code",[s._v("origin/master")]),s._v(" 时，如果愿意的话可以使用 "),a("code",[s._v("git merge @{u}")]),s._v("  来取代 "),a("code",[s._v("git merge origin/master")]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"查看所有已设置的跟踪分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看所有已设置的跟踪分支"}},[s._v("#")]),s._v(" 查看所有已设置的跟踪分支")]),s._v(" "),a("p",[s._v("如果想要查看设置的所有跟踪分支，可以使用 "),a("code",[s._v("git branch")]),s._v(" 的 "),a("code",[s._v("-vv")]),s._v(" 选项。 这会将所有的本地分支列出来并且包含更多的信息，如每一个分支正在跟踪哪个远程分支与本地分支是否是领先、落后或是都有。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git branch -vv\n  iss53     7e424c3 [origin/iss53: ahead 2] forgot the brackets\n  master    1ae2a45 [origin/master] deploying index fix\n* serverfix f8674d9 [teamone/server-fix-good: ahead 3, behind 1] this should do it\n  testing   5ea463a trying something new\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这里可以看到 iss53 分支正在跟踪 origin/iss53 并且 "),a("strong",[s._v("ahead 是 2")]),s._v("，"),a("strong",[s._v("意味着本地有两个提交还没有推送到服务器上")]),s._v("。")]),s._v(" "),a("p",[s._v("也能看到 master 分支正在跟踪 origin/master 分支并且是最新的。")]),s._v(" "),a("p",[s._v("接下来可以看到 serverfix 分支正在跟踪 teamone 服务器上的 server-fix-good 分支并且 "),a("strong",[s._v("领先 2 落后 1")]),s._v("，意味着服务器上有一次提交还没有合并入同时本地有三次提交还没有推送。 最后看到 testing 分支并没有跟踪任何远程分支。")]),s._v(" "),a("p",[a("strong",[s._v("需要重点注意的一点是这些数字的值来自于你从每个服务器上最后一次抓取的数据")]),s._v("。 这个命令并没有连接服务器，它只会告诉你关于本地缓存的服务器数据。 如果想要统计最新的领先与落后数字，需要在运行此命令前抓取所有的远程仓库。 可以像这样做：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch --all\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -vv\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"拉取-fetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取-fetch"}},[s._v("#")]),s._v(" 拉取（fetch）")]),s._v(" "),a("p",[s._v("当 "),a("code",[s._v("git fetch")]),s._v(" 命令 "),a("strong",[s._v("从服务器上抓取本地没有的数据时")]),s._v("，"),a("strong",[s._v("它并不会修改工作目录中的内容")]),s._v("。 它只会获取数据然后让你自己合并。 然而，有一个命令叫作 "),a("code",[s._v("git pull")]),s._v(" 在大多数情况下它的含义是一个 "),a("code",[s._v("git fetch")]),s._v(" 紧接着一个 "),a("code",[s._v("git merge")]),s._v(" 命令。 如果有一个像之前章节中演示的 "),a("strong",[s._v("设置好的跟踪分支")]),s._v("，不管它是显式地设置还是通过 clone 或 checkout 命令为你创建的，"),a("code",[s._v("git pull")]),s._v(" 都会查找当前分支所跟踪的服务器与分支，从服务器上抓取数据然后尝试合并入那个远程分支。")]),s._v(" "),a("p",[s._v("由于 "),a("code",[s._v("git pull")]),s._v(" 的魔法经常令人困惑所以通常单独显式地使用 "),a("code",[s._v("fetch")]),s._v(" 与 "),a("code",[s._v("merge")]),s._v(" 命令会更好一些。")]),s._v(" "),a("h2",{attrs:{id:"删除远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除远程分支"}},[s._v("#")]),s._v(" 删除远程分支")]),s._v(" "),a("p",[s._v("假设你已经通过远程分支做完所有的工作了 – 也就是说你和你的协作者已经完成了一个特性并且将其合并到了远程仓库的 master 分支（或任何其他稳定代码分支）。 可以运行带有 "),a("code",[s._v("–delete")]),s._v(" 选项的 "),a("code",[s._v("git push")]),s._v(" 命令来删除一个远程分支。 如果想要从服务器上删除 "),a("code",[s._v("serverfix")]),s._v(" 分支，运行下面的命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git push origin --delete serverfix\nTo https://github.com/schacon/simplegit\n - [deleted]         serverfix\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("基本上这个命令做的 "),a("strong",[s._v("只是从服务器上移除这个指针")]),s._v("。 Git 服务器通常会保留数据一段时间直到垃圾回收运行，所以如果不小心删除掉了，通常是很容易恢复的。")]),s._v(" "),a("h2",{attrs:{id:"不常见的错误收集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不常见的错误收集"}},[s._v("#")]),s._v(" 不常见的错误收集")]),s._v(" "),a("p",[a("strong",[s._v("执行不带参数的 "),a("code",[s._v("git push")]),s._v(" 提示 "),a("code",[s._v("fatal: The current branch master has multiple upstream branches, refusing to push.")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\nfatal: The current branch master has multiple upstream branches, refusing to push.\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 并且查看远程的时候，会提示有多个 branch.master.remote ")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote show origin\nwarning: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" than one branch.master.remote \n* remote origin\n  Fetch URL: https://github.com/zq99299/note-book.git\n  Push  URL: https://github.com/zq99299/note-book.git\n  HEAD branch: master\n  Remote branches:\n    gh-pages      tracked\n    master        tracked\n    vuepress-demo tracked\n  Local branch configured "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git pull'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n    master merges with remote master\n              and with remote master\n  Local ref configured "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git push'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n    master pushes to master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("up to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("查看我们本地的配置选项")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list\nhttp.sslcainfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("d:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt\nhttp.sslbackend"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("openssl\ndiff.astextplain.textconv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("astextplain\nfilter.lfs.clean"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("git-lfs clean -- %f\nfilter.lfs.smudge"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("git-lfs smudge -- %f\nfilter.lfs.process"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("git-lfs filter-process\nfilter.lfs.required"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\ncredential.helper"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("manager-core\ncore.autocrlf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\ncore.fscache"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\ncore.symlinks"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\npull.rebase"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\ncredential.https://dev.azure.com.usehttppath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\ninit.defaultbranch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("main\nbranch.master.remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("origin\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里是 用户级别的 .gitconfig 文件中配置的")]),s._v("\nbranch.master.merge"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("refs/heads/master    \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里")]),s._v("\ncore.autocrlf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\ncore.repositoryformatversion"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ncore.filemode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\ncore.bare"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\ncore.logallrefupdates"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\ncore.symlinks"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\ncore.ignorecase"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\nremote.origin.url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://github.com/zq99299/note-book.git\nremote.origin.fetch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("+refs/heads/*:refs/remotes/origin/*\nbranch.master.remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("origin\t\t\t\t\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里 是当前项目目录下 .git/config 配置的")]),s._v("\nbranch.master.merge"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("refs/heads/master\t\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里")]),s._v("\nuser.name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zq99299\nuser.email"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("99299684")]),s._v("@qq.com\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("p",[s._v("问题就出现在这里，去掉用户级别的 "),a("code",[s._v(".gitconfig")]),s._v(" 中的配置就可以了。疑问就是：配置文件会采用就近原则覆盖规则，这里没有被覆盖。")])])}),[],!1,null,null,null);e.default=r.exports}}]);