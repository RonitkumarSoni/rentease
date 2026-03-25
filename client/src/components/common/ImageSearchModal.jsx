import React, { useState, useRef, useCallback } from 'react';
import { Camera, Upload, X, Search, Loader2, ImageIcon, ScanSearch } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { products } from '../../data/products';

// Map visual keywords → product categories
const KEYWORD_CATEGORY_MAP = {
    camera: 'Cameras', photo: 'Cameras', lens: 'Cameras', dslr: 'Cameras', mirrorless: 'Cameras', gopro: 'Cameras',
    laptop: 'Laptops', macbook: 'Laptops', computer: 'Laptops', notebook: 'Laptops', keyboard: 'Laptops',
    guitar: 'Instruments', music: 'Instruments', piano: 'Instruments', drum: 'Instruments', instrument: 'Instruments',
    speaker: 'Speakers', audio: 'Speakers', headphone: 'Speakers', bluetooth: 'Speakers', jbl: 'Speakers', bose: 'Speakers',
    drone: 'Drones', aerial: 'Drones', quadcopter: 'Drones', dji: 'Drones', fly: 'Drones',
    projector: 'Projectors', screen: 'Projectors', cinema: 'Projectors',
    game: 'Gaming', playstation: 'Gaming', xbox: 'Gaming', switch: 'Gaming', console: 'Gaming', gaming: 'Gaming',
    bike: 'Cycles', cycle: 'Cycles', bicycle: 'Cycles', scooter: 'Cycles',
    tent: 'Camping', camp: 'Camping', outdoor: 'Camping', hiking: 'Camping',
    gym: 'Fitness', dumbbell: 'Fitness', fitness: 'Fitness', workout: 'Fitness', exercise: 'Fitness',
    tv: 'Appliances', television: 'Appliances', fridge: 'Appliances', microwave: 'Appliances', appliance: 'Appliances',
    drill: 'Tools', tool: 'Tools', wrench: 'Tools', hammer: 'Tools', saw: 'Tools',
    tablet: 'Tablets', ipad: 'Tablets',
    watch: 'Wearables', smartwatch: 'Wearables', wearable: 'Wearables',
    monitor: 'Office', desk: 'Office', office: 'Office',
};

const detectCategoryFromFilename = (filename) => {
    const name = filename.toLowerCase().replace(/[^a-z0-9]/g, ' ');
    for (const [keyword, category] of Object.entries(KEYWORD_CATEGORY_MAP)) {
        if (name.includes(keyword)) return category;
    }
    return null;
};

