
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { posts } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';

const TagPage: React.FC = () => {
  const { tag } = useParams<{ tag: string }>();
  const postsWithTag = posts.filter(p => 
    p.tags.map(t => t.toLowerCase()).includes(tag?.toLowerCase() || '')
  );

  if (!tag) {
    return <Navigate to="/404" />;
  }

  const capitalizedTag = tag.charAt(0).toUpperCase() + tag.slice(1);

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Posts tagged with: <span className="text-primary">#{capitalizedTag}</span>
          </h1>
        </header>

        {postsWithTag.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {postsWithTag.map(post => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-800">No posts found</h2>
            <p className="mt-2 text-gray-500">There are currently no articles with this tag. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagPage;
