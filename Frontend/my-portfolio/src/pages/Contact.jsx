import React, { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles
import config from '../config';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${config.Backend_Api}api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
      } else {
        alert('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <div
      data-aos="fade-up" // Apply AOS animation
      className="container mx-auto p-6 rounded-lg shadow-lg max-w-2xl mt-10 border mb-10"
    >
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-50 mb-6">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Grid for First and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-600 dark:text-gray-50 font-medium mb-2">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="p-3 border-2 dark:bg-slate-400 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 dark:text-gray-50 font-medium mb-2">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="p-3 border-2 dark:bg-slate-400 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Single Inputs */}
        {/* <div className="flex flex-col">
          <label className="text-gray-600 dark:text-gray-50 font-medium mb-2">
            Company:
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="p-3 border-2 border-gray-300 dark:bg-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}

        <div className="flex flex-col">
          <label className="text-gray-600 dark:text-gray-50 font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border-2 border-gray-300 dark:bg-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600 dark:text-gray-50 font-medium mb-2">
            Phone Number:
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="p-3 border-2 border-gray-300 dark:bg-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600 dark:text-gray-50 font-medium mb-2">
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 border-2 border-gray-300 dark:bg-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full md:w-1/2 py-3 mt-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
