import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: 'General Inquiry',
  });
  
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Email is invalid.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      setSuccessMessage('Thank you for contacting luxury LRP cosmetics! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '', reason: 'General Inquiry' });
    }
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <motion.div
        className="text-3xl font-bold text-orange-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h2>
      <p className="text-lg text-gray-700 mb-4">
        For inquiries related to our luxury cosmetics, please fill out the form below.
      </p>
      
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700" htmlFor="reason">Reason for Contact</label>
          <select
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Product Information">Product Information</option>
            <option value="Partnership Opportunities">Partnership Opportunities</option>
            <option value="Feedback">Feedback</option>
          </select>
        </div>
        
        <div>
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>
        
        <button
          className="w-full py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition duration-200"
          type="submit"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-orange-600">Business Information</h3>
        <p className="text-gray-700">Address: 123 Luxury Lane, Beauty City, BC 12345</p>
        <p className="text-gray-700">Phone: (123) 456-7890</p>
        <p className="text-gray-700">Email: contact@luxurylrpcosmetics.com</p>
        <p className="text-gray-700">Hours: Mon-Fri 9am - 5pm</p>
      </div>
    </section>
  );
};

export default ContactSection;