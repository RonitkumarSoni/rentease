import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Legacy SEO hook - Now use RentEaseHelmet component directly
 * This hook is kept for backward compatibility
 * 
 * USAGE EXAMPLE:
 * In your component:
 * 
 * import { Helmet } from 'react-helmet-async';
 * import RentEaseHelmet from '@/utils/RentEaseHelmet';
 * 
 * export default function Home() {
 *   return (
 *     <>
 *       <RentEaseHelmet
 *         title="RentEase Home - Rent Anything You Need"
 *         description="Browse thousands of items available for rent..."
 *         keywords="rent items, rental marketplace, affordable rentals"
 *         url="https://rent-ease-web.vercel.app/"
 *       />
 *       {/* Your component JSX */}
 *     </>
 *   );
 * }
 */

export const useSEO = ({
  title = 'RentEase - Quality Rentals at Your Fingertips',
  description = 'Rent, buy, and sell anything on RentEase. The most trusted rental marketplace for quality items at affordable prices.',
  keywords = 'rental platform, buy rent sell, affordable rentals',
  image = 'https://rent-ease-web.vercel.app/favicon.svg',
  url = 'https://rent-ease-web.vercel.app',
  type = 'website'
} = {}) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      let element = document.querySelector(
        isProperty 
          ? `meta[property="${name}"]` 
          : `meta[name="${name}"]`
      );
      
      if (!element) {
        element = document.createElement('meta');
        isProperty 
          ? element.setAttribute('property', name)
          : element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Update standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('theme-color', '#10B981');

    // Update Open Graph tags
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);

    // Update Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

  }, [title, description, keywords, image, url, type]);
};

