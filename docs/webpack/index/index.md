---
title: Webpack从原理到实战
author: lvzl
---

## Webpack介绍

### 官方定义

> 一个现代的JavaScript应用程序的静态模块打包器。

### 怎么理解打包动作？

> 假如一个项目有 a.js  b.js c.js ...(实际项目肯定很多)

> 如果让各个js保持分离状态，要考虑的问题点有：

- 各个js 之间的依赖关系

- 每个资源分开请求加载，增加了性能开销

> 出于种种原因，我们希望将多个JS文件揉合成一个，只加载一次，也不用考虑依赖关系。

> 接着打包这个动作登场

> 为什么要打包？

- 逻辑多

- 文件多

- 项目复杂度增加了

eg：

- 原生JS没有类型校验的能力 于是有了 TypeScript

- css 不够好用 有了 sass, less

> Webpack 不止打包，还有翻译能力（loader）， 也可进行一些骚操作（plugin）,loader 和 plugin 都是可插拔的，webpack没有规定你必须用什么，或者不能用什么。

> webpack 不仅强大 而且灵活

 ## Webpack的原理与背景

> Webpack产生的背景就是因为，随着前端项目的复杂度不断提高，文件数目，文件复杂度提高，传统的方式容易带来很多问题，比如命名冲突，各个模块之间的依赖关系需要人工去处理，以及后续代码的可维护性，代码耦合度等等一系列问题。

### 模块化优点

作用域封装

重用性

解除模块之间耦合， 提高系统的可维护性

### 模块化发展

详情见链接：

