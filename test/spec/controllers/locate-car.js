'use strict';

describe('Controller: Locate-Car', function () {

	beforeEach(module('findMyCarApp'));

	var scope, controller;

	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		controller = $controller;
	}));

	var createControllerWith = function(geolocationPosition, storage, locateCongig) {
		var cfg = _.extend({}, {
			accuracyLimit: 20
		}, locateCongig);

		return controller('LocateCarCtrl', {
			$scope: scope,
			localStorageService: storage,
			geolocation: geolocationPosition,
			locateCarConfig: cfg
		});
	};

	it('Should save location if accuracy is lower than limit', inject(function ($controller) {
		var storage = jasmine.createSpyObj('storage', ['get', 'set']);
		var position = {
			watch: function(callback) {
				callback({
					accuracy: 10,
					coords: { longitude: 200, latitude: 100 }
				});
			}
		};

		createControllerWith(position, storage);

		expect(storage.set).toHaveBeenCalledWith('car-position', {
			latitude: 100,
			longitude: 200
		});
	}));

	it('Should NOT save location if current accuracy is greater than limit', inject(function ($controller) {
		var storage = jasmine.createSpyObj('storage', ['get', 'set']);
		var position = {
			watch: function(callback) {
				callback({
					accuracy: 10,
					coords: { longitude: 200, latitude: 100 }
				});
			}
		};

		createControllerWith(position, storage, {accuracyLimit: 5});

		expect(storage.set).not.toHaveBeenCalled();
	}));

});
