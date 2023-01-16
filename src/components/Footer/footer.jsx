import React from "react";
import "./footer.css";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoPinterest} from "react-icons/io5";


export default function Footer() {
  return (
    <>
        <section className="footer">
      <div className="footer__container">
        <div className="footer__name">
          <h3 className="footer-heading">About</h3>
          <p className="footer__details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            accusamus mollitia excepturi, minus iusto cupiditate vel quaerat
            odio incidunt ad. Beatae suscipit quibusdam dolores veniam?
            minus iusto cupiditate vel quaeratodio incidunt ad. Beatae suscipit quibusdam dolores veniam?
          </p>
        </div>
        <div className="footer__name">
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer__nav__list">
                <a href="http://"><li>About Us</li></a>
                <a href="http://"><li>Conatct Us</li></a>
                <a href="http://"><li>JavaScript Projects</li></a>
                <a href="http://"><li>Web Designs</li></a>
                <a href="http://"><li>Games Project</li></a>
            </ul>
        </div>
        <div className="footer__name">
            <h3 className="footer-heading">Recent Comments</h3>
            <div className="comments">
                <span className="comment__name">Biily Ruse</span>
                <p className="comment__des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ipsam?</p>
            </div>
            <div className="comments">
                <span className="comment__name">Biily Ruse</span>
                <p className="comment__des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ipsam?</p>
            </div>
            <div className="comments">
                <span className="comment__name">Biily Ruse</span>
                <p className="comment__des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ipsam?</p>
            </div>
        </div>
        <div className="footer__name">
            <h3 className="footer-heading">Contact</h3>
            <li  className="contact__details">Address: <strong> Near A.R Palace Gaya - Nagamtia Road, Bihar - 823001 </strong></li>
            <li className="contact__details">Phones: <strong> 9852365726 , 9065041331</strong></li>
            <li className="contact__details">E-mail:<strong> technobhaiya@gmail.com</strong></li>
            <li className="contact__details">We are open:  <strong>Mn-Fr :10 am-8 pm</strong></li>
        </div>
      </div>
     
    </section>
     <div className="footer__bar">
     <p className="madeby">TechnoBhaiya &copy; 2022. All Rights Reserved. Terms of Use and Privacy Policy</p>
     <ul className='socialIcons__footer'>
                   <li><a href="http"><IoLogoFacebook/></a></li>
                   <li><a href="http"><IoLogoInstagram/></a></li>
                   <li><a href="http"><IoLogoTwitter/></a></li>
                   <li><a href="http"><IoLogoPinterest/></a></li>
               </ul>
   </div>
   </>
  );
}
