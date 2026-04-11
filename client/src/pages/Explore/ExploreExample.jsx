import React, { useState, useEffect } from 'react';
import RentEaseHelmet from '../../utils/RentEaseHelmet';
import { SEO_CONFIG } from '../../utils/seoConfig';

/**
 * EXPLORE PAGE - SEO EXAMPLE
 * This page demonstrates how to use RentEaseHelmet for a browse/search page
 * with dynamic meta tags based on search filters.
 */

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Dynamic SEO based on filters
  const getSEOConfig = () => {
    let title = 'Browse Rentals | RentEase';
    let description = 'Browse thousands of items available for rent on RentEase.';
    let keywords = 'browse rentals, rent items, rental listings';

    if (selectedCategory) {
      title = `${selectedCategory} for Rent | RentEase - Affordable Options`;
      description = `Rent ${selectedCategory.toLowerCase()} on RentEase. Browse quality items from trusted sellers at affordable prices.`;
      keywords = `rent ${selectedCategory.toLowerCase()}, ${selectedCategory} rentals, affordable ${selectedCategory.toLowerCase()}, RentEase`;
    }

    if (searchQuery) {
      title = `${searchQuery} for Rent | RentEase Rental Marketplace`;
      description = `Find and rent ${searchQuery} on RentEase. Browse listings from verified sellers. SafeSecure checkout. Fast delivery.`;
      keywords = `rent ${searchQuery}, ${searchQuery} rental, buy ${searchQuery}, affordable ${searchQuery}`;
    }

    return {
      title,
      description,
      keywords,
      url: `https://rent-ease-gold.vercel.app/browse${searchQuery ? `?search=${searchQuery}` : ''}${selectedCategory ? `&category=${selectedCategory}` : ''}`,
      ...SEO_CONFIG.browse
    };
  };

  return (
    <>
      {/* Dynamic SEO based on filters */}
      <RentEaseHelmet {...getSEOConfig()} />

      <div className="min-h-screen bg-white dark:bg-slate-900">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8">
          <h1 className="text-3xl font-bold mb-6">Browse Rentals</h1>

          {/* Search and Filter Section */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <input
              type="text"
              placeholder="Search for items to rent..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg mb-6"
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Sports">Sports Equipment</option>
          </select>

          {/* Your browse content */}
          <div className="grid grid-cols-4 gap-6">
            {/* Product cards will be rendered here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
