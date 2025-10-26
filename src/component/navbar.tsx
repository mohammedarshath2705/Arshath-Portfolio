'use client'

import { useState } from 'react'
import { Home, User,Code, Briefcase, GraduationCap, Laptop2, Mail, Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home', icon: <Home size={18} /> },
  { href: '#skills', label: 'Skills', icon: <Code size={18} /> },
  { href: '#projects', label: 'Projects', icon: <Laptop2 size={18} /> },
  { href: '#contact', label: 'Contact', icon: <Mail size={18} /> },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="w-full flex justify-center fixed top-4 z-50">
      {/* Desktop and Tablet Menu */}
      <ul className="hidden sm:flex flex-wrap gap-2 md:gap-4 p-2 px-4 rounded-full border bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/30 backdrop-blur text-white shadow-md">
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all"
            >
              {link.icon}
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden p-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 backdrop-blur text-white fixed right-4"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden fixed top-16 left-0 right-0 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 border-b border-cyan-500/30 backdrop-blur text-white shadow-md">
          <ul className="flex flex-col items-center gap-4 p-4">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all"
                  onClick={toggleMenu}
                >
                  {link.icon}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}