"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

const socialLinks = [
  { icon: Github, href: "https://github.com/dhaval-patil21", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dhaval-patil21/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:dhavalpatil2003@email.com", label: "Email" },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className={`space-y-8 max-w-2xl ${mounted ? "animate-slide-up" : "opacity-0"}`}>
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider">{"// Hello, I'm"}</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">Dhaval Patil</h1>
              <h2 className="text-2xl md:text-3xl text-primary font-medium">Frontend Developer</h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              A passionate Frontend Developer with 1 year of hands-on experience building modern web applications using
              React.js, Next.js, and Tailwind CSS. I love crafting pixel-perfect, accessible interfaces that deliver
              exceptional user experiences.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
