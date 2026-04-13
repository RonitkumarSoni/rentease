import fs from 'fs';
import path from 'path';

/**
 * RentEase Production Auth Helper
 * Run this to see EXACTLY what to copy-paste into your dashboards.
 */

const VERCEL_URL = 'https://rent-ease-web.vercel.app';
const RENDER_URL = 'https://rentease-1whl.onrender.com';
const SUPABASE_REF = 'ecenxkosefzhclzwhkve'; // Extracted from your .env

console.log('\n' + '='.repeat(60));
console.log('🚀 RENTEASE PRODUCTION AUTH FIX TOOL');
console.log('='.repeat(60));

console.log('\nSTEP 1: SUPABASE DASHBOARD');
console.log('------------------------------------------------------------');
console.log(`URL: https://supabase.com/dashboard/project/${SUPABASE_REF}/auth/url-configuration`);
console.log('\n✅ Set "Site URL" to:');
console.log(`   ${VERCEL_URL}`);
console.log('\n✅ Add these to "Redirect URLs":');
console.log(`   ${VERCEL_URL}/**`);
console.log(`   ${VERCEL_URL}/login`);
console.log(`   ${VERCEL_URL}/signup`);
console.log(`   http://localhost:5173/**`);

console.log('\nSTEP 2: RENDER DASHBOARD (BACKEND)');
console.log('------------------------------------------------------------');
console.log(`URL: https://dashboard.render.com/`);
console.log('\n✅ Set Environment Variable "CLIENT_URL" to:');
console.log(`   ${VERCEL_URL}`);

console.log('\nSTEP 3: GOOGLE CLOUD CONSOLE');
console.log('------------------------------------------------------------');
console.log(`URL: https://console.cloud.google.com/apis/credentials`);
console.log('\n✅ Ensure "Authorized redirect URIs" contains:');
console.log(`   https://${SUPABASE_REF}.supabase.co/auth/v1/callback`);

console.log('\nSTEP 4: VERCEL DASHBOARD (FRONTEND)');
console.log('------------------------------------------------------------');
console.log(`URL: https://vercel.com/dashboard`);
console.log('\n✅ Ensure "VITE_API_URL" is set to:');
console.log(`   ${RENDER_URL}`);

console.log('\n' + '='.repeat(60));
console.log('💡 TIP: After saving these, REDEPLOY your Vercel and Render apps!');
console.log('='.repeat(60) + '\n');
