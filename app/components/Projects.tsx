import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'Poothali House',
            image: 'https://bespoq.life/wp-content/uploads/2024/05/poothali1.webp',
        },
        {
            title: 'Poothali Home',
            image: 'https://bespoq.life/wp-content/uploads/2024/05/poothali1.webp',
        },
        {
            title: 'Poothali Home',
            image: 'https://bespoq.life/wp-content/uploads/2024/05/poothali1.webp',
        },
        {
            title: 'Poothali Home',
            image: 'https://bespoq.life/wp-content/uploads/2024/05/poothali1.webp',
        },
    ];

    return (
        <div className="overflow-hidden p-3 md:px-10 md:pb-10">
            <div className="border-2 border-gray-300 rounded-3xl p-5 bg-white">
                <div className="px-5 py-10">
                    {/* About Us Content */}
                    <h3 className="font-extrabold text-gray-800 text-xl md:text-2xl">ABOUT US</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                        {projectList.map((project, index) => (
                            <div key={index} className="relative rounded-3xl overflow-hidden group shadow-lg">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover rounded-3xl transform group-hover:scale-105 transition duration-500"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl"></div>
                                
                                {/* Text & Button */}
                                <div className="absolute bottom-5 left-5 right-5 text-white flex justify-between items-end p-5">
                                    <div>
                                        <h2 className="text-xl font-bold">{project.title}</h2>
                                    </div>
                                    <a href='' className="bg-white text-black font-semibold text-sm px-4 py-2 rounded-full hover:bg-gray-200 transition">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;