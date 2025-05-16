import React, { useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "CareerHub Mentorship Platform",
    description: "CareerHub connects students, especially from rural areas, with industry professionals for mentorship, career advice, and guidance.",
    techStack: ["Spring Boot", "Django", "React"],
    imgSrc: "https://i.ibb.co/BV6jhxbT/Screenshot-From-2025-03-02-16-12-00.png",
    liveLink: "https://careerhubs.info/",
    GitHubLink: "https://github.com/mustafaansarii/CareerHub_app"
  },
  {
    id: 2,
    title: "Online Text Editor & CodeShare",
    description: "A web-based text editor application built with Flask that allows users to create, edit, and save code snippets with real-time autosave functionality.",
    techStack: ["Flask", "JavaScript", "SQLite"],
    imgSrc: "https://github.com/mustafaansarii/SnipLink/blob/main/static/home.png?raw=true",
    liveLink: "https://sniplinkapp.onrender.com/",
    GitHubLink: "https://github.com/mustafaansarii/SnipLink"
  },
  {
    id: 3,
    title: "CareerHub Job Portal",
    description: "A comprehensive job portal integrated with the CareerHub platform, connecting job seekers with opportunities and employers with talent.",
    techStack: ["React", "Spring Boot", "PostgreSQL"],
    imgSrc: "https://i.ibb.co/LhHhhrDV/Screenshot-From-2025-05-16-19-18-28.png",
    liveLink: "https://jobs.careerhubs.info/",
    GitHubLink: "https://github.com/mustafaansarii/CareerHub_app"
  },
  {
    id: 4,
    title: "MeetMock - Interview & Meeting Platform",
    description: "A comprehensive platform for conducting mock interviews and meetings, featuring video conferencing, real-time feedback, and session recording capabilities.",
    techStack: ["React", "Spring Boot", "WebRTC"],
    imgSrc: "https://i.ibb.co/GfqJQdF9/Screenshot-From-2025-05-16-19-20-47.png",
    liveLink: "https://meet.careerhubs.info/",
    GitHubLink: "https://github.com/mustafaansarii"
  },
  {
    id: 5,
    title: "CareerMock - AI Mock Interview Platform",
    description: "An AI-powered mock interview platform that provides realistic interview simulations with AI interviewers, real-time feedback, and performance analytics to help users improve their interview skills.",
    techStack: ["React", "Node.js", "OpenAI"],
    imgSrc: "https://i.ibb.co/0jZQY9L/interview-platform.png",
    liveLink: "https://interview.careerhubs.info/",
    GitHubLink: "https://github.com/mustafaansarii/CareerMock"
  }
];

const Projects = () => {
  const [projects] = useState(projectsData);

  if (!projects.length) return (
    <div className="max-w-[1200px] mx-auto p-4">
      <Alert severity="info" className="dark:bg-blue-900/20">
        <AlertTitle>No Projects Found</AlertTitle>
        There are currently no projects to display.
      </Alert>
    </div>
  );

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 backdrop-blur-lg rounded-3xl">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-300">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl border border-gray-200/30 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white/80 to-purple-50/50 dark:from-gray-800/80 dark:to-purple-900/20 backdrop-blur-sm"
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
              </a>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-[0.7rem] font-bold rounded-full bg-gradient-to-r from-blue-100/80 to-purple-100/80 text-blue-800 dark:from-blue-900/40 dark:to-purple-900/40 dark:text-blue-300 backdrop-blur-sm shadow-sm hover:scale-105 transition-transform"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.liveLink} className="block">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {project.title}
                  <span className="ml-2 text-sm text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </h3>
              </a>

              <p className="mb-5 text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-3">
                <motion.a
                  href={project.GitHubLink}
                  className="flex items-center justify-center gap-2 flex-1 px-4 py-2 text-sm font-medium rounded-lg border border-gray-300/80 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.liveLink}
                  className="flex items-center justify-center gap-2 flex-1 px-4 py-2 text-sm font-medium rounded-lg border border-blue-300/80 dark:border-blue-600/50 text-blue-700 dark:text-blue-300 hover:bg-blue-50/50 dark:hover:bg-blue-700/30 transition-colors backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
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
