'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LoginFunction } from "@/utils/login"
import { useRouter } from 'next/navigation';
// toast
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const notyf = new Notyf({
    position: { x: 'right', y: 'top' },
    dismissible: true
  });
  

  // !Login Handle 
  const handleLogin = async (e: React.FormEvent) => {
    const result = await LoginFunction(e, { email, password });
  
    if (result?.message === "Login successful") {
      notyf.success('Success! Logged In.');
      router.push("/desk/Dashboard");
    } else {
      notyf.error('Oops! Login failed. Try again.');
    }
  };
  



  return (
    <div className="min-h-screen w-full flex text-white">

      <div className="w-1/2 min-h-screen">
        <img src="/images/lg.jpg" alt="Cover image" className="w-full h-full object-cover" />
      </div>

  
        <div className="flex w-1/2 min-h-screen items-center justify-center text-white bg-black">
          <div className="w-full max-w-md p-6 bg-black rounded-2xl shadow-xl">
            <h2 className="text-[40px] font-bold text-center ">Welcome Back</h2>
            <p className="text-center mb-6">Sign in to your account</p>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block">Email Address</label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-black"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block ">Password</label>
                <input
                  type="password"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-black"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                <label className="flex items-center ">
                  <input 
                    type="checkbox" 
                    className="mr-2"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  Remember Me
                </label>
                <Link href="/forgot-password" className="text-black hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Sign In
              </button>
            </form>

            <p className="text-center mt-4">
              Don’t have an account? 
              <Link href="/signup" className="text-white hover:underline ml-1">
                Sign up
              </Link>
            </p>
          </div>
        </div>
    </div>
  );
}





