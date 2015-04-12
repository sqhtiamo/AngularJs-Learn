#AngularJs 学习笔记
## 一、AngularJS简介

### 1.1 ng的启动及执行过程: 

1. 浏览器加载静态HTML文件并解析为DOM；
2. 浏览器加载angular.js文件；
3. angular监听 DOMContentLoaded  事件，监听到时开始启动；
4. angular寻找ng-app指令，确定作用范围；
5. 找到app中定义的Module使用$injector服务进行依赖注入；
6. 根据$injector服务创建$compile服务用于编译；
7. $compile服务编译DOM中的指令、过滤器等；
8. 使用ng-init指令，将作用域中的变量进行替换；
9. 最后生成了我们在最终视图。

## 二、AngularJS应用框架

+ ng-app 声明Angular的边界
+ ng-controlller <br>
	* controller的嵌套与$scope的继承
+ angular.module
+ ng-repeat: $index, $first, $middle, $last
+ ng-bind与{{}}
+ ng-model
+ ng-change 与 $watch()
+ ng-submit
+ ng-click, ng-db click ... 入侵式Javascript
+ ng-show, ng-hide
+ ng-class, ng-style
+ ng-src, ng-href
+ filter, currency, number, date, uppercase
	* appModule.filter('', function() {})
+ ng-disabled, $valid
	* required, type="number/email" (做了低版本浏览器兼容), ng-maxlength='3'
+ $route, $routeProvider
	* <b>用法：</b>

		appModule.config('', function($routeProvider) {
		$routeProvider.
			when('url', {controller: myController, templateUrl: '/path/to/url'})
			...
			otherwise
		})
		

