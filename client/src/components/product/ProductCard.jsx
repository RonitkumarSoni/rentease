import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useWishlist } from '../../context/WishlistContext';

const ProductCard = ({ product }) => {
    const { toggleWishlist, isInWishlist } = useWishlist();
    const active = isInWishlist(product.id);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/20 dark:border-white/5 rounded-2xl overflow-hidden hover:shadow-premium transition-all duration-500 w-full max-w-[280px] mx-auto h-[350px] flex flex-col"
        >
            {/* Wishlist Button */}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(product);
                }}
                className={`absolute top-4 right-4 z-10 p-2.5 rounded-full glass border transition-all ${active ? 'text-secondary border-secondary/50' : 'text-slate-400 border-white/20'
                    }`}
            >
                <Heart size={20} fill={active ? 'currentColor' : 'none'} />
            </button>

            <Link to={`/product/${product.id}`} className="block">
                {/* Image Section */}
                <div className="relative h-40 overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {product.availability === 'Reserved' && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center">
                            <span className="bg-red-500 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">Reserved</span>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[9px] font-black uppercase tracking-widest text-primary px-2 py-0.5 bg-primary/10 rounded-md">{product.category}</span>
                        <div className="flex items-center gap-1 bg-green-500 text-white px-1.5 py-0.5 rounded-md text-[9px] font-black shadow-sm">
                            {product.rating} <Star size={8} fill="currentColor" />
                        </div>
                    </div>

                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate mb-1 group-hover:text-primary transition-colors tracking-tight">
                        {product.title}
                    </h3>

                    <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-[10px] mb-2 font-semibold">
                        <MapPin size={10} className="text-primary" />
                        <span className="truncate">{product.location}</span>
                    </div>

                    <div className="mt-auto flex items-end justify-between border-t border-slate-100 dark:border-slate-800 pt-3">
                        <div>
                            <span className="text-xl font-black text-slate-900 dark:text-white">₹{product.price}</span>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight ml-1">/ {product.priceUnit}</span>
                        </div>
                        <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-primary dark:hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95">
                            Rent
                        </button>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProductCard;
