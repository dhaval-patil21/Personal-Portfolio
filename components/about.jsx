"use client"

import { Code2, Palette, Zap, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code.",
  },
  {
    icon: Palette,
    title: "Design Focused",
    description: "Translating designs into pixel-perfect implementations.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and exceptional user experience.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Working effectively with designers and backend teams.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-3xl font-bold text-foreground">About Me</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Frontend Developer with 1 year of professional experience building modern, responsive web
              applications. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in <span className="text-primary font-medium">React.js</span>,{" "}
              <span className="text-primary font-medium">Next.js</span>, and{" "}
              <span className="text-primary font-medium">Tailwind CSS</span> to build fast, accessible, and visually
              appealing user interfaces.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm constantly learning and staying up-to-date with the latest frontend technologies and best practices. I
              enjoy turning complex problems into simple, beautiful, and intuitive designs.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 glass rounded-2xl hover:bg-secondary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
