
import React from 'react';
import { LineChart, BookOpen, UserCheck, Clock } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 heading-gradient">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform offers multiple tools to help educators identify, 
            support, and monitor students with diverse learning needs.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md card-hover border border-softBrown/20 flex flex-col items-center text-center">
            <div className="bg-lightBeige w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <LineChart size={32} className="text-warmTaupe" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-darkBrown">Real-time Progress Tracking</h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              Monitor student progress in real-time with intuitive dashboards and detailed analytics.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md card-hover border border-softBrown/20 flex flex-col items-center text-center">
            <div className="bg-lightBeige w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <BookOpen size={32} className="text-warmTaupe" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-darkBrown">Personalized Learning Plans</h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              Generate customized learning plans tailored to each student's unique needs and learning style.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md card-hover border border-softBrown/20 flex flex-col items-center text-center">
            <div className="bg-lightBeige w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <UserCheck size={32} className="text-warmTaupe" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-darkBrown">Teacher Empowerment</h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              Provide teachers with resources and insights to better support diverse learning needs.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md card-hover border border-softBrown/20 flex flex-col items-center text-center">
            <div className="bg-lightBeige w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <Clock size={32} className="text-warmTaupe" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-darkBrown">Early Intervention</h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              Identify potential learning challenges early to provide timely and effective support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
