export const personalInfo = {
  name: "Ahmad Afandi",
  title: "Full Stack Developer",
  tagline:
    "Full-stack developer specializing in scalable backend systems with Go and PHP",
  email: "ahmad.afandi.cv@gmail.com",
  phone: "+62 812 3456 7890",
  location: "Sidoarjo, Indonesia",
  avatar: "/avatar.jpg",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/Afaandii",
    linkedin: "https://linkedin.com/in/ahmad-afandii",
    telegram: "https://t.me/Afandi0108",
    instagram: "https://instagram.com/afandiii._",
  },
};

export const aboutMe = {
  bio: `I'm a passionate Full Stack Developer with 5+ years of experience building web applications that users love. I specialize in React, Next.js, and Node.js, with a keen eye for UI/UX design.

When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or enjoying a good cup of coffee while reading tech blogs.`,
  highlights: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Coffee Cups", value: "∞" },
  ],
};

export const skills = {
  frontend: [
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Svelte", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Bootstrap", level: 85 },
  ],
  backend: [
    { name: "Golang", level: 95 },
    { name: "PHP", level: 90 },
    { name: "Java", level: 75 },
    { name: "Node.js", level: 85 },
    { name: "Express", level: 85 },
    { name: "Laravel", level: 90 },
    { name: "CodeIgniter", level: 85 },
    { name: "Gin", level: 80 },
  ],
  tools: [
    { name: "MySQL", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "Supabase", level: 85 },
    { name: "Git", level: 90 },
    { name: "Composer", level: 90 },
    { name: "Figma", level: 80 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
    image: "/img/ecommerce.jpg",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
    image: "/img/taskapp.jpg",
    tags: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/taskapp",
    featured: true,
  },
  {
    id: 3,
    title: "Molashes salon landing page",
    description:
      "An AI-powered content generation tool that helps marketers create engaging copy in seconds.",
    image: "/img/molashes-salon.png",
    tags: ["HTML", "CSS", "Javascript"],
    liveUrl: "https://syncdevelop.github.io/nailart-eyelash-landing-page",
    githubUrl: "https://github.com/SyncDevelop/nailart-eyelash-landing-page",
    featured: true,
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    description:
      "Mobile-first fitness tracking application with workout plans, nutrition logging, and social features.",
    image: "/img/fitness.jpg",
    tags: ["React Native", "Node.js", "GraphQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/fitness",
    featured: false,
  },
  {
    id: 5,
    title: "Real Estate Platform",
    description:
      "Property listing and management platform with virtual tours and mortgage calculator.",
    image: "/img/realestate.jpg",
    tags: ["Vue.js", "Django", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/realestate",
    featured: false,
  },
  {
    id: 6,
    title: "Learning Management System",
    description:
      "Complete LMS with course creation, student progress tracking, and certification system.",
    image: "/img/lms.jpg",
    tags: ["Next.js", "Prisma", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/lms",
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    type: "Intership",
    title: "Junior Backend Developer",
    company: "CV Purnama Kreatifa",
    location: "Sidoarjo, Indonesia",
    period: "January - April 2025",
    description:
      "Development ERP apps of web applications with tech stack CodeIgniter 3 and git for colabortion teams.",
    highlights: [
      "Developing ERP applications with CodeIgniter 3",
      "Using Git to colaboration teams",
      "Using Sftp and FileZilla to transfer, manage, and access files between systems over a network",
    ],
  },
  // {
  //   id: 2,
  //   type: "work",
  //   title: "Full Stack Developer",
  //   company: "Digital Solutions Ltd.",
  //   location: "Bandung, Indonesia",
  //   period: "2020 - 2022",
  //   description:
  //     "Developed and maintained multiple client projects using modern web technologies.",
  //   highlights: [
  //     "Built 15+ client websites and web applications",
  //     "Introduced TypeScript to the tech stack",
  //     "Mentored 3 junior developers",
  //   ],
  // },
  // {
  //   id: 3,
  //   type: "work",
  //   title: "Frontend Developer",
  //   company: "Creative Agency",
  //   location: "Jakarta, Indonesia",
  //   period: "2019 - 2020",
  //   description:
  //     "Created responsive and interactive user interfaces for various client projects.",
  //   highlights: [
  //     "Developed pixel-perfect UI implementations",
  //     "Collaborated closely with designers",
  //     "Improved website performance scores",
  //   ],
  // },
  // {
  //   id: 4,
  //   type: "education",
  //   title: "Bachelor of Computer Science",
  //   company: "University of Indonesia",
  //   location: "Depok, Indonesia",
  //   period: "2015 - 2019",
  //   description:
  //     "Graduated with honors. Focus on software engineering and web development.",
  //   highlights: [
  //     "GPA: 3.8/4.0",
  //     "Best Final Project Award",
  //     "Active in programming community",
  //   ],
  // },
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building fast, responsive, and SEO-friendly websites using modern technologies.",
    icon: "💻",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile applications with React Native.",
    icon: "📱",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces with focus on user experience.",
    icon: "🎨",
  },
  {
    id: 4,
    title: "API Development",
    description: "Building robust and scalable REST and GraphQL APIs.",
    icon: "🔌",
  },
];
