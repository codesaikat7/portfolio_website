import abn_seal_logo from '../assets/images/abn_seal.jpg'
import nitc_logo from '../assets/images/nit_calicut.jpeg'

export const experienceData = {
  workExperience: [
    {
      id: 1,
      company: 'VISA',
      position: 'Senior Software Engineer',
      duration: 'Jul 2025 - Present',
      location: 'Bengaluru, Karnataka, India',
      description: 'Working on full-stack development using React, Node.js, and cloud technologies. Contributing to enterprise-level applications and collaborating with cross-functional teams.',
      technologies: ['React', 'Node.js', 'JavaScript', 'TypeScript', 'MongoDB', 'AWS'],
      achievements: [
        'Developed and maintained multiple client-facing applications',
        'Collaborated with cross-functional teams in an Agile environment',
        'Implemented responsive UI components and RESTful APIs'
      ]
    },
    {
      id: 2,
      company: 'VISA',
      position: 'Software Engineer',
      duration: 'Jun 2022 - Jun 2025',
      location: 'Bengaluru, Karnataka, India',
      description: 'Working on various client projects including web applications, e-commerce platforms, and custom software solutions. ',
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Firebase', 'Tailwind CSS'],
      achievements: [
        'Delivered 10+ client projects on time and within budget',
        'Built responsive and scalable web applications',
        'Provided ongoing maintenance and support services'
      ]
    }
  ],
  
  education: [
    {
      id: 1,
      institution: 'Acharya Brojendra Nath Seal College',
      logo: abn_seal_logo,
      alt: 'ABN Seal Logo',
      degree: 'Bachelor of Science (B.Sc.) in Mathematics',
      duration: '2016 - 2019',
      location: 'Cooch Behar, West Bengal, India',
      description: 'Achieved First Class, with strong focus on Statistics and Applied Mathematics.',
      achievements: ['First Class', 'Strong foundation in Statistics and Applied Mathematics'],
      relevantCourses: ['Calculus', 'Linear Algebra', 'Statistics', 'Mathematical Analysis'],
      certificate: '/certificates/bsc_degree.pdf',
      certificateAlt: 'B.Sc. Mathematics Degree Certificate (PDF)',
      certificateType: 'pdf'
    },
    {
      id: 2,
      institution: 'National Institute of Technology, Calicut',
      logo: nitc_logo,
      alt: 'NIT Calicut Logo',
      degree: 'Master of Computer Applications (M.C.A.)',
      duration: '2019 - 2022',
      location: 'Kozhikode, Kerala, India',
      description: 'Achieved First Class with Distinction, demonstrating strong expertise in computer science, programming, and application development.',
      achievements: ['70% overall grade', 'Specialized in Software Engineering'],
      relevantCourses: ['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Web Technologies'],
      certificate: '/certificates/mca_degree.pdf',
      certificateAlt: 'M.C.A. Degree Certificate from NIT Calicut (PDF)',
      certificateType: 'pdf'
    }
  ],
  
  certifications: [
    {
      id: 1,
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      description: 'Fundamental understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.',
      credential: 'AWS-123456789'
    },
    {
      id: 2,
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      description: 'Advanced React concepts including hooks, context, performance optimization, and testing.',
      credential: 'REACT-456789123'
    },
    {
      id: 3,
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2022',
      description: 'Expertise in MongoDB development, data modeling, aggregation, and application integration.',
      credential: 'MDB-987654321'
    }
  ],
  
  skills: {
    frontend: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'GraphQL'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    cloud: ['AWS', 'Vercel', 'Netlify', 'Docker', 'CI/CD'],
    tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Jira']
  }
}

export const skillsData = {
  skillCategories: [
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
}
