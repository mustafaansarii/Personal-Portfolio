import axios from "axios";
import config from "../config.js";

const AdminAuth = {
  
  checkPassword: async (email, password) => {
    try {
      const response = await axios.get(`${config.Backend_Api}admin/${email}`);
      if (response.data.password === password) {
        return true;
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || "Invalid password");
    }
  },

  sendOtp: async (email) => {
    try {
      const response = await axios.post(`${config.Backend_Api}otp/send/${email}`);
      if (response.status === 200) {
        return true; // OTP sent successfully
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to send OTP");
    }
  },


  verifyOtp: async (email, otp) => {
    try {
      const response = await axios.post(`${config.Backend_Api}otp/verify/${email}/${otp}`);
      if (response.status === 200) {
        return true; // OTP is valid
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || "Invalid OTP");
    }
  },


  fetchData: async (endpoint, setter, setError) => {
    try {
      const response = await axios.get(`${config.Backend_Api}${endpoint}`);
      setter(response.data);
    } catch (error) {
      setError(`Error fetching ${endpoint}: ${error.message}`);
      console.error(`Error fetching ${endpoint}:`, error);
    }
  },

  addData: async (section, data, setError) => {
    try {
      await axios.post(`${config.Backend_Api}${section}`, data);
    } catch (error) {
      setError(`Error adding data: ${error.message}`);
      throw error;
    }
  },

  deleteData: async (section, id, setError) => {
    try {
      await axios.delete(`${config.Backend_Api}${section}/${id}`);
    } catch (error) {
      setError(`Error deleting data: ${error.message}`);
      throw error;
    }
  },

  getSetter: (sectionName, setters) => {
    switch (sectionName) {
      case "projects":
        return setters.setProjects;
      case "resumes":
        return setters.setResumes;
      case "socials":
        return setters.setSocials;
      default:
        return () => { };
    }
  },
};

export default AdminAuth;
