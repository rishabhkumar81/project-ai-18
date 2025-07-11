
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 px-4 bg-warmTaupe text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Educational Approach?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of educators who are making a difference in students' lives with our AI-powered platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild className="bg-white text-warmTaupe hover:bg-opacity-90 px-8 py-3 text-lg font-medium">
            <Link to="/register">Sign Up Now</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-warmTaupe px-8 py-3 text-lg font-medium">
            <Link to="/demo">Request Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
