import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
    </>
  );
}
