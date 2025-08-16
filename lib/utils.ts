import { formatCurrency } from './helpers';

/
 * Utility functions for luxury LRP cosmetics application
 * @module utils
 */

/
 * Function to create class names based on conditions
 * @param base - The base class name
 * @param conditions - An object with class names as keys and boolean values
 * @returns A string of class names based on conditions
 */
export function cn(base: string, conditions: Record<string, boolean>): string {
    return [
        base,
        ...Object.keys(conditions).filter(key => conditions[key])
    ].join(' ');
}

/
 * Formatter for prices in the cosmetics industry
 * @param price - The price to format
 * @returns Formatted price string in a luxury style
 */
export function formatPrice(price: number): string {
    return formatCurrency(price, 'USD', {
        style: 'currency',
        currencyDisplay: 'symbol',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

/
 * Interface representing a product in luxury LRP cosmetics
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    inStock: boolean;
}

/
 * Calculates the total price of products in the cart
 * @param products - Array of products in the cart
 * @returns Total price formatted in luxury style
 */
export function calculateTotalPrice(products: Product[]): string {
    const total = products.reduce((acc, product) => acc + product.price, 0);
    return formatPrice(total);
}

/
 * Interface representing a customer in luxury LRP cosmetics
 */
export interface Customer {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
}

/
 * Example business message for luxury LRP cosmetics
 * @returns A luxury brand welcome message
 */
export function welcomeMessage(): string {
    return Welcome to luxury LRP cosmetics, where elegance meets beauty. Discover our exclusive range of high-end cosmetics tailored for the discerning customer.;
}