
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  BarChart3,
  User,
  Settings,
  Bell,
  LogOut,
  Clock,
  CheckCircle,
  Calendar,
  Award,
  ArrowUpRight,
  Brain,
  Timer,
  List,
  Pencil,
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import QuizSystem from '@/components/QuizSystem';

const quizQuestions = [
  {
    id: 1,
    text: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    explanation: "Paris is the capital and largest city of France."
  },
  {
    id: 2,
    text: "Which of the following is NOT a primary color?",
    options: ["Red", "Blue", "Green", "Yellow"],
    correctAnswer: 3,
    explanation: "The primary colors are Red, Blue, and Green. Yellow is a secondary color formed by mixing Red and Green."
  },
  {
    id: 3,
    text: "What is 9 × 8?",
    options: ["63", "72", "81", "64"],
    correctAnswer: 1,
    explanation: "9 × 8 = 72"
  },
];

const StudentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleQuizComplete = (results: any) => {
    console.log('Quiz results:', results);
  };
  
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div 
        className={`bg-white border-r border-gray-200 transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className={`flex items-center ${!isSidebarOpen && 'justify-center w-full'}`}>
              <div className="bg-warmTaupe text-white p-2 rounded-md">
                <BookOpen size={22} />
              </div>
              {isSidebarOpen && (
                <span className="ml-2 font-semibold text-darkBrown">LearnInsight</span>
              )}
            </div>
            <button
              onClick={toggleSidebar}
              className={`text-gray-500 hover:text-gray-700 ${!isSidebarOpen && 'hidden'}`}
            >
              <List size={20} />
            </button>
          </div>
          
          <div className="overflow-y-auto flex-1 py-4">
            <nav className="px-2 space-y-1">
              <Link
                to="/student-dashboard"
                className="flex items-center px-4 py-3 text-darkBrown bg-lightBeige rounded-md font-medium"
              >
                <BarChart3 size={20} className={`text-warmTaupe ${!isSidebarOpen && 'mx-auto'}`} />
                {isSidebarOpen && <span className="ml-3">Dashboard</span>}
              </Link>
              
              <Link
                to="/student-dashboard/learning"
                className={`flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md ${
                  !isSidebarOpen ? 'justify-center' : ''
                }`}
              >
                <Brain size={20} className={!isSidebarOpen ? 'mx-auto' : ''} />
                {isSidebarOpen && <span className="ml-3">My Learning</span>}
              </Link>
              
              <Link
                to="/student-dashboard/assessments"
                className={`flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md ${
                  !isSidebarOpen ? 'justify-center' : ''
                }`}
              >
                <Pencil size={20} className={!isSidebarOpen ? 'mx-auto' : ''} />
                {isSidebarOpen && <span className="ml-3">Assessments</span>}
              </Link>
              
              <Link
                to="/student-dashboard/progress"
                className={`flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md ${
                  !isSidebarOpen ? 'justify-center' : ''
                }`}
              >
                <Timer size={20} className={!isSidebarOpen ? 'mx-auto' : ''} />
                {isSidebarOpen && <span className="ml-3">Progress</span>}
              </Link>
              
              <Link
                to="/student-dashboard/profile"
                className={`flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md ${
                  !isSidebarOpen ? 'justify-center' : ''
                }`}
              >
                <User size={20} className={!isSidebarOpen ? 'mx-auto' : ''} />
                {isSidebarOpen && <span className="ml-3">Profile</span>}
              </Link>
              
              <Link
                to="/student-dashboard/settings"
                className={`flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md ${
                  !isSidebarOpen ? 'justify-center' : ''
                }`}
              >
                <Settings size={20} className={!isSidebarOpen ? 'mx-auto' : ''} />
                {isSidebarOpen && <span className="ml-3">Settings</span>}
              </Link>
            </nav>
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <Link
              to="/logout"
              className={`flex items-center text-red-500 hover:bg-red-50 rounded-md px-4 py-3 ${
                !isSidebarOpen ? 'justify-center' : ''
              }`}
            >
              <LogOut size={20} className={!isSidebarOpen ? 'mx-auto' : ''} />
              {isSidebarOpen && <span className="ml-3">Logout</span>}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <List size={24} />
            </button>
            
            <div className="flex items-center">
              <button className="p-2 text-gray-500 hover:text-gray-700 relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  3
                </span>
              </button>
              
              <div className="ml-4 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                {isSidebarOpen && (
                  <span className="ml-2 font-medium text-gray-700">Alex Johnson</span>
                )}
              </div>
            </div>
          </div>
        </header>
        
        {/* Dashboard content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-darkBrown mb-6">Student Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium text-gray-700">Learning Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Overall Completion</span>
                    <span className="text-sm font-medium text-gray-700">68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                  
                  <div className="mt-4 space-y-2">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-500">Mathematics</span>
                        <span className="text-xs font-medium text-gray-700">75%</span>
                      </div>
                      <Progress value={75} className="h-1.5 bg-gray-100" />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-500">Science</span>
                        <span className="text-xs font-medium text-gray-700">60%</span>
                      </div>
                      <Progress value={60} className="h-1.5 bg-gray-100" />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-500">English</span>
                        <span className="text-xs font-medium text-gray-700">82%</span>
                      </div>
                      <Progress value={82} className="h-1.5 bg-gray-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium text-gray-700">Upcoming Assessments</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-2 mr-3">
                        <Calendar size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Mathematics Quiz</p>
                        <p className="text-xs text-gray-500">Tomorrow, 10:00 AM</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-2 mr-3">
                        <Calendar size={16} className="text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Science Project</p>
                        <p className="text-xs text-gray-500">May 15, 11:30 AM</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-2 mr-3">
                        <Calendar size={16} className="text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">English Essay</p>
                        <p className="text-xs text-gray-500">May 18, 09:15 AM</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button variant="outline" className="w-full text-sm" size="sm">
                    View All Assessments
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium text-gray-700">Learning Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-amber-100 rounded-full p-2 mr-3">
                        <Brain size={16} className="text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Algebra Fundamentals</p>
                        <p className="text-xs text-gray-500">Based on recent assessment</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-pink-100 rounded-full p-2 mr-3">
                        <BookOpen size={16} className="text-pink-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Reading Comprehension</p>
                        <p className="text-xs text-gray-500">Recommended by your teacher</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-indigo-100 rounded-full p-2 mr-3">
                        <Timer size={16} className="text-indigo-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Time Management Workshop</p>
                        <p className="text-xs text-gray-500">Suggested for your profile</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button variant="outline" className="w-full text-sm" size="sm">
                    View All Recommendations
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Practice Assessment</CardTitle>
                  <CardDescription>
                    Take this practice quiz to help us understand your learning style
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <QuizSystem
                    title="Sample Learning Style Quiz"
                    description="This quiz will help us understand your learning patterns"
                    questions={quizQuestions}
                    onComplete={handleQuizComplete}
                    showResults={true}
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>
                    Your learning journey over the past week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                        <CheckCircle size={16} className="text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Completed "Introduction to Fractions" lesson</p>
                        <p className="text-xs text-gray-500">Today, 9:30 AM</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-2 mr-3 mt-1">
                        <Award size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Earned "Math Whiz" badge</p>
                        <p className="text-xs text-gray-500">Yesterday, 2:15 PM</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-2 mr-3 mt-1">
                        <Clock size={16} className="text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Spent 45 minutes on Science module</p>
                        <p className="text-xs text-gray-500">Yesterday, 10:45 AM</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-amber-100 rounded-full p-2 mr-3 mt-1">
                        <ArrowUpRight size={16} className="text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Improved score on "Reading Comprehension"</p>
                        <p className="text-xs text-gray-500">May 10, 3:20 PM</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button variant="outline" className="w-full text-sm" size="sm">
                    View All Activities
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
