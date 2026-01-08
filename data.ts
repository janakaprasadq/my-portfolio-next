import { Project, Experience, Education, SkillCategory } from './types';

export const personalInfo = {
  name: "Janaka Prasad",
  role: "Software Engineer (Full Stack)",
  tagline: "Building scalable, innovative, and high-performance software solutions.",
  email: "contactjpmails@gmail.com",
  phone: "+94 71 3031383",
  location: "Salpilwaththa, Katupotha, Sri Lanka, 60350",
  linkedin: "https://linkedin.com/in/janaka-prasad",
  github: "https://github.com/janakaprasadq",
  about: "Results-driven Software Engineer with strong experience in Java, Python, and JavaScript. Proficient in designing and implementing RESTful APIs, scalable backend systems, and data-driven applications using MySQL and MongoDB. Holds a BSc in Electronics and Information Technology with proven skills in Git, Jira, and Agile collaboration."
};

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "C/C++", "SQL"]
  },
  {
    name: "Frontend",
    skills: ["React", "Angular", "Next.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "Java EE", "NestJS", "Spring Boot", "FastAPI"]
  },
  {
    name: "Database & Cloud",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"]
  },
  {
    name: "Tools & DevOps",
    skills: ["AWS", "Git", "Jira", "Confluence", "Gerrit", "Docker", "Adobe Creative Suite"]
  }
];

export const experiences: Experience[] = [
  {
    id: "zebra",
    role: "Software Engineer Intern",
    company: "Zebra Technologies",
    period: "Jan 2025 - Jul 2025",
    description: [
      "Contributed to Android Open Source Project (AOSP) framework-level customization and development using Java.",
      "Actively participated in Agile/Scrum ceremonies, including daily stand-ups, sprint planning, and retrospectives.",
      "Collaborated with cross-functional engineering teams to analyze requirements, debug system issues, and implement robust software enhancements.",
      "Utilized Jira for task management, Confluence for documentation, and Git/Gerrit for version control."
    ]
  },
  {
    id: "raahi",
    role: "Web Developer",
    company: "Raahi (Startup Project)",
    period: "Aug 2025 - Present",
    description: [
      "Contributing to the backend development of the company’s core web application using NestJS and TypeScript.",
      "Designing and implementing RESTful APIs and modular microservice components for scalable architecture.",
      "Collaborating with the frontend team to ensure seamless API integration and optimal performance."
    ]
  }
];

export const education: Education[] = [
  {
    degree: "BSc (Honours) in Electronics and Information Technology",
    institution: "University of Colombo — Sri Lanka",
    period: "Apr 2021 - Apr 2025",
    details: "Second Class Honours"
  },
  {
    degree: "G.C.E. Advanced Level Examination (Physical Science Stream) ( 2019 )",
    institution: "Maliyadewa Adarsha M.V — Kurunegala, Sri Lanka",
    period: "Jan 2009 - Aug 2017",
    details: "Chemistry (B), Combined Maths (C), Physics (C)"
  },
  {
    degree: "G.C.E. Ordinary Level Examination ( 2014 )",
    institution: "Maliyadewa Adarsha M.V — Kurunegala, Sri Lanka",
    period: "Jan 2009 - Aug 2017",
    details: "Mathematics (A), Science (A), Sinhala (A), History (A), ICT (A), Buddhism (A), Geography (A), Art (A), English (B)"
  }
];

