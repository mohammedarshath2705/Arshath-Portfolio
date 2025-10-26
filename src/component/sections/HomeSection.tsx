"use client";
import React, { useState } from "react";
import { Mail, FileText, ExternalLink, Linkedin, Github, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HomeSection = () => {
  const [activeModal, setActiveModal] = useState<"about" | "experience" | null>(
    null
  );

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col px-6 sm:px-8 pt-20 pb-16 md:px-20 bg-white dark:bg-black rounded-3xl shadow-2xl"
    >
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center space-y-4 sm:space-y-5">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
          Mohammed <span className="text-indigo-400">Arshath</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 px-2">
          Backend-Focused Full-Stack Developer | Java • Spring Boot • MERN • DevOps
        </p>
        <p className="max-w-2xl text-gray-400 text-sm sm:text-base leading-relaxed px-4">
          Passionate about building performant, scalable, and secure web
          applications with clean architecture, automation, and seamless user
          experience.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mt-4">
          <a
            href="https://drive.google.com/file/d/1PwJfZIeF5t9idZ9Ryeh_t31BZyAP3Taf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-indigo-500/30"
          >
            <FileText size={18} />
            Resume
          </a>

          <a
            href="https://www.linkedin.com/in/arshathmohammed27"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-blue-500/30"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://github.com/mohammedarshath2705"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-gray-500/30"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="mailto:sm.arshath2003@gmail.com"
            className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300"
          >
            <Mail size={18} />
            Contact
          </a>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-12">
        {/* About Me */}
        <div
          onClick={() => setActiveModal("about")}
          className="cursor-pointer bg-gray-800/60 p-5 sm:p-6 rounded-2xl hover:bg-gray-800/80 transition-all duration-300 shadow-inner group"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-indigo-400 flex items-center justify-between">
            About Me
            <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition">
              (click to view)
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base line-clamp-3">
            Backend-focused full-stack developer skilled in Spring Boot, MERN, and
            DevOps — passionate about performance and scalability.
          </p>
        </div>

        {/* Experience */}
        <div
          onClick={() => setActiveModal("experience")}
          className="cursor-pointer bg-gray-800/60 p-5 sm:p-6 rounded-2xl hover:bg-gray-800/80 transition-all duration-300 shadow-inner group"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-indigo-400 flex items-center justify-between">
            Experience
            <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition">
              (click to view)
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base line-clamp-3">
            Software Engineer – App Crew. Built scalable full-stack systems with
            optimized backends and cloud deployments.
          </p>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {activeModal && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black/70 z-40"
              onClick={() => setActiveModal(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              key="modal"
              className="fixed z-50 inset-0 flex items-center justify-center px-3 sm:px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative bg-gray-900 text-gray-200 p-6 sm:p-8 md:p-10 rounded-3xl max-w-lg sm:max-w-xl md:max-w-2xl w-full shadow-xl flex flex-col items-center justify-center text-center space-y-5 overflow-y-auto max-h-[90vh]">
                {/* Close */}
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <X size={22} />
                </button>

                {activeModal === "about" && (
                  <>
                    <h2 className="text-2xl sm:text-3xl font-bold text-indigo-400">
                      About Me
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed px-1">
                      I’m a backend-focused full-stack developer passionate about building
                      scalable and performant web applications. I specialize in{" "}
                      <span className="text-white font-medium">Java (Spring Boot)</span> and{" "}
                      <span className="text-white font-medium">MERN Stack</span>, with working
                      knowledge of{" "}
                      <span className="text-white font-medium">Python (Django)</span>. <br />
                      <br />
                      Experienced with{" "}
                      <span className="text-white font-medium">
                        PostgreSQL, MySQL, MongoDB
                      </span>{" "}
                      and{" "}
                      <span className="text-white font-medium">Redis</span> for performance
                      optimization. Skilled in{" "}
                      <span className="text-white font-medium">
                        Docker, Kubernetes, AWS
                      </span>{" "}
                      and testing with{" "}
                      <span className="text-white font-medium">JUnit</span> and{" "}
                      <span className="text-white font-medium">Mockito</span>. Focused on
                      building systems that balance{" "}
                      <span className="text-white font-medium">performance</span>,{" "}
                      <span className="text-white font-medium">simplicity</span>, and{" "}
                      <span className="text-white font-medium">
                        developer experience
                      </span>
                      .
                    </p>
                  </>
                )}

                {activeModal === "experience" && (
                  <>
                    <h2 className="text-2xl sm:text-3xl font-bold text-indigo-400">
                      Experience
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      <span className="text-white font-medium">
                        Software Engineer – App Crew (Feb 2025 – July 2025)
                      </span>
                    </p>
                    <ul className="list-disc list-inside text-gray-300 text-left max-w-sm sm:max-w-md md:max-w-lg mx-auto space-y-2 text-sm sm:text-base">
                      <li>
                        Gained hands-on experience as a Backend Engineer at{" "}
                        <span className="text-white font-medium">App Crew</span>, building
                        production-ready apps using{" "}
                        <span className="text-white font-medium">Spring Boot</span>,{" "}
                        <span className="text-white font-medium">Django</span>, and{" "}
                        <span className="text-white font-medium">MERN Stack</span>.
                      </li>
                      <li>
                        Developed and deployed{" "}
                        <span className="text-white font-medium">REST APIs</span> with Redis
                        caching, cron automation, and cloud deployment on{" "}
                        <span className="text-white font-medium">AWS</span>,{" "}
                        <span className="text-white font-medium">Render</span>, and{" "}
                        <span className="text-white font-medium">Vercel</span>.
                      </li>
                      <li>
                        Worked with{" "}
                        <span className="text-white font-medium">PostgreSQL</span>,{" "}
                        <span className="text-white font-medium">MySQL</span>, and{" "}
                        <span className="text-white font-medium">MongoDB</span> for efficient data
                        handling and scalability.
                      </li>
                      <li>
                        Collaborated on full-stack projects ensuring{" "}
                        <span className="text-white font-medium">performance</span>,{" "}
                        <span className="text-white font-medium">clean architecture</span>, and{" "}
                        <span className="text-white font-medium">frontend integration</span>.
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HomeSection;
