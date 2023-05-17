import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/sidebar";

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
        <div className='flex align-middle max-w-6xl mx-auto'>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
