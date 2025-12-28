import Apparel from "@/components/home/Apparel";
import CustomProcess from "@/components/home/CustomProcess";
import Hero from "@/components/home/hero";
import LogoMarquee from "@/components/home/Marquee";
import Stats from "@/components/home/ContactInfo";
import InfoCards from "@/components/home/InfoCards";


export default function Home() {
  return (
    <>
      <Hero />
      <InfoCards />
      <Stats />
      {/* <LogoMarquee /> */}
      <CustomProcess />
      <Apparel />
    </>
  );
}
