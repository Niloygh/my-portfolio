const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5 / CSS3", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Next.js", level: 90 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Tools & Ecosystem",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "npm", level: 80 },
        { name: "Figma (UI/UX Basics)", level: 70 },
      ],
    },
    {
      title: "Core Competencies",
      skills: [
        { name: "Responsive Web Design", level: 95 },
        { name: "REST API Integration", level: 80 },
        { name: "Performance Optimization", level: 75 },
        { name: "Clean Code Practices", level: 85 },
      ],
    },
  ];

  return (
    <section id="skill" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            My Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2">
            Skills & Abilities
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="p-8 rounded-3xl bg-gray-50 dark:bg-zinc-900/60 border border-gray-100 dark:border-zinc-800/80 shadow-lg shadow-gray-200/50 dark:shadow-none transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-zinc-800 pb-3">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;