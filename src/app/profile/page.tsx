import { MetaData } from "@/utils/CommoneTypes";
import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/UI/dialog";
import { Button } from "../../components/UI/button";
import { Label } from "../../components/UI/label";
import { Input } from "../../components/UI/input";
import MainHeader from "@/components/MainHeader";

interface PageProps {}

export const metadata: MetaData = {
  title: "Profile",
  description: "User profile",
};

function DialogDemo() {
  return (
    <Dialog>
      {/* <DialogTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DialogTrigger> */}
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input id='name' value='Pedro Duarte' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              Username
            </Label>
            <Input id='username' value='@peduarte' className='col-span-3' />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

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
