(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{759:function(r,e,t){"use strict";t.r(e);var a=t(5),o=Object(a.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"docker平台架构图解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker平台架构图解"}},[r._v("#")]),r._v(" Docker平台架构图解")]),r._v(" "),t("h3",{attrs:{id:"整体说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整体说明"}},[r._v("#")]),r._v(" 整体说明")]),r._v(" "),t("p",[t("strong",[r._v("从其架构和运行流程来看，Docker 是一个 C/S 模式的架构，后端是一个松耦合架构，众多模块各司其职。")])]),r._v(" "),t("h3",{attrs:{id:"docker-运行的基本流程为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-运行的基本流程为"}},[r._v("#")]),r._v(" Docker 运行的基本流程为")]),r._v(" "),t("ol",[t("li",[t("p",[r._v("用户是使用 Docker Client 与 Docker Daemon 建立通信，并发送请求给后者。")])]),r._v(" "),t("li",[t("p",[r._v("Docker Daemon 作为 Docker 架构中的主体部分，首先提供 Docker Server 的功能使其可以接受 Docker Client 的请求。")])]),r._v(" "),t("li",[t("p",[r._v("Docker Engine 执行 Docker 内部的一系列工作，每一项工作都是以一个 Job 的形式的存在。")])]),r._v(" "),t("li",[t("p",[r._v("Job 的运行过程中，当需要容器镜像时，则从 Docker Registry 中下载镜像，并通过镜像管理驱动 Graph driver将下载镜像以Graph的形式存储。")])]),r._v(" "),t("li",[t("p",[r._v("当需要为 Docker 创建网络环境时，通过网络管理驱动 Network driver 创建并配置 Docker 容器网络环境。")])]),r._v(" "),t("li",[t("p",[r._v("当需要限制 Docker 容器运行资源或执行用户指令等操作时，则通过 Execdriver 来完成。")])]),r._v(" "),t("li",[t("p",[r._v("Libcontainer是一项独立的容器管理包，Network driver以及Exec driver都是通过Libcontainer来实现具体对容器进行的操作。")])])]),r._v(" "),t("h3",{attrs:{id:"整体架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整体架构"}},[r._v("#")]),r._v(" 整体架构")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2022/05/15/7bgROxQBVrj2Zic.png",alt:"image-20220515125409171"}})])])}),[],!1,null,null,null);e.default=o.exports}}]);