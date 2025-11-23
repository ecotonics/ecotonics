import React from 'react'
import { Asterisk } from 'lucide-react'

const Testimonials = () => {
    return (
        <div className="p-5 lg:p-10">
            <div className="rounded-3xl bg-primary p-5 lg:p-10">
                
                {/* Heading */}
                <p className="text-2xl lg:text-5xl font-medium text-white">
                    What our clients say
                </p>

                {/* Scrollable Testimonials */}
                <div className="flex overflow-x-auto space-x-5 no-scrollbar scroll-smooth mt-10">

                    {/* CARD 1 */}
                    <div className="min-w-[300px] lg:min-w-[450px] bg-white rounded-3xl p-6 shadow-lg">
                        <div className="flex items-center gap-3">
                            <img
                                src="images/about-1.jpg"
                                className="w-14 h-14 rounded-full object-cover"
                                alt=""
                            />
                            <div>
                                <p className="font-bold text-lg text-primary">John Mathew</p>
                                <p className="text-gray-600 text-sm">Home Owner</p>
                            </div>
                        </div>

                        <p className="text-gray-700 my-10">
                            Ecotonics completely transformed my home! Smart automation has made daily life so effortless.
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="min-w-[300px] lg:min-w-[450px] bg-white rounded-3xl p-6 shadow-lg">
                        <div className="flex items-center gap-3">
                            <img
                                src="images/about-2.jpg"
                                className="w-14 h-14 rounded-full object-cover"
                                alt=""
                            />
                            <div>
                                <p className="font-bold text-lg text-primary">Neha Sharma</p>
                                <p className="text-gray-600 text-sm">Business Owner</p>
                            </div>
                        </div>

                        <p className="text-gray-700 my-10">
                            Their service is outstanding. Automation helped us cut costs and improve energy efficiency.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="min-w-[300px] lg:min-w-[450px] bg-white rounded-3xl p-6 shadow-lg">
                        <div className="flex items-center gap-3">
                            <img
                                src="images/about-4.jpg"
                                className="w-14 h-14 rounded-full object-cover"
                                alt=""
                            />
                            <div>
                                <p className="font-bold text-lg text-primary">Ameen Rasheed</p>
                                <p className="text-gray-600 text-sm">Villa Owner</p>
                            </div>
                        </div>

                        <p className="text-gray-700 my-10">
                            Very professional team! Their automation solutions are reliable and user-friendly.
                        </p>
                    </div>

                    <div className="min-w-[300px] lg:min-w-[450px] bg-white rounded-3xl p-6 shadow-lg">
                        <div className="flex items-center gap-3">
                            <img
                                src="images/about-4.jpg"
                                className="w-14 h-14 rounded-full object-cover"
                                alt=""
                            />
                            <div>
                                <p className="font-bold text-lg text-primary">Ameen Rasheed</p>
                                <p className="text-gray-600 text-sm">Villa Owner</p>
                            </div>
                        </div>

                        <p className="text-gray-700 my-10">
                            Very professional team! Their automation solutions are reliable and user-friendly.
                        </p>
                    </div>

                    <div className="min-w-[300px] lg:min-w-[450px] bg-white rounded-3xl p-6 shadow-lg">
                        <div className="flex items-center gap-3">
                            <img
                                src="images/about-4.jpg"
                                className="w-14 h-14 rounded-full object-cover"
                                alt=""
                            />
                            <div>
                                <p className="font-bold text-lg text-primary">Ameen Rasheed</p>
                                <p className="text-gray-600 text-sm">Villa Owner</p>
                            </div>
                        </div>

                        <p className="text-gray-700 my-10">
                            Very professional team! Their automation solutions are reliable and user-friendly.
                        </p>
                    </div>

                    <div className="min-w-[300px] lg:min-w-[450px] bg-white rounded-3xl p-6 shadow-lg">
                        <div className="flex items-center gap-3">
                            <img
                                src="images/about-4.jpg"
                                className="w-14 h-14 rounded-full object-cover"
                                alt=""
                            />
                            <div>
                                <p className="font-bold text-lg text-primary">Ameen Rasheed</p>
                                <p className="text-gray-600 text-sm">Villa Owner</p>
                            </div>
                        </div>

                        <p className="text-gray-700 my-10">
                            Very professional team! Their automation solutions are reliable and user-friendly.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Testimonials
