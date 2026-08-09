import Image from "next/image";

const Projects = () => {


  const projectsList = [
    {
      id: 1,
      title: "HealthCare",
      description:
        "HealthCare is a responsive healthcare management platform that connects patients with qualified doctors and medical services. It provides doctor discovery, appointment booking, online consultation, specialization-based browsing, doctor profiles, and patient-focused healthcare information through a modern and intuitive interface.",
      image: "https://i.ibb.co.com/DHV4cfCD/Screenshot-2026-08-09-141351.png", 
      tags: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://healthcare-client-mu.vercel.app",
      githubUrl: "https://github.com/yourusername/project1",
    },
    {
      id: 2,
      title: "Tutor Finder",
      description:
        "Tutor Finder is a responsive online tutoring platform that connects students with suitable tutors. It provides tutor discovery, tutor profile management, session booking, booked-session tracking, authentication, and personalized learning features through a clean and user-friendly interface.",
      image: "https://i.ibb.co.com/TxHWsBjT/Screenshot-2026-08-09-141933.png",
      tags: ["React", "Next.js", "Tailwind CSS"],
      liveUrl: "https://tutors-finder-fronted.vercel.app",
      githubUrl: "https://github.com/Niloygh/tutors-finder-fronted",
    },
    {
      id: 3,
      title: "Sunglass",
      description:
        "Sunglass is a responsive e-commerce platform for showcasing and selling stylish sunglasses. It features product browsing, promotional offers, user authentication, profile management, and a clean, modern shopping interface designed to provide a simple and engaging customer experience.",
      image: "https://i.ibb.co.com/GfkSD7Xd/Screenshot-2026-08-09-141646.png",
      tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://assignment-8-puce.vercel.app",
      githubUrl: "https://github.com/yourusername/project3",
    },
  ];

  

  return (
    <section id="project" className="py-24 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            My Recent Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-zinc-950 rounded-3xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full h-52 bg-gray-200 dark:bg-zinc-800 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-xl shadow-md transition-colors text-center flex items-center justify-center gap-1.5"
                >
                  Live Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-200 font-medium text-xs rounded-xl transition-colors text-center flex items-center justify-center gap-1.5"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;