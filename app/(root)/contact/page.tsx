import React from 'react'
import Navbar from '@/app/components/Navbar'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

const page = () => {
    return (
        <>
            <Navbar />
            <Header />
            {/* Header Section */}
            <div className='border-gray-300 py-24 px-5 md:px-24 bg-[#8e9c78]'>
                <p className='font-bold text-white'>Contact</p>
                <h1 className='my-12 text-5xl font-bold text-white'>Get in touch</h1>
                <p className='text-white'>Area provides real insights, without the data overload.</p>
            </div>

            {/* Branches Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:px-24 py-16">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-300">
                    <h2 className="text-2xl font-bold text-[#485c11] mb-2">Kannur Branch</h2>
                    <p>1234 MG Road, Kannur, Kerala</p>
                    <p className='py-2'>📞 +91 98765 43210</p>
                    <p> ✉️ kannur@ecotonics.in</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-300">
                    <h2 className="text-2xl font-bold text-[#485c11] mb-2">Kochi Branch</h2>
                    <p>5678 Marine Drive, Kochi, Kerala</p>
                    <p className='py-2'>📞 +91 91234 56789</p>
                    <p> ✉️ kochi@ecotonics.in</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-300">
                    <h2 className="text-2xl font-bold text-[#485c11] mb-2">Calicut Branch</h2>
                    <p>9101 SM Street, Calicut, Kerala</p>
                    <p className='py-2'>📞 +91 99887 77665</p>
                    <p>✉️ calicut@ecotonics.in</p>
                </div>
            </div>

            {/* Contact Form + Map */}
            <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-24 gap-12 pb-24">
                {/* Form */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-300">
                    <h2 className="text-3xl font-bold text-[#485c11] mb-6">Send us a Message</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8e9c78]"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8e9c78]"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8e9c78]"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8e9c78]"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#8e9c78] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#76885e] transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.193298124875!2d75.36661107516055!3d12.10696038812443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43d38b676b021%3A0x6f60d117bc8d6d!2sKannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710093050474!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        className="w-full h-[500px] border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default page