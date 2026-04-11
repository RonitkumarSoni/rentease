/**
 * DEBUGGING GUIDE: Helmet Meta Tags & Supabase Authentication
 * 
 * Issue 1: Helmet meta tags not changing
 * Issue 2: Supabase authentication not working
 */

// ============================================
// ISSUE 1: HELMET META TAGS NOT UPDATING
// ============================================

/**
 * PROBLEM: Meta descriptions are not changing between routes
 * 
 * SOLUTION: Ensure every route is using RentEaseHelmet
 * 
 * CHECK THESE:
 */

// ✅ 1. HelmetProvider is wrapped around App
// In App.jsx - Should see:
/*
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* Your app */}
      </Router>
    </HelmetProvider>
  );
}
*/

// ✅ 2. Each page imports and uses RentEaseHelmet
// In any page component:
/*
import RentEaseHelmet from '@/utils/RentEaseHelmet';
import { SEO_CONFIG } from '@/utils/seoConfig';

export default function Home() {
  return (
    <>
      <RentEaseHelmet {...SEO_CONFIG.home} />
      {/* Page content */}
    </>
  );
}
*/

// ✅ 3. Browser DevTools Check:
/**
 * 1. Open the page in browser
 * 2. Right-click → Inspect
 * 3. Go to <head> section
 * 4. Look for <meta name="description"> 
 * 5. Check if content changes when navigating between pages
 * 
 * If NOT changing:
 *   → Component is not using RentEaseHelmet
 *   → Helmet not properly imported
 *   → HelmetProvider not wrapping app
 * 
 * If changing:
 *   → Helmet is working! ✅
 *   → Check Google Cache console for updates
 */

// ✅ 4. Check Google Search Console
/**
 * https://search.google.com/search-console
 * 
 * 1. Select your property (rent-ease-gold.vercel.app)
 * 2. Go to "URL Inspection"
 * 3. Enter a URL like: https://rent-ease-gold.vercel.app/browse
 * 4. Click "Request Indexing"
 * 5. Check "Rich Results" section
 * 6. Verify meta tags are showing correctly
 */

export const HELMET_DEBUG = {
  checkHelmetProvider: () => {
    // Run in browser console
    const helmet = document.querySelector('head');
    const metaTags = helmet.querySelectorAll('meta');
    console.log('Total meta tags:', metaTags.length);
    metaTags.forEach(tag => {
      if (tag.name === 'description') {
        console.log('Description:', tag.content);
      }
    });
  },

  checkRouteChange: () => {
    // Navigate to /browse and check console before and after
    console.log('Before navigation:', document.querySelector('meta[name="description"]')?.content);
    // After navigation should show different content
  }
};


// ============================================
// ISSUE 2: SUPABASE AUTHENTICATION NOT WORKING
// ============================================

/**
 * PROBLEM: Login/Signup not working, Auth errors
 * 
 * CAUSES:
 * 1. ❌ Environment variables not set in Vercel
 * 2. ❌ CORS not configured in Supabase
 * 3. ❌ Wrong URL or anon key
 * 4. ❌ Supabase project not configured
 * 5. ❌ Auth providers not enabled
 */

export const SUPABASE_FIX_CHECKLIST = {
  // Fix 1: Set Environment Variables
  verceEnvironmentVariables: `
  
  1. Go to: https://vercel.com/dashboard
  2. Select your project (rent-ease)
  3. Go to Settings → Environment Variables
  4. Add these variables:
  
  VITE_SUPABASE_URL=https://your-project.supabase.co
  VITE_SUPABASE_ANON_KEY=your-anon-key-here
  
  5. Get these values from: https://app.supabase.com → Your Project → Settings → API
  6. Copy "Project URL" and "anon public key"
  7. Redeploy Vercel after adding variables
  `,

  // Fix 2: Configure CORS in Supabase
  supabaseCORS: `
  
  1. Go to: https://app.supabase.com → Your Project
  2. Go to: Authentication → URL Configuration
  3. Add these under "Authorized redirect URLs":
     - https://rent-ease-gold.vercel.app
     - https://rent-ease-gold.vercel.app/login
     - https://rent-ease-gold.vercel.app/signup
     - https://rent-ease-gold.vercel.app/auth/callback
     - http://localhost:5173 (for local development)
  
  4. Save the configuration
  `,

  // Fix 3: Enable Auth Providers
  enableAuthProviders: `
  
  1. Go to: https://app.supabase.com → Your Project
  2. Go to: Authentication → Providers
  3. Enable providers you want:
     - Email (required - should be ON by default)
     - Google, GitHub, etc. (optional)
  4. Each provider needs credentials (OAuth app ID/secret)
  5. Save configuration
  `,

  // Fix 4: Test Connection
  testConnection: `
  
  In browser console, run:
  
  // Check if env variables are loaded
  console.log(import.meta.env.VITE_SUPABASE_URL);
  console.log(import.meta.env.VITE_SUPABASE_ANON_KEY);
  
  // If undefined, environment variables not set!
  
  // Test Supabase connection
  import { supabase } from './src/config/supabase';
  
  supabase.auth.getSession().then(({ data }) => {
    console.log('Current session:', data.session);
  }).catch(err => {
    console.error('Auth error:', err);
  });
  
  // Check auth state
  supabase.auth.onAuthStateChange((event, session) => {
    console.log('Auth state:', event, session);
  });
  `,

  // Fix 5: Update LocalStorage Sync
  updateAuthContext: `
  
  Make sure AuthContext.jsx has proper error handling:
  
  const syncSupabaseUser = async (supabaseUser) => {
    try {
      if (!supabaseUser) return null;
      
      const { data } = await axios.post('/api/auth/sync', {
        name: supabaseUser.user_metadata?.full_name || 
               supabaseUser.user_metadata?.name || 
               supabaseUser.email?.split('@')[0],
        email: supabaseUser.email,
        supabaseId: supabaseUser.id,
        avatar: supabaseUser.user_metadata?.avatar_url
      });
      
      setUser(data);
      localStorage.setItem('rentease_user', JSON.stringify(data));
      return data;
    } catch (error) {
      console.error('Auth sync error:', error.response?.data || error.message);
      toast.error('Failed to sync user profile');
      return null;
    }
  };
  `
};


