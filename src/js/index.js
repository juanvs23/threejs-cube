import test from "./components/hola";
import * as THREE from "three";
import "../scss/index.scss";

let scene = new THREE.Scene(),
  camera = new THREE.PerspectiveCamera(
    75, //angulo
    window.innerWidth / window.innerHeight, //aspecto
    5, //cercania
    100 //lejos
  ),
  camera2 = new THREE.PerspectiveCamera(
    50, //angulo
    window.innerWidth / window.innerHeight, //aspecto
    5, //cercania
    10 //lejos
  ),
  geometry = new THREE.BoxGeometry(),
  material = new THREE.MeshBasicMaterial({ color: 0xff5733 }),
  loader = new THREE.TextureLoader(),
  renderer = new THREE.WebGL1Renderer(),
  cube = new THREE.Mesh(geometry, material),
  helper = new THREE.CameraHelper(camera2);

scene.add(helper);

scene.background = new THREE.Color(0x163959);
scene.fog = new THREE.Fog(0x163959, 0.1, 10);
cube.position.z = -6;
renderer.setSize(window.innerWidth, window.innerHeight);
loader.load("./assets/image/Fondo_1bloque-04.png", function (texture) {
  scene.background = texture;
});

scene.add(cube);
let i = 0;
let animate = () => {
  requestAnimationFrame(animate);
  camera.position.z;
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.02;
  renderer.render(scene, camera);
};

document.querySelector("#app-three").appendChild(renderer.domElement);

animate();

/** 
    

ThreeJs custom waves
Original script by ThreeJS : https://threejs.org/examples/canvas_particles_waves.html
Modified version for Cloudoru by Kevin Rajaram : http://kevinrajaram.com
Date: 08/14/2014




var SEPARATION = 60, AMOUNTX = 250, AMOUNTY = 200;

var container;
var camera, scene, renderer;
/*

if (window.WebGLRenderingContext){
	renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
	}
else {
	renderer = new THREE.CanvasRenderer();
	}


var particles, particle, count = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );
	if(container) {
    	container.className += container.className ? ' waves' : 'waves';
	}

	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 100, 1000 );
	camera.position.y =100; //changes how far back you can see i.e the particles towards horizon
	camera.position.z = 45 //This is how close or far the particles are seen
  camera.position.x = 100
	
	camera.rotation.x = -0.2;
  camera.rotation.y = -0.3;
	
	scene = new THREE.Scene();

	particles = new Array();

	var PI2 = Math.PI * 5;
	var material = new THREE.SpriteCanvasMaterial( {

		color: 0x939393, //changes color of particles
		program: function ( context ) {

			context.beginPath();
			context.arc( 0, 0, 0.1, 0, PI2, true );
			context.fill();

		}

	} );

	var i = 0;

	for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

		for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

			particle = particles[ i ++ ] = new THREE.Sprite( material );
			particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
			particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) - 5 );
			scene.add( particle );

		}

	}

	renderer = new THREE.CanvasRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor( 0x163959, 2);
	container.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

	requestAnimationFrame( animate );

	render();

}

function render() {

	var i = 0;

	for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

		for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

			particle = particles[ i++ ];
			particle.position.y = ( Math.sin( ( ix + count ) * 0.5 ) * 3 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
			particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 2 ) * 4 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;

		}

	}

	renderer.render( scene, camera );

	// This increases or decreases speed
	count += 0.1;

}

 


    
    */
