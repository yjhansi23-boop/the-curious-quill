
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { CalendarIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline';

interface ArticleCardProps {
  post: Post;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col">
      <Link to={`/post/${post.slug}`} className="flex flex-col flex-grow">
        <img
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          src={post.imageUrl}
          alt={post.title}
        />
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-sm text-primary font-semibold uppercase tracking-wide">{post.category.replace('-', ' ')}</p>
          <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
            {post.title}
          </h3>
          <p className="mt-3 text-gray-500 text-base flex-grow">{post.excerpt}</p>
          <div className="mt-4 flex items-center text-sm text-gray-400 space-x-4">
            <div className="flex items-center">
              <UserIcon className="h-4 w-4 mr-1.5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1.5" />
              <span>{post.date}</span>
            </div>
             <div className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-1.5" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
