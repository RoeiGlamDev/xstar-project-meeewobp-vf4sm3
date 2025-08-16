import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white backdrop-filter backdrop-blur-lg border border-orange-500 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
    >
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-orange-500 text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;