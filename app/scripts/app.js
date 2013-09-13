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

angular.module('findMyCarApp', ['LocalStorageModule', 'ngRoute', 'ngAnimate'])
	.constant('DevOrientationConfig', {
		throttleRate: 3000 //ms
	})
	.constant('GeolocationConfig', {
		enableHighAccuracy: true,
		maximumAge: 0, // ms
		timeout: 7000
	})
	.constant('locateCarConfig', {
		accuracyLimit: 25 // meters
	})
	.config([
		'$compileProvider',
		function ($compileProvider) {
			/**
			 * An interesting thing about Firefox OS and Angular.
			 * ng-href produces canonical url: http:/yoursite.com/href
			 * In Firefox OS it looks like app://yourappId/href
			 * But Angular prfixes this URL with 'unsafe', because 'app' protocol is unknown.
			 */
			$compileProvider.aHrefSanitizationWhitelist(/^\s*(app|https?|ftp|mailto|chrome-extension):/);
		}
	])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/locate', {
				templateUrl: 'views/locate.html',
				controller: 'LocateCarCtrl'
			})
			.when('/compass', {
				templateUrl: 'views/compass.html',
				controller: 'CarCompassCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
