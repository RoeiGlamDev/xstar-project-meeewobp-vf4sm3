export const BRAND_NAME = "luxury LRP cosmetics";
export const PRIMARY_COLOR = "#FFA500"; // orange
export const SECONDARY_COLOR = "#FFFFFF"; // white

/ 
 * Configuration settings for luxury LRP cosmetics application 
 */
export const CONFIG = {
    siteTitle: "luxury LRP cosmetics - Elevate Your Beauty",
    siteDescription: "Discover the elegance of luxury LRP cosmetics, where beauty meets sophistication.",
    siteUrl: "https://www.luxurylrpcosmetics.com",
    contactEmail: "info@luxurylrpcosmetics.com",
    phoneNumber: "+1 (800) 555-0199",
    address: "123 Luxury Lane, Glamour City, CA 90210",
};

/
 * Interface representing a product in the luxury LRP cosmetics line.
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
 * Interface for the cosmetics collection available at luxury LRP cosmetics.
 */
export interface Collection {
    title: string;
    products: Product[];
}

/
 * Function to create a new product for luxury LRP cosmetics.
 * 
 * @param id - Unique identifier for the product
 * @param name - Name of the product
 * @param description - Description of the product
 * @param price - Price of the product
 * @param category - Category under which the product falls
 * @param imageUrl - URL of the product image
 * @param inStock - Availability status of the product
 * @returns A new product object
 */
export function createProduct(
    id: string, 
    name: string, 
    description: string, 
    price: number, 
    category: string, 
    imageUrl: string, 
    inStock: boolean
): Product {
    return {
        id,
        name,
        description,
        price,
        category,
        imageUrl,
        inStock,
    };
}

// Example of a luxury product
export const exampleProduct: Product = createProduct(
    "p1",
    "Luxury Hydrating Serum",
    "An exquisite serum that deeply hydrates and revitalizes your skin.",
    120.00,
    "Skincare",
    "https://www.luxurylrpcosmetics.com/images/products/hydrating-serum.jpg",
    true
);