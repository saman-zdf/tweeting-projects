"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";

import SignInModal from "./UI/modals/SignInModal";
import RegisterModal from "./UI/modals/RegisterModal";
import { useAppSelector } from "@/redux/hooks";

interface MainHeaderProps {}

const MainHeader: FC<MainHeaderProps> = ({}) => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <div className='w-full flex flex-col h-full items-center justify-end'>
      {user.token ? (
        <div>
          <p>Welcome {user.username}</p>
        </div>
      ) : (
        <div className='flex items-center justify-between max-w-[300px]'>
          <SignInModal />
          <RegisterModal />
        </div>
      )}
    </div>
  );
};

export default MainHeader;
