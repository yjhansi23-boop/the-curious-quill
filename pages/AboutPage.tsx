import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center">About The Curious Quill</h1>
          <div className="mt-8 prose prose-lg text-gray-600 mx-auto text-left space-y-4">
            <p>
              Welcome! I'm a beginner blogger with a passion for writing about a little bit of everything.
            </p>
            <p>
              This blog is my space to explore and share ideas on all sorts of topics that I find interesting. From technology trends and travel guides to lifestyle tips and in-depth reviews, my goal is to create a collection of useful and engaging articles for curious minds.
            </p>
             <p>
              I believe that learning is a lifelong journey, and I'm excited to share what I discover along the way. Whether you're looking for practical advice or just a good read, I hope you'll find something here that sparks your interest.
            </p>
            <p>
                Thank you for stopping by!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;