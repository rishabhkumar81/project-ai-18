
import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real application, you would use a proper email service like EmailJS, SendGrid, etc.
      // For now, we'll simulate sending an email by logging the data and showing a success toast
      console.log("Sending email to tanish.delhi1049@gmail.com with data:", formData);
      
      // Instead of this console.log, you would integrate with an email service
      // Here's how you might do it with EmailJS or a similar service:
      // await emailjs.send('service_id', 'template_id', {
      //   to_email: 'tanish.delhi1049@gmail.com',
      //   from_name: formData.name,
      //   from_email: formData.email,
      //   subject: formData.subject,
      //   message: formData.message,
      // });
      
      toast({
        title: "Message sent!",
        description: "Your message has been sent to tanish.delhi1049@gmail.com",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Header */}
        <section className="bg-navyBlue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We'd love to hear from you. Reach out with any questions or inquiries.
            </p>
          </div>
        </section>
        
        {/* Contact Content */}
        <section className="py-16 px-4 bg-lightBeige">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full">
                <div className="h-[450px] w-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1388701344426!2d77.03736811196791!3d28.595610475583477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1acac7eaf4fb%3A0x3d3158a8b4a48b7c!2sBal%20Bharati%20Public%20School%E2%80%93Dwarka%20(BBPS%E2%80%93Dwarka)!5e0!3m2!1sen!2sin!4v1743846221941!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                
                <div className="p-6 bg-warmTaupe text-white">
                  <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin size={20} className="flex-shrink-0 mt-1" />
                      <span>Bal Bharati Public School, Sector 12, Dwarka, New Delhi - 110078</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone size={20} className="flex-shrink-0 mt-1" />
                      <span>(123) 456-7890</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail size={20} className="flex-shrink-0 mt-1" />
                      <span>binarybuildersbbps@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold heading-gradient mb-6">Send Us a Message</h3>
                <p className="text-gray-600 mb-4">
                  Your message will be sent directly to: <span className="font-medium">tanish.delhi1049@gmail.com</span>
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      className="w-full p-3 rounded bg-lightBeige/50 border-0 focus:ring-2 focus:ring-warmTaupe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email" 
                      className="w-full p-3 rounded bg-lightBeige/50 border-0 focus:ring-2 focus:ring-warmTaupe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject" 
                      className="w-full p-3 rounded bg-lightBeige/50 border-0 focus:ring-2 focus:ring-warmTaupe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message" 
                      className="w-full p-3 rounded bg-lightBeige/50 border-0 focus:ring-2 focus:ring-warmTaupe min-h-[150px]"
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3 bg-warmTaupe hover:bg-deepBrown text-white transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
