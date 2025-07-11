
import React from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import ReviewSection from "@/components/ReviewSection";
import OurStory from "@/components/OurStory";
import MeetUs from "@/components/MeetUs";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* 1. Features Section */}
      <FeaturesSection />

      {/* 2. How It Works */}
      <HowItWorksSection />

      {/* 3. Benefits For All Section */}
      <BenefitsSection />
      
      {/* 4. Pricing Section */}
      <PricingSection />
      
      {/* 5. Reviews Section */}
      <ReviewSection />
      
      {/* 6. Our Story Section */}
      <OurStory />
      
      {/* 7. Meet Us Section */}
      <MeetUs />
      
      {/* Contact Us Button */}
      <section className="py-16 px-4 bg-lightBeige text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 heading-gradient">Need to get in touch?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Have questions or want to learn more about how we can help your school? Visit our contact page.
          </p>
          <Button asChild size="lg" className="bg-warmTaupe hover:bg-deepBrown text-white transition-colors">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;
