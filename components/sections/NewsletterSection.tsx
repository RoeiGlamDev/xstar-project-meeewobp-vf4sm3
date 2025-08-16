import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title?: string;
  subtitle?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title = "Join the luxury LRP cosmetics Family",
  subtitle = "Subscribe to our newsletter for exclusive updates and offers",
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log(Email submitted: ${email});
    setEmail('');
  };

  return (
    <section className="bg-white py-10">
      <motion.div 
        className="container mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-orange-500 mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-6">{subtitle}</p>
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="border border-orange-500 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white rounded-r-lg py-2 px-6 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500">
          By subscribing, you agree to receive exclusive offers and updates from luxury LRP cosmetics.
        </p>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;