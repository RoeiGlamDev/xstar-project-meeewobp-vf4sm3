import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
}

const team: TeamMember[] = [
  {
    name: 'Sophia Turner',
    role: 'Founder & CEO',
    expertise: 'Expert in cosmetic formulation with over 15 years of experience in the luxury beauty industry.',
  },
  {
    name: 'Ethan Clark',
    role: 'Creative Director',
    expertise: 'Renowned makeup artist with a passion for high-end product design and aesthetic innovation.',
  },
  {
    name: 'Olivia Martinez',
    role: 'Marketing Specialist',
    expertise: 'Luxury brand strategist with a focus on elegance and exclusivity in cosmetics marketing.',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-orange-600">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-8">About luxury LRP cosmetics</h2>
        <p className="text-lg mb-4">
          At luxury LRP cosmetics, we believe that beauty is an experience that transcends the ordinary. 
          Founded with a passion for luxury and sophistication, our journey began with a vision to create 
          high-quality cosmetics that embody elegance and empowerment. 
        </p>
        <p className="text-lg mb-4">
          Our mission is to redefine luxury in the cosmetics industry by providing products that not only enhance 
          beauty but also nourish and care for the skin. We are committed to using the finest ingredients, 
          ensuring that every item is a testament to quality and luxury.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h3>
        <p className="text-lg mb-4">
          Our mission at luxury LRP cosmetics is to empower individuals through beauty, offering premium products 
          that inspire confidence and sophistication. We strive to innovate continuously and uphold the highest 
          standards of excellence in everything we create.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <motion.div
              key={member.name}
              className="p-6 border-2 border-orange-600 rounded-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold mb-2">{member.name}</h4>
              <h5 className="text-md text-orange-500 mb-1">{member.role}</h5>
              <p className="text-sm">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;