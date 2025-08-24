import React from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem';

const SideBar = () => {
  const navItems = [
    { 
      path: '/my-events', 
      text: 'My Events', 
      icon: '<path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>'
    },
    { 
      path: '/all-events', 
      text: 'All Events', 
      icon: '<path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"/>'
    },
    { 
      path: '/profile', 
      text: 'Profile', 
      icon: '<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>'
    },
  ];

  return (
    <div className="w-64 bg-white p-4 rounded-xl shadow-md">
      <div className="space-y-2">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => isActive ? 'block' : 'block'}
          >
            {({ isActive }) => (
              <NavItem
                icon={item.icon}
                text={item.text}
                isActive={isActive}
                onClick={() => {}}
              />
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;