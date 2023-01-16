import React from 'react'
import "../HomepageCss/boxslider.css"
import { BoxData } from '../dataFiles/boxslider'
import { useState } from "react"
import { useEffect } from 'react';
import { useRef } from 'react';

export default function BoxSlider(){
    const [currentBox , setCurrentBox] = useState(0);
    const [newWidth , setnewWidth] = useState()
    const refWidth =  useRef();
    let time = 3000;
   
    const changeWidth = () => {
         const width = refWidth.current.clientWidth;
         setnewWidth(width + 30)
    }

useEffect (() => {
    changeWidth();
},[changeWidth])
    useEffect (()=>{
    const timer = setTimeout(() => {
        const newBoxIndex = currentBox >= BoxData.length - 1 ? 0 : currentBox +1 ;
        setCurrentBox(newBoxIndex) 
    }, time)
    return () => clearTimeout(timer)
   
    },[currentBox])
 

      return(
        <section className="box-section">
            <div className="box-container">
            
            {BoxData.map((content, i)=> {
                return(
                <div className="boxslider__box" ref={refWidth} key={i} style = {{
                    backgroundImage : `url(${content.image})`,
                    marginLeft : i === 3 ? `-${currentBox * newWidth}px` : undefined,
                    }}>
                    
                    <div className="boxslider__content">
                        <h4>{content.name}</h4>
                    </div>

                </div>
                ) 
            })}
            </div>
        </section>
      )
}
