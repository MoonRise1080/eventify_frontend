import { Button } from './ui/button.jsx'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card.jsx'
import { Badge } from './ui/badge.jsx'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import { useRegistrations } from '../hooks/useRegistrations.js'

export function EventCard({ event }) {
  const isFullyBooked = event.attendees >= event.maxAttendees
  const { isRegistered, register, unregister } = useRegistrations()
  const registered = isRegistered(event.id)

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        {event.featured && (
          <Badge className="absolute top-3 left-3 bg-primary text-white">
            Featured
          </Badge>
        )}
        <Badge 
          variant="secondary" 
          className="absolute top-3 right-3 bg-white/90 text-foreground"
        >
          {event.category}
        </Badge>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <h3 className="line-clamp-1 font-semibold">{event.title}</h3>
          <Badge variant="outline" className="text-xs">
            {event.club}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {event.description}
        </p>
      </CardHeader>

      <CardContent className="py-3">
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            {event.date}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            {event.attendees}/{event.maxAttendees} registered
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-3">
        {registered ? (
          <Button
            className="w-full"
            variant="secondary"
            onClick={() => unregister(event.id)}
          >
            Unregister
          </Button>
        ) : (
          <Button
            className="w-full"
            disabled={isFullyBooked}
            onClick={() => register(event.id)}
          >
            {isFullyBooked ? "Fully Booked" : "Register"}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
