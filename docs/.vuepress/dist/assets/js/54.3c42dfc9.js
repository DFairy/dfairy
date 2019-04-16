(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{444:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("参考代码:"),a("a",{attrs:{href:"https://juejin.im/post/5caa0c2d51882543fa41e478",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/5caa0c2d51882543fa41e478"),a("OutboundLink")],1),t._v("\n以下三种方案，方案一和方案二三结合使用更佳")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("MDN传送门："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/position",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/zh-CN/docs/Web/CSS/position"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("效果："),a("a",{attrs:{href:"https://codepen.io/dfairy/pen/jRaeLo?&editable=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codepen.io/dfairy/pen/jRaeLo?&editable=true"),a("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("使用条件：")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("在需要滚动吸顶的元素加上以下样式便可以实现这个效果：")]),t._v(" "),t._m(4),t._m(5),t._v(" "),a("p",[t._v("传送门："),a("a",{attrs:{href:"https://www.caniuse.com/#search=sticky",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.caniuse.com/#search=sticky"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("从上可以看出，兼容性不太好，所以要配合以下几种方式一起使用")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("我们知道 offsetTop 是相对定位父级的偏移量，倘若需要滚动吸顶的元素出现定位父级元素，那么 offsetTop 获取的就不是元素距离页面顶部的距离。\n以下是对offset作出处理")]),t._v(" "),t._m(7),a("p",[t._v("使用")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("tab 吸顶可以使用 obj.getBoundingClientRect().top 代替 scrollTop - offsetTop,代码如下：")]),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"滚动吸顶"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#滚动吸顶","aria-hidden":"true"}},[this._v("#")]),this._v(" 滚动吸顶")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用position-sticky实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用position-sticky实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用"),s("code",[this._v("position:sticky")]),this._v("实现")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"如何使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何使用")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[t._v("父元素不能 "),a("code",[t._v("overflow:hidden")]),t._v(" 或者 "),a("code",[t._v("overflow:auto")]),t._v(" 属性")])]),t._v(" "),a("li",[a("p",[t._v("必须指定 "),a("code",[t._v("top")]),t._v("、"),a("code",[t._v("bottom")]),t._v("、"),a("code",[t._v("left")]),t._v("、"),a("code",[t._v("right")]),t._v(" 4 个值之一，否则只会处于相对定位")])]),t._v(" "),a("li",[a("p",[t._v("父元素的高度不能低于 "),a("code",[t._v("sticky")]),t._v(" 元素的高度")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("sticky")]),t._v(" 元素仅在其父元素内生效")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v(".sticky")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("position")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -webkit-sticky"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("position")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sticky"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("top")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兼容性","aria-hidden":"true"}},[this._v("#")]),this._v(" 兼容性")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用原生的-offsettop-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用原生的-offsettop-实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用原生的 offsetTop 实现")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("getOffset"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("direction"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" offsetL "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" offsetT "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" obj"),a("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" obj "),a("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        offsetL "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" obj"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        offsetT "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" obj"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        obj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetParent"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("direction "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'left'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" offsetL"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" offsetT"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'scroll'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleScrollTwo"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nhandleScrollTwo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" self "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" scrollTop "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageYOffset "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" offsetTop "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getOffset")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pride_tab_fixed"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("titleFixed "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" scrollTop "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" offsetTop"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用-obj-getboundingclientrect-top-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-obj-getboundingclientrect-top-实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 "),s("code",[this._v("obj.getBoundingClientRect().top")]),this._v(" 实现")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("obj.getBoundingClientRect()")]),this._v("可以告诉你某个元素相对浏览器视窗上下左右的距离。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// html")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"pride_tab_fixed"')]),t._v(" ref"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"pride_tab_fixed"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"pride_tab"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("\"titleFixed == true ? 'isFixed' :''\"")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// some code")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// vue")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token function"}},[t._v("data")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                titleFixed"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("activated")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("titleFixed "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'scroll'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleScroll"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{attrs:{class:"token comment"}},[t._v("//滚动监听，头部固定")]),t._v("\n          handleScroll"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" offsetTop "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pride_tab_fixed"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("titleFixed "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" offsetTop "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// some code")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])])}],!1,null,null,null);e.options.__file="滚动吸顶.md";s.default=e.exports}}]);