// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Hardcoded social data
  const socialIcons = [
    { icon: <FaGithub />, link: "https://github.com/mustafaansarii" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mustafaansaari/" },
    { icon: <FaTwitter />, link: "https://x.com/Mustafaansaarii" },
    { icon: <FaEnvelope />, link: "mailto:mustafaa.edu@gmail.com" },
  ];

  return (
    <footer className="relative mt-10">
      {/* Bold Line Above Footer */}
      <div className="flex flex-col items-center">
        <div className="w-full h-[1px] bg-gray-700 dark:bg-white mb-4"></div>

        <div className="mt-2 flex justify-center flex-wrap gap-3">
          {/* Social Icons */}
          {socialIcons.map((icon, index) => {
            const isEmail = icon.link.match(
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            );
            const href = isEmail ? `mailto:${icon.link}` : icon.link;

            return (
              <a
                key={index}
                href={href}
                target={isEmail ? "_self" : "_blank"}
                rel={isEmail ? "" : "noopener noreferrer"}
                className="bg-transparent shadow-md font-normal h-6 w-6 flex items-center justify-center rounded-full text-gray-700 dark:text-white hover:text-blue-500"
              >
                {icon.icon}
              </a>
            );
          })}
        </div>

        <div className="text-xs dark:text-white font-semibold py-3 text-center">
          <p>
            <span className="cursor-pointer text-gray-500 hover:underline">
              © {new Date().getFullYear()} Mustafa. Built with ❤️ using React.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
