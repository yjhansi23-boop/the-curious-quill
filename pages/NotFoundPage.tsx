
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-primary">404</h1>
        <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">Page Not Found</p>
        <p className="mt-4 text-gray-500">Sorry, the page you are looking for does not exist.</p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary-700 transition-colors"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
