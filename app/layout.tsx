import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MTDC LIMITED | Manipur Tribal Development Corporation | Government of Manipur",
  description: "Official Portal of Manipur Tribal Development Corporation Limited (MTDC), Department of Tribal Affairs & Hills, Government of Manipur. Empowering tribal communities through inclusive socio-economic infrastructure.",
  keywords: "MTDC, Manipur Tribal Development Corporation, Government of Manipur, Tribal Affairs, HADP, Manipur Infrastructure",
  icons: {
    icon: "/assets/mtdc-logo.png",
  },
};

import GovernmentBar from "@/components/GovernmentBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable} ${ibmPlexMono.variable} ${ibmPlexSans.variable}`}>
      <body className="min-h-screen bg-[#F6F7F5] text-[#102B3C] antialiased flex flex-col selection:bg-[#D85C3A] selection:text-white">
        <GovernmentBar />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
