import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Martinez',
    review: 'Using luxury LRP cosmetics has transformed my skincare routine. The quality is unmatched, and my skin has never looked better!',
    rating: 5,
    photo: '/images/testimonials/sophia.jpg',
  },
  {
    name: 'Isabella Thompson',
    review: 'I absolutely love the luxurious feel of the products. They glide on effortlessly and leave my skin feeling radiant.',
    rating: 5,
    photo: '/images/testimonials/isabella.jpg',
  },
  {
    name: 'Olivia Johnson',
    review: 'The packaging alone makes me feel like I am indulging in a luxury experience every time I use luxury LRP cosmetics.',
    rating: 5,
    photo: '/images/testimonials/olivia.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <motion.div
          className="text-4xl font-bold text-center text-orange-600 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={testimonial.photo}
                alt={${testimonial.name}'s testimonial}
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600">{testimonial.name}</h3>
              <p className="text-gray-700 mt-2 mb-4">{testimonial.review}</p>
              <div className="flex justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.092 1.122-6.56L0 6.51l6.536-.95L10 0l2.464 5.56L20 6.51l-5.244 4.022 1.122 6.56z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;