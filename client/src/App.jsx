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
                      position="top-right"
                      toastOptions={{
                        duration: 4000,
                        style: {
                          background: '#333',
                          color: '#fff',
                          fontWeight: 'bold',
                          fontSize: '14px',
                          borderRadius: '4px'
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
