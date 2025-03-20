import React from 'react';
import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className="absolute top-0 w-full flex justify-between items-center px-25 py-4 bg-none " >
      {/* Logo / Brand Name */}
      <div className="text-2xl font-bold font-serif text-white">
        Quantity Edge
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-lg font-medium text-white">
        <li className="hover:text-blue-600 cursor-pointer transition">HOME</li>
        <Link href="/desk/Dashboard"><li className="hover:text-blue-600 cursor-pointer transition">DESK</li></Link>
        <li className="hover:text-blue-600 cursor-pointer transition">ABOUT</li>
      </ul>
    </nav>
  );
}
