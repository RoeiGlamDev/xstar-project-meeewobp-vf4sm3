import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <div className="relative bg-white h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="text-6xl font-bold text-orange-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h1>
      <motion.div
        className="mt-4 text-xl text-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

const Features: React.FC = () => {
  const featuresList = [
    { title: 'Premium Quality', description: 'Our products are crafted with the finest ingredients, ensuring a luxurious experience.' },
    { title: 'Elegant Packaging', description: 'Each item is beautifully packaged, reflecting the luxury of our brand.' },
    { title: 'Exclusive Collections', description: 'Discover our limited-edition collections inspired by the latest trends in cosmetics.' },
  ];

  return (
    <div className="py-20 bg-orange-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500">Why Choose Luxury LRP Cosmetics?</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-orange-500">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero title="Welcome to Luxury LRP Cosmetics" subtitle="Experience the essence of elegance and beauty." />
      <Features />
    </div>
  );
};

export default HomePage;