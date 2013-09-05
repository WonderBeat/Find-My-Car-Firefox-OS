'use strict';

describe('Service: deviceOrientation', function () {

  // load the service's module
  beforeEach(module('findMyCarApp'));

  // instantiate service
  var deviceOrientation;
  beforeEach(inject(function (_deviceOrientation_) {
    deviceOrientation = _deviceOrientation_;
  }));

  it('should provide "watch" functionality', function () {
    expect(deviceOrientation.watch).toBeDefined();
  });

});
