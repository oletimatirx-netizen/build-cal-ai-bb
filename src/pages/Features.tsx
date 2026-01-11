import React from 'react';
import { Brain, CalendarCheck, TrendingUp, Clock, Users, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-indigo-600" />,
      title: "AI-Powered Scheduling",
      description: "Let artificial intelligence analyze your calendar and automatically find the best times for meetings based on your preferences and priorities."
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-green-600" />,
      title: "Conflict Resolution",
      description: "Automatically detect and resolve scheduling conflicts by suggesting alternative times or rescheduling lower-priority events."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Productivity Analytics",
      description: "Get detailed insights into how you spend your time with visual reports and actionable recommendations for improvement."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Smart Reminders",
      description: "Receive contextual reminders before important meetings with agenda previews and preparation suggestions."
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Collaborative Planning",
      description: "Coordinate schedules with team members seamlessly while respecting everyone's time boundaries and preferences."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Natural Language Processing",
      description: "Create events using natural language like "Schedule a meeting with John next Tuesday at 2pm" and let AI handle the details."
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how CalAI transforms your calendar management with cutting-edge artificial intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Schedule?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of professionals who save hours every week with CalAI.</p>
            <button className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;