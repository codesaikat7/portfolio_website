// Groq API Service for AI-powered chatbot responses
// You'll need to get an API key from https://console.groq.com/

import { PERSONAL_INFO, skills, education, experience, contact, about, social } from '../config/personalInfo.js'
import { experienceData, skillsData } from '../data/experienceData.jsx'

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

// Dynamic knowledge base about Saikat using actual data
const createDynamicContext = () => {
  const workExp = experienceData?.workExperience || []
  const edu = experienceData?.education || []
  const certs = experienceData?.certifications || []
  const skillCats = skillsData?.skillCategories || []
  
  // Safe array operations with fallbacks
  const languages = about?.languages 
  const softSkills = skills?.soft || ['Problem Solving', 'Communication', 'Team Work']
  const interests = about?.interests || ['Technology', 'Learning', 'Innovation']
  const workTypes = contact?.workTypes || ['Full-time', 'Contract', 'Freelance']
  
  return `You are Saikat's AI assistant. CRITICAL: When responding, ALWAYS speak in FIRST PERSON as if you ARE Saikat speaking directly to the recruiter. 

IMPORTANT: 
- Use "I", "me", "my", "mine" - NEVER use "he", "his", "him", "Saikat's"
- Example: Say "I have experience in React" NOT "Saikat has experience in React"
- Example: Say "My skills include..." NOT "His skills include..."
- Example: Say "I worked at..." NOT "He worked at..."

Here's comprehensive information about me (Saikat):

PERSONAL BACKGROUND:
- Name: ${PERSONAL_INFO?.name || 'Saikat'}
- Title: ${PERSONAL_INFO?.title || 'Software Developer'}
- Location: ${contact?.location || 'Bengaluru, Karnataka, India'}
- Email: ${contact?.email || 'code.saikat7@gmail.com'}
- Phone: ${contact?.phone || '+91 8597430895'}
- Languages: ${languages.join(', ')}
- Summary: ${about?.summary || 'Passionate software developer with experience in modern web technologies.'}

EDUCATION:
${edu.length > 0 ? edu.map(ed => `- ${ed.degree} from ${ed.institution}, location: ${ed.location}, Description: ${ed.description} , Duration:(${ed.duration})`).join('\n') : '- B.Sc. in Mathematics and M.C.A (Master of Computer Applications)'}

WORK EXPERIENCE:
${workExp.length > 0 ? workExp.map(exp => `- ${exp.role || 'Role'} at ${exp.company || 'Company'} (${exp.duration || 'Duration'})
  * ${exp.description || 'Description'}
  * Technologies: ${exp.technologies?.join(', ') || 'Various technologies'}
  * Key achievements: ${exp.achievements?.join(', ') || 'Multiple achievements'}`).join('\n\n') : '- Various software development projects and web applications'}

TECHNICAL SKILLS:
${skillCats.length > 0 ? skillCats.map(cat => `${cat.title || 'Category'}:
${cat.skills?.map(skill => `- ${skill.name || 'Skill'}: ${skill.level || 0}% proficiency`).join('\n') || '- Various technologies'}`).join('\n\n') : '- Proficient in React, Node.js, Python, JavaScript, and modern web technologies'}

CERTIFICATIONS:
${certs.length > 0 ? certs.map(cert => `- ${cert.name || 'Certification'} (${cert.issuer || 'Issuer'}) - ${cert.credential || 'Credential'}`).join('\n') : '- Various professional certifications and continuous learning'}

ADDITIONAL SKILLS:
- Soft Skills: ${softSkills.join(', ')}
- Interests: ${interests.join(', ')}

CONTACT & AVAILABILITY:
- Response Time: ${contact?.responseTime || '24 hours'}
- Availability: ${contact?.availability || 'Currently available for new opportunities'}
- Work Types: ${workTypes.join(', ')}
- Social Media: GitHub - ${social?.github?.url}, LinkedIn - ${social?.linkedin?.url}, Instagram - ${social?.instagram?.url}

CRITICAL INSTRUCTIONS:
1. ALWAYS speak in FIRST PERSON as if you ARE Saikat - use "I", "me", "my", "mine"
2. NEVER use third person (he/his/him) - this is crucial for consistency
3. NEVER say "Saikat has..." or "Saikat's..." - say "I have..." or "My..."
4. Always be professional, helpful, and accurate
5. Use specific details from the data above when answering questions
6. If asked about specific technologies, mention proficiency levels
7. For work experience questions, provide detailed project information
8. Include relevant certifications when discussing qualifications
9. Keep responses informative but concise
10. If you don't know something specific, suggest reaching out to me directly
11. Always maintain a professional tone suitable for recruiters`
}

