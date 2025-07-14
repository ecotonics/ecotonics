"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Contact from '@/app/components/Contact'
import Header from '@/app/components/Header'

const Page = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className='border-gray-300 py-24 px-5 md:px-24 bg-[#8e9c78]'>
                <p className='font-bold text-white'>Benefits</p>
                <h1 className='my-12 text-5xl font-bold text-white'>Solutions We Provide</h1>
                <p className='text-white'>Area provides real insights, without the data overload.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 mt-24 mx-5 md:mx-24 gap-10'>

            {/* First block */}
            <div className='relative group overflow-hidden rounded-lg shadow-lg'>
                <img src='images/banner.avif' alt='' className='w-full h-full object-cover transition-all duration-500 group-hover:blur-sm'/>

                <div className='bg-[#8e9c78] p-5 w-full absolute bottom-2.5 z-10'>
                    <h1 className='text-2xl font-bold text-white'>Automation</h1>
                </div>

                <div className='absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20'>
                    <p className='text-white text-center px-4 text-lg'>
                        Experience the future of smart living with our advanced automation solutions.
                    </p>
                </div>
            </div>

            {/* Second block */}
            <div className='relative group overflow-hidden rounded-lg shadow-lg'>
                <img src='images/banner.avif' alt='' className='w-full h-full object-cover transition-all duration-500 group-hover:blur-sm'/>

                <div className='bg-[#8e9c78] p-5 w-full absolute bottom-2.5 z-10'>
                    <h1 className='text-2xl font-bold text-white'>Automation</h1>
                </div>

                <div className='absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20'>
                    <p className='text-white text-center px-4 text-lg'>
                        Experience the future of smart living with our advanced automation solutions.
                    </p>
                </div>
            </div>

            </div>

            {/* <div className='mx-5 md:mx-24 mt-24'>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className='bg-[#8e9c78] shadow-2xl shadow-gray-500'>
                        <img src="images/banner.avif" alt="" className='h-full w-full' />
                    </div>
                    <div className='bg-white border-1 border-gray-300 md:col-span-2 my-10 px-5 py-10'>
                        <h1 className='font-bold text-2xl mb-5'>Home Automation</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, saepe laboriosam doloribus maiores tempore assumenda culpa at. Quam consequuntur ipsa quos, maxime mollitia ipsam ratione ab, necessitatibus nihil eligendi dolores ut, voluptate eaque quidem magnam quibusdam hic error. Reprehenderit qui, praesentium exercitationem illo ab saepe ad accusantium quisquam tenetur neque corporis, animi molestiae, dolorum dolores quos excepturi ea atque nesciunt pariatur dicta explicabo consequuntur natus. Error voluptates illo vero hic! Magnam natus dolore nesciunt hic quaerat veritatis cumque libero maiores in, unde pariatur ipsum consectetur. Itaque a ad dolorum dicta esse. Quaerat placeat error cumque aliquid natus tempore adipisci ipsa.</p>
                        <div className='mt-8 flex space-x-5'>
                            <button className='bg-[#8e9c78] text-white px-6 py-2 rounded-3xl font-bold'>Learn More</button>
                            <button className='bg-[#ededed] text-black px-6 py-2 rounded-3xl border-1 border-gray-300 font-bold'>Get a quote</button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className='mx-5 md:mx-24 mt-24'>
                <div className='flex justify-around bg-[#8e9c78] rounded-3xl'>
                    <button className='bg-[#7e8b68] text-white rounded-3xl w-full px-5 py-3'>Home Automation</button>
                    <button className='text-white rounded-3xl w-full px-5 py-3'>Industrial Automation</button>
                    <button className='text-white rounded-3xl w-full px-5 py-3'>Security Systems</button>
                    <button className='text-white rounded-3xl w-full px-5 py-3'>Power Solutions</button>
                </div>

                <div className='mt-12 w-full rounded-3xl border-1 border-gray-300 p-5 md:p-10'>
                    <div className='mb-10'>
                        <h1 className='font-bold text-2xl pb-5'>Landscape & Irrigation Automation</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tenetur eveniet commodi possimus vel quae esse ullam amet, minus facilis? Quasi doloremque soluta sapiente ea quo reiciendis tenetur nulla nihil vero! In earum dolores, itaque sunt ab officiis velit est doloremque ratione suscipit excepturi corrupti nulla nesciunt quia quas cumque ducimus quos necessitatibus qui? Maiores alias accusamus dolore iusto temporibus, maxime quaerat velit, eius quae laboriosam illo perspiciatis distinctio iste explicabo veritatis veniam enim fuga sequi quas excepturi eum mollitia, debitis consequuntur praesentium! Reprehenderit, neque? Atque quos explicabo asperiores quaerat corporis, ex voluptates voluptatum repellat, perferendis quam, eveniet ipsa dignissimos!</p>
                    </div>
                </div>
            </div> */}

            {/* <div className='mx-5 md:mx-24 mt-24'>
                <h1 className='text-4xl font-bold'>Automation</h1>
            </div> */}
            <Contact />
            <Footer />
        </>
    )
}

export default Page;