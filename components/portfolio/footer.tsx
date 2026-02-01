'use client'

import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react'
import Link from 'next/link'

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-16 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Phan Thi Hong Nhung</h3>
            <p className="text-sm text-foreground/60">
              Business Analyst & IT Specialist focused on digital transformation and strategic innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#contact" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#education" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Follow</h4>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/in/nhung-hong-04894537b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border/50 text-foreground/60 hover:text-foreground hover:border-border transition-all duration-300 hover:bg-card/40"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/HongNhung293"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border/50 text-foreground/60 hover:text-foreground hover:border-border transition-all duration-300 hover:bg-card/40"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:nhungpth.cnthongtin@gmail.com"
                className="p-2.5 rounded-lg border border-border/50 text-foreground/60 hover:text-foreground hover:border-border transition-all duration-300 hover:bg-card/40"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-foreground/50">
            © 2025 Phan Thi Hong Nhung. Designed with precision and crafted with care.
          </p>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 text-sm text-foreground/60 hover:text-foreground hover:border-border hover:bg-card/40 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
