import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoPinterest,
} from "react-icons/io5";
import "../HomepageCss/contact.css";

export default function Contact() {
  return (
    <>
      <section className="contact__Hero">
        <h2 className="heading__center">Contacts</h2>
      </section>
      <section className="contact__detailss">
        <div className="contact__details__details">
          <h2 className="heading__middle">Contact Details</h2>
          <span className="details">
            {" "}
            <strong>Address: </strong> Near A.R Palace, Nagamtia Road Gaya,
            Bihar-823001
          </span>
          <span className="details">
            {" "}
            <strong>Phones: </strong> 9852365726 , 9065041331
          </span>
          <span className="details">
            {" "}
            <strong>We Are Open: </strong> Mn-Fr: 10am-8pm{" "}
          </span>
          <ul className="socialIcons__contact">
            <li>
              <a href="http:/">
                <IoLogoFacebook />
              </a>
            </li>
            <li>
              <a href="http:/">
                <IoLogoInstagram />
              </a>
            </li>
            <li>
              <a href="http:/">
                <IoLogoTwitter />
              </a>
            </li>
            <li>
              <a href="http:/">
                <IoLogoPinterest />
              </a>
            </li>
          </ul>
        </div>
        <div className="contact__form">
          <h2 className="heading__middle">Get In Touch</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your E-Mail" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="05"
            placeholder="Your Message"
          ></textarea>
          <button className="primary--button">Submit</button>
        </div>
      </section>
  

    </>
  );
}
