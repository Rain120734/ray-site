import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-950/80 backdrop-blur-md
                       border-t border-white/5 mt-auto">
      <div className="max-w-6xl mx-auto px-6 h-16
                      flex items-center justify-between">
        <p className="text-gray-500 text-sm">© 2025 Ray. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="https://www.youtube.com" className="text-gray-400 hover:text-white transition-colors">YouTube</Link>
        </div>
      </div>
    </footer>
  )
}
