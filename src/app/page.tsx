'use client'

import HomeSection from '@/component/sections/HomeSection'
import SkillsSection from '@/component/sections/SkillsSection'
import ProjectsSection from '@/component/sections/ProjectsSection'
import ContactSection from '@/component/sections/ContactSection'

export default function Page() {
  return (
    <div className="relative scroll-smooth">

      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
