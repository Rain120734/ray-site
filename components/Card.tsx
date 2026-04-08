// 定義元件可以接收的資料
type CardProps = {
  title: string
  description: string
  icon: string
  href: string
}

export default function Card({ title, description, icon, href }: CardProps) {
  return (
    <a href={href} className="block p-6 bg-dark-800 rounded-xl border border-white/5
                              hover:border-cyan-500/30 hover:-translate-y-1 transition-all">
      <span className="text-3xl">{icon}</span>
      <h3 className="text-lg font-semibold text-white mt-3">{title}</h3>
      <p className="text-gray-400 mt-1">{description}</p>
    </a>
  )
}