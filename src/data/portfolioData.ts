export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  tags: string[];
  deployedUrl: string;
  githubUrl: string;
  featured: boolean;
  badge: string;
  metrics?: string;
  gradient: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
  highlight: string;
  link?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Sai Advilkar",
    role: "AI Developer, Video Editor & CSE Undergraduate",
    degree: "B.Tech Computer Science & Engineering",
    year: "3rd Year",
    status: "Seeking Internships & AI Collaborations",
    bio: "B.Tech CSE 3rd year student, AI developer, and video editor. Creator of 3 deployed AI projects—EcoSphere, JurisAi, and DemocracyAi—for the Hack2Skill challenges in collaboration with Google for Developers.",
    location: "India",
    email: "saiadvilkar@gmail.com",
    github: "https://github.com/advilkar655-sys",
    linkedin: "https://www.linkedin.com/in/saiadvilkar",
  },
  hackathonHighlight: {
    title: "Hack2Skill × Google for Developers",
    subtitle: "AI Challenge Contender",
    description: "Designed, engineered, and deployed 3 cutting-edge Artificial Intelligence applications—EcoSphere, JurisAi, and DemocracyAi—for national challenges in collaboration with Google for Developers.",
    badge: "Official Participant & AI Builder",
    stats: [
      { label: "AI Projects Deployed", value: "3 Projects" },
      { label: "Partner", value: "Google for Developers" },
      { label: "Tech Stack", value: "Gemini API, Web Stack" }
    ]
  },
  projects: [
    {
      id: "project-1",
      title: "EcoSphere",
      subtitle: "Carbon Footprint & Sustainability AI Platform",
      description: "An AI-powered web application dedicated to tracking, calculating, and analyzing carbon footprints to promote environmental sustainability and eco-awareness.",
      tags: ["Carbon Footprint", "Google Gemini API", "Sustainability", "Web App"],
      deployedUrl: "https://eco-sphere-theta.vercel.app/",
      githubUrl: "https://github.com/advilkar655-sys",
      featured: true,
      badge: "Hack2Skill Project #1",
      metrics: "🌱 Carbon Analytics Engine",
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20"
    },
    {
      id: "project-2",
      title: "JurisAi",
      subtitle: "AI-Powered Legal Assistance & Contract Analysis Platform",
      description: "Designed to simplify complex legal documents, compare contract revisions, detect hidden risk clauses, and democratize legal access for everyone with an interactive working AI assistant.",
      tags: ["Legal AI Assistant", "Contract Analysis", "Risk Detection", "Document Intelligence"],
      deployedUrl: "https://juris-ai-steel.vercel.app/",
      githubUrl: "https://github.com/advilkar655-sys",
      featured: true,
      badge: "Hack2Skill Project #2",
      metrics: "⚖️ Smart Contract & Risk Detection",
      gradient: "from-indigo-500/20 via-purple-500/20 to-blue-500/20"
    },
    {
      id: "project-3",
      title: "DemocracyAi",
      subtitle: "AI Election Process Education & Awareness Platform",
      description: "An educational AI platform dedicated to the election process, providing accessible, transparent information and insights about elections and democratic procedures.",
      tags: ["Civic Tech", "Election Education", "AI Assistant", "Democratic Process"],
      deployedUrl: "https://election-process-education-phi.vercel.app/",
      githubUrl: "https://github.com/advilkar655-sys",
      featured: true,
      badge: "Hack2Skill Project #3",
      metrics: "🗳️ Election Information & AI Insights",
      gradient: "from-blue-500/20 via-cyan-500/20 to-amber-500/20"
    }
  ] as Project[],
  skillCategories: [
    {
      name: "AI & Machine Learning",
      skills: [
        { name: "Google Gemini API & AI Studio", level: 92 },
        { name: "Prompt Engineering & RAG", level: 88 },
        { name: "Python", level: 85 }
      ]
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      name: "Core Computer Science & Languages",
      skills: [
        { name: "Java (Core & Basics)", level: 80 },
        { name: "Data Structures & Algorithms", level: 82 },
        { name: "Object-Oriented Programming (OOP)", level: 85 },
        { name: "Database Management (SQL/NoSQL)", level: 80 },
        { name: "REST APIs & System Design", level: 84 }
      ]
    },
    {
      name: "Tools, Creative & Ecosystem",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Vercel Deployment", level: 92 },
        { name: "VS Code & Eclipse IDE", level: 90 },
        { name: "Video Editing & Production", level: 88 }
      ]
    }
  ] as SkillCategory[],
  timeline: [
    {
      year: "2025 – Present",
      title: "B.Tech Computer Science & Engineering (3rd Year)",
      subtitle: "Undergraduate Degree",
      description: "Focusing on software engineering, web application development, algorithms, Java core fundamentals, AI system design, and video production."
    },
    {
      year: "2025 – Present",
      title: "Hack2Skill × Google for Developers Challenges",
      subtitle: "AI Developer Track",
      description: "Engineered and deployed 3 full AI applications—EcoSphere, JurisAi, and DemocracyAi—in collaboration with Google for Developers."
    },
    {
      year: "2022 – 2025",
      title: "Diploma in Mechanical Engineering",
      subtitle: "Polytechnic Diploma",
      description: "Gained core engineering fundamentals, problem-solving skills, physics, and mechanical principles."
    }
  ]
};
