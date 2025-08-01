'use client'

import { useState } from 'react'
import {
  SiJavascript, SiTypescript, SiPython,
  SiHtml5, SiCss3, SiReact, SiNextdotjs, SiTailwindcss,
  SiSpring, SiDjango, SiPostgresql, SiMysql, SiMongodb, SiRedis,
  SiGit, SiLinux, SiDocker, SiKubernetes, SiJenkins, SiAmazon, SiPostman,
  SiIntellijidea, SiVercel, SiGithub
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { SiVsco } from 'react-icons/si'

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Databases', 'Tools']

const skills = [
  { category: 'Languages', name: 'Java', icon: <FaJava className="text-[#f89820]" /> },
  { category: 'Languages', name: 'JavaScript', icon: <SiJavascript className="text-[#f7df1e]" /> },
  { category: 'Languages', name: 'TypeScript', icon: <SiTypescript className="text-[#3178c6]" /> },
  { category: 'Languages', name: 'Python', icon: <SiPython className="text-[#3776ab]" /> },
  { category: 'Frontend', name: 'HTML', icon: <SiHtml5 className="text-[#e34f26]" /> },
  { category: 'Frontend', name: 'CSS', icon: <SiCss3 className="text-[#1572b6]" /> },
  { category: 'Frontend', name: 'React', icon: <SiReact className="text-[#61dafb]" /> },
  { category: 'Frontend', name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { category: 'Frontend', name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38bdf8]" /> },
  { category: 'Backend', name: 'Spring Boot', icon: <SiSpring className="text-[#6db33f]" /> },
  { category: 'Backend', name: 'Spring Security', icon: <SiSpring className="text-[#6db33f]" /> },
  { category: 'Backend', name: 'Django', icon: <SiDjango className="text-[#092e20]" /> },
  { category: 'Databases', name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" /> },
  { category: 'Databases', name: 'MySQL', icon: <SiMysql className="text-[#00758f]" /> },
  { category: 'Databases', name: 'MongoDB', icon: <SiMongodb className="text-[#47a248]" /> },
  { category: 'Databases', name: 'Redis', icon: <SiRedis className="text-[#dc382d]" /> },
  { category: 'Tools', name: 'Git', icon: <SiGit className="text-[#f05032]" /> },
  { category: 'Tools', name: 'Linux', icon: <SiLinux className="text-black" /> },
  { category: 'Tools', name: 'Docker', icon: <SiDocker className="text-[#2496ed]" /> },
  { category: 'Tools', name: 'Kubernetes', icon: <SiKubernetes className="text-[#326ce5]" /> },
  { category: 'Tools', name: 'Jenkins', icon: <SiJenkins className="text-[#d24939]" /> },
  { category: 'Tools', name: 'AWS', icon: <SiAmazon className="text-[#ff9900]" /> },
  { category: 'Tools', name: 'Postman', icon: <SiPostman className="text-[#ff6c37]" /> },
  { category: 'Tools', name: 'VS Code', icon: <SiVsco className="text-[#007acc]" /> },
  { category: 'Tools', name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> },
  { category: 'Tools', name: 'IntelliJ', icon: <SiIntellijidea className="text-[#000000]" /> },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="min-h-screen py-12 sm:py-14 md:py-16 px-4 sm:px-8 md:px-12 bg-white dark:bg-black">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-6 sm:mb-8 md:mb-8">
        Skills
      </h2>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-9 md:mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 md:py-2 rounded-full text-xs sm:text-sm md:text-sm font-semibold border transition-all duration-200
              ${activeCategory === cat
                ? 'bg-purple-600 text-white'
                : 'bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-zinc-700 hover:bg-purple-100 dark:hover:bg-zinc-800'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-2 p-3 sm:p-3.5 md:p-4 rounded-xl bg-white dark:bg-zinc-900 shadow hover:scale-105 transition-all"
          >
            <div className="text-2xl sm:text-2xl md:text-3xl">{skill.icon}</div>
            <div className="text-xs sm:text-sm md:text-sm font-medium text-center">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}