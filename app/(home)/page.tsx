"use client"

import Navbar from '@/components/general/navbar';
import Footer from '@/components/general/footer';
import SpotlightCard from '@/components/home_page/spotlightCard';
import { Icon } from '@iconify/react';
import Modal from '@/components/home_page/modal';
import { useState } from 'react';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="w-full min-h-screen">

      {/* Hero Section with Background Video */}
      <section className="relative w-full min-h-screen md:h-[650px] flex items-center justify-center overflow-hidden">
        {/* Background Video (Confined to the section) */}
        <div className="absolute bg-black inset-0 w-full h-full overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/images/greenrybg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Navbar (Independent from the section) */}
        <Navbar />

        {/* Content */}
        <div className="relative flex flex-col items-center text-center text-white px-6 md:px-[80px] space-y-6">
          {/* Title Text */}
          <h1 className="text-[42px] md:text-[60px] font-bold leading-tight font-serif text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              Instant BOQ Estimates for Smarter Building Decisions
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl max-w-3xl text-gray-300">
            Simply enter the length and height of your wall, and let Quantity Edge do the rest. 
            Get accurate material estimates for a hassle-free construction experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4"> 
            <button className="text-white bg-blue-400 py-3 px-6 font-semibold rounded-full shadow-md hover:bg-gray-200 hover:text-black transition-all duration-300">
              Estimate Now 🚧
            </button>
            <button 
              onClick={() => setIsOpen(true)}
              className="text-white border border-gray-500 hover:text-black hover:bg-white py-3 px-6 font-semibold rounded-full transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-[#2E2E2E] min-h-[800px] w-full flex flex-col items-center justify-center py-10">
        {/* Header */}
        <div className="text-center mb-10 px-6">
          <h1 className="text-[50px] font-bold font-serif text-white">
            We Take The Calculation Stress Off Your Hands
          </h1>
        </div>

        {/* Spotlight Cards */}
        <div className="flex  justify-center gap-6 px-20">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(214, 207, 225, 1)">
            <div><Icon icon="tabler:chart-bar" width="50" height="50" className="text-white" /></div>
            <h2 className="text-[20px] font-semibold mt-5 font-serif text-white">Efficient Cost Estimation</h2>
            <p className="text-gray-400 mt-2">
              Generate highly accurate and detailed Bills of Quantities with breakdowns for materials, 
              labor, and other expenses. Reduce errors and ensure precise cost forecasting for your projects.
            </p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card shadow-lg" spotlightColor="rgba(214, 207, 225, 1)">
            <div><Icon icon="tabler:calendar-week" width="50" height="50" className="text-white" /></div>
            <h2 className="text-xl font-semibold mt-5 font-serif text-white">Simplify Project Planning</h2>
            <p className="text-gray-400 mt-2">
              Organize and manage your construction projects with a well-structured BOQ. Plan resources, 
              set timelines, and track project phases to ensure smooth execution and timely completion.
            </p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(214, 207, 225, 1)">
            <div><Icon icon="tabler:moneybag" width="50" height="50" className="text-white" /></div>
            <h2 className="text-xl font-semibold mt-5 font-serif text-white">Stay on Budget</h2>
            <p className="text-gray-400 mt-2">
              Monitor and control project expenses with built-in budgeting tools. Compare estimated 
              vs actual costs, identify overspending, and make informed financial decisions.
            </p>
          </SpotlightCard>
        </div>
      </section>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="About Us"
        content="Quantity Edge is a powerful Bill of Quantity (BOQ) calculator designed to simplify construction project 
        planning for contractors, engineers, and individuals. With an intuitive workflow, it automates material estimation, 
        helping users accurately calculate blocks, cement, sand, and reinforcement steel based on project specifications. 
        Key features include a Block Estimator, Material Estimator, Rebar Estimator (Optional), Auto-Calculation of Totals, 
        and Work Section Grouping for better organization. Users can export BOQs to PDF and Excel, making documentation seamless. 
        The paid tier unlocks Team Chat, Collaborative Editing, and Activity Logging, ensuring smooth teamwork and tracking of project changes. 
        With Quantity Edge, managing construction projects is faster, more efficient, and error-free."
      />

      <Footer />
    </div>
  );
}
