import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#FFA500',
          DEFAULT: '#FF8C00',
          dark: '#FF4500',
        },
        white: '#FFFFFF',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'scale-up': 'scaleUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
});

/
 * Types and Interfaces for Luxury LRP Cosmetics
 */

// Interface representing a cosmetic product
export interface CosmeticProduct {
  id: string; // Unique identifier for the product
  name: string; // Name of the cosmetic product
  description: string; // Description of the product
  price: number; // Price of the product
  imageUrl: string; // URL of the product image
  category: string; // Category the product belongs to (e.g., lipstick, skincare)
}

/
 * Function to create a new cosmetic product
 * @param product - The product details to be created
 * @returns The newly created product
 */
export function createCosmeticProduct(product: CosmeticProduct): CosmeticProduct {
  // Logic to store the product in a database or in-memory structure
  return product; // Return the created product
}