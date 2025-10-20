import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Tagline from './components/Tagline'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Tagline />
            <About />
            <Services />
            <Footer />
        </>
    )
}

export default Home