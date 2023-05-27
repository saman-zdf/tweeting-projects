import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/Porvider";
import { Layout } from "../components/Layout";
import AuthSessionProvider from "@/components/AuthSessionProvider";
import { Toaster } from "@/components/UI/Toaster";

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
        <AuthSessionProvider>
          <Providers>
            <Layout>
              {children}
              <Toaster />
            </Layout>
          </Providers>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
