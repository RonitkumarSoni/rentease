import React from 'react';
import { ChevronDown, SortAsc, SortDesc, Clock, Flame } from 'lucide-react';

const SortDropdown = ({ sortBy, setSortBy }) => {
    const options = [
        { label: 'Popularity', value: 'popular', icon: Flame },
        { label: 'Price: Low to High', value: 'price_low', icon: SortAsc },
        { label: 'Price: High to Low', value: 'price_high', icon: SortDesc },
        { label: 'Newest First', value: 'newest', icon: Clock },
    ];

    const activeOption = options.find(o => o.value === sortBy);

    return (
        <div className="relative group">
            <button className="flex items-center gap-2 bg-white dark:bg-slate-900 border-none px-4 py-2 rounded-sm text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-white/80 transition-all shadow-sm">
                <span className="text-slate-400 font-medium">Sort By:</span>
                <span className="text-primary">{activeOption?.label}</span>
                <ChevronDown size={16} />
            </button>
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 border-none rounded-xl shadow-premium invisible group-hover:visible transition-all z-20 p-1.5 overflow-hidden">
                {options.map((opt) => (
                    <button
                        key={opt.value}
                        onClick={() => setSortBy(opt.value)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold rounded-lg transition-all border-none outline-none ${sortBy === opt.value
                                ? 'bg-primary/10 text-primary'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
                            }`}
                    >
                        <opt.icon size={16} className={sortBy === opt.value ? 'text-primary' : 'text-slate-400'} />
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SortDropdown;