// ============================================
// COMMON ERRORS & SOLUTIONS
// ============================================

export const TROUBLESHOOTING = {
  error1: {
    problem: 'Helmet meta tags not changing on page navigation',
    solution: [
      '1. Verify HelmetProvider wraps entire app in App.jsx',
      '2. Check each route/page uses <RentEaseHelmet /> component',
      '3. Inspect browser dev tools <head> section',
      '4. Check browser console for React warnings',
      '5. Hard refresh (Ctrl+Shift+R) to clear cache'
    ]
  },

  error2: {
    problem: 'Supabase login returns 401 or CORS error',
    solution: [
      '1. Check environment variables are set in Vercel',
      '2. Verify CORS URL is added in Supabase dashboard',
      '3. Ensure Email provider is enabled in Supabase',
      '4. Check your Supabase project is active',
      '5. Try logging in with correct email/password'
    ]
  },

  error3: {
    problem: 'Environment variables undefined in deployed app',
    solution: [
      '1. Go to Vercel project settings',
      '2. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY',
      '3. Redeploy the app (vercel --prod)',
      '4. Wait 2-3 minutes for deployment',
      '5. Verify in browser console: console.log(import.meta.env.VITE_SUPABASE_URL)'
    ]
  },

  error4: {
    problem: 'Meta tags not showing in Google Search Results',
    solution: [
      '1. Verify meta tags in browser DevTools',
      '2. Submit URL to Google Search Console',
      '3. Wait 24-48 hours for indexing',
      '4. Check Rich Results section in Search Console',
      '5. Check for structured data errors'
    ]
  }
};


// ============================================
// VERCEL DEPLOYMENT CHECKLIST
// ============================================

export const VERCEL_DEPLOYMENT_CHECKLIST = `
┌─ ENVIRONMENT VARIABLES ─────────────────────┐
│ Set in Vercel → Settings → Environment Variables
│ ✅ VITE_SUPABASE_URL
│ ✅ VITE_SUPABASE_ANON_KEY
│ ✅ (Any other API keys needed)
└─────────────────────────────────────────────┘

┌─ BUILD SETTINGS ────────────────────────────┐
│ Vercel → Settings → Build & Development
│ ✅ Build Command: npm run build
│ ✅ Output Directory: dist
│ ✅ Install Command: npm install
└─────────────────────────────────────────────┘

┌─ SUPABASE CONFIGURATION ───────────────────┐
│ https://app.supabase.com → Settings → Auth
│ ✅ Authorized URLs added
│ ✅ Email provider enabled
│ ✅ CORS properly configured
│ ✅ Project is active/not paused
└─────────────────────────────────────────────┘

┌─ DEPLOYMENT STEPS ──────────────────────────┐
│ 1. Set environment variables in Vercel
│ 2. Push code to GitHub
│ 3. Vercel auto-deploys
│ 4. Wait for build to complete
│ 5. Check Vercel deployment logs for errors
│ 6. Visit deployed URL
│ 7. Test login/signup functionality
│ 8. Check browser console for errors
└─────────────────────────────────────────────┘
`;

/**
 * QUICK FIX SUMMARY
 * ==================
 * 
 * For Helmet: Make sure every page uses RentEaseHelmet
 * For Supabase: Add environment variables to Vercel dashboard
 * 
 * After fixing, run:
 * cd client
 * vercel --prod --yes
 */

export default {
  HELMET_DEBUG,
  SUPABASE_FIX_CHECKLIST,
  TROUBLESHOOTING,
  VERCEL_DEPLOYMENT_CHECKLIST
};
