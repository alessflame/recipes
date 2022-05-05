import React from 'react'
import TextCard from './TextCard'
import stile from "./style/slider.module.css"

function Slide({image, text, title}) {
  return (
    <div className={stile.slide}>
     <img className={stile.image} src={image} alt="slider"/>
    <TextCard title={title} text={text}/>
   </div>
  )
}

export default Slide