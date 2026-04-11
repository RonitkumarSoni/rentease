// SEO Configuration for RentEase Pages
// Use these configurations with the RentEaseHelmet component

export const SEO_CONFIG = {
  home: {
    title: 'RentEase - Quality Rentals at Your Fingertips | Rent, Buy & Sell',
    description: 'Discover affordable rentals on RentEase. Rent, buy, and sell anything you need. Connect with trusted sellers and get quality items delivered to your doorstep.',
    keywords: 'rental marketplace, rent items, buy rent sell, affordable rentals, online rentals, RentEase',
    url: 'https://rent-ease-gold.vercel.app/',
    type: 'website'
  },

  browse: {
    title: 'Browse Rentals | RentEase - Find Quality Items to Rent',
    description: 'Browse thousands of items available for rent on RentEase. Find what you need at affordable prices from trusted sellers.',
    keywords: 'browse rentals, rent items, rental listings, affordable rentals, RentEase marketplace',
    url: 'https://rent-ease-gold.vercel.app/browse',
    type: 'website'
  },

  itemDetails: {
    title: 'Item Details | RentEase - Rent Quality Items Online',
    description: 'Check availability and book your rental on RentEase. Safe, secure, and affordable rental options from trusted sellers.',
    keywords: 'rental item, rent online, book rental, affordable rentals, trusted sellers, RentEase',
    url: 'https://rent-ease-gold.vercel.app/product',
    type: 'product'
  },

  dashboard: {
    title: 'Dashboard | RentEase - Manage Your Rentals & Account',
    description: 'Manage your rentals, bookings, wishlist, and profile on RentEase. Track your rental history and preferences.',
    keywords: 'rental dashboard, my rentals, bookings, profile, RentEase account',
    url: 'https://rent-ease-gold.vercel.app/dashboard',
    type: 'website'
  },

  addListing: {
    title: 'List Your Item | RentEase - Become a Seller & Earn',
    description: 'List your items for rent on RentEase. Start earning by renting out your items to thousands of users.',
    keywords: 'add listing, become seller, list item for rent, passive income, RentEase seller',
    url: 'https://rent-ease-gold.vercel.app/add-listing',
    type: 'website'
  },

  becomeSeller: {
    title: 'Become a Seller | RentEase - Start Earning Today',
    description: 'Join RentEase as a seller and earn money by renting out your items. Simple setup, secure transactions, and full support.',
    keywords: 'become seller, seller program, rental income, passive income, rent out items',
    url: 'https://rent-ease-gold.vercel.app/become-seller',
    type: 'website'
  },

  login: {
    title: 'Login | RentEase - Access Your Account',
    description: 'Sign in to your RentEase account to continue renting and managing your profile.',
    keywords: 'login, sign in, RentEase account, user account',
    url: 'https://rent-ease-gold.vercel.app/login',
    type: 'website'
  },

  signup: {
    title: 'Sign Up | RentEase - Join Our Rental Community',
    description: 'Create a new RentEase account in minutes. Join thousands of users renting and selling items.',
    keywords: 'sign up, register, create account, join RentEase, rental community',
    url: 'https://rent-ease-gold.vercel.app/signup',
    type: 'website'
  },

  cart: {
    title: 'Cart | RentEase - Review Your Rentals',
    description: 'Review your rental cart and proceed to checkout on RentEase.',
    keywords: 'shopping cart, rental cart, checkout, RentEase',
    url: 'https://rent-ease-gold.vercel.app/cart',
    type: 'website'
  },

  wishlist: {
    title: 'Wishlist | RentEase - Save Your Favorite Items',
    description: 'View your saved items and wishlisted rentals on RentEase.',
    keywords: 'wishlist, saved items, favorites, RentEase',
    url: 'https://rent-ease-gold.vercel.app/dashboard/wishlist',
    type: 'website'
  },

  bookings: {
    title: 'My Bookings | RentEase - Track Your Rentals',
    description: 'View and manage all your rental bookings on RentEase. Track rental status and schedules.',
    keywords: 'my bookings, rental bookings, active rentals, rental history, RentEase',
    url: 'https://rent-ease-gold.vercel.app/dashboard/bookings',
    type: 'website'
  },

  profile: {
    title: 'Profile | RentEase - Manage Your Account Settings',
    description: 'Update your profile, payment methods, and account settings on RentEase.',
    keywords: 'profile, account settings, user profile, RentEase',
    url: 'https://rent-ease-gold.vercel.app/profile',
    type: 'website'
  }
};

/**
 * USAGE EXAMPLE IN A COMPONENT:
 * 
 * import RentEaseHelmet from '@/utils/RentEaseHelmet';
 * import { SEO_CONFIG } from '@/utils/seoConfig';
 * 
 * export default function Home() {
 *   return (
 *     <>
 *       <RentEaseHelmet {...SEO_CONFIG.home} />
 *       {/* Your page content */}
 *     </>
 *   );
 * }
 */
