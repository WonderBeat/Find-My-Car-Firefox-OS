/*
 * Copyright (c) 2013 Denis Golovachev
 *
 * This file is part of application, that is free software:
 * you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License.
 *
 * Application is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with application.  If not, see <http ://www.gnu.org/licenses/>.
 */

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
