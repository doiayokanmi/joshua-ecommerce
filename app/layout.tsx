import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers";
import ReduxProvider from "@/redux/ReduxProvider";
import { ToastContainer } from 'react-toastify';


export const metadata: Metadata = {
  title: "E-Commerce Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'bg-gray-100'}>
      <ToastContainer />

        <ReduxProvider>
          <Providers>{children}</Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
