// Groq API Service for AI-powered chatbot responses
// You'll need to get an API key from https://console.groq.com/

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

// Knowledge base about Saikat for context
const SAIKAT_CONTEXT = `
You are Saikat's AI assistant. You help recruiters and visitors learn about Saikat's background, skills, and experience.

Here's what you know about Saikat:

BACKGROUND:
- Education: B.Sc. in Mathematics and M.C.A (Master of Computer Applications)
- Location: Bengaluru, Karnataka, India
- Experience: 3+ years in software development
- Availability: Currently available for new opportunities (full-time, contract, freelance)

TECHNICAL SKILLS:
- Proficient in 15+ technologies including React, Node.js, Python, JavaScript
- Full-stack development experience
- Modern web technologies and frameworks
- Always learning and expanding skills

PROJECTS & WORK:
- Portfolio website (built with React, Tailwind CSS, Framer Motion)
- Various web applications and APIs
- Full-stack solutions
- GitHub profile with more projects

SOFT SKILLS:
- Strong problem-solving abilities
- Excellent communication
- Team player
- Passionate about learning new technologies

CONTACT & AVAILABILITY:
- Open to discussing new opportunities
- Responds to professional inquiries within 24 hours
- Available for full-time, contract, and freelance work

IMPORTANT: Always be professional, helpful, and accurate. If you don't know something specific, suggest reaching out to Saikat directly. Keep responses concise but informative.
`

export class GroqService {
  constructor() {
    this.apiKey = GROQ_API_KEY
    this.isAvailable = this.apiKey 
  }

  async generateResponse(userQuestion) {
    if (!this.isAvailable) {
      console.warn('Groq API key not configured. Using fallback responses.')
      return this.getFallbackResponse(userQuestion)
    }

    try {
      const response = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3-70b-8192', // Using Llama 3.1 70B for best quality
          messages: [
            {
              role: 'system',
              content: SAIKAT_CONTEXT
            },
            {
              role: 'user',
              content: userQuestion
            }
          ],
          temperature: 0.7,
          max_tokens: 300,
          top_p: 1,
          stream: false
        })
      })

      if (!response.ok) {
        throw new Error(`Groq API error: ${response.status}`)
      }

      const data = await response.json()
      return data.choices[0]?.message?.content || 'I apologize, but I encountered an error. Please try asking your question again.'
    } catch (error) {
      console.error('Error calling Groq API:', error)
      return this.getFallbackResponse(userQuestion)
    }
  }

  getFallbackResponse(question) {
    // Fallback responses when Groq API is not available
    const lowerQuestion = question.toLowerCase()
    
    if (lowerQuestion.includes('background') || lowerQuestion.includes('education') || lowerQuestion.includes('degree')) {
      return "I have a B.Sc. in Mathematics and an M.C.A (Master of Computer Applications) degree. I'm based in Bengaluru, Karnataka, India."
    }
    if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology') || lowerQuestion.includes('tech')) {
      return "I'm proficient in 15+ technologies including React, Node.js, Python, JavaScript, and various modern web technologies. I have strong problem-solving skills and excellent communication abilities."
    }
    if (lowerQuestion.includes('project') || lowerQuestion.includes('work') || lowerQuestion.includes('experience')) {
      return "I've worked on various projects including web applications, APIs, and full-stack solutions. This portfolio showcases my skills and was built using React, Tailwind CSS, and Framer Motion."
    }
    if (lowerQuestion.includes('available') || lowerQuestion.includes('opportunity') || lowerQuestion.includes('hire')) {
      return "I'm currently available for new opportunities - full-time, contract, and freelance work. I'm open to discussing new collaborations and exciting projects."
    }
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('email') || lowerQuestion.includes('reach')) {
      return "Feel free to reach out via email or LinkedIn for professional inquiries. I typically respond to professional inquiries within 24 hours."
    }
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('years')) {
      return "I have 3+ years of experience in software development, working with various technologies and frameworks. I've contributed to multiple projects and have experience in both frontend and backend development."
    }
    
    return "That's an interesting question! While I can provide general information about my background, skills, and experience, for specific technical details or detailed project discussions, I'd recommend reaching out to me directly. Is there something specific about my background or skills you'd like to know?"
  }

  // Check if Groq API is properly configured
  checkAvailability() {
    return this.isAvailable
  }

  // Get API status for debugging
  getStatus() {
    return {
      isAvailable: this.isAvailable,
      hasApiKey: !!this.apiKey,
      apiKeyConfigured: this.apiKey !== 'your-groq-api-key-here'
    }
  }
}

// Create and export a singleton instance
export const groqService = new GroqService()
