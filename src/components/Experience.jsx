import { motion } from 'framer-motion'
import { experienceData } from '../data/experienceData.jsx'
import { useState } from 'react'

const Experience = () => {
  const { workExperience, education, certifications } = experienceData
  const [selectedCertificate, setSelectedCertificate] = useState(null)

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
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-2">
                      <div>
                        <img src={edu.logo} alt={edu.alt} className="w-8 h-8 rounded-sm" />
                      </div>
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
                
                {/* Degree Certificate */}
                {edu.certificate && (
                  <div className="mt-4">
                    <button
                      onClick={() => setSelectedCertificate(edu)}
                      className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="text-sm font-medium">View Certificate</span>
                    </button>
                  </div>
                )}
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
            Certifications & Achievements
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
                <div className="p-6">
                  {/* Certification Icon */}
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {cert.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                    {cert.date}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    {cert.description}
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-mono bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded inline-block">
                    {cert.credential}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Certificate Modal */}
      {selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {selectedCertificate.degree}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedCertificate.institution}
                </p>
              </div>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Certificate PDF Display */}
            <div className="p-4">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Certificate Available
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  This is a PDF certificate that can be viewed or downloaded.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={selectedCertificate.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>View PDF</span>
                  </a>
                  <a
                    href={selectedCertificate.certificate}
                    download
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p><strong>Duration:</strong> {selectedCertificate.duration}</p>
                  <p><strong>Location:</strong> {selectedCertificate.location}</p>
                </div>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Experience
