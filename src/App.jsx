import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/components/NavBar';
import MyEventsPage from './pages/MyEventsPage';
import AllEvent from './pages/AllEvent'; 
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-909 mb-2">Student Dashboard</h1>
          <p className="text-gray-600 mb-6">Manage your event registrations and view your activity</p>
          
          <Navbar /> {/* Using Navbar instead of Sidebar */}
          
          <div className="mt-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/my-events" element={<MyEventsPage />} />
              <Route path="/all-events" element={<AllEvent />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;