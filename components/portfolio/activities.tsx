'use client'

import { Award, Users, Briefcase } from 'lucide-react'

export default function ActivitiesSection() {
  const activities = [
    {
      id: 1,
      title: 'Executive Committee Member',
      organization: 'Faculty Youth Union',
      period: '2024 - Present',
      role: 'Core Team Member',
      description: 'Contributing to organizational development and youth engagement initiatives.',
      icon: Users,
    },
    {
      id: 2,
      title: 'Executive Committee Member',
      organization: 'Faculty of Information Technology Student Association',
      period: '2023 - Present',
      role: 'Committee Member',
      description: 'Organizing academic events, student activities, and peer support programs.',
      icon: Award,
    },
    {
      id: 3,
      title: 'Language & Cultural Exchange Programs',
      organization: 'Chinese Community Center',
      period: '2023 - Present',
      role: 'Participant & Support Staff',
      description: 'Facilitating cross-cultural communication and supporting language learning initiatives.',
      icon: Briefcase,
    },
  ]

  return (
    <section id="activities" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-balance mb-4">Activities & Leadership</h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Extracurricular involvement and organizational leadership demonstrating commitment to community and continuous growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div
                key={activity.id}
                className="group backdrop-blur-lg bg-card/50 border border-border/50 rounded-2xl p-8 hover:bg-card/70 hover:shadow-lg hover:border-border transition-all duration-300 relative overflow-hidden"
              >
                {/* Minimal gradient accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/5 border border-border/50 mb-6 group-hover:bg-foreground/10 transition-colors relative overflow-hidden">
                  {/* Subtle gradient glow on hover */}
                  <div className="absolute inset-0 gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <Icon className="w-6 h-6 text-foreground/60 group-hover:text-foreground transition-colors relative z-10" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-1">{activity.title}</h3>
                <p className="text-sm font-medium text-foreground/60 mb-4">{activity.organization}</p>

                {/* Period and Role */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-foreground/50 uppercase tracking-wide">Period</span>
                    <span className="text-sm text-foreground/70">{activity.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-foreground/50 uppercase tracking-wide">Role</span>
                    <span className="text-sm text-foreground/70">{activity.role}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/70 leading-relaxed">{activity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
