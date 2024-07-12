import {
  AboutSvsCoin,
  BuyAndSellSvsSection,
  FooterSection,
  Form,
  GetStartedSection,
  Header,
  Map,
  NewsSection,
  OurTeamSection,
  ParticlesBackrgound,
  PartnersAndSuporters,
  RoadMap,
  SecureComponent,
  SubscribeSection,
  TheSvsCoin,
  TokenSVSSection,
  VideoSection,
  WhitePaperSection,
  WhyChooseUs,
} from "@/components";
import SEO from "@/components/SEO";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SVS ",
  description: "SVS coin",
  icons: ["/assets/images/logo.png"],
  keywords: ["SVS", "coin", "blockchain"],
  openGraph: {
    url: "https://svscoin.org/",
    title: "SVS",
    description: "SVS coin",
    images: ["https://svscoin.org/assets/images/logo-share.jpg"],
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-mainBg text-white overflow-hidden">
      {/* <SEO
        url="https://svs-v1.vercel.app"
        title={"SVS"}
        image="https://svs-v1.vercel.app/assets/images/logo-share.jpg"
        description="SVS coin"
      /> */}
      <Header />
      <SecureComponent />
      <GetStartedSection />
      <BuyAndSellSvsSection />
      <AboutSvsCoin />
      <WhyChooseUs />
      <VideoSection />
      <TheSvsCoin />
      <RoadMap />
      <WhitePaperSection />
      <OurTeamSection />
      <PartnersAndSuporters />
      <NewsSection />
      <SubscribeSection />
      <TokenSVSSection />
      <Form />
      <Map />
      <FooterSection />
    </main>
  );
}
