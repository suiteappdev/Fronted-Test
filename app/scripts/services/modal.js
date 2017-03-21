'use strict';

/**
 * @ngdoc service
 * @name marvelComicsWebappApp.modal
 * @description
 * # modal
 * Service in the marvelComicsWebappApp.
 */
angular.module('marvelComicsWebappApp')
  .service('modal', function ($uibModal) {
             return {
        	showLoading : function(params, callback){
		        window.modal = $uibModal.open({
		            templateUrl: 'views/modal/loader.html',
		            size: 'sm'
		        });
        	},
        	show : function(params, onAccept, onCancel){

		        window.modal = $uibModal.open({
		            templateUrl: params.templateUrl,
		            backdrop : params.backdrop,
		            size: params.size || 'md',
		            windowClass : params.windowClass,
		            animation: false,
		            scope : params.scope,
		            controller :["$scope", function($scope){
		                $scope.ok = function(){
		                	onAccept($scope);
		                }
		                
		                $scope.cancel = function(){
		                	if(onCancel){
		                    	onCancel($scope);
		                		return;
		                	}
		                	
		                    $scope.$close();
		                }
		            } ] 
		        });

				window.modal.result.then(function(){
			          console.log("Modal Closed!!!");
		      	}, function(){

		     	 });

        	}
        }
  });
