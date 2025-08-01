import React from "react";

const UnderMaintenance = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md text-center">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">🚧 Under Maintenance</h1>
        <p className="text-gray-700 text-lg mb-6">
          We're currently making some improvements to serve you better. Please check back soon!
        </p>
        <div className="flex justify-center">
          <svg
            className="w-24 h-24 text-yellow-400 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M13 24h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M13 32h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1"
            />
          </svg>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          If this persists, contact us at <span className="font-semibold">info@vikoshiya.com</span>
        </p>
      </div>
    </div>
  );
};

export default UnderMaintenance;