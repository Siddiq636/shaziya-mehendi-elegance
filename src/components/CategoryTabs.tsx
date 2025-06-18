
import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'All', slug: 'all', count: 45 },
  { name: 'Bridal Mehendi', slug: 'bridal', count: 12 },
  { name: 'Festival Designs', slug: 'festival', count: 15 },
  { name: 'Arabic Patterns', slug: 'arabic', count: 8 },
  { name: 'Tips & Tricks', slug: 'tips', count: 6 },
  { name: 'DIY Tutorials', slug: 'diy', count: 4 }
];

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
            Explore Categories
          </h2>
          <p className="text-muted-foreground">
            Browse mehendi designs by category
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/categories/${category.slug}`}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 hover:shadow-md ${
                activeCategory === category.slug
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                  : 'bg-background text-foreground border-border hover:border-primary/50'
              }`}
              onClick={() => setActiveCategory(category.slug)}
            >
              <span className="font-medium">{category.name}</span>
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </Link>
          ))}
        </div>

        {/* Category Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.slice(1, 4).map((category) => (
            <Link
              key={category.slug}
              to={`/categories/${category.slug}`}
              className="group card-elegant p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">
                  {category.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                {category.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                Discover beautiful {category.name.toLowerCase()} designs and patterns.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary font-medium">
                  {category.count} designs
                </span>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  View all →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;
