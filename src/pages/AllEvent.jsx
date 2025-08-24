import React from 'react';
import EventCard from './components/EventCard';

const mockEvents = [
  { id: 1, name: 'Concert', date: new Date('2024-09-01') },
  { id: 2, name: 'Tech Conference', date: new Date('2024-10-15') },
  { id: 3, name: 'Local Market', date: new Date('2024-08-20') },
];

export default function AllEventsPage({ allEvents, handleRegister }) {
  const allUpcomingEvents = mockEvents.filter(event => new Date(event.date) > new Date());
  
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Student Dashboard</h1>
        <p className="mt-1 text-md md:text-lg text-gray-500">Manage your event registrations and view your activity.</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">All Available Events</h2>
        <p className="text-gray-500">Discover and register for new events.</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allUpcomingEvents.length > 0 ? (
            allUpcomingEvents.map(event => (
              <EventCard key={event.id} event={event} type="allEvents" onRegister={handleRegister} />
            ))
          ) : (
            <p className="text-gray-500">No available events at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
}