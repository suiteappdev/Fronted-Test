'use strict';

/**
 * @ngdoc directive
 * @name marvelComicsWebappApp.directive:mheader
 * @description
 * # mheader
 */
angular.module('marvelComicsWebappApp')
  .directive('mheader', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the mheader directive');
      }
    };
  });
