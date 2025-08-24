import React from 'react';

const AdminSidebar = () => {
  const items = [
    {
      title: "Dashboard",
      url: "#dashboard",
      icon: '<path d="M3 13h1V7H3v6zm1 4h1v-3H4v3zm2-4h1V7H6v6zm1 4h1v-3H7v3zm2-4h1V7H9v6zm1 4h1v-3h-1v3zm2-4h1V7h-1v6zm1 4h1v-3h-1v3z"/><path d="M1 5h14v1H1z"/>'
    },
    {
      title: "Create Event",
      url: "#create-event", 
      icon: '<path d="M14 7h-1V6a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0V9h1a1 1 0 000-2z"/><path d="M10 2a8 8 0 108 8 8 8 0 00-8-8zm0 14a6 6 0 116-6 6 6 0 01-6 6z"/>'
    },
    {
      title: "Manage Events",
      url: "#manage-events",
      icon: '<path d="M14 2a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4a2 2 0 012-2h12zm-1 2H3a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1z"/><path d="M11 6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h6z"/>'
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Sidebar Content */}
      <div className="flex-1 p-4">
        {/* Brand/Header */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900">Eventify Admin</h2>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-2">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.url}
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" dangerouslySetInnerHTML={{ __html: item.icon }} />
              <span className="font-medium">{item.title}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 w-full">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path>
          </svg>
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;