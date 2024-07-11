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

// export const metadata: Metadata = {
//   title: "SVS ",
//   description: "SVS coin",
//   openGraph: {
//     type: "website",
//     url: "https://svs-v1.vercel.app/",
//     title: "SVS ",
//     description: "SVS coin",
//     images: [
//       {
//         url: "https://nextjs.org/og.png", // Must be an absolute URL
//         width: 800,
//         height: 600,
//       },
//       {
//         url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
//         width: 1800,
//         height: 1600,
//         alt: "My custom alt",
//       },
//     ],
//   },
//   icons: ["/assets/images/logo.png", "/assets/images/logo-share.jpg"],
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrimeReactProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/assets/images/logo-share.jpg" />
          <link rel="apple-touch-icon" href="/assets/images/logoo.png" />
          <meta name="description" content="SVS coin" />
          <title>SVS</title>
        </head>
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
