
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const featuredPosts = [
  {
    id: 1,
    title: "Bridal Mehendi Designs 2024: Latest Trends",
    excerpt: "Discover the most stunning bridal mehendi patterns that are trending this year.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Bridal",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Arabic Mehendi: Simple Yet Elegant Designs",
    excerpt: "Learn to create beautiful Arabic henna patterns perfect for any occasion.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Arabic",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Festival Special: Quick Mehendi Ideas",
    excerpt: "Fast and fabulous mehendi designs perfect for festivals and celebrations.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Festival",
    readTime: "5 min read"
  }
];

const FeaturedSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
            Featured Stories
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our most popular mehendi designs and tutorials
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {featuredPosts.map((post) => (
              <div key={post.id} className="w-full flex-shrink-0 relative">
                <div className="relative h-[500px] md:h-[600px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="max-w-3xl">
                      <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium mb-4">
                        {post.category}
                      </span>
                      <h3 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4">
                        {post.title}
                      </h3>
                      <p className="text-gray-200 text-lg mb-6 max-w-2xl">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center space-x-4">
                        <Link to={`/blog/${post.id}`}>
                          <Button className="btn-primary">
                            Read More
                          </Button>
                        </Link>
                        <span className="text-gray-300 text-sm">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {featuredPosts.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSlider;
