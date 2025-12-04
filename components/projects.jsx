"use client"

import { Github, ExternalLink, Link2 } from "lucide-react"

const projects = [
  {
    title: "Codeflow AI - Code Reviewer & Doc Generator",
    description:
      "Analyze your code instantly and generate comprehensive documentation. Powered by OpenAI and Groq, CodeFlow offers lightning-fast AI insights to enhance your development process.",
    image: "/codeflow-ai-logo .png",
    tags: ["Next.js", "Tailwind CSS", "Radix UI", "Groq API","Next.js API routes"],
    github: "https://github.com/dhaval-patil21/Codeflow-AI",
    peerlist: "https://peerlist.io/dhaval_patil/project/codeflow--ai-code-reviewer--doc-generator",
    live: "https://codeflowapp.vercel.app/",
    featured: true,
  },
  {
    title: "Stockify - Analyse Stocks & get live update",
    description:
      "Stockify - Discover, analyze, and track stocks with our comprehensive platform. Stockify offers real-time data, fundamental analysis, and the ability to build your perfect watchlist.",
    image: "/stockify-logo.png",
    tags: ["Next.js", "TailwindCSS", "TradingView Widget"],
    github: "https://github.com/dhaval-patil21/Stockify",
    peerlist: "https://peerlist.io/dhaval_patil/project/stockify--analyse-stocks-and-get-live-update",
    live: "https://stockifyapp.vercel.app/",
    featured: true,
  },
  {
    title: "Deal Finder - Compare & Shop",
    description:
      "Discover and compare products from multiple platforms with innovative Deal Finder. This platform is designed to help you find the best deals online at one platform.",
    image: "/Deal-finder_logo.png",
    tags: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/dhaval-patil21/Deal-Finder",
    peerlist: "https://peerlist.io/dhaval_patil/project/deal-finder--compare--shop",
    live: "https://dealfinderapp.vercel.app/",
    featured: false,
  },
  {
    title: "TastyCart - Food Delivery App",
    description:
      "Seamless food delivery with our cutting-edge application designed to bring your favorite meals right to your doorstep. ",
    tags: ["React.js", "CSS3"],
    github: "https://github.com/dhaval-patil21/food-del",
    peerlist: "https://peerlist.io/dhaval_patil/project/tastycart--food-delivery-app",
    live: "https://tastycart.vercel.app/",
    featured: false,
  },
]

const PeerlistIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-16">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? "lg:text-right" : ""}`}
              >
                {/* Image */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group overflow-hidden rounded-2xl"
                  >
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </a>
                </div>

                {/* Content */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                  <div className="glass rounded-xl p-6 mb-4">
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-sm font-mono text-primary bg-primary/10 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={`flex items-center gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.peerlist}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View on Peerlist"
                    >
                      <Link2 className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Other Noteworthy Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="glass rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.peerlist}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View on Peerlist"
                    >
                      <Link2 className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
