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
    "Full-Stack Developer with expertise in React, Node.js, Express.js and MongoDB building robust and scalable web applications, with a strong focus on clean code, performance optimization, and user experience. Additionally, accomplished problem-solver with 500+ solved questions on LeetCode, demonstrating proficiency in algorithms, data structures, and logical problem-solving.  ",
  avatarUrl: "https://avatars.githubusercontent.com/u/110126076?v=4",
  personalWebsiteUrl: "https://jarocki.me",
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
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yashwin-gahlawat-44a561222/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/YashwinGahlawat",
        icon: XIcon,
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/yashwinn",
        icon: LeetcodeIcon,
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
      company: "National Technical Research Organisation",
      link: "https://ntro.gov.in/",
      badges: [],
      title: "Intern",
      logo: ConsultlyLogo,
      start: "Aug 2024 ",
      end: " Oct 2024",
      description:
        "Developed a real-time group chat application for staﬀ communication, utilizing React.js and implemented user authentication with JWT. Socket.IO for seamless real-time messaging and notifications, developed a robust backend using Express.js and MongoDB, ensuring eﬃcient data management and high availability.",
    },
  ],
  skills: [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.io",
  ],
  projects: [
    {
      title: "Chatify",
      techStack: [
        "React",
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
      title: "Delhi-Metro",
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
        "Node.js",
        "Express.js",
      ],
      description:
        "Developed web application for Delhi Metro, incorporating Dijkstra’s Algorithm for optimal route and duration calculation.",
      logo: EvercastLogo,
      link: {
        label: "github.com",
        href: "https://github.com/yashwingahlawat/delhi-metro",
      },
    },
    {
      title: "Musify",
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      description: "Built Musify, a a online music player using HTML, CSS, and Javascript, fully functional from scratch which  allows users to play, pause, and navigate through the tracks",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/yashwingahlawat/MusicPlayer",
      },
    },
  ],
} as const;
