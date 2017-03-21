'use strict';

describe('Service: BASEAPI', function () {

  // load the service's module
  beforeEach(module('marvelComicsWebappApp'));

  // instantiate service
  var BASEAPI;
  beforeEach(inject(function (_BASEAPI_) {
    BASEAPI = _BASEAPI_;
  }));

  it('should do something', function () {
    expect(!!BASEAPI).toBe(true);
  });

});
