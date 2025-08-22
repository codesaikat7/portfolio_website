import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import LottieAnimation from './LottieAnimation'
import { AnimatePresence } from 'framer-motion'
import { name, title, about, social, contact, SOCIAL_ICONS } from '../config/personalInfo'

const Hero = ({ scrolled = false, onBotClick }) => {
  const [botAnimationData, setBotAnimationData] = useState(null)

  // Load the bot animation
  useEffect(() => {
    fetch('/lottie/bot.json')
      .then(response => response.json())
      .then(data => setBotAnimationData(data))
      .catch(error => console.log('Error loading bot animation:', error))
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 lg:pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/30 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-3"
            >
              {name}
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4 px-4 sm:px-6 lg:px-0"
            >
              {title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-6 lg:px-0"
            >
              {about.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 px-6 sm:px-8 lg:px-0"
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn-secondary"
              >
                View My Work
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mb-4 px-2 sm:px-0"
            >
              {/* GitHub */}
              <a
                href={social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                title={`GitHub: ${social.github.username}`}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d={SOCIAL_ICONS.github.path} />
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a
                href={social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                title={`LinkedIn: ${social.linkedin.username}`}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d={SOCIAL_ICONS.linkedin.path} />
                </svg>
              </a>
              
              {/* Instagram */}
              <a
                href={social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                title={`Instagram: ${social.instagram.username}`}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d={SOCIAL_ICONS.instagram.path} />
                </svg>
              </a>
              
              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="p-2.5 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                title="Send me an email"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Lottie Animation - Only show when not scrolled */}
          <AnimatePresence>
            {!scrolled && botAnimationData && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 flex justify-center lg:justify-end"
              >
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative group cursor-pointer" onClick={onBotClick}>
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center text-2xl font-black tracking-widest text-cyan-500 dark:text-cyan-400 drop-shadow-2xl"
                  >
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      Ask Me!
                    </motion.span>
                  </motion.p>
                  <LottieAnimation
                    animationData={botAnimationData}
                    className="w-full h-full"
                    loop={true}
                    autoplay={true}
                  />
                  
                  {/* Subtle click hint on hover */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full shadow-lg">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Click to chat!</span>
                    </div>
                  </motion.div>
                  

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <span className="text-xs mb-1">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
