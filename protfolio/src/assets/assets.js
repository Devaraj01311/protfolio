import {
  FaProjectDiagram,
  FaMicrochip,
  FaDesktop,
  FaCode,
  FaMobile,
  FaGlobe,
  FaDatabase,
  FaCloud,
  FaTools,
  FaPlus,
  FaSchool,
  FaReact
} from "react-icons/fa";



import profileImg from '/image.jpg';   


export const assets = {
    profileImg,
}

export const navMenu = ['Home', 'Projects', 'Skills', 'About', 'Contact'];

export const SkillsData = [
    {
        icon: FaMicrochip,
        title: 'Backend',
        technologies: ['Node.js', 'Express.js', 'Java',  'Python',],
    },
    {
        icon: FaReact,
        title: 'Frontend',
        technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    },
    {
        icon: FaDesktop,
        title: 'Web',
        technologies: ['Responsive Design', 'UI/UX Principles', 'Cross-Browser Compatibility', 'Server'],
    },
    {
        icon: FaCode,
        title: 'DevOps',
        technologies: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'AWS', 'Azure', 'Git', 'GitHub'],
    },
    {
        icon: FaMobile,
        title: 'Mobile',
        technologies: ['React Native', 'Flutter', 'iOS Development', 'Android Development'],
    },
];

export const ProjectsData = [
  {
    title: "NammaRide",
    description: "A real-time ride-sharing platform that allows users to book rides instantly, track drivers live, and confirm bookings through secure OTP validation. The system enhances travel convenience using smooth UI animations and accurate location-based routing and admin dashboard.",
    image: "/nammaride.jpeg",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Google Maps API", "GSAP"],
    githubLink: "https://github.com/Devaraj01311/NammaRide__",
    liveLink: "https://nammaride-1-tatc.onrender.com"
  },
  {
    title: "Foodie",
    description: "A full-stack food ordering platform where users can explore restaurants, place online orders, and track deliveries and the reasturants will handle the items. The system includes secure authentication, integrated payments, and a mobile-responsive UI.",
    image: "/Foodie.jpeg",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Payment API"],
    githubLink: "https://github.com/Devaraj01311/Foodie",
    liveLink: "https://foodie-1frontend.onrender.com"
  },
  {
    title: "JobPortalAI",
    description: "An AI-driven job portal that matches user resumes with relevant job listings. Features include automated resume parsing, intelligent job recommendations, secure authentication, and email alerts for instant job matches.",
    image: "/job.jpeg",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "OpenAI API"],
    githubLink: "https://github.com/Devaraj01311/JobPortalAI",
    liveLink: "https://jobportalai-1.onrender.com"
  },
  {
    title: "AICodeReview",
    description: "A web application that automatically analyzes code quality and provides structured feedback on syntax, optimization, security, and maintainability. Ideal for developers seeking instant insights and improvements.",
    image: "/code.jpeg",
    tech: ["React.js", "Node.js", "Express.js", "OpenAI API"],
    githubLink: "https://github.com/Devaraj01311/AI-reviewer",
    liveLink: "https://ai-code-reviewer-front.onrender.com"
  }
]

export const profileData = 
   [
  {
    icon: FaCode,
    title: "Programming Languages",
    technologies: ["Java", "Python", "C++", "JavaScript"]
  },
  {
    icon: FaGlobe,
    title: "Web Technologies & Frameworks",
    technologies: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Spring Boot"]
  },
  {
    icon: FaDatabase,
    title: "Databases",
    technologies: ["MySQL", "MongoDB"]
  },
  {
    icon: FaCloud,
    title: "Cloud Platforms",
    technologies: ["AWS", "Microsoft Azure", "Google Cloud Platform (GCP)"]
  },
  {
    icon: FaTools,
    title: "Developer Tools & Version Control",
    technologies: ["Git", "GitHub", "Visual Studio Code", "Postman"]
  },
  {
    icon: FaPlus,
    title: "Additional Skills",
    technologies: [
      "RESTful APIs",
      "JSON",
      "Responsive Web Design",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms"
    ]
  },
  {
    icon: FaSchool,
    title: "Education",
    technologies: ["Master of Computer Applications (MCA) - Bengaluru city University"]

  },
  {
    icon: FaProjectDiagram,
    title:"Projects",
    technologies: ["Built more then 15+"]
  },
]

