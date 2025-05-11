import React from 'react';
import { motion } from "framer-motion";

const stats = [
  { name: "B.Tech", value: "3rd Year" },
  { name: "Projects", value: "10+" },
  { name: "Coding Challenges", value: "1000+" },
  { name: "Certification", value: "1+" },
];

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeInOut" },
};

export default function About() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={fadeInAnimation}
        initial="initial"
        animate="animate"
      >
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"
            variants={fadeInAnimation}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="mt-3 text-lg text-gray-600 dark:text-gray-400"
            variants={fadeInAnimation}
            transition={{ delay: 0.4 }}
          >
            Get to know me better.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col md:flex-row items-center rounded-xl overflow-hidden shadow-lg dark:shadow-md"
          variants={fadeInAnimation}
          transition={{ delay: 0.6 }}
        >
          <div className="md:w-1/3 ">
            <img
              className="w-full object-cover h-48 md:h-96"
              src="/portrait.png"
              alt="Mustafa Ansari"
            />
          </div>
          <div className="md:w-2/3 p-8">
            <motion.p
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              variants={fadeInAnimation}
              transition={{ delay: 0.8 }}
            >
              I'm a B.Tech student diving deep into Computer Science Engineering. With a strong foundation built upon tackling 1000+ coding challenges, I specialize in crafting full-stack solutions using technologies like Java, Python, JavaScript, React, Spring Boot, and Angular.
            </motion.p>
            <motion.p
              className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              variants={fadeInAnimation}
              transition={{ delay: 1.0 }}
            >
              My passion lies in developing efficient and scalable web applications, always seeking innovative approaches to complex problems. I'm driven to deliver impactful results and thrive in collaborative, dynamic team environments.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="mt-12"
          variants={fadeInAnimation}
          transition={{ delay: 1.2 }}
        >
          <motion.h3
            className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center"
            variants={fadeInAnimation}
            transition={{ delay: 1.4 }}
          >
            Key Stats
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {stats.map((stat) => (
              <motion.div
                key={stat.name}
                className="p-4 rounded-lg shadow-md dark:shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInAnimation}
                transition={{ delay: 1.6 }}
              >
                <dt className="text-lg font-medium text-gray-600 dark:text-gray-300">
                  {stat.name}
                </dt>
                <dd className="mt-3 text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
