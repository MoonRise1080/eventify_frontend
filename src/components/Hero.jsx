import { Button } from './ui/button.jsx'
import { ArrowRight, Calendar, Users, Trophy } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Discover Amazing
            <span className="block text-blue-600">University Events</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with your university community. Find exciting events, join clubs,
            and make unforgettable memories with fellow students.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              Browse Events <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Join as Club Admin
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold">500+ Events</h3>
              <p className="text-sm text-gray-500">Active events this semester</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold">50+ Clubs</h3>
              <p className="text-sm text-gray-500">University organizations</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-3">
                <Trophy className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold">10K+ Students</h3>
              <p className="text-sm text-gray-500">Active participants</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
