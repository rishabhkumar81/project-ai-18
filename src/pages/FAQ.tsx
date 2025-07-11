
import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const faqItems = [
    {
      question: "What makes LearnInsight different from other educational platforms?",
      answer: "LearnInsight stands apart with its specialized AI algorithms designed specifically to identify struggling students early. Unlike generic learning platforms, we focus exclusively on helping teachers provide targeted support before students fall behind permanently.",
      category: "general"
    },
    {
      question: "How quickly can LearnInsight identify students who need help?",
      answer: "Our system can detect learning patterns within 2-3 weeks of regular class activity, giving teachers early warning signs long before traditional assessment methods would. This early detection can make the difference between a student catching up or falling further behind.",
      category: "functionality"
    },
    {
      question: "Will LearnInsight replace teachers?",
      answer: "Absolutely not! LearnInsight is designed to be a teacher's assistant, not a replacement. We believe in augmenting human expertise with technology, giving teachers powerful insights so they can do what they do best—provide personalized guidance to students.",
      category: "general"
    },
    {
      question: "How accurate is LearnInsight's AI in identifying struggling students?",
      answer: "Our algorithms achieve over 90% accuracy in identifying students who need additional support, as verified through controlled studies. The system continuously improves as it learns from teacher feedback and student outcomes.",
      category: "technical"
    },
    {
      question: "Can LearnInsight adapt to different teaching styles?",
      answer: "Yes! LearnInsight's flexible design allows it to complement various teaching methodologies from traditional classroom setups to flipped classrooms and remote learning environments. The platform adapts to your teaching style, not the other way around.",
      category: "functionality"
    },
    {
      question: "What happens with the student data collected by LearnInsight?",
      answer: "We take data privacy extremely seriously. All student data is encrypted, anonymized when used for system improvements, and never sold to third parties. We comply with all educational privacy regulations including FERPA and COPPA.",
      category: "privacy"
    },
    {
      question: "How does LearnInsight handle different learning disabilities?",
      answer: "LearnInsight can identify patterns associated with various learning challenges, including dyslexia, ADHD, and processing disorders. The system doesn't diagnose conditions but flags potential areas where specialized support might benefit students.",
      category: "functionality"
    },
    {
      question: "Can parents access LearnInsight data about their children?",
      answer: "Yes, we offer a parent portal where guardians can track their child's progress and see teacher recommendations. This creates a valuable home-school connection and helps parents reinforce classroom learning.",
      category: "functionality"
    },
    {
      question: "What kind of training do teachers need to use LearnInsight effectively?",
      answer: "Most teachers become proficient with LearnInsight after just 1-2 hours of training. We provide comprehensive onboarding resources including video tutorials, live webinars, and a helpful support team available to answer questions.",
      category: "implementation"
    },
    {
      question: "How does LearnInsight measure success?",
      answer: "We track several key metrics: improvement in student performance, closure of achievement gaps, teacher satisfaction rates, and time saved on administrative tasks. Our average implementation shows 23% improvement in struggling students' scores within one semester.",
      category: "results"
    },
    {
      question: "Can LearnInsight be used for advanced or gifted students too?",
      answer: "Absolutely! While we focus on identifying struggling students, our platform also recognizes advanced learning patterns and can suggest enrichment activities for gifted students who need additional challenges.",
      category: "functionality"
    },
    {
      question: "What subjects does LearnInsight cover?",
      answer: "LearnInsight currently supports core subjects including mathematics, science, language arts, and social studies. We're continuously expanding to include additional subjects based on educator feedback.",
      category: "functionality"
    },
    {
      question: "How long does implementation take for a typical school?",
      answer: "Most schools can be fully set up within 2-4 weeks. Our dedicated implementation team works closely with your IT department and teaching staff to ensure a smooth transition with minimal disruption.",
      category: "implementation"
    },
    {
      question: "What technology requirements does LearnInsight have?",
      answer: "LearnInsight is cloud-based and works on any modern web browser. There's no need for special hardware or software installation. If your school can access the internet reliably, you can use LearnInsight.",
      category: "technical"
    },
    {
      question: "How does LearnInsight create personalized learning paths?",
      answer: "Our AI analyzes each student's specific strengths, weaknesses, learning style, and pace to generate truly individualized learning recommendations. These aren't generic paths but custom journeys designed for each student's unique needs.",
      category: "technical"
    },
    {
      question: "What evidence supports LearnInsight's effectiveness?",
      answer: "LearnInsight has been validated through multiple peer-reviewed studies showing significant improvements in student outcomes. We've documented an average 31% reduction in achievement gaps when implemented consistently over a full academic year.",
      category: "results"
    },
    {
      question: "Can LearnInsight work with our existing school systems?",
      answer: "Yes, we've built LearnInsight with integration in mind. The platform connects seamlessly with popular LMS platforms, student information systems, and assessment tools using secure API connections.",
      category: "technical"
    },
    {
      question: "How affordable is LearnInsight for different school sizes?",
      answer: "We offer flexible pricing models based on school size and needs, with special considerations for public schools and institutions with limited resources. Our goal is to make LearnInsight accessible to all schools regardless of budget constraints.",
      category: "pricing"
    },
    {
      question: "What support does LearnInsight provide after implementation?",
      answer: "We offer ongoing support including regular check-ins, quarterly system reviews, continuous feature updates, and a dedicated support team available via chat, email, and phone. We consider ourselves long-term partners in your educational mission.",
      category: "support"
    },
    {
      question: "How does LearnInsight handle multilingual students?",
      answer: "LearnInsight includes support for ESL/ELL students with specialized pattern recognition that distinguishes between language barriers and learning challenges. The system can provide recommendations specifically tailored to multilingual learners.",
      category: "functionality"
    }
  ];

  const filteredFAQs = searchTerm 
    ? faqItems.filter(item => 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : faqItems;

  const categories = [
    { id: "general", name: "General", color: "bg-blue-100 text-blue-800" },
    { id: "functionality", name: "Functionality", color: "bg-green-100 text-green-800" },
    { id: "technical", name: "Technical", color: "bg-purple-100 text-purple-800" },
    { id: "privacy", name: "Privacy", color: "bg-red-100 text-red-800" },
    { id: "implementation", name: "Implementation", color: "bg-yellow-100 text-yellow-800" },
    { id: "results", name: "Results", color: "bg-teal-100 text-teal-800" },
    { id: "pricing", name: "Pricing", color: "bg-orange-100 text-orange-800" },
    { id: "support", name: "Support", color: "bg-indigo-100 text-indigo-800" }
  ];

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.color || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Header */}
        <section className="bg-navyBlue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Got Questions? We've Got Answers
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Explore our comprehensive FAQ to learn how LearnInsight transforms education
              for teachers and students alike.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full p-4 pl-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
            </div>
          </div>
        </section>
        
        {/* FAQ Content */}
        <section className="py-16 px-4 bg-gradient-to-b from-lightBeige to-white">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map(category => (
                  <span 
                    key={category.id} 
                    className={`text-xs px-3 py-1 rounded-full ${category.color} font-medium`}
                  >
                    {category.name}
                  </span>
                ))}
              </div>
              
              <Accordion type="single" collapsible className="space-y-6">
                {filteredFAQs.length > 0 ? filteredFAQs.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <AccordionTrigger className="px-6 py-5 hover:bg-gray-50 hover:no-underline data-[state=open]:bg-gray-50">
                      <div className="flex items-start gap-3 text-left">
                        <span 
                          className={`text-xs px-2.5 py-1 rounded-full ${getCategoryColor(item.category)} font-medium flex-shrink-0 mt-1`}
                        >
                          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </span>
                        <span className="text-lg font-medium">{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-5 bg-gray-50/50">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                )) : (
                  <div className="text-center py-10">
                    <p className="text-lg text-gray-500">No matching questions found. Try a different search term.</p>
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="mt-4 px-4 py-2 bg-warmTaupe text-white rounded-md hover:bg-deepBrown transition-colors"
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </Accordion>
            </div>
            
            {/* Still Have Questions Section */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="text-gray-600 mb-6">
                Our team is here to help you with any additional questions or concerns you might have.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-warmTaupe text-white px-6 py-3 rounded-lg hover:bg-deepBrown transition-colors shadow-md hover:shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
