'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { User } from '@/types/user'

export default function UserComponent() {
  const router = useRouter();
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  // !Fetch User Data
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios.get("/api/auth/me")
      .then(res => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);


  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const logout = async () => {
      const res = await axios.post("/api/auth/logout");
      if(res.status === 200) {
        router.replace("/");
      } else {
        alert("failed to logout");
        console.error("Failed")
      }
  }

  return (
    <div ref={dropdownRef} className="relative inline-flex">
      <button
        id="dropdown-avatar"
        type="button"
        className="flex items-center focus:outline-none"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="User menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <img
          src="/images/profile-photo.jpg"
          alt="User Avatar"
          className="w-10 h-10 rounded-full  shadow-sm"
        />
      </button>

      {open && (
        <ul
          className="absolute right-1 top-10 mt-2 w-58 font-serif text-white bg-zinc-900 rounded-lg shadow-lg z-50 overflow-hidden "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-avatar"
        >
          <li className="flex items-center gap-3 p-4 border-b">
            <div>
              <p className="text-sm font-semibold">{ user?.full_name || 'Guest' }</p>
              <p className="text-xs text-gray-500">{ user?.email || '' }</p>
            </div>
          </li>
          
          <Link href="/" >
          <li className="hover:bg-gray-100 px-4 py-2 hover:text-gray-900  cursor-pointer" role="menuitem">
              Home 
          </li>
          </Link> 
          
          <Link href="/desk/Dashboard" >
          <li className="hover:bg-gray-100 px-4 py-2 hover:text-gray-900  cursor-pointer" role="menuitem">
            Desk
          </li>
          </Link>

          <Link href="/desk/Profile" >
          <li className="hover:bg-gray-100 px-4 py-2 hover:text-gray-900  cursor-pointer" role="menuitem">
            My Profile
          </li>
          </Link>

          <li 
          onClick={logout}
          className="px-4 py-2 hover:bg-gray-100 hover:text-red-500 cursor-pointer text-red-500" role="menuitem">
            Sign out
          </li>

        </ul>
      )}
    </div>
  )
}
