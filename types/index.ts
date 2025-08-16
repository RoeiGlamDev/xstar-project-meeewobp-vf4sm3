import { Product, Category, User } from './models';

/
 * Represents a luxury cosmetic product in the luxury LRP cosmetics line.
 */
export interface LuxuryCosmeticProduct extends Product {
    /
     * The name of the product.
     */
    name: string;

    /
     * The price of the product in USD.
     */
    price: number;

    /
     * The description of the product, highlighting its luxury features.
     */
    description: string;

    /
     * The category to which the product belongs.
     */
    category: Category;

    /
     * The URL of the product image showcasing the luxury design.
     */
    imageUrl: string;

    /
     * The ingredient list for the product, emphasizing premium components.
     */
    ingredients: string[];

    /
     * The rating of the product based on customer reviews.
     */
    rating: number;

    /
     * The URL for the product's 3D design view.
     */
    threeDViewUrl: string;
}

/
 * Represents a category of luxury cosmetics for the luxury LRP cosmetics.
 */
export interface LuxuryCosmeticCategory extends Category {
    /
     * The name of the category.
     */
    categoryName: string;

    /
     * The description of the category showcasing its luxurious appeal.
     */
    description: string;

    /
     * The list of products under this category.
     */
    products: LuxuryCosmeticProduct[];
}

/
 * Represents a user of the luxury LRP cosmetics website.
 */
export interface LuxuryCosmeticUser extends User {
    /
     * The user's preferred name for a personalized experience.
     */
    preferredName: string;

    /
     * The user's email address for account management and communication.
     */
    email: string;

    /
     * The user's purchase history including luxury LRP cosmetics products.
     */
    purchaseHistory: LuxuryCosmeticProduct[];

    /
     * Indicates whether the user is a member of the loyalty program.
     */
    isLoyaltyMember: boolean;
}

/
 * Represents the luxury LRP cosmetics brand information.
 */
export interface LuxuryLRPBrand {
    /
     * The official brand name.
     */
    brandName: 'luxury LRP cosmetics';

    /
     * The primary color scheme for the brand.
     */
    colors: {
        primary: string; // Orange
        secondary: string; // White
    };

    /
     * The brand's tagline emphasizing luxury and elegance.
     */
    tagline: string;

    /
     * The official website URL.
     */
    websiteUrl: string;
}

/
 * The main brand information for luxury LRP cosmetics.
 */
export const luxuryLRPBrand: LuxuryLRPBrand = {
    brandName: 'luxury LRP cosmetics',
    colors: {
        primary: '#FFA500', // Orange
        secondary: '#FFFFFF', // White
    },
    tagline: 'Indulge in Luxury with Every Application',
    websiteUrl: 'https://www.luxurylrpcosmetics.com',
};