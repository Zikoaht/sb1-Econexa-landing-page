import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

function Solutions() {
  const [activeIndustry, setActiveIndustry] = useState(null);

  const industries = [
    {
      id: 'healthcare',
      icon: '🏥',
      name: 'Healthcare & Dental Clinics',
      solutions: [
        'Automates appointment booking via phone caller',
        'Handles insurance inquiries & basic questions instantly',
        'Frees up front desk staff for complex tasks'
      ]
    },
    {
      id: 'restaurants',
      icon: '🍽️',
      name: 'Restaurants',
      solutions: [
        'Accepts table reservations through voice or chat agents',
        'Manages high-volume calls during peak hours',
        'Collects and analyzes customer feedback post-visit'
      ]
    },
    {
      id: 'hotels',
      icon: '🏨',
      name: 'Hotels',
      solutions: [
        'Handles guest booking inquiries 24/7',
        'Provides multilingual support via phone caller',
        'Integrates with hotel PMS systems to sync reservations'
      ]
    },
    {
      id: 'ecommerce',
      icon: '🛍️',
      name: 'E-commerce & Retailers',
      solutions: [
        'Converts more leads with AI-driven product recommendations',
        'Automates order tracking and FAQs',
        'Syncs with CRM to build personalized shopping experiences'
      ]
    },
    {
      id: 'fitness',
      icon: '🧘',
      name: 'Fitness Coaches & Wellness Centers',
      solutions: [
        'Automatically schedules and confirms class bookings',
        'Answers FAQs about plans, trainers, and schedules',
        'Captures new leads and nurtures them with AI messaging'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-purple-500 hover:text-purple-400 py-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600 mb-12">
            What EcoNexa.AI Solves?
          </h1>

          {/* Industries List */}
          <div className="space-y-4 mb-16">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="relative"
                onMouseEnter={() => setActiveIndustry(industry.id)}
                onMouseLeave={() => setActiveIndustry(null)}
              >
                <div className="bg-gray-900/50 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-gray-800/50">
                  <div className="flex items-center text-xl">
                    <span className="mr-3">{industry.icon}</span>
                    <span className="font-semibold">{industry.name}</span>
                  </div>
                  
                  {/* Solutions - only visible on hover */}
                  <div className={`mt-4 space-y-3 transition-all duration-300 ${activeIndustry === industry.id ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    {industry.solutions.map((solution, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Business Impact */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">⚡ Real Business Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="text-1xl mr-3">📉</span>
                <span>Reduce support staff workload by up to 60%</span>
              </div>
              <div className="flex items-start">
                <span className="text-1xl mr-3">📈</span>
                <span>Increase appointment attendance by 30%</span>
              </div>
              <div className="flex items-start">
                <span className="text-1xl mr-3">🕒</span>
                <span>Provide instant responses 24/7 — no wait times</span>
              </div>
              <div className="flex items-start">
                <span className="text-1xl mr-3">💬</span>
                <span>Handle 10x more conversations without hiring</span>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">💰</span>
                <span>Boost conversion rates with AI-qualified leads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;