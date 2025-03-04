// src/components/ProgressBar.js

import React from 'react';

function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-300 rounded-full h-2">
      <div
        className="bg-yellow-500 h-2 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
