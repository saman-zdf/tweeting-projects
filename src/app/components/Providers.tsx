"use client";
import { FC, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

// This provider can be used as redux provider
const Providers = ({ children }: ProvidersProps) => {
  return { children };
};

export default Providers;
