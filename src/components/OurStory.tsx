
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const OurStory = () => {
  return (
    <section className="py-16 px-4 bg-lightBeige">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="text-warmTaupe">Story</span>
            </h2>
            
            <div className="space-y-4 text-darkBrown">
              <p>
                At EduTrack, we believe every student has untapped potential, but we noticed a growing problem in classrooms: slow learners were often overlooked until it was too late. Many students, especially in large classes, silently struggled, losing confidence and falling behind without anyone realizing.
              </p>
              
              <p>
                We saw this firsthand in schools across India and asked ourselves: What if we could catch these struggles earlier? What if teachers could identify slow learners in real-time and provide personalized help before the learning gap widened?
              </p>
              
              <p>
                Driven by this vision, we created EduTracker, an AI-powered tool designed to pinpoint students who need extra support, helping teachers take immediate action. EduTracker doesn't just identify the problem—it also suggests tailored learning paths to ensure every student has the chance to succeed.
              </p>
              
              <p>
                We built this to empower schools and change lives, one student at a time.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-warmTaupe hover:bg-opacity-90 transition-all">
                CONTACT US
              </Button>
              <Button variant="outline" className="border-warmTaupe text-warmTaupe hover:bg-warmTaupe hover:text-white">
                ENTER GROWTH ZONE
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-darkBrown">
              Join us in this movement to help students achieve their academic goals with our cutting-edge technology.
            </h3>
            
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src="/lovable-uploads/9ce36732-ad3e-4cc1-829b-f635becbbaab.png" 
                    alt="Team member" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src="/lovable-uploads/3cf5b02f-20a5-429f-bd34-fd7bcaaaa4f0.png" 
                    alt="Team member" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src="/lovable-uploads/12c4527d-5223-48ca-9566-6d39188eedb8.png" 
                    alt="Team member" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <span className="text-lg font-semibold text-darkBrown">250+ students benefited</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
