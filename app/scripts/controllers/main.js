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

angular.module('findMyCarApp').controller('MainCtrl', ['$scope', 'localStorageService', 'geolocation', function ($scope, storage, geolocation) {
	$scope.carPosition = storage.get('car-position');
	$scope.locationServicesAvailable = 'geolocation' in navigator;
	$scope.deviceOrientationAvailable = 'DeviceOrientationEvent' in window;

	var setLocationReceived = function (enabled) {
		$scope.locationRecieved = enabled;
	};

	geolocation.getCurrent(_.partial(setLocationReceived, true), _.partial(setLocationReceived, false));


}]);
