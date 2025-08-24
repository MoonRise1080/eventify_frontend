import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to Your Dashboard</h2>
      <p className="text-gray-600">
        Select a section from the navigation menu to view your events or profile.
      </p>
    </div>
  );
};

export default HomePage;