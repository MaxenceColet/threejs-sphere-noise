import * as THREE from 'three';

export default class SmallSphere{
    constructor(scene){
        this.scene = scene;
        this.createMesh();
    }

    createMesh(){
        this.geometry = new THREE.IcosahedronGeometry(0.8,3);

        this.material = new THREE.MeshBasicMaterial({
            color: 0x000000
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.rotation.x = -Math.PI / 2;
        this.scene.add(this.mesh);
        this.startTime = Date.now();
    
    }
}