import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

const SidebarItem: FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className='flex flex-row items-center' onClick={onClick}>
      <div className='relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden'>
        <Icon size={28} color='white' />
      </div>
      <Link
        href={href ? href : "/"}
        className='flex items-center justify-between w-full'
      >
        <div className='relative hidden lg:flex gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer items-center'>
          <Icon size={24} color='white' />
          <p className='hidden lg:block text-lg'>{label}</p>
        </div>
      </Link>
    </div>
  );
};

export default SidebarItem;
