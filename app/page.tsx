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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-mainBg text-white">
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
