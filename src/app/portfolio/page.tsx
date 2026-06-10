'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  { 
    id: 1, 
    title: 'FTC Competition', 
    description: '競賽機器人設計與程式開發',
    details: '我們設計並建造了一台 18x18 英吋的競賽機器人，使用 Java 寫自主程式與遙控程式，並在區域賽中榮獲最佳設計獎與聯盟亞軍。',
    tags: ['Robotics', 'Java', 'Leadership', 'Mechanics'], 
    image: '/images/robot.jpg' 
  },
  { 
    id: 2, 
    title: 'Personal Website', 
    description: '用 Next.js 打造的個人網站',
    details: '此個人網站基於 Next.js 16 + Tailwind CSS v4 打造，採用 App Router 檔案路由架構，包含 Portfolio、Notes、Blog 等頁面，並設計了深色毛玻璃特效與流暢滾動。',
    tags: ['Next.js', 'React', 'Tailwind', 'Web'], 
    image: '/images/website.png' 
  },
  { 
    id: 3, 
    title: 'iGEM Wet Lab', 
    description: 'iGEM 競賽的生物實驗設計與執行',
    details: '研究利用合成生物學技術解決環境污染問題。我負責濕實驗室（Wet Lab）的基因組裝、電泳實驗，並參與撰寫了團隊的 Wiki 展示網頁。',
    tags: ['Biology', 'Wet Lab', 'Research'], 
    image: '/images/iGEM.jpeg' 
  },
  { 
    id: 4, 
    title: 'Space Catcher', 
    description: 'Python + Pygame 小遊戲',
    details: '使用 Python 的 Pygame 庫開發的 2D 太空避障小遊戲，支援鍵盤控制與觸控模擬，具有自訂關卡難度、碰撞音效、以及本機最高得分紀錄系統。',
    tags: ['Python', 'Pygame', 'Game'], 
    image: '/images/game.jpg' 
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Get all unique tags for filtering buttons (mapping to All, Robotics, Web, Biology, Game)
  const filterCategories = ['All', 'Robotics', 'Web', 'Biology', 'Game'];

  const filteredProjects = projects.filter(p => {
    // Category match
    const categoryMatch = filter === 'All' || p.tags.some(t => t.toLowerCase() === filter.toLowerCase());
    
    // Search query match (title, description, or tags)
    const query = searchQuery.toLowerCase();
    const searchMatch = 
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tags.some(t => t.toLowerCase().includes(query));

    return categoryMatch && searchMatch;
  });

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-white mb-2">Portfolio</h1>
      <p className="text-gray-400 mb-12">Projects I&apos;ve built and contributed to.</p>

      {/* Filter and Search Bar Container */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-10">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5">
          {filterCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-gray-900 text-gray-400 border border-white/5 hover:border-white/10 hover:text-white'
              }`}
            >
              {cat === 'All' ? '全部' : cat}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="w-full md:w-80">
          <input
            type="text"
            placeholder="搜尋專案或技術..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 rounded-full bg-gray-900 border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
          />
        </div>
      </div>

      {/* Grid Layout */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(p => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-white/5 rounded-2xl bg-gray-900/10">
          <p className="text-gray-500 text-lg">沒有找到符合條件的專案。</p>
        </div>
      )}
    </main>
  );
}