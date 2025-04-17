import React from 'react';

const AboutUs = () => {
    return (
        <div className="overflow-hidden p-3 md:px-10 md:pb-10">
            <div className="border-2 border-gray-300 rounded-3xl p-5 bg-white">
                <div className="px-5 py-10">
                    {/* About Us Content */}
                    <h3 className="font-extrabold text-gray-800 text-xl md:text-2xl">ABOUT US</h3>

                    <p className="text-gray-800 text-lg md:text-xl mt-10">
                        As a leading provider of automation solutions, we cater to both industrial and domestic clients with innovative,
                        future-ready technologies. Our comprehensive range of services includes end-to-end project implementation, 
                        proactive maintenance, and expert consultation tailored to your unique needs. 
                        By partnering with us, you unlock a new level of convenience, efficiency, 
                        and control bringing the luxury of smart living and intelligent operations to your fingertips, 
                        all through reliable and cost-effective automation systems
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;