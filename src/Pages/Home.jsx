import React from "react";
import { Link } from "react-router-dom";
import WelcomeIcon from "../assets/accounting.png"
 
const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="bg-white-shadow-2xl rounded-xl p-6 text-center max-w-lg">
        
        <h1 className="text-4xl font-bold text-purple-700 mb-4">
          Welcome to Smart Expense Tracker
        </h1>
        <div >
       <img
          src={WelcomeIcon}
          alt="welcome illustration"
          className="w-64 sm:w-80 md:w-82 h-auto"
        />
      </div>
        
        <p className="text-gray-600 mb-8">
          Manage your income and expenses easily and stay financially smart 💰
        </p>

        <Link
          to="/dashboard"
          className="inline-block bg-purple-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
        >
          Go to Dashboard →
        </Link>

      </div>
    </div>
  );
};

export default Home;
