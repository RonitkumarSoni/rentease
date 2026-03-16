const Home = () => {
    return (
        <div className="py-8">
            <section className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Quality Rentals at Your Fingertips</h2>
                <p className="text-lg text-gray-600">Cameras, Laptops, Gaming Consoles, and more. Rent anything you need.</p>
            </section>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Product Cards will be mapped here */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-400">
                        Product Image
                    </div>
                    <h3 className="text-xl font-semibold mb-2">DSLR Camera</h3>
                    <p className="text-primary font-bold">₹500 / day</p>
                    <button className="mt-4 w-full bg-secondary text-white py-2 rounded-md font-medium">Rent Now</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
