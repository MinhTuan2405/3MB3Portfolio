'use client'

import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section id="introduction" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Enhanced background elements with glassmorphism */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Vibrant gradient orbs */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-30" 
          style={{ 
            background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-via))',
            animationDuration: '4s' 
          }} 
        />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-30" 
          style={{ 
            background: 'linear-gradient(135deg, var(--gradient-to), var(--gradient-accent))',
            animationDuration: '6s', 
            animationDelay: '1s' 
          }} 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 gradient-animated" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Main content card with premium glassmorphism */}
        <div className="group backdrop-blur-2xl bg-card/50 dark:bg-card/30 border border-border/50 dark:border-border/30 rounded-3xl p-10 md:p-16 shadow-2xl dark:shadow-none hover:shadow-3xl transition-all duration-500 animate-scale-in relative overflow-hidden">
          {/* Animated gradient glow */}
          <div className="absolute inset-0 rounded-3xl opacity-20">
            <div className="absolute inset-0 gradient-animated" />
          </div>
          
          {/* Subtle glow effect for dark mode */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-foreground/5 to-transparent opacity-0 dark:opacity-100 pointer-events-none" />
          
          {/* Status badge */}
          <div className="flex justify-center mb-8 relative animate-fade-in-down z-10">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border/60 dark:border-border/40 bg-background/60 dark:bg-background/30 backdrop-blur-md shadow-sm">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: 'linear-gradient(135deg, var(--gradient-secondary), var(--gradient-accent))' }} />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full animate-ping opacity-75" style={{ background: 'linear-gradient(135deg, var(--gradient-secondary), var(--gradient-accent))' }} />
              </div>
              <span className="text-sm font-medium text-foreground/80">Available for opportunities</span>
            </div>
          </div>

          {/* Main heading with enhanced typography */}
          <div className="text-center space-y-7 mb-14 relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-[1.1] tracking-tight gradient-text animate-fade-in-up animation-delay-100">
              Phan Thi Hong Nhung
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 tracking-wide animate-fade-in-up animation-delay-200">
             ERP Application Intern | Business Analyst & IT Specialist
            </p>
            <div className="max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                Bridging Information Technology and Business Strategy to optimize organizational efficiency through technical analytical thinking and strategic vision.
              </p>
            </div>
          </div>

          {/* Social links with enhanced hover effects */}
          <div className="flex justify-center gap-3 mb-12 animate-fade-in-up animation-delay-400 relative z-10">
            {[
              { href: 'https://www.linkedin.com/in/nhung-hong-04894537b/', icon: Linkedin, label: 'LinkedIn profile' },
              { href: 'https://github.com/HongNhung293', icon: Github, label: 'GitHub profile' },
              { href: 'mailto:nhungpth.cnthongtin@gmail.com', icon: Mail, label: 'Email contact' }
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group/link relative p-4 rounded-xl border border-border/50 dark:border-border/30 hover:border-border dark:hover:border-border/60 bg-background/40 dark:bg-background/20 hover:bg-background/60 dark:hover:bg-background/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                aria-label={social.label}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                <social.icon className="w-5 h-5 text-foreground/70 group-hover/link:text-foreground transition-colors relative z-10" />
              </Link>
            ))}
          </div>

          {/* CTA button with gradient effect */}
          <div className="flex justify-center animate-fade-in-up animation-delay-500">
            <Link
              href="#contact"
              className="group/cta inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-foreground text-background font-semibold hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="relative z-10">Explore My Work</span>
              <ArrowDown className="w-4 h-4 relative z-10 group-hover/cta:translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground to-foreground/90 opacity-0 group-hover/cta:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="flex flex-col items-center gap-3 mt-16 animate-bounce animate-fade-in animation-delay-600">
          <span className="text-xs text-foreground/50 font-medium uppercase tracking-widest">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
