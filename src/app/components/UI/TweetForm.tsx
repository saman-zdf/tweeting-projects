"use client";
"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";
import SignInButton from "./SignInButton";

export const secret = process.env.NEXT_PUBLIC_SECRET_JWT;

export default function TweetForm() {
  const [tweetText, setTweetText] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
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
  );
}
