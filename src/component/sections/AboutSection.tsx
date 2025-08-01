'use client'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 py-12 bg-white dark:bg-black"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Left - About Me */}
        <div className="md:w-1/2 space-y-4 text-left">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a backend-focused full-stack developer skilled in Java (Spring Boot), Python (Django), and frontend technologies like React, Next.js, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
           I have experience with relational and NoSQL databases (PostgreSQL, MySQL, MongoDB) and use Redis for backend performance optimization. I follow best practices in building REST APIs and testing with JUnit and Mockito.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
           I'm also familiar with Git, Docker, Kubernetes, and AWS for deployment, and enjoy solving backend challenges that improve performance, scalability, and clean frontend integration.
          </p>
        </div>

        {/* Right - Experience */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold">Experience</h3>
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="text-xl font-bold">
              Software Engineer – App Crew <br />
              <span className="text-sm text-muted-foreground">
                Feb 2025 – Present
              </span>
            </h4>
            <ul className="list-disc pl-5 mt-2 text-muted-foreground space-y-2 text-base leading-relaxed">
              <li>
                Joined remotely as an intern and got mentored to work on a
                production movies app.
              </li>
              <li>
                Built full-stack with Spring Boot REST APIs and a responsive
                React + Next.js frontend.
              </li>
              <li>
                Optimized DB with Redis caching, automated movie updates with
                cron jobs, deployed on Vercel and AWS.
              </li>
              <li>
                Started resume builder project with Django + PostgreSQL +
                MongoDB for dynamic resume data.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
