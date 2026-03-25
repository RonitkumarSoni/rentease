import React from 'react';
import { X, SlidersHorizontal, MapPin, IndianRupee, Star } from 'lucide-react';
import { categories } from '../../data/categories';

const FilterSidebar = ({ filters, setFilters, onClose }) => {
    const handleCategoryChange = (catName) => {
        const newCats = filters.categories.includes(catName)
            ? filters.categories.filter(c => c !== catName)
            : [...filters.categories, catName];
        setFilters({ ...filters, categories: newCats });
    };

    return (
        <aside className="w-full h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <SlidersHorizontal size={18} className="text-primary" />
                    <span className="font-black uppercase tracking-widest text-sm dark:text-white">Filters</span>
                </div>
                {onClose && (
                    <button onClick={onClose} className="lg:hidden p-1">
                        <X size={20} />
                    </button>
                )}
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
                {/* Categories */}
                <div>
                    <h3 className="text-xs font-black uppercase text-slate-500 mb-4 tracking-tighter">Categories</h3>
                    <div className="space-y-2">
                        {categories.map(cat => (
                            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                    type="checkbox" 
                                    className="hidden"
                                    checked={filters.categories.includes(cat.name)}
                                    onChange={() => handleCategoryChange(cat.name)}
                                />
                                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                                    filters.categories.includes(cat.name) 
                                        ? 'bg-primary border-primary text-white' 
                                        : 'border-slate-300 dark:border-slate-700 group-hover:border-primary'
                                }`}>
                                    {filters.categories.includes(cat.name) && <span className="text-[10px] font-black italic">✓</span>}
                                </div>
                                <span className={`text-sm font-bold ${
                                    filters.categories.includes(cat.name) ? 'text-primary' : 'text-slate-600 dark:text-slate-400'
                                } group-hover:text-primary transition-colors`}>
                                    {cat.name}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Price Range */}
                <div>
                    <h3 className="text-sm font-black uppercase text-slate-800 dark:text-white mb-6 tracking-tight">Price</h3>
                    
                    <div className="px-2 space-y-8">
                        {/* Custom Dual Range Slider */}
                        <div className="relative h-1 bg-slate-200 dark:bg-slate-800 rounded-full">
                            {/* Active Track */}
                            <div 
                                className="absolute h-full bg-primary rounded-full"
                                style={{ 
                                    left: `${(filters.minPrice || 0) / 30000 * 100}%`,
                                    right: `${100 - (filters.maxPrice || 30000) / 30000 * 100}%`
                                }}
                            />
                            
                            {/* Handles */}
                            <input 
                                type="range" 
                                min="0" 
                                max="30000" 
                                step="500"
                                value={filters.minPrice || 0}
                                onChange={(e) => {
                                    const val = Math.min(Number(e.target.value), (filters.maxPrice || 30000) - 500);
                                    setFilters({ ...filters, minPrice: val });
                                }}
                                className="absolute w-full -top-2 appearance-none bg-transparent pointer-events-none custom-range-input"
                            />
                            <input 
                                type="range" 
                                min="0" 
                                max="30000" 
                                step="500"
                                value={filters.maxPrice || 30000}
                                onChange={(e) => {
                                    const val = Math.max(Number(e.target.value), (filters.minPrice || 0) + 500);
                                    setFilters({ ...filters, maxPrice: val });
                                }}
                                className="absolute w-full -top-2 appearance-none bg-transparent pointer-events-none custom-range-input"
                            />

                            {/* Tick Marks */}
                            <div className="absolute -bottom-4 w-full flex justify-between px-0.5">
                                {[0, 1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                                ))}
                            </div>
                        </div>

                        {/* Dropdowns */}
                        <div className="flex items-center gap-3 pt-2">
                            <div className="flex-1">
                                <select 
                                    value={filters.minPrice || ''} 
                                    onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border-none rounded-md text-sm font-bold text-slate-700 dark:text-slate-300 outline-none focus:ring-2 ring-primary/20 transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat shadow-sm"
                                >
                                    <option value="">Min</option>
                                    {[0, 500, 1000, 2000, 5000, 10000, 20000].map(v => (
                                        <option key={v} value={v}>₹{v}</option>
                                    ))}
                                </select>
                            </div>
                            <span className="text-slate-400 font-bold text-xs italic">to</span>
                            <div className="flex-1">
                                <select 
                                    value={filters.maxPrice || ''} 
                                    onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border-none rounded-md text-sm font-bold text-slate-700 dark:text-slate-300 outline-none focus:ring-2 ring-primary/20 transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat shadow-sm"
                                >
                                    <option value="">₹30000+</option>
                                    {[1000, 2000, 5000, 10000, 20000, 30000].map(v => (
                                        <option key={v} value={v}>₹{v === 30000 ? '30000+' : v}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ratings */}
                <div>
                    <h3 className="text-xs font-black uppercase text-slate-500 mb-4 tracking-tighter">Customer Ratings</h3>
                    <div className="space-y-2">
                        {[4, 3, 2].map(rating => (
                            <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                    type="radio" 
                                    name="rating"
                                    className="hidden"
                                    checked={filters.rating === rating}
                                    onChange={() => setFilters({ ...filters, rating })}
                                />
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                                    filters.rating === rating 
                                        ? 'bg-primary border-primary' 
                                        : 'border-slate-300 dark:border-slate-700'
                                }`}>
                                    {filters.rating === rating && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                                </div>
                                <span className="text-sm font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1">
                                    {rating} <Star size={12} fill="currentColor" className="text-primary" /> & above
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Availability */}
                <div>
                    <h3 className="text-xs font-black uppercase text-slate-500 mb-4 tracking-tighter">Availability</h3>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input 
                            type="checkbox" 
                            className="hidden"
                            checked={filters.onlyAvailable}
                            onChange={() => setFilters({ ...filters, onlyAvailable: !filters.onlyAvailable })}
                        />
                        <div className={`w-10 h-5 rounded-full relative transition-colors ${
                            filters.onlyAvailable ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'
                        }`}>
                            <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${
                                filters.onlyAvailable ? 'left-6' : 'left-1'
                            }`}></div>
                        </div>
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-400">Available Now</span>
                    </label>
                </div>
            </div>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <button 
                    onClick={() => setFilters({ categories: [], minPrice: '', maxPrice: '', rating: null, onlyAvailable: false })}
                    className="w-full py-2 text-primary font-black uppercase tracking-wider text-xs hover:bg-primary/5 rounded-sm transition-colors"
                >
                    Clear All Filters
                </button>
            </div>
        </aside>
    );
};

export default FilterSidebar;
