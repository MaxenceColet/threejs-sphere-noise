import * as THREE from 'three';
import Stats from 'stats.js';
import Sphere from './Sphere';
import SmallSphere from './SmallSphere';

export default class Scene{

    constructor(){
        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            sortObjects: false
        });
        this.renderer.setClearColor(0x000000, 0);

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.initCamera();
        document.body.appendChild( this.renderer.domElement );

        this.bindEvents();
        
        //ADD Spheres
        this.sphere = new Sphere(this.scene);
        this.smallSphere = new SmallSphere(this.scene);


        //SHOW STATS
        this.stats = new Stats();
        this.stats.showPanel(0);
        document.body.appendChild( this.stats.dom );

        this.update();

    }

    bindEvents(){
        window.addEventListener('resize', () => { this.onResize(); });
    }

    initCamera(){
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        this.camera.position.z = 5;
    }

    onResize(){
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
    }
    update() {
        if (this.renderer === undefined) return
        this.stats.begin();
        requestAnimationFrame(this.update.bind(this))
        this.sphere.update();
        
        this.renderer.render(this.scene, this.camera)
        this.stats.end();
    }
    
}


