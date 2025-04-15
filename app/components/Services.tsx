import React from 'react';

const Services = () => {
  return (
    <div className="overflow-hidden">
        <div className="border-gray-600 rounded-3xl p-3 md:px-10 md:pb-10 bg-white">
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                {/* Service Items */}
                {["AUTOMATION", "CCTV", "NETWORKING", "SOLAR", "SMART LIGHTS", "HOME THEATER", "VIDEO DOORBELL", "VOICE CONTROL",].map((item, index) => (
                    <div key={index} className="flex-shrink-0 min-w-full sm:min-w-[350px] snap-start border-2 border-gray-300 rounded-3xl bg-white px-4 py-6 font-bold text-gray-800 text-center shadow hover:bg-gray-100 transition">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Services;