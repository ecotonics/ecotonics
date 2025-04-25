import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import React from 'react';

const page = () => {
    return (
        <>
            <div className="w-full px-3 pt-3 md:px-10 md:pt-10">
                <div className="rounded-3xl py-2 px-6 md:px-20 overflow-hidden border-2 border-gray-300 mb-5">
                    <Navbar />
                </div>

                {/* Project 1 Section */}
                <div className="border-2 border-gray-300 rounded-3xl p-5 mb-5">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        {/* Image */}
                        <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-md">
                            <img
                                src="https://finovate.vamtam.com/wp-content/uploads/2025/02/GettyImages-2161896288.jpg"
                                alt="Smart Home Installation"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Details */}
                        <div className="w-full md:w-2/3 px-5">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Smart Home Installation
                            </h3>
                            <p className="text-lg text-gray-700 mb-5">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi earum accusantium architecto pariatur maxime? Sit at obcaecati omnis odit quis id reprehenderit assumenda, dolorum quia dolore itaque sunt quam explicabo natus quo libero placeat, saepe ratione facere fugit quos laborum cupiditate. Eum repellendus, sequi rerum quisquam fugit dolor eaque maiores dolores voluptatum voluptate inventore illo error fuga eveniet doloremque dicta quo incidunt qui sint amet minus ducimus harum? Accusamus maiores pariatur repellat eligendi quis ratione reprehenderit quia tempore reiciendis provident. Atque error commodi dignissimos et nulla iure, voluptatem ipsum earum, animi veritatis magnam! Rem saepe consequatur quae ullam sunt necessitatibus.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                                <li>Full home automation setup</li>
                                <li>Voice assistant integration</li>
                                <li>Energy usage tracking</li>
                                <li>Mobile app configuration</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Project 2 Section */}
                <div className="border-2 border-gray-300 rounded-3xl p-5 mb-5">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                        {/* Image */}
                        <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-md">
                            <img
                                src="https://finovate.vamtam.com/wp-content/uploads/2025/02/GettyImages-2161896288.jpg"
                                alt="Industrial Plant Automation"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Details */}
                        <div className="w-full md:w-2/3 px-5">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Industrial Plant Automation
                            </h3>
                            <p className="text-lg text-gray-700 mb-5">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi earum accusantium architecto pariatur maxime? Sit at obcaecati omnis odit quis id reprehenderit assumenda, dolorum quia dolore itaque sunt quam explicabo natus quo libero placeat, saepe ratione facere fugit quos laborum cupiditate. Eum repellendus, sequi rerum quisquam fugit dolor eaque maiores dolores voluptatum voluptate inventore illo error fuga eveniet doloremque dicta quo incidunt qui sint amet minus ducimus harum? Accusamus maiores pariatur repellat eligendi quis ratione reprehenderit quia tempore reiciendis provident. Atque error commodi dignissimos et nulla iure, voluptatem ipsum earum, animi veritatis magnam! Rem saepe consequatur quae ullam sunt necessitatibus.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                                <li>PLC programming and deployment</li>
                                <li>Sensor-based monitoring</li>
                                <li>Real-time dashboard setup</li>
                                <li>Remote maintenance alerts</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Project 3 Section */}
                <div className="border-2 border-gray-300 rounded-3xl p-5 mb-5">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        {/* Image */}
                        <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-md">
                            <img
                                src="https://finovate.vamtam.com/wp-content/uploads/2025/02/GettyImages-2161896288.jpg"
                                alt="Office Smart Controls"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Details */}
                        <div className="w-full md:w-2/3 px-5">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Office Smart Controls
                            </h3>
                            <p className="text-lg text-gray-700 mb-5">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi earum accusantium architecto pariatur maxime? Sit at obcaecati omnis odit quis id reprehenderit assumenda, dolorum quia dolore itaque sunt quam explicabo natus quo libero placeat, saepe ratione facere fugit quos laborum cupiditate. Eum repellendus, sequi rerum quisquam fugit dolor eaque maiores dolores voluptatum voluptate inventore illo error fuga eveniet doloremque dicta quo incidunt qui sint amet minus ducimus harum? Accusamus maiores pariatur repellat eligendi quis ratione reprehenderit quia tempore reiciendis provident. Atque error commodi dignissimos et nulla iure, voluptatem ipsum earum, animi veritatis magnam! Rem saepe consequatur quae ullam sunt necessitatibus.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                                <li>Smart lighting system</li>
                                <li>Automated blinds</li>
                                <li>Conference room control panel</li>
                                <li>Security and access automation</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default page;