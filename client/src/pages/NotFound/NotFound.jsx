import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl font-black text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-6">Oops! Page Not Found</h2>
            <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
            <Link to="/" className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
