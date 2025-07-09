import { useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'CareerHub Mentorship Platform',
    description: 'Connect rural students with industry mentors on CareerHub. Get personalized career guidance, network, and unlock your potential through targeted support and resources.',
    techStack: ['React', 'Spring Boot', 'Django', 'Microservices', 'PostgreSQL'],
    imgSrc: 'https://i.ibb.co/Cp7LhW6p/Screenshot-From-2025-05-17-12-21-16.png',
    liveLink: 'https://careerhubs.info/',
    GitHubLink: 'https://github.com/mustafaansarii/CareerHub_app',
  },
  {
    id: 2,
    title: 'CareerHub Job Portal',
    description: 'Find your dream job on CareerHub\'s integrated job portal. Seamlessly connect with employers, explore opportunities, and streamline your job search for career success.',
    techStack: ['React', 'Spring Boot', 'PostgreSQL', 'HTML5', 'CSS3'],
    imgSrc: 'https://i.ibb.co/LhHhhrDV/Screenshot-From-2025-05-16-19-18-28.png',
    liveLink: 'https://jobs.careerhubs.info/',
    GitHubLink: 'https://github.com/mustafaansarii/CearHub_app',
  },
  {
    id: 3,
    title: 'MeetMock - Interview & Meeting Platform',
    description: 'Ace your interviews with MeetMock! Practice in realistic mock interviews, get real-time feedback, and record sessions for comprehensive self-assessment and improved performance.',
    techStack: ['React', 'Next.js', 'Stream', 'Clerk', 'TypeScript', 'Nodejs'],
    imgSrc: 'https://i.ibb.co/GfqJQdF9/Screenshot-From-2025-05-16-19-20-47.png',
    liveLink: 'https://meet.careerhubs.info/',
    GitHubLink: 'https://github.com/mustafaansarii',
  },
  {
    id: 4,
    title: 'CareerMock - AI Mock Interview Platform',
    description: 'Transform your interview skills with CareerMock\'s AI platform. Experience AI-driven simulations, instant feedback, and detailed analytics to excel in your next interview.',
    techStack: ['React', 'Next.js', 'OpenAI', 'Python', 'Flask'],
    imgSrc: 'https://i.ibb.co/zhyZ9DSG/Screenshot-From-2025-05-17-12-19-23.png',
    liveLink: 'https://interview.careerhubs.info/',
    GitHubLink: 'https://github.com/mustafaansarii/CareerMock',
  },
  {
    id: 5,
    title: 'CodeShare - Online Text Editor & Compiler',
    description: 'Create, modify, compile and share code snippets instantly with CodeShare, a Flask-based online text editor. Enjoy real-time saving and collaborative features for seamless coding.',
    techStack: ['Flask', 'JavaScript', 'PostgreSQL', 'Redis', 'Docker'],
    imgSrc: 'https://i.ibb.co/svnRGSs1/Screenshot-From-2025-06-05-21-04-57.png',
    liveLink: 'https://code.careerhubs.info/',
    GitHubLink: 'https://github.com/mustafaansarii/Snipshare',
  },
  {
    id: 6,
    title: 'HealthSync - Patient Management System',
    description: 'A modern patient management platform featuring real-time data synchronization, secure patient records, and integrated billing. Built with Spring Boot, gRPC for microservices communication, and Kafka for event-driven architecture.',
    techStack: ['Spring Boot', 'gRPC', 'Kafka', 'PostgreSQL', 'Java', 'JWT', 'Docker'],
    imgSrc: 'https://i.ibb.co/q3J0kXdr/unnamed.png',
    liveLink: 'https://github.com/mustafaansarii/',
    GitHubLink: 'https://github.com/mustafaansarii/',
  },
];

const techStack = {
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  Django: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg',
  Microservices: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  Clerk: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/clerk.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  Nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  OpenAI: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/openai.svg',
  Flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
  Redis: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
  Kafka: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/apachekafka.svg',
  JWT: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/jsonwebtoken.svg',
};

const Projects = () => {
  const [projects] = useState(projectsData);

  if (!projects.length) {
    return (
      <div className="max-w-[1200px] mx-auto p-4">
        <Alert severity="info" className="dark:bg-yellow-900/20">
          <AlertTitle>No Projects Found</AlertTitle>
          There are currently no projects to display.
        </Alert>
      </div>
    );
  }

  const desc = 'Here are some of the projects I\'ve worked on.';
  return (
    <>
      <section id="projects" className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 backdrop-blur-lg rounded-3xl bg-white/10 dark:bg-black/10">
        <div className="space-y-1 mb-2 md:mb-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-700 via-sky-500 to-blue-900 dark:from-white dark:via-sky-500 dark:to-blue-900 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="mt-4 mb-2 max-w-xl text-lg sm:text-lg dark:text-gray-200 text-gray-900 font-montserrat">
            {desc}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-xl border border-gray-200/30 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white/80 to-pink-50/50 dark:from-gray-800/80 dark:to-pink-900/20 backdrop-blur-sm hover:backdrop-blur-md h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="relative h-48 sm:h-56">
                <a href={project.liveLink} className="block overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.imgSrc}
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/40 dark:to-white/20"></div>
                  <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                    {project.title}
                  </h2>
                </a>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3 relative h-10 mt-4 md:-mt-4">
                  {project.techStack.slice(0, 3).map((tech, index) => {
                    const iconUrl = techStack[tech];
                    
                    return (
                      <motion.div
                        key={index}
                        className="absolute"
                        style={{
                          left: `${index * 20}px`,
                          zIndex: index + 1,
                          transform: `rotate(${index * 5}deg)`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 0, 
                          zIndex: 10
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <div className="p-1.5 rounded-full bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                          {iconUrl ? (
                            <img
                              src={iconUrl}
                              alt={tech}
                              className="w-5 h-5"
                              loading="lazy"
                            />
                          ) : (
                            <FaCode className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                <div className="flex items-center gap-3">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                    <FaExternalLinkAlt className="w-3.5 h-3.5" /> Live Demo
                  </a>
                  <a href={project.GitHubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
                    <FaGithub className="w-3.5 h-3.5" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;