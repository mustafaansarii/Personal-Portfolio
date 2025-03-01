import React from "react";

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center py-10 dark:text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            About Me
          </h2>
          <a
            href="#"
            className="flex flex-col items-center border-2 border-black shadow md:flex-row max-w-3xl md:max-w-2xl lg:max-w-4xl mx-auto dark:border-gray-500"
          >
            <img
              className="w-full h-auto rounded-t-lg sm:w-[120px] sm:h-[120px] md:h-[150px] md:w-[150px] lg:w-[200px] lg:h-[200px] object-cover md:rounded-none md:rounded-l-lg"
              src="/portrait.png"
              alt="About Me"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm sm:text-base lg:text-lg">
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
          </a>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-400"
              >
                <p className="cursor-default">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </p>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-900 dark:text-white">
                  {stat.name}
                </dt>
                <dd className="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-400">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
