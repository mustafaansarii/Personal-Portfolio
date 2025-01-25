import { useState, useEffect } from "react";
import config from "../config";

let resumeCache = null; // In-memory cache for the resume link

// Function to fetch resume link
const fetchResumeLink = async () => {
  const response = await fetch(`${config.Backend_Api}resumes`);
  if (!response.ok) {
    throw new Error("Error fetching resume link");
  }
  const data = await response.json();
  
  return data;
};

// Custom hook for fetching and caching the resume link
export const useResumeLink = () => {
  const [resumeLink, setResumeLink] = useState(resumeCache);
  const [isLoading, setIsLoading] = useState(resumeCache === null); // Skip loading if cache exists
  const [error, setError] = useState(null);

  useEffect(() => {
    if (resumeCache) {
      // Use cached data if available
      setResumeLink(resumeCache);
      setIsLoading(false);
    } else {
      // Fetch data if not in cache
      const fetchLink = async () => {
        try {
          const data = await fetchResumeLink();
          resumeCache = data; // Store in cache
          setResumeLink(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchLink();
    }
  }, []);

  return { resumeLink, isLoading, error };
};
