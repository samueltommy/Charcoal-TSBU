'use client';

import Header from "@/components/ui/header";
import BackgroundGhost from "@/components/micro/background-ghost";
import Footer from "@/components/micro/footer";
import ProfileCompany from "@/components/micro/profile-company";
import OurTeam from "@/components/Home/team";
import OurCertificate from "@/components/Home/our-certificate";
import VisionMission from "@/components/micro/vision-mission";

export default function About() {
  return (
    <>
      <Header active="about" />
      <BackgroundGhost />
      <ProfileCompany
        text={`
          1. Shisha/Hookah Briquettes: Tailored for the perfect smoking experience.<br/>
          2. Barbecue Briquettes: Ignite the flavor of your grills.<br/>
          3. Hardwood/Lump Charcoal: Pure, robust, and ideal for an authentic barbecue experience.<br/><br/>
          For each of these premium products, we offer bespoke grading and specifications, tailored to your exact needs.
          Additionally, our packaging solutions are fully customizable, ensuring that your requirements are met to perfection.
          Our dedication to quality spans from the selection of raw materials, through the meticulous processes,
          right down to the final packaging, underscoring our commitment to fostering a sustainable business
          and nurturing long-term relationships.
        `}
      />
      <VisionMission
        vision="To be a global leader in the biomass industry, recognized for our innovative and high-quality products that contribute to sustainable energy solutions worldwide."
        mission={`Our mission is to solidify our position as a leading exporter of biomass products by consistently providing superior quality, fostering enduring partnerships, and driving innovation in the biomass sector.\n\nWe aim to enhance global energy practices through sustainable, efficient, and environmentally friendly solutions, ensuring trust and continuity with all our stakeholders.`}
      />
      <OurTeam />
      <OurCertificate />
      <Footer />
    </>
  );
}
