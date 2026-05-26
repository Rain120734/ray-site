'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BlogPost } from '@/lib/blog';

export default function BlogSidebar({ posts }: { posts: BlogPost[] }) {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 lg:border-r lg:border-gray-800 lg:pr-8 flex flex-col lg:h-[calc(100vh-120px)] lg:sticky lg:top-24 mt-2">
      <div className="flex items-center justify-between mb-6 px-2">
        <h2 className="text-xl font-bold text-white tracking-widest uppercase text-sm">All Journals</h2>
        <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-md">{posts.length}</span>
      </div>
      
      <div className="flex lg:flex-col lg:space-y-3 overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden space-x-3 lg:space-x-0 pb-4 lg:pb-12 scrollbar-none">
        {posts.map((post) => {
          const isActive = pathname.includes(`/blog/${post.id}`);
          return (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className={`block flex-shrink-0 w-64 lg:w-full p-4 rounded-xl transition-all border ${
                isActive 
                  ? 'bg-cyan-950/20 border-cyan-500/50 text-white shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                  : 'bg-gray-900 border-transparent hover:border-white/10 hover:bg-gray-800 text-gray-400 hover:text-gray-200'
              }`}
            >
              <div className="text-xs text-cyan-500 font-mono mb-2">{post.pubDate}</div>
              <h3 className="text-base font-medium leading-relaxed line-clamp-3">{post.title}</h3>
            </Link>
          )
        })}
      </div>
    </aside>
  );
}
