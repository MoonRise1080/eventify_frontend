import React from 'react';

const ProfilePage = () => {
  const user = {
    fullName: "Alex Johnson",
    studentId: "STUD203001",
    email: "alexjohnson@university.edu",
    registeredEvents: 15,
    attendedEvents: 12
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
      
      <div className="p-6 space-y-4 bg-white rounded-xl shadow-md">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 flex items-center justify-center bg-indigo-200 text-indigo-700 font-bold text-2xl rounded-full">
            {user.fullName.charAt(0)}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{user.fullName}</h3>
            <p className="text-sm text-gray-500">Student ID: {user.studentId}</p>
          </div>
        </div>
        
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>{user.email}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
            </svg>
            <span>{user.registeredEvents} events registered</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
            </svg>
            <span>{user.attendedEvents} events attended</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;