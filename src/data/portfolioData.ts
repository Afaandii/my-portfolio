export const personalInfo = {
  name: "Ahmad Afandi",
  title: "Full Stack Developer",
  tagline:
    "Web developer specializing in scalable backend systems with Go and PHP",
  email: "ahmad.afandi.cv@gmail.com",
  phone: "+62 812 1744 1769",
  location: "Sidoarjo, Indonesia",
  avatar: "/avatar.jpg",
  resumeUrl: "/assets/Ahmad_Afandi.pdf",
  social: {
    github: "https://github.com/Afaandii",
    linkedin: "https://linkedin.com/in/ahmad-afandii",
    telegram: "https://t.me/Afandi0108",
    instagram: "https://instagram.com/ahmdafaandi",
  },
};

export const aboutMe = {
  bio: `I'm a passionate web developer with over three years of experience building web applications that users love. I'm proficient in PHP, Golang, JavaScript, React.js, Next.js, Gin, Laravel, CodeIgniter, MySQL, and PostgreSQL, with a special focus on UI/UX design and responsive design.

When I'm not coding, you'll find me exploring new technologies or enjoying a cup of coffee while reading the latest tech blogs.`,
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
  ],
};

export const projects = [
  {
    id: 1,
    title: "Inventaris Barang",
    description:
      "Application for inventory management using PHP Native and Bootstrap for frontend and MySQL for database.",
    image: "/img/inventaris.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL"],
    githubUrl: "https://github.com/Afaandii/inventaris-mvc",
    featured: false,
  },
  {
    id: 2,
    title: "Company Profile",
    description:
      "Alamon Go company profile web application, for branding the Alamon Go milk business.",
    image: "/img/company-profile.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Svelte", "Laravel", "Tailwind CSS"],
    githubUrl: "https://github.com/Afaandii/company-profile-app",
    featured: false,
  },
  {
    id: 3,
    title: "Distro Zone E-Commerce",
    description:
      "E-commerce platform with payment integration, inventory management, and report laba.",
    image: "/img/distro-zone.png",
    tags: ["TypeScript", "React.js", "Golang", "Gorm", "PostgreSQL", "Supabase", "JWT"],
    githubUrl: "https://github.com/Afaandii/aplikasi-distro-zone-lsp-website",
    featured: true,
  },
  {
    id: 4,
    title: "Molashes salon landing page",
    description:
      "Molashes Landing page website for branding salon nail art and eyelash businesses.",
    image: "/img/molashes-salon.png",
    tags: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/SyncDevelop/nailart-eyelash-landing-page",
    featured: true,
  },
  {
    id: 5,
    title: "Newstest App",
    description:
      "Newstest App is a web application that allows users to read news articles from various sources.",
    image: "/img/newstest.png",
    tags: ["TypeScript", "Golang", "Gin", "Gorm", "Next.js", "PostgreSQL", "Supabase", "JWT"],
    githubUrl: "https://github.com/Afaandii/newstest-web-app",
    featured: true,
  },
  {
    id: 6,
    title: "DistroZone Desktop POS App",
    description:
      "Desktop POS Application for DistroZone shop to manage sales, expenses and inventory build with java and postgreSQL for dbms",
    image: "/img/distro-zone-desktop.png",
    tags: ["Java", "JavaFX", "PostgreSQL", "Supabase"],
    githubUrl: "https://github.com/Afaandii/aplikasi-distro-zone-lsp-desktop",
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
    type: "Intership",
    title: "Fullstack Developer",
    company: "CV Purnama Kreatifa",
    location: "Sidoarjo, Indonesia",
    period: "January - May 2025",
    description:
      "Development of a web-based ERP (E-Procurement) application using the CodeIgniter 3 technology stack for the backend and Bootstrap for the frontend, along with Git for a collaborative team of six members who have integrated CI/CD with GitHub Actions.",
    highlights: [
      "Developed and maintained an E-Procurement ERP application using CodeIgniter 3 and PostgreSQL, focusing on robust back-end logic and data integrity.",
      "Analyzed and optimized ERD (Entity Relationship Diagrams), including creating new tables and modifying column structures to meet complex business requirements.",
      "Collaborative Team Worked within a 6-person development team using Git/GitHub for version control, ensuring smooth code integration and conflict resolution",
      "Performed rigorous debugging and system analysis to identify bottlenecks, fix functional bugs, and improve overall web application performance."
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
