
import React, { useState } from 'react';
import { Star, PlayCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const ReviewCard = ({ title, image, review, author, role, videoUrl }: { 
  title: string;
  image: string;
  review: string;
  author: string;
  role: string;
  videoUrl: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const openVideo = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div 
        className="relative h-48 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-warmTaupe/70"
          style={{ zIndex: 1 }}
        ></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-top"
        />
        {isHovered && (
          <div 
            className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
            onClick={(e) => openVideo(e, videoUrl)}
          >
            <div className="bg-black/50 p-3 rounded-full transition-transform transform hover:scale-110">
              <PlayCircle className="w-12 h-12 text-white" />
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex mt-1">
            <Star className="fill-white text-white w-4 h-4" />
            <Star className="fill-white text-white w-4 h-4" />
            <Star className="fill-white text-white w-4 h-4" />
            <Star className="fill-white text-white w-4 h-4" />
            <Star className="fill-white text-white w-4 h-4" />
          </div>
        </div>
      </div>
      <CardContent className="flex-grow p-6">
        <p className="text-gray-700 mb-4 italic">"{review}"</p>
        <div className="mt-auto">
          <p className="font-semibold text-navyBlue">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const ReviewSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 heading-gradient">What People Say About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the teachers, parents, and students who have experienced the difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ReviewCard
            title="Teacher Review"
            image="/lovable-uploads/46f63a93-97ce-47a6-bfd7-0b06b27e4af7.png"
            review="This platform has completely transformed how I identify and support struggling students. The AI insights are remarkably accurate and save me hours of assessment time."
            author="Mr. James Peterson"
            role="High School Science Teacher"
            videoUrl="https://youtu.be/fbVRxYAFlv0"
          />
          
          <ReviewCard
            title="Parent Review"
            image="/lovable-uploads/55ba0c8a-2f02-4b86-8d72-1d22b9586ced.png"
            review="For the first time, my son is receiving the personalized attention he needs. His confidence has improved tremendously, and his grades have gone up significantly."
            author="Sarah Johnson"
            role="Parent of a 7th Grader"
            videoUrl="https://www.youtube.com/shorts/_FO_bdfRmBY?feature=share"
          />
          
          <ReviewCard
            title="Student Review"
            image="/lovable-uploads/280257a1-a65a-4de1-b6bb-03fc6b26ca4a.png"
            review="I used to struggle with math and felt too embarrassed to ask for help. The personalized learning modules helped me learn at my own pace without feeling judged."
            author="Alex Thompson"
            role="9th Grade Student"
            videoUrl="https://www.youtube.com/shorts/509kaeQo8eI?feature=share"
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
