import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import RentEaseHelmet from '../../utils/RentEaseHelmet';
import { useAuth } from '../../context/AuthContext';
import { Eye, EyeOff, Loader2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

import toast from 'react-hot-toast';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const Login = () => {
    const { login, signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        const result = await login(data.email, data.password);
        
        if (result.success) {
            toast.success('Signed in successfully!');
            navigate('/');
        } else {
            toast.error(result.message);
        }
        setIsLoading(false);
    };

    return (
        <>
        <RentEaseHelmet 
            title="Login | RentEase - Sign In to Your Account"
            description="Sign in to your RentEase account to access bookings, listings, and manage your rentals securely."
            keywords="login, sign in, RentEase account, rental account"
            url="https://rent-ease-web.vercel.app/login"
        />
        <div className="min-h-screen flex bg-white dark:bg-slate-950">
            {/* Left side: Form */}
            <div className="flex-1 flex flex-col justify-center px-8 lg:px-24">
                <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-primary mb-12 font-black uppercase text-xs tracking-widest transition-colors">
                    <ArrowLeft size={16} /> Back to Marketplace
                </Link>

                <div className="max-w-md w-full mx-auto">
                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Welcome Back! <span className="text-primary tracking-normal">👋</span></h1>
                    <p className="text-slate-500 dark:text-slate-400 font-semibold mb-10">Access your rentals, listings and wishlist.</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest px-1">Email Address</label>
                            <input 
                                {...register('email')}
                                className={`w-full bg-slate-50 dark:bg-slate-900 border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} rounded-sm px-4 py-3 text-sm font-bold outline-none focus:ring-2 ring-primary/20 transition-all`}
                                placeholder="john@example.com"
                            />
                            {errors.email && <p className="text-red-500 text-[10px] font-black uppercase tracking-tighter">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between px-1">
                                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Password</label>
                                <Link to="/forgot-password" size="sm" className="text-[10px] font-black text-primary uppercase hover:underline">Forgot?</Link>
                            </div>
                            <div className="relative">
                                <input 
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('password')}
                                    className={`w-full bg-slate-50 dark:bg-slate-900 border ${errors.password ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} rounded-sm px-4 py-3 text-sm font-bold outline-none focus:ring-2 ring-primary/20 transition-all`}
                                    placeholder="••••••••"
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.password && <p className="text-red-500 text-[10px] font-black uppercase tracking-tighter">{errors.password.message}</p>}
                        </div>

                        <div className="flex items-center gap-2 pt-2">
                            <input type="checkbox" className="w-4 h-4 accent-primary" id="remember" />
                            <label htmlFor="remember" className="text-xs font-bold text-slate-500">Remember me on this device</label>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full bg-primary text-white py-4 rounded-sm font-black text-lg uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all flex items-center justify-center gap-2"
                        >
                            {isLoading ? <Loader2 className="animate-spin" size={24} /> : 'LOG IN NOW'}
                        </button>
                    </form>

                    <div className="mt-8 relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-100 dark:border-slate-800"></div>
                        </div>
                        <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest">
                            <span className="bg-white dark:bg-slate-950 px-4 text-slate-400 italic">or continue with</span>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button 
                            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white py-4 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-sm"
                            onClick={signInWithGoogle}
                        >
                            <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" className="w-5 h-5" />
                             Login with Google
                        </button>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-sm font-bold text-slate-500">
                            New to RentEase? <Link to="/signup" className="text-primary hover:underline underline-offset-4 decoration-2">Create an Account</Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side: Visual (Desktop Only) */}
            <div className="hidden lg:flex flex-1 bg-primary items-center justify-center relative overflow-hidden">
                <div className="relative z-10 text-center text-white px-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl font-black mb-6 tracking-tighter italic">Why buy when you can rent?</h2>
                        <p className="text-lg font-medium opacity-80 leading-relaxed">
                            Access the latest technology at a fraction of the cost. Join 50,000+ users across India.
                        </p>
                    </motion.div>
                </div>
                {/* Decoration blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -ml-48 -mb-48"></div>
            </div>
        </div>
        </>
    );
};

export default Login;
