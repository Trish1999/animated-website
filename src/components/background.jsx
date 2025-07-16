import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeParticleBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0006);

    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 70;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const particleCount = 10000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * 1000 - 500;
      positions[i * 3 + 1] = Math.random() * 100 - 50;
      positions[i * 3 + 2] = Math.random() * 100 - 50;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xcccccc,
      size: 0.5,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const animate = () => {
      points.rotation.y += 0.0005;
      points.rotation.z += 0.0005;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  return () => {
    if (containerRef.current && renderer.domElement) {
      containerRef.current.removeChild(renderer.domElement);
    }
  };
}, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{ width: '100%', height: '100%', overflow: 'hidden' }}
    />
  );
}
