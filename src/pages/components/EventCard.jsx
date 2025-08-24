import React from 'react';

const EventCard = ({ event, type }) => {
  const dateForComparison = new Date(event.date);
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
    <div className="p-4 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{new Date(event.date).toLocaleDateString()} at {new Date(event.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
          <p className="text-sm text-gray-500 mt-1">{event.location}</p>
          <p className="text-sm text-gray-500 mt-1">{event.attendees}/{event.maxAttendees} attendees</p>
        </div>
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusColor}`}>
          {status}
        </span>
      </div>
      {type === 'myEvents' && isUpcoming && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button className="py-1 px-3 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700">
            Unregister
          </button>
        </div>
      )}
      {type === 'allEvents' && !event.isRegistered && isUpcoming && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button className="py-1 px-3 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default EventCard;