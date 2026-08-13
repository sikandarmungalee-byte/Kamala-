import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-14 w-14" }) => {
  return (
    <svg 
      viewBox="0 0 300 300" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&display=swap');`}
        </style>
      </defs>
      <circle cx="150" cy="150" r="138" stroke="currentColor" strokeWidth="3" />
      <circle cx="150" cy="150" r="128" stroke="currentColor" strokeWidth="1.5" />
      <path 
        d="M150 55 C147 65 145 78 145 88 C145 95 147 100 150 103 C153 100 155 95 155 88 C155 78 153 65 150 55Z" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      <path 
        d="M150 103 C144 96 136 90 128 89 C127 96 132 102 150 103Z" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      <path 
        d="M150 103 C156 96 164 90 172 89 C173 96 168 102 150 103Z" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      <path 
        d="M150 103 C138 92 122 86 110 87 C110 96 126 104 150 103Z" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      <path 
        d="M150 103 C162 92 178 86 190 87 C190 96 174 104 150 103Z" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      <path 
        d="M150 103 C150 106 150 110 150 113" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
      <text 
        x="150" 
        y="175" 
        textAnchor="middle" 
        fontFamily="'Dancing Script', cursive" 
        fontSize="52" 
        fontWeight="500" 
        fill="currentColor"
      >
        Kamala
      </text>
      <text 
        x="150" 
        y="230" 
        textAnchor="middle" 
        fontFamily="'Dancing Script', cursive" 
        fontSize="48" 
        fontWeight="500" 
        fill="currentColor"
      >
        Wellness
      </text>
    </svg>
  );
};
