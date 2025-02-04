import axios from "axios";
import config from "../config.js";

const API_URL = config.Backend_Api;

const AdminAuth = {
  
  // ✅ Check admin password
  checkPassword: async (email, password) => {
    try {
      const response = await axios.get(`${API_URL}admin/${email}`);
      if (response.data.password === password) {
        return true;
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || "Invalid password");
    }
  },

  // ✅ Send OTP
  sendOtp: async (email) => {
    try {
      const response = await axios.post(`${API_URL}otp/send/${email}`);
      return response.status === 200;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to send OTP");
    }
  },

  // ✅ Verify OTP
  verifyOtp: async (email, otp) => {
    try {
      const response = await axios.post(`${API_URL}otp/verify/${email}/${otp}`);
      return response.status === 200;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Invalid OTP");
    }
  },

  // ✅ Fetch data (Projects, Resumes, Socials)
  fetchData: async (endpoint, setter, setError) => {
    try {
      console.log(`Fetching data from ${API_URL}${endpoint}`);
      const response = await axios.get(`${API_URL}${endpoint}`);
      setter(response.data);
    } catch (error) {
      setError(`Error fetching ${endpoint}: ${error.message}`);
      console.error(`Error fetching ${endpoint}:`, error.response?.data || error.message);
    }
  },

  // ✅ Add new data (Projects, Resumes, Socials)
  addData: async (section, data, setError) => {
    try {
      // Ensure `techStack` is formatted correctly
      const modifiedData = {
        ...data,
        techStack: Array.isArray(data.techStack) ? data.techStack.join(", ") : data.techStack || "",
      };

      console.log(`Adding data to ${API_URL}${section}`, modifiedData);

      const response = await axios.post(`${API_URL}${section}`, modifiedData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Server Response:", response.data);
      return response.data;
    } catch (error) {
      // Handle cases when `error.response` might be undefined
      const errorMessage = error.response
        ? error.response?.data?.message || error.message
        : "Network error. Please try again.";
        
      console.error("Error adding data:", errorMessage);
      setError(`Error adding data: ${errorMessage}`);
      throw error;
    }
  },

  // ✅ Delete data (Projects, Resumes, Socials)
  deleteData: async (section, id, setError) => {
    try {
      console.log(`Deleting ${section} with ID: ${id}`);
      await axios.delete(`${API_URL}${section}/${id}`);
    } catch (error) {
      // Handle cases when `error.response` might be undefined
      const errorMessage = error.response
        ? error.response?.data?.message || error.message
        : "Network error. Please try again.";
        
      console.error("Error deleting data:", errorMessage);
      setError(`Error deleting data: ${errorMessage}`);
      throw error;
    }
  },

  // ✅ Get the appropriate state setter function
  getSetter: (sectionName, setters) => {
    switch (sectionName) {
      case "projects":
        return setters.setProjects;
      case "resumes":
        return setters.setResumes;
      case "socials":
        return setters.setSocials;
      default:
        return () => {};
    }
  },
};

export default AdminAuth;
