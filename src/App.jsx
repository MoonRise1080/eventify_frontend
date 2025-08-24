import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";


import HomePage from './pages/HomePage';
import AllEvent from './pages/AllEvent';
import MyEventsPage from './pages/MyEventsPage';
import ProfilePage from './pages/ProfilePage';


import Navbar from "./pages/components/NavBar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-events" element={<AllEvent />} />
        <Route path="/my-events" element={<MyEventsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}