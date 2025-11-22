
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { posts } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';
import { Post } from '../types';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<Post[]>([]);

  useEffect(() => {
    if (query) {
      const lowercasedQuery = query.toLowerCase();
      const results = posts.filter(post => 
        post.title.toLowerCase().includes(lowercasedQuery) ||
        post.excerpt.toLowerCase().includes(lowercasedQuery) ||
        post.content.toLowerCase().includes(lowercasedQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery))
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Search Results for: "{query}"
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            {searchResults.length} {searchResults.length === 1 ? 'post' : 'posts'} found.
          </p>
        </header>

        {searchResults.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {searchResults.map(post => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-800">No posts found</h2>
            <p className="mt-2 text-gray-500">Sorry, we couldn't find any articles matching your search. Please try a different keyword.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
