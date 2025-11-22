
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { posts } from '../data/mockData';
import Sidebar from '../components/Sidebar';
import { CalendarIcon, UserIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';
import ArticleCard from '../components/ArticleCard';
import SocialShareButtons from '../components/SocialShareButtons';


const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" />;
  }

  const relatedPosts = posts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const postUrl = window.location.href;

  return (
    <>
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <main className="lg:col-span-2">
              <article>
                <header>
                  <Link to={`/category/${post.category}`} className="text-primary font-semibold uppercase tracking-wide text-sm">{post.category.replace('-', ' ')}</Link>
                  <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                    {post.title}
                  </h1>
                  <div className="mt-4 flex items-center flex-wrap text-gray-500 gap-x-4 gap-y-2 text-sm">
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
                </header>

                <img
                  className="w-full h-auto object-cover rounded-lg my-8 shadow-lg"
                  src={post.imageUrl}
                  alt={post.title}
                />

                <div
                  className="prose prose-lg max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-4 border-t">
                    <div className="flex items-center gap-2 flex-wrap">
                        <TagIcon className="h-5 w-5 text-gray-400" />
                        {post.tags.map(tag => (
                            <Link 
                                key={tag} 
                                to={`/tag/${tag.toLowerCase()}`}
                                className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-primary hover:text-white transition-colors"
                            >
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Social Share Buttons */}
                <div className="mt-8 pt-6 border-t">
                    <SocialShareButtons post={post} url={postUrl} />
                </div>

              </article>
            </main>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900">You might also like</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map(p => <ArticleCard key={p.slug} post={p} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PostPage;