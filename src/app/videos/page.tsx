"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type VideoItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  category: string;
  duration: string;
  image: string;
};

const videos: VideoItem[] = [
  {
    id: "11EQmMm17pUNste46r_hwZwhQ9paujczE",
    title: "Episode 01:《TO CARRY IT ALL》",
    subtitle: "Season Highlights / 年度精華",
    description: "",
    category: "Season Documentary / 年度紀錄片",
    duration: "Season Highlights / 年度精華",
    date: "2026.02",
    image: "/images/media_thumb_ep1.png",
  },
  {
    id: "1PmHvE1_bU9qKwNLn7h8HZEGlxJOkJGCA",
    title: "Episode 02:《HOLDING IT TOGETHER》",
    subtitle: "Tournament Record / 賽事紀錄",
    description: "",
    category: "Championship / 選拔賽",
    duration: "Tournament Record / 賽事紀錄",
    date: "2026.02",
    image: "/images/media_thumb_ep2.png",
  },
  {
    id: "1NwPk3ZJuIAYZL3AX91N6Oe4zU2dfZvtC",
    title: "Episode 03:《MORE THAN A GAME》",
    subtitle: "Overseas Tour / 海外遠征",
    description: "",
    category: "Championship / 錦標賽",
    duration: "Overseas Tour / 海外遠征",
    date: "2026.03",
    image: "/images/media_thumb_ep3.png",
  },
];

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeVideo]);

  return (
    <main className="max-w-6xl mx-auto px-6 py-24 min-h-screen">
      <div className="text-center mb-16 relative overflow-hidden pt-8">
        <span className="inline-block text-[0.8rem] font-bold text-cyan-400 bg-cyan-950/30 px-5 py-2 rounded border border-cyan-500/20 tracking-[3px] uppercase mb-4 font-mono">
          Featured Documentaries / 精選紀錄片
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-wide drop-shadow-2xl">
          Videos
        </h1>
        <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto leading-relaxed">
          Watch FTC robotics team VIS Mars #32760 match documentaries, highlights, and behind-the-scenes logs.
        </p>
      </div>

      {/* Video Grid */}
      <section className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-gray-900 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(6,182,212,0.05),inset_0_0_20px_rgba(6,182,212,0.01)] group flex flex-col h-full cursor-pointer"
              onClick={() => setActiveVideo(video)}
            >
              {/* Thumbnail Container */}
              <div className="w-full aspect-video relative flex items-center justify-center overflow-hidden bg-black">
                {/* Tech grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none z-10" />
                
                {/* Image Thumbnail */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Visual Glow */}
                <div className="absolute w-32 h-32 rounded-full bg-cyan-500/10 filter blur-xl group-hover:scale-150 transition-transform duration-700 pointer-events-none z-10" />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-gray-950/90 text-cyan-400 text-[0.65rem] font-bold px-3 py-1 rounded border border-cyan-500/20 uppercase tracking-[1px] font-mono z-20">
                  {video.category}
                </span>

                {/* Play Button Icon */}
                <div className="w-16 h-16 rounded-full bg-gray-950/90 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-gray-950 group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] z-20 relative">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5V19L19 12L8 5Z" />
                  </svg>
                </div>

                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-80 group-hover:opacity-40 transition-opacity duration-500 z-10" />
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-cyan-400 text-xs font-mono font-bold tracking-[1px]">
                      {video.duration}
                    </span>
                    <span className="text-gray-500 text-xs font-mono font-bold">{video.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-medium mb-3">{video.subtitle}</p>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {video.description}
                  </p>
                </div>

                {/* Bottom Trigger */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-white font-bold text-xs uppercase tracking-[1px] group-hover:text-cyan-400 transition-colors duration-300">
                  <span>Play Episode / 播放劇集</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox / Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 w-full h-full bg-black/95 z-[2000] flex items-center justify-center p-4 md:p-8 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="w-full max-w-4xl relative"
            onClick={(e) => e.stopPropagation()} // Stop propagation to prevent closing
          >
            {/* Modal Title Banner */}
            <div className="flex justify-between items-center mb-4 text-white">
              <div>
                <span className="text-cyan-400 text-xs font-mono tracking-[2px] uppercase">
                  {activeVideo.category}
                </span>
                <h3 className="text-xl font-bold">{activeVideo.title}</h3>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="text-gray-400 hover:text-cyan-400 bg-transparent border-none cursor-pointer flex items-center gap-1.5 p-2 transition-colors focus:outline-none"
              >
                <span className="text-xs uppercase tracking-[2px] hidden sm:inline">Close / 關閉</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Video Container (aspect-video) */}
            <div className="w-full aspect-video bg-black rounded-xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.25)] relative">
              <iframe
                src={`https://drive.google.com/file/d/${activeVideo.id}/preview`}
                className="absolute inset-0 w-full h-full border-none"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>

            {/* Hint below video */}
            <p className="text-center text-gray-500 text-xs mt-4">
              提示：若無法播放影片，請確保您的 Google 帳戶已登入，或檢查瀏覽器隱私設定。
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
