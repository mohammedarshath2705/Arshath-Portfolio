'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FaExternalLinkAlt, FaCode, FaGithub } from 'react-icons/fa'
import Image from 'next/image'

const projects = [
  {
    title: 'Movies App',
    category: 'Full Stack',
    description:
      'Worked on a production-grade full-stack Movies app using Spring Boot REST APIs and a responsive React, Next.js frontend. Optimized with Redis caching and cron jobs. Backend deployed to AWS; frontend on Vercel.',
    images: [
      '/MoviesApp_image1.png',
      '/MoviesApp_image2.png',
      '/MoviesApp_image3.png',
      '/MoviesApp_image4.png',
    ],
    tech: ['Spring Boot', 'React', 'Next.js', 'TypeScript', 'Redis', 'Tailwind'],
    links: {
      live: 'https://movies-app-frontend-five.vercel.app/',
      frontend: 'https://github.com/mohammedarshath2705/Movies_App-Frontend',
      backend: 'https://github.com/mohammedarshath2705/Movies_App',
    },
  },
  {
    title: 'E-Wallet Application',
    category: 'Backend',
    description:
      'Scalable E-Wallet app using Java and Spring Boot microservices. Features secure user authentication with Spring Security & OAuth2. CI/CD via Jenkins pipelines.',
    image: '/EWallet_image.jpg',
    tech: ['Java', 'Spring Boot', 'OAuth2', 'Microservices', 'Jenkins'],
    links: {
      code: 'https://github.com/mohammedarshath2705/SpringBoot-Projects/tree/assignment/HeroPay',
    },
  },
  {
    title: 'Library Management System',
    category: 'Backend',
    description:
      'A complete library system with book inventory, subscriptions, and borrow tracking. Built REST APIs using Spring Boot and PostgreSQL. Used JPA for efficient data access.',
    image: '/Library_image.png',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Spring Data JPA'],
    links: {
      code: 'https://github.com/mohammedarshath2705/SpringBoot-Projects/tree/assignment/DigitalLibrary',
    },
  },
  {
    title: 'Weather App',
    category: 'Frontend',
    description:
      'A sleek and responsive weather app built with React, Vite, and Tailwind CSS. It fetches real-time weather data and displays temperature, humidity, and weather conditions based on user input.',
    image: '/WeatherApp_images.png',
    tech: ['React', 'Vite', 'Tailwind CSS', 'OpenWeatherMap API', 'Vercel'],
    links: {
      live: 'https://weather-app-swart-eight-11.vercel.app/',
      code: 'https://github.com/mohammedarshath2705/WeatherApp',
    },
  },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full px-4 py-16 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Projects
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mb-12">
        Here's a selection of projects that showcase my skills and passion for
        building exceptional digital experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1d1d1d] rounded-xl shadow-lg border border-gray-700 hover:border-teal-400 transition duration-300 p-5 flex flex-col justify-between"
          >
            <div className="mb-4 relative group">
              {project.images ? (
                <Swiper
                  modules={[Navigation, Autoplay, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  loop
                  className="rounded-lg"
                >
                  {project.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        src={img}
                        alt={`${project.title} image ${i + 1}`}
                        width={600}
                        height={300}
                        className="rounded-lg object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="rounded-lg object-cover"
                />
              )}
            </div>

            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <span className="text-xs bg-teal-600 text-white px-2 py-0.5 rounded-full">
                {project.category}
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-auto">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 text-teal-400 hover:underline"
                >
                  Live Demo <FaExternalLinkAlt size={12} />
                </a>
              )}

              {project.links.frontend && (
                <a
                  href={project.links.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 text-teal-400 hover:underline"
                >
                  Frontend <FaCode size={14} />
                </a>
              )}

              {project.links.backend && (
                <a
                  href={project.links.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 text-teal-400 hover:underline"
                >
                  Backend <FaCode size={14} />
                </a>
              )}

              {project.links.code &&
                !project.links.frontend &&
                !project.links.backend && (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 text-teal-400 hover:underline"
                  >
                    Code <FaCode size={14} />
                  </a>
                )}
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://github.com/mohammedarshath2705"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-2 border border-white/20 text-white px-6 py-2 rounded-full hover:bg-white/10 transition duration-300 shadow-sm"
      >
        View More Projects <FaGithub size={18} />
      </a>
    </section>
  )
}
