import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {  FaPhoneAlt,FaWhatsapp } from "react-icons/fa";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Goa Sports Adventure",
  description: "A Water Adventure Travel Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
       <head>
        {/* Poppins Google Font CDN */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-[#f0fdfa] via-[#e0f7ff] to-white text-neutral-900`}
      >
        <Providers attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <a
  href="tel:+917678464517"
  className="floating-btn call-btn"
  aria-label="Call Now"
>
 <FaPhoneAlt />
</a>
              {children}
<a
  href="https://wa.me/+917678464517?text=I%20want%20to%20enquire%20about%20your%20Travel%20packages"
  target="_blank"
  rel="noopener noreferrer"
  className="floating-btn whatsapp-btn"
  aria-label="WhatsApp"
>
  <FaWhatsapp />
</a>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
