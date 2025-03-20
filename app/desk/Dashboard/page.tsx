"use client"

import ProfileCard from "@/components/dashboard/ProfileCard";
import IncomeCard from "@/components/dashboard/IncomeCard";
import { useRouter } from "next/navigation";
import { Icon } from '@iconify/react';
import RecentProjectsCard from "@/components/dashboard/RecentProjectsCard";

export default function Dashboard() {
  const router = useRouter();

  const recentProjects = [
    { name: "Landing Page Redesign", timeOpened: "15 mins ago" },
    { name: "E-commerce API", timeOpened: "1 hour ago" },
    { name: "Portfolio Website", timeOpened: "3 hours ago" },
    { name: "Next.js Dashboard", timeOpened: "Yesterday" },
  ];
  
  return (
    <div className="w-full bg-black min-h-screen px-[60px] py-[40px]">
      <h1 className="text-[40px] text-white font-bold font-serif">Dashboard</h1>
      <hr></hr>

      {/*// ** Top Section Content */}
      <div className="mt-4 flex">
        <ProfileCard
        name="Daniel Johnson"
        image="/images/profile-photo.jpg" 
        gradientColor="from-[#18181a]"
        onClick={() => router.push("/desk/Profile")}
        />

        <div className=" ml-4 grid grid-cols-2 grid-rows-2 gap-4">
          <IncomeCard
          title="Total Expenses For The Week"
          amount={15989}
          previousAmount={18871}
          icon={<Icon icon="tabler:report-money" width="70" height="70" className="text-secondary" />}
          />
          <IncomeCard
          title="Total Expenses For The Week"
          amount={15989}
          previousAmount={18871}
          icon={<Icon icon="tabler:report-money" width="70" height="70" className="text-secondary" />}
          />
          <IncomeCard
          title="Total Expenses For The Week"
          amount={15989}
          previousAmount={18871}
          icon={<Icon icon="tabler:report-money" width="70" height="70" className="text-secondary" />}
          />
          <IncomeCard
          title="Total Expenses For The Week"
          amount={15989}
          previousAmount={18871}
          icon={<Icon icon="tabler:report-money" width="70" height="70" className="text-secondary" />}
          />

        </div>


        <div className="ml-4">
          <RecentProjectsCard projects={recentProjects} />
        </div>
      </div>


      {/* //* Bottom Section */}
      <div className="w-full mt-4 rounded-md bg-[#0d3c9b] h-[200px] text-white text-[30px] font-semibold flex items-center justify-center">
        More Dashboard Content On The Way
      </div>
    </div>
  );
}