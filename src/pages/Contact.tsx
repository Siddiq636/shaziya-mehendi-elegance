
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            Get in touch for bookings and inquiries
          </p>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <Input placeholder="Your name" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input type="email" placeholder="your@email.com" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Event Date
              </label>
              <Input type="date" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea placeholder="Tell us about your event and requirements..." rows={5} />
            </div>
            
            <Button className="w-full btn-primary">
              Send Message
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
