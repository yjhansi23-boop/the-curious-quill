import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms' },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Branding */}
            <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">The Curious Quill</h3>
                <p className="text-gray-500">Fueling your curiosity, one post at a time.</p>
            </div>

            {/* Quick Links */}
            <div className="md:justify-self-center">
                <h4 className="font-semibold text-gray-900 uppercase tracking-wider">Links</h4>
                <nav className="mt-4 flex flex-col space-y-2">
                    {footerLinks.map((link) => (
                    <Link key={link.name} to={link.path} className="text-gray-500 hover:text-primary transition-colors">
                        {link.name}
                    </Link>
                    ))}
                </nav>
            </div>

            {/* Social Links */}
            <div className="md:justify-self-end">
                <h4 className="font-semibold text-gray-900 uppercase tracking-wider">Follow Us</h4>
                <div className="mt-4 flex justify-center md:justify-start">
                    <SocialLinks />
                </div>
            </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} The Curious Quill. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