[JavaScript早期实现模块化]([JavaScript早期实现模块化 - lvzl - 博客园 (cnblogs.com)](https://www.cnblogs.com/lvzl/p/14780565.html))

[AMD模块化]([JavaScript AMD模块化规范 - lvzl - 博客园 (cnblogs.com)](https://www.cnblogs.com/lvzl/p/14144285.html))

[CMD模块化]([JavaScript CMD规范 - lvzl - 博客园 (cnblogs.com)](https://www.cnblogs.com/lvzl/p/14147940.html))

[ES6模块化]([JS模块化 - lvzl - 博客园 (cnblogs.com)](https://www.cnblogs.com/lvzl/p/14782995.html))

### 打包工具

gulp

GRUNT

webpack

> 区别：前两者定位都是实现一个自动化构建工具，帮助程序员完成那些需要重复的操作。而webpack则是专注于打包。

### 打包机制

#### 输出文件结构

```js
(function(module) {
    // 记录已经安装过的模块，防止二次加载，浪费时间
    var installedModules = {};
    // 加载模块的核心方法
    function __webpack_require__(moduleId){
        // SOME CODE
    }
    // 。。。
    return __webpack_require__(0); // 入口文件
})([ /* 依赖模块的集合 */])
```

#### 核心方法

```js
function __webpack_require__(moduleId) {
    // check if module is in cache
    if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
    }
    // create a new module (and put into cache)
    var module = installedModules[moduleId] = {
        i: moduleId,
        l: false,
        exports: {}
    };
    // exe the module func
    modules[moduleId].call{
        module.exports,
            module,
            module.exports,
            __webpack_require__
    };
    // flag the module as loaded
    module.l = true;
    // return the exxports of the module
    return module.exports;
}
```

#### 打包过程简述

- 从入口文件开始，分析整个应用的依赖树

- 将每个依赖模块包装起来，放到一个数组中等待调用

- 实现模块加载的方法，并把它放到模块执行的环境中，确保模块间可以互相调用

- 把执行入口文件的逻辑放在一个函数表达式中，并立即执行这个函数

## Webpack实战

### npm & 包管理器

#### 包管理器

> 指可以便捷的让开发者获取、分发代码的工具，比如Vue，React就是在包管理器中管理的。

#### npm

> npm init 初始化一个项目            npm init -y 所有选项都是y

package.json

```json
{
  "name": "webpack-demo", // 包名称
  "version": "1.0.0", //版本号
  "description": "",
  "main": "index.js", // 包执行的入口文件
  "dependencies": {
    "loadsh": "0.0.4",
    "webpack": "^4.44.1",
    "webpack-cli": "^3.3.12"
  },
  "devDependencies": {},
  "scripts": { // 自定义脚本
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```



#### npm '仓库' & '依赖'

仓库就是npm包的站点

```js
// 设置仓库为淘宝镜像地址
npm config set registry https://registry.npm.taobao.org

// --save 会将安装包信息添加到package.json中的dependencies中，npm5之后默认会添加，之前的版本需要 --save参数才会
npm install loadsh --save 

// --save-dev 简写 -D 会将安装包信息添加到package.json中的devDependencies中 开发环境的依赖
npm install loadsh --save-dev

// 安装dependencies & devDependencies中的依赖信息
npm install 

// 只安装dependencies中的依赖信息
npm install --only=prod 

// 只安装devDependencies中的依赖信息
npm install --only=dev 

// 当我们把自己的npm包发布出去以后，别人通过npm install 安装时，只会安装dependencies中的依赖
// dependencies: 与功能相关的依赖 
// devDependencies: 开发时需要的一些辅助工具，比如eslint
// 删除模块
npm uninstall modulename  
// 清除缓存
npm cache clean --force 
```

#### npm '语义化版本'

> ^3.4.1  -----> 3.X.X

> ~3.4.1 ------> 3.4.X

> 3.4.1 ------> 3.4.1 特定版本

#### npm '自定义工程脚本'

> package.json 的 script

#### npm install的过程

- 寻找包版本信息文件package.json, 依照进行安装
- 查package.json中的依赖，并检查项目中其他的版本信息文件
- 如果发现了新包，就更新版本信息文件

### demo
#### 初始化react-dom

```js
mkdir react-demo
cd react-demo
// 使用npm初始化，生成package.json
npm init -y
// 安装webpack相关模块
npm install webpack@4.44.1 webpack-cli@3.3.12 webpack-dev-server
npm install react react-dom
// 安装处理JSX 和 ES6语法的模块
npm install @babel/core @babel/preset-env @babel/preset-react 
// 安装处理HTML文件的模块
npm install html-webpack-plugin
// 通过vscode 打开
code .

```
#### 工程目录

![image-20210523200009374](C:\Users\lvzl\AppData\Roaming\Typora\typora-user-images\image-20210523200009374.png)

#### package.json

```json
{
  "name": "react-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --open",
    "build": "webpack --mode production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@babel/core": "^7.14.3",
    "@babel/preset-env": "^7.14.2",
    "@babel/preset-react": "^7.13.13",
    "babel-loader": "^8.2.2",
    "happypack": "^5.0.1",
    "html-webpack-plugin": "^4.5.2",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "terser-webpack-plugin": "4.2.3",
    "webpack": "^4.44.1",
    "webpack-bundle-analyzer": "^4.4.2",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.2"
  }
}

```



#### 新建webpack.config.js

```js
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    resolve: { // import模块时，在此配置过的文件名后缀，可以不写
        extensions: ['.jsx', '.js', '.json', '.mjs', '.wasm']
    },
    entry: path.resolve(__dirname, 'src/entry.jsx'), // 入口文件
    module: { // loader
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env', {module: false})]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [ // plugin
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        hot: true
    }
}s
```

#### 新建app.jsx模块

```jsx
import React from 'react'
import ReactDom from 'react-dom'

const App = () => {
    return (
        <h1>React Test</h1>
    )
}
export default App
ReactDom.render(<App/>, document.getElementById('app'))
```



#### 新建入口文件entry.jsx

```jsx
import App from './app'
if (module.hot) {
    module.hot.accept(error => {
        if (error) {
            console.error('HMR出BUG了');  
        }
    })
}
```

#### 新建index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

#### 打包

```js
node_modules\.bin\webpack //此处使用的局部 webpack 若已全局安装，直接使用webpack即可
```

#### 启动预览

```js
node_modules\.bin\webpack-dev-server
node_modules\.bin\webpack-dev-server --open // 会直接在浏览器打开
```



## Webpack与前端性能

### 打包结果优化

> 打包结果的体积越小越好

借助一些插件完成打包结果的优化，比如去掉console，debugger，alert，以及一些无用代码。配置示例：

```js
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin') // 处理压缩代码的模块
// 打包结果分析器
const WebpackAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin 

// uglifyjs-webpack-plugin 对es5的代码 压缩效果较好，而TerserPlugin是uglifyjs-es的一个分支，对ES6压缩效果较好
module.exports = {
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                // 缓存，可以加快构建速度
                parallel: 4, // 多进程并发 加快构建
                terserOptions: {
                    compress: {
                        unused: true, // 没有用到的，剔除
                        drop_debugger: true, // debugger 剔除
                        drop_console: true, // console 剔除
                        dead_code: true // 无用代码 剔除
                    }
                }
            })
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.mjs', '.wasm']
    },
    entry: path.resolve(__dirname, 'src/entry.jsx'),
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env', {module: false})]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackAnalyzer()
    ],
    devServer: {
        hot: true
    }
}
```

> 借助webpack-bundle-analyzer plugin对打包后的模块大小进行分析，从而进一步考虑还需要优化的文件

![image-20210523211445575](C:\Users\lvzl\AppData\Roaming\Typora\typora-user-images\image-20210523211445575.png)

### 构建过程优化

- 首先我们先试着减少需要打包处理的文件，量少了，自然也就快了，比如解析不动的文件就不解析。jquery  echarts

> npParse: /node_modules\/(jquery\.js)/

> exclude > include test

- 但是当"量"已经没办法在减少了，那就只能想别的方法加快构建速度并发构建。借助HappyPack， thread-loader

> HappyPack

```js
const HappyPack = require('happypack')
// 根据CPU的数量创建线程池
const happyPackPool = HappyPack.ThreadPool({size: OscillatorNode.cpus().length})
modules.exports = {
     plugins: [
        new HappyPack({
            ids: 'jsx',
            threads: happyPackPool,
            loaders: ['bable-loader'] // 需要注意happypack支持的loader
        })
    ]   
}
```



> thread-loader

```js
module: {
        rules: [
            {
                test: '/\.js$/',
                include: path.resolve('src'),
                use: [
                    'thread-loader' // 放到其他loader之前
                ]
            }
        ]
}
```



- sourceMap 生成优化，这应该是个很耗时间的操作

- 找些本身就很快的loader替换普通的loader，比如fast-sass-loader

### tree-Shaking

> 树—摇晃

去除无用的代码（DCE）

一种DCE的实现

webpack 本身会分析ES6的module引入情况，去掉没有用到的，再借助terserPlugin进一步删除无用的模块。

## Webpack: 不止'pack'

前端蓬勃发展的产物

模块化打包方案

工程化方案
