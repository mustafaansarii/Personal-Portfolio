import React, { useEffect, useState } from 'react';
import { useProjects } from '../Auth/ProjectAuth';
import { Chip, Stack } from '@mui/material'; // Import MUI components

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true); // Reset loading state
      const { data, error } = await useProjects();
      setProjects(data);
      setError(error);
      setIsLoading(false); // Reset loading state
    };

    fetchProjects();
  }, []); // Empty dependency array to run once when the component mounts

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader border-t-transparent border-gray-400 border-4 rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-400 text-center">
        Projects
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-screen-lg">
        {projects.map((project) => (
          <div
            key={project.id}
            className="dark:border-gray-500 border-2 border-black rounded-lg shadow hover:shadow-lg transition-shadow duration-300 dark:hover:bg-gray-700"
          >
            <a href={project.liveLink}>
              <img
                className="rounded-t-lg h-[200px] w-full object-cover"
                src={project.imgSrc}
                alt={project.title}
              />
            </a>
            <div className="p-5">
              {/* Tech Stack */}
              <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                {project.techStack.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    variant="outlined"
                    color="primary"
                    size="small"
                  />
                ))}
              </Stack>

              <a href={project.liveLink}>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-400">
                  {project.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex space-x-4">
                {/* GitHub Button */}
                <a
                  href={project.GitHubLink}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-900"
                >
                  GitHub
                </a>

                {/* Live Demo Button */}
                <a
                  href={project.liveLink}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
