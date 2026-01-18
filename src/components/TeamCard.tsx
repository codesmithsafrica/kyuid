'use client';

import { useState } from 'react';

interface TeamCardProps {
  userpic: string;
  name: string;
  quote: string;
  bio: string;
  role: string;
}

export default function TeamCard({ userpic, name, quote, bio, role }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Gradient overlay that appears on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Card content */}
        <div className="relative p-6">
          {/* User picture */}
          <div className="relative mb-4">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-pink-400">
              <img
                src={userpic}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className={`absolute inset-0 w-32 h-32 mx-auto rounded-full border-2 border-purple-300 transition-all duration-300 ${isHovered ? 'scale-110 opacity-50' : 'scale-100 opacity-0'}`} />
          </div>
          
          {/* Name and role */}
          <div className="text-center mb-3">
            <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
            <p style={{
        color: "#418FE2"
      }} className="text-sm  font-medium">{role}</p>
          </div>
          
          {/* Quote */}
          <div className="mb-4">
            <blockquote className="text-center text-gray-700 italic text-sm relative">
              <span className="absolute -top-2 -left-2 text-purple-300 text-2xl">"</span>
              {quote}
              <span className="absolute -bottom-2 -right-2 text-purple-300 text-2xl">"</span>
            </blockquote>
          </div>
          
          {/* Bio */}
          <div className="text-center">
            <p className="text-gray-600 text-sm leading-relaxed">
              {bio}
            </p>
          </div>
          
          {/* Hover effect elements */}
          <div className={`absolute top-4 right-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          </div>
          <div className={`absolute bottom-4 left-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
          </div>
        </div>
        
        {/* Bottom gradient accent */}
        <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>
    </div>
  );
}
