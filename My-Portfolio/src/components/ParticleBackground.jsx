import { useEffect, useRef } from "react";
import * as THREE from "three";

// This component draws the animated 3D particle network behind the hero text.
// useEffect runs once when the component first appears on screen ([] = run once).
export default function ParticleBackground() {
  const canvasRef = useRef(null); // points to the <canvas> element in the DOM

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. Set up the basic three.js building blocks: renderer, scene, camera
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.z = 34;

    function resize() {
      const parent = canvas.parentElement;
      renderer.setSize(parent.clientWidth, parent.clientHeight);
      camera.aspect = parent.clientWidth / parent.clientHeight;
      camera.updateProjectionMatrix();
    }

    // 2. Create random points scattered inside a sphere shape
    const POINT_COUNT = 200;
    const positions = new Float32Array(POINT_COUNT * 3); // x, y, z for each point
    for (let i = 0; i < POINT_COUNT; i++) {
      const radius = 20 * Math.random() + 8;
      const angle1 = Math.random() * Math.PI * 2;
      const angle2 = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = radius * Math.sin(angle2) * Math.cos(angle1);
      positions[i * 3 + 1] = radius * Math.sin(angle2) * Math.sin(angle1) * 0.6;
      positions[i * 3 + 2] = radius * Math.cos(angle2) * 0.5;
    }

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointsMaterial = new THREE.PointsMaterial({ color: 0x7c5cfc, size: 0.55 });
    const pointCloud = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(pointCloud);

    // 3. Draw thin lines between points that are close to each other
    const linePositions = [];
    for (let i = 0; i < POINT_COUNT; i++) {
      for (let j = i + 1; j < POINT_COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (distance < 7) {
          linePositions.push(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
          linePositions.push(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
        }
      }
    }
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x37e6c4, transparent: true, opacity: 0.15 });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    resize();
    window.addEventListener("resize", resize);

    // 4. Animation loop — this function calls itself every frame to rotate the shape
    let frameId;
    function animate() {
      frameId = requestAnimationFrame(animate);
      pointCloud.rotation.y += 0.0016;
      lines.rotation.y += 0.0016;
      renderer.render(scene, camera);
    }
    animate();

    // 5. Cleanup — runs when the component is removed, so we don't leak memory
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      pointsGeometry.dispose();
      lineGeometry.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}