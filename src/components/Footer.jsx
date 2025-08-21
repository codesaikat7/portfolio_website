import { motion } from 'framer-motion'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-12 sm:py-16">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 px-2 sm:px-0"
            >
              <h3 className="text-2xl font-bold text-gradient">
                Saikat
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md text-sm sm:text-base">
                A passionate software engineer dedicated to creating exceptional digital experiences 
                and solving complex problems with innovative solutions.
              </p>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 px-2 sm:px-0"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 px-2 sm:px-0"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h4>
              <div className="space-y-3">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="text-blue-600 dark:text-blue-400">Email:</span> code.saikat7@gmail.com
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="text-blue-600 dark:text-blue-400">Location:</span> Bengaluru, Karnataka, India
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="text-blue-600 dark:text-blue-400">Status:</span> Available for opportunities
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-300 dark:border-gray-700 py-6 sm:py-8 px-2 sm:px-0">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400 text-center md:text-left text-sm sm:text-base"
            >
              <p>
                © {new Date().getFullYear()} Saikat. All rights reserved. Made with{' '}
                <span className="text-red-500 animate-pulse">❤️</span>{' '}
                and lots of ☕
              </p>
            </motion.div>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 text-sm sm:text-base"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
              </svg>
              <span>Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating back to top button for mobile */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        viewport={{ once: true }}
        className="fixed bottom-6 right-6 lg:hidden p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-40"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
        </svg>
      </motion.button>
    </footer>
  )
}

export default Footer
