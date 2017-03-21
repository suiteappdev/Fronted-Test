'use strict';

/**
 * @ngdoc directive
 * @name marvelComicsWebappApp.directive:mfooter
 * @description
 * # mfooter
 */
angular.module('marvelComicsWebappApp')
  .directive('mfooter', function () {
    return {
      templateUrl: 'views/system/footer.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      
      }
    };
  });
