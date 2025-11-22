
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const Icon = category.icon;
  return (
    <Link to={`/category/${category.slug}`} className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <Icon className="h-10 w-10 text-primary mb-3" />
      <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
      <p className="mt-1 text-gray-500 text-sm">{category.description}</p>
    </Link>
  );
};

export default CategoryCard;
