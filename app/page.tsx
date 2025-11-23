import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Heighlights from './components/Heighlights'
import Services from './components/Services'
import HowWeWork from './components/HowWeWork'
import Projects from './components/Projects'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


const page = () => {
    return (
        <div>
            <Hero />
            <About/>
            {/* <Heighlights/> */}
            <Services/>
            <HowWeWork/>
            <Projects/>
            <WhyChooseUs/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}

export default page