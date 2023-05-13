import { MetaData } from "@/utils/CommoneTypes";
import { FC } from "react";

interface PageProps {}

export const metadata: MetaData = {
  title: "Messages",
  description: "List of messages",
};

const Page: FC<PageProps> = ({}) => {
  return <div>Messages Page</div>;
};

export default Page;