export const projects: Project[] = [
  {
    id: "ecommerce-mern",
    title: "E-Commerce Website",
    category: "Full Stack",
    description: "A full-stack MERN e-commerce platform with authentication and payments.",
    longDescription: "Built a robust full-stack MERN e-commerce platform featuring user authentication, a comprehensive admin dashboard, Stripe-based payment processing, and real-time order tracking.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Cloudinary", "Stripe"],
    imageUrl: "/images/ecommerce.png",
    features: ["User Authentication", "Admin Dashboard", "Stripe Payment Gateway", "Order Tracking", "Cloudinary Image Hosting"],
    liveDemoUrl: "https://vibewear.lk/"
  },
  {
    id: "pos-system",
    title: "Point of Sale (POS) System",
    category: "Full Stack",
    description: "Ongoing client project featuring inventory and order management.",
    longDescription: "Developing a comprehensive POS system designed for retail efficiency. Features include inventory tracking, order processing, and customer management modules.",
    techStack: ["Spring Boot", "React.js", "MySQL"],
    imageUrl: "/images/pos1.png",
    features: ["Inventory Management", "Order Processing", "Customer CRM", "Reporting"],
    gallery: [
      "/images/pos1.png",
      "/images/pos2.png", // Using other images as placeholders for now
      "/images/pos3.png",
      "/images/pos4.png"
    ]
  },
  {
    id: "movie-console",
    title: "Movie Rating & Purchase App",
    category: "Backend",
    description: "Java console application for movie reviews with CRUD operations.",
    longDescription: "A Java console-based application designed for an academic project. It facilitates purchasing and reviewing movies using Hibernate ORM for data persistence and includes algorithms for average rating calculations.",
    techStack: ["Java", "Hibernate ORM"],
    imageUrl: "/images/movie.png",
    features: ["CRUD Operations", "Rating Calculation", "Console Interface", "Data Persistence"]
  },
  {
    id: "photo-landing",
    title: "Photography Landing Page",
    category: "Frontend",
    description: "Responsive landing website with email integration.",
    longDescription: "Designed a highly responsive landing website for a photography portfolio. Includes a contact form with email integration via Nodemailer and WhatsApp chat support.",
    techStack: ["React.js", "Node.js", "Bootstrap", "Nodemailer"],
    imageUrl: "/images/graphershot.png",
    features: ["Responsive Design", "Email Integration", "WhatsApp Support"]
  },
  {
    id: "parcel-api",
    title: "Parcel Management API",
    category: "Backend",
    description: "FastAPI backend for tracking numbers and chatbot integration.",
    longDescription: "Developed a high-performance Python FastAPI backend to extract tracking numbers and fetch parcel location data, specifically designed to integrate with a chatbot service.",
    techStack: ["Python", "FastAPI"],
    imageUrl: "/images/parcel.png",
    features: ["Tracking extraction", "Chatbot Integration", "FastAPI Performance"]
  },
  {
    id: "tourism-web",
    title: "Tourism Website",
    category: "Frontend",
    description: "React-based tourism platform with SEO optimization.",
    longDescription: "Developed a React-based tourism platform featuring destination articles and responsive UI to enhance user engagement. Focused on content presentation, SEO optimization, and smooth navigation.",
    techStack: ["React.js", "HTML", "CSS", "JavaScript"],
    imageUrl: "/images/tourism.png",
    features: ["SEO Optimization", "Content Management", "Responsive UI"],
    liveDemoUrl: "https://visit-srilanka-eight.vercel.app/"
  },
  {
    id: "software-company",
    title: "Voxicore Software Company Website",
    category: "Full Stack",
    description: "Next.js based software company website",
    longDescription: "Designed and developed a modern, high-performance corporate website for Voxicore using Next.js. The platform features a responsive design, SEO-optimized pages, and a seamless user experience to effectively showcase the company's software solutions and services.",
    techStack: ["Next.js", "HTML", "CSS", "JavaScript"],
    imageUrl: "/images/voxicore.png",
    features: ["SEO Optimization", "Content Management", "Responsive UI"],
    liveDemoUrl: "https://www.voxicore.com/"
  },
  {
    id: "photo-landing-2",
    title: "Photography Landing Page",
    category: "Frontend",
    description: "This is a landing page for a photography portfolio",
    longDescription: "Developed a visually engaging, fully responsive photography portfolio landing site optimized for performance and user experience.",
    techStack: ["React.js", "Node.js", "Bootstrap", "Nodemailer"],
    imageUrl: "/images/luminaluxe.png",
    features: ["Responsive Design"],
    liveDemoUrl: "https://lumina-luxe.netlify.app/"
  },

  {
    id: "coffee-landing",
    title: "Lumina-luxe Coffee Landing Page",
    category: "Frontend",
    description: "This is a landing page for a coffee shop",
    longDescription: "A clean, responsive landing page for a coffee shop that highlights its offerings with inviting visuals and easy navigation, designed to engage visitors and showcase the brand’s warm, cozy vibe.",
    techStack: ["React.js", "Node.js", "Bootstrap", "Nodemailer"],
    imageUrl: "/images/lumina.png",
    features: ["Responsive Design"],
    liveDemoUrl: "https://lumina-luxe.netlify.app/"
  }, {
    id: "hotel-landing",
    title: "LuxeStay Hotel Landing Page",
    category: "Frontend",
    description: "Luxury hotel landing page design.",
    longDescription: "Created elegant luxury hotel landing page showcasing amenities, bookings, immersive visuals, enhancing guest engagement online.",
    techStack: ["React.js", "Node.js", "Bootstrap", "Nodemailer"],
    imageUrl: "/images/luxstay.png",
    features: ["Responsive Design"],
    liveDemoUrl: "https://luxstayluxuryhotel.netlify.app/"
  },
  {
    id: "payroll-system",
    title: "Payroll Management System",
    category: "Full Stack",
    description: "A desktop application for managing employee salaries and attendance.",
    longDescription: "Designed and developed a robust desktop-based Payroll Management System using Java and JavaFX. The application streamlines employee management, automates salary calculations based on attendance and allowances, and generates detailed payslips. It utilizes SQLite for efficient, lightweight local data storage.",
    techStack: ["Java", "JavaFx", "SQLite"],
    imageUrl: "/images/payroll1.png",
    features: ["Employee Management", "Salary Automation", "Payslip Generation"],
    gallery: [
      "/images/payroll1.png",
      "/images/payroll2.png",
      "/images/payroll3.png",
      "/images/payroll4.png"
    ]
  },
  {
    id: "invoice-generator",
    title: "Invoice Generator",
    category: "Full Stack",
    description: "A desktop application for generating invoices.",
    longDescription: "Designed and developed a robust desktop-based Invoice Generator using Java and JavaFX. The application streamlines employee management, automates salary calculations based on attendance and allowances, and generates detailed payslips. It utilizes SQLite for efficient, lightweight local data storage.",
    techStack: ["Java", "JavaFx", "SQLite"],
    imageUrl: "/images/invoice1.png",
    features: ["Client Management", "Invoice History", "Invoice Generation"],
    gallery: [
      "/images/invoice1.png",
      "/images/invoice2.png",
      "/images/invoice3.png",
      "/images/invoice4.png"
    ]
  },
];
