import React from 'react'
import { useState, useRef, useEffect } from 'react';
import "../HomepageCss/projectgallery.css"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ProjectsData } from '../dataFiles/projectsdata';

export default function ProjectMenu() {
    const [projects, setProject] = useState(ProjectsData);
    const [currentProject, setCurrentProject] = useState(0);
    const projectWidth = useRef();
    const scroll = useRef();
    const [hover, setHover] = useState(-1);
    const scrollBar = (scrollOffset) => {
        scroll.current.scrollLeft += scrollOffset;
      };
    function filterProject(categoryItem) {
        const update = ProjectsData.filter((category) => {
            return category.category === categoryItem;
        })
        setProject(update);
    }
    function onHover(i) {
        setHover(i)
    }
    function onNone(i) {
        setHover(-1)
    }
    return (
        <section className='project__gallery'>
            <h2>Projects</h2>
            <div className="project__buttons">
                <div className="btn" onClick={() => setProject(ProjectsData)}><h4>All</h4></div>
                <div className="btn" onClick={() => filterProject('web design')}><h4>Web Design</h4></div>
                <div className="btn" onClick={() => filterProject('javascripts')}><h4>Javascript</h4></div>
                <div className="btn" onClick={() => filterProject('games')}><h4>Games</h4></div>
                <button onClick={() => scrollBar(-914)}>CLick me</button>
            </div>
            <div className="project__container" ref={scroll}>
                

                {projects.map((pro, i) => {
                    return (
                        <div className="project__details" key={pro.id}
                            onMouseOver={() => onHover(i)}
                            onMouseLeave={() => onNone(i)} ref={projectWidth}
                            // style={{
                            //     marginLeft: i === 3 ? `-${currentProject * 0}px` : undefined
                            // }}
                            >
                            <img className='project__image' src={pro.image} alt="" />
                            <div className={i === hover ? 'project__details__data project__details__data__active ' : 'project__details__data'}>
                                <p className='project__name'>{pro.projectname}</p>
                                <span className='project__desc'>{pro.description}</span>
                                <div className="navigation__button"> <a href={pro.url}> <HiOutlineArrowNarrowRight /> </a> </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}