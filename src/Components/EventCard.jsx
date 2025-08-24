import { Button } from "./ui/Button"

export function EventCard({ 
  id, 
  title, 
  date, 
  time, 
  location, 
  status, 
  attendees, 
  maxAttendees, 
  onUnregister 
}) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  const getStatusBadge = () => {
    switch (status) {
      case 'registered':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Registered
          </span>
        )
      case 'attended':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Attended
          </span>
        )
      case 'missed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Missed
          </span>
        )
      default:
        return null
    }
  }

  const getProgressPercentage = () => (attendees / maxAttendees) * 100

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{title}</h3>
          {getStatusBadge()}
        </div>

        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <span>{formattedDate} at {time}</span>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="w-4 h-4 mr-2" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Attendance</span>
            <span>{attendees}/{maxAttendees}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
        </div>

        {status === 'registered' && (
          <Button 
            variant="outline" 
            className="w-full bg-red-50 text-red-700 hover:bg-red-100 border-red-200"
            onClick={() => onUnregister(id)}
          >
            Unregister
          </Button>
        )}
        
        {(status === 'attended' || status === 'missed') && (
          <div className="text-center text-sm text-gray-500 italic">
            {status === 'attended' ? 'Event completed' : 'Registration expired'}
          </div>
        )}
      </div>
    </div>
  )
}

// Simple icon components (you can replace these with actual icons from your icon library)
function CalendarIcon({ className }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
      />
    </svg>
  )
}

function MapPinIcon({ className }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
      />
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
      />
    </svg>
  )
}