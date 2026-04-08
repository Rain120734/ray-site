import Image from 'next/image'

type ProjectProps = {
  title: string; description: string
  tags: string[]; image: string
}

export default function ProjectCard({ title, description, tags, image }: ProjectProps) {
  return (
    <div className="bg-gray-900 rounded-xl border border-white/5 overflow-hidden
                    hover:border-cyan-500/30 hover:-translate-y-1 transition-all">
      <Image src={image} alt={title} width={600} height={300}
             className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map(tag => (
            <span key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
