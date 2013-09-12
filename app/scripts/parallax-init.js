var scene = document.getElementById('scene');
var parallax = new Parallax(scene, {
	calibrateX: true,
	calibrateY: true,
	invertX: false,
	invertY: true,
	limitX: false,
	limitY: 10,
	scalarX: 2,
	scalarY: 0,
	frictionX: 0.2,
	frictionY: 0.8
});
