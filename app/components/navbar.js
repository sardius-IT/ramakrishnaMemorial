'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className='flex '>
          <img src="/LOGO[1].png" alt="MediCare Logo" className="h-14 w-auto" />
          <h1 className=' grid items-center font-bold text-lg'>Ramakrishna Memorial Nursing Home</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
          <Link href="/find-doctor" className="text-gray-700 hover:text-blue-500">Doctors</Link>
          <Link href="/appointment" className="text-gray-700 hover:text-blue-500">Appointments</Link>
          
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          <Link href="/" className="block text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="/services" className="block text-gray-700 hover:text-blue-500">Services</Link>
          <Link href="/find-doctor" className="block text-gray-700 hover:text-blue-500">Doctors</Link>
          <Link href="/appointment" className="block text-gray-700 hover:text-blue-500">Appointments</Link>

        </div>
      )}
    </header>
  );
}
