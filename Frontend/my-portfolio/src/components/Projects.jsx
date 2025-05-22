import { useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  FaReact,
  FaJava,
  FaPython,
  FaDatabase,
  FaJs,
  FaFlask,
  FaDocker,
} from 'react-icons/fa';
import { SiSpringboot, SiDjango, SiNextdotjs, SiPostgresql, SiStreamlit, SiClerk, SiOpenai, SiTypescript, SiHtml5, SiCss3, SiGit, SiNodedotjs, SiMongodb, SiMysql, SiRedis, SiGraphql } from "react-icons/si";

const projectsData = [
  {
    id: 1,
    title: "CareerHub Mentorship Platform",
    description: "Connect rural students with industry mentors on CareerHub. Get personalized career guidance, network, and unlock your potential through targeted support and resources.",
    techStack: ["React", "Spring Boot", "Django", "Microservices", "PostgreSQL"],
    imgSrc: "https://i.ibb.co/Cp7LhW6p/Screenshot-From-2025-05-17-12-21-16.png",
    liveLink: "https://careerhubs.info/",
    GitHubLink: "https://github.com/mustafaansarii/CareerHub_app"
  },
  {
    id: 2,
    title: "CareerHub Job Portal",
    description: "Find your dream job on CareerHub's integrated job portal. Seamlessly connect with employers, explore opportunities, and streamline your job search for career success.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "HTML5", "CSS3"],
    imgSrc: "https://i.ibb.co/LhHhhrDV/Screenshot-From-2025-05-16-19-18-28.png",
    liveLink: "https://jobs.careerhubs.info/",
    GitHubLink: "https://github.com/mustafaansarii/CearHub_app"
  },
  {
    id: 3,
    title: "MeetMock - Interview & Meeting Platform",
    description: "Ace your interviews with MeetMock! Practice in realistic mock interviews, get real-time feedback, and record sessions for comprehensive self-assessment and improved performance.",
    techStack: ["React", "Next.js", "Stream", "Clerk", "TypeScript", "Nodejs"],
    imgSrc: "https://i.ibb.co/GfqJQdF9/Screenshot-From-2025-05-16-19-20-47.png",
    liveLink: "https://meet.careerhubs.info/",
    GitHubLink: "https://github.com/mustafaansarii"
  },
  {
    id: 4,
    title: "CareerMock - AI Mock Interview Platform",
    description: "Transform your interview skills with CareerMock's AI platform. Experience AI-driven simulations, instant feedback, and detailed analytics to excel in your next interview.",
    techStack: ["React", "Next.js", "OpenAI", "Python", "Flask"],
    imgSrc: "https://i.ibb.co/zhyZ9DSG/Screenshot-From-2025-05-17-12-19-23.png",
    liveLink: "https://interview.careerhubs.info/",
    GitHubLink: "https://github.com/mustafaansarii/CareerMock"
  },
  {
    id: 5,
    title: "SnipShare - Online Text Editor & CodeShare",
    description: "Create, modify, and share code snippets instantly with SnipShare, a Flask-based online text editor. Enjoy real-time saving and collaborative features for seamless coding.",
    techStack: ["Flask", "JavaScript", "PostgreSQL", "Redis", "Docker"],
    imgSrc: "https://i.ibb.co/Mxtc869t/Screenshot-From-2025-05-20-11-08-13.png",
    liveLink: "https://snipshare-one.vercel.app/",
    GitHubLink: "https://github.com/mustafaansarii/Snipshare"
  },
];

const techIconMap = {
  React: FaReact,
  "Spring Boot": SiSpringboot,
  Django: SiDjango,
  Microservices: FaDocker,
  PostgreSQL: SiPostgresql,
  "Next.js": SiNextdotjs,
  Stream: SiStreamlit,
  Clerk: SiClerk,
  OpenAI: SiOpenai,
  Flask: FaFlask,
  JavaScript: FaJs,
  TypeScript: SiTypescript,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  Git: SiGit,
  Nodejs: SiNodedotjs,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Redis: SiRedis,
  GraphQL: SiGraphql,
  Java: FaJava,
  Python: FaPython,
  Database: FaDatabase,
  Docker: FaDocker,
};

const Projects = () => {
  const [projects] = useState(projectsData);

  if (!projects.length) return (
    <div className="max-w-[1200px] mx-auto p-4">
      <Alert severity="info" className="dark:bg-yellow-900/20">
        <AlertTitle>No Projects Found</AlertTitle>
        There are currently no projects to display.
      </Alert>
    </div>
  );

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 backdrop-blur-lg rounded-3xl bg-white/10 dark:bg-black/10">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 dark:from-yellow-400 dark:to-pink-300 animate-text">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl border border-gray-200/30 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white/80 to-pink-50/50 dark:from-gray-800/80 dark:to-pink-900/20 backdrop-blur-sm hover:backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeInOut" }}
          >
            <div className="relative">
              <a href={project.liveLink} className="block overflow-hidden">
                <img
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  src={project.imgSrc}
                  alt={project.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                    <span className="ml-2 text-sm text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </h3>
                </div>
              </a>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4 relative h-10">
                {project.techStack.slice(0, 5).map((tech, index) => {
                  const Icon = techIconMap[tech] || (() => <span>{tech}</span>);
                  const iconColorClass = `tech-icon-${tech.toLowerCase()}`;
                  return (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={{
                        left: `${index * 20}px`,
                        zIndex: index + 1,
                        transform: `rotate(${index * 5}deg)`
                      }}
                      whileHover={{ scale: 1.2, rotate: 0, zIndex: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="p-1.5 rounded-full bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                        <Icon className={`w-5 h-5 ${iconColorClass} text-${tech.toLowerCase()}-500 dark:text-${tech.toLowerCase()}-300`} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <p className="mb-5 text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-3">
                <motion.a
                  href={project.GitHubLink}
                  className="flex items-center justify-center gap-2 flex-1 px-4 py-2 text-sm font-medium rounded-lg border border-gray-300/80 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors backdrop-blur-sm hover:backdrop-blur-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.liveLink}
                  className="flex items-center justify-center gap-2 flex-1 px-4 py-2 text-sm font-medium rounded-lg border border-blue-300/80 dark:border-blue-600/50 text-blue-700 dark:text-blue-300 hover:bg-blue-50/50 dark:hover:bg-blue-700/30 transition-colors backdrop-blur-sm hover:backdrop-blur-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  <span>Demo</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
