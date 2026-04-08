import ProjectCard from '@/components/ProjectCard'

const projects = [
  { id: 1, title: 'FTC Robot', description: '競賽機器人設計與程式開發',
    tags: ['Robotics', 'Java'], image: '/images/robot.jpg' },
  { id: 2, title: 'Personal Website', description: '用 Next.js 打造的個人網站',
    tags: ['Next.js', 'React', 'Tailwind'], image: '/images/website.jpg' },
  { id: 3, title: 'Space Catcher', description: 'Python + Pygame 小遊戲',
    tags: ['Python', 'Pygame'], image: '/images/game.jpg' },
]

export default function Portfolio() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
      <p className="text-gray-400 mb-12">Projects I've built and contributed to.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.id} {...p} />)}
      </div>
    </main>
  )
}