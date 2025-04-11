import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import UserComponent from '@/components/general/user';
import axios from 'axios';

interface NavbarProps {
  className?: string;
}

export default function DeskNavbar({ className = '' }: NavbarProps) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/api/auth/me")
      .then(res => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  return (
    <nav className={`absolute top-0 w-full bg-transparent py-4 ${className}`}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold font-serif text-white">
          
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center text-lg font-medium text-white">

          {user ? 
          <li><UserComponent /></li> 
          : 
          <li>
            <Link href="/login" className="hover:text-gray-400 cursor-pointer transition">
              <button className="border border-white py-2 px-4 rounded-lg font-bold hover:bg-white hover:text-black transition-color">
                LOGIN
              </button>
            </Link>
          </li>
          }
          
        </ul>
      </div>
    </nav>
  );
}