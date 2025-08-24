import React from 'react';

const EventCard = ({ event, type, onUnregister, onRegister }) => {
  // Ensure event.date is a Date object for comparison, but handle it if it's a string
  const dateForComparison = event.date instanceof Date ? event.date : new Date(event.date);
  const isUpcoming = dateForComparison > new Date();
  
  const status = isUpcoming ?
    event.isRegistered ? 'Registered' : 'Unregistered' :
    event.isAttended ? 'Attended' : 'Missed';

  const statusColor = {
    Registered: 'bg-blue-100 text-blue-800',
    Attended: 'bg-green-100 text-green-800',
    Missed: 'bg-red-100 text-red-800',
    Unregistered: 'bg-gray-100 text-gray-800'
  }[status];

  return (
    <div className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
          {/* This is the key change: convert the Date object to a string for display */}
          <p className="text-sm text-gray-500 mt-1">{dateForComparison.toLocaleDateString()}</p>
          <p className="text-sm text-gray-500 flex items-center mt-1">
            <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
            {event.location}
          </p>
          <p className="text-sm text-gray-500 flex items-center mt-1">
            <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
            {event.attendees} / {event.maxAttendees} attendees
          </p>
        </div>
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusColor}`}>
          {status}
        </span>
      </div>
      {type === 'myEvents' && isUpcoming && (
        <button onClick={() => onUnregister(event.id)} className="mt-4 w-full py-2 px-4 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700">
          Unregister
        </button>
      )}
      {type === 'allEvents' && !event.isRegistered && isUpcoming && (
        <button onClick={() => onRegister(event.id)} className="mt-4 w-full py-2 px-4 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Register
        </button>
      )}
    </div>
  );
};

export default EventCard;
