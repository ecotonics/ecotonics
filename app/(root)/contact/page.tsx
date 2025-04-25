import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'


const page = () => {
    return (
        <>
            <div className="w-full px-3 pt-3 md:px-10 md:py-10">
                <div className="rounded-3xl py-2 px-6 md:px-20 overflow-hidden border-2 border-gray-300 mb-5 md:mb-10">
                    <Navbar/>
                </div>

                <div className="border-2 border-gray-300 rounded-3xl p-5 mb-5 md:mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        
                        {/* PAYYANNUR BRANCH */}
                        <div className="mx-5 px-5 my-10 border-r">
                        <h3 className="font-extrabold text-xl md:text-2xl text-gray-800 mb-6">PAYYANNUR BRANCH</h3>
                        <div className="text-lg md:text-xl text-gray-700 space-y-4">
                            <p><strong>Address:</strong> XYZ Building, Main Road, Payyannur, Kerala - 670307</p>
                            <p><strong>Phone:</strong> +91 98765 43210</p>
                            <p><strong>Email:</strong> payyannur@yourcompany.com</p>
                            <p><strong>Working Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM</p>
                        </div>
                        </div>

                        {/* KOCHI BRANCH */}
                        <div className="mx-5 px-5 my-10">
                        <h3 className="font-extrabold text-xl md:text-2xl text-gray-800 mb-6">KOCHI BRANCH</h3>
                        <div className="text-lg md:text-xl text-gray-700 space-y-4">
                            <p><strong>Address:</strong> ABC Complex, MG Road, Kochi, Kerala - 682016</p>
                            <p><strong>Phone:</strong> +91 91234 56789</p>
                            <p><strong>Email:</strong> kochi@yourcompany.com</p>
                            <p><strong>Working Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM</p>
                        </div>
                        </div>

                    </div>
                </div>

                <div className="border-2 border-gray-300 rounded-3xl p-5">
                    <div className="px-5 py-10">
                        <h3 className="font-extrabold text-xl md:text-2xl mb-10">CONTACT US</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[400px]">
                            {/* Contact Form */}
                            <form className="space-y-6 h-full">
                                <div>
                                    <label className="block font-bold mb-2">Name</label>
                                    <input type="text" placeholder="Your name" className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black transition"/>
                                </div>

                                <div>
                                    <label className="block font-bold mb-2">Email</label>
                                    <input type="email" placeholder="Your email" className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black transition"/>
                                </div>

                                <div>
                                    <label className="block font-bold mb-2">Message</label>
                                    <textarea placeholder="Your message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black transition resize-none"></textarea>
                                </div>

                                <button type="submit" className="text-sm bg-black text-white font-bold px-6 py-3 rounded-2xl hover:bg-gray-900 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
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
            <Footer />
        </>
    )
}

export default page