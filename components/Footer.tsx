import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  socialLinks: Array<{ platform: string; url: string }>;
}

const Footer: React.FC<FooterProps> = ({ companyName, socialLinks }) => {
  return (
    <motion.footer
      className="bg-white text-orange-600 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">{companyName}</h2>
        <p className="mb-4">
          Elevate your beauty regimen with our premium cosmetic products. Experience the luxury of quality and elegance.
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="#"
            className="text-orange-600 hover:text-orange-500 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-orange-600 hover:text-orange-500 transition duration-300"
          >
            Products
          </a>
          <a
            href="#"
            className="text-orange-600 hover:text-orange-500 transition duration-300"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-orange-600 hover:text-orange-500 transition duration-300"
          >
            FAQ
          </a>
        </div>
        <div className="flex justify-center space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              className="text-orange-600 hover:text-orange-500 transition duration-300"
              aria-label={Follow us on ${link.platform}}
            >
              <i className={`fab fa-${link.platform.toLowerCase()`}}></i>
            </a>
          ))}
        </div>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;