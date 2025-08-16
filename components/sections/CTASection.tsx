import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <section className="bg-white py-20 flex flex-col items-center justify-center">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-orange-600">{title}</h2>
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
      </motion.div>
      <motion.div
        className="bg-orange-600 text-white py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        onClick={onButtonClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.button>
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-500 text-sm">Experience the elegance of luxury LRP cosmetics</p>
      </motion.div>
    </section>
  );
};

export default CTASection;