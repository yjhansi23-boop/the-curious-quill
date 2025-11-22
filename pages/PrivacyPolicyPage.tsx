import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center">Privacy Policy</h1>
          <div className="mt-8 prose prose-lg text-gray-600 mx-auto">
            <p>
              Your privacy is important to us. It is The Curious Quill's policy to respect your privacy regarding any information we may collect from you across our website.
            </p>
            <p>
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
            </p>
            <p>
              We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
            </p>
            <p>
              We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
            </p>
            <p>
              Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;