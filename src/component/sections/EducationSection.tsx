'use client'

import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function EducationSection() {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-black text-white"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-white text-center">Education</h2>
      <p className="text-muted-foreground text-base sm:text-lg mb-12 text-center">
        My academic background and qualifications.
      </p>

      <div className="w-full max-w-5xl space-y-6">
        {/* College */}
        <div className="bg-[#0D0D2B] border border-cyan-500 rounded-xl p-5 sm:p-6 flex justify-between items-center flex-col sm:flex-row transition-all duration-300 hover:scale-[1.02] active:scale-95 focus-within:ring-2 ring-cyan-500">
          <div className="text-left space-y-1">
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-400">
              B.E. Electronics & Communication Engineering
            </h3>
            <p className="text-sm sm:text-base text-gray-300">Saranathan College of Engineering</p>
            <div className="flex items-center text-sm text-gray-400 mt-1 flex-wrap">
              <FaCalendarAlt className="mr-2" /> 2020 - 2024
              <FaMapMarkerAlt className="ml-4 mr-2" /> Trichy
            </div>
          </div>
          <div className="text-green-400 text-lg font-bold mt-4 sm:mt-0">8.3 / 10</div>
        </div>

        {/* HSC */}
        <div className="bg-[#0D0D2B] border border-cyan-500 rounded-xl p-5 sm:p-6 flex justify-between items-center flex-col sm:flex-row transition-all duration-300 hover:scale-[1.02] active:scale-95 focus-within:ring-2 ring-cyan-400">
          <div className="text-left space-y-1">
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-400">HSC (12th)</h3>
            <p className="text-sm sm:text-base text-gray-300">
              S.B.I.O.A Matriculation Higher Secondary School
            </p>
            <div className="flex items-center text-sm text-gray-400 mt-1 flex-wrap">
              <FaCalendarAlt className="mr-2" /> 2017 - 2018
              <FaMapMarkerAlt className="ml-4 mr-2" /> Trichy
            </div>
          </div>
          <div className="text-green-400 text-lg font-bold mt-4 sm:mt-0">73.3%</div>
        </div>

        {/* SSLC */}
        <div className="bg-[#0D0D2B] border border-cyan-500 rounded-xl p-5 sm:p-6 flex justify-between items-center flex-col sm:flex-row transition-all duration-300 hover:scale-[1.02] active:scale-95 focus-within:ring-2 ring-cyan-400">
          <div className="text-left space-y-1">
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-400">SSLC (10th)</h3>
            <p className="text-sm sm:text-base text-gray-300">
              S.B.I.O.A Matriculation Higher Secondary School
            </p>
            <div className="flex items-center text-sm text-gray-400 mt-1 flex-wrap">
              <FaCalendarAlt className="mr-2" /> 2019 - 2020
              <FaMapMarkerAlt className="ml-4 mr-2" /> Trichy
            </div>
          </div>
          <div className="text-green-400 text-lg font-bold mt-4 sm:mt-0">90.6%</div>
        </div>
      </div>
    </section>
  )
}
