import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I&apos;m <span className="text-cyan-400">Ray</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Builder · Coder · Robotics Enthusiast
          </p>
        </div>
      </section>

      {/* Explore Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold text-white mb-8">Explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </section>
    </main>
  );
}
