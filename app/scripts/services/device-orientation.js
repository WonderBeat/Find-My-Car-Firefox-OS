'use strict';

angular.module('findMyCarApp')
	.service('deviceOrientation', [ 'DevOrientationConfig', function DeviceOrientation(cfg) {
		return {
			watch: function (callback) {
				window.addEventListener('deviceorientation', _.throttle(callback, cfg.throttleRate, {trailing: false}), true);
			}
		};
	}]);
