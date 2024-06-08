"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WebGLCanvas = () => {
    const canvasRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x4A426D);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        if ("appendChild" in canvasRef.current) {
            canvasRef.current.appendChild(renderer.domElement);
        }

        const geometry = new THREE.BoxGeometry(3.5, 3.5, 3.5);
        const material = new THREE.MeshStandardMaterial(
            { color: 0xecafda, metalness: 0.8, roughness: 0.5, wireframe: true, wireframeLinewidth: 8});
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const octahedronGeometry = new THREE.OctahedronGeometry(2, 1);
        const octahedronMaterial = new THREE.MeshStandardMaterial(
            { color: 0xbdf6ff, metalness: 0.8, roughness: 0.5, wireframe: true, wireframeLinewidth: 4});
        const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial);
        // octahedron.position.set(0, 0, 5);
        scene.add(octahedron);

        // const geometry2 = new THREE.TorusGeometry(3, 0.4, 100, 16);
        // const material2 = new THREE.MeshStandardMaterial(
        //     { color: 0xffc0cb, metalness: 0.8, roughness: 0.5});
        // const torusKnot = new THREE.Mesh(geometry2, material2);
        // torusKnot.position.set(0, 0, -5);
        // scene.add(torusKnot);



        // Adjust light to come from the top left
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(-1, 1, 1);  // Top left position
        scene.add(light);

        // // Top right position light
        const light2 = new THREE.DirectionalLight(0xffffff, 1);
        light2.position.set(1, 1, 1);
        scene.add(light2);

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            octahedron.rotation.x -= 0.01;
            octahedron.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (canvasRef.current) {
                if ("removeChild" in canvasRef.current) {
                    canvasRef.current.removeChild(renderer.domElement);
                }
            }
        };
    }, []);

    return <div ref={canvasRef} className="webgl-canvas" />;
};

export default WebGLCanvas;






