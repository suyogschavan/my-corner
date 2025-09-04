import { ResumeData } from "./types";

export const demoData: ResumeData = {
  basics: {
    name: "Suyog Chavan",
    label: "Full‑Stack Developer",
    email: "suyogschavan03@gmail.com",
    phone: "+91 9022894248",
    url: "https://suyog.site",
    location: "Pune, India",
    profiles: [
      { network: "GitHub", url: "https://github.com/suyogschavan" },
      { network: "LinkedIn", url: "https://linkedin.com/in/suyogchavan" }
    ],
    summary:
      "Final-year BE Computer Science student at Sinhgad College of Engineering, Pune. Full‑stack developer skilled in Node.js, MongoDB, React, and backend development. Passionate about building web apps, browser extensions, and scalable systems.",
  },
  experience: [
    {
      company: "TwentyNineth Pvt. Ltd.",
      position: "Full Stack Developer Intern",
      location: "Pune",
      startDate: "Apr 2024",
      endDate: "Aug 2024",
      highlights: [
        "Built a production‑ready Chrome extension and automated LinkedIn workflows",
        "Optimized connection pipeline with pagination and DOM scripting",
        "Improved reliability through debugging and testing",
      ],
      tech: ["JavaScript", "Chrome APIs", "Selenium"],
    },
    {
      company: "CodixLabs Pvt. Ltd.",
      position: "Software Developer Intern",
      location: "Pune",
      startDate: "Jul 2022",
      endDate: "Oct 2022",
      highlights: [
        "Integrated payment gateway APIs and tested endpoints with Postman",
        "Developed REST APIs and worked with MongoDB",
        "Followed Git version control workflows",
      ],
      tech: ["Node.js", "Express", "MongoDB", "Postman"],
    },
  ],
  projects: [
    {
      name: "Automated Social Media Data Extraction Tool",
      description:
        "Hackathon project for parsing Instagram, Facebook, WhatsApp, and Google account data with customizable reports and AI‑driven behavioral analysis.",
      startDate: "Aug 2024",
      highlights: [
        "Appium and Selenium for automation",
        "Python + Java backend parsing logic",
        "Customizable forensic reports",
      ],
      tech: ["Appium", "Selenium", "Python", "Java"],
    },
    {
      name: "URL Scraper API",
      description:
        "FastAPI‑based REST API for URL metadata extraction with Celery task queue and monitoring.",
      startDate: "Jan 2025",
      url: "https://csv-url-metadata-scraper.onrender.com/docs",
      repo: "https://github.com/suyogschavan/url_scraper",
      highlights: [
        "Celery + Redis for async scraping",
        "OAuth2 authentication",
        "Prometheus & Grafana dashboards",
        "Docker + GitHub Actions CI/CD",
      ],
      tech: ["FastAPI", "Celery", "Redis", "PostgreSQL", "OAuth2", "Prometheus", "Grafana", "Docker", "Render"],
    },
    {
      name: "E‑Commerce Website (MERN)",
      description:
        "Full‑stack store with add to cart, order tracking, and responsive UI.",
      startDate: "Oct 2024",
      url: "https://hehe-store.vercel.app",
      repo: "https://github.com/suyogschavan/Practicing-React",
      highlights: [
        "MongoDB for scalable storage",
        "State management for cart & orders",
        "Future roadmap: authentication & payments",
      ],
      tech: ["React", "Node", "Express", "MongoDB", "Vercel"],
    },
    {
      name: "LinkedIn Jobs Scraper (Extension)",
      description:
        "Chrome extension to extract LinkedIn job listings with DOM parsing.",
      startDate: "Aug 2024",
      repo: "https://github.com/suyogschavan/jobscrapper",
      highlights: [
        "DOM manipulation for data extraction",
        "De‑duplication and robust parsing",
        "Tested across multiple job search result pages",
      ],
      tech: ["JavaScript", "HTML", "CSS", "Chrome APIs"],
    },
  ],
  education: [
    {
      institution: "Sinhgad College of Engineering, Pune",
      area: "BE in Computer Science and Engineering",
      startDate: "2022",
      endDate: "2025",
      score: "CGPA: 7.7/10",
    },
    {
      institution: "MAEER’s MIT Polytechnic, Pune",
      area: "Diploma in Computer Engineering",
      startDate: "2019",
      endDate: "2022",
      score: "91.33%",
    },
  ],
  skills: [
    { category: "Languages", items: ["C/C++", "Java", "Python", "JavaScript", "PHP"] },
    { category: "Backend", items: ["Node.js", "Express", "FastAPI"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
    { category: "DevOps", items: ["Docker", "GitHub Actions", "Prometheus", "Grafana"] },
    { category: "Cloud", items: ["AWS EC2", "Render"] },
    { category: "Platforms", items: ["Linux", "Windows", "Android Studio"] },
  ],
  certifications: [
    {
      name: "OCI 2023 AI Certified Foundations Associate",
      issuer: "Oracle",
      date: "2023",
    },
  ],
};
