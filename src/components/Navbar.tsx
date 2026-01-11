import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-6 md:mb-0">
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mr-3">
              <Calendar className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Cal<span className="text-indigo-600">AI</span></h1>
          </Link>
        </div>
        
        <nav className="flex space-x-6 mb-6 md:mb-0">
          <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors">Home</Link>
          <Link to="/features" className="font-medium text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
          <Link to="/pricing" className="font-medium text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
          <Link to="/contact" className="font-medium text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
            Get Started
          </button>
          <button className="md:hidden text-gray-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;