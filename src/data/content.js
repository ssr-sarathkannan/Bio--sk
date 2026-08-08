export const NAV_ITEMS = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'skills', label: 'stack' },
  { id: 'projects', label: 'changelog' },
  { id: 'contact', label: 'contact' },
]

export const PROFILE = {
  name: 'Sarath Kannan',
  initials: 'SK',
  role: 'Software Engineer, UI/UX-minded Full-Stack & Mobile App Developer',
  tagline: 'full-stack developer / 4+ yrs exp',
  location: 'Coimbatore, Tamil Nadu, IN',
}

export const BIO_PARAGRAPHS = [
  "I'm a passionate software engineer with 4+ years of experience building scalable web and mobile applications, with a focus on user-centric digital solutions that really work. I hold a Master of Computer Applications from Bharathiar University, and built a solid foundation in modern software development from there.",
  "I've worked across web, mobile, and enterprise projects. At Edu Metrix Learning Solutions I played a key role in developing and maintaining software solutions and troubleshooting tricky technical problems. My time at TNQ Technology showed me the importance of project coordination, quality control, and nailing tricky client conversations.",
  "I get a real kick out of turning ideas into rock-solid, scalable, impactful digital products — whether that's a responsive web app, a new mobile experience, or a backend service tuned to run faster. Always up for a chat about a new project, a collaboration, or just connecting with other tech folk.",
]

export const STRENGTHS = [
  'Full-stack web dev',
  'Mobile app dev',
  'UI/UX design thinking',
  'Problem solving & debugging',
  'Agile collaboration & teamwork',
  'Performance optimisation',
  'Continuous learning & innovation',
]

export const EXPERIENCE = [
  {
    hash: 'a4f92c1',
    role: 'Full Stack Developer (MERN Stack)',
    company: 'PSG & Sons\u2019 Charities',
    period: 'Apr 2025 \u2014 Present',
    meta: 'On-site \u00b7 1 yr 5 mos',
    bullets: [
      'Develop and maintain full-stack web apps on the MERN stack across multiple institutional projects',
      'Integrate REST APIs and improve UI/UX across products',
      'Code reviews, unit testing, and Agile sprint collaboration with cross-functional teams',
      'QA processes and production troubleshooting',
    ],
  },
  {
    hash: '7e21d8a',
    role: 'Web Developer & SEO Analyst',
    company: 'KMCT Group of Institutions, Kerala',
    period: 'May 2024 \u2014 Mar 2025',
    meta: 'Calicut \u00b7 On-site \u00b7 11 mos',
    bullets: [
      'Managed and maintained 27 institutional and hospital websites, including online admission forms',
      'Built new college websites end-to-end \u2014 both front-end and back-end',
      'Implemented SEO strategies that improved organic visibility and search rankings',
      'Streamlined admission workflows by integrating online payment processing',
    ],
  },
  {
    hash: '3c88b45',
    role: 'Software Engineer',
    company: 'WardiereAI',
    period: 'Aug 2023 \u2014 Apr 2024',
    meta: '9 mos',
    bullets: [
      'Developed and maintained software solutions, building responsive web and mobile apps',
      'Troubleshot complex technical issues and debugged cross-platform compatibility problems',
      'Collaborated with product and design teams to deliver high-quality releases',
    ],
  },
  {
    hash: '1f56e09',
    role: 'Software Engineer',
    company: 'Edu Metrix Learning Solutions Pvt Ltd',
    period: 'May 2022 \u2014 Aug 2023',
    meta: 'Bengaluru \u00b7 On-site \u00b7 1 yr 4 mos',
    bullets: [
      'Transformed design concepts into responsive, visually appealing web and mobile applications',
      'Improved UI/UX across both platforms',
      'Resolved complex technical issues, ensuring cross-browser and cross-platform compatibility',
      'Collaborated across functional teams, aligning solutions with user needs and business goals',
    ],
  },
]

