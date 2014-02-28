// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
	    'app/scripts/open-layers-init.js',
		  'app/bower_components/openlayers/lib/OpenLayers.js',
		  'app/bower_components/openlayers/lib/OpenLayers/BaseTypes/Class.js',
		  'app/bower_components/openlayers/lib/OpenLayers/Util.js',
		  'app/bower_components/openlayers/lib/OpenLayers/BaseTypes/LonLat.js',
		  'app/bower_components/openlayers/lib/OpenLayers/Spherical.js',


      'app/bower_components/angular/angular.js',
	    'app/bower_components/angular-route/angular-route.js',
	    'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
	    'app/bower_components/angular-local-storage/angular-local-storage.js',
	    'app/bower_components/underscore/underscore-min.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: ['app/scripts/parallax-init.js'],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
