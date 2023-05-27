import { FC } from "react";
import { Button } from "../UI/button";

interface SidebarTweetButtonProps {}

const SidebarTweetButton: FC<SidebarTweetButtonProps> = ({}) => {
  return (
    <div className='w-full'>
      <Button className='rounded-3xl bg-blue-500 min-w-[200px] text-white text-xl py-6 hover:bg-blue-700 mt-3'>
        Tweet
      </Button>
    </div>
  );
};

export default SidebarTweetButton;
