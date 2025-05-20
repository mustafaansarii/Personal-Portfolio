import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const buttonHover = {
  scale: 1.1,
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
};

export default function HeroSection() {
  const socialIcons = [
    { link: "https://github.com/mustafaansarii", icon: <FaGithub />, alt: "GitHub" },
    { link: "https://www.linkedin.com/in/mustafaansaari/", icon: <FaLinkedin />, alt: "LinkedIn" },
    { link: "mailto:mustafaa.edu@gmail.com", icon: <FaEnvelope />, alt: "Email" },
    { link: "https://leetcode.com/u/mustafaansari/", icon: <img src="https://codolio.com/icons/leetcode_dark.png" alt="LeetCode" className="w-6 h-6 md:w-7 md:h-7" />, alt: "LeetCode" },
    { link: "https://codeforces.com/profile/mustafaansari", icon: <img src="https://cdn.iconscout.com/icon/free/png-512/free-code-forces-3521352-2944796.png?f=webp&w=256" alt="Codeforces" className="w-6 h-6 md:w-7 md:h-7" />, alt: "Codeforces" },
    { link: "https://www.geeksforgeeks.org/user/mustafaansarii", icon: <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="GeeksforGeeks" className="w-6 h-6 md:w-7 md:h-7" />, alt: "GeeksforGeeks" },
    { link: "https://www.codechef.com/users/mustafaansari", icon: <img src="https://codolio.com/icons/codechef_dark.png" alt="CodeChef" className="w-6 h-6 md:w-7 md:h-7" />, alt: "CodeChef" }
  ];
  return (
    <section className="min-h-screen flex items-center justify-start font-sans mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ maxWidth: '1200px' }}>
        <motion.div
          className="space-y-8"
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
        >
            <div className="space-y-4 text-left">
                <motion.h1
                className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-serif"
                variants={fadeInAnimation}
                transition={{ delay: 0.2 }}
                >
                Hi, I&apos;m 
                <br />
                Mustafa Ansari
                </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-300 font-serif"
              variants={fadeInAnimation}
              transition={{ delay: 0.4 }}
            >
              Competitive Programmer & Aspiring Software Engineer
            </motion.h2>
            <motion.p
              className="text-base text-gray-900 dark:text-gray-300 max-w-2xl leading-relaxed"
              variants={fadeInAnimation}
              transition={{ delay: 0.6 }}
            >
              As a problem solver and full-stack developer, I'm passionate about building robust web applications. I leverage technologies like Spring Boot and React to craft efficient, clean, and high-performance solutions. Beyond development, I actively engage in competitive programming, holding ratings of <strong className="underline" style={{textDecorationColor: 'pink'}}>1707 on CodeChef</strong>, <strong className="underline" style={{textDecorationColor: 'pink'}}>1835 on LeetCode</strong>, and <strong className="underline" style={{textDecorationColor: 'pink'}}>1679 on GeeksforGeeks</strong>.
            </motion.p>
          </div>
          <motion.div
            className="flex justify-start gap-5 pt-4"
            variants={fadeInAnimation}
            transition={{ delay: 1.0 }}
          >
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 -mt-5 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.4, type: "spring", stiffness: 250 } }}
              >
                {React.cloneElement(social.icon, {
                  className: "w-6 h-6 md:w-7 md:h-7",
                })}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-start gap-4 w-full px-4"
            variants={fadeInAnimation}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md hover:shadow-md transition-all duration-300 text-sm flex items-center justify-center"
              style={{backgroundColor: '#6366F1'}}
              whileHover={buttonHover}
            >
              View Projects <FaArrowRight className="ml-2" />
            </Link>
            <motion.a
              href='https://drive.google.com/file/d/1PGsMMkw2oKhEgEsuql9uLgkpNiQHO8gg/view'
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300 text-sm flex items-center justify-center"
              whileHover={buttonHover}
            >
              View Resume <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
