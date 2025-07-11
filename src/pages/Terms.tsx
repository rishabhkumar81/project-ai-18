
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Header */}
        <section className="bg-navyBlue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our service.
            </p>
          </div>
        </section>
        
        {/* Terms of Service Content */}
        <section className="py-16 px-4 bg-lightBeige">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-lg shadow-xl p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold heading-gradient mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By accessing or using LearnInsight, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold heading-gradient mb-4">2. Use License</h2>
                <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily access the materials on LearnInsight's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on LearnInsight's website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold heading-gradient mb-4">3. Disclaimer</h2>
                <p className="text-gray-700">
                  The materials on LearnInsight's website are provided on an 'as is' basis. LearnInsight makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold heading-gradient mb-4">4. Limitations</h2>
                <p className="text-gray-700">
                  In no event shall LearnInsight or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on LearnInsight's website, even if LearnInsight or a LearnInsight authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold heading-gradient mb-4">5. Accuracy of Materials</h2>
                <p className="text-gray-700">
                  The materials appearing on LearnInsight's website could include technical, typographical, or photographic errors. LearnInsight does not warrant that any of the materials on its website are accurate, complete, or current. LearnInsight may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold heading-gradient mb-4">6. Links</h2>
                <p className="text-gray-700">
                  LearnInsight has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by LearnInsight of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold heading-gradient mb-4">7. Modifications</h2>
                <p className="text-gray-700">
                  LearnInsight may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold heading-gradient mb-4">8. Governing Law</h2>
                <p className="text-gray-700">
                  These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold heading-gradient mb-4">Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about these Terms of Service, please contact us at binarybuildersbbps@gmail.com.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
