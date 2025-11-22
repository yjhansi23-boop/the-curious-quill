
import { Post, Category, CourierService } from '../types';
import { CurrencyDollarIcon, CubeIcon, GlobeAltIcon, StarIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline';

export const categories: Category[] = [
  { name: 'Courier Cost Guides', slug: 'cost-guides', description: 'Find the cheapest ways to send your parcels.', icon: CurrencyDollarIcon },
  { name: 'Sending Food & Gifts', slug: 'food-gifts', description: 'Learn the rules for sending perishables and presents.', icon: CubeIcon },
  { name: 'Country-Specific Guides', slug: 'country-guides', description: 'Guides for shipping to specific countries.', icon: GlobeAltIcon },
  { name: 'Courier Reviews', slug: 'reviews', description: 'In-depth reviews of popular courier services.', icon: StarIcon },
  { name: 'Affiliate Deals', slug: 'deals', description: 'Exclusive discounts and coupon codes.', icon: ShieldCheckIcon },
  { name: 'Packing & Shipping Tips', slug: 'packing-tips', description: 'Best practices for packing your items securely.', icon: TruckIcon },
];

export const posts: Post[] = [
  {
    slug: 'cheapest-courier-service-india-to-usa',
    title: 'Cheapest Courier Service from India to USA for 2024',
    excerpt: 'Discover the most affordable and reliable courier options for sending packages from India to the United States.',
    category: 'cost-guides',
    imageUrl: 'https://picsum.photos/seed/usa/800/600',
    author: 'Admin',
    date: 'October 26, 2023',
    featured: true,
    tags: ['USA', 'Cost', 'Comparison'],
    readingTime: 4,
    content: `
      <p class="mb-4">Finding the cheapest courier service from India to the USA can be a daunting task. With so many options available, it's hard to know which one offers the best value for money. This guide breaks down the top contenders for 2024, comparing them on price, delivery time, and reliability.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3">Key Factors to Consider</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Weight of the package:</strong> Prices vary significantly based on weight.</li>
        <li><strong>Delivery Speed:</strong> Express services cost more than standard ones.</li>
        <li><strong>Tracking and Insurance:</strong> Essential for valuable items.</li>
        <li><strong>Customs and Duties:</strong> Understand the potential extra costs.</li>
      </ul>
      <p>We'll delve into services like DTDC, DHL, Shiprocket X, and others to give you a clear picture of what to expect.</p>
    `,
  },
  {
    slug: 'how-to-send-homemade-food-abroad',
    title: 'How to Send Homemade Food & Snacks Abroad Without Issues',
    excerpt: 'A step-by-step guide on packaging and shipping homemade food items internationally, ensuring they arrive fresh and safe.',
    category: 'food-gifts',
    imageUrl: 'https://picsum.photos/seed/food/800/600',
    author: 'Admin',
    date: 'October 24, 2023',
    featured: true,
    tags: ['Food', 'Tips', 'International'],
    readingTime: 3,
    content: `
      <p class="mb-4">Sending a taste of home to loved ones abroad is a wonderful gesture. However, shipping food internationally comes with its own set of rules and challenges. This guide will walk you through the process of safely and legally sending homemade food and snacks to countries like the USA, UK, and Canada.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3">Packaging is Key</h3>
      <p class="mb-4">Proper packaging is crucial to prevent spoilage and damage. Use vacuum-sealed bags for items like sweets and savories. For pickles and other items with liquid, ensure they are in leak-proof containers and double-bagged.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3">Declaring Your Items</h3>
      <p>Always declare the contents accurately on the customs form. Label it as "Homemade Indian sweets/snacks for personal consumption." Honesty is the best policy to avoid customs delays or confiscation.</p>
    `,
  },
  {
    slug: 'dhl-vs-dtdc-vs-shiprocket-x',
    title: 'DHL vs. DTDC vs. Shiprocket X: Which is Best for NRIs?',
    excerpt: 'A comprehensive comparison of three major players in the international courier space from India.',
    category: 'reviews',
    imageUrl: 'https://picsum.photos/seed/compare/800/600',
    author: 'Admin',
    date: 'October 22, 2023',
    featured: true,
    tags: ['Comparison', 'DHL', 'DTDC', 'Shiprocket X'],
    readingTime: 3,
    content: `
      <p class="mb-4">Choosing between established giants like DHL and domestic leaders like DTDC can be tough. Add aggregators like Shiprocket X to the mix, and the decision becomes even more complex. This article provides a head-to-head comparison to help you choose the right service for your needs.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3">At a Glance</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>DHL:</strong> Best for speed and reliability, but at a premium price.</li>
        <li><strong>DTDC:</strong> Good balance of cost and service, with a strong domestic network.</li>
        <li><strong>Shiprocket X:</strong> Offers competitive rates by aggregating multiple couriers, but customer service can vary.</li>
      </ul>
    `,
  },
  {
    slug: 'best-courier-for-documents-india-to-canada',
    title: 'Best Courier for Sending Documents from India to Canada',
    excerpt: 'Need to send important documents to Canada? We review the fastest and most secure courier services.',
    category: 'country-guides',
    imageUrl: 'https://picsum.photos/seed/canada/800/600',
    author: 'Admin',
    date: 'October 20, 2023',
    featured: true,
    tags: ['Canada', 'Documents', 'Secure Shipping'],
    readingTime: 3,
    content: `
      <p class="mb-4">When it comes to sending critical documents like passports, university applications, or legal papers, security and speed are paramount. This guide focuses on the best courier services for shipping documents from India to Canada, ensuring they reach their destination safely and on time.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3">Top Recommendations</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>FedEx International Priority:</strong> Known for its excellent tracking and fast delivery times.</li>
        <li><strong>DHL Express Worldwide:</strong> Another premium option with a strong reputation for secure document handling.</li>
        <li><strong>Blue Dart (in partnership with DHL):</strong> A reliable option for sending documents from India.</li>
      </ul>
    `,
  },
    {
    slug: 'ultimate-guide-sending-courier-to-uk',
    title: 'The Ultimate Guide to Sending a Courier from India to the UK',
    excerpt: 'Everything you need to know about shipping packages to the United Kingdom, from prohibited items to customs fees.',
    category: 'country-guides',
    imageUrl: 'https://picsum.photos/seed/uk/800/600',
    author: 'Admin',
    date: 'October 18, 2023',
    featured: false,
    tags: ['UK', 'Customs', 'Guide'],
    readingTime: 5,
    content: `<p>A complete walkthrough for sending parcels to the UK.</p>`,
  },
  {
    slug: 'review-of-shoppre-courier',
    title: 'Shoppre Courier Review: A Reliable Partner for NRIs?',
    excerpt: 'We take an in-depth look at Shoppre, a popular courier and consolidation service for Indian expats.',
    category: 'reviews',
    imageUrl: 'https://picsum.photos/seed/shoppre/800/600',
    author: 'Admin',
    date: 'October 15, 2023',
    featured: false,
    tags: ['Shoppre', 'Review', 'Consolidation'],
    readingTime: 4,
    content: `<p>Is Shoppre the right choice for your shipping needs? Find out in our detailed review.</p>`,
  },
  {
    slug: 'packing-tips-for-international-shipping',
    title: 'Top 5 Packing Tips for Safe International Shipping',
    excerpt: 'Learn how to pack your items like a pro to prevent damage during transit. These tips will save you time and money.',
    category: 'packing-tips',
    imageUrl: 'https://picsum.photos/seed/packing/800/600',
    author: 'Admin',
    date: 'October 12, 2023',
    featured: false,
    tags: ['Packing', 'Tips', 'Damage Prevention'],
    readingTime: 2,
    content: `<p>Don't let poor packing ruin your shipment. Follow these essential tips.</p>`,
  },
  {
    slug: 'best-courier-deals-diwali-2023',
    title: 'Best Courier Deals & Coupons for Diwali 2023',
    excerpt: 'Sending Diwali gifts abroad? Check out these exclusive discounts and offers from top courier companies.',
    category: 'deals',
    imageUrl: 'https://picsum.photos/seed/diwali/800/600',
    author: 'Admin',
    date: 'October 10, 2023',
    featured: true,
    tags: ['Deals', 'Coupons', 'Diwali'],
    readingTime: 2,
    content: `<p>Save money on your festive shipments with our curated list of Diwali courier deals.</p>`,
  },
];

export const courierComparisonData: CourierService[] = [
  { name: 'DHL', logoUrl: '/dhl-logo.png', rating: 4.5, speed: 'Fastest (2-4 days)', cost: 'Premium', bestFor: 'Urgent Deliveries & Documents' },
  { name: 'DTDC', logoUrl: '/dtdc-logo.png', rating: 3.8, speed: 'Standard (5-8 days)', cost: 'Moderate', bestFor: 'Value for Money' },
  { name: 'Shiprocket X', logoUrl: '/shiprocket-logo.png', rating: 4.0, speed: 'Varies (3-10 days)', cost: 'Competitive', bestFor: 'Finding the Cheapest Rate' },
  { name: 'Shoppre', logoUrl: '/shoppre-logo.png', rating: 4.2, speed: 'Standard (5-9 days)', cost: 'Moderate', bestFor: 'Shopping Consolidation' },
];
