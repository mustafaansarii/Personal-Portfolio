import React, { useState, useEffect } from "react";
import Table from '@mui/joy/Table';
import AdminAuth from "./AdminDataAuth";
import { AiFillDelete } from "react-icons/ai";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function Admin() {
  const [projects, setProjects] = useState([]);
  const [resumes, setResumes] = useState([]);
  const [socials, setSocials] = useState([]);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [currentForm, setCurrentForm] = useState("");
  const [formData, setFormData] = useState({});
  const techStacks = ["React", "Angular", "Vue", "Spring Boot", "Django", "Flask", "Node.js"];

  useEffect(() => {
    AdminAuth.fetchData("projects", setProjects, setError);
    AdminAuth.fetchData("resumes", setResumes, setError);
    AdminAuth.fetchData("socials", setSocials, setError);
  }, []);

  const handleDelete = async (section, id) => {
    try {
      await AdminAuth.deleteData(section, id, setError);
      alert("Data deleted successfully!");
      AdminAuth.fetchData(section, AdminAuth.getSetter(section, { setProjects, setResumes, setSocials }), setError);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleAdd = async (section) => {
    // Ensure techStack is a comma-separated string
    const modifiedFormData = {
      ...formData,
      techStack: Array.isArray(formData.techStack) ? formData.techStack.join(", ") : formData.techStack || "",
    };

    console.log("Data Sent to Backend:", modifiedFormData); // Log data before sending

    try {
      // Send the data to the backend
      await AdminAuth.addData(section, modifiedFormData, setError);
      alert("Data added successfully!");

      // Fetch updated data from the backend
      AdminAuth.fetchData(section, AdminAuth.getSetter(section, { setProjects, setResumes, setSocials }), setError);

      // Close the popup and reset the form
      setShowPopup(false);
      setFormData({});
    } catch (error) {
      console.error("Error adding data:", error);

      // Display more detailed error messages if available
      if (error.response) {
        console.error("Error Response Data:", error.response.data);
      }
      setError(`Error adding data: ${error.message}`);
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
            <TextField label="Title" fullWidth margin="normal" value={formData.title || ""} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            <TextField label="Description" fullWidth margin="normal" value={formData.description || ""} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
            <TextField label="Live Link" fullWidth margin="normal" value={formData.liveLink || ""} onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })} />
            <TextField label="Image Link" fullWidth margin="normal" value={formData.imgSrc || ""} onChange={(e) => setFormData({ ...formData, imgSrc: e.target.value })} />
            <TextField label="GitHub Link" fullWidth margin="normal" value={formData.GitHubLink || ""} onChange={(e) => setFormData({ ...formData, GitHubLink: e.target.value })} />
            <FormControl fullWidth margin="normal">
              <InputLabel>Tech Stack</InputLabel>
              <Select
                multiple
                value={formData.techStack || []}
                onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
              >
                {techStacks.map((tech) => (
                  <MenuItem key={tech} value={tech}>{tech}</MenuItem>
                ))}
              </Select>
            </FormControl>
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
    <div className="min-h-screen p-5 bg-white text-black">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Add {currentForm}</h3>
            {renderFormFields()}
            <div className="mt-4 flex justify-end gap-3">
              <Button variant="outlined" color="secondary" onClick={() => setShowPopup(false)}>Close</Button>
              <Button variant="contained" color="primary" onClick={() => handleAdd(currentForm)}>Submit</Button>
            </div>
          </div>
        </div>
      )}

      <h1 className="text-center text-3xl font-bold mb-5">
        <Link to="/" className="hover:underline">Admin Dashboard</Link>
      </h1>

      <h2 className="text-center text-2xl font-bold mb-5">Projects
        <button onClick={() => { setShowPopup(true); setCurrentForm("projects"); }} className="ml-4 px-4 py-2 bg-green-500 text-white rounded">Add</button>
      </h2>

      <div className="overflow-x-auto">
        <Table className="w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Live Link</th>
              <th>GitHub Link</th>
              <th>Tech Stack</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td><img src={project.imgSrc} alt={project.title} className="w-12 rounded" /></td>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td><a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Live</a></td>
                <td><a href={project.GitHubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">GitHub</a></td>
                <td>{project.techStack?.join(", ")}</td>
                <td><AiFillDelete className="text-red-500 cursor-pointer" onClick={() => handleDelete("projects", project.id)} /></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <h2 className="text-center text-2xl font-bold mb-5 mt-10">Resumes
        <button onClick={() => { setShowPopup(true); setCurrentForm("resumes"); }} className="ml-4 px-4 py-2 bg-green-500 text-white rounded">Add</button>
      </h2>

      <div className="overflow-x-auto">
        <Table className="w-full">
          <thead>
            <tr>
              <th>Resume Link</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {resumes.map((resume) => (
              <tr key={resume.id}>
                <td><a href={resume.resumeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View Resume</a></td>
                <td><AiFillDelete className="text-red-500 cursor-pointer" onClick={() => handleDelete("resumes", resume.id)} /></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <h2 className="text-center text-2xl font-bold mb-5 mt-10">Social Links
        <button onClick={() => { setShowPopup(true); setCurrentForm("socials"); }} className="ml-4 px-4 py-2 bg-green-500 text-white rounded">Add</button>
      </h2>

      <div className="overflow-x-auto">
        <Table className="w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Link</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {socials.map((social) => (
              <tr key={social.id}>
                <td><img src={social.imgSrc} alt="Social" className="w-8 h-8 rounded-full" /></td>
                <td><a href={social.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{social.link}</a></td>
                <td><AiFillDelete className="text-red-500 cursor-pointer" onClick={() => handleDelete("socials", social.id)} /></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
