import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Johnson',
    role: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'James Smith',
    role: 'Head of Product Development',
    image: '/images/james.jpg',
  },
  {
    name: 'Olivia Brown',
    role: 'Marketing Director',
    image: '/images/olivia.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 px-5 py-10">
      <motion.header
        className="text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">About luxury LRP cosmetics</h1>
      </motion.header>
      
      <motion.section
        className="mb-10"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold">Our History</h2>
        <p className="mt-4 text-lg">
          Founded in the heart of the beauty industry, luxury LRP cosmetics has been dedicated to
          creating high-end cosmetics that empower individuals to express their unique beauty since
          2010. With a commitment to quality, innovation, and sustainability, we pride ourselves on
          using only the finest ingredients to craft our luxurious products.
        </p>
      </motion.section>

      <motion.section
        className="mb-10"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold">Our Values</h2>
        <ul className="mt-4 list-disc list-inside text-lg">
          <li>Quality: We believe in delivering the highest quality products.</li>
          <li>Innovation: We constantly evolve to meet the needs of our customers.</li>
          <li>Sustainability: We are committed to eco-friendly practices in our production.</li>
          <li>Diversity: We celebrate the beauty of all individuals, embracing every skin type and tone.</li>
        </ul>
      </motion.section>

      <motion.section
        className="mb-10"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-orange-100 rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105">
              <motion.div
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 mx-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="text-xl font-semibold text-center mt-4">{member.name}</h3>
              <p className="text-center text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;