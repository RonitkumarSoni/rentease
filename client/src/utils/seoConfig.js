/**
 * RENTEASE SEO CONFIGURATION
 * Export SEO metadata for all routes
 */

// HOME PAGE
export const HOME_SEO = {
  title: 'RentEase - Quality Rentals at Your Fingertips | Rent, Buy & Sell',
  description: 'Discover affordable rentals on RentEase. Rent, buy, and sell anything you need. Connect with trusted sellers and get quality items delivered to your doorstep.',
  keywords: 'rental marketplace, rent items, buy rent sell, affordable rentals, online rentals, RentEase',
  url: 'https://rent-ease-gold.vercel.app/'
};

// BROWSE PAGE
export const BROWSE_SEO = {
  title: 'Browse Rentals | RentEase - Find Quality Items to Rent',
  description: 'Browse thousands of items available for rent. Find electronics, furniture, sports equipment, and more. Rent from verified sellers at affordable prices.',
  keywords: 'browse rentals, rent items, rental listings, rental marketplace, affordable rentals, RentEase',
  url: 'https://rent-ease-gold.vercel.app/browse'
};

// ITEM DETAILS
export const ITEM_DETAILS_SEO = {
  title: 'Item Details | RentEase - Rent Quality Items Online',
  description: 'Rent this item on RentEase. Verified seller, secure checkout, and fast delivery. Book your rental today!',
  keywords: 'rental item, rent online, book rental, affordable rentals, trusted sellers, RentEase',
  url: 'https://rent-ease-gold.vercel.app/product/:id',
  type: 'product'
};

// ADD LISTING
export const ADD_LISTING_SEO = {
  title: 'List Your Item for Rent | RentEase - Start Earning Today',
  description: 'List items for rent on RentEase and earn passive income. Simple process, verified renters, secure transactions. Start renting out today!',
  keywords: 'list item for rent, become seller, passive income, rent out items, RentEase seller program',
  url: 'https://rent-ease-gold.vercel.app/add-listing'
};

// BECOME SELLER
export const BECOME_SELLER_SEO = {
  title: 'Become a RentEase Seller | Earn Money Renting Items',
  description: 'Join thousands of sellers earning on RentEase. Simple setup, low fees, secure platform. Start earning passive income from unused items.',
  keywords: 'become seller, earn money, rental platform, passive income, side income, RentEase seller',
  url: 'https://rent-ease-gold.vercel.app/become-seller'
};

// AUTH PAGES
export const LOGIN_SEO = {
  title: 'Login | RentEase - Access Your Rental Account',
  description: 'Sign in to your RentEase account to view bookings, wishlist, and manage rentals.',
  keywords: 'login, sign in, RentEase account, user login',
  url: 'https://rent-ease-gold.vercel.app/login'
};

export const SIGNUP_SEO = {
  title: 'Sign Up | RentEase - Join the Rental Community',
  description: 'Create a RentEase account in minutes. Join thousands of users renting affordable items. No credit card required to start.',
  keywords: 'sign up, register, create account, join RentEase, free account',
  url: 'https://rent-ease-gold.vercel.app/signup'
};

// DASHBOARD PAGES
export const DASHBOARD_SEO = {
  title: 'Dashboard | RentEase - Manage Your Rentals',
  description: 'Access your RentEase dashboard. View bookings, track rentals, manage wishlist, and update profile settings.',
  keywords: 'dashboard, my rentals, bookings, profile, RentEase account',
  url: 'https://rent-ease-gold.vercel.app/dashboard'
};

export const MY_LISTINGS_SEO = {
  title: 'My Listings | RentEase Seller Dashboard',
  description: 'Manage all your rental listings on RentEase. View bookings, earnings, and rental history.',
  keywords: 'my listings, seller dashboard, rental management, RentEase seller',
  url: 'https://rent-ease-gold.vercel.app/dashboard/listings'
};

export const MY_BOOKINGS_SEO = {
  title: 'My Bookings | RentEase - Track Your Rentals',
  description: 'View all your active and past rental bookings on RentEase. Track rental status and schedules.',
  keywords: 'my bookings, active rentals, rental history, booking status, RentEase',
  url: 'https://rent-ease-gold.vercel.app/dashboard/bookings'
};

export const WISHLIST_SEO = {
  title: 'My Wishlist | RentEase - Saved Items',
  description: 'Your saved wishlist on RentEase. Keep track of items you want to rent later.',
  keywords: 'wishlist, saved items, bookmarks, wishlist items, RentEase',
  url: 'https://rent-ease-gold.vercel.app/dashboard/wishlist'
};

export const PROFILE_SEO = {
  title: 'Profile Settings | RentEase - Manage Account',
  description: 'Update your profile, change password, and manage account settings on RentEase.',
  keywords: 'profile, account settings, user profile, RentEase account management',
  url: 'https://rent-ease-gold.vercel.app/dashboard/profile'
};

// Default export with nested structure
export default {
  home: HOME_SEO,
  browse: BROWSE_SEO,
  itemDetails: ITEM_DETAILS_SEO,
  addListing: ADD_LISTING_SEO,
  becomeSeller: BECOME_SELLER_SEO,
  login: LOGIN_SEO,
  signup: SIGNUP_SEO,
  dashboard: DASHBOARD_SEO,
  myListings: MY_LISTINGS_SEO,
  bookings: MY_BOOKINGS_SEO,
  wishlist: WISHLIST_SEO,
  profile: PROFILE_SEO
};
