
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { InfoIcon } from 'lucide-react';

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real application, you would use a proper email service like EmailJS, SendGrid, etc.
      console.log("Sending email to tanish.delhi1049@gmail.com with data:", formData);
      
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
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-cover bg-center" 
                 style={{ backgroundImage: "url('/lovable-uploads/9edcd7d7-675a-44c2-adc6-627848778b8b.png')" }}>
            </div>
            
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <div className="bg-warmTaupe text-white p-6 mb-8 rounded-lg">
                <h2 className="text-2xl md:text-3xl font-bold">Need Help? Contact us!</h2>
                <p className="mt-2 text-sm opacity-80">Messages will be sent to: tanish.delhi1049@gmail.com</p>
              </div>
              
              <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 flex items-start">
                <InfoIcon className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={18} />
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This is a demo form. In a production environment, you would integrate with an email service like EmailJS, SendGrid, or use a server-side solution to send actual emails.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name" 
                  className="w-full p-3 rounded bg-lightBeige/50 border-0 focus:ring-2 focus:ring-warmTaupe"
                  required
                />
                
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email" 
                  className="w-full p-3 rounded bg-lightBeige/50 border-0 focus:ring-2 focus:ring-warmTaupe"
                  required
                />
                
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  className="w-full p-3 rounded bg-lightBeige/50 border-0 focus:ring-2 focus:ring-warmTaupe"
                  required
                />
                
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message" 
                  className="w-full p-3 rounded bg-lightBeige/50 border-0 focus:ring-2 focus:ring-warmTaupe min-h-[150px]"
                  required
                ></textarea>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 bg-warmTaupe hover:bg-deepBrown text-white transition-colors"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
