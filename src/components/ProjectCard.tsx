'use client';

import { useState } from 'react';
import Image from 'next/image';

type ProjectProps = {
  title: string;
  description: string;
  details?: string;
  tags: string[];
  image: string;
}

export default function ProjectCard({ title, description, details, tags, image }: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-900 rounded-xl border border-white/5 overflow-hidden
                    hover:border-cyan-500/30 hover:-translate-y-1 transition-all flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover" 
        />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mt-1 flex-1">{description}</p>
        
        {/* Expandable Section */}
        {details && (
          <div className="mt-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 focus:outline-none cursor-pointer"
            >
              {isExpanded ? '收合詳細內容 ▲' : '查看詳細內容 ▼'}
            </button>
            
            {/* Detail content animation height container */}
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-sm text-gray-300 bg-black/30 p-3 rounded-lg border border-white/5 leading-relaxed">
                {details}
              </p>
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
          {tags.map(tag => (
            <span 
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
