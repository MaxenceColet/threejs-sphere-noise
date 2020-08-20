import * as THREE from 'three';
import oc from 'three-orbit-controls';
import Stats from 'stats.js';
import gsap from 'gsap';
import Sphere from './Sphere';
import SmallSphere from './SmallSphere';
const OrbitControls = oc(THREE);


export default class Scene{

    constructor(){
        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({
            // antialias: true,
            alpha: true
        });
        this.renderer.setClearColor(0x000000, 0);

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.initCamera();
        document.body.appendChild( this.renderer.domElement );

        this.bindEvents();
        
        //ADD Sphere
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
        window.addEventListener('mousemove', (e) => { this.mouseControl(e)});
    }
    mouseControl(e){
        gsap.to(this.sphere.light.position, {duration: 0.4,x : (e.clientX / window.innerWidth - 0.5) * 10, y : (-e.clientY / window.innerHeight + 0.5) * 10})
        // this.pied.mesh.rotation.y = -e.clientX / window.innerWidth + 0.5;
        // this.pied.mesh.rotation.x = Math.PI + e.clientY / window.innerHeight - 0.5;
    }

    initCamera(){
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        this.controls =  new OrbitControls(this.camera, this.renderer.domElement);
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


