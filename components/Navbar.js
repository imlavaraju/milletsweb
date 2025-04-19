'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Icon on the left */}
        <div className="flex items-center">
          <Image src="/millets.jpg" alt="Logo" width={40} height={40} className="rounded-2xl"/>
        </div>
        <h2 className="text-2xl font-semibold font-[family-name:var(--font-geist-sans)]">Jagdeesh Fresh Millets </h2>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/products" className="hover:text-gray-300">Products</Link>
          <Link href="/customer-support" className="hover:text-gray-300">Customer Support</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <div className="flex flex-col space-y-3">
            <Link href="/" className="hover:text-gray-300" onClick={toggleMenu}>Home</Link>
            <Link href="/products" className="hover:text-gray-300" onClick={toggleMenu}>Products</Link>
            <Link href="/customer-support" className="hover:text-gray-300" onClick={toggleMenu}>Customer Support</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 