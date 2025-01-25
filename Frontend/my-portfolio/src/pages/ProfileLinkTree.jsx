import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTelegram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ProfileLinkTree = () => {
  const links = [
    { icon: <FontAwesomeIcon icon={faGlobe} />, name: "Portfolio", url: "/" },
    { icon: <FontAwesomeIcon icon={faLinkedin} />, name: "LinkedIn", url: "https://www.linkedin.com/in/mustafaansaari/" },
    {
      icon: <img src="https://img.icons8.com/?size=100&id=O4SEeX66BY8o&format=png&color=000000" alt="CodeChef" className="w-6 h-6" />,
      name: "CodeChef",
      url: "https://www.codechef.com/users/Mustafaansari",
    },
    {
      icon: <img src="https://cdn.iconscout.com/icon/free/png-512/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-2944796.png" alt="Codeforces" className="w-6 h-6" />,
      name: "Codeforces",
      url: "https://codeforces.com/profile/mustafaansari",
    },
    {
      icon: <img src="https://cdn.iconscout.com/icon/free/png-512/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png" alt="LeetCode" className="w-6 h-6" />,
      name: "LeetCode",
      url: "https://leetcode.com/mustafaansari/",
    },
    {
      icon: <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="GeeksForGeeks" className="w-6 h-6" />,
      name: "GeeksForGeeks",
      url: "https://www.geeksforgeeks.org/user/mustafaansrii/",
    },
    { icon: <FontAwesomeIcon icon={faGithub} />, name: "GitHub", url: "https://github.com/mustafaansarii" },
    { icon: <FontAwesomeIcon icon={faTelegram} />, name: "X (Twitter)", url: "https://twitter.com/Mustafaansaarii" },
    { icon: <FontAwesomeIcon icon={faEnvelope} />, name: "Email", url: "mailto:your-email@example.com" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen  text-gray-100">
      <div className="w-[580px] max-h-screen rounded-xl shadow-2xl p-6  overflow-y-auto scrollbar-hide">
        <div className="text-center text-gray-700 dark:text-gray-300">
          <img
            src="https://ugc.production.linktr.ee/4e8c870d-923a-44f5-8eec-f5fa354ab22b_anime.jpeg?io=true&size=avatar-v3_0"
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full border-4 border-sky-400 shadow-lg"
          />
          <h1 className="text-2xl font-bold mt-4">Connect with me:</h1>
          <p className="text-sm mt-2 font-light ">
            Software Developer, Machine Learning Enthusiast, Real World Problem Solver.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-sky-400 transition-transform transform hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg p-4 mb-3 border bg-gray-800 border-gray-700 hover:bg-sky-600 hover:text-white transition-colors"
            >
              <span className="flex items-center gap-4">
                <span className="text-2xl">{link.icon}</span>
                <span className="font-medium">{link.name}</span>
              </span>
              <span className="text-gray-400 text-lg">&#x2026;</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileLinkTree;
