import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { groqService } from '../services/groqService'

const Chatbot = ({ isOpen, onToggle, darkMode }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm Saikat's AI assistant. I can answer questions about his background, skills, experience, and projects. What would you like to know?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Knowledge base about Saikat
  const knowledgeBase = {
    background: {
      education: "I have a B.Sc. in Mathematics and an M.C.A (Master of Computer Applications) degree.",
      location: "I'm based in Bengaluru, Karnataka, India.",
      availability: "I'm currently available for new opportunities - full-time, contract, and freelance work.",
      experience: "I have 3+ years of experience in software development."
    },
    skills: {
      technical: "I'm proficient in 15+ technologies including React, Node.js, Python, JavaScript, and various modern web technologies.",
      soft: "I have strong problem-solving skills, excellent communication, and I'm a team player who loves learning new technologies.",
      learning: "I'm always expanding my skill set and staying updated with the latest industry trends."
    },
    projects: {
      portfolio: "This portfolio showcases my skills and projects. I built it using React, Tailwind CSS, and Framer Motion.",
      experience: "I've worked on various projects including web applications, APIs, and full-stack solutions.",
      github: "You can find more of my work on my GitHub profile."
    },
    contact: {
      email: "Feel free to reach out via email or LinkedIn for professional inquiries.",
      availability: "I'm open to discussing new opportunities and collaborations.",
      response: "I typically respond to professional inquiries within 24 hours."
    }
  }

  const getQuickReplies = () => [
    "Tell me about your background",
    "What are your technical skills?",
    "What projects have you worked on?",
    "Are you available for new opportunities?",
    "How can I contact you?"
  ]

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
    return "That's an interesting question! While I can provide general information about Saikat's background, skills, and experience, for specific technical details or detailed project discussions, I'd recommend reaching out to him directly. Is there something specific about his background or skills you'd like to know?"
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
          className={`fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col ${
            darkMode ? 'dark' : ''
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Saikat's AI Assistant</h3>
                <p className="text-blue-100 text-sm">Ask me anything!</p>
              </div>
            </div>
            <button
              onClick={onToggle}
              className="text-white hover:text-blue-200 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-blue-500 text-white rounded-br-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className={`text-xs mt-2 ${
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
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl rounded-bl-md">
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
            <div className="px-4 pb-3">
              <div className="flex flex-wrap gap-2">
                {getQuickReplies().map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    disabled={isLoading}
                    className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Saikat..."
                disabled={isLoading}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isLoading}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
