import React from 'react';
import { motion } from 'framer-motion';

interface StatsSectionProps {
  metrics: {
    title: string;
    value: number;
    description: string;
  }[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ metrics }) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">luxury LRP cosmetics</h2>
        <p className="text-lg text-gray-700 mb-12">Our achievements in the world of luxury cosmetics</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-3xl font-bold text-orange-600 mb-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="counter"
                >
                  {metric.value}
                </motion.span>
              </h3>
              <p className="text-lg text-gray-600">{metric.title}</p>
              <p className="text-sm text-gray-500 mt-2">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;