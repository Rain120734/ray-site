"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-transparent z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white z-50" onClick={() => setIsMenuOpen(false)}>
          Ray<span className="text-cyan-700">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link>
          <Link href="/leadership" className="text-gray-400 hover:text-white transition-colors">Leadership</Link>
          <Link href="/notes" className="text-gray-400 hover:text-white transition-colors">Notes</Link>
          <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
          <Link href="/photos" className="text-gray-400 hover:text-white transition-colors">Photos</Link>
          <Link href="/videos" className="text-gray-400 hover:text-white transition-colors">Videos</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-400 hover:text-white focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40">
          <Link href="/portfolio" onClick={toggleMenu} className="text-2xl font-semibold text-gray-400 hover:text-white transition-colors">Portfolio</Link>
          <Link href="/leadership" onClick={toggleMenu} className="text-2xl font-semibold text-gray-400 hover:text-white transition-colors">Leadership</Link>
          <Link href="/notes" onClick={toggleMenu} className="text-2xl font-semibold text-gray-400 hover:text-white transition-colors">Notes</Link>
          <Link href="/blog" onClick={toggleMenu} className="text-2xl font-semibold text-gray-400 hover:text-white transition-colors">Blog</Link>
          <Link href="/photos" onClick={toggleMenu} className="text-2xl font-semibold text-gray-400 hover:text-white transition-colors">Photos</Link>
          <Link href="/videos" onClick={toggleMenu} className="text-2xl font-semibold text-gray-400 hover:text-white transition-colors">Videos</Link>
        </div>
      )}
    </nav>
  )
}
