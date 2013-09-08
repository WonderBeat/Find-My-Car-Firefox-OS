'use strict';

angular.module('findMyCarApp').controller('LocateCarCtrl', ['$scope', 'localStorageService', 'geolocation', 'locateCarConfig', function ($scope, storage, geolocation, cfg) {
	$scope.carPosition = storage.get('car-position');

	var saveLocation = function(pos) {
		storage.set('car-position', { latitude: pos.coords.latitude, longitude: pos.coords.longitude });
	};

	var isSuitableAccuracy = function(pos) { return pos.accuracy < cfg.accuracyLimit; };

	var updateCarPosition = function(pos) {
		if(!isSuitableAccuracy(pos)) { return; }
		saveLocation(pos);
		$scope.positionUpdated = true;
	};

	geolocation.watch(updateCarPosition);


}]);
