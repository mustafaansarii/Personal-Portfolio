import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = {
  frontend: [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  ],
  backend: [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg' },
  ],
  others: [
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg' },
    { name: 'IntelliJ IDEA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg' },
    { name: 'PyCharm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
    { name: 'Jupyter Notebook', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg' },
  ]
};

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-gray-800 dark:text-white py-16 px-6 sm:px-16">
      <div className="max-w-[900px] mx-auto text-left">
        <h2 className="text-4xl font-bold tracking-tight text-center" data-aos="fade-up">Skills</h2>
        <p className="mt-2 text-sm text-black dark:text-gray-400 text-center" data-aos="fade-up" data-aos-delay="200">
          I specialize in various modern technologies to build scalable, responsive, and efficient solutions.
        </p>

        <div className="mt-8">
          {/* Frontend Section */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-black dark:text-gray-200" data-aos="fade-right">Frontend</h3>
            <p className="mt-2 text-sm text-black dark:text-gray-400" data-aos="fade-right" data-aos-delay="200">
              I craft intuitive and responsive web applications using these modern technologies. I prioritize performance, accessibility, and seamless user experience, delivering high-quality products.
            </p>
            <div className="flex flex-wrap justify-start mt-4" data-aos="fade-up" data-aos-delay="300">
              {skills.frontend.map((skill) => (
                <img
                  key={skill.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 mx-4 my-2"
                  src={skill.icon}
                  alt={skill.name}
                />
              ))}
            </div>
          </div>

          {/* Backend Section */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-black dark:text-gray-400" data-aos="fade-left">Backend</h3>
            <p className="mt-2 text-sm text-black dark:text-gray-400" data-aos="fade-left" data-aos-delay="200">
              I build robust and scalable backend systems using modern technologies. I prioritize performance, security, and seamless integration with frontend applications, delivering high-quality, reliable, and efficient solutions.
            </p>
            <div className="flex flex-wrap justify-start mt-4" data-aos="fade-up" data-aos-delay="300">
              {skills.backend.map((skill) => (
                <img
                  key={skill.name}
                  className="w-8 h-10 sm:w-8 sm:h-10 mx-4 my-2"
                  src={skill.icon}
                  alt={skill.name}
                />
              ))}
            </div>
          </div>

          {/* Others Section */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-black dark:text-gray-400" data-aos="fade-right">Others</h3>
            <p className="text-sm mt-2 text-black dark:text-gray-400" data-aos="fade-right" data-aos-delay="200">
              I have experience working with a variety of technologies, tools, and platforms. I am always eager to learn new technologies and expand my skill set. I am proficient in using these technologies to solve complex problems.
            </p>
            <div className="flex flex-wrap justify-start mt-4" data-aos="fade-up" data-aos-delay="300">
              {skills.others.map((skill) => (
                <img
                  key={skill.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 mx-4 my-2"
                  src={skill.icon}
                  alt={skill.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
