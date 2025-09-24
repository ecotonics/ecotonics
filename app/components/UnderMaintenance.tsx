import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const UnderMaintenance = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-50 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Under Maintenance
            </h1>

            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-xl">
                We are currently working on our website to bring you a better
                experience. Please check back later.
            </p>

            <img
                src="/images/undermaintenance2.gif"
                alt="Under Maintenance"
                className="w-full max-w-xl mt-12"
            />

            {/* WhatsApp Contact Button */}
            <a
                href="https://wa.me/917510348448" // replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full shadow-md transition"
            >
                <FaWhatsapp className="text-2xl" />
                Contact Us on WhatsApp
            </a>
        </div>
    );
};

export default UnderMaintenance;
