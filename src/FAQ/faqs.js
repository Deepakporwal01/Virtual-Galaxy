import React from 'react'
import "./faqs.css"
import { useState } from 'react'
import {  GoChevronUp,GoChevronDown } from "react-icons/go";

const Subfaqs =({question , ans})=>{
  const [open , setOpen] = useState(false);
 return(<>
  <div className='Faqs'> <div className='h-font'>{question}</div>
 
 <button  className='faq-btn' onClick={()=>setOpen(pre => !pre)}> {!open? <GoChevronDown   style={{background:'black', color:'white',padding:'0px', height:'30px',width:'30px'}}/>: <GoChevronUp  style={{background:'black', color:'white',padding:'0px', height:'30px',width:'30px'}}  />}</button> 

 </div>

 {open&&<p className='p-font' style={{width:"80%"}}>  <br/> {ans}
 </p>}
 <br/>
 <div className='line'></div>
 <br/>
 </>)
}

export default function FAQS() {
   const data = [
    {
      question: "What is a black hole ?",
      answer: "A black hole is an area in space with incredibly strong gravity that nothing, not even light, can escape from."
    },
    {
      question: "What causes the Northern Lights ?",
      answer: "The Northern Lights, or Aurora Borealis, are caused by charged particles from the sun colliding with Earth's atmosphere, creating beautiful light displays."
    },
    {
      question: "Is there life on other planets ?",
      answer: "The search for extraterrestrial life continues, but there is no definitive evidence yet. Scientists explore Mars and moons for potential habitability."
    },
    {
      question: "What is a supernova ?",
      answer: "A supernova is an explosive event that occurs when a massive star reaches the end of its life cycle, releasing an enormous amount of energy."
    },
    {
      question: "How do astronauts eat and drink in space ?",
      answer: "Astronauts eat specially prepared and packaged food. They drink liquids from pouches with straws to prevent spills in microgravity."
    },
    {
      question: "What are the hottest and coldest planets in our solar system ?",
      answer: "Venus is the hottest planet, with surface temperatures around 900 degrees Fahrenheit (475 degrees Celsius), while Neptune is the coldest, with temperatures as low as -330 degrees Fahrenheit (-200 degrees Celsius)."
    },
    {
      question: "What is the Hubble Space Telescope used for ?",
      answer: "The Hubble Space Telescope is used to observe distant galaxies, stars, and planets, providing valuable data for astronomers and space researchers."
    },
    {
      question: "How are planets formed ?",
      answer: "Planets form from gas and dust particles in a rotating disk around a young star, gradually accreting and growing over millions of years."
    },
    {
      question: "Can humans survive in space without a spacesuit ?",
      answer: "No, humans cannot survive in the vacuum of space without a spacesuit, as they need protection from extreme temperatures and lack of air."
    },
    {
      question: "What is the Sun's temperature ?",
      answer: "The Sun's core temperature is about 15 million degrees Celsius (27 million degrees Fahrenheit), while its surface temperature is around 5,500 degrees Celsius (9,932 degrees Fahrenheit)."
    },
    {
      question: "What is solar wind ?",
      answer: "Solar wind is a stream of charged particles (mainly electrons and protons) that emanate from the Sun's outer layer and flow through the solar system. It can affect Earth's magnetic field and cause phenomena like the auroras."
    },
    {
      question: "How long will the Sun's fusion process last ?",
      answer: "The Sun has been shining for about 4.6 billion years and is expected to continue its fusion process for another 5 billion years before eventually evolving into a red giant and then a white dwarf."
    },
    {
      question: "How old is the universe ?",
      answer: "According to the estimates the universe is 13.7 billion years old with an uncertainty of 200 million years."
    },
    {
      question: "What is a dwarf planet? ?",
      answer: "A dwarf planet is a celestial body that orbits the Sun and has sufficient mass to assume a nearly round shape, but has not cleared its orbit of other debris."
    }
  ]
  
    
 


  return (
    <div className='main-faq'>

      <h1 style={{color:'white',textAlign:'center',  }}>FAQ<sup>'</sup>s</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      
      {/* faq question 1 */}
 
  {/* faq question 2 */}
 
   {data.map((e, id)=>{
    return <Subfaqs key={id} question={e.question} ans={e.answer} />
   })}
    </div>
  )
}
