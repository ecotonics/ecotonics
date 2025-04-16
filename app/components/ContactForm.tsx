import React from 'react'

const ContactForm = () => {
    return (
        <div className="overflow-hidden p-3 md:px-10 md:pb-10">
            <div className="w-full bg-white rounded-3xl border overflow-hidden grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-10">
                    <button className="text-xs border border-gray-400 px-3 py-1 rounded-full mb-3 text-black font-extrabold">
                        SCHEDULE CONSULTATION
                    </button>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Let’s Connect</h2>
                    <p className="text-gray-600 mb-6">
                        Connect with our experts for a free consultation and tailored solutions.
                    </p>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="e.g. John Smith" className="p-3 border border-gray-300 rounded-xl" />
                            <input type="email" placeholder="e.g. john@email.com" className="p-3 border border-gray-300 rounded-xl" />
                            <input type="tel" placeholder="e.g. +1 222 444 66" className="p-3 border border-gray-300 rounded-xl" />
                            <input type="text" placeholder="e.g. Your Company" className="p-3 border border-gray-300 rounded-xl" />
                        </div>
                        <textarea placeholder="Type here ..." className="w-full p-3 border border-gray-300 rounded-xl" />
                        <button type="submit" className="bg-black text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 transition">
                            Schedule a Free Consultation
                        </button>
                    </form>
                </div>
                <div className="hidden md:block bg-black"></div>
            </div>
        </div>
    )
}

export default ContactForm
