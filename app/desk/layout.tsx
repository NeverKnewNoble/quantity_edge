// app/desk/layout.tsx
"use client";


import { ReactNode } from "react";
import Dock from "@/components/general/dock";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  const items = [
    { icon: <Icon icon="tabler:home-filled" width="18" height="18" className="text-white" />, label: "Dashboard", onClick: () => router.push("/desk/Dashboard") },
    { icon: <Icon icon="tabler:building" width="18" height="18" className="text-white" />, label: "Bill Of Quantity", onClick: () => router.push("/desk/BOQ") },
    { icon: <Icon icon="tabler:brand-teams" width="18" height="18" className="text-white" />, label: "My Team", onClick: () => router.push("/desk/My_Teams") },
    { icon: <Icon icon="tabler:user-square" width="18" height="18" className="text-white" />, label: "Profile", onClick: () => router.push("/desk/Profile") },
  ];

  return (
    <div className="flex max-h-screen ">
      {/* <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} /> */}
      <div className="flex-1 ">{children}</div>

      {/* Fixed Dock at Bottom */}
      <div className="fixed bottom-0 left-0 w-full">
        <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
      </div>
    </div>
  );
  
}
