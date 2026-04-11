/**
 * RENTEASE SEO TEMPLATE - COPY & PASTE READY
 * 
 * Use this file as a template for adding SEO to any RentEase page.
 * Replace ROUTE_NAME with your actual route and customize the SEO config.
 */

// ============================================
// TEMPLATE 1: STATIC SEO (Simple Pages)
// ============================================

/**
 * Perfect for: Login, Signup, Profile, Cart, etc.
 * Content doesn't change much, SEO stays consistent
 */

import RentEaseHelmet from '@/utils/RentEaseHelmet';
import { SEO_CONFIG } from '@/utils/seoConfig';

export const StaticSEOPageExample = () => {
  return (
    <>
      {/* For static pages, just spread the config directly */}
      <RentEaseHelmet {...SEO_CONFIG.login} />
      
      <div className="container">
        {/* Your page content */}
      </div>
    </>
  );
};


// ============================================
// TEMPLATE 2: DYNAMIC SEO (Search/Filter Pages)
// ============================================

/**
 * Perfect for: Browse, Explore, Search Results
 * Content changes based on search/filter, SEO should reflect that
 */

import { useState } from 'react';

export const DynamicSEOPageExample = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  // Build dynamic SEO based on current filters
  const dynamicSEO = {
    title: searchTerm 
      ? `${searchTerm} for Rent | RentEase - Affordable Options`
      : category
      ? `Rent ${category} | RentEase - Best Prices`
      : 'Browse All Rentals | RentEase',
    
    description: searchTerm
      ? `Find and rent ${searchTerm} on RentEase. Browse quality items from verified sellers at affordable prices. Fast delivery available.`
      : category
      ? `Rent ${category} items on RentEase. Wide selection from ₹100/day. Verified sellers, secure transactions, same-day delivery.`
      : 'Browse thousands of items available for rent. Electronics, furniture, gadgets, and more. Get what you need without buying.',
    
    keywords: searchTerm
      ? `rent ${searchTerm}, ${searchTerm} rental, buy ${searchTerm}, affordable ${searchTerm}, ${searchTerm} for rent`
      : category
      ? `rent ${category}, ${category} rental, affordable ${category}, buy ${category}`
      : 'rental marketplace, rent items, buy rent sell, affordable rentals',
    
    url: `https://rent-ease-gold.vercel.app/browse${searchTerm ? `?search=${searchTerm}` : ''}${category ? `&category=${category}` : ''}`
  };

  return (
    <>
      {/* Meta tags update automatically when search/filter changes */}
      <RentEaseHelmet {...dynamicSEO} />
      
      <div className="container">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Furniture</option>
        </select>
        
        {/* Your content */}
      </div>
    </>
  );
};


// ============================================
// TEMPLATE 3: DATA-DRIVEN SEO (Product Pages)
// ============================================

