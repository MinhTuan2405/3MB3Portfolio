import HeroSection from '@/components/portfolio/hero'
import ContactInfoSection from '@/components/portfolio/contact-info'
import EducationSection from '@/components/portfolio/education'
import ExperienceSection from '@/components/portfolio/experience'
import ProjectsSection from '@/components/portfolio/projects'
import ActivitiesSection from '@/components/portfolio/activities'
import FooterSection from '@/components/portfolio/footer'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Page() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <ThemeToggle />
      <HeroSection />
      <ContactInfoSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <ActivitiesSection />
      <FooterSection />
    </div>
  )
}
