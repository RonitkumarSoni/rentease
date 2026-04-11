/**
 * RENTEASE SEO IMPLEMENTATION - ROUTE-SPECIFIC EXAMPLES
 * 
 * This file shows how different routes use different meta descriptions
 * and titles for maximum SEO impact.
 */

// ============================================
// 1. HOME PAGE - HIGH PRIORITY
// ============================================

/**
 * Route: /
 * Purpose: Main entry point, showcase all features
 * 
 * USAGE IN src/pages/Home/Home.jsx:
 * 
 * import RentEaseHelmet from '@/utils/RentEaseHelmet';
 * import { SEO_CONFIG } from '@/utils/seoConfig';
 * 
 * const Home = () => (
 *   <>
 *     <RentEaseHelmet {...SEO_CONFIG.home} />
 *     {/* Component content */}
 *   </>
 * );
 */

export const HOME_SEO = {
  title: 'RentEase - Quality Rentals at Your Fingertips | Rent, Buy & Sell',
  description: 'Discover affordable rentals on RentEase. Rent, buy, and sell anything you need. Connect with trusted sellers and get quality items delivered to your doorstep.',
  keywords: 'rental marketplace, rent items, buy rent sell, affordable rentals, online rentals, RentEase',
  url: 'https://rent-ease-gold.vercel.app/'
};


// ============================================
// 2. BROWSE/EXPLORE PAGE - HIGH PRIORITY
// ============================================

/**
 * Route: /browse or /browse?search=electronics&category=phones
 * Purpose: Show all available rentals with dynamic filters
 * 
 * USAGE IN src/pages/Explore/Explore.jsx:
 * 
 * const Explore = () => {
 *   const [searchQuery, setSearchQuery] = useState('');
 *   
 *   const dynamicSEO = {
 *     ...SEO_CONFIG.browse,
 *     title: searchQuery 
 *       ? `${searchQuery} for Rent | RentEase`
 *       : SEO_CONFIG.browse.title,
 *     description: searchQuery 
 *       ? `Find and rent ${searchQuery} on RentEase. Quality items from verified sellers.`
 *       : SEO_CONFIG.browse.description,
 *     url: `https://rent-ease-gold.vercel.app/browse${searchQuery ? `?search=${searchQuery}` : ''}`
 *   };
 *   
 *   return (
 *     <>
 *       <RentEaseHelmet {...dynamicSEO} />
 *       {/* Your content */}
 *     </>
 *   );
 * };
 */

export const BROWSE_SEO = {
  title: 'Browse Rentals | RentEase - Find Quality Items to Rent',
  description: 'Browse thousands of items available for rent. Find electronics, furniture, sports equipment, and more. Rent from verified sellers at affordable prices.',
  keywords: 'browse rentals, rent items, rental listings, rental marketplace, affordable rentals, RentEase',
  url: 'https://rent-ease-gold.vercel.app/browse'
};


// ============================================
// 3. ITEM DETAILS PAGE - IMPORTANT
// ============================================

/**
 * Route: /product/:id
 * Purpose: Individual item page - HIGH conversion potential
 * 
 * USAGE IN src/pages/ItemDetails/ItemDetails.jsx:
 * 
 * const ItemDetails = () => {
 *   const { id } = useParams();
 *   const [item, setItem] = useState(null);
 *   
 *   const itemSEO = {
 *     title: item?.name 
 *       ? `${item.name} for Rent | RentEase - ₹${item.price}/day`
 *       : 'Item Details | RentEase',
 *     description: item?.description 
 *       ? `Rent ${item.name} on RentEase. ${item.description.substring(0, 155)}...`
 *       : 'View item details and rental options on RentEase.',
 *     keywords: `rent ${item?.category}, ${item?.name}, rental, affordable, ${item?.location}`,
 *     image: item?.image,
 *     url: `https://rent-ease-gold.vercel.app/product/${id}`,
 *     type: 'product'
 *   };
 *   
 *   return (
 *     <>
 *       <RentEaseHelmet {...itemSEO} />
 *       {/* Your content */}
 *     </>
 *   );
 * };
 */

export const ITEM_DETAILS_SEO = {
  title: 'Item Details | RentEase - Rent Quality Items Online',
  description: 'Rent this item on RentEase. Verified seller, secure checkout, and fast delivery. Book your rental today!',
  keywords: 'rental item, rent online, book rental, affordable rentals, trusted sellers, RentEase',
  url: 'https://rent-ease-gold.vercel.app/product/:id',
  type: 'product'
};


