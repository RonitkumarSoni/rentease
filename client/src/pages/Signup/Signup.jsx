import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import RentEaseHelmet from '../../utils/RentEaseHelmet';
import { useAuth } from '../../context/AuthContext';
import { Eye, EyeOff, Loader2, ArrowLeft, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

import toast from 'react-hot-toast';

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const Signup = () => {
    const { signup, signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signupSchema)
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        const result = await signup({
            name: data.name,
            email: data.email,
            password: data.password
        });
        
        if (result.success) {
            toast.success('Account created successfully! Welcome to RentEase.');
            navigate('/');
        } else {
            // Show user-friendly messages for common Supabase errors
            let message = result.message;
            if (message?.toLowerCase().includes('rate limit') || message?.toLowerCase().includes('email rate')) {
                message = 'Too many signup attempts. Please wait a few minutes before trying again.';
            } else if (message?.toLowerCase().includes('already registered') || message?.toLowerCase().includes('user already')) {
                message = 'This email is already registered. Please login instead.';
            }
            toast.error(message);
        }
        setIsLoading(false);
    };

    return (
        <>
        <RentEaseHelmet 
            title="Sign Up | RentEase - Create Your Free Account"
            description="Join RentEase today! Create your free account in minutes. No credit card required. Start renting and selling items instantly."
            keywords="sign up, register, create account, join RentEase, free account registration"
            url="https://rent-ease-gold.vercel.app/signup"
        />
        <div className="min-h-screen flex bg-white dark:bg-slate-950">
             {/* Left side: Visual (Desktop Only) */}
             <div className="hidden lg:flex flex-1 bg-secondary items-center justify-center relative overflow-hidden">
                <div className="relative z-10 text-center text-white px-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl font-black mb-6 tracking-tighter italic">Earn money by renting your gear!</h2>
                        <p className="text-lg font-medium opacity-80 leading-relaxed">
                            List your unused electronics and tools. Start earning passive income today through our verified marketplace.
                        </p>
                    </motion.div>
                </div>
                {/* Decoration blobs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -ml-48 -mt-48"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mb-48"></div>
            </div>

            {/* Right side: Form */}
            <div className="flex-1 flex flex-col justify-center px-8 lg:px-24">
                <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-primary mb-12 font-black uppercase text-xs tracking-widest transition-colors">
                    <ArrowLeft size={16} /> Back to Marketplace
                </Link>

                <div className="max-w-md w-full mx-auto">
                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Join RentEase <span className="text-secondary tracking-normal">🚀</span></h1>
                    <p className="text-slate-500 dark:text-slate-400 font-semibold mb-10">Start your journey with India's most trusted rental platform.</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-black uppercase text-slate-400 tracking-widest px-1">Full Name</label>
                            <input 
                                {...register('name')}
                                className={`w-full bg-slate-50 dark:bg-slate-900 border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} rounded-sm px-4 py-3 text-sm font-bold outline-none focus:ring-2 ring-secondary/20 transition-all`}
                                placeholder="John Doe"
                            />
                            {errors.name && <p className="text-red-500 text-[10px] font-black uppercase tracking-tighter">{errors.name.message}</p>}
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-black uppercase text-slate-400 tracking-widest px-1">Email Address</label>
                            <input 
                                {...register('email')}
                                className={`w-full bg-slate-50 dark:bg-slate-900 border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} rounded-sm px-4 py-3 text-sm font-bold outline-none focus:ring-2 ring-secondary/20 transition-all`}
                                placeholder="john@example.com"
                            />
                            {errors.email && <p className="text-red-500 text-[10px] font-black uppercase tracking-tighter">{errors.email.message}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-black uppercase text-slate-400 tracking-widest px-1">Password</label>
                                <input 
                                    type="password"
                                    {...register('password')}
                                    className={`w-full bg-slate-50 dark:bg-slate-900 border ${errors.password ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} rounded-sm px-4 py-3 text-sm font-bold outline-none focus:ring-2 ring-secondary/20 transition-all`}
                                    placeholder="••••••••"
                                />
                                {errors.password && <p className="text-red-500 text-[10px] font-black uppercase tracking-tighter">{errors.password.message}</p>}
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-black uppercase text-slate-400 tracking-widest px-1">Confirm</label>
                                <input 
                                    type="password"
                                    {...register('confirmPassword')}
                                    className={`w-full bg-slate-50 dark:bg-slate-900 border ${errors.confirmPassword ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} rounded-sm px-4 py-3 text-sm font-bold outline-none focus:ring-2 ring-secondary/20 transition-all`}
                                    placeholder="••••••••"
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-[10px] font-black uppercase tracking-tighter">{errors.confirmPassword.message}</p>}
                            </div>
                        </div>

                        <div className="flex items-start gap-2 pt-2">
                            <input type="checkbox" required className="mt-1 w-4 h-4 accent-secondary" id="terms" />
                            <label htmlFor="terms" className="text-[10px] font-bold text-slate-500 leading-normal uppercase tracking-tighter">I agree to RentEase's <span className="text-primary italic cursor-pointer">Terms for Rentals</span> and <span className="text-primary italic cursor-pointer">Anti-damage Policy.</span></label>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full bg-secondary text-white py-4 rounded-sm font-black text-lg uppercase tracking-widest shadow-xl shadow-secondary/20 hover:bg-[#e65c1a] transition-all flex items-center justify-center gap-2"
                        >
                            {isLoading ? <Loader2 className="animate-spin" size={24} /> : 'JOIN NOW'}
                        </button>
                    </form>

                    <div className="mt-8 relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-100 dark:border-slate-800"></div>
                        </div>
                        <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest">
                            <span className="bg-white dark:bg-slate-950 px-4 text-slate-400 italic">or join with</span>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button 
                            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white py-4 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-sm"
                            onClick={signInWithGoogle}
                        >
                            <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" className="w-5 h-5" />
                             Sign up with Google
                        </button>
                    </div>

                    <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-900 rounded-sm border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                        <ShieldCheck className="text-primary" size={20} />
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Your data is secured with bank-grade encryption.</p>
                    </div>

                    <div className="mt-8 text-center text-sm font-bold text-slate-500">
                        Already a member? <Link to="/login" className="text-secondary hover:underline underline-offset-4 decoration-2">Sign in here</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Signup;
