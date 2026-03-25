import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        badge: "Premium Rental Marketplace",
        title: "Don't Buy it, Just Rent it.",
        highlight: "Just Rent it.",
        desc: "Access high-end gear without the heavy price tag. From professional cameras to gaming consoles, we've got you covered.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
        stats: { users: "5k+", listings: "10k+", support: "24/7" }
    },
    {
        id: 2,
        badge: "Gaming & Entertainment",
        title: "Level Up Your Weekend",
        highlight: "Weekend",
        desc: "Rent the latest PS5, VR headsets, and high-end gaming laptops. Experience next-gen gaming without the permanent investment.",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=1200",
        stats: { users: "2k+", listings: "500+", support: "Instant" }
    },
    {
        id: 3,
        badge: "Professional Photography",
        title: "Capture Every Detail",
        highlight: "Detail",
        desc: "Professional DSLR cameras, lenses, and lighting equipment for your next shoot. Get the gear the pros use, on your terms.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200",
        stats: { users: "1k+", listings: "1.2k+", support: "Expert" }
    },
    {
        id: 4,
        badge: "Adventure & Outdoors",
        title: "Conquer the Great Outdoors",
        highlight: "Outdoors",
        desc: "High-quality camping gear, drones, and adventure cameras. Ready for your next journey, whenever you are.",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1200",
        stats: { users: "3k+", listings: "800+", support: "Global" }
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentSlide];

    return (
        <section className="relative bg-white dark:bg-slate-900 overflow-hidden border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 py-12 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left z-10 min-h-[400px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ring-1 ring-primary/20">
                                    {slide.badge}
                                </span>
                                <h1 className="text-4xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-[1] tracking-tight">
                                    {slide.title.split(slide.highlight)[0]}
                                    <span className="text-primary italic">{slide.highlight}</span>
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                    {slide.desc}
                                </p>
                                
                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                    <Link 
                                        to="/browse" 
                                        className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-sm font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all flex items-center justify-center gap-2 group"
                                    >
                                        Start Browsing <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link 
                                        to="/signup" 
                                        className="w-full sm:w-auto bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 px-10 py-4 rounded-sm font-bold text-lg hover:border-primary dark:hover:border-primary transition-all flex items-center justify-center gap-2"
                                    >
                                        List Your Gear <ChevronRight size={20} />
                                    </Link>
                                </div>

                                {/* Stats Section */}
                                <div className="mt-16 flex items-center justify-center lg:justify-start gap-10 border-t border-slate-100 dark:border-slate-800 pt-10">
                                    <div>
                                        <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>{slide.stats.users}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Active Users</p>
                                    </div>
                                    <div className="w-px h-10 bg-slate-200 dark:bg-slate-700"></div>
                                    <div>
                                        <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>{slide.stats.listings}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Listings</p>
                                    </div>
                                    <div className="w-px h-10 bg-slate-200 dark:bg-slate-700"></div>
                                    <div>
                                        <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>{slide.stats.support}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Support</p>
                                    </div>
                                </div>
                        </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Visual Section */}
                    <div className="flex-1 relative w-full lg:w-auto min-h-[400px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 1.1, rotate: 2 }}
                                transition={{ duration: 0.7, ease: "anticipate" }}
                                className="relative z-10 w-full"
                            >
                                <div className="relative bg-gradient-to-tr from-primary/10 to-secondary/10 p-4 lg:p-8 rounded-[3rem] overflow-hidden">
                                    <img 
                                        src={slide.image} 
                                        alt={slide.title} 
                                        className="w-full aspect-video lg:aspect-square object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 hover:scale-105"
                                    />
                                    {/* Floating Card Mockup */}
                                    <div className="absolute bottom-10 left-10 glass-card p-4 rounded-xl shadow-2xl border border-white/20 hidden md:block backdrop-blur-md">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-green-500/20">✓</div>
                                            <div>
                                                <p className="text-xs font-black dark:text-white uppercase tracking-tighter">Verified Owner</p>
                                                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold italic">Top Rated Partner</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        
                        {/* Background Decor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                    </div>
                </div>

                {/* Carousel Pagination Dots */}
                <div className="flex justify-center gap-4 mt-8 lg:mt-0">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`group relative h-4 w-4 flex items-center justify-center`}
                            aria-label={`Go to slide ${idx + 1}`}
                        >
                            <div className={`h-2 rounded-full transition-all duration-500 ${currentSlide === idx 
                                ? 'w-8 bg-primary shadow-lg shadow-primary/30' 
                                : 'w-2 bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-400 group-hover:w-4'}`} 
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
