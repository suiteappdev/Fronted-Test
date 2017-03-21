'use strict';

describe('Service: comics', function () {

  // load the service's module
  beforeEach(module('marvelComicsWebappApp'));

  // instantiate service
  var comics;
  beforeEach(inject(function (_comics_) {
    comics = _comics_;
  }));

  it('should do something', function () {
    expect(!!comics).toBe(true);
  });

});
