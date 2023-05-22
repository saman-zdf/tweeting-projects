"use client";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/userSlice";
import { useEffect } from "react";

const Page = ({}) => {
  const user = useAppSelector((state) => state.user.user);

  return <div>{JSON.stringify(user)}</div>;
};

export default Page;
