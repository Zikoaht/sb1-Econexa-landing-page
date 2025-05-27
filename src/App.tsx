import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Bot, Phone, Target, Link as LinkIcon, ChevronRight, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import Typewriter from 'typewriter-effect';
import Chatbots from './pages/Chatbots';
import PhoneAgents from './pages/PhoneAgents';
import LeadGeneration from './pages/LeadGenaration';
import CrmIntegrations from './pages/CrmIntegrations';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import DemoForm from './components/DemoForm';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chatbots" element={<Chatbots />} />
        <Route path="/phone-agents" element={<PhoneAgents />} />
        <Route path="/lead-generation" element={<LeadGeneration />} />
        <Route path="/crm-integrations" element={<CrmIntegrations />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
              EcoNexa.AI
            </Link>
            <div className="flex space-x-8">
              <Link to="/solutions" className="text-gray-300 hover:text-white transition">
                What we solve?
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600 mb-6">
              <Typewriter
                options={{
                  delay: 50,
                  cursor: '|',
                  cursorClassName: 'text-purple-500 animate-pulse',
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Automate faster with EcoNexa.AI')
                    .start();
                }}
              />
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We provides AI-powered automation solutions for B2C looking to manage their operations smartly, interact with customers instantly and scale efficiently — without increasing human workload.
            </p>
            <div className="flex gap-4 justify-center">
              <ScrollLink
                to="demo-form"
                smooth={true}
                duration={500}
                className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition cursor-pointer"
              >
                Book a demo
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/chatbots">
              <ServiceCard
                icon={<Bot className="w-8 h-8" />}
                title="AI Customer Support Chatbots"
                description="24/7 intelligent chat agents for websites and apps"
              />
            </Link>
            <Link to="/phone-agents">
              <ServiceCard
                icon={<Phone className="w-8 h-8" />}
                title="AI Phone Caller Agents"
                description="Virtual agents that handle calls and appointments"
              />
            </Link>
            <Link to="/lead-generation">
              <ServiceCard
                icon={<Target className="w-8 h-8" />}
                title="AI Leads Generation"
                description="Automated Outreach and leads nurturing tools"
              />
            </Link>
            <Link to="/crm-integrations">
              <ServiceCard
                icon={<LinkIcon className="w-8 h-8" />}
                title="CRM Integrations"
                description="Seamless connection with major CRM platforms"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((step) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-4">Step {step}</h3>
                <p className="text-gray-400">
                  {step === 1
                    ? 'Connect your existing tools and platforms'
                    : step === 2
                    ? 'Configure AI agents to match your needs'
                    : 'Watch your automation transform operations'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 bg-black">
        <DemoForm />
      </div>

      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">EcoNexa.AI</div>
            <div className="flex flex-col items-center space-y-4">
              <span className="text-gray-300">Follow us</span>
              <div className="flex space-x-6">
                <a 
                  href="https://www.facebook.com/people/EcoNexaAI/61576053617383/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://twitter.com/@Econexa_Ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/econexa-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            © 2025 EcoNexa.AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-xl bg-gray-900 hover:bg-gray-800 transition duration-300 cursor-pointer group">
      <div className="text-purple-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex items-center text-purple-500 group-hover:translate-x-2 transition-transform">
        Learn more <ChevronRight className="w-4 h-4 ml-2" />
      </div>
    </div>
  );
}

export default App;