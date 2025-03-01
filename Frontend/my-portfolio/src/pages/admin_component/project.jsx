import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import config from '../../config';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    imgSrc: '',
    title: '',
    description: '',
    liveLink: '',
    techStack: '',
    GitHubLink: ''
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${config.Backend_Api}/api/v1/projects`);
      setProjects(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch projects');
      toast.error('Failed to fetch projects');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await axios.delete(`${config.Backend_Api}/api/v1/projects/${id}`);
        setProjects(projects.filter(project => project.id !== id));
        toast.success('Project deleted successfully');
      } catch (err) {
        setError('Failed to delete project');
        toast.error('Failed to delete project');
      }
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      ...project,
      techStack: project.techStack.join(', ')
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectData = {
      ...formData,
      techStack: formData.techStack.split(',').map(tech => tech.trim())
    };

    try {
      if (editingProject) {
        const response = await axios.put(
          `${config.Backend_Api}/api/v1/projects/${editingProject.id}`,
          projectData
        );
        setProjects(projects.map(p => 
          p.id === editingProject.id ? response.data : p
        ));
        toast.success('Project updated successfully');
      } else {
        const response = await axios.post(
          `${config.Backend_Api}/api/v1/projects`,
          projectData
        );
        setProjects([...projects, response.data]);
        toast.success('Project created successfully');
      }
      setIsModalOpen(false);
      resetForm();
    } catch (err) {
      const errorMsg = editingProject ? 'Failed to update project' : 'Failed to create project';
      setError(errorMsg);
      toast.error(errorMsg);
    }
  };

  const resetForm = () => {
    setFormData({
      imgSrc: '',
      title: '',
      description: '',
      liveLink: '',
      techStack: '',
      GitHubLink: ''
    });
    setEditingProject(null);
  };

  if (loading) return (
    <div className="container mx-auto p-4">
      <div className="grid gap-6">
        {[1,2,3].map((i) => (
          <div key={i} className="border rounded-lg p-4 shadow-md">
            <div className="flex flex-col md:flex-row gap-4">
              <Skeleton width={128} height={128} />
              <div className="flex-1">
                <Skeleton width={200} height={24} />
                <Skeleton count={3} />
                <div className="flex gap-2 mt-2">
                  <Skeleton width={60} height={24} />
                  <Skeleton width={60} height={24} />
                  <Skeleton width={60} height={24} />
                </div>
                <div className="mt-2">
                  <Skeleton width={80} height={24} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (error) return <div className="text-center p-4 text-red-500 dark:text-red-400">{error}</div>;

  if (!Array.isArray(projects)) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center p-4 text-red-500 dark:text-red-400">Error: Projects data is not in expected format</div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full md:w-auto dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Add New Project
        </button>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center p-4 text-gray-600 dark:text-gray-400">No projects found</div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full md:w-auto dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Add New Project
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-2 md:p-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6 gap-2 md:gap-4">
        <h1 className="text-xl md:text-3xl font-bold text-center md:text-left dark:text-white">Admin Panel - Projects Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded hover:bg-blue-600 transition-colors w-full md:w-auto text-sm md:text-base dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Add New Project
        </button>
      </div>
      
      <div className="grid gap-3 md:gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-2 md:p-4 shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:gap-4">
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full">
                <img 
                  src={project.imgSrc} 
                  alt={project.title} 
                  className="w-full md:w-32 h-24 md:h-32 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-lg md:text-xl font-semibold dark:text-white">{project.title}</h2>
                  <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base dark:text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-1 md:gap-2 mt-1 md:mt-2">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-200 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full text-xs md:text-sm dark:bg-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-1 md:mt-2">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline mr-2 md:mr-4 text-sm md:text-base dark:text-blue-400"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.GitHubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm md:text-base dark:text-blue-400"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex gap-1 md:gap-2 mt-2 md:mt-0">
                <button 
                  className="p-1 md:p-2 text-blue-500 hover:bg-blue-100 rounded transition-colors dark:hover:bg-gray-700"
                  onClick={() => handleEdit(project)}
                >
                  <FaEdit className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <button 
                  className="p-1 md:p-2 text-red-500 hover:bg-red-100 rounded transition-colors dark:hover:bg-gray-700"
                  onClick={() => handleDelete(project.id)}
                >
                  <FaTrash className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 md:p-4">
          <div className="bg-white p-4 md:p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto dark:bg-gray-800">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 dark:text-white">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label className="block mb-1 text-sm md:text-base">Image URL</label>
                <input
                  type="text"
                  value={formData.imgSrc}
                  onChange={(e) => setFormData({...formData, imgSrc: e.target.value})}
                  className="w-full border rounded p-1.5 md:p-2 text-sm md:text-base"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm md:text-base">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full border rounded p-1.5 md:p-2 text-sm md:text-base"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm md:text-base">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full border rounded p-1.5 md:p-2 text-sm md:text-base"
                  rows="3"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm md:text-base">Live Demo URL</label>
                <input
                  type="url"
                  value={formData.liveLink}
                  onChange={(e) => setFormData({...formData, liveLink: e.target.value})}
                  className="w-full border rounded p-1.5 md:p-2 text-sm md:text-base"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm md:text-base">Tech Stack (comma-separated)</label>
                <input
                  type="text"
                  value={formData.techStack}
                  onChange={(e) => setFormData({...formData, techStack: e.target.value})}
                  className="w-full border rounded p-1.5 md:p-2 text-sm md:text-base"
                  placeholder="React, Spring Boot, MySQL"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm md:text-base">GitHub URL</label>
                <input
                  type="url"
                  value={formData.GitHubLink}
                  onChange={(e) => setFormData({...formData, GitHubLink: e.target.value})}
                  className="w-full border rounded p-1.5 md:p-2 text-sm md:text-base"
                  required
                />
              </div>
              <div className="flex justify-end gap-1 md:gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    resetForm();
                  }}
                  className="px-3 py-1.5 md:px-4 md:py-2 border rounded hover:bg-gray-100 text-sm md:text-base dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm md:text-base dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  {editingProject ? 'Update Project' : 'Add Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
