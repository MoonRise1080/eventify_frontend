import React from 'react';
import EventCard from './components/EventCard'; 


const mockEvents = [
  
  { id: 1, name: 'Concert', date: '2024-09-01', type: 'upcoming' },
  { id: 2, name: 'Tech Conference', date: '2024-10-15', type: 'upcoming' },
  { id: 3, name: 'Local Market', date: '2024-08-20', type: 'past' },
];


const MyEventsPage = ({ myEvents = [], handleUnregister }) => {
  // We're converting the date string back to a Date object here for filtering
  const eventsToFilter = myEvents.length > 0 ? myEvents.map(event => ({...event, date: new Date(event.date)})) : mockEvents.map(event => ({...event, date: new Date(event.date)}));
  
  const upcomingEvents = eventsToFilter.filter(event => event.date > new Date());
  const pastEvents = eventsToFilter.filter(event => event.date <= new Date());

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Upcoming Events</h2>
        <p className="text-gray-500">Events you're registered for</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} type="myEvents" onUnregister={handleUnregister} />
            ))
          ) : (
            <p className="text-gray-500">No upcoming events.</p>
          )}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Past Events</h2>
        <p className="text-gray-500">Your event history</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.length > 0 ? (
            pastEvents.map((event) => (
              <EventCard key={event.id} event={event} type="myEvents" />
            ))
          ) : (
            <p className="text-gray-500">No past events.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyEventsPage;
