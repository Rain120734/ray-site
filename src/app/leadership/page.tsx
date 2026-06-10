
const activities = [
  { icon: '🤖', title: 'FTC Team Captain', org: 'VIS Mars #32760',
    period: ' - Present',
    desc: 'Led a 10-member team in designing and building competition robots.' },
  { icon: '🧬', title: 'iGEM Wet Lab Leader', org: 'VIS iGEM Team',
    period: ' - Present',
    desc: '負責濕實驗室（Wet Lab）的基因組裝、電泳實驗，並參與撰寫了團隊的 Wiki 展示網頁。' },
]

export default function Leadership() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-12">Leadership</h1>
      <div className="space-y-6">
        {activities.map(a => (
          <div key={a.title} className="flex flex-col sm:flex-row gap-4 sm:gap-5 p-6 bg-gray-900 rounded-xl
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

