"use client"

import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-3xl font-bold text-foreground">Get In Touch</h2>
        </div>

        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or
          just want to say hello, my inbox is always open. I'll do my best to get back to you!
        </p>

        <div className="glass rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:dhavalpatil2003@gmail.com"
              className="flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-primary/10 transition-colors group"
            >
              <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium text-foreground">Email</span>
              <span className="text-sm text-muted-foreground">dhavalpatil2003@gmail.com</span>
            </a>

            <a
              href="https://github.com/dhaval-patil21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-primary/10 transition-colors group"
            >
              <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium text-foreground">GitHub</span>
              <span className="text-sm text-muted-foreground">@dhaval-patil21</span>
            </a>

            <a
              href="https://linkedin.com/in/dhaval-patil21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-primary/10 transition-colors group"
            >
              <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium text-foreground">LinkedIn</span>
              <span className="text-sm text-muted-foreground">@dhaval-patil21</span>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="w-4 h-4" />
          <span>Gujarat,India</span>
        </div>

        <a
          href="mailto:dhavalpatil2003@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity text-lg"
        >
          <Send className="w-5 h-5" />
          Say Hello
        </a>
      </div>
    </section>
  )
}
