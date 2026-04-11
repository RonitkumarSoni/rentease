import { Helmet } from 'react-helmet-async';

export const RentEaseHelmet = ({
  title = 'RentEase - Quality Rentals at Your Fingertips',
  description = 'RentEase is your one-stop rental marketplace to buy, sell, and rent anything. Discover affordable rentals at affordable prices.',
  keywords = 'rental marketplace, buy rent sell, affordable rentals, online rentals, RentEase',
  image = 'https://rent-ease-gold.vercel.app/favicon.svg',
  url = 'https://rent-ease-gold.vercel.app',
  type = 'website',
  author = 'RentEase'
} = {}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags - Use attribute to replace existing */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="theme-color" content="#10B981" />
      
      {/* Robots & Indexing */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph - Social Media (Use property attribute) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="RentEase" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      
      {/* Mobile App Meta */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="RentEase" />
      
      {/* Alternate Language */}
      <link rel="alternate" hreflang="en" href={url} />
    </Helmet>
  );
};

export default RentEaseHelmet;
