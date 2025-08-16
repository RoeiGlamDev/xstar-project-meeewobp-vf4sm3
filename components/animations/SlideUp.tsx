import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 min-h-screen p-10">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold">Welcome to Luxury LRP Cosmetics</h1>
        <p className="text-lg mt-4">Elevate Your Beauty Experience</p>
      </header>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <SlideUp>
          <div className="bg-orange-500 rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-semibold">Our Premium Products</h2>
            <p className="mt-2">
              Discover our exquisite range of luxury cosmetics, meticulously crafted for the discerning individual who values quality and elegance.
            </p>
          </div>
        </SlideUp>
        <SlideUp delay={0.2}>
          <div className="bg-orange-500 rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
            <p className="mt-2">
              At Luxury LRP Cosmetics, we believe in providing products that not only enhance beauty but also promote confidence and sophistication.
            </p>
          </div>
        </SlideUp>
      </section>

      <footer className="mt-10 text-center">
        <p className="text-lg">Follow us on our journey to redefine luxury in cosmetics.</p>
        <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded transition-transform transform hover:scale-105">
          Shop Now
        </button>
      </footer>
    </div>
  );
};

export default LuxuryLRPCosmetics;