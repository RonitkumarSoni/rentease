# 🔐 RentEase Authentication Setup Guide

## 🚨 PRODUCTION REDIRECT FIX (Localhost issue)
अगर आपकी site Vercel पर है और Google login करने पर `localhost` आ रहा है, तो ये 3 चीज़ें fix करें:

1. **Supabase**: [URL Config](https://supabase.com/dashboard/project/ecenxkosefzhclzwhkve/auth/url-configuration) में **Site URL** को `https://rent-ease-web.vercel.app` करें.
2. **Render**: Environment Variables में `CLIENT_URL` को `https://rent-ease-web.vercel.app` करें.
3. **Google Console**: Authorized redirect URIs में `https://ecenxkosefzhclzwhkve.supabase.co/auth/v1/callback` डालें.

Run `node fix-auth.js` in the project root to see the exact values.

---

## ⚠️ Current Status
❌ Authentication अभी काम नहीं कर रहा है क्योंकि:
1. Supabase credentials नहीं हैं
2. Backend environment variables नहीं हैं
3. Production में backend URL नहीं है

---

## 📋 **Required Setup Steps**

### **STEP 1: Supabase Setup** (Free tier available)

1. जाओ: https://supabase.com/dashboard
2. नया project बनाओ या existing को use करो
3. इन credentials को copy करो:
   - Project URL → `SUPABASE_URL`
   - Anon Key → `SUPABASE_ANON_KEY`  
   - Service Role Key → `SUPABASE_SERVICE_ROLE_KEY`

4. **CORS Configuration**:
   - Supabase → Authentication → URL Configuration
   - Add Redirect URLs:
     ```
     http://localhost:3000
     http://localhost:5173
     https://rent-ease-gold.vercel.app
     ```
   - Add Origins:
     ```
     http://localhost:3000
     http://localhost:5173
     https://rent-ease-gold.vercel.app
     ```

5. **Enable Email Provider**:
   - Supabase → Authentication → Providers
   - Email checkbox को enable करो

---

### **STEP 2: Client Setup (.env.local)**

Create file: `rentease/client/.env.local`

```env
# Development (local)
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_API_URL=http://localhost:5000

# Production (Vercel)
# ये Vercel environment variables में set करेंगे
```

---

### **STEP 3: Server Setup (.env)**

Create file: `rentease/server/.env`

```env
# Supabase
SUPABASE_URL=your_supabase_url_here
SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# MongoDB
DATABASE_URL=your_mongodb_connection_string

# URLs
CLIENT_URL=http://localhost:3000
NODE_ENV=development
PORT=5000

# JWT (Optional, for custom tokens)
JWT_SECRET=your_secret_key_here

# Razorpay (Optional, for payments)
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

# Email Service (Optional)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_password
```

---

### **STEP 4: Local Testing**

#### Terminal 1 - Start Backend:
```bash
cd rentease/server
npm install
npm run dev
# Should show: "Server running on http://localhost:5000"
```

#### Terminal 2 - Start Frontend:
```bash
cd rentease/client
npm install
npm run dev
# Should show: "http://localhost:5173"
```

#### Test Signup:
1. खुलो: http://localhost:5173/signup
2. करो signup
3. Check करो browser console कोई errors के लिए
4. Check करो Supabase dashboard में user created है या नहीं

---

### **STEP 5: Production Deployment (Vercel)**

#### **A. Backend Deployment** (Render, Railway, या Heroku)

ये guide Render.com के लिए है:

1. जाओ: https://render.com/
2. Create new **Web Service**
3. Connect your GitHub repo
4. Settings:
   - Root directory: `server`
   - Build command: `npm install`
   - Start command: `npm run start` (या `node server.js`)

5. **Add Environment Variables** in Render:
```
SUPABASE_URL=your_value
SUPABASE_ANON_KEY=your_value
SUPABASE_SERVICE_ROLE_KEY=your_value
DATABASE_URL=your_value
CLIENT_URL=https://rent-ease-gold.vercel.app
NODE_ENV=production
```

6. Copy deployment URL: `https://your-app.onrender.com`

---

#### **B. Frontend Deployment (Already on Vercel)**

1. खुलो: https://vercel.com/dashboard
2. Project select करो: `rent-ease-gold`
3. जाओ: **Settings → Environment Variables**
4. Add करो:

```env
VITE_SUPABASE_URL=your_value
VITE_SUPABASE_ANON_KEY=your_value
VITE_API_URL=https://your-backend-url.onrender.com
```

5. Redeploy करो: **Deployments → Redeploy**

---

## 🧪 **Testing Checklist**

### Local Testing:
- [ ] Backend runs on http://localhost:5000
- [ ] Frontend runs on http://localhost:5173
- [ ] Signup करके user बन सके
- [ ] Login करके token मिले
- [ ] Logout काम करे
- [ ] Google OAuth redirect काम करे
- [ ] Browser console में कोई 401/403 errors न हों

### Production Testing:
- [ ] Frontend deploy हो Vercel पर
- [ ] Backend deploy हो अपने service पर
- [ ] VITE_API_URL सही है Vercel में
- [ ] Signup करके user create हो Supabase में
- [ ] User login कर सके
- [ ] Token store हो localStorage में

---

## 🐛 **Common Issues & Fixes**

### **Issue 1: "Failed to fetch" on signup**
```
❌ Cause: Backend URL गलत है या backend offline है
✅ Fix: Check करो VITE_API_URL और backend status
```

### **Issue 2: "Invalid email or password"**
```
❌ Cause: Email को Supabase में confirm नहीं किया
✅ Fix: Email verification link से confirm करो
```

### **Issue 3: "CORS error"**
```
❌ Cause: Backend CORS configure नहीं है
✅ Fix: Check करो app.use(cors()) server में है
```

### **Issue 4: "Supabase credentials missing"**
```
❌ Cause: .env file में variables नहीं हैं
✅ Fix: .env file create करो और variables add करो
```

### **Issue 5: Local signup काम करता है, production में नहीं**
```
❌ Cause: Vercel environment variables सेट नहीं हैं
✅ Fix: Vercel dashboard में ENV variables add करो
```

---

## 📞 **Supabase से कैसे Credentials पाएं?**

1. Supabase project खोलो
2. **Settings** → **API** में जाओ
3. तीन चीजें copy करो:
   - **Project URL** (SUPABASE_URL)
   - **Anon Key** (SUPABASE_ANON_KEY)
   - **Service Role Key** (SUPABASE_SERVICE_ROLE_KEY) - SECRET रखो!

---

## 🚀 **Quick Start (30 mins)**

```bash
# 1. Create .env files
# client/.env.local और server/.env create करो

# 2. Install dependencies
cd rentease/server && npm install
cd ../client && npm install

# 3. Start development
Terminal 1: cd server && npm run dev
Terminal 2: cd client && npm run dev

# 4. Test signup at http://localhost:5173/signup
```

---

## ✅ **Success Indicators**

✅ Signup करने के बाद:
- User create हो जाए Supabase में
- Browser URL change हो `/dashboard` पर
- localStorage में user data हो
- Logout काम करे

✅ Login करने के बाद:
- Token मिले API से
- Dashboard accessible हो
- Profile page load हो

---

## 📚 **References**
- Supabase Docs: https://supabase.com/docs
- Vercel Env: https://vercel.com/docs/environment-variables
- CORS Guide: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
