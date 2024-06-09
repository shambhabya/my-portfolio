"use client";
// import { motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <main style={{}} className="main ">
      <Navbar />

      <div id="shambhabya" style={{}} className="">
        <Hero />
      </div>

      <div id="about" style={{}}>
        <About />
      </div>

      <div id="experience" style={{}}>
        <Experience />
      </div>

      <div id="projects" style={{}}>
        <Projects />
      </div>
    </main>
  );
}
