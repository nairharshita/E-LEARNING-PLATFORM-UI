
// src/components/CourseCard.js

import React from 'react';
import courseImage from '../assets/course-image-1.jpg';  // Importing an image from the assets folder

function CourseCard({ title, progress }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
      <img src={courseImage} alt="Course" className="w-full h-32 object-cover rounded-lg mb-4" />
      <h4 className="text-xl font-semibold text-blue-800">{title}</h4>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div
          className="bg-yellow-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500">{progress}% Completed</p>
    </div>
  );
}

export default CourseCard;
