import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MessageSquare, MapPin } from 'lucide-react';
import Typewriter from 'typewriter-effect';

function Contact() {
  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-purple-500 hover:text-purple-400 py-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600 mb-8">
            <Typewriter
              options={{
                delay: 50,
                cursor: '|',
                cursorClassName: 'text-purple-500 animate-pulse',
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Prefer to chat? Reach out via our chat agent — it\'s faster!')
                  .start();
              }}
            />
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-purple-500 mr-3" />
                  <span>contact@echonexa.com</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-purple-500 mr-3" />
                  <span>Live Chat Support</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-500 mr-3" />
                  <span>Montreal, CA</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
              <p className="mt-4 text-sm text-gray-400">
                * Our AI support chatbot is available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;