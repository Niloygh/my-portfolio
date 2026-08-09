"use client";

import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white dark:bg-zinc-950 overflow-hidden pt-20">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8 min-h-[calc(100vh-5rem)]">
          
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center space-y-6 pt-10 lg:pt-0 order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-block">
              <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50">
                Hi, I'm
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 leading-tight">
              Niloy
            </h1>

            {/* Dynamic Typewriter Text */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 flex items-center justify-center lg:justify-start min-h-[3rem]">
              <span className="text-blue-600 dark:text-blue-400">
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "Frontend Developer",
                      "mern stack developer"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 75,
                  }}
                />
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I build modern, responsive, and user-friendly websites using modern web technologies. Transforming ideas into seamless digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link 
                href="#project" 
                className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-full font-semibold hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
              {/* <Link
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300"
              >
                Contact Me
              </Link> */}

                

              
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
              {/* Decorative background elements for image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[2rem] lg:rounded-[3rem] rotate-6 opacity-20 dark:opacity-40 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[2rem] lg:rounded-[3rem] -rotate-3 opacity-20 dark:opacity-40" />
              
              {/* Image Container */}
              <div className="absolute inset-0 bg-white dark:bg-zinc-900 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-zinc-800 backdrop-blur-sm z-10 flex items-center justify-center">
                <Image
                  src="/my-photo.png"
                  alt="Developer Illustration"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;