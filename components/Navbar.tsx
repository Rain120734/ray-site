
import Link from 'next/link'


export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md
                    border-b border-white/5 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16
                      flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          Ray<span className="text-cyan-700">.</span>
        </Link>
        <div className="flex gap-6">
          <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link>
          <Link href="/leadership" className="text-gray-400 hover:text-white transition-colors">Leadership</Link>
          <Link href="/notes" className="text-gray-400 hover:text-white transition-colors">Notes</Link>
          <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
          <Link href="/photos" className="text-gray-400 hover:text-white transition-colors">Photos</Link>
          <Link href="/videos" className="text-gray-400 hover:text-white transition-colors">Videos</Link>
        </div>
      </div>
    </nav>
  )
}
