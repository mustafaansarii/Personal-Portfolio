import React, { useState, useEffect } from 'react';
import config from '../config';

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
  const [codingData, setCodingData] = useState({
    leetcode: null,
    geeksforgeeks: null,
    codechef: null
  });
  const [loading, setLoading] = useState(true);
  const username = "mustafaansari";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [leetcodeRes, geeksforgeeksRes, codechefRes] = await Promise.all([
          fetch(`${config.Coding_Backend_Api}/leetcode_data`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username })
          }),
          fetch(`${config.Coding_Backend_Api}/geeksforgeeks_data`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: "mustafaansarii" })
          }),
          fetch(`${config.Coding_Backend_Api}/codechef_data`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ handle: username })
          })
        ]);

        const [leetcodeData, geeksforgeeksData, codechefData] = await Promise.all([
          leetcodeRes.json(),
          geeksforgeeksRes.json(),
          codechefRes.json()
        ]);

        setCodingData({
          leetcode: leetcodeData,
          geeksforgeeks: geeksforgeeksData,
          codechef: codechefData
        });
      } catch ( error ) {
        console.error("Could not fetch coding data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="flex flex-col items-center justify-center py-10 dark:text-white px-4">
      <div className="w-full max-w-[1100px] px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-w-[800px] mx-auto overflow-hidden">
            <img
              className="w-full h-auto md:w-48 lg:w-64 md:h-auto object-cover"
              src="/portrait.png"
              alt="About Me"
            />
            <div className="p-6">
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
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

        <div className="mt-12">
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.name} className="p-4 rounded-lg">
                <dt className="text-base text-gray-600 dark:text-gray-300">
                  {stat.name}
                </dt>
                <dd className="mt-2 text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-400">
                  {stat.value}
                </dd>
              </div>
            ))}
          </div>
          
          {loading ? (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 animate-pulse">
                  <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
                  <div className="space-y-3">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {codingData.leetcode && (
                <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                  <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">LeetCode</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <p className="text-gray-6 00 dark:text-gray-300">Total Problems Solved: <span className="font-medium text-gray-800 dark:text-gray-100">{codingData.leetcode.problems_solved.All}</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-600 dark:text-gray-300">Star Rating:</span>
                        {codingData.leetcode.star_rating > 0 && 
                          [...Array(5)].map((_, i) => {
                            const starValue = i + 1;
                            const starRating = codingData.leetcode.star_rating || 0;
                            return (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  starValue <= starRating
                                    ? 'text-yellow-400'
                                    : starValue - 0.5 <= starRating
                                    ? 'text-yellow-400'
                                    : 'text-gray-300 dark:text-gray-600'
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {codingData.geeksforgeeks && (
                <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                  <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">GeeksforGeeks</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <p className="text-gray-600 dark:text-gray-300">Total Problems: <span className="font-medium text-gray-800 dark:text-gray-100">{codingData.geeksforgeeks.total_problems_solved}</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      <p className="text-gray-600 dark:text-gray-300">Institute Rank: <span className="font-medium text-gray-800 dark:text-gray-100">{codingData.geeksforgeeks.institute_rank}</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <p className="text-gray-600 dark:text-gray-300">Current Rating: <span className="font-medium text-gray-800 dark:text-gray-100">{codingData.geeksforgeeks.current_rating}</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-600 dark:text-gray-300">Star Rating:</span>
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1;
                            const starRating = codingData.geeksforgeeks.user_stars || 0;
                            return (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  starValue <= starRating
                                    ? 'text-yellow-400'
                                    : starValue - 0.5 <= starRating
                                    ? 'text-yellow-400'
                                    : 'text-gray-300 dark:text-gray-600'
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {codingData.codechef && (
                <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                  <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">CodeChef</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <p className="text-gray-600 dark:text-gray-300">Current Rating: <span className="font-medium text-gray-800 dark:text-gray-100">{codingData.codechef.current_rating}</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-600 dark:text-gray-300">Star Rating::</span>
                        {codingData.codechef.stars && 
                          [...Array(5)].map((_, i) => {
                            const starValue = i + 1;
                            const starRating = Number(codingData.codechef.stars.split('★')[0]) || 0;
                            return (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  starValue <= starRating
                                    ? 'text-yellow-400'
                                    : 'text-gray-300 dark:text-gray-600'
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            );
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
