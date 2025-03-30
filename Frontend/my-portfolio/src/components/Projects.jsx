import React, { useEffect, useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import axios from 'axios';
import config from '../config';
import { motion } from 'framer-motion';
import { FaGithub, FaRocket } from 'react-icons/fa';

const API_URL = config.Backend_Api + "/api/v1/projects"

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(API_URL);
        if (isMounted) {
          setProjects(response.data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.response?.data?.message || err.message);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    fetchProjects();
    return () => { isMounted = false; };
  }, []);

  if (error) return (
    <div className="max-w-[1200px] mx-auto p-4">
      <Alert severity="error" className="dark:bg-red-900/20">
        <AlertTitle>Error</AlertTitle>
        {error}
      </Alert>
    </div>
  );

  if (!projects.length && !isLoading) return (
    <div className="max-w-[1200px] mx-auto p-4">
      <Alert severity="info" className="dark:bg-blue-900/20">
        <AlertTitle>No Projects Found</AlertTitle>
        There are currently no projects to display.
      </Alert>
    </div>
  );

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 backdrop-blur-lg bg-white/30 dark:bg-black/30 rounded-3xl">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-300">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <div className="w-full h-48 sm:h-56 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
                  ))}
                </div>
                <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-7 00 rounded animate-pulse" />
                </div>
                <div className="flex gap-3 mt-5">
                  <div className="flex-1 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
                  <div className="flex-1 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <a href={project.liveLink} className="block overflow-hidden relative">
                <img
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  src={project.imgSrc}
                  alt={project.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 dark:from-blue-900/20 dark:to-purple-900/20 dark:text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.liveLink} className="block mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </a>
                
                <p className="mb-5 text-gray-600 dark:text-gray-300 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  <a
                    href={project.GitHubLink}
                    className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <FaGithub className="w-5 h-5 mx-auto" />
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-lg border border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-700/50 transition-colors"
                  >
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
