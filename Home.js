// src/pages/Home.js

import React from 'react';
import CourseCard from '../components/CourseCard';

function Home() {
  return (
    <div className="container mx-auto px-4 my-12">
      <h2 className="text-3xl font-semibold text-center text-white mb-8">Courses</h2>
      <div className="space-y-6">
        {/* Example Course Cards */}
        <CourseCard title="Course 1: JavaScript Basics" progress={75} />
        <CourseCard title="Course 2: React for Beginners" progress={40} />
        <CourseCard title="Course 3: Advanced CSS" progress={90} />
      </div>
    </div>
  );
}

export default Home;
