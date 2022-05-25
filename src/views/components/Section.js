import React from 'react'
import style from "./style/section.module.css"

function Section({img, title, text, reverse}) {
  return (
    <div className={reverse=== true ? style.sectionReverse: style.section} >
     <img src={img} alt="happiness"/>
     <section className={style.sectionBox}>
          <h2 className={style.title}>
               {title}
          </h2>

          <span className={style.text}>

          {text}
          </span>

          


     </section>
         

    </div>
  )
}

export default Section


          // <span className={style.sectionTxt}>
          //   {text}
          // </span>
