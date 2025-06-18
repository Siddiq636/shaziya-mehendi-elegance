
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-6">
            Blog Post {id}
          </h1>
          <p className="text-muted-foreground">
            This is a placeholder for the blog post content. Blog post ID: {id}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
