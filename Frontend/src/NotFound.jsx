import React from 'react';

function NotFound() {
  return (
  
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/16544790/pexels-photo-16544790/free-photo-of-brown-bark-on-trees-in-forest.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="max-w-md mx-auto text-center  bg-opacity-90 p-8 rounded-lg shadow-lg">
        <div className="text-9xl font-bold  text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text  mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-50 mb-6">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-50 mb-8">
          The page you're looking for seems to have gone on a little adventure. Don't worry, we'll help you find your way back home.
        </p>
        <a
          href="/"
          className="inline-block border border-black border-b-2 bg-indigo-600  text-transparent bg-gradient-to-r from-blue-50 via-purple-500 to-pink-500 bg-clip-text font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
