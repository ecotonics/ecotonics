import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'Poothali House',
            image: 'https://bespoq.life/wp-content/uploads/2024/05/poothali1.webp',
        },
        {
            title: 'Minimalist Smart Home',
            image: 'https://bespoq.life/wp-content/uploads/2024/05/poothali1.webp',
        },
    ];

    return (
        <div className="overflow-hidden p-3 md:px-10 md:pb-10">
            <div className="rounded-3xl p-2 md:p-5 bg-gradient-to-b from-gray-100 to-white">
                <div className="pt-10">
                    {/* Header */}
                    <div className='text-center'>
                        <h3 className="inline-block font-extrabold text-gray-800 text-sm rounded-3xl border border-gray-300 px-3 py-1">
                            PROJECTS
                        </h3>
                        <p className='py-10 text-3xl md:text-5xl'>Our Latest Projects</p>
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                    {/* Button Below Grid */}
                    <div className='text-center'>
                        <button className='mt-10 px-12 py-3 bg-gray-900 text-white font-extrabold rounded-3xl'>More Projects</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;