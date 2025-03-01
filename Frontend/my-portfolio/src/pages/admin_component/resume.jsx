import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import config from '../../config';

const API_URL = config.Backend_Api;

const ResumeComponent = () => {
  const [resume, setResume] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resumeLink, setResumeLink] = useState('');

  useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/resumes`);
      if (response.data.length > 0) {
        setResume(response.data[0]);
      }
    } catch (error) {
      setError('Failed to fetch resume');
      toast.error('Failed to fetch resume');
    } finally {
      setLoading(false);
    }
  };

  const handleAddResume = async (link) => {
    if (resume) {
      toast.error('Only one resume is allowed. Please delete the existing one first.');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/resumes`, {
        resumeLink: link
      });
      setResume(response.data);
      setError('');
      toast.success('Resume added successfully');
      setIsModalOpen(false);
    } catch (error) {
      setError('Failed to add resume');
      toast.error('Failed to add resume');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteResume = async () => {
    if (!resume) return;

    if (window.confirm('Are you sure you want to delete this resume?')) {
      try {
        setLoading(true);
        await axios.delete(`${API_URL}/resumes/${resume.id}`);
        setResume(null);
        setError('');
        toast.success('Resume deleted successfully');
      } catch (error) {
        setError('Failed to delete resume');
        toast.error('Failed to delete resume');
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) return (
    <div className="container mx-auto p-4">
      <div className="border rounded-lg p-4 shadow-md dark:border-gray-700">
        <div className="flex flex-col md:flex-row gap-4">
          <Skeleton width={128} height={128} />
          <div className="flex-1">
            <Skeleton width={200} height={24} />
            <Skeleton count={3} />
            <div className="mt-2">
              <Skeleton width={80} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-2 md:p-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6 gap-2 md:gap-4">
        <h1 className="text-xl md:text-3xl font-bold text-center md:text-left text-gray-900 dark:text-white">Resume Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded hover:bg-blue-600 transition-colors w-full md:w-auto text-sm md:text-base"
          disabled={loading || !!resume}
        >
          Add Resume
        </button>
      </div>

      {resume ? (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Current Resume</h2>
              <a 
                href={resume.resumeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm md:text-base dark:text-blue-400"
              >
                View Resume
              </a>
            </div>
            <button 
              onClick={handleDeleteResume}
              className="bg-red-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded hover:bg-red-600 transition-colors text-sm md:text-base"
              disabled={loading}
            >
              Delete Resume
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center p-4 text-gray-600 dark:text-gray-400">No resume uploaded yet</div>
      )}

      {/* Add Resume Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 md:p-4">
          <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">Add Resume</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-sm md:text-base text-gray-900 dark:text-white">Resume URL</label>
                <input
                  type="url"
                  value={resumeLink}
                  onChange={(e) => setResumeLink(e.target.value)}
                  className="w-full border rounded p-2 text-sm md:text-base dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Enter resume URL"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded hover:bg-gray-100 text-sm md:text-base dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleAddResume(resumeLink)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm md:text-base dark:bg-blue-600 dark:hover:bg-blue-700"
                  disabled={loading}
                >
                  Add Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeComponent;
