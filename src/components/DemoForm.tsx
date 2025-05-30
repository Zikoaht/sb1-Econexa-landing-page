import React, { useState } from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

interface FormData {
  fullName: string;
  email: string;
  demoDateTime: string;
  requirements: string;
}

const DemoForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    demoDateTime: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      toast.error('Please enter your full name');
      return false;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!formData.demoDateTime) {
      toast.error('Please select your preferred demo date and time');
      return false;
    }
    if (!formData.requirements.trim()) {
      toast.error('Please describe your demo requirements');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyPAQHDLPmQuHx-iPY1ecIIozHsSq4fn94RjhpF9VTu3HUxNduakbnGm-LfpGM0TnLhiw/exec', {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
          ...formData
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await response.json();

      if (data.status === 'success') {
        toast.success('Demo request submitted successfully! We\'ll contact you shortly.');
        setFormData({
          fullName: '',
          email: '',
          demoDateTime: '',
          requirements: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const minDateTime = format(new Date(Date.now() + 24 * 60 * 60 * 1000), "yyyy-MM-dd'T'HH:mm");

  return (
    <div id="demo-form" className="max-w-2xl mx-auto bg-gray-900/50 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Book a Demo</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="demoDateTime" className="block text-sm font-medium text-gray-300 mb-2">
            Preferred Demo Date/Time *
          </label>
          <input
            type="datetime-local"
            id="demoDateTime"
            value={formData.demoDateTime}
            onChange={(e) => setFormData({ ...formData, demoDateTime: e.target.value })}
            min={minDateTime}
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-300 mb-2">
            Demo Requirements *
          </label>
          <textarea
            id="requirements"
            value={formData.requirements}
            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
            rows={4}
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>
        </div>

        <div className="text-sm text-gray-400">
          By submitting this form, you agree to our privacy policy and consent to the processing of your personal data.
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Book Demo'}
        </button>
      </form>
    </div>
  );
};

export default DemoForm;