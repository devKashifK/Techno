/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  IoSearchSharp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLocation,
  IoCallOutline,
  IoMenu,
  IoClose,
  IoEllipsisVertical,
} from "react-icons/io5";
import "./header.css";
import "../../HomepageCss/mobile.css";

export default function Header() {
  const [toggles, setToggle] = useState(false);
  const [topbar, setTopbar] = useState(false);
  function showMenu() {
    setToggle((toggles) => !toggles);
  }
  function showTopbar() {
    setTopbar((topbar) => !topbar);
  }
  let topbarActive = topbar ? " topbar-active" : "";
  let menuActive = toggles ? " menu-active" : "";
  return (
    <div>
      <div className={`topbar${topbarActive}`}>
        <div className="info">
          <span className="info-span">
            <IoLocation />{" "}
            <a href="#">
              {" "}
              <p>Address: Nagmatia Road, Gaya-Bihar 823001</p>{" "}
            </a>
          </span>
          <span className="info-span">
            <IoCallOutline />{" "}
            <a href="#">
              {" "}
              <p>+919852365726 , +919065041331</p>{" "}
            </a>
          </span>
        </div>
        <ul className="socialIcons">
          <li>
            <a href="https://www.facebook.com/">
              <IoLogoFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <IoLogoInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <IoLogoTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <IoLogoPinterest />
            </a>
          </li>
        </ul>
      </div>
      <nav className="menu">
        <div className="logo">
          <div className="toggle">
            <div className="btns" onClick={showMenu}>
              <span className="open">
                <IoMenu />
              </span>
              <span className="close">
                <IoClose />
              </span>
            </div>
            <h3>
              Techno <strong>Bhaiya</strong>
            </h3>
          </div>
          <span className="info-bar" onClick={showTopbar}>
            <IoEllipsisVertical />
          </span>
        </div>
        <div className={`menu-items${menuActive}`}>
          <ul className="menu-list">
            <li className="list">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="list">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="list">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="list">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li className="list">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="list">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                to="/Blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="list">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                to="/random"
              >
                Random
              </NavLink>
            </li>
          </ul>
          <div className="serachbar">
            <input
              className="search--bar"
              type="text"
              placeholder="Enter Keywords"
            />
            <p className="search--icon">
              <IoSearchSharp />
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
