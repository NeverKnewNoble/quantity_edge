"use client";

import ProfileCard from "@/components/dashboard/ProfileCard";
import IncomeCard from "@/components/dashboard/IncomeCard";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import RecentProjectsCard from "@/components/dashboard/RecentProjectsCard";

export default function Dashboard() {
  const router = useRouter();

  const recentProjects = [
    { name: "Landing Page Redesign", timeOpened: "15 mins ago" },
    { name: "E-commerce API", timeOpened: "1 hour ago" },
    { name: "Portfolio Website", timeOpened: "3 hours ago" },
    { name: "Next.js Dashboard", timeOpened: "Yesterday" },
    { name: "Next.js Dashboard", timeOpened: "Yesterday" },
    { name: "Next.js Dashboard", timeOpened: "Yesterday" },
  ];


return (
  <div className="w-full bg-neutral-900 min-h-screen px-4 md:px-12 py-6 md:py-10">
    <div className="lg:max-w-screen-xl xl:max-w-screen-xl mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-[40px] text-white font-bold font-serif">Dashboard</h1>
      <hr className="my-4" />

      {/* ** Top Section Content */}
      <div className="mt-4 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-4">
        {/* Profile Card - Stacks on mobile/tablet, auto size on desktop */}
        <ProfileCard
          name="Daniel Johnson"
          image="/images/profile-photo.jpg"
          gradientColor="from-[#18181a]"
          onClick={() => router.push("/desk/Profile")}
          // className="w-full md:w-1/2 lg:w-auto"
        />

        {/* Income Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 flex-1">
          <IncomeCard
            title="Total Expenses For The Week"
            amount={15989}
            previousAmount={18871}
            icon={<Icon icon="tabler:report-money" width="50" height="50" className="text-secondary" />}
          />
          <IncomeCard
            title="Total Expenses For The Week"
            amount={15989}
            previousAmount={18871}
            icon={<Icon icon="tabler:report-money" width="50" height="50" className="text-secondary" />}
          />
          <IncomeCard
            title="Total Expenses For The Week"
            amount={15989}
            previousAmount={18871}
            icon={<Icon icon="tabler:report-money" width="50" height="50" className="text-secondary" />}
          />
          <IncomeCard
            title="Total Expenses For The Week"
            amount={15989}
            previousAmount={18871}
            icon={<Icon icon="tabler:report-money" width="50" height="50" className="text-secondary" />}
          />
        </div>

        {/* Recent Projects - Stacks on mobile/tablet, auto size on desktop */}
        <div className="w-full md:w-1/2 lg:w-auto">
          <RecentProjectsCard projects={recentProjects} />
        </div>
      </div>

      {/* ** Bottom Section */}
      <div className="w-full mt-6 rounded-md bg-[#0d3c9b] h-[150px] md:h-[180px] lg:h-[200px] text-white text-lg md:text-xl lg:text-[30px] font-semibold flex items-center justify-center text-center">
        More Dashboard Content On The Way
      </div>
    </div>
  </div>
);
}
