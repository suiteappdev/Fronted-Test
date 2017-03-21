'use strict';

angular.module('marvelComicsWebappApp')
  .directive('heroFinder', function () {
  	function ctrl($scope, comics, $timeout){
  		$scope.myConfig = {
        loadingClass: 'selectizeLoading',
  		  valueField: $scope.key,
  		  labelField: $scope.label,
  		  placeholder: $scope.placeholder || 'Buscar Heroe',
        maxItems: 1,
        searchField : $scope.searchBy || 'name',
        maxOptions : 15,
        openOnFocus : false,
        setFocus : $scope.setFocus,
        persist: false,
        create: false,
        render: {
              option: function(item, escape) {
                    console.log(item);
                    var _thumbnail = item.thumbnail.path + "." + item.thumbnail.extension;

                    return '<div><img style="border:2px solid #efefef;width:50px;height:50px;margin-right:5px;" src="'+_thumbnail+'" />' +
                         '<span>'+escape(item.name)+'</span></div>'
            }
        },
        onItemAdd : function(value, $item){
          angular.forEach($scope.records, function(v, k){
            if(v[$scope.key] == value){
                $scope.setObject = $scope.records[k];
                return;
            }
          });

        },
        load: function(query, callback) {
            if (!query.length) return callback();

            comics.getHeroes(query).then(function(response){
                callback(response.data.data.results);
            }, function(){
              callback();
            })
        }
  		};

  	}

    return {
      template: '<selectize config="myConfig" options="records" ng-model="ngModel"></selectize>',
      restrict: 'EA',
      scope : {
      	ngModel : "=",
        setObject:"=",
        setFocus : "=",
        key : "@",
        label : "@",
        searchBy:"=",
        placeholder:"@"
      },
      controller :ctrl,
      link: function postLink(scope, element, attrs) {

      }
    };
  });