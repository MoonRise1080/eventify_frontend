import { Header } from './Header.jsx';
import { Hero } from './Hero.jsx';
import { EventsSection } from './EventsSection.jsx';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <EventsSection />
      </main>

      <footer className="bg-muted py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Eventify</h3>
              <p className="text-sm text-muted-foreground">
                Connecting university students through amazing events and experiences.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Students</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-black transition-colors">Browse Events</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Join Clubs</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Create Account</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Clubs</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-black transition-colors">Create Events</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Manage Registrations</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Admin Dashboard</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Eventify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
