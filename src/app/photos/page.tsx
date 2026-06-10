"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const photos = [
  { src: "/images/IMG_0098.JPG", title: "Moment 01" },
  { src: "/images/IMG_0100.JPG", title: "Moment 02" },
  { src: "/images/IMG_0224.JPG", title: "Moment 03" },
  { src: "/images/IMG_0227.JPG", title: "Moment 04" },
  { src: "/images/IMG_0267.JPG", title: "Moment 05" },
  { src: "/images/IMG_0568.JPG", title: "Moment 06" },
  { src: "/images/IMG_0569.JPG", title: "Moment 07" },
  { src: "/images/IMG_0571.JPG", title: "Moment 08" },
  { src: "/images/IMG_0628.JPG", title: "Moment 09" },
  { src: "/images/IMG_0635.JPG", title: "Moment 10" },
  { src: "/images/IMG_0672.JPG", title: "Moment 11" },
  { src: "/images/IMG_0833.JPG", title: "Moment 12" },
  { src: "/images/IMG_0861.JPG", title: "Moment 13" },
  { src: "/images/IMG_0943.JPG", title: "Moment 14" },
  { src: "/images/IMG_0944.JPG", title: "Moment 15" },
  { src: "/images/IMG_1122.JPG", title: "Moment 16" },
  { src: "/images/IMG_1202.JPG", title: "Moment 17" },
  { src: "/images/IMG_1270.PNG", title: "Moment 18" },
  { src: "/images/IMG_1403.JPG", title: "Moment 19" },
  { src: "/images/IMG_1472.JPG", title: "Moment 20" },
  { src: "/images/IMG_1527.JPG", title: "Moment 21" },
  { src: "/images/IMG_1690.JPG", title: "Moment 22" },
  { src: "/images/IMG_1765.JPG", title: "Moment 23" },
  { src: "/images/IMG_1800.JPG", title: "Moment 24" },
  { src: "/images/IMG_1807.JPG", title: "Moment 25" },
  { src: "/images/IMG_1808.JPG", title: "Moment 26" },
  { src: "/images/IMG_1813.PNG", title: "Moment 27" },
  { src: "/images/IMG_1831.JPG", title: "Moment 28" },
  { src: "/images/IMG_1935.PNG", title: "Moment 29" },
  { src: "/images/IMG_2013.JPG", title: "Moment 30" },
  { src: "/images/IMG_2090.JPG", title: "Moment 31" },
  { src: "/images/IMG_2098.JPG", title: "Moment 32" },
  { src: "/images/IMG_2099.JPG", title: "Moment 33" },
  { src: "/images/IMG_2235.JPG", title: "Moment 34" },
  { src: "/images/IMG_2303.JPG", title: "Moment 35" },
  { src: "/images/IMG_2304.JPG", title: "Moment 36" },
  { src: "/images/IMG_2305.JPG", title: "Moment 37" },
  { src: "/images/IMG_2450.JPG", title: "Moment 38" },
  { src: "/images/IMG_2526.JPG", title: "Moment 39" },
  { src: "/images/IMG_7060.JPG", title: "Moment 40" },
  { src: "/images/IMG_7118.JPG", title: "Moment 41" },
  { src: "/images/IMG_7191.JPG", title: "Moment 42" },
  { src: "/images/IMG_7194.JPG", title: "Moment 43" },
  { src: "/images/IMG_7266.JPG", title: "Moment 44" },
  { src: "/images/IMG_7307.JPG", title: "Moment 45" },
  { src: "/images/IMG_7352.JPG", title: "Moment 46" },
  { src: "/images/IMG_7912.JPG", title: "Moment 47" },
  { src: "/images/IMG_8024.JPG", title: "Moment 48" },
  { src: "/images/IMG_8094.JPG", title: "Moment 49" },
  { src: "/images/IMG_8358.JPG", title: "Moment 50" },
  { src: "/images/IMG_8367.JPG", title: "Moment 51" },
  { src: "/images/IMG_8380.JPG", title: "Moment 52" },
  { src: "/images/IMG_8382.JPG", title: "Moment 53" },
  { src: "/images/IMG_8435.JPG", title: "Moment 54" },
  { src: "/images/IMG_8444.JPG", title: "Moment 55" },
  { src: "/images/IMG_8714.JPG", title: "Moment 56" },
  { src: "/images/IMG_8738.JPG", title: "Moment 57" },
  { src: "/images/IMG_8740.JPG", title: "Moment 58" },
  { src: "/images/IMG_9088.JPG", title: "Moment 59" },
  { src: "/images/IMG_9684.JPG", title: "Moment 60" },
  { src: "/images/IMG_9758.JPG", title: "Moment 61" },
  { src: "/images/IMG_9763.JPG", title: "Moment 62" },
  { src: "/images/IMG_9893.JPG", title: "Moment 63" },
  { src: "/images/P1011168.JPG", title: "Moment 64" },
  { src: "/images/P1011323.JPG", title: "Moment 65" },
  { src: "/images/P1011326.JPG", title: "Moment 66" },
  { src: "/images/P1011367.JPG", title: "Moment 67" },
  { src: "/images/P1011766.JPG", title: "Moment 68" },
  { src: "/images/P1011776.JPG", title: "Moment 69" },
  { src: "/images/P1022223.JPG", title: "Moment 70" },
  { src: "/images/P1022234.JPG", title: "Moment 71" },
  { src: "/images/P1022253.JPG", title: "Moment 72" },
  { src: "/images/P1022262.JPG", title: "Moment 73" },
  { src: "/images/P1022269.JPG", title: "Moment 74" }
];

