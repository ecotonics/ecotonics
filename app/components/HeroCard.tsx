import React from 'react'

const HeroCard = () => {
    return (
        <div className="bg-white rounded-3xl shadow-lg p-8 max-w-md mx-auto my-10 flex flex-col justify-between">
            <div className="mb-6 flex-shrink-0">
                <div className="w-20 h-20 bg-[#90EE90] rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex-shrink-0">
                Residential Services
            </h2>

            <div className="border-t border-gray-300 mb-6 flex-shrink-0"></div>

            <div className="flex-grow flex flex-col justify-between">
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    From regular housekeeping to deep cleaning, we ensure your home is always welcoming and pristine.
                </p>

                <div className="self-end mt-auto flex-shrink-0">
                    <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroCard