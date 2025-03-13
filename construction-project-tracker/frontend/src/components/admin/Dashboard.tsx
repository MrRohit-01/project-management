import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700">Total Projects</h3>
              <p className="text-3xl font-bold text-indigo-600">12</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700">Active Projects</h3>
              <p className="text-3xl font-bold text-green-600">8</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700">Completed Projects</h3>
              <p className="text-3xl font-bold text-blue-600">4</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;