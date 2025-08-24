import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
 
  const navLinkClass = "flex-1 text-center py-2 px-4 transition-colors duration-200 rounded-lg text-gray-700 font-semibold";
  const activeLinkClass = "bg-white shadow-md"; 

  return (
    <nav className="flex items-center justify-between p-2 bg-gray-200 rounded-xl shadow-inner max-w-lg mx-auto mt-8">
     
      <NavLink
        to="/my-events"
        className={({ isActive }) =>
          `${navLinkClass} ${isActive ? activeLinkClass : ''}`
        }
      >
        My Events
      </NavLink>
      <NavLink
        to="/all-events"
        className={({ isActive }) =>
          `${navLinkClass} ${isActive ? activeLinkClass : ''}`
        }
      >
        All Events
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `${navLinkClass} ${isActive ? activeLinkClass : ''}`
        }
      >
        Profile
      </NavLink>
    </nav>
  );
}