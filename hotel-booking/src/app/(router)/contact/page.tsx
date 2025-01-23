import React from 'react';
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
const Contact = () => {
    return (
        <>
            <Header />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 mx-24">
                {/* Left Section: Map and Contact Details */}
                <div className="p-6 bg-white shadow-md rounded-md">
                    {/* Map */}
                    <div className="mb-6">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.128862013037!2d106.76748407451835!3d10.8778022573167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d87dddcc59bd%3A0x7549c0e9ca9ecbb1!2zxJDGsOG7nW5nIHPhu5EgNiwgTGluaCBYdcOibiwgVGjhu6cgxJDhu6ljLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1736249780843!5m2!1svi!2s" width="600"
                            className="w-full h-64 rounded-md shadow-md"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Address</h2>
                        <p className="mb-4">📍 đường 6, linh xuân, thủ đức</p>

                        <h2 className="text-xl font-semibold mb-4">Call us</h2>
                        <p className="mb-4">📞 +91 7778889961</p>
                        <p className="mb-4">📞 +91 7778889961</p>

                        <h2 className="text-xl font-semibold mb-4">Email</h2>
                        <p className="mb-4">📧 test@xyz.com</p>
                    </div>
                </div>

                {/* Right Section: Contact Form */}
                <div className="p-6 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-semibold mb-6">Send a message</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-green-200"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-green-200"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Subject</label>
                            <input
                                type="text"
                                className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-green-200"
                                placeholder="Subject"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                rows="5"
                                className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-green-200"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
                            >
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            <Footer />
        </>
    );
};

export default Contact;
