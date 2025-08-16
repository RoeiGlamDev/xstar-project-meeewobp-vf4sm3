import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Premium Ingredients',
    description: 'Our products are formulated with the finest, responsibly sourced ingredients to ensure luxury and efficacy.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    title: 'Luxurious Packaging',
    description: 'Each item is elegantly packaged to reflect the high-end nature of luxury LRP cosmetics, ensuring a lavish unboxing experience.',
    icon: <i className="fas fa-gift text-orange-500"></i>,
  },
  {
    title: 'Exclusive Collections',
    description: 'Discover our limited-edition ranges that celebrate the essence of beauty and sophistication.',
    icon: <i className="fas fa-star text-orange-500"></i>,
  },
  {
    title: 'Personalized Service',
    description: 'Experience bespoke consultations and tailored recommendations from our beauty experts to find your perfect match.',
    icon: <i className="fas fa-user-circle text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-500 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover Our Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-500">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;