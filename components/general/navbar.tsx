import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import UserComponent from '@/components/general/user';
import { CircleArrowRight } from 'lucide-react';

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/api/auth/me")
      .then(res => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  return (
    <nav className="absolute top-0 w-full bg-transparent py-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold font-serif text-white">
          Quantity Edge
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center text-lg font-medium text-white">

          {user ? 
          <>
            <li>
              <UserComponent />
            </li>
          </>
          : 
          <>
            <li className='flex '>
              <Link href="/login">
              <button className="text-white border  ml-2 py-2 px-6 flex items-center gap-2 font-semibold rounded-full shadow-md hover:bg-gray-200 hover:text-black transition-all duration-300">
                Login
              </button>
              </Link>

              <Link href="/signup">
              <button className="text-white bg-blue-400 ml-2 py-2 px-6 flex items-center gap-2 font-semibold rounded-full shadow-md hover:bg-gray-200 hover:text-black transition-all duration-300">
                Get Started <CircleArrowRight />
              </button>
              </Link>
            </li>
          </>
          }
        </ul>
      </div>
    </nav>
  );
}
