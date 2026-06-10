export default function Notes() {
  const notes = [
    {
      id: 1,
      date: '2026-05-28',
      title: 'FTC 賽季準備筆記 — 機構迭代與自動化控制',
      tags: ['FTC', 'Robotics', 'Java'],
      excerpt: '今天我們測試了新的雙馬達底盤，修正了左右行進時的慣性誤差。下午撰寫並調校了基於陀螺儀的自動化導航程式，目標是在前 30 秒自動化階段精準地夾取樣本並放置到籃架中。',
    },
    {
      id: 2,
      date: '2026-06-02',
      title: 'React 狀態管理深剖：Client Component 渲染機制',
      tags: ['React', 'Next.js', 'Web'],
      excerpt: '深入研究 useState 與 useEffect 的更新週期。學習到狀態更新是非同步的，如果要在狀態改變後立即處理副作用，應在 useEffect 的依賴陣列中指定該狀態，並確保適時清理 EventListener 以避免記憶體洩漏。',
    },
    {
      id: 3,
      date: '2026-05-24',
      title: 'iGEM Wet Lab 實驗手記 — DNA 載體構建與轉化驗證',
      tags: ['iGEM', 'Biology', 'Research'],
      excerpt: '本次實驗重點在於利用 EcoRI 與 PstI 雙酶切技術對質體進行切割，並使用 T4 DNA 連接酶將目的片段拼接到載體中。轉化至大腸桿菌 DH5α 後，成功在含有抗生素的瓊脂平板上篩選出轉化菌株。',
    },
    {
      id: 4,
      date: '2026-05-15',
      title: 'Pygame 遊戲中的物理引擎與碰撞偵測機制',
      tags: ['Python', 'Pygame', 'Game'],
      excerpt: '在開發太空避障小遊戲時，為了提升操作打擊感，重構了基於 AABB (軸對齊包圍盒) 的碰撞演算法。此外，加入模擬重力加速度 and 彈性碰撞的簡單物理公式，使小行星漂浮與軌道運作更加逼真。',
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-white mb-2">Notes</h1>
      <p className="text-gray-400 mb-12">My journals, competition notes, and learning logs.</p>
      
      <div className="space-y-8 max-w-4xl">
        {notes.map(note => (
          <article 
            key={note.id}
            className="p-8 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-cyan-500/20 hover:shadow-[0_10px_30px_rgba(34,211,238,0.05)] transition-all duration-300 flex flex-col md:flex-row gap-6 md:items-start"
          >
            {/* Date column */}
            <div className="md:w-32 flex-shrink-0">
              <time className="text-sm font-mono text-cyan-500/80 font-bold bg-cyan-500/5 border border-cyan-500/10 px-3 py-1.5 rounded-lg inline-block md:block text-center">
                {note.date}
              </time>
            </div>
            
            {/* Content column */}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white hover:text-cyan-400 transition-colors duration-200">
                {note.title}
              </h2>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {note.tags.map(tag => (
                  <span 
                    key={tag}
                    className="text-xs px-2.5 py-0.5 rounded-full bg-gray-800 text-gray-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Excerpt */}
              <p className="text-gray-400 mt-4 leading-relaxed text-sm md:text-base">
                {note.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
