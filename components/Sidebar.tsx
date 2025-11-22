
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { categories, posts } from '../data/mockData';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


const Sidebar: React.FC = () => {
  const popularPosts = posts.filter(p => p.featured).slice(0, 3);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
    }
  };

  return (
    <aside className="space-y-8">
      {/* Search Box */}
      <div>
        <h3 className="text-lg font-bold mb-3 text-gray-800">Search</h3>
        <form onSubmit={handleSearch} className="relative">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..." 
            className="w-full py-2 pl-4 pr-10 border rounded-md" 
          />
          <button type="submit" className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
      
      {/* Categories */}
      <div>
        <h3 className="text-lg font-bold mb-3 text-gray-800">Categories</h3>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category.slug}>
              <Link to={`/category/${category.slug}`} className="text-gray-600 hover:text-primary transition-colors">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div>
        <h3 className="text-lg font-bold mb-3 text-gray-800">Popular Posts</h3>
        <ul className="space-y-4">
          {popularPosts.map(post => (
            <li key={post.slug} className="flex items-start space-x-3">
              <img src={post.imageUrl} alt={post.title} className="w-16 h-16 rounded-md object-cover" />
              <div>
                <Link to={`/post/${post.slug}`} className="font-semibold text-gray-700 hover:text-primary leading-tight">
                  {post.title}
                </Link>
                <p className="text-xs text-gray-400 mt-1">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
