#AngularJs 学习笔记
## 一、ng的启动及执行过程: 

1. 浏览器加载静态HTML文件并解析为DOM；
2. 浏览器加载angular.js文件；
3. angular监听 DOMContentLoaded  事件，监听到时开始启动；
4. angular寻找ng-app指令，确定作用范围；
5. 找到app中定义的Module使用$injector服务进行依赖注入；
6. 根据$injector服务创建$compile服务用于编译；
7. $compile服务编译DOM中的指令、过滤器等；
8. 使用ng-init指令，将作用域中的变量进行替换；
9. 最后生成了我们在最终视图。