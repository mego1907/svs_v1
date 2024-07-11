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
        <head>
          <meta
            property="og:image"
            content="https://svs-v1.vercel.app/assets/images/logo-share.jpg"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <title>SVS</title>
          <meta property="og:url" content="https://svs-v1.vercel.app" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="SVS" />
          <meta property="og:description" content="SVS coin" />
          <meta
            property="og:image"
            content="https://svs-v1.vercel.app/assets/images/logo-share.jpg"
          />
          <meta property="fb:app_id" content="1008136771035163" />
        </head>
        {/* <head>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
          <meta name="description" content="SVS coin" />
          <link rel="mask-icon" href="/favicon.ico" color="#fff" />
          <meta
            property="og:image"
            content="/public/assets/images/logo-share.jpg"
          />

          <title>SVS</title>
        </head> */}
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
