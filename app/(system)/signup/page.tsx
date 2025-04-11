'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SignUpFunction } from '@/utils/signup';
// import { useRouter } from "next/router";


export default function signup() {
//   const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="min-h-screen w-full flex text-white">

      <div className="w-1/2 min-h-screen">
        <img src="/images/sn.jpg" alt="Cover image" className="w-full h-full object-cover" />
      </div>

  
      <div className="flex w-1/2 min-h-screen items-center justify-center text-white bg-black">
        <div className="w-full max-w-md p-6 bg-black rounded-2xl shadow-xl">
            <h2 className="text-[40px] font-bold text-center">Create Account</h2>
            <p className="text-center mb-6">Join Quantity Edge to get started</p>

            <form
            onSubmit={(e) => {
                // TODO: Call your signup function here
                SignUpFunction(e, { full_name: fullName, email, password });
            }}
            className="space-y-4"
            >
            <div>
                <label className="block">Full Name</label>
                <input
                type="text"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-600"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                />
            </div>

            <div>
                <label className="block">Email Address</label>
                <input
                type="email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-600"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>

            <div>
                <label className="block">Password</label>
                <input
                type="password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-600"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
                Sign Up
            </button>
            </form>

            <p className="text-center mt-4">
            Already have an account?
            <Link href="/login" className="text-white hover:underline ml-1">
                Login
            </Link>
            </p>
        </div>
        </div>

    </div>
  );
}





