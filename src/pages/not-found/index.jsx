import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F85339] text-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold mb-4 animate-bounce">404</h1>
        <h2 className="text-4xl font-bold mb-4">Oops! Page Not Found</h2>
        <p className="text-xl mb-8">
          Looks like this event has already ended!
        </p>
        <div className="mb-8">
          <svg className="w-64 h-64 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 7H21" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <rect x="6" y="10" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="2"/>
            <rect x="14" y="10" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <Link 
          to="/adverts" 
          className="bg-white text-[#F85339] font-bold py-3 px-6 rounded-full text-lg hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Back to Events
        </Link>
      </div>
    </div>
  );
};

export default NotFound;