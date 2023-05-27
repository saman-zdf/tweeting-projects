import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { User as UserModel } from "@prisma/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

declare module "next-auth" {
  interface User extends UserModel {
    // User id in table in integer and next auth id is string, this the best work around for now I could find.
    id: number;
  }
}
