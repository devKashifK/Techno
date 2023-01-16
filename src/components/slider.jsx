import React from 'react';
import '../HomepageCss/slider.css';
import { BoxData } from '../dataFiles/boxslider';
import { useState, useRef } from 'react';
import { useEffect } from 'react';

export default function Slider(){
    const [currentImage , setCurrentIamge] = useState(0);
    const sliderRef = useRef();
    const sliderWidth = useRef();
    const time = 3000;
    let imageInterval;
    const autoplay = true;
   
    function nextImage(slideIndex = currentImage +1, i){
        const slideWidth = sliderWidth.current.offsetWidth;
       const updateImage =  slideIndex >= BoxData.length ? 0 : slideIndex;
        setCurrentIamge(updateImage);
        sliderRef.current.scrollLeft += slideWidth;
        console.log(slideIndex.offsetWidth)
        if(slideIndex === BoxData.length){
            sliderRef.current.scrollLeft = 0;
        }
    }
    function autoNextImage(){
        imageInterval = setInterval(nextImage , time)
    }
    useEffect(() => {
        if(autoplay){
            autoNextImage();
        }
        return ()=> clearInterval(imageInterval)
    },[ autoNextImage])

    // const scrollChange = () => {
    //     if(Math.floor(sliderRef.current.scrollWidth - sliderRef.current.scrollLeft) <=
    //     sliderRef.current.offsetWidth )
    //     {
    //     sliderRef.current.scrollLeft = 0 ;
    //     }
    
    //   }
    
    return(
        <section className='slider__container' ref={sliderRef} >
         <div className="button__left">Click me Left</div>
{BoxData.map((item, i) =>{
    return(
    <div className={i === currentImage ? 'slider__box slider__box__active' : 'slider__box'}  ref={sliderWidth}
    style={{backgroundImage : `url(${item.image})`, backgroundSize: "cover" }}>
        {item.name}
    </div>
    )
})}
<div className="button__right" onClick={() => nextImage()}>Click Me Right</div>
        </section>
    )
}
