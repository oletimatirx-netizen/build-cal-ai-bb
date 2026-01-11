import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, CalendarCheck, TrendingUp, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-20 pt-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto leading-tight">
            AI-Powered Calendar Management
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Automate scheduling, reduce meeting conflicts, and optimize your time with our intelligent calendar assistant.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/pricing" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg inline-block text-center">
              Start Free Trial
            </Link>
            <button className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-8 rounded-lg text-lg border border-gray-300 transition duration-300 shadow-lg inline-flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c1.41 1.39 3.23 2.2 5.16 2.2 1.81 0 3.51-.71 4.76-1.94l-3.57-2.77c-.78.54-1.77.86-2.89.86-2.17 0-3.99-1.79-3.99-4 0-2.21 1.82-4 3.99-4 1.19 0 2.23.49 2.99 1.25l2.77-2.77C15.51 3.99 13.79 3 12 3 7.7 3 4 5.47 2.18 9.14l3.66 2.95z" />
              </svg>
              Sign in with Google
            </button>
          </div>
        </section>
        
        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
              <Brain className="text-indigo-600 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Scheduling</h3>
            <p className="text-gray-600">Let AI find optimal meeting times based on availability, preferences, and priorities.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <CalendarCheck className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Conflict Resolution</h3>
            <p className="text-gray-600">Automatically reschedule overlapping events and suggest alternatives.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <TrendingUp className="text-purple-600 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Time Analytics</h3>
            <p className="text-gray-600">Gain insights into how you spend your time and optimize productivity.</p>
          </div>
        </section>
        
        {/* Dashboard Preview */}
        <section className="bg-white rounded-3xl shadow-xl p-8 mb-20 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Calendar Dashboard</h2>
              <p className="text-gray-600 mb-6">Our AI-powered dashboard provides a comprehensive overview of your schedule with smart recommendations and insights.</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 w-5 h-5" />
                  <span className="text-gray-700">AI-generated event summaries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 w-5 h-5" />
                  <span className="text-gray-700">Smart reminder system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 w-5 h-5" />
                  <span className="text-gray-700">Personalized time optimization suggestions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 w-5 h-5" />
                  <span className="text-gray-700">Natural language event creation</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 bg-gray-50 rounded-xl p-6">
              <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-900">Today's Schedule</h3>
                  <span className="text-sm text-gray-500">Jun 15, 2023</span>
                </div>
                <div className="space-y-3">
                  <div className="border-l-4 border-indigo-500 pl-3 py-1">
                    <p className="font-medium text-gray-900">Team Standup</p>
                    <p className="text-sm text-gray-600">9:00 AM - 9:30 AM</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-3 py-1">
                    <p className="font-medium text-gray-900">Client Meeting</p>
                    <p className="text-sm text-gray-600">11:00 AM - 12:00 PM</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-3 py-1">
                    <p className="font-medium text-gray-900">Lunch Break</p>
                    <p className="text-sm text-gray-600">1:00 PM - 2:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-bold text-indigo-800 mb-2">AI Recommendation</h4>
                <p className="text-indigo-700 text-sm">Based on your schedule, consider moving the client meeting to tomorrow to allow more focus time today.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 text-center text-white mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Time Management Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Join thousands of professionals who have optimized their schedules with CalAI.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/pricing" className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg inline-block text-center">
              Start Free Trial
            </Link>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-block">
              Schedule Demo
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;