const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );
camera.position.z = 5;
scene.add(camera);

let box = new THREE.BoxGeometry(1,1,1);
let material = new THREE.MeshBasicMaterial({ color: "red" });
let mesh = new THREE.Mesh (box, material);

// mesh.position.x = 1;
// mesh.position.y = 1;
// mesh.position.z = 1;

// mesh.rotation.x = 1;
// mesh.rotation.y = 1;
// mesh.rotation.z = 1;

// mesh.scale.x = 2;
// mesh.scale.y = 1;
// mesh.scale.z = 1;

mesh.rotation.y = Math.PI / 4
mesh.rotation.x = Math.PI / 4

scene.add(mesh);

const canvas = document.querySelector ('canvas');
let renderer = new THREE.WebGLRenderer({ canvas: canvas , antialias: true });
renderer.setSize(window. innerWidth, window. innerHeight);
renderer.render(scene, camera);

let clock = new THREE.Clock();
function animate(){
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh.rotation.y = clock.getElapsedTime()  ;
}
animate();