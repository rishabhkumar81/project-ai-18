
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { cn } from "@/lib/utils";

type GoBackButtonProps = {
  variant?: "default" | "outline" | "ghost";
  className?: string;
};

const GoBackButton = ({ variant = "outline", className }: GoBackButtonProps) => {
  return (
    <Button 
      asChild 
      variant={variant} 
      className={cn("gap-1", className)}
      aria-label="Go back to home page"
    >
      <Link to="/">
        <ArrowLeft size={18} />
        <span>Back to Home</span>
      </Link>
    </Button>
  );
};

export default GoBackButton;
