import React from 'react';

const skills = {
  frontend: [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    {name: 'bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'}
    
  ],
  backend: [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg' },
    {name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg'}
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
  return (
    <div className="text-gray-800 dark:text-white py-8 md:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-300">
            Technical Expertise
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mastering the tools that power modern digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Backend Section */}
          <div className="group transform transition-all duration-300 hover:-translate-y-2">
            <div className="p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-green-600 dark:text-green-400">Backend Mastery</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                Architecting robust systems with scalable solutions and optimized performance
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                {skills.backend.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center p-1 sm:p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <img
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain hover:scale-110 transition-transform"
                      src={skill.icon}
                      alt={skill.name}
                    />
                    <span className="text-xs sm:text-sm mt-1 sm:mt-2 text-center text-gray-500 dark:text-gray-400">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Frontend Section */}
          <div className="group transform transition-all duration-300 hover:-translate-y-2">
            <div className="p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-600 dark:text-blue-400">Frontend Craft</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                Building immersive interfaces with cutting-edge technologies and pixel-perfect execution
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                {skills.frontend.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center p-1 sm:p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <img
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain hover:scale-110 transition-transform"
                      src={skill.icon}
                      alt={skill.name}
                    />
                    <span className="text-xs sm:text-sm mt-1 sm:mt-2 text-center text-gray-500 dark:text-gray-400">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Others Section */}
          <div className="group transform transition-all duration-300 hover:-translate-y-2">
            <div className="p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-600 dark:text-purple-400">Dev Ecosystem</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                Leveraging powerful tools to streamline development and enhance productivity
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                {skills.others.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center p-1 sm:p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <img
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain hover:scale-110 transition-transform"
                      src={skill.icon}
                      alt={skill.name}
                    />
                    <span className="text-xs sm:text-sm mt-1 sm:mt-2 text-center text-gray-500 dark:text-gray-400">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
