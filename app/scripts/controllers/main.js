'use strict';

angular.module('findMyCarApp').controller('MainCtrl', ['$scope', 'localStorageService', 'geolocation', function ($scope, storage, geolocation) {
	$scope.carPosition = storage.get('car-position');
	$scope.locationServicesAvailable = 'geolocation' in navigator;

	var setLocationReceived = function (enabled) {
		$scope.locationRecieved = enabled;
	};

	geolocation.getCurrent(_.partial(setLocationReceived, true), _.partial(setLocationReceived, false));


}]);
