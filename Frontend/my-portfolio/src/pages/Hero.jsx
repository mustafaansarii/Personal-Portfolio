import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { initAOS } from "../aosConfig";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import axios from 'axios';
import config from '../config';
const API_URL = config.Backend_Api + "/resumes";

const useResumeLink = () => {
  const [resumeLink, setResumeLink] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setResumeLink(response.data);
      })
      .catch((error) => {
        console.error("Error fetching resume link:", error);
        setResumeLink([]);
      });
  }, []);

  return { resumeLink };
}

export default function Hero() {
  const { resumeLink } = useResumeLink();
  const actualResumeLink =
    Array.isArray(resumeLink) && resumeLink.length > 0
      ? resumeLink[0].resumeLink
      : "#";

  const socialIcons = [
    { link: "https://github.com/mustafaansarii", icon: <FaGithub />, alt: "GitHub" },
    { link: "https://www.linkedin.com/in/mustafaansaari/", icon: <FaLinkedin />, alt: "LinkedIn" },
    { link: "mailto:mustafaansari@example.com", icon: <FaEnvelope />, alt: "Email" },
    { link: "https://leetcode.com/u/mustafaansari/", icon: <img src="https://codolio.com/icons/leetcode_dark.png" alt="LeetCode" className="w-6 h-6 md:w-7 md:h-7" />, alt: "LeetCode" },
    { link: "https://codeforces.com/profile/mustafaansari", icon: <img src="https://cdn.iconscout.com/icon/free/png-512/free-code-forces-3521352-2944796.png?f=webp&w=256" alt="Codeforces" className="w-6 h-6 md:w-7 md:h-7" />, alt: "Codeforces" },
    { link: "https://www.geeksforgeeks.org/user/mustafaansarii", icon: <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="GeeksforGeeks" className="w-6 h-6 md:w-7 md:h-7" />, alt: "GeeksforGeeks" },
    { link: "https://www.codechef.com/users/mustafaansari", icon: <img src="https://codolio.com/icons/codechef_dark.png" alt="CodeChef" className="w-6 h-6 md:w-7 md:h-7" />, alt: "CodeChef" }
  ];

  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 dark:text-white">
      <div className="w-full max-w-6xl text-center space-y-8">
        <div data-aos="fade-up" className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600 dark:from-red-400 dark:to-purple-400 leading-tight">
            Hi, I'm Mustafa Ansari
          </h1>

          <p className="text-lg md:text-xl lg:text-xl text-gray-600 dark:text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed" data-aos="fade-right">
            A passionate 3rd-year Computer Science Engineering student specializing in Data Science. Focused on building full-stack solutions for real-world problems with over <strong className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">1000+ coding challenges</strong> conquered. Continuously evolving through competitive programming and technical exploration.
          </p>

          <div className="flex justify-center space-x-4 md:space-x-6" data-aos="zoom-in">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-2 rounded-full  hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <span className="text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-purple-400 text-xl md:text-xl">
                  {icon.icon}
                </span>
              </a>
            ))}
          </div>

          <div className="flex flex-row justify-center gap-4 md:gap-6 w-full overflow-x-auto md:overflow-visible" data-aos="fade-up">
            <a
              href={actualResumeLink}
              className="inline-block px-4 py-2 md:px-8 md:py-3 text-xs md:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume 📄
            </a>

            <Link
              to="contact"
              smooth={true}
              className="inline-block px-4 py-2 md:px-10 md:py-3 text-xs md:text-base font-semibold text-white bg-gradient-to-r from-red-500 to-pink-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap flex-shrink-0"
            >
              Let's Connect 💬
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
