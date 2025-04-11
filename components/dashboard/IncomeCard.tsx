import { ReactNode } from "react";

interface IncomeCardProps {
  title: string;
  amount: number;
  previousAmount: number;
  icon: ReactNode;
}

const IncomeCard: React.FC<IncomeCardProps> = ({ title, amount, previousAmount, icon }) => {
  return (
    <div 
    className="bg-[#18181a] hover:scale-105 transition-transform text-white p-4 rounded-xl shadow-lg w-full h-[150px] align-middle justify-between flex flex-col-2 gap-2">
      <div>
        <h3 className="text-md font-medium text-white">{title}</h3>
        <p className="text-[40px] text-white font-semibold">${amount.toLocaleString()}</p>
        <p className="text-sm text-[#d6ecff]">${previousAmount.toLocaleString()} last period</p>
      </div>

      {/* Icon Placeholder */}
      {/* <div className="mt-3 flex justify-end items-center text-blue-500">{icon}</div> */}
    </div>
  );
};

export default IncomeCard;


// **Usage
// import IncomeCard from "@/components/IncomeCard";
// import { TrendingDown } from "lucide-react"; // Using Lucide icons

// export default function Dashboard() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-900">
//       <IncomeCard
//         title="Income"
//         amount={15989}
//         previousAmount={18871}
//         icon={<TrendingDown size={32} />} // Pass any icon here
//       />
//     </div>
//   );
// }
