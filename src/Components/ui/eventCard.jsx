import React from 'react';

const EventCard = ({ 
  id, 
  title, 
  date, 
  time, 
  location, 
  status, 
  attendees, 
  maxAttendees, 
  onUnregister 
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'registered': return 'bg-blue-500 text-white';
      case 'attended': return 'bg-green-500 text-white';
      case 'missed': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'registered': return 'Registered';
      case 'attended': return 'Attended';
      case 'missed': return 'Missed';
      default: return 'Unknown';
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(status)}`}>
          {getStatusText(status)}
        </span>
      </div>
      
      <div className="space-y-2 text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
          </svg>
          <span>{date} at {time}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
          </svg>
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
          </svg>
          <span>{attendees}/{maxAttendees} attendees</span>
        </div>
      </div>
      
      {status === 'registered' && (
        <button 
          onClick={() => onUnregister(id)}
          className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Unregister
        </button>
      )}
    </div>
  );
};

export default EventCard;