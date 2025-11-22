
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { categories, posts } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';

const CategoryPage: React.FC = () => {
  const { category: categorySlug } = useParams<{ category: string }>();
  const category = categories.find(c => c.slug === categorySlug);
  const postsInCategory = posts.filter(p => p.category === categorySlug);

  if (!category) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">{category.name}</h1>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
        </header>

        {postsInCategory.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {postsInCategory.map(post => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-800">No posts found</h2>
            <p className="mt-2 text-gray-500">There are currently no articles in this category. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
