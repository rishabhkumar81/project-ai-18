
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // For demo purposes

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 w-full",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md text-navyBlue shadow-md" 
          : "bg-navyBlue text-white"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className={cn(
              "font-bold text-xl transition-all",
              isScrolled ? "text-navyBlue" : "text-white"
            )}>EduTrack</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex space-x-6 mr-8">
              <Link to="/" className={cn(
                "font-medium py-2 border-b-2 border-transparent transition-all duration-200 hover:border-coral",
                isScrolled ? "text-navyBlue hover:text-coral" : "text-white hover:text-lightBlue"
              )}>
                Home
              </Link>
              <Link to="/about" className={cn(
                "font-medium py-2 border-b-2 border-transparent transition-all duration-200 hover:border-coral",
                isScrolled ? "text-navyBlue hover:text-coral" : "text-white hover:text-lightBlue"
              )}>
                About
              </Link>
              <Link to="/features" className={cn(
                "font-medium py-2 border-b-2 border-transparent transition-all duration-200 hover:border-coral",
                isScrolled ? "text-navyBlue hover:text-coral" : "text-white hover:text-lightBlue"
              )}>
                Features
              </Link>
              <Link to="/contact" className={cn(
                "font-medium py-2 border-b-2 border-transparent transition-all duration-200 hover:border-coral",
                isScrolled ? "text-navyBlue hover:text-coral" : "text-white hover:text-lightBlue"
              )}>
                Contact
              </Link>
            </div>
            
            {isAuthenticated ? (
              <div className="relative group">
                <button className={cn(
                  "flex items-center space-x-1 transition-colors font-medium",
                  isScrolled ? "text-navyBlue hover:text-coral" : "text-white hover:text-lightBlue"
                )}>
                  <span>My Account</span>
                  <ChevronDown size={16} />
                </button>
                <div className="absolute right-0 w-48 mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-20 hidden group-hover:block transition-all transform origin-top scale-y-0 group-hover:scale-y-100">
                  <div className="py-2">
                    <Link to="/dashboard" className="block px-4 py-2 text-navyBlue hover:bg-lightBlue/10 transition-colors">
                      Dashboard
                    </Link>
                    <Link to="/profile" className="block px-4 py-2 text-navyBlue hover:bg-lightBlue/10 transition-colors">
                      Profile
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-navyBlue hover:bg-lightBlue/10 transition-colors">
                      Settings
                    </Link>
                    <button className="w-full text-left px-4 py-2 text-coral hover:bg-lightBlue/10 transition-colors">
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex space-x-3">
                <Button asChild variant="outline" className={cn(
                  "rounded-full transition-colors",
                  isScrolled 
                    ? "border-navyBlue text-navyBlue hover:bg-navyBlue hover:text-white" 
                    : "border-white text-white hover:bg-white hover:text-navyBlue"
                )}>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className={cn(
                  "bg-coral text-white hover:bg-opacity-90 rounded-full transition-colors",
                  isScrolled ? "hover:bg-coral/80" : ""
                )}>
                  <Link to="/register">Sign Up</Link>
                </Button>
              </div>
            )}
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className={cn(
              "md:hidden focus:outline-none",
              isScrolled ? "text-navyBlue" : "text-white"
            )}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className={cn(
          "md:hidden border-t transition-all",
          isScrolled 
            ? "bg-white/90 backdrop-blur-md border-gray-200" 
            : "bg-navyBlue border-mediumBlue"
        )}>
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={cn(
                  "transition-colors py-2 flex w-full justify-center font-medium",
                  isScrolled ? "text-navyBlue hover:text-coral" : "text-white hover:text-lightBlue"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={cn(
                  "transition-colors py-2 flex w-full justify-center font-medium",
                  isScrolled ? "text-navyBlue hover:text-coral" : "text-white hover:text-lightBlue"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/features" 
                className={cn(
                  "transition-colors py-2 flex w-full justify-center font-medium",
                  isScrolled ? "text-navyBlue hover:text-coral" : "text-white hover:text-lightBlue"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/contact" 
                className={cn(
                  "transition-colors py-2 flex w-full justify-center font-medium",
                  isScrolled ? "text-navyBlue hover:text-coral" : "text-white hover:text-lightBlue"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className={cn(
                      "transition-colors py-2 flex w-full justify-center font-medium",
                      isScrolled ? "text-navyBlue hover:text-coral" : "text-white hover:text-lightBlue"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/profile" 
                    className={cn(
                      "transition-colors py-2 flex w-full justify-center font-medium",
                      isScrolled ? "text-navyBlue hover:text-coral" : "text-white hover:text-lightBlue"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link 
                    to="/settings" 
                    className={cn(
                      "transition-colors py-2 flex w-full justify-center font-medium",
                      isScrolled ? "text-navyBlue hover:text-coral" : "text-white hover:text-lightBlue"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <button className={cn(
                    "text-center py-2 transition-colors w-full font-medium",
                    isScrolled ? "text-coral hover:text-red-500" : "text-coral hover:text-red-300"
                  )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-3 pt-2 pb-4">
                  <Button asChild variant="outline" className={cn(
                    "mx-auto max-w-[200px] rounded-full",
                    isScrolled 
                      ? "border-navyBlue text-navyBlue hover:bg-navyBlue hover:text-white" 
                      : "border-white text-white hover:bg-white hover:text-navyBlue"
                  )}>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                  </Button>
                  <Button asChild className="bg-coral mx-auto max-w-[200px] text-white hover:bg-opacity-90 rounded-full">
                    <Link to="/register" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                  </Button>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
