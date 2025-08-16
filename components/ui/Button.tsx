import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-orange-500 text-white hover:bg-orange-600',
  secondary: 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white',
};

const buttonSizes = {
  small: 'py-2 px-4 text-sm',
  medium: 'py-3 px-6 text-base',
  large: 'py-4 px-8 text-lg',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium', onClick, children }) => {
  return (
    <motion.div
      className={`rounded-lg transition-all duration-300 ease-in-out ${buttonVariants[variant]`} ${buttonSizes[size]}}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={children.toString()}
    >
      {children}
    </motion.button>
  );
};

export default Button;