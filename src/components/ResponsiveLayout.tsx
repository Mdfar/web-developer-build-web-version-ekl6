import React from 'react';

interface LayoutProps { children: React.ReactNode; }

/**

Mobile-to-Web Responsive Wrapper

Ensures the 'Native' feel on mobile and 'SaaS' feel on desktop. */ export const ResponsiveLayout: React.FC<LayoutProps> = ({ children }) => { return ( <div className="min-h-screen bg-gray-50 flex flex-col"> <nav className="bg-white border-b px-4 py-3 flex justify-between items-center sticky top-0 z-50"> <h1 className="text-xl font-bold text-primary">AppWeb</h1> <div className="hidden md:flex space-x-6"> <a href="/dashboard" className="text-gray-600 hover:text-primary">Dashboard</a> <a href="/settings" className="text-gray-600 hover:text-primary">Settings</a> </div> <button className="bg-primary text-white px-4 py-2 rounded-lg md:hidden"> Menu </button> </nav> <main className="flex-1 container mx-auto p-4 md:p-8"> {children} </main> <footer className="md:hidden bg-white border-t flex justify-around p-3 sticky bottom-0"> <span className="icon">🏠</span> <span className="icon">📊</span> <span className="icon">👤</span> </footer> </div>

); };