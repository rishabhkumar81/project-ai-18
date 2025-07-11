
import React from 'react';
import { Users, UserCheck, BookOpen, CheckCircle } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 heading-gradient">Benefits For All</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform creates a positive impact for everyone involved in the educational journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-lightBeige p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-darkBrown flex items-center">
              <span className="bg-warmTaupe text-white p-2 rounded-full mr-2">
                <Users size={20} />
              </span>
              For Teachers
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                <span>Early identification of students needing additional support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                <span>Data-driven insights to inform teaching strategies</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                <span>Reduced administrative burden with automated assessments</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                <span>Ready-to-use resources and intervention strategies</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-lightBeige p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-darkBrown flex items-center">
              <span className="bg-warmTaupe text-white p-2 rounded-full mr-2">
                <UserCheck size={20} />
              </span>
              For Students
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                <span>Personalized learning experience tailored to individual needs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                <span>Increased confidence and reduced frustration in learning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                <span>Progress tracking to celebrate achievements</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                <span>Interactive and engaging learning materials</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-lightBeige p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-darkBrown flex items-center">
              <span className="bg-warmTaupe text-white p-2 rounded-full mr-2">
                <BookOpen size={20} />
              </span>
              For Institutions
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                <span>Enhanced educational outcomes and student satisfaction</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                <span>Data-driven decision making for resource allocation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                <span>Improved teacher productivity and job satisfaction</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-warmTaupe flex-shrink-0 mt-0.5 mr-2" />
                <span>Compliance with inclusive education requirements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
