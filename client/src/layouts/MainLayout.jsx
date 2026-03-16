import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-primary text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">RentEase</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="/login" className="hover:underline">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            
            <main className="flex-grow container mx-auto p-4">
                <Outlet />
            </main>
            
            <footer className="bg-white border-t p-4 text-center text-gray-600">
                <p>&copy; 2026 RentEase. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MainLayout;
