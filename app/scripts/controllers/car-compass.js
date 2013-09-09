'use strict';

angular.module('findMyCarApp').controller('CarCompassCtrl', [ '$scope', 'geolocation', 'deviceOrientation', 'localStorageService', function ($scope, geolocation, deviceOrientation, storage) {

	$scope.northBasedDirection = 0;
	$scope.showInfo = false;

	var updateDirection = function (degree) {
		$scope.direction = {
			'transform': 'rotate(' + degree + 'deg)',
			'-ms-transform': 'rotate(' + degree + 'deg)',
			'-webkit-transform': 'rotate(' + degree + 'deg)'
		};
	};

	var updatePosition = function (position) {
		$scope.coords = position.coords;
		$scope.carPosition = storage.get('car-position');
		var destination = new OpenLayers.LonLat($scope.carPosition.longitude, $scope.carPosition.latitude);
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

	$scope.$on('$destroy', function() {
		deviceOrientation.removeListener(updatePositionDirection);
		geolocation.removeListener(updatePosition);
	});

	geolocation.watch(updatePosition);
	deviceOrientation.watch(updatePositionDirection);
}]);
