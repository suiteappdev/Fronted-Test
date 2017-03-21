'use strict';

/**
 * @ngdoc function
 * @name marvelComicsWebappApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the marvelComicsWebappApp
 */
angular.module('marvelComicsWebappApp')
  .controller('DashboardCtrl', function ($scope, comics, modal, storage, $timeout, $rootScope) {
  	$scope.loadingChars = true;

  	$scope.load = function(){
  		if(storage.get('fauvorites')){
  			$scope.favourites = angular.fromJson(storage.get('fauvorites')) || [];
  		}else{
  			$scope.favourites = [];
  		}
  	}

  	$scope.onType = function (){
  		$scope.loadingChars = true;

  		if($scope.records){
  			$scope.records.length = 0;
  		}

  		$timeout(function(){
			comics.getHeroes($scope.form.data.criteria).then(function(response){
					$scope.records = response.data.data.results || [];
  					$scope.loadingChars = false;
			},  function(){
				if($scope.records.length > 0){
					$scope.records.length = 0;
				}

				$scope.loadingChars = true;
			})       			
  		}, 500)
  	}

  	$scope.getComicDetails = function(){
  		$scope.loading = true;
  		comics.getComic($rootScope.item).then(function(response){
  			$timeout(function(){
          console.log("comic", response)
  				$scope.comicDetail = response.data.data.results[0];
  				$scope.loading = false;
  			}, 1000);
  		}, function(){

  		});
  	}

  	$scope.removeComic = function(){
  		$scope.favourites.splice($scope.favourites.indexOf(this.comic), 1);
  		storage.save('fauvorites', $scope.favourites);
       	window.toastr.success('item deleted!')
  	}

  	$scope.addtoFavourite = function(comic){
  	   $scope.comic = this.record;

       window.modal = modal.show({templateUrl : 'views/modal/addFavourite.html', size :'md', scope: $scope, backdrop: 'static'}, function($scope){
       		var _exist = false;
       		for (var i = 0; i < $scope.favourites.length; i++) {
       			if($scope.favourites[i].id == $scope.comicDetail.id){
       				_exist = true;
       			}
       		};

       		if(!_exist){
	       		$scope.favourites.push($scope.comicDetail);
	       		storage.save('fauvorites', $scope.favourites);
	       		window.toastr.success('Comic added!');
	   			$scope.$close();       			
       		}else{
	   			$scope.$close(); 
       		}
       });
  	}
  });
