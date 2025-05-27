import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function CrmIntegrations() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-purple-500 hover:text-purple-400 py-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        <div className="grid md:grid-cols-2 gap-12 items-center py-12">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600 mb-6">
              Seamlessly Connected to Your Workflow
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              GENIX.AI integrates with CRMs like Salesforce, Airtable, Zoho, and more — effortlessly.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-300">Two-way sync with customer data</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-300">Trigger workflows from conversations</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-300">No-code or low-code setup</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-300">Secure and scalable APIs</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-transparent rounded-xl"></div>
            <img
              src="https://images.pexels.com/photos/7376/startup-photos.jpg"
              alt="CRM Integration Dashboard"
              className="rounded-xl w-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrmIntegrations;