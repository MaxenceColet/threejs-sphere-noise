varying vec2 vUv;
uniform vec3 color;
uniform float time;
varying float noise;


void main () {
    
    if (!gl_FrontFacing){
        gl_FragColor = vec4(vec3(0.5, 0.7 ,0.9), noise);
    }
    if (gl_FrontFacing){ 
        gl_FragColor = vec4(0.6, 0.8 ,1.0, noise); 
    }
}