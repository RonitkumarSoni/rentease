import React from 'react';
import Hero from '../../components/home/Hero';
import CategoryCard from '../../components/product/CategoryCard';
import ProductCard from '../../components/product/ProductCard';
import RentEaseHelmet from '../../utils/RentEaseHelmet';
import { SEO_CONFIG } from '../../utils/seoConfig';
import { categories } from '../../data/categories';
import { products } from '../../data/products';
import { testimonials } from '../../data/testimonials';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Truck, CreditCard, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [activeSlide, setActiveSlide] = React.useState(0);
    const [productSlide, setProductSlide] = React.useState(0);
    const [testimonialSlide, setTestimonialSlide] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);
    const itemsPerSlide = 8;
    const productsPerSlide = 4;
    const totalSlides = Math.ceil(categories.length / itemsPerSlide);
    const totalProductSlides = 4; // User requested 4 dots
    const totalTestimonialSlides = Math.ceil(testimonials.length / 3);

    React.useEffect(() => {
        if (isPaused) return;
        const catTimer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % totalSlides);
        }, 4000);

        const prodTimer = setInterval(() => {
            setProductSlide((prev) => (prev + 1) % totalProductSlides);
        }, 5000);

        const testTimer = setInterval(() => {
            setTestimonialSlide((prev) => (prev + 1) % totalTestimonialSlides);
        }, 6000);

        return () => {
            clearInterval(catTimer);
            clearInterval(prodTimer);
            clearInterval(testTimer);
        };
    }, [totalSlides, totalProductSlides, totalTestimonialSlides, isPaused]);

    return (
        <>
          {/* SEO: Set page-specific meta tags */}
          <RentEaseHelmet {...SEO_CONFIG.home} />
          
          <div className="min-h-screen" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <Hero />

            {/* Categories Carousel - Flipkart Style */}
            <section className="bg-white dark:bg-slate-900 py-8 border-b border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden relative group/carousel">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
                    <motion.div
                        className="flex"
                        animate={{ x: `-${activeSlide * 100}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIdx) => (
                            <div key={slideIdx} className="min-w-full flex justify-between gap-4 py-2">
                                {categories.slice(slideIdx * itemsPerSlide, (slideIdx + 1) * itemsPerSlide).map(cat => (
                                    <div key={cat.id} className="flex-1 max-w-[12%]">
                                        <CategoryCard category={cat} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {Array.from({ length: totalSlides }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveSlide(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === idx
                                    ? 'w-8 bg-primary'
                                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Start Browsing - Premium Carousel */}
            <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12 relative overflow-hidden">
                <div className="flex items-center justify-between mb-12">
                    <div className="space-y-1">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight">Start Browsing</h2>
                        <p className="text-slate-500 font-black uppercase text-[10px] tracking-[0.2em] opacity-80">Explore our full range of premium rentals</p>
                    </div>
                    <Link to="/browse" className="flex items-center gap-2 text-primary font-bold hover:underline">
                        Explore All <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: `-${productSlide * 100}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {Array.from({ length: totalProductSlides }).map((_, slideIdx) => (
                            <div key={slideIdx} className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-1 py-4">
                                {products.slice(slideIdx * productsPerSlide, (slideIdx + 1) * productsPerSlide).map((product, idx) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <ProductCard product={product} />
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </motion.div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-3 mt-12">
                        {Array.from({ length: totalProductSlides }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setProductSlide(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${productSlide === idx
                                    ? 'w-10 bg-primary shadow-lg shadow-primary/30'
                                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                                    }`}
                                aria-label={`Go to products slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-slate-100 dark:bg-slate-950 py-24">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">Why Rent with RentEase?</h2>
                        <p className="text-slate-500 font-bold max-w-2xl mx-auto">We provide a secure and efficient ecosystem for renting high-value equipment.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: ShieldCheck, title: 'Verified Owners', desc: 'Trust is our priority. Every owner is Aadhaar verified.' },
                            { icon: Zap, title: 'Instant Booking', desc: 'No more waiting. Book your gear with a single click.' },
                            { icon: Truck, title: 'Doorstep Delivery', desc: 'Get your tech delivered right to your home/office.' },
                            { icon: CreditCard, title: 'Secure Payment', desc: 'Secure escrow payments until the item is returned.' }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center"
                            >
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-lg font-black text-slate-800 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-sm text-slate-500 font-medium">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Carousel */}
            <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12 relative overflow-hidden">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">What Our Users Say</h2>
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Thousands of happy customers across India</p>
                </div>

                <div className="relative group/testimonials">
                    <motion.div
                        className="flex"
                        animate={{ x: `-${testimonialSlide * 100}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {Array.from({ length: totalTestimonialSlides }).map((_, slideIdx) => (
                            <div key={slideIdx} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-1 py-4">
                                {testimonials.slice(slideIdx * 3, (slideIdx + 1) * 3).map(item => (
                                    <div key={item.id} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 relative">
                                        <div className="flex items-center gap-1 text-secondary mb-4">
                                            {[...Array(item.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                        </div>
                                        <p className="text-slate-700 dark:text-slate-300 italic font-medium mb-8">"{item.content}"</p>
                                        <div className="flex items-center gap-4">
                                            <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border-2 border-primary" />
                                            <div>
                                                <h4 className="font-black text-slate-900 dark:text-white underline decoration-secondary decoration-2 underline-offset-4">{item.name}</h4>
                                                <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-12">
                        {Array.from({ length: totalTestimonialSlides }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setTestimonialSlide(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${testimonialSlide === idx
                                    ? 'w-8 bg-primary'
                                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                                    }`}
                                aria-label={`Go to testimonial slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="container mx-auto px-6 lg:px-12 mb-24">
                <div className="glass-card rounded-[2.5rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl border border-white/10">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8 text-slate-900 dark:text-white leading-tight">Ready to rent your favorite gear?</h2>
                        <p className="text-xl font-semibold text-slate-600 dark:text-slate-300 mb-12 opacity-90">Join RentEase today and explore the widest range of high-end equipment at your doorstep.</p>
                        <Link
                            to="/signup"
                            className="inline-block bg-primary text-white px-12 py-5 rounded-full font-black text-xl hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 transform hover:scale-105 active:scale-95"
                        >
                            Get Started Now
                        </Link>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] -ml-40 -mb-40"></div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Home;
