// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSocialIcons } from "../Auth/SocialAuth"; 
const Footer = () => {
  const navigate = useNavigate();
  const { socialIcons, isLoading, error } = useSocialIcons();

  const handleNavigation = () => {
    navigate("/auth");
  };

  return (
    <footer className="relative">
      {/* Bold Line Above Footer */}
      <div className="flex flex-col items-center">
        <div className="w-full h-[1px] bg-gray-700 dark:bg-white mb-4"></div>

        <div className="mt-2 flex justify-center flex-wrap gap-3">
          {/* Social Icons */}
          {isLoading ? (
            <p>Loading social icons...</p>
          ) : error ? (
            <p>Error loading icons.</p>
          ) : (
            socialIcons.map((icon, index) => {
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
                  className="bg-transparent shadow-md font-normal h-6 w-6 flex items-center justify-center rounded-full"
                >
                  <img
                    src={icon.imgSrc}
                    alt={`Social Icon ${index}`}
                    className="h-full w-full rounded-full"
                  />
                </a>
              );
            })
          )}
        </div>

        <div className="text-xs dark:text-white font-semibold py-3 text-center">
          <p>
            <span
              onClick={handleNavigation}
              className="cursor-pointer text-gray-500 hover:underline"
            >
              © {new Date().getFullYear()} Mustafa. Built with ❤️ using React.
            </span>
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
