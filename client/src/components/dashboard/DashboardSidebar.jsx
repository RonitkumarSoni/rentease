import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    User, Heart, Package, History, 
    Settings, LogOut, LayoutDashboard, PlusCircle 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const DashboardSidebar = () => {
    const { logout, user } = useAuth();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Overview', path: '/dashboard', exact: true },
        { icon: Package, label: 'My Listings', path: '/dashboard/listings' },
        { icon: History, label: 'Booking History', path: '/dashboard/bookings' },
        { icon: Heart, label: 'Wishlist', path: '/dashboard/wishlist' },
        { icon: User, label: 'Profile Settings', path: '/dashboard/profile' },
    ];

    return (
        <aside className="w-full lg:w-72 shrink-0 space-y-4">
            {/* User Profile Summary */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-sm flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-black uppercase ring-2 ring-primary/20">
                    {user?.name?.charAt(0) || 'U'}
                </div>
                <div className="truncate">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Hello,</p>
                    <h3 className="font-black text-slate-800 dark:text-white truncate">{user?.name || 'User'}</h3>
                </div>
            </div>

            {/* Menu Sections */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm shadow-sm overflow-hidden">
                <div className="flex flex-col">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.exact}
                            className={({ isActive }) => `
                                flex items-center gap-4 px-6 py-4 text-sm font-bold border-b border-slate-50 dark:border-slate-800 transition-all
                                ${isActive 
                                    ? 'bg-primary/5 text-primary border-r-4 border-r-primary' 
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary'}
                            `}
                        >
                            <item.icon size={20} />
                            {item.label}
                        </NavLink>
                    ))}
                    
                    <button 
                        onClick={logout}
                        className="flex items-center gap-4 px-6 py-4 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all"
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </div>

            {/* Action Card */}
            <div className="bg-primary text-white p-6 rounded-sm shadow-lg relative overflow-hidden group">
                <div className="relative z-10">
                    <h4 className="font-black text-lg mb-2">Want to earn?</h4>
                    <p className="text-xs font-medium opacity-80 mb-4 tracking-tight">List your gear today and start earning passive income.</p>
                    <NavLink 
                        to="/add-listing" 
                        className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-slate-100 transition-colors"
                    >
                        <PlusCircle size={14} /> Add Listing
                    </NavLink>
                </div>
                <Package className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 group-hover:rotate-12 transition-transform duration-500" />
            </div>
        </aside>
    );
};

export default DashboardSidebar;
