<template>
    <div class="three-background"></div>
</template>

<script>
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

export default {
    name: "ThreeBackground",
    mounted() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            1000
        );
        const renderer = new THREE.WebGLRenderer({alpha: true});
        renderer.setSize(window.innerWidth, window.innerHeight);

        this.$el.appendChild(renderer.domElement);

        const loader = new GLTFLoader();
        loader.load('@/assets/testtower.gltf', function(gltf) {
            scene.add(gltf.scene);
        }, undefined, (error)=> {
            console.error("NOOOOOO", error);
        });
        camera.position.z = 5;

        window.addEventListener("resize", () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        const animate = function() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();
        
    }
};
</script>

<style>
.three-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}
</style>