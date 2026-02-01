'use client'

import { GraduationCap, Globe } from 'lucide-react'

export default function EducationSection() {
  const languages = [
    { name: 'Vietnamese', level: 'Native', proficiency: 100 },
    { name: 'English', level: 'Professional Working', proficiency: 75 },
    { name: 'Chinese', level: 'Elementary', proficiency: 40 },
  ]

  return (
    <section id="education" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl">
            Academic foundation in Information Technology with focus on system analysis and development.
          </p>
        </div>

        <div className="space-y-10">
          {/* Academic Background */}
          <div className="relative">
            {/* Enhanced timeline line with gradient */}
            <div className="absolute left-0 md:left-10 top-0 bottom-0 w-0.5 overflow-hidden">
              <div className="absolute inset-0 gradient-animated opacity-50" />
            </div>

            {/* Education card */}
            <div className="pl-10 md:pl-24 relative">
              {/* Timeline dot with glow effect */}
              <div className="absolute left-0 md:left-7 top-8 group/dot">
                <div className="w-6 h-6 rounded-full border-4 border-background hover:scale-125 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 gradient-primary" />
                </div>
                <div className="absolute inset-0 w-6 h-6 rounded-full blur-md opacity-0 group-hover/dot:opacity-60 transition-opacity gradient-primary" />
              </div>

              <div className="group backdrop-blur-2xl bg-card/50 dark:bg-card/30 border border-border/50 dark:border-border/30 rounded-2xl p-8 md:p-12 hover:bg-card/70 dark:hover:bg-card/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Animated shine effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 gradient-animated opacity-30" />
                </div>
                
                {/* Period badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 dark:bg-background/30 border border-border/30 mb-6 relative z-10 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <div className="absolute inset-0 gradient-accent opacity-10" />
                  <GraduationCap className="w-4 h-4 text-foreground/60 group-hover:text-foreground transition-colors relative z-10" />
                  <span className="text-sm font-semibold text-foreground/70 uppercase tracking-wide relative z-10">
                    2023 - 2027
                  </span>
                </div>

                {/* Institution and degree */}
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-foreground transition-colors relative z-10">
                  Ho Chi Minh University of Education
                </h3>
                <p className="text-lg md:text-xl text-foreground/80 font-medium mb-8 relative z-10">
                  Bachelor's Degree in Information Technology
                </p>
                
                {/* Stats grid with enhanced cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-8 border-t border-border/30 dark:border-border/20 relative z-10">
                  {[
                    { label: 'Current GPA', value: '3.63', sub: '/4.0' },
                    { label: 'Status', value: 'Ongoing', sub: '3th Year' },
                    { label: 'Location', value: 'Ho Chi Minh City', sub: 'Vietnam' },
                    { label: 'Focus Area', value: 'System Analysis', sub: '& Development' }
                  ].map((stat, idx) => (
                    <div key={idx} className="backdrop-blur-sm bg-background/40 dark:bg-background/20 border border-border/30 dark:border-border/20 rounded-xl p-4 hover:bg-background/60 dark:hover:bg-background/30 transition-all duration-300 hover:scale-105 group/stat relative overflow-hidden">
                      {/* Gradient stat card glow */}
                      <div className="absolute inset-0 gradient-accent opacity-0 group-hover/stat:opacity-10 transition-opacity duration-300" />
                      <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2 relative z-10">{stat.label}</p>
                      <p className="text-3xl font-bold text-foreground relative z-10">{stat.value}</p>
                      <p className="text-sm text-foreground/50 mt-1 relative z-10">{stat.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className="backdrop-blur-2xl bg-card/50 dark:bg-card/30 border border-border/50 dark:border-border/30 rounded-2xl p-8 md:p-10 relative overflow-hidden group">
            {/* Gradient background */}
            <div className="absolute inset-0 gradient-animated opacity-5" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-background/50 dark:bg-background/30 border border-border/30 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 gradient-primary opacity-10" />
                  <Globe className="w-5 h-5 text-foreground/70 relative z-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Languages</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {languages.map((lang, idx) => (
                  <div key={idx} className="backdrop-blur-sm bg-background/40 dark:bg-background/20 border border-border/30 dark:border-border/20 rounded-xl p-6 hover:bg-background/60 dark:hover:bg-background/30 transition-all duration-300 hover:scale-105 group/lang relative overflow-hidden">
                    {/* Gradient hover effect */}
                    <div className="absolute inset-0 gradient-primary opacity-0 group-hover/lang:opacity-10 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <h4 className="text-lg font-bold text-foreground mb-2">{lang.name}</h4>
                      <p className="text-sm text-foreground/60 mb-4">{lang.level}</p>
                      
                      {/* Progress bar with gradient */}
                      <div className="relative h-2 bg-border/30 rounded-full overflow-hidden">
                        <div 
                          className="absolute inset-y-0 left-0 rounded-full transition-all duration-500 group-hover/lang:scale-x-105 origin-left"
                          style={{ 
                            width: `${lang.proficiency}%`,
                            background: 'linear-gradient(90deg, var(--gradient-from), var(--gradient-via), var(--gradient-to))'
                          }}
                        />
                        {/* Animated shine on progress bar */}
                        <div 
                          className="absolute inset-y-0 left-0 rounded-full opacity-0 group-hover/lang:opacity-50"
                          style={{ 
                            width: `${lang.proficiency}%`,
                            background: 'linear-gradient(90deg, transparent, white, transparent)',
                            animation: 'slideInRight 1.5s ease-in-out infinite'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
