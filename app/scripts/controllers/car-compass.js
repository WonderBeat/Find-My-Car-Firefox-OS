'use strict';

angular.module('findMyCarApp').controller('CarCompassCtrl', [ '$scope', 'geolocation', function ($scope, geolocation) {
	var updatePosition = function(position) {
		$scope.position = {
			transform: "rotate(360deg)"
		};
	};

	geolocation.watch(updatePosition);
}]);
