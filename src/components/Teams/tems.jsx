import React from "react";
import "./teams.css"
import { TeamsData } from "../../dataFiles/teamsData";
import {IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoPinterest,} from "react-icons/io5";
import { useState } from "react";

export default function Teams(){
    const [teamActive , setTeamActive] = useState(-1)
    function showTeam(i){
        setTeamActive(i)
    }
    function hideTeam(i){
        setTeamActive(-1)
    }
    return(
        <section className="teams">
            <div className="teams__circle"></div>
                <div className="teams__square"></div>
            <h2>Our Team</h2>
            <div className="teams__container">
                {TeamsData.map((team, i)=> {
                    return(
                        <div className="teams__box" onMouseOver={() => showTeam(i)} onMouseLeave={() => hideTeam(i)}>
                        <img className="team__member__image" src={team.image} alt="" />
                        <h4 className="teams__member__name">{team.name}</h4>
                        <p className="team__member__desgination">{team.position}</p>
                        <div className={i === teamActive ? "social__links social__links__active" : "social__links"}>
                            <a href={team.facebook}> <IoLogoFacebook /></a>
                            <a href= {team.instagram}> <IoLogoInstagram /></a>
                            <a href={team.twitter}> <IoLogoTwitter /></a>
                            <a href={team.pintrest}> <IoLogoPinterest /></a>
                            
                        </div>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}   