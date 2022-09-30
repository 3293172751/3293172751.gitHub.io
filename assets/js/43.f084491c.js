(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{756:function(e,s,t){"use strict";t.r(s);var n=t(5),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"container是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#container是什么"}},[e._v("#")]),e._v(" container是什么")]),e._v(" "),t("p",[e._v("[toc]")]),e._v(" "),t("h3",{attrs:{id:"container网络模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#container网络模式"}},[e._v("#")]),e._v(" container⽹络模式")]),e._v(" "),t("p",[t("strong",[e._v("新建的容器和已经存在的一个容器共享一个网络ip配置而不是和宿主机共享。新创建的容器不会创建自己的网卡，配置自己的IP，而是和一个指定的容器共享IP、端口范围等。同样，两个容器除了网络方面，其他的如文件系统、进程列表等还是隔离的。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2022/05/15/6fVpoYeywxavmUu.jpg",alt:"graphic"}})]),e._v(" "),t("p",[e._v("案例")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("单图标")]),e._v(" "),t("th",[e._v('![img](file:///C:/Users/smile/AppData/Local/Temp/msohtmlclip1/01/clip_image004.gif) CustomIcon-663735520; ["", "4MyPJwAAAAAAAAAAAAAAAA=="]')])])]),e._v(" "),t("tbody",[t("tr",[t("td"),e._v(" "),t("td")])])]),e._v(" "),t("p",[t("strong",[e._v("先配置一个8085")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker run -d -p 8085:8080  --name tomcat85 billygoo/tomcat8-jdk8\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("再配置一个8086借用8085")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker run -d -p 8086:8080 --network container:tomcat85 --name tomcat86 billygoo/tomcat8-jdk8\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("运行结果")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2022/05/15/QNitcHF6LbfRYoz.png",alt:"image-20220515120645211"}})]),e._v(" "),t("p",[t("strong",[e._v("相当于tomcat86和tomcat85公用同一个ip同一个端口，导致端口冲突")])]),e._v(" "),t("p",[t("strong",[e._v("本案例用tomcat演示不合适。。。演示坑。。。。。。o(╥﹏╥)o")])]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("换一个演示：")]),e._v(" "),t("h3",{attrs:{id:"案例2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例2"}},[e._v("#")]),e._v(" 案例2")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("单图标")]),e._v(" "),t("th",[e._v('![img](file:///C:/Users/smile/AppData/Local/Temp/msohtmlclip1/01/clip_image002.gif) CustomIcon--1664269521; ["",  "L0PNnAAAAAAAAAAAAAAAAA=="]')])])]),e._v(" "),t("tbody",[t("tr",[t("td"),e._v(" "),t("td")])])]),e._v(" "),t("p",[e._v("Alpine操作系统是一个面向安全的轻型 Linux发行版")]),e._v(" "),t("p",[t("strong",[e._v("Alpine Linux 是一款独立的、非商业的通用 Linux 发行版，专为追求安全性、简单性和资源效率的用户而设计。 可能很多人没听说过这个 Linux 发行版本，但是经常用 Docker 的朋友可能都用过，因为他小，简单，安全而著称，所以作为基础镜像是非常好的一个选择，可谓是麻雀虽小但五脏俱全，镜像非常小巧，不到 6M的大小，所以特别适合容器打包。")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker run -it --name alpine1 alpine /bin/sh\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("再开一个共用第一个网段")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker run -it --network container:alpine1 --name alpine2 alpine /bin/sh\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("运行结果，验证共用搭桥")])]),e._v(" "),t("p",[t("strong",[e._v("alpine1：")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/ # ip addr\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n30: eth0@if31: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue state UP \n    link/ether 02:42:ac:11:00:08 brd ff:ff:ff:ff:ff:ff\n    inet 172.17.0.8/16 brd 172.17.255.255 scope global eth0\n       valid_lft forever preferred_lft forever\n/ # \n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("p",[t("strong",[e._v("alpine2：")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/ # ip addr \n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n30: eth0@if31: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue state UP \n    link/ether 02:42:ac:11:00:08 brd ff:ff:ff:ff:ff:ff\n    inet 172.17.0.8/16 brd 172.17.255.255 scope global eth0\n       valid_lft forever preferred_lft forever\n/ # \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("p",[t("strong",[e._v("可以看出，两个容器网络公用的")])]),e._v(" "),t("p",[t("strong",[e._v("停掉一个alpine1，alpine2网络会怎么样")])]),e._v(" "),t("blockquote",[t("p",[e._v("eth0@if16: 消失了。。。。。。关闭alpine1，再看看alpine2")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("root@ubuntu:/text# docker exec -it alpine2 /bin/sh\n/ # ip addr\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n/ # \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[t("strong",[e._v("没有了")])])])}),[],!1,null,null,null);s.default=a.exports}}]);