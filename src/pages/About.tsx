
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-6">
            About Shaziya Mehendi Designs
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Welcome to the world of beautiful henna artistry. This is a placeholder 
              for the about page content where we'll share the story of Shaziya's 
              journey in mehendi design.
            </p>
            <p className="text-muted-foreground">
              Here we'll include information about the artist, their experience, 
              specialties, and passion for creating stunning henna designs.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
