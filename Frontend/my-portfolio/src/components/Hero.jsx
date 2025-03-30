import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const resumeLink = "https://drive.google.com/file/d/1PGsMMkw2oKhEgEsuql9uLgkpNiQHO8gg/view";

export default function Hero() {
  const socialIcons = [
    { link: "https://github.com/mustafaansarii", icon: <FaGithub />, alt: "GitHub" },
    { link: "https://www.linkedin.com/in/mustafaansaari/", icon: <FaLinkedin />, alt: "LinkedIn" },
    { link: "mailto:mustafaansari@example.com", icon: <FaEnvelope />, alt: "Email" },
    { link: "https://leetcode.com/u/mustafaansari/", icon: <img src="https://codolio.com/icons/leetcode_dark.png" alt="LeetCode" className="w-6 h-6 md:w-7 md:h-7" />, alt: "LeetCode" },
    { link: "https://codeforces.com/profile/mustafaansari", icon: <img src="https://cdn.iconscout.com/icon/free/png-512/free-code-forces-3521352-2944796.png?f=webp&w=256" alt="Codeforces" className="w-6 h-6 md:w-7 md:h-7" />, alt: "Codeforces" },
    { link: "https://www.geeksforgeeks.org/user/mustafaansarii", icon: <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="GeeksforGeeks" className="w-6 h-6 md:w-7 md:h-7" />, alt: "GeeksforGeeks" },
    { link: "https://www.codechef.com/users/mustafaansari", icon: <img src="https://codolio.com/icons/codechef_dark.png" alt="CodeChef" className="w-6 h-6 md:w-7 md:h-7" />, alt: "CodeChef" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-grid">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
              Mustafa Ansari
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 animate-fade-in delay-100">
              Full Stack Developer & Problem Solver
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
              Specializing in building scalable web applications with modern technologies. Expertise in React, Spring Boot, and PostgreSQL. Passionate about crafting efficient solutions and solving complex engineering challenges.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-300 w-full px-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-base flex items-center justify-center"
            >
              View Projects
            </Link>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 text-base flex items-center justify-center"
            >
              View Resume
            </a>
          </div>

          <div className="flex justify-center gap-5 pt-4 animate-fade-in delay-500">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 w-7 h-7 flex items-center justify-center"
              >
                {React.cloneElement(social.icon, {
                  className: "w-6 h-6 md:w-7 md:h-7"
                })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
