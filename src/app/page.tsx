'use client'

import HomeSection from '@/component/sections/HomeSection'
import SkillsSection from '@/component/sections/SkillsSection'
import EducationSection from '@/component/sections/EducationSection'
import ProjectsSection from '@/component/sections/ProjectsSection'
import ContactSection from '@/component/sections/ContactSection'
import AboutSection from '@/component/sections/AboutSection'

export default function Page() {
  return (
    <div className="relative scroll-smooth">

      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
