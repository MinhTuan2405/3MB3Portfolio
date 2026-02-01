'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function ContactInfoSection() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nhungpth.cnthongtin@gmail.com',
      href: 'mailto:nhungpth.cnthongtin@gmail.com',
      isLink: true
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+84 378 859 234',
      href: 'tel:+84378859234',
      isLink: false
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ho Chi Minh City, Vietnam',
      isLink: false
    }
  ]

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Contact Information</h2>
          <p className="text-base text-foreground/60">Get in touch with me through any of these channels</p>
        </div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contacts.map((contact, index) => {
            const cardContent = (
              <>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="flex items-start gap-5 relative z-10">
                  <div className="p-3 rounded-xl bg-background/50 dark:bg-background/30 border border-border/30 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    {/* Gradient icon glow effect */}
                    <div className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 gradient-primary" />
                    <div className="absolute inset-0 rounded-xl gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <contact.icon className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-colors relative z-10" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground/60 mb-2 uppercase tracking-wide">
                      {contact.label}
                    </h3>
                    <p className="text-foreground/90 text-sm md:text-base break-all group-hover:text-foreground transition-colors leading-relaxed">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </>
            )
            
            const cardClassName = "group backdrop-blur-2xl bg-card/50 dark:bg-card/30 border border-border/50 dark:border-border/30 rounded-2xl p-7 hover:bg-card/70 dark:hover:bg-card/40 hover:border-border dark:hover:border-border/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
            
            return contact.isLink && contact.href ? (
              <Link
                key={index}
                href={contact.href}
                className={cardClassName}
              >
                {cardContent}
              </Link>
            ) : (
              <div
                key={index}
                className={cardClassName}
              >
                {cardContent}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
