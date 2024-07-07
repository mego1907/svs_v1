import type { Metadata } from "next";
import { DM_Sans, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar, ParticlesBackrgound } from "@/components";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const dm_sans = DM_Sans({ subsets: ["latin"] });
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/themes/lara-dark-cyan/theme.css";

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
        <body className={dm_sans.className}>
          <ParticlesBackrgound />

          {/* Navbar */}
          <Navbar />

          {/* content */}
          <div>{children}</div>
        </body>
      </html>
    </PrimeReactProvider>
  );
}
