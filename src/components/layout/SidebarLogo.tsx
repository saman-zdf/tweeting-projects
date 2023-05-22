"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { BsTwitter } from "react-icons/bs";

interface SidebarLogoProps {}

const SidebarLogo: FC<SidebarLogoProps> = ({}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className='rounded-full h-14 w-14 p-4 justify-center hover:bg-blue-500 cursor-pointer transition grid items-center'
    >
      <BsTwitter size={28} color='white' />
    </div>
  );
};

export default SidebarLogo;
