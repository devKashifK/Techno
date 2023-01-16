import React from "react";
import MainContent from "../components/CircleSlider/CircleSlider";
import MainHeroSlider from "../components/HeroSlider/MainHeroSlider";
import AboutSection from "../components/AboutSection/AboutSection";
import TotalProject from "../components/totalprojects";
import Teams from "../components/Teams/tems";
import ProjectGalleryHorizontal from "../components/Projects/horizontalSlider";
import Testimonials from "../components/Testimonials/testimonials";
import Pricing from "../components/PricingChart/pricingchart";

export default function Homepage() {
  return (
    <React.StrictMode>
      <div>
        <MainHeroSlider />
        <MainContent />
        <AboutSection />
        <ProjectGalleryHorizontal />
        <TotalProject />
        <Teams />
        <Testimonials />
        <Pricing />
      </div>
    </React.StrictMode>
  );
}
