import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { groqService } from '../services/groqService'
import { PERSONAL_INFO, skills, education, experience, contact, about, social } from '../config/personalInfo.js'
import { experienceData, skillsData } from '../data/experienceData.jsx'

// Audio context for playing sounds
let audioContext = null
let audioBuffer = null

const Chatbot = ({ isOpen, onToggle, darkMode }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm Saikat's AI assistant. I can answer questions about my background, skills, experience, and projects. What would you like to know?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Initialize audio context and create notification sound
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AudioContext) {
      try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)()
        createNotificationSound()
          } catch (error) {
      // Audio context not supported in this browser
    }
    }
  }, [])

  // Create a pleasant notification sound
  const createNotificationSound = () => {
    if (!audioContext) return

    try {
      const sampleRate = audioContext.sampleRate
      const duration = 0.3 // 300ms
      const frequency = 800 // Hz
      const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate)
      const data = buffer.getChannelData(0)

      for (let i = 0; i < buffer.length; i++) {
        const t = i / sampleRate
        // Create a pleasant bell-like sound with fade in/out
        const envelope = Math.exp(-t * 8) * (1 - Math.exp(-t * 2))
        data[i] = Math.sin(2 * Math.PI * frequency * t) * envelope * 0.3
      }

      audioBuffer = buffer
    } catch (error) {
      // Error creating notification sound
    }
  }

  // Play notification sound
  const playNotificationSound = () => {
    if (!audioContext || !audioBuffer || !soundEnabled) return

    try {
      const source = audioContext.createBufferSource()
      source.buffer = audioBuffer
      source.connect(audioContext.destination)
      source.start(0)
    } catch (error) {
      // Error playing notification sound
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
      // Play notification sound when chat opens
      playNotificationSound()
    }
  }, [isOpen])

  // Close chat when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.chatbot-container')) {
        onToggle()
      }
    }

    // Only add this on mobile devices
    if (window.innerWidth < 640) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onToggle])

  // Enhanced knowledge base about Saikat using actual data
  const knowledgeBase = {
    background: {
      education: education?.degree || "I have a B.Sc. in Mathematics and an M.C.A (Master of Computer Applications) degree.",
      location: contact?.location || "I'm based in Bengaluru, Karnataka, India.",
      availability: contact?.availability || "I'm currently available for new opportunities - full-time, contract, and freelance work.",
      experience: `${experienceData?.workExperience?.length || 3}+ years of experience in software development.`
    },
    skills: {
      technical: `I'm proficient in various technologies including ${skills?.technical?.slice(0, 6).join(', ')} and more.`,
      soft: `I have strong ${skills?.soft?.slice(0, 3).join(', ')} abilities and excellent communication skills.`,
      learning: "I'm always expanding my skill set and staying updated with the latest industry trends."
    },
    projects: {
      portfolio: "This portfolio showcases my skills and projects. I built it using React, Tailwind CSS, and Framer Motion.",
      experience: `I've worked on various projects including ${experienceData?.workExperience?.[0]?.description || 'web applications, APIs, and full-stack solutions'}.`,
      github: `You can find more of my work on my GitHub profile (${social?.github?.username}).`
    },
    contact: {
      email: `Feel free to reach out via email (${contact?.email}) or LinkedIn (${social?.linkedin?.username}) for professional inquiries.`,
      availability: contact?.availability || "I'm open to discussing new opportunities and collaborations.",
      response: `I typically respond to professional inquiries within ${contact?.responseTime || '24 hours'}.`
    }
  }

  const getQuickReplies = () => [
    "Tell me about your background",
    "What are your technical skills?",
    "What projects have you worked on?",
    "Are you available for new opportunities?",
    "How can I contact you?"
  ]



  // Render message content with proper formatting
  const renderMessageContent = (content) => {
    // Better URL detection that handles commas and punctuation
    const urlRegex = /(https?:\/\/[^\s,]+)/g
    
    // Platform name mapping
    const getPlatformName = (url) => {
      const cleanUrl = url.toLowerCase()
      if (cleanUrl.includes('github.com')) return 'GitHub'
      if (cleanUrl.includes('linkedin.com')) return 'LinkedIn'
      if (cleanUrl.includes('instagram.com')) return 'Instagram'
      if (cleanUrl.includes('twitter.com') || cleanUrl.includes('x.com')) return 'Twitter/X'
      if (cleanUrl.includes('facebook.com')) return 'Facebook'
      if (cleanUrl.includes('youtube.com')) return 'YouTube'
      if (cleanUrl.includes('behance.net')) return 'Behance'
      if (cleanUrl.includes('dribbble.com')) return 'Dribbble'
      
      // Default: extract domain name
      const domain = url.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0]
      return domain
    }
    
    // Find all URLs in the content
    const urls = content.match(urlRegex) || []
    
    // Replace URLs with placeholders first
    let processedContent = content
    const urlMap = new Map()
    
    urls.forEach((url, index) => {
      const placeholder = `__URL_${index}__`
      urlMap.set(placeholder, url)
      processedContent = processedContent.replace(url, placeholder)
    })
    
    // Split by placeholders
    const parts = processedContent.split(/(__URL_\d+__)/)
    
    return parts.map((part, index) => {
      if (part.startsWith('__URL_') && part.endsWith('__')) {
        // This is a URL placeholder - render the actual URL
        const originalUrl = urlMap.get(part)
        const cleanUrl = originalUrl.replace(/[,.]$/, '')
        const platformName = getPlatformName(cleanUrl)
        
        return (
          <span key={index} className="inline-block">
            <a 
              href={cleanUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline break-all"
            >
              {platformName}
            </a>
          </span>
        )
      }
      // Regular text
      return <span key={index}>{part}</span>
    })
  }

  const findBestResponse = (question) => {
    const lowerQuestion = question.toLowerCase()
    
    if (lowerQuestion.includes('background') || lowerQuestion.includes('education') || lowerQuestion.includes('degree')) {
      return knowledgeBase.background.education + " " + knowledgeBase.background.location
    }
    if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology') || lowerQuestion.includes('tech')) {
      return knowledgeBase.skills.technical + " " + knowledgeBase.skills.soft
    }
    if (lowerQuestion.includes('project') || lowerQuestion.includes('work') || lowerQuestion.includes('experience')) {
      return knowledgeBase.projects.experience + " " + knowledgeBase.projects.portfolio
    }
    if (lowerQuestion.includes('available') || lowerQuestion.includes('opportunity') || lowerQuestion.includes('hire')) {
      return knowledgeBase.background.availability + " " + knowledgeBase.contact.availability
    }
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('email') || lowerQuestion.includes('reach')) {
      return knowledgeBase.contact.email + " " + knowledgeBase.contact.response
    }
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('years')) {
      return `I have ${knowledgeBase.background.experience} working with various technologies and frameworks. I've contributed to multiple projects and have experience in both frontend and backend development.`
    }
    
    // Default response for other questions
    return "That's an interesting question! While I can provide general information about my background, skills, and experience, for specific technical details or detailed project discussions, I'd recommend reaching out to me directly. Is there something specific about my background or skills you'd like to know?"
  }

  const handleSendMessage = async (message = inputValue) => {
    if (!message.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: message,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)
    setIsLoading(true)

    try {
      // Use Groq API for intelligent responses
      const aiResponse = await groqService.generateResponse(message)
      
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: aiResponse,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      // Play notification sound for new message
      playNotificationSound()
    } catch (error) {
      console.error('Error getting AI response:', error)
      // Fallback to local responses if AI fails
      const fallbackResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: findBestResponse(message),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, fallbackResponse])
      // Play notification sound for fallback message too
      playNotificationSound()
    } finally {
      setIsTyping(false)
      setIsLoading(false)
    }
  }

  const handleQuickReply = (reply) => {
    handleSendMessage(reply)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="chatbot"
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 5 }}
          transition={{ 
            duration: 0.2,
            ease: "easeInOut"
          }}
          className={`chatbot-container fixed bottom-20 sm:bottom-24 right-2 sm:right-6 left-2 sm:left-auto w-auto sm:w-96 h-[600px] sm:h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col ${
            darkMode ? 'dark' : ''
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Saikat's AI Assistant</h3>
                <p className="text-blue-100 text-xs sm:text-sm">Ask me anything!</p>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* Sound Toggle Button */}
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`p-1 sm:p-1.5 rounded-full transition-colors duration-200 ${
                  soundEnabled 
                    ? 'text-white hover:text-blue-200' 
                    : 'text-blue-200 hover:text-white'
                }`}
                title={soundEnabled ? 'Mute sounds' : 'Unmute sounds'}
              >
                {soundEnabled ? (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>


              
              {/* Close Button */}
              <button
                onClick={onToggle}
                className="text-white hover:text-blue-200 transition-colors duration-200 p-1 sm:p-1.5"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} w-full`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] min-w-0 w-fit p-2.5 sm:p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-blue-500 text-white rounded-br-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-md'
                  }`}
                >
                  <div className="text-xs sm:text-sm leading-relaxed break-words whitespace-pre-wrap overflow-hidden">
                    {renderMessageContent(message.content)}
                  </div>
                  <p className={`text-xs mt-1.5 sm:mt-2 ${
                    message.type === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex justify-start"
              >
                <div className="bg-gray-100 dark:bg-gray-700 p-2.5 sm:p-3 rounded-2xl rounded-bl-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-3 sm:px-4 pb-3">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {getQuickReplies().map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    disabled={isLoading}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Saikat..."
                disabled={isLoading}
                className="flex-1 px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 text-sm sm:text-base"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isLoading}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Chatbot
