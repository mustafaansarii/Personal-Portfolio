import { useState } from 'react';
import config from '../config';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from 'framer-motion';

const Contact = () => {
  const socialIcons = [
    { link: "https://github.com/mustafaansarii", icon: <FaGithub />, alt: "GitHub" },
    { link: "https://www.linkedin.com/in/mustafaansaari/", icon: <FaLinkedin />, alt: "LinkedIn" },
    { link: "mailto:mustafaa.edu@gmail.com", icon: <FaEnvelope />, alt: "Email" },
  ];

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState({
    show: false,
    message: '',
    timeoutId: null
  });

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
        setSuccessMessage({
          show: true,
          message: 'Message sent!',
          timeoutId: setTimeout(() => {
            setSuccessMessage({ show: false, message: '', timeoutId: null });
          }, 3000)
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSuccessMessage({
          show: true,
          message: 'Failed to send. Please try again.',
          timeoutId: setTimeout(() => {
            setSuccessMessage({ show: false, message: '', timeoutId: null });
          }, 3000)
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage({
        show: true,
        message: 'Failed to send. Please try again.',
        timeoutId: setTimeout(() => {
          setSuccessMessage({ show: false, message: '', timeoutId: null });
        }, 3000)
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section id='contact' className="relative py-16 bg-white/10 dark:bg-black/10 backdrop-blur-lg min-h-screen">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          <div className="mb-8">
          <div className="text-left">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-400 via-gray-500 to-sky-600 dark:from-gray-100  dark:to-blue-600 bg-clip-text text-transparent">
              Contact Me
            </h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </div>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            {socialIcons.map(({ link, icon, alt }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-3xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={alt}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          <div className="p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800  p-3 text-gray-900 dark:text-white"
                  placeholder="Your Name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800  p-3 text-gray-900 dark:text-white"
                  placeholder="Your Email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800   p-3 text-gray-900 dark:text-white"
                  placeholder="Your Message"
                  required
                />
              </div>

              <div>
                {successMessage.show && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`text-sm rounded-md px-4 py-2 mb-2 ${
                      successMessage.message.includes('sent')
                        ? 'bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300'
                        : 'bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300'
                    }`}
                  >
                    {successMessage.message}
                  </motion.div>
                )}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 dark:bg-gray-200 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {isLoading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : null}
                  <span className="ml-2">{isLoading ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
