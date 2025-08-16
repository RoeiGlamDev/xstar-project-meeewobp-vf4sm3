import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for creating 3D interactive elements for luxury LRP cosmetics.
 * This hook utilizes THREE.js to render high-end 3D graphics that align
 * with the luxury cosmetics brand aesthetic.
 *
 * @returns {THREE.Scene} The 3D scene for rendering.
 */
export const use3D = () => {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Initialize the scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Create the renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 1); // Set background to white
    document.body.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add a light source for luxury effects
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffa500, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Create a luxury cosmetics product model (placeholder geometry)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xffa500, metalness: 0.8, roughness: 0.1 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation loop
    const animate = () => {
      if (sceneRef.current && rendererRef.current) {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Clean up on component unmount
    return () => {
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return sceneRef.current;
};