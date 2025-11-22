import React from 'react';
import { Post } from '../types';

interface SocialShareButtonsProps {
  post: Post;
  url: string;
}

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path>
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564z"></path>
    </svg>
);

const PinterestIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.017 2c-5.485 0-9.917 4.432-9.917 9.917 0 4.247 2.654 7.89 6.35 9.244-.055-.836-.09-1.933.243-2.871.328-.925 2.079-8.811 2.079-8.811s-.519-.988-.519-2.525c0-2.355 1.402-4.116 3.161-4.116 1.493 0 2.217 1.117 2.217 2.455 0 1.488-.952 3.714-1.442 5.768-.403 1.685.836 3.061 2.508 3.061 3.001 0 5.011-3.793 5.011-7.448 0-3.903-2.89-6.733-6.621-6.733-4.522 0-7.237 3.371-7.237 6.843 0 1.39.528 2.875 1.176 3.633.13.12.146.236.109.375-.035.13-.11.43-.146.577-.046.182-.207.258-.387.192-1.4-.52-2.28-2.035-2.28-3.725 0-2.885 2.1-5.753 6.131-5.753 3.224 0 5.613 2.322 5.613 5.253 0 3.298-2.045 5.828-4.918 5.828-1.637 0-3.155-1.293-2.731-2.881.517-1.956 1.488-4.148 1.488-5.597 0-1.282-.713-2.352-1.684-2.352-1.325 0-2.357 1.385-2.357 3.047 0 1.129.366 1.912.366 1.912l-1.332 5.666c-.461 1.96-1.785 4.46-2.656 5.658a9.922 9.922 0 0 0 11.235.155c-1.262 2.15-1.12 5.235-1.12 5.235z"></path>
    </svg>
);


const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ post, url }) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(post.title);
    const encodedExcerpt = encodeURIComponent(post.excerpt);
    const encodedImageUrl = encodeURIComponent(post.imageUrl);

    const shareLinks = [
        {
            name: 'Twitter',
            url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            icon: <TwitterIcon />,
            className: 'bg-[#1DA1F2] hover:bg-[#1a91da]'
        },
        {
            name: 'Facebook',
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            icon: <FacebookIcon />,
            className: 'bg-[#1877F2] hover:bg-[#166fe5]'
        },
        {
            name: 'LinkedIn',
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedExcerpt}`,
            icon: <LinkedInIcon />,
            className: 'bg-[#0A66C2] hover:bg-[#095ab1]'
        },
        {
            name: 'Pinterest',
            url: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImageUrl}&description=${encodedTitle}`,
            icon: <PinterestIcon />,
            className: 'bg-[#E60023] hover:bg-[#d40020]'
        }
    ];

    const openShareWindow = (shareUrl: string, name: string) => {
        window.open(shareUrl, `Share on ${name}`, 'width=600,height=400,resizable=yes,scrollbars=yes');
    };

    return (
        <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Share this post</h3>
            <div className="flex items-center gap-3">
                {shareLinks.map(link => (
                    <button
                        key={link.name}
                        onClick={(e) => {
                            e.preventDefault();
                            openShareWindow(link.url, link.name);
                        }}
                        aria-label={`Share on ${link.name}`}
                        className={`flex items-center justify-center w-10 h-10 rounded-full text-white transition-colors duration-300 ${link.className}`}
                    >
                        {link.icon}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SocialShareButtons;