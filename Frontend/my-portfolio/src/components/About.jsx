import { motion } from "framer-motion";

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const About = () => {
  return (
    <section className="font-sans py-24">
      <div className="container mx-auto px-4" style={{ maxWidth: '1200px' }}>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <motion.div 
            className="md:w-1/3 mb-6 md:mb-0"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <img
              src="./portrait.png"
              alt="Shreya"
              className="mx-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              style={{ maxWidth: '300px' }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="md:w-2/3 text-left space-y-6"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! I&apos;m Mustafa Ansari, a highly competitive programmer and full-stack developer dedicated to crafting efficient and scalable solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I thrive on challenges and am passionate about leveraging cutting-edge technologies to build innovative applications. My expertise spans across various domains, including Full Stack Development and Machine Learning.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am committed to writing clean, maintainable, and high-performance code, always striving to exceed expectations and deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
