import React, { useEffect, useState } from 'react';
import { CircularProgress, Alert, AlertTitle } from '@mui/material';
import axios from 'axios';
import config from '../config';
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

  if (isLoading) return (
    <div className="flex items-center justify-center min-h-[60vh] max-w-[1200px] mx-auto">
      <CircularProgress className="text-blue-600 dark:text-purple-500" size={60} />
    </div>
  );

  if (error) return (
    <div className="max-w-[1200px] mx-auto p-4">
      <Alert severity="error" className="dark:bg-red-900/20">
        <AlertTitle>Error</AlertTitle>
        {error}
      </Alert>
    </div>
  );

  if (!projects.length) return (
    <div className="max-w-[1200px] mx-auto p-4">
      <Alert severity="info" className="dark:bg-blue-900/20">
        <AlertTitle>No Projects Found</AlertTitle>
        There are currently no projects to display.
      </Alert>
    </div>
  );

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-300">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <a href={project.liveLink} className="block overflow-hidden">
              <img
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                src={project.imgSrc}
                alt={project.title}
                loading="lazy"
              />
            </a>
            
            <div className="p-6 bg-white dark:bg-gray-800">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
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
                  className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-800 hover:to-gray-900 dark:from-gray-600 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all shadow-md hover:shadow-lg"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600 to-purple-500 text-white hover:from-blue-700 hover:to-purple-600 dark:from-blue-500 dark:to-purple-400 dark:hover:from-blue-600 dark:hover:to-purple-500 transition-all shadow-md hover:shadow-lg"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
