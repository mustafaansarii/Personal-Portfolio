export default function Resume() {
  const timelineData = [
    {
      period: "2018 - 2019",
      title: "Secondary Education",
      institution: "SMN High School, Sitamarhi",
      description: "Completed Secondary Education with distinction in academics, actively participated in national-level quiz competitions, and led school debate team to state finals.",
    },
    {
      period: "2019 - 2021",
      title: "Senior Secondary Education",
      institution: "SMN Senior Secondary School, Sitamarhi",
      description: "Specialized in Physics, Chemistry, and Mathematics with 95% aggregate. Organized STEM awareness campaigns and won regional science fair for innovative physics project.",
    },
    {
      period: "2021 - Present",
      title: "B.Tech in Computer Science",
      institution: "Maharishi Markandeshwar University, Mullana-Ambala",
      description: "Pursuing degree with 8.9 CGPA. Developed 15+ projects including real-time sentiment analysis tool and full-stack e-commerce platform. Coursework includes DSA, AI/ML, and Cloud Computing.",
    },
    {
      period: "Dec 2023 - Feb 2024",
      title: "Software Engineer Intern",
      institution: "Nexus Info",
      description: "Led development of real-time stock analytics platform using Django and React. Optimized WebSocket implementation achieving 30% performance boost. Integrated ML models for predictive analytics and implemented JWT authentication.",
    },
  ];

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8  backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Professional Journey
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-[2px] md:w-1 h-full bg-gradient-to-b from-blue-500/20 via-purple-500/50 to-pink-500/20 dark:from-blue-600/30 dark:via-purple-600/50 dark:to-pink-600/30 transform -translate-x-1/2" />

          {timelineData.map((item, index) => (
            <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:items-stretch justify-center md:justify-between mb-8 md:mb-16 gap-4 md:gap-8`}>
              {/* Date */}
              <div className="w-full md:w-[45%] flex items-center justify-center">
                <div className={`text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 text-center ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  {item.period}
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="relative w-12 md:w-16 flex flex-col items-center justify-center">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-400 border-4 border-white dark:border-gray-900 shadow-xl transform group-hover:scale-125 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent -z-10 animate-pulse" />
              </div>

              {/* Content Card */}
              <div className="w-full md:w-[45%] p-4 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200/80 dark:border-gray-600/50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md hover:shadow-2xl transition-all duration-300 group">
                <div className="space-y-2 md:space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg font-semibold text-purple-600 dark:text-purple-400">
                    {item.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
