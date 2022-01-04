(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{575:function(e,r,v){"use strict";v.r(r);var _=v(12),t=Object(_.a)({},(function(){var e=this,r=e.$createElement,v=e._self._c||r;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"浏览器环境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器环境"}},[e._v("#")]),e._v(" "),v("strong",[e._v("浏览器环境")])]),e._v(" "),v("p",[e._v("有了服务器端模块以后，很自然地，大家就想要客户端模块。而且最好两者能够兼容，一个模块不用修改，在服务器和浏览器都可以运行。")]),e._v(" "),v("p",[e._v("但是，由于一个重大的局限，使得CommonJS规范不适用于浏览器环境。还是上一节的代码，如果在浏览器中运行，会有一个很大的问题，你能看出来吗？")]),e._v(" "),v("blockquote",[v("p",[e._v("var math = require('math');")]),e._v(" "),v("p",[e._v("math.add(2, 3);")])]),e._v(" "),v("p",[e._v("第二行math.add(2, 3)，在第一行require('math')之后运行，因此必须等math.js加载完成。也就是说，如果加载时间很长，整个应用就会停在那里等。")]),e._v(" "),v("p",[e._v('这对服务器端不是一个问题，因为所有的模块都存放在本地硬盘，可以同步加载完成，等待时间就是硬盘的读取时间。但是，对于浏览器，这却是一个大问题，因为模块都放在服务器端，等待时间取决于网速的快慢，可能要等很长时间，浏览器处于"假死"状态。')]),e._v(" "),v("p",[e._v('因此，浏览器端的模块，不能采用"同步加载"（synchronous），只能采用"异步加载"（asynchronous）。这就是AMD规范诞生的背景。')]),e._v(" "),v("h2",{attrs:{id:"amd"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#amd"}},[e._v("#")]),e._v(" "),v("strong",[e._v("AMD")])]),e._v(" "),v("p",[v("a",{attrs:{href:"https://github.com/amdjs/amdjs-api/wiki/AMD",target:"_blank",rel:"noopener noreferrer"}},[e._v("AMD"),v("OutboundLink")],1),e._v('是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。')]),e._v(" "),v("p",[e._v("AMD也采用require()语句加载模块，但是不同于CommonJS，它要求两个参数：")]),e._v(" "),v("blockquote",[v("p",[e._v("require([module], callback);")])]),e._v(" "),v("p",[e._v("第一个参数[module]，是一个数组，里面的成员就是要加载的模块；第二个参数callback，则是加载成功之后的回调函数。如果将前面的代码改写成AMD形式，就是下面这样：")]),e._v(" "),v("blockquote",[v("p",[e._v("require(['math'], function (math) {")]),e._v(" "),v("p",[e._v("math.add(2, 3);")]),e._v(" "),v("p",[e._v("});")])]),e._v(" "),v("p",[e._v("math.add()与math模块加载不是同步的，浏览器不会发生假死。所以很显然，AMD比较适合浏览器环境。")]),e._v(" "),v("p",[e._v("目前，主要有两个Javascript库实现了AMD规范："),v("a",{attrs:{href:"http://requirejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("require.js"),v("OutboundLink")],1),e._v("和"),v("a",{attrs:{href:"https://github.com/cujojs/curl",target:"_blank",rel:"noopener noreferrer"}},[e._v("curl.js"),v("OutboundLink")],1),e._v("。本系列的第三部分，将通过介绍require.js，进一步讲解AMD的用法，以及如何将模块化编程投入实战。")]),e._v(" "),v("h2",{attrs:{id:"为什么要用require-js"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用require-js"}},[e._v("#")]),e._v(" "),v("strong",[e._v("为什么要用require.js？")])]),e._v(" "),v("p",[e._v("最早的时候，所有Javascript代码都写在一个文件里面，只要加载这一个文件就够了。后来，代码越来越多，一个文件不够了，必须分成多个文件，依次加载。下面的网页代码，相信很多人都见过。")]),e._v(" "),v("blockquote",[v("p",[v("script",{attrs:{src:"1.js"}}),e._v(" "),v("script",{attrs:{src:"2.js"}}),e._v(" "),v("script",{attrs:{src:"3.js"}}),e._v(" "),v("script",{attrs:{src:"4.js"}}),e._v(" "),v("script",{attrs:{src:"5.js"}}),e._v(" "),v("script",{attrs:{src:"6.js"}})])]),e._v(" "),v("p",[e._v("这段代码依次加载多个js文件。")]),e._v(" "),v("p",[e._v("这样的写法有很大的缺点。首先，加载的时候，浏览器会停止网页渲染，加载文件越多，网页失去响应的时间就会越长；其次，由于js文件之间存在依赖关系，因此必须严格保证加载顺序（比如上例的1.js要在2.js的前面），依赖性最大的模块一定要放到最后加载，当依赖关系很复杂的时候，代码的编写和维护都会变得困难。")]),e._v(" "),v("p",[e._v("require.js的诞生，就是为了解决这两个问题：")]),e._v(" "),v("blockquote",[v("p",[v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/201211/bg2012110701.png",alt:"img"}})]),e._v(" "),v("p",[e._v("（1）实现js文件的异步加载，避免网页失去响应；")]),e._v(" "),v("p",[e._v("（2）管理模块之间的依赖性，便于代码的编写和维护。")])]),e._v(" "),v("h2",{attrs:{id:"require-js的加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#require-js的加载"}},[e._v("#")]),e._v(" "),v("strong",[e._v("require.js的加载")])]),e._v(" "),v("p",[e._v("使用require.js的第一步，是先去官方网站"),v("a",{attrs:{href:"http://requirejs.org/docs/download.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载"),v("OutboundLink")],1),e._v("最新版本。")]),e._v(" "),v("p",[e._v("下载后，假定把它放在js子目录下面，就可以加载了。")]),e._v(" "),v("blockquote",[v("p",[v("script",{attrs:{src:"js/require.js"}})])]),e._v(" "),v("p",[e._v("有人可能会想到，加载这个文件，也可能造成网页失去响应。解决办法有两个，一个是把它放在网页底部加载，另一个是写成下面这样：")]),e._v(" "),v("blockquote",[v("p",[v("script",{attrs:{src:"js/require.js",defer:"",async:"true"}})])]),e._v(" "),v("p",[e._v("async属性表明这个文件需要异步加载，避免网页失去响应。IE不支持这个属性，只支持defer，所以把defer也写上。")]),e._v(" "),v("p",[e._v("加载require.js以后，下一步就要加载我们自己的代码了。假定我们自己的代码文件是main.js，也放在js目录下面。那么，只需要写成下面这样就行了：")]),e._v(" "),v("blockquote",[v("p",[v("script",{attrs:{src:"js/require.js","data-main":"js/main"}})])]),e._v(" "),v("p",[e._v("data-main属性的作用是，指定网页程序的主模块。在上例中，就是js目录下面的main.js，这个文件会第一个被require.js加载。由于require.js默认的文件后缀名是js，所以可以把main.js简写成main。")]),e._v(" "),v("h2",{attrs:{id:"主模块的写法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主模块的写法"}},[e._v("#")]),e._v(" "),v("strong",[e._v("主模块的写法")])]),e._v(" "),v("p",[e._v('上一节的main.js，我把它称为"主模块"，意思是整个网页的入口代码。它有点像C语言的main()函数，所有代码都从这儿开始运行。')]),e._v(" "),v("p",[e._v("下面就来看，怎么写main.js。")]),e._v(" "),v("p",[e._v("如果我们的代码不依赖任何其他模块，那么可以直接写入javascript代码。")]),e._v(" "),v("blockquote",[v("p",[e._v("// main.js")]),e._v(" "),v("p",[e._v('alert("加载成功！");')])]),e._v(" "),v("p",[e._v("但这样的话，就没必要使用require.js了。真正常见的情况是，主模块依赖于其他模块，这时就要使用AMD规范定义的的require()函数。")]),e._v(" "),v("blockquote",[v("p",[e._v("// main.js")]),e._v(" "),v("p",[e._v("require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){")]),e._v(" "),v("p",[e._v("// some code here")]),e._v(" "),v("p",[e._v("});")])]),e._v(" "),v("p",[e._v("require()函数接受两个参数。第一个参数是一个数组，表示所依赖的模块，上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。")]),e._v(" "),v("p",[e._v("require()异步加载moduleA，moduleB和moduleC，浏览器不会失去响应；它指定的回调函数，只有前面的模块都加载成功后，才会运行，解决了依赖性的问题。")]),e._v(" "),v("p",[e._v("下面，我们看一个实际的例子。")]),e._v(" "),v("p",[e._v("假定主模块依赖jquery、underscore和backbone这三个模块，main.js就可以这样写：")]),e._v(" "),v("blockquote",[v("p",[e._v("require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone){")]),e._v(" "),v("p",[e._v("// some code here")]),e._v(" "),v("p",[e._v("});")])]),e._v(" "),v("p",[e._v("require.js会先加载jQuery、underscore和backbone，然后再运行回调函数。主模块的代码就写在回调函数中。")]),e._v(" "),v("h2",{attrs:{id:"模块的加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模块的加载"}},[e._v("#")]),e._v(" "),v("strong",[e._v("模块的加载")])]),e._v(" "),v("p",[e._v("上一节最后的示例中，主模块的依赖模块是['jquery', 'underscore', 'backbone']。默认情况下，require.js假定这三个模块与main.js在同一个目录，文件名分别为jquery.js，underscore.js和backbone.js，然后自动加载。")]),e._v(" "),v("p",[e._v("使用require.config()方法，我们可以对模块的加载行为进行自定义。require.config()就写在主模块（main.js）的头部。参数就是一个对象，这个对象的paths属性指定各个模块的加载路径。")]),e._v(" "),v("blockquote",[v("p",[e._v("require.config({")]),e._v(" "),v("p",[e._v("paths: {")]),e._v(" "),v("p",[e._v('"jquery": "jquery.min",\n　　　　　　"underscore": "underscore.min",\n　　　　　　"backbone": "backbone.min"')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("});")])]),e._v(" "),v("p",[e._v("上面的代码给出了三个模块的文件名，路径默认与main.js在同一个目录（js子目录）。如果这些模块在其他目录，比如js/lib目录，则有两种写法。一种是逐一指定路径。")]),e._v(" "),v("blockquote",[v("p",[e._v("require.config({")]),e._v(" "),v("p",[e._v("paths: {")]),e._v(" "),v("p",[e._v('"jquery": "**lib/**jquery.min",\n　　　　　　"underscore": "**lib/**underscore.min",\n　　　　　　"backbone": "**lib/**backbone.min"')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("});")])]),e._v(" "),v("p",[e._v("另一种则是直接改变基目录（baseUrl）。")]),e._v(" "),v("blockquote",[v("p",[e._v("require.config({")]),e._v(" "),v("p",[v("strong",[e._v('baseUrl: "js/lib",')])]),e._v(" "),v("p",[e._v("paths: {")]),e._v(" "),v("p",[e._v('"jquery": "jquery.min",\n　　　　　　"underscore": "underscore.min",\n　　　　　　"backbone": "backbone.min"')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("});")])]),e._v(" "),v("p",[e._v("如果某个模块在另一台主机上，也可以直接指定它的网址，比如：")]),e._v(" "),v("blockquote",[v("p",[e._v("require.config({")]),e._v(" "),v("p",[e._v("paths: {")]),e._v(" "),v("p",[e._v('"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min"')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("});")])]),e._v(" "),v("p",[e._v("require.js要求，每个模块是一个单独的js文件。这样的话，如果加载多个模块，就会发出多次HTTP请求，会影响网页的加载速度。因此，require.js提供了一个"),v("a",{attrs:{href:"http://requirejs.org/docs/optimization.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("优化工具"),v("OutboundLink")],1),e._v("，当模块部署完毕以后，可以用这个工具将多个模块合并在一个文件中，减少HTTP请求数。")]),e._v(" "),v("h2",{attrs:{id:"amd模块的写法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#amd模块的写法"}},[e._v("#")]),e._v(" "),v("strong",[e._v("AMD模块的写法")])]),e._v(" "),v("p",[e._v("require.js加载的模块，采用AMD规范。也就是说，模块必须按照AMD的规定来写。")]),e._v(" "),v("p",[e._v("具体来说，就是模块必须采用特定的define()函数来定义。如果一个模块不依赖其他模块，那么可以直接定义在define()函数之中。")]),e._v(" "),v("p",[e._v("假定现在有一个math.js文件，它定义了一个math模块。那么，math.js就要这样写：")]),e._v(" "),v("blockquote",[v("p",[e._v("// math.js")]),e._v(" "),v("p",[e._v("define(function (){")]),e._v(" "),v("p",[e._v("var add = function (x,y){")]),e._v(" "),v("p",[e._v("return x+y;")]),e._v(" "),v("p",[e._v("};")]),e._v(" "),v("p",[e._v("return {")]),e._v(" "),v("p",[e._v("add: add\n　　　　};")]),e._v(" "),v("p",[e._v("});")])]),e._v(" "),v("p",[e._v("加载方法如下：")]),e._v(" "),v("blockquote",[v("p",[e._v("// main.js")]),e._v(" "),v("p",[e._v("require(['math'], function (math){")]),e._v(" "),v("p",[e._v("alert(math.add(1,1));")]),e._v(" "),v("p",[e._v("});")])]),e._v(" "),v("p",[e._v("如果这个模块还依赖其他模块，那么define()函数的第一个参数，必须是一个数组，指明该模块的依赖性。")]),e._v(" "),v("blockquote",[v("p",[e._v("define(['myLib'], function(myLib){")]),e._v(" "),v("p",[e._v("function foo(){")]),e._v(" "),v("p",[e._v("myLib.doSomething();")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("return {")]),e._v(" "),v("p",[e._v("foo : foo")]),e._v(" "),v("p",[e._v("};")]),e._v(" "),v("p",[e._v("});")])]),e._v(" "),v("p",[e._v("当require()函数加载上面这个模块的时候，就会先加载myLib.js文件。")]),e._v(" "),v("h2",{attrs:{id:"加载非规范的模块"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#加载非规范的模块"}},[e._v("#")]),e._v(" "),v("strong",[e._v("加载非规范的模块")])]),e._v(" "),v("p",[e._v("理论上，require.js加载的模块，必须是按照AMD规范、用define()函数定义的模块。但是实际上，虽然已经有一部分流行的函数库（比如jQuery）符合AMD规范，更多的库并不符合。那么，require.js是否能够加载非规范的模块呢？")]),e._v(" "),v("p",[e._v("回答是可以的。")]),e._v(" "),v("p",[e._v("这样的模块在用require()加载之前，要先用require.config()方法，定义它们的一些特征。")]),e._v(" "),v("p",[e._v("举例来说，underscore和backbone这两个库，都没有采用AMD规范编写。如果要加载它们的话，必须先定义它们的特征。")]),e._v(" "),v("blockquote",[v("p",[e._v("require.config({")]),e._v(" "),v("p",[e._v("shim: {")]),e._v(" "),v("p",[e._v("'underscore':{\n　　　　　　　　exports: '_'\n　　　　　　},")]),e._v(" "),v("p",[e._v("'backbone': {\n　　　　　　　　deps: ['underscore', 'jquery'],\n　　　　　　　　exports: 'Backbone'\n　　　　　　}")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("});")])]),e._v(" "),v("p",[e._v("require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，还有一个shim属性，专门用来配置不兼容的模块。具体来说，每个模块要定义（1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。")]),e._v(" "),v("p",[e._v("比如，jQuery的插件可以这样定义：")]),e._v(" "),v("blockquote",[v("p",[e._v("shim: {")]),e._v(" "),v("p",[e._v("'jquery.scroll': {")]),e._v(" "),v("p",[e._v("deps: ['jquery'],")]),e._v(" "),v("p",[e._v("exports: 'jQuery.fn.scroll'")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")])]),e._v(" "),v("h2",{attrs:{id:"require-js插件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#require-js插件"}},[e._v("#")]),e._v(" "),v("strong",[e._v("require.js插件")])]),e._v(" "),v("p",[e._v("require.js还提供一系列"),v("a",{attrs:{href:"https://github.com/jrburke/requirejs/wiki/Plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("插件"),v("OutboundLink")],1),e._v("，实现一些特定的功能。")]),e._v(" "),v("p",[e._v("domready插件，可以让回调函数在页面DOM结构加载完成后再运行。")]),e._v(" "),v("blockquote",[v("p",[e._v("require(['domready!'], function (doc){")]),e._v(" "),v("p",[e._v("// called once the DOM is ready")]),e._v(" "),v("p",[e._v("});")])]),e._v(" "),v("p",[e._v("text和image插件，则是允许require.js加载文本和图片文件。")]),e._v(" "),v("blockquote",[v("p",[e._v("define([")]),e._v(" "),v("p",[e._v("'text!review.txt',")]),e._v(" "),v("p",[e._v("'image!cat.jpg'")]),e._v(" "),v("p",[e._v("],")]),e._v(" "),v("p",[e._v("function(review,cat){")]),e._v(" "),v("p",[e._v("console.log(review);")]),e._v(" "),v("p",[e._v("document.body.appendChild(cat);")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v(");")])]),e._v(" "),v("p",[e._v("类似的插件还有json和mdown，用于加载json文件和markdown文件。")])])}),[],!1,null,null,null);r.default=t.exports}}]);