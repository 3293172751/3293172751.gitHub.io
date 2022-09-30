(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{751:function(s,e,t){"use strict";t.r(e);var a=t(5),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker-网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-网络"}},[s._v("#")]),s._v(" docker 网络")]),s._v(" "),t("p",[s._v("[toc]")]),s._v(" "),t("h3",{attrs:{id:"开始"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[s._v("#")]),s._v(" 开始")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2022/05/13/9LKNck24Hi8G6qP.png",alt:"image-20220513224338885"}})]),s._v(" "),t("p",[t("strong",[s._v("使用redis创建三主三从reids实例的时候")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker run -d --name redis-node-1 --net host --privileged=true \\\n-v /data/redis/share/redis-node-1:/data \\\nredis:6.0.8 --cluster-enabled yes --appendonly yes --port 6381\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("code",[s._v("--net host")]),s._v("：网络模式")]),s._v(" "),t("p",[t("strong",[s._v("在CentOS7的安装过程中如果有选择相关虚拟化的的服务安装系统后，启动网卡时会发现有一个以网桥连接的私网地址的virbr0网卡(virbr0网卡：它还有一个固定的默认IP地址192.168.122.1)，是做虚拟机网桥的使用的，其作用是为连接其上的虚机网卡提供 NAT访问外网的功能。")])]),s._v(" "),t("p",[s._v("我们之前学习Linux安装，勾选安装系统的时候附带了libvirt服务才会生成的一个东西，如果不需要可以直接将libvirtd服务卸载，")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("yum remove libvirt-libs.x86_64\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"docker启动后-网络情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker启动后-网络情况"}},[s._v("#")]),s._v(" docker启动后，网络情况")]),s._v(" "),t("p",[t("strong",[s._v("会产生一个名为docker0的虚拟网桥")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("root@ubuntu:/text"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ifconfig")]),s._v("\ndocker0: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flags")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("416")]),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v("<")]),s._v("UP,BROADCAST,RUNNING,MULTICAST"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v("\n        inet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.1  netmask "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".0.0  broadcast "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".255.255\n        inet6 fe80::42:1cff:fea2:e40d  prefixlen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("  scopeid 0x2"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v("<")]),s._v("link"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        ether 02:42:1c:a2:e4:0d  txqueuelen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ethernet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX packets "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1018")]),s._v("  bytes "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("47380")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("47.3")]),s._v(" KB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX errors "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  dropped "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  overruns "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  frame "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        TX packets "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1092")]),s._v("  bytes "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22527365")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22.5")]),s._v(" MB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        TX errors "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  dropped "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" overruns "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  carrier "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  collisions "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h5",{attrs:{id:"查看docker网络命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看docker网络命令"}},[s._v("#")]),s._v(" 查看docker网络命令")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("root@ubuntu:/text"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker network --help")]),s._v("\n\nUsage:  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" network COMMAND\n\nManage networks\n\nCommands:\n  connect     Connect a container to a network\n  create      Create a network\n  disconnect  Disconnect a container from a network\n  inspect     Display detailed information on one or "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" networks\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("          List networks\n  prune       Remove all unused networks\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("          Remove one or "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" networks\n\nRun "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'docker network COMMAND --help'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information on a command.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("查看网络")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker network ls\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("查看网络源数据")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker network inspect XXX网络名字\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("删除网络")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker network rm XXX网络名字\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[s._v("#")]),s._v(" 作用")]),s._v(" "),t("p",[t("strong",[s._v("·     容器间的互联和通信以及端口映射")])]),s._v(" "),t("p",[t("strong",[s._v("·     容器IP变动时候可以通过服务名直接网络通信而不受到影响")])])])}),[],!1,null,null,null);e.default=n.exports}}]);