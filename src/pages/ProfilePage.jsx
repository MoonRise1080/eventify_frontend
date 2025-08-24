import React from 'react';
import { FaRegEnvelope, FaCalendarCheck, FaUserCircle } from 'react-icons/fa'; 

export default function ProfilePage() {
  
  const user = {
    name: "Alex Johnson",
    studentId: "STI-2025001",
    email: "alex.johnson@university.edu",
    registeredEvents: 13,
    attendedEvents: 12,
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Student Dashboard</h1>
        <p className="mt-1 text-md md:text-lg text-gray-500">Manage your event registrations and view your activity.</p>
      </div>

      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile</h2>

            <div className="flex items-center space-x-4 mb-6">
              <FaUserCircle className="h-12 w-12 text-gray-500" />
              <div>
                <div className="text-xl font-medium text-gray-900">{user.name}</div>
                <p className="text-gray-500 text-sm">Student ID: {user.studentId}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-4">
              <div className="flex items-center text-gray-600 space-x-2">
                <FaRegEnvelope className="h-5 w-5" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center text-gray-600 space-x-2">
                <FaCalendarCheck className="h-5 w-5" />
                <span>{user.registeredEvents} events registered</span>
              </div>
              <div className="flex items-center text-gray-600 space-x-2">
                <FaCalendarCheck className="h-5 w-5" />
                <span>{user.attendedEvents} events attended</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
