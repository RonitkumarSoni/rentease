import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { X, MapPin, Navigation, Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Fix Leaflet default icon issue with webpack/vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const ClickMarker = ({ onSelect }) => {
    const [position, setPosition] = useState(null);
    useMapEvents({
        click(e) {
            setPosition(e.latlng);
            onSelect(e.latlng);
        }
    });
    return position ? <Marker position={position} /> : null;
};

const MapLocationPicker = ({ isOpen, onClose, onLocationSelect }) => {
    const [selectedCoords, setSelectedCoords] = useState(null);
    const [resolvedCity, setResolvedCity] = useState('');
    const [resolving, setResolving] = useState(false);
    const defaultCenter = [20.5937, 78.9629]; // Center of India

    const handleMapClick = async (latlng) => {
        setSelectedCoords(latlng);
        setResolvedCity('');
        setResolving(true);
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${latlng.lat}&lon=${latlng.lng}&format=json`
            );
            const data = await res.json();
            const city =
                data.address?.city ||
                data.address?.town ||
                data.address?.county ||
                data.address?.state_district ||
                data.address?.state ||
                'Unknown location';
            setResolvedCity(city);
        } catch {
            setResolvedCity('Unknown location');
        }
        setResolving(false);
    };

    const handleConfirm = () => {
        if (resolvedCity && onLocationSelect) {
            onLocationSelect(resolvedCity, selectedCoords);
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[300] flex items-center justify-center p-4"
                    style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25 }}
                        className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-2">
                                <MapPin size={18} className="text-[#f57224]" />
                                <div>
                                    <h2 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Choose Location on Map</h2>
                                    <p className="text-[10px] text-slate-400 font-medium">Click anywhere on the map to set your location</p>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                <X size={18} className="text-slate-500" />
                            </button>
                        </div>

                        {/* Map */}
                        <div className="h-[380px] w-full">
                            <MapContainer
                                center={defaultCenter}
                                zoom={5}
                                style={{ height: '100%', width: '100%' }}
                                zoomControl={true}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                />
                                <ClickMarker onSelect={handleMapClick} />
                            </MapContainer>
                        </div>

                        {/* Footer */}
                        <div className="px-5 py-4 flex items-center gap-3 border-t border-slate-100 dark:border-slate-800">
                            <div className="flex-1">
                                {resolving ? (
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <Loader2 size={14} className="animate-spin" />
                                        <span className="text-xs font-bold">Finding location...</span>
                                    </div>
                                ) : resolvedCity ? (
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Selected Location</p>
                                        <p className="text-sm font-black text-slate-800 dark:text-white flex items-center gap-1">
                                            <MapPin size={12} className="text-[#f57224]" /> {resolvedCity}
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-xs text-slate-400 font-medium italic">👆 Click on the map to select your city</p>
                                )}
                            </div>

                            <button
                                onClick={handleConfirm}
                                disabled={!resolvedCity || resolving}
                                className="flex items-center gap-2 bg-[#2874f0] text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                <Check size={14} /> Confirm
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MapLocationPicker;
