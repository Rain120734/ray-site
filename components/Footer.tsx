import Link from 'next/link'


export default function Footer() {
  return (
    <nav className="fixed bottom-0 w-full bg-gray-950/80 backdrop-blur-md
                    border-b border-purple-500 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16
                      flex items-center border-t border-purple-500 pt-4 justify-between">
        <div className="flex gap-6 ">
          <Link href="https://www.youtube.com" className="text-brand-900 hover:text-white transition-colors">YouTube</Link>
        </div>
      </div>
    </nav>
  )
}
