
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Categories = () => {
  const { category } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-4 capitalize">
            {category} Designs
          </h1>
          <p className="text-muted-foreground">
            Explore our collection of {category} mehendi designs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder category items */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="card-elegant p-6">
              <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">Design {item}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {category} Design {item}
              </h3>
              <p className="text-sm text-muted-foreground">
                Beautiful {category} henna pattern for special occasions
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
