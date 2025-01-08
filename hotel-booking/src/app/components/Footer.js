const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">About Us</h3>
                    <p>
                        We provide the best hotel booking experiences with amazing deals. Enjoy luxury stays at affordable prices.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul>
                        <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
                        <li><a href="/rooms" className="hover:text-yellow-500">Rooms</a></li>
                        <li><a href="/services" className="hover:text-yellow-500">Services</a></li>
                        <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                    <ul>
                        <li><span className="font-semibold">Phone:</span> (123) 456-7890</li>
                        <li><span className="font-semibold">Email:</span> info@hotel.com</li>
                        <li><span className="font-semibold">Address:</span> 123 Hotel St, Cityville</li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-yellow-500">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="hover:text-yellow-500">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-yellow-500">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="hover:text-yellow-500">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p className="text-sm">
                    &copy; 2025 Hotel Booking. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
