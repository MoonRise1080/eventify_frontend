import React from 'react';

const NavItem = ({ icon, text, isActive, onClick }) => (
  <button onClick={onClick} className={`flex items-center space-x-2 p-3 rounded-lg w-full transition-colors duration-200 ${
    isActive ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'
  }`}>
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" dangerouslySetInnerHTML={{ __html: icon }} />
    <span className="font-medium">{text}</span>
  </button>
);

export default NavItem;