import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
    title: string;
    price: string;
    features: string[];
}

const pricingTiers: PricingTier[] = [
    {
        title: 'Basic Glow',
        price: '$50',
        features: [
            'Skin Analysis',
            'Basic Makeup Application',
            'Complimentary Consultation',
            'Exclusive Discounts on Future Services'
        ]
    },
    {
        title: 'Luxury Radiance',
        price: '$120',
        features: [
            'Advanced Skin Treatment',
            'Custom Makeup Application',
            'Luxury Product Samples',
            'Priority Booking'
        ]
    },
    {
        title: 'Ultimate Elegance',
        price: '$250',
        features: [
            'Complete Skincare Regimen',
            'Personal Makeup Artist',
            'Exclusive Event Makeup',
            'Luxury Gift Package'
        ]
    }
];

const PricingSection: React.FC = () => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto text-center">
                <motion.div
                    className="text-4xl font-bold text-orange-600 mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    luxury LRP cosmetics Pricing Plans
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-orange-600 rounded-lg shadow-lg p-6 transition-transform hover:scale-105"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3 className="text-2xl font-semibold text-orange-600 mb-4">{tier.title}</h3>
                            <p className="text-xl font-bold text-orange-600 mb-4">{tier.price}</p>
                            <ul className="text-left mb-6">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="mb-2 text-gray-800">
                                        - {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#"
                                className="inline-block bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors hover:bg-orange-500"
                            >
                                Book Now
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;