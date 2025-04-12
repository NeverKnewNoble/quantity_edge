"use client";

import { Trash2, Pencil } from "lucide-react";
import RadialProgress from "./RadialProgress";

interface ProjectCardProps {
    name: string;
    createdAt: string;
    items: string;
    sections: string;
    estimatedSum: string;
    amountPaid: string;
    sum: number;
    spent: number;
    onEdit?: () => void;
    onDelete?: () => void;
  }

export default function ProjectCard({
  name,
  createdAt,
  items,
  sections,
  estimatedSum,
  amountPaid,
  sum,
  spent,
  onEdit,
  onDelete,
}: ProjectCardProps) {
  return (
    <div className="min-w-[400px] h-[320px] border border-neutral-700 transition-transform bg-neutral-900 p-6 shadow-lg hover:scale-105 rounded-md">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-[30px] text-white">{name}</h2>
          <p className="text-[#d6ecff]">Created On: {createdAt}</p>
        </div>
        <div>
          <RadialProgress sum={sum} spent={spent} />
        </div>
      </div>

      <hr className="border-gray-700" />

      <div className="grid justify-between mt-2 grid-rows-4 grid-cols-2 gap-1 text-white text-sm">
        <p>Items:</p> <p>{items}</p>
        <p>Sections:</p> <p>{sections}</p>
        <p>Estimated Sum:</p> <p>{estimatedSum}</p>
        <p>Amount Paid:</p> <p className="text-red-400">{amountPaid}</p>
      </div>

      <div className="flex justify-end mt-12">
        <button
          onClick={onDelete}
          className="text-white bg-red-400 ml-2 py-2 px-4 flex items-center gap-2 font-semibold rounded-md shadow-md hover:bg-gray-200 hover:text-black transition-all duration-300"
        >
          <Trash2 />
        </button>
        <button
          onClick={onEdit}
          className="text-white bg-blue-400 ml-2 py-2 px-4 flex items-center gap-2 font-semibold rounded-md shadow-md hover:bg-gray-200 hover:text-black transition-all duration-300"
        >
          <Pencil />  
        </button>
      </div>
    </div>
  );
}



// ***USAGE
{/* <ProjectCard
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
/> */}
