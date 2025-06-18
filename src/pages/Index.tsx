
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturedSlider from '@/components/FeaturedSlider';
import CategoryTabs from '@/components/CategoryTabs';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedSlider />
      <CategoryTabs />
      
      {/* Recent Posts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Posts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the latest mehendi designs, tips, and tutorials from our collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((post) => (
              <article key={post} className="card-elegant p-6 group hover:scale-105 transition-transform duration-300">
                <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      post % 2 === 0 ? '1649972904349-6e44c42644a7' : '1618331831738-ed3b8471c3d0'
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                    alt={`Mehendi Design ${post}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {post % 3 === 0 ? 'Bridal' : post % 2 === 0 ? 'Festival' : 'Tutorial'}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Beautiful Mehendi Design {post}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  Explore this stunning henna pattern perfect for special occasions. Learn the techniques and tips to create this beautiful design.
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>5 min read</span>
                  <span>2 days ago</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/30 mehendi-pattern">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest mehendi designs, tutorials, and tips
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="btn-primary px-6 py-3 rounded-lg whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
