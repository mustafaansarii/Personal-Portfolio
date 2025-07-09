'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
const Hero = () => {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }

  const socialIcons = [
    { link: "https://github.com/mustafaansarii", icon: <FaGithub size={24} />, alt: "GitHub" },
    { link: "https://www.linkedin.com/in/mustafaansaari/", icon: <FaLinkedin size={24} />, alt: "LinkedIn" },
    { link: "mailto:mustafaa.edu@gmail.com", icon: <FaEnvelope size={24} />, alt: "Email" },
    { link: "https://leetcode.com/u/mustafaansari/", icon: < img src="https://codolio.com/icons/leetcode_dark.png" alt="LeetCode" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7 dark:text-white" />, alt: "LeetCode" },
    { link: "https://codeforces.com/profile/mustafaansari", icon: <img src="https://cdn.iconscout.com/icon/free/png-512/free-code-forces-3521352-2944796.png?f=webp&w=256" alt="Codeforces" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7 dark:text-white" />, alt: "Codeforces" },
    { link: "https://www.geeksforgeeks.org/user/mustafaansarii", icon: <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="GeeksforGeeks" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7 dark:text-white" />, alt: "GeeksforGeeks" },
    { link: "https://www.codechef.com/users/mustafaansari", icon: <img src="https://codolio.com/icons/codechef_dark.png" alt="CodeChef" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7 dark:text-white" />, alt: "CodeChef" }
  ];

  return (
    <>
    <section id='hero' className="h-screen flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center lg:px-12"
      >
        <div className="mx-auto max-w-2xl text-left">
          <h1 className="text-5xl font-extrabold font-serif leading-tight from-gray-800 to-blue-500 dark:from-white dark:to-blue-500 bg-gradient-to-r bg-clip-text text-transparent sm:text-6xl">
            Hi, I&lsquo;m <br /> Mustafa Ansari
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-2xl sm:text-2xl dark:text-white font-serif">
            Full Stack Developer & Aspiring Software Engineer
          </p>
          <p className="mt-4 max-w-xl mx-auto text-lg sm:text-xl dark:text-white font-sans">
            I build scalable, responsive, and high-performance web applications using modern technologies.
            My focus is on writing clean, maintainable code and delivering seamless user experiences.
          </p>
          <div className="mt-8 flex justify-start">
            {socialIcons.map((icon, index) => (
              <motion.a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5 }}
                className="mr-4"
              >
                <span className="w-6 h-6 md:w-7 md:h-7">{icon.icon}</span>
              </motion.a>
            ))}
          </div>
          <div className="mt-8 flex justify-start">
            <motion.button
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full dark:bg-blue-600 dark:text-white"
              onClick={() => window.location.href = '#projects'}
            >
              View My Work
            </motion.button>
            <motion.button
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5 }}
              className="border text-gray-800 font-bold py-2 px-4 rounded-full ml-4 cursor-pointer dark:bg-gray-700 dark:text-white"
              onClick={() => window.location.href = 'https://drive.google.com/file/d/1PGsMMkw2oKhEgEsuql9uLgkpNiQHO8gg/view'}
            >
              View Resume
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
    </>
  );
}

export default Hero
