import React, { createContext, useContext, useState, useEffect } from 'react';

const LocationContext = createContext();

export const useLocation = () => useContext(LocationContext);

// Map of Indian cities with their approximate coordinates
const CITY_COORDS = {
    'Mumbai': { lat: 19.076, lon: 72.877 },
    'Delhi': { lat: 28.669, lon: 77.212 },
    'Bangalore': { lat: 12.972, lon: 77.594 },
    'Hyderabad': { lat: 17.385, lon: 78.486 },
    'Chennai': { lat: 13.083, lon: 80.270 },
    'Pune': { lat: 18.520, lon: 73.856 },
    'Goa': { lat: 15.491, lon: 73.825 },
    'Chandigarh': { lat: 30.733, lon: 76.779 },
    'Kolkata': { lat: 22.572, lon: 88.363 },
    'Jaipur': { lat: 26.912, lon: 75.787 },
};

// Haversine formula to calculate distance in km between two coordinates
const getDistanceKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

export const LocationProvider = ({ children }) => {
    const [userCity, setUserCity] = useState(() => localStorage.getItem('rentease_city') || null);
    const [userCoords, setUserCoords] = useState(null);
    const [locationLoading, setLocationLoading] = useState(false);
    const [locationError, setLocationError] = useState(null);

    const detectLocation = () => {
        if (!navigator.geolocation) {
            setLocationError('Geolocation is not supported by your browser.');
            return;
        }
        setLocationLoading(true);
        setLocationError(null);
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                setUserCoords({ lat: latitude, lon: longitude });

                // Find closest city from our known cities
                let closestCity = null;
                let minDist = Infinity;
                for (const [city, coords] of Object.entries(CITY_COORDS)) {
                    const dist = getDistanceKm(latitude, longitude, coords.lat, coords.lon);
                    if (dist < minDist) {
                        minDist = dist;
                        closestCity = city;
                    }
                }

                // Try reverse geocode via free API for accurate city name
                try {
                    const res = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                    );
                    const data = await res.json();
                    const city =
                        data.address?.city ||
                        data.address?.town ||
                        data.address?.county ||
                        closestCity;
                    setUserCity(city);
                    localStorage.setItem('rentease_city', city);
                } catch {
                    // Fallback to closest known city
                    if (closestCity) {
                        setUserCity(closestCity);
                        localStorage.setItem('rentease_city', closestCity);
                    }
                }
                setLocationLoading(false);
            },
            (error) => {
                setLocationError('Location access denied.');
                setLocationLoading(false);
            },
            { timeout: 10000 }
        );
    };

    const setCity = (city) => {
        setUserCity(city);
        localStorage.setItem('rentease_city', city);
    };

    const clearCity = () => {
        setUserCity(null);
        localStorage.removeItem('rentease_city');
    };

    // Sort products to show local city's products first
    const sortByLocation = (products) => {
        if (!userCity) return products;
        return [...products].sort((a, b) => {
            const aLocal = a.location?.toLowerCase().includes(userCity.toLowerCase());
            const bLocal = b.location?.toLowerCase().includes(userCity.toLowerCase());
            if (aLocal && !bLocal) return -1;
            if (!aLocal && bLocal) return 1;
            return 0;
        });
    };

    return (
        <LocationContext.Provider value={{
            userCity, userCoords, locationLoading, locationError,
            detectLocation, setCity, clearCity, sortByLocation,
            availableCities: Object.keys(CITY_COORDS)
        }}>
            {children}
        </LocationContext.Provider>
    );
};
