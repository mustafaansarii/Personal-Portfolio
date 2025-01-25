import React, { useState, useEffect } from "react";
import Table from '@mui/joy/Table';
import AdminAuth from "./AdminDataAuth"; // Import separated service logic
import { AiFillDelete } from "react-icons/ai";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function Admin() {
  const [projects, setProjects] = useState([]);
  const [resumes, setResumes] = useState([]);
  const [socials, setSocials] = useState([]);
  const [error, setError] = useState(""); // State for error handling

  // States for managing popup forms
  const [showPopup, setShowPopup] = useState(false);
  const [currentForm, setCurrentForm] = useState("");
  const [formData, setFormData] = useState({});

  // Fetch data on component mount
  useEffect(() => {
    AdminAuth.fetchData("projects", setProjects, setError);
    AdminAuth.fetchData("resumes", setResumes, setError);
    AdminAuth.fetchData("socials", setSocials, setError);
  }, []);

  const handleDelete = async (section, id) => {
    try {
      await AdminAuth.deleteData(section, id, setError);
      alert("Data deleted successfully!");
      AdminAuth.fetchData(section, AdminAuth.getSetter(section, { setProjects, setResumes, setSocials }), setError); // Refresh data
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleAdd = async (section) => {
    try {
      await AdminAuth.addData(section, formData, setError);
      alert("Data added successfully!");
      AdminAuth.fetchData(section, AdminAuth.getSetter(section, { setProjects, setResumes, setSocials }), setError); // Refresh data
      setShowPopup(false);
      setFormData({}); // Reset form data
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const tableStyle = {
    width: '90%',
    maxWidth: '900px',
    margin: '0 auto',
    borderCollapse: 'collapse',
  };

  const thStyle = "dark:text-white text-black text-left p-3 border-b border-gray-700 text-sm sm:text-base";
  const tdStyle = "dark:text-white text-black p-3 border-b border-gray-700 text-sm sm:text-base";
  const imgStyle = { width: '50px', borderRadius: '5px' };

  const renderFormFields = () => {
    switch (currentForm) {
      case "projects":
        return (
          <>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.title || ""}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.description || ""}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <TextField
              label="Live Link"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.liveLink || ""}
              onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
            />
            <TextField
              label="image Link"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.imgSrc || ""}
              onChange={(e) => setFormData({ ...formData, imgSrc: e.target.value })}
            />
            <TextField
              label="GitHub Link"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.GitHubLink || ""}
              onChange={(e) => setFormData({ ...formData, GitHubLink: e.target.value })}
            />
          </>
        );
      case "resumes":
        return (
          <TextField
            label="Resume Link"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.resumeLink || ""}
            onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
          />
        );
      case "socials":
        return (
          <>
            <TextField
              label="Image URL"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.imgSrc || ""}
              onChange={(e) => setFormData({ ...formData, imgSrc: e.target.value })}
            />
            <TextField
              label="Link"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.link || ""}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" min-h-screen p-3 sm:p-5">
      
      {showPopup && (
        <div className=" bg-slate-500 text-white fixed inset-0  bg-opacity-50 flex items-center justify-center">
          <div className=" dark:bg-gray-800 p-5 rounded shadow-lg">
            <h3 className="text-lg dark:text-white text-black mb-4">Add {currentForm}</h3>
            {renderFormFields()}
            <div className="mt-4 flex justify-end gap-3">
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setShowPopup(false)}
              >
                Close
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAdd(currentForm)}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}




<h1 className="text-center text-lg sm:text-3xl mb-5 text-black dark:text-white">
  <Link to="/" className="hover:underline">
    Admin Dashboard
  </Link>
</h1>


      <h2 className="text-center dark:text-white text-black text-lg sm:text-2xl mb-5">Projects
        <button onClick={() => { setShowPopup(true); setCurrentForm("projects"); }} className="ml-4 px-4 py-2 bg-green-500 text-white rounded">Add</button>
      </h2>
      <div className="overflow-x-auto">
        <table style={tableStyle} className="table-auto w-full">
          <thead>
            <tr>
              <th className={thStyle}>Image</th>
              <th className={thStyle}>Title</th>
              <th className={thStyle}>Description</th>
              <th className={thStyle}>Live Link</th>
              <th className={thStyle}>GitHub Link</th>
              <th className={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td className={tdStyle}><img src={project.imgSrc} alt={project.title} style={imgStyle} /></td>
                <td className={tdStyle}>{project.title}</td>
                <td className={tdStyle}>{project.description}</td>
                <td className={tdStyle}><a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Live</a></td>
                <td className={tdStyle}><a href={project.GitHubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">GitHub</a></td>
                <td className={tdStyle}><AiFillDelete className="text-red-500 cursor-pointer" onClick={() => handleDelete("projects", project.id)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-center dark:text-white text-black text-lg sm:text-2xl mt-10 mb-5">Resumes
        <button onClick={() => { setShowPopup(true); setCurrentForm("resumes"); }} className="ml-4 px-4 py-2 bg-green-500 text-white rounded">Add</button>
      </h2>
      <div className="overflow-x-auto">
        <table style={tableStyle} className="table-auto w-full">
          <thead>
            <tr>
              <th className={thStyle}>ID</th>
              <th className={thStyle}>Resume Link</th>
              <th className={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {resumes.map((resume) => (
              <tr key={resume.id}>
                <td className={tdStyle}>{resume.id}</td>
                <td className={tdStyle}><a href={resume.resumeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View Resume</a></td>
                <td className={tdStyle}><AiFillDelete className="text-red-500 cursor-pointer" onClick={() => handleDelete("resumes", resume.id)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-center dark:text-white text-black text-lg sm:text-2xl mt-10 mb-5">Social Links
        <button onClick={() => { setShowPopup(true); setCurrentForm("socials"); }} className="ml-4 px-4 py-2 bg-green-500 text-white rounded">Add</button>
      </h2>
      <div className="overflow-x-auto">
        <table style={tableStyle} className="table-auto w-full">
          <thead>
            <tr>
              <th className={thStyle}>Image</th>
              <th className={thStyle}>Link</th>
              <th className={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {socials.map((social) => (
              <tr key={social.id}>
                <td className={tdStyle}><img src={social.imgSrc} alt="Social" style={{ width: '30px' }} /></td>
                <td className={tdStyle}><a href={social.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{social.link}</a></td>
                <td className={tdStyle}><AiFillDelete className="text-red-500 cursor-pointer" onClick={() => handleDelete("socials", social.id)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
