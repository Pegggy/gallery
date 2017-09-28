## react照片墙
[预览地址](https://pegggy.github.io/gallery/dist/index.html)

## 简介

- 点击不同图片时所有图片随机排布，点击位于中心的图片可以进行翻转
- 点击中心以外的图片该图片会置于中心
- 点击底部导航按钮会展示该按钮对应的图片，并将其置于中心
- 再次点击导航按钮将图片进行翻转

## 技术栈

- 使用`webpack`构建项目
- 使用热模块替换，实时显示效果
- 使用`less-loader`、`style-loader`、`url-loader`等工具自动编译 less文件、图片以及 iconfont 文件
- 使用 CSS3 动画属性`transform`、`transition`等属性完成动画效果
- 使用 React + ES6 完成页面搭建

## 安装

1. 将项目克隆到本地
```
git clone git@github.com:Pegggy/gallery.git
```
2. 安装依赖
```
npm install
```
3.启动项目
```
npm start
```
在浏览器窗口中打开 [http://localhost:8080](http://localhost:8080) 即可使用。

其他命令：
```
## 打开本地服务器
npm run server

## 编译文件到 dist 目录
npm run build
```
