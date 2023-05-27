"use client";
import { FC } from "react";
import { Skeleton } from "@/components/UI/skeleton";
import SignInModal from "./UI/modals/SignInModal";
import RegisterModal from "./UI/modals/RegisterModal";
import { useSession } from "next-auth/react";

interface MainHeaderProps {}

const MainHeader: FC<MainHeaderProps> = ({}) => {
  const { status, data: session } = useSession();

  if (status === "loading") {
    return (
      <div className='flex mt-8 items-center justify-center space-x-4'>
        <Skeleton className='h-12 w-12 rounded-full' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      </div>
    );
  }

  return (
    <div className='w-full flex flex-col pt-6 items-center justify-end'>
      {session?.user.id ? (
        <div>
          <p>Welcome {session?.user.username}</p>
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
