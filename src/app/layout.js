import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";



export const metadata = {
  title: "Goggle clone",
  description: "An open source google clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='relative min-h-screen'
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
