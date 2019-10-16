# vue-ssr-cli

#### 介绍
vue服务端渲染模板

#### 软件架构
express + vue + webpack 

####  搭建过程遇到的问题
```
1.node 中采用es6语法  --->  @babel/preset-env
2.vue  语法报错      --->   transform-vue-template
3.webpack 4.0配置项语法更新  
4.其他的参照文档就OK
```


#### 安装教程
```
1. git clone https://gitee.com/mynoe/vue-ssr-cli.git
2. cd vue-ssr-cli && npm install
3. npm dev
```

#### 项目发布
```
1.build是webpack干的事儿，只是把单文件组件编译成js或者json清单，SSR本质上和build没关系，SSR就是一个nodejs应用
2.部署的时候全部部署
3.编译后会有json, 生产环境renderer的这个json
4.p2m或者foreve来运行项目
```
#### 参与贡献
```
1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request
```

#### 码云
```
1. 
2. 
3. 
4. 
5. 
6. 
```