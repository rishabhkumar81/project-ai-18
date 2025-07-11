
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoBackButton from "@/components/GoBackButton";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Header */}
        <section className="bg-navyBlue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About LearnInsight</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Our mission is to empower teachers with AI-driven tools to identify and support students who need additional attention.
            </p>
          </div>
        </section>
        
        {/* Back Button */}
        <div className="container mx-auto px-4 py-4">
          <GoBackButton />
        </div>
        
        {/* About Content */}
        <section className="py-16 px-4 bg-lightBeige">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
              <h2 className="text-3xl font-bold heading-gradient mb-6">Our Story</h2>
              <p className="text-lg mb-6">
                LearnInsight was born out of a passion to transform education through technology. 
                We recognized that teachers often struggle to identify students who need additional support,
                especially in large classrooms where individual attention is limited.
              </p>
              <p className="text-lg mb-6">
                Our platform uses advanced AI algorithms to analyze student performance data, 
                identify patterns, and provide actionable insights to teachers. This allows educators
                to intervene early and provide personalized support to students who need it most.
              </p>
              <p className="text-lg">
                Since our founding, we've been committed to making education more inclusive and 
                effective for all students, regardless of their learning pace or style.
              </p>
            </div>
            
            {/* Credits Section */}
            <div className="bg-warmTaupe text-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Credits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Development Team</h3>
                  <ul className="space-y-2">
                    <li>Aryan Mathur - Team Lead & ML Engineer</li>
                    <li>Arnav Mathur - Frontend Developer</li>
                    <li>Aayush Goel - Frontend Developer</li>
                    <li>Arihant Jain - Backend Developer</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Acknowledgements</h3>
                  <ul className="space-y-2">
                    <li>Bal Bharati Public School, Dwarka</li>
                    <li>Computer Science Department</li>
                    <li>Ms. Rajini Jha - Project Mentor</li>
                    <li>Mr. Rakesh Bhardwaj - Technology Consultant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
