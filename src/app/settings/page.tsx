import { MetaData } from "@/utils/CommoneTypes";
import { FC } from "react";

interface PageProps {}

export const metadata: MetaData = {
  title: "Settings",
  description: "This is where user can change their settings",
};

const Page: FC<PageProps> = ({}) => {
  return <div>Settings Page</div>;
};

export default Page;
