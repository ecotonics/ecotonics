import React from 'react';

const Services = () => {
  return (
    <div className="py-0 overflow-hidden">
        <div className="border-gray-600 rounded-3xl px-3 py-5 bg-white">
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {/* Service Item */}
            <div className="flex-shrink-0 min-w-[350px] snap-start border-2 border-gray-300 rounded-xl bg-white px-4 py-8 font-bold text-gray-800 text-center shadow hover:bg-gray-100 transition">
                AUTOMATION
            </div>
            <div className="flex-shrink-0 min-w-[350px] snap-start border-2 border-gray-300 rounded-xl bg-white px-4 py-8 font-bold text-gray-800 text-center shadow hover:bg-gray-100 transition">
                CCTV
            </div>
            <div className="flex-shrink-0 min-w-[350px] snap-start border-2 border-gray-300 rounded-xl bg-white px-4 py-8 font-bold text-gray-800 text-center shadow hover:bg-gray-100 transition">
                NETWORKING
            </div>
            <div className="flex-shrink-0 min-w-[350px] snap-start border-2 border-gray-300 rounded-xl bg-white px-4 py-8 font-bold text-gray-800 text-center shadow hover:bg-gray-100 transition">
                SOLAR
            </div>
            <div className="flex-shrink-0 min-w-[350px] snap-start border-2 border-gray-300 rounded-xl bg-white px-4 py-8 font-bold text-gray-800 text-center shadow hover:bg-gray-100 transition">
                SMART LIGHTS
            </div>
            <div className="flex-shrink-0 min-w-[350px] snap-start border-2 border-gray-300 rounded-xl bg-white px-4 py-8 font-bold text-gray-800 text-center shadow hover:bg-gray-100 transition">
                HOME THEATER
            </div>
            <div className="flex-shrink-0 min-w-[350px] snap-start border-2 border-gray-300 rounded-xl bg-white px-4 py-8 font-bold text-gray-800 text-center shadow hover:bg-gray-100 transition">
                VIDEO DOORBELL
            </div>
            <div className="flex-shrink-0 min-w-[350px] snap-start border-2 border-gray-300 rounded-xl bg-white px-4 py-8 font-bold text-gray-800 text-center shadow hover:bg-gray-100 transition">
                VOICE CONTROL
            </div>
            </div>
        </div>
    </div>
  );
};

export default Services;