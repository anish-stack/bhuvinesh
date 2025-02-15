import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";


export const metadata = {
  title: 'Prop Savvy Realtors',
  description: 'Welcome to Prop Savvy Realtors - Your Trusted Partner in Real Estate',
}
  
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
