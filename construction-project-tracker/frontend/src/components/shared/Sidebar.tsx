import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const menuItems = [
    { path: '/admin/dashboard', name: 'Dashboard', icon: '📊' },
    { path: '/admin/projects', name: 'Projects', icon: '📁' },
    { path: '/admin/users', name: 'Users', icon: '👥' },
    { path: '/admin/settings', name: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white ${
              location.pathname === item.path ? 'bg-gray-700 text-white' : ''
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;