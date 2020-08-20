import * as THREE from 'three';

export default class SmallSphere{
    constructor(scene){
        this.scene = scene;
        this.createMesh();
    }

    createMesh(){
        this.geometry = new THREE.IcosahedronGeometry(0.6,3);

        this.material = new THREE.MeshPhysicalMaterial({
            roughness: 1,
            metalness: 0.5,
            reflectivity: 0.8,
            flatShading: true,
            color: 0x000000
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.rotation.x = -Math.PI / 2;
        this.scene.add(this.mesh);
        this.startTime = Date.now();
    
    }

    
    update(){
        // this.mesh.rotation.z += 0.01;
        // this.mesh.rotation.x += 0.01;
        // this.mesh.rotation.y += 0.01;
        // this.mesh.rotation.x += 0.04;
    }
}