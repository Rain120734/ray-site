import Card from "@/components/Card";
import MarsBackground from "@/components/MarsBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background layer inserted directly inside main context. Fixed coordinates managed internally. */}
      <MarsBackground />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl">
            Hi, I&apos;m <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">Ray</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300/80 mb-8 font-light tracking-wide uppercase drop-shadow-md">
            Coder · Robotics Enthusiast
          </p>
        </div>
      </section>

      {/* Explore Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24 pt-12">
        <div className="backdrop-blur-sm bg-black/20 p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-white mb-10 text-center uppercase">Explore the Command Center</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 hover:*:shadow-cyan-900/20">
            <Card
              icon="💻"
              title="Portfolio"
              description="Programs, robots, and science projects"
              href="/portfolio"
            />
            <Card
              icon="📓"
              title="Notes"
              description="Robotics and competition journals"
              href="/notes"
            />
            <Card
              icon="🏆"
              title="Leadership"
              description="Teams and competitions"
              href="/leadership"
            />
            <Card
              icon="📝"
              title="Blog"
              description="Thoughts and articles"
              href="/blog"
            />
            <Card
              icon="📷"
              title="Photos"
              description="My photo gallery"
              href="/photos"
            />
            <Card
              icon="🎬"
              title="Videos"
              description="My video collection"
              href="/videos"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
