import { useMemo, useState } from "react";
import { Calendar as CalendarComp } from "./ui/calendar.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { Button } from "./ui/button.jsx";
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin 
} from "lucide-react";

export function EventCalendar({ events = [] }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // group events by dateKey
  const eventsByDate = useMemo(() => {
    return events.reduce((acc, ev) => {
      const d = new Date(ev.date);
      const dateKey = d.toDateString();
      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(ev);
      return acc;
    }, {});
  }, [events]);

  const selectedDateEvents = selectedDate
    ? eventsByDate[selectedDate.toDateString()] || []
    : [];

  const eventDates = useMemo(
    () => Object.keys(eventsByDate).map(k => new Date(k)),
    [eventsByDate]
  );

  const navigateMonth = (direction) => {
    const nm = new Date(currentMonth);
    nm.setMonth(nm.getMonth() + (direction === "next" ? 1 : -1));
    setCurrentMonth(nm);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Calendar View */}
      <div className="lg:col-span-2">
        <Card className="w-full">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">
                {currentMonth.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => setCurrentMonth(new Date())}>
                  Today
                </Button>
                <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 mt-4 text-xs">
              {[
                ["Technology", "bg-blue-500"],
                ["Sports", "bg-green-500"],
                ["Cultural", "bg-purple-500"],
                ["Business", "bg-orange-500"],
                ["Music", "bg-pink-500"],
              ].map(([name, dot]) => (
                <div key={name} className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${dot}`} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </CardHeader>

          <CardContent>
            <CalendarComp
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              month={currentMonth}
              onMonthChange={setCurrentMonth}
              className="rounded-md border-0 w-full"
            />

            {/* Dots for days with events */}
            {/* If you want exact overlay dots like the TS version, you can implement a custom grid overlay.
               Simpler approach: show dots inside a footer below the calendar or highlight selected days.
               react-day-picker also supports modifiers; advanced styling can be added later. */}
          </CardContent>
        </Card>
      </div>

      {/* Right-side Selected Date Events */}
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              {selectedDate
                ? selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Select a Date"}
            </CardTitle>
            {selectedDateEvents.length > 0 && (
              <Badge variant="secondary" className="w-fit">
                {selectedDateEvents.length} event
                {selectedDateEvents.length !== 1 ? "s" : ""}
              </Badge>
            )}
          </CardHeader>
          <CardContent>
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents.map((event) => (
                  <Card key={event.id} className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold line-clamp-1">{event.title}</h4>
                        <Badge
                          variant="outline"
                          className={`text-xs ml-2 ${
                            event.category === "Technology"
                              ? "border-blue-500 text-blue-600"
                              : event.category === "Sports"
                              ? "border-green-500 text-green-600"
                              : event.category === "Cultural"
                              ? "border-purple-500 text-purple-600"
                              : event.category === "Business"
                              ? "border-orange-500 text-orange-600"
                              : event.category === "Music"
                              ? "border-pink-500 text-pink-600"
                              : "border-gray-500 text-gray-600"
                          }`}
                        >
                          {event.category}
                        </Badge>
                      </div>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-2" />
                          {event.location}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {event.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <CalendarIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-sm">No events scheduled for this date.</p>
                <p className="text-xs mt-1">Register to events to see them here.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick stats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Registered Events</span>
                <span className="font-semibold">{events.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Event Days</span>
                <span className="font-semibold">{Object.keys(eventsByDate).length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Open Spots</span>
                <span className="font-semibold">
                  {events.reduce((sum, e) => sum + (e.maxAttendees - e.attendees), 0)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
