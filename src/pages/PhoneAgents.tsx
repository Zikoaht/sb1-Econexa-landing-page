import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function PhoneAgents() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-purple-500 hover:text-purple-400 py-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        <div className="grid md:grid-cols-2 gap-12 items-center py-12">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
              Phone Caller Agents That Book, Remind, and Convert
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Our AI phone agents handle inbound and outbound calls like a real receptionist.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-300">Book appointments automatically</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-300">Follow up with voice reminders</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-300">Handles call center overflow</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-300">Customized responses per industry</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-transparent rounded-xl"></div>
            <img
              src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg"
              alt="AI Phone Agent"
              className="rounded-xl w-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneAgents;