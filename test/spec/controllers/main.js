'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('findMyCarApp'));

  var MainCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
	    geolocation: {
		    getCurrent : function() {}
	    }
    });
  }));

  it('Should contains no car-position info by default', function () {
	  expect(scope.carPosition).toBeFalsy();
  });

	it('Geolocation should be available', function () {
		expect(scope.locationServicesAvailable).toBeTruthy();
	});
});
