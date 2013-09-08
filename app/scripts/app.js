'use strict';

angular.module('findMyCarApp', ['LocalStorageModule'])
	.constant('DevOrientationConfig', {
		throttleRate: 3000 //ms
	})
	.constant('GeolocationConfig', {
		enableHighAccuracy: false,
		maximumAge: 10000, // ms
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
			$compileProvider.urlSanitizationWhitelist(/^\s*(app|https?|ftp|mailto|chrome-extension):/);
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
