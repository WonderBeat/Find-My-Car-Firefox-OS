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

angular.module('findMyCarApp').controller('LocateCarCtrl', ['$scope', 'localStorageService', 'geolocation', 'locateCarConfig', function ($scope, storage, geolocation, cfg) {
	$scope.carPosition = storage.get('car-position');
	$scope.showInfo = false;
	$scope.targetAccuracy = cfg.accuracyLimit;

	var saveLocation = function(pos) {
		storage.set('car-position', { latitude: pos.coords.latitude, longitude: pos.coords.longitude });
	};

	var isSuitableAccuracy = function(pos) { return pos.coords.accuracy < cfg.accuracyLimit; };

	var updateCarPosition = function(pos) {
		if(!isSuitableAccuracy(pos)) { return; }
		saveLocation(pos);
		$scope.$apply(function() {
			$scope.positionUpdated = true;
		});
	};

	var updateCurrentAccuracy = function(pos) {
		$scope.$apply(function() {
			$scope.accuracy = pos.coords.accuracy;
		});
	};
	
	$scope.$on('$destroy', function() {
		geolocation.removeListener(updateCarPosition);
		geolocation.removeListener(updateCurrentAccuracy);
	});

	geolocation.watch(updateCarPosition);
	geolocation.watch(updateCurrentAccuracy);

}]);
