'use strict';

/**
 * @ngdoc overview
 * @name marvelComicsWebappApp
 * @description
 * # marvelComicsWebappApp
 *
 * Main module of the application.
 */
angular
  .module('marvelComicsWebappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'selectize',
    'angular-preload-image',
    'ui.bootstrap',
    'angular-carousel'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/detail/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl',
        controllerAs: 'detail',
        params : {
          hero : null
        }
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  });
