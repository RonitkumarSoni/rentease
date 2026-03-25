import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const CategoryCard = ({ category }) => {
    const IconComponent = Icons[category.icon] || Icons.HelpCircle;

    return (
        <Link to={`/browse?category=${category.name}`}>
            <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center gap-3 p-1 group"
            >
                <div className="p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-800/50 shadow-sm ring-1 ring-slate-200/50 dark:ring-white/10 group-hover:shadow-premium group-hover:ring-primary/30 transition-all border border-white/20 backdrop-blur-md flex items-center justify-center transform group-hover:scale-105">
                    <IconComponent size={24} className="text-primary dark:text-blue-400 drop-shadow-sm" strokeWidth={2.5} />
                </div>
                <span className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest group-hover:text-primary transition-colors text-center">
                    {category.name}
                </span>
            </motion.div>
        </Link>
    );
};

export default CategoryCard;
