import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    Search, ShoppingCart, User, Heart, Menu, X, Sun, Moon, 
    LogOut, ChevronDown, Bell, Gift, CreditCard, Package, Zap, MapPin, Plus, Camera, Navigation
} from 'lucide-react';

import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { useLocation } from '../../context/LocationContext';
import { useNotifications } from '../../context/NotificationContext';
import ImageSearchModal from './ImageSearchModal';

import MapLocationPicker from './MapLocationPicker';


const Navbar = () => {
    const { user, logout } = useAuth();
    const { isDarkMode, toggleTheme } = useTheme();
    const { wishlist } = useWishlist();
    const { cartCount } = useCart();
    const { unreadCount, clearUnread } = useNotifications();
    const { userCity, detectLocation, locationLoading, setCity, availableCities } = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);
    const [isMapPickerOpen, setIsMapPickerOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isImageSearchOpen, setIsImageSearchOpen] = useState(false);
    const searchRef = useRef(null);
    const userMenuRef = useRef(null);
    const locationMenuRef = useRef(null);
    const navigate = useNavigate();



    // Restore search suggestions with product images
    useEffect(() => {
        if (searchQuery.trim().length < 1) {
            setSuggestions([]);
            setShowSuggestions(false);
            return;
        }
        // Dynamic import to avoid circular dependency
        import('../../data/products').then(({ products }) => {
            const q = searchQuery.toLowerCase();
            const filtered = products.filter(p =>
                p.title.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q)
            ).slice(0, 6);
            setSuggestions(filtered);
            setShowSuggestions(filtered.length > 0);
        });
    }, [searchQuery]);

    // Close suggestions on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close user menu on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    const handleLogout = () => {
        logout();
        setIsUserMenuOpen(false);
        navigate('/login');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/browse?search=${searchQuery}`);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (productId) => {
        navigate(`/product/${productId}`);
        setSearchQuery('');
        setShowSuggestions(false);
    };

    return (
        <>
        <nav className="sticky top-0 z-50 bg-[#2874f0] dark:bg-slate-900 text-white transition-all duration-300 border-none shadow-none">

            {/* ... Logo & Search ... */}
            <div className="max-w-[1280px] mx-auto px-4 lg:px-6 h-16 flex items-center gap-4 md:gap-8">
                {/* Logo */}
                <Link to="/" className="flex flex-col items-center shrink-0 group transition-transform hover:scale-105">
                    <span className="text-xl sm:text-2xl font-black italic tracking-tight leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                        Rent<span className="text-[#f57224]">Ease</span>
                    </span>
                    <span className="text-[10px] italic font-bold text-white group-hover:text-[#f57224] transition-colors -mt-0.5 tracking-widest">
                        Plus <span className="text-[#f57224]">✦</span>
                    </span>
                </Link>

                {/* Search Bar — wider, more breathing room */}
                <div className="flex-1 max-w-[760px] relative" ref={searchRef}>
                    <form
                        onSubmit={handleSearch}
                        className="bg-white dark:bg-slate-800 rounded-sm flex items-center h-11 shadow-sm focus-within:shadow-md transition-all duration-300 group overflow-hidden"
                    >
                        <div className="pl-5 pr-3 text-slate-400 group-focus-within:text-[#2874f0] transition-colors shrink-0">
                            <Search size={16} strokeWidth={2.5} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for products, brands and more"
                            className="flex-1 py-1 px-1 text-sm text-slate-800 dark:text-slate-100 !outline-none !ring-0 !border-0 bg-transparent placeholder:text-slate-400 font-medium min-w-0"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                        />
                        {/* Camera / Image Search Icon */}
                        <button
                            type="button"
                            onClick={() => setIsImageSearchOpen(true)}
                            className="h-full px-4 text-slate-400 hover:text-[#2874f0] transition-colors border-l border-slate-100 dark:border-slate-700 flex items-center shrink-0"
                            title="Search by image"
                        >
                            <Camera size={17} />
                        </button>
                        <button
                            type="submit"
                            className="h-full px-7 bg-white dark:bg-slate-800 text-[#2874f0] font-black text-xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-all border-none uppercase tracking-wider shrink-0"
                        >
                            Search
                        </button>
                    </form>

                    {/* Modern Search Suggestions */}
                    {showSuggestions && suggestions.length > 0 && (
                        <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border-none overflow-hidden z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="p-1 max-h-[400px] overflow-y-auto">
                                {suggestions.map(product => (
                                    <button
                                        key={product.id}
                                        onClick={() => handleSuggestionClick(product.id)}
                                        className="w-full flex items-center gap-4 px-4 py-2 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 rounded-lg transition-all group/item border-none outline-none ring-0 mb-1 last:mb-0"
                                    >
                                        <div className="w-10 h-10 rounded-md overflow-hidden bg-slate-100 shrink-0">
                                            <img src={product.images[0]} alt="" className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="flex-1 text-left">
                                            <p className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover/item:text-[#2874f0] transition-colors">{product.title}</p>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{product.category}</p>
                                        </div>
                                        <div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                                            <Search size={12} className="text-[#2874f0]" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Actions Row */}
                <div className="hidden lg:flex items-center gap-6 font-bold whitespace-nowrap text-[15px]">
                    {/* Blinkit-style Location Widget with Dropdown */}
                    {user && (
                        <div className="hidden xl:block relative" ref={locationMenuRef}>
                            <button
                                onClick={() => setIsLocationMenuOpen(!isLocationMenuOpen)}
                                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors border-none outline-none shrink-0"
                            >
                                <MapPin size={14} className="text-[#f57224] shrink-0" />
                                <div className="text-left">
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/60 leading-none">Deliver to</p>
                                    <p className="text-xs font-black leading-tight">
                                        {locationLoading ? 'Detecting...' : (userCity || 'Set location')}
                                        <ChevronDown size={10} className={`inline ml-0.5 transition-transform ${isLocationMenuOpen ? 'rotate-180' : ''}`} />
                                    </p>
                                </div>
                            </button>

                            {/* Location Dropdown */}
                            {isLocationMenuOpen && (
                                <div className="absolute top-full left-0 mt-2 w-60 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden z-[100] animate-in fade-in slide-in-from-top-2">
                                    {/* Auto detect */}
                                    <button
                                        onClick={() => { detectLocation(); setIsLocationMenuOpen(false); }}
                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-slate-700 dark:text-slate-200 border-none transition-colors border-b border-slate-100 dark:border-slate-800"
                                    >
                                        <Navigation size={15} className="text-[#2874f0] shrink-0" />
                                        <div className="text-left">
                                            <p className="text-xs font-black text-slate-800 dark:text-white">Detect My Location</p>
                                            <p className="text-[10px] text-slate-400">Use GPS to find you</p>
                                        </div>
                                    </button>

                                    {/* Choose on Map */}
                                    <button
                                        onClick={() => { setIsLocationMenuOpen(false); setIsMapPickerOpen(true); }}
                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-orange-50 dark:hover:bg-orange-900/20 text-slate-700 dark:text-slate-200 border-none transition-colors border-b border-slate-100 dark:border-slate-800"
                                    >
                                        <MapPin size={15} className="text-[#f57224] shrink-0" />
                                        <div className="text-left">
                                            <p className="text-xs font-black text-slate-800 dark:text-white">Choose on Map</p>
                                            <p className="text-[10px] text-slate-400">Pick location manually</p>
                                        </div>
                                    </button>


                                </div>
                            )}
                        </div>
                    )}

                    {user ? (

                        <div className="relative" ref={userMenuRef}>
                            <button 
                                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                className="flex items-center gap-1 hover:text-white group bg-white/10 px-3 py-1.5 rounded-sm transition-colors border-none outline-none"
                            >
                                <User size={18} />
                                <span className="max-w-[100px] truncate">{user.name}</span>
                                <ChevronDown size={14} className={`transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Flipkart-style Dropdown Menu */}
                            {isUserMenuOpen && (
                                <div className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-sm shadow-[0_2px_16px_0_rgba(0,0,0,0.2)] border-none py-2 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                                    <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                                        <p className="text-base font-bold text-slate-800 dark:text-white mb-0.5">Your Account</p>
                                    </div>
                                    
                                    <div className="py-1">
                                        <Link to="/profile" onClick={() => setIsUserMenuOpen(false)} className="flex items-center gap-4 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#212121] dark:text-slate-200 group transition-colors">
                                            <User size={20} className="text-[#6b7280] group-hover:text-[#2874f0] transition-colors" />
                                            <span className="text-sm font-medium">My Profile</span>
                                        </Link>
                                        <Link to="/dashboard/bookings" onClick={() => setIsUserMenuOpen(false)} className="flex items-center gap-4 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#212121] dark:text-slate-200 group transition-colors">
                                            <Package size={20} className="text-[#6b7280] group-hover:text-[#2874f0] transition-colors" />
                                            <span className="text-sm font-medium">Orders</span>
                                        </Link>
                                        <button onClick={() => setIsUserMenuOpen(false)} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#212121] dark:text-slate-200 group transition-colors border-none outline-none">
                                            <CreditCard size={20} className="text-[#6b7280] group-hover:text-[#2874f0] transition-colors" />
                                            <span className="text-sm font-medium">Coupons</span>
                                        </button>
                                        <button onClick={() => setIsUserMenuOpen(false)} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#212121] dark:text-slate-200 group transition-colors border-none outline-none">
                                            <Zap size={20} className="text-[#6b7280] group-hover:text-[#2874f0] transition-colors" />
                                            <span className="text-sm font-medium">Supercoin</span>
                                        </button>
                                        <button onClick={() => setIsUserMenuOpen(false)} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#212121] dark:text-slate-200 group transition-colors border-none outline-none">
                                            <CreditCard size={20} className="text-[#6b7280] group-hover:text-[#2874f0] transition-colors" />
                                            <span className="text-sm font-medium">Saved Cards & Wallet</span>
                                        </button>
                                        <button onClick={() => setIsUserMenuOpen(false)} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#212121] dark:text-slate-200 group transition-colors border-none outline-none">
                                            <MapPin size={20} className="text-[#6b7280] group-hover:text-[#2874f0] transition-colors" />
                                            <span className="text-sm font-medium">Saved Addresses</span>
                                        </button>
                                        <Link to="/dashboard/wishlist" onClick={() => setIsUserMenuOpen(false)} className="flex items-center gap-4 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#212121] dark:text-slate-200 group transition-colors">
                                            <Heart size={20} className="text-[#6b7280] group-hover:text-[#2874f0] transition-colors" />
                                            <span className="text-sm font-medium">Wishlist</span>
                                        </Link>
                                        <button onClick={() => setIsUserMenuOpen(false)} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#212121] dark:text-slate-200 group transition-colors border-none outline-none">
                                            <Gift size={20} className="text-[#6b7280] group-hover:text-[#2874f0] transition-colors" />
                                            <span className="text-sm font-medium">Gift Cards</span>
                                        </button>
                                        <button onClick={() => setIsUserMenuOpen(false)} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#212121] dark:text-slate-200 group transition-colors border-none outline-none">
                                            <Bell size={20} className="text-[#6b7280] group-hover:text-[#2874f0] transition-colors" />
                                            <span className="text-sm font-medium">Notifications</span>
                                        </button>
                                    </div>

                                    <div className="mt-1 border-t border-slate-100 dark:border-slate-800">
                                        <button 
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-4 px-4 py-4 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#212121] dark:text-slate-200 group transition-colors border-none outline-none"
                                        >
                                            <LogOut size={20} className="text-[#6b7280] group-hover:text-[#2874f0] transition-colors" />
                                            <span className="text-sm font-medium">Logout</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-white text-[#2874f0] px-8 py-1.5 rounded-sm font-bold shadow-sm hover:bg-slate-100 transition-colors"
                        >
                            Login
                        </Link>
                    )}

                    <Link to="/become-seller" className="hover:text-white transition-colors font-bold">
                        Become a Seller
                    </Link>

                    <div className="relative group/more">
                        <button className="flex items-center gap-1 hover:text-white transition-colors border-none outline-none font-bold">
                            More <ChevronDown size={14} className="group-hover/more:rotate-180 transition-transform" />
                        </button>
                        {/* More Dropdown */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-slate-900 rounded-sm shadow-[0_2px_16px_0_rgba(0,0,0,0.2)] border-none py-2 z-50 overflow-hidden opacity-0 invisible group-hover/more:opacity-100 group-hover/more:visible transition-all duration-300">
                            <Link to="/notifications" className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#212121] dark:text-slate-200 text-sm font-medium transition-colors">
                                <div className="flex items-center gap-3">
                                    <Bell size={18} className="text-[#f57224]" />
                                    <span>Notifications</span>
                                </div>
                                {unreadCount > 0 && (
                                    <span className="bg-[#f57224] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-black">
                                        {unreadCount}
                                    </span>
                                )}
                            </Link>
                            <Link to="/customer-care" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#212121] dark:text-slate-200 text-sm font-medium transition-colors">
                                <Plus size={18} className="text-[#f57224]" /> 24x7 Customer Care
                            </Link>
                            <Link to="/advertise" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#212121] dark:text-slate-200 text-sm font-medium transition-colors">
                                <Zap size={18} className="text-[#f57224]" /> Advertise
                            </Link>
                            <Link to="/download-app" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#212121] dark:text-slate-200 text-sm font-medium transition-colors">
                                <Package size={18} className="text-[#f57224]" /> Download App
                            </Link>
                        </div>
                    </div>

                    <Link to="/cart" className="flex items-center gap-2 hover:text-white px-3 py-1.5 rounded-sm transition-colors relative">
                        <ShoppingCart size={20} />
                        <span>Cart</span>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 left-4 bg-[#f57224] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center border-2 border-[#2874f0] font-black animate-in zoom-in duration-300">
                                {cartCount}
                            </span>
                        )}
                    </Link>



                    {/* Integrated Action Buttons - No Black Borders, White Night Mode */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2 bg-white/10 dark:bg-slate-800 hover:bg-white/20 rounded-full transition-all border-none"
                            title="Toggle Theme"
                        >
                            {isDarkMode ? <Sun size={18} className="text-[#f57224]" /> : <Moon size={18} className="text-white" />}
                        </button>

                        <Link
                            to="/wishlist"
                            className="p-2 bg-white/10 dark:bg-slate-800 hover:bg-white/20 rounded-full transition-all border-none relative shrink-0"
                            title="Wishlist"
                        >
                            <Heart size={18} fill={wishlist.length > 0 ? "#f57224" : "none"} className={wishlist.length > 0 ? "text-[#f57224]" : "text-white"} />
                            {wishlist.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#f57224] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center border-2 border-[#2874f0] font-black">
                                    {wishlist.length}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile View Search & Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-100 animate-slide-down">
                    <div className="p-4 space-y-4 font-bold">
                        <form onSubmit={handleSearch} className="flex bg-slate-100 dark:bg-slate-800 rounded-full p-3 focus-within:ring-0 focus-within:outline-none border-none">
                            <Search size={18} className="text-slate-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="bg-transparent outline-none w-full text-sm focus:ring-0 focus:outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </form>
                        <div className="grid grid-cols-2 gap-3">
                            <Link to="/" className="p-3 bg-slate-50 dark:bg-slate-800 rounded-sm text-center" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to="/browse" className="p-3 bg-slate-50 dark:bg-slate-800 rounded-sm text-center" onClick={() => setIsMenuOpen(false)}>Browse</Link>
                             <Link to="/cart" className="p-3 bg-slate-50 dark:bg-slate-800 rounded-sm text-center relative" onClick={() => setIsMenuOpen(false)}>
                                 Cart ({cartCount})
                             </Link>
                             <Link to="/wishlist" className="p-3 bg-slate-50 dark:bg-slate-800 rounded-sm text-center" onClick={() => setIsMenuOpen(false)}>Wishlist</Link>
                             <Link to="/notifications" className="p-3 bg-slate-50 dark:bg-slate-800 rounded-sm text-center relative" onClick={() => setIsMenuOpen(false)}>
                                 Notifications
                                 {unreadCount > 0 && (
                                     <span className="absolute top-1 right-1 bg-[#f57224] text-white text-[9px] rounded-full px-1.5 py-0.5 font-black">
                                         {unreadCount}
                                     </span>
                                 )}
                             </Link>
                            {user ? (
                                <>
                                    <Link to="/profile" className="p-3 bg-slate-50 dark:bg-slate-800 rounded-sm text-center" onClick={() => setIsMenuOpen(false)}>My Profile</Link>
                                    <button onClick={logout} className="p-3 bg-red-50 text-red-500 rounded-sm text-center w-full">Logout</button>
                                </>
                            ) : (
                                <Link to="/login" className="p-3 bg-[#2874f0] text-white rounded-sm text-center col-span-2" onClick={() => setIsMenuOpen(false)}>Login</Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>

        {/* Image Search Modal */}
        <ImageSearchModal isOpen={isImageSearchOpen} onClose={() => setIsImageSearchOpen(false)} />

        {/* Map Location Picker */}
        <MapLocationPicker
            isOpen={isMapPickerOpen}
            onClose={() => setIsMapPickerOpen(false)}
            onLocationSelect={(city) => setCity(city)}
        />
        </>
    );
};

export default Navbar;
