'use strict';

describe('Directive: mhero', function () {

  // load the directive's module
  beforeEach(module('marvelComicsWebappApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mhero></mhero>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mhero directive');
  }));
});
