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
      toast.error('Veuillez entrer votre nom complet');
      return false;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error('Veuillez entrer une adresse e-mail valide');
      return false;
    }
    if (!formData.demoDateTime) {
      toast.error('Veuillez sélectionner une date/heure');
      return false;
    }
    if (!formData.requirements.trim()) {
      toast.error('Veuillez décrire vos besoins');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    // Construction du body en URL-encoded
    const params = new URLSearchParams();
    params.append('fullName', formData.fullName);
    params.append('email', formData.email);
    params.append('demoDateTime', formData.demoDateTime);
    params.append('requirements', formData.requirements);
    params.append('timestamp', format(new Date(), 'yyyy-MM-dd HH:mm:ss'));

    try {
      await fetch('https://script.google.com/macros/s/AKfycby_jj_exos5DhpucIcOHrKv-IEiEM1PuZgkQF2vntGx3geMh1QtIk91xZ47Sq5xWztD/exec', {
        method: 'POST',
        mode: 'no-cors',   // nécessaire pour éviter le blocage CORS
        // Ne PAS préciser 'Content-Type' ici : le navigateur le mettra en application/x-www-form-urlencoded
        body: params       // envoie les données au format clé=valeur&clé2=valeur2
      });

      // On considère le succès si aucune exception n’a été levée
      toast.success("Merci ! Votre demande a été envoyée.");
      setFormData({ fullName: '', email: '', demoDateTime: '', requirements: '' });

    } catch (error) {
      // En no-cors, on ne récupère jamais d'erreur précise, on se contente de remercier
      console.warn("Fetch no-cors bloqué ou silencieux", error);
      toast.success("Merci ! Votre demande a été envoyée.");
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
          />
        </div>
        <div className="text-sm text-gray-400">
          By submitting this form, you agree to our privacy policy and consent to the processing of your personal data.
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...Received!' : 'Book Demo'}
        </button>
      </form>
    </div>
  );
};

export default DemoForm;