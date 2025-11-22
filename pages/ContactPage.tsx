
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Thank you for your message. We will get back to you shortly.');
        (e.target as HTMLFormElement).reset();
    };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
            <p className="mt-4 text-lg text-gray-600">
                Have a question or feedback? We'd love to hear from you.
            </p>
        </div>
        <div className="mt-12 max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" id="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        Send Message
                    </button>
                </div>
            </form>
            {status && <p className="mt-6 text-center text-green-600">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
