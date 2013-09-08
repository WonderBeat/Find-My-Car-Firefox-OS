'use strict';

angular.module('findMyCarApp').controller('CarCompassCtrl', [ '$scope', 'geolocation', 'deviceOrientation', 'localStorageService', function ($scope, geolocation, deviceOrientation, storage) {

	$scope.northBasedDirection = 0;

	var updateDirection = function (degree) {
		$scope.direction = {
			'transform': 'rotate(' + degree + 'deg)',
			'-ms-transform': 'rotate(' + degree + 'deg)',
			'-webkit-transform': 'rotate(' + degree + 'deg)'
		};
	};

	var updatePosition = function (position) {
		var carPosition = storage.get('car-position');
		var destination = new OpenLayers.LonLat(carPosition.longitude, carPosition.latitude);
		var current = new OpenLayers.LonLat(position.coords.longitude, position.coords.latitude);
		$scope.northBasedDirection = OpenLayers.Spherical.computeHeading(current, destination);
	};

	var updatePositionDirection = function (orientation) {
		$scope.$apply(function () {
			$scope.orientation = orientation.alpha;
			$scope.angle = 360 - $scope.northBasedDirection -  orientation.alpha; // based on Firefox API implementation
			updateDirection($scope.angle);
		});
	};

	geolocation.watch(updatePosition);
	deviceOrientation.watch(updatePositionDirection);
}]);
