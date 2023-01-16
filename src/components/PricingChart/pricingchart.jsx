import React from "react";
import "./pricing.css";
import "../CircleSlider/CircleSlider.css"

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="line-long"></div>
      <div className="left-side-line"></div>
      <div className="left-side-short-line"></div>
      <div className="left-side-short-line-two"></div>
      <div className="right-side-circle"></div>
      <div className="triangle"></div>
      <div className="circle-pink"></div>
      <div className="circle-blur"></div>
      <div className="triangleup"></div>
      <h2>Pricing Chart</h2>
      <div className="pricing__container">
        <div className="pricingbox">
          <h3 className="package__name">Available Options</h3>
          <ul className="services">
            <li className="services-list">Emails</li>
            <li className="services-list">SEO</li>
            <li className="services-list">Pages</li>
          </ul>
        </div>
        <div className="pricingbox">
          <div className="pricing--details">
            <h3 className="package__name">Standard</h3>
            <div className="price">
              <strong>7000</strong>/website
            </div>
          </div>
          <ul className="services">
            <li className="services-list">10 Professionl E-mails</li>
            <li className="services-list">SEO Optimized</li>
            <li className="services-list">2 Pages</li>
          </ul>
          <button className="primaray--button">Buy Now</button>
        </div>
        <div className="pricingbox">
          <div className="pricing--details">
            <h3 className="package__name">Bussiness</h3>
            <div className="price">
              <strong>9000</strong>/website
            </div>
          </div>
          <ul className="services">
            <li className="services-list">20 Professionl E-mails</li>
            <li className="services-list">SEO Optimized</li>
            <li className="services-list">5 Pages</li>
          </ul>
          <button className="primaray--button">Buy Now</button>
        </div>
        <div className="pricingbox">
          <div className="pricing--details">
            <h3 className="package__name">Professional</h3>

            <div className="price">
              <strong>7000</strong>/website
            </div>
          </div>
          <ul className="services">
            <li className="services-list">Unlimited Professionl E-mails</li>
            <li className="services-list">SEO Optimized</li>
            <li className="services-list">Unlimited Pages</li>
          </ul>
          <button className="primaray--button">Buy Now</button>
        </div>
      </div>
    </section>
  );
}
