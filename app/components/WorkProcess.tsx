import React from 'react';

const WorkProcess = () => {
    return (
        <div className="overflow-hidden p-3 md:px-10 md:pb-10">
            <div className="border-2 border-gray-300 rounded-3xl p-5 bg-white">
                <div className="px-5 py-10">
                    {/* About Us Content */}
                    {/* <h3 className="font-extrabold text-gray-800 text-xl md:text-2xl">HOW WE WORK</h3> */}

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-24 text-center">
                        <div>
                            <div className=''>
                                <img src="/images/imp.png" alt="" width={200} height={200} className='mx-auto mb-10'/>
                                <h1 className='text-gray-800 text-lg md:text-xl font-extrabold mb-5'>DESIGNING</h1>
                                <p className='text-gray-800 text-lg md:text-xl'>By understanding your specific requirements and the constraints of your site, we design a system that optimizes both function and efficiency.</p>
                            </div>
                        </div>

                        <div>
                            <div className=''>
                                <img src="/images/imp.png" alt="" width={200} height={200} className='mx-auto mb-10'/>    
                                <h1 className='text-gray-800 text-lg md:text-xl font-extrabold mb-5'>IMPLIMENTING</h1>
                                <p className='text-gray-800 text-lg md:text-xl'>We expedite the implementation process, ensuring that only the finest materials are used and the highest standards of quality are met.</p>
                            </div>
                        </div>

                        <div>
                            <div className=''>
                                <img src="/images/imp.png" alt="" width={200} height={200} className='mx-auto mb-10'/>
                                <h1 className='text-gray-800 text-lg md:text-xl font-extrabold mb-5'>MAINTAINING</h1>
                                <p className='text-gray-800 text-lg md:text-xl'>Our maintenance services are designed to keep your system running smoothly and drive your business forward. one more line</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;