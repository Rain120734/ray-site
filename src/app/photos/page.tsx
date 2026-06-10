"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const photos = [
  { src: "/images/img_2099.jpg", title: "FTC Robot & Code" },
  { src: "/images/img_2235.jpg", title: "Mecanum Chassis Build" },
  { src: "/images/img_2303.jpg", title: "iGEM Lab Preparation" },
  { src: "/images/img_2304.jpg", title: "Transformation Day" },
  { src: "/images/img_2305.jpg", title: "Culture Media" },
  { src: "/images/img_2450.jpg", title: "Robot Mechanism Details" },
  { src: "/images/img_2526.jpg", title: "Aluminum CNC Plate" },
  { src: "/images/img_7060.jpg", title: "Fuhsing/VIS School Journal" },
  { src: "/images/img_7118.jpg", title: "Science Lab Notes" },
  { src: "/images/img_7191.jpg", title: "Limelight Camera Test" },
  { src: "/images/img_7194.jpg", title: "Double Motor Odometry" },
  { src: "/images/img_7266.jpg", title: "Robot Assembly Pit" },
  { src: "/images/img_7307.jpg", title: "Launch Tower Prototypes" },
  { src: "/images/img_7352.jpg", title: "FTC Championship Kaohsiung" },
  { src: "/images/img_7912.jpg", title: "iGEM Agar Plate Art" },
  { src: "/images/img_8024.jpg", title: "Tea Assistant助教" },
  { src: "/images/img_8094.jpg", title: "VIS School Work" },
  { src: "/images/img_8358.jpg", title: "Holland/Turkey Championship准备" }
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
