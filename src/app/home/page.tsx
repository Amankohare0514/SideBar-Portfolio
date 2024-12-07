import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white">
      <div className="text-center max-w-lg p-6 rounded-lg shadow-lg bg-opacity-70 backdrop-blur-sm">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg font-light leading-relaxed mb-6">
          Hi, I?m <span className="font-semibold">John Doe</span>, a passionate
          Frontend Developer dedicated to crafting beautiful and functional web
          applications. Explore my projects, skills, and experiences below.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:scale-105 transition-transform">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Home;
