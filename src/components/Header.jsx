import { useState } from 'react'
import { Button } from './ui/button.jsx'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog.jsx'
import { Input } from './ui/input.jsx'
import { Label } from './ui/label.jsx'
import { Calendar, LogIn, UserPlus } from 'lucide-react'

export function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-lg">
              <Calendar className="h-6 w-6 text-black" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold leading-tight">Eventify</h1>
              <p className="text-xs opacity-90 -mt-0.5">UNIVERSITY EVENTS HUB</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="opacity-95 hover:opacity-100">EVENTS</a>
            <a href="#" className="opacity-95 hover:opacity-100">CLUBS</a>
            <a href="#" className="opacity-95 hover:opacity-100">ABOUT</a>
            <a href="/my-calendar" className="text-foreground hover:text-primary transition-colors">  My Calendar</a>
          </nav>

          {/* Auth */}
          <div className="flex items-center space-x-3">
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white/95 hover:bg-white/10">
                  <LogIn className="h-4 w-4 mr-2" /> LOGIN
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader><DialogTitle>Login to Eventify</DialogTitle></DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Enter your password" />
                  </div>
                  <Button className="w-full">Login</Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-yellow-400 text-black hover:bg-yellow-300">
                  <UserPlus className="h-4 w-4 mr-2" /> JOIN NOW
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader><DialogTitle>Join Eventify</DialogTitle></DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email2">University Email</Label>
                    <Input id="email2" type="email" placeholder="your.email@university.edu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sid">Student ID</Label>
                    <Input id="sid" placeholder="Enter your student ID" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pass2">Password</Label>
                    <Input id="pass2" type="password" placeholder="Create a password" />
                  </div>
                  <Button className="w-full">Create Account</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  )
}
