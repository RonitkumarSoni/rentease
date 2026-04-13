import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import { supabase } from '../config/supabase.js';
import {
  registerUserService,
  authUserService,
  syncExternalUserService,
  forgotPasswordService,
  resetPasswordService
} from '../services/authService.js';

// @desc    Register a new user (Sync with Supabase)
// @route   POST /api/auth/signup
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  try {
    console.log('Signup request received:', req.body.email);
    const result = await registerUserService(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error('Signup controller error:', error);
    res.status(500).json({ 
      message: error.message, 
      stack: error.stack,
      details: 'Error caught in controller try-catch'
    });
  }
});

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
export const authUser = asyncHandler(async (req, res) => {
  const result = await authUserService(req.body);
  res.json(result);
});

// @desc    Sync external auth user (Google/Social)
// @route   POST /api/auth/sync
// @access  Public
export const syncUser = asyncHandler(async (req, res) => {
  const result = await syncExternalUserService(req.body);
  res.status(200).json(result);
});

// @desc    Logout user / clear cookie
// @route   POST /api/auth/logout
// @access  Public
export const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
});

// @desc    Login with OTP/Magic Link
// @route   POST /api/auth/otp
// @access  Public
export const signInWithOtp = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
  console.log(`Sending Magic Link. Redirect URL: ${clientUrl}`);

  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: clientUrl,
    },
  });

  if (error) {
    res.status(400);
    throw new Error(error.message);
  }

  res.status(200).json({ message: 'OTP/Magic link sent to email', data });
});

// @desc    Forgot Password - Send OTP to phone
// @route   POST /api/auth/forgot-password
// @access  Public
export const forgotPassword = asyncHandler(async (req, res) => {
  const result = await forgotPasswordService(req.body);
  res.status(200).json(result);
});

// @desc    Reset Password using phone OTP
// @route   POST /api/auth/reset-password
// @access  Public
export const resetPassword = asyncHandler(async (req, res) => {
  const result = await resetPasswordService(req.body);
  res.status(200).json(result);
});

// @desc    Get user profile
// @route   GET /api/auth/me
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findOne({ supabaseId: req.user.supabaseId });

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
