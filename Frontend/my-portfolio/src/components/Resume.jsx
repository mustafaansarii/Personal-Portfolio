import Navbar from './Navbar';

export default function Resume() {
  const timelineData = [
    {
      period: "Dec 2023 - Feb 2024",
      title: "Software Engineer Intern",
      institution: "Nexus Info",
      description: "Led development of real-time stock analytics platform using Django and React. Optimized WebSocket implementation achieving 30% performance boost. Integrated ML models for predictive analytics and implemented JWT authentication.",
    },
    {
      period: "2022 - Present",
      title: "B.Tech in Computer Science",
      institution: "Maharishi Markandeshwar University, Mullana-Ambala",
      description: "Pursuing degree with 8.9 CGPA. Developed 15+ projects including real-time sentiment analysis tool and full-stack e-commerce platform. Coursework includes DSA, AI/ML, and Cloud Computing.",
    },
    {
      period: "2019 - 2021",
      title: "Senior Secondary Education",
      institution: "SMN Senior Secondary School, Sitamarhi",
      description: "Specialized in Physics, Chemistry, and Mathematics with 95% aggregate. Organized STEM awareness campaigns and won regional science fair for innovative physics project.",
    },
    {
      period: "2018 - 2019",
      title: "Secondary Education",
      institution: "SMN High School, Sitamarhi",
      description: "Completed Secondary Education with distinction in academics, actively participated in national-level quiz competitions, and led school debate team to state finals.",
    },
  ];

  return (
    <>
      <Navbar />
    <section id="resume" className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-lg mt-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-700 via-sky-500 to-blue-900 dark:from-white dark:via-sky-500 dark:to-blue-900 bg-clip-text text-transparent">
          Professional Journey
        </h2>
        <p className="text-sm sm:text-base mb-10 -mt-4">
          Here is a concise summary of my professional journey, highlighting key experiences and achievements.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-[2px] h-full bg-gradient-to-b from-gray-700/20 via-sky-500/50 to-blue-900/20 dark:from-yellow-500/30 dark:via-pink-600/50 dark:to-pink-700/30 transform -translate-x-1/2" />

          {timelineData.map((item, index) => (
            <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:items-stretch justify-center md:justify-between mb-6 md:mb-8 gap-3 md:gap-6`}>
              {/* Date */}
              <div className="w-full md:w-[45%] flex items-center justify-center">
                <div className={`text-lg md:text-xl font-bold text-gray-700 dark:text-gray-200 text-center ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  {item.period}
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="relative w-8 md:w-10 flex flex-col items-center justify-center">
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-r from-gray-700 via-sky-500 to-blue-900 border-2 border-white dark:border-gray-900 shadow-md transform group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-700/20 to-transparent -z-10 animate-pulse" />
              </div>
              {/* Content Card */}
              <div className="w-full md:w-[45%] p-3 md:p-6 rounded-xl md:rounded-2xl border border-gray-200/80 dark:border-gray-600/50 bg-gradient-to-b from-white/20 dark:from-gray-800/20 via-blue-500/20 to-transparent backdrop-blur-lg hover:shadow-lg transition-all duration-300 group">
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base font-semibold bg-gradient-to-r from-gray-700 via-sky-500 to-blue-900 dark:from-white dark:via-sky-500 dark:to-blue-900 bg-clip-text text-transparent">
                    {item.institution}
                  </p>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
