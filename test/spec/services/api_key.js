'use strict';

describe('Service: APIKEY', function () {

  // load the service's module
  beforeEach(module('marvelComicsWebappApp'));

  // instantiate service
  var APIKEY;
  beforeEach(inject(function (_APIKEY_) {
    APIKEY = _APIKEY_;
  }));

  it('should do something', function () {
    expect(!!APIKEY).toBe(true);
  });

});
