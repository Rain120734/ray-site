"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const photos = [
  { src: "https://lh3.googleusercontent.com/d/1PFXLHPuaWEsu670jVIYExMgbh5oJqGWS", title: "Moment 01" },
  { src: "https://lh3.googleusercontent.com/d/1TngXAsvZPKWbpEFFazNWpcHPtXmCyLlB", title: "Moment 02" },
  { src: "https://lh3.googleusercontent.com/d/1erXV05G6f6R_G-DvYxJ0GbQvKxjclDgS", title: "Moment 03" },
  { src: "https://lh3.googleusercontent.com/d/1yQiQ4J5UGXg21n0Izp4GUg4jqPMNidqB", title: "Moment 04" },
  { src: "https://lh3.googleusercontent.com/d/1rYENCW5Am9ww_NG-TtOxi-RZUG7S_hTg", title: "Moment 05" },
  { src: "https://lh3.googleusercontent.com/d/1ocdPpny3K3RACZgGsndfu8M3j3srmQsY", title: "Moment 06" },
  { src: "https://lh3.googleusercontent.com/d/1WkaDkwFbzbwDTJL7ncVB6auAzh7VK9BA", title: "Moment 07" },
  { src: "https://lh3.googleusercontent.com/d/1Mivf5yf6FTDwofafSY2x5ndT3RJplE5o", title: "Moment 08" },
  { src: "https://lh3.googleusercontent.com/d/1VzcEDndh-49_4MsVgVbu3Be6mYiv7JdM", title: "Moment 09" },
  { src: "https://lh3.googleusercontent.com/d/1XKNSGvIGpB6U7bJgyy9DXUglmQL37A11", title: "Moment 10" },
  { src: "https://lh3.googleusercontent.com/d/1fs-xCc-4XTHCxgQi6Emrv3uWp38zEzgT", title: "Moment 11" },
  { src: "https://lh3.googleusercontent.com/d/1ECo8-h6Vn2nsjrwWXQC2xTTYk0xKILf5", title: "Moment 12" },
  { src: "https://lh3.googleusercontent.com/d/1ZfWig1wDj4TBlliztT-zoe4OsGq4EkIG", title: "Moment 13" },
  { src: "https://lh3.googleusercontent.com/d/1wxcyzCEc5P0DIX23YlpNiHWz82d7g1id", title: "Moment 14" },
  { src: "https://lh3.googleusercontent.com/d/1F6Mcc3_mhcOJYdyqKd6r8Fwng854Rnap", title: "Moment 15" },
  { src: "https://lh3.googleusercontent.com/d/1EERgHbFbBP4IQ6oTWqBzwCkc-alHIdXN", title: "Moment 16" },
  { src: "https://lh3.googleusercontent.com/d/1i8yntimatsuiXg-6DK_Gri6S07xJkXSP", title: "Moment 17" },
  { src: "https://lh3.googleusercontent.com/d/1c-ZKlwdZ-RSglbrM0Qteelt8Q_lDL_YU", title: "Moment 18" },
  { src: "https://lh3.googleusercontent.com/d/1NSkkrsSKHeCBDvaYUha7WoaHrluUG8ru", title: "Moment 19" },
  { src: "https://lh3.googleusercontent.com/d/1xcM-6wz15d0L3pdMQ4pAp6RUkr8p5LR-", title: "Moment 20" },
  { src: "https://lh3.googleusercontent.com/d/1HhtpGLf2EOWPMaLaambnSk0D9w-MaHNy", title: "Moment 21" },
  { src: "https://lh3.googleusercontent.com/d/1eGWvhPp_M4WdsBgmqJoCIJxjxvGFdW5Y", title: "Moment 22" },
  { src: "https://lh3.googleusercontent.com/d/14B02d66QWv8h1FW9c9ZOTHACGx06g-pp", title: "Moment 23" },
  { src: "https://lh3.googleusercontent.com/d/1ehNCB1KBC3_-O3jFlE6oK_qFViFThALT", title: "Moment 24" },
  { src: "https://lh3.googleusercontent.com/d/17S_BLVzrcw14z5GTjNrCXHUuZ9rgCNAB", title: "Moment 25" },
  { src: "https://lh3.googleusercontent.com/d/1wc4Ab9RkTjPJZTzEFMJT9bt6dI2YTE_v", title: "Moment 26" },
  { src: "https://lh3.googleusercontent.com/d/1RcQREItAl3kX5qG8yAzQGVZVWkNje5OT", title: "Moment 27" },
  { src: "https://lh3.googleusercontent.com/d/1wFNqn3GdJIPqwUqYAWdBPd3Q6qStejuz", title: "Moment 28" },
  { src: "https://lh3.googleusercontent.com/d/1XHHmVUphfrwTg4U7G4dRWklyTihBLT0K", title: "Moment 29" },
  { src: "https://lh3.googleusercontent.com/d/1QaUEtcWoQygqnoWoocEd0Vo7dIUTXwkv", title: "Moment 30" },
  { src: "https://lh3.googleusercontent.com/d/1Zi4eh0exfhFKSjCAb6jTyCB061VtraBv", title: "Moment 31" },
  { src: "https://lh3.googleusercontent.com/d/1jxO-HED11hatPDq_-Q_Rxk_BzJZIFkBF", title: "Moment 32" },
  { src: "https://lh3.googleusercontent.com/d/1MDzXK0oiKDo7sVG9zcv0xuxp-hrZTtic", title: "Moment 33" },
  { src: "https://lh3.googleusercontent.com/d/17veWUtFe1cifCMaDkEotgjriXGVdMjQJ", title: "Moment 34" },
  { src: "https://lh3.googleusercontent.com/d/10OTRxTS4E9mJHMhBGp37OZ0nK7bBh3UW", title: "Moment 35" },
  { src: "https://lh3.googleusercontent.com/d/1rVepMrOr3PWjRZlE4siZbL8A4lpAL1tH", title: "Moment 36" },
  { src: "https://lh3.googleusercontent.com/d/1OBXq61L8FWBWyZaR_8pwN3aESfQSFoyk", title: "Moment 37" },
  { src: "https://lh3.googleusercontent.com/d/1HGz8vufeS4S-UY8s2MPEn5W8of4jdT_Q", title: "Moment 38" },
  { src: "https://lh3.googleusercontent.com/d/130W72ZzAcb-SUFEiLdQN29QqZvjSQ-Xo", title: "Moment 39" },
  { src: "https://lh3.googleusercontent.com/d/1XFMU6sI5-3OYDcAW0NRYkNSdlOGgc8qi", title: "Moment 40" },
  { src: "https://lh3.googleusercontent.com/d/13fapEu8HXhary-Sm3cxNKNW5mZRdTa1K", title: "Moment 41" },
  { src: "https://lh3.googleusercontent.com/d/1D0B23zNCGK2yQfnx_qqS03E9aNQOpYDC", title: "Moment 42" },
  { src: "https://lh3.googleusercontent.com/d/1dTO4HeuLqWpsv7lV9E26aDE6M0eFg1R3", title: "Moment 43" },
  { src: "https://lh3.googleusercontent.com/d/1FzBhzTD6oQH9nfO7sueGyIVYjfmt3mKS", title: "Moment 44" },
  { src: "https://lh3.googleusercontent.com/d/1F3eu--p6k0WOlpGwH48yFU-RFicFar9a", title: "Moment 45" },
  { src: "https://lh3.googleusercontent.com/d/1bgeK8edK3P9NzAHtCJh5uYzz2T1DHtXp", title: "Moment 46" },
  { src: "https://lh3.googleusercontent.com/d/1AOGi5Z9eoTnSqx698xVpONlAUq4wE9Cj", title: "Moment 47" },
  { src: "https://lh3.googleusercontent.com/d/1yO2TNA7GpueBwWSqnvi42uOyBlaYba2T", title: "Moment 48" },
  { src: "https://lh3.googleusercontent.com/d/1n3ATINtcsuWUZVZ3RPZbANH1AIBUDRRp", title: "Moment 49" },
  { src: "https://lh3.googleusercontent.com/d/1mt0NXBKVifBKa5SQ_u5JMaRcdKe0NHNu", title: "Moment 50" },
  { src: "https://lh3.googleusercontent.com/d/1kQVeQPToK8QKm9kEHMwu5yaNf3mgAzXg", title: "Moment 51" },
  { src: "https://lh3.googleusercontent.com/d/16-XGL5VzJrt4Jnb-INLAyDWlGpX12MMd", title: "Moment 52" },
  { src: "https://lh3.googleusercontent.com/d/1uO-fkGNnWpkbGk0zKunWNAdwe1tVlXdm", title: "Moment 53" },
  { src: "https://lh3.googleusercontent.com/d/1rCAjwgqCMNE7td0DXBMP9GJQj4PH8-tu", title: "Moment 54" },
  { src: "https://lh3.googleusercontent.com/d/16XjAhyYJXPJTgech0H0OQqQirVzIT2Xh", title: "Moment 55" },
  { src: "https://lh3.googleusercontent.com/d/1zAfmVpi0Sv3ofLp6LCKWYaq75HIaumOK", title: "Moment 56" },
  { src: "https://lh3.googleusercontent.com/d/1hQx0XC3aTBaxQJ5JRatIGfoCrme6I9SK", title: "Moment 57" },
  { src: "https://lh3.googleusercontent.com/d/1m7geA_SQS0sheKisujYxABc5tC-vak4N", title: "Moment 58" },
  { src: "https://lh3.googleusercontent.com/d/19HRm3yfbe76EEPzda4nqacsnKRBjf4wi", title: "Moment 59" },
  { src: "https://lh3.googleusercontent.com/d/1ugI86TZfBcB92FmCXhraiOyxgxUJWhvZ", title: "Moment 60" },
  { src: "https://lh3.googleusercontent.com/d/1CCm2SBDMdF7KXLLNHMKCTfOVntjKt5pf", title: "Moment 61" },
  { src: "https://lh3.googleusercontent.com/d/1jSVhrK4MwWa9SMNtS7Xgb6Cd-tdfJYXr", title: "Moment 62" },
  { src: "https://lh3.googleusercontent.com/d/16OYoIBfDwA_oh1DGhAqar6KLbwxSkaHV", title: "Moment 63" },
  { src: "https://lh3.googleusercontent.com/d/1HifCsD3lIURa43UkUofy8FCx3mHAGi1z", title: "Moment 64" },
  { src: "https://lh3.googleusercontent.com/d/1ldr-rWW_jjIAmmsG6O4kJVKQ8riyvhD3", title: "Moment 65" },
  { src: "https://lh3.googleusercontent.com/d/18QjiGLD0JOg_gI4UKqK5M9sLDa3RhTlc", title: "Moment 66" },
  { src: "https://lh3.googleusercontent.com/d/1HyMltHDANpFku9VKx5ellxuW3iT2Qu8P", title: "Moment 67" },
  { src: "https://lh3.googleusercontent.com/d/1OupXfw4eucqWJXuk_H3W0V9G5ARK852o", title: "Moment 68" },
  { src: "https://lh3.googleusercontent.com/d/1Ga7m8IRA7f6TgQ4T7bTdLUJ9PjaRBOFP", title: "Moment 69" },
  { src: "https://lh3.googleusercontent.com/d/1i8K3jL-TUnCMRV8XtxrTrOJyfnDZorJU", title: "Moment 70" },
  { src: "https://lh3.googleusercontent.com/d/1pnUohQei1ZlyUwLWSc3-JuYEPHvymr9J", title: "Moment 71" },
  { src: "https://lh3.googleusercontent.com/d/1OH2nxPdwR_WGjQkemGS4TmaXrHwQ4e5A", title: "Moment 72" },
  { src: "https://lh3.googleusercontent.com/d/1t7l5Inj2muyvXVUVGBh7yXeTtKrKewF-", title: "Moment 73" },
  { src: "https://lh3.googleusercontent.com/d/1JHjkF8oJCKu7aipNWYRqUKTtpxJyIUU6", title: "Moment 74" }
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
