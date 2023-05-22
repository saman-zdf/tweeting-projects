"use client";
import MainHeader from "@/components/MainHeader";
import { useAppSelector } from "@/redux/hooks";
import { MetaData } from "@/utils/CommoneTypes";
import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const user = useAppSelector((state) => state.user.user);
  return (
    <main className='flex flex-col w-full'>
      <div className='h-24 border-b-[1px] border-neutral-800 w-full'>
        <MainHeader />
      </div>
    </main>
  );
};

export default Page;
