import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-12 pb-6">
            <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-black italic text-white tracking-tighter">
                            Rent<span className="text-secondary">Ease</span>
                        </h2>
                        <p className="text-sm leading-relaxed">
                            RentEase is India's leading rental marketplace for electronics and event gear. We make high-end technology accessible to everyone without the burden of buying.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors"><Facebook size={20}/></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter size={20}/></a>
                            <a href="#" className="hover:text-white transition-colors"><Instagram size={20}/></a>
                            <a href="#" className="hover:text-white transition-colors"><Youtube size={20}/></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Marketplace</h3>
                        <ul className="space-y-2 text-sm font-medium">
                            <li><Link to="/browse?category=Cameras" className="hover:text-secondary hover:underline">Cameras</Link></li>
                            <li><Link to="/browse?category=Laptops" className="hover:text-secondary hover:underline">Laptops</Link></li>
                            <li><Link to="/browse?category=Gaming" className="hover:text-secondary hover:underline">Gaming Consoles</Link></li>
                            <li><Link to="/browse?category=Speakers" className="hover:text-secondary hover:underline">Sound Systems</Link></li>
                        </ul>
                    </div>

                    {/* Policy */}
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Support</h3>
                        <ul className="space-y-2 text-sm font-medium">
                            <li><Link to="/faq" className="hover:text-secondary hover:underline">FAQs</Link></li>
                            <li><Link to="/contact" className="hover:text-secondary hover:underline">Contact Us</Link></li>
                            <li><Link to="/terms" className="hover:text-secondary hover:underline">Terms of Service</Link></li>
                            <li><Link to="/privacy" className="hover:text-secondary hover:underline">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold uppercase text-sm tracking-wider">Contact Info</h3>
                        <div className="flex flex-col gap-3 text-sm font-medium">
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-secondary" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-secondary" />
                                <span>support@rentease.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={18} className="text-secondary" />
                                <span>123, Tech Hub, Mumbai, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-xs font-semibold">
                    <p>&copy; {new Date().getFullYear()} RentEase Private Limited. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
