import React from "react";

export default function Resume() {
  const timelineData = [
    {
      year: "2019",
      title: "Secondary Education (2018-2019)",
      institution: "SMN High School, Sitamarhi",
      description: "Completed Secondary Education while actively participating in multiple quiz competitions, and engaging in various extracurricular activities.",
    },
    {
      year: "2021",
      title: "Senior Secondary Education (2019-2021)",
      institution: "SMN Senior Secondary School, Sitamarhi",
      description: "Completed Senior Secondary Education, specialized in science and mathematics.",
    },
    {
      year: "2026",
      title: "Bachelor of Technology (Computer Science)",
      institution: "Maharishi Markandeshwar (Deemed to be University), Mullana-Ambala",
      description: "Currently pursuing a Bachelor of Technology in Computer Science with multiple completed projects in Data Analysis and Full Stack Development.",
    },
    {
      year: "2024",
      title: "Software Engineer Intern (Dec 2024 - Present)",
      institution: "Bluestock™ Fintech, Pune",
      description: "Currently leading a team working on real-time stock market analytics and trading platforms using Django and various JavaScript libraries. Focused on optimizing system performance and enhancing the user experience.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-gray-900 dark:text-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
        Professional Journey
      </h2>
      <div className="relative">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 500"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M50 0 C70 100, 30 200, 50 300 C70 400, 30 500, 50 600"
            stroke="url(#timelineGradient)"
            strokeWidth="15"
            fill="none"
          />
          <defs>
            <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#0d9488', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#0284c7', stopOpacity: 1}} />
            </linearGradient>
          </defs>
        </svg>
        <div className="relative z-10 space-y-12 sm:space-y-16">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } items-center`}
            >
              <div className="flex flex-col items-center w-full sm:w-1/2">
                {index % 2 === 0 && (
                  <div className="border-2 border-teal-500/20 dark:border-white/20 p-4 sm:p-6 rounded-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
                    <h3 className="text-sm sm:text-xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-md mt-2 dark:text-gray-50">
                      {item.description}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-teal-600">
                      {item.institution}
                    </p>
                  </div>
                )}
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex-shrink-0 mx-6 shadow-lg">
                <span className="text-xs sm:text-xl text-black flex justify-center items-center font-medium dark:text-white ">
                  {item.year}
                </span>
              </div>
              <div className="flex flex-col items-center w-full sm:w-1/2">
                {index % 2 !== 0 && (
                  <div className="border-2 border-teal-500/20 dark:border-white/20 p-4 sm:p-6 rounded-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
                    <h3 className="text-sm sm:text-xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-md mt-2 dark:text-gray-50">
                      {item.description}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-teal-600">
                      {item.institution}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
