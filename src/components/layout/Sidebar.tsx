"use client";
import { FC } from "react";
import { BsHouseFill, BsList, BsEnvelopeFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";
import { store } from "@/redux";
import { localStorageRemoveItem } from "@/utils/windowStorages/Storages";
import { logoutUser } from "@/redux/userSlice";
import { useRouter } from "next/navigation";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const router = useRouter();
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Lists",
      href: "/list",
      icon: BsList,
    },
    {
      label: "Messages",
      href: "/messages",
      icon: BsEnvelopeFill,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: FaUser,
    },
    {
      label: "Setting",
      href: "/settings",
      icon: AiFillSetting,
    },
  ];

  const handleLogout = () => {
    store.dispatch(logoutUser());
    localStorageRemoveItem("user");
    router.push("/");
  };
  return (
    <div className='col-span-1 h-full pr-4 md-pr-6'>
      <div className='flex flex-col items-end'>
        <div className='space-y-2 lg:w-[230px]'>
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SidebarItem onClick={handleLogout} icon={BiLogOut} label='Logout' />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
