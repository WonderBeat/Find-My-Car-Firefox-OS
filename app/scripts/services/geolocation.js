'use strict';

angular.module('findMyCarApp')
	.service('geolocation', [ 'GeolocationConfig', function Geolocation(cfg) {
		return {
			watch: function (success, error) {
				return navigator.geolocation.watchPosition(success, error, cfg);
			},
			getCurrent: function (success, error) {
				return navigator.geolocation.getCurrentPosition(success, error);
			}
		};
	}]);
