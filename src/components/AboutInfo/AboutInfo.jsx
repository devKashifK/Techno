import React from "react";
import "./aboutinfo.css";
import { BsAward, BsPeopleFill } from "react-icons/bs";

export default function AboutInfo() {
  return (
    <section className="aboutpage__info">
      <div className="aboutpage__aboutus">
        <div className="random"></div>
        <div className="heading">About Us</div>
        <p className="aboutpage__para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
          quaerat rem doloremque harum quam sint necessitatibus eveniet, minus
          ducimus ratione iure dolor sit? Doloremque, dolorum provident! Et eos,
          vero inventore blanditiis soluta dolore rerum suscipit laudantium
          ipsum non animi. Fugiat itaque vero provident vitae nemo molestiae at
          rerum et numquam.
        </p>
        <div className="aboutpage__infobox">
          <div className="aboutpage__infobox__heading">
            <div className="aboutpage__infobox__icon">
              <span className="aboutpage__infobox__icon__icon">
                <BsAward />
              </span>
              <h3> Award Winning Design</h3>
            </div>
            <p className="aboutpage__infobox__desc">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptates sed sequi. Quae illum alias magnam suscipit voluptates
              beatae? Quis.
            </p>
          </div>
          <div className="aboutpage__infobox__heading">
            <div className="aboutpage__infobox__icon">
              <span className="aboutpage__infobox__icon__icon">
                <BsPeopleFill />
              </span>
              <h3> Award Winning Design</h3>
            </div>
            <p className="aboutpage__infobox__desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              quae recusandae excepturi ipsam velit accusantium vitae similique
              optio alias praesentium.
            </p>
          </div>
        </div>
        <div className="progress__bar">
            <div className="cirlce__box"></div>
          <label for="file">Innovative Technologies:</label>
          <progress id="file" value="49" max="100">
            {" "}
            49%{" "}
          </progress>
        </div>
        <div className="progress__bar">
          <label for="file">Flexible and Mobile Optimized:</label>
          <progress id="file" value="29" max="100">
            {" "}
            29%{" "}
          </progress>
        </div>
        <div className="progress__bar">
          <label for="file">Made For People:</label>
          <progress id="file" value="86" max="100">
            {" "}
            86%{" "}
          </progress>
        </div>
      </div>
      <div className="aboutpage__image">
      <div className="aboutpage__image__blob"></div>
      </div>
    </section>
  );
}
