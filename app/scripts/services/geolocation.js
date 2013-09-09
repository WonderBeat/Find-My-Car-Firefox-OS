'use strict';

angular.module('findMyCarApp')
	.service('geolocation', [ 'GeolocationConfig', function Geolocation(cfg) {
		var callbacks = [];
		var fireAllCallbacks = function(position) {
			for(var i=0; i<callbacks.length; ++i) {
				callbacks[i](position);
			}
		};
		navigator.geolocation.watchPosition(fireAllCallbacks, function() {}, cfg);
		return {
			watch: function (callback) { callbacks.push(callback); },
			getCurrent: function (success, error) {
				return navigator.geolocation.getCurrentPosition(success, error);
			},
			removeListener: function (listener) { callbacks = _.without(callbacks, listener); }
		};
	}]);
