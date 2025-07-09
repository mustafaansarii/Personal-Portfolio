"use client"
import { motion } from 'framer-motion'

const About = () => {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }

  const desc = "I'm Mustafa Ansari, a software engineer with a passion for creating intuitive and engaging web experiences. I'm currently exploring the world of Full Stack Development, Machine Learning, and constantly learning new technologies. While I'm early in my journey, I'm enthusiastic about building my skills and taking on new challenges. I believe in writing clean, readable code and focusing on user-centered design. I'm excited to grow my portfolio and contribute to meaningful projects."

  return (
    <section id="about" className="py-20 flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
        className="max-w-screen-xl mx-auto px-4 lg:px-12 flex flex-col lg:flex-row gap-12 items-center justify-center"
      >
        <div className="max-w-2xl text-left">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-700 via-sky-500 to-blue-900 dark:from-white dark:via-sky-500 dark:to-blue-900 bg-clip-text text-transparent">
            About Me
          </h1>
          
          <p className="mt-4 max-w-xl text-lg sm:text-lg dark:text-gray-200 text-gray-900 font-montserrat">
            {desc}
          </p>
        </div>
        <div className="flex-shrink-0 lg:flex-1">
          <img 
            src="/portrait.png" 
            alt="Mustafa Ansari" 
            width={400} 
            height={400} 
            className="w-full h-auto max-w-[300px] rounded-lg object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
      </motion.div>
    </section>
  )
}


export default About