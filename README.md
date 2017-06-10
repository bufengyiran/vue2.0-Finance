# 金融类spa应用<br><br>
技术栈：vue2.0 + vue-router + vuex + axios + express(node.js) + mongoose(mongodb)<br><br>
使用vue-cli官方脚手架<br><br>



## 安装使用

```
npm install------安装依赖

npm run dev 以及 node app.js------启动前端和后端服务器
```

## 项目模拟账号及密码(区分大小写)
* name: Daniel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password: mon56asset
* name: Mary&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password: ticker123
* name: Alex&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password: robot


## vue组件结构图
![](https://github.com/bufengyiran/vue2.0-Finance/raw/master/static/vue组件结构图.jpg)

## 项目部分效果图

![](https://github.com/bufengyiran/vue2.0-Finance/raw/master/static/dashboard.gif)

## 说明
* 由于没有服务器和空间，数据库是托管到[mlab.com](https://mlab.com/)的海外站点上，所以可能会出现访问迟缓的现象。
* 关于LongPositions和ShortsPositions中的数据，是我申请IB盈透证券的一个模拟账户，进行模拟交易后导出的数据，模拟账户的金额有限制，
  所以只能匹配Alex账户数据，Daniel和Mary账户中的LongPositions和ShortsPositions数据使用的是和Alex一样的。
