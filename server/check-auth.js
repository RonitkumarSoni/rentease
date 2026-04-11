#!/usr/bin/env node

/**
 * RentEase Authentication Diagnostic Script
 * ✅ Check करो कौन से environment variables missing हैं
 * 
 * Usage: node check-auth.js (server folder से run करो)
 */

import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

console.log('\n========================================');
console.log('🔐 RentEase Auth Diagnostic');
console.log('========================================\n');

// Load .env file
const envPath = '.env';
if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
    console.log('✅ .env file found\n');
} else {
    console.log('❌ .env file NOT found!');
    console.log('📝 Create: rentease/server/.env\n');
}

// Check required server variables
const serverVars = {
    'SUPABASE_URL': 'Supabase Project URL',
    'SUPABASE_ANON_KEY': 'Supabase Anon Key',
    'SUPABASE_SERVICE_ROLE_KEY': 'Supabase Service Role Key',
    'DATABASE_URL': 'MongoDB Connection String',
    'CLIENT_URL': 'Frontend URL (e.g., http://localhost:3000)',
    'NODE_ENV': 'Environment (development/production)',
};

console.log('📋 Server Environment Variables:');
console.log('─'.repeat(50));

let allFound = true;
Object.entries(serverVars).forEach(([key, description]) => {
    const value = process.env[key];
    if (value) {
        const masked = value.length > 20 ? value.substring(0, 20) + '...' : value;
        console.log(`✅ ${key}: ${masked}`);
    } else {
        console.log(`❌ ${key}: MISSING - ${description}`);
        allFound = false;
    }
});

console.log('\n' + '─'.repeat(50));
console.log('📊 Status Summary:');
console.log('─'.repeat(50));

if (allFound) {
    console.log('✅ All required variables are set!');
    console.log('\n📝 Next: Start server with: npm run dev');
} else {
    console.log('❌ Some variables are missing!');
    console.log('\n📝 Steps to fix:');
    console.log('1. Create file: rentease/server/.env');
    console.log('2. Add required variables (see AUTH_SETUP_GUIDE.md)');
    console.log('3. Save and restart server');
}

// Check if Supabase is reachable (optional)
if (process.env.SUPABASE_URL) {
    console.log('\n🌐 Checking Supabase connectivity...');
    try {
        const url = new URL(process.env.SUPABASE_URL);
        console.log(`✅ Supabase URL is valid: ${url.hostname}`);
    } catch (error) {
        console.log(`❌ Supabase URL is invalid: ${error.message}`);
    }
}

// Check if MongoDB is reachable (optional)
if (process.env.DATABASE_URL) {
    console.log('\n🗄️  Checking MongoDB URL format...');
    const dbUrl = process.env.DATABASE_URL;
    if (dbUrl.includes('mongodb')) {
        console.log(`✅ MongoDB URL format looks valid`);
    } else {
        console.log(`❌ MongoDB URL doesn't look right (should contain 'mongodb')`);
    }
}

console.log('\n========================================');
console.log('📖 For detailed setup: Read AUTH_SETUP_GUIDE.md');
console.log('========================================\n');
