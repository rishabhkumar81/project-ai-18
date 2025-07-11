
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  return (
    <section className="py-16 px-4 bg-lightBeige">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 heading-gradient">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform simplifies the process of identifying and supporting slow learners
            through a systematic approach.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-warmTaupe text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3 text-darkBrown">Assessment</h3>
            <p className="text-gray-600">
              Students complete interactive quizzes designed to measure various learning parameters.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-warmTaupe text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3 text-darkBrown">Analysis</h3>
            <p className="text-gray-600">
              Our AI algorithms analyze the data to identify potential learning challenges.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-warmTaupe text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3 text-darkBrown">Action</h3>
            <p className="text-gray-600">
              Teachers receive insights and personalized recommendations for each student.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-warmTaupe hover:bg-opacity-90 transition-all text-white">
            <Link to="/how-it-works" className="flex items-center">
              <span>Learn More About Our Process</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
