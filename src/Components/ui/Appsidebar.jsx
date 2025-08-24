import React from 'react';

const AppSidebar = () => {
  const items = [
    {
      title: "My Events",
      url: "#my-events",
      icon: '<path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>'
    },
    {
      title: "All Events", 
      url: "#all-events",
      icon: '<path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"/>'
    },
    {
      title: "Profile",
      url: "#profile",
      icon: '<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>'
    },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-md p-4 flex flex-col">
      <div className="flex-1">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Eventify</h2>
        </div>
        
        <nav className="space-y-1">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.url}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" dangerouslySetInnerHTML={{ __html: item.icon }} />
              <span>{item.title}</span>
            </a>
          ))}
        </nav>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors w-full">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path>
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AppSidebar;