import * as THREE from './three.js-master/build/three.module.js';
import { GLTFLoader } from './three.js-master/examples/jsm/loaders/GLTFLoader.js';
import Stats from './three.js-master/examples/jsm/libs/stats.module.js';

let scene, camera, renderer, ambient, dLight, stats;

// Window resize manager

const onResize = () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth - 1, window.innerHeight - 1);
};

// init three.js

function init() {
	// scene
	scene = new THREE.Scene();

	// lights
	ambient = new THREE.AmbientLight(0xffffff, 0.5);
	scene.add(ambient);

	dLight = new THREE.DirectionalLight();
	dLight.position.set(-400, 1000, -1000);
	scene.add(dLight);

	// stats
	stats = new Stats();
	document.body.appendChild(stats.dom);

	// camera
	const aspect = window.innerWidth / window.innerHeight;
	camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 5000);
	camera.position.setZ(3);
	camera.position.setY(1);

	// renderer
	renderer = new THREE.WebGLRenderer({ antialias: true });

	document.body.appendChild(renderer.domElement);

	window.addEventListener('resize', onResize);

	onResize();
}

init();

// MY APP

import {OrbitControls} from './three.js-master/examples/jsm/controls/OrbitControls.js';

const controls = new OrbitControls( camera, renderer.domElement );
// gltf.js


const loader = new GLTFLoader();
loader.load('./src/alfa_romeo/scene.gltf',
( gltf )=> {
	scene.add( gltf.scene );
	},
	( xhr )=> {
	console.log( ( xhr.loaded / xhr.total * 100 ) + '%');
	},
	( error )=> {
	console.log( 'An error happened' );
});


// SOL
const planeGeometry = new THREE.PlaneBufferGeometry(1,30);
const material = new THREE.MeshBasicMaterial( { color: 0x919191 } );
const plane = new THREE.Mesh( planeGeometry, material );

plane.rotation.x = -Math.PI / 2;
scene.add(plane);






function render() {
	// rendu final
	renderer.render(scene, camera);

	stats.update();

	requestAnimationFrame(render);
}

requestAnimationFrame(render);
