# 🚀 RentEase – Local Item Rental Platform

![React](https://img.shields.io/badge/Frontend-React-blue)
![TailwindCSS](https://img.shields.io/badge/UI-TailwindCSS-38B2AC)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Express](https://img.shields.io/badge/Framework-Express-black)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)

**RentEase** is a full-stack web application that allows users to **rent and lend items within their local community**. Instead of buying expensive products that are only used occasionally, users can rent items from others nearby.

The platform helps people **save money, reduce waste, and utilize resources efficiently** by creating a peer-to-peer rental marketplace.

This project demonstrates modern **full-stack development using React, Tailwind CSS, Node.js, Express.js, and MongoDB**.

---

# 📌 Overview

Many people purchase items that are rarely used, such as cameras, tools, speakers, or projectors. These items often remain unused most of the time.

**RentEase** solves this problem by allowing users to:

* List items they want to rent out
* Search for items available nearby
* Filter and sort rental listings
* Connect with item owners easily

The platform creates a **community-driven rental marketplace**.

---

# ✨ Key Features

## 🔐 Authentication System

* Secure user **Signup and Login**
* Password validation
* Authentication state stored using **LocalStorage**
* Protected routes for authenticated users

## 📦 Item Listings (CRUD Operations)

Users can:

* Create a rental listing
* View available items
* Update item details
* Delete their listings

Example listing:

```
Item: DSLR Camera
Price: ₹500/day
Location: Ahmedabad
Category: Electronics
```

---

## 🔎 Search, Filtering & Sorting

Users can easily find items using:

* Search by item name
* Filter by category
* Filter by location
* Sort by price or newest listings

---

## ⚡ Debounced Search

Search functionality uses **debouncing** to prevent unnecessary API calls while typing, improving performance and user experience.

---

## 📄 Pagination

Pagination is implemented to efficiently handle large datasets.

Example:

```
Page 1 | Page 2 | Page 3
```

MongoDB uses:

* `limit()`
* `skip()`

for backend pagination.

---

## 🎨 Theme Support

* Light Mode / Dark Mode toggle
* Theme preference persistence

---

## 📱 Fully Responsive UI

The application is responsive and optimized for:

* Desktop
* Tablet
* Mobile devices

Built using **Tailwind CSS**.

---

## ⚠ Error Handling

* Backend error responses using try–catch
* Frontend loading states and error messages

---

# 🛠 Technology Stack

## Frontend

* React.js
* Tailwind CSS
* React Router
* React Hooks

  * useState
  * useEffect
  * useRef
  * useContext

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

---

# 📂 Project Structure

```
RentEase/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── App.jsx
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
└── README.md
```

---

# 🌐 Application Pages

* Home Page
* Signup Page
* Login Page
* Dashboard
* Item Listings
* Post Item Page
* Profile / Settings

---

# ⚙ Installation & Setup

## 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/rentease.git
```

---

## 2️⃣ Navigate to Project Directory

```
cd rentease
```

---

## 3️⃣ Backend Setup

```
cd backend
npm install
```

Start the backend server:

```
npm run dev
```

---

## 4️⃣ Frontend Setup

```
cd ../frontend
npm install
```

Run the frontend application:

```
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file in the backend directory and add:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

---

# 🔌 API Endpoints

Example API routes:

```
POST   /api/auth/signup
POST   /api/auth/login

GET    /api/items
POST   /api/items
PUT    /api/items/:id
DELETE /api/items/:id
```

---

# 🚧 Future Improvements

* Online booking system
* Payment integration
* Rating and review system
* Chat between renter and owner
* Map-based location search
* Image upload for items

---

# 🌐 Live Demo

(Add deployed project link here)

Example:

```
https://rentease-demo.vercel.app
```

---

# 👨‍💻 Author

**Project Name:** RentEase
**Purpose:** Full Stack Hackathon Project
**Developer:** Your Name

---

# 📜 License

This project is created for **educational and demonstration purposes**.
