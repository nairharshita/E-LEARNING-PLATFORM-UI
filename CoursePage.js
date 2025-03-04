// src/pages/CoursePage.js

import React from 'react';
import ProgressBar from '../components/ProgressBar';

function CoursePage() {
  return (
    <div className="container mx-auto px-4 my-12">
      <h2 className="text-4xl font-semibold text-center text-white mb-8">Course: React for Beginners</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-blue-800">Course Description</h3>
        <p className="mt-4 text-gray-700">
          This course teaches the basics of React, a popular JavaScript library for building user interfaces.
        </p>

        <div className="mt-8">
          <ProgressBar progress={40} />
        </div>

        <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition">
          Continue Learning
        </button>
      </div>
    </div>
  );
}

export default CoursePage;
