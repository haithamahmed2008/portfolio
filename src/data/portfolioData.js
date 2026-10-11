export const portfolioData = {
  name: "Haithm Malek",
  title: "Full-Stack & AI Software Engineer",
  badge: "Available for Senior Engineering Roles",
  location: "Sana'a, Yemen",
  avatar: "./images/Personal.jpeg",
  contact: {
    email: "haithm.a.malek@gmail.com",
    phone: "+967776199091",
    location: "Sana'a, Yemen",
  },
  socials: {
    github: "https://github.com/haithamahmed2008",
    linkedin: "https://www.linkedin.com/in/haithamahmed007/",
  },
  resumePath: "./assets/Haithm_Malek_Resume.pdf",
  summary: "Results-driven Full Stack Software Engineer with deep expertise in modern PHP ecosystems (Laravel, CodeIgniter), Vue.js (Vue 3, Pinia), and scalable relational database architecture (MySQL, SQL Server). Specializing in building high-performance cloud web applications, robust RESTful APIs, and Clean Code/SOLID architectures—accelerated with modern AI workflows.",
  
  stats: [
    { label: "Engineering Experience", value: "6+ Yrs", icon: "Sparkles" },
    { label: "Full-Stack Tech Stack", value: "PHP / Vue / SQL", icon: "Server" },
    { label: "Architecture Quality", value: "Clean & SOLID", icon: "Shield" },
    { label: "Delivery Velocity", value: "AI-Accelerated", icon: "Zap" },
  ],

  skills: [
    {
      domain: "Backend Engineering & Architecture",
      icon: "Server",
      color: "from-cyan-500 to-blue-600",
      borderGlow: "group-hover:border-cyan-500/50",
      description: "Scalable, decoupled backend architectures and high-throughput enterprise RESTful APIs built with OOP design patterns, Clean Architecture, and SOLID principles.",
      technologies: [
        { name: "Laravel", level: "Expert", icon: "laravel" },
        { name: "PHP 8+", level: "Expert", icon: "php" },
        { name: "CodeIgniter (MVC)", level: "Senior", icon: "codeigniter" },
        { name: "RESTful API Design", level: "Expert", icon: "api" },
        { name: "OOP & SOLID Principles", level: "Expert", icon: "code" },
        { name: "Clean Architecture", level: "Advanced", icon: "layers" }
      ]
    },
    {
      domain: "Frontend Engineering & UI/UX",
      icon: "Layout",
      color: "from-violet-500 to-purple-600",
      borderGlow: "group-hover:border-violet-500/50",
      description: "Fluid, responsive, and high-performance user interfaces crafted with Vue 3 (Composition API), Pinia state management, and modern component systems.",
      technologies: [
        { name: "Vue.js (Vue 3)", level: "Expert", icon: "vue" },
        { name: "JavaScript (ES6+)", level: "Expert", icon: "javascript" },
        { name: "Pinia / Vuex", level: "Expert", icon: "pinia" },
        { name: "Tailwind CSS", level: "Expert", icon: "tailwind" },
        { name: "HTML5 / CSS3 / SCSS", level: "Expert", icon: "html" },
        { name: "Vite Tooling", level: "Expert", icon: "vite" }
      ]
    },
    {
      domain: "Database Design & Performance",
      icon: "Database",
      color: "from-emerald-500 to-teal-600",
      borderGlow: "group-hover:border-emerald-500/50",
      description: "Relational schema modeling, index tuning, transaction integrity (ACID), and query optimization for high-throughput business data operations.",
      technologies: [
        { name: "MySQL", level: "Expert", icon: "mysql" },
        { name: "Microsoft SQL Server", level: "Senior", icon: "sql" },
        { name: "Query Optimization", level: "Expert", icon: "zap" },
        { name: "Indexing Strategies", level: "Expert", icon: "database" },
        { name: "ACID Transactions", level: "Expert", icon: "shield" },
        { name: "Schema Normalization", level: "Expert", icon: "chart" }
      ]
    },
    {
      domain: "AI Workflows, Security & DevOps",
      icon: "Cpu",
      color: "from-amber-500 to-rose-600",
      borderGlow: "group-hover:border-amber-500/50",
      description: "Modern AI-assisted development (Cursor, Claude, Copilot, Gemini) combined with OWASP web security (Sanctum/JWT, RBAC) and Git CI/CD deployment.",
      technologies: [
        { name: "Cursor IDE & AI Agents", level: "Mastery", icon: "ai" },
        { name: "Claude 3.5 & Copilot", level: "Mastery", icon: "claude" },
        { name: "OWASP & Web Security", level: "Expert", icon: "shield" },
        { name: "Auth (Sanctum / JWT)", level: "Expert", icon: "copilot" },
        { name: "Git & GitHub PRs", level: "Expert", icon: "git" },
        { name: "Linux / Nginx / Apache", level: "Senior", icon: "cloud" }
      ]
    }
  ],

  projects: [
    {
      id: "saeedbawazir",
      title: "Saeed Bawazir Group Enterprise Platform",
      url: "https://saeedbawazir.com",
      image: "./images/preview-saeedbawazir.png",
      fallbackImage: "./images/preview-saeedbawazir.svg",
      badge: "Commercial Portal",
      tagline: "High-scale multi-tier corporate portal, product catalog, and wholesale logistics ordering management platform.",
      techIcons: ["php", "laravel", "vue", "mysql", "tailwind"],
      languages: ["PHP", "JavaScript"],
      frameworks: ["Laravel", "Vue.js"],
      styling: ["Tailwind CSS"],
      database: ["MySQL"],
      tools: ["Composer", "REST APIs", "Vite"]
    },
    {
      id: "daralamirat-hrms",
      title: "Dar Al-Amirat Enterprise HRMS Platform",
      url: "https://hrms.daralamiratpos.de/",
      image: "./images/preview-daralamirat-hrms.png",
      fallbackImage: "./images/preview-daralamirat-hrms.svg",
      badge: "HRMS & Workforce",
      tagline: "Comprehensive human resources platform managing organizational workforce structure, Saudization/Nitaqat compliance, document expiry alerts, and payroll rotas.",
      techIcons: ["laravel", "vue", "php", "mysql", "tailwind"],
      languages: ["PHP", "JavaScript"],
      frameworks: ["Laravel", "Vue.js", "Pinia"],
      styling: ["Tailwind CSS"],
      database: ["MySQL"],
      tools: ["RBAC Security", "Audit Logs", "Git"]
    },
    {
      id: "daralamirat-appointment",
      title: "Dar Al-Amirat Real-Time Booking & Queue System",
      url: "https://appointment.daralamiratpos.de",
      image: "./images/preview-daralamirat-appointment.png",
      fallbackImage: "./images/preview-daralamirat-appointment.svg",
      badge: "Real-Time Scheduling",
      tagline: "Dynamic appointment management system featuring live queue tracking, multi-specialist slot reservations, and automated customer scheduling.",
      techIcons: ["vue", "laravel", "javascript", "mysql", "tailwind"],
      languages: ["JavaScript", "PHP"],
      frameworks: ["Vue 3", "Laravel API"],
      styling: ["Tailwind CSS"],
      database: ["MySQL"],
      tools: ["Live Queue Manager", "Alerts", "Axios"]
    },
    {
      id: "daralamirat-pos",
      title: "Dar Al-Amirat Cloud Retail Platform",
      url: "https://daralamiratpos.de",
      image: "./images/preview-daralamirat-pos.png",
      fallbackImage: "./images/preview-daralamirat-pos.svg",
      badge: "Retail Cloud Engine",
      tagline: "High-performance web application with instant catalog search, camera-based barcode scanning, real-time cart state management, and thermal printer APIs.",
      techIcons: ["php", "codeigniter", "vue", "mysql", "tailwind"],
      languages: ["PHP", "JavaScript"],
      frameworks: ["CodeIgniter", "Vue 3", "Pinia"],
      styling: ["Tailwind CSS", "Dark Mode"],
      database: ["MySQL"],
      tools: ["Thermal Print API", "Barcode Scanner", "Vite"]
    },
    {
      id: "daralamirat-prod",
      title: "Dar Al-Amirat Product Market Price Analyzer",
      url: "https://prod.daralamiratpos.de",
      image: "./images/preview-daralamirat-prod.png",
      fallbackImage: "./images/preview-daralamirat-prod.svg",
      badge: "AI Market Intelligence",
      tagline: "Intelligent analytics platform scraping and benchmarking cross-retailer product prices, ratings, discount spreads, and AI-driven pricing recommendations.",
      techIcons: ["php", "laravel", "vue", "ai", "mysql"],
      languages: ["PHP", "JavaScript"],
      frameworks: ["Laravel", "Vue 3"],
      styling: ["Tailwind CSS", "Dark UI"],
      database: ["MySQL Cluster"],
      tools: ["AI Competitor Engine", "Data Aggregation", "Redis"]
    }
  ]
};
