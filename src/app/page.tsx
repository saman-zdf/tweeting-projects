import MainHeader from "@/components/MainHeader";

export default function Home() {
  return (
    <main className='flex flex-col w-full'>
      <div className='h-24 border-b-[1px] border-neutral-800 w-full'>
        <MainHeader />
      </div>
    </main>
  );
}
