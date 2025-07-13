import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  type?: 'full' | 'icon';
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-16 h-8',
  md: 'w-24 h-12',
  lg: 'w-64 h-48'
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src="/decisionLogo.png"
        alt="Decision Spaak Logo"
        className="object-contain w-full h-auto"
      />
    </div>
  );
};


export default Logo;
