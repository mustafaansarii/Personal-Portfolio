import config from '../config';

export const useProjects = async () => {
  try {
    const response = await fetch(`${config.Backend_Api}projects`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    
    return {
      data,
      isLoading: false,
      error: null,
      
    };
  } catch (error) {
    return {
      data: [],
      isLoading: false,
      error,
    };
  }
};
