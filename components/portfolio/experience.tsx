'use client'

import { Briefcase, Users, Trophy } from 'lucide-react'

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      role: 'ERP Application Intern',
      organization: 'SHZ Commercial Chinese Center',
      period: 'Dec 2025 - Jan 2026',
      icon: Briefcase,
      highlights: [
        'Assisted in operating and managing internal systems including Website Admin, CRM, and LMS',
        'Configured classes, schedules, fees, user roles, and learning content across platforms',
        'Monitored and managed learning data such as attendance, class transfers, and study progress',
        'Analyzed CRM data, supported reporting on leads and conversion rates for marketing purposes',
        'Checked data synchronization between systems and supported issue detection and resolution',
        'Contributed to operational reports and proposed improvements for data management workflows',
      ],
    },
    {
      id: 2,
      role: 'Student Consultant & Learner Support Staff',
      organization: 'SHZ Commercial Chinese Center',
      period: '2023 - Present',
      icon: Briefcase,
      highlights: [
        'Managed student lists, class schedules, and learning progress using Google Sheets, developing strong data organization and systematic working skills',
        'Used Hoa Tieu CRM to input, process, and manage student information, focusing on workflow optimization and high data accuracy',
        'Supported the organization of learning activities, contributing to a positive study environment and strengthening teamwork skills',
      ],
    },
    {
      id: 3,
      role: 'Teaching Assistant – Chinese Language Classes',
      organization: 'SHZ Commercial Chinese Center',
      period: '2023 - Present',
      icon: Users,
      highlights: [
        'Assisted in teaching and classroom management, improving coordination, flexibility, and organizational skills',
        'Applied Google Workspace tools (Docs, Sheets, Forms) to collect, summarize, and analyze data, enhancing practical digital tool usage and real-world data handling skills',
      ],
    },
  ]

  const activities = [
    {
      id: 1,
      role: 'Faculty Youth Union Executive Committee Member',
      period: '2024 - Present',
    },
    {
      id: 2,
      role: 'Faculty of Information Technology Student Association Executive Committee Member',
      period: '2024 - Present',
    },
  ]

  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience & Leadership</h2>
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl">
            Professional roles and organizational contributions demonstrating practical expertise and leadership development.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground mb-10 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-foreground/60" />
            Professional Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp) => {
              const IconComponent = exp.icon
              return (
                <div
                  key={exp.id}
                  className="group backdrop-blur-2xl bg-card/50 dark:bg-card/30 border border-border/50 dark:border-border/30 rounded-2xl p-8 md:p-12 hover:bg-card/70 dark:hover:bg-card/40 hover:shadow-2xl hover:border-border dark:hover:border-border/60 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Gradient accent bar */}
                  <div className="absolute left-0 top-0 w-1 h-20 rounded-full ml-8 md:ml-12 group-hover:h-32 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 gradient-animated" />
                  </div>
                  
                  {/* Subtle background gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  {/* Animated reflection effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-foreground/5 to-transparent skew-x-12" />
                  </div>

                  {/* Header with icon and period */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-6 relative z-10">
                    <div className="flex items-start gap-5 flex-1">
                      <div className="p-3 rounded-xl bg-background/50 dark:bg-background/30 border border-border/30 group-hover:scale-110 group-hover:border-border/60 transition-all duration-300 relative overflow-hidden">
                        {/* Gradient icon glow */}
                        <div className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 gradient-accent" />
                        <IconComponent className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-colors relative z-10" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-foreground transition-colors">
                          {exp.role}
                        </h4>
                        <p className="text-sm md:text-base font-semibold text-foreground/70">{exp.organization}</p>
                      </div>
                    </div>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-background/50 dark:bg-background/30 border border-border/30 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 gradient-primary opacity-10" />
                      <span className="text-sm font-medium text-foreground/70 whitespace-nowrap relative z-10">{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="pt-6 border-t border-border/30 dark:border-border/20 relative z-10">
                    <ul className="space-y-4">
                      {exp.highlights.map((highlight, index) => (
                        <li key={index} className="flex gap-4 text-foreground/80 text-sm md:text-base leading-relaxed group/item">
                          <span className="text-foreground/40 flex-shrink-0 pt-1 font-bold group-hover/item:text-foreground/60 transition-colors">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Activities Section */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-10 flex items-center gap-3">
            <Trophy className="w-6 h-6 text-foreground/60" />
            Organizational Leadership
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="group backdrop-blur-2xl bg-card/50 dark:bg-card/30 border border-border/50 dark:border-border/30 rounded-2xl p-8 md:p-10 hover:bg-card/70 dark:hover:bg-card/40 hover:shadow-xl hover:border-border dark:hover:border-border/60 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Timeline dot indicator with animated glow */}
                <div className="absolute left-6 top-6 w-3 h-3 bg-foreground/40 rounded-full group-hover:scale-125 transition-transform z-10" />
                <div className="absolute left-6 top-6 w-3 h-3 bg-foreground/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 relative z-10">
                  <h4 className="text-lg md:text-xl font-bold text-foreground pr-4">
                    {activity.role}
                  </h4>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-background/50 dark:bg-background/30 border border-border/30 self-start group-hover:scale-105 transition-transform duration-300">
                    <span className="text-sm font-medium text-foreground/70 whitespace-nowrap">{activity.period}</span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-foreground/70 mt-5 leading-relaxed relative z-10">
                  Executive committee member contributing to organizational strategy and student engagement initiatives.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
