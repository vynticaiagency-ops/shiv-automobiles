import Hero from "@/components/home/Hero";
import StatsCounter from "@/components/home/StatsCounter";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import EvergreenModels from "@/components/home/EvergreenModels";
import ServicesOverview from "@/components/home/ServicesOverview";
import ServiceAreas from "@/components/home/ServiceAreas";
import Testimonials from "@/components/home/Testimonials";
import QuickInquiry from "@/components/home/QuickInquiry";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <WhyChooseUs />
      <EvergreenModels />
      <ServicesOverview />
      <ServiceAreas />
      <Testimonials />
      <QuickInquiry />
    </>
  );
}
