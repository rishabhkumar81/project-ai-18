import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, Bell, User, ChevronDown, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

type NavBarProps = {
  isAuthenticated?: boolean;
  userName?: string;
};

const NavBar = ({ isAuthenticated = false, userName = "Guest User" }: NavBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Contact", path: "/contact" },
  ];

  const userInitials = userName
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm" 
          : "bg-navyBlue"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className={cn(
              "font-bold text-2xl transition-colors",
              isScrolled ? "text-navyBlue" : "text-white"
            )}>
              EduTrack
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link 
                      to={item.path}
                      className={cn(
                        "nav-item px-3 py-2 text-sm font-medium",
                        isScrolled ? "text-navyBlue hover:text-coral" : "text-white hover:text-lightBlue"
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "bg-transparent hover:bg-transparent",
                      isScrolled ? "text-navyBlue hover:text-coral" : "text-white hover:text-lightBlue"
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-mediumBlue/50 to-navyBlue p-6 no-underline outline-none focus:shadow-md"
                            href="/student-dashboard"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Student Dashboard
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Access your personalized learning dashboard
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/features"
                          >
                            <div className="text-sm font-medium leading-none">Interactive Quizzes</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Engage with interactive learning materials
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/how-it-works"
                          >
                            <div className="text-sm font-medium leading-none">Progress Tracking</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Monitor learning progress with detailed analytics
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/faq"
                          >
                            <div className="text-sm font-medium leading-none">Teacher Resources</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Tools and materials for educators
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right-side items (desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search button */}
            <button 
              onClick={toggleSearch} 
              className={cn(
                "p-2 rounded-full transition-colors",
                isScrolled 
                  ? "text-navyBlue hover:bg-muted" 
                  : "text-white hover:bg-mediumBlue/20"
              )}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <button 
                  className={cn(
                    "p-2 rounded-full transition-colors",
                    isScrolled 
                      ? "text-navyBlue hover:bg-muted" 
                      : "text-white hover:bg-mediumBlue/20"
                  )}
                  aria-label="Notifications"
                >
                  <Bell size={20} />
                </button>
                
                {/* User menu */}
                <div className="flex items-center space-x-2">
                  <Avatar className="h-9 w-9 border-2 border-white">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>{userInitials}</AvatarFallback>
                  </Avatar>
                  <span className={cn(
                    "text-sm font-medium hidden md:block",
                    isScrolled ? "text-navyBlue" : "text-white"
                  )}>
                    {userName}
                  </span>
                  <ChevronDown size={16} className={cn(
                    isScrolled ? "text-navyBlue" : "text-white"
                  )} />
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button 
                    variant={isScrolled ? "outline" : "outline"} 
                    className={cn(
                      "rounded-full transition-colors font-medium",
                      isScrolled 
                        ? "border-navyBlue text-navyBlue hover:bg-navyBlue hover:text-white" 
                        : "border-white text-white hover:bg-white hover:text-navyBlue"
                    )}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button 
                    variant="default"
                    className={cn(
                      "rounded-full bg-coral hover:bg-coral/90 text-white transition-colors"
                    )}
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 lg:hidden">
            {!showSearch && (
              <button 
                onClick={toggleSearch}
                className={cn(
                  "p-2 rounded-full",
                  isScrolled ? "text-navyBlue" : "text-white"
                )}
              >
                <Search size={20} />
              </button>
            )}
            
            {isAuthenticated && (
              <Avatar className="h-8 w-8 border-2 border-white">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>{userInitials}</AvatarFallback>
              </Avatar>
            )}
            
            <button
              onClick={toggleMenu}
              className={cn(
                "p-2 focus:outline-none",
                isScrolled ? "text-navyBlue" : "text-white"
              )}
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Search bar (conditionally rendered) */}
      {showSearch && (
        <div className={cn(
          "py-2 px-4 border-t transition-all",
          isScrolled 
            ? "bg-white border-gray-200" 
            : "bg-navyBlue/90 border-mediumBlue"
        )}>
          <div className="container mx-auto">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 rounded-l-full bg-white/90 border-0 focus:outline-none focus:ring-2 focus:ring-coral"
                autoFocus
              />
              <button className="bg-coral text-white rounded-r-full px-5 py-2 hover:bg-coral/80 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={cn(
          "lg:hidden border-t transition-all",
          isScrolled 
            ? "bg-white border-gray-200" 
            : "bg-navyBlue/95 backdrop-blur-sm border-mediumBlue"
        )}>
          <div className="container mx-auto py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "py-2 px-4 rounded-md text-center font-medium transition-colors",
                    isScrolled 
                      ? "text-navyBlue hover:bg-muted" 
                      : "text-white hover:bg-mediumBlue/20"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/features"
                className={cn(
                  "py-2 px-4 rounded-md text-center font-medium transition-colors",
                  isScrolled 
                    ? "text-navyBlue hover:bg-muted" 
                    : "text-white hover:bg-mediumBlue/20"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              
              {!isAuthenticated && (
                <div className="flex flex-col space-y-3 pt-2">
                  <Link 
                    to="/login" 
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "py-2 px-4 rounded-full text-center border transition-colors",
                      isScrolled 
                        ? "border-navyBlue text-navyBlue hover:bg-navyBlue hover:text-white" 
                        : "border-white text-white hover:bg-white hover:text-navyBlue"
                    )}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    onClick={() => setIsMenuOpen(false)}
                    className="py-2 px-4 rounded-full text-center bg-coral text-white hover:bg-coral/90 transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
