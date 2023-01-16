import React, { useEffect, useState } from "react";
import { heroSlider } from "../../dataFiles/slidersData";
import { Link } from "react-router-dom";

export default function MainHeroSlider() {
  const dots = ["", "", ""];
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const heroSliderLength = heroSlider.length;
  const autoPlayer = true;
  let timeInterval = 5000;
  let heroInterval;

  function nextHeroSlide() {
    setCurrentHeroSlide(
      currentHeroSlide === heroSliderLength - 1 ? 0 : currentHeroSlide + 1
    );
  }

  function autoHeroSLider() {
    heroInterval = setInterval(nextHeroSlide, timeInterval);
  }
  useEffect(() => {
    setCurrentHeroSlide(0);
  }, []);

  useEffect(() => {
    if (autoPlayer) {
      autoHeroSLider();
    }
    return () => clearInterval(heroInterval);
  }, [autoHeroSLider, autoPlayer, heroInterval, currentHeroSlide]);
  return (
    <>
      <div className="hero">
     
        {heroSlider.map((prop, id) => {
          return (
            <div
              className={
                id === currentHeroSlide ? "content content-active" : "content"
              }
              key={id}
            >
              <img src={prop.image} alt="" />
              <div className="hero--overlay">{prop.overlay}</div>
              <div className="content-data">
                <h1>{prop.heading}</h1>
                <h4>{prop.desc}</h4>
                <div className="buttons">
                  <a href="htt">
                    {" "}
                    <button className="primary--button">{prop.button1}</button>
                  </a>
                  <Link to="/contact">
                    <button className="secondary--button">
                      {prop.button2}
                    </button>
                  </Link>
                </div>
                <div className="dots__nav">
                  {dots.map((dot, i) => (
                    <div
                      className={
                        i === currentHeroSlide
                          ? "circle__dotd circle__dotd__active"
                          : "circle__dotd"
                      }
                    >
                      {dot}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
