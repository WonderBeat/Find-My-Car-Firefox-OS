'use strict';

angular.module('findMyCarApp')
  .controller('MainCtrl', ['$scope', 'localStorageService', function ($scope, storage) {
		$scope.carPosition = storage.get('car-position');
		$scope.locationServicesAvailable = "geolocation" in navigator;
  }]);
