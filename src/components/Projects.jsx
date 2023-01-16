import React, { useState } from "react";
import { faqs } from "../dataFiles/projectsdata";

export default function Projects() {
  
  const [showAnswer, setShowAnswer] = useState(null)
function showData(i){
if (showAnswer === i){
  return setShowAnswer(null) 
}
setShowAnswer(i)
}
  
  return(
    <section className="Projects">
      <h2>FAQs</h2>
        {faqs.map((item, i) =>{
return(
  <div className="projects__box" key={i}> 
  <div className="questionbox">
    <h4>{item.question}</h4>
    <span className="toggle__answer" onClick={() => showData(i)}>	{i === showAnswer ? '-' : '+' }</span>
  </div>
  {i === showAnswer ? <p className="projects__answer">
     {item.answwer} 
  </p>
  : null}
  </div>
)
})}


    </section>
  )
   
  

   
  
  
}
