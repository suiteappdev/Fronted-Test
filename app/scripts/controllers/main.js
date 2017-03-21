'use strict';

/**
 * @ngdoc function
 * @name marvelComicsWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marvelComicsWebappApp
 */
angular.module('marvelComicsWebappApp')
  .controller('MainCtrl', function ($scope, $location) {
  	$scope.awesomeThings = [1, 2, 3];
  	$scope.load = function(){
  		 $location.path( "/dashboard" );
  	}
  });
