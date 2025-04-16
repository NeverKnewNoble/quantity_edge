"use client";

import ProjectCard from "@/components/boq/ProjectCard";
import { CircleFadingPlus, Pencil, Trash2, X   } from "lucide-react";
import Stepper, { Step } from '@/components/boq/Stepper';
import { useState } from "react";
import LoadingSpinner from "@/components/general/LoadingSpinner";


export default function BOQ() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="w-full bg-neutral-900 min-h-screen font-serif text-white px-4 md:px-12 py-6 md:py-10">
      <div className="lg:max-w-screen-xl xl:max-w-screen-xl mx-auto">
        <h1 className="text-[40px] text-white font-bold font-serif">BOQ Item Management</h1>
        <hr></hr>

        {/* //**Search Section */}
        <div className="flex justify-end w-full mt-6">
            <div className="flex items-center border border-gray-400 rounded-md overflow-hidden">
              <input 
                type="text" 
                placeholder="Search For Your Project..."
                className="py-2 px-4 w-140 outline-none border-r-blue-500"
              />
              <button className="bg-blue-400 text-white px-4 py-2 hover:bg-gray-200 hover:text-black transition">
                Search
              </button>
            </div>

            <button 
            onClick={() => setIsOpen(true)}
            className="text-white bg-blue-400 ml-2 py-2 px-4 flex items-center gap-2 font-semibold rounded-full shadow-md hover:bg-gray-200 hover:text-black transition-all duration-300">
            <CircleFadingPlus /> Add A Project
            </button>
        </div>

        {/* List Of Projects */}
        <div className="min-w-full p-4 grid grid-col lg:grid-cols-3  min-h-[320px] mt-2  gap-2">
          <ProjectCard
            name="Project Name"
            createdAt="2025/03/16"
            items="20,000 items"
            sections="20 sections"
            estimatedSum="$10,000"
            amountPaid="$2,000"
            sum={10000}
            spent={2000}
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
          />
        </div>



        {/* //!Stepper Create Projects */}
        {isOpen && (
              <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <button 
                onClick={() => {setIsOpen(false)}}
                className="absolute top-4 border right-4 hover:bg-gray-200 hover:text-black transition rounded-md"><X /></button>
                <Stepper
                  initialStep={1}
                  onStepChange={(step) => {
                    console.log(step);
                  }}
                  backButtonText="Previous"
                  nextButtonText="Next"
                  onFinalStepCompleted={() => {
                    console.log("All steps completed!");
                    alert("🎉 You're Done! Thanks for completing the steps.");
                  }}
                >

                  {/* //! Step 1 */}
                  <Step>
                    <h2 className="text-[30px]">Welcome To Quantity Edge BOQ Wizard</h2>
                    <p className="">Let's get Started!</p>

                    <div className="mt-6 w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Project Name Field */}
                      <div className="flex flex-col">
                        <label htmlFor="projectName" className="mb-2 font-medium text-sm">
                          Project Name
                        </label>
                        <input
                          id="projectName"
                          type="text"
                          placeholder="Enter project name"
                          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                      </div>

                      {/* Currency Field */}
                      <div className="flex flex-col text-black">
                        <label htmlFor="currency" className="mb-2 font-medium text-sm text-white ">
                          Currency
                        </label>
                        <select
                          id="currency"
                          defaultValue=""
                          className="border text-white border-gray-300 rounded-lg px-3 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-white"
                        >
                          <option value="" disabled hidden>
                            Select currency
                          </option>
                          <option className="bg-black" value="USD">USD - US Dollar</option>
                          <option className="bg-black" value="GHS">GHS - Ghanaian Cedi</option>
                          <option className="bg-black" value="EUR">EUR - Euro</option>
                          <option className="bg-black" value="NGN">NGN - Nigerian Naira</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-2 mb-2">
                      <div className="grid mb-2">
                        <label>Project Description</label>
                        <textarea className="border p-2 rounded-md" id="comments" name="comments" placeholder="Enter your Description here" rows={4} cols={50}>
                        
                        </textarea>
                      </div>
                      <div className="grid mb-2">
                        <label>Client Name (Optional)</label>
                        <input
                          type="text"
                          placeholder="Enter client name"
                          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                      </div>
                      <div className="grid">
                        <label>Project Location</label>
                        <input
                          type="text"
                          placeholder="Enter project location"
                          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                      </div>
                    </div>
                  </Step>
                  

                  {/* //! Step2 */}
                  <Step>
                  <h2 className="text-[30px]">Bill Of Quantity Information</h2>
                  <p className="">Please provide the following information.</p>

                  <div className="mt-2 mb-2">
                      <div className="grid mb-2">
                        <label>Title</label>
                        <input
                          type="text"
                          placeholder="Enter BOQ Title"
                          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                      </div>
                      <div className="grid">
                        <label>Sub-Heading (Optional)</label>
                        <input
                          type="text"
                          placeholder="Enter sub-heading if any"
                          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                      </div>
                    </div>
                  </Step>
  

                  {/* //!Step 3 */}
                  {/* <Step>
                    <div className="grid items-center justify-center">
                    <LoadingSpinner />
                    <p className="text-[20px] animate-pulse">Creating Your project: Riverdale</p>
                    </div>
                  </Step> */}
                  
                </Stepper>
              </div>
        )}


      </div>
    </div>
  );
}
