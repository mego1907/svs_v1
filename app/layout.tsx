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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrimeReactProvider>
      <html lang="en">
        {/* <head>
          <title>SVS</title>
          <meta property="og:image" content="/assets/images/logoo.png" />
          <meta name="description" content="SVS coin" />
          <link
            rel="shortcut icon"
            href="/assets/images/logoo.png"
            type="image/x-icon"
          />
        </head> */}
        <SEO />
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
