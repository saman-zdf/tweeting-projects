"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [tweetText, setTweetText] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  console.log(tweetText);

  return (
    <main className='flex w-full justify-between'>
      <div className='flex flex-col w-full'>
        <h1 className='text-lg font-bold p-4'>Home</h1>

        <form onSubmit={(e) => handleSubmit} className='w-full'>
          <div className='flex flex-col items-center h-60 min-w-full border-t border-b border-gray-100 p-4 justify-between'>
            <div className='flex items-center w-full'>
              <input
                type='text'
                className='w-full h-10 px-4 py-2 bg-transparent text-white placeholder-slate-600 focus:outline-none focus:border-none text-lg font-bold '
                onChange={(e) => setTweetText(e.target.value)}
                placeholder="What's happening!?"
              />
            </div>

            <div className='flex justify-between items-center self-end'>
              <div className='flex items-center '></div>

              <button
                className='rounded-full bg-green-500 text-white px-4 py-2 '
                type='submit'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className='flex h-screen flex-col items-center justify-center w-4/12 border-l border-gray-100'></div>
    </main>
  );
}
