// This file just holds data. No React code here — keeping data separate
// from components makes it much easier to edit your info later.

export const navLinks = ["About", "Experience", "Skills", "Projects", "Roadmap"];

export const marqueeItems = [
  "React.js",
  "Python",
  "JavaScript",
  "Data Structures & Algorithms",
  "Figma",
  "HTML / CSS",
  "Git & GitHub",
  "Machine Learning (In Progress)",
  "Vercel",
  "Pandas & NumPy (Learning)",
];

export const projects = [
  {
    title: "EcoSphere",
    tag: "Frontend",
    desc: "A sustainability-focused web frontend built to practice component structure, responsive layout, and clean UI composition.",
    stack: ["React.js", "HTML / CSS"],
    link: "https://github.com/krishnamahajan-droid",
  },
  {
    title: "E-Bikes UI/UX",
    tag: "Product Design",
    desc: "End-to-end UI/UX design and build for an e-bike product concept — wireframes and a design system in Figma, translated into a working frontend.",
    stack: ["Figma", "HTML / CSS"],
    link: "https://github.com/krishnamahajan-droid",
  },
  {
    title: "Calorie Tracker CLI",
    tag: "Python",
    desc: "A command-line tool that logs daily meals, computes totals and averages against a daily limit, and prints a formatted report.",
    stack: ["Python", "CLI"],
    link: "https://github.com/krishnamahajan-droid/MY-Calorie-Tracker-Project",
  },
  {
    title: "HTML/CSS Portfolio No.3",
    tag: "Coursework",
    desc: "A semi-advanced portfolio build completed as a lab assignment, focused on layout craft and CSS techniques beyond the basics.",
    stack: ["HTML", "CSS"],
    link: "https://github.com/krishnamahajan-droid/HTML_CSS_PORTFOLIO_NO.3",
  },
];

export const roadmap = [
  {
    num: "01",
    when: "Year 1 — Done",
    title: "Web development foundations",
    desc: "HTML, CSS, JavaScript, React, Git/GitHub, Figma. Shipped EcoSphere, E-Bikes UI/UX, and portfolio builds. CGPA 8.43.",
    active: false,
  },
  {
    num: "02",
    when: "This Vacation — In Progress",
    title: "Python, DSA & math refresh",
    desc: "Deepen Python beyond scripting, build a solid Data Structures & Algorithms base, and refresh statistics.",
    active: true,
  },
  {
    num: "03",
    when: "Year 2",
    title: "Data analysis & core ML",
    desc: "Data cleaning and visualization with Pandas/NumPy, then supervised learning with scikit-learn.",
    active: false,
  },
  {
    num: "04",
    when: "Year 3",
    title: "Applied ML & specialization",
    desc: "Deep learning basics, a domain focus like NLP or computer vision, and internship-grade projects.",
    active: false,
  },
  {
    num: "05",
    when: "Year 4",
    title: "Portfolio, placements, graduation",
    desc: "Capstone ML project, a polished GitHub/LinkedIn presence, and interview-ready positioning.",
    active: false,
  },
];