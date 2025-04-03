import React from "react";

export default function Resume() {
  const timelineData = [
    {
      title: "Secondary Education (2018-2019)",
      institution: "SMN High School, Sitamarhi",
      description: "Completed Secondary Education while actively participating in multiple quiz competitions, and engaging in various extracurricular activities.",
    },
    {
      title: "Senior Secondary Education (2019-2021)",
      institution: "SMN Senior Secondary School, Sitamarhi",
      description: "Completed Senior Secondary Education, specialized in science and mathematics.",
    },
    {
      title: "Bachelor of Technology (Computer Science)",
      institution: "Maharishi Markandeshwar (Deemed to be University), Mullana-Ambala",
      description: "Currently pursuing a Bachelor of Technology in Computer Science with multiple completed projects in Data Analysis and Full Stack Development.",
    },
    {
      title: "Software Engineer Intern (Dec 2024 - Feb 2025)",
      institution: "Nexus Info",
      description: "Led a dynamic team in developing cutting-edge real-time stock market analytics and trading platforms. Utilized Django backend and advanced JavaScript libraries for frontend. Implemented performance optimization techniques, resulting in a 30% improvement in system responsiveness. Designed and integrated user-centric features, enhancing overall user experience and increasing platform engagement by 25%.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12 dark:text-white px-4">
      <div className="w-full max-w-[1000px]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
          Professional Journey
        </h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 transform -translate-x-1/2"></div>
          
          {timelineData.map((item, index) => (
            <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between mb-12 gap-2`}>
              <div className={`w-full md:w-5/12 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-black/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">{item.institution}</p>
                <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </div>
              <div className="w-8 flex justify-center order-first md:order-none">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-400 border-4 border-white dark:border-gray-900 shadow-lg"></div>
              </div>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {item.year}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
