import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <motion.div 
        className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <button 
          className="absolute top-2 right-2 text-orange-500 hover:text-orange-700 focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-4">
          {title}
        </h2>
        <p className="text-gray-700 text-base mb-6">
          {content}
        </p>
        <button 
          className="w-full bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded focus:outline-none transition duration-300 ease-in-out"
          onClick={onClose}
        >
          Discover More at luxury LRP cosmetics
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;