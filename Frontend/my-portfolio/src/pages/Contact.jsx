import React, { useState } from 'react';
import config from '../config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(config.Backend_Api + '/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
      } else {
        toast.error('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error sending message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 rounded-lg shadow-lg max-w-2xl border border-gray-100 dark:border-gray-700 py-10 mt-20">
      <ToastContainer />
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-50 mb-8">
        Get in Touch
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Grid for First and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-600 dark:text-gray-200 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="p-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 dark:text-gray-200 font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="p-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Single Inputs */}
        <div className="flex flex-col">
          <label className="text-gray-600 dark:text-gray-200 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600 dark:text-gray-200 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="p-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600 dark:text-gray-200 font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[150px]"
            placeholder="Write your message here..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-1/2 py-3 mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            {isLoading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : null}
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
