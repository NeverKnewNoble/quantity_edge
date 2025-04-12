"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface ModalProps {
  title?: string;
  content?: string;
  isOpen: boolean;
  onClose: () => void;
  onSave?: () => void;
}

export default function Modal({ title = "Dialog Title", content, isOpen, onClose, onSave }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-white">
      <div className="bg-[#18181a] rounded-lg shadow-lg w-[700px] ">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-[40px] font-bold">{title}</h3>
          <button className="text-white text-[20px] mr-2 hover:text-gray-700" onClick={onClose} aria-label="Close">
          <X />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 max-h-[300px] overflow-auto">{content}</div>
      </div>
    </div>
  );
}



// **USAGE
// "use client";

// import { useState } from "react";
// import Modal from "@/components/Modal"; // Adjust path based on your folder structure

// export default function ModalExample() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <button
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//         onClick={() => setIsOpen(true)}
//       >
//         Open Modal
//       </button>

//       <Modal
//         isOpen={isOpen}
//         onClose={() => setIsOpen(false)}
//         title="Middle Center Modal"
//         content="This is some placeholder content to show the modal behavior."
//         onSave={() => alert("Changes Saved!")}
//       />
//     </div>
//   );
// }
