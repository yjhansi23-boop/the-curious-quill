import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center">Terms and Conditions</h1>
          <div className="mt-8 prose prose-lg text-gray-600 mx-auto">
            <h3 className="font-bold">1. Terms</h3>
            <p>
              By accessing this Website, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
            </p>
            <h3 className="font-bold">2. Use License</h3>
            <p>
              Permission is granted to temporarily download one copy of the materials on The Curious Quill's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose or for any public display;</li>
                <li>attempt to reverse engineer any software contained on The Curious Quill's Website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <h3 className="font-bold">3. Disclaimer</h3>
            <p>
              All the materials on The Curious Quill’s Website are provided "as is". The Curious Quill makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, The Curious Quill does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;