export default function Photos() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activePhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activePhotoIndex]);

  // Handle keyboard navigation inside the lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhotoIndex(null);
      } else if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex]);

  return (
    <main className="max-w-6xl mx-auto px-6 py-24 min-h-screen">
      <div className="text-center mb-16 pt-8">
        <span className="inline-block text-[0.8rem] font-bold text-cyan-400 bg-cyan-950/30 px-5 py-2 rounded border border-cyan-500/20 tracking-[3px] uppercase mb-4 font-mono">
          Visual Chronicles / 影像記錄
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-wide drop-shadow-2xl">
          Photos
        </h1>
        <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto leading-relaxed">
          Moments from robotics design, synthetic biology labs, and campus life.
        </p>
      </div>

      {/* Grid Layout */}
      <section className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 border border-white/5 hover:border-cyan-500/30 shadow-lg relative group cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(6,182,212,0.05)]"
              onClick={() => setActivePhotoIndex(index)}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-w-640px) 100vw, (max-w-768px) 50vw, (max-w-1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Blur Overlay & Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10">
                <div className="text-left">
                  <span className="text-[0.65rem] text-cyan-400 font-mono tracking-[1px] uppercase block mb-1">
                    Photo {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white text-xs font-semibold tracking-wide">
                    {photo.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 w-full h-full bg-black/95 z-[2000] flex items-center justify-center p-4 md:p-8 backdrop-blur-md animate-fade-in"
          onClick={() => setActivePhotoIndex(null)}
        >
          <div
            className="w-full max-w-4xl h-full flex flex-col justify-center relative"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inner container
          >
            {/* Top Bar Info */}
            <div className="flex justify-between items-center text-white mb-4 z-50">
              <div>
                <span className="text-cyan-400 text-xs font-mono tracking-[2px] uppercase">
                  Photo {String(activePhotoIndex + 1).padStart(2, "0")} of {photos.length}
                </span>
                <h3 className="text-lg font-bold">{photos[activePhotoIndex].title}</h3>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setActivePhotoIndex(null)}
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

            {/* Main Image Viewport */}
            <div className="relative flex-1 w-full max-h-[70vh] bg-black/50 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center">
              <Image
                src={photos[activePhotoIndex].src}
                alt={photos[activePhotoIndex].title}
                fill
                sizes="(max-w-1024px) 100vw, 1200px"
                className="object-contain"
                priority
              />

              {/* Navigation Left Arrow */}
              <button
                onClick={() =>
                  setActivePhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1))
                }
                className="absolute left-4 w-12 h-12 rounded-full bg-black/60 hover:bg-cyan-950/40 border border-white/10 hover:border-cyan-500/50 text-gray-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 focus:outline-none z-50 shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>

              {/* Navigation Right Arrow */}
              <button
                onClick={() =>
                  setActivePhotoIndex((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0))
                }
                className="absolute right-4 w-12 h-12 rounded-full bg-black/60 hover:bg-cyan-950/40 border border-white/10 hover:border-cyan-500/50 text-gray-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 focus:outline-none z-50 shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>

            {/* Instruction Hint */}
            <p className="text-center text-gray-500 text-xs mt-4">
              使用左右方向鍵 (← / →) 或兩側按鈕進行切換，按 ESC 或點擊背景關閉。
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
