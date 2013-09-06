'use strict';

angular.module('findMyCarApp').controller('CarCompassCtrl', [ '$scope', 'geolocation', 'deviceOrientation', function ($scope, geolocation, deviceOrientation) {
	var updateDirection = function (degree) {
		$scope.direction = {
			'transform': 'rotate(' + degree + 'deg)',
			'-ms-transform': 'rotate(' + degree + 'deg)',
			'-webkit-transform': 'rotate(' + degree + 'deg)'
		};
	};

	$scope.northBasedDirection = 0;

	var updatePosition = function (position) {
		var epam = new OpenLayers.LonLat(59.913035, 30.348139);
		var current = new OpenLayers.LonLat(position.coords.longitude, position.coords.latitude);
		$scope.northBasedDirection = (360 + OpenLayers.Spherical.computeHeading(current, epam) - position.coords.heading) % 360;
	};

	var updatePositionDirection = function (orientation) {
		$scope.$apply(function () {
			$scope.orientation = orientation.alpha;
			$scope.degree = $scope.northBasedDirection - orientation.alpha;
			updateDirection($scope.degree);
		});
	};

	deviceOrientation.watch(updatePositionDirection);

	geolocation.watch(updatePosition);
}]);
