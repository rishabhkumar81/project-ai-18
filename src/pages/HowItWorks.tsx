
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const DetailedProcessFlowChart = () => {
  return (
    <div className="max-w-5xl mx-auto mt-12 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        {/* Step 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center w-full md:w-64 z-10 relative">
          <div className="bg-warmTaupe text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            1
          </div>
          <h3 className="text-xl font-semibold mb-2 text-darkBrown">Assessment</h3>
          <p className="text-gray-600">
            Students complete a series of interactive quizzes and assessments designed to evaluate their learning style, comprehension speed, and knowledge retention.
          </p>
        </div>
        
        {/* Arrow */}
        <div className="hidden md:block">
          <ArrowRight size={32} className="text-warmTaupe" />
        </div>
        <div className="block md:hidden my-2">
          <ArrowDown size={32} className="text-warmTaupe" />
        </div>
        
        {/* Step 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center w-full md:w-64 z-10 relative">
          <div className="bg-warmTaupe text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            2
          </div>
          <h3 className="text-xl font-semibold mb-2 text-darkBrown">Data Collection</h3>
          <p className="text-gray-600">
            The system collects comprehensive data on response times, accuracy, learning patterns, and specific areas of difficulty across multiple subjects.
          </p>
        </div>
        
        {/* Arrow */}
        <div className="hidden md:block">
          <ArrowRight size={32} className="text-warmTaupe" />
        </div>
        <div className="block md:hidden my-2">
          <ArrowDown size={32} className="text-warmTaupe" />
        </div>
        
        {/* Step 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center w-full md:w-64 z-10 relative">
          <div className="bg-warmTaupe text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            3
          </div>
          <h3 className="text-xl font-semibold mb-2 text-darkBrown">AI Analysis</h3>
          <p className="text-gray-600">
            Our proprietary AI algorithm analyzes the collected data to identify patterns and indicators of slower learning processes or specific learning challenges.
          </p>
        </div>
      </div>
      
      {/* Down Arrow */}
      <div className="flex justify-center my-8">
        <ArrowDown size={40} className="text-warmTaupe" />
      </div>
      
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-8">
        {/* Step 6 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center w-full md:w-64 z-10 relative">
          <div className="bg-warmTaupe text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            6
          </div>
          <h3 className="text-xl font-semibold mb-2 text-darkBrown">Implementation & Support</h3>
          <p className="text-gray-600">
            Teachers receive training on how to implement the suggested strategies, with ongoing support from our educational specialists.
          </p>
        </div>
        
        {/* Arrow */}
        <div className="hidden md:block">
          <ArrowRight size={32} className="text-warmTaupe transform rotate-180" />
        </div>
        <div className="block md:hidden my-2">
          <ArrowDown size={32} className="text-warmTaupe transform rotate-180" />
        </div>
        
        {/* Step 5 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center w-full md:w-64 z-10 relative">
          <div className="bg-warmTaupe text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            5
          </div>
          <h3 className="text-xl font-semibold mb-2 text-darkBrown">Personalized Recommendations</h3>
          <p className="text-gray-600">
            Based on the analysis, the system generates tailored learning strategies, materials, and interventions for each identified student.
          </p>
        </div>
        
        {/* Arrow */}
        <div className="hidden md:block">
          <ArrowRight size={32} className="text-warmTaupe transform rotate-180" />
        </div>
        <div className="block md:hidden my-2">
          <ArrowDown size={32} className="text-warmTaupe transform rotate-180" />
        </div>
        
        {/* Step 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center w-full md:w-64 z-10 relative">
          <div className="bg-warmTaupe text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            4
          </div>
          <h3 className="text-xl font-semibold mb-2 text-darkBrown">Early Identification</h3>
          <p className="text-gray-600">
            The system provides detailed reports identifying students who may benefit from additional support, with specific areas of concern highlighted.
          </p>
        </div>
      </div>
      
      {/* Progress Monitoring Loop */}
      <div className="mt-12 text-center">
        <div className="bg-white p-6 rounded-xl shadow-md inline-block max-w-xl">
          <h3 className="text-xl font-semibold text-darkBrown mb-4">Continuous Progress Monitoring</h3>
          <p className="text-gray-600 mb-4">
            Throughout the entire process, our system continuously monitors student progress, 
            adapting recommendations based on improvements and evolving needs.
          </p>
          <div className="flex justify-center mt-4">
            <svg width="220" height="60" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,30 C20,15 60,15 110,15 C160,15 200,15 200,30 C200,45 160,45 110,45 C60,45 20,45 20,30 Z" 
                fill="none" stroke="#A0816C" strokeWidth="3" />
              <path d="M190,22 L200,30 L190,38" fill="none" stroke="#A0816C" strokeWidth="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <section className="py-16 px-4 bg-lightBeige">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 heading-gradient">Our Process: How EduTrack Works</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A detailed explanation of our AI-powered approach to identifying and supporting students with diverse learning needs.
              </p>
            </div>
            
            <DetailedProcessFlowChart />
            
            <div className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-darkBrown">The Science Behind Our Approach</h2>
              <p className="text-gray-700 mb-4">
                Our methodology is built on decades of research in cognitive psychology, educational neuroscience, and machine learning. 
                By combining these fields, we've developed a system that can detect subtle patterns in learning behavior that might 
                otherwise go unnoticed in traditional classroom settings.
              </p>
              <p className="text-gray-700 mb-6">
                The AI system continuously improves its accuracy through machine learning, becoming more precise at identifying 
                learning challenges as it processes more data across diverse student populations.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-darkBrown">Key Benefits of Our Process:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><span className="font-semibold">Early Intervention:</span> Identify learning challenges months or even years before they would become apparent through traditional methods.</li>
                <li><span className="font-semibold">Reduced Stigma:</span> All students take the same assessments, eliminating the stigma associated with being singled out for evaluation.</li>
                <li><span className="font-semibold">Data-Driven Approach:</span> Decisions about support strategies are based on objective data rather than subjective observations.</li>
                <li><span className="font-semibold">Personalized Learning:</span> Each student receives tailored support specific to their unique learning profile.</li>
              </ul>
              
              <div className="mt-8">
                <Button asChild className="bg-warmTaupe hover:bg-deepBrown text-white">
                  <Link to="/" className="flex items-center">
                    <ArrowLeft className="mr-2" size={16} />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
