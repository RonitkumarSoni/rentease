import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';
import { LocationProvider } from './context/LocationContext';
import { NotificationProvider } from './context/NotificationContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ThemeProvider>
          <AuthProvider>
            <LocationProvider>
              <NotificationProvider>
                <WishlistProvider>
                  <CartProvider>
                    <Toaster 
                      position="bottom-left"
                      toastOptions={{
                        duration: 4000,
                        style: {
                          background: '#fff',
                          color: '#212121',
                          fontWeight: '500',
                          fontSize: '14px',
                          borderRadius: '8px',
                          padding: '12px 24px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          borderLeft: '4px solid #2874f0'
                        },
                      }}
                    />
                    <AppRoutes />
                  </CartProvider>
                </WishlistProvider>
              </NotificationProvider>
            </LocationProvider>
          </AuthProvider>
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
