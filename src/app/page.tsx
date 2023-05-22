import { useAppSelector } from "@/redux/hooks";
import SignInButton from "./components/UI/SignInButton";
import TweetForm from "./components/UI/TweetForm";
import { store } from "@/redux";
import { setUser } from "@/redux/userSlice";

export default function Home() {
  const createdUser = {
    id: 1,
    username: "sam",
    email: "sam@email.com",
    role: "USER",
    createdAt: "12/12/2023",
    updatedAt: "12/12/2023",
  };
  store.dispatch(setUser(createdUser));
  return <main className='flex w-full '>home</main>;
}
