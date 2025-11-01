import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LeetcodeIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Yashwin Gahlawat",
  initials: "YG",
  location: "New Delhi,India",
  locationLink: "https://maps.app.goo.gl/79VnE6NE7u1J2iqa9",
  about:
    "Dedicated Web Developer with a strong foundation in Data Structures and Algorithms.",
  summary:
    "Full-Stack Developer with experience in React.js, Angular, Node.js, Express.js, fastAPI, MySQL and MongoDB building robust and scalable web applications, with a strong focus on clean code, performance optimization, and user experience. Additionally, accomplished problem-solver with 700+ solved questions on LeetCode, demonstrating proficiency in algorithms, data structures, and logical problem-solving.  ",
  avatarUrl: "https://avatars.githubusercontent.com/u/110126076?v=4",
  resumeURL: "https://drive.google.com/file/d/1zCFOVxxRqxh08Nv19NuLDZG5AND_3d6m/view",
  contact: {
    email: "yashwingahlawat@gmail.com",
    tel: "+91 7360090000",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/yashwingahlawat",
        icon: GitHubIcon,
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/yashwinn",
        icon: LeetcodeIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yashwin-gahlawat-44a561222/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/YashwinGahlawat",
        icon: XIcon,
      },

    ],
  },
  education: [
    {
      school: "Bhagwan Parshuram Institute of Technology",
      degree: "Bachelor's of Technology in Computer Science",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Avalon Information System",
      link: "https://www.avaloninfosys.com/",
      badges: [],
      title: "Software Developer",
      logo: ConsultlyLogo,
      start: "Jul 2025 ",
      end: " Present",
      description:
        "Integrated and maintained the Jira Service Desk API using FastAPI, streamlining client bug reporting and resolution across UNICEF’s internal monitoring applications. Improved backend reliability and automation, enhancing scalability and reducing manual intervention in service desk workflows",
    },
    {
      company: "Avalon Information System",
      link: "https://www.avaloninfosys.com/",
      badges: [],
      title: "Software Developer Intern",
      logo: ConsultlyLogo,
      start: "Nov 2024 ",
      end: " Jun 2025",
      description:
        "Developed frontend modules using Angular 17 and built an audit logging mechanism with AG Grid to enable real-time event tracking in UNICEF’s monitoring systems. Enhanced CakePHP backend eﬃciency by introducing database indexing and applying dynamic programming techniques, reducing redundant queries by nearly 30%.",
    },
    {
      company: "National Technical Research Organisation",
      link: "https://ntro.gov.in/",
      badges: [],
      title: "Intern",
      logo: ConsultlyLogo,
      start: "Aug 2024 ",
      end: " Oct 2024",
      description:
        "Developed a real-time group chat application for staﬀ communication, utilizing React.js and implemented user authentication with JWT. Socket.IO for seamless real-time messaging and notifications, developed a robust backend using Express.js and MongoDB, ensuring eﬃcient data management and high availability.",
    }
  ],
  skills: [
    "C++",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Angular",
    "FastAPI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "WebSockets",
    "Git",
    "Github",
    "Postman",
    "RestAPIs",
  ],
  projects: [
    {
      title: "Flights Booking System",
      techStack: [
        "Node.js",
        "Express.js",
        "Sequelize", 
        "MySQL", 
        "RabbitMQ", 
        "Nodemailer",
      ],
      description: "Developed a scalable Microservices-based Flight Booking System with Role-based Authorization, and Rate Limiting to strengthen system reliability and security.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/yashwingahlawat/Flight-Booking-Servicer",
      },
    },
    {
      title: "Chatify",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDb",
      ],
      description:
        "Developed Chatify, a real-time chat application with a Seamless UI with dark and lightmode using React.js",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/yashwingahlawat/chat-app-ui",
      },
    },
    {
      title: "Codeflow",
      techStack: [
        "React.js",
        "CSS",
        "Node.js",
        "Express.js",
        "Socket.io",
      ],
      description:
        "Developed a Real-time collaborative Code editor and Compiler, leveraging WebSocket for instant synchronization across multiple clients.",
      logo: EvercastLogo, 
      link: {
        label: "github.com",
        href: "https://github.com/yashwingahlawat/codeflow",
      },
    },
  ],
} as const;

