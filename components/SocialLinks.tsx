import React from 'react';

// Using inline SVGs to avoid dealing with static assets for this case
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path>
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.012 7.053.072 2.695.272.273 2.69.073 7.052.013 8.333 0 8.74 0 12s.013 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.06-1.28.073-1.687.073-4.947s-.013-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.667.012 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path>
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564z"></path>
    </svg>
);

const PinterestIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.017 2c-5.485 0-9.917 4.432-9.917 9.917 0 4.247 2.654 7.89 6.35 9.244-.055-.836-.09-1.933.243-2.871.328-.925 2.079-8.811 2.079-8.811s-.519-.988-.519-2.525c0-2.355 1.402-4.116 3.161-4.116 1.493 0 2.217 1.117 2.217 2.455 0 1.488-.952 3.714-1.442 5.768-.403 1.685.836 3.061 2.508 3.061 3.001 0 5.011-3.793 5.011-7.448 0-3.903-2.89-6.733-6.621-6.733-4.522 0-7.237 3.371-7.237 6.843 0 1.39.528 2.875 1.176 3.633.13.12.146.236.109.375-.035.13-.11.43-.146.577-.046.182-.207.258-.387.192-1.4-.52-2.28-2.035-2.28-3.725 0-2.885 2.1-5.753 6.131-5.753 3.224 0 5.613 2.322 5.613 5.253 0 3.298-2.045 5.828-4.918 5.828-1.637 0-3.155-1.293-2.731-2.881.517-1.956 1.488-4.148 1.488-5.597 0-1.282-.713-2.352-1.684-2.352-1.325 0-2.357 1.385-2.357 3.047 0 1.129.366 1.912.366 1.912l-1.332 5.666c-.461 1.96-1.785 4.46-2.656 5.658a9.922 9.922 0 0 0 11.235.155c-1.262 2.15-1.12 5.235-1.12 5.235z"></path>
    </svg>
);

const socialLinksData = [
    { name: 'Twitter', href: 'https://twitter.com', icon: <TwitterIcon /> },
    { name: 'Facebook', href: 'https://facebook.com', icon: <FacebookIcon /> },
    { name: 'Instagram', href: 'https://instagram.com', icon: <InstagramIcon /> },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: <LinkedInIcon /> },
    { name: 'Pinterest', href: 'https://pinterest.com', icon: <PinterestIcon /> },
];

const SocialLinks: React.FC = () => {
    return (
        <div className="flex items-center space-x-5">
            {socialLinksData.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary transition-colors"
                    aria-label={`Follow us on ${item.name}`}
                >
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;