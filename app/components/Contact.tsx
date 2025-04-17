import React from 'react';

const Contact = () => {
    return (
        <div className="overflow-hidden p-3 md:px-10 md:pb-10">
            <div className="border-2 border-gray-300 rounded-3xl p-5 bg-white">
                <div className="px-5 py-10">
                    <h3 className="font-extrabold text-gray-800 text-xl md:text-2xl mb-10">CONTACT US</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[400px]">
                        {/* Contact Form */}
                        <form className="space-y-6 h-full">
                            <div>
                                <label className="block text-gray-800 font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black transition"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-800 font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black transition"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-800 font-bold mb-2">Message</label>
                                <textarea
                                    placeholder="Your message"
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="text-sm bg-black text-white font-bold px-6 py-3 rounded-2xl hover:bg-gray-900 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                SEND MESSAGE
                            </button>
                        </form>

                        {/* Image */}
                        <div className="hidden md:block h-full">
                            <div className="w-full h-full rounded-3xl bg-[url('https://finovate.vamtam.com/wp-content/uploads/2025/02/GettyImages-2161896288.jpg')] bg-cover bg-center bg-no-repeat"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
