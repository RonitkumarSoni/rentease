# 🚀 RentEase Full Deployment Guide

Is guide mein aapko saari settings milengi jo aapko **Render (Backend)** aur **Vercel (Frontend)** mein daalni hain.

---

## 🏗️ PART 1: Render (Backend) Setup
Render dashboard mein apne Web Service ke **Environment** tab mein niche diye gaye saare variables add karein:

| Key | Value (Copy from local .env) | Description |
|---|---|---|
| `NODE_ENV` | `production` | Production mode enable karne ke liye |
| `CLIENT_URL` | `https://rent-ease-web.vercel.app` | Aapka naya Vercel URL |
| `MONGODB_URI` | `mongodb+srv://...` | Aapka MongoDB connection string |
| `SUPABASE_URL` | `https://...` | Supabase Project URL |
| `SUPABASE_ANON_KEY` | `eyJ...` | Supabase Anon Key |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJ...` | Supabase Service Role (Secret) |
| `JWT_SECRET` | `...` | Koi bhi strong random string |
| `GOOGLE_CLIENT_ID` | `...` | Google Cloud Console se |
| `RAZORPAY_KEY_ID` | `...` | Razorpay Dashboard se |
| `RAZORPAY_KEY_SECRET` | `...` | Razorpay Dashboard se |
| `RESEND_API_KEY` | `re_...` | Resend.com dashboard se |
| `CLOUDINARY_CLOUD_NAME` | `...` | Cloudinary settings se |
| `CLOUDINARY_API_KEY` | `...` | Cloudinary settings se |
| `CLOUDINARY_API_SECRET` | `...` | Cloudinary settings se |

---

## 🎨 PART 2: Vercel (Frontend) Setup
Vercel dashboard mein **Settings -> Environment Variables** mein ye 3 cheezein add karein:

| Key | Value |
|---|---|
| `VITE_API_URL` | `https://rentease-1whl.onrender.com` (Aapka Render URL) |
| `VITE_SUPABASE_URL` | (Same as backend) |
| `VITE_SUPABASE_ANON_KEY` | (Same as backend) |

---

## 🔐 PART 3: Service Dashboards Setup

### 1. Supabase (Auth Fix)
[URL Configuration](https://supabase.com/dashboard/project/ecenxkosefzhclzwhkve/auth/url-configuration) par jayein:
- **Site URL**: `https://rent-ease-web.vercel.app`
- **Redirect URLs**: `https://rent-ease-web.vercel.app/**` aur `http://localhost:5173/**`

### 2. Google Cloud Console
[Credentials Page](https://console.cloud.google.com/apis/credentials) par apne OAuth Client ID ko edit karein:
- **Authorized JavaScript origins**: `https://rent-ease-web.vercel.app`
- **Authorized redirect URIs**: `https://ecenxkosefzhclzwhkve.supabase.co/auth/v1/callback`

---

## ⚡ NEXT STEPS
1. Saare variables save karne ke baad **Render** par "Manual Deploy" karein.
2. Uske baad **Vercel** par jaakar "Redeploy" karein.

**Note:** Agar koi error aaye, toh browser console (F12) mein check karein ki kaunsa variable missing hai.
