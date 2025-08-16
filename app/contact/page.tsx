import React from 'react';
import { motion } from 'framer-motion';

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
            <motion.div 
                className="text-4xl font-bold text-orange-600 mb-6"
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
            >
                Contact luxury LRP cosmetics
            </motion.h1>
            <motion.div 
                className="text-lg text-gray-700 mb-8"
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                We would love to hear from you! Reach out to us for any inquiries regarding our luxury cosmetics.
            </motion.p>
            <form className="bg-orange-100 p-6 rounded-lg shadow-lg w-full max-w-lg">
                <motion.div 
                    htmlFor="name" 
                    className="block text-gray-700 font-semibold mb-2"
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Name
                </motion.label>
                <motion.div 
                    type="text" 
                    id="name" 
                    required 
                    className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    whileHover={{ scale: 1.02 }}
                />
                <motion.div 
                    htmlFor="email" 
                    className="block text-gray-700 font-semibold mb-2"
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Email
                </motion.label>
                <motion.div 
                    type="email" 
                    id="email" 
                    required 
                    className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    whileHover={{ scale: 1.02 }}
                />
                <motion.div 
                    htmlFor="message" 
                    className="block text-gray-700 font-semibold mb-2"
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    Message
                </motion.label>
                <motion.div 
                    id="message" 
                    required 
                    className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    rows={4}
                    whileHover={{ scale: 1.02 }}
                />
                <motion.div 
                    type="submit" 
                    className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    Send Message
                </motion.button>
            </form>
            <div className="mt-10 text-center">
                <motion.div 
                    className="text-xl font-bold text-orange-600 mb-4"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    Our Location
                </motion.h2>
                <p className="text-gray-700">
                    Visit us at our flagship store:
                </p>
                <p className="text-gray-700 font-semibold">
                    123 Luxury Ave, Glamour City, CA 90210
                </p>
                <motion.div 
                    className="text-lg font-semibold text-orange-600 mt-4"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    Business Hours
                </motion.h3>
                <p className="text-gray-700">
                    Monday - Friday: 10 AM - 8 PM
                </p>
                <p className="text-gray-700">
                    Saturday - Sunday: 11 AM - 6 PM
                </p>
            </div>
        </div>
    );
};

export default ContactPage;