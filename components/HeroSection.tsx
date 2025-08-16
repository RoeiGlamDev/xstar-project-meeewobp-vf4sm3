import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-b from-white to-orange-200">
      <div className="text-center p-8">
        <motion.div 
          className="text-5xl md:text-7xl font-bold text-orange-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-orange-700">luxury LRP cosmetics</span>
        </motion.h1>
        <motion.div 
          className="mt-4 text-xl md:text-2xl text-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Indulge in our exclusive range of high-end cosmetics designed to elevate your beauty experience.
        </motion.p>
        
        <div className="mt-8">
          <motion.div 
            className="px-6 py-3 text-white bg-orange-600 hover:bg-orange-700 transition duration-300 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Shop Now
          </motion.button>
          <motion.div 
            className="ml-4 px-6 py-3 text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white transition duration-300 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            Discover Our Range
          </motion.button>
        </div>

        <div className="mt-12">
          <motion.div 
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Trusted by beauty enthusiasts and professionals alike. 
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;