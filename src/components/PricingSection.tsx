
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="py-16 px-4 bg-lightBeige">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 heading-gradient">Get Your <span className="text-navyBlue">Customised Model</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your institution's needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-warmTaupe text-white p-4">
              <h3 className="text-xl font-semibold">EduTrack Starter</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                  <span>Identify slow learners (up to 50 students)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                  <span>Standard reports & monthly teacher training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                  <span>Email support</span>
                </li>
              </ul>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <p className="text-lg font-semibold">Rs 2000/- per school per month</p>
              </div>
              
              <Button className="bg-warmTaupe hover:bg-opacity-90 transition-all w-full">
                Try it now!
              </Button>
            </div>
          </div>
          
          {/* Plus Plan */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-warmTaupe text-white p-4">
              <h3 className="text-xl font-semibold">EduTrack Plus</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                  <span>Assess all students + Personalized interventions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                  <span>Quarterly teacher workshops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                  <span>Priority support</span>
                </li>
              </ul>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <p className="text-lg font-semibold">Rs 5000/- per school per month</p>
              </div>
              
              <Button className="bg-warmTaupe hover:bg-opacity-90 transition-all w-full">
                Try it now!
              </Button>
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-warmTaupe text-white p-4">
              <h3 className="text-xl font-semibold">EduTrack Pro</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                  <span>Advanced school-wide insights</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                  <span>Adaptive learning modules + Real-time progress tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                  <span>On-site workshops & 24/7 support</span>
                </li>
              </ul>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <p className="text-lg font-semibold">Rs 15000/- per school per month</p>
              </div>
              
              <Button className="bg-warmTaupe hover:bg-opacity-90 transition-all w-full">
                Try it now!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
