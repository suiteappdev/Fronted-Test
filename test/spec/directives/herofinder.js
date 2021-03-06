'use strict';

describe('Directive: heroFinder', function () {

  // load the directive's module
  beforeEach(module('marvelComicsWebappApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hero-finder></hero-finder>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the heroFinder directive');
  }));
});
