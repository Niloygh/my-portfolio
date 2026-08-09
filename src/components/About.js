import { Button } from "@heroui/react";
import Image from "next/image";

const About = () => {

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Get To Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Image & Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-zinc-800">
              <Image
                src="/my-photo-two.png"
                alt="Niloy - Web Developer"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* Experience Badge */}
              <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-gray-100 dark:border-zinc-800 text-center">
                <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400">
                  Ready
                </span>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                  For New Projects
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              I'm <span className="text-blue-600 dark:text-blue-400">Niloy</span>, a passionate Web Developer focused on building modern web applications.
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
              I specialize in creating clean, fast, and user-friendly websites. With a strong foundation in modern frontend technologies, I transform design concepts into seamless, interactive digital experiences that work beautifully across all devices.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
              Whether working on custom web designs or optimizing performant web apps, I love learning new tools, solving problems, and delivering polished results.
            </p>



          </div>

        </div>
      </div>
    </section>
  );
};

export default About;