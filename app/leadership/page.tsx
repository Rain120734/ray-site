
const activities = [
  { icon: '🤖', title: 'FTC Team Captain', org: 'VIS Mars #32760',
    period: '2024 - Present',
    desc: 'Led a 10-member team in designing and building competition robots.' },
  { icon: '🔬', title: 'Science Fair', org: 'VIS Science Department',
    period: '2023 - 2024',
    desc: 'Conducted research on renewable energy solutions.' },
]

export default function Leadership() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-12">Leadership</h1>
      <div className="space-y-6">
        {activities.map(a => (
          <div key={a.title} className="flex gap-5 p-6 bg-gray-900 rounded-xl
                                       border border-white/5">
            <span className="text-4xl">{a.icon}</span>
            <div>
              <h3 className="text-lg font-semibold text-white">{a.title}</h3>
              <p className="text-cyan-400 text-sm">{a.org} · {a.period}</p>
              <p className="text-gray-400 mt-2">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

