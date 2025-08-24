import React from 'react';
import EventCard from './components/EventCard';

const MyEventsPage = () => {
  // Sample data matching your image
  const upcomingEvents = [
    {
      id: 1,
      name: "Tech Talk: AI in Modern Development",
      date: "2025-09-30T14:00:00",
      location: "Engineering Building, Room 101",
      attendees: 45,
      maxAttendees: 100,
      isRegistered: true,
      isAttended: false
    }
  ];

  const pastEvents = [
    {
      id: 2,
      name: "Web Development Workshop",
      date: "2025-09-15T15:00:00",
      location: "Computer Lab 302",
      attendees: 30,
      maxAttendees: 35,
      isRegistered: true,
      isAttended: true
    },
    {
      id: 3,
      name: "Career Fair 2025",
      date: "2025-09-05T10:00:00",
      location: "Student Center",
      attendees: 150,
      maxAttendees: 200,
      isRegistered: true,
      isAttended: true
    },
    {
      id: 4,
      name: "Networking Event",
      date: "2025-09-10T18:00:00",
      location: "University Hall",
      attendees: 80,
      maxAttendees: 100,
      isRegistered: true,
      isAttended: true
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Upcoming Events</h2>
        <p className="text-gray-500">Events you're registered for</p>
        <div className="mt-4 space-y-4">
          {upcomingEvents.map(event => (
            <div key={event.id} className="p-4 bg-white rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{new Date(event.date).toLocaleDateString()} at {new Date(event.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
              <p className="text-sm text-gray-500 mt-1">{event.location}</p>
              <p className="text-sm text-gray-500 mt-1">{event.attendees}/{event.maxAttendees} attendees</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="py-1 px-3 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700">
                  Unregister
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Past Events</h2>
        <p className="text-gray-500">Your event history</p>
        <div className="mt-4 space-y-4">
          {pastEvents.map(event => (
            <div key={event.id} className="p-4 bg-white rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{new Date(event.date).toLocaleDateString()} at {new Date(event.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
              <p className="text-sm text-gray-500 mt-1">{event.location}</p>
              <p className="text-sm text-gray-500 mt-1">{event.attendees}/{event.maxAttendees} attendees</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEventsPage;