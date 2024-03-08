import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          {`
            body {
              margin: 0;
              padding: 0;
              display: flex;
              flex-direction: column;
              height: 100%;
            }

            main {
              flex: 1;
              overflow-x: hidden;
              word-wrap: break-word;
              min-width: 0; // Prevents content overflow in flex containers
            }
          `}
        </style>
         </head>
      <body className={inter.className} style={{ height: '100%', margin: 0, display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1, overflowX: 'hidden', wordWrap: 'break-word', minWidth: 0 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
