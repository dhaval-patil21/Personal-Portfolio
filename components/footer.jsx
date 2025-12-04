import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/dhaval-patil21", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dhaval-patil21/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:dhavalpatil2003@gmail.com", label: "Email" },
]

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Designed & Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by Dhaval Patil
          </p>

          <p className="text-sm text-muted-foreground font-mono">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
