'use strict';

describe('Controller: Car-Compass', function () {

	beforeEach(module('findMyCarApp'));

	var CompassCtrl,
		scope;

	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		CompassCtrl = $controller('CarCompassCtrl', {
			$scope: scope,
			deviceOrientation: {
				watch: function(callback) { callback({alpha: 10}); }
			},
			geolocation: {
				watch: function(callback) { callback({
					coords: {longitude: 30.612803, latitude: 59.736637}
				}); }
			},
			localStorageService: {
				'get': function(key) {
					return {longitude: 30.612371945, latitude: 59.744432849}
				}
			}
		});
	}));

	it('Should calculate angle for destination', function () {
		expect(scope.angle).toBeCloseTo(348, 0);
	});
});
