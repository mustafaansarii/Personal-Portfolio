import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialIcons = [
  { icon: <FaGithub />, link: "https://github.com/mustafaansarii" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mustafaansaari/" },
  { icon: <FaEnvelope />, link: "mailto:mustafaa.edu@gmail.com" },
];

const Footer = () => (
  <footer className="mt-10 relative">
    <div className="flex flex-col items-center">
      <div className="w-full h-[1px] bg-gray-700 dark:bg-white mb-4" />
      <div className="mt-2 flex justify-center gap-3">
        {socialIcons.map(({ icon, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent shadow-md h-6 w-6 flex items-center justify-center rounded-full text-gray-700 dark:text-white hover:text-blue-500"
          >
            {icon}
          </a>
        ))}
      </div>
      <div className="text-xs dark:text-white font-semibold py-3 text-center">
        <p>© {new Date().getFullYear()} Mustafa. Built with ❤️ using React.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
