import React from 'react'

const Associations = () => {
    return (
        <div className="overflow-hidden p-3 md:px-10 md:pb-10">
            <div className="rounded-3xl p-5 bg-white">
                <div className="px-5 py-10 text-center relative">
                    {/* HR Line Behind the Title */}
                    <div className="absolute top-1/2 left-0 w-full border-t border-gray-300 z-0"></div>

                    {/* Title Floating Above HR */}
                    <h3 className="inline-block relative z-10 bg-white px-4 font-extrabold text-gray-800 text-sm rounded-3xl border border-gray-300">
                        PARTNERS
                    </h3>
                </div>

                <div className="flex space-x-48 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-10">
                    {/* Partners */}
                    <div className="flex-shrink-0 snap-start transition w-48">
                        <img src="https://medialekt.de/images/2021/11/01/logo-loxone.png" alt="" />
                    </div>

                    <div className="flex-shrink-0 snap-start transition w-48">
                        <img src="https://medialekt.de/images/2021/11/01/logo-loxone.png" alt="" />
                    </div>

                    <div className="flex-shrink-0 snap-start transition w-48">
                        <img src="https://medialekt.de/images/2021/11/01/logo-loxone.png" alt="" />
                    </div>

                    <div className="flex-shrink-0 snap-start transition w-48">
                        <img src="https://medialekt.de/images/2021/11/01/logo-loxone.png" alt="" />
                    </div>

                    <div className="flex-shrink-0 snap-start transition w-48">
                        <img src="https://medialekt.de/images/2021/11/01/logo-loxone.png" alt="" />
                    </div>

                    <div className="flex-shrink-0 snap-start transition w-48">
                        <img src="https://medialekt.de/images/2021/11/01/logo-loxone.png" alt="" />
                    </div>

                    <div className="flex-shrink-0 snap-start transition w-48">
                        <img src="https://medialekt.de/images/2021/11/01/logo-loxone.png" alt="" />
                    </div>

                    <div className="flex-shrink-0 snap-start transition w-48">
                        <img src="https://medialekt.de/images/2021/11/01/logo-loxone.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Associations