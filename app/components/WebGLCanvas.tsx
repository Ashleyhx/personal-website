"use client"; // Add this line to mark the component as a client component

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WebGLCanvas = () => {
    const canvasRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        console.log('useEffect called');

        if (!canvasRef.current) {
            console.log('canvasRef.current is null');
            return;
        }

        console.log('Setting up the scene');

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2a3b4c);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        if ("appendChild" in canvasRef.current) {
            canvasRef.current.appendChild(renderer.domElement);
        }

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            if (canvasRef.current) {
                if ("removeChild" in canvasRef.current) {
                    canvasRef.current.removeChild(renderer.domElement);
                }
            }
        };
    }, []);

    return <div ref={canvasRef} style={{ width: '100%', height: '100vh' }} />;
};

export default WebGLCanvas;




