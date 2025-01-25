import { useState, useEffect } from "react";
import config from "../config";

export const useSocialIcons = () => {
  const [socialIcons, setSocialIcons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSocialIcons = async () => {
    try {
      const response = await fetch(`${config.Backend_Api}socials`);
      if (!response.ok) {
        throw new Error("Error fetching social icons");
      }
      const data = await response.json();
      setSocialIcons(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSocialIcons();
  }, []);

  return { socialIcons, isLoading, error };
};
