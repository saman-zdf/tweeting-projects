import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/Porvider";
import { Layout } from "./components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tweeting",
  description: "A simple twitter clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
