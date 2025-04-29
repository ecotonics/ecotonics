import React from 'react';
import Image from 'next/image';

const WorkProcess = () => {
    return (
        <div className="overflow-hidden p-3 md:px-10 md:pb-10">
            <div className="border-2 border-gray-300 rounded-3xl p-5">
                <div className="px-5 py-10">
                    {/* <h3 className="font-extrabold text-gray-800 text-xl md:text-2xl">HOW WE WORK</h3> */}

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-24 text-center">
                        {/* DESIGNING */}
                        <div>
                            <Image
                                src="/images/imp.png"
                                alt="Designing"
                                width={200}
                                height={200}
                                className="mx-auto mb-10"
                            />
                            <h1 className="text-lg md:text-xl font-extrabold mb-5">DESIGNING</h1>
                            <p className="text-lg md:text-xl">
                                By understanding your specific requirements and the constraints of your site,
                                we design a system that optimizes both function and efficiency.
                            </p>
                        </div>

                        {/* IMPLEMENTING */}
                        <div>
                            <Image
                                src="/images/imp.png"
                                alt="Implementing"
                                width={200}
                                height={200}
                                className="mx-auto mb-10"
                            />
                            <h1 className="text-lg md:text-xl font-extrabold mb-5">IMPLEMENTING</h1>
                            <p className="text-lg md:text-xl">
                                We expedite the implementation process, ensuring that only the finest materials
                                are used and the highest standards of quality are met.
                            </p>
                        </div>

                        {/* MAINTAINING */}
                        <div>
                            <Image
                                src="/images/imp.png"
                                alt="Maintaining"
                                width={200}
                                height={200}
                                className="mx-auto mb-10"
                            />
                            <h1 className="text-lg md:text-xl font-extrabold mb-5">MAINTAINING</h1>
                            <p className="text-lg md:text-xl">
                                Our maintenance services are designed to keep your system running smoothly
                                and drive your business forward. One more line.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;