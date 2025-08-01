'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.sendForm(
        'service_n8avpkf',
        'template_dzxjfta',
        form.current!,
        '0R61EQY9d-zM68icb'
      )
      setSent(true)
      setTimeout(() => setSent(false), 5000) // hides after 5 seconds
      form.current?.reset()
    } catch (error) {
      console.error('Email send error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="min-h-[80vh] px-4 sm:px-5 md:px-6 py-10 flex flex-col justify-start items-center text-white scroll-mt-[80px]"
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">Let's Connect</h2>
      <div className="w-20 h-1 bg-green-300 mb-4 rounded-full" />
      <p className="text-center text-gray-300 mb-8 max-w-xl text-xs sm:text-sm md:text-sm">
        Open to new opportunities! Feel free to connect and collaborate.
      </p>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-4 mb-8">
        <a
          href="mailto:sm.arshath2003@gmail.com"
          className="rounded-full border border-gray-500 p-2 sm:p-2.5 md:p-3 hover:bg-green-400 hover:text-black transition-all"
        >
          <FaEnvelope size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/arshathmohammed27/"
          target="_blank"
          className="rounded-full border border-gray-500 p-2 sm:p-2.5 md:p-3 hover:bg-green-400 hover:text-black transition-all"
        >
          <FaLinkedin size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>
        <a
          href="https://github.com/mohammedarshath2705"
          target="_blank"
          className="rounded-full border border-gray-500 p-2 sm:p-2.5 md:p-3 hover:bg-green-400 hover:text-black transition-all"
        >
          <FaGithub size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>
        <a
          href="https://www.instagram.com/__arshath__03?igsh=dTlwbjF5amUxZG05"
          target="_blank"
          className="rounded-full border border-gray-500 p-2 sm:p-2.5 md:p-3 hover:bg-green-400 hover:text-black transition-all"
        >
          <FaInstagram size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>
      </div>

      {/* EmailJS Contact Form */}
      <div className="max-w-xl w-full mx-auto p-4 sm:p-5 md:p-6 rounded-xl shadow-lg bg-[#1b1f32] border border-[#39415f]">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block mb-1 text-xs sm:text-sm md:text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full p-2 sm:p-2.5 md:p-2 rounded bg-[#1b1f32] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400 text-sm sm:text-sm md:text-sm"
            />
          </div>
          <div>
            <label className="block mb-1 text-xs sm:text-sm md:text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full p-2 sm:p-2.5 md:p-2 rounded bg-[#1b1f32] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400 text-sm sm:text-sm md:text-sm"
            />
          </div>
          <div>
            <label className="block mb-1 text-xs sm:text-sm md:text-sm font-medium">Subject</label>
            <input
              type="text"
              name="title"
              placeholder="Subject (optional)"
              className="w-full p-2 sm:p-2.5 md:p-2 rounded bg-[#1b1f32] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400 text-sm sm:text-sm md:text-sm"
            />
          </div>
          <div>
            <label className="block mb-1 text-xs sm:text-sm md:text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Your message..."
              className="w-full p-2 sm:p-2.5 md:p-2 rounded bg-[#1b1f32] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400 text-sm sm:text-sm md:text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-700 transition-all py-2 sm:py-2.5 md:py-2 px-4 rounded text-white font-semibold disabled:opacity-50 text-sm sm:text-sm md:text-base"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {sent && (
          <p className="text-center text-green-400 mt-4 text-xs sm:text-sm md:text-sm">
            ✅ Your message has been sent successfully!
          </p>
        )}
      </div>
    </section>
  )
}