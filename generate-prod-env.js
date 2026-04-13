import fs from 'fs';
import path from 'path';

/**
 * RentEase PROD Environment Generator
 * Run: node generate-prod-env.js
 */

const VERCEL_URL = 'https://rent-ease-web.vercel.app';
const RENDER_URL = 'https://rentease-1whl.onrender.com';

const envPath = 'server/.env';
if (!fs.existsSync(envPath)) {
    console.error('❌ .env file NOT found in server folder!');
    process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const lines = envContent.split('\n');

console.log('\n' + '='.repeat(60));
console.log('📦 RENDER (BACKEND) ENVIRONMENT VARIABLES');
console.log('='.repeat(60));
console.log('Copy these to Render -> Environment tab:\n');

lines.forEach(line => {
    if (line.trim() && !line.startsWith('#')) {
        let [key, value] = line.split('=');
        if (key && value) {
            let prodValue = value.trim();
            // Replace localhost with prod URL
            if (prodValue.includes('localhost')) {
                prodValue = VERCEL_URL;
            }
            // Update NODE_ENV
            if (key === 'NODE_ENV') {
                prodValue = 'production';
            }
            console.log(`${key}=${prodValue}`);
        }
    }
});

console.log('\n' + '='.repeat(60));
console.log('📦 VERCEL (FRONTEND) ENVIRONMENT VARIABLES');
console.log('='.repeat(60));
console.log('Copy these to Vercel -> Settings -> Environment Variables:\n');

const supabaseUrl = lines.find(l => l.startsWith('SUPABASE_URL='))?.split('=')[1]?.trim();
const supabaseAnon = lines.find(l => l.startsWith('SUPABASE_ANON_KEY='))?.split('=')[1]?.trim();

console.log(`VITE_API_URL=${RENDER_URL}`);
console.log(`VITE_SUPABASE_URL=${supabaseUrl}`);
console.log(`VITE_SUPABASE_ANON_KEY=${supabaseAnon}`);

console.log('\n' + '='.repeat(60));
console.log('💡 TIP: Save variables and REDEPLOY both services!');
console.log('='.repeat(60) + '\n');
