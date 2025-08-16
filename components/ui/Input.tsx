import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, isValid }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-6">
      <label className={block text-lg font-semibold text-orange-600 ${isFocused || value ? 'mb-2' : 'mb-4'} transition-all}>
        {label}
      </label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={w-full p-3 border-2 rounded-lg transition duration-300 ease-in-out ${
          isValid ? 'border-orange-600' : 'border-gray-300'
        } focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
      />
      {!isValid && <p className="mt-2 text-red-500 text-sm">Please enter a valid {label.toLowerCase()}.</p>}
    </div>
  );
};

export default Input;