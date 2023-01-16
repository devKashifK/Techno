import React from "react";
import "./aboutservices.css";

import { Services } from "../../dataFiles/services";

export default function AboutServices() {
  return (
    <section className="about__services">
      <div className="about__heading">
        <h2 className="heading__center__dark">Our Service</h2>
        <p className="about__details__desc">
          Our company offers flexible & reliable website templates as well as
          extensive customer support so you don’t have to worry about hiring an
          expensive web design company. We build all types of web templates and
          all of them can be used as a basis for your website.
        </p>
      </div>
      <section className="icons-info">
        {Services.map((item) => {
          return (
            <div className="about__icon__box">
              <div className="about__icon">{item.icon}</div>
              <div className="icon__info">
                <h3 className="icons__info__heading">{item.name}</h3>
                <p className="icons__info__desc">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
