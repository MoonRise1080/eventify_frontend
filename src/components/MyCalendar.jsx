import { useMemo } from "react";
import { mockEvents } from "../lib/mockData.js";
import { useRegistrations } from "../hooks/useRegistrations.js";
import { EventCalendar } from "./EventCalendar.jsx"; // we’ll provide a JS version below

export function MyCalendar() {
  const { ids } = useRegistrations();

  const registeredEvents = useMemo(() => {
    const set = new Set(ids.map(String));
    return mockEvents
      .filter(e => set.has(String(e.id)))
      // Ensure date strings can be parsed (e.g., "March 15, 2024")
      .map(e => ({ ...e }));
  }, [ids]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">My Calendar</h2>
      <EventCalendar events={registeredEvents} />
    </div>
  );
}