export const SKILL_MODULES = [
  {
    from: './frontend',
    icon: 'Layout',
    items: [
      'React.js', 'React Native', 'JavaScript (ES6+)', 'HTML5', 'CSS3 & SCSS',
      'Tailwind CSS', 'Bootstrap & React Bootstrap', 'Material UI',
    ],
  },
  {
    from: './backend',
    icon: 'Server',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication & Authorization'],
  },
  {
    from: './data-and-cloud',
    icon: 'Database',
    items: ['MongoDB', 'SQL', 'AWS'],
  },
  {
    from: './mobile',
    icon: 'Smartphone',
    items: ['React Native', 'Flutter', 'Android Development'],
  },
  {
    from: './devops',
    icon: 'Terminal',
    items: ['Nginx', 'Apache', 'Git & GitHub', 'Deployment & Server Management'],
  },
  {
    from: './analytics',
    icon: 'BarChart3',
    items: ['Microsoft Excel', 'Google Data Studio'],
  },
]

export const TECH_TICKER = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'Flutter',
  'React Native', 'JavaScript', 'Tailwind CSS', 'Nginx', 'Apache',
]

export const PROJECTS = [
  {
    id: 'alumni', name: 'PSG CAS Alumni Portal', category: 'Platform', period: 'Dec 2025 - Apr 2026', client: 'PSG College of Arts & Science', visual: 'network', featured: true,
    summary: 'A secure digital ecosystem connecting alumni, students, and administrators through engagement, fundraising, and analytics.',
    outcome: 'Centralized alumni operations, donor journeys, and community engagement in one scalable portal.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Payments'],
    highlights: ['Role-based access control', 'Donations and campaign management', 'Global alumni tracking map'],
  },
  {
    id: 'visitors', name: 'Visitors Management App', category: 'Platform', period: 'Nov 2025 - Present', client: "PSG & Sons' Charities", visual: 'security', featured: true,
    summary: 'MERN visitor tracking and smart appointment application built for smoother, more accountable front-desk operations.',
    outcome: 'Designed to make visitor registration, appointment handling, and on-site visibility simpler for staff.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'FastAPI'],
    highlights: ['Smart appointment flows', 'Visitor tracking dashboard', 'Operational security focus'],
  },
  {
    id: 'world-school', name: 'PSG World School', category: 'Website', period: 'Nov 2025 - Jan 2026', client: "PSG & Sons' Charities", visual: 'school',
    summary: 'International school website delivered on the MERN stack with a polished, accessible institutional experience.',
    outcome: 'A clear digital front door for prospective families, students, and the school community.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    highlights: ['Responsive school experience', 'Content-led information architecture', 'Full-stack delivery'],
  },
  {
    id: 'careers', name: 'PSG Careers', category: 'Platform', period: 'May 2025 - Jul 2025', client: "PSG & Sons' Charities", visual: 'career',
    summary: 'Career portal application designed to connect opportunities, applicants, and hiring workflows.',
    outcome: 'A focused application journey that makes opportunities easier to discover and manage.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    highlights: ['Job discovery', 'Application workflows', 'Full-stack architecture'],
  },
  {
    id: 'kmct-web-ecosystem', name: 'KMCT Web Ecosystem', category: 'Website', period: '2024 - 2025', client: 'KMCT Group of Institutions', collaboration: 'Collaborated with Data Stone and Intersmart Technologies', visual: 'campus', featured: true,
    summary: 'A family of websites for KMCT School of Design, Nursing, Emerging Engineering, Medical College, and Ayurveda.',
    outcome: 'Delivered cohesive, conversion-ready web experiences across academic and healthcare audiences.',
    stack: ['React', 'JavaScript', 'HTML5', 'CSS3', 'SEO'],
    highlights: ['Multi-site design system', 'Institutional content experiences', 'SEO-aware delivery'],
  },
  {
    id: 'indutech', name: 'Indutech', category: 'Platform', period: '2025', client: "PSG & Sons' Charities", visual: 'industry',
    summary: 'MERN stack application for an industrial-focused digital initiative.', outcome: 'A scalable base for managing information, users, and future operational workflows.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'], highlights: ['MERN architecture', 'Scalable foundation', 'Institutional delivery'],
  },
  {
    id: 'leap', name: 'PSG Leap Academy', category: 'Website', period: '2025', client: 'PSG Leap Academy', visual: 'learning',
    summary: 'Learning-focused digital experience built to present academy programs and opportunities clearly.', outcome: 'A polished online presence that supports program discovery and learner engagement.',
    stack: ['React', 'JavaScript', 'CSS3'], highlights: ['Education-first UX', 'Responsive interface', 'Clear content hierarchy'],
  },
  {
    id: 'medics', name: 'Medics - Online Medical Store', category: 'Commerce', period: 'Academic project', client: 'Independent project', visual: 'health',
    summary: 'Online medical store concept created to make quality healthcare products more accessible through a seamless digital journey.', outcome: 'Explored a convenient, connected shopping experience for health essentials.',
    stack: ['React', 'JavaScript', 'HealthTech'], highlights: ['Healthcare commerce concept', 'Customer-focused flow', 'Accessible product discovery'],
  },
  {
    id: 'milkovi', name: 'Milkovi - Photography Website', category: 'Website', period: 'Independent project', client: 'Milkovi', visual: 'gallery',
    summary: 'A dynamic photography portfolio built to showcase visual storytelling and creative work.', outcome: 'Created an expressive digital gallery that puts imagery and narrative at the center.',
    stack: ['React', 'CSS3', 'Photography'], highlights: ['Visual-first design', 'Portfolio presentation', 'Responsive gallery experience'],
  },
  {
    id: 'surveillance', name: 'Surveillance Camera Detection', category: 'AI / Security', period: 'Academic project', client: 'Academic research', visual: 'vision',
    summary: 'Computer-vision project exploring real-time detection in surveillance camera feeds for stronger security awareness.', outcome: 'Demonstrated practical real-time detection and an innovation-led approach to security technology.',
    stack: ['Computer Vision', 'Python', 'Surveillance'], highlights: ['Real-time detection', 'Security-oriented research', 'Algorithm implementation'],
  },
  {
    id: 'transaction-security', name: 'Three-Level Transaction Security', category: 'AI / Security', period: 'Academic project', client: 'Academic research', visual: 'security',
    summary: 'Online transaction platform prototype with layered authentication, encryption, and validation controls.', outcome: 'Strengthened a digital payment journey with defence-in-depth thinking.',
    stack: ['Cybersecurity', 'Encryption', 'Authentication'], highlights: ['Three-layer protection', 'Transaction validation', 'Secure user authentication'],
  },
  {
    id: 'PSG Alumni Foundation', name: 'Three-Level Transaction Security', category: 'AI / Security', period: 'Academic project', client: 'Academic research', visual: 'security',
    summary: 'Online transaction platform prototype with layered authentication, encryption, and validation controls.', outcome: 'Strengthened a digital payment journey with defence-in-depth thinking.',
    stack: ['Cybersecurity', 'Encryption', 'Authentication'], highlights: ['Three-layer protection', 'Transaction validation', 'Secure user authentication'],
  },
  {
    id: 'kmct-web-ecosystem', name: 'SCHOOL OF DESIGN', category: 'Website', period: '2024 - 2025', client: 'KMCT Group of Institutions', collaboration: 'Collaborated with Data Stone and Intersmart Technologies', visual: 'campus', featured: true,
    summary: 'Built for Design students to showcase their work and connect with industry professionals.',
    outcome: 'Delivered cohesive, conversion-ready web experiences across academic and healthcare audiences.',
    stack: ['React', 'JavaScript', 'HTML5', 'CSS3', 'SEO'],
    highlights: ['Multi-site design system', 'Institutional content experiences', 'SEO-aware delivery'],
  }
  
]
