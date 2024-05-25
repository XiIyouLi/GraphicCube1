import * as THREE from 'three';

const geometry=new THREE.BoxGeometry(20,20,20);
const material=new THREE.MeshNormalMaterial({
 color:0xff00ff,
 opacity:0.5,
});
const mesh=new THREE.Mesh(geometry,material);
//mesh.receiveShadow=true;
export default mesh;