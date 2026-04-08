
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
          <Link href="/portfolio" className="text-brand-900 hover:text-white transition-colors">Portfolio</Link>
          <Link href="/notes" className="text-brand-900 hover:text-white transition-colors">Notes</Link>
          <Link href="/blog" className="text-brand-900 hover:text-white transition-colors">Blog</Link>
          <Link href="/contact" className="text-brand-900 hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