// ============================================
// 4. ADD LISTING PAGE - IMPORTANT FOR SELLERS
// ============================================

/**
 * Route: /add-listing
 * Purpose: Attract sellers to list items
 * 
 * USAGE IN src/pages/AddListing/AddListing.jsx:
 * 
 * import RentEaseHelmet from '@/utils/RentEaseHelmet';
 * 
 * const AddListing = () => (
 *   <>
 *     <RentEaseHelmet
 *       title="List Your Item for Rent | RentEase - Start Earning Today"
 *       description="List items for rent and earn passive income on RentEase. Simple setup, secure platform, reach thousands of renters."
 *       keywords="list item, become seller, passive income, rent out items, RentEase seller"
 *       url="https://rent-ease-gold.vercel.app/add-listing"
 *     />
 *     {/* Form content */}
 *   </>
 * );
 */

export const ADD_LISTING_SEO = {
  title: 'List Your Item for Rent | RentEase - Start Earning Today',
  description: 'List items for rent on RentEase and earn passive income. Simple process, verified renters, secure transactions. Start renting out today!',
  keywords: 'list item for rent, become seller, passive income, rent out items, RentEase seller program',
  url: 'https://rent-ease-gold.vercel.app/add-listing'
};


// ============================================
// 5. BECOME SELLER PAGE - HIGH CONVERSION
// ============================================

/**
 * Route: /become-seller
 * Purpose: Attract new sellers with benefits
 * 
 * USAGE IN src/pages/BecomeSeller/BecomeSeller.jsx:
 * 
 * import RentEaseHelmet from '@/utils/RentEaseHelmet';
 * 
 * const BecomeSeller = () => (
 *   <>
 *     <RentEaseHelmet
 *       title="Become a RentEase Seller | Start Earning Money Today"
 *       description="Join RentEase sellers and earn money by renting items. Simple setup, zero commission for first 3 months, reach 10k+ users."
 *       keywords="become seller, earn money, selling platform, rental income, side income, RentEase"
 *       url="https://rent-ease-gold.vercel.app/become-seller"
 *     />
 *     {/* Content */}
 *   </>
 * );
 */

export const BECOME_SELLER_SEO = {
  title: 'Become a RentEase Seller | Earn Money Renting Items',
  description: 'Join thousands of sellers earning on RentEase. Simple setup, low fees, secure platform. Start earning passive income from unused items.',
  keywords: 'become seller, earn money, rental platform, passive income, side income, RentEase seller',
  url: 'https://rent-ease-gold.vercel.app/become-seller'
};


// ============================================
// 6. AUTH PAGES
// ============================================

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


// ============================================
// 7. DASHBOARD PAGES
// ============================================

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


// ============================================
// IMPLEMENTATION CHECKLIST
// ============================================

/**
 * ✅ TODO: Update all pages to use RentEaseHelmet
 * 
 * Pages to Update:
 * - [ ] Home.jsx - DONE
 * - [ ] Explore.jsx - Add dynamic search SEO
 * - [ ] ItemDetails.jsx - Add product-specific SEO
 * - [ ] AddListing.jsx - Add seller CTA
 * - [ ] BecomeSeller.jsx - Add program benefits
 * - [ ] Login.jsx - Add standard login meta
 * - [ ] Signup.jsx - Add signup CTA
 * - [ ] Dashboard/index.jsx - Add dashboard meta
 * - [ ] Dashboard/MyListings.jsx - Add listings meta
 * - [ ] Dashboard/Bookings.jsx - Add bookings meta
 * - [ ] Dashboard/Wishlist.jsx - Add wishlist meta
 * - [ ] Dashboard/Profile.jsx - Add profile meta
 * - [ ] Cart.jsx - Add cart meta
 * - [ ] Profile.jsx - Add public profile meta
 * 
 * Each page adds 5-10 unique keywords and tailored description
 * This improves:
 * - Click-through rate (CTR) in Google Search Results
 * - Relevance score for specific keywords
 * - Social media sharing appeal
 * - User engagement signals
 */

export default {
  HOME_SEO,
  BROWSE_SEO,
  ITEM_DETAILS_SEO,
  ADD_LISTING_SEO,
  BECOME_SELLER_SEO,
  LOGIN_SEO,
  SIGNUP_SEO,
  DASHBOARD_SEO,
  MY_LISTINGS_SEO,
  MY_BOOKINGS_SEO
};
