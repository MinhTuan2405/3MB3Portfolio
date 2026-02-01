'use client'

import { Sparkles } from 'lucide-react'

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Learning Management Application on Google Workspace',
      period: '8/2024 - Present',
      role: 'Team Leader, Business Analyst & Developer',
      description:
        'Led a team of 4 members in designing and implementing a comprehensive learning management system on Google Workspace.',
      highlights: [
        'Analyzed requirements from lecturers and students to define project objectives and scope',
        'Designed workflows and business process models on the Google Workspace platform',
        'Developed automation modules for Google Drive structure, permission management, and Google Sheets data integration',
        'Prepared BRD documentation, user guides, and collaborated on User Acceptance Testing (UAT)',
      ],
      tags: ['Google Workspace', 'Process Modeling', 'Automation', 'Team Leadership'],
      featured: true,
    },
    {
      id: 2,
      title: 'Digital Transformation in Assessment: From Paper-Based to Electronic Tests',
      period: '8/2023 - Present',
      role: 'Team Leader, Business Analyst & Developer',
      description:
        'Published in the Journal of Science and Technology, Thai Nguyen University. A comprehensive research project on digital transformation in educational assessment.',
      highlights: [
        'Analyzed traditional assessment processes to identify limitations and transformation needs',
        'Proposed and developed automation solution converting paper-based tests to electronic formats',
        'Used Google Forms, Quizizz, and Kahoot for digital assessment implementation',
        'Designed data integration workflows with Google Apps Script automation',
        'Evaluated solution effectiveness based on error reduction and data storage optimization',
      ],
      tags: ['Digital Transformation', 'Automation', 'Google Apps Script', 'Data Integration', 'Published'],
      featured: true,
    },
  ]

  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-foreground/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-foreground/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Enhanced section header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 dark:bg-card/30 border border-border/50 dark:border-border/30 backdrop-blur-xl mb-6">
            <Sparkles className="w-4 h-4 text-foreground/70" />
            <span className="text-sm font-semibold text-foreground/70 uppercase tracking-wide">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Featured Projects</h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Selected projects showcasing expertise in business analysis, automation, and digital transformation.
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group backdrop-blur-2xl bg-card/60 dark:bg-card/40 border-2 border-border/50 dark:border-border/30 rounded-3xl p-10 md:p-14 hover:bg-card/80 dark:hover:bg-card/50 hover:shadow-2xl hover:border-border dark:hover:border-border/70 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Enhanced gradient overlay with animation */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-foreground/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Animated shine/reflection effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-foreground/10 to-transparent skew-x-12" />
              </div>
              
              {/* Project number badge with glow */}
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br from-foreground/5 to-transparent flex items-center justify-center opacity-50 group-hover:opacity-70 transition-opacity duration-500">
                <span className="text-6xl font-bold text-foreground/20">{String(index + 1).padStart(2, '0')}</span>
              </div>

              {/* Accent bar with animation */}
              <div className="absolute left-0 top-0 w-2 h-24 bg-gradient-to-b from-foreground/50 via-foreground/30 to-transparent rounded-full ml-10 md:ml-14 group-hover:h-40 transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-5">
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3 group-hover:text-foreground transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-base md:text-lg font-semibold text-foreground/70">{project.role}</p>
                    </div>
                    <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-background/60 dark:bg-background/40 border border-border/40 self-start shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-sm font-medium text-foreground/70 whitespace-nowrap">{project.period}</span>
                    </div>
                  </div>
                  <p className="text-foreground/80 text-base md:text-lg leading-relaxed">{project.description}</p>
                </div>

                {/* Highlights */}
                <div className="mb-10">
                  <h4 className="text-sm font-bold text-foreground/70 mb-5 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-8 h-0.5 bg-foreground/30 group-hover:w-12 transition-all duration-300" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-4">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-5 text-foreground/80 text-sm md:text-base leading-relaxed group/item">
                        <span className="text-foreground/40 flex-shrink-0 pt-1.5 font-bold text-lg group-hover/item:text-foreground/60 group-hover/item:scale-110 transition-all">→</span>
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags with enhanced interaction */}
                <div className="flex flex-wrap gap-3 pt-8 border-t border-border/30 dark:border-border/20">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 text-sm font-semibold backdrop-blur-xl bg-background/50 dark:bg-background/30 border border-border/40 dark:border-border/20 rounded-xl text-foreground/80 hover:bg-background/70 dark:hover:bg-background/40 hover:border-border/70 dark:hover:border-border/50 hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default relative overflow-hidden group/tag"
                    >
                      {/* Tag hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-transparent opacity-0 group-hover/tag:opacity-100 transition-opacity" />
                      <span className="relative z-10">{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/40 dark:bg-card/30 border border-border/30 backdrop-blur-xl">
            <span className="text-sm text-foreground/60">More projects coming soon</span>
          </div>
        </div>
      </div>
    </section>
  )
}
