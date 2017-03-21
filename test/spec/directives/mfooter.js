'use strict';

describe('Directive: mfooter', function () {

  // load the directive's module
  beforeEach(module('marvelComicsWebappApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mfooter></mfooter>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mfooter directive');
  }));
});
