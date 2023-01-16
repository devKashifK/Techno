import React from 'react';
import CountUp from 'react-countup';
import { FaBattleNet, FaAward, FaAngellist, FaSmile } from "react-icons/fa";
import "../HomepageCss/TotalProject.css"


export default function TotalProject(){
    return(
        <section className='total__project'>
            <div className="total__project__box">
                <span className='total__project__icons'> <FaBattleNet /></span>
                <h3 className='count'><CountUp start={0} end={100} duration={3} /></h3>
                <p className='total__project__description'>Projects Anually</p>
              
            </div>
            <div className="total__project__box">
                <span className='total__project__icons'> <FaAward /></span>
                <h3 className='count'><CountUp start={0} end={45} duration={3} /></h3>
                <p className='total__project__description'>Awards</p>
            </div><div className="total__project__box">
                <span className='total__project__icons'> <FaAngellist/></span>
                <h3 className='count'><CountUp start={0} end={98} duration={3} />%</h3>
                <p className='total__project__description'>Positive Reviews</p>
            </div><div className="total__project__box">
                <span className='total__project__icons'> <FaSmile /></span>
                <h3 className='count'><CountUp start={0} end={100} duration={3} /></h3>
                <p className='total__project__description'>Happy Customers</p>
            </div>
        </section>
    )
}