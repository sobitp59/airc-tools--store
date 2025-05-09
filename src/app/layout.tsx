import { Inter } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";
import { auth } from '@/auth';
import getTokensByEmail from '../../data/user';
import HeaderNavigationMenu from '@/components/layout/header-navigation-menu';
import ScrollRestoration from '@/components/restore-position';
import { Toaster } from 'sonner';


 const inter = Inter({ subsets: ['latin'] })
 

export const metadata: Metadata = {
  title: "AIRC Tools Store",
  description: "Use all the latest tools you need in one place.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  const session = await auth();
  console.log("session", session);

  

  const token = await getTokensByEmail(session?.user?.email as string);
  console.log("token", token);


  return (
    <html lang="en">
      <body
        className={inter.className}
      >
          <Toaster /> 
        <HeaderNavigationMenu/>
        <ScrollRestoration/>
        {children}
      </body>
    </html>
  );
}
