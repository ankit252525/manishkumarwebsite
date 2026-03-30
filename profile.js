// ── config/profile.js — Developer Profile Data ──
// Edit this file to update your info anywhere on the site

const PROFILE = {
  name:     "Manish Kumar",
  role:     "Full-Stack Developer & AI Enthusiast",
  email:    "manish8615pnbe@gmail.com",
  phone:    "+91-9334727469",
  linkedin: "https://www.linkedin.com/in/manish-kumar-a32762274/",
  github:   "https://github.com/ankit252525",
  location: "Shimla, Himachal Pradesh",
  college:  "HP University, Shimla",
  degree:   "MCA (Pursuing)",
  status:   "Open to Work",
};

const SKILLS = [
  { name: "Python",          pct: 88 },
  { name: "React.js",        pct: 80 },
  { name: "HTML / CSS / JS", pct: 90 },
  { name: "Flask",           pct: 75 },
  { name: "MySQL",           pct: 78 },
  { name: "C / C++",         pct: 72 },
  { name: "Machine Learning",pct: 70 },
  { name: "Git & GitHub",    pct: 82 },
];

const PROJECTS = [
  {
    icon:  "🤖",
    title: "AI Image Authenticity Detector",
    desc:  "Web app that analyzes uploaded images and estimates probability of AI-generated content using ML — displays confidence levels: Low / Medium / High.",
    tags:  ["Python", "Flask", "Machine Learning", "HTML/CSS/JS"],
    color: "rgba(0,245,255,0.08)",
  },
  {
    icon:  "💰",
    title: "Smart Expense Analyzer",
    desc:  "Budget calculator web app tracking income & expenses with real-time balance updates and smart status indicators — Safe / Warning / Overspending.",
    tags:  ["HTML", "CSS", "JavaScript"],
    color: "rgba(123,47,255,0.08)",
  },
  {
    icon:  "📄",
    title: "Rate My Resume — ATS Finder",
    desc:  "Full-stack SaaS landing page for an AI-powered resume ATS scoring tool with drag-and-drop upload, dark/light theme, and glassmorphism UI.",
    tags:  ["React.js", "Vite", "SaaS UI"],
    color: "rgba(255,45,120,0.08)",
  },
];

const CERTIFICATIONS = [
  { icon: "🏆", issuer: "IBM — Coursera · 2025",           name: "Python for Data Science, AI & Development" },
  { icon: "🎯", issuer: "Meta — Coursera",                  name: "Database Structures & Management with MySQL" },
  { icon: "⚡", issuer: "TCS iON",                          name: "Career Edge — Young Professional" },
  { icon: "🛡️", issuer: "CompTIA — 2024",                   name: "A+ & Network+ Certification" },
  { icon: "📊", issuer: "Cimage Group of Institution",       name: "Advanced Excel" },
  { icon: "🎓", issuer: "IIT Bombay",                       name: "Technical Certification Program" },
];
