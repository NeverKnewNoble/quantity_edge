import React from 'react';

export default function Footer() {
  return (
    <footer className="footer bg-black bg-base-200/60 px-6 py-20">
        <div className="flex w-full text-white  flex-wrap items-center justify-between">
            <div className="flex items-center gap-2 text-xl font-bold">
            <span className='text-2xl font-bold font-serif text-white'>Quantity Edge</span>
            </div>
            <aside className="grid-flow-col items-center">
            <p> ©2024 <a className="link link-hover font-medium" href="#">Quantity Edge</a> </p>
            </aside>
        </div>
    </footer>
  );
}