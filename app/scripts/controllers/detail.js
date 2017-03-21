'use strict';

/**
 * @ngdoc function
 * @name marvelComicsWebappApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the marvelComicsWebappApp
 */
angular.module('marvelComicsWebappApp')
  .controller('DetailCtrl', function ($scope, comics, $routeParams, storage) {
  	$scope.awesomeThings = [1, 2, 3];
  	
  	$scope.load = function(){
  		comics.getById($routeParams.id).then(function(response){
  			$scope.hero = response.data.data.results[0]
  		}, function(){

  		})

  		if(storage.get('fauvorites')){
  			$scope.favourites = angular.fromJson(storage.get('fauvorites')) || [];
  		}else{
  			$scope.favourites = [];
  		}
  	}

  	$scope.addtoList = function(){
   		var _exist = false;
   		for (var i = 0; i < $scope.favourites.length; i++) {
   			if($scope.favourites[i].id ==	this.comic.id){
   				_exist = true;
   			}
   		};

   		if(!_exist){
       		$scope.favourites.push(this.comic);
       		storage.save('fauvorites', $scope.favourites);
       		window.toastr.success('Comic added!');
   		}
  	}

  	$scope.getData = function(){
  		var _self = this.comic;
		comics.getComic(this.comic).then(function(response){
			_self.data =  response.data.data.results;
			_self.image = _self.data[0].images[0].path + '.' + _self.data[0].images[0].extension;
			_self.id = _self.data[0].id;
		}, function(){

		});
  	}
  });
