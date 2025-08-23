import { useState } from 'react'
import { EventCard } from './EventCard.jsx'
import { Button } from './ui/button.jsx'
import { Input } from './ui/input.jsx'
import { Badge } from './ui/badge.jsx'
import { Search, Filter } from 'lucide-react'
import { mockEvents, categories } from '../lib/mockData.js'

export function EventsSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const filtered = mockEvents.filter(ev => {
    const q = searchTerm.toLowerCase()
    const matchesSearch =
      ev.title.toLowerCase().includes(q) ||
      ev.description.toLowerCase().includes(q) ||
      ev.club.toLowerCase().includes(q)
    const matchesCategory = selectedCategory === 'All' || ev.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const eventsToShow = showAll ? filtered : filtered.slice(0, 3) // show 3 like screenshot
  const featured = filtered.filter(e => e.featured)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Featured heading like screenshot */}
        {featured.length > 0 && selectedCategory === 'All' && !searchTerm && (
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Featured Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.slice(0, 3).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            {selectedCategory === 'All' ? 'All Events' : `${selectedCategory} Events`}
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full sm:w-64"
              />
            </div>
          </div>
        </div>

        {/* category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={selectedCategory === cat ? "default" : "secondary"}
              className="cursor-pointer px-3 py-1"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>

        {eventsToShow.length ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {eventsToShow.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {!showAll && filtered.length > eventsToShow.length && (
              <div className="text-center">
                <Button variant="outline" onClick={() => setShowAll(true)} className="px-8">
                  Show More Events ({filtered.length - eventsToShow.length} remaining)
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No events found matching your search.</p>
            </div>
            <Button
              variant="outline"
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
