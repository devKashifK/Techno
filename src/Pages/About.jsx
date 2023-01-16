import React from "react";
import "../HomepageCss/about.css"
import AboutServices from "../components/AboutServices/AboutServices";
import AboutInfo from "../components/AboutInfo/AboutInfo";
import Testimonials from "../components/Testimonials/testimonials";

export default function About() {
  return (
    <section className="about__page">
     <section className="about__Hero">
        <h2 className="heading__center">About Us</h2>
      </section>
    <AboutServices />
    <Testimonials />
    <AboutInfo />
    </section>
  );
}
