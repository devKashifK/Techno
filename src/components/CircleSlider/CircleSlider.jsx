import React, { useState, useEffect } from "react";
import {
  IoLogoGoogle,
  IoBrushOutline,
  IoHomeOutline,
  IoVideocamOutline,
  IoSpeedometerOutline,
  IoPhonePortraitOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { slideData } from "../../dataFiles/slidersData";
import "./CircleSlider.css";

export default function MainContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slideData.length;
  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };
  const autoPlay = true;
  let intervalTime = 2450;
  let interval;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function auto() {
    interval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);
  useEffect(() => {
    if (autoPlay) {
      auto();
    }
    return () => clearInterval(interval);
  }, [auto, autoPlay, currentSlide, interval]);

  return (
    <div>
      <div className="circle--slider flex--column">
        <div className="line-long"></div>
        <div className="left-side-line"></div>
        <div className="left-side-short-line"></div>
        <div className="left-side-short-line-two"></div>
        <div className="right-side-circle"></div>
        <div className="triangle"></div>
        <div className="circle-pink"></div>
        <div className="circle-blur"></div>
        <div className="triangleup"></div>
        <h2>Our Service</h2>
        <div className="circle--slider-content">
          <div className="cirlce--slider-sliders">
            <span className="prev" onClick={prevSlide}>
              PREV
            </span>
            <span className="next" onClick={nextSlide}>
              NEXT
            </span>
            {slideData.map((item, index) => {
              return (
                <div
                  className={
                    index === currentSlide
                      ? "sliders slider--active"
                      : "sliders"
                  }
                  key={index}
                >
                  <img className="slider--images" src={item.image} alt="" />
                  <div className="slider--overlay">{item.overlay}</div>
                  <h1 className="slider--heading">{item.heading}</h1>
                </div>
              );
            })}
          </div>
          <div className="circle--slider--icons">
            <div className="iconbox" style={{ transform: "rotate(0deg)" }}>
              <div className="dot">
                <IoLogoGoogle />
              </div>
            </div>
            <div className="iconbox" style={{ transform: "rotate(45deg)" }}>
              <div className="dot">
                <IoHomeOutline />
              </div>
            </div>
            <div className="iconbox" style={{ transform: "rotate(90deg)" }}>
              <div className="dot">
                <IoBrushOutline />
              </div>
            </div>
            <div className="iconbox" style={{ transform: "rotate(0135deg)" }}>
              <div className="dot">
                <IoVideocamOutline />
              </div>
            </div>
            <div className="iconbox" style={{ transform: "rotate(0180deg)" }}>
              <div className="dot">
                <IoSpeedometerOutline />
              </div>
            </div>
            <div className="iconbox" style={{ transform: "rotate(0225deg)" }}>
              <div className="dot">
                <IoPhonePortraitOutline />
              </div>
            </div>
            <div className="iconbox" style={{ transform: "rotate(0270deg)" }}>
              <div className="dot">
                <IoPeopleOutline />
              </div>
            </div>
            <div className="iconbox" style={{ transform: "rotate(0315deg)" }}>
              <div className="dot">
                <IoHomeOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
