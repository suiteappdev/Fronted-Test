'use strict';

/**
 * @ngdoc directive
 * @name marvelComicsWebappApp.directive:mhero
 * @description
 * # mhero
 */
angular.module('marvelComicsWebappApp')
  .directive('mhero', function () {
  	function ctrl($scope, $rootScope, $location){
  		$scope.bridge = function(){
  			$rootScope.item = this.comic;
  			$scope.onAdd();
  		}

      $scope.detail = function(){
        $location.path("detail/" + this.heroe.id);
      }
  	}

    return {
      replace:true,
      templateUrl: 'views/system/mhero.html',
      restrict: 'EA',
      scope:{
      	heroe : '=',
      	onAdd :'&'

      },
      controller : ctrl,
      link: function postLink(scope, element, attrs) {
      }
    };
  });
