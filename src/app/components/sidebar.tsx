import Link from "next/link";
import { ReactNode } from "react";
import {
  AiFillHome,
  AiOutlineMessage,
  AiOutlineUser,
  AiOutlineSetting,
} from "react-icons/ai";
import { CgUserList } from "react-icons/cg";
import { GiKiwiBird } from "react-icons/gi";

type LinkItem = {
  to: string;
  name: string;
  icon: ReactNode;
};

const Sidebar = () => {
  const linkItems: LinkItem[] = [
    {
      to: "/",
      name: "Home",
      icon: <AiFillHome className='mx-3 mt-1 text-2xl' />,
    },
    {
      to: "/list",
      name: "List",
      icon: <CgUserList className='mx-3 mt-1 text-2xl' />,
    },
    {
      to: "/messages",
      name: "Messages",
      icon: <AiOutlineMessage className='mx-3 mt-1 text-2xl' />,
    },
    {
      to: "/profile",
      name: "Profile",
      icon: <AiOutlineUser className='mx-3 mt-1 text-2xl' />,
    },
    {
      to: "/settings",
      name: "Setting",
      icon: <AiOutlineSetting className='mx-3 mt-1 text-2xl' />,
    },
  ];

  return (
    <div className='flex flex-col w-3/12 h-screen px-4 py-4 border-r-2 border-gray-200'>
      <div className='flex flex-col items-start mt-6 -mx-2'>
        <GiKiwiBird className='mx-3 mt-1 mb-6 text-5xl' />
        {linkItems.map((link, idx) => (
          <div
            key={`${idx}-${link.name}`}
            className='flex align-baseline w-full h-16 border-teal-100'
          >
            {link.icon}
            <Link href={link.to} className='font-bold text-2xl'>
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
