import MainHeader from "@/components/MainHeader";
import { MetaData } from "@/utils/CommoneTypes";
import { FC } from "react";

interface PageProps {}

export const metadata: MetaData = {
  title: "Settings",
  description: "This is where user can change their settings",
};

const Page: FC<PageProps> = ({}) => {
  return (
    <main className='flex flex-col w-full'>
      <div className='h-24 border-b-[1px] border-neutral-800 w-full'>
        <MainHeader />
      </div>
    </main>
  );
};

export default Page;
