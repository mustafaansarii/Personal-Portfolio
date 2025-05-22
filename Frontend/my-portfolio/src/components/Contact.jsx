import React, { useState } from 'react';
import config from '../config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(config.Backend_Api + '/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent!');
        setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' });
      } else {
        toast.error('Failed to send. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 rounded-lg shadow-lg max-w-2xl border border-gray-100 dark:border-gray-700 py-10 mt-20">
      <ToastContainer />
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-50 mb-8">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['firstName', 'lastName'].map((name) => (
            <div className="flex flex-col" key={name}>
              <label className="text-gray-600 dark:text-gray-200 font-medium mb-2">
                {name === 'firstName' ? 'First Name' : 'Last Name'}
              </label>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="p-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder={`Enter your ${name === 'firstName' ? 'first' : 'last'} name`}
              />
            </div>
          ))}
        </div>

        {['email', 'phoneNumber'].map((name) => (
          <div className="flex flex-col" key={name}>
            <label className="text-gray-600 dark:text-gray-200 font-medium mb-2">
              {name === 'email' ? 'Email' : 'Phone Number'}
            </label>
            <input
              type={name === 'email' ? 'email' : 'text'}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className="p-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder={`Enter your ${name === 'email' ? 'email' : 'phone number'}`}
            />
          </div>
        ))}

        <div className="flex flex-col">
          <label className="text-gray-600 dark:text-gray-200 font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[150px]"
            placeholder="Write your message here..."
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-1/2 py-3 mt-6 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-yellow-500 hover:to-pink-600 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center"
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
