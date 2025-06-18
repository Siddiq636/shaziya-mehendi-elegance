
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-4">
            Mehendi Gallery
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our beautiful collection of henna designs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder gallery items */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="card-elegant aspect-square bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Gallery Item {item}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