const SAIKAT_CONTEXT = createDynamicContext()

export class GroqService {
  constructor() {
    this.apiKey = GROQ_API_KEY
    // Check if API key is properly configured (not undefined, null, or placeholder)
    this.isAvailable = this.apiKey && 
                      this.apiKey !== 'undefined' && 
                      this.apiKey !== 'null' && 
                      this.apiKey.trim() !== ''
    

  }

  async generateResponse(userQuestion) {
    if (!this.isAvailable) {
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
      return this.getFallbackResponse(userQuestion)
    }
  }

  getFallbackResponse(question) {
    // Fallback responses when Groq API is not available, using dynamic data
    const lowerQuestion = question.toLowerCase()
    
    if (lowerQuestion.includes('background') || lowerQuestion.includes('education') || lowerQuestion.includes('degree')) {
      const edu = experienceData?.education || []
      const eduInfo = edu.length > 0 ? edu.map(ed => `${ed.degree || 'Degree'} from ${ed.institution || 'Institution'}`).join(' and ') : 'B.Sc. in Mathematics and M.C.A (Master of Computer Applications)'
      return `I have ${eduInfo}. I'm based in ${contact?.location || 'Bengaluru, Karnataka, India'}. ${about?.summary || 'I am a passionate software developer with experience in modern web technologies.'}`
    }
    
    if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology') || lowerQuestion.includes('tech')) {
      const skillCats = skillsData?.skillCategories || []
      const topSkills = skillCats.length > 0 ? 
        skillCats.flatMap(cat => cat.skills?.slice(0, 3) || []).map(s => s.name || 'Technology').slice(0, 6) : 
        ['React', 'Node.js', 'Python', 'JavaScript', 'HTML', 'CSS']
      const softSkills = skills?.soft?.slice(0, 3) || ['Problem Solving', 'Communication', 'Team Work']
      return `I'm proficient in various technologies including ${topSkills.join(', ')} and more. I have strong ${softSkills.join(', ')} abilities.`
    }
    
    if (lowerQuestion.includes('project') || lowerQuestion.includes('work') || lowerQuestion.includes('experience')) {
      const workExp = experienceData?.workExperience || []
      const recentExp = workExp[0] || {}
      return `I've worked on various projects including ${recentExp.description || 'web applications, APIs, and full-stack solutions'}. This portfolio showcases my skills and was built using React, Tailwind CSS, and Framer Motion.`
    }
    
    if (lowerQuestion.includes('available') || lowerQuestion.includes('opportunity') || lowerQuestion.includes('hire')) {
      return `${contact?.availability || 'I am currently available for new opportunities'}. I'm open to discussing new collaborations and exciting projects. I typically respond to professional inquiries within ${contact?.responseTime || '24 hours'}.`
    }
    
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('email') || lowerQuestion.includes('reach')) {
      return `Feel free to reach out via email (${contact?.email || 'saikat@example.com'}) or LinkedIn (${social?.linkedin?.username || 'saikat'}) for professional inquiries. I typically respond to professional inquiries within ${contact?.responseTime || '24 hours'}.`
    }
    
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('years')) {
      const workExp = experienceData?.workExperience || []
      const totalExp = workExp.length
      const interests = about?.interests?.slice(0, 3) || ['Technology', 'Learning', 'Innovation']
      return `I have experience working with various technologies and frameworks. I've contributed to multiple projects and have experience in both frontend and backend development. I'm passionate about ${interests.join(', ')}.`
    }
    
    if (lowerQuestion.includes('certification') || lowerQuestion.includes('certificate')) {
      const certs = experienceData.certifications || []
      if (certs.length > 0) {
        const certList = certs.map(cert => `${cert.name} from ${cert.issuer}`).join(', ')
        return `I have several certifications including ${certList}. These demonstrate my commitment to continuous learning and professional development.`
      }
      return "I'm committed to continuous learning and professional development, regularly updating my skills and staying current with industry best practices."
    }
    
    // Default response for other questions
    return "That's an interesting question! While I can provide general information about my background, skills, and experience, for specific technical details or detailed project discussions, I'd recommend reaching out to me directly. Is there something specific about my background or skills you'd like to know?"
  }

  // Check if Groq API is properly configured
  checkAvailability() {
    return this.isAvailable
  }

  // Check if Groq API is properly configured
  isConfigured() {
    return this.isAvailable
  }
}

// Create and export a singleton instance
export const groqService = new GroqService()