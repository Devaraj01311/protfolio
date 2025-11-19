import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Project from '../components/Project';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
       <div>
        <Navbar />
        <Hero/>
        <Project/>
        <Skills/>
        <About/>
        <Contact/>
        <Footer/>
        </div>
    );
};

export default Home;