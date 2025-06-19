

import { Button } from '@/components/ui/button';

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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="default" 
            size="lg" 
            className="text-lg px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            View Gallery
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Book Appointment
          </Button>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="font-playfair text-lg font-semibold text-foreground mb-1">Custom Designs</h3>
            <p className="text-sm text-muted-foreground">Unique patterns tailored to your style</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">👰</span>
            </div>
            <h3 className="font-playfair text-lg font-semibold text-foreground mb-1">Bridal Specialist</h3>
            <p className="text-sm text-muted-foreground">Expert in intricate bridal mehendi</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="font-playfair text-lg font-semibold text-foreground mb-1">Natural Henna</h3>
            <p className="text-sm text-muted-foreground">100% organic and skin-safe products</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
    </section>
  );
};

export default HeroSection;

