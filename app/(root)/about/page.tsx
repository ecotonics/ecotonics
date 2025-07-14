import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Contact from '@/app/components/Contact'
import Header from '@/app/components/Header'
import React from 'react'


const page = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className='border-gray-300 py-24 px-5 md:px-24 bg-[#8e9c78]'>
                <p className='font-bold text-white'>About Us</p>
                <h1 className='my-12 text-5xl font-bold text-white'>Projects We Accoplished</h1>
                <p className='text-white'>Area provides real insights, without the data overload.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 py-24 px-5 md:mx-24 gap-15 border-b-1 border-gray-300'>
                <div className='w-full h-full rounded-3xl'>
                    <img src="images/banner.avif" alt="" className='rounded-3xl' />
                </div>
                <div className='my-auto'>
                    <h1 className='text-[#485c11] font-bold text-5xl'>What is ecotonics</h1>
                    <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsum nam veritatis? Nostrum illo id asperiores ea consectetur soluta eaque, neque inventore iste amet harum voluptates odio ipsam possimus? Similique totam deserunt excepturi mollitia qui. Minima placeat corporis vero quasi dicta, ullam, distinctio eveniet tempora illo sit vel architecto reprehenderit voluptate commodi consectetur fugit ducimus est nesciunt deserunt possimus ipsum molestiae et quisquam in! Officiis, ab excepturi? Temporibus, magni atque at odit totam voluptates maxime tempore amet similique nostrum. Ducimus quos quibusdam quo illo fugit, unde hic,</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-24 px-5 md:mx-24 gap-15'>
                <div className='border-r-1 border-gray-300 pr-10'>
                    <h1 className='text-[#485c11] font-bold text-5xl'>Mission</h1>
                    <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat provident debitis laborum error perferendis praesentium incidunt! Tempora alias, laudantium debitis, modi nemo nam inventore dolorem sint suscipit vitae omnis accusantium repellat ipsa, quod corporis voluptates deserunt exercitationem illum! Nostrum, ipsa cum! Odit, suscipit maxime sapiente minus harum obcaecati nihil, sunt assumenda optio cumque consequuntur quaerat!</p>
                </div>
                <div className='pl-10'>
                    <h1 className='text-[#485c11] font-bold text-5xl'>Vision</h1>
                    <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat provident debitis laborum error perferendis praesentium incidunt! Tempora alias, laudantium debitis, modi nemo nam inventore dolorem sint suscipit vitae omnis accusantium repellat ipsa, quod corporis voluptates deserunt exercitationem illum! Nostrum, ipsa cum! Odit, suscipit maxime sapiente minus harum obcaecati nihil, sunt assumenda optio cumque consequuntur quaerat!</p>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    )
}

export default page