/**
 * Perfect for: Item Details, User Profile, Individual Items
 * Content is fetched from API/database, SEO uses that data
 */

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const DataDrivenSEOPageExample = () => {
  const { itemId } = useParams();
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    // Fetch item data from API
    fetchItemDetails(itemId).then(setItemData);
  }, [itemId]);

  // SEO adapts to the fetched data
  const dataSEO = itemData ? {
    title: `${itemData.name} for Rent | ₹${itemData.pricePerDay}/day | RentEase`,
    
    description: `Rent ${itemData.name} from ${itemData.sellerName}. ${itemData.description.substring(0, 120)}... Verified seller, secure checkout, free delivery in ${itemData.city}.`,
    
    keywords: `rent ${itemData.name}, ${itemData.category} rental, ${itemData.name} for rent, ${itemData.location}, RentEase`,
    
    image: itemData.images[0], // Use product image
    
    url: `https://rent-ease-gold.vercel.app/product/${itemId}`,
    
    type: 'product'
  } : {};

  return (
    <>
      {itemData && <RentEaseHelmet {...dataSEO} />}
      
      <div className="container">
        {itemData ? (
          <>
            <img src={itemData.images[0]} alt={itemData.name} />
            <h1>{itemData.name}</h1>
            <p>{itemData.description}</p>
            <p>Price: ₹{itemData.pricePerDay}/day</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};


// ============================================
// TEMPLATE 4: CONDITIONAL SEO (Multi-State Pages)
// ============================================

/**
 * Perfect for: Dashboard, Auth Pages with multiple states
 * Different SEO based on user state or page mode
 */

import { useAuth } from '@/context/AuthContext';

export const ConditionalSEOPageExample = () => {
  const { isLoggedIn, user } = useAuth();

  const seoConfig = isLoggedIn
    ? {
        title: `${user.name}'s Dashboard | RentEase`,
        description: `Manage your RentEase account: rentals, bookings, wishlist, and profile settings.`,
        keywords: 'dashboard, my rentals, bookings, profile, RentEase',
        url: 'https://rent-ease-gold.vercel.app/dashboard'
      }
    : {
        title: 'Login | RentEase - Access Your Account',
        description: 'Sign in to RentEase to continue browsing and managing your rentals.',
        keywords: 'login, signin, RentEase account',
        url: 'https://rent-ease-gold.vercel.app/login'
      };

  return (
    <>
      <RentEaseHelmet {...seoConfig} />
      
      <div className="container">
        {isLoggedIn ? (
          <div>Dashboard Content</div>
        ) : (
          <div>Login Form</div>
        )}
      </div>
    </>
  );
};


// ============================================
// QUICK REFERENCE: HOW TO IMPLEMENT
// ============================================

/**
 * STEP 1: Import at top of your page component
 * ──────────────────────────────────────────
 * import RentEaseHelmet from '@/utils/RentEaseHelmet';
 * import { SEO_CONFIG } from '@/utils/seoConfig';
 * 
 * 
 * STEP 2: Add RentEaseHelmet above your JSX
 * ──────────────────────────────────────────
 * return (
 *   <>
 *     <RentEaseHelmet {...SEO_CONFIG.home} />
 *     {/* Your content */}
 *   </>
 * );
 * 
 * 
 * STEP 3: For dynamic SEO, build config object
 * ──────────────────────────────────────────
 * const customSEO = {
 *   title: searchQuery ? `Search: ${searchQuery}` : 'Browse',
 *   description: 'Your custom description',
 *   keywords: 'your, keywords, here',
 *   url: 'https://rent-ease-gold.vercel.app/your-page'
 * };
 * 
 * return (
 *   <>
 *     <RentEaseHelmet {...customSEO} />
 *     {/* Your content */}
 *   </>
 * );
 * 
 * 
 * STEP 4: Deploy and verify in Google Search Console
 * ──────────────────────────────────────────────────
 * 1. Open: https://search.google.com/search-console
 * 2. Navigate to "URL Inspection"
 * 3. Enter your page URL
 * 4. Click "Request Indexing"
 * 5. Check "Rich Results" to see how Google displays your page
 */


// ============================================
// SEO BEST PRACTICES FOR EACH ROUTE TYPE
// ============================================

/**
 * 🏠 HOMEPAGE
 *   ✅ Focus: Brand + main features
 *   ✅ Keywords: 5-8, broad + specific
 *   ✅ Length: 50-60 characters (title), 150-160 (description)
 *   ✅ CTAs: "Rent Now", "Browse Items"
 * 
 * 🔍 BROWSE/SEARCH
 *   ✅ Focus: Dynamic based on search
 *   ✅ Keywords: Include search term + category + location
 *   ✅ Update on every filter change
 *   ✅ CTAs: "View Results", "Filter"
 * 
 * 📦 PRODUCT/ITEM
 *   ✅ Focus: Product name + price + location
 *   ✅ Keywords: Product + category + location
 *   ✅ Image: Use actual product photo
 *   ✅ CTAs: "Rent Now", "Book Today"
 * 
 * 👤 USER/SELLER
 *   ✅ Focus: User name + specialties
 *   ✅ Keywords: Name + category + location
 *   ✅ Image: Profile photo
 *   ✅ CTAs: "View Listings", "Contact"
 * 
 * 👥 AUTH PAGES
 *   ✅ Title: Action verb (Login/Signup)
 *   ✅ Description: Brief benefit statement
 *   ✅ Keywords: Action + platform name
 *   ✅ Keep simple and scannable
 */

export default {
  StaticSEOPageExample,
  DynamicSEOPageExample,
  DataDrivenSEOPageExample,
  ConditionalSEOPageExample
};
