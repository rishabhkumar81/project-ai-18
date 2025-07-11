
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Brain, BarChart3 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-lightBeige to-white py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-gradient">
            Transforming Education Through AI-Driven Insights
          </h1>
          <p className="text-lg mb-6 text-darkBrown">
            Our platform helps teachers identify slow learners, provide personalized support, 
            and enhance learning outcomes with the power of AI technology.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild className="bg-warmTaupe hover:bg-opacity-90 transition-all text-white px-8 py-6 text-lg">
              <Link to="/register">Get Started</Link>
            </Button>
            <Button asChild variant="outline" className="border-warmTaupe text-warmTaupe hover:bg-warmTaupe hover:text-white px-8 py-6 text-lg">
              <Link to="/learn-more">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="w-full h-80 md:h-96 bg-softBrown rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000" 
                alt="Students Learning" 
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg animate-float">
              <Brain size={40} className="text-warmTaupe" />
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg animate-float animation-delay-1000">
              <BarChart3 size={40} className="text-warmTaupe" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
