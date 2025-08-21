import { motion } from 'framer-motion'

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Senior Software Engineer',
      duration: 'Jan 2023 - Present',
      location: 'San Francisco, CA',
      description: 'Leading development of enterprise-scale web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices for code quality and performance.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'Docker'],
      achievements: [
        'Reduced application load time by 40% through optimization and caching strategies',
        'Led a team of 5 developers to deliver a major feature ahead of schedule',
        'Implemented CI/CD pipeline that reduced deployment time by 60%'
      ],
      website: 'https://techcorp.com'
    },
    {
      id: 2,
      company: 'StartupHub Inc.',
      position: 'Full Stack Developer',
      duration: 'Mar 2021 - Dec 2022',
      location: 'San Francisco, CA',
      description: 'Developed and maintained multiple web applications for startup clients. Worked closely with product managers and designers to deliver user-centric solutions.',
      technologies: ['React', 'Next.js', 'Python', 'Django', 'PostgreSQL', 'Vercel'],
      achievements: [
        'Built 3 client applications that increased user engagement by 35%',
        'Developed reusable component library used across multiple projects',
        'Collaborated with cross-functional teams to deliver MVP products'
      ],
      website: 'https://startuphub.com'
    },
    {
      id: 3,
      company: 'Digital Innovations',
      position: 'Frontend Developer',
      duration: 'Jun 2020 - Feb 2021',
      location: 'Remote',
      description: 'Focused on creating responsive and accessible user interfaces. Collaborated with UX designers to implement pixel-perfect designs and improve user experience.',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Git', 'Figma'],
      achievements: [
        'Improved website accessibility score from 75% to 95%',
        'Reduced bundle size by 25% through code optimization',
        'Implemented responsive design for mobile-first approach'
      ],
      website: 'https://digitalinnovations.com'
    }
  ]

  const education = [
    {
      id: 1,
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2016 - 2020',
      location: 'Berkeley, CA',
      description: 'Focused on software engineering, algorithms, and data structures. Participated in hackathons and coding competitions.',
      achievements: [
        'GPA: 3.8/4.0',
        'Dean\'s List: 3 years',
        'Computer Science Honor Society member',
        'Capstone project: AI-powered recommendation system'
      ]
    }
  ]

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Developer Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'AWS-123456789'
    },
    {
      id: 2,
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2022',
      credential: 'MDB-987654321'
    },
    {
      id: 3,
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2021',
      credential: 'REACT-456789123'
    }
  ]

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey, educational background, and continuous learning path
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Work Experience
            </h3>
          </motion.div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
                viewport={{ once: true }}
                className="card hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Left side - Company info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {job.position}
                        </h4>
                        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-3">
                          <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></svg>
                            <span className="font-medium">{job.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>
                          <span>{job.duration}</span>
                        </div>
                      </div>
                      {job.website && (
                        <a
                          href={job.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="m18 13-6-6-6 6"/><path d="M12 19.4V5.6"/><path d="M21 12h-6"/></svg>
                        </a>
                      )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {job.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h5 className="font-medium text-gray-900 dark:text-white">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                            <span className="text-blue-500 mt-1">•</span>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Education
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
                viewport={{ once: true }}
                className="card hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/><path d="M12 19.4V5.6"/><path d="M21 12h-6"/></svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-medium">{edu.institution}</span>
                      <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-500 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-900 dark:text-white">Achievements:</h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                    {cert.date}
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-mono">
                    {cert.credential}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
