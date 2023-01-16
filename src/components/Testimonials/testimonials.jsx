import React, { useEffect, useRef } from "react";
import { testimonialsData } from "../../dataFiles/testimonials";
import "./testimonails.css";

export default function Testimonials() {
  const testimonailsWidth = useRef();
  const testimonailBox = useRef();
  const autoplay = true;
  let TestimonyInterval;
  const testimonyTimer = 6000;

  const ChangeTestimony = () => {
    const boxWidth = testimonailBox.current.offsetWidth;
    testimonailsWidth.current.scrollLeft += boxWidth + 50;
  };
  function scrollTestimony() {
    if (
      Math.floor(
        testimonailsWidth.current.scrollWidth -
          testimonailsWidth.current.scrollLeft
      ) <= testimonailsWidth.current.offsetWidth
    ) {
      testimonailsWidth.current.scrollLeft = 0;
    }
  }
  function autoplayTestimony() {
    TestimonyInterval = setInterval(ChangeTestimony, testimonyTimer);
  }
  useEffect(() => {
    if (autoplay) {
      autoplayTestimony();
    }
    return () => clearInterval(TestimonyInterval);
  }, [autoplayTestimony]);

  return (
    <section className="testimonials">
      <div className="heading__center">What People Say</div>
      <div
        className="testimonails__box__conatiner"
        ref={testimonailsWidth}
        onScroll={scrollTestimony}
      >
        {testimonialsData.map((item, i) => {
          return (
            <div className="testimonial__box" ref={testimonailBox}>
              <div className="testimonial__image">
                <img src={item.photo} alt="" />
              </div>
              <p className="testimonial__descrip">{item.testimony}</p>
              <p className="testimonial__name">{item.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
