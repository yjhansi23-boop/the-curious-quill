
// FIX: Add React import to resolve 'Cannot find namespace React' error.
import React from 'react';

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  author: string;
  date: string;
  featured?: boolean;
  content: string;
  tags: string[];
  readingTime: number; // in minutes
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface CourierService {
  name: string;
  logoUrl: string;
  rating: number;
  speed: string;
  cost: string;
  bestFor: string;
}
