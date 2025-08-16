import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface FloatingElementsProps {
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ className }) => {
  useEffect(() => {
    // Custom animations or effects can be added here
  }, []);

  return (
    <div className={`relative h-screen bg-white ${className`}}>
      <motion.div
        className="text-center text-4xl font-bold text-orange-500 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="text-center text-lg text-gray-700 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Experience the elegance of our premium cosmetics range.
      </motion.p>

      <Canvas className="absolute inset-0" camera={{ position: [0, 0, 5] }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh position={[-2, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </Canvas>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          className="bg-orange-500 text-white px-5 py-2 rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingElements;