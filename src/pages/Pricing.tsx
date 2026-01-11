import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for individuals getting started with AI scheduling",
      features: [
        "Basic AI scheduling",
        "Up to 10 events per month",
        "Email support",
        "Mobile app access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$12",
      period: "per month",
      description: "Ideal for professionals managing complex schedules",
      features: [
        "Advanced AI scheduling",
        "Unlimited events",
        "Priority email support",
        "Calendar analytics",
        "Natural language processing",
        "Smart conflict resolution"
      ],
      cta: "Try Free for 14 Days",
      popular: true
    },
    {
      name: "Business",
      price: "$29",
      period: "per user/month",
      description: "For teams that need collaborative scheduling solutions",
      features: [
        "Everything in Professional",
        "Team collaboration tools",
        "Shared calendar management",
        "Admin controls",
        "Dedicated account manager",
        "Custom integrations"
      ],
      cta: "Start Business Trial",
      popular: false
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for you. Upgrade or downgrade at any time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${plan.popular ? 'ring-2 ring-indigo-600 transform md:-translate-y-4' : ''}`}>
              {plan.popular && (
                <div className="bg-indigo-600 text-white text-center py-2">
                  <span className="font-bold">Most Popular</span>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-green-500 mt-0.5 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition duration-300 ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Special Requirements?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our enterprise plans offer custom solutions tailored to your organization's unique needs.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;