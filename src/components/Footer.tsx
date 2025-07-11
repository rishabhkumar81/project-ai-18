
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navyBlue text-white pt-12 pb-6 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">EduTrack</h3>
            <p className="text-lightBlue mb-4">
              Empowering teachers to identify and support slow learners through 
              AI-driven insights and personalized learning pathways.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/dwarkabbps/" target="_blank" rel="noopener noreferrer" className="text-lightBlue hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/balbharatischoo" target="_blank" rel="noopener noreferrer" className="text-lightBlue hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.5 21l4.5-12m-4 0l-7.3 6m15.8-6H3" />
                </svg>
              </a>
              <a href="https://www.instagram.com/dwarkabbps/?hl=en" target="_blank" rel="noopener noreferrer" className="text-lightBlue hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/bal-bharati-public-school-dwarka/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-lightBlue hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                {isHomePage ? (
                  <a href="#" onClick={scrollToTop} className="text-lightBlue hover:text-white transition-colors">
                    Home
                  </a>
                ) : (
                  <Link to="/" className="text-lightBlue hover:text-white transition-colors">
                    Home
                  </Link>
                )}
              </li>
              <li>
                <Link to="/about" className="text-lightBlue hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-lightBlue hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-lightBlue hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-coral" />
                <span className="text-lightBlue">
                  Sector 12, Dwarka, Delhi, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0 text-coral" />
                <span className="text-lightBlue">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0 text-coral" />
                <span className="text-lightBlue">binarybuildersbbps@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-mauve text-sm">
              &copy; {new Date().getFullYear()} EduTrack. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-mauve text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-mauve text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {!isHomePage && (
        <button 
          onClick={scrollToTop} 
          className="absolute right-6 bottom-6 bg-warmTaupe hover:bg-deepBrown text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
