import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-40 w-full">
      <motion.div
        className="w-15 h-15 border-4 border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
    </div>
  );
}


// **Usage
// import LoadingSpinner from "@/components/LoadingSpinner";

// function SomePage() {
//   return (
//     <div>
//       {/* Show while loading */}
//       <LoadingSpinner />
//     </div>
//   );
// }
