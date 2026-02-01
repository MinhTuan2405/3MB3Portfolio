'use client'

import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-balance mb-4">Let's Connect</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, collaborations, and innovative projects.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email */}
          <Link
            href="mailto:nhungpth.cnthongtin@gmail.com"
            className="group backdrop-blur-lg bg-card/50 border border-border/50 rounded-2xl p-8 md:p-10 hover:bg-card/70 hover:shadow-lg hover:border-border transition-all duration-300 flex flex-col"
          >
            <Mail className="w-8 h-8 text-foreground/60 group-hover:text-foreground transition-colors mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-3">Email</h3>
            <p className="text-foreground/70 text-sm break-all flex items-center gap-2">
              nhungpth.cnthongtin@gmail.com
              <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </Link>

          {/* Phone */}
          <div className="backdrop-blur-lg bg-card/50 border border-border/50 rounded-2xl p-8 md:p-10 hover:bg-card/70 hover:shadow-lg hover:border-border transition-all duration-300">
            <Phone className="w-8 h-8 text-foreground/60 mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-3">Phone</h3>
            <p className="text-foreground/70 text-sm">+84 378 859 234</p>
          </div>

          {/* Location */}
          <div className="backdrop-blur-lg bg-card/50 border border-border/50 rounded-2xl p-8 md:p-10 hover:bg-card/70 hover:shadow-lg hover:border-border transition-all duration-300">
            <MapPin className="w-8 h-8 text-foreground/60 mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-3">Location</h3>
            <p className="text-foreground/70 text-sm">Ho Chi Minh City, Vietnam</p>
          </div>
        </div>

        {/* Social & CTA Section */}
        <div className="backdrop-blur-xl bg-card/60 border border-border/50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Connect on Social Platforms</h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="https://www.linkedin.com/in/nhung-hong-04894537b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium bg-foreground text-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://github.com/HongNhung293"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium border border-border/50 bg-background/40 text-foreground hover:bg-background/60 hover:border-border transition-all duration-300"
            >
              <span>GitHub Profile</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-foreground/60 text-sm mb-4">
            Available for consulting, collaborations, and full-time opportunities in business analysis and digital transformation.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-foreground/50 text-sm">
              © 2025 Phan Thi Hong Nhung. Designed with precision and crafted with care.
            </p>
            <div className="flex gap-6 text-sm text-foreground/50">
              <span>Analytical Thinking</span>
              <span>•</span>
              <span>Strategic Design</span>
              <span>•</span>
              <span>Digital Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
