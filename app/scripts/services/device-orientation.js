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

angular.module('findMyCarApp')
	.service('deviceOrientation', [ 'DevOrientationConfig', function DeviceOrientation(cfg) {
		return {
			watch: function (callback) {
				window.addEventListener('deviceorientation', _.throttle(callback, cfg.throttleRate, {trailing: false}), true);
			},
			removeListener: function(listener) {
					window.removeEventListener('deviceorientation', listener);
			  }
		};
	}]);