const ImageSearchModal = ({ isOpen, onClose }) => {
    const [tab, setTab] = useState('upload'); // 'upload' | 'camera'
    const [preview, setPreview] = useState(null);
    const [fileName, setFileName] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [cameraActive, setCameraActive] = useState(false);
    const [cameraError, setCameraError] = useState(null);
    const fileInputRef = useRef(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);
    const navigate = useNavigate();

    const stopCamera = useCallback(() => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(t => t.stop());
            streamRef.current = null;
        }
        setCameraActive(false);
    }, []);

    const handleClose = () => {
        stopCamera();
        setPreview(null);
        setFileName('');
        setCameraError(null);
        onClose();
    };

    const startCamera = async () => {
        setCameraError(null);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
            streamRef.current = stream;
            if (videoRef.current) videoRef.current.srcObject = stream;
            setCameraActive(true);
        } catch (err) {
            setCameraError('Camera access denied or not available.');
        }
    };

    const capturePhoto = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        const dataUrl = canvas.toDataURL('image/jpeg');
        setPreview(dataUrl);
        setFileName('captured_photo.jpg');
        stopCamera();
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setFileName(file.name);
        const reader = new FileReader();
        reader.onload = (ev) => setPreview(ev.target.result);
        reader.readAsDataURL(file);
    };

    const handleSearch = () => {
        if (!preview) return;
        setIsSearching(true);

        // Detect category from filename
        const detectedCategory = detectCategoryFromFilename(fileName);

        setTimeout(() => {
            setIsSearching(false);
            handleClose();
            if (detectedCategory) {
                navigate(`/browse?category=${encodeURIComponent(detectedCategory)}&imageSearch=true`);
            } else {
                // Show all products as fallback
                navigate(`/browse?imageSearch=true`);
            }
        }, 1200);
    };

    const handleTabChange = (newTab) => {
        stopCamera();
        setPreview(null);
        setFileName('');
        setCameraError(null);
        setTab(newTab);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4"
                    style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25 }}
                        className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-2">
                                <ScanSearch size={20} className="text-[#2874f0]" />
                                <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">
                                    Search by Image
                                </h2>
                            </div>
                            <button onClick={handleClose} className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                <X size={18} className="text-slate-500" />
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-slate-100 dark:border-slate-800">
                            {[
                                { id: 'upload', label: 'Upload Image', icon: Upload },
                                { id: 'camera', label: 'Use Camera', icon: Camera }
                            ].map(({ id, label, icon: Icon }) => (
                                <button
                                    key={id}
                                    onClick={() => handleTabChange(id)}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-black uppercase tracking-widest transition-all border-b-2 ${
                                        tab === id
                                            ? 'border-[#2874f0] text-[#2874f0]'
                                            : 'border-transparent text-slate-400 hover:text-slate-600'
                                    }`}
                                >
                                    <Icon size={14} /> {label}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            {tab === 'upload' ? (
                                <div className="space-y-4">
                                    {!preview ? (
                                        <div
                                            onClick={() => fileInputRef.current?.click()}
                                            className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-10 flex flex-col items-center gap-3 cursor-pointer hover:border-[#2874f0] hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all group"
                                        >
                                            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <ImageIcon size={24} className="text-[#2874f0]" />
                                            </div>
                                            <div className="text-center">
                                                <p className="text-sm font-black text-slate-700 dark:text-slate-300">Drag & drop or click to upload</p>
                                                <p className="text-[11px] text-slate-400 mt-1">Supports JPG, PNG, WEBP</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative rounded-xl overflow-hidden">
                                            <img src={preview} alt="Preview" className="w-full h-52 object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                            <button
                                                onClick={() => { setPreview(null); setFileName(''); }}
                                                className="absolute top-2 right-2 bg-white/90 rounded-full p-1 hover:bg-white transition-colors"
                                            >
                                                <X size={14} className="text-slate-700" />
                                            </button>
                                            <p className="absolute bottom-2 left-3 text-white text-[11px] font-bold">{fileName}</p>
                                        </div>
                                    )}
                                    <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <canvas ref={canvasRef} className="hidden" />
                                    {!preview ? (
                                        <div className="rounded-xl overflow-hidden bg-slate-900 aspect-video flex items-center justify-center relative">
                                            <video ref={videoRef} autoPlay playsInline className={`w-full h-full object-cover ${cameraActive ? 'block' : 'hidden'}`} />
                                            {!cameraActive && (
                                                <div className="flex flex-col items-center gap-3">
                                                    {cameraError ? (
                                                        <p className="text-red-400 text-xs font-bold text-center px-4">{cameraError}</p>
                                                    ) : (
                                                        <>
                                                            <Camera size={40} className="text-slate-500" />
                                                            <button
                                                                onClick={startCamera}
                                                                className="bg-[#2874f0] text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-colors"
                                                            >
                                                                Start Camera
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            )}
                                            {cameraActive && (
                                                <button
                                                    onClick={capturePhoto}
                                                    className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-xl hover:scale-110 transition-transform"
                                                >
                                                    <div className="w-8 h-8 rounded-full bg-[#2874f0]" />
                                                </button>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="relative rounded-xl overflow-hidden">
                                            <img src={preview} alt="Captured" className="w-full h-52 object-cover" />
                                            <button
                                                onClick={() => { setPreview(null); startCamera(); }}
                                                className="absolute top-2 right-2 bg-white/90 rounded-full p-1 hover:bg-white transition-colors"
                                            >
                                                <X size={14} className="text-slate-700" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Search Button */}
                            <button
                                onClick={handleSearch}
                                disabled={!preview || isSearching}
                                className="mt-4 w-full bg-[#2874f0] text-white py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSearching ? (
                                    <><Loader2 size={16} className="animate-spin" /> Searching...</>
                                ) : (
                                    <><Search size={16} /> Find Similar Products</>
                                )}
                            </button>

                            <p className="text-[10px] text-slate-400 text-center mt-3 font-medium">
                                Upload a photo of a product to find similar rentals
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ImageSearchModal;
