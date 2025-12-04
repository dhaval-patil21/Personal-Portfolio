"use client";

const skillCategories = [
  {
    title: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "SQL Databases"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-3xl font-bold text-foreground">
            Skills & Technologies
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-primary font-mono text-sm mb-4 tracking-wider">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
