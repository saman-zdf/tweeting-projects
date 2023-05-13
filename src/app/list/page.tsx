import { MetaData } from "@/utils/CommoneTypes";
import { FC } from "react";

interface PageProps {}

export const metadata: MetaData = {
  title: "List of users",
  description: "List of users",
};

const Page: FC<PageProps> = ({}) => {
  return <div>List of users page</div>;
};

export default Page;
