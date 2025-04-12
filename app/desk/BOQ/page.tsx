"use client";

import ProjectCard from "@/components/boq/ProjectCard";
import RadialProgress from "@/components/boq/RadialProgress";
import { CircleFadingPlus, Pencil, Trash2   } from "lucide-react";


export default function BOQ() {
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

            <button className="text-white bg-blue-400 ml-2 py-2 px-4 flex items-center gap-2 font-semibold rounded-full shadow-md hover:bg-gray-200 hover:text-black transition-all duration-300">
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
      </div>
    </div>
  );
}
