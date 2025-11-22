
import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setMessage(`Thank you for subscribing, ${email}!`);
            setEmail('');
        }
    };

  return (
    <div className="bg-primary-50 rounded-lg p-8 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-primary-800">Get the Latest Insights, Delivered</h3>
      <p className="mt-2 text-primary-700">Join our newsletter for new articles, tips, and updates straight to your inbox.</p>
      <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-secondary focus:border-secondary"
        />
        <button type="submit" className="bg-secondary hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
          Subscribe
        </button>
      </form>
      {message && <p className="mt-4 text-green-700">{message}</p>}
    </div>
  );
};

export default NewsletterSignup;