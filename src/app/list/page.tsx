"use client";
import { useAppSelector } from "@/redux/hooks";
import { MetaData } from "@/utils/CommoneTypes";
import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const user = useAppSelector((state) => state.user.user);
  return <div>{JSON.stringify(user)}</div>;
};

export default Page;
