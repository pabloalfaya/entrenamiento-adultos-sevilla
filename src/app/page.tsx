import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import Center from "@/components/sections/Center";
import Method from "@/components/sections/Method";
import Programs from "@/components/sections/Programs";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <WhyUs />
      <Center />
      <Method />
      <Programs />
      <Pricing />
      <Testimonials />
      <Location />
      <FAQ />
      <FinalCTA />
    </>
  );
}
