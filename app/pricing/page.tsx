import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
    title: string;
    description: string;
    price: string;
    features: string[];
}

const pricingOptions: PricingOption[] = [
    {
        title: 'Luxury Skin Care Package',
        description: 'Pamper your skin with our exclusive luxury skin care regimen, designed to rejuvenate and hydrate.',
        price: '$150',
        features: ['Facial Cleanser', 'Moisturizing Cream', 'Anti-Aging Serum', 'Free Consultation']
    },
    {
        title: 'Premium Makeup Collection',
        description: 'Elevate your beauty routine with our high-end makeup collection, featuring luxurious pigments.',
        price: '$200',
        features: ['Foundation', 'Lipstick', 'Eyeshadow Palette', 'Makeup Brushes']
    },
    {
        title: 'Ultimate Spa Experience',
        description: 'Indulge in a full spa day with our ultimate package, including massages and beauty treatments.',
        price: '$300',
        features: ['Full Body Massage', 'Facial Treatment', 'Manicure & Pedicure', 'Complimentary Drinks']
    }
];

const FAQ = [
    {
        question: 'What is included in the Luxury Skin Care Package?',
        answer: 'The Luxury Skin Care Package includes a facial cleanser, moisturizing cream, anti-aging serum, and a free consultation.'
    },
    {
        question: 'Do you offer refunds on your products?',
        answer: 'We take pride in our products. If you are not completely satisfied, please contact us within 30 days for a full refund.'
    },
    {
        question: 'How can I book an appointment?',
        answer: 'You can easily book an appointment through our website or by contacting our customer service.'
    }
];

const PricingPage: React.FC = () => {
    return (
        <div className="bg-white p-10">
            <motion.div
                className="text-4xl font-bold text-orange-600"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Luxury LRP Cosmetics Pricing
            </motion.h1>
            <p className="mt-4 text-lg text-gray-700">
                Discover the luxurious services we offer at Luxury LRP Cosmetics. Our pricing reflects the premium quality and care we put into our products and services.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pricingOptions.map((option, index) => (
                    <motion.div
                        key={index}
                        className="border-2 border-orange-600 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                        initial={{ scale: 0.9 }}
                        whileHover={{ scale: 1 }}
                    >
                        <h2 className="text-2xl font-bold text-orange-600">{option.title}</h2>
                        <p className="mt-2 text-gray-600">{option.description}</p>
                        <p className="mt-4 text-xl font-semibold text-orange-600">{option.price}</p>
                        <ul className="mt-2 list-disc list-inside">
                            {option.features.map((feature, idx) => (
                                <li key={idx} className="text-gray-600">{feature}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
            <div className="mt-10">
                <h2 className="text-3xl font-bold text-orange-600">Frequently Asked Questions</h2>
                <div className="mt-4 space-y-4">
                    {FAQ.map((item, index) => (
                        <div key={index} className="border-b pb-2">
                            <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                            <p className="text-gray-600">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingPage;