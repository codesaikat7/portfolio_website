import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-700' },
        { name: 'Next.js', level: 80, color: 'from-gray-600 to-gray-700' },
        { name: 'Tailwind CSS', level: 90, color: 'from-cyan-500 to-blue-500' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-orange-500' }
      ]
    },
    {
      title: 'Backend Development',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'Express.js', level: 80, color: 'from-gray-500 to-gray-600' },
        { name: 'Python', level: 75, color: 'from-blue-500 to-indigo-600' },
        { name: 'Django', level: 70, color: 'from-green-600 to-green-700' },
        { name: 'REST APIs', level: 90, color: 'from-purple-500 to-purple-600' },
        { name: 'GraphQL', level: 75, color: 'from-pink-500 to-pink-600' }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-600' },
        { name: 'PostgreSQL', level: 75, color: 'from-blue-500 to-blue-600' },
        { name: 'Redis', level: 70, color: 'from-red-500 to-red-600' },
        { name: 'AWS', level: 75, color: 'from-orange-500 to-orange-600' },
        { name: 'Docker', level: 80, color: 'from-blue-500 to-blue-600' },
        { name: 'Kubernetes', level: 65, color: 'from-blue-600 to-blue-700' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        { name: 'Git', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'CI/CD', level: 80, color: 'from-blue-500 to-blue-600' },
        { name: 'Linux', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'Nginx', level: 75, color: 'from-green-500 to-green-600' },
        { name: 'Jenkins', level: 70, color: 'from-red-500 to-red-600' },
        { name: 'Terraform', level: 65, color: 'from-purple-500 to-purple-600' }
      ]
    },
    {
      title: 'Other Technologies',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      skills: [
        { name: 'Firebase', level: 80, color: 'from-orange-500 to-yellow-500' },
        { name: 'MongoDB Atlas', level: 75, color: 'from-green-500 to-green-600' },
        { name: 'Vercel', level: 85, color: 'from-gray-500 to-gray-600' },
        { name: 'Netlify', level: 80, color: 'from-green-500 to-green-600' },
        { name: 'Jest', level: 75, color: 'from-red-500 to-red-600' },
        { name: 'Cypress', level: 70, color: 'from-green-500 to-green-600' }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Additional Skills & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Agile Methodologies', 'Team Leadership', 'Technical Writing', 
              'Public Speaking', 'Open Source', 'Mentoring', 'Problem Solving',
              'System Design', 'Microservices', 'API Design', 'Performance Optimization',
              'Security Best Practices', 'Code Review', 'Pair Programming'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + (index * 0.05) }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
