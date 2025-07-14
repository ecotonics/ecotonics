import React from 'react'
import Navbar from '@/app/components/Navbar'
import Header from '@/app/components/Header'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'

const page = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className='border-gray-300 py-24 px-5 md:px-24 bg-[#8e9c78]'>
                <p className='font-bold text-white'>Benefits</p>
                <h1 className='my-12 text-5xl font-bold text-white'>Partnership Programme</h1>
                <p className='text-white'>Area provides real insights, without the data overload.</p>
            </div>

            <div className='mx-5 md:mx-24 mt-24'>
                <div className='flex justify-center w-full sm:w-1/4 mx-auto'>
                    <img src="images/Handshake.png" alt="" />
                </div>
            </div>

            <div className='mx-5 md:mx-24 my-24 border-b-1 border-gray-300 pb-24'>
                <h1 className='text-4xl font-bold'>Partner with Us & Earn</h1>
                <p className='mt-8'>Ecotonics Referral Program: Turn Your Network into Rewards!
                    Welcome to the Ecotonics Referral Program, our exciting new initiative designed to reward you for simply connecting us with potential new clients.
                    This program is for anyone with a strong network and a desire to earn cash or fantastic rewards. Whether you&apos;re a freelancer, contractor, designer, electrician, real estate agent, or just someone with great connections, this program turns your contacts into cash or gifts! 
                    The program is straightforward: refer a new client to us who engages with our services, and you&apos;ll receive a commission in cash or your choice of exciting gifts. It&apos;s a win-win: your contacts get access to our high-quality services, and you get rewarded for making the connection.
                    Ready to turn your network into tangible rewards? Join the Ecotonics Referral Program today and start earning!
                </p>
            </div>

            <div className='mx-5 md:mx-24 my-24 pb-24 border-b-1 border-gray-300'>
                <h1 className='text-4xl font-bold text-center'>How It Works</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-24 mt-8">
                    <div className="p-8 border-1 border-gray-300 text-center">
                        <h2 className="text-7xl font-bold text-gray-500">1</h2>
                        <h3 className='text-lg my-5 font-bold'>REFER A POTENTIAL CLIENT</h3>
                        <p>Send us the contact and project details via WhatsApp or Website.</p>
                    </div>
                    <div className="p-8 border-1 border-gray-300 text-center">
                        <h2 className="text-7xl font-bold text-gray-500">2</h2>
                        <h3 className='text-lg my-5 font-bold'>WE HANDLE THE REST</h3>
                        <p>Our team follows ups, closes the deal, and confirms the project.</p>
                    </div>
                    <div className="p-8 border-1 border-gray-300 text-center">
                        <h2 className="text-7xl font-bold text-gray-500">3</h2>
                        <h3 className='text-lg my-5 font-bold'>YOU EARN THE POINTS</h3>
                        <p>Once the work starts, you get points based on the project value!</p>
                    </div>
                </div>
            </div>

            <div className="mx-5 md:mx-24 mt-24">
                <h1 className="text-4xl font-bold">Get Onboard With Us</h1>
                <p className="mt-8">
                    Fill out the form below to get started with our partnership program. We will
                    review your application and get back to you as soon as possible.
                </p>

                <form action="" className="bg-[#8e9c78] p-5 md:p-10 mt-8 rounded-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                        <div>
                            <label className="mb-2 text-lg font-bold text-white">Your Name</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-2xl bg-[#ededed]" placeholder="Enter your name"/>
                        </div>
                        <div>
                            <label className="mb-2 text-lg font-bold text-white">Phone Number</label>
                            <input type="tel" className="w-full p-3 border border-gray-300 rounded-2xl bg-[#ededed]" placeholder="Enter your phone number"/>
                        </div>
                        <div className="md:col-span-2">
                            <label className="mb-2 text-lg font-bold text-white">Message</label>
                            <textarea className="w-full p-3 border border-gray-300 rounded-2xl bg-[#ededed]" rows={5} placeholder="Enter your message"></textarea>
                        </div>
                    </div>
                    
                    <div className='w-full flex justify-center'>
                        <button type="submit" className="mt-8 bg-black text-white px-6 py-3 rounded-2xl w-2xl hover:bg-gray-800 transition text-center">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <Contact />
            <Footer />
        </>
    )
}

export default page