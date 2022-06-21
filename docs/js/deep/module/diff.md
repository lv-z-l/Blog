---
title: 各种模块化方案的区别
author: lvzl
---
- commonJS: 主要用于node服务端的模块化，加载依赖模块时是“同步加载”，因此不适用于浏览器。
- AMD，CMD都是异步加载依赖模块。最明显的区别就是在模块定义时对依赖的处理不同
  - AMD推崇依赖前置，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。
  - CMD推崇就近依赖，只有在用到某个模块的时候再去require。
- ESModule编译时加载。