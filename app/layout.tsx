import type { Metadata } from "next";
import { DM_Sans, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar, ParticlesBackrgound } from "@/components";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/themes/lara-dark-cyan/theme.css";
import "swiper/swiper-bundle.css";
import SocialMedia from "@/components/SocialMedia";
import SEO from "@/components/SEO";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SVS ",
  description: "SVS coin",
  openGraph: {
    type: "website",
    url: "https://svs-v1.vercel.app/",
    title: "SVS ",
    description: "SVS coin",
    images: [
      {
        url: "https://svs-v1.vercel.app/assets/images/logo-share.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: ["/assets/images/logo.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrimeReactProvider>
      <html lang="en">
        <body className={dm_sans.className}>
          <ParticlesBackrgound />

          <SocialMedia />

          {/* Navbar */}
          <Navbar />

          {/* content */}
          <div>{children}</div>
        </body>
      </html>
    </PrimeReactProvider>
  );
}
