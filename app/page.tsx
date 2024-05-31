"use client";
// import { motion } from "framer-motion";
import { useEffect } from 'react';
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About"
import Experience from "@/components/experience/Experience"
import LocomotiveScroll from "locomotive-scroll"
import Projects from '@/components/projects/Projects';
import Test from '@/components/test/Test';

import { FaInstagram, FaLinkedin } from 'react-icons/fa';


export default function Home() {

  useEffect(() => {
    async function getLocomotive() {
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
    }

    getLocomotive();
  }, []);

  return (
<main style={{}} className="main " data-scroll-container>
    

        <Navbar/>
      
            <div id="shambhabya" style={{}} className="" >
              <Hero/>
            </div>

            {/* <div className='h-screen bg-cyan-200'>
              <Test/>
            </div> */}

            <div id="about" style={{}} data-scroll-section>
                <About/>
            </div>


          
            <div id="experience" style={{}}>
                <Experience/>
            </div>

            
            <div id="projects" style={{}}>
            <Projects/>

</div>

        
       

    
</main>

  );
}
