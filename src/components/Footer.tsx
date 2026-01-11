import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg mr-3">
              <Calendar className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Cal<span className="text-indigo-600">AI</span></h2>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-gray-600">&copy; 2023 CalAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;