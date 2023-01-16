import React from "react";
import { FaReact } from "react-icons/fa";
import { SiAltiumdesigner } from "react-icons/si";

export default function AboutSection() {
  return (
    <section className="about--section">
      <div className="big__circle"></div>
      <div className="small__circle"></div>
      <div className="image--container"></div>
      <div className="about--content--container">
        <div className="about--content">
          <h2 className="heading">About Us</h2>
          <p>
            We are a team of professional, energetic individuals with talented
            designers and experienced managers available to guide our clients
            through the flawless and timely execution of any web design project.
            Since day one, we have been delivering creative and unique websites
            to our clients worldwide.
          </p>
          <div className="about--container--iconbox">
            <div className="icon--box">
              <div className="icons--heading">
                <span className="about--icon">
                  <FaReact />{" "}
                </span>
                <h3 className="about--heading">React Library</h3>
              </div>
              <div className="icons--content">
                <p>
                  theFuture is based on Bootstrap Framework, which makes it a
                  nice template for any purpose.
                </p>
              </div>
            </div>
            <div className="icon--box">
              <div className="icons--heading">
                <span className="about--icon">
                  {" "}
                  <SiAltiumdesigner />
                </span>
                <h3 className="about--heading">Clean and Crispy Design</h3>
              </div>
              <div className="icons--content">
                <p>
                  theFuture is based on Bootstrap Framework, which makes it a
                  nice template for any purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
