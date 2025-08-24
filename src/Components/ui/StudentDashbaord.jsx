import { useState } from "react"
import { EventCard } from "./ui/EventCard"
import { ProfileSection } from "./ProfileSection"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { toast } from "sonner"


const mockEvents = [
  {
    id: '1',
    title: 'Tech Talk: AI in Modern Development',
    date: '2025-08-30',
    time: '2:00 PM',
    location: 'Engineering Building, Room 101',
    status: 'registered',
    attendees: 45,
    maxAttendees: 100
  },
  {
    id: '2', 
    title: 'Career Fair 2025',
    date: '2025-09-05',
    time: '10:00 AM',
    location: 'Student Center',
    status: 'registered',
    attendees: 150,
    maxAttendees: 200
  },
  {
    id: '3',
    title: 'Web Development Workshop',
    date: '2025-08-15',
    time: '3:00 PM', 
    location: 'Computer Lab 202',
    status: 'attended',
    attendees: 30,
    maxAttendees: 35
  },
  {
    id: '4',
    title: 'Networking Event',
    date: '2025-08-10',
    time: '6:00 PM',
    location: 'University Hall',
    status: 'missed',
    attendees: 80,
    maxAttendees: 100
  }
]

const mockProfile = {
  name: 'Alex Johnson',
  email: 'alex.johnson@university.edu',
  studentId: 'STU2025001',
  eventsAttended: 12,
  eventsRegistered: 15
}

export function StudentDashboard() {
  const [events, setEvents] = useState(mockEvents)
  const [activeTab, setActiveTab] = useState('my-events')

  const handleUnregister = (eventId) => {
    setEvents(prevEvents => 
      prevEvents.filter(event => event.id !== eventId)
    )
    toast.success('Successfully unregistered from event')
  }

  const registeredEvents = events.filter(event => event.status === 'registered')
  const pastEvents = events.filter(event => event.status === 'attended' || event.status === 'missed')

  return (
    <div className="flex-1 space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
        <p className="text-gray-500 text-muted-foreground">Manage your event registrations and view your activity</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="my-events">My Events</TabsTrigger>
          <TabsTrigger value="all-events">All Events</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="my-events" className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
            <p className="text-gray-500 text-muted-foreground">Events you're registered for</p>
          </div>
          
          {registeredEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {registeredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  {...event}
                  onUnregister={handleUnregister}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-muted-foreground">You haven't registered for any events yet.</p>
              <Button className="mt-4" onClick={() => setActiveTab('all-events')}>
                Browse All Events
              </Button>
            </div>
          )}

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Past Events</h2>
            <p className="text-gray-500 text-muted-foreground">Your event history</p>
          </div>

          {pastEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <EventCard
                  key={event.id}
                  {...event}
                  onUnregister={handleUnregister}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 text-muted-foreground">No past events to show.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="all-events" className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">All Available Events</h2>
            <p className="text-gray-500 text-muted-foreground">Discover and register for new events</p>
          </div>
          <div className="text-center py-12">
            <p className="text-gray-500 text-muted-foreground">Feature coming soon! This will show all available events from various clubs.</p>
          </div>
        </TabsContent>

        <TabsContent value="profile" className="space-y-6">
          <ProfileSection {...mockProfile} />
        </TabsContent>
      </Tabs>
    </div>
  )
}