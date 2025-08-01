'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const roles = ['Full Stack Developer', 'Problem Solver', 'Hard Worker']

export default function HomeSection() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false) // Start fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length) 
        setFade(true) // Fade in
      }, 300) 
    }, 3000) // Switch every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-5 md:px-6 text-center md:text-left"
    >
      {/* Left - Text */}
      <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6 mt-8 sm:mt-0 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          👋 Hi, I'm <span className="text-orange-500">Mohammed Arshath</span>
        </h1>

        {/* Animated Role */}
        <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground h-[40px]">
          a 
          <span
            className={`inline-block bg-gray-800 text-white px-2 sm:px-3 py-1 rounded-lg shadow transition-all duration-500 ease-in-out transform ${
              fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            {roles[index]}
          </span>{' '}
          from India.
        </div>

        {/* Buttons */}
        <div className="flex gap-3 sm:gap-4 flex-wrap justify-center md:justify-start">
          <a
            href="https://drive.google.com/file/d/10PyFvTxUBwL3smKUDPeWG6hS7pZUJRJZ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium hover:scale-105 transition-transform text-sm sm:text-base md:text-base"
          >
            📄 View CV
          </a>
          <a
            href="#contact"
            className="bg-cyan-600 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium hover:bg-cyan-700 transition-all text-sm sm:text-base md:text-base"
          >
            ✉️ Contact Me
          </a>
        </div>
      </div>

      {/* Right - Profile Image */}
      <div className="flex-1 mt-4 sm:mt-10 md:mt-0 flex justify-center">
        <div className="w-56 sm:w-60 md:w-72 lg:w-80 h-72 sm:h-80 md:h-96 lg:h-[28rem] rounded-xl overflow-hidden shadow-2xl border-4 border-purple-500 ring-4 ring-purple-400">
          <Image
            src="/Arshath_Bhai2.jpg"
            alt="Mohammed Arshath"
            width={320}
            height={450}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}