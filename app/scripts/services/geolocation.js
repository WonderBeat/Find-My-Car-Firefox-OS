'use strict';

angular.module('findMyCarApp')
  .service('Geolocation', function Geolocation() {

		var geo_options = {
			enableHighAccuracy: true,
			maximumAge        : 30000,
			timeout           : 27000
		};

		return {
			watch: function(success, error) { return navigator.geolocation.watchPosition(success, error, geo_options); }
		}
  });
