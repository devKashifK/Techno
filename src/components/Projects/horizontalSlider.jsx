import React, { useState, useRef, useEffect } from "react";
import { ProjectsData } from "../../dataFiles/projectsdata";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./horizontal.css";

export default function ProjectGalleryHorizontal() {
  const [Projects, setProjects] = useState(ProjectsData);
  const [hover, setHover] = useState(-1);
  const scroll = useRef();
  const ProjectDataWidth = useRef();
  let scrollInterval;
  let time = 2000;
  const autoPlayer = true;

  const scrollBar = () => {
    scroll.current.scrollLeft += 456;
  };
  const scrollChange = () => {
    if (
      Math.floor(scroll.current.scrollWidth - scroll.current.scrollLeft) <=
      scroll.current.offsetWidth
    ) {
      scroll.current.scrollLeft = 0;
    }
  };
  //   const scrollBarLeft = () => {
  //     scroll.current.scrollLeft += -456;
  //   }; becoz i dont want buttons, so i don't need this

  function filterData(category) {
    const updatedItems = ProjectsData.filter((categ) => {
      return categ.category === category;
    });
    setProjects(updatedItems);
  }

  function OnHover(i) {
    setHover(i);
  }

  function OnNone(i) {
    setHover(-1);
  }

  function autoScroll() {
    scrollInterval = setInterval(scrollBar, time);
  }

  useEffect(() => {
    if (autoPlayer) {
      autoScroll();
    }
    return () => clearInterval(scrollInterval);
  }, [autoScroll, time]);
  return (
    <div className="project__gallery">
      {/* <div className="navigation__button__left"
        //   onClick={() => scrollBarLeft()}   I have switched off the buttons
          >
            <HiArrowLeft /></div> */}
      {/* <div className="navigation__button__right" 
        onClick={() => scrollBar()}   I have switched off the buttons
        >
            <HiArrowRight /></div> */}

      <div className="project__buttons">
        <div className="btn" onClick={() => setProjects(ProjectsData)}>
          <h4>All</h4>
        </div>
        <div className="btn" onClick={() => filterData("web design")}>
          <h4>Web Design</h4>
        </div>
        <div className="btn" onClick={() => filterData("games")}>
          <h4>Games</h4>
        </div>
      </div>
      <div className="project__containerr" ref={scroll} onScroll={scrollChange}>
        {Projects.map((pro, i) => {
          return (
            <div
              className="project__details"
              key={pro.id}
              style={{ backgroundImage: `url(${pro.image})` }}
              onMouseEnter={() => OnHover(i)}
              onMouseLeave={() => OnNone(i)}
              ref={ProjectDataWidth}
            >
              <img className="project__image" alt="" />
              <div
                className={
                  i === hover
                    ? "project__details__data project__details__data__active"
                    : "project__details__data"
                }
              >
                <p className="project__name">{pro.projectname}</p>
                <span className="project__desc">{pro.description}</span>
                <div className="navigation__button">
                  {" "}
                  <a href={pro.url}>
                    {" "}
                    <HiOutlineArrowNarrowRight />{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
