import React from "react";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* App Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Hospital Record System</h1>
          <span className="text-sm opacity-90">
            Secure Record Management
          </span>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="container mx-auto px-4 py-8">
        <Dashboard />
      </main>

      {/* Footer */}
      <footer className="mt-10 border-t py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Hospital Records — All rights reserved.
      </footer>
    </div>
  );
};

export default App;
