
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Header */}
        <section className="bg-navyBlue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </section>
        
        {/* Privacy Policy Content */}
        <section className="py-16 px-4 bg-lightBeige">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-lg shadow-xl p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold heading-gradient mb-4">Introduction</h2>
                <p className="text-gray-700">
                  LearnInsight ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our service.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold heading-gradient mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-2">We may collect information about you in various ways, including:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Personal Data: Name, email address, and school affiliation that you voluntarily provide.</li>
                  <li>Usage Data: Information on how you access and use our service.</li>
                  <li>Cookies and Tracking Technologies: Information stored on your device to enhance your browsing experience.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold heading-gradient mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-2">We may use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our service</li>
                  <li>To monitor the usage of our service</li>
                  <li>To detect, prevent, and address technical issues</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold heading-gradient mb-4">Disclosure of Your Information</h2>
                <p className="text-gray-700 mb-2">We may share your information with:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Service providers and third-party vendors who perform services on our behalf</li>
                  <li>Business partners with whom we offer co-branded services or engage in joint marketing activities</li>
                  <li>Affiliates, in which case we will require those affiliates to honor this Privacy Policy</li>
                  <li>As required by law, such as to comply with a subpoena, legal proceedings, or similar legal process</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold heading-gradient mb-4">Security of Your Data</h2>
                <p className="text-gray-700">
                  The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold heading-gradient mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-700">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold heading-gradient mb-4">Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please contact us at binarybuildersbbps@gmail.com.
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

export default PrivacyPolicy;
