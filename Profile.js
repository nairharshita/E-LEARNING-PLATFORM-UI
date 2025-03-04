// src/pages/Profile.js

import React from 'react';

function Profile() {
  return (
    <div className="container mx-auto px-4 my-12">
      <h2 className="text-3xl font-semibold text-center text-white mb-8">Your Profile</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-blue-800">User Information</h3>
        <p className="mt-4 text-gray-700">Name: John Doe</p>
        <p className="mt-2 text-gray-700">Email: johndoe@example.com</p>
        
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-blue-800">Enrolled Courses</h4>
          <ul className="mt-2 space-y-2">
            <li>React for Beginners</li>
            <li>JavaScript Basics</li>
            <li>Advanced CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
