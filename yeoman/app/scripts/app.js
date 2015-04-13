'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
var yeomanApp = 
angular
  .module('yeomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activetab: ''
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        activetab: 'about'
      })
      .when('/C1', {
        templateUrl: 'views/C1.html',
        controller: 'C1Ctrl',
        activetab: 'C1'
      })
      .otherwise({
        redirectTo: '/',
        activetab: ''
      });
  });

yeomanApp.controller('menuController', function($scope, $route) {
  $scope.menus = [
    {name:"Home", url:""},
    {name:"C1", url:"C1"},
    {name:"about", url:"about"},
    {name:"Contact", url:""}
  ];
  $scope.$route = $route;
});
