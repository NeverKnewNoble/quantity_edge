// app/desk/layout.tsx
"use client";


import { ReactNode } from "react";
import Dock from "@/components/general/dock";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import DeskNavbar from "@/components/general/desknav";
import { House, ReceiptText, SquareUserRound, Users } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  const items = [
    { icon: <House className="text-white w-[20px]"/>, label: "Dashboard", onClick: () => router.push("/desk/Dashboard") },
    { icon: <ReceiptText className="text-white w-[20px]"/>, label: "Bill Of Quantity", onClick: () => router.push("/desk/BOQ") },
    { icon: <Users className="text-white w-[20px]" />, label: "My Team", onClick: () => router.push("/desk/My_Teams") },
    { icon: <SquareUserRound className="text-white w-[20px]"/>, label: "Profile", onClick: () => router.push("/desk/Profile") },
  ];

  return (
    <div className=" max-h-screen ">
      <DeskNavbar/>

      {/* <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} /> */}
      <div className="flex-1 ">{children}</div>

      {/* Fixed Dock at Bottom */}
      <div className="fixed bottom-0 left-0 w-full">
        <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
      </div>
    </div>
  );
  
}
