import * as THREE from 'three';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';

export default class Sphere{
    constructor(scene){
        this.scene = scene;
        this.createMesh();
    }

    createMesh(){
        this.geometry = new THREE.IcosahedronGeometry(2,7);

        this.initShader();      
        this.addLight();  

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.rotation.x = -Math.PI / 2;
        this.scene.add(this.mesh);
        this.startTime = Date.now();
    
    }

    addLight(){
        this.light = new THREE.PointLight( 0x777777, 1, 1000 );
        this.light.position.set(0,0,5);
        this.scene.add(this.light);
    }

    initShader(){
        this.uniforms = {
            color: {
                value: new THREE.Color('red')
            },
            time: { 
                type: "f",
                value: 1.0
            }
        }

        this.material = new THREE.ShaderMaterial({
            // wireframe: true,
            transparent: true,
            depthWrite: true,
            side : THREE.DoubleSide,
            vertexShader,
            fragmentShader,
            uniforms : this.uniforms
        });

        // this.material = new THREE.MeshPhysicalMaterial({
        //     roughness: 1,
        //     metalness: 0.5,
        //     reflectivity: 0.8,
        //     flatShading: true
        // });
    }
    
    update(){
        // this.mesh.rotation.z += 0.01;
        // this.mesh.rotation.x += 0.01;
        // this.mesh.rotation.y += 0.01;
        // this.mesh.rotation.x += 0.04;
        let elapsedMilliseconds = Date.now() - this.startTime;
        let elapsedSeconds = elapsedMilliseconds / 1000.;
        this.uniforms.time.value = 60. * elapsedSeconds;
    }
}