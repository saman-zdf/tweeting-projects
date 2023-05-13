import { MetaData } from "@/utils/CommoneTypes";
import { FC } from "react";

interface PageProps {}

export const metadata: MetaData = {
  title: "Profile",
  description: "User profile",
};

const Page: FC<PageProps> = ({}) => {
  return <div>Profile Page</div>;
};

export default Page;
