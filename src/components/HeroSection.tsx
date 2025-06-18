
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div className="absolute inset-0 hero-pattern" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Explore the Art of{' '}
          <span className="text-gradient block">Mehendi</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover beautiful henna designs, traditional patterns, and modern techniques 
          to make your special occasions unforgettable.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search mehendi designs, tutorials..."
              className="pl-12 pr-4 py-3 text-lg border-2 border-primary/20 focus:border-primary rounded-full bg-background/80 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="btn-primary text-lg px-8 py-3 rounded-full">
            Browse Gallery
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Watch Tutorials
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
    </section>
  );
};

export default HeroSection;
