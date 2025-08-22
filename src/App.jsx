import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LottieAnimation from './components/LottieAnimation'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [botAnimationData, setBotAnimationData] = useState(null)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode')
    // Default to dark mode if no preference is stored
    const shouldUseDarkMode = isDark === null ? true : isDark === 'true'
    setDarkMode(shouldUseDarkMode)
    
    if (shouldUseDarkMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  // Load the bot animation
  useEffect(() => {
    fetch('/lottie/bot.json')
      .then(response => response.json())
      .then(data => setBotAnimationData(data))
      .catch(error => console.log('Error loading bot animation:', error))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', newMode.toString())
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const scrollToSection = (sectionId) => {
    console.log('Scrolling to section:', sectionId) // Debug log
    const element = document.getElementById(sectionId)
    if (element) {
      // Close mobile menu first
      setMobileMenuOpen(false)
      
      // Small delay to ensure menu closes before scrolling
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' })
        console.log('Section found and scrolled') // Debug log
      }, 100)
    } else {
      console.log('Section not found:', sectionId) // Debug log
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gradient cursor-pointer hover:opacity-80 transition-opacity duration-200"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Saikat
            </motion.div>

            {/* Bot Animation - Only show when scrolled */}
            <AnimatePresence>
              {scrolled && botAnimationData && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="mt-5"
                >
                  <LottieAnimation
                    animationData={botAnimationData}
                    className="w-16 h-16 sm:w-20 sm:h-20"
                    loop={true}
                    autoplay={true}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {darkMode ? (
                  <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {mobileMenuOpen ? (
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 absolute top-full left-0 right-0 z-50"
              >
                <div className="py-4 px-4 space-y-2">
                  {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="block w-full text-left px-4 sm:px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 capitalize rounded-lg font-medium text-base sm:text-lg"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
