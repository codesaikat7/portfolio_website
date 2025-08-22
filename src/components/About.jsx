import { motion } from 'framer-motion'
import profilePic from '../assets/images/profile_pic.jpeg'
import setup from '../assets/images/setup.jpeg'

const About = () => {
  const downloadResume = () => {
    // This would typically link to your actual resume file
    // For now, we'll just show an alert
    alert('Resume download functionality would be implemented here')
  }

  const stats = [
    { label: 'Years of Experience', value: '3+' },
    { label: 'Technologies', value: '15+' },
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better and understand what drives my passion for software development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and personal info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl">
                <img 
                  src={profilePic} 
                  alt="Saikat - Software Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full overflow-hidden shadow-lg">
                <img src={setup} alt="Setup" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Available for new opportunities</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2z" />
                </svg>
                <span>Full-time, Contract, Freelance</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                <span>B.Sc. Mathematics + M.C.A</span>
              </div>
            </div>

            {/* Download Resume Button */}
            <button
              onClick={downloadResume}
              className="btn-primary w-full sm:w-auto flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </button>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate software engineer with a love for creating elegant solutions to complex problems. 
                With over 3 years of experience in full-stack development, I've worked on a variety of projects 
                ranging from web applications to mobile apps and backend services.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My journey in tech started with curiosity and has evolved into a career built on continuous learning. 
                I believe in writing clean, maintainable code and staying up-to-date with the latest technologies 
                and best practices in the industry.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                What I Do
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I specialize in building scalable web applications using modern technologies like React, Node.js, 
                and cloud platforms. My expertise includes frontend development, backend APIs, database design, 
                and DevOps practices.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I enjoy collaborating with cross-functional teams, mentoring junior developers, and contributing 
                to open-source projects. When I'm not coding, you'll find me exploring new technologies, 
                reading tech blogs, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
