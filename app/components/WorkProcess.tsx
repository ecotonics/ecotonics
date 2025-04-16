import React from 'react';

const WorkProcess = () => {
    return (
        <div className="overflow-hidden p-3 md:px-10 md:pb-10">
            <div className="rounded-3xl p-5 bg-sky-900">
                <div className="py-5">
                    <div>
                        <div className='md:px-48 text-center md:text-left'>
                            <h3 className="inline-block font-extrabold text-white text-sm rounded-3xl border border-gray-400 px-3 py-1">
                                OUR PHILOSOPHY
                            </h3>
                            <p className='py-10 text-2xl md:text-5xl text-white'>
                                Strategic Interventions that <br /> Transform our Clients' Business <br /> Trajectory
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 md:px-48">
                            {[
                                {
                                    title: "HARMONIOUS HOMES",
                                    text: "Step into a smart home where comfort and security are at your fingertips. Bespoq's residential solutions make your home truly smart, adapting to your needs."
                                },
                                {
                                    title: "SEAMLESS SPACES",
                                    text: "Commercial spaces optimized for efficiency and elegance. We provide automation that streamlines operations and enhances experience."
                                },
                                {
                                    title: "FUTURE-READY SOLUTIONS",
                                    text: "From solar integration to networked security, our systems are scalable, secure, and future-ready for evolving lifestyles and businesses."
                                }
                            ].map((item, index) => (
                                <div key={index} className="rounded-3xl px-6 py-8 text-gray-800 shadow-sm border border-gray-200 bg-gradient-to-br from-white via-blue-50 to-gray-100 hover:shadow-md transition">
                                    <h1 className='font-bold mb-4 text-xl text-gray-700'>{item.title}</h1>
                                    <p className='text-lg'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;