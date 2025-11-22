
import React, { useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import CategoryCard from '../components/CategoryCard';
import ComparisonTable from '../components/ComparisonTable';
import NewsletterSignup from '../components/NewsletterSignup';
import { posts, categories, courierComparisonData } from '../data/mockData';
import { Link, useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const featuredPosts = posts.filter(p => p.featured).slice(0, 4);
  const latestPosts = posts.slice(0, 6);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };


  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            Ideas &amp; Insights, Delivered Daily
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary-800 max-w-3xl mx-auto">
            A collection of useful and engaging articles for curious minds, covering everything from tech and travel to lifestyle and reviews.
          </p>
          <div className="mt-8 flex justify-center">
            <form onSubmit={handleSearch} className="w-full max-w-xl flex">
              <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search for articles..." 
                className="w-full rounded-l-md border-gray-300 focus:ring-secondary focus:border-secondary shadow-sm text-lg p-4"
              />
              <button type="submit" className="bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-r-md transition-colors duration-300">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Top Guides</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredPosts.map(post => <ArticleCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Explore by Category</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(category => <CategoryCard key={category.slug} category={category} />)}
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Latest Blog Posts</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map(post => <ArticleCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
