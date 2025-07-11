
import React from 'react';
import { MapPin, Mail } from 'lucide-react';

const MeetUs = () => {
  return (
    <section className="py-16 px-4 bg-lightBeige">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-bold heading-gradient flex items-center">
            Meet <span className="text-warmTaupe ml-2">us!</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-lg overflow-hidden shadow-md h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.150687206807!2d77.0492!3d28.5918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM1JzMwLjUiTiA3N8KwMDInNTcuMSJF!5e0!3m2!1sen!2sin!4v1649237787566!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: "300px" }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="bg-warmTaupe text-white p-8 rounded-lg shadow-md flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">BBPS DWARKA</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-white mt-1 flex-shrink-0" />
                <p className="text-lg">Sector 12, Dwarka, Delhi, India</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-white mt-1 flex-shrink-0" />
                <p className="text-lg">binarybuildersbbps@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetUs;
