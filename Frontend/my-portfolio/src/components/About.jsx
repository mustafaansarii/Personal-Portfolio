import React, { useState, useEffect } from 'react';

const links = [
  { name: "My Skills & Experience", href: "#" },
  { name: "Coding Challenges", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact Me", href: "#" },
];

const stats = [
  { name: "B.Tech", value: "3rd Year" },
  { name: "Projects", value: "10+" },
  { name: "Coding Challenges", value: "1000+" },
  { name: "Certification", value: "1+" },
];

export default function About() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center py-12 dark:text-white px-4">
      <div className="w-full max-w-[1000px] px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center border border-gray-200 dark:border-gray-700 rounded-2xl  max-w-[1000px] mx-auto overflow-hidden bg-white/50 dark:bg-black/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <div className="relative w-40 h-40 md:w-48 md:h-48 m-6 md:mr-8">
              <img
                className="w-full h-full object-cover rounded-lg border-4 border-white/50 dark:border-gray-800/50"
                src="/portrait.png"
                alt="About Me"
              />
              <div className="absolute inset-0 rounded-lg border-2 border-white/30 dark:border-gray-800/30 animate-ping-slow"></div>
            </div>
            <div className="p-6 flex-1">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                I am a B.Tech student in Computer Science Engineering at
                Maharishi Markandeshwar University. With over 1000 solved coding
                challenges, I specialize in full-stack development using Java,
                Python, JavaScript, React, Spring Boot, and Angular. I am
                passionate about creating efficient, scalable web applications
                and continuously seek innovative solutions. My goal is to
                deliver impactful solutions and collaborate effectively in
                dynamic teams.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.name}>
                <dt className="text-lg font-medium text-gray-600 dark:text-gray-300">
                  {stat.name}
                </dt>
                <dd className="mt-3 text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-400">
                  {stat.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
