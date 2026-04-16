import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { notFound, errorHandler } from './src/middlewares/common.js';

// Routes imports
import authRoutes from './src/routes/authRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import rentalRoutes from './src/routes/rentalRoutes.js';
import bookingRoutes from './src/routes/bookingRoutes.js';
import paymentRoutes from './src/routes/paymentRoutes.js';
import messageRoutes from './src/routes/messageRoutes.js';
import reviewRoutes from './src/routes/reviewRoutes.js';
import wishlistRoutes from './src/routes/wishlistRoutes.js';

const app = express();
const allowedOrigins = [
    'http://localhost:5173',
    'https://rent-ease-web.vercel.app',
    'https://rent-ease-ronit-kumar-sonis-projects.vercel.app',
    'https://rent-ease-ronitkumarsoni-ronit-kumar-sonis-projects.vercel.app',
    'https://rentease-lemon.vercel.app',
    'https://rentease-ronit-kumar-sonis-projects.vercel.app',
];

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser
app.use(cookieParser());

// Enable CORS for local development and known production frontends.
app.use(cors({
    origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
}));

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount routers
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/rentals', rentalRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/wishlist', wishlistRoutes);

app.get('/', (req, res) => {
    res.send('RentEase API is running...');
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

export default app;
