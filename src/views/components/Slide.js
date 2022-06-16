import React from 'react'
import TextCard from './TextCard'
import stile from "./style/slider.module.css"

function Slide({image, text, title, visible}) {
  return (
    <div className={visible===true ? stile.slideSelected : stile.slide}>
     <img className={stile.image} src={image} alt="slider"/>

     <section className={stile.sectionText}>
    <TextCard title={title} text={text}/>
     </section>
   </div>
  )
}

export default Slide